const mathTokens = [
  String.raw`(?<![\\$])\$\$(?<dollarBlock>[\s\S]*?)\$\$`,
  String.raw`(?<!\\)(?<bracketSlashes>\\{1,2})\[(?<bracketBlock>[\s\S]*?)(?<!\\)\k<bracketSlashes>\]`,
  String.raw`(?<!\\)(?<parenSlashes>\\{1,2})\((?<parenMath>[\s\S]*?)(?<!\\)\k<parenSlashes>\)`,
  String.raw`(?<![\\$])\$(?!\$)(?<dollarMath>(?:\\[^\n]|[^\\$\n])+?)\$(?![\d$])`,
  String.raw`(?<!\\)(?<environment>\\begin\{(?<name>(?:align|alignat|equation|gather)\*?|aligned|alignedat|gathered|split|cases|CD)\}[\s\S]*?\\end\{\k<name>\})`,
];
const codeToken = String.raw`(?<!\x60)(?<ticks>\x60+)(?!\x60)(?<inlineCode>[^\n]+?)(?<!\x60)\k<ticks>(?!\x60)`;
const opaqueTokens = [...mathTokens, codeToken, String.raw`(?<escapedPipe>\\\|)`].join('|');
const inlineTokens = new RegExp(opaqueTokens + String.raw`|\*\*[^*\n]+\*\*|\*[^*\n]+\*`, 'g');
const rowTokens = new RegExp(opaqueTokens + String.raw`|\|`, 'g');
const blockTokens = new RegExp(String.raw`^[ \t]*(?<fence>(?<fenceChar>\x60|~)\k<fenceChar>{2,})(?!\k<fenceChar>)[^\n]*(?:\n|$)(?<code>[\s\S]*?)(?:^[ \t]*\k<fence>\k<fenceChar>*[ \t]*(?=\n|$)|(?![\s\S]))|`
  + opaqueTokens + '|\n', 'gm');
const bulletMarker = /^\s*([-*+]|\d+[.)])\s+/;
const headingMarker = /^#{1,6}\s+/;
const tableDivider = /^(?:[|:\s\p{Pd}−]|\\\|)+$/u;
const tableRule = /^:?\s*[\p{Pd}−]+\s*:?$/u;

// Keep newlines inside TeX and code out of Markdown block detection.
function* replyLines(text) {
  let start = 0;
  for (const match of text.matchAll(blockTokens)) {
    if (match.groups.fence) {
      yield { code: match.groups.code.replace(/\n$/, '') };
    } else if (match[0] === '\n') {
      yield { line: text.slice(start, match.index) };
    } else {
      continue;
    }
    start = match.index + match[0].length;
  }
  if (start < text.length) yield { line: text.slice(start) };
}

function limitContext(markdown) {
  const limit = 12000;
  if (markdown.length <= limit) return markdown;
  let lastLine = 0;
  for (const token of markdown.matchAll(blockTokens)) {
    if (token.index > limit) break;
    if (token[0] === '\n') lastLine = token.index;
  }
  // Use a complete Markdown line when possible, including a complete table row.
  return markdown.slice(0, lastLine || limit).trimEnd();
}

function tableCells(line, escapedDelimiters = false) {
  if (!line?.includes('|') || bulletMarker.test(line) || headingMarker.test(line) || /^\s*>/.test(line)) return null;
  const cells = [];
  let start = 0;
  for (const match of line.matchAll(rowTokens)) {
    if (match[0] !== '|' && !(escapedDelimiters && match.groups.escapedPipe)) continue;
    cells.push(line.slice(start, match.index).trim());
    start = match.index + match[0].length;
  }
  if (!cells.length) return null;
  cells.push(line.slice(start).trim());
  if (cells[0] === '') cells.shift();
  if (cells.at(-1) === '') cells.pop();
  return cells.length ? cells : null;
}

export default function initNotesTutor(root, data, environment = globalThis, importMath = (url) => import(url)) {
  const { window, document, fetch, AbortController, setTimeout, clearTimeout } = environment;
  const article = document.querySelector('.article-style');
  if (!root || !article) throw new Error('Missing tutor markup');

  const strings = data.strings;
  const find = (selector) => root.querySelector(selector);
  const toggle = find('.notes-tutor-toggle');
  const panel = find('.notes-tutor-panel');
  const question = find('textarea');
  const send = find('.notes-tutor-send');
  const status = find('.notes-tutor-status');
  const log = find('.notes-tutor-messages');
  const reset = find('.notes-tutor-reset');
  const selectionQuote = find('.notes-tutor-selection');
  const clearSelection = find('.notes-tutor-clear-selection');
  const sectionLabel = find('.notes-tutor-section');
  const pin = find('.notes-tutor-pin');
  const selectionDetails = find('.notes-tutor-selection-details');
  const scrollBody = find('.notes-tutor-body');
  const suggestions = Array.from(root.querySelectorAll('[data-tutor-suggestion]'));
  const mobileToc = document.querySelector('.article-mobile-toc');
  const mobile = window.matchMedia('(max-width: 1199.98px)');
  const endpoint = data.endpoint;
  let selectedText = '';
  let history = [];
  let controller = null;
  let generation = 0;
  let section = null;
  let contextFrame = null;
  let pinnedSection = null;
  let selectedSection = null;
  let katexModule;
  let mhchemModule;

  function headingSource(heading) {
    const selector = 'math annotation[encoding="application/x-tex"]';
    if (!heading.querySelector(selector)) return heading.textContent.trim();
    const copy = heading.cloneNode(true);
    for (const tex of copy.querySelectorAll(selector)) {
      tex.closest('math').replaceWith(`$${tex.textContent}$`);
    }
    return copy.textContent.trim();
  }

  const introduction = { title: data.title, index: 0, level: 1, path: [data.title] };
  const headings = new Map(Array.from(article.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]'),
    (heading) => [heading.id, heading]));
  const ancestors = [];
  const sections = data.sections.flatMap(({ id, level }, index) => {
    const heading = headings.get(id);
    if (!heading) return [];
    const title = headingSource(heading);
    while (ancestors.length && ancestors[ancestors.length - 1].level >= level) ancestors.pop();
    const path = [data.title, ...ancestors.map((item) => item.title), title].filter((item, index, items) => item !== items[index - 1]);
    ancestors.push({ title, level });
    return [{ heading, title, index, level, path }];
  });
  const firstSection = data.sections[0].markdown ? introduction : sections[0] || introduction;

  function currentSection() {
    let current = firstSection;
    for (const item of sections) {
      if (item.heading.getClientRects().length && item.heading.getBoundingClientRect().top <= 180) current = item;
    }
    return current;
  }

  function updateContext() {
    section = selectedSection || pinnedSection || currentSection();
    sectionLabel.textContent = section.path.join(' → ');
    if (selectionQuote.textContent !== selectedText) selectionQuote.textContent = selectedText;
    selectionDetails.hidden = !selectedText;
    clearSelection.hidden = !selectedText;
    pin.textContent = pinnedSection ? strings.unpin : strings.pin;
    pin.setAttribute('aria-pressed', String(Boolean(pinnedSection)));
  }

  function captureRange(range, text) {
    if (!article.contains(range.commonAncestorContainer)) return;
    text = text.trim().slice(0, 4000);
    if (!text || text === selectedText) return;
    selectedText = text;
    selectedSection = firstSection;
    for (const item of sections) {
      if (item.heading.contains(range.startContainer) || (item.heading.compareDocumentPosition(range.startContainer) & 4)) selectedSection = item;
    }
    selectionDetails.open = false;
    updateContext();
  }

  function captureSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    captureRange(range, selection.toString());
  }

  function scheduleContextUpdate() {
    if (panel.hidden || contextFrame !== null) return;
    contextFrame = window.requestAnimationFrame(() => {
      contextFrame = null;
      if (!panel.hidden) updateContext();
    });
  }

  function setOpen(open, savedSelection) {
    if (open) {
      if (savedSelection) captureRange(savedSelection.range, savedSelection.text);
      else captureSelection();
    }
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      if (mobileToc) mobileToc.open = false;
      updateContext();
      (mobile.matches ? find('.notes-tutor-close') : question).focus({ preventScroll: true });
    } else {
      question.blur();
      toggle.focus({ preventScroll: true });
    }
  }

  async function renderFormula(node, source, displayMode) {
    if (!root.dataset.katexUrl) return;
    const fallback = node.textContent;
    const needsChemistry = /\\(?:ce|pu)\b/.test(source);
    try {
      katexModule ??= importMath(root.dataset.katexUrl).catch((error) => {
        katexModule = null;
        throw error;
      });
      if (needsChemistry && root.dataset.mhchemUrl) {
        mhchemModule ??= importMath(root.dataset.mhchemUrl).catch((error) => {
          mhchemModule = null;
          throw error;
        });
      }
      const [{ default: katex }] = await Promise.all([katexModule, needsChemistry ? mhchemModule : null]);
      if (!node.isConnected) return;
      katex.render(source, node, {
        displayMode, output: 'mathml', trust: false, strict: 'ignore',
        maxSize: 20, maxExpand: 500,
      });
      for (const accent of node.querySelectorAll('mover[accent="true"] > mo:last-child')) {
        if (accent.textContent !== '\u20d7') continue;
        accent.textContent = '→';
        accent.setAttribute('stretchy', 'false');
        accent.setAttribute('lspace', '0');
        accent.setAttribute('rspace', '0');
        accent.style.fontSize = '.68em';
      }
    } catch {
      node.textContent = fallback;
    }
  }

  // Build a small Markdown subset with DOM nodes; model output is never HTML.
  function appendInline(parent, text, renderMath) {
    let start = 0;
    for (const match of text.matchAll(inlineTokens)) {
      parent.append(document.createTextNode(text.slice(start, match.index)));
      const token = match[0];
      const { inlineCode, escapedPipe, dollarBlock, bracketBlock, environment, parenMath, dollarMath } = match.groups;
      const display = dollarBlock ?? bracketBlock ?? environment;
      let node;
      if (token.startsWith('**')) {
        node = document.createElement('strong');
        appendInline(node, token.slice(2, -2), renderMath);
      } else if (token.startsWith('*')) {
        node = document.createElement('em');
        appendInline(node, token.slice(1, -1), renderMath);
      } else if (inlineCode !== undefined) {
        node = document.createElement('code');
        node.textContent = inlineCode;
      } else if (escapedPipe) {
        node = document.createTextNode('|');
      } else {
        node = document.createElement('span');
        node.textContent = token;
        const displayMode = display !== undefined;
        if (displayMode) node.className = 'notes-tutor-display-math';
        const source = (display ?? parenMath ?? dollarMath).trim();
        if (renderMath && source) renderFormula(node, source, displayMode);
      }
      parent.append(node);
      start = match.index + token.length;
    }
    parent.append(document.createTextNode(text.slice(start)));
  }

  function appendTable(parent, header, separators, rows, renderMath) {
    const wrapper = document.createElement('div');
    wrapper.className = 'notes-tutor-table';
    wrapper.setAttribute('tabindex', '0');
    const table = document.createElement('table');
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    const alignments = header.map((_, column) => {
      const separator = separators[column] || '';
      if (separator.endsWith(':')) return separator.startsWith(':') ? 'center' : 'right';
      return 'left';
    });
    const appendRow = (section, values, tag) => {
      const row = document.createElement('tr');
      for (let column = 0; column < header.length; column += 1) {
        const cell = document.createElement(tag);
        if (tag === 'th') cell.setAttribute('scope', 'col');
        cell.setAttribute('data-align', alignments[column]);
        const value = column === header.length - 1 && values.length > header.length
          ? values.slice(column).join(' | ') : values[column] ?? '';
        appendInline(cell, value, renderMath);
        row.append(cell);
      }
      section.append(row);
    };
    appendRow(head, header, 'th');
    for (const row of rows) appendRow(body, row, 'td');
    table.append(head, body);
    wrapper.append(table);
    parent.append(wrapper);
  }

  function formatReply(parent, text, renderMath) {
    let paragraph = [];
    let list = null;
    const flush = () => {
      if (!paragraph.length) return;
      const p = document.createElement('p');
      appendInline(p, paragraph.join('\n'), renderMath);
      parent.append(p);
      paragraph = [];
    };
    const lines = [...replyLines(text.replace(/\r\n?/g, '\n'))];
    for (let index = 0; index < lines.length; index += 1) {
      const { line, code } = lines[index];
      if (code !== undefined) {
        flush(); list = null;
        const pre = document.createElement('pre');
        const content = document.createElement('code');
        content.textContent = code;
        pre.append(content);
        parent.append(pre);
        continue;
      }
      if (!line.trim()) { flush(); list = null; continue; }
      const nextLine = lines[index + 1]?.line;
      const escapedDelimiters = nextLine?.includes('\\|');
      const separators = tableDivider.test(nextLine) ? tableCells(nextLine, escapedDelimiters) : null;
      const header = separators?.every((cell) => tableRule.test(cell)) && tableCells(line, escapedDelimiters);
      // A complete data row can confirm the column count when the model writes a short divider.
      if (header && (header.length === separators.length
        || header.length === tableCells(lines[index + 2]?.line, escapedDelimiters)?.length)) {
        flush(); list = null;
        index += 1;
        const rows = [];
        let cells;
        while ((cells = tableCells(lines[index + 1]?.line, escapedDelimiters))) {
          rows.push(cells);
          index += 1;
        }
        appendTable(parent, header, separators, rows, renderMath);
        continue;
      }
      const bullet = line.match(bulletMarker);
      if (bullet && line.length > bullet[0].length) {
        flush();
        const tag = /^\d/.test(bullet[1]) ? 'ol' : 'ul';
        if (!list || list.tagName.toLowerCase() !== tag) {
          list = document.createElement(tag);
          if (tag === 'ol') list.setAttribute('start', String(parseInt(bullet[1], 10)));
          parent.append(list);
        }
        const item = document.createElement('li');
        appendInline(item, line.slice(bullet[0].length), renderMath);
        list.append(item);
      } else if (headingMarker.test(line)) {
        flush(); list = null;
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        appendInline(strong, line.replace(headingMarker, ''), renderMath);
        p.append(strong);
        parent.append(p);
      } else {
        if (list) list = null;
        paragraph.push(line);
      }
    }
    flush();
  }

  function addMessage(role, text) {
    const message = document.createElement('div');
    message.className = `notes-tutor-message notes-tutor-message-${role}`;
    const label = document.createElement('strong');
    label.textContent = role === 'user' ? strings.you : strings.assistant;
    const body = document.createElement('div');
    body.className = 'notes-tutor-message-content';
    if (role === 'assistant') {
      formatReply(body, text);
    } else {
      body.textContent = text;
    }
    message.append(label, body);
    log.append(message);
    scrollBody.scrollTop = scrollBody.scrollHeight;
    reset.hidden = false;
    return message;
  }

  function setBusy(busy) {
    send.disabled = busy || !endpoint || !question.value.trim();
    question.disabled = busy;
    for (const suggestion of suggestions) suggestion.disabled = busy;
    log.setAttribute('aria-busy', String(busy));
  }

  find('.notes-tutor-close').addEventListener('click', () => setOpen(false));
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      event.preventDefault();
      setOpen(false);
    }
  });
  document.addEventListener('selectionchange', captureSelection);
  window.addEventListener('scroll', scheduleContextUpdate, { passive: true });
  window.addEventListener('resize', scheduleContextUpdate);
  pin.addEventListener('click', () => {
    pinnedSection = pinnedSection ? null : section || currentSection();
    updateContext();
  });
  question.addEventListener('input', () => setBusy(Boolean(controller)));
  for (const suggestion of suggestions) {
    suggestion.addEventListener('click', () => {
      question.value = strings[suggestion.dataset.tutorSuggestion];
      setBusy(false);
      question.focus({ preventScroll: true });
    });
  }
  mobileToc?.addEventListener('toggle', () => {
    if (mobileToc.open && mobile.matches && !panel.hidden) {
      question.blur();
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  function updateViewport() {
    const viewport = window.visualViewport;
    if (!viewport || !mobile.matches) {
      root.style.removeProperty('--tutor-keyboard-offset');
      root.style.removeProperty('--tutor-viewport-height');
      root.setAttribute('data-keyboard-open', 'false');
      return;
    }
    const keyboardOffset = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
    root.setAttribute('data-keyboard-open', String(keyboardOffset > 100));
    root.style.setProperty('--tutor-keyboard-offset', keyboardOffset + 'px');
    root.style.setProperty('--tutor-viewport-height', viewport.height + 'px');
  }
  window.visualViewport?.addEventListener('resize', updateViewport);
  window.visualViewport?.addEventListener('scroll', updateViewport);
  window.addEventListener('resize', updateViewport);
  updateViewport();
  clearSelection.addEventListener('click', () => {
    selectedText = '';
    selectedSection = null;
    window.getSelection()?.removeAllRanges();
    updateContext();
  });
  reset.addEventListener('click', () => {
    generation += 1;
    controller?.abort();
    controller = null;
    history = [];
    log.replaceChildren();
    reset.hidden = true;
    status.textContent = endpoint ? '' : strings.pending;
    setBusy(false);
  });

  find('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = question.value.trim();
    if (!endpoint || controller || !text) return;
    updateContext();
    const end = data.sections.findIndex((item, index) => index > section.index && item.level <= section.level);
    const markdown = data.sections.slice(section.index, end < 0 ? undefined : end)
      .map((item) => item.markdown).filter(Boolean).join('\n\n');
    const context = limitContext(markdown) || data.title;
    const message = addMessage('user', text);
    const requestGeneration = generation;
    const requestController = new AbortController();
    controller = requestController;
    let timeout;
    const refreshTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => requestController.abort(), 45000);
    };
    refreshTimeout();
    let answer = '';
    let assistantMessage = null;
    let receiving = true;
    let renderQueued = false;
    const renderAnswer = (complete = false) => {
      const follow = !assistantMessage || scrollBody.scrollHeight - scrollBody.scrollTop - scrollBody.clientHeight < 64;
      if (!assistantMessage) assistantMessage = addMessage('assistant', '');
      const body = assistantMessage.childNodes[1];
      body.replaceChildren();
      formatReply(body, answer, complete);
      if (follow) scrollBody.scrollTop = scrollBody.scrollHeight;
    };
    const rememberAnswer = () => {
      history.push({ role: 'user', content: text }, { role: 'assistant', content: answer.slice(-6000) });
      history = history.slice(-6);
    };
    setBusy(true);
    status.textContent = strings.thinking;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/x-ndjson, application/json' },
        credentials: 'omit',
        signal: requestController.signal,
        body: JSON.stringify({
          question: text,
          page: { title: data.title, url: data.url, language: data.language, tags: data.tags },
          section: section.title,
          context,
          selection: selectedText,
          history: history.slice(-6),
        }),
      });
      if (!response.ok) {
        const error = new Error('Tutor unavailable');
        error.status = response.status;
        throw error;
      }
      const result = response.headers?.get('Content-Type')?.includes('application/x-ndjson')
        ? await readTutorStream(response, (delta) => {
          if (requestGeneration !== generation) return false;
          refreshTimeout();
          answer += delta;
          status.textContent = '';
          if (!assistantMessage) renderAnswer();
          else if (!renderQueued) {
            renderQueued = true;
            window.requestAnimationFrame(() => {
              renderQueued = false;
              if (receiving && requestGeneration === generation) renderAnswer();
            });
          }
        })
        : await response.json(); // Supports an older Worker during deployment.
      if (typeof result.answer !== 'string' || !result.answer.trim()) throw new Error('Empty answer');
      if (requestGeneration !== generation) return;
      answer = result.answer;
      receiving = false;
      renderAnswer(true);
      rememberAnswer();
      question.value = '';
      status.textContent = result.truncated ? strings.truncated : '';
    } catch (error) {
      if (requestGeneration !== generation) return;
      receiving = false;
      if (answer.trim()) {
        renderAnswer(true);
        rememberAnswer();
        status.textContent = strings.interrupted;
      } else {
        assistantMessage?.remove();
        message.remove();
        reset.hidden = !log.childElementCount;
        status.textContent = error.name === 'AbortError' ? strings.timeout
          : error.status === 429 ? strings.rate_limit
          : [404, 502, 503].includes(error.status) ? strings.unavailable : strings.error;
      }
    } finally {
      clearTimeout(timeout);
      if (requestGeneration === generation) {
        controller = null;
        setBusy(false);
      }
    }
  });

  setBusy(false);
  status.textContent = endpoint ? '' : strings.pending;
  return {
    open: (savedSelection) => setOpen(true, savedSelection),
    toggle: () => setOpen(panel.hidden),
  };
}

export async function readTutorStream(response, onDelta) {
  const reader = response.body?.getReader();
  if (!reader) throw new Error('Missing response stream');
  const decoder = new TextDecoder();
  let buffer = '';
  let answer = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      buffer += decoder.decode(value, { stream: !done });
      let end;
      while ((end = buffer.indexOf('\n')) !== -1) {
        const line = buffer.slice(0, end).trim();
        buffer = buffer.slice(end + 1);
        if (!line) continue;
        const event = JSON.parse(line);
        if (event.type === 'delta' && typeof event.text === 'string') {
          answer += event.text;
          if (onDelta(event.text) === false) throw new Error('Cancelled response');
        } else if (event.type === 'done') {
          return { answer, truncated: event.truncated === true };
        } else {
          const error = new Error('Interrupted response');
          error.status = 503;
          throw error;
        }
      }
      if (done) throw new Error('Incomplete response');
    }
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}

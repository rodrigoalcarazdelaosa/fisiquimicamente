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

  // Match headings against the TeX retained in the Hugo-generated context.
  let offset = 0;
  const ancestors = [];
  const sections = Array.from(article.querySelectorAll('h2, h3, h4, h5, h6')).map((heading) => {
    const title = headingSource(heading);
    const level = Number(heading.tagName.slice(1));
    const start = data.content.indexOf(title, offset);
    if (start >= 0) offset = start + title.length;
    while (ancestors.length && ancestors[ancestors.length - 1].level >= level) ancestors.pop();
    const path = [data.title, ...ancestors.map((item) => item.title), title].filter((item, index, items) => item !== items[index - 1]);
    ancestors.push({ title, level });
    return { heading, title, start, level, path };
  }).filter((item) => item.start >= 0);

  function currentSection() {
    let current = sections[0];
    for (const item of sections) {
      if (item.heading.getBoundingClientRect().top <= 180) current = item;
    }
    return current || { title: data.title, start: 0, level: 2, path: [data.title] };
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
    selectedSection = currentSection();
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

  async function renderFormula(node, token, displayMode) {
    if (!root.dataset.katexUrl) return;
    const delimiterLength = token.startsWith('\\') || displayMode ? 2 : 1;
    const source = token.slice(delimiterLength, -delimiterLength).trim();
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
      node.textContent = token;
    }
  }

  // Build a small Markdown subset with DOM nodes; model output is never HTML.
  function appendInline(parent, text, renderMath) {
    const tokens = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\n$]+?\$|\\\([\s\S]*?\\\)|`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g;
    let start = 0;
    for (const match of text.matchAll(tokens)) {
      parent.append(document.createTextNode(text.slice(start, match.index)));
      const token = match[0];
      let node;
      if (token.startsWith('**')) {
        node = document.createElement('strong');
        appendInline(node, token.slice(2, -2), renderMath);
      } else if (token.startsWith('*')) {
        node = document.createElement('em');
        appendInline(node, token.slice(1, -1), renderMath);
      } else if (token.startsWith('`')) {
        node = document.createElement('code');
        node.textContent = token.slice(1, -1);
      } else {
        node = document.createElement('span');
        node.textContent = token;
        const displayMode = token.startsWith('$$') || token.startsWith('\\[');
        if (displayMode) node.className = 'notes-tutor-display-math';
        if (renderMath) renderFormula(node, token, displayMode);
      }
      parent.append(node);
      start = match.index + token.length;
    }
    parent.append(document.createTextNode(text.slice(start)));
  }

  function formatReply(parent, text, renderMath) {
    let paragraph = [];
    let list = null;
    let mathEnd = null;
    let inCode = false;
    let code = [];
    const flush = () => {
      if (!paragraph.length) return;
      const p = document.createElement('p');
      appendInline(p, paragraph.join('\n'), renderMath);
      parent.append(p);
      paragraph = [];
    };
    const flushCode = () => {
      const pre = document.createElement('pre');
      const content = document.createElement('code');
      content.textContent = code.join('\n');
      pre.append(content);
      parent.append(pre);
      code = [];
    };
    for (const line of text.replace(/\r\n/g, '\n').split('\n')) {
      if (line.trim().startsWith('```') && !mathEnd) {
        flush(); list = null;
        if (inCode) flushCode();
        inCode = !inCode;
        continue;
      }
      if (inCode) { code.push(line); continue; }
      if (mathEnd) {
        paragraph.push(line);
        if (line.includes(mathEnd)) mathEnd = null;
        continue;
      }
      if (line.includes('$$') || line.includes('\\[')) {
        const delimiter = line.includes('$$') ? '$$' : '\\[';
        const end = delimiter === '$$' ? '$$' : '\\]';
        if (!line.slice(line.indexOf(delimiter) + delimiter.length).includes(end)) mathEnd = end;
      }
      if (!line.trim()) { flush(); list = null; continue; }
      const bullet = line.match(/^\s*([-*+]|\d+[.)])\s+(.+)$/);
      if (bullet) {
        flush();
        const tag = /^\d/.test(bullet[1]) ? 'ol' : 'ul';
        if (!list || list.tagName.toLowerCase() !== tag) {
          list = document.createElement(tag);
          if (tag === 'ol') list.setAttribute('start', String(parseInt(bullet[1], 10)));
          parent.append(list);
        }
        const item = document.createElement('li');
        appendInline(item, bullet[2], renderMath);
        list.append(item);
      } else if (/^#{1,6}\s/.test(line)) {
        flush(); list = null;
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        appendInline(strong, line.replace(/^#{1,6}\s+/, ''), renderMath);
        p.append(strong);
        parent.append(p);
      } else {
        if (list) list = null;
        paragraph.push(line);
      }
    }
    flush();
    if (inCode) flushCode();
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
    const next = sections.find((item) => item.start > section.start && item.level <= section.level);
    const context = data.content.slice(section.start, next?.start).slice(0, 12000);
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

export default function initNotesTutor(root, data, environment = globalThis) {
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
  let mathQueue = Promise.resolve();
  const pendingMath = new Set();

  // Hugo's plain content retains the original TeX, independently of MathJax's DOM.
  let offset = 0;
  const ancestors = [];
  const sections = Array.from(article.querySelectorAll('h2, h3, h4, h5, h6')).map((heading) => {
    const title = heading.textContent.trim();
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

  // Build a small Markdown subset with DOM nodes; model output is never HTML.
  function appendInline(parent, text) {
    const tokens = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\n$]+?\$|\\\([\s\S]*?\\\)|`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g;
    let start = 0;
    for (const match of text.matchAll(tokens)) {
      parent.append(document.createTextNode(text.slice(start, match.index)));
      const token = match[0];
      let node;
      if (token.startsWith('**')) {
        node = document.createElement('strong');
        node.textContent = token.slice(2, -2);
      } else if (token.startsWith('*')) {
        node = document.createElement('em');
        node.textContent = token.slice(1, -1);
      } else if (token.startsWith('`')) {
        node = document.createElement('code');
        node.textContent = token.slice(1, -1);
      } else {
        node = document.createTextNode(token);
      }
      parent.append(node);
      start = match.index + token.length;
    }
    parent.append(document.createTextNode(text.slice(start)));
  }

  function formatReply(parent, text) {
    let paragraph = [];
    let list = null;
    let mathEnd = null;
    let inCode = false;
    let code = [];
    const flush = () => {
      if (!paragraph.length) return;
      const p = document.createElement('p');
      appendInline(p, paragraph.join('\n'));
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
        appendInline(item, bullet[2]);
        list.append(item);
      } else if (/^#{1,6}\s/.test(line)) {
        flush(); list = null;
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        appendInline(strong, line.replace(/^#{1,6}\s+/, ''));
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

  function flushMath() {
    if (typeof window.MathJax?.typesetPromise !== 'function') return;
    for (const node of pendingMath) {
      pendingMath.delete(node);
      mathQueue = mathQueue.then(() => window.MathJax.startup?.promise)
        .then(() => node.isConnected ? window.MathJax.typesetPromise([node]) : null)
        .catch(() => {}); // Keep readable TeX if MathJax cannot render it.
    }
  }
  window.addEventListener('load', flushMath);

  // Notes with their own mathematics already load MathJax in the page head.
  // Otherwise download its configuration and engine only after opening the tutor.
  async function prepareMath() {
    if (typeof window.MathJax?.typesetPromise === 'function') {
      await window.MathJax.startup?.promise;
      flushMath();
      return;
    }
    if (root.dataset.pageMath === 'true' || !root.dataset.mathjaxUrl) return;
    const loadScript = (url) => new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = () => { script.remove(); reject(new Error('MathJax unavailable')); };
      document.head.append(script);
    });
    if (!window.MathJax) await loadScript(root.dataset.mathConfigUrl);
    if (!window.MathJax.loader.load.includes('ui/safe')) window.MathJax.loader.load.push('ui/safe');
    await loadScript(root.dataset.mathjaxUrl);
    await window.MathJax.startup?.promise;
    flushMath();
  }
  prepareMath().catch(() => {}); // Preserve readable TeX when the engine is unavailable.

  function addMessage(role, text) {
    const message = document.createElement('div');
    message.className = `notes-tutor-message notes-tutor-message-${role}`;
    const label = document.createElement('strong');
    label.textContent = role === 'user' ? strings.you : strings.assistant;
    const body = document.createElement('div');
    body.className = 'notes-tutor-message-content';
    if (role === 'assistant') {
      formatReply(body, text);
      pendingMath.add(body);
    } else {
      body.textContent = text;
    }
    message.append(label, body);
    log.append(message);
    scrollBody.scrollTop = scrollBody.scrollHeight;
    flushMath();
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
    window.MathJax?.typesetClear?.([log]);
    pendingMath.clear();
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
    const timeout = setTimeout(() => requestController.abort(), 45000);
    setBusy(true);
    status.textContent = strings.thinking;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      const result = await response.json();
      if (typeof result.answer !== 'string' || !result.answer.trim()) throw new Error('Empty answer');
      if (requestGeneration !== generation) return;
      addMessage('assistant', result.answer);
      history.push({ role: 'user', content: text }, { role: 'assistant', content: result.answer.slice(0, 6000) });
      history = history.slice(-6);
      question.value = '';
      status.textContent = '';
    } catch (error) {
      if (requestGeneration !== generation) return;
      message.remove();
      reset.hidden = !log.childElementCount;
      status.textContent = error.name === 'AbortError' ? strings.timeout
        : error.status === 429 ? strings.rate_limit
        : [404, 502, 503].includes(error.status) ? strings.unavailable : strings.error;
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

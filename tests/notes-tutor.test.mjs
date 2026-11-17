import test from 'node:test';
import assert from 'node:assert/strict';
import initNotesTutor from '../assets/js/notes-tutor.mjs';

function setup(options = {}) {
  let activeElement;
  class Element extends EventTarget {
    hidden = false;
    value = '';
    open = false;
    attributes = {};
    dataset = {};
    childNodes = [];
    connected = true;
    style = {
      values: {},
      setProperty(name, value) { this.values[name] = value; },
      removeProperty(name) { delete this.values[name]; },
    };
    constructor(tagName = 'DIV') { super(); this.tagName = tagName.toUpperCase(); }
    set textContent(value) { this.text = String(value); this.childNodes = []; }
    get textContent() { return (this.text || '') + this.childNodes.map((node) => node.textContent).join(''); }
    set innerHTML(_) { throw new Error('HTML must never be interpreted'); }
    get isConnected() { return this.parentNode ? this.parentNode.isConnected : this.connected; }
    get childElementCount() { return this.childNodes.filter((node) => node.tagName !== '#TEXT').length; }
    append(...nodes) {
      for (const node of nodes) { node.parentNode = this; this.childNodes.push(node); }
    }
    replaceChildren() { for (const node of this.childNodes) node.remove(); this.text = ''; }
    remove() {
      if (this.parentNode) this.parentNode.childNodes = this.parentNode.childNodes.filter((node) => node !== this);
      this.parentNode = null; this.connected = false;
    }
    setAttribute(name, value) { this.attributes[name] = value; }
    focus() { activeElement = this; }
    blur() { activeElement = null; }
  }
  const selectors = [
    '.notes-tutor-toggle', '.notes-tutor-panel', 'textarea', '.notes-tutor-send',
    '.notes-tutor-status', '.notes-tutor-messages', '.notes-tutor-reset',
    '.notes-tutor-selection', '.notes-tutor-clear-selection', '.notes-tutor-section',
    '.notes-tutor-close', 'form', '.notes-tutor-pin', '.notes-tutor-selection-details',
    '.notes-tutor-body',
  ];
  const elements = Object.fromEntries(selectors.map((name) => [name, new Element()]));
  const root = new Element();
  const article = new Element();
  const toc = new Element('details');
  const window = new EventTarget();
  const document = new EventTarget();
  let scroll = 0;
  let selection = null;
  const frames = [];
  const calls = [];
  const typeset = [];
  const mathScripts = [];
  const mobile = { matches: Boolean(options.mobile) };
  const headings = [['Introducción', 200, 'H2'], ['Ondas armónicas', 800, 'H2'], ['Frecuencia', 900, 'H3'], ['El sonido', 1600, 'H2']];
  article.querySelectorAll = () => headings.map(([title, top, tagName], index) => ({
    textContent: title, tagName, getBoundingClientRect: () => ({ top: top - scroll }),
    contains: (node) => node?.sectionIndex === index,
    compareDocumentPosition: (node) => node?.sectionIndex > index ? 4 : 0,
  }));
  article.contains = (node) => node === article;
  const suggestions = ['suggest_simple', 'suggest_example'].map((key) => {
    const button = new Element('button'); button.dataset.tutorSuggestion = key; return button;
  });
  root.querySelector = (selector) => elements[selector];
  root.querySelectorAll = () => suggestions;
  document.querySelector = (selector) => ({ '.notes-tutor': root, '.article-style': article, '.article-mobile-toc': toc })[selector];
  document.createElement = (tag) => new Element(tag);
  document.createTextNode = (text) => { const node = new Element('#text'); node.textContent = text; return node; };
  const data = {
    title: 'Ondas', content: 'Introducción Texto. Ondas armónicas Texto. Frecuencia Fórmula. El sonido Texto.',
    endpoint: options.endpoint || '', language: 'es', url: 'https://fisiquimicamente.com/recursos-fisica-quimica/apuntes/ondas/', tags: ['2º Bach'],
    strings: { selected: 'Fragmento seleccionado', pending: 'Próximamente', pin: 'Fijar apartado', unpin: 'Seguir lectura',
      suggest_simple: 'Explícalo más fácil', suggest_example: 'Ponme un ejemplo', you: 'Tú', assistant: 'Tutor',
      rate_limit: 'Espera un minuto', thinking: 'Pensando', error: 'Error' },
  };
  window.getSelection = () => selection;
  window.matchMedia = () => mobile;
  window.requestAnimationFrame = (callback) => frames.push(callback);
  window.innerHeight = 800;
  window.visualViewport = Object.assign(new EventTarget(), { height: 800, offsetTop: 0 });
  if (options.lazyMath || options.pageMath) {
    root.dataset = { pageMath: String(Boolean(options.pageMath)), mathConfigUrl: '/math-config.js', mathjaxUrl: '/mathjax.js' };
    document.head = { append: (script) => {
      mathScripts.push(script.src);
      queueMicrotask(() => {
        if (script.src === '/math-config.js') window.MathJax = { loader: { load: [] } };
        else {
          window.MathJax.startup = { promise: Promise.resolve() };
          window.MathJax.typesetPromise = async (nodes) => typeset.push(...nodes);
        }
        script.onload();
      });
    } };
  }
  if (options.math) window.MathJax = {
    startup: { promise: Promise.resolve() },
    typesetPromise: async (nodes) => { typeset.push(...nodes); },
    typesetClear: () => {},
  };
  elements['.notes-tutor-panel'].hidden = true;
  const fetch = async (url, request) => {
    calls.push(JSON.parse(request.body));
    return { ok: options.status ? options.status === 200 : true, status: options.status || 200,
      json: async () => ({ answer: options.answer || 'Explicación de prueba.' }) };
  };
  const api = initNotesTutor(root, data, { window, document, fetch, AbortController, setTimeout, clearTimeout });
  return {
    elements, frames, suggestions, calls, toc, window, root, typeset, mathScripts,
    open: () => api.toggle(),
    move: (value, event = 'scroll') => { scroll = value; window.dispatchEvent(new Event(event)); },
    flush: () => { while (frames.length) frames.shift()(); },
    select: (text, sectionIndex = 0) => {
      selection = { isCollapsed: false, rangeCount: 1, toString: () => text,
        getRangeAt: () => ({ commonAncestorContainer: article, startContainer: { sectionIndex } }),
        removeAllRanges: () => { selection = null; } };
      document.dispatchEvent(new Event('selectionchange'));
    },
    label: () => elements['.notes-tutor-section'].textContent,
    focused: () => activeElement,
    submit: async (text) => {
      elements.textarea.value = text;
      elements.form.dispatchEvent(new Event('submit', { cancelable: true }));
      await new Promise((resolve) => setImmediate(resolve));
    },
  };
}

test('an open tutor follows the section when scrolling down and back up', () => {
  const ui = setup(); ui.open();
  assert.equal(ui.label(), 'Ondas → Introducción');
  ui.move(700); ui.flush();
  assert.equal(ui.label(), 'Ondas → Ondas armónicas');
  ui.move(1500); ui.flush();
  assert.equal(ui.label(), 'Ondas → El sonido');
  ui.move(0); ui.flush();
  assert.equal(ui.label(), 'Ondas → Introducción');
});

test('scroll events share one frame and resize updates the breadcrumb', () => {
  const ui = setup(); ui.open();
  ui.move(500); ui.move(700); ui.move(1500);
  assert.equal(ui.frames.length, 1);
  ui.flush();
  assert.equal(ui.label(), 'Ondas → El sonido');
  ui.move(800, 'resize'); ui.flush();
  assert.equal(ui.label(), 'Ondas → Ondas armónicas → Frecuencia');
});

test('scroll preserves the selected passage and its source section', () => {
  const ui = setup(); ui.open(); ui.select('Una onda transporta energía.');
  ui.move(1500); ui.flush();
  assert.equal(ui.label(), 'Ondas → Introducción');
  assert.equal(ui.elements['.notes-tutor-selection'].textContent, 'Una onda transporta energía.');
  assert.equal(ui.elements['.notes-tutor-selection-details'].open, false);
  ui.elements['.notes-tutor-clear-selection'].dispatchEvent(new Event('click'));
  assert.equal(ui.label(), 'Ondas → El sonido');
  assert.equal(ui.elements['.notes-tutor-selection-details'].hidden, true);
});

test('a closed tutor does no scroll work and refreshes when opened', () => {
  const ui = setup(); ui.move(1500);
  assert.equal(ui.frames.length, 0);
  ui.open(); assert.equal(ui.label(), 'Ondas → El sonido');
});

test('pinning freezes the section until following reading resumes', () => {
  const ui = setup(); ui.open();
  const pin = ui.elements['.notes-tutor-pin'];
  pin.dispatchEvent(new Event('click'));
  assert.equal(pin.attributes['aria-pressed'], 'true');
  ui.move(1500); ui.flush();
  assert.equal(ui.label(), 'Ondas → Introducción');
  pin.dispatchEvent(new Event('click'));
  assert.equal(ui.label(), 'Ondas → El sonido');
  assert.equal(pin.attributes['aria-pressed'], 'false');
});

test('suggestions fill the draft without sending a request, even before activation', () => {
  const ui = setup();
  ui.suggestions[1].dispatchEvent(new Event('click'));
  assert.equal(ui.elements.textarea.value, 'Ponme un ejemplo');
  assert.equal(ui.elements.textarea.disabled, false);
  assert.equal(ui.elements['.notes-tutor-send'].disabled, true);
  assert.equal(ui.calls.length, 0);
});

test('on mobile opening the tutor closes the TOC and opening the TOC closes the tutor', () => {
  const ui = setup({ mobile: true });
  ui.toc.open = true; ui.open();
  assert.equal(ui.toc.open, false);
  assert.equal(ui.focused(), ui.elements['.notes-tutor-close']);
  ui.toc.open = true; ui.toc.dispatchEvent(new Event('toggle'));
  assert.equal(ui.elements['.notes-tutor-panel'].hidden, true);
  assert.equal(ui.elements['.notes-tutor-toggle'].attributes['aria-expanded'], 'false');
});

test('mobile viewport changes account for the on-screen keyboard', () => {
  const ui = setup({ mobile: true });
  ui.window.visualViewport.height = 430;
  ui.window.visualViewport.dispatchEvent(new Event('resize'));
  assert.equal(ui.root.style.values['--tutor-keyboard-offset'], '370px');
  assert.equal(ui.root.style.values['--tutor-viewport-height'], '430px');
  assert.equal(ui.root.attributes['data-keyboard-open'], 'true');
});

test('submitting uses the pinned section and keeps the assistant response', async () => {
  const ui = setup({ endpoint: '/api/tutor' }); ui.open();
  ui.elements['.notes-tutor-pin'].dispatchEvent(new Event('click'));
  ui.move(1500); ui.flush();
  await ui.submit('¿Qué se propaga?');
  assert.equal(ui.calls[0].section, 'Introducción');
  assert.equal(ui.calls[0].context, 'Introducción Texto. ');
  assert.equal(ui.elements['.notes-tutor-messages'].childElementCount, 2);
  assert.equal(ui.elements.textarea.value, '');
});

test('paragraphs, emphasis, lists and TeX render without interpreting HTML', async () => {
  const answer = '**Fuerza**\n\n- Primer punto\n- Fórmula: \\(F = m * a\\)\n\n3. Tercer paso\n\n<img src=x onerror=alert(1)>';
  const ui = setup({ endpoint: '/api/tutor', answer, math: true });
  await ui.submit('Explícalo');
  const walk = (node) => [node, ...node.childNodes.flatMap(walk)];
  const log = ui.elements['.notes-tutor-messages'];
  const nodes = walk(log);
  assert.ok(nodes.some((node) => node.tagName === 'UL'));
  assert.ok(nodes.some((node) => node.tagName === 'OL' && node.attributes.start === '3'));
  assert.ok(nodes.some((node) => node.tagName === 'STRONG' && node.textContent === 'Fuerza'));
  assert.ok(log.textContent.includes('\\(F = m * a\\)'));
  assert.ok(log.textContent.includes('<img src=x onerror=alert(1)>'));
  assert.ok(!nodes.some((node) => node.tagName === 'IMG'));
  assert.equal(ui.typeset.length, 1);
});

test('multiline display math remains in one paragraph before the following list', async () => {
  const ui = setup({ endpoint: '/api/tutor', answer: 'La ecuación es:\n\n\\[\nF = m a\n\\]\n\n- Comprobamos unidades' });
  await ui.submit('Explica la ecuación');
  const content = ui.elements['.notes-tutor-messages'].childNodes[1].childNodes[1];
  assert.equal(content.childNodes[1].tagName, 'P');
  assert.equal(content.childNodes[1].textContent, '\\[\nF = m a\n\\]');
  assert.equal(content.childNodes[2].tagName, 'UL');
});

test('a page without math loads the configuration and safe engine when the chat initializes', async () => {
  const ui = setup({ lazyMath: true, endpoint: '/api/tutor', answer: '\\(F = ma\\)' });
  await ui.submit('Explica la ecuación');
  assert.deepEqual(ui.mathScripts, ['/math-config.js', '/mathjax.js']);
  assert.ok(ui.window.MathJax.loader.load.includes('ui/safe'));
  assert.equal(ui.typeset.length, 1);
  await ui.submit('Ponme otro ejemplo');
  assert.equal(ui.mathScripts.length, 2);
});

test('a page that already loads math does not request another engine', () => {
  const ui = setup({ pageMath: true });
  assert.deepEqual(ui.mathScripts, []);
});

test('clearing the conversation removes messages and does not send a new request', async () => {
  const ui = setup({ endpoint: '/api/tutor', math: true });
  await ui.submit('¿Qué es una onda?');
  ui.elements['.notes-tutor-reset'].dispatchEvent(new Event('click'));
  assert.equal(ui.elements['.notes-tutor-messages'].childElementCount, 0);
  assert.equal(ui.calls.length, 1);
});

test('rate limiting preserves the draft for retrying', async () => {
  const ui = setup({ endpoint: '/api/tutor', status: 429 });
  await ui.submit('Mi pregunta');
  assert.equal(ui.elements.textarea.value, 'Mi pregunta');
  assert.equal(ui.elements['.notes-tutor-status'].textContent, 'Espera un minuto');
  assert.equal(ui.elements['.notes-tutor-messages'].childElementCount, 0);
});

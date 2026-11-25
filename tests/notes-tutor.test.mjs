import test from 'node:test';
import assert from 'node:assert/strict';
import initNotesTutor, { readTutorStream } from '../assets/js/notes-tutor.mjs';
import tutorWorker from '../workers/notes-tutor/src/index.mjs';

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
    querySelectorAll() { return []; }
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
  const mathImports = [];
  const mobile = { matches: Boolean(options.mobile) };
  const headings = options.headings ?? [
    ['introduccion', 'Introducción', 200, true],
    ['ondas-armonicas', 'Ondas armónicas', 800, true],
    ['frecuencia', 'Frecuencia', 900, true],
    ['el-sonido', 'El sonido', 1600, true],
  ];
  article.querySelectorAll = () => headings.map(([id, title, top, visible], index) => ({
    id, textContent: title, getBoundingClientRect: () => ({ top: top - scroll }),
    getClientRects: () => visible ? [{}] : [],
    querySelector: () => null,
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
  const sections = options.sections ?? [
    { id: '', level: 1, markdown: '' },
    { id: 'introduccion', level: 2, markdown: '## Introducción\n\nTexto.' },
    { id: 'ondas-armonicas', level: 2, markdown: '## Ondas armónicas\n\nTexto.' },
    { id: 'frecuencia', level: 3, markdown: '### Frecuencia\n\nFórmula.' },
    { id: 'el-sonido', level: 2, markdown: '## El sonido\n\nTexto.' },
  ];
  const data = {
    title: 'Ondas', sections,
    endpoint: options.endpoint || '', language: 'es', url: 'https://fisiquimicamente.com/recursos-fisica-quimica/apuntes/ondas/', tags: ['2º Bach'],
    strings: { selected: 'Fragmento seleccionado', pending: 'Próximamente', pin: 'Fijar apartado', unpin: 'Seguir lectura',
      suggest_simple: 'Explícalo más fácil', suggest_example: 'Ponme un ejemplo', you: 'Tú', assistant: 'Tutor',
      rate_limit: 'Espera un minuto', thinking: 'Pensando', error: 'Error', truncated: 'Puedes pedir al tutor que continúe.',
      interrupted: 'Respuesta interrumpida; puedes pedir que continúe.', unavailable: 'No disponible' },
  };
  window.getSelection = () => selection;
  window.matchMedia = () => mobile;
  window.requestAnimationFrame = (callback) => frames.push(callback);
  window.innerHeight = 800;
  window.visualViewport = Object.assign(new EventTarget(), { height: 800, offsetTop: 0 });
  root.dataset = { katexUrl: '/katex.mjs', mhchemUrl: '/mhchem.mjs' };
  const importMath = async (url) => {
    mathImports.push(url);
    if (options.failMath) throw new Error('Module unavailable');
    return { default: { render: (tex, node, config) => typeset.push({ tex, node, config }) } };
  };
  elements['.notes-tutor-panel'].hidden = true;
  const fetch = async (url, request) => {
    calls.push(JSON.parse(request.body));
    if (options.fetch) return options.fetch(url, request);
    return { ok: options.status ? options.status === 200 : true, status: options.status || 200,
      json: async () => ({ answer: options.answer || 'Explicación de prueba.', truncated: options.truncated }) };
  };
  const api = initNotesTutor(root, data, { window, document, fetch, AbortController, setTimeout, clearTimeout }, importMath);
  return {
    elements, frames, suggestions, calls, toc, window, root, typeset, mathImports,
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
  assert.equal(ui.calls[0].context, '## Introducción\n\nTexto.');
  assert.equal(ui.elements['.notes-tutor-messages'].childElementCount, 2);
  assert.equal(ui.elements.textarea.value, '');
});

test('sends the Markdown of the active anchor and its children even when titles repeat', async () => {
  const headings = [
    ['magnitudes', 'Magnitudes', 210, true],
    ['ejemplo', 'Ejemplo', 400, true],
    ['prefijos', 'Prefijos', 700, true],
    ['ejemplo-1', 'Ejemplo', 800, true],
    ['solucion', 'Solución', 0, false],
    ['ejercicios', 'Ejercicios', 2000, true],
  ];
  const table = '### Ejemplo\n\n| Prefijo | Factor |\n| --- | --- |\n| nano | $10^{-9}$ |';
  const sections = [
    { id: '', level: 1, markdown: 'Presentación del apunte.' },
    { id: 'magnitudes', level: 2, markdown: '## Magnitudes' },
    { id: 'ejemplo', level: 3, markdown: '### Ejemplo\n\nPrimer ejemplo.' },
    { id: 'prefijos', level: 2, markdown: '## Prefijos' },
    { id: 'ejemplo-1', level: 3, markdown: table },
    { id: 'solucion', level: 4, markdown: '#### Solución\n\n1. Aplica el factor.\n2. Comprueba la unidad.' },
    { id: 'ejercicios', level: 2, markdown: '## Ejercicios' },
  ];
  const ui = setup({ endpoint: '/api/tutor', headings, sections });
  ui.open();
  assert.equal(ui.label(), 'Ondas');
  ui.move(720); ui.flush();
  assert.equal(ui.label(), 'Ondas → Prefijos → Ejemplo');
  await ui.submit('¿Cuál es el factor de nano?');
  assert.equal(ui.calls[0].context, table + '\n\n' + sections[5].markdown);
});

test('limits the context without cutting into a multiline equation', async () => {
  const paragraph = '## Introducción\n\n' + 'a'.repeat(11500);
  const sections = [
    { id: '', level: 1, markdown: '' },
    { id: 'introduccion', level: 2, markdown: paragraph + '\n\n$$\n' + 'x\n'.repeat(400) + '$$' },
  ];
  const ui = setup({ endpoint: '/api/tutor', sections });
  await ui.submit('Explica el apartado');
  assert.equal(ui.calls[0].context, paragraph);
});

test('paragraphs, emphasis, lists and TeX render without interpreting HTML', async () => {
  const answer = '**Fuerza**\n\n- Primer punto\n- Fórmula: \\(F = m * a\\)\n\n3. Tercer paso\n\n<img src=x onerror=alert(1)>';
  const ui = setup({ endpoint: '/api/tutor', answer });
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

test('long answers remain visible and follow-ups include their ending', async () => {
  const answer = 'Esta explicación continúa. '.repeat(250) + 'Conclusión completa.';
  const ui = setup({ endpoint: '/api/tutor', answer });
  await ui.submit('Explícalo');
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes(answer));
  assert.equal(ui.elements['.notes-tutor-status'].textContent, '');
  await ui.submit('Continúa');
  assert.equal(ui.calls[1].history[1].content, answer.slice(-6000));
});

test('token exhaustion shows a translated notice and allows a follow-up', async () => {
  const ui = setup({ endpoint: '/api/tutor', answer: 'La energía depende de', truncated: true });
  await ui.submit('Explícalo');
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('La energía depende de'));
  assert.equal(ui.elements['.notes-tutor-status'].textContent, 'Puedes pedir al tutor que continúe.');
  assert.equal(ui.calls.length, 1);
  await ui.submit('Continúa');
  assert.equal(ui.calls.length, 2);
});

test('multiline display math remains in one paragraph before the following list', async () => {
  const ui = setup({ endpoint: '/api/tutor', answer: 'La ecuación es:\n\n\\[\nF = m a\n\\]\n\n- Comprobamos unidades' });
  await ui.submit('Explica la ecuación');
  const content = ui.elements['.notes-tutor-messages'].childNodes[1].childNodes[1];
  assert.equal(content.childNodes[1].tagName, 'P');
  assert.equal(content.childNodes[1].textContent, '\\[\nF = m a\n\\]');
  assert.equal(content.childNodes[2].tagName, 'UL');
});

test('opens the tutor without importing KaTeX and imports it once for the first equation', async () => {
  const ui = setup({ endpoint: '/api/tutor', answer: 'The equation is $F=ma$.' });
  ui.open();
  assert.deepEqual(ui.mathImports, []);
  await ui.submit('Explica la ecuación');
  assert.deepEqual(ui.mathImports, ['/katex.mjs']);
  assert.equal(ui.typeset[0].tex, 'F=ma');
  assert.equal(ui.typeset[0].config.trust, false);
  assert.equal(ui.typeset[0].config.output, 'mathml');
  assert.equal(ui.typeset[0].config.displayMode, false);
  await ui.submit('Ponme otro ejemplo');
  assert.deepEqual(ui.mathImports, ['/katex.mjs']);
});

test('renders display math with mhchem and leaves code untouched', async () => {
  const ui = setup({ endpoint: '/api/tutor', answer: '$$\\ce{H2 + Cl2 -> 2 HCl}$$\n\n`$code$`' });
  await ui.submit('Explica la reacción');
  assert.deepEqual(ui.mathImports, ['/katex.mjs', '/mhchem.mjs']);
  assert.equal(ui.typeset.length, 1);
  assert.equal(ui.typeset[0].tex, '\\ce{H2 + Cl2 -> 2 HCl}');
  assert.equal(ui.typeset[0].config.displayMode, true);
});

test('renders multiline list equations, bare environments and double-escaped delimiters', async () => {
  const answer = [
    '1. Calculamos la fuerza $$',
    String.raw`\begin{aligned} F &= m a \\`,
    '',
    String.raw`&= 12\,\mathrm{N} \end{aligned}`,
    '$$',
    '2. Comprobamos el resultado.',
    '',
    String.raw`\begin{align*} F &= 12\,\mathrm{N} \end{align*}`,
    '',
    String.raw`También \\(F=ma\\) y \\[ F = 12\,\mathrm{N} \\].`,
  ].join('\n');
  const ui = setup({ endpoint: '/api/tutor', answer });
  await ui.submit('Calcula la fuerza');
  const content = ui.elements['.notes-tutor-messages'].childNodes[1].childNodes[1];
  assert.equal(content.childNodes[0].tagName, 'OL');
  assert.equal(content.childNodes[0].childElementCount, 2);
  assert.deepEqual(ui.typeset.map(({ tex, config }) => [tex, config.displayMode]), [
    [answer.split('$$')[1].trim(), true],
    [String.raw`\begin{align*} F &= 12\,\mathrm{N} \end{align*}`, true],
    ['F=ma', false],
    [String.raw`F = 12\,\mathrm{N}`, true],
  ]);
});

test('renders Markdown tables with maths, escaped separators and plain HTML text', async () => {
  const answer = [
    'Comparamos magnitudes',
    'Magnitud | Expresión | Nota',
    ':--- | :---: | ---:',
    String.raw`| Fuerza \| peso | $|F|=ma$ | **N** |`,
    '| Distancia | `a|b` | <img src=x onerror=alert(1)> |',
    '- El resultado usa unidades del SI.',
    '',
    '````markdown',
    '| A | B |',
    '| --- | --- |',
    '| $x$ | $y$ |',
    '`````',
  ].join('\r\n');
  const ui = setup({ endpoint: '/api/tutor', answer });
  await ui.submit('Compara las magnitudes');
  const content = ui.elements['.notes-tutor-messages'].childNodes[1].childNodes[1];
  const wrapper = content.childNodes[1];
  assert.equal(wrapper.className, 'notes-tutor-table');
  const [head, body] = wrapper.childNodes[0].childNodes;
  assert.equal(head.tagName, 'THEAD');
  const headings = head.childNodes[0].childNodes;
  assert.deepEqual(headings.map((cell) => cell.attributes.scope), ['col', 'col', 'col']);
  assert.deepEqual(headings.map((cell) => cell.attributes['data-align']), ['left', 'center', 'right']);
  const [first, second] = body.childNodes.map((row) => row.childNodes);
  assert.equal(first[0].textContent, 'Fuerza | peso');
  assert.equal(second[1].childNodes[1].tagName, 'CODE');
  assert.equal(second[1].textContent, 'a|b');
  assert.equal(second[2].childElementCount, 0);
  assert.equal(second[2].textContent, '<img src=x onerror=alert(1)>');
  assert.equal(content.childNodes[2].tagName, 'UL');
  assert.equal(content.childNodes[3].tagName, 'PRE');
  assert.deepEqual(ui.typeset.map(({ tex }) => tex), ['|F|=ma']);
});

test('keeps the TeX when KaTeX fails to load', async () => {
  const ui = setup({ endpoint: '/api/tutor', answer: '\\(F = ma\\)', failMath: true });
  await ui.submit('Explica la ecuación');
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('\\(F = ma\\)'));
  assert.equal(ui.typeset.length, 0);
});

test('clearing the conversation removes messages and does not send a new request', async () => {
  const ui = setup({ endpoint: '/api/tutor' });
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

function streamingResponse() {
  let controller;
  let cancelled = false;
  const encoder = new TextEncoder();
  const body = new ReadableStream({ start(value) { controller = value; }, cancel() { cancelled = true; } });
  return {
    response: new Response(body, { headers: { 'Content-Type': 'application/x-ndjson' } }),
    send: (event) => controller.enqueue(encoder.encode(JSON.stringify(event) + '\n')),
    close: () => controller.close(),
    cancelled: () => cancelled,
  };
}

const settle = () => new Promise((resolve) => setImmediate(resolve));

test('streaming displays text before completion and typesets math only at the end', async () => {
  const stream = streamingResponse();
  const ui = setup({ endpoint: '/api/tutor', fetch: async (_url, request) => {
    assert.match(request.headers.Accept, /application\/x-ndjson/);
    return stream.response;
  } });
  await ui.submit('Explícame la fuerza');
  stream.send({ type: 'delta', text: '**Fuerza**\n\n' });
  await settle();
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('Fuerza'));
  assert.equal(ui.elements.textarea.disabled, true);
  assert.equal(ui.typeset.length, 0);
  assert.deepEqual(ui.mathImports, []);
  stream.send({ type: 'delta', text: '\\(F = ma\\)' });
  stream.send({ type: 'done', truncated: false });
  stream.close();
  await settle(); ui.flush(); await settle();
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('\\(F = ma\\)'));
  assert.equal(ui.elements.textarea.disabled, false);
  assert.equal(ui.elements.textarea.value, '');
  assert.equal(ui.typeset.length, 1);
});

test('a Markdown table can arrive in fragments during streaming', async () => {
  const stream = streamingResponse();
  const ui = setup({ endpoint: '/api/tutor', fetch: async () => stream.response });
  await ui.submit('Compara las magnitudes');
  stream.send({ type: 'delta', text: '| Magnitud | Fórmula |\n| ---' });
  await settle();
  const content = ui.elements['.notes-tutor-messages'].childNodes[1].childNodes[1];
  assert.equal(content.childNodes[0].tagName, 'P');
  stream.send({ type: 'delta', text: ' | --- |\n| Fuerza | $F=' });
  stream.send({ type: 'delta', text: 'ma$ |' });
  await settle(); ui.flush();
  assert.equal(content.childNodes[0].className, 'notes-tutor-table');
  assert.deepEqual(ui.mathImports, []);
  stream.send({ type: 'done', truncated: false }); stream.close();
  await settle(); ui.flush();
  assert.equal(content.childNodes[0].className, 'notes-tutor-table');
  assert.deepEqual(ui.typeset.map(({ tex }) => tex), ['F=ma']);
});

test('stream truncation preserves the response and shows the length notice', async () => {
  const stream = streamingResponse();
  const ui = setup({ endpoint: '/api/tutor', fetch: async () => stream.response });
  await ui.submit('Explícalo');
  stream.send({ type: 'delta', text: 'La energía depende de' });
  stream.send({ type: 'done', truncated: true }); stream.close();
  await settle();
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('La energía depende de'));
  assert.equal(ui.elements['.notes-tutor-status'].textContent, 'Puedes pedir al tutor que continúe.');
});

test('an interrupted stream keeps received text and its history for a follow-up', async () => {
  for (const explicitError of [true, false]) {
    const stream = streamingResponse();
    let requests = 0;
    const ui = setup({ endpoint: '/api/tutor', fetch: async () => ++requests === 1 ? stream.response
      : Response.json({ answer: 'La velocidad al cuadrado.', truncated: false }) });
    await ui.submit('Explícalo');
    stream.send({ type: 'delta', text: 'La energía depende de' });
    if (explicitError) stream.send({ type: 'error', error: 'unavailable' });
    stream.close(); await settle();
    assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('La energía depende de'));
    assert.equal(ui.elements['.notes-tutor-status'].textContent, 'Respuesta interrumpida; puedes pedir que continúe.');
    assert.equal(ui.elements.textarea.value, 'Explícalo');
    assert.equal(ui.elements.textarea.disabled, false);
    await ui.submit('Continúa');
    assert.equal(ui.calls[1].history[1].content, 'La energía depende de');
  }
});

test('a stream error before any answer preserves the question without empty messages', async () => {
  const stream = streamingResponse();
  const ui = setup({ endpoint: '/api/tutor', fetch: async () => stream.response });
  await ui.submit('Explícalo');
  stream.send({ type: 'error', error: 'unavailable' }); stream.close();
  await settle();
  assert.equal(ui.elements.textarea.value, 'Explícalo');
  assert.equal(ui.elements['.notes-tutor-messages'].childElementCount, 0);
  assert.equal(ui.elements['.notes-tutor-status'].textContent, 'No disponible');
});

test('clearing a streaming conversation cancels consumption and ignores queued rendering', async () => {
  const stream = streamingResponse();
  const ui = setup({ endpoint: '/api/tutor', fetch: async () => stream.response });
  await ui.submit('Explícalo');
  stream.send({ type: 'delta', text: 'Una explicación' }); await settle();
  stream.send({ type: 'delta', text: ' que sigue' }); await settle();
  ui.elements['.notes-tutor-reset'].dispatchEvent(new Event('click'));
  stream.send({ type: 'delta', text: ' después de borrar' }); await settle();
  ui.flush();
  assert.equal(stream.cancelled(), true);
  assert.equal(ui.elements['.notes-tutor-messages'].childElementCount, 0);
  assert.equal(ui.elements.textarea.disabled, false);
});

test('the browser decodes JSON lines fragmented inside accented text and formulas', async () => {
  const answer = 'Energía: \\(E = mc^2\\).';
  const bytes = new TextEncoder().encode(JSON.stringify({ type: 'delta', text: answer }) + '\n'
    + JSON.stringify({ type: 'done', truncated: false }) + '\n');
  let offset = 0;
  const body = new ReadableStream({ pull(controller) {
    if (offset === bytes.length) return controller.close();
    controller.enqueue(bytes.slice(offset, ++offset));
  } });
  const fragments = [];
  const result = await readTutorStream(new Response(body), (delta) => fragments.push(delta));
  assert.deepEqual(result, { answer, truncated: false });
  assert.equal(fragments.join(''), answer);
});

test('adaptive Worker and browser stream an answer end to end before inference finishes', async () => {
  let provider;
  let inferenceCalls = 0;
  const source = new ReadableStream({ start(controller) { provider = controller; } });
  const env = {
    ENABLED: 'true', AI_MODEL: '@cf/google/gemma-4-26b-a4b-it', ALLOWED_ORIGINS: 'https://fisiquimicamente.com',
    TUTOR_IP_LIMITER: { limit: async () => ({ success: true }) },
    AI: { run: async (_model, options) => {
      inferenceCalls++;
      assert.equal(options.chat_template_kwargs.enable_thinking, false);
      assert.equal(options.stream, true);
      return source;
    } },
  };
  const ui = setup({ endpoint: 'https://tutor.example/api/tutor', fetch: async (url, request) =>
    tutorWorker.fetch(new Request(url, { ...request, headers: { ...request.headers, Origin: 'https://fisiquimicamente.com' } }), env) });
  const emit = (packet) => provider.enqueue(new TextEncoder().encode(`data: ${JSON.stringify(packet)}\n\n`));
  await ui.submit('¿Qué es un enlace covalente?');
  emit({ choices: [{ delta: { content: 'Dos átomos comparten ' } }] });
  await settle();
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('Dos átomos comparten'));
  assert.equal(ui.elements.textarea.disabled, true);
  emit({ choices: [{ delta: { content: 'electrones.' }, finish_reason: 'stop' }] });
  provider.close(); await settle(); ui.flush();
  assert.ok(ui.elements['.notes-tutor-messages'].textContent.includes('Dos átomos comparten electrones.'));
  assert.equal(ui.elements.textarea.disabled, false);
  assert.equal(inferenceCalls, 1);
});

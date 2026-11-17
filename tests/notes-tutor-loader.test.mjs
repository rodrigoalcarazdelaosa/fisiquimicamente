import test from 'node:test';
import assert from 'node:assert/strict';
import { setupTutorLoader } from '../assets/js/notes-tutor-loader.mjs';

const settle = () => new Promise((resolve) => setImmediate(resolve));

function setup(options = {}) {
  class Element extends EventTarget {
    hidden = true;
    attributes = {};
    dataset = {};
    setAttribute(key, value) { this.attributes[key] = value; }
    remove() {}
  }
  const root = new Element();
  const toggle = new Element();
  const status = new Element();
  const article = { contains: (node) => node === article };
  const calls = { imports: 0, fetches: 0, links: 0, initializations: 0, opens: [], toggles: 0 };
  const window = { getSelection: () => null };
  const document = {
    createElement: () => new Element(),
    querySelector: () => article,
    head: { append: (link) => { calls.links += 1; queueMicrotask(() => link.onload()); } },
  };
  root.dataset = { scriptUrl: '/tutor.mjs', contextUrl: '/context.json', stylesUrl: '/tutor.css',
    loadingLabel: 'Cargando…', errorLabel: 'Reintentar' };
  root.querySelector = (selector) => selector === '.notes-tutor-toggle' ? toggle : status;
  const data = { title: 'Ondas' };
  const module = { default: (_, received) => {
    assert.equal(received, data);
    calls.initializations += 1;
    return { open: (selection) => calls.opens.push(selection), toggle: () => { calls.toggles += 1; } };
  } };
  let resolveImport;
  const imported = options.deferImport ? new Promise((resolve) => { resolveImport = () => resolve(module); }) : Promise.resolve(module);
  const importTutor = () => { calls.imports += 1; return imported; };
  const fetch = async () => {
    calls.fetches += 1;
    return { ok: !(options.failFirst && calls.fetches === 1), json: async () => data };
  };
  setupTutorLoader(root, { document, window, fetch }, importTutor);
  return { root, toggle, status, calls, article, window, resolveImport,
    click: () => toggle.dispatchEvent(new Event('click')) };
}

test('no chat resources load before opening, including on pointerdown', async () => {
  const ui = setup();
  ui.toggle.dispatchEvent(new Event('pointerdown'));
  await settle();
  assert.equal(ui.root.hidden, false);
  assert.equal(ui.calls.imports + ui.calls.fetches + ui.calls.links, 0);
  ui.click(); await settle();
  assert.equal(ui.calls.imports, 1);
  assert.equal(ui.calls.fetches, 1);
  assert.equal(ui.calls.links, 1);
  assert.equal(ui.calls.opens.length, 1);
  assert.equal(ui.toggle.attributes['aria-busy'], 'false');
  assert.equal(ui.status.hidden, true);
});

test('reopening reuses the initialized chat, stylesheet and context', async () => {
  const ui = setup();
  ui.click(); await settle();
  ui.click(); ui.click(); await settle();
  assert.equal(ui.calls.initializations, 1);
  assert.equal(ui.calls.toggles, 2);
  assert.equal(ui.calls.imports, 1);
  assert.equal(ui.calls.fetches, 1);
  assert.equal(ui.calls.links, 1);
});

test('a failed context download displays an error and permits retrying', async () => {
  const ui = setup({ failFirst: true });
  ui.click(); await settle();
  assert.equal(ui.status.hidden, false);
  assert.equal(ui.status.textContent, 'Reintentar');
  assert.equal(ui.calls.initializations, 0);
  ui.click(); await settle();
  assert.equal(ui.calls.fetches, 2);
  assert.equal(ui.calls.links, 1);
  assert.equal(ui.calls.opens.length, 1);
  assert.equal(ui.status.hidden, true);
});

test('closing while loading keeps the panel closed without duplicating downloads', async () => {
  const ui = setup({ deferImport: true });
  ui.click(); ui.click();
  assert.equal(ui.toggle.attributes['aria-busy'], 'false');
  assert.equal(ui.status.hidden, true);
  ui.resolveImport(); await settle();
  assert.equal(ui.calls.opens.length, 0);
  ui.click(); await settle();
  assert.equal(ui.calls.toggles, 1);
  assert.equal(ui.calls.imports, 1);
  assert.equal(ui.calls.fetches, 1);
});

test('a passage selected before the first click survives the asynchronous download', async () => {
  const ui = setup({ deferImport: true });
  const range = { commonAncestorContainer: ui.article, cloneRange: () => range };
  ui.window.getSelection = () => ({ rangeCount: 1, isCollapsed: false, getRangeAt: () => range,
    toString: () => 'Una onda transporta energía.' });
  ui.toggle.dispatchEvent(new Event('pointerdown'));
  ui.window.getSelection = () => null;
  ui.click();
  ui.resolveImport(); await settle();
  assert.equal(ui.calls.opens[0].text, 'Una onda transporta energía.');
  assert.equal(ui.calls.opens[0].range, range);
});

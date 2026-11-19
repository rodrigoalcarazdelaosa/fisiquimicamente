import {search_config, i18n, content_type} from '@params';

const input = document.querySelector('#search-query');
const hits = document.querySelector('#search-hits');
const suggestions = document.querySelector('#search-common-queries');
const template = document.querySelector('#search-hit-fuse-template');
let engine;
let timer;
let generation = 0;

function loadEngine() {
  if (!engine) {
    engine = fetch(search_config.indexURI).then(async response => {
      if (!response.ok) throw new Error('Search index: ' + response.status);
      return new Fuse(await response.json(), {
        shouldSort: true, tokenize: true, threshold: search_config.threshold, location: 0,
        distance: 100, maxPatternLength: 32, minMatchCharLength: search_config.minLength,
        keys: [
          {name: 'title', weight: 0.99}, {name: 'summary', weight: 0.6},
          {name: 'authors', weight: 0.5}, {name: 'content', weight: 0.2},
          {name: 'tags', weight: 0.5}, {name: 'categories', weight: 0.5},
        ],
      });
    }).catch(error => { engine = null; throw error; });
  }
  return engine;
}

async function search(force = false) {
  const current = ++generation;
  const query = input.value.trim();
  const url = new URL(location.href);
  if (query) url.searchParams.set('q', query);
  else url.searchParams.delete('q');
  history.replaceState(history.state, '', url);
  hits.replaceChildren();
  if (suggestions) suggestions.hidden = !!query;
  if (!query || (!force && query.length < search_config.minLength)) return;
  try {
    const fuse = await loadEngine();
    if (current !== generation || !document.body.classList.contains('searching')) return;
    const results = fuse.search(query);
    const header = document.createElement(results.length ? 'h3' : 'div');
    header.className = results.length ? 'mt-0' : 'search-no-results';
    header.textContent = results.length ? results.length + ' ' + i18n.results : i18n.no_results;
    const fragment = document.createDocumentFragment();
    fragment.append(header);
    results.forEach((item, index) => {
      const hit = template.content.firstElementChild.cloneNode(true);
      hit.id = 'summary-' + index;
      const link = hit.querySelector('a');
      link.href = item.relpermalink;
      link.textContent = item.title;
      hit.querySelector('.search-hit-type').textContent = content_type[item.section] ?? item.section;
      hit.querySelector('.search-hit-description').textContent = item.summary;
      if (window.Mark) new Mark(hit).mark(query);
      fragment.append(hit);
    });
    hits.replaceChildren(fragment);
  } catch (error) {
    console.error('Search unavailable', error);
  }
}

if (input) {
  input.addEventListener('focus', () => { loadEngine().catch(console.error); });
  input.addEventListener('input', () => {
    ++generation;
    clearTimeout(timer);
    timer = setTimeout(() => search(), 250);
  });
  input.addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;
    clearTimeout(timer);
    search(true);
  });
  input.addEventListener('blur', () => clearTimeout(timer));
  const initial = new URLSearchParams(location.search).get('q');
  if (initial) {
    input.value = initial;
    document.addEventListener('DOMContentLoaded', () => search(true));
  }
}

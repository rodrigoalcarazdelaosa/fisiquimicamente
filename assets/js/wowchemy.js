import {search, i18n, footnotesURL, zoomURL, playersURL} from '@params';
import {scrollParentToChild} from './wowchemy-utils';
import {initNavigation} from './wowchemy-navigation';
import {initCarousels} from './wowchemy-carousel';
import {initTooltips} from './tooltips';
import {initThemeControl, isDarkTheme} from './wowchemy-theming';
import {initSearch} from './wowchemy-search';

function initSearchDialog() {
  let opener;
  const input = () => document.querySelector('#search-query, .ais-SearchBox-input');
  function toggle() {
    const opening = !document.body.classList.contains('searching');
    if (opening) {
      opener = document.activeElement;
      const gutter = window.innerWidth - document.documentElement.clientWidth;
      if (gutter) {
        const style = document.createElement('style');
        style.id = 'search-scrollbar';
        style.textContent = `.compensate-for-scrollbar{margin-right:${gutter}px}`;
        document.head.append(style);
        document.body.classList.add('compensate-for-scrollbar');
      }
      document.body.classList.add('searching');
      input()?.focus();
    } else {
      input()?.blur();
      document.body.classList.remove('searching', 'compensate-for-scrollbar');
      document.getElementById('search-scrollbar')?.remove();
      const url = new URL(location.href);
      url.searchParams.delete('q');
      history.replaceState(history.state, '', url);
      opener?.focus();
    }
  }
  document.querySelectorAll('.js-search').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    toggle();
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('searching')) toggle();
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey
      && !event.target.closest('input, textarea, [contenteditable="true"]')) {
      event.preventDefault();
      toggle();
    }
  });
  if (new URLSearchParams(location.search).get('q')) toggle();
}

function prepareContent() {
  document.querySelector('#TableOfContents')?.classList.add('nav', 'flex-column');
  document.querySelectorAll('#TableOfContents li').forEach(item => item.classList.add('nav-item'));
  document.querySelectorAll('#TableOfContents li a').forEach(link => link.classList.add('nav-link'));
  document.querySelectorAll('input[type="checkbox"][disabled]').forEach(input => input.closest('ul')?.classList.add('task-list'));
  for (const table of document.querySelectorAll('table')) {
    table.classList.add('table');
    if (!table.closest('.article-style') || table.parentElement.classList.contains('table-responsive')) continue;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive';
    table.before(wrapper);
    wrapper.append(table);
  }

  for (const code of document.querySelectorAll('pre > code')) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary btn-copy-code';
    button.textContent = i18n.copy;
    button.addEventListener('click', async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(code.textContent);
        } else {
          const range = document.createRange();
          range.selectNodeContents(code);
          const selection = getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          const copied = document.execCommand('copy');
          selection.removeAllRanges();
          if (!copied) return;
        }
        button.textContent = i18n.copied;
        setTimeout(() => { button.textContent = i18n.copy; }, 2000);
      } catch (error) {
        console.error('Copy failed', error);
      }
    });
    (code.closest('table') || code.closest('.highlight') || code.parentElement).append(button);
  }
}

function initPortfolio(container) {
  const section = container.closest('section');
  const initialFilter = section.querySelector('.default-project-filter')?.textContent || '*';
  const masonry = container.classList.contains('js-layout-masonry') && window.Isotope;
  const isotope = masonry ? new Isotope(container, {
    itemSelector: '.isotope-item', masonry: {gutter: 20}, filter: initialFilter,
  }) : null;
  const items = container.querySelectorAll('.isotope-item');
  const filters = [...section.querySelectorAll('.project-filters a')];

  function applyFilter(selector) {
    if (isotope) isotope.arrange({filter: selector});
    else for (const item of items) item.classList.toggle('d-none', !item.matches(selector));
  }

  function selectFilter(filter) {
    applyFilter(filter?.dataset.filter ?? initialFilter);
    for (const button of filters) {
      const active = button === filter;
      button.classList.toggle('active', active);
      if (!active) button.classList.remove('all');
      if (button.hasAttribute('data-category')) {
        if (active) button.setAttribute('aria-current', 'true');
        else button.removeAttribute('aria-current');
      }
    }
  }

  if (filters[0]?.hasAttribute('data-category')) {
    const defaultFilter = filters.find(filter => filter.dataset.category === '');

    function categoryURL(category) {
      const url = new URL(location.href);
      if (category) url.searchParams.set('categoria', category);
      else url.searchParams.delete('categoria');
      return url;
    }

    function restoreCategory() {
      const category = new URLSearchParams(location.search).get('categoria');
      selectFilter(filters.find(filter => filter.dataset.category === category) ?? defaultFilter);
      for (const filter of filters) filter.href = categoryURL(filter.dataset.category).href;
    }

    restoreCategory();
    window.addEventListener('popstate', restoreCategory);
    for (const filter of filters) {
      filter.addEventListener('click', event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const url = categoryURL(filter.dataset.category);
        if (url.href !== location.href) history.pushState(history.state, '', url);
        restoreCategory();
      });
    }
    return;
  }

  if (!isotope) applyFilter(initialFilter);
  for (const filter of filters) {
    filter.addEventListener('click', event => {
      event.preventDefault();
      selectFilter(filter);
    });
  }
}

function initPage() {
  if (document.querySelector('a.footnote-ref')) {
    import(footnotesURL).catch(error => console.error('Could not load footnotes', error));
  }
  prepareContent();
  initNavigation();
  initTooltips();
  initCarousels();
  if (search.search_config) {
    initSearchDialog();
    initSearch(search);
  }
  document.querySelectorAll('.projects-container.js-layout-row').forEach(initPortfolio);

  initThemeControl();

  if (document.querySelector('tgs-player, lottie-player')) {
    import(playersURL).catch(error => console.error('Could not load animation players', error));
  }

  if (document.querySelector('[data-zoomable]')) {
    import(zoomURL).then(({default: mediumZoom}) => {
      const zoom = mediumZoom('[data-zoomable]');
      const setBackground = dark => zoom.update({background: dark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)'});
      setBackground(isDarkTheme());
      document.addEventListener('wcThemeChange', event => setBackground(event.detail.isDarkTheme()));
    }).catch(error => console.error('Could not load image zoom', error));
  }

  const sidebar = document.querySelector('.docs-links');
  const current = sidebar?.querySelector('.active');
  if (current) scrollParentToChild(sidebar, current);
}

// The deferred bundle runs after parsing. Rocket Loader can postpone DOMContentLoaded listeners.
initPage();

window.addEventListener('load', () => {
  const portfolios = [...document.querySelectorAll('.projects-container.js-layout-masonry')];
  const loaded = portfolios.map(container => new Promise(resolve => {
    if (window.imagesLoaded) imagesLoaded(container, () => { initPortfolio(container); resolve(); });
    else { initPortfolio(container); resolve(); }
  }));
  Promise.all(loaded).then(() => {
    const toc = document.querySelector('.docs-toc');
    const current = toc?.querySelector('.nav-link.active');
    if (current) scrollParentToChild(toc, current);
  });
});

import mediumZoom from './vendor/medium-zoom.esm';
import './vendor/instantpage';
import {searchEnabled, i18n} from '@params';
import {scrollParentToChild} from './wowchemy-utils';
import {initNavigation, scrollToAnchor} from './wowchemy-navigation';
import {initCarousels} from './wowchemy-carousel';
import {initTooltips} from './tooltips';
import {showLatestReleases} from './wowchemy-github';
import {changeThemeModeClick, initThemeVariation, renderThemeVariation, onMediaQueryListEvent} from './wowchemy-theming';

function initSearchDialog() {
  if (!searchEnabled) return;
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
  document.querySelectorAll('table').forEach(table => table.classList.add('table'));

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
  const layout = section.querySelector('.isotope').classList.contains('js-layout-row') ? 'fitRows' : 'masonry';
  const isotope = new Isotope(container, {
    itemSelector: '.isotope-item',
    layoutMode: layout,
    masonry: {gutter: 20},
    filter: section.querySelector('.default-project-filter')?.textContent || '*',
  });
  for (const filter of section.querySelectorAll('.project-filters a')) {
    filter.addEventListener('click', event => {
      event.preventDefault();
      isotope.arrange({filter: filter.dataset.filter});
      for (const sibling of filter.parentElement.children) {
        sibling.classList.toggle('active', sibling === filter);
        if (sibling !== filter) sibling.classList.remove('all');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  prepareContent();
  initNavigation();
  initTooltips();
  initCarousels();
  initSearchDialog();

  const {isDarkTheme, themeMode} = initThemeVariation();
  renderThemeVariation(isDarkTheme, themeMode, true);
  ['light', 'dark', 'auto'].forEach((mode, index) => {
    document.querySelector('.js-set-theme-' + mode)?.addEventListener('click', event => {
      event.preventDefault();
      changeThemeModeClick(index);
    });
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onMediaQueryListEvent);

  const sidebar = document.querySelector('.docs-links');
  const current = sidebar?.querySelector('.active');
  if (current) scrollParentToChild(sidebar, current);

  showLatestReleases();
});

window.addEventListener('load', () => {
  const zoom = mediumZoom('[data-zoomable]');
  function setZoomBackground(dark) {
    zoom.update({background: dark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)'});
  }
  setZoomBackground(document.body.classList.contains('dark'));
  document.addEventListener('wcThemeChange', event => setZoomBackground(event.detail.isDarkTheme()));
  const portfolios = [...document.querySelectorAll('.projects-container')];
  const loaded = portfolios.map(container => new Promise(resolve => {
    if (!window.Isotope) return resolve();
    if (window.imagesLoaded) imagesLoaded(container, () => { initPortfolio(container); resolve(); });
    else { initPortfolio(container); resolve(); }
  }));
  Promise.all(loaded).then(() => {
    scrollToAnchor();
    const toc = document.querySelector('.docs-toc');
    const current = toc?.querySelector('.nav-link.active');
    if (current) scrollParentToChild(toc, current);
  });
});

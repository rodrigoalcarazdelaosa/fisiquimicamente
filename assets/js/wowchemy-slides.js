/* Reveal.js integration, adapted from Hugo Blox Builder (MIT). */
import {hasMarkdown, mathjaxURL, slides} from '@params';

// Reveal and its plugins expect camelCase, including in nested option objects.
function revealOptions(value) {
  if (Array.isArray(value)) return value.map(revealOptions);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([key, option]) => [
    key.replace(/[-_]([a-z])/gi, (_, letter) => letter.toUpperCase()),
    revealOptions(option)
  ]));
}

const options = revealOptions(slides?.reveal_options || {});
const plugins = [
  ...(hasMarkdown ? [RevealMarkdown] : []),
  RevealSearch, RevealNotes,
  ...(mathjaxURL ? [RevealMath.MathJax3] : []),
  RevealZoom,
];
if (mathjaxURL) options.mathjax3 = {...options.mathjax3, mathjax: mathjaxURL};

const printView = new URLSearchParams(location.search).has('print-pdf');
for (const frame of document.querySelectorAll('iframe[data-slide-embed]')) {
  if (printView) {
    frame.loading = 'eager';
    frame.src = frame.dataset.src;
    frame.removeAttribute('data-src');
    continue;
  }

  function keepLoaded() {
    if (!frame.hasAttribute('src')) return;
    // Keep simulations and video playback positions when revisiting a slide.
    frame.removeAttribute('data-src');
    frame.removeAttribute('data-lazy-loaded');
    frame.removeEventListener('load', keepLoaded);
  }
  frame.addEventListener('load', keepLoaded);
}

Reveal.initialize({...options, plugins});

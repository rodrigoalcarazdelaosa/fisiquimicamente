/* Reveal.js integration, adapted from Hugo Blox Builder (MIT). */
import {mathjaxURL, slides} from '@params';

// Reveal and its plugins expect camelCase, including in nested option objects.
function revealOptions(value) {
  if (Array.isArray(value)) return value.map(revealOptions);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([key, option]) => [
    key.replace(/[-_]([a-z])/gi, (_, letter) => letter.toUpperCase()),
    revealOptions(option)
  ]));
}

const {menuEnabled, ...options} = revealOptions(slides?.reveal_options || {});
const plugins = [RevealMarkdown, RevealSearch, RevealNotes, RevealMath.MathJax3, RevealZoom];
if (menuEnabled) plugins.push(RevealMenu);
Reveal.initialize({...options, mathjax3: {...options.mathjax3, mathjax: mathjaxURL}, plugins});

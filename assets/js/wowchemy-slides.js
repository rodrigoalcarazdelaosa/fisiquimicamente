/* Reveal.js integration, adapted from Hugo Blox Builder (MIT). */
import {slides} from '@params';

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
Reveal.initialize({...options, plugins});

if (slides?.diagram) {
  mermaid.initialize({...slides.diagram_options, startOnLoad: false});
  function renderDiagrams({currentSlide}) {
    const {h, v} = Reveal.getIndices();
    currentSlide.querySelectorAll('.mermaid:not(.done)').forEach((diagram, i) => {
      mermaid.mermaidAPI.render(`mermaid${h}-${v}-${i}`, diagram.textContent, svg => {
        diagram.innerHTML = svg;
        diagram.classList.add('done');
      });
    });
    Reveal.layout();
  }
  Reveal.on('ready', renderDiagrams);
  Reveal.on('slidechanged', renderDiagrams);
}

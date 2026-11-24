// MathJax Configuration
window.MathJax = {
  options: {
    ignoreHtmlClass: 'tex2jax_ignore|notes-tutor',
  },
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    macros: {
      symup: ['\\mathrm{#1}', 1],
    },
    processEscapes: false,
    packages: {'[+]': ['noerrors']},
  },
  loader: {
    load: ['[tex]/noerrors'],
  },
};

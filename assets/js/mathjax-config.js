// MathJax Configuration
window.MathJax = {
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

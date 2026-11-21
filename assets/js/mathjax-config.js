// MathJax Configuration
window.MathJax = {
  options: {
    // Don't render math in mindmaps as Markmap has its own math renderer.
    ignoreHtmlClass: 'markmap',
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

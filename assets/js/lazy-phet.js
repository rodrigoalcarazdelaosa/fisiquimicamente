function loadSimulation(frame) {
  frame.src = frame.dataset.phetSrc;
}

const simulations = document.querySelectorAll('iframe[data-phet-src]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      loadSimulation(entry.target);
    }
  }, { rootMargin: '300px 0px' });

  simulations.forEach((frame) => observer.observe(frame));
} else {
  simulations.forEach(loadSimulation);
}

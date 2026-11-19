(() => {
  const players = document.querySelectorAll('tgs-player');
  if (!players.length) return;
  for (const player of players) {
    if (player.hasAttribute('src') && !player.dataset.src) {
      player.dataset.src = player.getAttribute('src');
      player.removeAttribute('src');
    }
  }

  function load(player) {
    const dark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
    const src = (dark && player.dataset.srcDark) || player.dataset.src;
    if (!src || player.dataset.tgsLoaded === src) return;
    player.dataset.tgsLoaded = src;
    player.load(src);
    player.play();
  }

  customElements.whenDefined('tgs-player').then(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            load(entry.target);
            observer.unobserve(entry.target);
          }
        }
      }, {rootMargin: '300px 0px'});
      players.forEach(player => observer.observe(player));
    } else {
      players.forEach(load);
    }
    document.addEventListener('wcThemeChange', () => {
      players.forEach(player => {
        if (player.dataset.tgsLoaded) load(player);
      });
    });
  });
  if (!customElements.get('tgs-player')) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/tgs-player.js';
    document.head.append(script);
  }
})();

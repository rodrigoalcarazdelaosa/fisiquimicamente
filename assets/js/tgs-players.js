(() => {
  const players = document.querySelectorAll('tgs-player');
  if (!players.length) return;
  const visible = new Set();
  const loading = new Set();
  for (const player of players) {
    if (player.hasAttribute('src') && !player.dataset.src) {
      player.dataset.src = player.getAttribute('src');
      player.removeAttribute('src');
    }
  }

  function pauseOutsideViewport(player) {
    if ((!visible.has(player) || document.hidden) &&
        (player.currentState === 'playing' || player.currentState === 'frozen')) {
      player.pause();
    }
  }

  async function update(player) {
    if (!visible.has(player) || document.hidden) {
      pauseOutsideViewport(player);
      return;
    }
    if (loading.has(player)) return;
    const dark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
    const src = (dark && player.dataset.srcDark) || player.dataset.src;
    if (!src) return;
    if (player.dataset.tgsLoaded === src) {
      if (player.currentState === 'paused' || player.currentState === 'frozen') player.play();
      return;
    }

    loading.add(player);
    try {
      await player.load(src);
    } catch (error) {
      console.warn('Could not load animation', src, error);
      return;
    } finally {
      loading.delete(player);
    }
    player.dataset.tgsLoaded = src;
    // A scroll or theme change may have happened while the file was loading.
    update(player);
  }

  customElements.whenDefined('tgs-player').then(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
          update(entry.target);
        }
      });
      players.forEach(player => observer.observe(player));
    } else {
      players.forEach(player => visible.add(player));
    }
    // The player starts autoplay when the animation finishes rendering.
    players.forEach(player => player.addEventListener('play', () => pauseOutsideViewport(player)));
    const updateVisible = () => visible.forEach(update);
    document.addEventListener('wcThemeChange', updateVisible);
    document.addEventListener('visibilitychange', updateVisible);
    updateVisible();
  });
  if (!customElements.get('tgs-player')) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/tgs-player.js';
    document.head.append(script);
  }
})();

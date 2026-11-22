(() => {
  const players = document.querySelectorAll('tgs-player, lottie-player');
  if (!players.length) return;
  const visible = new Set();
  const loading = new Set();
  let playerScript;
  for (const player of players) {
    // Give the unregistered element the same display as the player so it can be observed.
    if (getComputedStyle(player).display === 'inline') player.style.display = 'block';
    if (player.localName !== 'tgs-player') continue;
    if (player.hasAttribute('src')) {
      player.dataset.src ||= player.getAttribute('src');
      player.removeAttribute('src');
    }
    // The player starts autoplay when the animation finishes rendering.
    player.addEventListener('play', () => pauseOutsideViewport(player));
  }

  function pauseOutsideViewport(player) {
    if ((!visible.has(player) || document.hidden) &&
        (player.currentState === 'playing' || player.currentState === 'frozen')) {
      player.pause();
    }
  }

  async function update(player) {
    if (!visible.has(player) || document.hidden) {
      if (player.localName === 'tgs-player') pauseOutsideViewport(player);
      return;
    }
    if (!customElements.get(player.localName)) {
      loadPlayerScript();
      return;
    }
    if (player.localName !== 'tgs-player') return;
    if (loading.has(player)) return;
    const dark = document.documentElement.classList.contains('dark');
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

  const updateVisible = () => visible.forEach(update);

  function loadPlayerScript() {
    if (playerScript) return;
    playerScript = document.createElement('script');
    playerScript.src = 'https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/tgs-player.js';
    playerScript.onload = updateVisible;
    playerScript.onerror = () => {
      playerScript.remove();
      playerScript = null;
    };
    document.body.append(playerScript);
  }

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
    updateVisible();
  }
  document.addEventListener('wcThemeChange', updateVisible);
  document.addEventListener('visibilitychange', updateVisible);
})();

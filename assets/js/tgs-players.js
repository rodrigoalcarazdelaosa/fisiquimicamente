import {playerURL, integrity} from '@params';
import {respectReducedMotion} from './player-motion';

const deck = window.Reveal;
const printView = deck?.isPrintView();

function initPlayers() {
  const players = document.querySelectorAll('tgs-player, lottie-player');
  if (!players.length) return;
  if (printView) players.forEach(player => player.removeAttribute('autoplay'));
  const reducedMotion = respectReducedMotion(players);
  const visible = new Set();
  const loading = new WeakSet();
  const loaded = new WeakMap();
  let playerScript;
  for (const player of players) {
    // Give the unregistered element the same display as the player so it can be observed.
    if (getComputedStyle(player).display === 'inline') player.style.display = 'block';
    if (player.hasAttribute('src')) {
      player.dataset.src ||= player.getAttribute('src');
      player.removeAttribute('src');
    }
    // The player starts autoplay when the animation finishes rendering.
    player.addEventListener('play', () => {
      if (!canLoad(player)) player.pause();
    });
  }

  function canLoad(player) {
    return printView || (visible.has(player) && !document.hidden
      && (!deck || (deck.isReady() && (deck.isScrollView() || deck.getCurrentSlide()?.contains(player))))
      && player.checkVisibility?.({visibilityProperty: true}) !== false);
  }

  async function update(player) {
    if (!canLoad(player)) {
      if (player.currentState === 'playing' || player.currentState === 'frozen') player.pause();
      return;
    }
    const dark = document.documentElement.classList.contains('dark');
    const src = (dark && player.dataset.srcDark) || player.dataset.src;
    if (!src) return;
    if (!customElements.get(player.localName)) {
      loadPlayerScript();
      return;
    }
    if (loading.has(player)) return;
    if (loaded.get(player) === src) {
      if (!reducedMotion.matches && player.hasAttribute('autoplay')
          && (player.currentState === 'paused' || player.currentState === 'frozen')) player.play();
      return;
    }

    loading.add(player);
    try {
      await player.updateComplete;
      if (!canLoad(player)) return;
      // Rendering already fetches the JSON. Skip the player's second download for validation.
      if (player.localName === 'lottie-player') player.disableCheck = true;
      await player.load(src);
      loaded.set(player, src);
    } catch (error) {
      console.warn('Could not load animation', src, error);
      return;
    } finally {
      loading.delete(player);
    }
    // A scroll or theme change may have happened while the file was loading.
    update(player);
  }

  const updateVisible = () => (printView ? players : visible).forEach(update);

  function loadPlayerScript() {
    if (playerScript) return;
    playerScript = document.createElement('script');
    playerScript.src = playerURL;
    playerScript.integrity = integrity;
    playerScript.crossOrigin = 'anonymous';
    playerScript.onload = updateVisible;
    playerScript.onerror = () => {
      playerScript.remove();
      playerScript = null;
    };
    document.body.append(playerScript);
  }

  if (printView) {
    updateVisible();
    return;
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
  for (const event of ['ready', 'slidechanged', 'slidetransitionend']) deck?.on(event, updateVisible);
  document.addEventListener('wcThemeChange', updateVisible);
  document.addEventListener('visibilitychange', updateVisible);
}

if (printView) deck.on('pdf-ready', initPlayers);
else initPlayers();

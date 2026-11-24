export function respectReducedMotion(players) {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const autoplay = [...players].filter(player => player.hasAttribute('autoplay'));
  if (!autoplay.length) return preference;

  const paused = new WeakSet();
  function pause(player) {
    player.pause();
    paused.add(player);
  }

  for (const player of autoplay) {
    player.addEventListener('ready', () => {
      if (preference.matches) pause(player);
    });
  }

  function update() {
    for (const player of autoplay) {
      player.toggleAttribute('autoplay', !preference.matches);
      if (preference.matches && ['playing', 'frozen'].includes(player.currentState)) {
        pause(player);
      } else if (!preference.matches && paused.delete(player)) {
        // A frozen player resumes on its next visibility change.
        const {top, right, bottom, left} = player.getBoundingClientRect();
        if (document.hidden || bottom <= 0 || top >= innerHeight || right <= 0 || left >= innerWidth) player.freeze();
        else player.play();
      }
    }
  }

  update();
  preference.addEventListener('change', update);
  return preference;
}

(() => {
  const references = document.querySelectorAll('a.footnote-ref');
  if (!references.length) return;

  const panel = document.createElement('div');
  panel.id = 'bottom-panel';
  panel.className = 'bottom-panel';
  panel.innerHTML = '<div class="popup-wrapper" id="popup-wrapper"><div id="popup-content"></div></div>';
  document.body.append(panel);
  const popup = panel.firstElementChild;
  const content = popup.firstElementChild;
  document.querySelectorAll('a.footnote-return').forEach(link => link.remove());

  for (const link of references) {
    link.addEventListener('click', event => {
      const note = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!note) return;
      event.preventDefault();
      content.innerHTML = note.innerHTML;
      popup.style.display = 'flex';
    });
  }
  window.addEventListener('scroll', () => { popup.style.display = 'none'; }, {passive: true});
})();

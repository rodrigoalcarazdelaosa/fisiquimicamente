(() => {
  const references = document.querySelectorAll('a.footnote-ref');
  if (!references.length) return;

  if (!document.getElementById('bottom-panel')) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="bottom-panel" id="bottom-panel">
        <div class="popup-wrapper" id="popup-wrapper"><div id="popup-content"></div></div>
      </div>`);
  }
  const popup = document.getElementById('popup-wrapper');
  const content = document.getElementById('popup-content');
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

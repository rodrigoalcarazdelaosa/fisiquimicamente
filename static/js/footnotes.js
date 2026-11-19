(() => {
  const references = document.querySelectorAll('sup a.footnote-ref');
  if (!references.length) return;

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

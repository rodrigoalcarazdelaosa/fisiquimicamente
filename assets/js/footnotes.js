export function initFootnotes({footnote, close}) {
  if (!('showPopover' in HTMLElement.prototype)) return;
  const references = document.querySelectorAll('a.footnote-ref');
  if (!references.length) return;

  const popup = document.createElement('div');
  popup.id = 'bottom-panel';
  popup.className = 'bottom-panel';
  popup.setAttribute('popover', 'auto');
  popup.setAttribute('role', 'dialog');
  popup.setAttribute('aria-label', footnote);
  popup.innerHTML = `
    <div class="popup-wrapper">
      <div id="popup-content" tabindex="-1" autofocus></div>
      <button class="popup-close" type="button" popovertarget="bottom-panel" popovertargetaction="hide">×</button>
    </div>`;
  const content = popup.querySelector('#popup-content');
  popup.querySelector('.popup-close').setAttribute('aria-label', close);
  document.body.append(popup);

  for (const link of references) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      const note = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!note) return;
      event.preventDefault();
      popup.hidePopover();
      link.focus({preventScroll: true});
      content.innerHTML = note.innerHTML;
      popup.showPopover();
    });
  }
  popup.addEventListener('click', event => {
    if (event.target.closest('.footnote-backref')) popup.hidePopover();
  });
  window.addEventListener('scroll', () => popup.hidePopover(), {passive: true});
}

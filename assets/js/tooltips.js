// The markup and placement classes match the site's existing tooltip stylesheet.
export function initTooltips() {
  let active;
  let tip;
  let sequence = 0;
  function position() {
    if (!active) return;
    const rect = active.getBoundingClientRect();
    let side = active.dataset.placement || 'top';
    const opposite = {top: 'bottom', bottom: 'top', left: 'right', right: 'left'};
    const space = {top: rect.top, bottom: innerHeight - rect.bottom, left: rect.left, right: innerWidth - rect.right};
    tip.className = 'tooltip show bs-tooltip-' + side;
    const required = ['top', 'bottom'].includes(side) ? tip.offsetHeight : tip.offsetWidth;
    if (space[side] < required && space[opposite[side]] > space[side]) {
      side = opposite[side];
      tip.className = 'tooltip show bs-tooltip-' + side;
    }
    const vertical = side === 'top' || side === 'bottom';
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = vertical ? centerX - tip.offsetWidth / 2 : side === 'left' ? rect.left - tip.offsetWidth : rect.right;
    const y = !vertical ? centerY - tip.offsetHeight / 2 : side === 'top' ? rect.top - tip.offsetHeight : rect.bottom;
    const left = Math.max(0, Math.min(innerWidth - tip.offsetWidth, x));
    const top = Math.max(0, Math.min(innerHeight - tip.offsetHeight, y));
    Object.assign(tip.style, {position: 'fixed', left: left + 'px', top: top + 'px'});
    const arrow = tip.firstElementChild;
    arrow.style.left = vertical ? (centerX - left - arrow.offsetWidth / 2) + 'px' : '';
    arrow.style.top = vertical ? '' : (centerY - top - arrow.offsetHeight / 2) + 'px';
  }
  function hide() {
    if (!active) return;
    active.removeAttribute('aria-describedby');
    tip.remove();
    active = null;
  }
  function show(target) {
    if (active === target) return;
    hide();
    active = target;
    tip = document.createElement('div');
    tip.id = 'site-tooltip-' + ++sequence;
    tip.setAttribute('role', 'tooltip');
    tip.innerHTML = '<div class="arrow"></div><div class="tooltip-inner"></div>';
    tip.lastElementChild.textContent = target.dataset.originalTitle;
    target.setAttribute('aria-describedby', tip.id);
    document.body.append(tip);
    position();
  }
  document.querySelectorAll('[data-toggle="tooltip"]').forEach(target => {
    const label = target.getAttribute('title') || target.dataset.originalTitle;
    if (!label) return;
    target.dataset.originalTitle = label;
    target.removeAttribute('title');
    target.addEventListener('mouseenter', () => show(target));
    target.addEventListener('mouseleave', hide);
    const focusable = target.closest('a, button, [tabindex]') || target;
    focusable.addEventListener('focus', () => show(target));
    focusable.addEventListener('blur', hide);
  });
  window.addEventListener('scroll', position, {capture: true, passive: true});
  window.addEventListener('resize', position);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
}

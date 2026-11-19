const navbar = document.getElementById('navbar-main');
const navbarHeight = () => navbar?.getBoundingClientRect().height || 0;

function anchorTarget(hash) {
  try {
    return hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

export function scrollToAnchor(hash = location.hash, smooth = false) {
  const target = anchorTarget(hash);
  if (target) {
    window.scrollTo({
      top: Math.ceil(scrollY + target.getBoundingClientRect().top - navbarHeight()),
      behavior: smooth && !matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant',
    });
  }
}

function trackSections() {
  const menu = document.querySelector(document.body.dataset.target || '#TableOfContents');
  if (!menu) return;
  const links = [...menu.querySelectorAll('a')].map(link => ({
    link,
    target: anchorTarget(link.dataset.target?.startsWith('#') ? link.dataset.target : link.hash),
  })).filter(({link, target}) => target && link.pathname === location.pathname);
  if (!links.length) return;

  let offsets = [];
  let active;
  function highlight() {
    const y = scrollY + navbarHeight() + 1;
    const atBottom = scrollY > 0 && scrollY + innerHeight >= document.documentElement.scrollHeight - 1;
    const next = atBottom ? offsets.at(-1)?.link : offsets.findLast(section => section.top <= y)?.link;
    if (next === active) return;
    active?.classList.remove('active');
    next?.classList.add('active');
    active = next;
  }
  function measure() {
    offsets = links.map(({link, target}) => ({link, top: target.getBoundingClientRect().top + scrollY}))
      .sort((a, b) => a.top - b.top);
    highlight();
  }
  measure();
  new ResizeObserver(measure).observe(document.body);
  window.addEventListener('scroll', highlight, {passive: true});
  window.addEventListener('load', measure);
}

function setCollapse(button, open) {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  if (!panel || panel.classList.contains('collapsing') || panel.classList.contains('show') === open) return;

  button.setAttribute('aria-expanded', String(open));
  button.classList.toggle('collapsed', !open);
  panel.style.height = open ? '0px' : panel.getBoundingClientRect().height + 'px';
  panel.classList.remove('collapse', 'show');
  panel.classList.add('collapsing');
  panel.getBoundingClientRect();
  panel.style.height = open ? panel.scrollHeight + 'px' : '0px';
  // Waiting on CSS animations also resolves when reduced motion disables transitions.
  Promise.allSettled(panel.getAnimations().map(animation => animation.finished)).then(() => {
    panel.classList.remove('collapsing');
    panel.classList.add('collapse');
    panel.classList.toggle('show', open);
    panel.style.height = '';
  });
}

function initDropdowns() {
  let active;
  let closeTimer;
  function close() {
    clearTimeout(closeTimer);
    if (!active) return;
    active.classList.remove('show');
    active.querySelector('.dropdown-menu').classList.remove('show');
    active.querySelector('[data-toggle="dropdown"]').setAttribute('aria-expanded', 'false');
    active = null;
  }
  function open(dropdown) {
    close();
    active = dropdown;
    dropdown.classList.add('show');
    dropdown.querySelector('.dropdown-menu').classList.add('show');
    dropdown.querySelector('[data-toggle="dropdown"]').setAttribute('aria-expanded', 'true');
  }
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('[data-toggle="dropdown"]');
    if (!trigger) return;
    trigger.setAttribute('aria-expanded', 'false');
    dropdown.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse' && matchMedia('(hover: hover)').matches) open(dropdown);
    });
    dropdown.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse' && active === dropdown) closeTimer = setTimeout(close, 300);
    });
    trigger.addEventListener('click', event => {
      event.preventDefault();
      active === dropdown ? close() : open(dropdown);
    });
    dropdown.addEventListener('keydown', event => {
      const items = [...dropdown.querySelectorAll('.dropdown-item:not(.disabled)')];
      if (event.key === 'Escape') {
        close();
        trigger.focus();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (active !== dropdown) open(dropdown);
        const index = items.indexOf(document.activeElement);
        const direction = event.key === 'ArrowUp' ? -1 : 1;
        items[Math.min(items.length - 1, Math.max(0, index + direction))]?.focus();
      }
    });
  });
  document.addEventListener('click', event => {
    if (!active?.contains(event.target) || event.target.closest('.dropdown-item')) close();
  });
  document.addEventListener('focusin', event => {
    if (!active?.contains(event.target)) close();
  });
}

export function initNavigation() {
  trackSections();
  initDropdowns();
  document.addEventListener('click', event => {
    const toggle = event.target.closest('[data-toggle="collapse"]');
    if (toggle) setCollapse(toggle, toggle.getAttribute('aria-expanded') !== 'true');

    const link = event.target.closest('a');
    if (!link) return;
    const mobileNav = link.closest('.navbar-collapse.show');
    if (mobileNav && !link.matches('[data-toggle="dropdown"]')) {
      const button = navbar.querySelector(`[aria-controls="${CSS.escape(mobileNav.id)}"]`);
      if (button) setCollapse(button, false);
    }
    if (link.matches('#navbar-main .nav-link, .js-scroll') && link.origin === location.origin
      && link.pathname === location.pathname && anchorTarget(link.hash) && document.querySelector('.js-widget-page')) {
      event.preventDefault();
      scrollToAnchor(link.hash, true);
    }
  });
  window.addEventListener('hashchange', () => scrollToAnchor());
}

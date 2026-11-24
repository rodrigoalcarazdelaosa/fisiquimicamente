const navbar = document.getElementById('navbar-main');
let breadcrumbHeight = 0;
const headerHeight = () => (navbar?.getBoundingClientRect().height || 0) + breadcrumbHeight;

function anchorTarget(hash) {
  try {
    return hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function initScrollHeader() {
  const header = navbar?.closest('[data-hide-on-scroll]');
  if (!header) return;

  const original = document.querySelector('.page-body nav[aria-label="breadcrumb"]');
  const originalList = original?.querySelector('.breadcrumb');
  const fallback = header.querySelector('template[data-header-breadcrumb]')?.content.firstElementChild;
  const breadcrumb = (original || fallback)?.cloneNode(true);
  const scrollPosition = () => {
    const root = document.scrollingElement;
    return Math.max(0, Math.min(window.scrollY, root.scrollHeight - root.clientHeight));
  };

  function updateBreadcrumb(y, navbarHeight) {
    breadcrumb?.classList.toggle('header-breadcrumb--visible',
      y > navbarHeight && (original?.getBoundingClientRect().bottom ?? 0) <= navbarHeight);
  }

  if (breadcrumb) {
    breadcrumb.className = 'header-breadcrumb';
    header.append(breadcrumb);
    const observer = new ResizeObserver(() => {
      const bounds = originalList?.getBoundingClientRect();
      breadcrumb.classList.toggle('header-breadcrumb--aligned', Boolean(bounds?.width));
      if (bounds?.width) {
        breadcrumb.style.setProperty('--breadcrumb-left', `${bounds.left - header.getBoundingClientRect().left}px`);
        breadcrumb.style.setProperty('--breadcrumb-width', `${bounds.width}px`);
      }
      breadcrumbHeight = Math.ceil(breadcrumb.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--header-breadcrumb-height', `${breadcrumbHeight}px`);
      updateBreadcrumb(scrollPosition(), navbar.offsetHeight);
    });
    observer.observe(breadcrumb);
    if (originalList) observer.observe(originalList);
  }

  let previousY = scrollPosition();
  let downFrom = previousY;

  window.addEventListener('scroll', () => {
    const y = scrollPosition();
    const navbarHeight = navbar.offsetHeight;
    updateBreadcrumb(y, navbarHeight);
    if (y < previousY || y <= navbarHeight || navbar.querySelector('[aria-expanded="true"]') || header.querySelector(':focus-visible')) {
      header.classList.remove('header--hidden');
      downFrom = y;
    } else if (y - downFrom >= 12) {
      header.classList.add('header--hidden');
    }
    previousY = y;
  }, {passive: true});

  header.addEventListener('focusin', () => {
    header.classList.remove('header--hidden');
    downFrom = previousY;
  });
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
    const y = scrollY + headerHeight() + 1;
    const atBottom = scrollY > 0 && scrollY + innerHeight >= document.documentElement.scrollHeight - 1;
    let index = offsets.length - 1;
    if (!atBottom) {
      while (index >= 0 && offsets[index].top > y) index--;
    }
    const next = offsets[index]?.link;
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
  new ResizeObserver(measure).observe(document.querySelector('.page-body'));
  window.addEventListener('scroll', highlight, {passive: true});
  window.addEventListener('load', measure);
}

function placeArticleContents() {
  const toc = document.querySelector('.article-toc-inner #TableOfContents');
  const mobilePanel = document.querySelector('.article-mobile-toc-panel');
  if (!toc || !mobilePanel) return;

  const desktopPanel = toc.parentElement;
  const nextSibling = toc.nextSibling;
  const desktop = matchMedia('(min-width: 1200px)');
  function place() {
    if (desktop.matches) {
      toc.id = 'TableOfContents';
      desktopPanel.insertBefore(toc, nextSibling);
    } else {
      toc.id = 'TableOfContentsMobile';
      mobilePanel.append(toc);
    }
  }
  place();
  desktop.addEventListener('change', place);
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
  placeArticleContents();
  initDropdowns();
  initScrollHeader();
  document.addEventListener('click', event => {
    const toggle = event.target.closest('[data-toggle="collapse"]');
    if (toggle) setCollapse(toggle, toggle.getAttribute('aria-expanded') !== 'true');

    const link = event.target.closest('a');
    if (!link) return;
    const mobileToc = link.closest('.article-mobile-toc');
    if (mobileToc && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) mobileToc.open = false;

    const mobileNav = link.closest('.navbar-collapse.show');
    if (mobileNav && !link.matches('[data-toggle="dropdown"]')) {
      const button = navbar.querySelector(`[aria-controls="${CSS.escape(mobileNav.id)}"]`);
      if (button) setCollapse(button, false);
    }
    if (!link.matches('#navbar-main .nav-link, .js-scroll') || link.origin !== location.origin
      || link.pathname !== location.pathname || !document.querySelector('.js-widget-page')) return;

    const target = anchorTarget(link.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  });
}

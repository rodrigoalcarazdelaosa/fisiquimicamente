export function initCarousels() {
  for (const carousel of document.querySelectorAll('[data-ride="carousel"]')) {
    const slides = [...carousel.querySelectorAll('.carousel-item')];
    if (!slides.length) continue;
    const indicators = [...carousel.querySelectorAll('[data-slide-to]')];
    const interval = Number(carousel.dataset.interval || 5000);
    let index = Math.max(0, slides.findIndex(slide => slide.classList.contains('active')));
    let moving = false;
    let timer;
    let startX;
    let nearby = !('IntersectionObserver' in window);

    function schedule() {
      clearTimeout(timer);
      if (slides.length > 1 && nearby && interval > 0 && !document.hidden && !carousel.matches(':hover')) {
        timer = setTimeout(() => go(index + 1), interval);
      }
    }
    async function go(requested) {
      const next = (requested + slides.length) % slides.length;
      if (moving || next === index) return;
      moving = true;
      const current = slides[index];
      const incoming = slides[next];
      const forward = requested > index;
      const order = 'carousel-item-' + (forward ? 'next' : 'prev');
      const movement = 'carousel-item-' + (forward ? 'left' : 'right');
      indicators[index]?.classList.remove('active');
      indicators[next]?.classList.add('active');
      if (carousel.classList.contains('slide')) {
        incoming.classList.add(order);
        incoming.getBoundingClientRect();
        current.classList.add(movement);
        incoming.classList.add(movement);
        await Promise.allSettled(incoming.getAnimations().map(animation => animation.finished));
      }
      current.classList.remove('active', movement);
      incoming.classList.remove(order, movement);
      incoming.classList.add('active');
      indicators[index]?.removeAttribute('aria-current');
      indicators[next]?.setAttribute('aria-current', 'true');
      index = next;
      moving = false;
      schedule();
    }
    carousel.addEventListener('click', event => {
      const control = event.target.closest('[data-slide], [data-slide-to]');
      if (!control) return;
      event.preventDefault();
      go(control.hasAttribute('data-slide-to') ? Number(control.dataset.slideTo)
        : index + (control.dataset.slide === 'next' ? 1 : -1));
    });
    carousel.addEventListener('keydown', event => {
      if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && !event.target.matches('textarea, input')) {
        event.preventDefault();
        go(index + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    carousel.addEventListener('touchstart', event => {
      startX = event.touches.length === 1 ? event.touches[0].clientX : null;
    }, {passive: true});
    carousel.addEventListener('touchend', event => {
      const delta = event.changedTouches[0].clientX - startX;
      if (startX !== null && Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
      startX = null;
    }, {passive: true});
    carousel.addEventListener('mouseenter', () => clearTimeout(timer));
    carousel.addEventListener('mouseleave', schedule);
    document.addEventListener('visibilitychange', schedule);
    if (nearby) {
      carousel.classList.add('carousel-background-ready');
    } else {
      const observer = new IntersectionObserver(([entry]) => {
        nearby = entry.isIntersecting;
        if (nearby) carousel.classList.add('carousel-background-ready');
        schedule();
      }, {rootMargin: '200px 0px'});
      observer.observe(carousel);
    }
    schedule();
  }
}

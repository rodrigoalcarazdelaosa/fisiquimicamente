// Keep links to the original images usable even when the gallery CDN is unavailable.
(() => {
  if (!window.PhotoSwipe) return;
  const albums = new Map();
  for (const link of document.querySelectorAll('a[data-fancybox]')) {
    const key = link.dataset.fancybox;
    if (!albums.has(key)) albums.set(key, []);
    albums.get(key).push(link);
  }

  let viewer;
  function openAlbum(key, index, fromHash) {
    const links = albums.get(key);
    if (viewer || !links?.[index]) return;
    const items = links.map(link => {
      const thumb = link.querySelector('img');
      return {
        element: link, src: link.href, msrc: thumb.src, alt: thumb.alt,
        width: Number(link.dataset.width), height: Number(link.dataset.height),
        caption: link.dataset.caption || '', thumbCropped: true
      };
    });
    let panel, caption, playButton, progress, playing = false, playTimer, idleTimer;
    const touch = matchMedia('(pointer: coarse)').matches;
    let lastWheel = 0;
    let navigatingHistory = false;
    const lightbox = new PhotoSwipe({
      dataSource: items, index, loop: false, bgOpacity: 0.9,
      indexIndicatorSep: ' / ', secondaryZoomLevel: 1,
      showHideAnimationType: 'zoom', showAnimationDuration: 366, hideAnimationDuration: 366,
      imageClickAction: 'zoom', bgClickAction: 'close',
      getViewportSizeFn: () => ({
        x: document.documentElement.clientWidth - (panel?.offsetWidth || 0),
        y: window.innerHeight
      }),
      paddingFn: ({y}) => {
        const margin = y <= 576 ? 6 : 44;
        return {left: 0, right: 0, top: margin,
          bottom: touch ? margin : Math.max(margin, (caption?.offsetHeight || 0) - 50)};
      }
    });
    viewer = lightbox;
    const multiple = links.length > 1;
    const hashFor = i => '#' + encodeURIComponent(key + (multiple ? '-' + (i + 1) : ''));
    if (!fromHash) history.pushState(history.state, '', hashFor(index));

    function scheduleSlide() {
      clearTimeout(playTimer);
      progress?.getAnimations().forEach(animation => animation.cancel());
      if (progress) progress.hidden = !playing || document.hidden;
      if (playing && !document.hidden) {
        progress.animate([{transform: 'scaleX(0)'}, {transform: 'scaleX(1)'}], 3000);
        playTimer = setTimeout(() => {
          if (lightbox.currIndex === items.length - 1) togglePlay();
          else lightbox.next();
        }, 3000);
      }
    }
    function togglePlay() {
      if (!multiple) return;
      playing = !playing;
      playButton.setAttribute('aria-pressed', String(playing));
      playButton.title = playing ? 'Pause slideshow' : 'Start slideshow';
      playButton.setAttribute('aria-label', playButton.title);
      if (playing && lightbox.currIndex === items.length - 1) lightbox.goTo(0);
      scheduleSlide();
    }
    function toggleThumbs() {
      if (!multiple) return;
      panel.hidden = !panel.hidden;
      lightbox.element.classList.toggle('gallery-thumbs-open', !panel.hidden);
      lightbox.element.querySelector('.pswp__button--thumbs').setAttribute('aria-expanded', String(!panel.hidden));
      lightbox.updateSize(true);
      if (!panel.hidden) panel.children[lightbox.currIndex].scrollIntoView({block: 'nearest'});
    }
    function showControls() {
      clearTimeout(idleTimer);
      lightbox.element.classList.add('pswp--ui-visible');
      if (touch) return;
      idleTimer = setTimeout(() => lightbox.element?.classList.remove('pswp--ui-visible'), 3000);
    }

    lightbox.on('uiRegister', () => {
      const ui = lightbox.ui;
      ui.registerElement({
        name: 'caption', appendTo: 'root', className: 'gallery-caption fancybox-caption',
        onInit: el => {
          caption = el;
          // Supply the caption height before PhotoSwipe sizes the first image.
          caption.innerHTML = items[index].caption;
          caption.hidden = !items[index].caption;
        }
      });
      if (!multiple) return;
      ui.registerElement({
        name: 'progress', appendTo: 'wrapper', onInit: el => { progress = el; el.hidden = true; }
      });
      ui.registerElement({
        name: 'play', title: 'Start slideshow', isButton: true, order: 12,
        html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="play" d="M8 5v14l11-7z"/><path class="pause" d="M7 5h4v14H7zm6 0h4v14h-4z"/></svg>',
        onInit: el => { playButton = el; el.setAttribute('aria-pressed', 'false'); },
        onClick: togglePlay
      });
      ui.registerElement({
        name: 'thumbs', title: 'Thumbnails', isButton: true, order: 13,
        html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/></svg>',
        onInit: el => el.setAttribute('aria-expanded', 'false'), onClick: toggleThumbs
      });
      ui.registerElement({
        name: 'thumb-panel', appendTo: 'root',
        onInit: el => {
          panel = el;
          panel.hidden = true;
          items.forEach((item, i) => {
            const button = document.createElement('button');
            button.type = 'button';
            const img = new Image();
            img.src = item.msrc;
            img.alt = item.alt;
            button.append(img);
            button.addEventListener('click', () => lightbox.goTo(i));
            panel.append(button);
          });
        }
      });
    });
    lightbox.on('change', () => {
      const i = lightbox.currIndex;
      // The shortcode stores Hugo-rendered Markdown in data-caption, including links.
      caption.innerHTML = items[i].caption;
      caption.hidden = !items[i].caption;
      if (panel) {
        panel.querySelector('[aria-current]')?.removeAttribute('aria-current');
        panel.children[i].setAttribute('aria-current', 'true');
        if (!panel.hidden) panel.children[i].scrollIntoView({block: 'nearest'});
      }
      if (location.hash !== hashFor(i)) history.replaceState(history.state, '', hashFor(i));
      lightbox.updateSize(true);
      scheduleSlide();
    });
    lightbox.on('keydown', event => {
      const e = event.originalEvent;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      showControls();
      switch (e.key.toLowerCase()) {
        case 'backspace': lightbox.close(); break;
        case 'g': toggleThumbs(); break;
        case ' ':
        case 'p':
          if (e.target.closest('a,button,input')) return;
          togglePlay();
          break;
        case 'f':
          if (document.fullscreenElement) document.exitFullscreen();
          else lightbox.element.requestFullscreen?.();
          break;
        case 'arrowup': lightbox.prev(); break;
        case 'arrowdown': lightbox.next(); break;
        default: return;
      }
      e.preventDefault();
      event.preventDefault();
    });
    lightbox.on('wheel', event => {
      const e = event.originalEvent;
      if (e.ctrlKey || !multiple) return;
      event.preventDefault();
      if (panel?.contains(e.target)) { panel.scrollTop += e.deltaY; return; }
      if (caption.contains(e.target)) { caption.scrollTop += e.deltaY; return; }
      if (performance.now() - lastWheel < 250) return;
      lastWheel = performance.now();
      if ((e.deltaY || e.deltaX) > 0) lightbox.next();
      else lightbox.prev();
    });
    function syncHistory() {
      if (hashFor(lightbox.currIndex) === location.hash) return;
      const i = items.findIndex((_, i) => hashFor(i) === location.hash);
      if (i >= 0) lightbox.goTo(i);
      else { navigatingHistory = true; lightbox.close(); }
    }
    lightbox.on('afterInit', () => {
      document.body.classList.add('gallery-open');
      lightbox.element.addEventListener('pointermove', showControls);
      document.addEventListener('visibilitychange', scheduleSlide);
      window.addEventListener('hashchange', syncHistory);
      showControls();
    });
    lightbox.on('close', () => {
      clearTimeout(playTimer);
      clearTimeout(idleTimer);
      document.removeEventListener('visibilitychange', scheduleSlide);
      window.removeEventListener('hashchange', syncHistory);
      if (!navigatingHistory) {
        if (fromHash) history.replaceState(history.state, '', location.pathname + location.search);
        else history.back();
      }
    });
    lightbox.on('destroy', () => {
      document.body.classList.remove('gallery-open');
      viewer = null;
      openFromHash();
    });
    lightbox.init();
  }

  function openFromHash() {
    if (viewer) return;
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    if (albums.has(hash)) return openAlbum(hash, 0, true);
    const match = hash.match(/^(.*)-(\d+)$/);
    if (match) openAlbum(match[1], Number(match[2]) - 1, true);
  }
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    const link = event.target.closest('a[data-fancybox]');
    if (!link || viewer) return;
    event.preventDefault();
    const key = link.dataset.fancybox;
    openAlbum(key, albums.get(key).indexOf(link), false);
  });
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();

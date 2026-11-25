import {chart, chartAnnotation, chartSankey, widgets} from '@params';

const scripts = new Map();
function loadScript({url, integrity}) {
  if (!scripts.has(url)) {
    const request = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      if (integrity) {
        script.integrity = integrity;
        script.crossOrigin = 'anonymous';
      }
      script.onload = resolve;
      script.onerror = () => {
        script.remove();
        reject(new Error(`Unable to load ${url}`));
      };
      document.head.append(script);
    }).catch(error => {
      scripts.delete(url);
      throw error;
    });
    scripts.set(url, request);
  }
  return scripts.get(url);
}

async function loadChartLibrary(target) {
  await loadScript(chart);
  if (target.dataset.chartKind === 'sankey') {
    await loadScript(chartSankey);
  }
  if (target.hasAttribute('data-chart-annotation')) await loadScript(chartAnnotation);
  return window.Chart;
}

function fitChart(chart, printView) {
  const container = chart.canvas.parentElement;
  const resize = () => {
    const {clientWidth: width, clientHeight: height} = container;
    if (width && height && (chart.width !== width || chart.height !== height)) {
      chart.resize(width, height);
    }
  };
  // Reveal scales the slide with a transform. Chart.js needs its unscaled dimensions.
  resize();
  if (!printView && 'ResizeObserver' in window) new ResizeObserver(resize).observe(container);
}

const selector = '[data-chart-src], [data-deferred-widget]';
const deck = window.Reveal;
const printView = deck?.isPrintView();

function initContent() {
  const nearby = new Set();
  const pending = new WeakSet();
  const finished = new WeakSet();
  const canRender = target => printView || (nearby.has(target)
    && !target.closest('details:not([open])')
    && (!deck || (deck.isReady() && (deck.isScrollView() || deck.getCurrentSlide()?.contains(target)))));

  async function render(target) {
    if (pending.has(target) || finished.has(target) || !canRender(target)) return;
    pending.add(target);
    try {
      if (target.dataset.chartSrc) {
        const [{default: draw}, library] = await Promise.all([
          import(target.dataset.chartSrc), loadChartLibrary(target),
        ]);
        if (!canRender(target)) return;
        fitChart(draw(target, library, printView), printView);
      } else {
        const frame = target.querySelector('iframe[data-widget-src]');
        await loadScript({url: widgets[target.dataset.deferredWidget]}).finally(() => {
          if (frame && !frame.hasAttribute('src')) frame.src = frame.dataset.widgetSrc;
        });
      }
      finished.add(target);
      observer?.unobserve(target);
      nearby.delete(target);
    } catch (error) {
      console.warn('Embedded content unavailable', error);
    } finally {
      pending.delete(target);
    }
  }

  const observer = !printView && 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        for (const {target, isIntersecting} of entries) {
          if (isIntersecting) {
            nearby.add(target);
            render(target);
          } else {
            nearby.delete(target);
          }
        }
      }, {rootMargin: '300px 0px'})
    : null;

  for (const target of document.querySelectorAll(selector)) {
    if (observer) observer.observe(target);
    else {
      nearby.add(target);
      render(target);
    }
  }
  for (const event of ['ready', 'slidechanged', 'slidetransitionend']) {
    deck?.on(event, () => nearby.forEach(render));
  }
  document.addEventListener('toggle', event => {
    if (event.target instanceof HTMLDetailsElement && event.target.open) nearby.forEach(render);
  }, true);
}

if (printView) deck.on('pdf-ready', initContent);
else initContent();

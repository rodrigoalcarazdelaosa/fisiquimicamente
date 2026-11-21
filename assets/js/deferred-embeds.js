function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => {
      script.remove();
      reject(new Error(`Unable to load ${src}`));
    };
    document.head.append(script);
  });
}

let adobe;
function loadAdobe() {
  if (adobe) return adobe;
  if (window.AdobeDC?.View) return Promise.resolve(window.AdobeDC.View);
  return adobe = new Promise((resolve, reject) => {
    const readyEvent = 'adobe_dc_view_sdk.ready';
    const stopWaiting = () => {
      clearTimeout(timeout);
      document.removeEventListener(readyEvent, ready);
    };
    const fail = error => {
      stopWaiting();
      reject(error);
    };
    const ready = () => {
      stopWaiting();
      resolve(window.AdobeDC.View);
    };
    const timeout = setTimeout(() => fail(new Error('PDF viewer did not initialize')), 20000);
    document.addEventListener(readyEvent, ready, {once: true});
    loadScript('https://documentcloud.adobe.com/view-sdk/viewer.js').catch(fail);
  }).catch(error => {
    adobe = undefined;
    throw error;
  });
}

async function renderPdf(target) {
  const {pdfUrl, pdfClientId, pdfFilename, pdfLocale, pdfMode, pdfFallback} = target.dataset;
  try {
    if (!pdfClientId) throw new Error('PDF viewer has no client ID');
    const View = await loadAdobe();
    const viewer = new View({clientId: pdfClientId, divId: target.id, locale: pdfLocale});
    await viewer.previewFile({
      content: {location: {url: pdfUrl}},
      metaData: {fileName: pdfFilename},
    }, {embedMode: pdfMode});
  } catch (error) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.textContent = `${pdfFallback} ${pdfFilename}`;
    target.replaceChildren(link);
    console.warn('PDF preview unavailable', error);
  }
}

let widgets;
function loadWidgets() {
  if (window.twttr?.widgets) return Promise.resolve(window.twttr.widgets);
  return widgets ??= loadScript('https://platform.twitter.com/widgets.js').then(() => {
    if (window.twttr?.widgets) return window.twttr.widgets;
    return new Promise((resolve, reject) => {
      if (!window.twttr?.ready) return reject(new Error('X widgets did not initialize'));
      window.twttr.ready(api => resolve(api.widgets));
    });
  }).catch(error => {
    widgets = undefined;
    throw error;
  });
}

async function renderPost(target) {
  try {
    const api = await loadWidgets();
    target.classList.add('twitter-tweet');
    await api.load(target.parentElement);
  } catch (error) {
    console.warn('X widget unavailable', error);
  }
}

const targets = document.querySelectorAll('[data-pdf-url], [data-x-post]');
const render = target => target.hasAttribute('data-pdf-url') ? renderPdf(target) : renderPost(target);
const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  for (const {target, isIntersecting} of entries) {
    if (!isIntersecting) continue;
    observer.unobserve(target);
    render(target);
  }
}, {rootMargin: '300px 0px'}) : null;

for (const target of targets) {
  if (!observer || ['FULL_WINDOW', 'LIGHT_BOX'].includes(target.dataset.pdfMode)) render(target);
  else observer.observe(target);
}

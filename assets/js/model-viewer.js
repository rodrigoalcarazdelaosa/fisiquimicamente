import {libraryURL} from '@params';

for (const button of document.querySelectorAll('[data-model-load]')) {
  const viewer = button.closest('model-viewer');
  let modelFailures = 0;

  function showRetry() {
    viewer.showPoster?.();
    button.disabled = false;
    button.removeAttribute('aria-busy');
    button.textContent = button.dataset.retry;
  }

  viewer.addEventListener('error', () => {
    modelFailures += 1;
    showRetry();
  });
  viewer.addEventListener('load', () => button.removeAttribute('aria-busy'));
  button.addEventListener('click', async () => {
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    button.textContent = button.dataset.loading;
    try {
      if (!customElements.get('model-viewer')) await import(libraryURL);
      const source = new URL(viewer.dataset.src, document.baseURI);
      // Model Viewer caches failed GLB loads by URL as well as successful ones.
      if (modelFailures) source.searchParams.set('retry', String(modelFailures));
      viewer.src = source.href;
      viewer.dismissPoster();
    } catch (error) {
      showRetry();
      console.warn('Could not load the model viewer', error);
    }
  });
  button.disabled = false;
}

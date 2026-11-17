export function setupTutorLoader(root, environment = globalThis, importTutor = (url) => import(url)) {
  if (!root) return;
  const { document, window, fetch } = environment;
  const toggle = root.querySelector('.notes-tutor-toggle');
  const status = root.querySelector('.notes-tutor-load-status');
  let api = null;
  let loading = null;
  let styles = null;
  let savedSelection = null;
  let wantsOpen = false;
  let requestId = 0;

  function rememberSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    if (!document.querySelector('.article-style')?.contains(range.commonAncestorContainer)) return;
    savedSelection = { range: range.cloneRange(), text: selection.toString().trim().slice(0, 4000) };
  }

  function loadStyles() {
    if (!styles) {
      styles = new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = root.dataset.stylesUrl;
        link.onload = resolve;
        link.onerror = () => { link.remove(); styles = null; reject(new Error('Tutor styles unavailable')); };
        document.head.append(link);
      });
    }
    return styles;
  }

  function loadResources() {
    if (!loading) {
      loading = Promise.all([
        importTutor(root.dataset.scriptUrl),
        fetch(root.dataset.contextUrl, { credentials: 'omit', cache: 'force-cache' }).then((response) => {
          if (!response.ok) throw new Error('Tutor context unavailable');
          return response.json();
        }),
        loadStyles(),
      ]).then(([module, data]) => {
        api = module.default(root, data, environment);
        return api;
      }).catch((error) => { loading = null; throw error; });
    }
    return loading;
  }

  toggle.addEventListener('pointerdown', rememberSelection);
  toggle.addEventListener('click', async () => {
    if (api) { api.toggle(); return; }
    const id = ++requestId;
    wantsOpen = !wantsOpen;
    if (!wantsOpen) {
      toggle.setAttribute('aria-busy', 'false');
      status.hidden = true;
      return;
    }
    rememberSelection();
    toggle.setAttribute('aria-busy', 'true');
    status.textContent = root.dataset.loadingLabel;
    status.hidden = false;
    try {
      const tutor = await loadResources();
      if (id === requestId && wantsOpen) tutor.open(savedSelection);
    } catch {
      if (id === requestId) {
        wantsOpen = false;
        status.textContent = root.dataset.errorLabel;
      }
    } finally {
      if (id === requestId) {
        toggle.setAttribute('aria-busy', 'false');
        status.hidden = Boolean(api) || !status.textContent;
      }
    }
  });
  root.hidden = false;
}

if (typeof document !== 'undefined') setupTutorLoader(document.querySelector('.notes-tutor'));

import {integrity, libraryURL, preparingPrint, unavailable} from '@params';

const selector = '[data-molecule-viewer]';
const deck = window.Reveal;
const printView = deck?.isPrintView();
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const models = new Map();
const states = new Map([...document.querySelectorAll(selector)].map(target => [target, {}]));
let library;

function loadLibrary() {
  return library ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = libraryURL;
    script.integrity = integrity;
    script.crossOrigin = 'anonymous';
    script.onerror = () => {
      script.remove();
      reject(new Error('3Dmol.js could not be loaded'));
    };
    script.onload = () => {
      if (window.$3Dmol?.createViewer) resolve(window.$3Dmol);
      else script.onerror();
    };
    document.head.append(script);
  }).catch(error => {
    library = undefined;
    throw error;
  });
}

function modelSource({pdb, cid, href}) {
  if (pdb) return ["https://files.rcsb.org/view/" + encodeURIComponent(pdb) + ".pdb", 'pdb'];
  if (cid) {
    return ["https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + encodeURIComponent(cid) + "/SDF?record_type=3d", 'sdf'];
  }
  if (!href) throw new Error('Molecule source is missing');
  const url = new URL(href, document.baseURI);
  const extension = url.pathname.match(/\.([^/.]+(?:\.gz)?)$/i)?.[1]?.toLowerCase() || '';
  return [url.href, extension.replace(/^mol(?=\.|$)/, 'sdf')];
}

function loadModel(api, url, format) {
  if (!models.has(url)) {
    const request = format.endsWith('.gz') ? api.getbin(url) : api.get(url);
    models.set(url, request.catch(error => {
      models.delete(url);
      throw error;
    }));
  }
  return models.get(url);
}

const fieldOfView = 20;
const halfFrameSlope = 0.94 * Math.tan(Math.PI * fieldOfView / 360);

function fitDistance(width, height, atoms, center, radius, rotatesAroundY) {
  const horizontal = halfFrameSlope * width / height;
  const vertical = halfFrameSlope;
  const horizontalPlane = Math.hypot(1, horizontal);
  const verticalPlane = Math.hypot(1, vertical);
  let distance = 2;
  for (const atom of atoms) {
    const x = atom.x + center[0];
    const y = atom.y + center[1];
    const z = atom.z + center[2];
    if (rotatesAroundY) {
      // Enclose the whole horizontal orbit of each atom's sphere in the camera frustum.
      const orbit = Math.hypot(x, z);
      distance = Math.max(distance, (orbit + radius) * horizontalPlane / horizontal,
        orbit + (Math.abs(y) + radius * verticalPlane) / vertical);
    } else {
      // For other axes, a sphere around the rotation center fits in every orientation.
      const slope = Math.min(horizontal, vertical);
      distance = Math.max(distance, (Math.hypot(x, y, z) + radius) * Math.hypot(1, slope) / slope);
    }
  }
  return distance;
}

function fitViewer(target, state) {
  const {offsetWidth: width, offsetHeight: height} = target;
  if (!width || !height || (width === state.width && height === state.height)) return false;
  const {viewer, radius, center, rotatesAroundY} = state;
  const zoomRatio = state.fit ? viewer.getPerceivedDistance() / state.fit : 1;
  state.fit = fitDistance(width, height, viewer.selectedAtoms({}), center, radius, rotatesAroundY);
  state.width = width;
  state.height = height;
  viewer.setPerceivedDistance(Math.max(1, state.fit * zoomRatio));
  return true;
}

function renderMolecule(api, target, state, data, format) {
  const {viewer} = state;
  const style = api.specStringToObject(target.dataset.style);
  const spin = api.specStringToObject(target.dataset.spin);
  const model = viewer.addModel(data, format);
  if (!model.selectedAtoms({}).length) throw new Error('Molecule has no atoms');
  viewer.setStyle({}, style);
  viewer.zoomTo();
  state.center = viewer.getView();
  state.radius = Number(style.sphere?.radius) || 2;
  state.rotatesAroundY = spin && ['y', 'vy'].includes(spin.axis);
  state.width = state.height = 0;
  if (state.view) viewer.setView(state.view);
  fitViewer(target, state);
  viewer.render();
  return spin;
}

const resizing = new ResizeObserver(entries => {
  for (const {target} of entries) {
    const state = states.get(target);
    if (state.viewer && fitViewer(target, state)) state.viewer.resize();
  }
});

function isVisible(target, state) {
  return state.intersects && !target.closest('details:not([open])')
    && (!deck || (deck.isReady() && (deck.isScrollView() || deck.getCurrentSlide()?.contains(target))))
    && target.checkVisibility?.({checkVisibilityCSS: true, checkOpacity: true}) !== false;
}

async function showViewer(target, state) {
  if (state.pending || state.viewer) return;
  state.pending = true;
  try {
    const api = await loadLibrary();
    if (!isVisible(target, state)) return;
    const [url, format] = modelSource(target.dataset);
    const data = await loadModel(api, url, format);
    if (!isVisible(target, state)) return;

    target.replaceChildren();
    const viewer = state.viewer = api.createViewer(target, {
      backgroundAlpha: Number(target.dataset.backgroundalpha),
    });
    viewer.setCameraParameters({fov: fieldOfView});
    const spin = renderMolecule(api, target, state, data, format);
    if (spin && !reducedMotion.matches) viewer.spin(spin.axis, spin.speed);
    resizing.observe(target);
  } catch (error) {
    state.viewer?.destroy();
    state.viewer = undefined;
    if (isVisible(target, state)) target.textContent = unavailable;
    console.warn('3D molecule unavailable', error);
  } finally {
    state.pending = false;
  }
}

function update(target, state) {
  if (isVisible(target, state)) {
    showViewer(target, state);
  } else if (state.viewer) {
    // Keep the viewpoint and release WebGL resources while the viewer is offscreen.
    state.view = state.viewer.getView();
    resizing.unobserve(target);
    state.viewer.destroy();
    state.viewer = undefined;
  }
}

const visibility = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const state = states.get(entry.target);
    state.intersects = entry.isIntersecting && entry.intersectionRatio >= 0.01;
    update(entry.target, state);
  }
}, {threshold: 0.01});

async function preparePrintMolecules(status) {
  // Reveal can clone slides with fragments. Use the final print layout to find every copy.
  const targets = [...document.querySelectorAll('.pdf-page ' + selector)]
    .filter(target => target.offsetWidth && target.offsetHeight);
  const host = document.createElement('div');
  host.className = 'molecule-print-renderer';
  document.body.append(host);
  let viewer;

  function showError(target, error) {
    target.textContent = unavailable;
    console.warn('3D molecule unavailable for printing', error);
  }

  try {
    if (!targets.length) return;
    const api = await loadLibrary();
    const files = await Promise.allSettled(targets.map(async target => {
      const [url, format] = modelSource(target.dataset);
      return [format, await loadModel(api, url, format)];
    }));

    for (const [index, target] of targets.entries()) {
      try {
        const file = files[index];
        if (file.status === 'rejected') throw file.reason;
        const [format, data] = file.value;
        host.style.width = target.offsetWidth + 'px';
        host.style.height = target.offsetHeight + 'px';
        if (!viewer) {
          viewer = api.createViewer(host);
          viewer.setCameraParameters({fov: fieldOfView});
        }
        viewer.removeAllModels();
        viewer.resize();
        viewer.setBackgroundColor('#ffffff', Number(target.dataset.backgroundalpha));
        renderMolecule(api, target, {viewer}, data, format);

        const image = new Image();
        image.className = 'molecule-print-image';
        image.alt = '';
        image.src = viewer.pngURI();
        await image.decode();
        target.replaceChildren(image);
      } catch (error) {
        showError(target, error);
      }
    }
  } catch (error) {
    targets.forEach(target => showError(target, error));
  } finally {
    viewer?.destroy();
    host.remove();
    status.remove();
  }
}

if (printView) {
  const status = document.createElement('p');
  status.className = 'molecule-print-status';
  status.setAttribute('role', 'status');
  status.textContent = preparingPrint;
  document.body.append(status);
  deck.on('pdf-ready', () => preparePrintMolecules(status));
} else {
  states.forEach((_, target) => visibility.observe(target));

  document.addEventListener('toggle', event => {
    if (event.target instanceof HTMLDetailsElement) {
      for (const target of event.target.querySelectorAll(selector)) update(target, states.get(target));
    }
  }, true);

  for (const event of ['ready', 'slidechanged', 'slidetransitionend']) {
    deck?.on(event, () => states.forEach((state, target) => update(target, state)));
  }
}

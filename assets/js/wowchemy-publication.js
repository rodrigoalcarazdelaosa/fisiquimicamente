const publications = document.getElementById('container-publications');
if (publications && window.Isotope) {
  const search = document.querySelector('.filter-search');
  const selects = [...document.querySelectorAll('.pub-filters')];
  const type = document.querySelector('.pubtype-select');
  const layout = new Isotope(publications, {
    itemSelector: '.isotope-item', percentPosition: true, masonry: {columnWidth: '.grid-sizer'},
  });
  function filter() {
    const term = search?.value.trim().toLocaleLowerCase() || '';
    layout.arrange({filter: item => item.textContent.toLocaleLowerCase().includes(term)
      && selects.every(select => !select.value || item.matches(select.value))});
  }
  function readHash() {
    if (type) type.value = location.hash ? '.pubtype-' + location.hash.slice(1) : '*';
    filter();
  }
  search?.addEventListener('input', filter);
  selects.forEach(select => select.addEventListener('change', () => {
    if (select === type) location.hash = type.value.replace(/^\.pubtype-|^\*$/g, '');
    filter();
  }));
  window.addEventListener('hashchange', readHash);
  readHash();
}

const modal = document.getElementById('modal');
if (modal) {
  const closeButton = modal.querySelector('[data-dismiss="modal"]');
  const code = modal.querySelector('code');
  const errorBox = modal.querySelector('#modal-error');
  const download = modal.querySelector('.js-download-cite');
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop fade show';
  let opener;
  let request;
  function close() {
    request?.abort();
    document.body.classList.remove('modal-open');
    modal.classList.remove('show');
    modal.style.display = '';
    modal.removeAttribute('aria-modal');
    backdrop.remove();
    opener?.focus();
  }
  document.querySelectorAll('.js-cite-modal').forEach(link => link.addEventListener('click', async event => {
    event.preventDefault();
    opener = link;
    request?.abort();
    request = new AbortController();
    document.body.append(backdrop);
    document.body.classList.add('modal-open');
    modal.setAttribute('aria-modal', 'true');
    modal.style.display = 'block';
    modal.classList.add('show');
    closeButton.focus();
    code.textContent = errorBox.textContent = '';
    download.removeAttribute('href');
    try {
      const response = await fetch(link.dataset.filename, {signal: request.signal});
      if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
      code.textContent = await response.text();
      download.href = link.dataset.filename;
    } catch (error) {
      if (error.name !== 'AbortError') errorBox.textContent = error.message;
    }
  }));
  closeButton.addEventListener('click', close);
  modal.addEventListener('click', event => { if (event.target === modal) close(); });
  modal.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') {
      const controls = [...modal.querySelectorAll('button, a[href]')];
      const last = controls.at(-1);
      if (event.shiftKey && event.target === controls[0]) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && event.target === last) { event.preventDefault(); controls[0].focus(); }
    }
  });
  modal.querySelector('.js-copy-cite').addEventListener('click', event => {
    event.preventDefault();
    navigator.clipboard.writeText(code.textContent).catch(console.error);
  });
}

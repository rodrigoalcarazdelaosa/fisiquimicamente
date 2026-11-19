const announcement = document.getElementById('announcement');
if (announcement) {
  const id = announcement.dataset.id;
  for (const key of Object.keys(localStorage)) {
    if (key.startsWith('wc-announcement-') && key !== id) localStorage.removeItem(key);
  }
  if (!localStorage.getItem(id)) document.documentElement.removeAttribute('data-wc-announcement-status');
  announcement.querySelector('[data-dismiss="alert"]')?.addEventListener('click', () => {
    localStorage.setItem(id, 'dismissed');
    announcement.remove();
  });
}

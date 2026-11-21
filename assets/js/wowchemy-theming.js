// wcTheme values are stored in visitors' existing browser preferences.
const modes = ['light', 'dark', 'auto'];

function getThemeMode() {
  if (!window.wc.darkLightEnabled) return Number(window.wc.isSiteThemeDark);
  return Number(localStorage.getItem('wcTheme') ?? 2);
}

function isDark(mode) {
  if (mode === 0 || mode === 1) return mode === 1;
  if (matchMedia('(prefers-color-scheme: dark)').matches) return true;
  if (matchMedia('(prefers-color-scheme: light)').matches) return false;
  return window.wc.isSiteThemeDark;
}

// Called immediately after <body> so the stored preference applies before paint.
export function initThemeVariation() {
  const themeMode = getThemeMode();
  const isDarkTheme = isDark(themeMode);
  document.body.classList.toggle('dark', isDarkTheme);
  return {isDarkTheme, themeMode};
}

export function renderThemeVariation(dark, mode) {
  modes.forEach((name, index) => {
    document.querySelector('.js-set-theme-' + name)?.classList.toggle('dropdown-item-active', mode === index);
  });
  const changed = document.body.classList.contains('dark') !== dark;
  document.body.classList.toggle('dark', dark);
  const lightCSS = document.querySelector('link[title="hl-light"]');
  const darkCSS = document.querySelector('link[title="hl-dark"]');
  if (lightCSS) lightCSS.disabled = dark;
  if (darkCSS) darkCSS.disabled = !dark;

  document.dispatchEvent(new CustomEvent('wcThemeChange', {bubbles: true, detail: {isDarkTheme: () => dark}}));
  if (changed && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.animate([{opacity: 0}, {opacity: 1}], {duration: 600});
  }
}

export function changeThemeModeClick(mode) {
  if (!window.wc.darkLightEnabled) return;
  localStorage.setItem('wcTheme', String(mode));
  renderThemeVariation(isDark(mode), mode);
}

export function onMediaQueryListEvent() {
  if (getThemeMode() === 2) renderThemeVariation(isDark(2), 2);
}

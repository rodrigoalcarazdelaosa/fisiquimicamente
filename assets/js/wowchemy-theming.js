// Preserve the numeric preferences already stored under wcTheme.
const modes = ['light', 'dark', 'auto'];
const icons = ['🌕', '🌑', '🌗'];
const root = document.documentElement;
const systemTheme = matchMedia('(prefers-color-scheme: dark)');

export function isDarkTheme() {
  return root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
}

function applyColorScheme() {
  const dark = isDarkTheme();
  root.classList.toggle('dark', dark);
  return dark;
}

export function restoreTheme() {
  if (!root.hasAttribute('data-theme')) {
    try {
      const saved = localStorage.getItem('wcTheme');
      if (saved === '0' || saved === '1') root.dataset.theme = modes[Number(saved)];
    } catch {
      // The system preference still applies when storage is blocked.
    }
  }
  applyColorScheme();
}

export function initThemeControl() {
  const button = document.querySelector('#theme-cycle');
  const icon = button?.querySelector('[aria-hidden="true"]');
  const status = document.querySelector('#theme-status');
  const labels = button && JSON.parse(button.dataset.modes);
  const lightCSS = document.querySelector('link[title="hl-light"]');
  const darkCSS = document.querySelector('link[title="hl-dark"]');
  let mode = modes.indexOf(root.dataset.theme ?? 'auto');

  function updateTheme() {
    const dark = applyColorScheme();
    if (lightCSS) lightCSS.disabled = dark;
    if (darkCSS) darkCSS.disabled = !dark;
    document.dispatchEvent(new CustomEvent('wcThemeChange', { bubbles: true, detail: { isDarkTheme: () => dark } }));
  }

  function updateButton() {
    icon.textContent = icons[mode];
    const label = `${button.dataset.label} · ${labels[mode]}`;
    button.title = label;
    button.setAttribute('aria-label', label);
  }

  if (button) {
    updateButton();
    button.hidden = false;
    button.addEventListener('click', () => {
      const wasDark = isDarkTheme();
      mode = (mode + 1) % modes.length;
      if (modes[mode] === 'auto') delete root.dataset.theme;
      else root.dataset.theme = modes[mode];
      try {
        localStorage.setItem('wcTheme', String(mode));
      } catch {
        // The current page still changes theme.
      }
      updateButton();
      status.textContent = labels[mode];
      if (isDarkTheme() !== wasDark) updateTheme();
    });
  }

  systemTheme.addEventListener('change', () => {
    if (modes[mode] === 'auto') updateTheme();
  });
  updateTheme();
}

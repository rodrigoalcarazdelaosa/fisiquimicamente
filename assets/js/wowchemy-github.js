import {hugoEnvironment} from '@params';

export function showLatestReleases() {
  if (hugoEnvironment !== 'production') return;
  document.querySelectorAll('.js-github-release').forEach(async element => {
    try {
      const response = await fetch('https://api.github.com/repos/' + element.dataset.repo + '/tags');
      if (!response.ok) return;
      const [release] = await response.json();
      if (release) element.append(' ' + release.name);
    } catch (error) {
      console.warn('GitHub release unavailable', error);
    }
  });
}

# Copilot instructions for this repo

## Big picture
- Static site built with Hugo + Hugo Blox modules. Multi‑lingual: Spanish (es), English (en), Catalan (ca).
- Key config in `config/_default/*.yaml`. Blox modules declared in `config/_default/module.yaml`.
- Custom theming/overrides live in `assets/` (SCSS/JS) and `layouts/` (partials, components). Content per language in `content/{es,en,ca}`.
- Output is generated to `public/` with language subfolders (`public/es`, `public/en`, `public/ca`).

## Developer workflows
- Local preview (preferred):
  - `view.sh` (desktop): exports last git hash and runs `hugo server --renderStaticToDisk --disableFastRender --printI18nWarnings --buildFuture`.
  - `view_mobile.sh` (LAN/mobile): binds to local IP and sets `--baseURL`.
  - Both source `get_last_commit_hash.sh` to set `HUGOxPARAMSxGITxLAST_COMMIT*` env vars for templates.
- Build (CI parity): `hugo --gc --minify` (CI pins Hugo to 0.151.2).
- Update Hugo modules: `bash update_hugo_blox.sh` (runs `hugo mod get -u ./... && hugo mod tidy`).

## Deployment
- GitHub Actions: `.github/workflows/publish-CFP.yml` runs on `push` to `main`.
  - Matrix deploys three Cloudflare Pages projects:
    - `public/es` -> project `fisiquimicamente`
    - `public/en` -> project `physichemically`
    - `public/ca` -> project `fisiquimicament`
  - Uses secrets per lang: `GOOGLE_VERIFICATION_CODE_*`, `PDF_EMBED_API_KEY_*`.
  - Command: `pages deploy <directory> --project-name=<name> --commit-dirty=true` via `cloudflare/wrangler-action@v3`.

## Project conventions & patterns
- Theme & design: Nord color palette customized in `assets/scss/custom.scss`. Uses Bootstrap v5 mixins from Blox (`blox-bootstrap/v5`).
- Header/Nav: Overridden at `layouts/_partials/components/headers/navbar.html` (custom emoji icons, theme switcher, i18n dropdown, Lottie `.tgs` logo via `tgs-player`).
- i18n:
  - `config/_default/languages.yaml` sets per‑lang `baseURL`, titles, permalinks, and params.
  - Menus per language in `config/_default/menus.{es,en,ca}.yaml`.
  - Show/hide language and translations via `params.yaml` (`header.navbar.show_language/show_translations`).
- Site params: `config/_default/params.yaml` controls appearance (Nord theme, fonts), search provider (Wowchemy), repo links, footer, etc.
- Slides: `assets/js/wowchemy-slides.js` wires Reveal.js plugins; optional Mermaid diagrams enabled via front matter (`slides.diagram: true`), options under `slides.reveal_options` and `slides.diagram_options`.
- Content: Place Markdown under `content/<lang>/...`. Posts use dated permalink pattern (`/blog/:year/:month/:day/:slug`).

## How to make common changes
- Add a new blog post (Spanish): create `content/es/blog/YYYY/MM/DD/slug/index.md` with front matter. Hugo builds it into `public/es/blog/...`.
- Customize navbar: edit `layouts/_partials/components/headers/navbar.html`. Keep i18n and theme toggles intact.
- Adjust theme/colors/typography: edit `assets/scss/custom.scss` (respect Nord palette and dark/light variants already defined).
- Add page‑level slides: set `slides:` params in the page front matter; `wowchemy-slides.js` picks them up.

## Integration points
- Hugo Blox modules (see `go.mod` and `module.yaml`):
  - `blox-bootstrap/v5`, `blox-core`, `blox-plugin-netlify`, `blox-plugin-reveal`, `blox-seo`.
- Cloudflare Pages via GitHub Actions (no separate netlify build used for deploy).

## Agent guidelines
- Preserve multilingual behavior and menus; update all three `menus.*.yaml` if changing navigation.
- When editing partials, keep compatibility with Blox helpers (`partial "blox-core/functions/..."`) and existing params (`site.Params.header.*`).
- Prefer `assets/` for CSS/JS so Hugo pipelines fingerprint/minify in production.
- Validate locally with `view.sh`. If CI fails locally, pin your Hugo version to 0.151.2 for parity.
- After module updates, run `hugo mod tidy` and verify `public/{es,en,ca}` builds.

## Key files
- `config/_default/hugo.yaml`, `languages.yaml`, `params.yaml`, `module.yaml`, `menus.*.yaml`
- `assets/scss/custom.scss`, `assets/js/wowchemy-slides.js`
- `layouts/_partials/components/headers/navbar.html`
- `.github/workflows/publish-CFP.yml`, `view.sh`, `view_mobile.sh`, `update_hugo_blox.sh`, `get_last_commit_hash.sh`
- `go.mod`

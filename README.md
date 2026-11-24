[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-blue)](https://vscode.dev/github/rodrigoalcarazdelaosa/fisiquimicamente) <a href="https://github.com/rodrigoalcarazdelaosa/fisiquimicamente/actions/workflows/publish-CFP.yml" target="_blank" rel="noopener"><img draggable="false" class="icon" alt="cloudflare-pages" src="https://github.com/rodrigoalcarazdelaosa/fisiquimicamente/actions/workflows/publish-CFP.yml/badge.svg"></a>

# [FisiQuímicamente](https://fisiquimicamente.com/)

Recursos de Física y Química, tutoriales y ciencia de actualidad.

&copy; 2020&ndash;2024 Rodrigo Alcaraz de la Osa.

Con stickers y emojis animados de <a href="https://telegram.org/blog/animated-stickers/blog/animated-stickers" target="_blank" rel="noopener" title="Telegram">Telegram</a> e imágenes de <a href="https://depositphotos.com/?ref=87801288&utm_source=linkCopy&utm_medium=referral" target="_blank" rel="noopener" title="DepositPhotos">DepositPhotos</a>.

Publicado con <a href="https://hugoblox.com?aff=K4VGj" target="_blank" rel="noopener"><strong>Hugo Blox</strong></a>&mdash;el constructor de sitios web gratuito y <a href="https://github.com/HugoBlox/hugo-blox-builder" target="_blank" rel="noopener">
de código abierto</a> para <a href="https://gohugo.io" target="_blank" rel="noopener">Hugo</a>.

<a href="https://hugoblox.com/sponsor/?aff=K4VGj">Únete a <strong><em>All Access</em></strong> para desbloquear blox y plantillas exclusivas</a>.

Alojado en <a href="https://github.com/rodrigoalcarazdelaosa/fisiquimicamente" target="_blank" rel="noopener">GitHub</a> · Servido por <a href="https://pages.cloudflare.com" target="_blank" rel="noopener">Cloudflare Pages</a>.

# [PhysiChemically](https://physichemically.com/)

Physics and Chemistry Resources, Tutorials and Current Science.

&copy; 2020&ndash;2024 Rodrigo Alcaraz de la Osa.

With animated stickers and emojis from <a href="https://telegram.org/blog/animated-stickers" target="_blank" rel="noopener" title="Telegram">Telegram</a> and images from <a href="https://depositphotos.com/?ref=87801288&utm_source=linkCopy&utm_medium=referral" target="_blank" rel="noopener" title="DepositPhotos">DepositPhotos</a>.

Published with <a href="https://hugoblox.com?aff=K4VGj" target="_blank" rel="noopener"><strong>Hugo Blox</strong></a>&mdash;the free, <a href="https://github.com/HugoBlox/hugo-blox-builder" target="_blank" rel="noopener">
open source</a> website builder for <a href="https://gohugo.io" target="_blank" rel="noopener">Hugo</a>.

<a href="https://hugoblox.com/sponsor/?aff=K4VGj">Join <strong><em>All Access</em></strong> to unlock exclusive blox and templates</a>.

Hosted on <a href="https://github.com/rodrigoalcarazdelaosa/fisiquimicamente" target="_blank" rel="noopener">GitHub</a> · Served by <a href="https://pages.cloudflare.com" target="_blank" rel="noopener">Cloudflare Pages</a>.

# [FisiQuímicament](https://fisiquimicament.com/)

Recursos de Física i Química, tutorials i ciència d'actualitat.

&copy; 2020&ndash;2024 Rodrigo Alcaraz de la Osa.

Amb stickers i emojis animats de <a href="https://telegram.org/blog/animated-stickers" target="_blank" rel="noopener" title="Telegram">Telegram</a> i imatges de <a href="https://depositphotos.com/?ref=87801288&utm_source=linkCopy&utm_medium=referral" target="_blank" rel="noopener" title="DepositPhotos">DepositPhotos</a>.

Publicat amb <a href="https://hugoblox.com?aff=K4VGj" target="_blank" rel="noopener"><strong>Hugo Blox</strong></a>&mdash;el constructor de llocs web gratuït i <a href="https://github.com/HugoBlox/hugo-blox-builder" target="_blank" rel="noopener">
de codi obert</a> per <a href="https://gohugo.io" target="_blank" rel="noopener">Hugo</a>.

<a href="https://hugoblox.com/sponsor/?aff=K4VGj">Uneix-te a <strong><em>All Access</em></strong> per desbloquejar blox i plantilles exclusives</a>.

Allotjat en <a href="https://github.com/rodrigoalcarazdelaosa/fisiquimicamente" target="_blank" rel="noopener">GitHub</a> · Servit per <a href="https://pages.cloudflare.com" target="_blank" rel="noopener">Cloudflare Pages</a>.


## Desarrollo local

Instala Hugo estándar (la versión indicada en `.hvm`) y Dart Sass 1.98.0 para compilar los estilos. Los ejecutables `hugo` y `sass` deben estar en el `PATH`. Puedes comprobar las versiones con `hugo version` y `sass --embedded --version`.

Si usas otra versión de Hugo en otros proyectos, puedes guardar el ejecutable de este sitio en `.local/bin/hugo` y ejecutar `PATH="$PWD/.local/bin:$PATH" bash view.sh` desde la raíz.

Las plantillas y los *shortcodes* derivados de Hugo Blox se mantienen en `layouts/`, y sus estilos y scripts en `assets/`. Hugo puede compilar las tres ediciones desde un clon limpio. Las bibliotecas especializadas, entre ellas MathJax y Reveal.js, se cargan desde sus CDN.

KaTeX es el motor matemático predeterminado. Goldmark reconoce las fórmulas delimitadas y el hook de Hugo las compila a MathML con `transform.ToMath`. Si una expresión es incompatible, Hugo indica su ubicación. MathJax queda como respaldo para fórmulas antiguas fuera de esos delimitadores o dentro de bloques HTML. El Tutor IA usa KaTeX en el navegador al recibir fórmulas.

```sh
bash view.sh                # Vista previa
source get_last_commit_hash.sh && hugo --minify
node --test tests/*.test.mjs workers/notes-tutor/test/*.test.mjs
```

La compilación genera `public/es/`, `public/en/` y `public/ca/`. Cada subida a `main` publica las tres ediciones en producción. Cada subida a `dev` publica la edición española en [dev.fisiquimicamente.com](https://dev.fisiquimicamente.com/).

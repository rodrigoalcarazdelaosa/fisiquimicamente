---
title: Añadiendo un título, un autor y una fecha
linktitle: Título, autor y fecha
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 5

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 5
---

Para añadir un título, un autor y una fecha a nuestro documento, debemos añadir tres líneas a nuestro preámbulo (antes de `\begin{document}`). Estas líneas son:

`\title{Primer documento}`
: Este es el título.

`\author{Rodrigo Alcaraz de la Osa}`
: Este es el autor (o autores)[^1].

[^1]: Opcionalmente podemos introducir el comando `\thanks{}` después del autor, pero dentro de las llaves. Añade un superíndice y una nota al pie con el texto que haya dentro de las llaves. Es útil si se quiere agradecer a alguna institución.

`\date{Mayo 2020}`
: Podemos introducir la fecha manualmente o utilizar el comando `\today` para que aparezca la fecha en la que se compila el documento.

Con estas líneas, nuestro preámbulo debería parecerse a esto:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}

\title{Primer documento}
\author{Rodrigo Alcaraz de la Osa}
\date{Mayo 2020}
```

Para que esa información aparezca en el documento, tenemos que incluir el comando `\maketitle` en el cuerpo del documento, en el lugar donde queremos que aparezca.

```tex
\begin{document}

\maketitle

¡Hemos añadido un título, un autor y una fecha a nuestro primer documento \LaTeX!

\end{document}
```

{{< figure src="/tutoriales/latex/img/primer_documento_maketitle.jpg" lightbox="true" >}}
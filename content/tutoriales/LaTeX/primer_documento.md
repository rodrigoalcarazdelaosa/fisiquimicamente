---
title: Tu primer documento de $\LaTeX$
linktitle: Tu primer documento de $\LaTeX$
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 3

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 3
---

Todo documento de $\LaTeX$ comienza con el comando `\documentclass`, que nos permite escoger la _clase_ de documento que vamos a generar. La clase controla la apariencia general de nuestro documento. Las **3 clases básicas** son:

`article`
: Para **documentos sencillos**, en los que necesitemos **secciones** (`\section`), **subsecciones** (`\subsection`), etc.

`report`
: Para **documentos más complejos**, donde además necesitemos **capítulos** (`\chapter`).

`book`
: Para **libros** y documentos de complejidad similar (tesis, etc.), donde por defecto se utiliza la opción `twoside`, que aplica márgenes y encabezados/pies de página distintos para páginas pares e impares.

Tras el comando `\documentclass` viene lo que se denomina el **preámbulo** del documento, sobre el que hablaremos [más adelante]({{< ref "/tutoriales/latex/preambulo.md" >}}). Seguido del preámbulo viene el contenido o _cuerpo_ de nuestro documento, encerrado entre los comandos `\begin{document}` y `\end{document}`.

El **ejemplo más simple** que nos podemos imaginar sería algo así:

```tex
\documentclass{article}

\begin{document}
Primer documento. Este es un ejemplo simple, sin incluir ningún parámetro (opción) o paquete extra.
\end{document}
```
lo que $\LaTeX$ transforma en:

{{< figure src="/tutoriales/latex/img/primer_documento.jpg" lightbox="true" >}}
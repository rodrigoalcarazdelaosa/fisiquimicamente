---
title: Añadiendo comentarios
linktitle: Comentarios
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 6

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 6
---

Como siempre que se escribe código, es muy útil y recomendable incluir **comentarios**. Los comentarios son trozos de texto que se pueden incluir en el propio código pero que no se imprimen ni afectan al documento de ninguna forma. Son útiles para organizar el trabajo, tomar notas, explicar el código o depurarlo comentando ciertas líneas/secciones. Para hacer un comentario en $\LaTeX$, simplemente escribe el símbolo `%` al principio de la línea:

```tex
\begin{document}

\maketitle

¡Hemos añadido un título, un autor y una fecha a nuestro primer documento \LaTeX!

% Esta línea es un comentario. No se imprimirá en el documento.

\end{document}
```

{{< figure src="/tutoriales/latex/img/primer_documento_maketitle.jpg" lightbox="true" >}}
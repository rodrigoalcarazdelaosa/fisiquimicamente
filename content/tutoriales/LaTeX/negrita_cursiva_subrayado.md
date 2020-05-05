---
title: Negrita, cursiva y subrayado
linktitle: Negrita, cursiva y subrayado
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 7

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 7
---

Echemos un vistazo a algunos comandos simples para dar formato a nuestro texto:

- **Negrita**: el texto en negrita en $\LaTeX$ se escribe con el comando `\textbf{...}`.
- _Cursiva_: el texto en cursiva en $\LaTeX$ se escribe con el comando `\textit{...}`.
- <ins>Subrayado</ins>: el texto subrayado en $\LaTeX$ se escribe con el comando `\underline{...}`.

A continuación se muestra un ejemplo de cada uno de estos comandos en acción:

```tex
Algunos de los \textbf{mayores} descubrimientos de la \underline{ciencia} se hicieron por \textbf{\textit{accidente}}.
```

{{< figure src="/tutoriales/latex/img/negrita_cursiva_subrayado.jpg" lightbox="true" >}}

Otro comando muy útil es `\emph{...}`. Lo que el comando `\emph` hace realmente con su argumento depende del contexto[^1] &mdash;dentro del texto normal el texto enfatizado está en cursiva, pero este comportamiento se invierte si se usa dentro de un texto en cursiva&mdash;, como se muestra en el siguiente ejemplo:

[^1]: Además, algunos paquetes, como [beamer](https://ctan.org/pkg/beamer), modifican el comportamiento del comando `\emph`.

```tex
Algunos de los mayores \emph{descubrimientos} de la ciencia se hicieron por accidente.

\textit{Algunos de los mayores \emph{descubrimientos} de la ciencia se hicieron por accidente.}

\textbf{Algunos de los mayores \emph{descubrimientos} de la ciencia se hicieron por accidente.}
```

{{< figure src="/tutoriales/latex/img/negrita_cursiva_subrayado_emph.jpg" lightbox="true" >}}
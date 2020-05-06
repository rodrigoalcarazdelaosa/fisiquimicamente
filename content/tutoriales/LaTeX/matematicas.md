---
title: Añadiendo matemáticas a $\LaTeX$
linktitle: Matemáticas
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 10

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 10
---

Una de las principales ventajas de $\LaTeX$ es la facilidad con la que podemos incluir expresiones matemáticas en nuestros documentos. Existen dos *modos* principales: ***inline*** y ___display___.

## Modo _inline_
Se utiliza para escribir expresiones que son parte del texto, encerrando la expresión entre `$...$`, como en el siguiente ejemplo:


```tex
En física, la equivalencia entre masa y energía se establece por la ecuación $E=mc^2$, descubierta por Albert Einstein en 1905.
```

{{< figure src="/tutoriales/latex/img/inline_math.jpg" lightbox="true" >}}

## Modo _display_
Se utiliza para escribir expresiones en líneas separadas. Tenemos dos versiones: expresiones numeradas (con el entorno `equation`) o sin numerar (encerrando la expresión entre `\[...\]`), como se muestra a continuación:

```tex
En física, la equivalencia entre masa y energía se establece por la ecuación	
\[
E=mc^2,
\]
descubierta por Albert Einstein en 1905. En unidades naturales ($c = 1$), la fórmula toma la forma
\begin{equation}
E=m
\end{equation}
```

{{< figure src="/tutoriales/latex/img/display_math.jpg" lightbox="true" >}}

## Paquete [amsmath](https://www.ctan.org/pkg/amsmath)[^1]
A la hora de escribir matemáticas en $\LaTeX$, incluir el paquete [amsmath](https://www.ctan.org/pkg/amsmath) es prácticamente **obligatorio**, por la cantidad de comandos que añade.

A continuación se muestra un ejemplo con algunos de los comandos básicos:

```tex
Los subíndices y los superíndices pueden escribirse como $a_b$ o $a^b$, respectivamente. Pueden combinarse o anidarse para escribir expresions como
\[
T^{i_1 i_2 \dots i_p}_{j_1 j_2 \dots j_q} = T(x^{i_1},\dots,x^{i_p},e_{j_1},\dots,e_{j_q})
\]

Para escribir integrales utilizamos $\int$, y para fracciones utilizamos $\frac{a}{b}$. Los límites de las integrales se escriben con subíndices y superíndices:
\[
\int_0^1 \frac{dx}{e^x} =  \frac{e-1}{e}
\]

Podemos escribir letras griegas tanto en minúsuclas ($\omega$, $\delta$, etc.) como en mayúsculas ($\Omega$, $\Delta$, etc.).

Los operadores matemáticos se prefijan con una barra invertida, como $\sin(\beta)$, $\cos(\alpha)$, $\log(x)$, etc.
```

{{< figure src="/tutoriales/latex/img/amsmath.jpg" lightbox="true" >}}

[^1]: Desarrollado por la [Sociedad Americana de Matemáticas](https://www.ams.org/home/page), o AMS por sus siglas en inglés.
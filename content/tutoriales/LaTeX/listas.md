---
title: Creando listas en $\LaTeX$
linktitle: Listas
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 9

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 9
---

Es muy fácil crear listas con $\LaTeX$. Tenemos tres *entornos* principales para ello. Los entornos son secciones de nuestro documento que queremos presentar de una manera diferente al resto del documento. Siempre empiezan con el comando `\begin{...}` y terminan con un `\end{...}`[^1].

[^1]: Para [añadir imágenes]({{< ref "/tutoriales/latex/imagenes.md" >}}) hemos utilizado el entorno `figure`.

Hay tres tipos principales de listas: listas no ordenadas, listas ordenadas y listas de descripción o definición. Cada uno utilizará un entorno diferente.

## Listas no ordenadas

Las listas no ordenadas, también conocidas como *viñetas*, se crean con el entorno `itemize`. Cada entrada (*item*) debe ir precedida por el comando `\item`:

```tex
\begin{itemize}
  \item La viñeta por defecto es un punto negro (\emph{bullet} en inglés).
  \item El texto de las entradas puede tener cualquier longitud.
\end{itemize}
```

{{< figure src="/tutoriales/latex/img/itemize.jpg" lightbox="true" >}}

## Listas ordenadas

Las listas ordenadas o numeradas tienen la misma sintaxis pero con otro entorno, esta vez `enumerate`:

```tex
\begin{enumerate}
  \item Esta es la primera entrada de nuestra lista.
  \item Los números de la lista aumentan con cada entrada que añadimos.
\end{enumerate}
```

{{< figure src="/tutoriales/latex/img/enumerate.jpg" lightbox="true" >}}

## Listas de descripción

Las listas de descripción o definición utilizan el entorno `description`. Su sintaxis varía ligeramente respecto a `itemize` y `enumerate`, ya que los `\item` ahora aceptan el *título* de cada entrada entre corchetes:

```tex
\begin{description}
  \item[Primera entrada] Por defecto el título de cada entrada aparece en \textbf{negrita}.
  \item[Segunda entrada] Normalmente no se pone ningún símbolo (: o similar) entre el título y su descripción o definición.
\end{description}
```

{{< figure src="/tutoriales/latex/img/description.jpg" lightbox="true" >}}
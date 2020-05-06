---
title: Añadiendo imágenes
linktitle: Imágenes
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 8

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 8
---

$\LaTeX$ no puede manejar imágenes por sí solo, por lo que necesitamos un _paquete_. Los paquetes se pueden utilizar para cambiar la apariencia por defecto de nuestro documento, o para añadir funcionalidades. En este caso, para añadir imágenes utilizamos el paquete [graphicx](https://ctan.org/pkg/graphicx), que nos proporciona, entre otros, el comando `\includegraphics{...}`[^1].

[^1]: Este comando también admite opciones (entre corchetes) para especificar, entre otras cosas, el ancho (`width=`) o el alto (`height=`) de la imagen.

Para utilizar este paquete, incluimos la línea `\usepackage{graphicx}` en nuestro preámbulo. Además, cuando se colocan imágenes en un documento $\LaTeX$, siempre debemos ponerlas dentro de un entorno `figure`[^2], para que $\LaTeX$ posicione la imagen de manera que encaje con el resto del texto.

[^2]: Este entorno admite un parámetro (entre corchetes) para posicionar la imagen, que admite los siguientes valores:
	
	| Parámetro | Posición                                                                                                       |
	| --------- | -------------------------------------------------------------------------------------------------------------- |
	| h         | Posiciona la imagen _aquí_, es decir, *aproximadamente* en el mismo punto en que aparece en el texto de origen |
	| t         | Posiciona la imagen en la parte *superior* de la página                                                        |
	| b         | Posiciona la imagen en la parte *inferior* de la página                                                        |
	| p         | Posiciona la imagen en la siguiente *página*                                                                   |	

El entorno `figure` nos permite además añadir un pie de figura (`\caption{...}`) y una etiqueta (`\label{...}`), para poder referenciar (`\ref{...}`) la figura más adelante. El siguiente ejemplo muestra estos comandos en acción:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}
\usepackage{graphicx}

\begin{document}
	
La figura \ref{fig:leon_CTAN} muestra el león que dibujó Duane Bibby para las ilustraciones del libro original de Donald Knuth, \TeX book.

\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.5\textwidth]{ctan_lion_350x350}
    \caption{Dibujo de león de CTAN por Duane Bibby; gracias a www.ctan.org.}
    \label{fig:leon_CTAN}
\end{figure}

\end{document}
```

{{< figure src="/tutoriales/latex/img/ejemplo_imagen.jpg" lightbox="true" >}}
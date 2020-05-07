---
title: Creando tablas
linktitle: Tablas
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 12

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 12
---

A continuación puedes ver el ejemplo más sencillo de una tabla en $\LaTeX$:

```tex
\begin{tabular}{ccc}
 celda1 & celda2 & celda3 \\ 
 celda4 & celda5 & celda6 \\  
 celda7 & celda8 & celda9
\end{tabular}
```

{{< figure src="/tutoriales/latex/img/tabular.jpg" lightbox="true" >}}

El entorno `tabular` es el método por defecto de $\LaTeX$ para crear tablas. Entre llaves le indicamos cuántas columnas tendrá la tabla y cómo estará justificado el texto. En este caso `{ccc}` indica que habrá tres columnas y que el texto estará centrado (`c`). También se puede utilizar `r` para alinear el texto a la derecha o `l` para alinearlo a la izquierda. El símbolo de alineación `&` se utiliza para especificar los saltos entre columnas[^1] y el símbolo `\\` para especificar los saltos entre filas.

[^1]: Siempre debe haber un símbolo de alineación menos en cada línea que el número de columnas.

Al igual que en el caso de las [imágenes]({{< ref "/tutoriales/latex/imagenes.md" >}}), como norma general siempre vamos a poner nuestras tablas dentro de un entorno `table`[^2], y utilizaremos el paquete [booktabs](https://ctan.org/pkg/booktabs) (`\usepackage{booktabs}`), que nos permite mejorar enormemente la calidad de nuestras tablas.

[^2]: Este entorno admite las mismas opciones de posicionamiento que el entorno `figure` (ver la sección [imágenes]({{< ref "/tutoriales/latex/imagenes.md" >}})).

El entorno `table` nos permite además añadir un pie de tabla (`\caption{...}`) y una etiqueta (`\label{...}`), para poder referenciar (`\ref{...}`) la tabla más adelante. El siguiente ejemplo muestra estos comandos en acción:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish,es-tabla]{babel}
\usepackage{booktabs}

\begin{document}
	
La tabla \ref{tab:ejemplo_booktabs} muestra un ejemplo de uso de los comandos del paquete \texttt{booktabs}, traducido de su propia documentación:
	
\begin{table}[htbp]
	\caption{Ejemplo de tabla creada con el paquete \texttt{booktabs}, traducido de su propia documentación. Notar que en las tablas el \emph{pie} se suele colocar encima de la tabla, y no debajo como en las figuras.}
	\label{tab:ejemplo_booktabs}
	\centering
	\begin{tabular}{@{}llr@{}}
		\toprule
		\multicolumn{2}{c}{\textbf{Artículo}} \\
		\cmidrule(r){1-2}
		\textbf{Animal} & \textbf{Descripción} & \textbf{Precio (€)} \\
		\midrule
		Mosquito        & por gramo            & 13.65               \\
	                    & cada uno             & 0.01                \\
	    Ñu              & relleno              & 92.50               \\
	    Emú             & relleno              & 33.33.              \\
		Armadillo       & congelado            & 8.99                \\
		\bottomrule
	\end{tabular}
\end{table}

\end{document}
```

{{< figure src="/tutoriales/latex/img/ejemplo_tabla.jpg" lightbox="true" >}}
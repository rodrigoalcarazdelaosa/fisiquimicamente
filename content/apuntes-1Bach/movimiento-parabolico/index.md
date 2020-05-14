---
title: Movimiento parabólico
subtitle: Estudio del tiro parabólico u oblicuo
summary: Estudio del tiro parabólico u oblicuo.
tags:
- 1º Bach
- movimiento
categories:
- Física

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**SpaceX**](https://unsplash.com/@spacex) en [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
- icon_pack: fas
  icon: download
  name: PDF Texto
  url: movimiento-parabolico-texto.pdf
  
- icon_pack: fas
  icon: download
  name: PDF Póster
  url: movimiento-parabolico-poster.pdf  

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: 
---

$$
\newcommand{\ihat}{\hat{\imath}}
\newcommand{\jhat}{\hat{\jmath}}
$$

{{% toc %}}

El **movimiento parabólico**[^1] surge de la **composición** de:

[^1]: También conocido como **tiro oblicuo**, este movimiento está estudiado desde la antigüedad. Se recoge en los libros más antiguos de balística para aumentar la precisión en el tiro de un proyectil.

- Un **MRU horizontal** con velocidad $\vec v_x = v_x \ihat$ constante.
- Un **MRUV vertical** con velocidad inicial $\vec v_{0y} = v_{0y} \jhat$ hacia arriba. La aceleración $\vec g=-g\jhat$ apunta hacia abajo[^2].
[^2]: Despreciamos aquí el rozamiento con el aire.

La figura muestra el esquema de un **tiro parabólico**, con un proyectil lanzado desde una altura $h$ con una velocidad inicial $\vec v_0 = v_x \ihat + v_{0y}\jhat$ que forma un ángulo $\alpha_0$ con la horizontal.

{{< figure src="/apuntes-1Bach/movimiento-parabolico/tiro-parabolico.png" lightbox="true" >}}

Como el proyectil se lanza desde una altura $h$, su __posición inicial__ viene dada por:

$$
\vec r_0 = x_0\ihat + y_0\jhat = 0+h\jhat = h\jhat
$$

Las **componentes** del vector **velocidad** inicial $\vec v_0$ están relacionadas con el ángulo $\alpha_0$, a través de su tangente:
$$
\tan \alpha_0 = \frac{v_{0y}}{v_x}
$$

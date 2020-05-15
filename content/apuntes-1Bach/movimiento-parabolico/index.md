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

La figura [1](#figure-esquema-de-un-tiro-parabólico-un-proyectil-es-lanzado-desde-una-altura-h-con-una-velocidad-inicial-vec-v_0-que-forma-un-ángulo-alpha_0-con-la-horizontal) muestra el esquema de un **tiro parabólico**, con un proyectil lanzado desde una altura $h$ con una velocidad inicial $\vec v_0 = v_x \ihat + v_{0y}\jhat$ que forma un ángulo $\alpha_0$ con la horizontal.

{{< figure src="tiro-parabolico.png" title="Esquema de un **tiro parabólico**. Un proyectil es lanzado desde una altura $h$ con una velocidad inicial $\vec v_0$ que forma un ángulo $\alpha_0$ con la horizontal." numbered="true" lightbox="true" >}}

Como el proyectil se lanza desde una altura $h$, su __posición inicial__ viene dada por:

$$
\vec r_0 = x_0\ihat + y_0\jhat = 0+h\jhat = h\jhat
$$

Las **componentes** del vector **velocidad** inicial $\vec v_0$ están relacionadas con el ángulo $\alpha_0$, a través de su tangente:
$$
\tan \alpha_0 = \frac{v_{0y}}{v_x}
$$

## Componentes de la velocidad
{{< figure src="componentes-v.png" lightbox="true" >}}

En cualquier momento, las **componentes** de la **velocidad** $\vec v$ son:
\begin{align*}
	\vec v_x &= (v\cos\alpha)\ihat \\\\
	\vec v_y &= (v\sin\alpha)\jhat
\end{align*}

Según el **teorema de Pitágoras**:
$$
v = \lvert\vec v\rvert = \sqrt{v_x^2+v_y^2}
$$

## Ecuaciones del movimiento
Para obtener las **ecuaciones del movimiento**, separamos el movimiento del proyectil en sus dos **componentes**, $x$ (horizontal) e $y$ (vertical):

Componente $x$
: En la dirección **horizontal** el proyectil describe un MRU, por lo que su **ecuación del movimiento** vendrá dada por:
$$
x(t) = x_0 + v_x t = 0 + v_0\cos\alpha_0\cdot t = v_0\cos\alpha_0\cdot t
$$

Componente $y$
: En la dirección **vertical** el proyectil describe un MRUV ($\vec g=-g\jhat$), por lo que su **ecuación del movimiento** vendrá dada por:
$$
y(t) = y_0 + v_{0y}t + \frac{1}{2}at^2 = h + v_0\sin\alpha_0\cdot t -\frac{1}{2}gt^2
$$

### Ecuaciones vectoriales
| Magnitud | Ecuación vectorial |
| --- | --- |
| Posición | $\vec r(t) = x(t)\ihat + y(t)\jhat =  (v_0\cos\alpha_0\cdot t) \ihat + \left(h+v_0\sin\alpha_0\cdot t -\frac{1}{2}gt^2\right)\jhat$ |
| Velocidad | $\vec v(t) = v_x\ihat + v_y(t)\jhat =  (v_0\cos\alpha_0)\ihat + (v_0\sin\alpha_0-gt\jhat$ |
| Aceleración | $\vec a(t) = a_x\ihat + a_y\jhat = 0 -g\jhat = -g\jhat$ |

## Ecuación de la trayectoria
Eliminando el tiempo $t$ se obtiene la ecuación de una **parábola**, tal y como se observa en la figura [1](#figure-esquema-de-un-tiro-parabólico-un-proyectil-es-lanzado-desde-una-altura-h-con-una-velocidad-inicial-vec-v_0-que-forma-un-ángulo-alpha_0-con-la-horizontal):

$$
y = h + x\tan\alpha_0 - \frac{gx^2}{2v_0^2\cos^2\alpha_0}
$$

## Tiempo de vuelo

El **tiempo de vuelo** $t_\text{vuelo}$ es el tiempo total que el móvil permanece en el aire. Se obtiene imponiendo $y(t_\text{vuelo})=0$ y despejando el tiempo
$$
0 = h+v_0\sin\alpha_0\cdot t_\text{vuelo} - \frac{1}{2}gt_\text{vuelo}^2
$$

Despejando $t_\text{vuelo}$:
$$
t_\text{vuelo} = \frac{v_0\sin\alpha_0\pm\sqrt{v_0^2\sin^2\alpha_0+2gh}}{g},
$$
donde nos quedamos únicamente con la opción positiva ($+$).

## Alcance
El **alcance** es la distancia horizontal que recorre el móvil, siendo máximo para un ángulo $\alpha_0 = 45^\circ$, y teniendo el mismo valor para $\alpha_0 = 45^\circ+a$ que para $\alpha_0 = 45^\circ-a$. Se obtiene sustituyendo en la ecuación de la coordenada $x$ la expresión del tiempo de vuelo, es decir **alcance** $ = x(t_\text{vuelo})$.

## Altura máxima

La **altura máxima** $y_\text{máx}$ se alcanza cuando:
$$
v_y(t) = v_0\sin\alpha_0-gt = 0
$$

Despejando el tiempo $t=v_0\sin\alpha_0/g$ y sustituyendo en $y(t)$:
$$
y_\text{máx} = h+v_0\sin\alpha_0\cdot \frac{v_0\sin\alpha_0}{g}-\frac{1}{2}g\left(\frac{v_0\sin\alpha_0}{g}\right)^2 = h+\frac{v_0^2\sin^2\alpha_0}{2g},
$$		

obteniéndose su valor máximo para $\alpha_0 = 90^\circ$ (lanzamiento vertical).

## Ángulo de la trayectoria

El **ángulo de la trayectoria** en un determinado punto coincide con el ángulo que el vector velocidad $\vec v$ forma con la horizontal en ese punto. Para su cálculo obtenemos las componentes $\vec v_x$ y $\vec v_y$ y gracias a la definición trigonométrica de tangente de un ángulo, calculamos $\alpha$:
$$
\tan \alpha = \frac{v_y}{v_x} \Rightarrow \alpha = \arctan\left(\frac{v_y}{v_x}\right)
$$

## Ejemplo resuelto
{{% alert example %}}
Hola
{{% /alert %}}
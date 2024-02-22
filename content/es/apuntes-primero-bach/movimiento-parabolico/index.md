---
translationKey: "/recursos-fisica-quimica/apuntes/1bach/movimiento-parabolico"
title: Movimiento parabólico
url: "/recursos-fisica-quimica/apuntes/1bach/movimiento-parabolico"
subtitle: Estudio del tiro parabólico u oblicuo
summary: Estudio del tiro parabólico u oblicuo.
breadcrumbs: ["recursos-fisica-quimica","apuntes","1bach"]
authors:
- rodrigo-alcaraz-de-la-osa
- leticia-cabezas
tags:
- apuntes
- 1º Bach
- movimiento
- proyectiles
categories:
- Física
weight: 5

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**SpaceX**](https://unsplash.com/@spacex) en [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
- icon_pack: fas
  icon: 
  name: 📜 Póster
  url: movimiento-parabolico-poster.pdf
- icon_pack: fas
  icon:
  name: 🔗 Ejercicios
  url: https://drive.google.com/file/d/146zPEp6BQmpHvasZiyg_b4tTBQLtIVD2/view
- icon_pack: fas
  icon:
  name: 📝 Frikiexamen
  url: movimiento-parabolico-dinamica-frikiexamen.pdf  

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: movimiento-parabolico-1Bach

math: true
---

{{% toc %}}

{{% callout note %}}
**Reconoce** y **aplica** la **composición** de **movimientos** en **situaciones reales** que te sean familiares con [esta genial **actividad**]({{< relref "/actividades-primero-bach/tiro-parabolico-vida-real" >}}).
{{% /callout %}}

El **movimiento parabólico**[^1] surge de la **composición** de:

[^1]: También conocido como **tiro oblicuo**, este movimiento está estudiado desde la antigüedad. Se recoge en los libros más antiguos de balística para aumentar la precisión en el tiro de un proyectil.

- Un **MRU horizontal** con velocidad $\vec v_x = v_x \hat{\imath}$ constante.
- Un **MRUA vertical** con velocidad inicial $\vec v_{0y} = v_{0y} \hat{\jmath}$ hacia arriba. La aceleración $\vec g=-g\hat{\jmath}$ apunta hacia abajo[^2].
[^2]: Despreciamos aquí el rozamiento con el aire.

La figura [1](#figure-esquema-de-un-tiro-parabólico-un-proyectil-es-lanzado-desde-una-altura-h-con-una-velocidad-inicial-vec-v_0-que-forma-un-ángulo-alpha_0-con-la-horizontal) muestra el esquema de un **tiro parabólico**, con un proyectil lanzado desde una altura $h$ con una velocidad inicial $\vec v_0 = v_x \hat{\imath} + v_{0y}\hat{\jmath}$ que forma un ángulo $\alpha_0$ con la horizontal.

{{< figure library="true" src="movimiento-parabolico-1Bach/tiro-parabolico.svg" title="Esquema de un **tiro parabólico**. Un proyectil es lanzado desde una altura $h$ con una velocidad inicial $\vec v_0$ que forma un ángulo $\alpha_0$ con la horizontal." numbered="true" lightbox="false" width="100%" >}}

Como el proyectil se lanza desde una altura $h$, su __posición inicial__ viene dada por:

$$
\newcommand{\ihat}{\hat{\imath}}
\newcommand{\jhat}{\hat{\jmath}}
\vec r_0 = x_0\ihat + y_0\jhat = 0+h\jhat = h\jhat
$$

Las **componentes** del vector **velocidad** inicial $\vec v_0$ están relacionadas con el ángulo $\alpha_0$, a través de su tangente:
$$
\tan \alpha_0 = \frac{v_{0y}}{v_x}
$$

## Componentes de la velocidad
{{< figure library="true" src="movimiento-parabolico-1Bach/componentes-v.svg" lightbox="false" width="100%" >}}

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
: En la dirección **vertical** el proyectil describe un MRUA ($\vec g=-g\jhat$), por lo que su **ecuación del movimiento** vendrá dada por:
$$
y(t) = y_0 + v_{0y}t + \frac{1}{2}at^2 = h + v_0\sin\alpha_0\cdot t -\frac{1}{2}gt^2
$$

### Ecuaciones vectoriales
| Magnitud | Ecuación vectorial |
| --- | --- |
| Posición | $\vec r(t) = x(t)\ihat + y(t)\jhat =  (v_0\cos\alpha_0\cdot t) \ihat + \left(h+v_0\sin\alpha_0\cdot t -\frac{1}{2}gt^2\right)\jhat$ |
| Velocidad | $\vec v(t) = v_x\ihat + v_y(t)\jhat =  (v_0\cos\alpha_0)\ihat + (v_0\sin\alpha_0-gt)\jhat$ |
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

{{< spoiler text="¿Y si lanzamos el proyectil desde el suelo?" >}}
No tenemos más que imponer $h=0$ en la anterior expresión, para llegar a:

$$
t_\text{vuelo} = \frac{2v_0\sin\alpha_0}{g}
$$
{{< /spoiler >}}

## Alcance
El **alcance** es la distancia horizontal que recorre el móvil, siendo máximo para un ángulo $\alpha_0 = 45^\circ$, y teniendo el mismo valor para $\alpha_0 = 45^\circ+a$ que para $\alpha_0 = 45^\circ-a$. Se obtiene sustituyendo en la ecuación de la coordenada $x$ la expresión del tiempo de vuelo, es decir **alcance** $ = x(t_\text{vuelo})$.

{{< spoiler text="¿Y si lanzamos el proyectil desde el suelo?" >}}
Utilizando la expresión del tiempo de vuelo para el caso $h=0$, tenemos

\begin{align*}
x(t_\text{vuelo}) = v_0\cos\alpha_0\cdot t_\text{vuelo} &= v_0\cos\alpha_0\cdot \frac{2v_0\sin\alpha_0}{g} \\\\
& = \frac{v_0^2\sin(2\alpha_0)}{g}
\end{align*}
{{< /spoiler >}}

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

## Ejemplo

{{% callout example %}}
<br>

> Desde una ventana de una casa que está a 15&thinsp;m de altura lanzamos un chorro de agua a 20&thinsp;m/s con un ángulo de 40&thinsp;&deg;. Calcula la distancia a la que caerá el agua y la velocidad con la que llegará.

---

Lo primero hacemos un dibujo representando la situación:
{{< figure library="true" src="movimiento-parabolico-1Bach/tiro-parabolico-ejemplo.svg" lightbox="false" width="100%" >}}

---

Vamos a escribir las **ecuaciones del movimiento**, por **componentes**:
\begin{align*}
	\text{Componente $x$}\rightarrow x(t) &= x_0 + v_x t = 0 + v_0\cos\alpha_0 \cdot t = \left(20\cos 40^\circ\cdot t\right)\thinspace\mathrm{m} \\\\
	\text{Componente $y$}\rightarrow y(t) &= y_0 + v_{0y}t + \frac{1}{2}at^2 = h + v_0\sin\alpha_0\cdot t -\frac{1}{2}gt^2 \\\\
	&= \left(15 + 20\sin40^\circ\cdot t - 4.9t^2\right)\thinspace\mathrm{m} 
\end{align*}

---

Lo primero que nos piden es la distancia a la que caerá el agua, o lo que es lo mismo, el **alcance**. Para ello necesitamos calcular primero el **tiempo de vuelo** $t_\text{vuelo}$, por lo que imponemos $y\left(t_\text{vuelo}\right)=0$:
$$
0 = 15 + 20\sin40^\circ\cdot t_\text{vuelo} - 4.9t_\text{vuelo}^2
$$

Despejamos el **tiempo de vuelo** $t_\text{vuelo}$ (notar que únicamente nos quedamos con la opción positiva):
$$
t_\text{vuelo} = \frac{20\sin40^\circ\pm\sqrt{20^2\sin^240^\circ+294}}{9.8} = \begin{cases}
	3.5\thinspace\mathrm s \\\\
	\xcancel{-0.9\thinspace\mathrm s}
\end{cases}
$$

Sustituyendo el **tiempo de vuelo** en la coordenada $x$ obtenemos el **alcance**:

$$
\text{alcance} = x\left(t_\text{vuelo}\right) = 20\cos40^\circ\cdot t_\text{vuelo} = 20\cos40^\circ\cdot 3.5 = 53.6\thinspace\mathrm m
$$

---

Para calcular la velocidad con la que llega al suelo, escribimos primero la **ecuación de la velocidad**:
$$
\begin{split}				
\vec v(t) = v_x\ihat + v_y(t)\jhat &= \left(v_0\cos\alpha_0\right)\ihat + \left(v_0\sin\alpha_0 - gt\right)\jhat \\\\
&= \left[\left(20\cos 40^\circ\right)\ihat + \left(20\sin 40^\circ-9.8t\right)\jhat\right]\thinspace\mathrm{m/s}
\end{split}			
$$
Sustituyendo el **tiempo de vuelo** obtenemos la **velocidad** con la que llega al suelo, $\vec v(t_\text{vuelo})$:
$$
\begin{split}				
\vec v(t_\text{vuelo}) &= \left(20\cos 40^\circ\right)\ihat + \left(20\sin 40^\circ-9.8\cdot t_\text{vuelo}\right)\jhat \\\\
&= 15.3\ihat + \left(20\sin 40^\circ-9.8\cdot 3.5\right)\jhat = \left(15.3\ihat - 21.4\jhat\right)\thinspace\mathrm{m/s}
\end{split}
$$

siendo el **módulo** $v = \lvert\vec v\rvert = \sqrt{15.3^2 + (-21.4)^2} = 26.3\thinspace\mathrm{m/s}$ (**teorema de Pitágoras**).
{{% /callout %}}

## Simulación

Si te apetece, puedes *jugar* con esta **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>
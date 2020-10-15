---
title: Movimiento parabólico
subtitle: Estudio del tiro parabólico u oblicuo
summary: Estudio del tiro parabólico u oblicuo.

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Movimiento parabólico

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

## Índice

- [Componentes de la velocidad](#/2)
- [Ecuaciones del movimiento](#/3)
- [Ecuación de la trayectoria](#/4)
- [Tiempo de vuelo](#/5)
- [Alcance](#/6)
- [Altura máxima](#/7)
- [Ángulo de la trayectoria](#/8)
- [Ejemplo](#/9)

---

El **movimiento parabólico** surge de la **composición** de:

- Un **MRU horizontal** con velocidad $\vec v_x = v_x \hat{\imath}$ constante.
- Un **MRUV vertical** con velocidad inicial $\vec v_{0y} = v_{0y} \hat{\jmath}$ hacia arriba. La aceleración $\vec g=-g\hat{\jmath}$ apunta hacia abajo.

---

{{< figure library="true" src="movimiento-parabolico-1Bach/tiro-parabolico.svg" lightbox="false" width="90%" >}}

---

Como el proyectil se lanza desde una altura $h$, su __posición inicial__ viene dada por:

$$
\newcommand{\ihat}{\hat{\imath}}
\newcommand{\jhat}{\hat{\jmath}}
\vec r_0 = x_0\ihat + y_0\jhat = 0+h\jhat = h\jhat
$$

---

Las **componentes** del vector **velocidad** inicial $\vec v_0$ están relacionadas con el ángulo $\alpha_0$, a través de su tangente:
$$
\tan \alpha_0 = \frac{v_{0y}}{v_x}
$$

---

{{% section %}}

## Componentes de la velocidad

{{< figure library="true" src="movimiento-parabolico-1Bach/componentes-v.svg" lightbox="false" width="100%" >}}

---

En cualquier momento, las **componentes** de la **velocidad** $\vec v$ son:
\begin{align*}
	\vec v_x &= (v\cos\alpha)\ihat \\\\
	\vec v_y &= (v\sin\alpha)\jhat
\end{align*}

Según el **teorema de Pitágoras**:
$$
v = \lvert\vec v\rvert = \sqrt{v_x^2+v_y^2}
$$

{{% /section %}}

---

{{% section %}}

## Ecuaciones del movimiento
Para obtener las **ecuaciones del movimiento**, separamos el movimiento del proyectil en sus dos **componentes**, $x$ (horizontal) e $y$ (vertical):

---

Componente $x$
: En la dirección **horizontal** el proyectil describe un MRU, por lo que su **ecuación del movimiento** vendrá dada por:
$$
x(t) = x_0 + v_x t = 0 + v_0\cos\alpha_0\cdot t = v_0\cos\alpha_0\cdot t
$$

---

Componente $y$
: En la dirección **vertical** el proyectil describe un MRUV ($\vec g=-g\jhat$), por lo que su **ecuación del movimiento** vendrá dada por:
$$
y(t) = y_0 + v_{0y}t + \frac{1}{2}at^2 = h + v_0\sin\alpha_0\cdot t -\frac{1}{2}gt^2
$$

---

### Ecuaciones vectoriales
| Magnitud | Ecuación vectorial |
| --- | --- |
| Posición | $\vec r(t) = (v_0\cos\alpha_0\cdot t) \ihat + \left(h+v_0\sin\alpha_0\cdot t -\frac{1}{2}gt^2\right)\jhat$ |
| Velocidad | $\vec v(t) = (v_0\cos\alpha_0)\ihat + (v_0\sin\alpha_0-gt\jhat$ |
| Aceleración | $\vec a(t) = 0 -g\jhat = -g\jhat$ |

{{% /section %}}

---

{{% section %}}

## Ecuación de la trayectoria
Eliminando el tiempo $t$ se obtiene la ecuación de una **parábola**:

$$
y = h + x\tan\alpha_0 - \frac{gx^2}{2v_0^2\cos^2\alpha_0}
$$

{{% /section %}}

---

{{% section %}}

## Tiempo de vuelo

El **tiempo de vuelo** $t_\text{vuelo}$ es el tiempo total que el móvil permanece en el aire.

Se obtiene imponiendo $y(t_\text{vuelo})=0$ y despejando el tiempo
$$
0 = h+v_0\sin\alpha_0\cdot t_\text{vuelo} - \frac{1}{2}gt_\text{vuelo}^2
$$

---

Despejando $t_\text{vuelo}$:
$$
t_\text{vuelo} = \frac{v_0\sin\alpha_0\pm\sqrt{v_0^2\sin^2\alpha_0+2gh}}{g},
$$
donde nos quedamos únicamente con la opción positiva ($+$).


---

### ¿Y si lanzamos el proyectil desde el suelo?
No tenemos más que imponer $h=0$ en la anterior expresión, para llegar a:

$$
t_\text{vuelo} = \frac{2v_0\sin\alpha_0}{g}
$$

{{% /section %}}

---

{{% section %}}

## Alcance
El **alcance** es la distancia horizontal que recorre el móvil, siendo máximo para un ángulo $\alpha_0 = 45^\circ$, y teniendo el mismo valor para $\alpha_0 = 45^\circ+a$ que para $\alpha_0 = 45^\circ-a$. Se obtiene sustituyendo en la ecuación de la coordenada $x$ la expresión del tiempo de vuelo, es decir **alcance** $ = x(t_\text{vuelo})$.

---

### ¿Y si lanzamos el proyectil desde el suelo?
Utilizando la expresión del tiempo de vuelo para el caso $h=0$, tenemos

\begin{align*}
x(t_\text{vuelo}) = v_0\cos\alpha_0\cdot t_\text{vuelo} &= v_0\cos\alpha_0\cdot \frac{2v_0\sin\alpha_0}{g} \\\\
& = \frac{v_0^2\sin(2\alpha_0)}{g}
\end{align*}

{{% /section %}}

---

{{% section %}}

## Altura máxima

La **altura máxima** $y_\text{máx}$ se alcanza cuando:
$$
v_y(t) = v_0\sin\alpha_0-gt = 0
$$

---

Despejando el tiempo $t=v_0\sin\alpha_0/g$ y sustituyendo en $y(t)$:
$$
y_\text{máx} = h+v_0\sin\alpha_0\cdot \frac{v_0\sin\alpha_0}{g}-\frac{1}{2}g\left(\frac{v_0\sin\alpha_0}{g}\right)^2 = h+\frac{v_0^2\sin^2\alpha_0}{2g},
$$		

obteniéndose su valor máximo para $\alpha_0 = 90^\circ$ (lanzamiento vertical).

{{% /section %}}
---
title: Movimientos
subtitle: MRU, MRUV Y MCU
summary: MRU, MRUV y MCU.
tags:
- 4º ESO
- movimiento
categories:
- Física

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Shutterbug75**](https://pixabay.com/es/users/shutterbug75-2077322/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: download
  name: PDF Póster
  url: movimientos-poster.pdf  

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: 
---

{{% toc %}}

## Movimiento rectilíneo uniforme (MRU)
Las **características** del **movimiento rectilíneo uniforme (MRU)** son:

- Trayectoria rectilínea.
- Velocidad $v$ constante (aceleración $a=0$).

La **ecuación principal**[^1] del MRU es:
[^1]: Esta es la llamada **ecuación del movimiento** o **ecuación de la posición**, pues nos da la posición $x$ en función del tiempo $t$.

$$
x(t) = x_0 + v(t-t_0),
$$

donde $x$ es la posición final, $x_0$ la posición inicial, $v$ la velocidad, $t$ el tiempo final y $t_0$ el tiempo inicial.

### Gráficas
{{< figure src="graficas-MRU.png" lightbox="true" >}}

### Ejemplo
{{% alert example %}}
<br>

> Un caracol recorre en línea recta una distancia de $10.8\thinspace\mathrm m$ en $1.5\thinspace\mathrm h$. ¿Qué distancia recorrerá en $5\thinspace\mathrm{min}$?

---

Escribimos la ecuación del movimiento del caracol:
$$
x(t) = x_0 + vt,
$$
donde $x = 10.8\thinspace\mathrm m$, $x_0 = 0$, $v$ es la velocidad del caracol (desconocida) y $t=1.5\thinspace\mathrm h$.

Como nos preguntan la distancia que recorrerá, $\Delta x = x-x_0$, en $5\thinspace\mathrm{min}$, podemos pasar las $1.5\thinspace\mathrm h$ a minutos:

$$
1.5\thinspace\cancel{\mathrm h}\cdot \frac{60\thinspace\mathrm{min}}{1\thinspace\cancel{\mathrm h}} = 90\thinspace\mathrm{min}
$$

y así calcular la velocidad en m/min:
$$
10.8\thinspace\mathrm m = 0 + v\cdot 90\thinspace\mathrm{min} \rightarrow v = 0.12\thinspace\mathrm{m/min}
$$

La distancia recorrida en $5\thinspace\mathrm{min}$ será por tanto:
$$
\Delta x (5\thinspace\mathrm{min}) = x(5\thinspace\mathrm{min}) - x_0 =  0.12\thinspace\mathrm{m/\cancel{min}} \cdot 5\thinspace\cancel{\mathrm{min}} = 0.6\thinspace\mathrm m
$$
{{% /alert %}}

## Movimiento rectilíneo uniformemente variado (MRUV)

Las **características** del **movimiento rectilíneo uniformemente variado (MRUV)** son:

- Trayectoria rectilínea.
- Aceleración $a$ constante (velocidad $v$ variable).

La **ecuaciones principales** del MRUV son:
\begin{align*}
	\label{eq:1}
	\text{\textsc{ecuación de la posición: }} x(t) &= x_0 +v_0(t-t_0) +\frac{1}{2}a(t-t_0)^2 \tag{1} \\\\
	\label{eq:2}
	\text{\textsc{ecuación de la velocidad: }} v(t) &= v_0 + a(t-t_0) \tag{2} \\\\
	\label{eq:v2}
	v^2-v_0^2 &= 2a\Delta x \tag{3}
\end{align*}

donde $x$ es la posición final, $x_0$ la posición inicial, $v_0$ la velocidad inicial, $a$ la aceleración, $t$ el tiempo final, $t_0$ el tiempo inicial y $\Delta x = x-x_0$ es la distancia o espacio recorrido.

\subsection{Gráficas MRUV}

\begin{figure*}[htbp]
	\includegraphics[width=\textwidth]{graficas_MRUV.tikz}
	%\caption{caption}
	%\label{fig:label}
\end{figure*}
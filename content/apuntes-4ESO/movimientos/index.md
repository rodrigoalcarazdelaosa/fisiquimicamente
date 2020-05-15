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
10.8\thinspace\mathrm m = 0 + v\cdot 90\thinspace\mathrm{min} \rightarrow v = \SI{0.12}{\m/\minute}
$$

La distancia recorrida en \SI{5}{\minute} será por tanto:
\[
\Delta x (\SI{5}{\minute}) = x(\SI{5}{\minute}) - x_0 =  \SI[per-mode=symbol]{0.12}{\metre\per\cancel\minute} \cdot \SI{5}{\cancel\minute} = \SI{0.6}{\m}
\]
{{% /alert %}}
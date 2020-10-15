---
title: Movimientos
summary: MRU, MRUV y MCU.

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Movimientos

- [Movimiento rectilíneo uniforme (MRU)](#/1)
- [Movimiento rectilíneo uniformemente variado (MRUV)](#/2)
- [Caída libre/lanzamiento vertical](#/3)
- [Encuentros](#/4)
- [Movimiento circular uniforme (MCU)](#/5)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

{{% section %}}

## Movimiento rectilíneo uniforme (MRU)
- [Características]
- [Ecuación principal]
- [Gráficas]
- [Ejemplo]

(continúa hacia abajo)

👇

---

### Características
Las **características** del **movimiento rectilíneo uniforme (MRU)** son:

- Trayectoria rectilínea.
- Velocidad $v$ constante (aceleración $a=0$).

---

### Ecuación principal

La **ecuación principal** del MRU es:

$$
x(t) = x_0 + v(t-t_0),
$$

donde $x$ es la posición final, $x_0$ la posición inicial, $v$ la velocidad, $t$ el tiempo final y $t_0$ el tiempo inicial.

---

### Gráficas
{{< figure library="true" src="movimientos-4ESO/graficas-MRU.svg" lightbox="false" width="100%" >}}

---

> Agudiza tu comprensión de la **posición**, la **velocidad** y la **aceleración** construyendo **gráficas** de **movimiento** en **tiempo real** con este genial **juego**: https://www.universeandmore.com/motion-mapper-es/.

---

### Ejemplo
<q>Un caracol 🐌 recorre en línea recta una distancia de $10.8\thinspace\mathrm m$ en $1.5\thinspace\mathrm h$. ¿Qué distancia recorrerá en $5\thinspace\mathrm{min}$?</q>

---

Escribimos la ecuación del movimiento del caracol:
$$
x(t) = x_0 + vt,
$$
donde $x = 10.8\thinspace\mathrm m$, $x_0 = 0$, $v$ es la velocidad del caracol (desconocida) y $t=1.5\thinspace\mathrm h$.

---

Como nos preguntan la distancia que recorrerá, $\Delta x = x-x_0$, en $5\thinspace\mathrm{min}$, podemos pasar las $1.5\thinspace\mathrm h$ a minutos:

$$
1.5\thinspace\mathrm h\cdot \frac{60\thinspace\mathrm{min}}{1\thinspace\mathrm h} = 90\thinspace\mathrm{min}
$$

y así calcular la velocidad en m/min:
$$
10.8\thinspace\mathrm m = 0 + v\cdot 90\thinspace\mathrm{min} \rightarrow v = 0.12\thinspace\mathrm{m/min}
$$

---

La distancia recorrida en $5\thinspace\mathrm{min}$ será por tanto:
$$
\Delta x (5\thinspace\mathrm{min}) = x(5\thinspace\mathrm{min}) - x_0 =  0.12\thinspace\mathrm{m/min} \cdot 5\thinspace\mathrm{min} = 0.6\thinspace\mathrm m
$$

{{% /section %}}

---

{{% section %}}

## Movimiento rectilíneo uniformemente variado (MRUV)

### Características

Las **características** del **movimiento rectilíneo uniformemente variado (MRUV)** son:

- Trayectoria rectilínea.
- Aceleración $a$ constante (velocidad $v$ variable).

### Ecuaciones principales

La **ecuaciones principales** del MRUV son:
\begin{align*}
	\label{eq:1}
	\text{Ecuación de la posición: } x(t) &= x_0 +v_0(t-t_0) +\frac{1}{2}a(t-t_0)^2 \tag{1} \\\\
	\label{eq:2}
	\text{Ecuación de la velocidad: } v(t) &= v_0 + a(t-t_0) \tag{2} \\\\
	\label{eq:v2}
	v^2-v_0^2 &= 2a\Delta x \tag{3}
\end{align*}

donde $x$ es la posición final, $x_0$ la posición inicial, $v_0$ la velocidad inicial, $a$ la aceleración, $t$ el tiempo final, $t_0$ el tiempo inicial y $\Delta x = x-x_0$ es la distancia o espacio recorrido.

### Gráficas
{{< figure library="true" src="movimientos-4ESO/graficas-MRUV.svg" lightbox="false" width="100%" >}}

{{% callout note %}}
Agudiza tu comprensión de la **posición**, la **velocidad** y la **aceleración** construyendo **gráficas** de **movimiento** en **tiempo real** con este genial **juego**: https://www.universeandmore.com/motion-mapper-es/.
{{% /callout %}}

### Ejemplo
{{% callout example %}}
<br>

> Un coche <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚗</span> que circula a $70.2\thinspace\mathrm{km/h}$ disminuye su velocidad a razón de $3\thinspace\mathrm{m/s}$ cada segundo. ¿Qué distancia recorrerá hasta detenerse?

---

Lo primero pasamos la **velocidad inicial** $v_0$ a m/s:
$$
v_0 = 70.2\thinspace\frac{\cancel{\mathrm{km}}}{\cancel{\mathrm{h}}}\cdot \frac{1000\thinspace\mathrm m}{\thinspace\cancel{\mathrm{km}}} \cdot \frac{1\thinspace\cancel{\mathrm h}}{3600\thinspace\mathrm s} = 19.5\thinspace\mathrm{m/s}
$$

La frase "*disminuye su velocidad a razón de $3\thinspace\mathrm{m/s}$ cada segundo*" la tenemos que interpretar como que su **aceleración** $a=-3\thinspace\mathrm{m/s^2}$ (el signo $-$ es porque su velocidad disminuye, y la velocidad la tomamos positiva). Como no me dan información sobre tiempo ni me piden ningún tiempo (sino distancia recorrida $\Delta x$), utilizo la ecuación (3):
$$
v^2-v_0^2 = 2a\Delta x, \tag{3}
$$
de donde despejo la distancia recorrida $\Delta x$:
$$
\Delta x = \frac{v^2-v_0^2}{2a} = \frac{0^2-19.5^2}{2\cdot (-3)} = 63.375\thinspace\mathrm m
$$
{{% /callout %}}

{{% /section %}}
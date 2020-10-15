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

{{% /section %}}
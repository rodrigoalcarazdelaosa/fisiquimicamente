---
title: Fluidos
summary: Concepto de presión, principios de la hidrostática y física de la atmósfera.

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Fluidos

- [Concepto de presión](#/1)
- [Principios de la hidrostática](#/2)
- [Física de la atmósfera](#/3)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](fluidos-diapositivas.pdf)

---

{{% section %}}

## Concepto de presión

La **presión**, $p$, es una magnitud escalar que relaciona la fuerza $F$ (ejercida perpendicularmente) con la superficie $A$ sobre la que actúa:
$$
p = \frac{F}{A}
$$

(continúa hacia abajo)

👇

---

### Unidades
En el SI la presión se mide en $\mathrm{N/m^2}$, que recibe el nombre de **pascal** ($1\thinspace\mathrm{Pa} = 1\thinspace\mathrm{N/m^2}$). La siguiente tabla muestra otras unidades de presión y su equivalencia entre ellas:

[https://en.wikipedia.org/wiki/Template:Pressure_Units](https://en.wikipedia.org/wiki/Template:Pressure_Units)

{{% /section %}}

---

{{% section %}}

## Principios de la hidrostática

- [Principio de Pascal](#/2/1)
- [Principio fundamental de la hidrostática](#/2/8)
- [Principio de Arquímedes](#/2/1)

(continúa hacia abajo)

👇

---

### Principio de Pascal
> Todo cambio de presión en un punto de un fluido incompresible encerrado en un recipiente de paredes indeformables se transmite con igual intensidad en todas las direcciones y en todos los puntos del fluido.

---

{{< youtube iPQ3WORwUYQ >}}

---

#### Elevador hidráulico

{{< figure library="true" src="fluidos-4ESO/elevador-hidraulico.png" lightbox="false" >}}

$$
p_1 = p_2 \Rightarrow \frac{F_1}{A_1} = \frac{F_2}{A_2} \Rightarrow F_1A_2 = F_2A_1
$$

---

##### Ejemplo
<q>¿Qué radio deberá tener el soporte circular sobre el que está *aparcado* un coche de masa $m = 1500\thinspace\mathrm{kg}$ si queremos levantarlo apretando uno de los pistones (también circular) de un elevador hidráulico con nuestra mano? <br>
(Suponer que la fuerza máxima que podemos hacer es $F_1 = 500\thinspace\mathrm N$ y que el pistón que apretamos tiene un radio $r_1 = 8\thinspace\mathrm{cm}$).</q>

---

La fuerza que debemos superar es el peso del coche:

\begin{align*}
F_2 = m\cdot g &= 1500\thinspace\mathrm{kg}\cdot 9.8\thinspace\mathrm{N/kg} \\\\
&= 14700\thinspace\mathrm{N}
\end{align*}

---

Aplicando el **principio de Pascal**:

\begin{align*}
p_1 &= p_2 \\\\
\frac{F_1}{A_1} &= \frac{F_2}{A_2} \\\\
\frac{F_1}{\pi r_1^2} &= \frac{F_2}{\pi r_2^2}
\end{align*}
donde $F_1 = 500\thinspace\mathrm N$, $r_1 = 8\thinspace\mathrm{cm} = 0.08\thinspace\mathrm{m}$, $F_2 = 14700\thinspace\mathrm{N}$ y $r_2$ es lo que nos piden.

---

Despejando $r_2$:

\begin{align*}
r_2 = r_1 \sqrt{\frac{F_2}{F_1}} &= 0.08\thinspace\mathrm{m}\sqrt{\frac{14700\thinspace\mathrm{N}}{500\thinspace\mathrm{N}}} \\\\
&= 0.434\thinspace\mathrm m = 43.4\thinspace\mathrm{cm}
\end{align*}

---

{{< vimeo 209053495 >}}

---

### Principio fundamental de la hidrostática

> La presión ejercida por un fluido de densidad $d$ en un punto situado a una profundidad $h$ de la superficie es numéricamente igual a la presión ejercida por una columna de fluido de altura $h$:
$$
p = \frac{F}{A} = \frac{m\cdot g}{A} = \frac{d\cdot V\cdot g}{A} = \frac{d\cdot \bcancel{A}\cdot h\cdot g}{\bcancel{A}} = d\cdot g \cdot h
$$

{{% /section %}}

---

{{% section %}}

## Física de la atmósfera

{{% /section %}}
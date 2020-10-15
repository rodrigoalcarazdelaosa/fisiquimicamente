---
title: Fuerzas
summary: "Leyes de Newton y fuerzas de especial interés."

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Fuerzas

- [Naturaleza vectorial de las fuerzas](#/1)
- [Leyes de Newton](#/2)
- [Fuerzas de especial interés](#/3)
- [Ejemplo](#/4)
- [Simulación](#/5)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

{{% section %}}

## Naturaleza vectorial de las fuerzas

Las **fuerzas** son **magnitudes vectoriales**, lo que significa que quedan definidas por un **vector**, del cual hay que definir su:

---

### Módulo
Longitud del segmento.

---

### Dirección
Recta que lo contiene.

---

### Sentido
Dado por la punta de la flecha.

---

{{< figure library="true" src="fuerzas-4ESO/vector.svg" title="En dos dimensiones, un vector se puede escribir como $\newcommand{\ihat}{\hat{\imath}}\newcommand{\jhat}{\hat{\jmath}}\vec a = a_x \ihat + a_y \jhat$, donde $\ihat$ y $\jhat$ son vectores unitarios ($\text{módulo} = 1$) a lo largo de los ejes $x$ e $y$. El módulo de $\vec a$, $|\vec a|$, se calcula como (teorema de Pitágoras) $|\vec a| = \sqrt{a_x^2+a_y^2}$." lightbox="false" width="50%" >}}

---

### Suma o resta de vectores
Gráficamente, dibujando un vector a continuación del otro y uniendo el origen con el punto final:

{{< figure library="true" src="fuerzas-4ESO/suma-vectores.svg" lightbox="false" width="100%" >}}

---

O analíticamente, componente a componente:
$$
\vec a + \vec b = (a_x+b_x)\ihat + (a_y+b_y)\jhat
$$

---

Puedes prácticar a sumar vectores con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Leyes de Newton

### 1ª ley (ley de la inercia)
> Todo cuerpo preserva su estado de reposo o movimiento rectilíneo uniforme salvo que actúe una fuerza sobre él.

### 2ª ley (ley fundamental de la dinámica)
> El cambio de movimiento es proporcional a la fuerza ejercida y se hace en la dirección de la línea recta en que se ejerce la fuerza.

Matemáticamente, se escribe como
$$
\sum\vec F = m\vec a\quad \text{(la aceleración es proporcional a la fuerza neta)}
$$

En el SI la fuerza se mide en Newton (N): $1\thinspace\mathrm N = 1\thinspace \mathrm{kg\thinspace m\thinspace s^{-2}}$.

### 3ª ley (ley de la acción-reacción)
> Para toda acción siempre hay una reacción igual y opuesta.

Si un cuerpo A ejerce una fuerza sobre otro cuerpo B, éste ejercerá sobre A una fuerza igual y de sentido contrario ($\vec F_\text{AB} = -\vec F_\text{BA}$).

{{% /section %}}
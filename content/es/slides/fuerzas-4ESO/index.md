---
title: Fuerzas
url: "/recursos-fisica-quimica/apuntes/4eso/fuerzas/diapositivas"
summary: "Leyes de Newton y fuerzas de especial interés."

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style:

  reveal_options:
    hash: true
---

<section data-background-image="/media/logo-diapositivas.svg, qrcode.svg" data-background-size="10%" data-background-position="3.629% 5%, 96.371% 5%">

# Fuerzas

- [Naturaleza vectorial de las fuerzas](#/1)
- [Leyes de Newton](#/2)
- [Fuerzas de especial interés](#/3)
- [Ejemplo](#/4)
- [Simulación](#/5)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

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

{{< figure library="true" src="fuerzas-4ESO/vector.svg" title="En dos dimensiones, un vector se puede escribir como $\newcommand{\ihat}{\hat{\imath}}\newcommand{\jhat}{\hat{\jmath}}\vec a = a_x \ihat + a_y \jhat$, donde $\ihat$ y $\jhat$ son vectores unitarios (módulo = 1) a lo largo de los ejes $x$ e $y$. El módulo de $\vec a$, $|\vec a|$, se calcula como (teorema de Pitágoras) $|\vec a| = \sqrt{a_x^2+a_y^2}$." lightbox="false" width="50%" >}}

---

> **Aprende más** sobre la **notación vectorial** [aquí]({{< relref "/post/normas-ortografia-fisica-quimica/index.md#2-notación-vectorial" >}}).

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

- [1ª ley (ley de la inercia)](#/2/2)
- [2ª ley (ley fundamental de la dinámica)](#/2/4)
- [3ª ley (ley de la acción-reacción)](#/2/5)

(continúa hacia abajo)

👇

---

> Os recomendamos pasaros por la sección de [**Historia de la Ciencia**](https://fisiquimicamente.com/recursos-fisica-quimica/historia-ciencia/) para echar un vistazo a la **biografía** y **principales contribuciones científicas** de **Isaac Newton** en **formato póster** y **tríptico**.

---

### 1ª ley (ley de la inercia)
> Todo cuerpo preserva su estado de reposo o movimiento rectilíneo uniforme salvo que actúe una fuerza sobre él.

---

{{< youtube 1-FP1_oD-zI >}}

---

### 2ª ley (ley fundamental de la dinámica)
> El cambio de movimiento es proporcional a la fuerza ejercida y se hace en la dirección de la línea recta en que se ejerce la fuerza.

Matemáticamente, se escribe como

$$
\sum\vec F = m\vec a\quad \text{(la aceleración es proporcional a la fuerza neta)}
$$

En el SI la fuerza se mide en Newton (N): $1\thinspace\mathrm N = 1\thinspace \mathrm{kg\thinspace m\thinspace s^{-2}}$.

---

### 3ª ley (ley de la acción-reacción)
> Para toda acción siempre hay una reacción igual y opuesta.

Si un cuerpo A ejerce una fuerza sobre otro cuerpo B, éste ejercerá sobre A una fuerza igual y de sentido contrario ($\vec F_\text{AB} = -\vec F_\text{BA}$).

---

{{< youtube xO70CCH68t8 >}}

{{% /section %}}

---

{{% section %}}

## Fuerzas de especial interés

- [Peso $\vec P$](#/3/1)
- [Normal $\vec N$](#/3/2)
- [Rozamiento $\vec f_\mathrm r$](#/3/4)
- [Centrípeta $\vec f_\mathrm c$](#/3/9)

(continúa hacia abajo)

👇

---

### Peso $\vec P$
El **peso** es la fuerza con la que la Tierra atrae a un objeto. Se calcula como:

$$
\vec P = m\vec g,
$$
donde $m$ es la masa del objeto y $\vec g$ es la aceleración de la gravedad. Siempre se dirige hacia el centro de la Tierra (hacia abajo en la mayoría de los casos).

---

### Normal $\vec N$
También llamada fuerza de **reacción**, se define como la fuerza que ejerce una superficie sobre un cuerpo apoyado sobre ella.

Es de igual magnitud y dirección, pero de sentido contrario a la fuerza ejercida por el cuerpo sobre la superficie.

---

{{< figure library="true" src="fuerzas-4ESO/normal.svg" title="Fuerza normal en a) una superficie horizontal, b) un plano inclinado y c) una superficie vertical." lightbox="false" width="100%" >}}

---

### Rozamiento $\vec f_\mathrm r$
La **fuerza de rozamiento** es la fuerza que existe entre dos superficies en contacto, oponiéndose siempre al movimiento relativo entre ambas superficies.

---

La fuerza de rozamiento es proporcional a la normal $N$:

$$
f_\mathrm r = \mu N,
$$
donde $\mu$ es el coeficiente de rozamiento.

---

{{< figure library="true" src="fuerzas-4ESO/rozamiento.svg" title="Fuerza de rozamiento en a) una superficie horizontal, b) un plano inclinado y c) una superficie vertical." lightbox="false" width="100%" >}}

---

Puedes aprender más sobre la naturaleza del rozamiento con esta **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/friction/latest/friction_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

#### Práctica virtual

{{< youtube x2vUbOPB1W8 >}}

---

### Centrípeta $\vec f_\mathrm c$
Se llama **fuerza centrípeta** a la fuerza o a la componente de la fuerza que actúa sobre un objeto en movimiento sobre una trayectoria curvilínea y que está dirigida hacia el centro de curvatura de la trayectoria.

---

Su módulo se calcula a partir de la **aceleración centrípeta**, haciendo uso de la **2ª ley de Newton**:

$$
f_\mathrm c = m a_\mathrm c = m\cdot \frac{v^2}{R} = \frac{mv^2}{R}
$$

{{% /section %}}

---

{{% section %}}

## Ejemplo

<q>Un cuerpo baja por un plano inclinado $30^\circ$ con un coeficiente de rozamiento $\mu=0.2$. Calcula la velocidad que llevará y el espacio recorrido al cabo de $5\thinspace\mathrm s$, si inicialmente estaba en reposo.</q>

---

Lo primero hacemos un dibujo representando la situación:

{{< figure library="true" src="fuerzas-4ESO/plano-inclinado.svg" lightbox="false" width="70%" >}}

---

Las **fuerzas** que actúan son:

- Peso $\vec P = -P_x\ihat - P_y\jhat$, donde:
	$$
	\begin{align*}
	P_x &= mg\sin\alpha = 9.8m\sin30^\circ = 4.9m\thinspace\mathrm{N} \\
	P_y &= mg\cos\alpha = 9.8m\cos30^\circ = 4.9\sqrt{3}m\thinspace\mathrm{N}
	\end{align*}
	$$
- Normal $\vec N = N\jhat$
- Fuerza de rozamiento $\vec f_\mathrm r=\mu N\ihat = 0.2N\ihat\thinspace\mathrm{N}$

---

Escribimos la **2ª ley de Newton** para cada **componente**:
$$
\begin{align}
\text{Componente $x$}&\rightarrow f_\mathrm r - P_x = ma && \text{(1)} \\
\text{Componente $y$}&\rightarrow N-P_y = 0 && \text{(2)}
\end{align}
$$

---

Despejando $N=P_y=4.9\sqrt{3}m$ de (2) y sustituyendo en (1), utilizando además que $f_\mathrm r = 0.2 N$ y que $P_x = 4.9m$:

$$
\begin{gathered}
0.2\cdot 4.9\sqrt{3}m - 4.9m = ma \rightarrow a = -3.2\thinspace\mathrm{m/s^2}\\
\vec a = -3.2\ihat\thinspace\mathrm{m/s^2}
\end{gathered}
$$

---

La **velocidad** que llevará a los $5\thinspace\mathrm s$ la calculamos con la **ecuación de la velocidad**:
$$
\begin{gather*}
v = v_0 + at = 0 - 3.2\cdot 5 = -16.0\thinspace\mathrm{m/s}\\
\vec v = -16.0\ihat\thinspace\mathrm{m/s}
\end{gather*}
$$

---

Para el **espacio recorrido** podemos utilizar la **ecuación del movimiento**:

$$
\Delta x = \left\lvert x - x_0\right\rvert = \left\lvert v_0\cdot t + \frac{1}{2}at^2\right\rvert = \left\lvert 0 - \frac{1}{2}\cdot 3.2\cdot 5^2\right\rvert = 40.0\thinspace\mathrm m
$$

{{% /section %}}

---

{{% section %}}

## Simulación

<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_es.html" width="100%" height="550" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Pincha [**aquí**](?view=print#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>
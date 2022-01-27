---
title: Cinética química
summary: "Velocidad de reacción. Ecuaciones cinéticas. Orden de reacción. Mecanismos de reacción."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/cinetica-quimica/diapositivas"

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow

  reveal_options:
    hash: true
---

# Cinética química

- [Teorías de reacciones químicas](#/2)
- [Mecanismos de reacción](#/3)
- [Velocidad de reacción](#/4)
- [Ecuaciones cinéticas](#/5)
- [Factores que influyen en la velocidad de reacción](#/6)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

La **cinética química** es la **rama** de la **química física** que se ocupa de **comprender** las **velocidades** de las **reacciones químicas**.

---

{{% section %}}

## Teorías de reacciones químicas

- [Teoría de colisiones](#/2/1)
- [Teoría del estado de transición o del complejo activado](#/2/5)

(continúa hacia abajo)

👇🏼

---

### Teoría de colisiones
La **teoría de colisiones**, propuesta por Lewis en 1918, explica una reacción desde el punto de vista dinámico.

---

Nos dice que las reacciones se producen a partir de choques entre las moléculas de los reactivos.

---

Para que estos choques sean **eficaces**, las moléculas han de tener suficiente energía (**energía de activación**) y una orientación adecuada.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-colisiones.svg" title="Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

---

### Teoría del estado de transición o del complejo activado

La **teoría del estado de transición**, propuesta por Henry Eyring en 1935, explica una reacción química desde el punto de vista energético.

---

Cuando las moléculas de los reactivos chocan, dan lugar a un **estado de transición**, muy inestable, donde se forma un **complejo activado**, en el que unos enlaces se están formando y otros rompiendo.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-estado-transicion.svg" title="Cuanto menor sea la energía de activación, más rápida será la reacción química." lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Mecanismos de reacción

El **mecanismo** de una **reacción** es el conjunto de procesos o reacciones elementales por los que se produce el cambio químico global.

(continúa hacia abajo)

👇🏼

---

Las especies que no aparecen en la reacción global se denominan **intermedios de reacción**, ya que se producen en un proceso elemental pero se consumen en otro.

---

La velocidad de una reacción viene determinada por la reacción elemental más lenta, llamada **etapa limitante** o **controlante** de la **velocidad**.

{{% /section %}}

---

{{% section %}}

## Velocidad de reacción

Es la **velocidad** a la que **ocurre** una **reacción química**. En una **ecuación química** general:

$$
a\mathrm A + b\mathrm B \longrightarrow c\mathrm C + d\mathrm D,
$$

(continúa hacia abajo)

👇🏼

---

$a$, $b$, $c$ y $d$ representan los **coeficientes estequiométricos** mientras que A, B, C y D representan los **símbolos químicos** de los átomos o la **fórmula molecular** de los compuestos que reaccionan (lado izquierdo) y los que se producen (lado derecho).

---

Definimos la **velocidad instantánea de reacción**, $v$, como:

$$
v = - \frac{1}{a} \frac{\mathrm d [\mathrm A]}{\mathrm d t} = - \frac{1}{b} \frac{\mathrm d [\mathrm B]}{\mathrm d t} = \frac{1}{c} \frac{\mathrm d [\mathrm C]}{\mathrm d t} = \frac{1}{d} \frac{\mathrm d [\mathrm D]}{\mathrm d t},
$$

donde [ ] representa **concentración**, medida en mol/L.

---

En general, la velocidad de una reacción química varía con el tiempo y se determina experimentalmente, midiendo la concentración a intervalos de tiempo conocidos.

---

Notar que la velocidad referida a los reactivos (A y B) presenta un signo menos ($-$), ya que la concentración de éstos disminuye con el tiempo y por tanto su variación es negativa.

{{% /section %}}

---

{{% section %}}

## Ecuaciones cinéticas

**Relacionan** la **velocidad** de **reacción** con la **concentración** de los **reactivos**:

$$
v = k[\mathrm A]^n[\mathrm B]^m,
$$

(continúa hacia abajo)

👇🏼

---

donde $k$ es la constante de velocidad (${\uparrow}k\rightarrow {\uparrow} v$); [A] y [B] las concentraciones (molares) de los reactivos; y $n$ y $m$ son los órdenes de reacción parciales ($\text{orden total} = n+m$).

---

En el caso de **reacciones elementales** (una sola etapa), los órdenes parciales coinciden con los coeficientes estequiométricos, por lo que el orden total coincide con la **molecularidad**.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/orden-reaccion.svg" lightbox="false" width="100%" >}}

---

### Vida media o periodo de semireacción $t_{1/2}$

Definimos la **vida media** o **periodo de semireacción**, $t_{1/2}$, como el tiempo necesario para que la concentración de un determinado reactivo se reduzca a la mitad.

| Orden | 0 | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: | :---: |
| $t_{1/2}$ | $\displaystyle \frac{[\mathrm A]_0}{2k}$ | $\displaystyle \frac{\ln 2}{k}$ | $\displaystyle \frac{1}{k[A]_0}$ | $\displaystyle \frac{3}{2k[A]_0^2}$

{{% /section %}}

---

{{% section %}}

## Factores que influyen en la velocidad de reacción

- [Naturaleza de los reactivos](#/6/1)
- [Estado de agregación y grado de división de los reactivos](#/6/3)
- [Concentración de los reactivos](#/6/5)
- [Temperatura](#/6/6)
- [Catalizadores](#/6/8)

(continúa hacia abajo)

👇🏼

---

### Naturaleza de los reactivos

La **naturaleza** y la **fuerza** de los **enlaces** en las moléculas **reactivas** influyen en gran medida en la velocidad de su transformación en productos.

---

Las sustancias iónicas suelen reaccionar más rápidamente que las covalentes a temperatura ambiente.

---

### Estado de agregación y grado de división de los reactivos

Cuando los reactivos están en estados distintos, la reacción sólo puede ocurrir en su área de contacto.

---

Esto significa que **cuanto más finamente dividido** esté un **reactivo** sólido o líquido, **mayor** será su **área** de **superficie** por unidad de volumen y **mayor** será el **contacto** con el otro reactivo, por lo que la **reacción** será **más rápida**.

$$				
v_\text{gas} > 	v_\text{líquido} > v_\text{sólido}
$$

---

### Concentración de los reactivos

La velocidad de reacción depende de las concentraciones de los reactivos:

$$
v = k[\mathrm A]^n[\mathrm B]^m
$$

**Cuanto mayor** sea la **concentración**, más moléculas habrá y más probable será que colisionen y reaccionen entre sí, dando lugar a un **aumento** de la **velocidad** de **reacción**.

---

### Temperatura

A **mayor temperatura**, las moléculas tienen más energía térmica y son más susceptibles de chocar eficazmente, **aumentando** la **velocidad** de **reacción**.

---

La **ecuación de Arrhenius** relaciona la constante de velocidad $k$ con la temperatura $T$:

$$
k = A\mathrm e^{-\frac{E_\mathrm a}{RT}},
$$

donde $A$ es el factor de frecuencia, que refleja la frecuencia de las colisiones, $E_\mathrm a$ es la energía de activación y $R = 8.31\thinspace \mathrm J\thinspace\mathrm{mol}^{-1}\thinspace\mathrm K^{-1}$ es la constante universal de los gases ideales.

---

### Catalizadores

Un **catalizador** es una **sustancia** que **altera** la **velocidad** de una **reacción** química sin consumirse durante la misma.

---

Distinguimos entre **catalizadores**:

#### Positivos

**Aumentan** la **velocidad** de reacción disminuyendo la energía de activación.

#### Negativos (inhibidores)

**Disminuyen** la **velocidad** de reacción aumentando $E_\mathrm a$.

---

Distinguimos también  entre **catálisis homogénea** o **heterogénea** dependiendo de si la fase del catalizador es la misma o no que la de los reactivos.

---

#### Catálisis enzimática

Las **proteínas** que actúan como **catalizadores** en las **reacciones bioquímicas** se llaman **enzimas**.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/catalisis-enzimatica.svg" title="Modelo de llave y cerradura." lightbox="false" width="100%" >}}

{{% /section %}}
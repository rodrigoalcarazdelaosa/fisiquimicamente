---
title: Cinética química
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/cinetica-quimica"
subtitle: Velocidad y mecanismos de reacción
summary: "<code style='background:#CCDDAA'>🆕 NOVEDAD</code> <br> Velocidad de reacción. Ecuaciones cinéticas. Orden de reacción. Mecanismos de reacción."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","quimica"]
tags:
- 2º Bach
- reacciones-químicas
- cinética-química
categories:
- Química
weight: 4

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Jalyn Bryce**](https://pixabay.com/es/users/jalynbryce-5426636/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: file-download
  name: Póster
  url: cinetica-quimica-poster.pdf

slides: cinetica-quimica-2Bach-quimica
---

{{% toc %}}

La **cinética química** es la **rama** de la **química física** que se ocupa de **comprender** las **velocidades**[^1] de las **reacciones químicas**.

[^1]: Como bien apunta Ricardo M. A. Estrada Ramírez, [sería más conveniente hablar de **rapidez de reacción**](https://twitter.com/ricestrada/status/1355607804497842182?s=20).

## Teorías de reacciones químicas

### Teoría de colisiones
La **teoría de colisiones**, propuesta por Lewis en 1918, explica una reacción desde el punto de vista dinámico. Nos dice que las reacciones se producen a partir de choques entre las moléculas de los reactivos. Para que estos choques sean **eficaces**, las moléculas han de tener suficiente energía (**energía de activación**) y una orientación adecuada.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-colisiones.svg" title="Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

### Teoría del estado de transición o del complejo activado

La **teoría del estado de transición**, propuesta por Henry Eyring en 1935, explica una reacción química desde el punto de vista energético. Cuando las moléculas de los reactivos chocan, dan lugar a un **estado de transición**, muy inestable, donde se forma un **complejo activado**, en el que unos enlaces se están formando y otros rompiendo.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-estado-transicion.svg" title="Cuanto menor sea la energía de activación, más rápida será la reacción química. <br> Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

## Mecanismos de reacción

El **mecanismo** de una **reacción** es el conjunto de procesos o reacciones elementales por los que se produce el cambio químico global.

Las especies que no aparecen en la reacción global se denominan **intermedios de reacción**, ya que se producen en un proceso elemental pero se consumen en otro.

La velocidad de una reacción viene determinada por la reacción elemental más lenta, llamada **etapa limitante** o **controlante** de la **velocidad**.

## Velocidad de reacción

Es la **velocidad** a la que **ocurre** una **reacción química**. En una **ecuación química** general:
$$
a\mathrm A + b\mathrm B \longrightarrow c\mathrm C + d\mathrm D,
$$
$a$, $b$, $c$ y $d$ representan los **coeficientes estequiométricos** mientras que A, B, C y D representan los **símbolos químicos** de los átomos o la **fórmula molecular** de los compuestos que reaccionan (lado izquierdo) y los que se producen (lado derecho).

Definimos la **velocidad instantánea de reacción**[^2], $v$, como:

[^2]: La **velocidad media de reacción** se define como la variación de la concentración de una especie, $\Delta [A]$, en un intervalo de tiempo, $\Delta t$, dado:

    $$
    v_\mathrm m = - \frac{1}{a} \frac{\Delta [\mathrm A]}{\Delta t} = - \frac{1}{b} \frac{\Delta [\mathrm B]}{\Delta t} = \frac{1}{c} \frac{\Delta [\mathrm C]}{\Delta t} = \frac{1}{d} \frac{\Delta [\mathrm D]}{\Delta t}
    $$

$$
v = - \frac{1}{a} \frac{\mathrm d [\mathrm A]}{\mathrm d t} = - \frac{1}{b} \frac{\mathrm d [\mathrm B]}{\mathrm d t} = \frac{1}{c} \frac{\mathrm d [\mathrm C]}{\mathrm d t} = \frac{1}{d} \frac{\mathrm d [\mathrm D]}{\mathrm d t},
$$

donde [ ] representa **concentración**, medida en mol/L. En general, la velocidad de una reacción química varía con el tiempo y se determina experimentalmente, midiendo la concentración a intervalos de tiempo conocidos. Notar que la velocidad referida a los reactivos (A y B) presenta un signo menos ($-$), ya que la concentración de éstos disminuye con el tiempo y por tanto su variación es negativa.

## Ecuaciones cinéticas

**Relacionan** la **velocidad** de **reacción** con la **concentración** de los **reactivos**:

$$
v = k[\mathrm A]^n[\mathrm B]^m,
$$

donde $k$ es la constante de velocidad (${\uparrow}k\rightarrow {\uparrow} v$); [A] y [B] las concentraciones (molares) de los reactivos; y $n$ y $m$ son los órdenes de reacción parciales ($\text{orden total} = n+m$). En el caso de **reacciones elementales** (una sola etapa), los órdenes parciales coinciden con los coeficientes estequiométricos, por lo que el orden total coincide con la **molecularidad**[^3].

[^3]: La **molecularidad** es el número de moléculas que intervienen en una reacción elemental, y es igual a la suma de los coeficientes estequiométricos de los reactivos.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/orden-reaccion.svg" lightbox="false" width="100%" >}}

### Vida media o periodo de semireacción $t_{1/2}$

Definimos la **vida media** o **periodo de semireacción**, $t_{1/2}$, como el tiempo necesario para que la concentración de un determinado reactivo se reduzca a la mitad.

| Orden | 0 | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: | :---: |
| $t_{1/2}$ | $\displaystyle \frac{[\mathrm A]_0}{2k}$ | $\displaystyle \frac{\ln 2}{k}$ | $\displaystyle \frac{1}{k[A]_0}$ | $\displaystyle \frac{3}{2k[A]_0^2}$

## Factores que influyen en la velocidad de reacción

### Naturaleza de los reactivos

La **naturaleza** y la **fuerza** de los **enlaces** en las moléculas **reactivas** influyen en gran medida en la velocidad de su transformación en productos. Las sustancias iónicas suelen reaccionar más rápidamente que las convalentes a temperatura ambiente.

### Estado de agregación y grado de división de los reactivos

Cuando los reactivos están en estados distintos, la reacción sólo puede ocurrir en su área de contacto. Esto significa que **cuanto más finamente dividido** esté un **reactivo** sólido o líquido, **mayor** será su **área** de **superficie** por unidad de volumen y **mayor** será el **contacto** con el otro reactivo, por lo que la **reacción** será **más rápida**.

$$				
v_\text{gas} > 	v_\text{líquido} > v_\text{sólido}
$$

### Concentración de los reactivos

La velocidad de reacción depende de las concentraciones de los reactivos:

$$
v = k[\mathrm A]^n[\mathrm B]^m
$$

**Cuanto mayor** sea la **concentración**, más moléculas habrá y más probable será que colisionen y reaccionen entre sí, dando lugar a un **aumento** de la **velocidad** de **reacción**.

### Temperatura

A **mayor temperatura**, las moléculas tienen más energía térmica y son más susceptibles de chocar eficazmente, **aumentando** la **velocidad** de **reacción**. La **ecuación de Arrhenius** relaciona la constante de velocidad $k$ con la temperatura $T$:

$$
k = A\mathrm e^{-\frac{E_\mathrm a}{RT}},
$$

donde $A$ es el factor de frecuencia, que refleja la frecuencia de las colisiones, $E_\mathrm a$ es la energía de activación y $R = 8.31\thinspace \mathrm J\thinspace\mathrm{mol}^{-1}\thinspace\mathrm K^{-1}$ es la constante universal de los gases ideales.

### Catalizadores

Un **catalizador** es una **sustancia** que **altera** la **velocidad** de una **reacción** química sin consumirse durante la misma. Distinguimos entre **catalizadores**:

#### Positivos

**Aumentan** la **velocidad** de reacción disminuyendo la energía de activación.

#### Negativos (inhibidores)

**Disminuyen** la **velocidad** de reacción aumentando $E_\mathrm a$.

Distinguimos también  entre **catálisis homogénea** o **heterogénea** dependiendo de si la fase del catalizador es la misma o no que la de los reactivos.

#### Catálisis enzimática

Las **proteínas** que actúan como **catalizadores** en las **reacciones bioquímicas** se llaman **enzimas**.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/catalisis-enzimatica.svg" title="Modelo de llave y cerradura. <br> Adaptada de https://commons.wikimedia.org/wiki/File:Induced_fit_diagram_es.svg" lightbox="false" width="100%" >}}
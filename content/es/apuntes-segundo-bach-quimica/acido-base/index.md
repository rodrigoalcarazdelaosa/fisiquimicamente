---
title: Ácido-base
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/acido-base"
subtitle: Equilibrios ácido-base
summary: "Teorías ácido-base. Fuerza relativa de los ácidos y bases. Equilibrio iónico del agua. Concepto de pH. Volumetrías de neutralización ácido-base. Indicadores ácido-base. Hidrólisis de sales. Disoluciones reguladoras. Ácidos y bases relevantes."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- alba-lopez-valenzuela
- leticia-cabezas
tags:
- apuntes
- 2º Bach
- reacciones-químicas
- ácido-base
categories:
- Química
weight: 7

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: "Imagen de [**InspiredImages**](https://pixabay.com/es/users/InspiredImages-57296/) en [Pixabay](https://pixabay.com/es/)"
  focal_point: Smart

links:
- icon_pack: fas
  icon: 
  name: 📜 Póster
  url: acido-base-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Ejercicios
  url: acido-base-ejercicios.pdf
- icon_pack: fas
  icon:
  name: 🔢 Tablas
  url: acido-base-tablas.pdf
- icon_pack: fas
  icon:
  name: 🧪 Prácticas de laboratorio
  url: https://fisiquimicamente.com/recursos-fisica-quimica/practicas-laboratorio/2bach/quimica/acido-base/
- icon_pack: fas
  icon:
  name: 🔗 Más ejercicios
  url: https://drive.google.com/file/d/1zF1ZXnjcnoOfxCIskCZkVuQLirX01s0L/view
- icon_pack: fas
  icon:
  name: 📝 Frikiexámenes
  url: acido-base-frikiexamenes.pdf
- icon_pack: fas
  icon:
  name: 🎓 Ejercicios EBAU
  url: https://fisiquimicamente.com/recursos-fisica-quimica/ebau/quimica/por-temas/acido-base/  

slides: acido-base-2Bach-quimica

math: true
---

{{% toc %}}

## Teorías ácido-base

### Teoría de Arrhenius

Propuesta por el sueco **Svante Arrhenius** en 1884, constituye la primera definición moderna de ácidos y bases en términos moleculares.

#### Ácido

Sustancia que se disocia en agua formando cationes hidrógeno (H<sup>+</sup>).

#### Base

Sustancia que se disocia en agua formando aniones hidróxido (OH<sup>&ndash;</sup>).

### Teoría de Brønsted-Lowry

Propuesta en 1923 independientemente por el danés **Johannes Nicolaus Brønsted** y el inglés **Martin Lowry**, se basa en la idea de **pares de ácido-base conjugados**. Cuando un ácido, HA, reacciona con una base, B, el ácido forma su base conjugada, A<sup>&ndash;</sup>, y la base forma su ácido conjugado, HB<sup>+</sup>, mediante el intercambio de un protón (catión H<sup>+</sup>):

$$
\mathrm{HA} + \mathrm B &#8652; \mathrm A^- + \mathrm{HB}^+
$$

#### Ácido

Sustancia capaz de ceder protones (H<sup>+</sup>) a una base:

$$
\mathrm{HA} + \mathrm{H_2O} &#8652; \mathrm A^- + \mathrm{H_3O^+}
$$

#### Base

Sustancia capaz de aceptar protones (H<sup>+</sup>) de un ácido:

$$
\mathrm{B} + \mathrm{H_2O} &#8652; \mathrm{HB}^+ + \mathrm{OH^-}
$$

Esta teoría se considera una **generalización** de la teoría de **Arrhenius**.

## Fuerza relativa de los ácidos y bases

En función de cuan ionizado/a o disociado/a se encuentre un ácido o una base, distinguimos entre **ácidos/bases fuertes y débiles**, términos que describen la **facilidad** para **conducir** la **electricidad** (gracias a la mayor o menor presencia de iones en la disolución).

### Grado de ionización

También llamado **grado de disociación**, $\alpha$, se define como el cociente entre la cantidad de ácido/base ionizado/a y la cantidad de ácido/base inicial:

$$
\alpha = \frac{\text{cantidad de ácido/base ionizado/a}}{\text{cantidad de ácido/base inicial}}
$$

Suele expresarse en tanto por ciento (\%).

#### Ácidos y bases fuertes

Totalmente ionizados/as ($\alpha \approx 1$). Conducen bien la electricidad.

- Ácidos: HClO<sub>4</sub>, HI(ac), HBr(ac), HCl(ac), H<sub>2</sub>SO<sub>4</sub> (1ª ionización) y HNO<sub>3</sub>.
- Bases: Hidróxidos de metales alcalinos y alcalinotérreos.

#### Ácidos y bases débiles

Parcialmente ionizados/as: $\alpha < 1$. Conducen mal la electricidad.

- Ácidos: HF(ac), H<sub>2</sub>S(ac), H<sub>2</sub>CO<sub>3</sub>, H<sub>2</sub>SO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, HNO<sub>2</sub> y ácidos orgánicos, como el CH<sub>3</sub>COOH.
- Bases: NH<sub>3</sub> (o NH<sub>4</sub>OH) y bases orgánicas nitrogenadas, como aminas.

### Constante de disociación

Es una medida de la **fuerza** de un **ácido/base** en disolución:

| | ÁCIDO | BASE |
| :--- | :---: | :---: |
| **EQUILIBRIO** | $\mathrm{HA} + \mathrm{H_2O} &#8652; \mathrm A^- + \mathrm{H_3O^+}$ | $\mathrm{B} + \mathrm{H_2O} &#8652; \mathrm{HB}^+ + \mathrm{OH^-}$ |
| **CONSTANTE** | $\displaystyle K_\mathrm a = \frac{[\mathrm A^-][\mathrm{H_3O}^+]}{[\mathrm{HA}]}$ | $\displaystyle K_\mathrm b = \frac{[\mathrm{HB}^+][\mathrm{OH}^-]}{[\mathrm B]}$ |
| **COLOGARITMO** | $\displaystyle \mathrm p K_\mathrm a = -\log K_\mathrm a$ | $\displaystyle \mathrm p K_\mathrm b = -\log K_\mathrm b$ |

## Equilibrio iónico del agua

El **agua** es una sustancia **anfiprótica** (puede tanto donar como aceptar un protón H<sup>+</sup>), lo que le permite actuar tanto como ácido o como base (**anfoterismo**). El **equilibrio iónico del agua** hace referencia a la reacción química en la que dos moléculas de agua reaccionan para producir un ion **oxonio** (H<sub>3</sub>O<sup>+</sup>) y un ion **hidróxido** (OH<sup>&ndash;</sup>):

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Autoionizacion-agua.gif" title="$\mathrm{H_2O} + \mathrm{H_2O} &#8652; \mathrm{H_3O^+} + \mathrm{OH^-}$. <br> Fuente: https://commons.wikimedia.org/wiki/File:Autoionizacion-agua.gif" lightbox="true" >}}

La constante de equilibrio, denominada **producto iónico del agua**, y denotada por $K_\mathrm w$, puede aproximarse por el producto:

$$
K_\mathrm w	= [\mathrm{H_3O^+}][\mathrm{OH^-}]
$$

A 25&thinsp;&deg;C:

$$[\mathrm{H_3O^+}] = [\mathrm{OH}^-] = 10^{-7}\thinspace\mathrm M \Rightarrow K_\mathrm w = 10^{-14}	
$$

### Relación entre $K_\mathrm a$ y $K_\mathrm b$

Dado un ácido, HA, y su base conjugada, A<sup>&ndash;</sup>, podemos multiplicar $K_\mathrm a$ y $K_\mathrm b$:

$$
K_\mathrm a \cdot K_\mathrm b = \frac{[\mathrm A^-][\mathrm{H_3O}^+]}{[\mathrm{HA}]}\cdot\frac{[\mathrm{HA}][\mathrm{OH}^-]}{[\mathrm{A^-}]}	= [\mathrm{H_3O}^+][\mathrm{OH}^-] = K_\mathrm w,
$$

por lo que (suponiendo $T = 25\thinspace^\circ\mathrm C$):

\begin{align*}
K_\mathrm a\cdot K_\mathrm b &= K_\mathrm w = 10^{-14} \\\\
\mathrm p K_\mathrm a + \mathrm p K_\mathrm b &= \mathrm p K_\mathrm w = 14
\end{align*}

## Concepto de pH

Se define el pH como el cologaritmo de la concentración de iones oxonio, H<sub>3</sub>O<sup>+</sup>:

$$
\mathrm{pH} = -\log[\mathrm{H_3O^+}]
$$

Análogamente se define el pOH en función de la concentración de iones hidróxido, OH<sup>&ndash;</sup>:

$$
\mathrm{pOH} = -\log[\mathrm{OH^-}]
$$

A partir de la expresión del **producto iónico del agua**, $K_\mathrm w$, tomando <strong>logaritmos</strong>:

\begin{align*}
[\mathrm{H_3O^+}][\mathrm{OH^-}] &= K_\mathrm w \\\\
\log [\mathrm{H_3O^+}] + \log [\mathrm{OH^-}] &= \log K_\mathrm w \\\\
-\mathrm{pH} - \mathrm{pOH} &= -14 \\\\
\mathrm{pH} + \mathrm{pOH} &= 14
\end{align*}

### Escala de pH

{{< figure src="acido-base-2Bach-quimica/escala-pH.svg" title="Traducida y adaptada de https://www.coursehero.com/sg/cell-biology/ph-and-the-ph-scale/." lightbox="false" width="100%" >}}

También puedes *jugar* con esta **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Volumetrías de neutralización ácido-base

Una **valoración/titulación ácido-base** es un método de análisis químico cuantitativo para determinar la concentración de un ácido o base identificado (***analito***), neutralizándolo exactamente con una disolución estándar de base o ácido de concentración conocida (**valorante**).

{{< figure src="acido-base-2Bach-quimica/volumetria-acido-base.svg" title="Traducida y adaptada de https://www.coursehero.com/sg/general-chemistry/quantitative-analysis-of-acids-and-bases/." lightbox="false" width="100%" >}}

{{< figure src="acido-base-2Bach-quimica/ph-Vb.svg" title="Curva de valoración/titulación de 25 mL de ácido acético 0.1 M con hidróxido de sodio 0.1 M." lightbox="false" width="100%" >}}

### Reacciones de neutralización

En una reacción de **neutralización**, un ácido y una base reaccionan de manera **irreversible** para producir una sal y agua:

<div align="center" style="margin-bottom: 1rem">
ÁCIDO + BASE &#10230; SAL + AGUA
</div>

Según sea el valorante un ácido o base fuerte, el pH en el punto de equivalencia será:

| ANALITO/VALORANTE | Fuerte/Fuerte | Ácido débil/Base fuerte | Base débil/Ácido fuerte |
| ---: | :---: | :---: | :---: |
| pH (EQUIVALENCIA) | 7 | $>$ 7 | $<$ 7 |
| INDICADOR (vira en medio) | Neutro | Básico | Ácido |

{{% callout note %}}
Aprende más sobre la **importancia** de las **reacciones ácido-base** para el **esmalte dental** en [esta excelente entrada del **blog**]({{< ref "/post/sonrisa-fluoruro/index.md" >}}).
{{% /callout %}}

## Indicadores ácido-base

{{% callout note %}}
Aprende a utilizar la [**cúrcuma**](https://es.wikipedia.org/wiki/Curcuma_longa) como indicador de pH y crea [**tinta invisible**](https://es.wikipedia.org/wiki/Tinta_invisible) con [esta genial **práctica** de la mano de **Miguel Quiroga**]({{< relref "/practicas-cuarto-eso/tinta-invisible-curcuma" >}}).
{{% /callout %}}

Un **indicador** de pH es un compuesto químico *halocrómico* (cambia de color ---*vira*--- ante cambios de pH) que se añade en pequeñas cantidades a una disolución para poder determinar visualmente su pH (acidez o basicidad). El cambio de color se denomina **viraje**.

### Tornasol

Mezcla soluble en agua de diferentes colorantes extraídos de **líquenes**. Absorbido en papel de filtro constituye uno de los indicadores de pH más antiguos utilizados ($\sim$ 1300).

{{< figure src="acido-base-2Bach-quimica/pH-tornasol.svg" lightbox="false" width="100%" >}}

### Naranja de metilo

Colorante *azoderivado* que vira de rojo a naranja-amarillo en **medio ácido**:

{{< figure src="acido-base-2Bach-quimica/pH-metilo.svg" lightbox="false" width="100%" >}}

### Fenolftaleína

Indicador de pH incoloro en medio ácido que vira a rosa en **medio básico**:

{{< figure src="acido-base-2Bach-quimica/pH-fenolftaleina.svg" lightbox="false" width="100%" >}}

### Indicador universal

**Mezcla de indicadores** (azul de timol, rojo de metilo, azul de bromotimol y fenolftaleína) que presenta cambios suaves de color en una amplia gama de valores de pH.

{{< figure src="acido-base-2Bach-quimica/pH-universal.svg" lightbox="false" width="100%" >}}

## Hidrólisis de sales

Daviid, desde Twitter, nos invita a un interesante debate sobre la necesidad de introducir siquiera el concepto de hidrólisis en la disociación de sales:

<div align="center">
{{< tweet user="DaviidMPB" id="1378985803846717445" >}}
</div>

{{< figure src="acido-base-2Bach-quimica/sal-ionizada.svg" title="Traducida y adaptada de https://www.coursehero.com/sg/general-chemistry/solutions-are-in-equilibrium/." lightbox="false" width="100%" >}}

En lo que sigue, suponemos siempre **cantidades estequiométricas**[^1].

[^1]: En caso de que haya exceso de alguna de las sustancias, el pH resultante queda determinado por lo que queda sin reaccionar.

### Sales ácido fuerte y base fuerte

Cuando los iones en los que se disocia una sal provienen de ácidos/bases fuertes, no reaccionan con agua (hidrolizan), pues tienden a estar completamente ionizados:

{{< figure src="acido-base-2Bach-quimica/sal-acido-fuerte-base-fuerte.svg" lightbox="false" width="100%" >}}

La **disolución** resultante es **neutra** (pH = 7).

### Sales ácido débil y base fuerte

En este caso el ion proveniente del ácido débil sí se hidroliza:

{{< figure src="acido-base-2Bach-quimica/sal-acido-debil-base-fuerte.svg" lightbox="false" width="100%" >}}

La **disolución** resultante es **básica** (pH $>$ 7).

### Sales ácido fuerte y base débil

En este caso el ion proveniente de la base débil sí se hidroliza:

{{< figure src="acido-base-2Bach-quimica/sal-acido-fuerte-base-debil.svg" lightbox="false" width="100%" >}}

La **disolución** resultante es **ácida** (pH $<$ 7).

### Sales ácido débil y base débil

En este caso ambos iones se hidrolizan:

{{< figure src="acido-base-2Bach-quimica/sal-acido-debil-base-debil.svg" lightbox="false" width="100%" >}}

- $K_\mathrm a > K_\mathrm b \Rightarrow$ La <strong>disolución</strong> resultante es <strong>ácida</strong> (pH $<$ 7).
- $K_\mathrm a = K_\mathrm b \Rightarrow$ La <strong>disolución</strong> resultante es <strong>neutra</strong> (pH = 7).
- $K_\mathrm b > K_\mathrm a \Rightarrow$ La <strong>disolución</strong> resultante es <strong>básica</strong> (pH $>$ 7).

## Disoluciones reguladoras

También llamadas **disoluciones amortiguadoras** o **tampón**, son disoluciones acuosas que consisten en una mezcla de un ácido o base débil y su conjugado correspondiente. Mantienen el pH de una disolución prácticamente invariable frente a pequeñas adiciones de ácido o base a la misma gracias a la neutralización del exceso de iones H<sub>3</sub>O<sup>+</sup> o OH<sup>&ndash;</sup>.

### Tampón ácido débil + sal de su base conjugada
$$
\mathrm{HA} + \mathrm{H_2O} &#8652; \mathrm A^- + \mathrm{H_3O}^+
$$
Suponiendo que las concentraciones en el equilibrio son aproximadamente iguales a las concentraciones iniciales, a partir de la expresión de la constante de acidez $K_\mathrm a$:
$$
K_\mathrm a = \frac{[\mathrm A^-][\mathrm{H_3O}^+]}{\mathrm{[HA]}},
$$
podemos despejar la concentración de iones oxonio, H<sub>3</sub>O<sup>+</sup>:
$$
\mathrm{[H_3O^+]} = K_\mathrm a\cdot \frac{\mathrm{[HA]}}{\mathrm{[A^-]}}
$$
Tomando logaritmos y cambiando de signo:
\begin{align*}
-\log\mathrm{[H_3O^+]} &= -\log K_\mathrm a - \log\frac{\mathrm{[HA]}}{\mathrm{[A^-]}}	\\\\
\mathrm{pH} &= \mathrm p K_\mathrm a - \log\frac{\mathrm{[HA]}}{\mathrm{[A^-]}} \\\\
\mathrm{pH} &= \mathrm p K_\mathrm a + \log\frac{[\text{base conjugada}]}{[\text{ácido}]}
\end{align*}

expresión que se conoce como **ecuación de Henderson-Hasselbalch**.

### Tampón base débil + sal de su ácido conjugado

$$
\mathrm B + \mathrm{H_2O} &#8652; \mathrm{HB}^+ + \mathrm{OH}^-
$$
Asumiendo de nuevo que las concentraciones en el equilibrio son aproximadamente iguales a las concentraciones iniciales, a partir de la expresión de la constante de basicidad $K_\mathrm b$:
$$
K_\mathrm b = \frac{\mathrm{[HB^+][OH^-]}}{\mathrm{[B]}},
$$
podemos despejar la concentración de iones hidróxido, OH<sup>&ndash;</sup>:
$$
\mathrm{[OH^-]} = K_\mathrm b\cdot \frac{\mathrm{[B]}}{\mathrm{[HB^+]}}	
$$

Tomando logaritmos y cambiando de signo llegamos a otra forma de la **ecuación de Henderson-Hasselbalch**:

$$
\mathrm{pOH} = \mathrm p K_\mathrm b + \log\frac{[\text{ácido conjugado}]}{[\text{base}]}
$$

### Importancia biológica del pH

#### Tampón H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>&ndash;</sup>

Regula el pH de la **sangre** $\rightarrow$ $\mathrm{pH} = 7.40 \pm 0.05$:

{{< figure src="acido-base-2Bach-quimica/ph-sangre.svg" lightbox="false" width="100%" >}}

#### Tampón H<sub>2</sub>PO<sub>4</sub><sup>&ndash;</sup> / HPO<sub>4</sub><sup>2&ndash;</sup>

Regula el pH en el **interior** de las **células** $\rightarrow$ $\mathrm{pH} \approx 6.86$:
$$
\mathrm{H_2PO_4^-} &#8652; \mathrm{HPO_4^{2-}} + \mathrm{H}^+
$$

## Ácidos y bases relevantes

### A nivel industrial

#### Ácido sulfúrico (H<sub>2</sub>SO<sub>4</sub>)

El compuesto químico más producido del mundo, obtenido a base de hidratar SO<sub>3</sub> concentrado previamente del SO<sub>2</sub>. Su principal uso es para crear ácido fosfórico que a su vez se emplea en **fertilizantes**.

\begin{align*}
\mathrm{H_2SO_4} + \mathrm{H_2O} &\longrightarrow \mathrm{HSO_4^-} + \mathrm{H_3O^+}\quad\text{(ácido FUERTE)} \\\\
\mathrm{HSO_4^-} + \mathrm{H_2O} & &#8652; \mathrm{SO_4^{2-}} + \mathrm{H_3O^+}\quad\text{(ácido DÉBIL)}
\end{align*}

#### Ácido nítrico (HNO<sub>3</sub>)

Empleado en la producción de abonos, explosivos y colorantes:
$$
\mathrm{HNO_3} + \mathrm{H_2O} \longrightarrow \mathrm{NO_3^-} + \mathrm{H_3O^+}\quad\text{(ácido FUERTE)}	
$$

### A nivel de consumo

#### Ácido acético (CH<sub>3</sub>COOH)

Presente en el vinagre, aunque principalmente usado en la fabricación de **fibras textiles**.

$$					
\mathrm{CH_3COOH} + \mathrm{H_2O} &#8652; \mathrm{CH_3COO^-} + \mathrm{H_3O^+}\quad\text{(ácido DÉBIL)}	
$$

#### Amoniaco (NH<sub>3</sub>)

Empleado principalmente en la producción de **fertilizantes**.

$$
\mathrm{NH_3} + \mathrm{H_2O} &#8652; \mathrm{NH_4^+} + \mathrm{OH^-}\quad\text{(base DÉBIL)}	
$$

#### Hidróxido de sodio (NaOH)

Empleado sobre todo en la fabricación de papel, tejidos y agentes de limpieza.

$$
\mathrm{NaOH} \longrightarrow \mathrm{Na^+} + \mathrm{OH^-}\quad\text{(base FUERTE)}	
$$

### Problemas medioambientales

#### Lluvia ácida

Causada por la emisión de **óxidos de azufre y nitrógeno** que, en contacto con el agua, forman **ácido sulfúrico** y **ácido nítrico**, entre otros:

<table>
<thead>
<tr>
<th style="text-align:center">Óxidos de azufre (SO<sub>x</sub>)</th>
<th style="text-align:center">Óxidos de nitrógeno (NO<sub>x</sub>)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">SO<sub>2</sub> + H<sub>2</sub>O ⟶ H<sub>2</sub>SO<sub>3</sub></td>
<td style="text-align:center; vertical-align : middle" rowspan="2">3 NO<sub>2</sub> + H<sub>2</sub>O ⟶ 2 HNO<sub>3</sub> + NO</td>
</tr>
<tr>
<td style="text-align:center">SO<sub>3</sub> + H<sub>2</sub>O ⟶ H<sub>2</sub>SO<sub>4</sub></td>
</tr>
</tbody>
</table>

Se considera lluvia ácida si $\mathrm{pH} < 5.5$. Sus principales **efectos** son:

- Acidificación de aguas (ríos/lagos) y suelos.
- Deterioro del patrimonio histórico (ataca rocas calizas, a base de CaCO<sub>3</sub>).

Algunas **soluciones** serían:

- Sustituir combustibles fósiles por energías renovables.
- Uso de catalizadores en vehículos.
- Adición de un compuesto alcalino en ríos y/o lagos para neutralizar su acidez.
- Tratamiento de monumentos con recubrimientos adecuados, como el Ba(OH)<sub>2</sub>, que reaccionan con el ácido sulfúrico formando BaSO<sub>4</sub>, evitando la erosión.

#### Esmog

Proveniente de la contracción de ***smoke*** y ***fog***, se refiere a una contaminación atmosférica debida sobre todo a **óxidos de nitrógeno** (NO<sub>x</sub>), **azufre** (SO<sub>x</sub>), **ozono** (O<sub>3</sub>), humo y otras partículas. Se considera un problema derivado de la industrialización moderna, aunque es más común en ciudades con climas cálidos, secos y mucho tráfico.

**Efectos**:

- La presencia de ozono y óxidos de nitrógeno y azufre causa problemas respiratorios, especialmente en ancianos y niños/as.

Algunas de las **soluciones** propuestas son:

- Reducir las emisiones de óxidos de nitrógeno y de compuestos orgánicos volátiles.
- Reducir la contaminación.

## Simulación

Puedes explorar con más detalle las **disoluciones ácido-base** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

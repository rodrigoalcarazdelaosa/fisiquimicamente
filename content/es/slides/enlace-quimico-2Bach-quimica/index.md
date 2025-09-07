---
title: Enlace químico
summary: "Enlace iónico, covalente y metálico. Geometría molecular. Fuerzas intermoleculares."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/enlace-quimico/diapositivas"

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

# Enlace químico

- [Regla del octeto](#/1)
- [Parámetros moleculares](#/2)
- [Enlace iónico](#/3)
- [Enlace metálico](#/4)
- [Enlace covalente](#/5)
- [Geometría molecular](#/6)
- [Fuerzas intermoleculares](#/7)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

{{% section %}}

## Regla del octeto

> La **configuración más estable** para cualquier átomo es contar con **ocho electrones** en la **capa exterior**.

(continúa hacia abajo)

👇

---

### Excepciones

Existen **tres excepciones generales** a la regla del octeto:

1. Moléculas con un número impar de electrones, como el nitrógeno en NO o NO<sub>2</sub> (7&thinsp;e<sup>&ndash;</sup>).
2. Moléculas en las que uno o más átomos poseen más de ocho electrones, como el fósforo en PCl<sub>5</sub> (10&thinsp;e<sup>&ndash;</sup>) o el azufre en SF<sub>6</sub> (12&thinsp;e<sup>&ndash;</sup>).
3. Moléculas en las que uno o más átomos poseen menos de ocho electrones, como el berilio en BeH<sub>2</sub> (4&thinsp;e<sup>&ndash;</sup>) o el boro en BH<sub>3</sub>, BF<sub>3</sub> o BCl<sub>3</sub> (6&thinsp;e<sup>&ndash;</sup>).

---

Los elementos tenderán a **unirse** para completar su capa exterior, **intercambiando** (cediendo/captando $\rightarrow$ enlace **iónico**) o **compartiendo electrones** (enlace **covalente**), y así **ganar estabilidad**.

{{% /section %}}

---

{{% section %}}

## Parámetros moleculares

- [Energía de enlace](#/2/1)
- [Longitud de enlace](#/2/2)
- [Ángulo de enlace](#/2/3)
- [Polaridad de enlace](#/2/4)

---

### Energía de enlace
Es una medida de la **fortaleza** de un **enlace químico**.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/parametros-moleculares.svg" lightbox="false" width="85%" >}}

---

### Longitud de enlace
Distancia media entre los núcleos de dos átomos enlazados.

---

### Ángulo de enlace
Ángulo formado por tres átomos enlazados consecutivamente.

---

### Polaridad de enlace
Es la separación de cargas eléctricas a lo largo de un enlace, dando lugar a un **momento dipolar eléctrico**. La diferencia de electronegatividad, $\Delta \chi$, entre los átomos de un enlace determina su polaridad:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/polaridad.svg" lightbox="false" width="100%" >}}

---

Una molécula será polar si el momento dipolar total (suma vectorial) es distinto de cero.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/BF3.png" title="La molécula de BF<sub>3</sub> tiene tres enlaces polares pero debido a su geometría trigonal plana el momento dipolar resultante es nulo." lightbox="false" width="50%" >}}

---

Estudia la **polaridad** de **moléculas** con esta **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Enlace iónico
Es un enlace que involucra la **atracción electrostática** entre **iones** de **signo opuesto**.

(continúa hacia abajo)

👇

---

El **enlace iónico** suele darse **entre metales** (tienden a ceder electrones, convirtiéndose en cationes) **y no metales** (tienden a captar electrones, convirtiéndose en aniones).

---

Los compuestos iónicos forman **redes cristalinas** compactas y **neutras** con diferentes geometrías según el tipo de iones que las forman.

---

{{< figure library="true" src="enlace-quimico-4ESO/enlace-ionico.svg" title="Representación de la **unión iónica** entre el **litio** (Li) y el **flúor** (F) para formar el **fluoruro de litio** (LiF). El litio cede fácilmente su único electrón de valencia a un átomo de flúor, que acepta el electrón donado." lightbox="false" width="90%" >}}

---

{{< figure library="true" src="enlace-quimico-4ESO/Lewis-LiF.svg" lightbox="false" width="100%" >}}

---

### Energía de red $U_\mathrm R$

Es la **energía liberada** al **formar** la **red** a partir de sus iones en estado gaseoso.

---

#### Ciclo de Born-Haber
{{< figure library="true" src="enlace-quimico-2Bach-quimica/Born-Haber.svg" lightbox="false" width="85%" >}}

---

#### Ecuación de Born-Landé
Permite calcular la **energía de red** $U_\mathrm R$:

$$
U_\mathrm R = -\frac{N_\mathrm A M z^+ z^- e^2}{4\pi\epsilon_0 r_0}\left(1-\frac{1}{n}\right),
$$

donde $N_\mathrm A = 6.022\times 10^{23}\thinspace\mathrm{mol^{-1}}$ es la constante de Avogadro; $M$ es la constante de Madelung, relacionada con la geometría del cristal; $z^+$ y $z^-$ son los números de carga del catión y del anión, respectivamente;

---

$e = 1.6\times 10^{-19}\thinspace\mathrm{C}$ es la carga elemental, $\epsilon_0 = 8.85\times 10^{-12}\thinspace\mathrm{C^2N^{-1}m^{-2}}$ es la permitividad eléctrica del vacío; $r_0$ es la distancia al ion más cercano; y $5 < n < 12$ es el exponente de Born.

---

Se comprueba que el módulo de la **energía** de **red** es:

- **Directamente proporcional** al **producto** de las **cargas** de los iones.
- **Inversamente proporcional** a la **distancia** interiónica.

---

### Propiedades de las sustancias iónicas
- Debido a las **intensas fuerzas electrostáticas** entre los iones, suelen tener **temperaturas** de **fusión** y **ebullición** muy **elevadas**, por lo que la mayoría son **sólidos cristalinos** a **temperatura ambiente**.

---

{{< figure library="true" src="elementos-compuestos-2ESO-3ESO/cristal.svg" title="**Cristal** de **cloruro de sodio** (sal común, NaCl). <br> 🔵 $\rightarrow$ sodio (Na); 🟢 $\rightarrow$ cloro (Cl)." lightbox="false" width="60%" >}}

---

- Ante **golpes**, el **alineamiento** de los **iones** positivos y negativos **puede perderse**, por lo que son muy **frágiles**, aunque también muy **duros**.
- **Fundidos** o en **disolución**, **conducen** la **corriente eléctrica**.

{{% /section %}}

---

{{% section %}}

## Enlace metálico
El **enlace metálico** es el enlace químico que **mantiene unidos** a los **átomos** de un **metal** entre sí.

(continúa hacia abajo)

👇

---

Surge de la **atracción electrostática** entre los **electrones** de conducción y los **cationes** metálicos.

---

### Modelo del gas electrónico

{{< figure library="true" src="enlace-quimico-4ESO/enlace-metalico.svg" title="Con los **cationes** en **posiciones fijas** y los **electrones moviéndose libremente** en una ***nube***." lightbox="false" width="55%" >}}

---

### Teoría de bandas

{{< figure library="true" src="enlace-quimico-2Bach-quimica/teoria-bandas.svg" lightbox="false" width="100%" >}}

---

> Puedes aprender más sobre la **teoría** de **bandas** y cómo ésta explica la **conductividad eléctrica** en [este excelente artículo](https://culturacientifica.com/2020/04/21/la-teoria-de-bandas-explica-la-conduccion-electrica/).

---

También te recomendamos echar un vistazo a este magnífico **vídeo** de [Quantum Made Simple](https://toutestquantique.fr/en/) (en inglés):

{{< youtube LNsSS6Id6bM >}}

---

### Propiedades de las sustancias metálicas
- **Apariencia brillante**.
- Son **buenos conductores** del **calor** y de la **electricidad**.
- Forman **aleaciones** con otros metales.
- **Tienden** a **ceder** (perder) **electrones** al reaccionar con otras sustancias.
- La mayoría son **sólidos** a temperatura ambiente (**Hg** es 💧).

{{% /section %}}

---

{{% section %}}

## Enlace covalente
Es un enlace químico que implica la **compartición** de **pares** de **electrones** entre átomos.

(continúa hacia abajo)

👇

---

El **enlace covalente** suele darse **entre no metales** (tendencia a captar electrones).

---

{{< figure library="true" src="enlace-quimico-4ESO/enlace-covalente.svg" title="Representación de la **unión covalente** entre dos átomos de **flúor** (F) para formar F<sub>2</sub>, con un par de electrones compartidos." lightbox="false" width="100%" >}}

---

### Estructuras de Lewis

Se trata de **diagramas** que **muestran** la **unión** entre los **átomos** de una **molécula** y los **pares solitarios** de **electrones** que pueden existir en la molécula.

---

Las estructuras de Lewis muestran cada átomo y su posición en la estructura de la molécula usando su símbolo químico.

---

Se dibujan líneas entre los átomos que están unidos entre sí (se pueden utilizar pares de puntos en lugar de líneas).

---

El exceso de electrones que forman pares solitarios se representan como pares de puntos, y se colocan junto a los átomos.

---

#### Ejemplos

---

##### Agua (H<sub>2</sub>O)
{{< figure library="true" src="enlace-quimico-4ESO/Lewis-H2O.svg" lightbox="false" width="100%" >}}

---

##### Oxígeno (O<sub>2</sub>)
{{< figure library="true" src="enlace-quimico-4ESO/Lewis-O2.svg" lightbox="false" width="100%" >}}

---

##### Dióxido de carbono (CO<sub>2</sub>)
{{< figure library="true" src="enlace-quimico-4ESO/Lewis-CO2.svg" lightbox="false" width="100%" >}}

---

### Enlace covalente coordinado o dativo

Se trata de enlaces en los que un solo elemento (***dador***) aporta el par de electrones, el cual es aceptado por otro elemento que tiene un orbital vacío (***aceptor***).

---

Es un enlace muy común y clave para entender el concepto **ácido-base de Lewis**, en el que el ácido es la especie que acepta el par de electrones (aceptor) y la base la especie que lo cede (dador).

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/enlace-coordinado.svg" lightbox="false" width="100%" >}}

---

### Resonancia
La **resonancia** es una forma de describir el enlace en ciertas moléculas mediante la combinación de varias **estructuras resonantes** cuyo conjunto se conoce como un **híbrido** de **resonancia**.

---

Es especialmente útil para describir los **electrones deslocalizados** (enlaces $=$ en distintas posiciones) en ciertas moléculas o iones poliatómicos.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/resonancia.svg" lightbox="false" width="100%" >}}

---

### Propiedades de las sustancias covalentes moleculares
{{< figure library="true" src="elementos-compuestos-2ESO-3ESO/molecula.svg" title="⚫ $\rightarrow$ C; 🔴 $\rightarrow$ O; ⚪ $\rightarrow$ H." lightbox="false" width="60%" >}}

---

- Debido a las **débiles interacciones entre moléculas** covalentes, suelen tener **temperaturas** de **fusión** y **ebullición bajas** (muchos compuestos covalentes son **líquidos** o **gases** a **temperatura ambiente**).
- En estado sólido son compuestos **blandos** y **frágiles**.
- Son **malos conductores** del **calor** y de la **electricidad**.

---

### Propiedades de las sustancias covalentes cristalinas
Las **sustancias covalentes cristalinas** contienen un gran número de **átomos neutros** unidos entre sí mediante **enlaces covalentes**, formando **láminas bidimensionales**, como el grafito o el grafeno, o **estructuras tridimensionales**, como el diamante o el cuarzo.

---

#### Grafito/grafeno

{{< figure library="true" src="enlace-quimico-4ESO/grafito-grafeno.svg" lightbox="false" width="50%" >}}

---

#### Diamante

{{< figure library="true" src="enlace-quimico-4ESO/diamante.svg" lightbox="false" width="75%" >}}

---

- Debido a los **fuertes enlaces covalentes** entre los átomos, suelen tener **temperaturas** de **fusión** y **ebullición altas**, por lo que son **sólidos** a **temperatura ambiente**.
- Son sustancias muy **duras** aunque **frágiles**.
- Suelen ser **malos conductores** (no así el grafito o el grafeno).

---

> Construye un **detector** de **conductividad** con [esta genial **práctica** de la mano de **Miguel Quiroga**]({{< relref "/practicas-cuarto-eso/detector-conductividad" >}}).

{{% /section %}}

---

{{% section %}}

## Geometría molecular

- [TRPECV](#/6/1)
- [TEV](#/6/15)
- [Simulación](#/6/40)

(continúa hacia abajo)

👇

---

### TRPECV
La **Teoría de Repulsión de Pares de Electrones de la Capa de Valencia** (TRPECV) se basa en que, como los electrones de valencia se repelen unos a otros, éstos tienden a adoptar una disposición espacial que minimiza dicha repulsión.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/TRPECV.svg" lightbox="false" width="90%" >}}

---

#### Ejemplos

---

##### Lineal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-lineal.svg" lightbox="false" width="70%" >}}

---

##### Trigonal plana

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-trigonal-plana.svg" lightbox="false" width="100%" >}}

---

##### Angular

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-angular.svg" lightbox="false" width="100%" >}}

---

##### Tetraédrica

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-tetraedrica.svg" lightbox="false" width="100%" >}}

---

##### Piramidal trigonal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-piramidal-trigonal.svg" lightbox="false" width="100%" >}}

---

##### Bipiramidal trigonal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-bipiramidal-trigonal.svg" lightbox="false" width="100%" >}}

---

##### Balancín

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-balancin.svg" lightbox="false" width="100%" >}}

---

##### Forma de T

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-forma-T.svg" lightbox="false" width="100%" >}}

---

##### Octaédrica

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-octaedrica.svg" lightbox="false" width="100%" >}}

---

##### Piramidal cuadrada

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-piramidal-cuadrada.svg" lightbox="false" width="100%" >}}

---

##### Cuadrada plana

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-cuadrada-plana.svg" lightbox="false" width="100%" >}}

---

### TEV
La **Teoría del Enlace de Valencia** (TEV) se basa en que los e<sup>&ndash;</sup> compartidos se encuentran en una zona de **solapamiento orbital**:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/TEV.svg" lightbox="false" width="100%" >}}

---

#### Promoción electrónica

Consiste en aportar energía extra a los electrones apareados de la capa de valencia para que ocupen un orbital de mayor energía (se *exciten*) y permitan al átomo tener más electrones solitarios con los que formar los enlaces que necesite.

---

#### Hibridación

La **hibridación** consiste en combinar orbitales atómicos del átomo central para formar **orbitales híbridos** energéticamente iguales y orientados en la dirección del enlace.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion.svg" lightbox="false" width="100%" >}}

---

#### Ejemplos

---

##### sp: BeCl<sub>2</sub>

El berilio no tiene electrones desapareados por lo que se produce promoción electrónica e hibridación para que pueda formar dos enlaces Be&mdash;Cl.

---

Cada uno de estos **híbridos sp** se solapa frontalmente con un orbital p del cloro, formando dos enlaces sigma:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-BeCl2.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-BeCl2.svg" lightbox="false" width="100%" >}}

---

##### sp<sup>2</sup>: BF<sub>3</sub>

El boro solo tiene un electrón desapareado pero necesita tres, por lo que se produce promoción electrónica e hibridación para que pueda formar tres enlaces B&mdash;F.

---

Cada uno de estos **híbridos sp<sup>2</sup>** se solapa frontalmente con un orbital p del flúor, formando tres enlaces sigma:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-BF3.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-BF3.svg" lightbox="false" width="85%" >}}

---

##### sp<sup>3</sup>: CH<sub>4</sub>

El carbono solo tiene dos electrones desapareados pero necesita cuatro, por lo que se produce promoción electrónica e hibridación para que pueda formar cuatro enlaces C&mdash;H.

---

Cada uno de estos **híbridos sp<sup>3</sup>** se solapa frontalmente con un orbital s del hidrógeno, formando cuatro enlaces sigma:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-CH4.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-CH4.svg" lightbox="false" width="60%" >}}

---

##### Enlaces múltiples

---

###### Eteno (CH<sub>2</sub>=CH<sub>2</sub>)

Cada carbono necesita formar un enlace doble (con el otro C) y dos enlaces simples (con H), por lo que se necesita promoción electrónica y una hibridación sp<sup>2</sup> para tener también un orbital puro p con el que formar un enlace $\pi$ (solapamiento lateral).

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-eteno.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-eteno.svg" title="Cada orbital sp<sup>2</sup> del carbono solapa frontalmente ($\sigma$) con dos orbitales s del H y el orbital sp<sup>2</sup> del otro carbono. Además, los orbitales p<sub><em>z</em></sub> de cada carbono solapan lateralmente entre sí ($\pi$) para formar el doble enlace C=C." lightbox="false" width="100%" >}}

---

###### Acetileno (CH&equiv;CH)

Cada carbono necesita formar un enlace triple (con el otro C) y un enlace simple (con H), por lo que se necesita promoción electrónica y una hibridación sp para tener dos orbitales puros p con los que formar dos enlaces $\pi$ (solapamiento lateral).

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-acetileno.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-acetileno.svg" title="El enlace triple del acetileno consiste en un enlace $\sigma$ (sp&ndash;s) y dos enlaces $\pi$ (p&ndash;p)." lightbox="false" width="100%" >}}

---

### Simulación

Explora las **formas moleculares** mediante la **construcción** de **moléculas** en **3D** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_es.html" width="100%" height="450" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Fuerzas intermoleculares
Las **fuerzas intermoleculares** son las **fuerzas** que existen **entre** las **moléculas**, incluyendo las fuerzas de atracción o repulsión que actúan entre las moléculas y otros tipos de partículas vecinas, por ejemplo, átomos o iones.

(continúa hacia abajo)

👇

---

Las fuerzas intermoleculares son **débiles en relación con** las **fuerzas intramoleculares** (las que mantienen unida una molécula).

---

### Fuerzas de van der Waals

{{< figure library="true" src="enlace-quimico-4ESO/fuerzas-intermoleculares.svg" title="**Atracción intermolecular** entre moléculas de **cloruro de hidrógeno**, HCl." lightbox="false" width="100%" >}}

---

Se pueden dar entre **moléculas polares** (dipolo-dipolo, más fuertes cuanto mayor sea la polaridad de la molécula), y **apolares** (llamadas **fuerzas** de **dispersión** de **London**, más fuertes cuanto más grandes y masivas son las moléculas involucradas).

---

### Enlaces de hidrógeno

> No confundir con los llamados [**puentes de hidrógeno**]({{< relref "/post/normas-ortografia-fisica-quimica/index.md#3-enlaces-de-hidrógeno-vs-puentes-de-hidrógeno" >}}).

Son las **fuerzas** intermoleculares más **intensas**. Se dan entre moléculas que contienen átomos de **hidrógeno** unidos a átomos de **nitrógeno** (N), **oxígeno** (O) o **flúor** (F).

---

{{< figure library="true" src="enlace-quimico-4ESO/enlaces-hidrogeno.svg" title="**Enlaces de hidrógeno** entre átomos de H y O en moléculas de **agua** (H<sub>2</sub>O)." lightbox="false" width="60%" >}}

---

Los **enlaces** de **hidrógeno** son **responsables** de:

- Que el **agua** (H<sub>2</sub>O) tenga una **temperatura** de **ebullición anormalmente alta** (100&thinsp;&deg;C a presión atmosférica).
- La **estructura** de **proteínas** y **ácidos nucleicos**, como la **doble hélice** del **ADN** 🧬.
- La **estructura** de **polímeros**.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/comparacion-fortaleza-enlaces.svg" lightbox="false" width="100%" >}}

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
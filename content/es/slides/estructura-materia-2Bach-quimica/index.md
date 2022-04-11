---
title: Estructura de la materia
summary: "Mecánica cuántica, orbitales atómicos, estructura electrónica y partículas subatómicas."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/estructura-materia/diapositivas"

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow

  reveal_options:
    hash: true
---

<section data-background-image="/media/logo-diapositivas.svg, qrcode.svg" data-background-size="150px" data-background-position="3.629% 5%, 96.371% 5%">

# Estructura de la materia

- [Modelos atómicos](#/1)
- [Orígenes de la teoría cuántica](#/2)
- [Mecánica cuántica](#/3)
- [Orbitales atómicos](#/4)
- [Estructura electrónica](#/5)
- [Partículas subatómicas](#/6)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

</section>

---

{{% section %}}

## Modelos atómicos

- [Dalton](#/1/1)
- [Thomson](#/1/4)
- [Rutherford](#/1/7)
- [Bohr](#/1/10)

(continúa hacia abajo)

👇🏼

---

### Dalton
Basándose en las ideas de **Demócrito**, John **Dalton** propuso este modelo a principios del siglo XIX, considerando al **átomo** como una **esfera maciza indivisible**.

---
 
{{< figure library="true" src="estructura-materia-2Bach-quimica/Dalton.svg" lightbox="false" width="70%" >}}

---

Los **descubrimientos** de la **radiactividad natural** por **Becquerel** (1896) y el **electrón** por **Thomson** (1897) hicieron necesaria la revisión de este modelo.

---

### Thomson

También conocido como el modelo del *pastel de pasas*, fue propuesto en 1904 por J.J. **Thomson**, quien considera que el **átomo** está formado por una ***nube*** esférica con **carga positiva** en donde se encuentran **incrustados** los **electrones**, con carga negativa, como las **pasas** en un **pastel**.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/Thomson.svg" lightbox="false" width="70%" >}}

---

Los **descubrimientos** del **núcleo atómico** y del **protón** por **Rutherford** (1911 y 1919, respectivamente) llevaron a la revisión de este modelo.

---

### Rutherford
Gracias a su famoso **experimento** de la **lámina** de **oro** (Au), Ernest **Rutherford** propuso, en 1911, un modelo de **átomo** formado por un **núcleo**, muy pequeño comparado con el tamaño del átomo, con **carga positiva** y donde se concentra casi toda su **masa**. Los **electrones**, con carga negativa, **giran alrededor** del **núcleo** como lo hacen los planetas alrededor del Sol.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/Rutherford.svg" lightbox="false" width="70%" >}}

---

La **integridad** del **núcleo** y la **inestabilidad** de las **órbitas electrónicas** desde un punto de vista clásico hicieron necesaria la revisión de este modelo.

---

### Bohr

Propuesto en **1913** por Niels **Bohr** para **explicar** la **estabilidad** de la **materia** y los **característicos espectros** de emisión y absorción de los **gases**.

---

{{< figure library="true" src="modelos-atomicos-4ESO/espectro-H.svg" title="**Espectro** discreto de **emisión** del **hidrógeno** (H)." lightbox="false" width="100%" >}}

---

¿Cómo son los **espectros de emisión** del resto de **elementos** químicos de la tabla periódica?

{{< figure library="true" src="modelos-atomicos-4ESO/tabla-periodica-espectros.jpg" lightbox="false" >}}

---

#### Postulados
Este modelo se basa en **tres postulados fundamentales**:

1. Los **electrones** describen **órbitas circulares** en torno al núcleo **sin irradiar energía**.
2. Solo están **permitidas** aquellas **órbitas** en las que el electrón tiene un **momento angular múltiplo** entero de $\hbar = h/(2\pi)$.
3. El **electrón** solo **emite** o **absorbe energía** en los **saltos** de una órbita permitida a otra, siendo la energía emitida/absorbida la diferencia de energía entre ambos niveles.

---

{{< figure library="true" src="modelos-atomicos-4ESO/Bohr.svg" lightbox="false" width="80%" >}}

---

#### Ecuación de Rydberg

La **ecuación** de **Rydberg** nos da la **longitud** de **onda** de las **líneas espectrales** de muchos elementos químicos.

Para el caso del **hidrógeno**:

$$
\frac{1}{\lambda} = R_\mathrm H\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

donde $\lambda$ es la longitud de onda de la radiación emitida en el vacío, $R_\mathrm H = 1.097\times 10^7\thinspace \mathrm m^{-1}$ es la constante de Rydberg y $n_1$ y $n_2$ son los números cuánticos principales de las órbitas involucradas en el salto (con $n_2>n_1$).

---

Esta ecuación también nos permite calcular el **valor energético** correspondiente a una **transición electrónica** entre dos niveles dados, $\Delta E$:

$$
\Delta E = hcR_\mathrm H\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

donde $c = 299\thinspace 792\thinspace 458\thinspace \mathrm{m/s}$ es la velocidad de la luz en el vacío.

{{% /section %}}

---

{{% section %}}

## Orígenes de la teoría cuántica

- [Radiación de cuerpo negro](#/2/1)
- [Hipótesis de Planck](#/2/7)
- [Efecto fotoeléctrico](#/2/8)

(continúa hacia abajo)

👇🏼

---

### Radiación de cuerpo negro

Es la **radiación electromagnética re-emitida** por un cuerpo ideal que absorbe toda la radiación que incide sobre él (**cuerpo negro**), estando en **equilibrio** termodinámico con su **entorno**.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/cuerpo-negro.svg" title="Un cuerpo negro es cualquier objeto que absorbe toda la radiación electromagnética que incide sobre él, re-emitiéndola." lightbox="false" width="100%" >}}

---

Tiene un espectro muy característico, inversamente relacionado con la intensidad, que depende únicamente de la temperatura del cuerpo.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/radiacion-cuerpo-negro.svg" lightbox="false" width="80%" >}}

---

El **fallo** de la **teoría clásica** vigente a la hora de explicar la forma de este espectro se conoce como la **catástrofe ultravioleta**.

**Max Planck** fue quien consiguió, en 1900, explicar el espectro del cuerpo negro, dando así **origen** a la **teoría cuántica**.

---

Aprende más sobre la **radiación** de **cuerpo negro** con esta excelente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/blackbody-spectrum/latest/blackbody-spectrum_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

### Hipótesis de Planck

> La energía solo puede ser emitida/absorbida en paquetes discretos llamados cuantos o **fotones**, múltiplos de la frecuencia $\nu$ de la radiación electromagnética asociada:
	$$
	E = h \nu,
	$$
	donde $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ es la constante de Planck.
	
---

### Efecto fotoeléctrico

El **efecto fotoeléctrico** consiste en la **emisión** de **(foto)electrones** cuando radiación electromagnética, como por ejemplo luz ultravioleta, incide sobre un material, típicamente metálico.

---

#### Características

- La **cantidad** de **fotoelectrones** emitidos es directamente **proporcional** a la **intensidad** de la **radiación** incidente.
- La **emisión** de **fotoelectrones** solo se produce cuando la radiación incidente tiene una **frecuencia mayor o igual** que una cierta frecuencia mínima, llamada **frecuencia umbral** o **de corte**, $\nu_0$, que es característica de cada material.

---

- La **energía cinética** de los **fotoelectrones depende** únicamente de la **frecuencia** de la **radiación** incidente.
- La **emisión** de **fotoelectrones** se realiza **instantáneamente**, sin existir ningún retraso entre la absorción de energía y la emisión de los fotoelectrones.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/efecto-fotoelectrico.svg" lightbox="false" width="70%" >}}

---

\begin{align*}
	E &= \phi + E_\mathrm c \\\\
	h\nu &= h\nu_0 + E_\mathrm c \Rightarrow E_\mathrm c = h\left(\nu-\nu_0\right),
\end{align*}

donde $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ es la constante de Planck, $\nu$ es la frecuencia de la radiación incidente, $\nu_0$ es la frecuencia umbral (cuya energía asociada, $\phi = h \nu_0$ se denomina **función** de **trabajo** o trabajo de extracción) y $E_\mathrm c = h\left(\nu-\nu_0\right)$ es la energía cinética máxima de los fotoelectrones, emitidos siempre que se cumpla $\nu \geq \nu_0$.

{{% /section %}}

---

{{% section %}}

## Mecánica cuántica

- [Dualidad onda-corpúsculo](#/3/1)
- [Principio de incertidumbre de Heisenberg](#/3/5)

(continúa hacia abajo)

👇🏼

---

### Dualidad onda-corpúsculo
Consiste en que el comportamiento de los **objetos cuánticos** no puede ser descrito considerando a estos como partículas u ondas, sino que tienen una **naturaleza dual**.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/difraccion-electrones.svg" title="**Electrones** mostrando un **comportamiento** claramente **ondulatorio**, gracias al famoso **experimento** de la **doble rendija**." lightbox="false" width="70%" >}}

---

A partir de **experimentos** de **difracción** de **electrones**, **Louis de Broglie** fue el primero que propuso la siguiente **hipótesis**:

> Toda partícula de masa $m$ moviéndose a una velocidad $v$ tiene asociada una onda cuya longitud de onda, $\lambda$, viene dada por
	$$
	\lambda = \frac{h}{mv},
	$$
	siendo $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ la constante de Planck.

---

En el siguiente **vídeo** de [Quantum Made Simple](https://toutestquantique.fr/en/) (en inglés) puedes aprender más sobre la **dualidad onda-corpúsculo**:

{{< youtube qCmtegdqOOA >}}

---	
	
### Principio de incertidumbre de Heisenberg

> Existen ciertos pares de magnitudes físicas (aquellas cuyo producto tiene dimensiones de $\mathsf{M}\mathsf{L}^2\mathsf{T}^{-1}$), que no pueden ser determinadas simultáneamente con total exactitud, pues el producto de sus incertidumbres ha de ser mayor o igual que $h/(4\pi) = \hbar/2$.

---

**Ejemplos** de tales magnitudes son:
	
\begin{align*}
	\text{Posición $x$ y momento lineal $p$: } & \Delta x \cdot \Delta p \geq \frac{\hbar}{2} \\\\
	\text{Energía $E$ y tiempo $t$: } & \Delta E \cdot \Delta t \geq \frac{\hbar}{2}
\end{align*}

donde $\Delta$ denota la  incertidumbre asociada y $\hbar = h/(2\pi)$.

---

El **principio** de **incertidumbre** de **Heisenberg** implica que, aunque se especifiquen todas las condiciones iniciales, no es posible predecir el valor de una cantidad con total certeza, dando así paso a una **interpretación probabilística** de la **mecánica cuántica**.

{{% /section %}}

---

{{% section %}}

## Orbitales atómicos

Son **funciones matemáticas** que **describen** el **tamaño**, la **forma** y la **orientación** de las **regiones** del **espacio** donde es **más probable encontrar** al **electrón**.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/orbitales-atomicos.svg" lightbox="false" width="75%" >}}

---

### Números cuánticos y su interpretación

Los **números cuánticos** describen **valores** de **magnitudes físicas** que se **conservan** en la dinámica de un sistema cuántico, tales como la **energía** o el **momento angular**, las cuales están **cuantizadas** y por tanto toman **valores discretos**.

---

Para **describir** completamente el **estado cuántico** de un **electrón** en un átomo necesitamos **cuatro números cuánticos**, los cuales tienen un significado orbital concreto.

---

#### Número cuántico principal $n$
Nos da el **tamaño** y la **energía** del **orbital**. Toma valores naturales ($1\leq n$), como por ejemplo $n = 1,2,3,\dots$

---

#### Número cuántico secundario $l$
Nos da la **energía** y **forma** del **orbital**. Puede tomar los siguientes valores:

$$
0\leq l\leq n-1
$$

de forma que, por ejemplo, para $n = 3$: $l=\\{0,1,2\\}$.

---

#### Número cuántico magnético $m_l$

Nos da la **orientación** del **orbital**. Puede tomar los siguientes valores:

$$
-l\leq m_l\leq l
$$

de forma que, por ejemplo, para $l = 2$: $m_l=\\{-2,-1,0,1,2\\}$.

---

#### Espín $m_s$

Es el **momento angular intrínseco**. Puede tomar los siguientes valores:

$$
-s\leq m_s\leq s
$$

Para un electrón, $s=1/2$, por lo que $m_s = \\{-1/2,1/2\\}$.

---

Conoce más sobre el espín en este magnífico vídeo de [Quantum Made Simple](https://toutestquantique.fr/en/) (en inglés):

{{< youtube rg4Fnag4V-E >}}

{{% /section %}}

---

{{% section %}}

## Estructura electrónica

- [Principio de exclusión de Pauli](#/5/1)
- [Orden energético creciente](#/5/3)
- [Regla de Hund de la máxima multiplicidad](#/5/7)

(continúa hacia abajo)

👇🏼

---

### Principio de exclusión de Pauli
> Dos o más electrones no pueden tener todos sus números cuánticos idénticos (ocupar el mismo estado cuántico) dentro del mismo sistema cuántico (átomo).

---

Gracias a este principio podemos determinar el **número máximo** de **electrones** que ***caben*** en cada tipo de **orbital**:

| Tipo de orbital | s | p | d | f |
| :--- | :---: | :---: | :---: | :---: |
| **Número de orbitales** | 1 | 3 | 5 | 7 |
| **Número máximo de e**<sup>**&ndash;**</sup> | 2 | 6 | 10 | 14 |

---

### Orden energético creciente
La **configuración electrónica** es la **distribución** de los **electrones** de un **átomo** en **orbitales atómicos** (s, p, d y f).

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/orden-energetico-creciente.png" lightbox="false" >}}

---

#### Diagrama de Möller
El **diagrama** de **Möller** nos ayuda a saber en qué **orden** han de **llenarse** los distintos **orbitales**, siguiendo las **flechas** (orden energético creciente).

---

{{< figure library="true" src="sistema-periodico-4ESO/diagrama-Moller.svg" lightbox="false" width="65%" >}}

---

### Regla de Hund de la máxima multiplicidad
> Al llenar orbitales de igual energía (por ejemplo los tres orbitales p) los electrones se distribuyen, siempre que sea posible, con sus espines paralelos, llenando los orbitales con la multiplicidad mayor.

---

#### Ejemplos

Se muestran también los **números cuánticos** del **último electrón**:

{{< figure library="true" src="estructura-materia-2Bach-quimica/regla-hund.svg" lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Partículas subatómicas

Tras los descubrimientos de **Thomson**, **Rutherford** y **Chadwick** a principios del siglo XX, parecía claro que el átomo estaba formado por **protones** y **neutrones** en su núcleo y una corteza donde estaban los **electrones**.

---

| Partícula | Masa/kg | Carga/C |
| --- | :---: | :---: |
| Protón | $1.673\times 10^{-27}$ | $1.602\times 10^{-19}$ |
| Neutrón | $1.675\times 10^{-27}$ | $0$ |
| Electrón | $9.109\times 10^{-31}$ | $-1.602\times 10^{-19}$ |
<td colspan=3>$m_\text{protón}\simeq m_\text{neutrón}\sim 2000m_\text{electrón}$<br>	
<td colspan=3>$q_\text{protón}=-q_\text{electrón}$

---

### Modelo estándar
Es la teoría que **describe tres de las cuatro interacciones fundamentales** de la naturaleza conocidas (electromagnética, nuclear fuerte y nuclear débil), además de **clasificar** todas las **partículas elementales** conocidas.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/modelo-estandar.svg" lightbox="false" width="80%" >}}

---

Descubre una interesante curiosidad sobre los [**muones**](https://es.wikipedia.org/wiki/Muon) en este magnífico hilo de [**BTeseracto**](https://twitter.com/bteseracto):

<div align="center">
{{< tweet user="BTeseracto" id="1486036181422903300" >}}
</div>

---

O aprende sobre cómo se pueden **detectar** los [**neutrinos**](https://es.wikipedia.org/wiki/Neutrino) y el misterio de los **neutrinos solares desaparecidos** en estos magníficos hilos también de [**BTeseracto**](https://twitter.com/bteseracto):

<div align="center">
{{< tweet user="BTeseracto" id="1489297648167366656" >}}
</div>

---

<div align="center">
{{< tweet user="BTeseracto" id="1488572890454839298" >}}
</div>

---
	
### Evolución del Universo

{{< figure library="true" src="estructura-materia-2Bach-quimica/evolucion-universo.svg" lightbox="false" width="100%" >}}

{{% /section %}}
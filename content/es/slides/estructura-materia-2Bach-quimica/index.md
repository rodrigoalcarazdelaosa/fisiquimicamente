---
title: Estructura de la materia
summary: "Mecánica cuántica, orbitales atómicos, estructura electrónica y partículas subatómicas."

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Estructura de la materia

- Modelos atómicos
- Orígenes de la teoría cuántica
- Mecánica cuántica
- Orbitales atómicos
- Estructura electrónica
- Partículas subatómicas

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

{{% section %}}

## Modelos atómicos

- Dalton
- Thomson
- Rutherford
- Bohr

(continúa hacia abajo)

👇

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

#### Postulados
Este modelo se basa en **tres postulados fundamentales**:

1. Los **electrones** describen **órbitas circulares** en torno al núcleo **sin irradiar energía**.
2. Solo están **permitidas** aquellas **órbitas** en las que el electrón tiene un **momento angular múltiplo** entero de $\hbar = h/(2\pi)$.
3. El **electrón** solo **emite** o **absorbe energía** en los **saltos** de una órbita permitida a otra, siendo la energía emitida/absorbida la diferencia de energía entre ambos niveles.

---

{{< figure library="true" src="modelos-atomicos-4ESO/Bohr.svg" lightbox="false" width="80%" >}}

---

#### Ecuación de Rydberg

La **ecuación** de **Rydberg** nos da la **longitud** de **onda** de las **líneas espectrales** de muchos elementos químicos:

$$
\frac{1}{\lambda} = R\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

donde $\lambda$ es la longitud de onda de la radiación emitida en el vacío, $R = 1.097\times 10^7\thinspace \mathrm m^{-1}$ es la constante de Rydberg y $n_1$ y $n_2$ son los números cuánticos principales de las órbitas involucradas en el salto (con $n_2>n_1$).

---

Esta ecuación también nos permite calcular el **valor energético** correspondiente a una **transición electrónica** entre dos niveles dados, $\Delta E$:

$$
\Delta E = hcR\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

donde $c = 299\thinspace 792\thinspace 458\thinspace \mathrm{m/s}$ es la velocidad de la luz en el vacío.

{{% /section %}}

---

{{% section %}}

## Orígenes de la teoría cuántica

- Radiación de cuerpo negro
- Hipótesis de Planck
- Efecto fotoeléctrico

(continúa hacia abajo)

👇

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

<iframe src="https://phet.colorado.edu/sims/html/blackbody-spectrum/latest/blackbody-spectrum_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Hipótesis de Planck

> La energía solo puede ser emitida/absorbida en paquetes discretos llamados cuantos o **fotones**, múltiplos de la frecuencia $\nu$ de la radiación electromagnética asociada:
	$$
	E = h \nu,
	$$
	donde $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ es la constante de Planck.

### Efecto fotoeléctrico

El **efecto fotoeléctrico** consiste en la **emisión** de **(foto)electrones** cuando radiación electromagnética, como por ejemplo luz ultravioleta, incide sobre un material, típicamente metálico.

#### Características

- La **cantidad** de **fotoelectrones** emitidos es directamente **proporcional** a la **intensidad** de la **radiación** incidente.
- La **emisión** de **fotoelectrones** solo se produce cuando la radiación incidente tiene una **frecuencia mayor o igual** que una cierta frecuencia mínima, llamada **frecuencia umbral** o **de corte**, $\nu_0$, que es característica de cada material.
- La **energía cinética** de los **fotoelectrones depende** únicamente de la **frecuencia** de la **radiación** incidente.
- La **emisión** de **fotoelectrones** se realiza **instantáneamente**, sin existir ningún retraso entre la absorción de energía y la emisión de los fotoelectrones.

{{< figure library="true" src="estructura-materia-2Bach-quimica/efecto-fotoelectrico.svg" title="Fuente: https://commons.wikimedia.org/wiki/File:Photoelectric_effect_in_a_solid_-_diagram.svg" lightbox="false" width="100%" >}}

\begin{align*}
	E &= \phi + E_\mathrm c \\\\
	h\nu &= h\nu_0 + E_\mathrm c \Rightarrow E_\mathrm c = h\left(\nu-\nu_0\right),
\end{align*}

donde $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ es la constante de Planck, $\nu$ es la frecuencia de la radiación incidente, $\nu_0$ es la frecuencia umbral (cuya energía asociada, $\phi = h \nu_0$ se denomina **función** de **trabajo** o trabajo de extracción) y $E_\mathrm c = h\left(\nu-\nu_0\right)$ es la energía cinética máxima de los fotoelectrones, emitidos siempre que se cumpla $\nu \geq \nu_0$.

{{% callout note %}}
Si quieres aprender más sobre el **efecto fotoeléctrico** te recomiendo echar un vistazo a [esta estupenda **simulación**](https://phet.colorado.edu/sims/cheerpj/photoelectric/latest/photoelectric.html?simulation=photoelectric&locale=es).
{{% /callout %}}

{{% /section %}}
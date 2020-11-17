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
 
{{< figure library="true" src="estructura-materia-2Bach-quimica/Dalton.svg" title="El **átomo** de **Dalton** es una **esfera maciza indivisible**." lightbox="false" width="70%" >}}

---

Los **descubrimientos** de la **radiactividad natural** por **Becquerel** (1896) y el **electrón** por **Thomson** (1897) hicieron necesaria la revisión de este modelo.

---

### Thomson

También conocido como el modelo del *pastel de pasas*, fue propuesto en 1904 por J.J. **Thomson**, quien considera que el **átomo** está formado por una ***nube*** esférica con **carga positiva** en donde se encuentran **incrustados** los **electrones**, con carga negativa, como las **pasas** en un **pastel**.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/Thomson.svg" title="El **átomo** de **Thomson** es una ***nube*** esférica con **carga positiva** en donde se encuentran **incrustados** los **electrones**, con carga negativa, como las **pasas** en un **pastel**." lightbox="false" width="70%" >}}

---

Los **descubrimientos** del **núcleo atómico** y del **protón** por **Rutherford** (1911 y 1919, respectivamente) llevaron a la revisión de este modelo.

---

### Rutherford
Gracias a su famoso **experimento** de la **lámina** de **oro** (Au), Ernest **Rutherford** propuso, en 1911, un modelo de **átomo** formado por un **núcleo**, muy pequeño comparado con el tamaño del átomo, con **carga positiva** y donde se concentra casi toda su **masa**. Los **electrones**, con carga negativa, **giran alrededor** del **núcleo** como lo hacen los planetas alrededor del Sol.

---

{{< figure library="true" src="estructura-materia-2Bach-quimica/Rutherford.svg" title="El **átomo** de **Rutherford** está formado por un **núcleo** con **carga positiva** donde se concentra la mayor parte de su **masa**, y alrededor del cual giran los **electrones**, con carga negativa." lightbox="false" width="70%" >}}

---

La **integridad** del **núcleo** [^1] y la **inestabilidad** de las **órbitas electrónicas**[^2] desde un punto de vista clásico hicieron necesaria la revisión de este modelo.

[^1]: Si el núcleo estuviera formado únicamente por protones con carga positiva, su repulsión haría que se *desintegrara*. En 1932 **Chadwick** descubre el **neutrón**, partícula sin carga encargada de mantener unidos entre sí a los protones mediante la **fuerza nuclear fuerte**.

[^2]: La **física clásica** predice que una **partícula cargada y acelerada**, como sería el caso de los electrones *orbitando* alrededor del núcleo, **emite radiación electromagnética**, perdiendo energía y *colapsando* contra el núcleo.

---

### Bohr

Propuesto en **1913** por Niels **Bohr** para **explicar** la **estabilidad** de la **materia** y los **característicos espectros** de emisión y absorción de los **gases**.

{{< figure library="true" src="modelos-atomicos-4ESO/espectro-H.svg" title="**Espectro** discreto de **emisión** del **hidrógeno** (H)." lightbox="false" width="100%" >}}

#### Postulados
Este modelo se basa en **tres postulados fundamentales**:

1. Los **electrones** describen **órbitas circulares** en torno al núcleo **sin irradiar energía**.
2. Solo están **permitidas** aquellas **órbitas** en las que el electrón tiene un **momento angular múltiplo** entero de $\hbar = h/(2\pi)$.
3. El **electrón** solo **emite** o **absorbe energía** en los **saltos** de una órbita permitida a otra, siendo la energía emitida/absorbida la diferencia de energía entre ambos niveles.

{{< figure library="true" src="modelos-atomicos-4ESO/Bohr.svg" title="Traducida y adaptada de https://commons.wikimedia.org/wiki/File:Bohr_atom_model_English.svg." lightbox="false" width="100%" >}}

#### Ecuación de Rydberg

La **ecuación** de **Rydberg** nos da la **longitud** de **onda** de las **líneas espectrales** de muchos elementos químicos:

$$
\frac{1}{\lambda} = R\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

donde $\lambda$ es la longitud de onda de la radiación emitida en el vacío, $R = 1.097\times 10^7\thinspace \mathrm m^{-1}$ es la constante de Rydberg y $n_1$ y $n_2$ son los números cuánticos principales de las órbitas involucradas en el salto (con $n_2>n_1$).

Esta ecuación también nos permite calcular el **valor energético** correspondiente a una **transición electrónica** entre dos niveles dados, $\Delta E$:

$$
\Delta E = hcR\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

donde $c = 299\thinspace 792\thinspace 458\thinspace \mathrm{m/s}$ es la velocidad de la luz en el vacío.

{{% /section %}}
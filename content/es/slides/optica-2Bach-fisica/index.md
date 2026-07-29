---
title: Óptica
summary: "Naturaleza y propagación de la luz, óptica geométrica, el ojo y los defectos de la visión e instrumentos ópticos."
url: "/recursos-fisica-quimica/apuntes/2bach/fisica/optica/diapositivas"

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

# Óptica

- [Naturaleza y propagación de la luz](#/1)
- [Óptica geométrica](#/2)
- [El ojo y los defectos de la visión](#/3)
- [Instrumentos ópticos](#/4)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

{{% section %}}

## Naturaleza y propagación de la luz

- [Introducción](#/1/1)
- [La luz y las ondas electromagnéticas](#/1/27)
- [Características de la luz en su propagación](#/1/44)
- [Fenómenos de la luz en su propagación](#/1/50)
- [Casos particulares](#/1/70)

(continúa hacia abajo)

👇

---

### Introducción

Comenzaremos el tema recordando la controversia surgida a lo largo de la historia acerca de la naturaleza de la luz.

---

Los primeros intentos por comprender qué era la luz se remontan a la Antigua Grecia. Los griegos ya sabían que la luz se propaga en línea recta y conocían los fenómenos de reflexión y refracción de la luz. Creían además que la luz se propagaba instantáneamente, es decir, con velocidad infinita.

---

Todo esto les hizo pensar que la luz estaba formada por pequeñas partículas o corpúsculos: era la primera [teoría corpuscular de la luz](https://es.wikipedia.org/wiki/Luz#Teorías_corpusculares).

---

Durante muchos siglos no se produjo ninguna teoría que superara a la de los griegos. No fue hasta finales del s. XVII cuando surgió la primera controversia sobre la laturaleza de la luz, que fue protagonizada por [Newton](https://es.wikipedia.org/wiki/Isaac_Newton) y [Huygens](https://es.wikipedia.org/wiki/Christiaan_Huygens).

---

#### Teoría corpuscular de Newton

Newton apoyaba la teoría corpuscular según la cual la luz estaba formada por partículas que se desplazaban en línea recta desde la fuente emisora.

---

Esta teoría permitía explicar satisfactoriamente la reflexión aplicando las leyes de la dinámica de Newton:

{{< figure library="true" src="optica-2Bach-fisica/reflexion-Newton.svg" title="Si se considera la reflexión como un choque elástico ($\vec p$ y $E_\mathrm c$ se conservan) de las partículas, resulta muy sencillo demostrar que î = r̂." width="70%" lightbox="false" theme="light" >}}

---

Sin embargo, para explicar la refracción, esta teoría presentaba mayores dificultades:

{{< figure library="true" src="optica-2Bach-fisica/refraccion-Newton.svg" width="50%" lightbox="false" theme="light" >}}

---

Para poder explicar la desviación del rayo refractado mediante las leyes de la dinámica, Newton tuvo que suponer que en la superficie de separación actuaba una fuerza que modificaba la componente de la velocidad perpendicular a esta superficie y dejaba invariante la componente paralela.

---

Su explicación era errónea, pues implicaba por ejemplo que la luz se movía más rápidamente en el agua (medio más denso) que en el aire (menos denso).

---

#### Teoría ondulatoria de Huygens

Huygens propuso una teoría alternativa a la de Newton conocida como teoría ondulatoria de la luz, según la cual la luz es una onda, o lo que es lo mismo, la propagación de una perturbación en el medio.

---

Como vimos en el bloque de [ondas]({{< relref "apuntes-segundo-bach-fisica/ondas/" >}}), el [principio de Huygens]({{< relref "slides/ondas-2Bach-fisica/index.md#principio-de-huygens" >}}) era capaz de explicar satisfactoriamente la reflexión y la refracción:

{{< figure library="true" src="ondas-2Bach-fisica/reflexion-Huygens.svg" title="Reflexión explicada según el principio de Huygens." width="100%" lightbox="false" theme="light" >}}

---

{{< figure library="true" src="ondas-2Bach-fisica/refraccion-Huygens.svg" title="Refracción explicada según el principio de Huygens." width="100%" lightbox="false" theme="light" >}}

---

Además, la teoría de Huygens predecía que la luz debía propagarse más rápido en el aire que en el agua, justo al contrario que Newton.

---

Sin embargo, esta teoría no podía explicar la propagación rectilínea de la luz y la existencia, por tanto, de las sombras. Si la luz era una onda como el sonido, debía ser capaz de sortear obstáculos.

---

Ambas teorías convivieron hasta el s. XIX, cuando al fin pudo demostrarse experimentalmente que la luz se propagaba más rápido en el aire que en el agua, corroborando así la predicción de la teoría ondulatoria.

---

Además, comenzaron a hacerse nuevos experimentos que solo podían explicarse suponiendo que la luz era una onda.

---

#### Fresnel y la difracción

La difracción es un fenómeno que se produce cuando una onda de longitud de onda $\lambda$ atraviesa un obstáculo cuyo tamaño $d$ es comparable a $\lambda$:

{{< figure library="true" src="ondas-2Bach-fisica/difraccion-una-rendija.svg" title="Adaptada de https://tikz.net/optics_diffraction/." width="100%" lightbox="false" theme="light" >}}

---

##### Predicciones

Teoría corpuscular
: Si la luz está formada por partículas que se propagan en línea recta, en la pantalla debería aparecer una figura similar a la rendija (visto de frente, un círculo luminoso y el resto sombra).

Teoría ondulatoria
: [Fresnel](https://es.wikipedia.org/wiki/Augustin_Fresnel) predijo que debería obtenerse, debido a interferencias constructivas y destructivas, una figura formada por franjas (visto de frente, anillos concéntricos de luces y sombras).

---

Al realizar la experiencia, se obtuvo la predicción de Fresnel. Era muy poco intuitiva y al ver que se cumplía, esto reforzó notablemente lateoría ondulatoria de la luz.

---

Aunque la teoría ondulatoria era mayoritariamente aceptada, con el nacimiento de la física moderna, comenzaron a realizarse nuevos experimentos que no podían explicarse. Mencionamos el [**efecto fotoeléctrico**](https://es.wikipedia.org/wiki/Efecto_fotoeléctrico) a modo de ejemplo.

---

#### Efecto fotoeléctrico y Einstein

Se trata de un fenómeno en el que se emiten electrones desde una superficie conductora cuando se hace incidir luz sobre ella. Se estudia mediante un dispositivo del tipo:

---

{{< figure library="true" src="optica-2Bach-fisica/efecto-fotoelectrico.svg" lightbox="false" width="100%" theme="light" >}}

---

Se obtienen los siguientes **resultados**:

1. Es instantáneo. Si se ilumina el electrodo se detecta corriente y si se deja de iluminar ya no se detecta.

2. El número de electrones es proporcional a la intensidad de la luz. Si se duplica la intensidad, se duplica el número de electrones.

---

3. La energía de los electrones depende de la frecuencia de la luz incidente, $\nu$. Cuanto mayor es $\nu$ más energía (velocidad) tienen los electrones.

4. Existe una frecuencia umbral $\nu_0$ tal que si $\nu < \nu_0$ no se produce efecto fotoeléctrico.

---

Estudiaremos este efecto en profundidad en el bloque de [Física del s. XX]({{< relref "apuntes-segundo-bach-fisica/fisica-s-xx/" >}}). Pero resultó fácil ver que solo puede ser explicado mediante teoría corpuscular:

- Teoría ondulatoria: en ondas, la energía es proporcional a la intensidad. Cuanto mayor es la intensidad, mayor energía deberían tener los electrones, pero no sucede así.
- Teoría corpuscular: cuanto mayor es la intensidad, más partículas en la luz cuya energía es $h\nu$. Así, más choques y más electrones pero su energía no cambia.

---

[**Einstein** recibió el **Premio Nobel**](https://www.nobelprize.org/prizes/physics/1921/summary/) por la explicación corpuscular del efecto fotoeléctrico.

---

### La luz y las ondas electromagnéticas

La luz es una onda electromagnética, es decir, una perturbación de campo eléctrico y campo magnético que se propaga por el espacio (incluso en el vacío). Se descubridor fue [**James Clerk Maxwell**](https://es.wikipedia.org/wiki/James_Clerk_Maxwell).

---

> **Aprende más** sobre **James Clerk Maxwell** echando un vistazo a su **biografía científica** en nuestra sección de [**Historia de la Ciencia**](https://fisiquimicamente.com/recursos-fisica-quimica/historia-ciencia/).

---

Teniendo en cuenta las [ecuaciones de Maxwell]({{< relref "apuntes-segundo-bach-fisica/induccion-electromagnetica/index.md#las-ecuaciones-de-maxwell" >}}), sucede que cuando una carga eléctrica describe un movimiento acelerado, produce un campo eléctrico dependiente del tiempo, $E(t)$, a su alrededor, que a su vez crea un campo magnético dependiente del tiempo, $B(t)$, que a su vez crea un $E(t)$ y así sucesivamente.

---

En consecuencia, la perturbación se propaga por el espacio dando lugar a una onda electromagnética, que se **caracteriza** por:

- Se originan por cargas eléctricas aceleradas.

---


- Consisten en la variación periódica de un campo eléctrico y otro magnético:

  {{< figure library="true" src="optica-2Bach-fisica/onda-EM.svg" title="Adaptada de https://tikz.net/electromagnetic_wave/." width="100%" lightbox="false" theme="light" >}}

---

- El campo eléctrico y magnético son perpendiculares entre sí y perpendiculares al vector velocidad de propagación de la onda (onda transversal). Varían sinusoidalmente con el tiempo (ondas armónicas):

  $$
  \begin{align*}
  E &= E_0\sin(\omega t-kx) \\
  B &= B_0\sin(\omega t-kx)
  \end{align*}
  $$

- Las dos ondas se propagan en fase y sus elongaciones en una posición e instante determinados siempre cumplen:

  $$
  E = vB
  $$

---

- No necesitan un medio para propagarse, aunque su velocidad depende de las características del medio:

  $$
  v = \frac{1}{\sqrt{\varepsilon\mu}},
  $$

  siendo $\varepsilon$ la [permitividad eléctrica](https://es.wikipedia.org/wiki/Permitividad) y $\mu$ la [permeabilidad magnética](https://es.wikipedia.org/wiki/Permeabilidad_magnética) del medio.

---

- Se caracterizan por $\lambda$ y $f$ que se relacionan entre sí:

  $$
  v = \lambda f
  $$

- La energía que transportan es proporcional a la frecuencia, cuanto mayor sea la frecuencia mayor es la energía transportada.

---

#### El espectro electromagnético

Es el conjunto de todas las ondas electromagnéticas ordenadas por orden creciente de frecuencia o de longitud de onda:

{{< figure library="true" src="optica-2Bach-fisica/espectro-EM.svg" title="Traducida y adaptada de https://tikz.net/electromagnetic_spectrum/." width="100%" lightbox="false" theme="light" >}}

---

##### Radio
También conocidas como ondas hertzianas, su longitud de onda está entre 1&thinsp;m y varios km.

---

##### Microondas
Longitud de onda en torno a cm. Junto con las ondas de radio, se emplean en comunicaciones y se generan con corrientes oscilantes en circuitos electrónicos.

---

##### IR
Longitud de onda ligeramente superior al visible. Lo emiten objetos calientes.

---

##### Visible
La radiación percibida por el ojo, comprende longitudes de onda entre 400&thinsp;nm y 700&thinsp;nm. Es el resultado de las transiciones de los electrones más externos del átomo.

---

##### UV
Transiciones de electrones de átomos.

---

##### Rayos X
Transiciones de los electrones más internos de los átomos.

---

##### Rayos γ
Se originan dentro de los núcleos en procesos nucleares. Junto con el UV y los rayos X, son [radiaciones ionizantes](https://es.wikipedia.org/wiki/Radiación_ionizante), capaces de arrancer electrones de los átomos.

---

#### Dualidad onda-corpúsculo

> Al final, ¿qué es la luz? ¿Onda o corpúsculo?

De momento no se ha puesto de manifiesto en un mismo experimento esta doble naturaleza de la luz. Después [**de Broglie**](https://es.wikipedia.org/wiki/Louis-Victor_de_Broglie) se preguntó: "Si las ondas son partículas, ¿las partículas son ondas?"

$$
\lambda = \frac{h}{p}
$$

---

### Características de la luz en su propagación

En este tema estudiaremos fenómenos en los que la luz se comporta como onda. Antes debemos tener en cuenta que, en su propagación, la luz:

---

A) En un medio homogéneo e isótopo la luz se propaga en línea recta.

Para simplificar las cosas, teniendo en cuenta que la propagación es rectilínea, se emplea el concepto de **rayo**: línea que indica la dirección de propagación de la luz y es perpendicular al frente de ondas.

---

B) La **velocidad** de propagación **depende del medio** por el que se propaga:

  $$
  v = \frac{1}{\sqrt{\varepsilon\mu}},
  $$

  siendo $\varepsilon$ la [permitividad eléctrica](https://es.wikipedia.org/wiki/Permitividad) y $\mu$ la [permeabilidad magnética](https://es.wikipedia.org/wiki/Permeabilidad_magnética) del medio. En el vacío:

  $$
  c = \frac{1}{\sqrt{\varepsilon_0\mu_0}} \approx 3\times 10^8\thinspace \mathrm{m/s}
  $$

---

Por lo tanto, y en discrepancia con las teorías griegas, la velocidad de la luz es finita. El primero que pudo demostrarlo experimentalmente fue el científico y astrónomo danés [Rømer](https://es.wikipedia.org/wiki/Ole_Rømer).

---

C) La velocidad dentro de un mismo medio es constante. En cada medio puede definirse el denominado **índice de refracción**, $n$, definido como:

  $$
  n = \frac{c}{v},
  $$

  con $c$ la velocidad de la luz en el vacío y $v$ la velocidad de la luz en el medio. Es adimensional y su valor es siempre mayor o igual que 1. Cuanto mayor es $n$, menor es $v$ en ese medio (más denso).

---

D) Cuando la luz pasa de un medio a otro cambia su velocidad y su longitud de onda pero su frecuencia no cambia. Se cumple:

  $$
  \frac{v_1}{v_2} = \frac{\lambda_1}{\lambda_2} = \frac{n_2}{n_1}
  $$

---

### Fenómenos de la luz en su propagación

- [Reflexión](#/1/51)
- [Refracción](#/1/56)
- [Reflexión interna total y ángulo límite](#/1/62)

(continúa hacia abajo)

👇

---

#### Reflexión

Es el proceso en el que un haz de luz incide sobre la superficie de separación entre dos medios y se refleja, esto es, se propaga en el mismo medio pero en otra dirección.

---

##### Leyes de la reflexión

- El rayo incidente, el rayo reflejado y la normal están en el mismo plano.
- El ángulo de incidencia y el de reflexión son iguales:

---

Para que se aprecie la reflexión, la superficie de separación debe ser especular (sus irregularidades pequeñas en comparación con la longitud de onda de la luz incidente). En ese caso los rayos reflejados son paralelos y la reflexión es especular.

---

Cuando, por el contrario, las irregularidades son comparables a la longitud de onda de la luz incidente, se produce una reflexión difusa (los rayos reflejados tienen distintas direcciones; no son paralelos entre sí). Esta reflexión es la que nos permite diferenciar los bordes de los objetos y apreciar así su forma.

---

Existen superficies que no reflejan toda la luz, sino una parte de esta (p. ej. espejos semitransparentes que reflejan el 50&thinsp;% y transmiten el 50&thinsp;%). En este caso la luz reflejada transporta solo una parte de la energía de la luz incidente.

---

#### Refracción

Proceso en el cual los rayos de luz atraviesan la superficie de separación entre dos medios y modifican su dirección o se desvían.

---

{{< figure library="true" src="ondas-2Bach-fisica/reflexion-refraccion.svg" width="100%" lightbox="false" theme="light" >}}

---

##### Leyes de la refracción

- El rayo incidente, el refractado y la normal pertenecen al mismo plano.
- El ángulo de incidencia y el refractado cumplen la [**ley de Snell**](https://es.wikipedia.org/wiki/Ley_de_Snell):

  $$
  \frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}
  $$

  Teniendo en cuenta que $n_i = c/v_i$, también puede expresarse como:

  $$
  n_1\sin\theta_1 = n_2\sin\theta_2
  $$

---

> [**Espejismos**](https://es.wikipedia.org/wiki/Espejismo): son ilusiones ópticas en las que parece que un objeto lejano se refleja en una superficie especular, p. ej. agua, que en realidad no existe. Son consecuencia de la refracción de la luz al atravesar capas de aire con distinta temperatura.

---

{{< figure library="true" src="optica-2Bach-fisica/espejismo.svg" title="Esquema de un espejismo inferior, en el que se muestran: a) la línea de visión sin refracción, b) la línea de visión refractada y c) la posición aparente de la imagen refractada. La temperatura del aire en contacto con la arena es mucho mayor que en capas altas y esto hace que el rayo se curve." width="75%" lightbox="false" theme="light" >}}

---

Puedes explorar con más detalle la **reflexión** y la **refracción** de la luz con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

#### Reflexión interna total y ángulo límite

Habitualmente, cuando un rayo incide sobre una superficie de separación entre dos medios, parte del rayo incidente se refleja y parte se refracta al segundo medio.

---

Tanto el rayo reflejado como el refractado cumplen las leyes que hemos descrito. Si $n_2>n_1$, el rayo refractado se acerca a la normal. Si por el contrario $n_2 < n_1$, el rayo refractado se aleja de la normal.

---

{{< figure library="true" src="optica-2Bach-fisica/reflexion-total.svg" title="Ilustración del **ángulo crítico** o **ángulo límite**. Adaptada de https://tikz.net/optics_refractions/." width="100%" lightbox="false" theme="light" >}}

---

Cuanto mayor es el ángulo de incidencia $\theta_1$ mayor será el ángulo refractado $\theta_2$ (el rayo refractado se aleja de la normal). Existe un **ángulo límite** o **ángulo crítico** para el cual $\theta_2 = 90^\circ$ y el rayo refractado se propaga por la superficie de separación entre medios.

---

Su valor puede calcularse aplicando la ley de Snell:

$$
n_1\sin\theta_1 = n_2\sin90^\circ \rightarrow \theta_1 = \arcsin\left(\frac{n_2}{n_1}\right)
$$

---

Para ángulos de incidencia mayores que el ángulo límite, se produce la [**reflexión interna total**](https://es.wikipedia.org/wiki/Reflexión_interna_total) en la que no hay rayo refractado. Es importante recalcar que solo se produce cuando $n_2 < n_1$ (p. ej. agua &#8594; aire).

---

##### Fibra óptica

Una aplicación de la reflexión interna total es la [**fibra óptica**](https://es.wikipedia.org/wiki/Fibra_óptica). Se trata de un cable fabricado con un material cuyo índice de refracción es muy elevado, de forma que el ángulo límite es muy pequeño.

---

La luz transportada en casi todas las direcciones va a incidir en la superficie fibra-aire con un ángulo mayor que el crítico, produciéndose reflexión interna total. Así, la luz se reconduce dentro del cable por lo que hay muy pocas pérdidas, permitiendo transmitir información a largas distancias con buena calidad.

---

### Casos particulares

- [Refracción en un bloque de caras plano-paralelas](#/1/71)
- [Refracción en un prisma óptico](#/1/73)

(continúa hacia abajo)

👇

---

#### Refracción en un bloque de caras plano-paralelas

{{< figure library="true" src="optica-2Bach-fisica/refraccion-bloque.svg" width="100%" lightbox="false" theme="light" >}}

---

Aplicamos la ley de Snell en cada superficie (tomando $n=1$ para el aire):

$$
\begin{align*}
\sin\hat \imath_1 &= n\sin\hat r_1 \\
n\sin\hat \imath_2 &= \sin\hat r_2
\end{align*}
$$

Por geometría: $\hat \imath_2 = \hat r_1$. Los rayos incidente y emergente son paralelos y están separados una distancia $d$. Dicha distancia puede expresarse en función de $\hat\imath_1$ y $\hat r_1$:

$$
d = e\cdot \frac{\sin(\hat\imath_1-\hat r_1)}{\cos \hat r_1}
$$

---

#### Refracción en un prisma óptico

Un prisma óptico es un material transparente que tiene dos superficies planas que forman entre sí un ángulo $\alpha$ (ángulo del prisma). Suponiendo que el prisma está en el aire y que su índice de refracción es $n$:

---

{{< figure library="true" src="optica-2Bach-fisica/refraccion-prisma.svg" title="Traducida y adaptada de https://tikz.net/prism1/." width="100%" lightbox="false" theme="light" >}}

---

Aplicamos la ley de Snell en cada superficie:

$$
\begin{align*}
\sin\hat \imath_1 &= n\sin\hat r_1 \\
n\sin\hat \imath_2 &= \sin\hat r_2
\end{align*}
$$

Es fácil demostrar que los ángulos internos cumplen:

$$
\alpha = \hat r_1 + \hat \imath_2
$$

---

En este caso el rayo incidente y el emergente ya no son paralelos. Sus direcciones forman un ángulo $\delta$ que puede expresarse en función de los ángulos:

$$
\delta = \overbrace{\underbrace{(\hat \imath_1-\hat r_1)}_{\substack{\text{desviación} \\ \text{primera} \\ \text{superficie}}}}^{\delta_1} + \overbrace{\underbrace{(\hat r_2-\hat\imath_2)}_{\substack{\text{desviación} \\ \text{segunda} \\ \text{superficie}}}}^{\delta_2}
$$

$\delta$ es mínimo cuando los rayos incidente y emergente son paralelos ($\hat \imath_1 = \hat r_2$). En ese caso:

$$
\delta_\mathrm{mín.} = \hat\imath_1+\hat\imath_1-\alpha = 2\hat\imath_1-\alpha
$$

{{% /section %}}

---

{{% section %}}

## Óptica geométrica

El objetivo fundamental de la [**óptica geométrica**](https://es.wikipedia.org/wiki/Óptica_geométrica) es determinar la trayectoria que sigue la luz cuando se propaga por diferentes medios y, al revés, cómo deben disponerse distintos medios (lentes) para conseguir que la propagación de la luz se ajuste a ciertas trayectorias.

---

En esta segunda parte vamos a estudiar los fundamentos de la óptica geométrica: leyes en las que se basa, trazado de rayos y formación de imágenes en [espejos](#formación-de-imágenes-en-espejos) y [lentes](#formación-de-imágenes-en-lentes-delgadas).

---

La solución de las [ecuaciones de Maxwell]({{< relref "apuntes-segundo-bach-fisica/induccion-electromagnetica/index.md#las-ecuaciones-de-maxwell" >}}) nos proporciona toda la información acerca de la luz: su trayectoria, las interacciones que sufre, etc. Estas ecuaciones son el equivalente de las leyes de Newton pero para el electromagnetismo clásico.

---

Sin embargo, resolverlas requiere un nivel matemático muy superior al de las leyes de Newton y es más complicado. En lugar de resolverlas, en determinadas circunstancias puede aplicarse la óptica geométrica.

---

La óptica geométrica es una aproximación que permite hacer un **tratamiento puramente geométrico** simplificando notablemente el estudio de las trayectorias que sigue la luz.

---

¿Cuándo puede aplicarse? Cuando la luz se propaga con una longitud de onda $\lambda$ mucho menor que el tamaño de los objetos con los que interacciona (en este caso podemos despreciar su carácter ondulatorio y por tanto fenómenos como la difracción, las interferencias, etc.).

---

La óptica geométrica se basa en estos **conceptos físicos**:

- La luz se representa mediante el **rayo luminoso**. Si un punto emisor se coloca ante una pantalla con un orificio se forma un cono de luz denominado haz. El rayo es una abstracción en la que las dimensiones del orificio tienden a cero. No tiene realidad física.

- La luz se propaga en línea recta en los distintos medios.

- En su propagación, la luz cumple las leyes de la reflexión, refracción, el principio de Fermat y el principio de reversibilidad.

---

### Principio de Fermat

Dicho principio afirma:

> La trayectoria real que sigue la luz entre dos puntos es aquella que se recorre en un tiempo mínimo.

Este principio permite explicar las leyes de la óptica desde un punto de vista puramente geométrico.

---

Por ejemplo la **refracción**:

{{< figure library="true" src="optica-2Bach-fisica/refraccion-fermat.svg" width="75%" lightbox="false" theme="light" >}}

---

Calculamos el tiempo que la luz tarda en llegar desde el punto $A$ hasta el $B$:

$$
\begin{align*}
t &= \frac{l_1}{v_1} + \frac{l_2}{v_2} \\
t &= \frac{\sqrt{a^2+x^2}}{v_1} + \frac{\sqrt{b^2+(c-x)^2}}{v_2}
\end{align*}
$$

---

De acuerdo con el principio de Fermat, si es el camino recorrido por la luz el tiempo debe ser mínimo. Por lo tanto $\displaystyle \frac{\mathrm d t}{\mathrm d x} = 0$. Si aplicamos esta condición a la expresión anterior se deduce que:

$$
\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}\quad\text{(ley de Snell)}
$$

---

Generalizando, si tenemos varias capas paralelas con distintos índices $n_i$ y en cada una la luz se propaga a $v_i$, el tiempo que tarda en atravesarlas:

$$
t = \sum_i{\frac{l_i}{v_i}} = \frac{1}{c}\sum_i{l_in_i} = \frac{L}{c},
$$

con $L = \sum_i{l_in_i}$ (camino óptico).

---

Si el medio no fuera homogéneo, los sumatorios se reemplazarían por integrales. A la vista de lo anterior, puede reformularse el principio de Fermat:

> El camino seguido por la luz entre dos puntos es aquel en el que el camino óptico es menor.

---

El **principio de reversibilidad** afirma que el camino seguido por la luz es reversible (si existe A &#8594; B, también existe B &#8594; A).

---

### Conceptos básicos en óptica geométrica

Antes de aprender a trazar los rayos y las trayectorias seguidas por la luz y estudiar las imágenes que forma, es imprescindible definir los siguientes **conceptos**:

---

#### Sistema óptico

Está formado por el eje óptico y las diferentes superficies centradas en él.

---

#### Objeto *O*

Fuente de la que proceden los rayos de luz que atraviesan el sistema y dan lugar a la imagen *O'*.

---

#### Imagen *O'*

 Pueden darse dos casos:

- Imagen real: los rayos a la salida del sistema convergen en un punto.
- Imagen virtual: los rayos a la salida del sistema divergen. Sus prolongaciones sí se cortan y dan lugar a *O'*.

---

Las imágenes, además de reales y virtuales, pueden ser derechas/invertidas o aumentadas/reducidas:

{{< figure library="true" src="optica-2Bach-fisica/imagen-derecha-invertida-aumentada-reducida.svg" width="100%" lightbox="false" theme="light" >}}

---

### Formación de imágenes en espejos

- [Espejo plano](#/2/20)
- [Espejo esférico](#/2/23)

(continúa hacia abajo)

👇

---

#### Espejo plano

{{< figure library="true" src="optica-2Bach-fisica/espejo-plano.svg" width="100%" lightbox="false" theme="light" >}}

---

##### Trazado de rayos

- Rayo paralelo al eje: no se desvía.
- Rayo que incide en el centro del espejo ($\hat\imath = \hat r$)

Los rayos divergen. Para obtener la imagen debemos considerar sus prolongaciones. Por lo tanto, la imagen es virtual. Además. de acuerdo a la figura, será derecha y del mismo tamaño.

---

##### Imagen en espejo plano

- Virtual
- Derecha
- Mismo tamaño

---

#### Espejo esférico

Antes de analizar la imagen que se forma, es importante conocer los **elementos básicos** de un espejo esférico:

{{< figure library="true" src="optica-2Bach-fisica/espejo-esferico.svg" width="100%" lightbox="false" theme="light" >}}

---

Para el **trazado de rayos** debe tenerse en cuenta:

- Los rayos que pasan por *C* no cambian su dirección.
- Los rayos paralelos al eje (vienen del infinito) pasan por *F*.
- Reversibilidad: rayos que pasan por *F* salen paralelos al eje.

---

##### Espejo cóncavo

Dependiendo de dónde coloquemos el objeto, obtenemos diferentes imágenes:

---

###### Objeto alejado (a la izquierda de *C*)

{{< figure library="true" src="optica-2Bach-fisica/espejo-concavo-alejado.svg" title="Imagen situada entre *C* y *F*, real, invertida y reducida." width="65%" lightbox="false" theme="light" >}}

---

###### Objeto entre *C* y *F*

{{< figure library="true" src="optica-2Bach-fisica/espejo-concavo-intermedio.svg" title="Imagen real, invertida y aumentada." width="43%" lightbox="false" theme="light" >}}

---

###### Objeto cercano (entre *F* y *V*)

{{< figure library="true" src="optica-2Bach-fisica/espejo-concavo-cercano.svg" title="Imagen virtual, derecha y aumentada." width="43%" lightbox="false" theme="light" >}}

---

##### Espejo convexo

{{< figure library="true" src="optica-2Bach-fisica/espejo-convexo.svg" title="Imagen virtual, derecha y reducida." width="60%" lightbox="false" theme="light" >}}

---

##### Resolución numérica

Hasta ahora hemos obtenido la imagen de forma gráfica. Pero también puede interesarnos saber numéricamente dónde está y cuál es su tamaño.

---

Para eso se emplean las siguientes expresiones:

$$
\frac{1}{s} + \frac{1}{s'} = \frac{1}{f},
$$

donde $s$ es la posición del objeto, $s'$ la posición de la imagen y $f$ es la distancia focal o posición del foco.

$$
m = \frac{y'}{y} = -\frac{s'}{s},
$$

siendo $m$ (también denotado por $\beta$) el [**aumento lateral**](https://es.wikipedia.org/wiki/Aumento_óptico#Aumento_lateral_o_transversal), con $y'$ la altura de la imagen e $y$ la altura del objeto.

---

$m$ nos proporciona mucha información sobre la imagen:

{{< figure library="true" src="optica-2Bach-fisica/aumento-lateral.svg" width="100%" lightbox="false" theme="light" >}}

---

###### Criterio de signos

Consideraremos el origen de coordenadas el punto de intersección del espejo con el eje óptico (vértice):

- Posiciones negativas a la izquierda.
- Posiciones positivas a la derecha.
- Alturas negativas por debajo del eje.
- Alturas positivas por encima del eje.

---

{{< figure library="true" src="optica-2Bach-fisica/criterio-signos-espejos.svg" width="90%" lightbox="false" theme="light" >}}

---

### Formación de imágenes en dioptrios

Se denomina dioptrio a cualquier superficie que separa dos medios con distintos índice de refracción. Además de los dioptrios planos, también son muy habituales los esféricos porque su fabricación es más sencilla. Veamos cómo se forman las imágenes en este tipo de dioptrios.

- [Dioptrio plano](#/2/36)
- [Dioptrio esférico](#/2/41)

(continúa hacia abajo)

👇

---

#### Dioptrio plano

Un ejemplo de dioptrio plano podría ser la superficie de separación entre el aire y el agua. Los dioptrios planos, al igual que sucedía con los espejos planos, no tienen foco porque los rayos que inciden paralelos al eje, o equivalentemente, perpendiculares al dioptrio plano, no modifican su dirección.

---

El eje óptico coincide con la normal. En el trazado de rayos se tiene en cuenta únicamente la refracción:

{{< figure library="true" src="optica-2Bach-fisica/dioptrio-plano-1.svg" width="85%" lightbox="false" theme="light" >}}

---

{{< figure library="true" src="optica-2Bach-fisica/dioptrio-plano-2.svg" width="100%" lightbox="false" theme="light" >}}

---

En ambos casos la imagen se sitúa en la misma vertical del objeto, pero en la posición correspondiente a prolongar el rayo refractado. Así, la imagen siempre está en el mismo medio que el objeto y su tamaño es el mismo.

---

##### Resolución numérica

$$
\begin{align*}
y &= y' \\
\frac{s'}{s} &= \frac{n'}{n}
\end{align*}
$$

---

#### Dioptrio esférico

Al igual que sucedía con los espejos, los dioptrios esféricos pueden ser cóncavos o convexos:

{{< figure library="true" src="optica-2Bach-fisica/dioptrio-esferico.svg" width="100%" lightbox="false" theme="light" >}}

---

Para el **trazado de rayos** debe tenerse en cuenta:

- Los rayos paralelos al eje (vienen del infinito) pasan por *F'*.
- Los rayos que pasan por *F* se refractan paralelos al eje.
- Los rayos que pasan por *C* no se desvían al refractarse.

---

##### Dioptrio convexo

{{< figure library="true" src="optica-2Bach-fisica/dioptrio-convexo.svg" title="En este caso, la imagen sería real, invertida y reducida." width="90%" lightbox="false" theme="light" >}}

---

##### Dioptrio cóncavo

{{< figure library="true" src="optica-2Bach-fisica/dioptrio-concavo.svg" title="En este caso, la imagen sería virtual, derecha y reducida." width="65%" lightbox="false" theme="light" >}}

---

No podemos afirmar nada general sobre la imagen. Es necesario analizar cada situación en concreto.

---

##### Resolución numérica

$$
\frac{f}{f'} = - \frac{n}{n'};\qquad \left|f+f'\right| = R
$$

$$
\frac{f'}{s'} + \frac{f}{s} = 1\quad\text{ecuación de Gauss}
$$

$$
m = \frac{y'}{y} = \frac{ns'}{n's}\quad\text{aumento lateral}
$$

---

### Formación de imágenes en lentes delgadas

Una [**lente**](https://es.wikipedia.org/wiki/Lente) es un sistema óptico formado por dos dioptrios al menos uno de los cuales es esférico. Así, la desviación que sufre el rayo al atravesar la lente es consecuencia de las refracciones en ambos dioptrios.

---

Se diferencian dos tipos de lentes:

Lentes convergentes
: A la salida de la lente los rayos convergen. Ejemplos:

{{< figure library="true" src="optica-2Bach-fisica/tipos-lentes-1.svg" width="100%" lightbox="false" theme="light" >}}

---

Lentes divergentes
: A la salida de la lente los rayos divergen. Ejemplos:

{{< figure library="true" src="optica-2Bach-fisica/tipos-lentes-2.svg" width="100%" lightbox="false" theme="light" >}}

---

Que una lente sea convergente o divergente depende únicamente de su geometría. En este bloque siempre consideraremos **lentes delgadas**: son aquellas en las que los centros de los dioptrios coinciden.

---

Así hablaremos de un único centro que tomaremos como origen. Además podemos despreciar el desplazamiento del rayo en su interior (tan delgadas que la desviación dentro es despreciable).

---

Las lentes delgadas se representan:

{{< figure library="true" src="optica-2Bach-fisica/lentes-delgadas.svg" width="100%" lightbox="false" theme="light" >}}

---

En las lentes divergentes los focos están invertidos respecto a las convergentes. En ambos casos *F* y *F'* se encuentran a la misma distancia del centro de la lente (origen):

$$|f| = |f'|$$

---

Para el **trazado de rayos** debe tenerse en cuenta:

- Los rayos paralelos al eje (vienen del infinito) pasan por *F'*.
- Los rayos que pasan por *F* se refractan paralelos al eje.
- Los rayos que pasan por el centro de la lente no se desvían al refractarse.

---

#### Lente convergente

Al igual que sucedía con los dioptrios, no podemos afirmar nada en general. Debemos estudiar cada caso concreto:

{{< figure library="true" src="optica-2Bach-fisica/lente-convergente-1.svg" width="100%" lightbox="false" theme="light" >}}

---

{{< figure library="true" src="optica-2Bach-fisica/lente-convergente-2.svg" width="100%" lightbox="false" theme="light" >}}

---

{{< figure library="true" src="optica-2Bach-fisica/lente-convergente-3.svg" width="85%" lightbox="false" theme="light" >}}

---

#### Lente divergente

En este caso la imagen siempre va a ser virtual, derecha y reducida:

{{< figure library="true" src="optica-2Bach-fisica/lente-divergente.svg" width="50%" lightbox="false" theme="light" >}}

---

#### Resolución numérica

$$
-\frac{1}{s}+\frac{1}{s'} = \frac{1}{f'};\qquad m = \frac{y'}{y} = \frac{s'}{s}
$$

---

En alguna ocasión, para determinar $f'$, pueden darnos las características de los dioptrios que forman la lente. En ese caso se emplea la **fórmula del constructor o fabricante de lentes**:

$$
\frac{1}{f'} = (n'-1)\left(\frac{1}{r_1}-\frac{1}{r_2}\right),
$$

donde $n'$ es el índice de refracción de la lente, $f'$ es la distancia focal imagen y $r_1$ y $r_2$ son los radios del primer y segundo dioptrio, respectivamente.

---

Aprende más sobre **óptica geométrica** y la **formación** de **imágenes** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html?locale=es" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

### Potencia de una lente. Definición de dioptría

La **potencia** de una lente es la capacidad de la lente para hacer converger o diverger los rayos de luz. Se denota por $P$ y viene dada por:

$$
P = \frac{1}{f'}
$$

Es la inversa de la distancia focal imagen y tiene su mismo signo.

---

Por eso, será:

- Positiva en lentes convergentes.
- Negativa en lentes divergentes.

Para expresar la potencia de una lente se emplea la [**dioptría**](https://es.wikipedia.org/wiki/Dioptría), $D$, que es la potencia de una lente cuya distancia focal imagen es de 1&thinsp;m.

---

{{< figure library="true" src="optica-2Bach-fisica/potencia-lente.svg" title="Ilustración de la relación entre la potencia óptica en dioptrías y la distancia focal en metros." width="75%" lightbox="false" theme="light" >}}

{{% /section %}}

---

{{% section %}}

## El ojo y los defectos de la visión

- [El ojo humano](#/3/1)
- [Defectos de la visión](#/3/11)

(continúa hacia abajo)

👇

---

### El ojo humano

El sistema óptico por excelencia es el ojo humano. Como veremos a continuación, está formado por una serie de elementos que lo convierten en un excelente sistema óptico adaptativo.

---

{{< figure library="true" src="optica-2Bach-fisica/ojo-humano.svg" title="Sección del ojo humano." width="100%" lightbox="false" theme="light" >}}

---

<!-- https://animagraffs.com/human-eye/ -->

La [**córnea**](https://es.wikipedia.org/wiki/Córnea) está situada en el frente del ojo y tiene una curvatura abrupta. La luz atraviesa la córnea y alcanza el [**humor acuoso**](https://es.wikipedia.org/wiki/Humor_acuoso), que es un líquido en el que se produce la refracción más acusada de la luz.

---

Después atraviesa el [**iris**](https://es.wikipedia.org/wiki/Iris) (es lo que da color a los ojos). El iris tiene una abertura denominada [**pupila**](https://es.wikipedia.org/wiki/Pupila), que puede cambiar su tamaño y controlar así la cantidad de luz que entra. Es un [**diafragma**](https://es.wikipedia.org/wiki/Diafragma_(óptica)).

---

Después, la luz llega al [**cristalino**](https://es.wikipedia.org/wiki/Cristalino). Es una lente convergente cuya curvatura, y por tanto su distancia focal, puede cambiar para obtener imágenes nítidas de objetos a distintas distancias. A esta capacidad se le denomina [**acomodación**](https://es.wikipedia.org/wiki/Acomodación_(ojo)).

---

Por último, la luz llega a la [**retina**](https://es.wikipedia.org/wiki/Retina), que es la *pantalla* en la que se forma la imagen. La retina contiene células fotorreceptoras ([**conos**](https://es.wikipedia.org/wiki/Cono_(célula)) y [**bastones**](https://es.wikipedia.org/wiki/Bastón_(célula))) que, cuando les llega la luz, generan señales nerviosas que llegan al cerebro a través del [**nervio óptico**](https://es.wikipedia.org/wiki/Nervio_óptico), procesándose la imagen.

---

La pequeña zona de la retina donde nace el nervio óptico carece de células fotorreceptoras y es por ello que se denomina [**punto ciego**](https://es.wikipedia.org/wiki/Punto_ciego).

---

Cuando un ojo sano se encuentra relajado, está enfocando al infinito (en la práctica, alrededor de 5 a 6 metros) o [**punto remoto**](https://es.wikipedia.org/wiki/Punto_remoto) y la imagen se forma en la retina.

---

Para que los objetos más cercanos formen su imagen en la retina, el cristalino cambia su curvatura y su distancia focal, es decir, se acomoda. La acomodación es limitada. El ojo sano no es capaz de enfocar bien objetos muy cercanos.

---

Se llama **punto próximo** al punto más cercano que el ojo puede enfocar. Aunque varía con la edad y con la persona, en promedio suele estar entre 15 y 20&thinsp;cm por delante del ojo.

---

### Defectos de la visión

> Echa un vistazo a los magníficos **pósters** de **Berto Tomás** en el siguiente [**enlace**](https://drive.google.com/drive/folders/1dHvRh2eIV_sq_rNYFG7hitgXkf7hhm9E).

---

Los más comunes son:

- [Miopía](#/3/13)
- [Hipermetropía](#/3/16)
- [Astigmatismo](#/3/20)
- [Presbicia](#/3/22)

(continúa hacia abajo)

👇

---

#### Miopía

Defecto de la visión tal que los que lo padecen no pueden enfocar objetos de lejos (ven mal de lejos). En el ojo miope la imagen del punto remoto se forma antes de la retina. Esto se debe a que el cristalino es excesivamente convergente (demasiado potente) o a que el ojo es demasiado profundo:

---

{{< figure library="true" src="optica-2Bach-fisica/miopia-sin-corregir.svg" width="100%" lightbox="false" theme="light" >}}

---

Para corregirla se colocan lentes divergentes ($P<0$) que compensan la excesiva convergencia y colocan la imagen sobre la retina:

{{< figure library="true" src="optica-2Bach-fisica/miopia-corregida.svg" width="75%" lightbox="false" theme="light" >}}

---

#### Hipermetropía

Defecto de la visión tal que los que lo padecen no pueden enfocar objetos cercanos (ven mal de cerca). En el ojo hipermétrope la imagen de objetos cercanos se forma detrás de la retina. Esto se debe a que el cristalino es poco convergente (poco potente) o a que el ojo es poco profundo:

---

{{< figure library="true" src="optica-2Bach-fisica/hipermetropia-sin-corregir.svg" width="100%" lightbox="false" theme="light" >}}

---

Para corregirla se emplean lentes convergentes ($P>0$) que lo compensan y colocan la imagen sobre la retina:

{{< figure library="true" src="optica-2Bach-fisica/hipermetropia-corregida.svg" width="80%" lightbox="false" theme="light" >}}

---

La hipermetropía, en ocasiones, se corrige con la edad si, debido al crecimiento, el ojo se hace más profundo.

---

#### Astigmatismo

Quien padece de astigmatismo no enfoca bien ni objetos lejanos ni cercanos. El problema reside en que las superficies refractantes del ojo, en especial la córnea, no son esféricas sino que poseen una curvatura diferente. No es un sistema centrado y por eso en la imagen aparecen unos puntos enfocados y otros no. Se corrige con [lentes cilíndricas](https://es.wikipedia.org/wiki/Lente_cilíndrica) (en la práctica [lentes tóricas](https://es.wikipedia.org/wiki/Lente_tórica)).

---

Tanto la miopía, la hipermetropía y el astigmatismo pueden operarse mediante cirugía refractiva corneal con [LASIK](https://es.wikipedia.org/wiki/LASIK):

{{< youtube uCfOOUdkSZA >}}

---

#### Presbicia

Se conoce como *vista cansada* y aparece con la edad. Al igual que en la hipermetropía, las personas con presbicia no pueden enfocar objetos cercanos. Con la edad, los tejidos se van haciendo más rígidos y se va perdiendo poder de acomodación. Así, el punto próximo se va alejando.

---

Para corregirlo se emplean lentes convergentes. La miopía se compensa con la vista cansada, por eso con la edad los miopes tienden a ver mejor.

{{% /section %}}

---

{{% section %}}

## Instrumentos ópticos

Vamos a aplicar lo que hemos visto en [óptica geométrica](#óptica-geométrica) para comprender mejor los intrumentos ópticos. Comenzaremos por los empleados para observar objetos pequeños ([**lupa**](#lupa-microscopio-simple) y [**microscopio compuesto**](#microscopio-compuesto)) y veremos también los empleados para observar objetos lejanos ([**anteojo**](#anteojo) y [**telescopio**](#telescopio)). Además, estudiaremos el fundamento de la [**cámara fotográfica**](#cámara-fotográfica).

---

### Lupa (microscopio simple)

Instrumento empleado para ver objetos pequeños a mayor tamaño. Se trata simplemente de una **lente convergente**:

---

{{< figure library="true" src="optica-2Bach-fisica/lupa.svg" title="Imagen virtual, derecha y aumentada." width="48%" lightbox="false" theme="light" >}}

---

### Microscopio (compuesto)

Instrumento que se emplea para ver aumentados objetos muy próximos y de pequeño tamaño (tiene más aumentos que la lupa). Fue inventado en Holanda en torno al 1600 y está constituido por dos lentes convergentes:

Objetivo
: Es la lente más cercana al objeto y tiene una distancia focal pequeña ($\approx 1\,\mathrm{cm}$).

Ocular
: Es la lente más próxima al ojo y tiene una distancia focal algo mayor.

---

Ambas están separadas por una distancia mucho mayor que las distancias focales:

{{< figure library="true" src="optica-2Bach-fisica/microscopio.svg" width="45%" lightbox="false" theme="light" >}}

---

El objeto a examinar se coloca sobre una pletina a una distancia del objetivo que es mayor que su distancia focal.

---

Así, el objetivo proporciona una primera imagen real, invertida y aumentada. Esta imagen actúa como objeto del ocular, que genera una segunda imagen que es ahora virtual, invertida respecto al objeto original y aumentada de nuevo.

---

De esta forma hay dos aumentos y la imagen obtenida es significativamente mayor que el objeto:

$$
m = -0.25\cdot P_\mathrm{ob}\cdot P_\mathrm{oc}\cdot\delta,
$$
donde $P_\mathrm{ob}$ y $P_\mathrm{oc}$ son las potencias del objetivo y del ocular, respectivamente, $\delta$ es la distancia entre $F_\mathrm{ob}'$ y $F_\mathrm{oc}$ y el factor 0.25 representa el punto próximo estándar expresado en metros.

---

### Anteojo

Se emplea para agrandar la imagen de objetos lejanos al igual que los telescopios. Los anteojos se construyeron primero. A modo de ejemplo, el **anteojo de Galileo** está formado por:

- Objetivo: lente convergente con distancia focal grande.
- Ocular: lente divergente.

---

Están colocados de forma que $F_\mathrm{ob}' = F_\mathrm{oc}$:

{{< figure library="true" src="optica-2Bach-fisica/anteojo.svg" width="100%" lightbox="false" theme="light" >}}

---

Los rayos que proceden de un objeto muy lejano inciden prácticamente con el mismo ángulo, es decir, son paralelos entre sí y forman la imagen en el foco imagen del objetivo, que coincide con el foco objeto del ocular.

---

Los rayos que salen del ocular serán paralelos entre sí y la imagen, que será virtual, derecha y aumentada, se formará en el infinito. En este caso la altura de la imagen final no está definida pero sí el ángulo $\theta'$ bajo el cual se observa ([aumento angular](https://es.wikipedia.org/wiki/Aumento_óptico#Aumento_angular), $\mu$), que viene dado por:

$$
\mu = \frac{\theta'}{\theta} \approx \frac{\tan\theta'}{\tan\theta}  = -\frac{f'_\mathrm{ob}}{f'_\mathrm{oc}}
$$

---

Como la imagen es derecha, este mismo mecanismo se emplea en la observación de objetos terrestres alejados ([catalejo](https://es.wikipedia.org/wiki/Catalejo)).

---

### Telescopio

Al igual que el anteojo, sirve para agrandar la imagen de objetos lejanos. Está formado por:

- Objetivo: lente convergente.
- Ocular: lente convergente.

---

Se colocan cumpliendo $F_\mathrm{ob}' = F_\mathrm{oc}$ para que la primera imagen se forme en el plano focal y la imagen final, virtual, invertida respecto al objeto original y aumentada, de nuevo en el infinito:

{{< figure library="true" src="optica-2Bach-fisica/telescopio.svg" width="100%" lightbox="false" theme="light" >}}

---

Como en el anteojo, el aumento lateral no está definido pero sí el aumento angular $\mu$.

---

### Cámara fotográfica

En su versión más sencilla, una [**cámara fotográfica**](https://es.wikipedia.org/wiki/Cámara_fotográfica) está constituida por los siguientes elementos:

- Objetivo: lente convergente.
- Diafragma (apertura): abertura variable que controla la cantidad de luz que entra en el sistema.
- Obturador: cierre que controla el tiempo durante el cual se colecta la luz.
- Sensor fotográfico: se recoge la intensidad de luz y se procesa la imagen.

---

{{< figure library="true" src="optica-2Bach-fisica/camara.svg" width="100%" lightbox="false" theme="light" >}}

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
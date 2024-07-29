---
title: Campo eléctrico
url: "/recursos-fisica-quimica/apuntes/2bach/fisica/campo-electrico"
subtitle: Naturaleza eléctrica de la materia, electrostática, ley de Coulomb, campo eléctrico y movimiento de cargas
summary: "<code style='color: #2E3440;background:#88C0D0'>NOVEDAD</code><br>Naturaleza eléctrica de la materia, electrostática, ley de Coulomb, campo eléctrico y movimiento de cargas."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","fisica"]
authors:
- marta-rada-arias
- alba-lopez-valenzuela
- leticia-cabezas
tags:
- apuntes
- 2º Bach
- electromagnetismo
- fuerzas
- energía
- movimiento
categories:
- Física
weight: 2

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Gerd Altmann**](https://pixabay.com/es/users/geralt-9301/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Póster
  url: campo-electrico-poster.pdf
- icon_pack: fas
  icon:
  name: 📋 Formulario
  url: campo-electrico-formulario.pdf
- icon_pack: fas
  icon:
  name: ✏️ Ejercicios
  url: campo-electrico-ejercicios.pdf
- icon_pack: fas
  icon:
  name: 🔗 Más ejercicios
  url: https://drive.google.com/file/d/1A2JmO4UcFPFx_Xr6AOxv_KqjRZBmwLe3/view
- icon_pack: fas
  icon:
  name: 📝 Frikiexámenes
  url: campo-electrico-frikiexamenes.pdf
- icon_pack: fas
  icon:
  name: 🎓 Ejercicios EBAU
  url: https://fisiquimicamente.com/recursos-fisica-quimica/ebau/fisica/por-temas/interaccion-electromagnetica/

slides: campo-electrico-2Bach-fisica

math: true

---

{{% toc %}}

## Introducción

En este tema vamos a estudiar la **interacción eléctrica** que, como veréis, es muy similar a la gravitatoria. En lugar de la masa, la responsable de la interacción eléctrica es la [**carga eléctrica**](#carga-eléctrica). Como se trata de nuevo de una [interacción a distancia](https://es.wikipedia.org/wiki/Acción_a_distancia), será necesario introducir el concepto de [**campo eléctrico**](#campo-eléctrico) para explicarla. Veremos también aspectos energéticos del campo eléctrico como el [potencial eléctrico](#potencial-eléctrico), la [energía potencial eléctrica](#energía-potencial-eléctrica) y el [trabajo necesario para desplazar una carga dentro del campo](#trabajo-para-mover-una-carga-en-un-campo-eléctrico).

Antes de todo esto haremos una pequeña introducción histórica en la que veremos cómo se llegó al conocimiento de la [naturaleza eléctrica de la materia](#naturaleza-eléctrica-de-la-materia).

## Naturaleza eléctrica de la materia

Los fenómenos eléctricos eran ya conocidos desde la Antigua Grecia.

### Tales de Mileto

{{< figure library="true" src="campo-electrico-2Bach-fisica/tales.jpg" title="Retrato póstumo de Tales por Wilhelm Meyer, basado en un busto del siglo IV. Fuente: https://commons.wikimedia.org/wiki/File:Illustrerad_Verldshistoria_band_I_Ill_107.jpg." >}}

Observó que, cuando frotaba [ámbar](https://es.wikipedia.org/wiki/Ámbar) (ἤλεκτρον, ḗlektron en griego), este era capaz de atraer pequeños objetos como plumas. A pesar de ser conocidos, los fenómenos de [electrización](https://es.wikipedia.org/wiki/Electrización) no fueron interpretados hasta mucho más adelante.

### Gilbert

{{< figure library="true" src="campo-electrico-2Bach-fisica/gilbert.jpg" title="William Gilbert (1544–1603). Óleo sobre madera. Fuente: https://commons.wikimedia.org/wiki/File:William_Gilbert_45626i.jpg." >}}

En el s. XVI, [Gilbert](https://es.wikipedia.org/wiki/William_Gilbert) descubrió que otras muchas sustancias distintas al ámbar adquirían también esta propiedad atractiva al ser frotadas, denominándolas **eléctricas**.

### s. XVIII

El s. XVIII supuso un enorme avance en el conocimiento de los fenómenos eléctricos.

#### Gray

Descubrió que esa propiedad atractiva podía transmitirse de un cuerpo a otro si se conectaban con determinadas sustancias, en especial metales.

#### Du Fay

Comprobó que esta propiedad podía ser también repulsiva, no únicamente atractiva.

#### Franklin

Propuso el primer modelo de electricidad intentando explicar todas las observaciones. Según su modelo, cada objeto poseía una cantidad *normal* de electricidad. Al frotarse un objeto con otro, transfería parte de la electricidad, quedando con electricidad en defecto y el otro en exceso. Lo más relevante de este modelo es que implica la conservación de la carga y el exceso o defecto se aproxima a la idea de carga positiva o negativa.

{{< spoiler text="¿Sabes que Franklin inventó el pararrayos? Pincha aquí para saber más" >}}
Franklin estaba convencido de que los rayos consistían en descargas eléctricas procedentes de las nubes. Para demostrarlo, hizo volar una cometa en un día de tormenta. Tenía una estructura hecha con varillas metálicas y sujeta por un largo hilo de seda. En la cola había una llave metálica. Echó a volar la cometa y en poco tiempo atrajo un rayo que impactó con el esqueleto metálico y llegó hasta la llave. El experimento puso de manifiesto que los rayos podían ser atraídos por un metal y dirigidos hacia la Tierra, surgiendo así el [**pararrayos**](https://es.wikipedia.org/wiki/Pararrayos), que impidió numerosos accidentes.

{{< figure library="true" src="campo-electrico-2Bach-fisica/franklin.jpg" title="https://fi.edu/en/science-and-education/benjamin-franklin/kite-key-experiment" >}}

{{< /spoiler >}}

#### Coulomb

{{< figure library="true" src="campo-electrico-2Bach-fisica/coulomb.png" title="Retrato de Charles Augustin de Coulomb (1736–1806). Fuente: https://commons.wikimedia.org/wiki/File:Charles_de_Coulomb.png." >}}

Fue quien estableció la [ley que rige la interacción entre cargas eléctricas](#la-fuerza-eléctrica-ley-de-coulomb).

### s. XIX

Supuso un enorme avance en el conocimiento de la electricidad y la materia. El [**descubrimiento** del **electrón** (Thomson y sus rayos catódicos)]({{< relref "apuntes-cuarto-eso/modelos-atomicos/index.md#descubrimiento-del-electrón" >}}) y del [**protón** (Rutherford)]({{< relref "apuntes-cuarto-eso/modelos-atomicos/index.md#descubrimiento-del-núcleo-atómico" >}}), cuya carga era igual a la del electrón pero positiva, fue definitivo. Quedó así establecida la naturaleza eléctrica de la materia: formada por átomos a su vez constituidos por partículas con carga positiva (protones) y con carga negativa (electrones).

Como normalmente el número de protones y de electrones es el mismo, las cargas eléctricas se compensan y los átomos son neutros. Por eso no observamos fácilmente fenómenos eléctricos (hay que hacer algo). Existen diferentes métodos que sirven para romper el equilibrio entre protones y electrones y conseguir que un cuerpo quede cargado: con exceso de electrones (–) o con defecto de electrones (+).

La forma más sencilla es por [**fricción**](https://es.wikipedia.org/wiki/Electrización#Fricción):

- Vidrios con paño de seda (+).
- Plásticos con paño de lana (–).

Para que sea satisfactoria, cualquier teoría o modelo eléctrico debe tener en cuenta todo esto.

## Electrostática

Es una teoría que explica la interacción entre cargas eléctricas, suponiendo que se encuentran en **reposo**.

### Carga eléctrica

Se define como una magnitud física que describe el grado de electrización de un cuerpo y que da lugar a una interacción a distancia distinta a la gravitatoria y más fuerte que esta. Su unidad en el SI es el culombio (C).

### Tipos de cargas eléctricas

Existen dos tipos: positiva y negativa. Sucede que:

- Mismo signo se repelen.
- Signo opuesto se atraen.

### Principios fundamentales de la carga
La carga eléctrica cumple dos principios fundamentales:

Principio de conservación
: La carga neta de un sistema aislado no se crea ni se destruye, solo se transfiere.

Principio de cuantización
: La carga eléctrica está cuantizada. Solo puede tomar valores que sean un múltiplo de la [carga del electrón](https://es.wikipedia.org/wiki/Carga_eléctrica#Carga_eléctrica_elemental), $e \approx 1.6\times10^{-19}\,\mathrm C$:
$$
q = ne, \text{ con }n = \pm 1,\pm 2,\pm 3,\dots
$$


## La fuerza eléctrica: ley de Coulomb

La [**ley de Coulomb**](https://es.wikipedia.org/wiki/Ley_de_Coulomb) afirma:

> Dos cargas eléctricas puntuales se atraen o se repelen con una fuerza que es proporcional a las cargas e inversamente proporcional al cuadrado de la distancia que las separa:
$$
\vec F_\mathrm e = k\frac{q_1q_2}{r^2}\hat{\mathrm r}\quad\text{Unidad en el SI: N (newton)}
$$
donde $\hat{\mathrm r}$ es el vector unitario que va de $q_1$ a $q_2$ y $k=1/\left(4\pi\varepsilon\right)\left(\approx 9\times 10^9\,\mathrm{N}\,\mathrm{m^2}\,\mathrm{C^{-2}}\text{ en el vacío}\right)$ es la constante de Coulomb, siendo $\varepsilon$ la permitividad eléctrica o constante dieléctrica del medio.

{{< spoiler text="Pincha aquí si quieres **saber más** sobre la **medida experimental** de $k$" >}}
La constante $k$ fue determinada experimentalmente por el propio [Coulomb](https://es.wikipedia.org/wiki/Charles-Augustin_de_Coulomb). Para ello, empleó una [balanza de torsión](https://es.wikipedia.org/wiki/Balanza_de_torsión):

{{< figure library="true" src="campo-electrico-2Bach-fisica/medida-k.svg" title="En los extremos de una barra colocó dos esferas cargadas. La barra estaba colgada sobre un hilo de platino de forma que quedara suspendida horizontalmente. Aproximó otra esfera con carga del mismo signo y por repulsión el hilo gira. Calculando el ángulo girado puede obtenerse el valor de $k$. Fuente: https://commons.wikimedia.org/wiki/File:Coulomb_torsion.svg." width="100%" lightbox="false" >}}

{{< /spoiler >}}

{{< figure library="true" src="campo-electrico-2Bach-fisica/ley-coulomb.svg" title="**Ley de Coulomb**. Cumple el [principio de acción-reacción](https://fisiquimicamente.com/recursos-fisica-quimica/apuntes/4eso/fuerzas/#3ª-ley-ley-de-la-acción-reacción): $\vec F_{21}=-\vec F_{12}$. Adaptada de https://tikz.net/coulomb_force/." width="100%" lightbox="false" >}}


Cumple también el [**principio de superposición**](https://es.wikipedia.org/wiki/Principio_de_superposición), por lo que en una distribución de cargas puntuales:
$$
\vec F_\mathrm t = \sum_i \vec F_i
$$

Aprende más sobre la ley de Coulomb con esta excelente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_es.html"
        width="100%"
        height="600"
        allowfullscreen>
</iframe>

## Campo eléctrico

La fuerza eléctrica es un ejemplo de interacción a distancia y para ser explicada resulta necesario considerar el [**campo eléctrico**](https://es.wikipedia.org/wiki/Campo_eléctrico).

### Campo eléctrico creado por una carga puntual

Una carga $Q$ crea en el espacio que la rodea una perturbación denominada campo eléctrico $\vec E$, cuyo valor en un punto P cualquiera situado a una distancia $r$ de $Q$ viene dado por:
$$
\vec E = k\frac{Q}{r^2}\hat{\mathrm r}\quad\text{Unidad en el SI: N/C}
$$

#### Generalización a un sistema de cargas puntuales

El campo eléctrico cumple el **principio de superposición**, por lo que, si se tiene una distribución de cargas puntuales $q_i$, el campo total en un punto es la suma vectorial de los campos que cada carga crea en el punto:
$$
\vec E_\mathrm t = \sum_i \vec E_i
$$

### Relación fuerza-campo

Sea $Q$ una carga eléctrica que crea un campo eléctrico $\vec E$ a su alrededor. Si colocamos otra carga $q$ en el espacio perturbado (en el campo eléctrico), se verá sometida a una fuerza:
$$
\vec F = q\vec E
$$

Si sustituimos $\vec E$ por su expresión obtenemos la [**ley de Coulomb**](#la-fuerza-eléctrica-ley-de-coulomb):
$$
\vec F = q\vec E = q k\frac{Q}{r^2}\hat{\mathrm r} = k\frac{Qq}{r^2}\hat{\mathrm r}
$$

Teniendo en cuenta lo anterior, el campo eléctrico puede utilizarse para separar cargas de distinto signo (en una disolución por ejemplo).

### Potencial eléctrico

Como la **fuerza eléctrica** es **conservativa**, el campo eléctrico puede expresarse en función de un [**potencial eléctrico**](https://es.wikipedia.org/wiki/Potencial_eléctrico) $V$, definido como el trabajo que debe realizar una fuerza para traer la unidad de carga positiva desde el infinito (donde $V=0$ por convenio) hasta un punto P, a velocidad constante:
{{< math >}}
$$
V = \frac{W_{\infty\rightarrow \mathrm P}}{q} = \frac{1}{q}\int_\infty^\mathrm P \vec F\cdot \mathrm d \vec r = \frac{1}{q}\int_\infty^\mathrm P -\frac{kQq}{r^2}\,\mathrm d r = \frac{kQ}{r}\quad\text{Unidad en el SI: $\mathrm{J/C}\equiv \mathrm{V}$ (voltio)}
$$
{{< /math >}}

tal que $\vec E = -\dfrac{\mathrm d V}{\mathrm d r}\,\hat{\mathrm r}$ (en general $\vec E = -\nabla V$, siendo $\nabla$ el operador diferencial vectorial [nabla](https://es.wikipedia.org/wiki/Nabla)), lo que significa que $\vec E$ se dirige siempre hacia valores decrecientes de potencial.

#### Distribución de cargas puntuales

El potencial generado por una distribución de cargas puntuales en un punto es la suma de los potenciales generados por cada una de las cargas en dicho punto:
$$
V_\mathrm t = \sum_i V_i
$$

A diferencia de lo que ocurre con el potencial gravitatorio, el potencial eléctrico generado por varias cargas eléctricas sí puede ser nulo, pues $V$ puede ser positivo o negativo.

### Energía potencial eléctrica

La [energía potencial eléctrica](https://es.wikipedia.org/wiki/Energía_potencial_electrostática), $E_\mathrm p$, es la energía que adquiere una carga $q$ dentro de un campo eléctrico $\vec E$. Se define como el trabajo que debe realizar una fuerza para traer una carga positiva desde el infinito (donde $E_\mathrm p=0$ por convenio) hasta un punto P, a velocidad constante:
$$
E_\mathrm p = W_{\infty\rightarrow \mathrm P} = \int_\infty^\mathrm P \vec F\cdot \mathrm d \vec r = \int_\infty^\mathrm P -\frac{kQq}{r^2}\,\mathrm d r = \frac{kQq}{r}
$$

También se puede calcular a partir del potencial eléctrico $V$:
$$
E_\mathrm p = qV = \frac{kQq}{r}
$$

Puede ser positiva o negativa dependiendo del signo de las cargas y su unidad en el SI es el julio (J).

#### Energía potencial de un sistema de cargas

Es la suma de las energías potenciales que correspondan a todas las parejas distintas que podamos formar:
$$
E_\mathrm p = \sum_{\substack{i,j\\i\neq j}} k\frac{q_iq_j}{r_{ij}}
$$

### Trabajo para mover una carga en un campo eléctrico

Cuando una carga $q$ se mueve libremente dentro de un campo eléctrico, se realiza un trabajo $W_{1\rightarrow 2}$:
{{< math >}}
$$
W_{1\rightarrow 2} = \int_1^2 \vec F\cdot \mathrm d \vec r = \int_1^2 F\,\mathrm d r =\int_1^2 \frac{kQq}{r^2}\,\mathrm d r = -\left. kQq\frac{1}{r}\right |_1^2 = -\frac{kQq}{r_2} + \frac{kQq}{r_1} = -\symup\Delta E_\mathrm p = -q\symup\Delta V,
$$
{{< /math >}}
que solo depende de las posiciones inicial y final, lo que significa que $\vec F_\mathrm e$ es **conservativa**.
{{< math >}}
$$
\begin{cases}
						W=0 & \text{La carga $q$ describe una trayectoria cerrada (o se mueve por una superficie equipotencial).} \\
						W>0 & \text{Proceso espontáneo.}                                                                          \\
						W<0 & \text{Proceso no espontáneo, se requiere una $\vec F_\mathrm{externa}$.}
					\end{cases}
$$
{{< /math >}}

El signo del trabajo dependerá de hacia dónde se desplace la carga $q$ en el seno del campo creado por $Q$.

### Representación del campo eléctrico

Existen dos maneras de representar el campo eléctrico:

#### Líneas de campo

Cumplen:

- El número de líneas por unidad de superficie perpendicular es proporcional a la intensidad del campo. A medida que nos alejamos de la carga, el campo se debilita y las líneas de campo se separan.
- Dirección: son tangentes al campo eléctrico en cada punto.
- Sentido: hacia valores decrecientes de potencial (depende del signo de la carga que crea el campo).
- Pueden ser abiertas (una sola carga puntual o dos cargas del mismo signo) o cerradas (dos cargas de signo contrario).
- Nunca se cortan (implicaría dos valores de campo en un mismo punto, lo que es imposible).

#### Superficies equipotenciales

Son regiones del espacio en las que el potencial eléctrico tiene el mismo valor.
- Son perpendiculares a las líneas de campo.
- Nunca se cortan entre sí (implicaría dos valores de $V$ en un mismo punto).

{{< figure library="true" src="campo-electrico-2Bach-fisica/representacion-E.svg" title="Líneas de campo y superficies equipotenciales de distintas configuraciones de carga. $+q\rightarrow$ fuentes; $-q\rightarrow$ sumideros. Adaptada de https://tikz.net/electric_fieldlines2/." width="100%" lightbox="false" >}}

Aprende más sobre cargas y campos con esta excelente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_es.html"
        width="100%"
        height="600"
        allowfullscreen>
</iframe>

## Campo eléctrico generado por una distribución continua de carga

Hasta ahora hemos considerado el campo eléctrico creado por cargas puntuales. Podemos aproximar que una carga es puntual cuando su tamaño es despreciable frente a la distancia donde se está considerando el campo. Cuando las dimensiones no son despreciables frente a la distancia, resulta necesario considerar la geometría y las características del cuerpo con carga y en ese caso el campo eléctrico se calcula aplicando el [**teorema de Gauss**](https://es.wikipedia.org/wiki/Ley_de_Gauss). Antes de enunciar el teorema hay que definir el [**flujo eléctrico**](https://es.wikipedia.org/wiki/Flujo_eléctrico):
$$
\symup\Phi = \oint_S \vec E \cdot \mathrm d \vec S\quad \left(\symup\Phi = ES\cos\theta\text{ si $\vec E$ es constante}\right)
$$
como el número de líneas de campo que atraviesa la superficie $S$. $\mathrm d \vec S$ es el vector de área normal a la superficie (dirigido hacia fuera). La unidad de $\symup\Phi$ en el SI es el voltio metro (V&thinsp;m), equivalente a <span style="white-space: nowrap">N&thinsp;m^2^&thinsp;C<sup>–1</sup></span>.

### Teorema de Gauss

> El flujo neto que atraviesa una superficie cerrada depende de la carga encerrada por dicha superficie, tal que:
$$
\symup\Phi = \frac{Q_\mathrm{encerrada}}{\varepsilon} = 4\pi k Q_\mathrm{encerrada},
$$
donde $\varepsilon$ es la permitividad eléctrica, con $k=1/\left(4\pi\varepsilon\right)$.

Para aplicar el teorema de Gauss basta con elegir una superficie cerrada cualquiera, pero resulta conveniente elegir una en la que el vector $\vec E$ sea constante y forme un ángulo conocido con $\mathrm d \vec S$ (integral más sencilla).

### Esfera conductora cargada en equilibrio

Al proporcionar cargas a un material [**aislante**](https://es.wikipedia.org/wiki/Aislamiento_eléctrico), estas permanecen en el lugar en el que se depositaron. En el caso de un [**conductor**](https://es.wikipedia.org/wiki/Conductor_eléctrico), sin embargo, se redistribuyen hasta colocarse en posiciones equidistantes de forma que se repelan por igual. Esto hace que una esfera cargada solo tenga carga en su superficie.

{{< figure library="true" src="campo-electrico-2Bach-fisica/esfera-cargada.svg" title="Por simetría, se escoge una superficie de Gauss esférica (en verde). Adaptada de https://tikz.net/electric_field_sphere/." width="100%" lightbox="false" >}}

### Hilo conductor infinito cargado uniformemente

Para calcular el campo eléctrico generado, se escoge una superficie gaussiana cilíndrica. Así, el flujo eléctrico, $\symup\Phi$, puede dividirse en tres contribuciones, dos de ellas para las tapas y otra para la pared. En las tapas, el campo eléctrico es perpendicular al vector diferencial de superficie, mientras que en la pared $\vec E$ es paralelo a $\mathrm d \vec S$ y constante, pues todos los puntos de la pared están a la misma distancia del hilo.

{{< figure library="true" src="campo-electrico-2Bach-fisica/hilo-infinito.svg" title="Un hilo conductor infinito con densidad de carga lineal $\lambda = Q/l$. Por simetría, se escoge una superficie de Gauss cilíndrica (en verde). Adaptada de https://tikz.net/electric_field_rod/." width="100%" lightbox="false" >}}

### Condensador plano-paralelo

Se trata de un dispositivo formado por dos láminas plano-paralelas muy próximas entre sí y con la misma densidad superficial de carga $\sigma =Q/S$.

{{< figure library="true" src="campo-electrico-2Bach-fisica/condensador.svg" title="Se escoge una superficie de Gauss cilíndrica con su eje perpendicular a las placas. Adaptada de https://tikz.net/electric_field_plane/." width="100%" lightbox="false" >}}

En el interior del condensador, ambas placas generan $\vec E$ de igual módulo, dirección y sentido, porque sus cargas son opuestas, reforzándose. El campo total en el interior del condensador es uniforme y su módulo es la suma de ambos campos. Así:
$$
E_\mathrm t = 2E = \frac{\sigma}{\varepsilon}\text{ (constante dentro del condensador, $\perp$ a las placas y sentido de $+$ a $-$)}
$$

{{< figure library="true" src="campo-electrico-2Bach-fisica/condensador-lineas-campo.svg" title="Adaptada de https://tikz.net/capacitors/." width="100%" lightbox="false" >}}

Se cumple además que la diferencia de potencial (en valor absoluto) entre dos puntos es el resultado de multiplicar el módulo del campo por la distancia que los separa:
$$
\left|\symup\Delta V\right| = E_\mathrm t d
$$

Aprende más sobre el funcionamiento de un condensador con esta excelente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_es.html"
        width="100%"
        height="600"
        allowfullscreen>
</iframe>

## Movimiento de cargas en campos eléctricos uniformes

### Velocidad paralela al campo ($\symbf{\vec v_0 \parallel \vec E}$)

Debido a $\vec F_\mathrm e$, la carga $q$ estará sometida a una aceleración en la misma dirección que $\vec E$, dada por:
$$
\begin{aligned}
\vec F  & = \vec F_\mathrm e                               \\
m\vec a & = q\vec E \rightarrow \vec a = \frac{q}{m}\vec E
\end{aligned}
$$

{{< figure library="true" src="campo-electrico-2Bach-fisica/movimiento-cargas-paralelo.svg" title="Notar que si $q$ es negativa, se ve sometida a una fuerza en sentido opuesto al campo, por lo que el movimiento es decelerado. Adaptada de https://tikz.net/electric_field/." width="100%" lightbox="false" >}}

Así, asumiendo $\vec v_0 = v_0\,\hat{\imath}$ y $\vec E = E\,\hat{\imath}$, la carga $q$ describe un [**MRUA**]({{< relref "apuntes-cuarto-eso/movimientos/index.md#movimiento-rectilíneo-uniformemente-acelerado-mrua" >}}) cuyas ecuaciones son:
$$
\begin{aligned}
x & = x_0 + v_0t+\frac{1}{2}\frac{q E}{m}t^2 \\
v & = v_0 + \frac{qE}{m}t
\end{aligned}
$$
donde $q$ se introduce con su signo.

### Velocidad perpendicular al campo ($\symbf{\vec v_0 \perp \vec E}$)

En el eje $x$ no actúa ninguna fuerza ($a_x = 0$) y describe un [**MRU**]({{< relref "apuntes-cuarto-eso/movimientos/index.md#movimiento-rectilíneo-uniforme-mru" >}}), mientras que en el eje $y$ actúa $\vec F_\mathrm e$ de modo que la aceleración puede volver a escribirse vectorialmente en función del campo como $\vec a = q\vec E/m$.

{{< figure library="true" src="campo-electrico-2Bach-fisica/movimiento-cargas-perpendicular.svg" title="Si $q$ es positiva, en esencia es un tiro horizontal. Notar que si $q$ es negativa, se ve sometida a una fuerza en sentido opuesto al campo. Adaptada de https://tikz.net/electric_field/." width="100%" lightbox="false" >}}

Asumiendo $\vec v_0 = v_0\,\hat{\imath}$ y $\vec E = -E\,\hat{\jmath}$:
$$
\begin{aligned}
						\text{Eje $x$ (MRU)}  & \Rightarrow \left\{\begin{aligned}
							                                            x   & = x_0 + v_0t \\
							                                            v_x & = v_0
						                                            \end{aligned}\right.                                    \\[1.5ex]
						\text{Eje $y$ (MRUA)} & \Rightarrow \left\{\begin{aligned}
							                                            y   & = y_0 - \dfrac{1}{2}\dfrac{qE}{m}t^2 \\[1ex]
							                                            v_y & = -\dfrac{qE}{m}t
						                                            \end{aligned}\right.
\end{aligned}
$$
donde $q$ se introduce con su signo.

### Conservación de la energía mecánica

En este tipo de problemas también es necesario tener en cuenta que la **energía mecánica se conserva**. Del [**teorema de las fuerzas vivas**](https://es.wikipedia.org/wiki/Teorema_de_la_energía_cinética), $W_{1\rightarrow 2} = \symup\Delta E_\mathrm c$, pero también $W_{1\rightarrow 2} = -\symup\Delta E_\mathrm p$, por lo que:
$$
\begin{aligned}
					\symup\Delta E_\mathrm c & = -\symup\Delta E_\mathrm p\Rightarrow \symup\Delta E_\mathrm c + \symup\Delta E_\mathrm p = 0 \Rightarrow \symup\Delta E = 0  \\
					\symup\Delta E_\mathrm c & = -q\symup\Delta V\ \left(\left|\symup\Delta E_\mathrm c\right| = \left|q\right|Ed\text{ en un condensador plano}\right)
\end{aligned}
$$
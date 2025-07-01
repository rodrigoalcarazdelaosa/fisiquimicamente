---
title: Interacción gravitatoria
url: "/recursos-fisica-quimica/apuntes/2bach/fisica/interaccion-gravitatoria"
subtitle: Modelos cosmológicos, leyes de Kepler, ley de gravitación universal, momento angular y campo gravitatorio
summary: "Modelos cosmológicos. Leyes de Kepler. Ley de gravitación universal. Momento angular. Campo gravitatorio."
breadcrumbs: ["recursos-fisica-quimica", "apuntes", "2bach", "fisica"]
authors:
  - marta-rada-arias
  - rodrigo-alcaraz-de-la-osa
  - leticia-cabezas
tags:
  - apuntes
  - 2º Bach
  - movimiento
  - fuerzas
  - energía
  - gravitación
categories:
  - Física
weight: 1

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**NASA**](https://unsplash.com/@nasa) en [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
  - icon_pack: fas
    icon:
    name: 📜 Póster
    url: interaccion-gravitatoria-poster.pdf
  - icon_pack: fas
    icon:
    name: 🔗 Ejercicios
    url: https://drive.google.com/file/d/1foYvLMa5Hyc-JgSWDS2EoEiNQe_3ngVw/view
  - icon_pack: fas
    icon:
    name: 📝 Frikiexámenes
    url: interaccion-gravitatoria-frikiexamenes.pdf
  - icon_pack: fas
    icon:
    name: 🎓 Ejercicios EBAU
    url: https://fisiquimicamente.com/recursos-fisica-quimica/ebau/fisica/por-temas/interaccion-gravitatoria/

slides: interaccion-gravitatoria-2Bach-fisica

math: true
---

{{% toc %}}

## Introducción

Una de las cosas que más ha intrigado a la humanidad desde los comienzos de la civilización ha sido el movimiento de los cuerpos celestes. El intento por entender el movimiento del Sol, la Luna, las estrellas y los planetas es tan antiguo como su propia observación.

{{< spoiler text="Pincha aquí para saber más sobre el **movimiento aparente**" >}}
Aparentemente, todos los objetos celestes giran en torno a la [estrella polar](https://es.wikipedia.org/wiki/Estrella_polar) a lo largo de la noche.

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/movimiento-aparente.jpg" title="https://depositphotos.com/photo/bright-traces-stars-revolving-polar-star-form-circular-tracks-glow-201868948.html" >}}

Si observáis alguna estrella que no titila, se trata de un [planeta](https://es.wikipedia.org/wiki/Planeta), del griego πλανήτης (errante). Los que más brillan son [Venus](<https://es.wikipedia.org/wiki/Venus_(planeta)>) y [Júpiter](<https://es.wikipedia.org/wiki/Júpiter_(planeta)>) (con prismáticos pueden verse incluso 4 de sus [lunas](https://es.wikipedia.org/wiki/Satélites_de_Júpiter)). Se ven mejor al amanecer o al atardecer, de ahí el nombre [_lucero del alba_](https://es.wikipedia.org/wiki/Lucero_del_alba) o _estrella de la mañana_ para Venus. Los planetas que se observan se sitúan sobre una misma línea, conocida como la [eclíptica](https://es.wikipedia.org/wiki/Eclíptica), y las constelaciones que pasan por la eclíptica son las del [zodiaco](https://es.wikipedia.org/wiki/Zodiaco).
{{< /spoiler >}}

Se sabe que los babilonios eran hábiles astrónomos y podían predecir el movimiento de los cuerpos celestes e incluso predecir eclipses (hace casi 4&thinsp;000 años).

## Modelos cosmológicos

### Aristóteles (350 a. C.)

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/aristoteles.jpg" title="Busto de Aristóteles en Roma, Palazzo Altemps. Fuente: https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg." >}}

Era un [**modelo geocéntrico**](https://es.wikipedia.org/wiki/Teoría_geocéntrica), con la Tierra en el centro del Universo, rodeada por esferas transparentes de distintos tamaños en las que se encontraban los diferentes planetas. La esfera más externa era en la que se encontraban las estrellas fijas. Dicha esfera giraba a un ritmo constante en torno a un eje que pasaba por la estrella polar. Su movimiento era transmitido a las esferas de planetas más externos por rozamiento y así sucesivamente. Era, por tanto, un **universo mecánico**.

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/modelo-aristoteles.jpg" title="https://depositphotos.com/vector/geocentric-model-of-the-universe-95606762.html" >}}

Como el mundo celeste era perfecto, los objetos en él solo podían describir órbitas circulares puesto que el círculo era el símbolo de la perfección. Este modelo podía explicar muchas de las observaciones, pero no explicaba, por ejemplo:

- Variaciones observadas en el brillo del Sol (debidas a cambios en la distancia a la Tierra).
- [Movimientos retrógrados](https://es.wikipedia.org/wiki/Retrogradación_de_los_planetas) observados en algunos planetas que, aparentemente, cambian el sentido de su movimiento.

### Aristarco de Samos (300 a. C.)

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/aristarco.jpg" title="Busto de Aristarco de Samos. Fuente: https://commons.wikimedia.org/wiki/File:Aristarchus_of_Samos.jpg." >}}

No se suele mencionar pero fue el [**primer modelo heliocéntrico**](https://es.wikipedia.org/wiki/Teoría_heliocéntrica). En su modelo, el Sol se situaba en el centro del Universo y el resto de los planetas giraban en torno a él en órbitas circulares de distintas dimensiones. El modelo de Aristarco también suponía que la Tierra describía un [movimiento de rotación](https://es.wikipedia.org/wiki/Rotación_de_la_Tierra) alrededor de su eje que permitía explicar fácilmente el día y la noche. A pesar de que este modelo era bastante acertado, no prosperó por razones de índole filosófica:

- [**Paralaje**](https://es.wikipedia.org/wiki/Paralaje) de las **estrellas fijas**: deberían verse en diferente posición dependiendo de la época del año. Aristarco lo justificó de forma esencialmente correcta: dado que la distancia a las estrellas es mucho mayor que el diámetro de la órbita terrestre, no se aprecia paralaje.

- **Implicaciones mecánicas** del movimiento de **rotación terrestre**. Si arrojamos una piedra desde una torre, no debería caer en su base, sino a cierta distancia, pero las observaciones no se correspondían. Esto era una afirmación claramente errónea, pero para comprenderlo se necesitaba conocer el principio de inercia de Galileo (lo que más tarde sería la [1ª ley de Newton]({{< relref "apuntes-cuarto-eso/fuerzas/index.md#1ª-ley-ley-de-la-inercia" >}})), desconocido para los griegos.

### Ptolomeo (100 d. C.)

Propuso un modelo también [**geocéntrico**](https://es.wikipedia.org/wiki/Teoría_geocéntrica) introduciendo ciertas variaciones al modelo de Aristóteles, como que los planetas podían describir movimientos circulares o una composición de estos. Para ello, introdujo varios artificios matemáticos, como los [**epiciclos**](https://es.wikipedia.org/wiki/Epiciclo), el **deferente** y el [**ecuante**](https://es.wikipedia.org/wiki/Ecuante). Encajando todos estos artificios, Ptolomeo consiguió un sistema útil[^1] para astrónomos y navegantes, que perduró más de 14 siglos.

[^1]: Aunque muy complejo. Por ejemplo, para los 7 cuerpos celestes conocidos (Sol, Luna, Mercurio, Venus, Marte, Júpiter y Saturno), se necesitaban más de 70 movimientos simultáneos.

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/modelo-ptolomeo.svg" title="Los elementos básicos del modelo de Ptolomeo, mostrando un planeta en un [epiciclo](https://es.wikipedia.org/wiki/Epiciclo) (círculo discontinuo más pequeño), un deferente (círculo discontinuo más grande), el excéntrico (X) y un punto [ecuante](https://es.wikipedia.org/wiki/Ecuante) (punto negro agrandado). El centro del deferente es X, pero el movimiento angular del epiciclo es aparentemente acorde solo respecto al punto (·), que es el ecuante. El deferente es el recorrido circular que describe el centro del epiciclo. El ecuante es el punto en torno al cual se mueve el planeta en su trayectoria, aparentemente. Adaptada de https://commons.wikimedia.org/wiki/File:Ptolemaic_elements.svg." width="100%" lightbox="false" >}}

### Copérnico (s. XV)

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/copernico.jpg" title="Nicolás Copérnico (retrato en el ayuntamiento de Toruń, c. 1580). Fuente: https://commons.wikimedia.org/wiki/File:Nikolaus_Kopernikus.jpg." >}}

Propuso un [**modelo heliocéntrico**](https://es.wikipedia.org/wiki/Teoría_heliocéntrica) igual que el de [Aristarco](#aristarco-de-samos-300-a-c) (Sol en el centro con planetas orbitando alrededor y rotación de la Tierra). Este modelo explicaba de forma mucho más sencilla los [movimientos retrógrados](https://es.wikipedia.org/wiki/Retrogradación_de_los_planetas), que eran causados por la combinación entre el movimiento terrestre y el de los planetas. Presentaba varias **ventajas** sobre el geocéntrico:

- Simplicidad: se requieren muchos menos movimientos para explicar las observaciones.
- Modelo único: todos los planetas se ajustan de igual forma al modelo.

Sin embargo, tardó más de un siglo en ser aceptado por el rechazo a perder la cosmología aristotélica, los dogmas y porque no existía ninguna observación que un modelo geocéntrico no pudiera explicar.

### Galileo (s. XVI)

{{% callout note %}}
**Aprende más** sobre **Galileo Galilei** echando un vistazo a su **biografía científica** en nuestra sección de [**Historia de la Ciencia**](https://fisiquimicamente.com/recursos-fisica-quimica/historia-ciencia/).
{{% /callout %}}

Perfeccionó el [telescopio](https://es.wikipedia.org/wiki/Telescopio) y esto permitió mejorar enormemente las observaciones. Así, descubrió las fases de Venus, que únicamente podían ser explicadas de forma satisfactoria considerando un modelo heliocéntrico (se consideró la prueba empírica definitiva).

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/telescopio-galileo.jpg" title="Dos de los primeros telescopios de Galileo; en el Museo Galileo, Florencia. Fuente: https://www.britannica.com/biography/Galileo-Galilei/Telescopic-discoveries." >}}

### Kepler (s. XVI–XVII)

Estableció las [tres leyes](#leyes-de-kepler) que llevan su nombre, con las que fue de capaz de explicar a la perfección las observaciones.

En este **vídeo**, [**Timothy Rowe**](https://www.youtube.com/@_TimothyRowe/) nos explica (en inglés) los fundamentos y problemas de la astronomía ptolemaica, así como la propuesta de Copérnico (basada en la de Aristarco) y la ayuda de Kepler (órbitas elípticas):

{{< youtube F3Ycj1VbB_k >}}

## Leyes de Kepler

Constituyen una descripción cinemática del Sistema Solar y consiguen explicar de forma muy precisa todas las observaciones relativas no solo al movimiento de planetas, sino también de [asteroides](https://es.wikipedia.org/wiki/Asteroide), [cometas](https://es.wikipedia.org/wiki/Cometa) y [satélites](https://es.wikipedia.org/wiki/Satélite_natural) (incluso [artificiales](https://es.wikipedia.org/wiki/Satélite_artificial)).

### 1ª ley: órbitas elípticas

> Los planetas giran en torno al Sol describiendo **órbitas elípticas**, con el Sol situado en uno de los focos.

### 2ª ley: ley de las áreas

> Los planetas se mueven con [velocidad areolar](https://es.wikipedia.org/wiki/Velocidad_areolar) constante, es decir, el radio vector barre áreas iguales en tiempos iguales.

$$
\frac{\mathrm d A}{\mathrm d t} = \text{constante}
$$

### 3ª ley: ley de los periodos

> El cuadrado del periodo orbital de los planetas es directamente proporcional al cubo de su distancia media al Sol.

$$
\frac{T^2}{r^3} = \text{constante}
$$

donde $r\rightarrow a$ (semieje mayor) si la órbita es elíptica.

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/leyes-kepler.svg" title="Diagrama que ilustra las **leyes de Kepler**. Traducida y adaptada de https://commons.wikimedia.org/wiki/File:Kepler_laws_diagram.svg." width="100%" lightbox="false" >}}

**Explora** las **leyes** de **Kepler** con esta magnífica **simulación**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/keplers-laws/latest/keplers-laws_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Ley de gravitación universal de Newton

Teniendo en cuenta las leyes de Kepler, Newton llegó a la conclusión de que el movimiento de los planetas era debido a una fuerza de atracción proporcional a la masa del planeta ($m$) y del Sol ($M$) e inversamente proporcional al cuadrado de la distancia que los separa ($r$):

$$
\vec F_\mathrm g = -\frac{GMm}{r^2}\,\hat{\mathrm r}\quad\text{Unidad en el SI: N (newton)}
$$

donde $\hat{\mathrm r}$ es el [vector unitario](https://es.wikipedia.org/wiki/Vector_unitario) que va de $M$ a $m$ y $G = 6.67\times 10^{11}\,\mathrm N \,\mathrm m^2\,\mathrm{kg}^{-2}$ es la [constante de gravitación universal](https://es.wikipedia.org/wiki/Constante_de_gravitación_universal), determinada experimentalmente por [Henry Cavendish](https://es.wikipedia.org/wiki/Henry_Cavendish) en 1798 utilizando una [balanza de torsión](https://es.wikipedia.org/wiki/Balanza_de_torsión).

{{< spoiler text="Pincha aquí si quieres **saber más** sobre la **medida experimental** de $G$" >}}
La constante de gravitación universal, $G$, fue determinada experimentalmente 100 años después de Newton por el científico británico y francés [Henry Cavendish](https://es.wikipedia.org/wiki/Henry_Cavendish). Para ello, empleó una [balanza de torsión](https://es.wikipedia.org/wiki/Balanza_de_torsión):

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/experimento-Cavendish.svg" title="Diagrama de la balanza de torsión utilizada en el experimento de Cavendish, realizado por el propio Henry Cavendish en 1798. Se midió la fuerza de gravedad entre las masas *M* y *m*, calculándose la densidad de la Tierra. Etiquetas: (*M*) masa de las bolas de plomo estacionarias, (*m*) masa de las bolas de plomo móviles, (*F*) fuerza gravitacional entre cada par de bolas, ($θ$) ángulo de equilibrio respecto a posición neutra, (*κ*) módulo de torsión del alambre, (*r*) distancia entre los centros de las bolas cuando están en equilibrio, (*L*) distancia entre el alambre y cada una de las bolas pequeñas (longitud de la varilla: 2*L*). Adaptada de https://commons.wikimedia.org/wiki/File:Cavendish_Torsion_Balance_Diagram-es.svg." width="100%" lightbox="false" >}}

{{< /spoiler >}}

**Experimenta** con este **laboratorio** de **fuerza** de **gravedad**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

Esta ley no solo es aplicable a cuerpos celestes, sino que también se cumple para dos masas cualesquiera (caída de cuerpos). Se conoce como [**ley de gravitación universal**](https://es.wikipedia.org/wiki/Ley_de_gravitación_universal) y es revolucionaria por muchas razones:

- Ruptura de la barrera cielo-Tierra.
- Acción a distancia.

También es aplicable a un conjunto de [masas puntuales](https://es.wikipedia.org/wiki/Masa_puntual), pues cumple el [**principio de superposición**](https://es.wikipedia.org/wiki/Principio_de_superposición):

$$
\vec F_\mathrm t = \sum_i \vec F_i
$$

### Relación con la 3ª ley de Kepler

En el movimiento de un planeta alrededor del Sol, la fuerza gravitatoria actúa como [fuerza centrípeta](https://es.wikipedia.org/wiki/Fuerza_centrípeta). Suponiendo una órbita circular, podemos relacionar la velocidad orbital con el periodo, $v = 2\pi r/T$:

$$
\begin{aligned}
F_\mathrm g             & = F_\mathrm c                                \\
					\frac{GM\cancel m}{r^2} & = \frac{\cancel mv^2}{r}                     \\
					\frac{GM}{r^2}          & = \frac{4\pi^2 r^{\cancel 2}}{T^2 \cancel r} \\
					\frac{T^2}{r^3}         & = \frac{4\pi^2}{GM}
\end{aligned}
$$

Esto nos permite determinar la masa de un planeta conociendo el periodo y el radio orbital de uno de sus satélites:

$$
M = \frac{4\pi^2r^3}{GT^2}
$$

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/gravitacion-kepler.svg" title="Adaptada de https://www.nagwa.com/en/explainers/536169674242/." width="100%" lightbox="false" >}}

## Momento angular

Newton demostró que la fuerza gravitatoria es una [**fuerza central**](https://es.wikipedia.org/wiki/Fuerza_central), ya que está dirigida hacia un centro fijo (como el Sol) y depende únicamente de la distancia al mismo. Cuando las fuerzas son centrales, existe una magnitud, llamada [**momento angular**](https://es.wikipedia.org/wiki/Momento_angular), que se conserva, lo que facilita enormemente la descripción de muchos fenómenos asociados. Recordando que el momento lineal $\vec p = m\vec v$ representa la _inercia_ en un movimiento de traslación, se define el momento angular como la magnitud análoga para la rotación:

$$
\vec L = \vec r\times \vec p = \vec r\times m\vec v\quad\text{Unidad en el SI: $\mathrm{kg\,m^2/s}$}
$$

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/momento-angular.svg" title="Adaptada de https://tikz.net/dynamics_angular_momentum/." width="100%" lightbox="false" >}}

### Conservación del momento angular

Una magnitud se conserva cuando permanece constante, es decir, no cambia con el tiempo. Estudiemos la variación de $\vec L$ con el tiempo para ver en qué circunstancias se conserva:

{{< math >}}
$$
\frac{\mathrm d \vec L}{\mathrm d t} = \frac{\mathrm d}{\mathrm d t}\left(\vec r\times m\vec v\right) = \frac{\mathrm d \vec r}{\mathrm d t}\times m\vec v + \vec r\times m\frac{\mathrm d \vec v}{\mathrm d t} = \cancelto{0}{\vec v \times m \vec v} + \vec r\times m\vec a = \vec r\times \vec F
$$
{{< /math >}}

$\vec L$ se conserva si su variación con el tiempo es cero:

{{< math >}}
$$
\frac{\mathrm d \vec L}{\mathrm d t} = \vec r\times \vec F = 0 \Leftrightarrow \begin{cases}
\vec F = 0 & \text{La fuerza neta que actúa sobre el cuerpo es cero.} \\
\vec r\parallel \vec F & \text{Sucede en fuerzas centrales.}
\end{cases}
$$
{{< /math >}}

### Movimientos planetarios

La conservación de $\vec L$ implica:

- Dirección de $\vec L$ no cambia $\Rightarrow$ órbitas planas (plano $\perp$ a $\vec L$).
- Sentido de $\vec L$ no cambia $\Rightarrow$ planetas siempre giran en el mismo sentido.
- Módulo de $\vec L$ es constante:

  $$
  \begin{aligned}
  L_1 &= L_2 \\
  r_1 \cancel mv_1\sin\theta_1 &= r_2 \cancel mv_2\sin\theta_2
  \end{aligned}
  $$

  En órbitas circulares: $r_1 = r_2; \theta_1 = \theta_2 = 90&deg;\Rightarrow v_1 = v_2$ ($v$ constante).

  En órbitas elípticas: $r_\mathrm pv_\mathrm p = r_\mathrm av_\mathrm a$ (p $\rightarrow$ [periastro](https://es.wikipedia.org/wiki/Periastro), a $\rightarrow$ [apoastro](https://es.wikipedia.org/wiki/Apoastro)).

  {{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/periastro-apoastro.svg" title="En una órbita elíptica, el [periastro](https://es.wikipedia.org/wiki/Periastro) es el punto donde la distancia entre los cuerpos es mínima, mientras que el [apoastro](https://es.wikipedia.org/wiki/Apoastro) es el punto más alejado de su centro gravitatorio. Adaptada de https://commons.wikimedia.org/wiki/File:Apogee_(PSF)_mul.svg." width="100%" lightbox="false" theme="light" >}}

### 2ª ley de Kepler

La conservación de $\vec L$ también explica la [2ª ley de Kepler](#2ª-ley-ley-de-las-áreas). El área barrida en $\mathrm d t$ se puede aproximar por el área de un triángulo isósceles:

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/kepler-L.svg" title="Adaptada de https://tikz.net/kepler-second-law/." width="100%" lightbox="false" >}}

\[
\mathrm d A =\frac{1}{2}r\cdot r\sin\mathrm d \theta \ \simeq \frac{1}{2}r^2\mathrm d \theta
\]
\[
\frac{\mathrm d A}{\mathrm d t} = \frac{1}{2}r^2\frac{\mathrm d \theta}{\mathrm d t} = \frac{1}{2}r^2\omega = \frac{1}{2}rv = \frac{L}{2m}
\]

## Campo gravitatorio

La ley de gravitación universal introdujo la idea de [acción a distancia](https://es.wikipedia.org/wiki/Acción_a_distancia). ¿Cómo puede un objeto influenciar a otro sin estar en contacto con él? Hubo varios intentos de explicar cómo se producía la interacción a distancia. Algunos científicos afirmaban que existía una sustancia llamada [éter](<https://es.wikipedia.org/wiki/Éter_(elemento)>) que llenaba el vacío (_fluido_) y era la responsable de transmitir la interacción. Este éter no se sabía de qué estaba hecho y su existencia no podía demostrarse experimentalmente, pero se mantuvo durante algún tiempo.

Científicos posteriores demostraron que la interacción a distancia se producía también en el vacío, por lo que la existencia del éter no era necesaria. Finalmente, [Einstein](https://es.wikipedia.org/wiki/Albert_Einstein) justificó la acción a distancia por una perturbación en el [espacio-tiempo](https://es.wikipedia.org/wiki/Espacio-tiempo) debida a la presencia de una masa. Dicha perturbación se denominó [**campo gravitatorio**](https://es.wikipedia.org/wiki/Campo_gravitatorio).

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/espacio-tiempo.jpg" title="Representación artística que visualiza el espacio-tiempo como una superficie bidimensional simplificada, que está siendo distorsionada por la presencia de tres cuerpos masivos, representados como esferas de colores. La distorsión causada por cada esfera es proporcional a su masa. Fuente: https://www.esa.int/ESA_Multimedia/Images/2015/09/Spacetime_curvature." >}}

### Campo gravitatorio creado por una masa puntual

El campo gravitatorio $\vec g$ creado por una [masa puntual](https://es.wikipedia.org/wiki/Masa_puntual) $M$ en un punto cualquiera que se encuentra a una distancia $r$ de ella viene dado por:

$$
\vec g = -\frac{GM}{r^2}\,\hat{\mathrm r}
$$

y se mide en N/kg o m/s^2^ en el SI.

#### Distribución de masas puntuales

Cuando en una misma región del espacio existen varias ($n$) masas puntuales, el campo gravitatorio total es la suma vectorial de los campos creados por cada una de las masas, resultado que se conoce como [**principio de superposición**](https://es.wikipedia.org/wiki/Principio_de_superposición):
\[
\vec g_\mathrm t = \sum_{i=1}^n \vec g_i = \sum_{i=1}^n \left(-\frac{GM_i}{r_i^2}\,\hat{\mathrm r}_i\right)
\]

### Relación fuerza-campo

La fuerza $\vec F_\mathrm g$ que actúa sobre una masa $m$ colocada en un punto del espacio en el que existe un campo gravitatorio $\vec g$ viene dada por:
\[
\vec F_\mathrm g = m\vec g,
\]
expresión que coincide con la [**ley de gravitación universal de Newton**](#ley-de-gravitación-universal-de-newton):
\[
\vec F_\mathrm g = m\vec g = -m\frac{GM}{r^2}\,\hat{\mathrm r} = -\frac{GMm}{r^2}\,\hat{\mathrm r}
\]

### Potencial gravitatorio

Como la **fuerza gravitatoria** es [**conservativa**](https://es.wikipedia.org/wiki/Fuerza_conservativa), el campo gravitatorio $\vec g$ puede expresarse en función de un [potencial gravitatorio](https://es.wikipedia.org/wiki/Potencial_gravitatorio) $V$, definido como el trabajo por unidad de masa que debe realizar una fuerza para traer un cuerpo desde el infinito (donde $V=0$ por convenio) hasta un punto P, a velocidad constante:
{{< math >}}
\[
V = \frac{W_{\infty\rightarrow \mathrm P}}{m} = \frac{1}{m}\int_\infty^\mathrm P \vec F\cdot \mathrm d \vec r = \frac{1}{m}\int_\infty^\mathrm P \frac{GMm}{r^2}\,\mathrm d r = -\frac{GM}{r}\quad\text{Unidad en el SI: J/kg}
\]
{{< /math >}}
tal que $\vec g = -\dfrac{\mathrm d V}{\mathrm d r}\,\hat{\mathrm r}$ (en general $\vec g = -\nabla V$, siendo $\nabla$ el operador diferencial vectorial [nabla](https://es.wikipedia.org/wiki/Nabla)).

#### Distribución de masas puntuales
El potencial generado por una distribución de masas puntuales en un punto es la suma de los potenciales generados por cada una de las masas en dicho punto:
\[
V_\mathrm t = \sum_{i=1}^n V_i = \sum_{i=1}^n \left(-\frac{GM_i}{r_i}\right)
\]
El potencial gravitatorio generado por varias masas puntuales nunca puede ser nulo ($V<0$ siempre).

### Energía potencial gravitatoria

La energía potencial gravitatoria, $E_\mathrm p$, es la energía que adquiere una masa $m$ dentro de un campo gravitatorio $\vec g$. Se define como el trabajo que debe realizar una fuerza para traer un cuerpo desde el infinito (donde $E_\mathrm p=0$ por convenio) hasta un punto P, a velocidad constante:
{{< math >}}
\[
E_\mathrm p = W_{\infty\rightarrow \mathrm P} = \int_\infty^\mathrm P \vec F\cdot \mathrm d \vec r = \int_\infty^\mathrm P \frac{GMm}{r^2}\,\mathrm d r = -\frac{GMm}{r}\quad\text{Unidad en el SI: J}
\]
{{< /math >}}

También se puede calcular a partir del potencial gravitatorio:
\[
E_\mathrm p = mV = -\frac{GMm}{r}
\]
El signo $-$ indica que la masa está ligada al campo gravitatorio (si $E_\mathrm p > 0$ estaría fuera del campo).

{{< spoiler text="Pero entonces, ¿por qué en cursos anteriores $E_\mathrm p = mgh$?" >}}

Esta expresión representa la variación de energía potencial cuando se eleva un cuerpo desde la superficie de la Tierra hasta una cierta altura $h\ll R_\mathrm T$, de forma que el campo gravitatorio puede considerarse constante. La variación de energía potencial gravitatoria viene dada por:
$$
\Delta E_\mathrm p = GM_\mathrm Tm\left(\frac{1}{R_\mathrm T}-\frac{1}{R_\mathrm T + h}\right) = GM_\mathrm Tm\frac{h}{R_\mathrm T\left(R_\mathrm T+h\right)}
$$

Imponiendo $h\ll R_\mathrm T \rightarrow R_\mathrm T+h \approx R_\mathrm T$ y con $g_0 = GM_\mathrm T/R_\mathrm T^2$:
$$
\Delta E_\mathrm p \approx GM_\mathrm T m \frac{h}{R_\mathrm T^2} = m g_0 h
$$

{{< /spoiler >}}

### Trabajo realizado por la fuerza gravitatoria

Cuando una masa $m$ se mueve libremente dentro de un campo gravitatorio, se realiza un trabajo $W_{1\rightarrow 2}$ tal que:
{{< math >}}
\[
\begin{aligned}
W_{1\rightarrow 2} = \int_1^2 \vec F\cdot \mathrm d \vec r = \int_1^2 -F\,\mathrm d r &= \int_1^2 -\frac{GMm}{r^2}\,\mathrm d r \\
&= \left. GMm\frac{1}{r}\right |_1^2 = \frac{GMm}{r_2} - \frac{GMm}{r_1} =-\symup\Delta E_\mathrm p = -m\symup\Delta V,
\end{aligned}
\]
{{< /math >}}
que solo depende de las posiciones inicial y final, lo que significa que $\vec F_\mathrm g$ es **conservativa**.
{{< math >}}
\[
\begin{cases}
W=0 & \text{La masa $m$ describe una trayectoria cerrada (o se mueve por una superficie equipotencial).}     \\
W>0 & \text{La masa $m$ se acerca a $M$, desplazándose hacia $V$ decrecientes (proceso espontáneo).}         \\
W<0 & \text{La masa $m$ se aleja de $M$ (proceso no espontáneo, se requiere una $\vec F_\mathrm{externa}$).}
\end{cases}
\]
{{< /math >}}

### Representación del campo gravitatorio

Existen dos maneras de representar el campo gravitatorio:

#### Líneas de campo

Son tangentes al campo gravitatorio en cada punto. Cumplen que:

- El número de líneas es proporcional a la intensidad del campo gravitatorio.
- Son siempre abiertas.
- Nunca se cortan (supondría que en un mismo punto habría dos valores de campo, lo que es imposible).

#### Superficies equipotenciales

Son regiones en las que el potencial gravitatorio tiene el mismo valor. Cumplen que:

- Nunca se cortan.
- Siempre son perpendiculares a las líneas de campo.

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/representacion-g.svg" title="Campo gravitatorio producido por dos masas distintas (siendo la masa de la izquierda el doble que la de la derecha). Campo vectorial (líneas de campo en rojo) y su campo potencial escalar asociado (azul). Se observan los [lóbulos de Roche](https://es.wikipedia.org/wiki/Lóbulo_de_Roche), característicos de [sistemas binarios](https://es.wikipedia.org/wiki/Estrella_binaria). El punto P es el punto libre de fuerzas (equivalente al [punto de Lagrange L<sub>1</sub>](https://es.wikipedia.org/wiki/Puntos_de_Lagrange) en un sistema en rotación), donde las superficies equipotenciales serían prácticamente tangentes entre sí. Adaptada de https://tex.stackexchange.com/questions/392942/how-to-draw-force-lines-onto-an-equipotential-contour-plot-using-tikz." width="100%" lightbox="false" >}}

### Campo gravitatorio creado por distribuciones esféricas de masa

Hasta ahora hemos visto el campo creado por masas puntuales, sin extensión. Podemos aproximar que una masa es puntual cuando sus dimensiones son mucho menores que la distancia considerada. Es decir, cuando trabajamos en regiones del campo que están alejadas de la masa que lo genera; por ejemplo, en el Sistema Solar. Cuando las dimensiones no son despreciables frente a la distancia, hay que considerar el tamaño y la geometría del objeto. Esto sucede, por ejemplo, cuando consideramos el campo en la superficie de terrestre o en sus proximidades.

En ese caso, para el cálculo de $\vec g$ se requiere emplear un teorema matemático: el [**teorema de Gauss**](https://es.wikipedia.org/wiki/Ley_de_Gauss). Antes de enunciar el teorema hay que definir el [**flujo**](https://es.wikipedia.org/wiki/Flujo) $\symup\Phi = \oint_S \vec g \cdot \mathrm d \vec S$, como el número de líneas de campo que atraviesa una superficie.

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/flujo.svg" title="Las líneas de campo de un campo vectorial **F** a través de una superficie con vector unitario normal **n**, el ángulo de **n** con respecto a **F** es *θ*. El flujo es una medida de la cantidad de campo que pasa a través de una superficie determinada. **F** se descompone en componentes perpendicular (⊥) y (‖) paralela a **n**. Solo la componente paralela contribuye al flujo, dado que es la extensión máxima del campo que pasa a través de la superficie en un punto, y la componente perpendicular no contribuye. Adaptada de https://commons.wikimedia.org/wiki/File:General_flux_diagram.svg." width="100%" lightbox="false" >}}

El [**teorema de Gauss**](https://es.wikipedia.org/wiki/Ley_de_Gauss) nos permite relacionar el flujo neto $\Phi$ que atraviesa una superficie cerrada $S$ con la masa encerrada $M_\mathrm{encerrada}$ por dicha superficie:
\[
\Phi = -4\pi GM_\mathrm{encerrada}
\]

#### Campo creado por una esfera hueca

Una esfera que solo tiene masa en su superficie:

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/esfera-hueca.svg" title="Adaptada de https://tikz.net/electric_field_sphere/." width="100%" lightbox="false" theme="light" >}}

#### Campo creado por una esfera maciza homogénea

Una esfera con densidad homogénea $\rho=M/V=3M/(4\pi R^3)$:

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/esfera-maciza.svg" title="Adaptada de https://tikz.net/electric_field_sphere/." width="100%" lightbox="false" theme="light" >}}

### Campo gravitatorio terrestre

Lo que acabamos de ver para una esfera maciza homogénea también es aplicable a esferas con capas homogéneas concéntricas, por lo que podemos aplicarlo a la Tierra[^2]:
$$
\vec g = -\frac{GM_\mathrm T}{r^2}\,\hat{\mathrm r} \quad \mathrm{para}\ r=R_\mathrm T+h\geq R_\mathrm T\ (h\geq 0)
$$

[^2]: La realidad es un poco más complicada. A día de hoy tenemos el llamado [Modelo de Referencia Preliminar](https://es.wikipedia.org/wiki/Modelo_de_referencia_preliminar_de_la_Tierra) (PREM por sus siglás en inglés):
    {{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/g-tierra.svg" title="Se incluyen dos modelos para una Tierra esféricamente simétrica para comparación. La línea recta verde oscura es para una densidad constante igual a la densidad promedio de la Tierra. La línea curva de color verde claro es para una densidad que disminuye linealmente desde el centro a la superficie. La densidad en el centro es la misma que en la PREM, pero la densidad de la superficie se elige de modo que la masa de la esfera sea igual a la masa de la Tierra real. Traducida y adaptada de https://commons.wikimedia.org/wiki/File:EarthGravityPREM.svg." width="100%" lightbox="false" >}}

En esta **práctica virtual** diseñada para 1.º de Bachillerato, el [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) nos propone dos métodos bien diferentes pero igual de eficaces para **determinar** el valor de la **aceleración** de la **gravedad terrestre**:

{{< youtube WZRkV4pMB1Q >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1deVQJYVJxXDQzQDwnWrakmMgcg5WQ4mY/view) puedes descargarte el **guion** de la **práctica**.
{{% /callout %}}

#### Variación de $\vec g$ con la altura

En la superficie terrestre $r = R_\mathrm T$ y por lo tanto:
$$
g_0 = \frac{GM_\mathrm T}{R_\mathrm T^2}
$$

A una altura $h$ sobre la superficie:
{{< math >}}
$$
g = \frac{GM_\mathrm T}{\left(R_\mathrm T+h\right)^2} = g_0\frac{R_\mathrm T^2}{\left(R_\mathrm T+h\right)^2} = g_0\frac{1}{\left(1+\dfrac{h}{R_\mathrm T}\right)^2}
$$
{{< /math >}}

#### Variación de $\vec g$ con la latitud

Al igual que con la altura, la gravedad varía con la latitud. Consideremos un punto P tal como indica la figura:

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/g-latitud.svg" title="Adaptada de https://tikz.net/reference_frame_rotational/." width="100%" lightbox="false" theme="light" >}}

El punto P gira debido a la rotación de la Tierra, describiendo una circunferencia de radio $r$. Al ser un [sistema de referencia no inercial](https://es.wikipedia.org/wiki/Sistema_de_referencia_no_inercial), aparece una aceleración [centrífuga](https://es.wikipedia.org/wiki/Fuerza_centrífuga) ([ficticia](https://es.wikipedia.org/wiki/Fuerza_ficticia)), la cual resulta conveniente descomponer en ejes radial y tangencial:
$$
\vec a_\mathrm{cf} =  a_{\mathrm{cf}_\mathrm r}\,\hat{\mathrm r} + a_{\mathrm{cf}_\mathrm t}\,\hat{\mathrm t},
$$
donde $a_{\mathrm{cf}_\mathrm r} = a_\mathrm{cf}\cos\varphi = \omega^2 r \cos\varphi = \omega^2R_\mathrm T\cos^2\varphi$.
El punto P siente una gravedad efectiva inferior ya que la componente radial algo contrarresta:
{{< math >}}
$$
g_\mathrm{efectiva} = g-a_{\mathrm{cf}_\mathrm r} = g-\omega^2R_\mathrm T\cos^2\varphi = \begin{cases}
							      g-\omega^2 R_\mathrm T & \varphi=0°\ (\text{ecuador}) \\
							      g                      & \varphi=90°\ (\text{polos})
						      \end{cases}
$$
{{< /math >}}

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/variacion-g-altura-latitud.svg" title="Variación de la aceleración de la gravedad con la altura y la latitud. Se ve claramente cómo disminuye con la altura y es mínima en el ecuador ($\varphi = 0&deg;$) y máxima en los polos $\varphi = 90&deg;$." width="100%" lightbox="false" theme="light" >}}

{{< spoiler text="Pincha aquí si quieres **saber más** sobre cómo se **clasifican** las **órbitas** de los **satélites** que giran en torno a la Tierra" >}}

**En función de la latitud**
- Órbitas polares ($\varphi = 90&deg;$).
- Órbitas ecuatoriales ($\varphi = 0&deg;$).
- Órbitas inclinadas.

**En función de su forma**
- Circulares.
- Elípticas (cobertura a mayor altitud).
- No geocéntricas (exploraciones interplanetarias).

**En función de la altura sobre la superficie**

{{< svg "static/media/interaccion-gravitatoria-2Bach-fisica/tipos-orbitas.svg" "Comparación de las órbitas geoestacionaria, GPS, GLONASS, Galileo y COMPASS (satélites de órbita media), Estación Espacial Internacional, Telescopio Espacial Hubble, Constelación Iridium y órbita cementerio con los cinturones de radiación de Van Allen y el tamaño nominal de la tierra, ilustración de CMG Lee. La órbita de la Luna es cerca de 9 veces más grande (en radio y largo) que la órbita geoestacionaria. Esta animación se mueve a 1 hora por segundo. Se puede posicionar el ratón sobre una órbita o su nombre para resaltarla y hacer clic para ir a su respectivo articulo en la Wikipedia. Fuente: https://commons.wikimedia.org/wiki/File:Comparison_satellite_navigation_orbits-es.svg." >}}

{{< /spoiler >}}

## Movimiento de los satélites en órbitas

Supongamos que un satélite describe una órbita circular a una altura $h$ ($r=R+h$) sobre la superficie de un planeta, con [MCU]({{< relref "apuntes-cuarto-eso/movimientos/index.md#movimiento-circular-uniforme-mcu" >}}). Si el satélite permanece en la órbita, debe cumplirse:
$$
\begin{aligned}
F_\mathrm g                       & = F_\mathrm c                    \\
\frac{GM\cancel m}{r^{\cancel 2}} & = \frac{\cancel mv^2}{\cancel r}
\end{aligned}
$$
de donde podemos obtener:

- Velocidad orbital: $\displaystyle v = \sqrt{\frac{GM}{R+h}}$
- Periodo de revolución: $\displaystyle T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{\left(R+h\right)^3}{GM}}$
- Frecuencia: $f=1/T$

### Satélites geoestacionarios
Son aquellos cuyo periodo coincide con el [periodo de rotación terrestre](https://es.wikipedia.org/wiki/Día), de forma que orbitan manteniéndose siempre en la misma vertical (aparentemente no se mueven). Se colocan en el plano del ecuador para que $\vec g$ no varíe con la latitud. Despejando de la [3ª ley de Kepler](#3ª-ley-ley-de-los-periodos):
{{< math >}}
$$
\frac{T^2}{r^3} = \frac{4\pi^2}{GM_\mathrm T} \rightarrow r = \sqrt[3]{\frac{GM_\mathrm T}{4\pi^2}} \rightarrow h = r-\mathrm R_T \approx 35\,800\,\mathrm{km}
$$
{{< /math >}}

### Energía de los satélites

Cuando describe una órbita, la energía mecánica de un satélite viene dada por:
{{< math >}}
\[
E = E_\mathrm c + E_\mathrm p = \frac{1}{2}mv^2 - \frac{GMm}{r} = \frac{1}{2}\frac{GMm}{r} - \frac{GMm}{r} = -\frac{1}{2}\frac{GMm}{r} = \frac{E_\mathrm p}{2}\ \left(=-\frac{GMm}{2a}\text{ si órbita elíptica}\right)
\]
{{< /math >}}

Si tenemos en cuenta que todas las **fuerzas** que actúan son **conservativas**, la **energía mecánica se conserva**. Así, es posible calcular:

Velocidad de lanzamiento
: Es la velocidad que hay que comunicar a un satélite para colocarlo en su órbita, suponiendo que se lanza desde la superficie terrestre:
{{< math >}}
$$
\begin{aligned}
E_1                                                                  & = E_2                                                                                                                      \\
E_{\mathrm c_1} + E_{\mathrm p_1}                                    & = \frac{E_{\mathrm p_2}}{2}                                                                                                \\
\frac{1}{2}\cancel mv^2 - \frac{GM_\mathrm T \cancel m}{R_\mathrm T} & = -\frac{GM_\mathrm T \cancel m}{2r} \rightarrow v = \sqrt{2GM_\mathrm T\left(\frac{1}{R_\mathrm T}-\frac{1}{2r}\right)}
\end{aligned}
$$
{{< /math >}}

Velocidad de escape
: Si en el lanzamiento[^3] proporcionamos al satélite una velocidad suficientemente elevada, este puede llegar a escapar del campo gravitatorio terrestre. A esta (mínima) velocidad se le denomina [**velocidad de escape**](https://es.wikipedia.org/wiki/Velocidad_de_escape). Imponiendo la condición de que el objeto se aleje hasta una distancia infinita y quede en reposo ($E=0$):

[^3]: Suponiendo de nuevo que se lanza desde la superficie terrestre.

$$
\begin{aligned}
E                                                              & = 0                                                                    \\
\frac{1}{2}mv_\mathrm e^2 - \frac{GM_\mathrm T m}{R_\mathrm T} & = 0 \rightarrow v_\mathrm e = \sqrt{\frac{2GM_\mathrm T}{R_\mathrm T}}
\end{aligned}
$$
Para $v\geq v_\mathrm e$ el satélite escapa de la influencia de $\vec g$ y se mueve libremente. Es importante destacar, a la vista de la expresión, que solo depende de $M_\mathrm T$ y de $R_\mathrm T$ (es independiente de las características del satélite).

{{< spoiler text="Pincha aquí si quieres **saber más** sobre **velocidad de escape** y **agujeros negros**" >}}
En el s. XVIII, el astrónomo inglés [John Michell](https://es.wikipedia.org/wiki/John_Michell) propuso que un cuerpo con suficiente masa dispondría de un campo gravitatorio tan intenso que ni siquiera la luz podría emerger de su superficie. La existencia de este tipo de objetos, los [**agujeros negros**](https://es.wikipedia.org/wiki/Agujero_negro), fue objeto de debate hasta que [Schwarzschild](https://es.wikipedia.org/wiki/Karl_Schwarzschild) aportó soluciones exactas a las [ecuaciones del campo de Einstein](https://es.wikipedia.org/wiki/Ecuaciones_del_campo_de_Einstein) y avanzó ideas sobre su existencia.

Durante el s. XX, [Stephen Hawking](https://es.wikipedia.org/wiki/Stephen_Hawking) y [Roger Penrose](https://es.wikipedia.org/wiki/Roger_Penrose) trabajaron en la formulación teórica de los agujeros negros, demostrando que emiten radiación y partículas en la parte exterior del [horizonte de sucesos](https://es.wikipedia.org/wiki/Horizonte_de_sucesos). En la actualidad, se ha confirmado la existencia de numerosos agujeros negros mediante la detección de esta [radiación de Hawking](https://es.wikipedia.org/wiki/Radiación_de_Hawking) y se ha desarrollado un [telescopio específico](https://es.wikipedia.org/wiki/Telescopio_del_Horizonte_de_Sucesos) para poder ofrecer imágenes de los agujeros negros.

Se cree que la mayoría de las galaxias giran en torno a un agujero negro supermasivo localizado en su centro. De hecho, el [Premio Nobel de Física de 2020](https://fisquiweb.es/PNob/PNobF20.htm) fue concedido a Roger Penrose, Reinhard Genzel y Andrea Ghez por sus descubrimientos sobre los agujeros negros y en concreto el que tenemos en el centro de nuestra galaxia.

![agujero negro](interaccion-gravitatoria-2Bach-fisica/agujero-negro.jpg "Primera y, por el momento, única imagen de un agujero negro dada a conocer en abril de 2019. Fuente: https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87_crop_max_res.jpg.")

{{< /spoiler >}}

Trabajo para pasar de una órbita a otra
: Supongamos que queremos pasar un satélite de una órbita 1 a otra órbita 2. Será necesario realizar un trabajo tal que:
{{< math >}}
\[
E_1+W = E_2 \rightarrow W = E_2-E_1 = - \frac{GM_\mathrm T m}{2r_2}-\left(- \frac{GM_\mathrm T m}{2r_1}\right) = \frac{GM_\mathrm T m}{2}\left(\frac{1}{r_1}-\frac{1}{r_2}\right)
\]
{{< /math >}}

{{< figure library="true" src="interaccion-gravitatoria-2Bach-fisica/orbita-hohmann.svg" title="La [**órbita de transferencia de Hohmann**](https://es.wikipedia.org/wiki/Órbita_de_transferencia_de_Hohmann) es una maniobra orbital que traslada a una nave espacial desde una órbita circular a otra utilizando dos impulsos de su motor. El nombre proviene del científico alemán [Walter Hohmann](https://es.wikipedia.org/wiki/Walter_Hohmann) que publicó su teoría en 1925. Adaptada de https://commons.wikimedia.org/wiki/File:TransferOrbit.svg." width="100%" lightbox="false" theme="light" >}}

### Energía de los satélites y tipo de órbita
La energía de un satélite determina el tipo de órbita que describe:

\[
E = \overbrace{\frac{1}{2}mv^2}^{+}\overbrace{-\frac{GMm}{r}}^{-}
\]

$E<0$ Ligado al campo (órbitas cerradas):
{{< math >}}
$$
\begin{cases}
E_\mathrm c = 0    & \text{El satélite cae por atracción gravitatoria.}                                  \\
E_\mathrm c \neq 0 & \text{Describe una órbita cerrada (circular o elíptica). Ej. satélites o planetas.}
\end{cases}
$$
{{< /math >}}
$E\geq 0$ No ligado al campo (órbitas abiertas):
{{< math >}}
\[
\begin{cases}
E = 0 & \text{Órbita parabólica: $E_\mathrm c = -E_\mathrm p$. Ej. cometas.}    \\
E > 0 & \text{Órbita hiperbólica: $E_\mathrm c > E_\mathrm p$. Ej. asteroides.}
\end{cases}
\]
{{< /math >}}

**Explora** la **relación** entre la **gravedad** y las **órbitas** con estas excelentes **simulaciones**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>
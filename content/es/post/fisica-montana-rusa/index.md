---
title: "La física de los loops de las montañas rusas"
subtitle: Un vistazo a los principios físicos y los cálculos que utilizan los ingenieros para diseñar los loops de las montañas rusas
summary: "Un vistazo a los principios físicos y los cálculos que utilizan los ingenieros para diseñar los loops de las montañas rusas."
breadcrumbs: ["blog"]
date: "2023-06-06T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- blog
- movimiento
- fuerzas
- energía
- gravitación
categories:
- Física
image:
  placement: 3
  caption: "Foto de [**Aleksandr Popov**](https://unsplash.com/es/@5tep5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) en [Unsplash](https://unsplash.com/es/fotos/aW50su5Dwek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"

math: true
---

{{% callout note %}}

Esta entrada es una **transcripción/adaptación** de este magnífico **vídeo** de ***Art of Engineering***, donde se dan más detalles sobre la **física** real de los **loops** de las **montañas rusas**:

{{< youtube 4q2W5SJc5j4 >}}

{{% /callout %}}

{{% toc %}}

Para ilustrar el concepto de [**aceleración centrípeta**]({{< relref "/apuntes-primero-bach/movimiento-circular/index.md#aceleración-centrípeta-a_mathrm-c" >}}), los ejercicios de los libros de texto suelen representar ***loops*** perfectamente **circulares** para simplificar los cálculos. Pero la realidad es que los loops de las montañas rusas no son circulares en absoluto.

![loop](loop.jpg "[Big Loop, Heide Park](https://www.heide-park.de/en/). Imagen de [Thorsten Dahl](https://pixabay.com/users/tdahl-6043092/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2686892) en [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2686892).")

El **problema** fundamental de los **loops circulares** es el radio constante, que genera **intensas** [**fuerzas g**](https://es.wikipedia.org/wiki/Fuerza_g) que los hacen incómodos y peligrosos para los pasajeros. Esto se hizo realidad por primera vez en la década de 1840, cuando se construyeron los primeros [**ferrocarriles centrífugos**](https://en.wikipedia.org/wiki/Centrifugal_railway) con loops circulares en Europa Occidental.

![centrifugal railway](centrifugal-railway.jpg "Boceto detallado de un [ferrocarril centrífugo](https://en.wikipedia.org/wiki/Centrifugal_railway) en Manchester. Fuente: https://commons.wikimedia.org/wiki/File:Centrifugal_Railway_Detailed_Sketch.jpg.")

No fue hasta que se introdujeron formas alternativas en la década de 1970 que los loops de montaña rusa empezaron a popularizarse.

![centrifugal railway](https://images.coasterpedia.net/thumb/7/77/New_Revolution_%28Six_Flags_Magic_Mountain%29_2018_01.jpg/800px-New_Revolution_%28Six_Flags_Magic_Mountain%29_2018_01.jpg "[The New Revolution, Six Flags Magic Mountain](https://www.sixflags.com/magicmountain/attractions/new-revolution-classic). Fuente: https://www.flickr.com/photos/prayitnophotography/45277065035/.")

## Loops circulares

Antes de poder explicar la física que utilizan los ingenieros de montañas rusas para diseñar la variedad de formas de loops que encontramos hoy en día, necesitamos empezar con una buena comprensión de la física detrás de los loops circulares simples.

Utilicemos como ejemplo esta sencilla montaña rusa, que consiste en una subida mecánica de altura $h_0$ y un solo loop circular de radio $r$:

{{< figure src="montana-rusa.svg" title="[Imagen de macrovector](https://www.freepik.com/free-vector/amusement-park-attractions-visitors-isometric-icons-set-isolated-white-3d_6845884.htm#query=roller%20coaster%20loop&position=45&from_view=search&track=ais) en Freepik." lightbox="false" width="100%" >}}

A medida que el tren sube, va ganando energía potencial gravitatoria de acuerdo a la expresión $E_\mathrm p = mgh$. Al bajar, la energía potencial gravitatoria se transforma en energía cinética, $E_\mathrm c$, conservándose la energía mecánica total[^1], por lo que podemos calcular la velocidad, $v$, en función de la altura, $h$:

[^1]: Despreciamos la disipación de energía por rozamiento.

\begin{align*}
E_\mathrm p &= E_\mathrm c \\\\
mg(h_0-h) &= \frac{1}{2}mv^2 \Rightarrow v = \sqrt{2g(h_0-h)}
\end{align*}

La velocidad con la que entra el tren al loop, $v_0$, se obtiene imponiendo $h=0$, por lo que:
$$
v_0 = \sqrt{2gh_0}
$$

En el momento en el que el tren entra en el loop, comienza a sufrir una aceleración centrípeta dada por $a_\mathrm c = v^2/r$. La fuerza normal y la componente radial del peso, $P\cos\theta$, con $\theta$ el ángulo de la pista en un punto cualquiera, actúan como fuerzas centrípetas, por lo que podemos escribir la segunda ley de Newton como:

\begin{align*}
F_\mathrm T &= ma \\\\
N-mg\cos\theta &= \frac{mv^2}{r} \Rightarrow N = \frac{mv^2}{r} + mg\cos\theta
\end{align*}

### Fuerza g

Dividiendo $N/(mg)$ obtenemos la [**fuerza g**](https://es.wikipedia.org/wiki/Fuerza_g), denotada por $G$, que experimentarán los pasajeros cuando el tren circule por el loop:

$$
G = \frac{N}{mg} = \frac{v^2}{rg}+\cos\theta
$$

Sustituyendo $v = \sqrt{2g(h_0-h)}$ obtenemos:
$$
G = \frac{2(h_0-h)}{r}+\cos\theta
$$

Podemos escribir $h$ en función de $\theta$:
$$
h = r-r\cos\theta = r(1-\cos\theta)
$$

Sustituyendo y simplificando:
$$
G = \frac{2h_0}{r}+3\cos\theta-2 = \frac{v_0^2}{rg}+3\cos\theta-2
$$

Sustituyendo $\theta = s/r$, donde $s$ es la longitud de arco, o la longitud de vía que el tren ha recorrido alrededor del loop:
$$
G = \frac{v_0^2}{rg}+3\cos(s/r)-2
$$

{{< figure src="G-vs-s.svg" title="Dependencia de la fuerza g, $G$, respecto a la longitud de vía que el tren ha recorrido alrededor del loop, $s$. $v_0^2=4rg$ representa la situación en la que el tren tiene justo la energía suficiente para dar toda la vuelta al loop, mientras que $v_0^2=5rg$ representa la situación en la que los pasajeros del tren sienten ingravidez (0*g*) cuando pasan por arriba." lightbox="false" width="100%" theme="light" >}}

Podemos ver rápidamente el problema fundamental de los loops circulares. Independientemente del radio del círculo y de la velocidad inicial, siempre habrá una diferencia de 6*g* entre la parte inferior y la parte superior: 

- Si el tren tiene la energía suficiente para dar toda la vuelta, entonces la velocidad del tren será exactamente cero en la parte superior del loop, y los pasajeros experimentarán –1*g*. En la parte inferior del loop, los pasajeros experimentarán +5*g*, y este valor será aún mayor si el tren viaja más rápido.

- Si el tren viaja exactamente a la velocidad para que los pasajeros experimenten la ingravidez, o 0*g*, en la parte superior, entonces experimentarán +6*g* en la parte inferior.

El [**Comité F24 sobre Atracciones y Dispositivos de Diversión**](https://www.astm.org/committee-f24)
ha creado [**normas ASTM**](https://es.wikipedia.org/wiki/ASTM) para el diseño de atracciones seguras, y proporcionan límites de exposición a la fuerza g que incluyen magnitud, dirección y duración[^2]. Por ejemplo, si los pasajeros van a estar sometidos a 4*g*, entonces la duración de esa exposición no debe exceder de 4 segundos, y esta duración disminuye a medida que se alcanzan fuerzas g más elevadas. Esta es una de las razones por las que la fuerza g en una montaña rusa no suele superar los 4*g*.

[^2]: https://www.astm.org/f2291-21.html.

## Loops con aceleración centrípeta constante

Es físicamente imposible diseñar un loop perfectamente circular que sea emocionante y cómodo para los pasajeros, y es por eso que no se utilizan en las montañas rusas modernas. En su lugar, los ingenieros de montañas rusas deciden qué fuerzas g quieren que experimenten los pasajeros
en un loop vertical, y diseñan a la inversa una forma que proporcione esas fuerzas.

Por ejemplo, supongamos que queremos diseñar un loop que proporcionará aceleración centrípeta constante en todo el recorrido. Imponemos:

$$
a_\mathrm c = \frac{v^2}{r} = C\cdot g \Rightarrow r = \frac{v^2}{C\cdot g}
$$

Como $v^2$ es inversamente proporcional a la altura, esto nos dice que el radio $r$ debe disminuir linealmente con la elevación, $y$:

$$
v^2 = v_0^2-2gy \rightarrow r = \frac{1}{C}\cdot\left(\frac{v_0^2}{g}-2y\right)
$$

Dado que el radio es ahora una función en lugar de una constante, resulta más difícil definir la trayectoria del loop, para lo que tendremos que resolver un sistema de ecuaciones diferenciales dado por[^3]:

[^3]: Quien esté interesado en los detalles, vienen explicados en el minuto 8:45 del [vídeo enlazado al principio de esta entrada](https://www.youtube.com/watch?v=4q2W5SJc5j4).

\begin{align*}
\frac{\partial\theta}{\partial s} &= \frac{1}{r} \\\\
\cos\theta &= \frac{\partial x}{\partial s} \\\\
\sin\theta &= \frac{\partial y}{\partial s}
\end{align*}

Introducimos nuestra expresión de $r$ en la primera ecuación y resolvemos el sistema numéricamente[^4] para trazar la forma del loop:

[^4]: En este caso se ha utilizado el solver `ode45` de [MATLAB](https://es.mathworks.com/products/matlab.html).

{{< figure src="constant-ac.svg" title="Estos loops en particular fueron diseñados para dar aceleraciones centrípetas constantes de 2*g*, 3*g* y 4*g*, respectivamente, cuando el tren tiene una velocidad inicial de 20&thinsp;m/s. Podemos también generar un gráfico de fuerza g a lo largo de la trayectoria como hicimos antes para el loop circular. Para cualquier loop con aceleración centrípeta constante, la fuerza g en la parte inferior siempre será igual a *C* + 1, y la fuerza g en la parte superior siempre será *C* – 1. Esto significa que siempre habrá una diferencia de 2*g* entre la parte superior e inferior del loop, y este rango se puede desplazar hacia arriba o hacia abajo cambiando la magnitud de *C*." lightbox="false" width="100%" theme="light" >}}

Podemos encontrar muchos ejemplos de montañas rusas reales que utilizan formas similares. Un ejemplo es el [Carolina Cyclone en Carowinds](https://www.carowinds.com/rides-experiences/carolina-cyclone),
que fue construido por [Arrow Dynamics](http://www.arrowdynamics.com) en 1980:

![Carolina Cyclone](carolina-cyclone.jpg "[Carolina Cyclone, Carowinds](https://www.carowinds.com/rides-experiences/carolina-cyclone). Notar cómo el segundo loop está más cerca del suelo (menor altura) para tener en cuenta la energía perdida por rozamiento (la velocidad con la que el tren entra en el loop es la misma en ambos casos, lo que permite reutilizar la misma forma de loop). Fuente: https://commons.wikimedia.org/wiki/File:Carolina_Cyclone_%28Double_Loop%29.JPG.")

## Loops con fuerza g constante

Además de loops con aceleración centrípeta constante, también se pueden diseñar loops que proporcionen una fuerza g constante. La ecuación para la fuerza g que derivamos anteriormente es:

$$
G = \frac{v^2}{rg} + \cos\theta
$$

Despejando $r$ y sustituyendo $v$ obtenemos:

$$
r = \frac{v_0^2-2gy}{g(G-\cos\theta)},
$$

expresión que podemos introducir en nuestro sistema de ecuaciones diferenciales. Ajustando *G* podemos crear una forma que proporcionará cualquier magnitud de fuerza g constante que queramos:

{{< figure src="constant-G.svg" title="Estos loops en particular fueron diseñados para dar fuerzas g constantes de 2*g*, 3*g* y 4*g*, respectivamente, cuando el tren tiene una velocidad inicial de 20&thinsp;m/s." lightbox="false" width="100%" theme="light" >}}

## Clotoides
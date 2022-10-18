---
title: ¿De qué color son los gases?
subtitle: De la estructura electrónica del átomo a la luz de las lámparas de descarga
summary: "De la estructura electrónica del átomo a la luz de las lámparas de descarga."
breadcrumbs: ["blog"]
date: "2022-10-19T00:00:00Z"
authors:
- manuel-alonso-orts
tags:
- blog
- estructura-atómica
- luz
- color
- gases
categories:
- Física
image:
  placement: 3
  caption: "https://commons.wikimedia.org/wiki/File:Glowing_noble_gases.jpg"
---

{{% callout thread %}}
Entrada basada en el siguiente hilo de Twitter:
<div align="center">
{{< tweet user="ManoloAlonso1" id="1576973341302214665" >}}
</div>
{{% /callout %}}

Se suele decir que los gases (la mayoría) son incoloros. Entonces, ¿por qué hay lámparas de vapor de distintos colores, y por qué se estudian las líneas espectrales del hidrógeno, el helio, etc.? En esta entrada hablamos de **estructura electrónica**, **luz** y **color**.

Empecemos con los átomos más sencillos, el [hidrógeno (H)](https://es.wikipedia.org/wiki/Hidrógeno) y el [helio (He)](https://es.wikipedia.org/wiki/Helio). En un átomo, los electrones ({{< icon name="circle-minus" pack="fas" >}}) se mantienen ligados al núcleo ({{< icon name="circle-plus" pack="fas" >}}) por [**interacción electromagnética** (EM)](https://es.wikipedia.org/wiki/Electromagnetismo) en niveles de energía bien definida; para el H y el He, tenemos 1 o 2 e<sup>–</sup> en el mismo nivel (n = 1).

{{< figure src="atomo-helio-bohr.svg" title="El átomo de helio: dos electrones en la primera órbita (n = 1) alrededor del núcleo. Esta imagen está basada en el [**modelo** de **Bohr**](https://es.wikipedia.org/wiki/Modelo_atómico_de_Bohr) (también llamado modelo planetario), el cual es muy útil para entender muchos conceptos, pero incompleto. Fuente: https://commons.wikimedia.org/wiki/File:Atom.svg." lightbox="false" width="100%" >}}

En la imagen anterior, basada en el [**modelo** de **Bohr**](https://es.wikipedia.org/wiki/Modelo_atómico_de_Bohr), los e<sup>–</sup> orbitan como planetas en torno a su estrella, pero por interacción EM. Por las limitaciones de este modelo, en vez de órbitas, es más realista imaginar a los electrones alrededor del núcleo como [**orbitales**](https://es.wikipedia.org/wiki/Orbital_atómico) de probabilidad.

{{< figure src="atomo-litio-bohr.svg" title="Átomo de [litio](https://es.wikipedia.org/wiki/Litio) según el [**modelo** de **Bohr**](https://es.wikipedia.org/wiki/Modelo_atómico_de_Bohr). Fuente: https://freesvg.org/vector-image-of-lithium-atom-in-bohr-model." lightbox="false" width="100%" >}}

{{< figure src="distribuciones-probabilidad-orbitales.jpg" title="Distribuciones de probabilidad para los orbitales 1s y 2s según el [**modelo** de **Schrödinger**](https://es.wikipedia.org/wiki/Modelo_atómico_de_Schrödinger). Una mayor intensidad de color indica las regiones en las que es más probable que existan electrones. Los nodos (*nodes*) indican las regiones en las que la probabilidad de encontrar un electrón es nula. Adaptada de https://www.khanacademy.org/science/physics/quantum-physics/quantum-numbers-and-orbitals/a/the-quantum-mechanical-model-of-the-atom." lightbox="true" >}}

En ambos modelos, el [litio](https://es.wikipedia.org/wiki/Litio) neutro tiene tres electrones; dos de ellos a cierta energía y un tercero a mayor energía (es decir, a menor energía de enlace). En el modelo de Bohr, se visualiza como una órbita a mayor distancia del núcleo. El [**modelo** de **Schrödinger**](https://es.wikipedia.org/wiki/Modelo_atómico_de_Schrödinger) es más completo pues, entre otras, tiene en cuenta la [indeterminación en la posición-momento del electrón](https://es.wikipedia.org/wiki/Relación_de_indeterminación_de_Heisenberg), dando lugar a resultados experimentales más exactos.

En el átomo, los electrones se encuentran en niveles definidos por su energía, la misma para todo átomo aislado de un mismo elemento, como el hidrógeno o el litio. Por ejemplo, estos son los niveles energéticos del hidrógeno (1&thinsp;[eV](https://es.wikipedia.org/wiki/Electronvoltio) es la energía de un e<sup>–</sup> acelerado por una diferencia de potencial de 1&thinsp;V).

{{< figure src="niveles-energia-H.svg" title="Niveles electrónicos en un átomo de hidrógeno. Ojo, el hidrógeno solo tiene un electrón, que habitualmente se encuentra en el nivel fundamental (n = 1), pero mediante energía puede pasar a niveles superiores con esas energías, cuyos valores son universales. Traducida y adaptada de https://www.nagwa.com/en/explainers/280124287090/." lightbox="false" width="100%" >}}

En el estado fundamental, el átomo de hidrógeno tiene un electrón, que se encuentra en el nivel de menor energía (n = 1). Entonces, ¿emitirá un color (fotón con energía en el rango visible) o más? Si lo hace, ¿por qué se dice que, como la mayoría de los gases, el H es incoloro?

{{% lottie src="lottie/meeseeks-dudando.tgs" width="100%" %}}

Para que el átomo emita luz, se debe primero excitar a su(s) electrón(es) a niveles de energía superiores. Una forma de hacerlo es absorbiendo radiación, pero la energía requerida para el hidrógeno atómico es mayor que la luz visible e incluso que la radiación ultravioleta cercana.

{{< figure src="energia-excitacion-H.jpg" title="Excitaciones electrónicas a niveles de energía superiores en el átomo de hidrógeno. En el estado fundamental, el electrón está en n = 1. Se requiere muy alta energía, por encima de las energías que nos llegan de la radiación solar, para excitar al electrón desde su nivel fundamental (n = 1). Fuente: https://overallscience.com/excitation-and-ionization-potential/." lightbox="true" id="energia-excitaciones" >}}

Físicamente, ¿qué quiere decir "*excitar al electrón a niveles de energía superiores*"? Según el modelo de Bohr, sería llevarlo a órbitas más lejanas del núcleo; visto desde el modelo cuántico, cambia su distribución de probabilidad en torno al núcleo.

{{< figure src="orbitales-H.png" title="Orbitales del hidrógeno atómico. En el estado fundamental, su electrón está en el orbital 1s, con simetría esférica en torno al núcleo y con mayor probabilidad de estar más cerca de él que en estados excitados. Al recibir suficiente energía, de los distintos posibles orbitales, el electrón pasará al orbital p (regla de selección) de cierto nivel n. Fuente: https://commons.wikimedia.org/wiki/File:Atomic-orbital-clouds_spd_m0.png." lightbox="true" >}}

{{% callout note %}}
Aquí podéis ver una **animación** que muestra los **orbitales atómicos**:
<div align="center">
{{< tweet user="QuantumFracture" id="1571840836022722565" >}}
</div>

, y un **vídeo** donde se explica con más detalle, ambos de [**@QuantumFracture**](https://twitter.com/QuantumFracture):

{{< youtube SOkxbYY5Fao >}}

{{% /callout %}}

Aquí vamos a centrarnos en la relación entre esos estados del hidrógeno y la luz que emite. Cuando el e<sup>–</sup> retorna de esos niveles excitados a niveles inferiores, la diferencia de energía es igual a la de la radiación que emite. En el H, es visible si cae al nivel n = 2. Las transiciones electrónicas son probabilísticas; excitando suficientes átomos de H, tendremos las cuatro emisiones:

{{< figure src="desexcitaciones-electronicas-H.png" title="Desexcitaciones electrónicas visibles y color asociado. Si el electrón cae de niveles superiores al nivel n = 2 del hidrógeno, sus longitudes de onda son equivalentes a colores que detecta nuestro ojo. También llamada [**serie** de **Balmer**](https://es.wikipedia.org/wiki/L%C3%ADneas_de_Balmer). En este ejemplo, el electrón había pasado al nivel n = 6 y la luz emitida sería la de 410&thinsp;nm; las demás ocurren cuando el electrón pasa por los niveles correspondientes.  Las emisiones entre niveles superiores y el nivel n = 1 (no mostradas aquí) dan lugar a radiación ultravioleta. Para emitir alguna de esas longitudes de onda, el átomo debe haber previamente absorbido [una energía por encima de 12&thinsp;eV](#figure-energia-excitaciones)." lightbox="true" >}}

Esas longitudes de onda (colores) emitidas por el hidrógeno no solo se pueden calcular, sino también medir en un laboratorio. Para darle suficiente energía para activar esas transiciones electrónicas, se somete al gas a una corriente eléctrica.
 
{{< figure src="tubo-descarga-H.jpg" title="En esta imagen puede verse un tubo de descarga de hidrógeno (izquierda) y el espectro de emisión del hidrógeno (derecha), representado teóricamente a partir de cálculos del modelo de Bohr (arriba) y tomado experimentalmente en el [Museo Didáctico de Orihuela](https://mudic.es) (abajo) mediante un [espectroscopio](https://es.wikipedia.org/wiki/Espectrómetro) que se puede fabricar en un laboratorio casero. Para más información, pincha [aquí](http://rsefalicante.umh.es/TemasColor/cuantica_profesor.pdf). Vemos que modelo teórico cuadra maravillosamente con el experimento." lightbox="true" >}}

El experimento anterior es análogo al prisma de Newton, donde se vio que la luz blanca está compuesta de muchas longitudes de onda (colores del [arcoíris]({{< relref "/post/arcoiris" >}})). Pero aquí solo hay cuatro:  una roja (más intensa), dos azules y una violeta, que combinadas dan lugar al color rosa del tubo de hidrógeno.

{{< figure src="espectroscopio.png" title="Diagrama mostrando cómo funciona un espectroscopio. Fuente: https://byjus.com/chemistry/hydrogen-spectrum/." lightbox="true" >}}

Quedaría por añadir que la probabilidad de transición de los niveles energéticos del hidrógeno que dan lugar a estas cuatro líneas espectrales es máxima para la roja y mínima para la violeta, de ahí que en el espectroscopio casero no podamos ver la violeta y que la roja domine en el tubo de hidrógeno, dando lugar a una luz de color intenso rosáceo para nuestros ojos.

No solo tenemos tubos de descarga de hidrógeno; también de muchos otros gases, como el helio o el neón. En general, cuantos más electrones tenga el átomo, al haber más niveles de energía accesibles, habrá más líneas de emisión (en el rango visible, *más colores*).

{{< figure src="espectros-gases.png" title="Tubos de descarga y espectros de emisión visible del helio (similar al hidrógeno, pero con dos electrones en el nivel 1s en el estado fundamental en vez de uno) el neón y el oxígeno. Al tener más electrones, hay más líneas de emisión en el rango visible. Fuente: http://rsefalicante.umh.es/TemasColor/color04.htm." lightbox="true" >}}

{{% callout note %}}
El [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) nos regala [esta preciosa 💊 **píldora**]({{< relref "/post/pildoras-ciencia#5-espectros-en-tubos-de-descarga" >}}) dedicada a los **espectros** en **tubos** de **descarga**.
{{% /callout %}}

Esta es la base de las [**lámparas de descarga**](https://es.wikipedia.org/wiki/Lámpara_de_descarga), como las naranjas que aún hay en muchas ciudades, donde la especie atómica usada para lograr esa emisión es el [sodio](https://es.wikipedia.org/wiki/Lámpara_de_vapor_de_sodio).

{{% callout note %}}

Si quieres profundizar en este tema te recomiendo este 🧵 hilo de Twitter de [@Yosoycorra](https://twitter.com/Yosoycorra):

<div align="center">
{{< tweet user="Yosoycorra" id="1494654339641757696" >}}
</div>

{{% /callout %}}

{{% callout warning %}}
Dos **aclaraciones** importantes:

1. El hidrógeno, como la mayoría de los gases, es en circunstancias habituales incoloro. Además, suele estar formado por moléculas de H<sub>2</sub>. Al aplicar la corriente, parte de ellas se disocia y los colores se deben a lo que hemos visto en la entrada para el hidrógeno atómico.

  {{< figure src="ampolla-hidrogeno.jpg" title="Hidrógeno contenido en una ampolla de gas. Como hemos comentado durante la entrada, si no le aplicamos alta energía (por ejemplo, mediante corriente eléctrica), el gas es incoloro y los electrones permanecen en su nivel fundamental. Fuente: https://commons.wikimedia.org/wiki/File:Hydrogen_ampoule.jpg." lightbox="true" >}}

2. La corriente ioniza un porcentaje de los átomos de hidrógeno; esos átomos se quedan sin su electrón ligado. Por ello, en los tubos de descarga que hemos visto se forma un **plasma**; si queréis leer más sobre el plasma, escribí una [**entrada** sobre ello]({{< relref "/post/plasma" >}}).

{{% /callout %}}

Con esto termina esta entrada, donde hemos visto modelos físicos y experimentos que nos han arrojado luz en muchos sentidos; desde la comprensión de la estructura de la materia hasta el desarrollo de la iluminación en nuestras poblaciones.

{{< figure src="nueva-york.jpg" title="Una calle de Nueva York, iluminada por lámparas de vapor de sodio. La instalación de LEDs, más eficientes, está acabando con este tipo de imágenes nocturnas. Fuente: https://www.flickr.com/photos/reevej/8138841377/." lightbox="true" >}}
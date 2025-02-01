---
title: Nanotermometría luminiscente I
subtitle: De los termómetros de mercurio a los basados en *quantum dots*
summary: "De los termómetros de mercurio a los basados en *quantum dots*."
breadcrumbs: ["blog"]
date: "2022-02-05T00:00:00Z"
authors:
- manuel-alonso-orts
tags:
- blog
- energía
- nanotermometría
- luminiscencia
- termómetros
- mercurio
- quantum-dots
categories:
- Física
image:
  placement: 3
  caption: "https://onlinelibrary.wiley.com/doi/10.1002/adfm.200990081"

threedmol: true
---

{{% callout thread %}}
Entrada basada en los siguientes hilos de Twitter:
<div align="center">
{{< x user="ManoloAlonso1" id="1466094642391306246" >}}
</div>
<div align="center">
{{< x user="ManoloAlonso1" id="1600554123967008769" >}}
</div>
{{% /callout %}}

Cuando un [**termómetro**](https://es.wikipedia.org/wiki/Termómetro) nos proporciona la [**temperatura**](https://es.wikipedia.org/wiki/Temperatura) de algún sistema, la está deduciendo a partir de otro parámetro relacionado con ella, por ejemplo, la [**dilatación** de un **líquido**]({{< ref "/apuntes-cuarto-eso/energia-trabajo-calor/index.md#dilatación" >}}) en un recipiente. Entonces, ¿Cómo podemos entender la temperatura y cómo medirla en escalas muy pequeñas, como la celular?

![Cell Scientists Illustration](Cell-Scientists-Illustration.jpg "Créditos: [Steven H. Lee/graphiko.com](https://www.kurzweilai.net/how-to-measure-and-control-the-temperature-inside-living-cells)")

Antes de nada, como dice la metróloga Dolores del Campo en el vídeo “¿Cómo Sabemos que un Segundo vale un Segundo?” de QuantumFracture[^1], medir bien la temperatura no es nada sencillo. Ningún instrumento en la Tierra puede medir la temperatura directamente; tenemos que buscar otra magnitud que podamos medir y que varíe de una manera que conozcamos con la temperatura.

[^1]: Alrededor del minuto 7:

	{{< youtube rv2gRtVcHG4 >}}

Igual piensas que calibrando tu sensación de la temperatura exterior o al tocar un objeto tendrías un termómetro, pero lo que realmente percibes es la transferencia de calor desde o hacia ti. Por eso nos quemamos o nos da frío más fácilmente un trozo de metal que uno de madera.

![sensación térmica](https://www.tec-science.com/wp-content/uploads/2021/05/thermodynamics-heat-transfer-human-thermal-response-heat-flow-direction-hand-cold-warm-summer.jpg "El metal es un mejor conductor térmico que la madera. La mayor transferencia de calor cuando está muy caliente o muy frío nos hace quemarnos o helarnos más fácilmente tocando el metal que tocando la madera a esa misma temperatura. Fuente: https://www.tec-science.com/thermodynamics/heat/human-thermal-response/.")

En un termómetro de contacto, como los de líquido (antes [mercurio](https://es.wikipedia.org/wiki/Termómetro_de_mercurio), ahora [galinstan](https://es.wikipedia.org/wiki/Galinstano), etc.), también hay transferencia de calor con aquello que queremos medir hasta que ambos llegan al [equilibrio térmico](https://es.wikipedia.org/wiki/Equilibrio_térmico), es decir, alcanzan la misma temperatura ([principio cero de la termodinámica](https://es.wikipedia.org/wiki/Principio_cero_de_la_termodinámica)).

![equilibrio térmico](https://pbs.twimg.com/media/FJx9iLjWYAI9cPC?format=jpg&name=large "Imagen de [@RayleighLord](https://twitter.com/RayleighLord), mostrando la definición de temperatura a partir del parámetro que se iguala cuando se colocan dos objetos en contacto.")

Aquí podéis ver el hilo de [@RayleighLord](https://twitter.com/RayleighLord) donde se profundiza más en este tema:
<div align="center">
{{< x user="RayleighLord" id="1485208401898614785" >}}
</div>

Desde hace 3 siglos sabemos medir la temperatura a partir del cambio proporcional del volumen del mercurio en un bulbo.

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/4ZgLPakqTajjVFOVqw" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hot-cold-liquid-4ZgLPakqTajjVFOVqw">via GIPHY</a></p>

El volumen de un líquido no es la única magnitud física que podemos usar. ¿Por qué vemos el sol amarillo (blanco fuera de la Tierra)? ¿Por qué un metal en el horno se pone *al rojo vivo*? Los cuerpos emiten radiación debido a su temperatura. Alrededor de la temperatura ambiente, la emisión térmica es menos energética y cae en el [**infrarrojo** (IR)](https://es.wikipedia.org/wiki/Radiación_infrarroja); por tanto, no la podemos ver. Pero sí la *ven* los [termómetros infrarrojos de pistola](https://es.wikipedia.org/wiki/Termómetro_de_infrarrojos), como los que se usaron habitualmente en la entrada de algunos recintos durante la [pandemia de COVID-19](https://es.wikipedia.org/wiki/Pandemia_de_COVID-19) para saber si alguún visitante tenía fiebre en pocos segundos.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/hnlU3NQ0mCqD7Ujjgr" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/guavajuice-hot-temperature-fahrenheit-hnlU3NQ0mCqD7Ujjgr">via GIPHY</a></p>

{{< figure src="radiacion-cuerpo-negro-IR.svg" title="[Radiación de cuerpo negro](https://es.wikipedia.org/wiki/Radiación_de_cuerpo_negro) para temperaturas entre 100&thinsp;K y 10&thinsp;000&thinsp;K. Traducida y adaptada de https://commons.wikimedia.org/wiki/File:BlackbodySpectrum_loglog_en.svg." lightbox="false" width="100%" >}}

Físicamente, cuando medimos la temperatura de un sistema, ¿a qué nos referimos? Como hemos adelantado al principio de la entrada, aunque tenga relación con el calor, no es para nada lo mismo: el calor específico de una sustancia es la energía necesaria para elevar en una unidad su temperatura. Mientras que la temperatura... bueno, es complicado.

En un gas ideal hay una relación directa entre la energía cinética de traslación de sus átomos y su temperatura. En [esta entrada]({{< relref "/post/velocidad-escape" >}}) vemos la conexión entre esto y el que un planeta pueda retener cada especie gaseosa, con implicaciones en su atmósfera.

![temperatura gas ideal](temperatura-gas-ideal.png "Relación entre la temperatura del gas ideal y su energía cinética de traslación. El gas ideal es, en bastantes ocasiones, una muy buena aproximación de los gases reales. Los átomos de gas se mueven a distintas velocidades en torno a una velocidad promedio. Un gas más caliente tiene átomos que, en promedio, viajan a mayor velocidad, como se puede ver en la curva roja respecto a la azul.")

¿Y en un sólido? Está formado por átomos o iones ordenados en ciertas distribuciones que se repiten en el espacio tridimensional, llamadas celdas unidad. Viendo imágenes como la de abajo, uno podría pensar que esos átomos están quietos en esas posiciones bien definidas...

![aluminio](aluminio.png "Estructura atómica del aluminio. La celda unidad (tipo *cúbica centrada en las caras*) está marcada en rojo. Esta celda unidad, definida por tres vectores, se repite billones de veces en todo el sólido de forma exacta, salvo por cambios de orientación e imperfecciones a escala atómica (defectos) del material. Fuentes: https://www.middleschoolchemistry.com/multimedia/chapter3/lesson1 y https://slideplayer.com/slide/7515812/.")

Cuando en realidad los átomos en un sólido están oscilando en torno a su posición de equilibrio. Cada átomo está unido a sus vecinos por enlaces; podemos visualizarlos como masas conectadas por muelles. Sin entrar en detalles, para esta entrada quedémonos con la siguiente imagen:

<blockquote class="imgur-embed-pub" lang="en" data-id="5BuKSFY"  ><a href="//imgur.com/5BuKSFY">Atomic vibration in aluminum crystal</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

En ciertos materiales y/o para cierto rango de temperatura, podemos también entender la temperatura como el movimiento promedio de las partículas que lo forman. Cuando se pierde esa definición intuitiva hay que recurrir a conceptos más abstractos como la [**entropía**]({{< relref "/post/entropia" >}}).

Bien, habiendo reflexionado sobre la temperatura, ¿cómo medirla a escalas más pequeñas y en sistemas más delicados? Por ejemplo, en medicina la temperatura intracelular ayuda a entender y controlar mejor sus procesos fisiológicos, incluido el posible desarrollo de un [cáncer](https://es.wikipedia.org/wiki/Cáncer).

No cabe duda de que un termómetro de mercurio es demasiado grande para esos sistemas. Respecto a los termómetros IR que hemos comentado anteriormente, hemos visto en la figura de radiación del cuerpo negro que la radiación que emite nuestro cuerpo tiene una longitud de onda de unas 10&thinsp;µm (0.01&thinsp;mm). Pero hay que recolectar, enfocar, interpretar... esa radiación. Por ello, este tipo de termómetros de pistola, conocidos como pirómetros de infrarrojo, suelen tener resoluciones máximas de algo menos de 1&thinsp;mm[^2].

[^2]: Ver, por ejemplo, https://www.calex.co.uk/measuring-small-objects-with-infrared-pyrometers/.

Para eso debemos encontrar un objeto más pequeño que el sistema cuya temperatura queremos medir, donde medir significa relacionar alguna propiedad de nuestro pequeño termómetro con la temperatura del sistema. Vayamos a la nanoescala y hablemos de [**fotoluminiscencia**](https://es.wikipedia.org/wiki/Fotoluminiscencia).

![escala nanométrica](https://ubuinvestiga.es/wp-content/uploads/2022/04/nanoparticula-min-1280x640.jpg "Fuente: https://ubuinvestiga.es/nanoparticulas-de-donde-vienen-y-adonde-van/.")

Hay muchas sustancias y muchos materiales que, cuando son excitados por luz de alta energía (ej. una [lámpara UV](https://es.wikipedia.org/wiki/Radiación_ultravioleta#Fuentes_artificiales)) emiten luz que depende de su composición. Un ejemplo que muchos conocimos por [CSI](https://es.wikipedia.org/wiki/CSI:_Crime_Scene_Investigation) es el [**luminol**](https://es.wikipedia.org/wiki/Luminol)[^3].

[^3]: PIN: 5-amino-2,3-dihidroftalazina-1,4-diona.

{{< spoiler text="Pincha aquí para **interactuar** con la **molécula** de **luminol** en **3D**" >}}
{{% 3Dmol data_cid="10638" %}}

[**3Dmol.js**](https://3dmol.csb.pitt.edu):

Nicholas Rego and David Koes

3Dmol.js: molecular visualization with WebGL

Bioinformatics (2015) 31 (8): 1322–1324 https://doi.org/10.1093/bioinformatics/btu829
{{< /spoiler >}}

{{< figure src="luminol.jpg" title="Demostración policial del reactivo de detección de sangre a base de luminol. Fuente: https://csillitoe.photoshelter.com/image/I0000xKrXDxB2sF0." lightbox="true" >}}

Para usar la luminiscencia para nanotermometría, necesitamos emisores de luz enanos que nos digan la temperatura a la que están. Hay pocos objetos más enanos que los [**puntos cuánticos**](https://es.wikipedia.org/wiki/Punto_cuántico) o quantum dots (QDs). Fijaos en la imagen. Los QD son nanocristales de pocos nanómetros: ¡1&thinsp;nm = la millonésima parte de 1 milímetro, solo 10 veces más grande que un átomo! Estamos de lleno en el mundo cuántico y ahí el tamaño importa; en los QDs determina su energía de emisión, es decir, su color.

{{< figure src="puntos-cuanticos.png" title="Variación del color de puntos cuánticos en función de su tamaño (diámetro). Fuente: https://www.lateralflows.com/quantum-dots/." lightbox="true" >}}

Como curiosidad, si vuestra pantalla de TV es QLED, justo está utilizando este fenómeno. Estas pantallas RGB funcionan así: el azul de la pantalla viene de un LED, el cual también sirve para excitar la emisión de QDs de dos tamaños (“verdes” o “rojos”).

Lo que nos interesa en nanotermometría es que la cantidad de luz que emiten los QDs también depende de la temperatura. Explicado de forma sencilla, a mayor temperatura, más energía utilizada en la vibración atómica y menos en emitir luz. Hay grupos de investigación[^6] que han conseguido introducir QDs en tejido animal y observar una relación luz-temperatura cuantitativa en el mismo. Así, tiñendo la zona de interés con QDs [biocompatibles](https://es.wikipedia.org/wiki/Biocompatibilidad) (es decir, que no provoquen ningún efecto indeseado en el organismo), pueden monitorizar sus cambios de temperatura a escalas enanas. ¡Tenemos nuestro nanotermómetro!

[^6]: del Rosal, B., Ximendes, E., Rocha, U., & Jaque, D. (2016). In Vivo Luminescence Nanothermometry: from Materials to Applications. Advanced Optical Materials, 5(1), 1600508. doi: 10.1002/adom.201600508.

{{< figure src="del-rosal.png" title="Terapia fototérmica controlada por temperatura con puntos cuánticos de PbS/CdS/ZnS. Fuente: https://onlinelibrary.wiley.com/doi/abs/10.1002/adom.201600508." lightbox="true" >}}

Como podéis ver en el ejemplo de la figura anterior, una vez los QDs han sido inyectados, para saber la temperatura no hace falta tocar con el sensor al ser vivo, solo iluminarlo con luz. Esta es la gran ventaja de la termometría luminiscente respecto a muchas otras; es una termometría sin contacto.

No solo los QDs; otros nanotermómetros ligeramente más grandes, como las nanopartículas de diamante[^7], son muy prometedores. Ahora bien, en todas estas investigaciones, se debe tener cuidado con los cambios en la emisión de luz por factores no-térmicos. Por ejemplo, si hacemos intensidad de luz de los QDs -> temperatura, pero esa intensidad depende también de la fuente de excitación o del número de QDs en esa zona, todo se complica. Este es un ejemplo de la complejidad a la que se enfrentan los investigadores para lograr un nanotermómetro reproducible y fiable, además de biocompatible para nuestro organismo. Por ello, aún queda trabajo pendiente de investigación y desarrollo hasta que podamos utilizar este tipo de nanotermómetros en nuestros hospitales, aunque cada vez estamos más cerca de lograrlo.

[^7]: Sotoma, S., Zhong, C., Kah, J., Yamashita, H., Plakhotnik, T., Harada, Y., & Suzuki, M. (2021). In situ measurements of intracellular thermal conductivity using heater-thermometer hybrid diamond nanosensors. Science Advances, 7(3). doi: 10.1126/sciadv.abd7888.

{{% callout note %}}
PD: En mi labor investigadora he trabajado en el desarrollo de pequeños termómetros (no tanto como los QD) que utilizan otro principio físico para medir la temperatura: la [**resonancia óptica**](https://es.wikipedia.org/wiki/Cavidad_óptica). Podéis leer más detalles sobre esto en la [entrada de **nanotermometría luminiscente II**]({{< relref "/post/nanotermometria-luminiscente-ii" >}}).
{{% /callout %}}
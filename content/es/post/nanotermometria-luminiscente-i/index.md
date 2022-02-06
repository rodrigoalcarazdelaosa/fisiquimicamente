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
---

{{% callout note %}}
Entrada basada en el siguiente 🧵 hilo de Twitter:
<div align="center">
{{< tweet user="ManoloAlonso1" id="1466094642391306246" >}}
</div>
{{% /callout %}}

Cuando pensamos en cómo se mide la [**temperatura**](https://es.wikipedia.org/wiki/Temperatura) de algo, nos vienen a la cabeza los [termómetros de mercurio](https://es.wikipedia.org/wiki/Termómetro_de_mercurio) o los [termómetros infrarrojos de pistola](https://es.wikipedia.org/wiki/Termómetro_de_infrarrojos). Pero, ¿cómo podríamos medir la temperatura en escalas más pequeñas, como la de nuestras células?

Antes de nada, como dice la metróloga Dolores del Campo en el vídeo “¿Cómo Sabemos que un Segundo vale un Segundo?” de QuantumFracture[^1], medir bien la temperatura no es nada sencillo. Ningún instrumento en la Tierra puede medir la temperatura directamente; tenemos que buscar otra magnitud que podamos medir y que varíe de una manera que conozcamos con la temperatura.

[^1]: Alrededor del minuto 7:

	{{< youtube rv2gRtVcHG4 >}}  

Por tanto, un [termómetro](https://es.wikipedia.org/wiki/Termómetro) mide un parámetro físico que cumple una relación conocida con la temperatura. El ejemplo más sencillo, que usamos desde hace más de tres siglos, es utilizar la [**dilatación** de un **líquido**]({{< ref "/apuntes-cuarto-eso/energia-trabajo-calor/index.md#dilatación" >}}): el cambio de temperatura cambia su volumen proporcionalmente.

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/4ZgLPakqTajjVFOVqw" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hot-cold-liquid-4ZgLPakqTajjVFOVqw">via GIPHY</a></p>

El volumen de un líquido no es la única magnitud física que podemos usar. ¿Por qué vemos el sol amarillo (blanco fuera de la Tierra)? ¿Por qué un metal en el horno se pone *al rojo vivo*? Los cuerpos emiten radiación debido a su temperatura. Alrededor de la temperatura ambiente, la emisión térmica es menos energética y cae en el [**infrarrojo** (IR)](https://es.wikipedia.org/wiki/Radiación_infrarroja); por tanto, no la podemos ver. Pero sí la *ven* los [termómetros infrarrojos de pistola](https://es.wikipedia.org/wiki/Termómetro_de_infrarrojos), como los que nos apuntan a la frente en esta pandemia para saber en pocos segundos si tenemos fiebre.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/hnlU3NQ0mCqD7Ujjgr" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/guavajuice-hot-temperature-fahrenheit-hnlU3NQ0mCqD7Ujjgr">via GIPHY</a></p>

La radiación IR que emite nuestro cuerpo tiene una longitud de onda de unas 10&thinsp;µm (0.01&thinsp;mm). Pero hay que recolectar, enfocar, interpretar... esa radiación. Por ello, este tipo de termómetros de pistola, conocidos como pirómetros de infrarrojo, suelen tener resoluciones máximas de algo menos de 1&thinsp;mm[^2]:

[^2]: Ver, por ejemplo, https://www.calex.co.uk/measuring-small-objects-with-infrared-pyrometers/.

{{< figure src="radiacion-cuerpo-negro-IR.svg" title="[Radiación de cuerpo negro](https://es.wikipedia.org/wiki/Radiación_de_cuerpo_negro) para temperaturas entre 100&thinsp;K y 10&thinsp;000&thinsp;K. Traducida y adaptada de https://commons.wikimedia.org/wiki/File:BlackbodySpectrum_loglog_en.svg." lightbox="false" width="100%" >}}

Medir temperaturas en tamaños de unas pocas micras es cada vez más importante. Por ejemplo, en medicina, saber la temperatura intracelular ayuda a entender y controlar mejor sus procesos fisiológicos, incluido el posible desarrollo de un cáncer. Para lograr este objetivo, viene al rescate la [**fotoluminiscencia**](https://es.wikipedia.org/wiki/Fotoluminiscencia). Hay muchas sustancias y muchos materiales que, cuando son excitados por luz de alta energía (ej. una [lámpara UV](https://es.wikipedia.org/wiki/Radiación_ultravioleta#Fuentes_artificiales)) emiten luz que depende de su composición. Un ejemplo que muchos conocimos por [CSI](https://es.wikipedia.org/wiki/CSI:_Crime_Scene_Investigation) es el [**luminol**](https://es.wikipedia.org/wiki/Luminol)[^3].

[^3]: PIN: 5-amino-2,3-dihidroftalazina-1,4-diona.

{{< spoiler text="Pincha aquí para **interactuar** con la **molécula** de **luminol** en **3D**" >}}
<script src="https://3Dmol.csb.pitt.edu/build/3Dmol-min.js"></script>
<div style="height: 300px; width: 100%; position: relative;" class='viewer_3Dmoljs' data-cid='10638' data-backgroundalpha='0.0' data-style='stick;sphere:radius~0.5' data-spin='axis:y'></div>

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
---
title: Conservación del momento angular
subtitle: Cómo afecta el derretimiento del hielo a la duración del día en la Tierra
summary: "Cómo afecta el derretimiento del hielo a la duración del día en la Tierra."
breadcrumbs: ["blog"]
date: "2022-06-22T00:00:00+02:00"
authors:
- manuel-alonso-orts
tags:
- blog
- mecánica
- momento-angular
- gravitación
- conservación
categories:
- Física
image:
  placement: 3
  caption: "https://commons.wikimedia.org/wiki/File:Greenland_42.74746W_71.57394N.jpg"
---

{{% callout thread %}}
Entrada basada en el siguiente hilo de Twitter:
<div align="center">
{{< tweet user="ManoloAlonso1" id="1526973721889611777" >}}
</div>
{{% /callout %}}

¿Sabías que el **derretimiento** del **hielo** de los **polos afecta** ligeramente a la **duración** del **día** de la Tierra? En esta entrada vamos a entender por qué ocurre y, con ecuaciones de física básica, estimar cuánto cambiaría el día si todo el hielo [**Groenlandia**](https://es.wikipedia.org/wiki/Groenlandia) se derritiera.

Hay más de una forma de definir el [**día**](https://es.wikipedia.org/wiki/D%C3%ADa). Para esta entrada voy a usar la del tiempo que tarda la Tierra en realizar una [**rotación**](https://es.wikipedia.org/wiki/Rotación_de_la_Tierra) completa respecto a su eje: 23 horas, 56 minutos y 4 segundos. Vayamos a lo que nos ocupa: ¿qué tiene que ver Groenlandia con todo esto?

{{< figure src="earth-rotation.gif" title="Fuente: https://commons.wikimedia.org/wiki/File:Rotating_earth_(huge).gif" lightbox="false" >}}

Groenlandia se encuentra prácticamente en el [eje de rotación de la Tierra](https://es.wikipedia.org/wiki/Eje_terrestre). Si el hielo de Groenlandia se distribuyera por el resto del planeta como agua, la velocidad de rotación de la Tierra caería.

{{< figure src="inclinacion-axial-tierra.png" title="Fuente: https://commons.wikimedia.org/wiki/File:Oblicuidad_o_Inclinaci%C3%B3n_Axial_de_la_Tierra.svg." lightbox="true" >}}

Aunque no hayas estudiado [Física](https://es.wikipedia.org/wiki/F%C3%ADsica), lo vas a entender con el [patinaje](https://es.wikipedia.org/wiki/Patinaje). Fijaos en este gif. Al saltar, el patinador pega sus brazos al cuerpo para lograr una mayor velocidad y los separa para frenarse. En esta analogía, los brazos pegados es el hielo cerca del eje de rotación y el frenazo al separar los brazos es el agua distribuida por la Tierra.

<div class="tenor-gif-embed" data-postid="24657836" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/ice-skating-winter-olympics2022-pirouette-gracious-air-flip-gif-24657836">Ice Skating Winter Olympics2022 GIF</a>from <a href="https://tenor.com/search/ice+skating-gifs">Ice Skating GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Como veremos, el origen físico de esto es la [**conservación del momento angular**](https://es.wikipedia.org/wiki/Momento_angular#Conservación_del_momento_angular_clásico). Hagamos números para ver si tenemos que añadir este tema como quebradero de cabeza relacionado con el [**cambio climático**](https://es.wikipedia.org/wiki/Cambio_climático) o si el efecto es demasiado pequeño para darnos cuenta. En rotación, el [**momento de inercia**](https://es.wikipedia.org/wiki/Momento_de_inercia) representa algo análogo a la masa en el movimiento rectilíneo. Es mayor cuanto mayor es la masa que rota, pero sobre todo aumenta cuanto más lejos se encuentra ésta del eje de rotación. Asumamos momento de inercia nulo para Groenlandia helada[^1].

[^1]: En Groenlandia, el hielo se encuentra distribuido en un área a cierta distancia del eje de rotación, así que su momento de inercia para nada es nulo. Pero sí será muy inferior al momento de inercia de la mayoría de las zonas de la Tierra hacia donde el agua que proviene de ese hielo se desplazará.

Por su parte, podemos tratar a la Tierra como una [**esfera**](https://es.wikipedia.org/wiki/Esfera) enorme que rota sobre su eje. Asumiendo dicha forma esférica y distribución homogénea de la masa, obtenemos el siguiente valor del momento de inercia de la Tierra:

$$
I_\mathrm{T} = \frac{2}{5}M_\mathrm T R_\mathrm T^2 = 9.7\times 10^{37}\thinspace\mathrm{kg}\thinspace\mathrm{m^2}
$$

Una vez el hielo se derrita, asumamos que el agua se distribuye homogéneamente por toda la superficie de la Tierra. Aplicamos la ecuación para una [**corona esférica**](https://es.wikipedia.org/wiki/Corona_esférica) cuyo radio interior es igual al radio exterior (aproximamos a un grosor [infinitesimal](https://es.wikipedia.org/wiki/Infinitesimal)):

$$
I_\mathrm{agua} = \frac{2}{3}M_\mathrm G R_\mathrm T^2 = 7.6\times 10^{31}\thinspace\mathrm{kg}\thinspace\mathrm{m^2}
$$

{{< figure src="momentos-inercia.svg" title="Traducida y adaptada de https://www.concepts-of-physics.com/mechanics/moment-of-inertia.php." width="100%" lightbox="false" >}}

Ese extra de momento de inercia es el que cambia la duración del día de la Tierra. Una de las [leyes de conservación](https://es.wikipedia.org/wiki/Leyes_de_conservación_(f%C3%ADsica)) más famosas de la física es la del momento angular; para un objeto en rotación, el producto de su velocidad angular (lo rápido que rota) y su momento de inercia:

$$
\sum M_\mathrm{ext} = 0 \rightarrow \frac{\mathrm d L}{\mathrm d t} = 0
$$

$$
L = I\omega = I\cdot \frac{2\pi}{T}
$$

Haciendo los cálculos, vemos que, para este modelo simplificado, la clave está en el cociente de masas. Como la masa del hielo de Groenlandia es un millón de veces menor que la del resto de la Tierra, el periodo de rotación, *T*, aumenta solo en una millonésima parte:

$$
I_1 = I_\mathrm T;\quad I_2 = I_\mathrm T + I_\mathrm{agua}
$$

$$
\frac{I_2}{I_1} = 1 + \frac{\frac{2}{3}M_\mathrm G R_\mathrm T^2}{\frac{2}{5}M_\mathrm T R_\mathrm T^2} = 1 + 7.8\times 10^{-7}
$$

$$
\frac{\mathrm d L}{\mathrm d t} = 0 \rightarrow \frac{T_2}{T_1} = 1 + 7.8\times 10^{-7} = 1.00000078
$$

$$
T_1 = 86164\thinspace\mathrm{s} \rightarrow T_2 = T_1 + 0.07\thinspace\mathrm s
$$

Hemos obtenido que el día se alargaría 0.07 segundos. Haciendo cálculos mucho más exactos, la [NASA](https://es.wikipedia.org/wiki/NASA) obtiene un valor todavía inferior: 2 milisegundos, es decir, 0.002 segundos. Así que podemos quedarnos tranquilos en ese sentido; no nos daremos ni cuenta.

<div style="width:100%;height:0;padding-bottom:55%;position:relative;"><iframe src="https://giphy.com/embed/EDt1m8p5hqXG8" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/phew-alan-ritchson-i-can-do-that-EDt1m8p5hqXG8">via GIPHY</a></p>

De hecho, el día en la Tierra se ha estado lentamente alargando por la [interacción de marea](https://es.wikipedia.org/wiki/Fuerza_de_marea) entre la Tierra y la Luna. A partir de los datos de civilizaciones antiguas sobre [eclipses lunares](https://es.wikipedia.org/wiki/Eclipse_lunar), se estima que a un ritmo de [unos 2 milisegundos cada 100 años](https://www.science.org/content/article/ancient-eclipses-show-earth-s-rotation-slowing)[^2]. Es decir, si derretimos permanentemente el hielo de Groenlandia, habremos logrado un efecto similar en el periodo de rotación de la Tierra que la Luna en un siglo.

[^2]: Como curiosidad, el pasado 29 de junio batimos el [récord del día más corto registrado](https://es.noticias.yahoo.com/tierra-gira-rapido-record-dia-corto-registrado-105540358.html) y, como puede comprobarse en [este registro](https://www.timeanddate.com/time/earth-rotation.html), desde 2020 la tendencia se ha invertido y los días en promedio también se están acortando. Por ahora, no se sabe el motivo.  

<div class="tenor-gif-embed" data-postid="14320437" data-share-method="host" data-aspect-ratio="0.884956" data-width="100%"><a href="https://tenor.com/view/landscape-full-moon-nature-goodnight-gif-14320437">Landscape Full Moon GIF</a>from <a href="https://tenor.com/search/landscape-gifs">Landscape GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Lamentablemente, hay otros factores que sí nos deben preocupar respecto a la progresiva reducción del hielo en Groenlandia que estamos viviendo en nuestro planeta: desde el aumento del nivel del mar hasta cómo afecta a la fauna de ese ecosistema.

{{< figure src="oso-polar.jpg" title="Fuente: https://www.wallpapers13.com/jump-on-a-white-polar-bear-floes-of-ice-snow-sea/" lightbox="true" >}}

Finalmente, dejo una pregunta en el aire. Hemos visto que, al derretirse el hielo, el momento angular de nuestro planeta se conserva. Otra ley física de **conservación** bastante conocida es la de la **energía**. En este caso, ¿crees que la [**energía mecánica**](https://es.wikipedia.org/wiki/Energ%C3%ADa_mecánica) de un sistema en rotación cuyos elementos cambian su distancia respecto al eje de rotación, como el planteado en este artículo (o el del bailarín), se conserva?

El ejercicio de este hilo se planteó este año en [mi facultad](https://fisicas.ucm.es) al alumnado de 1.° de Física para Ingeniería. La mayoría acertó, pero recuerdo que un estudiante respondió que el día aumentaría en 24 horas. ¡Vista la [progresiva disminución del hielo en Groenlandia](https://www.nationalgeographic.com.es/ciencia/perdida-hielo-global-alcanza-nuevo-record_16274) y en el resto de las zonas polares debido al cambio climático no sé cómo pudo dormir tranquilo esa noche!

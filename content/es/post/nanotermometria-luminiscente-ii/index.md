---
title: Nanotermometría luminiscente II
subtitle: ¿En qué se puede parecer una clase de termómetros enanos y detectores de ondas gravitatorias como LIGO?
summary: "¿En qué se puede parecer una clase de termómetros enanos y detectores de ondas gravitatorias como LIGO?"
breadcrumbs: ["blog"]
date: "2022-03-08T00:00:00Z"
authors:
- manuel-alonso-orts
tags:
- blog
- energía
- nanotermometría
- luminiscencia
- termómetros
- gravitación
- electromagnetismo
- LIGO
categories:
- Física
image:
  placement: 3
  caption: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/cphc.201500753"
---

{{% callout thread %}}
Entrada basada en el siguiente hilo de Twitter:
<div align="center">
{{< tweet user="ManoloAlonso1" id="1468646024789037056" >}}
</div>
{{% /callout %}}

¿En qué se puede parecer una clase de termómetros enanos y detectores de ondas gravitatorias como [**LIGO**](https://es.wikipedia.org/wiki/LIGO)? No puede ser en su aplicación, y mucho menos en su tamaño: su diferencia de escala es tan grande como la que hay entre una pelota de tenis y la Tierra. ¿Entonces? Continúa leyendo y verás la utilidad de una propiedad básica de las ondas electromagnéticas para desarrollar dos dispositivos que nos ayudan en dos áreas científicas totalmente distintas entre sí.

Empecemos por la **nanotermometría**. Como vimos en el [artículo anterior]({{< relref "/post/nanotermometria-luminiscente-i" >}}), actualmente se están desarrollando termómetros miles de veces más pequeños que un milímetro cuya emisión de luz nos indica la temperatura a la que está lo que queramos medir. Pero la cosa no queda ahí. Fijaos en el ratón de la imagen inferior. En este estudio, los autores inocularon nanopartículas de 12 nanómetros de diámetro de LaF<sub>3</sub>:Nd<sup>3+</sup> (fluoruro de lantano dopado; añadiendo unos pocos iones de Nd) en uno de los dos tumores y las excitaron con un láser. Lograron no solo medir la temperatura a partir de la luz emitida por las nanopartículas, sino que debido a que el láser también las calienta ¡con ello tratan el tumor!

{{< figure src="carrasco.png" title="a) Imagen óptica de un ratón con dos tumores. b,c) Imágenes de fluorescencia infrarroja y térmica del mismo ratón bajo irradiación láser de 808&thinsp;nm (4&thinsp;W/cm<sup>2</sup>), respectivamente. d) Evolución temporal de la temperatura en la superficie del tumor obtenida a partir del análisis de imágenes térmicas infrarrojas. Fuente: https://onlinelibrary.wiley.com/doi/10.1002/adfm.201403653." lightbox="true" >}}

¿Cómo se mide la temperatura a partir de la luz emitida? En muchos casos monitorizando su intensidad, teniendo cuidado con factores no-térmicos. ¿Podemos medir cualquier temperatura así? Depende de la naturaleza de las nanopartículas o los [puntos cuánticos](https://es.wikipedia.org/wiki/Punto_cuántico) utilizados; en muchas ocasiones, como la del [artículo anterior](https://onlinelibrary.wiley.com/doi/10.1002/adfm.201403653), el rango de medida no es más allá de unas decenas de grados centígrados. Este rango de temperaturas suele ser suficiente en aplicaciones como la anterior, donde se pretende monitorizar y eliminar un tumor cancerígeno mediante el calentamiento celular selectivo.

Sin embargo, los nanotermómetros también tienen aplicaciones en lugares donde puede haber una mayor temperatura a medir. Por ejemplo, casi todo lo que utilizamos en nuestro día a día depende de dispositivos electrónicos basados en transistores cada vez más pequeños, siendo los más pequeños del tamaño nanométrico. Como se puede ver en la gráfica inferior, al operar a tan alta potencia en tan pequeño espacio, los flujos de calor que soportan pueden ser mayores que los motores de un cohete. En estos casos, es necesario controlar su temperatura, y dicho control debe ejercerse a escalas cada vez menores.

{{< figure src="DARPA.png" title="Gráfico que muestra el aumento de las densidades de flujo térmico en dispositivos microelectrónicos avanzados (representados por barras). Los puntos rojos muestran la comparación con otras fuentes de calor naturales y artificiales, a modo de escala. Fuente: https://scholar.smu.edu/engineering_mechanical_etds/31/." lightbox="true" >}}

Actualmente se están proponiendo distintos micro/nanotermómetros que miden mayores rangos de temperatura para este tipo de aplicaciones, cada uno con sus fortalezas y sus flaquezas. En este artículo vamos a ver el que más me toca de cerca; [el que desarrollé junto con mis directores de tesis doctoral y otros colaboradores](https://onlinelibrary.wiley.com/doi/10.1002/smll.202105355).

¿Cómo funciona nuestro pequeño termómetro? Utilizamos micro o nanohilos de un material, el Ga<sub>2</sub>O<sub>3</sub> dopado con Cr<sup>3+</sup>, cuya emisión de luz es ancha espectralmente; desde el rojo hasta el infrarrojo (IR) cercano. A diferencia de en puntos cuánticos y en algunas nanopartículas, esta emisión es más intensa a temperaturas altas con respecto a la temperatura ambiente. Aquí veis una imagen de uno de ellos depositado sobre un sustrato, emitiendo luz roja al ser excitado con un láser ultravioleta. Es decir, la luz roja que veis en la imagen la emite el propio hilo, y corresponde al espectro de emisión de luz típico del material que podéis ver a la derecha de la imagen.

{{< figure src="termometro-malonso.png" lightbox="true" >}}

¿Cómo medimos la temperatura con nanohilos como estos? Podríamos calibrarlo a partir de la intensidad, como hacen otros termómetros ópticos, pero la relación no sigue una ley física sencilla y depende de la intensidad del láser incidente, lo que complica en gran medida la calibración del mismo. Así que preparamos un nanohilo donde, además de la emisión que hemos visto en la figura anterior, hay unos picos de emisión de luz que cambian con la temperatura. ¿De dónde vienen? ¿Por qué se desplazan así?

{{< figure src="espectros-nanohilo.png" lightbox="true" >}}

Se debe a unos *nanoespejos* que hemos fabricado en los nanohilos. Estos reflejan la emisión de luz roja-IR del nanohilo en sus lados. De la misma forma que en una cavidad láser (pero sin llegar a tener emisión estimulada) ciertas longitudes de onda de la luz, aquellas que cumplan la condición de interferencia constructiva entre las ondas emitidas y las reflejadas en los espejos, son favorecidas respecto al resto. A estas longitudes de onda se les denomina longitudes de onda resonantes.

Una analogía para entender mejor esto sin entrar en demostraciones matemáticas es la de un instrumento musical de cuerda, como una guitarra. La explicación detallada se sale del objetivo de este artículo; es suficiente con que imaginéis las longitudes de onda de la luz resonantes explicadas anteriormente de la misma forma que los modos de vibración resonantes en una cuerda de guitarra. ¿De qué depende el valor de dichas longitudes de onda? Tanto en nuestra cavidad como en una cuerda, del medio material en el que se propagan las ondas y de la distancia entre los nodos (en nuestro caso, entre los *nanoespejos*). Con esta información, quizá puedas deducir por qué los modos resonantes en nuestro nanohilo dependen de la temperatura.

{{< figure src="nodos-guitarra.svg" lightbox="false" width="100%" >}}

Quizá hayas pensado en un cambio en el tamaño del nanohilo. Muchos materiales [se expanden al calentarse]({{< ref "/apuntes-cuarto-eso/energia-trabajo-calor/index.md#dilatación" >}}), como se muestra por ejemplo en el siguiente vídeo:

{{< youtube 6bg5Lzv5_08 >}}

¿Ocurrirá lo mismo aquí? ¡Así es! Al expandirse, la distancia entre los nodos (entre los *nanoespejos*) aumenta, lo cual aumenta la longitud de onda resonante. Este factor, junto con otro factor más importante cuantitativamente llamado el índice de refracción (propiedad básica del medio material donde se propaga la luz, también dependiente de la temperatura del material), actúan en el mismo sentido y explican el desplazamiento de los picos de luminiscencia del nanohilo con la temperatura. Ese desplazamiento hacia el rojo es el que podemos cuantificar fácilmente y utilizar para medir la misma.

{{< figure library="true" src="energia-trabajo-calor-4ESO/dilatacion.svg" lightbox="false" title="$\Delta l = \alpha\cdot l_0\cdot \Delta T$. Adaptada de https://commons.wikimedia.org/wiki/File:Thermal-expansion.svg." width="100%" >}}

De ahí viene la analogía con el detector de ondas gravitacionales [**LIGO**](https://es.wikipedia.org/wiki/LIGO) que se había planteado al principio del artículo: cuando una onda gravitatoria pasa por el detector, hay un cambio minúsculo de la longitud relativa entre sus brazos, lo cual cambia la condición de interferencia de la luz en su punto de encuentro y permite la detección de la misma. Como veis, en ambos casos, es el minúsculo cambio en la longitud del dispositivo junto con un proceso físico tan preciso como la interferencia de las ondas, lo que permite medir el cambio de un parámetro físico (en el caso del LIGO, ¡el propio espacio-tiempo!). En este vídeo podéis ver con más detalle cómo funciona el detector LIGO:

{{< youtube fxExuoEZV1k >}}

Como hemos visto antes, en nuestro termómetro, al calentar el nanohilo, ya sea con una estufa o con un láser, éste se expande ligeramente. Dicha expansión térmica, junto con el cambio del índice de refracción en el material, hace que las ondas resonantes en el hilo sean ligeramente mayores (“más rojas”) que cuando está a temperatura ambiente. Lo contrario ocurre si el hilo se enfría. Como veis en la figura de abajo, hemos podido calibrar nuestro termómetro óptico de forma sencilla: el cambio en las longitudes de onda resonantes es prácticamente lineal con la temperatura.

{{< figure src="calibrado-nanohilo.png" title="https://onlinelibrary.wiley.com/doi/10.1002/smll.202105355" lightbox="true" >}}

Con esta técnica hemos medido temperaturas desde mucho más frías que en el ártico en invierno (150&thinsp;K = –123&thinsp;&deg;C) hasta más calientes que en un horno casero (537&thinsp;K = 264&thinsp;&deg;C). Todo ello con un instrumento unas 1&thinsp;000 veces más pequeño que un pelo humano, lo cual permite reducir mucho la escala a la que puede medir dichas temperaturas.

{{< figure src="rango-temperatura.png" title="https://onlinelibrary.wiley.com/doi/10.1002/smll.202105355" lightbox="true" >}}

Este pequeño termómetro luminiscente es un ejemplo de muchos nanotermómetros en proceso de investigación. Con ellos vemos que, mediante el desarrollo de distintos nanomateriales y la aplicación de conceptos de física básica, estamos en camino de medir y controlar la temperatura de los elementos básicos de nuestro mundo, desde las células de los seres vivos hasta los chips electrónicos.

<div class="tenor-gif-embed" data-postid="19286031" data-share-method="host" data-aspect-ratio="1.83908" data-width="100%"><a href="https://tenor.com/view/semi-semiconductor-microfluidics-etch-gif-19286031">Semi Semiconductor GIF</a>from <a href="https://tenor.com/search/semi-gifs">Semi GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
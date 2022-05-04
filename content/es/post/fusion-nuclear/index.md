---
title: Fusión nuclear
subtitle: El camino hacia la utopía nuclear
summary: "El camino hacia la utopía nuclear."
breadcrumbs: ["blog"]
date: "2022-01-29T00:00:00Z"
authors:
- pilar-palanca
- juan-docon
tags:
- blog
- energía
- fusión-nuclear
- ITER
- tokamak
- hidrógeno
- helio
- plasma
categories:
- Física
image:
  placement: 3
  caption: "Recreación del reactor de fusión nuclear terminado. Rodeado de toda la maquinaria tenemos el *rosco* que en la imagen aparece abierto en una sección para poder mostrar lo que debería haber dentro.<br>Fuente: [https://www.iter.org/proj/inafewlines](https://www.iter.org/proj/inafewlines)."
---

{{% callout note %}}
Entrada basada en el siguiente 🧵 hilo de Twitter:
<div align="center">
{{< tweet user="BTeseracto" id="1487123373729751041" >}}
</div>
{{% /callout %}}

La humanidad necesita cada vez más una fuente de energía limpia, segura y sostenible, y convertir hidrógeno en helio podría ser la solución. Hablemos de [**fusión nuclear**](https://es.wikipedia.org/wiki/Fusión_nuclear) y de cómo conseguir emular el poder de las estrellas desde nuestro pequeño planeta.

## Energía de enlace nuclear

**Objetivo**: conseguir que núcleos de hidrógeno pasen a ser núcleos de helio. El motivo: el núcleo de helio pesa menos que la suma de los núcleos de hidrógeno. Esto es así porque tiene una mayor [energía de enlace](https://es.wikipedia.org/wiki/Energ%C3%ADa_de_enlace_nuclear) por nucleón.

{{< figure src="energia-enlace.svg" title="Gráfica de la energía de enlace por nucleón (en MeV) en función del número de nucleones en el núcleo. Al principio, la energía de enlace crece enormemente al aumentar el número de nucleones hasta llegar al hierro (<sup>56</sup>Fe), donde es máxima. A partir de ahí desciende moderadamente al ir avanzando hacia elementos más pesados. Adaptada de https://commons.wikimedia.org/wiki/File:Binding_energy_curve_-_common_isotopes-es.svg." lightbox="false" width="100%" >}}

Brevemente, en un núcleo de helio los protones y los neutrones que lo forman están pegados con más fuerza que en uno de hidrógeno. Esto se traduce en una menor masa, proporcionalmente hablando. Esta diferencia de masa se transforma en energía, como dice la [ecuación de Einstein](https://es.wikipedia.org/wiki/Equivalencia_entre_masa_y_energ%C3%ADa):

$$
E = mc^2
$$

## Cadenas protón-protón

Esta es la fuente de energía de las estrellas. Convierten el hidrógeno de sus núcleos en helio y aprovechan la energía resultante de ese proceso para aumentar su temperatura y contrarrestar la presión que su propia gravedad ejerce sobre ellas. En estrellas como el Sol, esto se hace mediante las llamadas [**cadenas protón-protón** (cadenas pp)](https://es.wikipedia.org/wiki/Cadena_protón-protón).

{{< figure src="cadena-ppi.jpg" title="Esquema de las cadenas protón-protón (pp). Arriba del todo tenemos los procesos en los que dos núcleos de hidrógeno generan deuterio (<sup>2</sup>H). A continuación, la creación de helio–3 a partir del deuterio y otro protón y a partir de aquí el proceso se ramifica en las tres cadenas protón-protón. La primera y más probable es la que se produce con dos núcleos de helio–3 para generar helio. Las otras dos utilizan elementos más pesados, pero igualmente llegan al helio." lightbox="true" >}}

Vamos a hablar de la más típica, la que se da en el 91&thinsp;% de las ocasiones, la cadena pp I. Esta historia comienza con dos núcleos de hidrógeno. Es decir, dos protones. El primer paso es que estos dos protones se unan, eso dará pie a la creación de [**deuterio**](https://es.wikipedia.org/wiki/Deuterio), que es un isótopo del hidrógeno compuesto por un protón y un neutrón. La cosa es que esto es muy difícil que suceda, pues los dos protones se van a repeler por su repulsión electrostática.

{{< figure src="isotopos-H.jpg" title="Imagen esquemática de los tres isótopos del hidrógeno. El protio con solo un protón, el deuterio con un protón y un neutrón y el tritio con un protón y dos neutrones." lightbox="true" >}}

### Efecto túnel cuántico

Para lograr vencer esta repulsión hace falta una enorme temperatura y presión. Temperatura y presión que en el núcleo de nuestro Sol no se dan. Este primer eslabón de la cadena se produce gracias al [**efecto túnel cuántico**](https://es.wikipedia.org/wiki/Efecto_túnel), pues sucede que, por un capricho de la [física cuántica](https://es.wikipedia.org/wiki/Mecánica_cuántica), los protones tienen una probabilidad no nula de estar más allá de la barrera que genera su campo eléctrico. Sobra decir que las posibilidades de que esto suceda son bajísimas, con lo que puede llevar en promedio miles de millones de años que dos protones se unan para formar deuterio. De no ser por esto, el Sol habría ardido hace ya mucho.

El siguiente paso se da cuando a este núcleo de deuterio se le uno otro de hidrógeno (un protón), lo que sucede en cuestión de segundos. Con lo que el deuterio que ha llevado miles de millones de años crear se convierte de forma casi instantánea en helio–3. El helio–3 es un isótopo del helio con dos protones y un neutrón. Pero este no es el último paso, antes de terminar, este núcleo de helio–3 debe fusionarse con otro como él para, ahora sí, crear el helio que estábamos buscando. Como resultado final tenemos que cuatro núcleos de hidrógeno son ahora uno de helio, que tiene menor masa que la suma de los cuatro protones originales. Esto se traduce en una liberación de energía.

{{< figure src="fusion-H.jpg" title="Imagen esquemática para ilustrar que cuatro protones (representados por círculos negros con signos positivos blancos) pesan más que un núcleo de helio (representado por dos círculos negros y dos blancos)." lightbox="true" >}}

Así es como lo hace el Sol, y lo hace a costa de contar con una cantidad inmensa de temperatura y presión y aún con todo, solo lo logra gracias a un capricho de la física cuántica. Ahora tenemos que ver cómo desde nuestro pequeño planeta podemos replicar un logro así. Estamos limitados por nuestra escala, pero por suerte somos algo más listos que una bola de gas, por gigantesca que esta sea. Tenemos que compensar nuestras limitaciones usando nuestro intelecto. Hablemos del proyecto [**ITER**](https://es.wikipedia.org/wiki/ITER).

## ITER

{{< figure src="ITER.jpg" title="Imagen del reactor del ITER con todas las instalaciones a su alrededor. En la imagen solo aparece la mitad de las instalaciones puesto que se ha hecho una sección para poder mostrar su interior. Fuente: https://www.iter.org/album/Media/7%20-%20Technical" lightbox="true" >}}

International Thermonuclear Experimental Reactor, ITER o camino en latín. Es un [reactor de fusión nuclear](https://es.wikipedia.org/wiki/Reactores_de_fusión_nuclear) que se está construyendo en [Cadarache](https://es.wikipedia.org/wiki/Cadarache), al sur de Francia, con la colaboración de 35 países.

{{< figure src="ITER-participantes.png" title="Mapa del mundo donde aparecen resaltados los países que colaboran con el proyecto. Estos son: China, la Unión Europea, India, Japón, Rusia, Corea del Sur, Estados Unidos, Australia, Canadá, Kazajistán, Tailandia, Reino Unido y Suiza. Fuente: https://commons.wikimedia.org/wiki/File:ITER_participants.svg" lightbox="true" >}}

La idea es lograr demostrar que la fusión nuclear puede ser energéticamente rentable en un reactor artificial. Esto abriría la puerta a la generación de una energía limpia, segura y, virtualmente hablando, infinita. Aquí hay un punto muy importante que habíamos dejado correr: la producción de deuterio. Hemos dicho que al Sol le lleva en promedio miles de millones de años hacerlo... No parece que a nosotros nos pueda ir mucho mejor. ¿Cómo podemos hacer para realizar este primer paso? Fácil, nos lo saltamos. El plan es utilizar directamente deuterio o tritio (el otro isótopo del hidrógeno compuesto de dos neutrones y un protón). Pero, ¿cómo va a funcionar este reactor? El ITER es un reactor de tipo [**Tokamak**](https://es.wikipedia.org/wiki/Tokamak), acrónimo ruso que viene a significar cámara [toroidal](https://es.wikipedia.org/wiki/Toro_(geometr%C3%ADa)) con espirales magnéticas. Es decir, un rosco rodeado por espirales que generan un campo magnético.

{{< figure src="tokamak.jpg" title="Imagen de una sección del reactor, donde se pretende mostrar la forma de este. Fuente: https://www.iter.org/mach/tokamak" lightbox="true" >}}

Esta forma no es baladí. Pero, para entender su porqué, debemos hablar de aquello que el reactor tendrá que contener. Nada más y nada menos que [**plasma**]({{< relref "/post/plasma" >}}) de hidrógeno a varios millones de grados centígrados de temperatura. Con lo cual tendremos plasma. El cuarto estado de la materia, similar al gaseoso pero cargado eléctricamente, pues sus electrones se han separado de los núcleos atómicos, los átomos están ionizados. El hecho de que esté cargado eléctricamente es vital, pues es sensible a los campos magnéticos, generados por las espirales magnéticas de nuestro toroide. Así, el plasma nunca tocará unas paredes que difícilmente podrían aguantar el embate de una masa a esa temperatura. Esto es así dado que el campo magnético repelerá el plasma y lo obligará a circular por el toroide, por eso tiene esta forma en concreto.

{{< figure src="tokamak-2.jpg" title="Imagen de una sección del reactor, donde se pretende mostrar la forma de este. Fuente: https://www.iter.org/" lightbox="true" >}}

Este es uno de los proyectos en los que se está trabajando con el objetivo de desarrollar los conocimientos y tecnologías necesarios para hacer de la fusión nuclear un método de obtención de energía. Y con esto lograr nuestra particular utopía nuclear.

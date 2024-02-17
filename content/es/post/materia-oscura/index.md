---
title: Materia oscura
subtitle: Evidencias de su existencia, qué puede ser y cómo encontrarla
summary: "Evidencias de su existencia, qué puede ser y cómo encontrarla."
breadcrumbs: ["blog"]
date: "2024-02-17T00:00:00"
authors:
- pilar-palanca
- juan-docon
tags:
- blog
- gravitación
- materia-oscura
- lentes-gravitatorias
- modelo-estándar
- neutrinos
- agujeros-negros
- WIMPs
- axiones
- gravitinos
- neutrinos-estériles
categories:
- Física
image:
  placement: 3
  caption: "https://commons.wikimedia.org/wiki/File:CL0024%2B17.jpg"

math: true
---

{{% toc %}}

{{% callout thread %}}
Entrada basada en el siguiente hilo de Twitter:
<div align="center">
{{< tweet user="BTeseracto" id="1740055006831583258" >}}
</div>
{{% /callout %}}

Cerca del 27&thinsp;% de lo que hay en nuestro universo es [**materia oscura**](https://es.wikipedia.org/wiki/Materia_oscura). Eso es más de 5 veces la cantidad de materia "normal" que nos compone a nosotros y todo lo demás. Aunque seguimos sin saber qué es. Veamos cómo se ha llegado a esta conclusión y qué barajamos que podría ser.

![tarta](https://svs.gsfc.nasa.gov/vis/a010000/a012300/a012307/frame-000215_print.jpg "Gráfica circular en la que aparecen las tres componentes del universo. Con un 4.9&thinsp;% tenemos la materia ordinaria, un 26.8&thinsp;% la materia oscura y un 68.3&thinsp;% la energía oscura. Fuente: https://svs.gsfc.nasa.gov/12307.")

## Evidencias de la existencia de la materia oscura

Los indicios de que algo se nos escapaba venían de lejos. Ya en 1933 [Zwicky](https://es.wikipedia.org/wiki/Fritz_Zwicky) vio que las velocidades de las galaxias en el [cúmulo de Coma](https://es.wikipedia.org/wiki/Cúmulo_de_Coma) eran muy superiores de lo que su supuesta masa podía explicar.

![Coma](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ssc2007-10a1.jpg/1180px-Ssc2007-10a1.jpg "Imagen del cúmulo de galaxias. Sobre fondo negro tenemos un montón de luces que son las diferentes galaxias del cúmulo. Fuente: https://commons.wikimedia.org/wiki/File:Ssc2007-10a1.jpg.")

Su conclusión fue que, de confirmarse el resultado, esta materia que no se podía ver (ya la llamó materia oscura) sería mucho más abundante que la materia que sí podemos percibir. Unos años después, en 1936, [Sinclair Smith](https://en.wikipedia.org/wiki/Sinclair_Smith_(astronomer)) tuvo un resultado igualmente desconcertante al tratar de medir la masa de las galaxias en el [cúmulo de Virgo](https://es.wikipedia.org/wiki/Cúmulo_de_Virgo) y obtener un resultado 200 veces superior al que esperaba.

Esta cuestión fue objeto de debate durante las siguientes décadas sin llegar a buen puerto. No obstante, el tema tuvo una revolución en los años 70 cuanto [Vera Rubin](https://es.wikipedia.org/wiki/Vera_Rubin) y [Kent Ford](https://en.wikipedia.org/wiki/Kent_Ford_(astronomer)) pudieron medir la rotación de la [galaxia de Andrómeda](https://es.wikipedia.org/wiki/Galaxia_de_Andrómeda). Si solamente existiera la masa que podemos ver, lo que cabría esperar es que al alejarse del centro de la galaxia todo debería orbitar más despacio, puesto que de lo contrario su órbita sería muy diferente. Esto no fue lo que observaron:

![curva rotación](curva-rotacion.png "Gráfica en la que se compara el resultado esperado y el obtenido. En el eje horizontal está la distancia al centro de la galaxia en años luz y en el eje vertical la velocidad del cuerpo. Hay una línea discontinua con el resultado esperado en el cual la curva cae al alejarte del centro de la galaxia y una línea continua con el resultado medido en la que se ve cómo la velocidad de los cuerpos crece al alejarse del centro de la galaxia. Fuente: https://commons.wikimedia.org/wiki/File:Rotation_curve_of_spiral_galaxy_Messier_33_(Triangulum).png.")

En la gráfica anterior tenemos un ejemplo de lo que se obtiene al medir la velocidad de rotación de los cuerpos de una galaxia al aumentar su distancia al centro de esta. Como puede verse, en lugar de caer con la distancia, se mantiene constante. La curva es prácticamente plana. Para ilustrar esto podemos suponer que las órbitas en las galaxias son circulares, y para ello debe cumplirse que su fuerza centrípeta sea igual a la fuerza gravitatoria que le impone la galaxia, llegando fácilmente a una fórmula para la [velocidad que debe llevar un objeto para tener una órbita circular](https://es.wikipedia.org/wiki/Velocidad_orbital):

\begin{align*}
F_\mathrm{gravitatoria} &= F_\mathrm{centrípeta} \\\\
G\frac{M\cancel m}{r^{\cancel 2}} &= \frac{\cancel mv^2}{\cancel r} \Rightarrow v = \sqrt{\frac{GM}{r}},
\end{align*}

donde $G=6.67430(15)\times 10^{-11}\thinspace \mathrm{N\thinspace m^2\thinspace kg^{-2}}$ es la [constante de gravitación universal](https://es.wikipedia.org/wiki/Constante_de_gravitación_universal), $M$ es la masa de la galaxia, $m$ es la masa del objeto en órbita, $r$ es la distancia al centro galáctico y $v$ la velocidad del objeto. La conclusión a la que podemos llegar es relativamente simple, si el radio aumenta sin que cambie demasiado la velocidad debe haber más masa.

### Efecto lente gravitatoria

Esta es una de las **evidencias** que tenemos de la existencia de materia oscura. Pero hay más. Como ya hemos comentado antes, los efectos de la materia oscura también son relevantes cuando tratamos con cúmulos de galaxias. Uno de los casos más icónicos de esto es el [cúmulo Bala](https://es.wikipedia.org/wiki/Cúmulo_Bala). Este cúmulo consiste en dos cúmulos de galaxias que al interactuar se han separado del gas (que acapara la mayoría de la masa) y aun así siguen produciendo un efecto de [**lente gravitatoria**](https://es.wikipedia.org/wiki/Lente_gravitatoria) generado por la materia oscura.

![bala](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/1e0657_scale.jpg/1280px-1e0657_scale.jpg "Imagen del cúmulo. Al fondo aparecen multitud de galaxias como puntos blancos y amarillos. En frente tenemos los cúmulos, con dos zonas rosas en la parte interior, y otras dos zonas azules externas. Fuente: https://commons.wikimedia.org/wiki/File:1e0657_scale.jpg.")

En estos cúmulos la mayor parte de la masa está en el gas intergaláctico que tiene del orden de 15 veces más masa que las galaxias. Gas que podemos "ver" gracias a su emisión en [rayos X](https://es.wikipedia.org/wiki/Rayos_X). Estos dos cúmulos llevan colisionando cientos de millones de años y en este instante ya se están alejando. No obstante, dicha interacción provocó que el gas intergaláctico (la zona rosa de la imagen) fuese desplazado y separado del resto del cúmulo.

Esto fue así porque las estrellas y otros cuerpos más masivos apenas interactuaron, pero las gigantescas nubes de gas friccionan entre ellas. Por tanto, las galaxias han seguido adelante dejando atrás el gas intergaláctico que supone la mayor parte de la masa de los cúmulos. Lo interesante de esto es que el gas fue dejado atrás, pero el efecto lente gravitatoria no. Este efecto sobre la luz es debido a la curvatura del espacio tiempo producida, en este caso, por la enorme masa de las galaxias.

![lente gravitatoria](https://upload.wikimedia.org/wikipedia/commons/0/02/Gravitational_lens-full.jpg "Ilustración del efecto de lente gravitatoria. Se representa un grupo de galaxias cercanas cuya luz llega hasta la Tierra, en mitad de su camino se cruza con otro grupo de galaxias que cambia su trayectoria. Esto propicia que la posición de las galaxias vista desde la Tierra cambie. Fuente: https://commons.wikimedia.org/wiki/File:Gravitational_lens-full.jpg.")

Al desplazarse el gas, se esperaría que este efecto de lente se fuera con él, pero se queda con las estrellas. Una prueba de que la mayor parte de la masa de las galaxias es algo que no podemos ver y que no interactúa. La materia oscura. Pero la cosa no termina aquí, las pruebas de que hay más masa de la que somos capaces de percibir no se quedan en las escalas de las galaxias ni en las de los cúmulos de galaxias. Esto llega hasta la distribución de la masa en todo el universo. Se estima que la materia oscura fue un componente necesario en la formación de las estructuras galácticas que hoy conocemos, puesto que dieron la masa necesaria para que la acción de la gravedad pudiese crear estas estructuras cuando se formaron los átomos en nuestro universo.

## ¿Qué puede ser la materia oscura?

Con esto tenemos un gran número de evidencias que nos indican que solo conocemos como el 20&thinsp;% de la masa que nos rodea, lo que nos deja con una pregunta: ¿Qué puede ser esta materia oscura? Por lo que hemos podido observar, la materia oscura debe ser masiva, estable durante miles de millones años, que interactúe mayormente gravitatoriamente, de carga neutra y que no esté compuesta por bariones como pueden ser los protones o los neutrones.

### Neutrinos

Dentro del [**modelo estándar**]({{< relref "apuntes-segundo-bach-quimica/estructura-materia/index.md#modelo-estándar" >}}) (las partículas que conocemos) las únicas partículas que podrían cumplir estos requisitos serían los [**neutrinos**](https://es.wikipedia.org/wiki/Neutrino). No obstante, los neutrinos tienen un problema y es que tienden a desplazarse a velocidades cercanas a las de la luz. Sería lo que llamaríamos [materia oscura caliente](https://es.wikipedia.org/wiki/Materia_oscura_caliente), pero como hemos dicho antes, la materia oscura ayudó a moldear nuestro universo cuando se crearon los átomos y las estructuras galácticas. Si la materia oscura fuese caliente nuestro universo sería muy diferente ahora mismo.

### Agujeros negros

Antes de salir del modelo estándar y adentrarnos en lo desconocido, sería lógico pensar en otra posibilidad que conocemos. Una que tiene masa y no podemos ver: [**agujeros negros**](https://es.wikipedia.org/wiki/Agujero_negro). Por lo que hemos podido encontrar esta opción se ha ido descartando puesto que se ha podido poner límites observacionales a la abundancia de los agujeros negros de cualquier masa. Nuestro gozo en un pozo, con esto no se puede explicar la masa que nos falta.

### Más allá del modelo estándar

Parece que no nos queda más remedio que buscar partículas más allá del modelo estándar. Por suerte, esta es una ilusión que tiene mucha de la gente que se dedica a la física, así que por falta de ideas no será. Antes de nada hay que tener en cuenta que no es necesario reinventar la rueda. Podemos explorar las partículas hipotéticas que ya tratan de resolver otros problemas que la física aún tiene pendientes. Las primeras que suelen aparecer en las referencias que hemos encontrado son las [WIMPs](https://es.wikipedia.org/wiki/WIMP) (partículas masivas débilmente interactuantes, por sus iniciales en inglés). Seguidos por los [axiones](https://es.wikipedia.org/wiki/Axión), los [gravitinos](https://es.wikipedia.org/wiki/Gravitino) (el compañero [supersimétrico](https://es.wikipedia.org/wiki/Supersimetría) del [gravitón](https://es.wikipedia.org/wiki/Gravitón)) o los [neutrinos estériles](https://es.wikipedia.org/wiki/Neutrino_estéril).

## ¿Cómo encontrar la materia oscura?

Parece ser que no sabemos si la materia oscura puede estar compuesta por una o más de las partículas anteriormente mencionadas, o si se trata de otro conjunto de partículas que pudiesen formar algo similar a un modelo estándar con partículas de materia oscura. Pero entonces, ¿cómo podemos buscar algo que ni siquiera sabemos de qué puede tratarse? Tenemos **3 vías de acción**:

1. Detectar directamente la creación de alguna de estas partículas.
2. Buscar interacciones que las nuevas partículas puedan tener sobre las conocidas.
3. Buscar partículas del modelo estándar que vengan de la desintegración de partículas de materia oscura.

Por poner un ejemplo, si hablamos de localizar WIMPs, no se espera poder encontrarlas directamente en un acelerador, puesto que aun creándolas serían tan difíciles de detectar como los neutrinos. Aun así sería posible inferir su presencia puesto que partículas del modelo estándar como los [gluones](https://es.wikipedia.org/wiki/Gluon) o [quarks](https://es.wikipedia.org/wiki/Cuark) podrían decaer en otras partículas teóricas que a su vez decayesen en WIMPs con lo que podríamos ver una falta de energía al reconstruir la secuencia. Como te habrás podido imaginar, esto no se ha encontrado. Otra vía sería una detección directa al interactuar con un núcleo. Parece ser que este sería un evento muy poco probable y difícil de detectar. No obstante, se ha intentado sin éxito en detectores como [CRESST](https://en.wikipedia.org/wiki/Cryogenic_Rare_Event_Search_with_Superconducting_Thermometers) o [CoGeNT](https://en.wikipedia.org/wiki/CoGeNT).

En resumen, tenemos una proporción enorme de nuestro universo que no sabemos qué es, ni cómo buscarla, por lo que probablemente este será un tema que aún lleve mucho tiempo ser resuelto.

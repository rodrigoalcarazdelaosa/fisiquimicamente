---
title: Ni caos ni desorden. ¿Qué es la entropía?
subtitle: Una breve explicación sobre una de las magnitudes que más caos ha generado
summary: "Una breve explicación sobre una de las magnitudes que más caos ha generado."
breadcrumbs: ["blog"]
date: "2022-01-23T00:00:00Z"
authors:
- pilar-palanca
- juan-docon
tags:
- blog
- termodinámica
- termoquímica
- entropía
categories:
- Física
image:
  placement: 3
  caption: "Tumba de [**Ludwig Boltzmann**](https://es.wikipedia.org/wiki/Ludwig_Boltzmann) en el [cementerio central de Viena](https://es.wikipedia.org/wiki/Cementerio_central_de_Viena) con la ecuación de la **entropía**.<br>Fuente: [https://commons.wikimedia.org/wiki/File:Zentralfriedhof_Vienna_-_Boltzmann.JPG](https://commons.wikimedia.org/wiki/File:Zentralfriedhof_Vienna_-_Boltzmann.JPG)"
---

{{% callout note %}}
Entrada basada en el siguiente 🧵 hilo de Twitter:
<div align="center">
{{< tweet user="BTeseracto" id="1484224720102989828" >}}
</div>
{{% /callout %}}

Empecemos proponiendo un caso concreto bastante típico. Tenemos una caja dividida por una pared: una mitad de la caja está llena de un gas, la otra está vacía. ¿Qué pasará si quitamos la pared separadora? La respuesta es bastante intuitiva. El gas se expandirá y llenará todo el espacio, y con ello la [**entropía**](https://es.wikipedia.org/wiki/Entrop%C3%ADa) aumentará. ¿Por qué aumenta? ¿Es porque el sistema ahora es más caótico o está más desordenado? No, como ya hemos dicho, [la entropía no entiende de desorden](https://es.wikipedia.org/wiki/Entrop%C3%ADa#Entrop%C3%ADa_y_desorden).

{{< figure src="entropie.svg" title="https://commons.wikimedia.org/wiki/File:Entropie.svg" lightbox="false" width="100%" >}}

Este ejemplo nos será útil más adelante, pero antes hablemos de la propia entropía. Este concepto tiene su origen en la [**Revolución Industrial**](https://es.wikipedia.org/wiki/Revolución_Industrial), cuando se percataron de que las máquinas térmicas estaban muy lejos de ser óptimas. Siempre se perdía energía. Mucha energía.

{{< figure src="tiempos-modernos.jpg" title="Fotograma de la película [Tiempos modernos](https://es.wikipedia.org/wiki/Tiempos_modernos) (1936), donde aparece [Charles Chaplin](https://es.wikipedia.org/wiki/Charles_Chaplin), vestido de trabajador, subido a una escalera mirando con asombro al mecánico que parece surgir de la propia máquina repleta de engranajes.<br>Fuente: https://ezer1film.blog.hu/2017/04/06/95_modern_idok_modern_times." lightbox="true" >}}

## Irreversibilidad

Esta cuestión provocó muchos dolores de cabeza durante largo tiempo, hasta que llegaron a la conclusión de que en cualquier proceso [**irreversible**](https://es.wikipedia.org/wiki/Irreversibilidad) una parte de la energía del sistema se perdía. Con esto acuñaron el término de [**entropía**](https://es.wikipedia.org/wiki/Entrop%C3%ADa), una nueva magnitud termodinámica definida como:

> La cantidad de energía que no puede ser utilizada para producir trabajo. 

Cuando la entropía de un sistema es máxima se acaba su capacidad de producir trabajo.	La entropía del universo o de cualquier sistema cerrado siempre aumenta, no hay forma de que disminuya y es lo que define que un proceso sea irreversible. Si el universo no termina antes, se estima que este será su final. Un estado de máxima entropía. Pero para eso aún quedan más años de los que somos capaces de contar y es una historia para otro día.

## Ecuación de Boltzmann

Esta definición resulta muy ilustrativa, pero necesitamos otra más cuantificable. Y es aquí cuando entra en juego la que podría ser una de las ecuaciones más célebres de la física, la [**ecuación** de **Boltzmann**](https://es.wikipedia.org/wiki/Fórmula_de_entrop%C3%ADa_de_Boltzmann):

$$
S = k\ln W
$$

{{< figure src="featured.jpg" title="Tumba de [**Ludwig Boltzmann**](https://es.wikipedia.org/wiki/Ludwig_Boltzmann). Se trata de una placa enorme de mármol, con un pedestal enfrente sobre el que hay un busto del susodicho. En el pedestal aparece su nombre 1844–1906. En la placa de mármol aparece por una parte su famosa ecuación encima del busto, a los lados del pedestal aparecen nombres de parientes.<br>Fuente: [https://commons.wikimedia.org/wiki/File:Zentralfriedhof_Vienna_-_Boltzmann.JPG](https://commons.wikimedia.org/wiki/File:Zentralfriedhof_Vienna_-_Boltzmann.JPG)." lightbox="true" >}}

Esta ecuación nos dice que la entropía (*S*) de un sistema es proporcional a la cantidad de [**microestados**](https://es.wikipedia.org/wiki/Macroestado_y_microestado) (*W*) asociados a ese sistema. Pero, ¿qué es un microestado? ¿Y qué quiere decir microestados asociados a ese sistema? Un microestado es la configuración microscópica de un sistema termodinámico. Es decir, las características, tales como posición y velocidades, que tendrán las partículas de un sistema. Todo muy *pre-cuántico*, vaya. Cuando tienes una gran cantidad de partículas, que suele ser lo habitual por motivos obvios, acabamos teniendo un sistema con presión, temperatura... Esas cosas de sistemas grandes. Esto es el macroestado, y cada uno de ellos es compatible con una cantidad de microestados.

Y aquí es cuando nos decís “*mu bonito todo, pero un ejemplo vendría bien*” y tendríais toda la razón del mundo. El demonio está en los detalles y puede que en este tema más que nunca, así que se nos ha ocurrido un ejemplo numérico (esperemos que ilustrativo y correcto). Pongamos que tenemos números enteros entre –100 y 100, y sumamos de manera aleatoria dos pares de ellos en orden. En este ejemplo tenemos un resultado igual a cero, y sabemos que hay 200 combinaciones de números que sumados dan cero.

{{< figure src="microestados.svg" lightbox="false" width="100%" >}}

Cada una de esas combinaciones es un microestado para este sistema, y ese resultado igual a cero sería el macroestado. Aunque este ejemplo carece de significado físico, nos sirve para ilustrar cómo las combinaciones de posiciones y velocidades de las partículas (microestados) dan como resultado unas condiciones de temperatura y presión (macroestado). Aquí es donde sale a relucir la ecuación de Boltzmann: la entropía es proporcional a la cantidad de microestados posibles compatibles con un estado macroscópico final. Este fue su gran logro, conseguir dar una explicación a la entropía y hallar una forma de calcularla. 

## Pero, ¿por qué aumenta la entropía al quitar la pared separadora?

La respuesta con lo que ya sabemos también es obvia, la cantidad de microestados compatibles con el resultado final es mucho mayor que la inicial. Expliquemos este punto. Se puede calcular en qué medida han aumentado y la respuesta es espectacular. Suponiendo que pudiésemos escribir 500 ceros por metro, harían falta 38&thinsp;000 [años luz](https://es.wikipedia.org/wiki/Año_luz) de longitud. Es decir, un uno seguido del radio de la [Vía Láctea](https://es.wikipedia.org/wiki/V%C3%ADa_Láctea) en ceros. Esos son muchos microestados.

Suponiendo que todos los microestados son igualmente probables, es evidente que la configuración más probable, de forma aplastante, es la del gas completamente expandido. La entropía siempre aumenta por el simple hecho de que el estado final es infinitamente más probable. Si el número de microestados compatibles con la situación inicial es de miles y el número de microestados compatibles con el gas expandido ocuparía media galaxia, la probabilidad de que el gas caiga en un microestado con éste completamente expandido es aplastante. 

Pero, ¿puede suceder que el gas se quede en su posición inicial? Sobre el papel, sí. Existe la posibilidad de que una fluctuación espontánea lleve al sistema a su estado inicial. Pero su probabilidad es, a efectos prácticos, nula. Esto mismo se puede aplicar a cualquier proceso irreversible en un sistema cerrado. La cantidad de microestados compatibles con la configuración final es aplastantemente más alta, lo que se traduce en que el sistema siempre evoluciona hacía un estado de máxima entropía.

La naturaleza, a diferencia de tu casa después de una semana complicada en la que no has podido recoger, no entiende de desorden. Entiende de [**probabilidad**](https://es.wikipedia.org/wiki/Entrop%C3%ADa_(termodinámica_estad%C3%ADstica)).

{{< figure src="habitacion.jpg" title="Imagen de [Bill Kasman](https://pixabay.com/es/users/kasman-45293) en [Pixabay](https://pixabay.com/es/)." lightbox="true" >}}

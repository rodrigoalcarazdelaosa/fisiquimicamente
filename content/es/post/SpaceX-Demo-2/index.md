---
title: SpaceX Demo-2
subtitle: Estudio cinemático del Falcon 9 🚀
summary: Estudio cinemático del Falcon 9 🚀.
breadcrumbs: ["blog"]
date: "2020-06-04T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- blog
- movimiento
- gravitación
- spacex
- cohetes
- falcon
- proyectiles
categories:
- Física

image:
  placement: 3
  caption: "Créditos: **NASA/Bill Ingalls**"

math: true  
---

Después de haberse tenido que posponer por mal tiempo[^1], el pasado sábado 30 de mayo, a las 21:22 hora peninsular, el cohete [Falcon 9](https://www.spacex.com/vehicles/falcon-9/) de [SpaceX](https://www.spacex.com) lanzó la segunda misión de demostración (Demo-2) de [Crew Dragon](https://www.spacex.com/vehicles/dragon/) desde el [Complejo de Lanzamiento 39A (LC-39A)](https://es.wikipedia.org/wiki/Complejo_de_lanzamiento_39#Plataforma_de_lanzamiento_39A) en el [Centro Espacial John F. Kennedy](https://es.wikipedia.org/wiki/Centro_espacial_John_F._Kennedy) de la [NASA](https://www.nasa.gov) en Florida.

[^1]: El lanzamiento estaba inicialmente previsto para el miércoles 27 de mayo, pero tuvo que cancelarse cuando tan solo quedaban 17 minutos por culpa de la Tormenta Tropical Bertha.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/huaXHrRX3MfPzCxyBS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/GreerTidbits-nasa-rocket-spacex-huaXHrRX3MfPzCxyBS">via GIPHY</a></p>

Aproximadamente 19 horas después la nave Crew Dragon se acopló autónomamente a la [Estación Espacial Internacional](https://es.wikipedia.org/wiki/Estación_Espacial_Internacional), con los astronautas [Bob Behnken](https://es.wikipedia.org/wiki/Robert_L._Behnken) y [Doug Hurley](https://es.wikipedia.org/wiki/Douglas_G._Hurley) a bordo, lo que ha supuesto que Estados Unidos vuelva a poner seres humanos en el espacio por primera vez desde el año 2011[^2].

[^2]: El 8 de julio de 2011 tuvo lugar la 135 y última misión del [Programa del Transbordador Espacial](https://es.wikipedia.org/wiki/Programa_del_transbordador_espacial) de la NASA.

La [Demo-2](https://es.wikipedia.org/wiki/Crew_Dragon_Demo-2) es la última prueba importante del sistema de vuelos espaciales tripulados de SpaceX que será certificada por la NASA para misiones tripuladas hacia y desde la Estación Espacial Internacional.

En este vídeo de casi 5 horas de duración, publicado por SpaceX, puedes conocer muchos más detalles sobre la misión (si solo quieres ver el lanzamiento salta hasta 4:22:46):

{{< youtube xY96v0OIcK4 >}}

Si deseas leer más sobre esta histórica misión puedes hacerlo en la [página oficial en español de la NASA](https://ciencia.nasa.gov/nasa-y-spacex-enviarán-astronautas-la-estación-espacial-los-primeros-lanzados-desde-suelo).

## Estudio cinemático del Falcon 9 🚀
La entrada podría haber acabado con el párrafo anterior, pero entonces no sabrías distinguir si estabas en la revista [¡Hola!](https://www.hola.com) o en el [blog de FisiQuímicamente]({{< ref "/post/" >}}) 😏.

Si te fijas en el vídeo del lanzamiento, en la esquina inferior izquierda aparecen el módulo de la **velocidad** (velocidad a secas de aquí en adelante), en km/h, y la **altitud**, en km, del cohete en tiempo real a medida que asciende hasta los 200$\thinspace$km aproximadamente. ¿Qué es lo que se me ocurrió al ver esos datos? Pues anotarlos[^3], representarlos y hacer un pequeño **estudio empírico** sobre la **cinemática** del **Falcon 9**.

[^3]: Me encantaría poderte decir que utilicé un algoritmo totalmente automatizado con reconocimiento óptico de caracteres (OCR) para leer los valores del vídeo, [como alguno más *friki* y capaz que yo se ha atrevido a hacer](https://forum.nasaspaceflight.com/index.php?topic=40983.0). Pero no, me temo que lo único que hice fue reproducir el vídeo en saltos de 10 segundos, anotando manualmente los valores de la velocidad y la altitud 🤷‍♂️.

### Altitud

La siguiente gráfica muestra la **altitud** del Falcon 9, en km, en función del tiempo transcurrido, en minutos[^4]:

[^4]: Por poner estos datos en perspectiva, un avión comercial tarda unos 10 minutos en alcanzar su altitud de crucero, que son unos 10$\thinspace$km. Es decir, en la mitad de tiempo, el Falcon 9 es capaz de alcanzar una altitud unas 20 veces superior a la de crucero de un avión comercial.

{{< deferred_chart id="h-t" annotation="true" series="js/charts/spacex-series.js" >}}
return {
  datasets: [
    {
      data: series.hSeries.map(([x, y]) => ({x, y})),
      backgroundColor: "#2a54a9",
      borderColor: "#2a54a9",
      fill: false,
      showLine: false,
    },
  ],
  x: {title: "Tiempo (min)", height: 80, max: 12, min: 0, ticks: {stepSize: 1}},
  y: {title: "Altitud (km)", beginAtZero: true, suggestedMax: 250, suggestedMin: 0, ticks: {stepSize: 50}},
  annotations: [[2.6,"MECO"],[8.93333333333333,"SECO"]],
};
{{< /deferred_chart >}}

La altitud asciende rápidamente durante los dos primeros minutos aproximadamente (hasta el minuto 2.6), superando los 75$\thinspace$km de altura, cuando los nueve motores [Merlin](https://es.wikipedia.org/wiki/Merl%C3%ADn_(motor_cohete)) del Falcon 9 se apagan, instante que se conoce como **MECO** (Main Engine Cutoff)[^5].

[^5]: Una de las características diferenciadoras del Falcon 9 de SpaceX es que la primera etapa del cohete, una vez se separa, es capaz de volver a la Tierra y aterrizar por sus propios medios, como se muestra en este gif 😲:
	<div style="width:100%;height:0;padding-bottom:46%;position:relative;"><iframe src="https://giphy.com/embed/3o7WIIC8bMnvkFO30Q" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/buzzfeed-rocket-tesla-3o7WIIC8bMnvkFO30Q">via GIPHY</a></p>

A partir de ese momento la altitud sigue aumentando alcanzando los 200$\thinspace$km a los 5 minutos de vuelo aproximadamente y manteniéndose *constante*.

**SECO** significa Second-Stage Engine Cutoff y representa el momento en el que el motor Merlin Vacuum, el único que estaba impulsando la segunda fase del cohete (a la que está acoplada la nave Dragon en sí, donde iban los astronautas), se para, lo que no parece afectar demasiado a la altitud de la Dragon.

### Velocidad

La siguiente gráfica muestra la **velocidad** del Falcon 9, en km/h, en función del tiempo transcurrido, en minutos[^6]:

[^6]: De nuevo para poner estos datos en perspectiva, un avión comercial tarda unos 10 minutos en alcanzar su velocidad de crucero, que son unos 900$\thinspace$km/h. Es decir, en el mismo tiempo, el Falcon 9 es capaz de alcanzar una velocidad unas 30 veces superior a la de crucero de un avión comercial.

{{< deferred_chart id="v-t" annotation="true" series="js/charts/spacex-series.js" >}}
return {
  datasets: [
    {
      data: series.vSeries.map(([x, y]) => ({x, y})),
      backgroundColor: "#2a54a9",
      borderColor: "#2a54a9",
      fill: false,
      showLine: false,
    },
  ],
  x: {title: "Tiempo (min)", height: 80, max: 12, min: 0, ticks: {stepSize: 1}},
  y: {title: "Velocidad (km/h)", beginAtZero: true, suggestedMax: 30000, suggestedMin: 0, ticks: {stepSize: 5000}},
  annotations: [[2.6,"MECO"],[8.93333333333333,"SECO"]],
};
{{< /deferred_chart >}}
	
La **velocidad aumenta** de forma **no lineal**, alcanzando los 6724$\thinspace$km/h, más de 5 veces la velocidad del sonido en el aire[^7], en el **MECO**. Se observa que en ese momento la velocidad se ve incluso reducida, hasta que el motor Merlin Vacuum de la segunda etapa se enciende y acelera a la Dragon con una tendencia similar a como lo había hecho durante la primera etapa.

[^7]: A 20$\thinspace^\circ$C de temperatura, 50$\thinspace$% de humedad y a nivel del mar ([https://es.wikipedia.org/wiki/Velocidad_del_sonido](https://es.wikipedia.org/wiki/Velocidad_del_sonido)).

Es bonito ver cómo en el **SECO** la Dragon deja de acelerar, pues ya no tiene ningún motor impulsándola, manteniéndose su velocidad constante a partir de entonces (describiendo un [movimiento circular uniforme]({{< ref "/apuntes-cuarto-eso/movimientos/index.md#movimiento-circular-uniforme-mcu" >}}) &mdash;MCU).

#### Velocidad orbital

El valor máximo de la velocidad es aproximadamente 27000$\thinspace$km/h. ¿Podemos entender el por qué de este valor? En efecto, a partir del minuto 9 aproximadamente, la nave Dragon se encuentra en una órbita a una altura de unos 200$\thinspace$km. Asumiendo una órbita circular, la [**velocidad orbital**](https://es.wikipedia.org/wiki/Velocidad_orbital) viene dada por la expresión:

$$
v_\text{orbital} = \sqrt{\frac{GM_\mathrm T}{r}},
$$
donde $G = 6.67\times 10^{-11}\thinspace\mathrm{m^3\thinspace kg^{-1}\thinspace s^{-2}}$, $M_\mathrm T = 5.97\times 10^{24}\thinspace\mathrm{kg}$ es la masa de la Tierra y $r = R_\mathrm T + h$ es la distancia a la que se encuentra la nave medida desde el centro de la Tierra, con $R_\mathrm T = 6371\thinspace\mathrm{km}$. Para una altura $h = 200\thinspace$km, tenemos:

$$
\begin{align*}
v_\text{orbital} = \sqrt{\frac{GM_\mathrm T}{r}} &= \sqrt{\frac{6.67\times 10^{-11}\cdot 5.97\times 10^{24}}{(6371+200)\times 10^3}} \\
&= 7784.6\thinspace\mathrm{m/s} \approx 28000\thinspace\mathrm{km/h}
\end{align*}
$$

lo que supone un error relativo de un 3.7$\thinspace$% aproximadamente.

### Aceleración

A partir de los valores del módulo de la velocidad es posible obtener la **aceleración tangencial** del cohete mediante una **derivación numérica**[^8].

[^8]: En concreto, la aceleración se ha obtenido utilizando la función [`diff`](https://es.mathworks.com/help/matlab/ref/diff.html) de [MATLAB<sup>&reg;</sup>](https://es.mathworks.com/products/matlab.html).

La siguiente gráfica muestra la **aceleración** del Falcon 9, en m/s<sup>2</sup>, en función del tiempo transcurrido, en minutos:

{{< deferred_chart id="a-t" annotation="true" series="js/charts/spacex-series.js" >}}
return {
  datasets: [
    {
      data: series.aSeries.map(([x, y]) => ({x, y})),
      backgroundColor: "#2a54a9",
      borderColor: "#2a54a9",
      fill: false,
      showLine: false,
    },
  ],
  x: {title: "Tiempo (min)", height: 80, max: 12, min: 0, ticks: {stepSize: 1}},
  y: {title: "Aceleración (m/s²)", beginAtZero: true, suggestedMax: 40, suggestedMin: -10, ticks: {stepSize: 5}},
  annotations: [[2.6,"MECO"],[8.93333333333333,"SECO"]],
};
{{< /deferred_chart >}}
	
Se observa claramente que la **aceleración no** es **constante**, aumentando hasta el **MECO**, momento en el que toma incluso valores negativos (recordemos que [la velocidad se ve reducida](#velocidad)). Después vuelve a aumentar hasta valores por encima de los 30$\thinspace$m/s<sup>2</sup> (más de tres veces la aceleración de la gravedad en la superficie de la Tierra), hasta el **SECO**, instante en el que la aceleración tangencial desaparece al no haber ya ningún motor que impulse la nave.

### ¿Y si suponemos que la aceleración es constante?
Si la aceleración del cohete fuera constante, entonces su ascenso se podría modelar mediante un [**movimiento rectilíneo uniformemente variado**]({{< ref "/apuntes-cuarto-eso/movimientos/index.md#movimiento-rectil%C3%ADneo-uniformemente-acelerado-mrua" >}}) (MRUA). Viendo la anterior gráfica parece un disparate pensar que pueda ser así, pero no está de más intentarlo como ejercicio mental.

La siguiente gráfica muestra de nuevo la **aceleración** *empírica* del cohete, obtenida mediante derivación numérica a partir de su velocidad, y la aceleración constante que tendría suponiendo un MRUA, obtenida como la **media artimética**[^9]:

[^9]: En realidad se han tomado dos medias distintas, antes y después del **SECO**, debido a la importancia e influencia que tiene ese momento en el movimiento de la nave.

{{< deferred_chart id="a-t-MRUV" annotation="true" series="js/charts/spacex-series.js" >}}
const aMRUVSeries = [
[  0.13333333,  14.11838312],
[  0.35000000,  14.11838312],
[  0.51666667,  14.11838312],
[  0.68333333,  14.11838312],
[  0.85000000,  14.11838312],
[  1.01666667,  14.11838312],
[  1.18333333,  14.11838312],
[  1.35000000,  14.11838312],
[  1.51666667,  14.11838312],
[  1.68333333,  14.11838312],
[  1.85000000,  14.11838312],
[  2.01666667,  14.11838312],
[  2.18333333,  14.11838312],
[  2.35000000,  14.11838312],
[  2.51666667,  14.11838312],
[  2.68333333,  14.11838312],
[  2.85000000,  14.11838312],
[  3.01666667,  14.11838312],
[  3.18333333,  14.11838312],
[  3.35000000,  14.11838312],
[  3.51666667,  14.11838312],
[  3.68333333,  14.11838312],
[  3.85000000,  14.11838312],
[  4.01666667,  14.11838312],
[  4.18333333,  14.11838312],
[  4.35000000,  14.11838312],
[  4.51666667,  14.11838312],
[  4.68333333,  14.11838312],
[  4.85000000,  14.11838312],
[  5.01666667,  14.11838312],
[  5.18333333,  14.11838312],
[  5.35000000,  14.11838312],
[  5.51666667,  14.11838312],
[  5.68333333,  14.11838312],
[  5.85000000,  14.11838312],
[  6.01666667,  14.11838312],
[  6.18333333,  14.11838312],
[  6.35000000,  14.11838312],
[  6.51666667,  14.11838312],
[  6.68333333,  14.11838312],
[  6.85000000,  14.11838312],
[  7.01666667,  14.11838312],
[  7.18333333,  14.11838312],
[  7.35000000,  14.11838312],
[  7.51666667,  14.11838312],
[  7.68333333,  14.11838312],
[  7.85000000,  14.11838312],
[  8.01666667,  14.11838312],
[  8.18333333,  14.11838312],
[  8.35000000,  14.11838312],
[  8.51666667,  14.11838312],
[  8.68333333,  14.11838312],
[  8.85000000,  14.11838312],
[  9.01666667,   0.00000000],
[  9.18333333,   0.00000000],
[  9.35000000,   0.00000000],
[  9.51666667,   0.00000000],
[  9.68333333,   0.00000000],
[  9.85000000,   0.00000000],
[ 10.01666667,   0.00000000],
[ 10.18333333,   0.00000000],
[ 10.35000000,   0.00000000],
[ 10.51666667,   0.00000000],
[ 10.68333333,   0.00000000],
[ 10.85000000,   0.00000000],
[ 11.01666667,   0.00000000],
[ 11.18333333,   0.00000000],
[ 11.35000000,   0.00000000],
[ 11.51666667,   0.00000000],
[ 11.68333333,   0.00000000],
[ 11.85000000,   0.00000000],
[ 12.01666667,   0.00000000],
];

return {
  datasets: [
    {
      data: series.aSeries.map(([x, y]) => ({x, y})),
      label: "\"Empírica\"",
      backgroundColor: "#2a54a9",
      borderColor: "#2a54a9",
      fill: false,
      showLine: false,
    },
    {
      data: aMRUVSeries.map(([x, y]) => ({x, y})),
      label: "MRUA",
      backgroundColor: "#b50000",
      borderColor: "#b50000",
      fill: false,
      pointRadius: 0,
      pointStyle: "line",
    },
  ],
  x: {title: "Tiempo (min)", height: 80, max: 12, min: 0, ticks: {stepSize: 1}},
  y: {title: "Aceleración (m/s²)", beginAtZero: true, suggestedMax: 40, suggestedMin: -10, ticks: {stepSize: 5}},
  legend: {usePointStyle: true},
  annotations: [[2.6,"MECO"],[8.93333333333333,"SECO"]],
};
{{< /deferred_chart >}}
	
El valor promedio resultante de la aceleración antes del **SECO** es de 14.1$\thinspace$m/s<sup>2</sup>, $\approx 1.4$ veces superior (en módulo) a la aceleración de la gravedad en la superficie de la Tierra (9.8$\thinspace$m/s<sup>2</sup>). Esto se puede interpretar como que, en promedio, los astronautas se han pasado casi 9 minutos experimentando algo peor a una caída libre, encima *hacia arriba* 🙃[^10].

[^10]: En realidad habrá sido mucho peor que esto 🤦‍♂️, pero como dato, decir que un paracaidista suele alcanzar la [velocidad límite](https://es.wikipedia.org/wiki/Velocidad_l%C3%ADmite) (en torno a 180$\thinspace$km/h) en tan solo 12 segundos, momento a partir del cual deja de experimentar la sensación de *caer*.

Una vez tenemos nuestro valor de aceleración constante, podemos comparar la altitud y la velocidad *empíricas* con las obtenidas a partir de las expresiones del MRUA (teniendo en cuenta que después del **SECO** la aceleración es nula y por tanto la nave se moverá con un [movimiento rectilíneo uniforme]({{< ref "/apuntes-cuarto-eso/movimientos/index.md#movimiento-rectil%C3%ADneo-uniforme-mru" >}}) o MRU).

#### Altitud
A partir de los cuatro minutos el cohete se mantiene a una altitud prácticamente constante, por lo que las expresiones del MRUA o MRU no son válidas, ya que suponen un aumento indefinido.

Hasta los 4 minutos aproximadamente, la **altitud teórica** la calculamos a partir de la expresión:
$$
h(t) = h_0 + v_0 t +\frac{1}{2} a t^2,
$$
donde $h_0 = 0$, $v_0 = 0$ y $a = 14.1\thinspace$m/s<sup>2</sup>.

En la siguiente gráfica se dibujan tanto la **altitud** empírica como la calculada suponiendo un MRUA, durante los cuatro primeros minutos del ascenso del Falcon 9:

{{< deferred_chart id="h-t-MRUV" annotation="true" series="js/charts/spacex-series.js" >}}
const hMRUVSeries = [
[  0.00000000,   0.00000000],
[  0.26666667,   1.80715304],
[  0.43333333,   4.77201350],
[  0.60000000,   9.14871226],
[  0.76666667,  14.93724934],
[  0.93333333,  22.13762474],
[  1.10000000,  30.74983844],
[  1.26666667,  40.77389046],
[  1.43333333,  52.20978079],
[  1.60000000,  65.05750943],
[  1.76666667,  79.31707639],
[  1.93333333,  94.98848166],
[  2.10000000, 112.07172524],
[  2.26666667, 130.56680713],
[  2.43333333, 150.47372733],
[  2.60000000, 171.79248585],
[  2.76666667, 194.52308268],
[  2.93333333, 218.66551782],
[  3.10000000, 244.21979127],
[  3.26666667, 271.18590304],
[  3.43333333, 299.56385312],
[  3.60000000, 329.35364151],
[  3.76666667, 360.55526821],
[  3.93333333, 393.16873323],
[  4.10000000, 427.19403656],
[  4.26666667, 462.63117820],
[  4.43333333, 499.48015815],
[  4.60000000, 537.74097642],
[  4.76666667, 577.41363299],
[  4.93333333, 618.49812788],
[  5.10000000, 660.99446108],
[  5.26666667, 704.90263260],
[  5.43333333, 750.22264243],
[  5.60000000, 796.95449057],
[  5.76666667, 845.09817702],
[  5.93333333, 894.65370178],
[  6.10000000, 945.62106486],
[  6.26666667, 998.00026625],
[  6.43333333, 1051.79130595],
[  6.60000000, 1106.99418396],
[  6.76666667, 1163.60890029],
[  6.93333333, 1221.63545493],
[  7.10000000, 1281.07384788],
[  7.26666667, 1341.92407914],
[  7.43333333, 1404.18614872],
[  7.60000000, 1467.86005660],
[  7.76666667, 1532.94580280],
[  7.93333333, 1599.44338732],
[  8.10000000, 1667.35281014],
[  8.26666667, 1736.67407128],
[  8.43333333, 1807.40717073],
[  8.60000000, 1879.55210849],
[  8.76666667, 1953.10888456],
[  8.93333333, 5933.58934893],
[  9.10000000, 6007.85204416],
[  9.26666667, 6082.11473939],
[  9.43333333, 6156.37743462],
[  9.60000000, 6230.64012985],
[  9.76666667, 6304.90282508],
[  9.93333333, 6379.16552031],
[ 10.10000000, 6453.42821554],
[ 10.26666667, 6527.69091077],
[ 10.43333333, 6601.95360600],
[ 10.60000000, 6676.21630123],
[ 10.76666667, 6750.47899646],
[ 10.93333333, 6824.74169169],
[ 11.10000000, 6899.00438692],
[ 11.26666667, 6973.26708215],
[ 11.43333333, 7047.52977738],
[ 11.60000000, 7121.79247262],
[ 11.76666667, 7196.05516785],
[ 11.93333333, 7270.31786308],
[ 12.10000000, 7344.58055831],
];

return {
  datasets: [
    {
      data: series.hSeries.map(([x, y]) => ({x, y})),
      label: "\"Empírica\"",
      backgroundColor: "#2a54a9",
      borderColor: "#2a54a9",
      fill: false,
      showLine: false,
    },
    {
      data: hMRUVSeries.map(([x, y]) => ({x, y})),
      label: "MRUA",
      backgroundColor: "#b50000",
      borderColor: "#b50000",
      fill: false,
      pointRadius: 0,
      pointStyle: "line",
    },
  ],
  x: {title: "Tiempo (min)", height: 80, max: 4, min: 0, ticks: {stepSize: 0.5}},
  y: {title: "Altitud (km)", beginAtZero: true, max: 400, suggestedMin: 0, ticks: {stepSize: 100}},
  legend: {usePointStyle: true},
  annotations: [[2.6,"MECO"],[8.93333333333333,"SECO"]],
};
{{< /deferred_chart >}}
	
La expresión teórica solo es capaz de modelar el movimiento del cohete durante los primeros instantes de tiempo (ya en el primer minuto del ascenso la expresión teórica tiene un error relativo de casi el 130$\thinspace$%).

#### Velocidad

La **velocidad teórica** la calculamos a partir de la expresión[^11]:

[^11]: El valor de 26734.6$\thinspace$km/h es la velocidad que tiene la nave, según la expresión teórica del MRUA, justo en el **SECO**.

$$
v(t) = \begin{cases}
v_0 + a t & \text{antes del SECO (MRUA)} \\\\
26734.6 & \text{después del SECO (MRU)}
\end{cases}
$$
donde $v_0 = 0$ y $a = 14.1\thinspace$m/s<sup>2</sup>.

En la siguiente gráfica se dibujan tanto la **velocidad** empírica como la calculada suponiendo un MRUA y posterior MRU:
	
{{< deferred_chart id="v-t-MRUV" annotation="true" series="js/charts/spacex-series.js" >}}
const vMRUVSeries = [
[  0.00000000,   0.00000000],
[  0.26666667, 813.21886792],
[  0.43333333, 1321.48066038],
[  0.60000000, 1829.74245283],
[  0.76666667, 2338.00424528],
[  0.93333333, 2846.26603774],
[  1.10000000, 3354.52783019],
[  1.26666667, 3862.78962264],
[  1.43333333, 4371.05141509],
[  1.60000000, 4879.31320755],
[  1.76666667, 5387.57500000],
[  1.93333333, 5895.83679245],
[  2.10000000, 6404.09858491],
[  2.26666667, 6912.36037736],
[  2.43333333, 7420.62216981],
[  2.60000000, 7928.88396226],
[  2.76666667, 8437.14575472],
[  2.93333333, 8945.40754717],
[  3.10000000, 9453.66933962],
[  3.26666667, 9961.93113208],
[  3.43333333, 10470.19292453],
[  3.60000000, 10978.45471698],
[  3.76666667, 11486.71650943],
[  3.93333333, 11994.97830189],
[  4.10000000, 12503.24009434],
[  4.26666667, 13011.50188679],
[  4.43333333, 13519.76367925],
[  4.60000000, 14028.02547170],
[  4.76666667, 14536.28726415],
[  4.93333333, 15044.54905660],
[  5.10000000, 15552.81084906],
[  5.26666667, 16061.07264151],
[  5.43333333, 16569.33443396],
[  5.60000000, 17077.59622642],
[  5.76666667, 17585.85801887],
[  5.93333333, 18094.11981132],
[  6.10000000, 18602.38160377],
[  6.26666667, 19110.64339623],
[  6.43333333, 19618.90518868],
[  6.60000000, 20127.16698113],
[  6.76666667, 20635.42877358],
[  6.93333333, 21143.69056604],
[  7.10000000, 21651.95235849],
[  7.26666667, 22160.21415094],
[  7.43333333, 22668.47594340],
[  7.60000000, 23176.73773585],
[  7.76666667, 23684.99952830],
[  7.93333333, 24193.26132075],
[  8.10000000, 24701.52311321],
[  8.26666667, 25209.78490566],
[  8.43333333, 25718.04669811],
[  8.60000000, 26226.30849057],
[  8.76666667, 26734.57028302],
[  8.93333333, 26734.57028302],
[  9.10000000, 26734.57028302],
[  9.26666667, 26734.57028302],
[  9.43333333, 26734.57028302],
[  9.60000000, 26734.57028302],
[  9.76666667, 26734.57028302],
[  9.93333333, 26734.57028302],
[ 10.10000000, 26734.57028302],
[ 10.26666667, 26734.57028302],
[ 10.43333333, 26734.57028302],
[ 10.60000000, 26734.57028302],
[ 10.76666667, 26734.57028302],
[ 10.93333333, 26734.57028302],
[ 11.10000000, 26734.57028302],
[ 11.26666667, 26734.57028302],
[ 11.43333333, 26734.57028302],
[ 11.60000000, 26734.57028302],
[ 11.76666667, 26734.57028302],
[ 11.93333333, 26734.57028302],
[ 12.10000000, 26734.57028302],
];

return {
  datasets: [
    {
      data: series.vSeries.map(([x, y]) => ({x, y})),
      label: "\"Empírica\"",
      backgroundColor: "#2a54a9",
      borderColor: "#2a54a9",
      fill: false,
      showLine: false,
    },
    {
      data: vMRUVSeries.map(([x, y]) => ({x, y})),
      label: "MRUA",
      backgroundColor: "#b50000",
      borderColor: "#b50000",
      fill: false,
      pointRadius: 0,
      pointStyle: "line",
    },
  ],
  x: {title: "Tiempo (min)", height: 80, max: 12, min: 0, ticks: {stepSize: 1}},
  y: {title: "Velocidad (km/h)", beginAtZero: true, suggestedMax: 30000, suggestedMin: 0, ticks: {stepSize: 5000}},
  legend: {usePointStyle: true},
  annotations: [[2.6,"MECO"],[8.93333333333333,"SECO"]],
};
{{< /deferred_chart >}}
	
Se observa que la expresión teórica sobreestima la velocidad de la nave antes del **SECO** (con un error relativo máximo de más del 300$\thinspace$%, para $t = 0.2\overline{6}\thinspace$min), y la subestima ligeramente después.
	
Aún así, parece que la expresión teórica no se desvía tanto de los valores empíricos, lo que indica que, al menos para estimar la velocidad, no parece tan descabellado modelar el ascenso del cohete mediante un MRUA (y posterior MRU tras el **SECO**).
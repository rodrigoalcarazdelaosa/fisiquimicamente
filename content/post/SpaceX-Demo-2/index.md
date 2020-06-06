---
title: SpaceX Demo-2
subtitle: Estudio cinemático del Falcon 9 🚀
summary: Estudio cinemático del Falcon 9 🚀.
date: "2020-06-04T00:00:00Z"
tags:
- movimiento
- gravitación
categories:
- Física

image:
  placement: 3
  caption: "Créditos: NASA/Bill Ingalls"
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
La entrada podría haber acabado con el párrafo anterior, pero entonces no sabrías distinguir si estabas en la revista [¡Hola!](https://www.hola.com) o en el [blog de Físquicamente con Rodri]({{< ref "/post/" >}}) 😏.

Si te fijas en el vídeo del lanzamiento, en la esquina inferior izquierda aparecen el módulo de la **velocidad** (velocidad a secas de aquí en adelante), en km/h, y la **altitud**, en km, del cohete en tiempo real a medida que asciende hasta los 200$\thinspace$km aproximadamente. ¿Qué es lo que se me ocurrió al ver esos datos? Pues anotarlos[^3], representarlos y hacer un pequeño **estudio empírico** sobre la **cinemática** del **Falcon 9**.

[^3]: Me encantaría poderte decir que utilicé un algoritmo totalmente automatizado con reconocimiento óptico de caracteres (OCR) para leer los valores del vídeo, [como alguno más *friki* y capaz que yo se ha atrevido a hacer](https://forum.nasaspaceflight.com/index.php?topic=40983.0). Pero no, me temo que lo único que hice fue reproducir el vídeo en saltos de 10 segundos, anotando manualmente los valores de la velocidad y la altitud 🤷‍♂️.

### Altitud

La siguiente gráfica muestra la **altitud** del Falcon 9, en km, en función del tiempo transcurrido, en minutos[^4]:

[^4]: Por poner estos datos en perspectiva, un avión comercial tarda unos 10 minutos en alcanzar su altitud de crucero, que son unos 10$\thinspace$km. Es decir, en la mitad de tiempo, el Falcon 9 es capaz de alcanzar una altitud unas 20 veces superior a la de crucero de un avión comercial.

<canvas id="h-t"></canvas>

<script>
	d3.csv('h.csv')
	  .then(makeChart);

	function makeChart(hdata) {
		var t = hdata.map(function(d) {return d.t});
		var h = hdata.map(function(d) {return d.h});		
		var chart = new Chart('h-t', {
		  type: 'line',
		  data: {
		    labels: t,
		    datasets: [
		      {
		        data: h,
 			    backgroundColor: '#2a54a9',
 				borderColor: '#2a54a9',
 				fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
 				showLine: false // no line shown
		      }
		    ]
		  },
		  options: {
			  scales: {
				  xAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111" 
		              },
					  afterFit: function(scale) {
						  scale.height = 80  //<-- set value as you wish 
					  },
					  scaleLabel: {
						  display: true,
						  labelString: 'Tiempo (min)',
						  fontSize: 18,
						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  stepSize: 1,						  
						  suggestedMax: 12,
						  suggestedMin: 0,
						  padding: 10
					  }
				  }],
				  yAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111"						  
		              },
					  scaleLabel: {
						  display: true,
						  labelString: 'Altitud (km)',
						  fontSize: 18,
  						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'						  
					  },
					  ticks: {
						  beginAtZero: true,
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  padding: 10,
						  stepSize: 50,						  
						  suggestedMax: 250,
						  suggestedMin: 0
					  }
				  }]
			  	
			  },
		      legend: {
		      	display: false		              
		      },
			  annotation: {
				  annotations: [
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "2.33333333333333",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",						  
			                content: "MECO",
			                enabled: true,
			                position: "top"
			              }
			          },
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "8.66666666666667",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",
			                content: "SECO",
			                enabled: true,
			                position: "top"
			              }
			          }					  
			      ]
			  }
		   }
		});
	}		
</script>

La altitud asciende rápidamente durante los dos primeros minutos aproximadamente (hasta el minuto 2.333), superando los 75$\thinspace$km de altura, cuando los nueve motores [Merlin](https://es.wikipedia.org/wiki/Merl%C3%ADn_(motor_cohete)) del Falcon 9 se apagan, instante que se conoce como **MECO** (Main Engine Cutoff)[^5].

[^5]: Una de las características diferenciadoras del Falcon 9 de SpaceX es que la primera etapa del cohete, una vez se separa, es capaz de volver a la Tierra y aterrizar por sus propios medios, como se muestra en este gif 😲:
	<div style="width:100%;height:0;padding-bottom:46%;position:relative;"><iframe src="https://giphy.com/embed/3o7WIIC8bMnvkFO30Q" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/buzzfeed-rocket-tesla-3o7WIIC8bMnvkFO30Q">via GIPHY</a></p>

A partir de ese momento la altitud sigue aumentando alcanzando los 200$\thinspace$km a los 5 minutos de vuelo aproximadamente y manteniéndose *constante*.

**SECO** significa Second-Stage Engine Cutoff y representa el momento en el que el motor Merlin Vacuum, el único que estaba impulsando la segunda fase del cohete (a la que está acoplada la nave Dragon en sí, donde iban los astronautas), se para, lo que no parece afectar demasiado a la altitud de la Dragon.

### Velocidad

La siguiente gráfica muestra la **velocidad** del Falcon 9, en km/h, en función del tiempo transcurrido, en minutos[^6]:

[^6]: De nuevo para poner estos datos en perspectiva, un avión comercial tarda unos 10 minutos en alcanzar su velocidad de crucero, que son unos 900$\thinspace$km/h. Es decir, en el mismo tiempo, el Falcon 9 es capaz de alcanzar una velocidad unas 30 veces superior a la de crucero de un avión comercial.

<div class="chart-container" style="position: relative; width:80vw">
    <canvas id="v-t"></canvas>
</div>

<script>
	d3.csv('v.csv')
	  .then(makeChart);

	function makeChart(hdata) {
		var t = hdata.map(function(d) {return d.t});
		var v = hdata.map(function(d) {return d.v});		
		var chart = new Chart('v-t', {
		  type: 'line',
		  data: {
		    labels: t,
		    datasets: [
		      {
		        data: v,
 			    backgroundColor: '#2a54a9',
 				borderColor: '#2a54a9',
 				fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
 				showLine: false // no line shown
		      }
		    ]
		  },
		  options: {
			  scales: {
				  xAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111" 
		              },
					  afterFit: function(scale) {
						  scale.height = 80  //<-- set value as you wish 
					  },
					  scaleLabel: {
						  display: true,
						  labelString: 'Tiempo (min)',
						  fontSize: 18,
						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'
					  },
					  ticks: {				  
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  stepSize: 1,						  
						  suggestedMax: 12,
						  suggestedMin: 0,
						  padding: 10
					  }
				  }],
				  yAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111"						  
		              },
					  scaleLabel: {
						  display: true,
						  labelString: 'Velocidad (km/h)',
						  fontSize: 18,
  						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'						  
					  },
					  ticks: {
						  beginAtZero: true,
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  padding: 10,
						  stepSize: 10000,						  
						  suggestedMax: 30000,
						  suggestedMin: 0,
					  }
				  }]
			  	
			  },
		      legend: {
		      	display: false		              
		      },
			  annotation: {
				  annotations: [
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "2.33333333333333",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",						  
			                content: "MECO",
			                enabled: true,
			                position: "top"
			              }
			          },
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "8.66666666666667",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",
			                content: "SECO",
			                enabled: true,
			                position: "top"
			              }
			          }					  
			      ]
			  }
		   }
		});
	}		
</script>
	
La **velocidad aumenta** de forma **no lineal**, alcanzando los 6724$\thinspace$km/h, más de 5 veces la velocidad del sonido en el aire[^7], en el **MECO**. Se observa que en ese momento la velocidad se ve incluso reducida, hasta que el motor Merlin Vacuum de la segunda etapa se enciende y acelera a la Dragon con una tendencia similar a como lo había hecho durante la primera etapa.

[^7]: A 20$\thinspace^\circ$C de temperatura, 50$\thinspace$% de humedad y a nivel del mar ([https://es.wikipedia.org/wiki/Velocidad_del_sonido](https://es.wikipedia.org/wiki/Velocidad_del_sonido)).

Es bonito ver cómo en el **SECO** la Dragon deja de acelerar, pues ya no tiene ningún motor impulsándola, manteniéndose su velocidad constante a partir de entonces (describiendo un movimiento circular uniforme &mdash;MCU).

### Aceleración

A partir de los valores del módulo de la velocidad es posible obtener la **aceleración tangencial** del cohete mediante una **derivación numérica**[^8].

[^8]: En concreto, la aceleración se ha obtenido utilizando la función [`gradient`](https://es.mathworks.com/help/matlab/ref/gradient.html) de [MATLAB<sup>&reg;</sup>](https://es.mathworks.com/products/matlab.html).

La siguiente gráfica muestra la **aceleración** del Falcon 9, en m/s<sup>2</sup>, en función del tiempo transcurrido, en minutos:

<canvas id="a-t"></canvas>

<script>
	d3.csv('a.csv')
	  .then(makeChart);

	function makeChart(hdata) {
		var t = hdata.map(function(d) {return d.t});
		var a = hdata.map(function(d) {return d.a});
		var chart = new Chart('a-t', {
		  type: 'line',
		  data: {
		    labels: t,
		    datasets: [
		      {
		        data: a,
 			    backgroundColor: '#2a54a9',
 				borderColor: '#2a54a9',
 				fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
 				showLine: false // no line shown
		      }
		    ]
		  },
		  options: {
			  scales: {
				  xAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111" 
		              },
					  afterFit: function(scale) {
						  scale.height = 80  //<-- set value as you wish 
					  },
					  scaleLabel: {
						  display: true,
						  labelString: 'Tiempo (min)',
						  fontSize: 18,
						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  maxTicksLimit: 13,
						  padding: 10
					  }
				  }],
				  yAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111"						  
		              },
					  scaleLabel: {
						  display: true,
						  labelString: 'Aceleración (m/s²)',
						  fontSize: 18,
  						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'						  
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  padding: 10,
						  maxTicksLimit: 6						  
					  }
				  }]
			  	
			  },
		      legend: {
		      	display: false		              
		      },
			  annotation: {
				  annotations: [
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "2.33333333333333",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",					  
			                content: "MECO",
			                enabled: true,
			                position: "top"
			              }
			          },
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "8.66666666666667",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",
			                content: "SECO",
			                enabled: true,
			                position: "top"
			              }
			          }
			      ]
			  }			  
		   }
		});
	}		
</script>
	
Se observa claramente que la **aceleración no** es **constante**, aumentando hasta el **MECO**, momento en el que toma incluso valores negativos (recordemos que [la velocidad se ve reducida](#velocidad)). Después vuelve a aumentar hasta valores por encima de los 30$\thinspace$m/s<sup>2</sup> (más de tres veces la aceleración de la gravedad en la superficie de la Tierra), hasta el **SECO**, instante en el que la aceleración tangencial desaparece al no haber ya ningún motor que impulse la nave.

### ¿Y si suponemos que la aceleración es constante?
Si la aceleración del cohete fuera constante, entonces su ascenso se podría modelar mediante un **movimiento rectilíneo uniformemente variado** (MRUV). Viendo la anterior gráfica parece un disparate pensar que pueda ser así, pero no está de más intentarlo como ejercicio mental.

La siguiente gráfica muestra de nuevo la **aceleración** *empírica* del cohete, obtenida mediante derivación numérica a partir de su velocidad, y la aceleración constante que tendría suponiendo un MRUV, obtenida como la **media artimética**:

<canvas id="a-t-MRUV"></canvas>

<script>
	d3.csv('a.csv')
	  .then(makeChart);

	function makeChart(hdata) {
		var t = hdata.map(function(d) {return d.t});
		var a = hdata.map(function(d) {return d.a});
		var aMRUV = hdata.map(function(d) {return d.aMRUV});		
		var chart = new Chart('a-t-MRUV', {
		  type: 'line',
		  data: {
		    labels: t,
		    datasets: [
		      {
		        data: a,
 			    label: '"Empírica"',				  
 			    backgroundColor: '#2a54a9',
 				borderColor: '#2a54a9',
 				fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
 				showLine: false // no line shown
		      },
		      {
		        data: aMRUV,
 			    label: 'MRUV', 				  
 			    backgroundColor: '#b50000',
 				borderColor: '#b50000',
 				fill: false,
				pointRadius: 0,
 			    pointStyle: 'line'
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
		      }
		    ]
		  },
		  options: {
			  scales: {
				  xAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111" 
		              },
					  afterFit: function(scale) {
						  scale.height = 80  //<-- set value as you wish 
					  },
					  scaleLabel: {
						  display: true,
						  labelString: 'Tiempo (min)',
						  fontSize: 18,
						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  maxTicksLimit: 13,
						  padding: 10
					  }
				  }],
				  yAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111"						  
		              },
					  scaleLabel: {
						  display: true,
						  labelString: 'Aceleración (m/s²)',
						  fontSize: 18,
  						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'						  
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  padding: 10,
						  maxTicksLimit: 6						  
					  }
				  }]
			  	
			  },
		      legend: {
				  labels: {
					  boxWidth: 10,
					  usePointStyle: true,
					  fontSize: 18,
  					  fontFamily: 'Cabin Sketch',
					  fontColor: '#111111'
				  }				  
		      },	
			  annotation: {
				  annotations: [
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "2.33333333333333",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",					  
			                content: "MECO",
			                enabled: true,
			                position: "top"
			              }
			          },
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "8.66666666666667",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",
			                content: "SECO",
			                enabled: true,
			                position: "top"
			              }
			          }
			      ]
			  }			  
		   }
		});
	}		
</script>
	
El valor promedio resultante de la aceleración es de 10.375$\thinspace$m/s<sup>2</sup>, ligeramente superior (en módulo) a la aceleración de la gravedad en la superficie de la Tierra (9.8$\thinspace$m/s<sup>2</sup>). Esto se puede interpretar como que, en promedio, los astronautas se han pasado algo más de 10 minutos experimentando algo parecido a una caída libre, pero *hacia arriba* 🙃[^9].

[^9]: En realidad habrá sido mucho peor que esto 🤦‍♂️, pero como dato, decir que un paracaidista suele alcanzar la [velocidad límite](https://es.wikipedia.org/wiki/Velocidad_l%C3%ADmite) (en torno a 180$\thinspace$km/h) en tan solo 12 segundos, momento a partir del cual deja de experimentar la sensación de *caer*.

Una vez tenemos nuestro valor de aceleración constante, podemos comparar la altitud y la velocidad *empíricas* con las obtenidas a partir de las expresiones del MRUV.

#### Altitud
La **altitud teórica** la calculamos a partir de la expresión:
$$
h(t) = h_0 + v_0 t +\frac{1}{2} a t^2,
$$
donde $h_0 = 0.4\thinspace$km, $v_0 = 195\thinspace$km/h y $a = 10.375\thinspace$m/s<sup>2</sup>.

En la siguiente gráfica se dibujan tanto la **altitud** empírica como la calculada suponiendo un MRUV, durante los cuatro primeros minutos del ascenso del Falcon 9:

<canvas id="h-t-MRUV"></canvas>

<script>
	d3.csv('hMRUV.csv')
	  .then(makeChart);

	function makeChart(hdata) {
		var t = hdata.map(function(d) {return d.t});
		var h = hdata.map(function(d) {return d.h});
		var hMRUV = hdata.map(function(d) {return d.hMRUV});
		var chart = new Chart('h-t-MRUV', {
		  type: 'line',
		  data: {
		    labels: t,
		    datasets: [
		      {
		        data: h,
 			    label: '"Empírica"', 
 			    backgroundColor: '#2a54a9',
 				borderColor: '#2a54a9',
 				fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
 				showLine: false // no line shown
		      },
		      {
		        data: hMRUV,
 			    label: 'MRUV', 				  
 			    backgroundColor: '#b50000',
 				borderColor: '#b50000',
 				fill: false,
				pointRadius: 0,
 			    pointStyle: 'line'
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
		      }
		    ]
		  },
		  options: {
			  scales: {
				  xAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111" 
		              },
					  afterFit: function(scale) {
						  scale.height = 80  //<-- set value as you wish 
					  },
					  scaleLabel: {
						  display: true,
						  labelString: 'Tiempo (min)',
						  fontSize: 18,
						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  stepSize: 0.5,
						  maxTicksLimit: 9,
						  padding: 10
					  }
				  }],
				  yAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111"						  
		              },
					  scaleLabel: {
						  display: true,
						  labelString: 'Altitud (km)',
						  fontSize: 18,
  						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'						  
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  padding: 10,
						  maxTicksLimit: 6						  
					  }
				  }]
			  	
			  },
		      legend: {
				  labels: {
					  boxWidth: 10,
					  usePointStyle: true,
					  fontSize: 18,
  					  fontFamily: 'Cabin Sketch',
					  fontColor: '#111111'
				  }				  
		      },
			  annotation: {
				  annotations: [
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "2.33333333333333",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",						  
			                content: "MECO",
			                enabled: true,
			                position: "top"
			              }
			          }					  				  
			      ]
			  }			  			  
		   }
		});
	}		
</script>
	
La expresión teórica solo es capaz de modelar el movimiento del cohete durante los primeros instantes de tiempo (ya en el primer minuto del ascenso la expresión teórica tiene un error relativo de casi el 75$\thinspace$%). Además, a partir de los cuatro minutos el cohete se mantiene a una altitud prácticamente constante, por lo que la expresión del MRUV no es válida, ya que supone un aumento indefinido.

#### Velocidad

La **velocidad teórica** la calculamos a partir de la expresión:
$$
v(t) = v_0 + a t,
$$
donde $v_0 = 195\thinspace$km/h y $a = 10.375\thinspace$m/s<sup>2</sup>.

En la siguiente gráfica se dibujan tanto la **velocidad** empírica como la calculada suponiendo un MRUV:
	
<canvas id="v-t-MRUV"></canvas>

<script>
	d3.csv('v.csv')
	  .then(makeChart);

	function makeChart(hdata) {
		var t = hdata.map(function(d) {return d.t});
		var v = hdata.map(function(d) {return d.v});		
		var vMRUV = hdata.map(function(d) {return d.vMRUV});
		var chart = new Chart('v-t-MRUV', {
		  type: 'line',
		  data: {
		    labels: t,
		    datasets: [
		      {
		        data: v,
				label: '"Empírica"', 
 			    backgroundColor: '#2a54a9',
 				borderColor: '#2a54a9',
 				fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
 				showLine: false // no line shown
		      },
		      {
		        data: vMRUV,
 			    label: 'MRUV', 				  
 			    backgroundColor: '#b50000',
 				borderColor: '#b50000',
 				fill: false,
				pointRadius: 0,
 			    pointStyle: 'line'
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
		      }
		    ]
		  },
		  options: {
			  scales: {
				  xAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111" 
		              },
					  afterFit: function(scale) {
						  scale.height = 80  //<-- set value as you wish 
					  },
					  scaleLabel: {
						  display: true,
						  labelString: 'Tiempo (min)',
						  fontSize: 18,
						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  maxTicksLimit: 13,
						  padding: 10
					  }
				  }],
				  yAxes: [{
					  gridLines: {
						  drawOnChartArea: false,
						  color: "#111111"						  
		              },
					  scaleLabel: {
						  display: true,
						  labelString: 'Velocidad (km/h)',
						  fontSize: 18,
  						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111'						  
					  },
					  ticks: {
						  fontSize: 16,
  						  fontFamily: 'EB Garamond',
						  fontColor: '#111111',
						  padding: 10,
						  maxTicksLimit: 6						  
					  }
				  }]
			  	
			  },
		      legend: {
				  labels: {
					  boxWidth: 10,
					  usePointStyle: true,
					  fontSize: 18,
  					  fontFamily: 'Cabin Sketch',
					  fontColor: '#111111'
				  }				  
		      },		
			  annotation: {
				  annotations: [
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "2.33333333333333",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",						  
			                content: "MECO",
			                enabled: true,
			                position: "top"
			              }
			          },
					  {
			              type: "line",
			              mode: "vertical",
			              scaleID: "x-axis-0",
			              value: "8.66666666666667",
			              borderColor: "#555555",
			              label: {
							// Background color of label, default below
							backgroundColor: 'rgba(17,17,17,0.8)',

							// Font family of text, inherits from global
							fontFamily: "Cabin Sketch",

							// Font size of text, inherits from global
							fontSize: 18,

							// Font style of text, default below
							fontStyle: "bold",

							// Font color of text, default below
							fontColor: "#fffff8",
			                content: "SECO",
			                enabled: true,
			                position: "top"
			              }
			          }					  
			      ]
			  }
		   }
		});
	}		
</script>
	
En este caso parece que la expresión teórica no se desvía tanto de los valores empíricos, lo que indica que, al menos para estimar la velocidad, no parece tan descabellado modelar el ascenso del cohete mediante un MRUV.
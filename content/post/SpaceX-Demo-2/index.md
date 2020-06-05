---
title: SpaceX Demo-2
subtitle: Estudio cinemático del lanzamiento de la primera misión tripulada de SpaceX
summary: Estudio cinemático del lanzamiento de la primera misión tripulada de SpaceX.
date: "2020-06-04T00:00:00Z"
tags:
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

Aproximadamente 19 horas después la nave Crew Dragon se acopló autónomamente a la Estación Espacial Internacional, con los astronautas Bob Behnken y Doug Hurley a bordo, lo que ha supuesto que Estados Unidos vuelva a poner seres humanos en el espacio por primera vez desde el año 2011[^2].

[^2]: El 8 de julio de 2011 tuvo lugar la 135 y última misión del [Programa del Transbordador Espacial](https://es.wikipedia.org/wiki/Programa_del_transbordador_espacial) de la NASA.

La Demo-2 es la última prueba importante del sistema de vuelos espaciales tripulados de SpaceX que será certificada por la NASA para misiones tripuladas hacia y desde la Estación Espacial Internacional.

En este vídeo de casi 5 horas de duración, publicado por SpaceX, puedes conocer muchos más detalles sobre la misión (si solo quieres ver el lanzamiento salta hasta 4:22:46):

{{< youtube xY96v0OIcK4 >}}

Si deseas leer más sobre esta histórica misión puedes hacerlo en la [página oficial en español de la NASA](https://ciencia.nasa.gov/nasa-y-spacex-enviarán-astronautas-la-estación-espacial-los-primeros-lanzados-desde-suelo).

## Estudio cinemático del Falcon 9 🚀
La entrada podría haber acabado con el párrafo anterior, pero entonces no sabrías distinguir si estabas en la revista [¡Hola!](https://www.hola.com) o en el [blog de Físquicamente con Rodri]({{< ref "/post/" >}}) 😏.

Si te fijas en el vídeo del lanzamiento, en la esquina inferior izquierda aparecen la velocidad (en km/h) y la altitud (en km) del cohete en tiempo real a medida que asciende hasta los 200 km aproximadamente. ¿Qué es lo que se me ocurrió al ver esos datos? Pues anotarlos[^3], representarlos y hacer un pequeño estudio empírico sobre la cinemática del Falcon 9.

[^3]: Me encantaría poderte decir que utilicé un algoritmo totalmente automatizado con reconocimiento óptico de caracteres (OCR) para leer los valores del vídeo, [como alguno más *friki* y capaz que yo se ha atrevido a hacer](https://forum.nasaspaceflight.com/index.php?topic=40983.0). Pero no, me temo que lo único que hice fue reproducir el vídeo en saltos de 10 segundos, anotando manualmente los valores de la velocidad y la altitud 🤷‍♂️.

### Altitud

La siguiente gráfica muestra la altitud del Falcon 9, en km, en función del tiempo transcurrido, en minutos:

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
		      	display: false		              
		      }
		   }
		});
	}		
</script>
	
Por poner estos datos en perspectiva, un avión comercial tarda unos 10 minutos en alcanzar su altitud de crucero, que son unos 10 km. Es decir, en el mismo tiempo, el Falcon 9 es capaz de alcanazar una altitud unas 20 veces superior a la de vuelo de un avión comercial.

La siguiente gráfica muestra la velocidad del Falcon 9, en km/h, en función del tiempo transcurrido, en minutos:

<canvas id="v-t"></canvas>

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
	
Como se puede ver,

La siguiente gráfica muestra la aceleración del Falcon 9, en m/s<sup>2</sup>, en función del tiempo transcurrido, en minutos:

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
	
Como se puede ver,

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
 			    label: '"Experimental"', 
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
		      }			  			  
		   }
		});
	}		
</script>
	
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
				label: '"Experimental"', 
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
 			    label: '"Experimental"',				  
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
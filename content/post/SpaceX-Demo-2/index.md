---
title: SpaceX Demo-2
subtitle: Lanzamiento y acoplamiento de la primera misión tripulada de SpaceX
summary: Lanzamiento y acoplamiento de la primera misión tripulada de SpaceX.
date: "2020-06-04T00:00:00Z"
tags:
- gravitación
categories:
- Física

image:
  placement: 3
  caption: "Créditos: NASA/Bill Ingalls"
---

El pasado sábado 30 de mayo, a las 21:22 hora peninsular, el cohete Falcon 9 de SpaceX lanzó la segunda misión de demostración (Demo-2) de Crew Dragon desde el Complejo de Lanzamiento 39A (LC-39A) en el Centro Espacial Kennedy de la NASA en Florida.

El sábado 30 de mayo a las 3:22 p.m. EDT, el Falcon 9 de SpaceX lanzó la segunda misión de demostración (Demo-2) de Crew Dragon desde el Complejo de Lanzamiento 39A (LC-39A) en el Centro Espacial Kennedy de la NASA en Florida, y al día siguiente Crew Dragon se acopló autónomamente a la Estación Espacial Internacional. Este vuelo de prueba con los astronautas de la NASA Bob Behnken y Doug Hurley a bordo de la nave espacial Dragon devolvió los vuelos espaciales humanos a los Estados Unidos.

La Demo-2 es la última prueba importante del sistema de vuelos espaciales tripulados de SpaceX que será certificada por la NASA para misiones de tripulación operacional hacia y desde la Estación Espacial Internacional. SpaceX está devolviendo los vuelos espaciales tripulados a los Estados Unidos con uno de los sistemas más seguros y avanzados jamás construidos, y el Programa de Tripulación Comercial de la NASA es un punto de inflexión para el futuro de Estados Unidos en la exploración espacial que sienta las bases para futuras misiones a la Luna, Marte y más allá.

Puede ver una repetición del lanzamiento arriba. 

On Saturday, May 30 at 3:22 p.m. EDT, SpaceX’s Falcon 9 launched Crew Dragon’s second demonstration (Demo-2) mission from Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida, and the next day Crew Dragon autonomously docked to the International Space Station. This test flight with NASA astronauts Bob Behnken and Doug Hurley on board the Dragon spacecraft returned human spaceflight to the United States.

Demo-2 is the final major test for SpaceX’s human spaceflight system to be certified by NASA for operational crew missions to and from the International Space Station. SpaceX is returning human spaceflight to the United States with one of the safest, most advanced systems ever built, and NASA’s Commercial Crew Program is a turning point for America’s future in space exploration that lays the groundwork for future missions to the Moon, Mars, and beyond.

You can watch a replay of the launch above.

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
	
Como se puede ver,

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
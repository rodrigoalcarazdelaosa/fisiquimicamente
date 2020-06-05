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
  caption: "[https://www.cem.es/content/el-sistema-internacional-de-unidades-si](https://www.cem.es/content/el-sistema-internacional-de-unidades-si)"
---

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
					  scaleLabel: {
						  display: true,
						  labelString: 'Tiempo (min)',
						  fontSize: 18,
						  fontFamily: 'Cabin Sketch',
						  fontColor: '#111111',
						  // padding: {
						  // 							  top: 10
						  // }
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
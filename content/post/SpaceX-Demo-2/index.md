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
 			    showLine: false
		      }
		    ]
		  },
		  options: {
			  scales: {
				  xAxes: [{
					  scaleLabel: {
						  display: true,
						  labelString: 't/s',
						  fontSize: 18
					  },
					  ticks: {
						  fontSize: 16
					  }
				  }],
				  yAxes: [{
					  scaleLabel: {
						  display: true,
						  labelString: 'h/km',
						  fontSize: 18						  
					  },
					  ticks: {
						  fontSize: 16
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
	
Hola
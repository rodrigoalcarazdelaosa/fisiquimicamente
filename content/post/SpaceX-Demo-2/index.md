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

	function makeChart(h) {
		var chart = new Chart('h-t', {
		  type: 'line',
		  data: {
		    datasets: [
		      {
		        data: [10, 20, 30]
		      }
		    ]
		  }
		});
	}		
</script>
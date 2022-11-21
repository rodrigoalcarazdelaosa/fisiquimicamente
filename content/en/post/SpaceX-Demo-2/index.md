---
title: SpaceX Demo-2
subtitle: Kinematic Study of the Falcon 9 🚀
summary: "Kinematic Study of the Falcon 9 🚀."
breadcrumbs: ["blog"]
date: "2020-06-04T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- blog
- motion
- gravitation
- projectiles
categories:
- Physics

image:
  placement: 3
  caption: "Crédit: **NASA/Bill Ingalls**"
---

After having to be postponed due to bad weather[^1], last Saturday May 30, at 21:22 peninsular time, the [Falcon 9](https://www.spacex.com/vehicles/falcon-9/) rocket from [SpaceX](https://www.spacex.com) launched the second demonstration mission (Demo-2) of [Crew Dragon](https://www.spacex.com/vehicles/dragon/) from the [Launch Complex 39A (LC-39A)](https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39A) at the [John F. Kennedy Space Center](https://en.wikipedia.org/wiki/Kennedy_Space_Center) of [NASA](https://www.nasa.gov) in Florida.

[^1]: The launch was originally scheduled for Wednesday, May 27, but had to be cancelled with only 17 minutes left because of Tropical Storm Bertha.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/huaXHrRX3MfPzCxyBS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/GreerTidbits-nasa-rocket-spacex-huaXHrRX3MfPzCxyBS">via GIPHY</a></p>

Approximately 19 hours later, the Crew Dragon ship docked autonomously with the [International Space Station](https://en.wikipedia.org/wiki/International_Space_Station), with astronauts [Bob Behnken](https://en.wikipedia.org/wiki/Bob_Behnken) and [Doug Hurley](https://en.wikipedia.org/wiki/Doug_Hurley) on board, which has meant that the United States is putting humans back into space for the first time since 2011[^2].

[^2]: On July 8, 2011, the 135th and final mission of NASA's [Space Shuttle Program](https://en.wikipedia.org/wiki/Space_Shuttle_program) took place.

[Demo-2](https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2) is the last major test of the SpaceX manned space flight system to be certified by NASA for manned missions to and from the International Space Station.

In this video of almost 5 hours of duration, published by SpaceX, you can know many more details about the mission (if you only want to see the launch jump to 4:22:46):

{{< youtube xY96v0OIcK4 >}}

If you wish to read more about this historic mission you can do so at [NASA's official website](https://www.nasa.gov/press-release/nasa-astronauts-launch-from-america-in-historic-test-flight-of-spacex-crew-dragon).

## Kinematic Study of the Falcon 9 🚀
The post could have ended with the previous paragraph, but then you wouldn't know if you were in [Hello!](https://www.hellomagazine.com/) magazine or in [PhysiChemically's blog]({{< ref "/post/" >}}) 😏.

If you look at the video of the launch, in the bottom left corner you can see the module of the **velocity** (speed from here on), in km/h, and the **altitude**, in km, of the rocket in real time as it ascends to approximately 200$\thinspace$km. What did I think when I saw that data? Well, write the values down[^3], represent them and make a small **empirical study** about the **cinematics** of the **Falcon 9**.

[^3]: I'd love to tell you that I used a fully automated algorithm with optical character recognition (OCR) to read the values in the video, [like some other *freaks* and more capable than me have managed to do](https://forum.nasaspaceflight.com/index.php?topic=40983.0). But no, I'm afraid all I did was play the video in 10 second jumps, manually entering the speed and altitude values 🤷‍♂️.

### Altitude

The following plot shows the **altitude** of the Falcon 9, in km, as a function of the elapsed time, in minutes [^4]:

[^4]: To put this data into perspective, it takes a commercial plane about 10 minutes to reach its cruising altitude, which is about 10$\thinspace$km. In other words, in half the time, the Falcon 9 is capable of reaching an altitude about 20 times higher than the cruising altitude of a commercial plane.

<canvas id="h-t"></canvas>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.7/chartjs-plugin-annotation.min.js"></script>

<script>
	const h = document.getElementById('h-t').getContext('2d');

	const hSeries = [
[  0.00000000,   0.00000000],
[  0.26666667,   0.40000000],
[  0.43333333,   1.20000000],
[  0.60000000,   2.50000000],
[  0.76666667,   4.40000000],
[  0.93333333,   6.80000000],
[  1.10000000,   9.60000000],
[  1.26666667,  12.80000000],
[  1.43333333,  16.90000000],
[  1.60000000,  22.00000000],
[  1.76666667,  28.30000000],
[  1.93333333,  35.70000000],
[  2.10000000,  44.20000000],
[  2.26666667,  53.90000000],
[  2.43333333,  64.70000000],
[  2.60000000,  76.40000000],
[  2.76666667,  88.30000000],
[  2.93333333, 100.00000000],
[  3.10000000, 110.00000000],
[  3.26666667, 121.00000000],
[  3.43333333, 130.00000000],
[  3.60000000, 139.00000000],
[  3.76666667, 148.00000000],
[  3.93333333, 156.00000000],
[  4.10000000, 163.00000000],
[  4.26666667, 169.00000000],
[  4.43333333, 175.00000000],
[  4.60000000, 180.00000000],
[  4.76666667, 184.00000000],
[  4.93333333, 188.00000000],
[  5.10000000, 191.00000000],
[  5.26666667, 194.00000000],
[  5.43333333, 196.00000000],
[  5.60000000, 198.00000000],
[  5.76666667, 200.00000000],
[  5.93333333, 200.00000000],
[  6.10000000, 201.00000000],
[  6.26666667, 201.00000000],
[  6.43333333, 202.00000000],
[  6.60000000, 201.00000000],
[  6.76666667, 201.00000000],
[  6.93333333, 201.00000000],
[  7.10000000, 200.00000000],
[  7.26666667, 200.00000000],
[  7.43333333, 199.00000000],
[  7.60000000, 199.00000000],
[  7.76666667, 198.00000000],
[  7.93333333, 198.00000000],
[  8.10000000, 198.00000000],
[  8.26666667, 198.00000000],
[  8.43333333, 198.00000000],
[  8.60000000, 197.00000000],
[  8.76666667, 197.00000000],
[  8.93333333, 198.00000000],
[  9.10000000, 198.00000000],
[  9.26666667, 198.00000000],
[  9.43333333, 198.00000000],
[  9.60000000, 198.00000000],
[  9.76666667, 198.00000000],
[  9.93333333, 199.00000000],
[ 10.10000000, 199.00000000],
[ 10.26666667, 199.00000000],
[ 10.43333333, 199.00000000],
[ 10.60000000, 199.00000000],
[ 10.76666667, 199.00000000],
[ 10.93333333, 200.00000000],
[ 11.10000000, 200.00000000],
[ 11.26666667, 200.00000000],
[ 11.43333333, 200.00000000],
[ 11.60000000, 200.00000000],
[ 11.76666667, 200.00000000],
[ 11.93333333, 201.00000000],
[ 12.10000000, 201.00000000],
	];
	new Chart(h, {
	  type: 'line',
	  data: {
	    datasets: [{
	      data: hSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
	      backgroundColor: '#2a54a9',
	      borderColor: '#2a54a9',
	      fill: false,
	      //              pointRadius: 10,
	      //              pointHoverRadius: 15,
	      showLine: false // no line shown
	    }]
	  },
	  options: {
	    scales: {
	      xAxes: [{
	        type: "linear",
	        gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        afterFit: function(scale) {
	          scale.height = 80 //<-- set value as you wish 
	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Time (min)',
	          fontSize: 18,
	          fontFamily: 'Cabin Sketch',
	          fontColor: '#111111'
	        },
	        ticks: {
	          fontSize: 16,
	          fontFamily: 'EB Garamond',
	          fontColor: '#111111',
	          max: 12,
	          min: 0,
	          stepSize: 1.0,
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
	          labelString: 'Altitude (km)',
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
	              value: "2.6",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",						  
	                content: "MECO",
	                enabled: true,
	                position: "top"
	              }
	          },
			  {
	              type: "line",
	              mode: "vertical",
	              scaleID: "x-axis-0",
	              value: "8.93333333333333",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",
	                content: "SECO",
	                enabled: true,
	                position: "top"
	              }
	          }					  
	      ]
	  }
	  }
	});
</script>
	
The altitude rises rapidly during the first two minutes approximately (until minute 2.6), surpassing the 75$\thinspace$km of altitude, when the nine [Merlin](https://en.wikipedia.org/wiki/SpaceX_Merlin) engines of the Falcon 9 shut down, instant that is known as **MECO** (Main Engine Cutoff) [^5].

[^5]: One of the distinguishing features of SpaceX's Falcon 9 is that the first stage of the rocket, once separated, is capable of returning to Earth and landing on its own, as shown in this gif 😲:
	<div style="width:100%;height:0;padding-bottom:46%;position:relative;"><iframe src="https://giphy.com/embed/3o7WIIC8bMnvkFO30Q" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/buzzfeed-rocket-tesla-3o7WIIC8bMnvkFO30Q">via GIPHY</a></p>

From that moment the altitude continues to increase reaching 200$\thinspace$km after approximately 5 minutes of flight and remaining *constant*.

**SECO** means Second-Stage Engine Cutoff and represents the moment when the Merlin Vacuum engine, the only one that was driving the second stage of the rocket (to which the Dragon ship itself is attached, where the astronauts were going), stops, which doesn't seem to affect too much the altitude of the Dragon.

### Speed

The following plot shows the **speed** of the Falcon 9, in km/h, as a function of the elapsed time, in minutes [^6]:

[^6]: Again to put this data into perspective, it takes a commercial plane about 10 minutes to reach its cruising speed, which is about 900$\thinspace$km/h. In other words, in the same time, the Falcon 9 is capable of reaching a speed about 30 times higher than the cruising speed of a commercial plane.

<canvas id="v-t"></canvas>

<script>
	const v = document.getElementById('v-t').getContext('2d');

	const vSeries = [
[  0.00000000,   0.00000000],
[  0.26666667, 195.00000000],
[  0.43333333, 376.00000000],
[  0.60000000, 587.00000000],
[  0.76666667, 804.00000000],
[  0.93333333, 932.00000000],
[  1.10000000, 1093.00000000],
[  1.26666667, 1353.00000000],
[  1.43333333, 1751.00000000],
[  1.60000000, 2216.00000000],
[  1.76666667, 2755.00000000],
[  1.93333333, 3381.00000000],
[  2.10000000, 4113.00000000],
[  2.26666667, 4962.00000000],
[  2.43333333, 5803.00000000],
[  2.60000000, 6724.00000000],
[  2.76666667, 6634.00000000],
[  2.93333333, 6655.00000000],
[  3.10000000, 6752.00000000],
[  3.26666667, 6868.00000000],
[  3.43333333, 7003.00000000],
[  3.60000000, 7159.00000000],
[  3.76666667, 7335.00000000],
[  3.93333333, 7538.00000000],
[  4.10000000, 7768.00000000],
[  4.26666667, 8024.00000000],
[  4.43333333, 8303.00000000],
[  4.60000000, 8609.00000000],
[  4.76666667, 8936.00000000],
[  4.93333333, 9285.00000000],
[  5.10000000, 9657.00000000],
[  5.26666667, 10049.00000000],
[  5.43333333, 10464.00000000],
[  5.60000000, 10896.00000000],
[  5.76666667, 11351.00000000],
[  5.93333333, 11824.00000000],
[  6.10000000, 12323.00000000],
[  6.26666667, 12839.00000000],
[  6.43333333, 13389.00000000],
[  6.60000000, 13960.00000000],
[  6.76666667, 14565.00000000],
[  6.93333333, 15199.00000000],
[  7.10000000, 15872.00000000],
[  7.26666667, 16588.00000000],
[  7.43333333, 17349.00000000],
[  7.60000000, 18166.00000000],
[  7.76666667, 19053.00000000],
[  7.93333333, 19995.00000000],
[  8.10000000, 21025.00000000],
[  8.26666667, 22115.00000000],
[  8.43333333, 23296.00000000],
[  8.60000000, 24591.00000000],
[  8.76666667, 25988.00000000],
[  8.93333333, 27011.00000000],
[  9.10000000, 27012.00000000],
[  9.26666667, 27011.00000000],
[  9.43333333, 27010.00000000],
[  9.60000000, 27010.00000000],
[  9.76666667, 27009.00000000],
[  9.93333333, 27008.00000000],
[ 10.10000000, 27007.00000000],
[ 10.26666667, 27007.00000000],
[ 10.43333333, 27006.00000000],
[ 10.60000000, 27005.00000000],
[ 10.76666667, 27004.00000000],
[ 10.93333333, 27003.00000000],
[ 11.10000000, 27002.00000000],
[ 11.26666667, 27002.00000000],
[ 11.43333333, 27001.00000000],
[ 11.60000000, 27000.00000000],
[ 11.76666667, 26999.00000000],
[ 11.93333333, 26998.00000000],
[ 12.10000000, 26997.00000000],
	];
	new Chart(v, {
	  type: 'line',
	  data: {
	    datasets: [{
	      data: vSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
	      backgroundColor: '#2a54a9',
	      borderColor: '#2a54a9',
	      fill: false,
	      //              pointRadius: 10,
	      //              pointHoverRadius: 15,
	      showLine: false // no line shown
	    }]
	  },
	  options: {
	    scales: {
	      xAxes: [{
	        type: "linear",
	        gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        afterFit: function(scale) {
	          scale.height = 80 //<-- set value as you wish 
	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Time (min)',
	          fontSize: 18,
	          fontFamily: 'Cabin Sketch',
	          fontColor: '#111111'
	        },
	        ticks: {
	          fontSize: 16,
	          fontFamily: 'EB Garamond',
	          fontColor: '#111111',
	          max: 12,
	          min: 0,
	          stepSize: 1.0,
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
			  labelString: 'Speed (km/h)',
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
			  stepSize: 5000,
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
	              value: "2.6",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",						  
	                content: "MECO",
	                enabled: true,
	                position: "top"
	              }
	          },
			  {
	              type: "line",
	              mode: "vertical",
	              scaleID: "x-axis-0",
	              value: "8.93333333333333",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",
	                content: "SECO",
	                enabled: true,
	                position: "top"
	              }
	          }					  
	      ]
	  }
	  }
	});
</script>
	
The **speed increases** in a **non-linear** way, reaching 6724$\thinspace$km/h, more than 5 times the speed of sound in air [^7], in the **MECO**. It is observed that at that moment the speed is even reduced, until the Merlin Vacuum engine of the second stage is started and accelerates the Dragon with a similar tendency as it had done during the first stage.

[^7]: At 20$\thinspace^\circ$C temperature, 50$\thinspace$% humidity and sea level ([https://en.wikipedia.org/wiki/Speed_of_sound](https://en.wikipedia.org/wiki/Speed_of_sound)).

It's nice to see how in **SECO** the Dragon stops accelerating, because it doesn't have any engine driving it anymore, keeping its constant speed from then on (describing an [uniform circular motion]({{< ref "/apuntes-cuarto-eso/movimientos/index.md#movimiento-circular-uniforme-mcu" >}})).

#### Orbital Speed

The maximum value of the speed is approximately 27000$\thinspace$km/h. Can we understand this value? Indeed, as of approximately minute 9, the Dragon ship is in an orbit at an altitude of about 200$\thinspace$km. Assuming a circular orbit, the [**orbital speed**](https://en.wikipedia.org/wiki/Orbital_speed) is given by the expression:

$$
v_\text{orbital} = \sqrt{\frac{GM_\mathrm T}{r}},
$$
where $G = 6.67\times 10^{-11}\thinspace\mathrm{m^3\thinspace kg^{-1}\thinspace s^{-2}}$, $M_\mathrm T = 5.97\times 10^{24}\thinspace\mathrm{kg}$ is the mass of the Earth y $r = R_\mathrm T + h$ is the distance the ship is measured from the center of the Earth, with $R_\mathrm T = 6371\thinspace\mathrm{km}$. For an altitude $h = 200\thinspace$km, we have:

\begin{align*}
v_\text{orbital} = \sqrt{\frac{GM_\mathrm T}{r}} &= \sqrt{\frac{6.67\times 10^{-11}\cdot 5.97\times 10^{24}}{(6371+200)\times 10^3}} \\\\
&= 7784.6\thinspace\mathrm{m/s} \approx 28000\thinspace\mathrm{km/h}
\end{align*}

which is a relative error of about 3.7$\thinspace$%.

### Acceleration

From the speed values it is possible to obtain the **tangential acceleration** of the rocket by means of a **numerical derivation**[^8].

[^8]: Specifically, the acceleration has been obtained using the [`diff`](https://uk.mathworks.com/help/matlab/ref/diff.html) function of [MATLAB<sup>&reg;</sup>](https://uk.mathworks.com/products/matlab.html).

The following plot shows the **acceleration** of the Falcon 9, in m/s<sup>2</sup>, as a function of the elapsed time, in minutes:

<canvas id="a-t"></canvas>

<script>
	const a = document.getElementById('a-t').getContext('2d');

	const aSeries = [
[  0.13333333,   3.38541667],
[  0.35000000,   5.02777778],
[  0.51666667,   5.86111111],
[  0.68333333,   6.02777778],
[  0.85000000,   3.55555556],
[  1.01666667,   4.47222222],
[  1.18333333,   7.22222222],
[  1.35000000,  11.05555556],
[  1.51666667,  12.91666667],
[  1.68333333,  14.97222222],
[  1.85000000,  17.38888889],
[  2.01666667,  20.33333333],
[  2.18333333,  23.58333333],
[  2.35000000,  23.36111111],
[  2.51666667,  25.58333333],
[  2.68333333,  -2.50000000],
[  2.85000000,   0.58333333],
[  3.01666667,   2.69444444],
[  3.18333333,   3.22222222],
[  3.35000000,   3.75000000],
[  3.51666667,   4.33333333],
[  3.68333333,   4.88888889],
[  3.85000000,   5.63888889],
[  4.01666667,   6.38888889],
[  4.18333333,   7.11111111],
[  4.35000000,   7.75000000],
[  4.51666667,   8.50000000],
[  4.68333333,   9.08333333],
[  4.85000000,   9.69444444],
[  5.01666667,  10.33333333],
[  5.18333333,  10.88888889],
[  5.35000000,  11.52777778],
[  5.51666667,  12.00000000],
[  5.68333333,  12.63888889],
[  5.85000000,  13.13888889],
[  6.01666667,  13.86111111],
[  6.18333333,  14.33333333],
[  6.35000000,  15.27777778],
[  6.51666667,  15.86111111],
[  6.68333333,  16.80555556],
[  6.85000000,  17.61111111],
[  7.01666667,  18.69444444],
[  7.18333333,  19.88888889],
[  7.35000000,  21.13888889],
[  7.51666667,  22.69444444],
[  7.68333333,  24.63888889],
[  7.85000000,  26.16666667],
[  8.01666667,  28.61111111],
[  8.18333333,  30.27777778],
[  8.35000000,  32.80555556],
[  8.51666667,  35.97222222],
[  8.68333333,  38.80555556],
[  8.85000000,  28.41666667],
[  9.01666667,   0.02777778],
[  9.18333333,  -0.02777778],
[  9.35000000,  -0.02777778],
[  9.51666667,   0.00000000],
[  9.68333333,  -0.02777778],
[  9.85000000,  -0.02777778],
[ 10.01666667,  -0.02777778],
[ 10.18333333,   0.00000000],
[ 10.35000000,  -0.02777778],
[ 10.51666667,  -0.02777778],
[ 10.68333333,  -0.02777778],
[ 10.85000000,  -0.02777778],
[ 11.01666667,  -0.02777778],
[ 11.18333333,   0.00000000],
[ 11.35000000,  -0.02777778],
[ 11.51666667,  -0.02777778],
[ 11.68333333,  -0.02777778],
[ 11.85000000,  -0.02777778],
[ 12.01666667,  -0.02777778],
	];
	new Chart(a, {
	  type: 'line',
	  data: {
	    datasets: [{
	      data: aSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
	      backgroundColor: '#2a54a9',
	      borderColor: '#2a54a9',
	      fill: false,
	      //              pointRadius: 10,
	      //              pointHoverRadius: 15,
	      showLine: false // no line shown
	    }]
	  },
	  options: {
	    scales: {
	      xAxes: [{
	        type: "linear",
	        gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        afterFit: function(scale) {
	          scale.height = 80 //<-- set value as you wish 
	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Time (min)',
	          fontSize: 18,
	          fontFamily: 'Cabin Sketch',
	          fontColor: '#111111'
	        },
	        ticks: {
	          fontSize: 16,
	          fontFamily: 'EB Garamond',
	          fontColor: '#111111',
	          max: 12,
	          min: 0,
	          stepSize: 1.0,
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
			  labelString: 'Acceleration (m/s²)',
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
			  stepSize: 5.0,						  
			  suggestedMax: 40,
			  suggestedMin: -10
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
	              value: "2.6",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",						  
	                content: "MECO",
	                enabled: true,
	                position: "top"
	              }
	          },
			  {
	              type: "line",
	              mode: "vertical",
	              scaleID: "x-axis-0",
	              value: "8.93333333333333",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",
	                content: "SECO",
	                enabled: true,
	                position: "top"
	              }
	          }					  
	      ]
	  }
	  }
	});
</script>
	
It is clear that the **acceleration** is **not constant**, increasing until **MECO**, when it even takes negative values (remember that [speed is reduced](#speed)). Then it increases again to values above 30$\thinspace$m/s<sup>2</sup> (more than three times the acceleration of gravity on the surface of the Earth), until **SECO**, when the tangential acceleration vanishes because there is no longer any engine powering the ship.
	
### What if we assume that the acceleration is constant?
If the acceleration of the rocket was constant, then its ascent could be modelled by an [**uniformly-varied linear motion**]({{< ref "/apuntes-cuarto-eso/movimientos/index.md#movimiento-rectil%C3%ADneo-uniformemente-variado-mruv" >}}) (UVLM). Looking at the previous plot it seems crazy to think that it could be like that, but it's worth trying as a mental exercise.

The following plot shows again the *empirical* **acceleration** of the rocket, obtained by numerical derivation from its speed, and the constant acceleration that it would have assuming a UVLM, obtained as the **arithmetic mean**[^9]:

[^9]: Actually, two different averages have been taken, before and after the **SECO**, due to the importance and influence that moment has on the ship's movement.

<canvas id="a-t-MRUV"></canvas>

<script>
	const aMRUV = document.getElementById('a-t-MRUV').getContext('2d');

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
	new Chart(aMRUV, {
	  type: 'line',
	  data: {
	    datasets: [
			{
	      data: aSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
		    label: '"Empiric"',				  
		    backgroundColor: '#2a54a9',
			borderColor: '#2a54a9',
			fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
			showLine: false // no line shown
	    },
			{
	      data: aMRUVSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
		    label: 'UVLM', 				  
		    backgroundColor: '#b50000',
			borderColor: '#b50000',
			fill: false,
			pointRadius: 0,
		    pointStyle: 'line'
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
	    }]
	  },
	  options: {
	    scales: {
	      xAxes: [{
	        type: "linear",
	        gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        afterFit: function(scale) {
	          scale.height = 80 //<-- set value as you wish 
	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Time (min)',
	          fontSize: 18,
	          fontFamily: 'Cabin Sketch',
	          fontColor: '#111111'
	        },
	        ticks: {
	          fontSize: 16,
	          fontFamily: 'EB Garamond',
	          fontColor: '#111111',
	          max: 12,
	          min: 0,
	          stepSize: 1.0,
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
			  labelString: 'Acceleration (m/s²)',
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
			  stepSize: 5.0,						  
			  suggestedMax: 40,
			  suggestedMin: -10
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
	              value: "2.6",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",						  
	                content: "MECO",
	                enabled: true,
	                position: "top"
	              }
	          },
			  {
	              type: "line",
	              mode: "vertical",
	              scaleID: "x-axis-0",
	              value: "8.93333333333333",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",
	                content: "SECO",
	                enabled: true,
	                position: "top"
	              }
	          }					  
	      ]
	  }
	  }
	});
</script>
	
The resulting average value of the acceleration before **SECO** is 14.1$\thinspace$m/s<sup>2</sup>, $\approx 1.4$ times higher (in module) than the acceleration of gravity on the Earth's surface (9.8$\thinspace$m/s<sup>2</sup>). This can be interpreted as that, on average, astronauts have spent almost 9 minutes experiencing something worse than a free fall, and on top of that, *upwards* 🙃 [^10].

[^10]: Actually it would have been much worse than this 🤦‍♂️, but as a matter of fact, a skydiver usually reaches the [terminal velocity](https://en.wikipedia.org/wiki/Terminal_velocity) (around 180$\thinspace$km/h) in only 12 seconds, after which he stops experiencing the feeling of *falling*.

Once we have our constant acceleration value, we can compare the *empirical* altitude and speed with those obtained from the UVLM expressions (taking into account that after **SECO** the acceleration is zero and therefore the ship will move with an [uniform linear motion]({{< ref "/apuntes-cuarto-eso/movimientos/index.md#movimiento-rectil%C3%ADneo-uniforme-mru" >}}) or ULM).

#### Altitude
After four minutes, the rocket is maintained at a practically constant altitude, so the  UVLM or ULM expressions are not valid, as they imply an indefinite increase.

Up to approximately 4 minutes, the **theoretical altitude** is calculated from the expression:

$$
h(t) = h_0 + v_0 t +\frac{1}{2} a t^2,
$$
where $h_0 = 0$, $v_0 = 0$ and $a = 14.1\thinspace$m/s<sup>2</sup>.

In the following plot both the empirical **altitude** and the one calculated assuming an UVLM, during the first four minutes of the Falcon 9's ascent, are shown:

<canvas id="h-t-MRUV"></canvas>

<script>
	const hMRUV = document.getElementById('h-t-MRUV').getContext('2d');

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
	new Chart(hMRUV, {
	  type: 'line',
	  data: {
	    datasets: [
			{
	      data: hSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
		    label: '"Empiric"',				  
		    backgroundColor: '#2a54a9',
			borderColor: '#2a54a9',
			fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
			showLine: false // no line shown
	    },
			{
	      data: hMRUVSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
		    label: 'UVLM', 				  
		    backgroundColor: '#b50000',
			borderColor: '#b50000',
			fill: false,
			pointRadius: 0,
		    pointStyle: 'line'
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
	    }]
	  },
	  options: {
	    scales: {
	      xAxes: [{
	        type: "linear",
	        gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        afterFit: function(scale) {
	          scale.height = 80 //<-- set value as you wish 
	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Time (min)',
	          fontSize: 18,
	          fontFamily: 'Cabin Sketch',
	          fontColor: '#111111'
	        },
	        ticks: {
	          fontSize: 16,
	          fontFamily: 'EB Garamond',
	          fontColor: '#111111',
	          max: 4,
	          min: 0,
	          stepSize: 0.5,
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
	          labelString: 'Altitude (km)',
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
			  stepSize: 100,
			  max: 400,
 			  suggestedMin: 0
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
	              value: "2.6",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",						  
	                content: "MECO",
	                enabled: true,
	                position: "top"
	              }
	          },
			  {
	              type: "line",
	              mode: "vertical",
	              scaleID: "x-axis-0",
	              value: "8.93333333333333",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",
	                content: "SECO",
	                enabled: true,
	                position: "top"
	              }
	          }					  
	      ]
	  }
	  }
	});
</script>
	
The theoretical expression is only able to model the movement of the rocket during the first instants of time (already in the first minute of the ascent the theoretical expression has a relative error of almost 130$\thinspace$%).
	
#### Speed

The **theoretical speed** is calculated from the expression [^11]:

[^11]: The value of 26734.6$\thinspace$km/h is the speed the ship has, according to the theoretical expression of the UVLM, right in the **SECO**.

$$
v(t) = \begin{cases}
v_0 + a t & \text{before SECO (UVLM)} \\\\
26734.6 & \text{after SECO (ULM)}
\end{cases}
$$
where $v_0 = 0$ and $a = 14.1\thinspace$m/s<sup>2</sup>.

The following plot shows both the empirical and calculated **speed** assuming an UVLM and subsequent ULM:

<canvas id="v-t-MRUV"></canvas>

<script>
	const vMRUV = document.getElementById('v-t-MRUV').getContext('2d');

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
	new Chart(vMRUV, {
	  type: 'line',
	  data: {
	    datasets: [
			{
	      data: vSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
		    label: '"Empiric"',				  
		    backgroundColor: '#2a54a9',
			borderColor: '#2a54a9',
			fill: false,
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
			showLine: false // no line shown
	    },
			{
	      data: vMRUVSeries.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
		    label: 'UVLM', 				  
		    backgroundColor: '#b50000',
			borderColor: '#b50000',
			fill: false,
			pointRadius: 0,
		    pointStyle: 'line'
// 				pointRadius: 10,
// 				pointHoverRadius: 15,
	    }]
	  },
	  options: {
	    scales: {
	      xAxes: [{
	        type: "linear",
	        gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        afterFit: function(scale) {
	          scale.height = 80 //<-- set value as you wish 
	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Time (min)',
	          fontSize: 18,
	          fontFamily: 'Cabin Sketch',
	          fontColor: '#111111'
	        },
	        ticks: {
	          fontSize: 16,
	          fontFamily: 'EB Garamond',
	          fontColor: '#111111',
	          max: 12,
	          min: 0,
	          stepSize: 1.0,
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
			  labelString: 'Speed (km/h)',
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
			  stepSize: 5000,						  
			  suggestedMax: 30000,
			  suggestedMin: 0,
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
	              value: "2.6",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",						  
	                content: "MECO",
	                enabled: true,
	                position: "top"
	              }
	          },
			  {
	              type: "line",
	              mode: "vertical",
	              scaleID: "x-axis-0",
	              value: "8.93333333333333",
	              borderColor: "#2a54a9",
	              label: {
					// Background color of label, default below
					backgroundColor: '#BBCCEE',

					// Font family of text, inherits from global
					fontFamily: "Cabin Sketch",

					// Font size of text, inherits from global
					fontSize: 18,

					// Font style of text, default below
					fontStyle: "bold",

					// Font color of text, default below
					fontColor: "#111111",
	                content: "SECO",
	                enabled: true,
	                position: "top"
	              }
	          }					  
	      ]
	  }
	  }
	});
</script>
	
It is observed that the theoretical expression overestimates the speed of the ship before **SECO** (with a maximum relative error of more than 300$\thinspace$%, for $t = 0.2\overline{6}\thinspace$min), and underestimates it slightly afterwards.
	
Still, it seems that the theoretical expression does not deviate so much from the empirical values, indicating that, at least for estimating speed, it does not seem so farfetched to model the rocket ascent by an UVLM (and subsequent ULM after **SECO**).
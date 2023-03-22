---
title: Contraste de color
subtitle: Sobre blanco y negro *a la vez*
summary: Contraste de color sobre blanco y negro *a la vez*.
breadcrumbs: ["blog"]
date: "2020-09-05T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- blog
- color
- contraste
categories:
- Accesibilidad
image:
  placement: 3  
  caption: Foto de [**Paweł Czerwiński**](https://unsplash.com/@pawel_czerwinski) en [Unsplash](https://unsplash.com)

math: true
---

{{% callout note %}}
Esta entrada es una **traducción/adaptación/ampliación** del [**excelente artículo** de **Ben Szabo** en dev.to](https://dev.to/finnhvman/which-colors-look-good-on-black-and-white-2pe6).
{{% /callout %}}

{{% callout note %}}
Si deseas conocer más sobre **accesibilidad web** te recomiendo echar un vistazo a esta [**excelente guía**](https://www.websiteplanet.com/es/blog/accesibilidad-web-facil-tu-guia-definitiva/).
{{% /callout %}}

Estoy planteándome la posibilidad de permitir elegir a los visitantes de mi web si desean un **fondo claro** u **oscuro**. Con un fondo oscuro (casi negro) el texto pasaría a ser claro (casi blanco), a la inversa de como es actualmente, pero el **color** de **resalte**, este azul <svg width="1rem" height="1rem">
  <rect rx="4" ry="4" width="1rem" height="1rem" style="fill:#2a54a9" />
</svg>, dejaría de tener suficiente **contraste** sobre el negro.

## ¿Qué es el contraste y cómo se define?
Las *Pautas de Accesibilidad para el Contenido Web*, [**WCAG**](https://www.w3.org/WAI/standards-guidelines/wcag/es) por sus siglas en inglés, [definen la relación de **contraste**](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio), $C$, como:

$$
C = \frac{L1 + 0.05}{L2 + 0.05},
$$

donde $L1$ y $L2$ son las *luminosidades relativas* de los colores claro y oscuro, respectivamente. La [luminosidad relativa](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) se define a su vez como:

> El brillo relativo de cualquier punto en un espacio de color, normalizado a 0 para el negro más oscuro y 1 para el blanco más claro.

En el caso del espacio de color **sRGB**, el utilizado por defecto en toda la Web, existen unas [expresiones *sencillas* para calcular esta luminosidad relativa](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance), que depende de las coordenadas del color en cuestión.

El negro tiene una luminosidad relativa igual a 0, mientras que la del blanco es igual a 1, por lo que el **máximo contraste posible**, $C_\text{máx}$, es[^1]:

[^1]: Como el blanco es más claro que el negro, su luminosidad, 1, va en el numerador, mientras que la del negro, 0, va en el denominador.

$$
C_\text{máx} = \frac{1+0.05}{0+0.05} = 21
$$

Es fácil ver que el **contraste mínimo** es igual a 1, pues se da cuando ambos colores tienen la misma luminosidad relativa ($L1 = L2$).

Las pautas WCAG nos dicen que la relación de **contraste mínimo** entre un texto y su fondo debería ser de al menos **4.5:1**.

{{% callout note %}}

[Colorable](https://colorable.jxnblk.com/) es una excelente herramienta con la que podemos comprobar el contraste de combinaciones de colores.

{{% /callout %}}

## Entonces, ¿qué colores se ven bien tanto sobre blanco como sobre negro?
Dada la luminosidad relativa de un color, $L$, podemos calcular su **contraste sobre blanco**, $C_\text{blanco}$, con la expresión[^2]:

[^2]: Como el blanco es el color más claro, $L$ va en el denominador.

$$
C_\text{blanco} = \frac{1 + 0.05}{L + 0.05} = \frac{1.05}{L+0.05}
$$

El **contraste sobre negro**, $C_\text{negro}$, lo calculamos con la expresión[^3]:

[^3]: Ahora será el color en cuestión el color más claro ($L$ en el numerador), pues el negro es el color más oscuro.

$$
C_\text{negro} = \frac{L + 0.05}{0 + 0.05} = \frac{L+0.05}{0.05}
$$

Si queremos elegir un color que se vea bien tanto sobre blanco como sobre negro, debemos imponer que ambos contrastes, $C_\text{blanco}$ y $C_\text{negro}$, sean como mínimo iguales a 4.5. Eso nos da estas dos <strong>inecuaciones</strong>:

\begin{align*}
C_\text{blanco} &= \frac{1.05}{L+0.05} \geq 4.5 \tag{1} \\\\
C_\text{negro} &= \frac{L+0.05}{0.05} \geq 4.5 \tag{2}
\end{align*}

De la primera (**blanco**) sacamos:

$$
L \leq \frac{1.05}{4.5}-0.05 = 0.18\overline{3},
$$

mientras que de la segunda (**negro**):

$$
L \geq 4.5\cdot 0.05-0.05 = 0.175
$$

Por lo que $0.175\leq L\leq 0.18\overline{3}$.

[Ben Szabo](https://dev.to/finnhvman) ha creado este *Pen* que itera a través del espacio de color RGB, con incrementos de 17 por canal[^4], listando **76 colores** cuyo contraste sobre blanco y negro *a la vez* es de 4.5 como mínimo.

[^4]: En el [espacio de color **RGB**](https://es.wikipedia.org/wiki/RGB), los valores de cada canal (rojo, verde y azul) varían desde 0 hasta 255. Incrementos de 17 permiten iterar a través de los colores que pueden ser descritos con una [notación hexadecimal](https://es.wikipedia.org/wiki/Colores_web) de 3 dígitos.

<p class="codepen" data-height="600" data-theme-id="light" data-default-tab="result" data-user="finnhvman" data-slug-hash="bZQLgR" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Colors With 4.5:1 Contrast on Black and White">
  <span>See the Pen <a href="https://codepen.io/finnhvman/pen/bZQLgR">
  Colors With 4.5:1 Contrast on Black and White</a> by Ben Szabo (<a href="https://codepen.io/finnhvman">@finnhvman</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## ¿Cuál es el máximo contraste que podemos conseguir sobre blanco y negro *a la vez*?
Para poder tener suficiente contraste sobre blanco y negro *a la vez*, la luminosidad relativa del color tiene que estar entre dos valores[^5], como se puede ver con las inecuaciones (1) y (2). El **contraste máximo teórico** de un color **sobre blanco** y **negro *a la vez***, $C_\text{b\&n}^\text{máx}$, se puede obtener imponiendo que esos dos valores de luminosidad relativa se igualen:

[^5]: Dicho de otra forma, el color no tiene que ser ni muy claro (pobre contraste sobre blanco) ni muy oscuro (pobre contraste sobre negro).

$$
\frac{1.05}{C_\text{b\&n}^\text{máx}}-\cancel{0.05} = C_\text{b\&n}^\text{máx}\cdot 0.05-\cancel{0.05},
$$

de donde se obtiene $C_\text{b\&n}^\text{máx} = \sqrt{21} \approx 4.58$, que corresponde con este color <strong><em>fucsia</em></strong>:

<ul style="display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
  grid-gap: 16px;
  padding-right: 32px;">
  <li style="border-radius: 4px;
  padding: 48px 16px 16px;
  list-style: none;
  text-align: end; background-color: #cf0dcc; font-family: Inconsolata">
	  <span style="color:white">#cf0dcc</span><br>rgb(207,13,204)
  </li>
</ul>

Una buena **combinación** de **colores primarios** (rojo, verde y azul) sería[^6]:

[^6]: Los tres con un contraste cercano al **máximo teórico** de $\sqrt{21}$ tanto sobre blanco como sobre negro.

<ul style="display: grid;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
  grid-gap: 16px;
  padding-right: 32px;">
  <li style="border-radius: 4px;
  padding: 48px 16px 16px;
  list-style: none;
  text-align: end; background-color: #e62101; font-family: Inconsolata">
	  <span style="color:white">#e62101</span><br>rgb(230,33,1)
  </li>
  <li style="border-radius: 4px;
  padding: 48px 16px 16px;
  list-style: none;
  text-align: end; background-color: #038901; font-family: Inconsolata">
	  <span style="color:white">#038901</span><br>rgb(3,137,1)
  </li>
  <li style="border-radius: 4px;
  padding: 48px 16px 16px;
  list-style: none;
  text-align: end; background-color: #2f72de; font-family: Inconsolata">
	  <span style="color:white">#2f72de</span><br>rgb(47,114,222)
  </li>    
</ul>

## Pero, ¿y si representamos todos los colores disponibles?
En su [*Pen*](https://codepen.io/finnhvman/full/bZQLgR), [Ben Szabo](https://dev.to/finnhvman) itera a través del espacio de color RGB, con incrementos de 17 por canal, advirtiéndonos de que, si iteráramos por todos los posibles colores (incrementos de 1), obtendríamos ~300k colores. Obviamente listar tantísimos colores no parece my práctico, pero visualizarlos puede ser muy interesante.

La siguiente figura muestra cuántos colores hay disponibles en función del contraste deseado:

<canvas id="C-colores"></canvas>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>

<script>
	const c = document.getElementById('C-colores').getContext('2d');

	const contraste = [
[  1.00000000, 16777216.00000000],
[  1.10000000, 16718142.00000000],
[  1.20000000, 16463626.00000000],
[  1.30000000, 15998613.00000000],
[  1.40000000, 15312333.00000000],
[  1.50000000, 14609093.00000000],
[  1.60000000, 13940523.00000000],
[  1.70000000, 13302350.00000000],
[  1.80000000, 12689097.00000000],
[  1.90000000, 12098036.00000000],
[  2.00000000, 11525628.00000000],
[  2.10000000, 10969347.00000000],
[  2.20000000, 10426685.00000000],
[  2.30000000, 9896469.00000000],
[  2.40000000, 9376373.00000000],
[  2.50000000, 8865518.00000000],
[  2.60000000, 8366442.00000000],
[  2.70000000, 7879689.00000000],
[  2.80000000, 7404556.00000000],
[  2.90000000, 6939230.00000000],
[  3.00000000, 6482445.00000000],
[  3.10000000, 6032992.00000000],
[  3.20000000, 5588197.00000000],
[  3.30000000, 5147368.00000000],
[  3.40000000, 4710701.00000000],
[  3.50000000, 4278864.00000000],
[  3.60000000, 3851419.00000000],
[  3.70000000, 3428654.00000000],
[  3.80000000, 3010580.00000000],
[  3.90000000, 2597091.00000000],
[  4.00000000, 2188606.00000000],
[  4.01000000, 2148323.00000000],
[  4.02000000, 2108143.00000000],
[  4.03000000, 2068047.00000000],
[  4.04000000, 2028046.00000000],
[  4.05000000, 1987974.00000000],
[  4.06000000, 1948129.00000000],
[  4.07000000, 1908464.00000000],
[  4.08000000, 1868847.00000000],
[  4.09000000, 1829454.00000000],
[  4.10000000, 1789950.00000000],
[  4.11000000, 1750642.00000000],
[  4.12000000, 1711410.00000000],
[  4.13000000, 1672369.00000000],
[  4.14000000, 1633331.00000000],
[  4.15000000, 1594456.00000000],
[  4.16000000, 1555689.00000000],
[  4.17000000, 1517010.00000000],
[  4.18000000, 1478420.00000000],
[  4.19000000, 1439883.00000000],
[  4.20000000, 1401485.00000000],
[  4.21000000, 1363251.00000000],
[  4.22000000, 1325022.00000000],
[  4.23000000, 1286929.00000000],
[  4.24000000, 1248956.00000000],
[  4.25000000, 1211066.00000000],
[  4.26000000, 1173146.00000000],
[  4.27000000, 1135427.00000000],
[  4.28000000, 1097870.00000000],
[  4.29000000, 1060177.00000000],
[  4.30000000, 1022748.00000000],
[  4.31000000, 985475.00000000],
[  4.32000000, 948137.00000000],
[  4.33000000, 911014.00000000],
[  4.34000000, 873843.00000000],
[  4.35000000, 836740.00000000],
[  4.36000000, 799919.00000000],
[  4.37000000, 763092.00000000],
[  4.38000000, 726436.00000000],
[  4.39000000, 689775.00000000],
[  4.40000000, 653055.00000000],
[  4.41000000, 616734.00000000],
[  4.42000000, 580186.00000000],
[  4.43000000, 543893.00000000],
[  4.44000000, 507760.00000000],
[  4.45000000, 471539.00000000],
[  4.46000000, 435462.00000000],
[  4.47000000, 399547.00000000],
[  4.48000000, 363640.00000000],
[  4.49000000, 327915.00000000],
[  4.50000000, 292107.00000000],
[  4.51000000, 256406.00000000],
[  4.52000000, 220874.00000000],
[  4.53000000, 185376.00000000],
[  4.54000000, 150067.00000000],
[  4.55000000, 114623.00000000],
[  4.56000000, 79251.00000000],
[  4.57000000, 44082.00000000],
[  4.58000000, 9067.00000000],
[  4.58100000, 5562.00000000],
[  4.58200000, 2047.00000000],
[  4.58210000, 1701.00000000],
[  4.58220000, 1335.00000000],
[  4.58230000, 980.00000000],
[  4.58240000, 584.00000000],
[  4.58250000, 259.00000000],
[  4.58251000, 212.00000000],
[  4.58252000, 173.00000000],
[  4.58253000, 145.00000000],
[  4.58254000, 118.00000000],
[  4.58255000,  90.00000000],
[  4.58256000,  57.00000000],
[  4.58257000,  19.00000000],
[  4.58257100,  18.00000000],
[  4.58257200,  13.00000000],
[  4.58257300,  10.00000000],
[  4.58257400,   6.00000000],
[  4.58257500,   1.00000000],
	];				
	new Chart(c, {
	  type: 'line',		
	  data: {
	    datasets: [
			{
	      data: contraste.map(datum => ({
	        x: datum[0],
	        y: datum[1]
	      })),
	      label: 'Número de colores',
	      backgroundColor: '#111111',
	      borderColor: '#111111',
	      fill: false,
		  pointRadius: 0,
	      //              pointHoverRadius: 15,
//	      showLine: false // no line shown
	    }							
	]
	  },
	  options: {
	    scales: {
	      xAxes: [{
	        type: "linear",
	        gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        // afterFit: function(scale) {
// 	          scale.height = 80 //<-- set value as you wish
// 	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Contraste',
	          fontSize: 18,
	          fontFamily: 'Cabin Sketch',
	          fontColor: '#111111'
	        },
	        ticks: {
	          fontSize: 16,
	          fontFamily: 'EB Garamond',
	          fontColor: '#111111',
	          max: 5.0,
	          min: 1.0,
	          stepSize: 0.5,
	          padding: 10
	        }
	      }],
	      yAxes: [{
			  type: "logarithmic",
 	          gridLines: {
	          drawOnChartArea: false,
	          color: "#111111"
	        },
	        scaleLabel: {
	          display: true,
	          labelString: 'Número de colores',
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
	          maxTicksLimit: 9,
	          max: 100000000,
 			  min: 1,
			  autoSkip: false,
			  callback: function(label, index, labels) {
				  switch (label) {
					  case 1:
						  return '1';
					  case 10:
						  return '10';
					  case 100:
						  return '100';
					  case 1000:
						  return '1k';
					  case 10000:
						  return '10k';
					  case 100000:
						  return '100k';
					  case 1000000:
						  return '1M';
					  case 10000000:
						  return '10M';
					  case 100000000:
						  return '100M'; 						  						  						  						  
				  }
			  }
			},
			// afterBuildTicks: function(pckBarChart) {
	//             pckBarChart.ticks = [];
	//             pckBarChart.ticks.push(1);
	//             pckBarChart.ticks.push(10);
	//             pckBarChart.ticks.push(100);
	//             pckBarChart.ticks.push(1000);
	//             pckBarChart.ticks.push(1e4);
	//             pckBarChart.ticks.push(1e5);
	//             pckBarChart.ticks.push(1e6);
	//             pckBarChart.ticks.push(1e7);
	//             pckBarChart.ticks.push(1e8);
	//         }
	      }]

	    },
	    legend: {
	      display: false
	    },
	  }
	});
</script>
	
Se puede ver cómo para $C=1$ (el mínimo contraste posible), todos los colores del espacio RGB están disponibles, exactamente:

$$
256\cdot 256\cdot 256 = 16\thinspace 777\thinspace 216
$$

colores. A medida que aumentamos la exigencia en el constraste, el número de colores disminuye, desplomándose a partir de $C=4.5$, hasta llegar a tener un solo color disponible en el límite $C_\text{b\&n}^\text{máx} = \sqrt{21}$, el fucsia <code style="background-color: #cf0dcc; color: #fffff8">#cf0dcc</code>.	
	
La siguiente **animación** muestra todos los colores disponibles en el espacio RGB (un cubo de lado 256) en función del contraste deseado (sobre blanco y negro *a la vez*):
	
{{< figure library="true" src="contraste-color/colores-C.gif" title="Colores RGB disponibles en función del contraste deseado, variando desde $C=1$ (los $256\cdot 256\cdot 256 = 16\thinspace 777\thinspace 216$ colores del espacio RGB disponibles) hasta el límite $C_\text{b\&n}^\text{máx}=\sqrt{21}$ en el que únicamente tenemos el color fucsia #cf0dcc." lightbox="false" width="100%" >}}
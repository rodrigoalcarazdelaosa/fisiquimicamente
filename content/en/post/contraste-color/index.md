---
title: Color Contrast
subtitle: On Both Black and White
summary: Color Contrast on Both Black and White.
breadcrumbs: ["blog"]
date: "2020-09-05T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- blog
- color
- contrast
categories:
- Accessibility
image:
  placement: 3  
  caption: Photo by [**Paweł Czerwiński**](https://unsplash.com/@pawel_czerwinski) on [Unsplash](https://unsplash.com)

math: true
---

{{% callout note %}}
This post is an **adaptation/extension** of the [**excellent post** by **Ben Szabo** on dev.to](https://dev.to/finnhvman/which-colors-look-good-on-black-and-white-2pe6).
{{% /callout %}}

{{% callout note %}}
If you want to know more about **web accessibility** I recommend you take a look at this [**excellent guide**](https://www.websiteplanet.com/blog/website-accessibility-made-easy-ultimate-guide/).
{{% /callout %}}

{{% callout note %}}
Do you want to know even more about **color schemes** and how to choose an **aesthetic color palette** in 2021? Check out [this **awesome blog post** from **Evinex**](https://www.evinex.com/color-schemes/).
{{% /callout %}}

I am considering the possibility of allowing the visitors of my website to choose whether they want a **light** or **dark** background. With a dark background (almost black) the text would become light (almost white), the opposite of what it is currently, but the **accent color**, this blue <svg width="1rem" height="1rem">
  <rect rx="4" ry="4" width="1rem" height="1rem" style="fill:#2a54a9" />
</svg>, would no longer have enough **contrast** on black.

## What is contrast and how is it defined?
The Web Content Accessibility Guidelines [(**WCAG**)](https://www.w3.org/WAI/standards-guidelines/wcag/) [define the **contrast** ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio), $C$, as:

$$
C = \frac{L1 + 0.05}{L2 + 0.05},
$$

where $L1$ y $L2$ are the *relative luminances* of the lighter and darker colors, respectively. The [relative luminance](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) is defined as:

> The relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white.

In the case of the **sRGB** color space, the default used throughout the Web, there are some [*simple* expressions to calculate this relative luminance](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance), which depends on the coordinates of the color in question.

Black has a relative luminance equal to 0, while that of white is equal to 1, so the **maximum possible contrast**, $C_\text{max}$, is [^1]:

[^1]: As white is lighter than black, its luminosity, 1, goes in the numerator, while that of black, 0, goes in the denominator.

$$
C_\text{max} = \frac{1+0.05}{0+0.05} = 21
$$

It is easy to see that the **minimum contrast** is equal to 1, since it is given when both colors have the same relative luminosity ($L1 = L2$).

The WCAG guidelines say that the **minimum contrast ratio** between a given text and its background should be at least **4.5:1**.

{{% callout note %}}

[Colorable](https://colorable.jxnblk.com/) is an excellent tool with which we can check the contrast of color combinations.

{{% /callout %}}

## So, which colors look good on both black and white?
Given the relative luminance of a color, $L$, we can calculate its **contrast on black**, $C_\text{black}$, with the expression[^2]:

[^2]: The color in question will be the lightest color ($L$ in the numerator), since black is the darkest color. 

$$
C_\text{black} = \frac{L + 0.05}{0 + 0.05} = \frac{L+0.05}{0.05}
$$

**Contrast on white**, $C_\text{white}$, is calculated with the expression[^3]:

[^3]: As white is the lightest color, $L$ goes in the denominator.

$$
C_\text{white} = \frac{1 + 0.05}{L + 0.05} = \frac{1.05}{L+0.05}
$$

If we want to choose a color that looks good on both black and white, we must impose that both contrasts, $C_\text{black}$ and $C_\text{white}$, are at least equal to 4.5. That gives us these two <strong>inequalities</strong>:

\begin{align*}
C_\text{black} &= \frac{L+0.05}{0.05} \geq 4.5 \tag{1} \\\\
C_\text{white} &= \frac{1.05}{L+0.05} \geq 4.5 \tag{2}
\end{align*}

From the first one (**black**) we get:

$$
L \geq 4.5\cdot 0.05-0.05 = 0.175
$$

whereas from the second one (**white**):

$$
L \leq \frac{1.05}{4.5}-0.05 = 0.18\overline{3},
$$

So that $0.175\leq L\leq 0.18\overline{3}$.

[Ben Szabo](https://dev.to/finnhvman) has created this *Pen* which iterates through the RGB color space, with increments of 17 per channel[^4], listing **76 colors** whose contrast on both black and white is at least 4.5.

[^4]: In the [**RGB** color model](https://en.wikipedia.org/wiki/RGB), values for each channel (red, green and blue) vary from 0 to 255. Increments of 17 allow for iterating through the colors that can be described with 3-digit [hexa notation](https://en.wikipedia.org/wiki/Web_colors).

<p class="codepen" data-height="600" data-theme-id="light" data-default-tab="result" data-user="finnhvman" data-slug-hash="bZQLgR" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Colors With 4.5:1 Contrast on Black and White">
  <span>See the Pen <a href="https://codepen.io/finnhvman/pen/bZQLgR">
  Colors With 4.5:1 Contrast on Black and White</a> by Ben Szabo (<a href="https://codepen.io/finnhvman">@finnhvman</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## What is the maximum contrast we can achieve on both black and white?
In order to have enough contrast on both black and white, the relative luminance of the color has to be between two values[^5], as you can see with the inequalities (1) and (2). The **theoretical maximum contrast** of a color **on both black and white**, $C_\text{b\&w}^\text{max}$, can be obtained by imposing that those two values of relative luminance be equal:

[^5]: In other words, the color does not have to be either very light (poor contrast on white) or very dark (poor contrast on black).

$$
\frac{1.05}{C_\text{b\&w}^\text{max}}-\cancel{0.05} = C_\text{b\&w}^\text{max}\cdot 0.05-\cancel{0.05},
$$

from where we get $C_\text{b\&w}^\text{max} = \sqrt{21} \approx 4.58$, which corresponds to this <strong><em>fuchsia</em></strong> color:

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

A good **combination** of **primary colors** (red, green and blue) would be[^6]:

[^6]: All three with a contrast close to the **theoretical maximum** of $\sqrt{21}$ on both black and white.

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

## But, what if we show all the available colors?
In his [*Pen*](https://codepen.io/finnhvman/full/bZQLgR), [Ben Szabo](https://dev.to/finnhvman) iterates through the RGB color space, with increments of 17 per channel, warning us that, if we were to iterate through all possible colors (increments of 1), we would get ~300k colors. Obviously listing so many colors does not seem very practical, but visualizing them can be very interesting.

The following figure shows how many colors are available depending on the desired contrast:

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
	      label: 'Number of colors',
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
	          labelString: 'Contrast',
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
	          labelString: 'Number of colors',
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
	
We can see how for $C=1$ (the minimum possible contrast), all the colors in the RGB space are available, namely:

$$
256\cdot 256\cdot 256 = 16\thinspace 777\thinspace 216
$$

colors. As we increase the contrast, the number of colors decreases, plummeting from $C=4.5$, until we have only one color available in the limit $C_\text{b\&w}^\text{max} = \sqrt{21}$, the fuchsia <code style="background-color: #cf0dcc; color: #fffff8">#cf0dcc</code>.	
	
The following **animation** shows all the colors available in the RGB space (a 256-sided cube) depending on the desired contrast (on both black and white):
	
{{< figure library="true" src="contraste-color/colores-C.gif" title="RGB colors available depending on the desired contrast, ranging from $C=1$ ($256\cdot 256\cdot 256 = 16\thinspace 777\thinspace 216$ available colors) to the limit $C_\text{b\&w}^\text{max}=\sqrt{21}$ in which we only have the fuchsia color #cf0dcc." lightbox="false" width="100%" >}}
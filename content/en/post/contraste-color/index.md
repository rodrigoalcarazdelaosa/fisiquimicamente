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

$$
\begin{align*}
C_\text{black} &= \frac{L+0.05}{0.05} \geq 4.5 && \text{(1)} \\
C_\text{white} &= \frac{1.05}{L+0.05} \geq 4.5 && \text{(2)}
\end{align*}
$$

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

{{< deferred_widget provider="codePen" >}}
<p class="codepen" data-height="600" data-theme-id="light" data-default-tab="result" data-user="finnhvman" data-slug-hash="bZQLgR" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Colors With 4.5:1 Contrast on Black and White">
  <span>See the Pen <a href="https://codepen.io/finnhvman/pen/bZQLgR">
  Colors With 4.5:1 Contrast on Black and White</a> by Ben Szabo (<a href="https://codepen.io/finnhvman">@finnhvman</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
{{< /deferred_widget >}}

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
	  <span style="color:white">#cf0dcc</span><br><span style="color:black">rgb(207,13,204)</span>
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
	  <span style="color:white">#e62101</span><br><span style="color:black">rgb(230,33,1)</span>
  </li>
  <li style="border-radius: 4px;
  padding: 48px 16px 16px;
  list-style: none;
  text-align: end; background-color: #038901; font-family: Inconsolata">
	  <span style="color:white">#038901</span><br><span style="color:black">rgb(3,137,1)</span>
  </li>
  <li style="border-radius: 4px;
  padding: 48px 16px 16px;
  list-style: none;
  text-align: end; background-color: #2f72de; font-family: Inconsolata">
	  <span style="color:white">#2f72de</span><br><span style="color:black">rgb(47,114,222)</span>
  </li>    
</ul>

## But, what if we show all the available colors?
In his [*Pen*](https://codepen.io/finnhvman/full/bZQLgR), [Ben Szabo](https://dev.to/finnhvman) iterates through the RGB color space, with increments of 17 per channel, warning us that, if we were to iterate through all possible colors (increments of 1), we would get ~300k colors. Obviously listing so many colors does not seem very practical, but visualizing them can be very interesting.

The following figure shows how many colors are available depending on the desired contrast:

{{< deferred_chart id="C-colores" series="js/charts/color-contrast.js" >}}
return {
  datasets: [
    {
      data: series.contraste.map(([x, y]) => ({x, y})),
      label: "Number of colors",
      backgroundColor: "#111111",
      borderColor: "#111111",
      fill: false,
      pointRadius: 0,
    },
  ],
  x: {title: "Contrast", max: 5, min: 1, ticks: {stepSize: 0.5}},
  y: {title: "Number of colors", type: "logarithmic", beginAtZero: true, max: 100000000, min: 1, afterBuildTicks(axis) { axis.ticks = axis.ticks.filter(({value}) => Number.isInteger(Math.log10(value))); }, ticks: {autoSkip: false, maxTicksLimit: 9, callback: value => ({1: "1", 10: "10", 100: "100", 1000: "1k", 10000: "10k", 100000: "100k", 1000000: "1M", 10000000: "10M", 100000000: "100M"})[value]}},
};
{{< /deferred_chart >}}
	
We can see how for $C=1$ (the minimum possible contrast), all the colors in the RGB space are available, namely:

$$
256\cdot 256\cdot 256 = 16\thinspace 777\thinspace 216
$$

colors. As we increase the contrast, the number of colors decreases, plummeting from $C=4.5$, until we have only one color available in the limit $C_\text{b\&w}^\text{max} = \sqrt{21}$, the fuchsia <code style="background-color: #cf0dcc; color: #fffff8">#cf0dcc</code>.	
	
The following **animation** shows all the colors available in the RGB space (a 256-sided cube) depending on the desired contrast (on both black and white):
	
{{< figure library="true" src="contraste-color/colores-C.gif" title="RGB colors available depending on the desired contrast, ranging from $C=1$ ($256\cdot 256\cdot 256 = 16\thinspace 777\thinspace 216$ available colors) to the limit $C_\text{b\&w}^\text{max}=\sqrt{21}$ in which we only have the fuchsia color #cf0dcc." lightbox="false" width="100%" >}}
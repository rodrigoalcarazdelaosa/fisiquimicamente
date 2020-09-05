---
title: Color Contrast
subtitle: Both on Black and White
summary: Color Contrast Both on Black and White.
date: "2020-09-05T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- color
image:
  placement: 3  
  caption: Photo by [**Paweł Czerwiński**](https://unsplash.com/@pawel_czerwinski) on [Unsplash](https://unsplash.com)
---

{{% alert note %}}
This post is an **adaptation/extension** of the [**excellent post** by **Ben Szabo** on dev.to](https://dev.to/finnhvman/which-colors-look-good-on-black-and-white-2pe6).
{{% /alert %}}

I am considering the possibility of allowing the visitors of my website to choose whether they want a **light** or **dark** background. With a dark background (almost black) the text would become light (almost white), the opposite of what it is currently, but the **accent color**, this blue <svg width="1rem" height="1rem">
  <rect rx="4" ry="4" width="1rem" height="1rem" style="fill:#2a54a9" />
</svg>, would no longer have enough **contrast** on black.

## What is contrast and how is it defined?
The Web Content Accessibility Guidelines [(**WCAG**)](https://www.w3.org/WAI/standards-guidelines/wcag/), [define the **contrast** ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio), $C$, as:

$$
C = \frac{L1 + 0.05}{L2 + 0.05},
$$

where $L1$ y $L2$ are the *relative luminances* of the lighter and darker colors, respectively. The [relative luminance](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) is defined as:

> The relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white.

In the case of the **sRGB** color space, the default used throughout the Web, there are some [*simple* expressions to calculate this relative luminance](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance), which depends on the coordinates of the color in question.

Black has a relative luminance equal to 0, while that of white is equal to 1, so the **maximum possible contrast**, $C_\text{max}$, is [^1]:

[^1]: As white is lighter than black, its luminosity, 1, goes in the numerator, while that of black, 0, goes in the denominator.

$$
C_\text{máx} = \frac{1+0.05}{0+0.05} = 21
$$

The WCAG guidelines say that the **minimum contrast ratio** between a given text and its background should be at least **4.5:1**. [Colorable](https://colorable.jxnblk.com/) is an excellent tool with which we can check the contrast of color combinations.

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

[Ben Szabo](https://dev.to/finnhvman) ha creado este *Pen* que itera a través del espacio de color sRGB, con incrementos de 17 por canal[^4], listando **76 colores** cuyo contraste sobre blanco y negro *a la vez* es de 4.5 como mínimo.

[^4]: En el [espacio de color **RGB**](https://es.wikipedia.org/wiki/RGB), los valores de cada canal (rojo, verde y azul) varían desde 0 hasta 255. Incrementos de 17 permiten iterar a través de los colores que pueden ser descritos con una [notación hexadecimal](https://es.wikipedia.org/wiki/Colores_web) de 3 dígitos. Si iteráramos por todos los posibles colores (incrementos de 1) obtendríamos ~300k colores.

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
---
title: Contraste de color
subtitle: Contra blanco y negro *a la vez*
summary: Contraste de color contra blanco y negro *a la vez*.
date: "2020-09-05T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- color
image:
  placement: 3  
  caption: Foto de [**Paweł Czerwiński**](https://unsplash.com/@pawel_czerwinski) en [Unsplash](https://unsplash.com)
---

{{% alert note %}}
Esta entrada es una traducción/adaptación del [excelente artículo de Ben Szabo en dev.to](https://dev.to/finnhvman/which-colors-look-good-on-black-and-white-2pe6).
{{% /alert %}}

Estoy planteándome la posibilidad de permitir elegir al visitante de mi web si desea un **fondo claro** u **oscuro**. Con un fondo oscuro (casi negro) el texto pasaría a ser claro (casi blanco), a la inversa de como es actualmente, pero el **color** de **resalte**, <svg width="1rem" height="1rem">
  <rect width="300" height="100" style="fill:#2a54a9" />
</svg> este azul, dejaría de tener suficiente **contraste** sobre el negro.

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

Las pautas WCAG nos dicen que la relación de **contraste mínimo** entre un texto y su fondo debería ser de al menos **4.5:1**. [Colorable](https://colorable.jxnblk.com/) es una excelente herramienta con la que podemos comprobar el contraste de combinaciones de colores.

## Entonces, ¿qué colores se ven bien tanto sobre blanco como sobre negro?
Dada la luminosidad relativa de un color, $L$, podemos calcular su **contraste contra** el **blanco**, $C_\text{blanco}$, con la expresión[^2]:

[^2]: Como el blanco es el color más claro, $L$ va en el denominador.

$$
C_\text{blanco} = \frac{1 + 0.05}{L + 0.05} = \frac{1.05}{L+0.05}
$$

El **contraste contra** el **negro**, $C_\text{negro}$, lo calculamos con la expresión[^3]:

[^3]: Ahora será el color en cuestión el color más claro ($L$ en el numerador), pues el negro es el color más oscuro.

$$
C_\text{negro} = \frac{L + 0.05}{0 + 0.05} = \frac{L+0.05}{0.05}
$$

Si queremos elegir un color que se vea bien tanto sobre blanco como sobre negro, debemos imponer que ambos contrastes, $C_\text{blanco}$ y $C_\text{negro}$, sean como mínimo iguales a 4.5. Eso nos da estas dos <strong>inecuaciones</strong>:

\begin{align*}
C_\text{blanco} &= \frac{1.05}{L+0.05} \geq 4.5 \\\\
C_\text{negro} &= \frac{L+0.05}{0.05} \geq 4.5
\end{align*}

De la primera (**blanco**) sacamos:

$$
L \leq \frac{1.05}{4.5}-0.05 = 0.18\overline{3},
$$

mientras que de la segunda (**negro**):

$$
L \geq 4.5\cdot 0.05-0.05 = 0.175
$$

Por lo que $0.175\leq L\leq 0.18\overline{3}$. [Ben Szabo](https://dev.to/finnhvman) ha creado este *pen* donde 

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="finnhvman" data-slug-hash="bZQLgR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Colors With 4.5:1 Contrast on Black and White">
  <span>See the Pen <a href="https://codepen.io/finnhvman/pen/bZQLgR">
  Colors With 4.5:1 Contrast on Black and White</a> by Ben Szabo (<a href="https://codepen.io/finnhvman">@finnhvman</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

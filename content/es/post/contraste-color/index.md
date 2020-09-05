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

Estoy planteándome la posibilidad de permitir elegir al visitante de mi web si desea un fondo claro u oscuro. Con un fondo oscuro (casi negro) el texto pasaría a ser claro (casi blanco), a la inversa de como es actualmente, pero el color resalte, <span style="color:#2a54a9;">este azul</span>, dejaría de tener suficiente **contraste**. <svg width="1rem" height="1rem">
  <rect width="300" height="100" style="fill:#2a54a9" />
</svg>

## ¿Qué es el contraste y cómo se define?
Las *Pautas de Accesibilidad para el Contenido Web*, [**WCAG**](https://www.w3.org/WAI/standards-guidelines/wcag/es) por sus siglas en inglés, [definen la relación de **contraste**](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) como:

$$
\frac{L1 + 0.05}{L2 + 0.05},
$$

donde $L1$ y $L2$ son las *luminosidades relativas* de los colores claro y oscuro, respectivamente. La [luminosidad relativa](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) se define a su vez como:

> El brillo relativo de cualquier punto en un espacio de color, normalizado a 0 para el negro más oscuro y 1 para el blanco más claro.

En el caso del espacio de color **sRGB**, el utilizado por defecto en toda la Web, existen unas expresiones *sencillas* para calcular esta luminosidad relativa, que depende de las coordenadas del color en cuestión.

El negro

[Colorable](https://colorable.jxnblk.com/) es una excelente herramienta con la que podemos comprobar
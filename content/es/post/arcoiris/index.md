---
title: ¿Cómo se forma el arcoíris?
subtitle: Y por qué nunca lo podrás alcanzar
summary: "Cómo se forma el arcoíris y por qué nunca lo podrás alcanzar."
breadcrumbs: ["blog"]
date: "2022-02-13T00:00:00Z"
authors:
- pilar-palanca
- juan-docon
tags:
- blog
- óptica
- geometría
- arcoíris
- dispersión
- ley-Snell
categories:
- Física
image:
  placement: 3
  caption: "Foto de [**Frans Van Heerden**](https://www.pexels.com/es-es/@frans-van-heerden-201846) en [Pexels](https://www.pexels.com/es-es/)"
---

{{% callout note %}}
Entrada basada en el siguiente 🧵 hilo de Twitter:
<div align="center">
{{< tweet user="BTeseracto" id="1492197697956241416" >}}
</div>
{{% /callout %}}

Hoy toca hablar de [**óptica**](https://es.wikipedia.org/wiki/Óptica) y [**geometría**](https://es.wikipedia.org/wiki/Geometr%C3%ADa). Pues vamos a usar esas dos cosas para explicar cómo se forma el famoso [**arcoíris**](https://es.wikipedia.org/wiki/Arco%C3%ADris) y por qué jamás lo podrás alcanzar. Así que, comencemos:

{{< figure src="gota-agua.jpg" title="Esquema de una gota de agua representada con un círculo. Sobre el esquema se representa el rayo incidente a la gota, el rayo refractado que se acerca a la perpendicular al medio, un rebote en su interior (simétrico respecto a la perpendicular) y la salida del rayo de la gota, en todos los casos representando la [**ley de Snell**](https://es.wikipedia.org/wiki/Ley_de_Snell) y las desviaciones que sufre el rayo de luz." lightbox="true" >}}

Los arcoíris se forman cuando llueve, pues para que este fenómeno óptico se produzca, la luz debe entrar en las gotas de lluvia, reflejarse en su interior y salir. Al salir se producirá la famosa [descomposición del espectro visible de la luz](https://es.wikipedia.org/wiki/Dispersión_refractiva) y con ello el arcoíris. Para saber con qué ángulo saldrá la luz de la gota, y saber en qué dirección se producirá el arcoíris, debemos sumar la desviación inicial, la del rebote dentro de la gota y la desviación a la salida. Para un rebote[^1], la desviación total será por tanto:

[^1]: En el caso de que la luz rebotara dos veces, se formaría un **arcoíris doble**, cuyos colores están invertidos, como se aprecia en la siguiente fotografía:
  {{< figure src="arcoiris-doble.jpg" title="Foto de [**James Wheeler**](https://www.pexels.com/es-es/@souvenirpixels) en [Pexels](https://www.pexels.com/es-es/)." lightbox="false" >}}

$$
\hat{d}_\mathrm t = \hat{d}_1 + \hat{d}_2 + \hat{d}_3
$$

Llamamos *i&#770;* al ángulo que forman el rayo incidente con la perpendicular de la gota en el punto de entrada. Aquí debemos tener en cuenta que cuando la luz cambia de medio su trayectoria también lo hace, como nos dice la [**ley de Snell**](https://es.wikipedia.org/wiki/Ley_de_Snell). Según esta ley, el índice de refracción de un medio por el seno del ángulo incidente será igual al índice de refracción del segundo medio por el seno del ángulo que adquiere al pasar a ese medio. Debemos tener en cuenta que el índice del aire es 1.

$$
n_1\sin\hat \imath = n_2\sin\hat r,
$$

donde $n_1$ y $n_2$ son los índices de refracción del primer y segundo medio, respectivamente; e *i&#770;* y *r&#770;* son los ángulos incidente y refractado, respectivamente. La primera desviación será igual al ángulo incidente menos el ángulo de la luz dentro del agua respecto a la perpendicular, o ángulo refractado, al que llamaremos *r&#770;*. Esto lo sabemos por la geometría del problema:

{{< figure src="ley-Snell.jpg" title="Esquema de la ley de Snell. Un rayo incide con un ángulo sobre la perpendicular de un medio a otro diferente, en el segundo medio el ángulo del rayo respecto a la perpendicular cambia (en este caso se acerca a la perpendicular) por el cambio en el índice de refracción." lightbox="true" >}}

$$
\hat{d}_1 = \hat{\imath} - \hat{r}
$$

Dentro de la gota la luz se refleja, es decir, rebota con el mismo ángulo que llevaba. De aquí sacaremos la segunda desviación, pues ésta será igual a un ángulo de 180 grados (π&thinsp;rad) menos dos veces el ángulo de la luz en el agua, *r&#770;*.

{{< figure src="reflexion.jpg" title="Esquema para representar que, en un mismo medio, el ángulo con el que rebota el rayo de luz respecto a la perpendicular tiene el mismo ángulo que al incidir." lightbox="true" >}}

También podemos ver que:

$$
\pi = \hat d_2 + 2\hat r \rightarrow \hat d_2 = \pi-2\hat r
$$

Por último, tenemos la misma geometría que al inicio, pues es el mismo cambio de medio solo que al revés. Por tanto, la tercera desviación será idéntica a la primera. Y con esto solo nos queda sumar las tres desviaciones.

{{< figure src="rayo-saliente.jpg" title="Esquema del rayo saliente de la gota, el cual al cambiar de medio se aleja de la perpendicular." lightbox="true" >}}

Así mismo:

$$
\hat d_3 = \hat d_1 = \hat \imath-\hat r
$$

Este valor lo tenemos en función del ángulo incidente y del ángulo refractado. Para simplificarlo pondremos el ángulo refractado, *r&#770;*, en función del ángulo incidente, *i&#770;*. Para ello volvemos a valernos de la ley de Snell. La suma de las desviaciones será:

\begin{align*}
\hat d_\mathrm t &= 2\left(\hat\imath-\hat r\right)+\pi-2\hat r \\\\
\hat d_\mathrm t &= \pi+2\hat \imath-4\hat r
\end{align*}

Con esto obtenemos la expresión del ángulo para el cual se forma el arcoíris en función del ángulo de entrada. Utilizando la ley de Snell y suponiendo que el medio desde donde incide la luz es aire ($n_1=1$):

$$
\sin\hat\imath = n_2\sin\hat r \rightarrow \hat r = \arcsin{\left(\frac{\sin\hat\imath}{n_2}\right)}
$$

Por otra parte, también podemos calcular el ángulo mínimo para el cual esto puede darse. No vamos a ahondar en este cálculo, pero os lo dejamos por si os interesa, se trata de ver en qué puntos la derivada se anula.

\begin{align*}
\frac{\partial \hat d_\mathrm t}{\partial \hat \imath} &= 0 \\\\
2-\frac{4\cos\hat\imath}{n}\cdot \frac{1}{\sqrt{1-\left(\dfrac{\sin\hat\imath}{n}\right)^2}} &= 0 \\\\
\frac{2n\cos\hat\imath}{n}\cdot\frac{1}{\sqrt{n^2-\sin^2\hat\imath}} &= 1 \\\\
\cos\hat\imath &= \sqrt{\frac{n^2-\sin^2\hat\imath}{4}} \\\\
\cos^2\hat\imath &= \frac{n^2-1+\cos^2\hat\imath}{4}\rightarrow 3\cos^2\hat\imath = n^2-1 \\\\
\hat\imath_\mathrm{mín} &= \arccos{\sqrt{\frac{n^2-1}{3}}}
\end{align*}

Obtenemos que el ángulo mínimo es de 59 grados, 24 minutos y 38 segundos de arco. Por eso nunca puedes alcanzar un arcoíris, al acercarte tu posición cambia. El arcoíris siempre estará en el mismo ángulo respecto a ti.

$$
n_\mathrm{agua} = 1.333 \rightarrow \hat\imath_\mathrm{mín} = 59^\circ\thinspace 24'\thinspace 38'';\quad \hat d_\mathrm t = 137^\circ\thinspace 55'\thinspace 19''
$$
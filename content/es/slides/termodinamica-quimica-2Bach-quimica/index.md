---
title: Termodinámica química
summary: "Ecuaciones termoquímicas, ley de Hess y espontaneidad de las reacciones químicas."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/termodinamica-quimica/diapositivas"

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style:

  reveal_options:
    hash: true
---

<section data-background-image="/media/logo-diapositivas.svg, qrcode.svg" data-background-size="10%" data-background-position="3.629% 5%, 96.371% 5%">

# Termodinámica química

- [Ecuaciones termoquímicas](#/2)
- [Ley de Hess](#/3)
- [Entropía y segundo principio de la termodinámica](#/4)
- [Energía de Gibbs y espontaneidad](#/5)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

La **termodinámica química** es la **ciencia** que **estudia** la **interrelación** entre el **calor** y el **trabajo** con las **reacciones químicas** o con los cambios físicos de estado dentro de los límites de las [leyes de la termodinámica](https://es.wikipedia.org/wiki/Principios_de_la_termodinámica).

---

{{% section %}}

## Ecuaciones termoquímicas

Una **ecuación termoquímica** es una ecuación química que indica, además, el calor (entalpía) que interviene en el proceso:

{{< math width="100%" >}}
\begin{align*}
\ce{
CH4(g) + 2O2(g) & -> CO2(g) + 2H2O(g)\qquad\text{$\symup\Delta \mathit H = -890.4\,\mathrm{kJ/mol}$} \\
CH4(g) + 2O2(g) & -> CO2(g) + 2H2O(g) + 890.4\,\mathrm{kJ/mol}
}
\end{align*}
{{< /math >}}
<br>
{{< math width="100%" >}}
$$
\frac{-890.4\,\mathrm{kJ}}{1\,\mathrm{mol}_{\ce{CH4}}}\quad\frac{-890.4\,\mathrm{kJ}}{2\,\mathrm{mol}_{\ce{O2}}}\quad\frac{-890.4\,\mathrm{kJ}}{1\,\mathrm{mol}_{\ce{CO2}}}\quad\frac{-890.4\,\mathrm{kJ}}{2\,\mathrm{mol}_{\ce{H2O}}}
$$
{{< /math >}}

---

### Entalpía estándar de reacción

Como la mayoría de las reacciones químicas ocurren a presión constante, ese calor coincide con la variación de entalpía de la reacción, magnitud que depende de las condiciones del sistema, por lo que es preciso definir un **estado estándar** ($p = 1&thinsp;\mathrm{bar} = 10^5&thinsp;\mathrm{Pa}$).

---

Aunque la temperatura no forma parte de la definición del estado estándar, la mayoría de las tablas de magnitudes termodinámicas contienen medidas a una temperatura concreta, habitualmente $T=25&thinsp;\mathrm{&degC} = 298&thinsp;\mathrm K$.

---

La **entalpía estándar de reacción**, $\symup{\Delta}_\mathrm r H^⦵$, es por tanto la variación de entalpía en una reacción química en la que los reactivos en estado estándar se transforman en productos en estado estándar. Suele medirse en kJ/mol.

---

### Procesos endotérmicos y exotérmicos

Atendiendo al calor puesto en juego en el proceso, las reacciones químicas pueden ser:

- **Endotérmicas**: si al pasar de reactivos a productos el sistema absorbe calor: $\symup\Delta H > 0$.
- **Exotérmicas**: si al pasar de reactivos a productos el sistema cede calor: $\symup\Delta H < 0$.

---

{{< figure src="termodinamica-quimica-2Bach-quimica/endo-exo.svg" lightbox="false" width="100%" >}}

---

{{< figure src="termodinamica-quimica-2Bach-quimica/endo-exo-entalpias.svg" lightbox="false" width="100%" theme="light" >}}

{{% /section %}}

---

{{% section %}}

## Ley de Hess

Dado que la **entalpía** es **función de estado**:

> La variación de entalpía en una reacción química sólo depende de los estados inicial y final y es independiente de las etapas en las que se produzca la reacción.

---

La **ley de Hess** también se puede aplicar a la entropía y a la energía de Gibbs, puesto que estas son funciones de estado igualmente.

{{< math width="100%" >}}
\begin{align*}
\symup{\Delta}_\mathrm r S^⦵ &= \sum n S_\mathrm f^⦵(\text{productos}) - \sum m S_\mathrm f^⦵(\text{reactivos}) \\
\symup{\Delta}_\mathrm r G^⦵ &= \sum n G_\mathrm f^⦵(\text{productos}) - \sum m G_\mathrm f^⦵(\text{reactivos})
\end{align*}
{{< /math >}}

---

Otra manera de enunciar la ley de Hess es:

> La variación de entalpía en una reacción química es constante, con independencia de que la reacción se realice en una o varias etapas.

---

La ley de Hess nos permite calcular variaciones de entalpía que no son fáciles de medir directamente, como por ejemplo la energía de red en el [ciclo de Born-Haber]({{< relref "slides/enlace-quimico-2Bach-quimica/index.md#ciclo-de-born-haber" >}}).

---

{{< figure src="termodinamica-quimica-2Bach-quimica/hess.svg" title="Cuando una reacción puede expresarse como la suma algebraica de dos o más reacciones, su calor de reacción es igual a la suma algebraica de los calores de reacción de las reacciones parciales<br>($\symup\Delta H_1 = \symup\Delta H_2 + \symup\Delta H_3 + \symup\Delta H_4$)." lightbox="false" width="60%" theme="light" >}}

---

### Entalpía estándar de formación

La **entalpía estándar de formación**, $\symup{\Delta}_\mathrm f H^⦵$, es la variación de entalpía correspondiente a la formación de **un mol** de sustancia a partir de sus elementos en estado estándar (la entalpía de formación de un elemento químico es nula por definición).

---

Para el cálculo de la entalpía estándar de reacción, $\symup{\Delta}_\mathrm r H^⦵$, a partir de las entalpías estándar de formación, $\symup{\Delta}_\mathrm f H^⦵$:

{{< math width="100%" >}}
$$
\symup{\Delta}_\mathrm r H^⦵ = \sum n \symup{\Delta}_\mathrm f H^⦵(\text{productos}) - \sum m \symup{\Delta}_\mathrm f H^⦵(\text{reactivos}),
$$
{{< /math >}}

siendo $n$ y $m$ los coeficientes estequiométricos de los productos y reactivos, respectivamente.

---

### Entalpía estándar de combustión

La **entalpía estándar de combustión**, $\symup{\Delta}_\mathrm c H^⦵$, es la variación de entalpía correspondiente a la combustión de **un mol** de sustancia en estado estándar.

---

A modo de ejemplo, la ecuación termoquímica de la combustión del carbono (grafito) y la formación del CO<sub>2</sub> es exactamente la misma:

$$
\ce{C(s) + O2(g) -> CO2(g) + 393.5&thinsp;kJ/mol}
$$

$$
\symup\Delta_\mathrm c H^⦵ \text{(C,grafito)} = \symup\Delta_\mathrm f H^⦵ (\mathrm{CO}_2,\mathrm g) = -393.5\,\mathrm{kJ/mol}
$$

---

Lo mismo pasa con la combustión del H<sub>2</sub> y la formación del agua líquida (notar que ajustamos la ecuación de forma que el coeficiente estequiométrico del compuesto de interés, H<sub>2</sub>O en este caso, sea 1):

$$
\ce{H2(g) + \frac{1}{2}O2(g) -> H2O(l) + 285.8&thinsp;kJ/mol}
$$

$$
\symup\Delta_\mathrm c H^⦵ (\mathrm H_2,\mathrm g) = \symup\Delta_\mathrm f H^⦵ (\mathrm{H_2O},\mathrm l) = -285.8\,\mathrm{kJ/mol}
$$

---

### Energías de enlace
Una reacción química supone la ruptura de los enlaces de los reactivos y la formación de nuevos enlaces para dar lugar a los productos de reacción.

---

Teniendo en cuenta que para romper un enlace hay que suministrar energía, y que al formarse se desprende, podremos calcular la entalpía de una reacción si conocemos el coste energético de cada uno de los enlaces que se rompe y forma, según la ecuación:

$$
\symup\Delta H = \sum \left|E_{\text{enlaces rotos}}\right| - \sum \left|E_{\text{enlaces formados}}\right|
$$

{{% /section %}}

---

{{% section %}}

## Entropía y segundo principio de la termodinámica

La **entropía**, $S$, es una magnitud termodinámica fuertemente relacionada con la **espontaneidad** e **irreversibilidad** de los procesos termodinámicos.

---

Es una **función de estado** que mide el grado de **dispersión** o **desorden** de la **energía** en un sistema. Es una magnitud extensiva y su unidad en el SI es J/K (en química <span style="white-space:nowrap">J&thinsp;mol<sup>–1</sup>&thinsp;K<sup>–1</sup></span>).

---

En los procesos espontáneos, la energía tiende a distribuirse entre más microestados accesibles, aumentando $S$ (ejemplo: la disolución/difusión de tinta en agua). El signo de la variación de entropía, $\symup\Delta S$, puede predecirse en función del cambio en el desorden relacionado con $\symup\Delta n(\mathrm g)$.

---

> Si quieres **saber más** sobre la **entropía** te recomendamos [esta excelente **entrada** del **blog**]({{< relref "/post/entropia" >}}).

---

### Segundo principio de la termodinámica

El **segundo principio de la termodinámica** es el responsable, entre otras cosas, de que el calor siempre fluya de manera espontánea desde cuerpos calientes a cuerpos fríos, o de la degradación de la energía en cualquier proceso cíclico (no toda la energía puede convertirse en trabajo útil).

---

> En todo proceso espontáneo la entropía del universo aumenta, es decir, la energía disponible para realizar trabajo útil disminuye.

---

En un proceso reversible, la entropía total permanece constante.

{{% /section %}}

---

{{% section %}}

## Energía de Gibbs y espontaneidad

Para determinar la espontaneidad de un proceso a presión y temperatura constantes, se define la **energía de Gibbs**, $G$, como:

$$
G = H - TS
$$

donde $H$ es la entalpía, $T$ es la temperatura en Kelvin y $S$ es la entropía.

---

En caso de trabajar a una temperatura distinta de 25&thinsp;&deg;C, supondremos que $H$ y $S$ no cambian con la temperatura.

---

### Espontaneidad

La variación de la energía de Gibbs, $\symup\Delta G$, determina la **espontaneidad**:

$$
\symup\Delta G = \symup\Delta H - T\symup\Delta S \quad\Rightarrow\quad
\begin{cases}
\symup\Delta G < 0 & \textbf{proceso espontáneo}    \\
\symup\Delta G = 0 & \textbf{equilibrio}            \\
\symup\Delta G > 0 & \textbf{proceso no espontáneo}
\end{cases}
$$

{{< figure src="termodinamica-quimica-2Bach-quimica/espontaneo.svg" lightbox="false" width="100%" >}}

---

A la hora de evaluar la espontaneidad, si al calcular la temperatura de equilibrio esta nos sale negativa, significa que la reacción es o bien siempre espontánea o bien siempre no espontánea.

---

Para averiguarlo nos fijamos en los signos de $\Delta H$ y $\Delta S$. Si sale positiva, por ejemplo 1000&thinsp;K, hay que ir de nuevo a la ecuación y mirar si es espontánea para $T>1000\thinspace\mathrm K$ o $T<1000\thinspace\mathrm K$.

---

{{< figure src="termodinamica-quimica-2Bach-quimica/espontaneidad.svg" lightbox="false" width="100%" theme="light" >}}

---

> Para **describir** completamente un **proceso químico** es **necesario conocer** el **balance** de **masas** (estequiometría), el **balance** de **energía** y su **velocidad**. Y tenemos que tener en cuenta que, aunque un proceso sea termodinámicamente viable (espontáneo), no quiere decir que vaya a ser rápido. De este último aspecto, fundamental también a nivel industrial, se encarga la [**cinética química**]({{< relref "slides/cinetica-quimica-2Bach-quimica" >}}).

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Pincha [**aquí**](?view=print#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>
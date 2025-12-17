---
title: Termodinámica química
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/termodinamica-quimica"
subtitle: Ecuaciones termoquímicas, ley de Hess y espontaneidad de las reacciones químicas
summary: "<code style='color: #2E3440;background:#88C0D0'>NOVEDAD</code><br>Ecuaciones termoquímicas, ley de Hess y espontaneidad de las reacciones químicas."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- angela-alcaraz-de-la-osa
- alba-lopez-valenzuela
- leticia-cabezas
tags:
- apuntes
- 2º Bach
- termodinámica
categories:
- Química
weight: 4

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Patrick Hendry**](https://unsplash.com/@worldsbetweenlines) en [Unsplash](https://unsplash.com/photos/-AbeoL252z0)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Póster
  url: termodinamica-quimica-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Ejercicios
  url: termodinamica-quimica-ejercicios.pdf
- icon_pack: fas
  icon:
  name: 🔢 Tablas
  url: termodinamica-quimica-tablas.pdf
- icon_pack: fas
  icon:
  name: 🔗 Más ejercicios
  url: https://drive.google.com/file/d/1cHaAZR-RAR_nf_XpYetJt7Z2JK0rFtWm/view
- icon_pack: fas
  icon:
  name: 📝 Frikiexámenes
  url: termodinamica-quimica-frikiexamenes.pdf
- icon_pack: fas
  icon:
  name: 🎓 Ejercicios EBAU
  url: https://fisiquimicamente.com/recursos-fisica-quimica/ebau/quimica/por-temas/termodinamica-quimica/

slides: termodinamica-quimica-2Bach-quimica

math: true
---

{{% toc %}}

La **termodinámica química** es la **ciencia** que **estudia** la **interrelación** entre el **calor** y el **trabajo** con las **reacciones químicas** o con los cambios físicos de estado dentro de los límites de las [leyes de la termodinámica](https://es.wikipedia.org/wiki/Principios_de_la_termodinámica).

## Ecuaciones termoquímicas

Una **ecuación termoquímica** es una ecuación química que indica, además, el calor (entalpía) que interviene en el proceso:

{{< math >}}
\begin{align*}
\ce{
CH4(g) + 2O2(g) & -> CO2(g) + 2H2O(g)\qquad\text{$\symup\Delta \mathit H = -890.4\,\mathrm{kJ/mol}$} \\
CH4(g) + 2O2(g) & -> CO2(g) + 2H2O(g) + 890.4\,\mathrm{kJ/mol}
}
\end{align*}
{{< /math >}}

{{< math >}}
$$
\frac{-890.4\,\mathrm{kJ}}{1\,\mathrm{mol}_{\ce{CH4}}}\quad\frac{-890.4\,\mathrm{kJ}}{2\,\mathrm{mol}_{\ce{O2}}}\quad\frac{-890.4\,\mathrm{kJ}}{1\,\mathrm{mol}_{\ce{CO2}}}\quad\frac{-890.4\,\mathrm{kJ}}{2\,\mathrm{mol}_{\ce{H2O}}}
$$
{{< /math >}}

### Entalpía estándar de reacción

Como la mayoría de las reacciones químicas ocurren a presión constante, ese calor coincide con la variación de entalpía de la reacción, magnitud que depende de las condiciones del sistema, por lo que es preciso definir un **estado estándar** ($p = 1&thinsp;\mathrm{bar} = 10^5&thinsp;\mathrm{Pa}$)[^2]. La **entalpía estándar de reacción**, $\symup{\Delta}_\mathrm r H^⦵$, es por tanto la variación de entalpía en una reacción química en la que los reactivos en estado estándar se transforman en productos en estado estándar. Suele medirse en kJ/mol.

[^2]: Aunque la temperatura no forma parte de la definición del estado estándar, la mayoría de las tablas de magnitudes termodinámicas contienen medidas a una temperatura concreta, habitualmente $T=25&thinsp;\mathrm{&degC} = 298&thinsp;\mathrm K$.

### Procesos endotérmicos y exotérmicos

Atendiendo al calor puesto en juego en el proceso, las reacciones químicas pueden ser:

{{< figure src="termodinamica-quimica-2Bach-quimica/endo-exo.svg" title="**Endotérmicas**: si al pasar de reactivos a productos el sistema absorbe calor: $\symup\Delta H > 0$.<br>**Exotérmicas**: si al pasar de reactivos a productos el sistema cede calor: $\symup\Delta H < 0$.<br>Traducida y adaptada de https://depositphotos.com/v/znncz8-87801288." lightbox="false" width="100%" >}}

{{< figure src="termodinamica-quimica-2Bach-quimica/endo-exo-entalpias.svg" title="Traducida y adaptada de https://www.nagwa.com/en/explainers/178174130750/." lightbox="false" width="100%" theme="light" >}}

## Ley de Hess

Dado que la **entalpía** es **función de estado**:

> La variación de entalpía en una reacción química sólo depende de los estados inicial y final y es independiente de las etapas en las que se produzca la reacción.

La **ley de Hess** también se puede aplicar a la entropía[^3] y a la energía de Gibbs[^4], puesto que estas son funciones de estado igualmente. Otra manera de enunciar la ley de Hess es:

[^3]: {{< math color="white" >}}
      $$
      \symup{\Delta}_\mathrm r S^⦵ = \sum n S_\mathrm f^⦵(\text{productos}) - \sum m S_\mathrm f^⦵(\text{reactivos})
      $$
      {{< /math >}}

[^4]: {{< math color="white" >}}
      $$
      \symup{\Delta}_\mathrm r G^⦵ = \sum n G_\mathrm f^⦵(\text{productos}) - \sum m G_\mathrm f^⦵(\text{reactivos})
      $$
      {{< /math >}}

> La variación de entalpía en una reacción química es constante, con independencia de que la reacción se realice en una o varias etapas.

La ley de Hess nos permite calcular variaciones de entalpía que no son fáciles de medir directamente, como por ejemplo la energía de red en el [ciclo de Born-Haber]({{< relref "apuntes-segundo-bach-quimica/enlace-quimico/index.md#ciclo-de-born-haber" >}}).

{{< figure src="termodinamica-quimica-2Bach-quimica/hess.svg" title="Cuando una reacción puede expresarse como la suma algebraica de dos o más reacciones, su calor de reacción es igual a la suma algebraica de los calores de reacción de las reacciones parciales ($\symup\Delta H_1 = \symup\Delta H_2 + \symup\Delta H_3 + \symup\Delta H_4$). Traducida y adaptada de https://www.nagwa.com/en/explainers/290161934789/." lightbox="false" width="100%" theme="light" >}}

### Entalpía estándar de formación

La **entalpía estándar de formación**, $\symup{\Delta}_\mathrm f H^⦵$, es la variación de entalpía correspondiente a la formación de **un mol** de sustancia a partir de sus elementos en estado estándar (la entalpía de formación de un elemento químico es nula por definición).

Para el cálculo de la entalpía estándar de reacción, $\symup{\Delta}_\mathrm r H^⦵$, a partir de las entalpías estándar de formación, $\symup{\Delta}_\mathrm f H^⦵$:

{{< math >}}
$$
\symup{\Delta}_\mathrm r H^⦵ = \sum n \symup{\Delta}_\mathrm f H^⦵(\text{productos}) - \sum m \symup{\Delta}_\mathrm f H^⦵(\text{reactivos}),
$$
{{< /math >}}

siendo $n$ y $m$ los coeficientes estequiométricos de los productos y reactivos, respectivamente.

### Entalpía estándar de combustión

La **entalpía estándar de combustión**, $\symup{\Delta}_\mathrm c H^⦵$, es la variación de entalpía correspondiente a la combustión de **un mol** de sustancia en estado estándar. A modo de ejemplo, la ecuación termoquímica de la combustión del carbono (grafito) y la formación del CO<sub>2</sub> es exactamente la misma:

$$
\ce{C(s) + O2(g) -> CO2(g) + 393.5&thinsp;kJ/mol}
$$

{{< math >}}
$$
\symup\Delta_\mathrm c H^⦵ \text{(C,grafito)} = \symup\Delta_\mathrm f H^⦵ (\mathrm{CO}_2,\mathrm g) = -393.5\,\mathrm{kJ/mol}
$$
{{< /math >}}

Lo mismo pasa con la combustión del H<sub>2</sub> y la formación del agua líquida (notar que ajustamos la ecuación de forma que el coeficiente estequiométrico del compuesto de interés, H<sub>2</sub>O en este caso, sea 1):

$$
\ce{H2(g) + \frac{1}{2}O2(g) -> H2O(l) + 285.8&thinsp;kJ/mol}
$$

{{< math >}}
$$
\symup\Delta_\mathrm c H^⦵ (\mathrm H_2,\mathrm g) = \symup\Delta_\mathrm f H^⦵ (\mathrm{H_2O},\mathrm l) = -285.8\,\mathrm{kJ/mol}
$$
{{< /math >}}

{{< figure src="termodinamica-quimica-2Bach-quimica/entalpia-combustion-alcanos.svg" title="Entalpía estándar de combustión de los primeros alcanos. Se representa la energía liberada por mol (eje vertical izquierdo) y por unidad de masa (eje vertical derecho). Se observa una dependencia casi lineal de la entalpía de combustión molar con el tamaño de la cadena, mientras que la entalpía de combustión por gramo varía mucho menos, disminuyendo ligeramente al aumentar el número de carbonos. Esto se debe a que el incremento de masa molar es proporcionalmente mayor que el incremento de energía liberada." lightbox="false" width="100%" theme="light" >}}

### Energías de enlace
Una reacción química supone la ruptura de los enlaces de los reactivos y la formación de nuevos enlaces para dar lugar a los productos de reacción. Teniendo en cuenta que para romper un enlace hay que suministrar energía, y que al formarse se desprende, podremos calcular la entalpía de una reacción si conocemos el coste energético de cada uno de los enlaces que se rompe y forma, según la ecuación:

$$
\symup\Delta H = \sum \left|E_{\text{enlaces rotos}}\right| - \sum \left|E_{\text{enlaces formados}}\right|
$$

## Entropía y segundo principio de la termodinámica

La **entropía**, $S$, es una magnitud termodinámica fuertemente relacionada con la **espontaneidad** e **irreversibilidad** de los procesos termodinámicos. Es una **función de estado** que mide el grado de **dispersión** o **desorden** de la **energía** en un sistema. Es una magnitud extensiva y su unidad en el SI es J/K (en química J&thinsp;mol<sup>–1</sup>&thinsp;K<sup>–1</sup>). En los procesos espontáneos, la energía tiende a distribuirse entre más microestados accesibles, aumentando $S$ (ejemplo: la disolución/difusión de tinta en agua). El signo de la variación de entropía, $\symup\Delta S$, puede predecirse en función del cambio en el desorden relacionado con $\symup\Delta n(\mathrm g)$.

{{% callout note %}}
Si quieres **saber más** sobre la **entropía** te recomendamos [esta excelente **entrada** del **blog**]({{< relref "/post/entropia" >}}).
{{% /callout %}}

### Segundo principio de la termodinámica

El **segundo principio de la termodinámica** es el responsable, entre otras cosas, de que el calor siempre fluya de manera espontánea desde cuerpos calientes a cuerpos fríos, o de la degradación de la energía en cualquier proceso cíclico (no toda la energía puede convertirse en trabajo útil).

> En todo proceso espontáneo la entropía del universo aumenta, es decir, la energía disponible para realizar trabajo útil disminuye.

En un proceso reversible, la entropía total permanece constante.

## Energía de Gibbs y espontaneidad

Para determinar la espontaneidad de un proceso a presión y temperatura constantes, se define la **energía de Gibbs**, $G$, como:

$$
G = H - TS
$$

donde $H$ es la entalpía, $T$ es la temperatura en Kelvin y $S$ es la entropía. En caso de trabajar a una temperatura distinta de 25&thinsp;&deg;C, supondremos que $H$ y $S$ no cambian con la temperatura.

### Espontaneidad

La variación de la energía de Gibbs, $\symup\Delta G$, determina la **espontaneidad**:

{{< math >}}
$$
\symup\Delta G = \symup\Delta H - T\symup\Delta S \quad\Rightarrow\quad
\begin{cases}
\symup\Delta G < 0 & \textbf{proceso espontáneo}    \\
\symup\Delta G = 0 & \textbf{equilibrio}            \\
\symup\Delta G > 0 & \textbf{proceso no espontáneo}
\end{cases}
$$
{{< /math >}}

{{< figure src="termodinamica-quimica-2Bach-quimica/espontaneo.svg" lightbox="false" width="100%" >}}

A la hora de evaluar la espontaneidad, si al calcular la temperatura de equilibrio esta nos sale negativa, significa que la reacción es o bien siempre espontánea o bien siempre no espontánea. Para averiguarlo nos fijamos en los signos de $\Delta H$ y $\Delta S$. Si sale positiva, por ejemplo 1000&thinsp;K, hay que ir de nuevo a la ecuación y mirar si es espontánea para $T>1000\thinspace\mathrm K$ o $T<1000\thinspace\mathrm K$.

{{< figure src="termodinamica-quimica-2Bach-quimica/espontaneidad.svg" lightbox="false" width="100%" theme="light" >}}

{{% callout note %}}
Para **describir** completamente un **proceso químico** es **necesario conocer** el **balance** de **masas** (estequiometría), el **balance** de **energía** y su **velocidad**. Y tenemos que tener en cuenta que, aunque un proceso sea termodinámicamente viable (espontáneo), no quiere decir que vaya a ser rápido. De este último aspecto, fundamental también a nivel industrial, se encarga la [**cinética química**]({{< relref "apuntes-segundo-bach-quimica/cinetica-quimica" >}}).
{{% /callout %}}
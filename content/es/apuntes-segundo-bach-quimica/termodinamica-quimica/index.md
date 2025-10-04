---
title: Termodinámica química
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/termodinamica-quimica"
subtitle: Principios de la termodinámica y espontaneidad de las reacciones químicas
summary: "<code style='color: #2E3440;background:#88C0D0'>NOVEDAD</code><br>Principios de la termodinámica y espontaneidad de las reacciones químicas."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- alba-lopez-valenzuela
- leticia-cabezas
tags:
- apuntes
- 2º Bach
- termodinámica-química
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

## Introducción a la termodinámica

### Sistemas termodinámicos

Un **sistema termodinámico** es una porción de materia delimitada para su estudio. En relación con el **entorno**, los sistemas termodinámicos se clasifican en:

{{< figure src="termodinamica-quimica-2Bach-quimica/sistemas.svg" title="Adaptada de https://www.nagwa.com/en/explainers/259104205403/." lightbox="false" width="100%" >}}

### Variables termodinámicas

Las **variables termodinámicas** son las **propiedades** que **definen** el **estado** de un **sistema termodinámico**. Pueden ser:

Intensivas
: No dependen de la cantidad de materia (temperatura, presión, densidad, concentración, etc.).

Extensivas
: Dependen de la cantidad de materia (masa, volumen, energía interna, entalpía, entropía, etc.).

#### Funciones de estado

Algunas variables termodinámicas reciben el nombre de **funciones de estado** porque su valor depende únicamente de los estados inicial y final del sistema y no del camino seguido para pasar de un estado a otro. Son **funciones de estado** el **volumen**, la **presión**, la **temperatura**, la **energía interna**, la **entalpía**, la **entropía** y la **energía de Gibbs**. El **calor** y el **trabajo no** son **funciones de estado**.

{{< figure src="termodinamica-quimica-2Bach-quimica/funcion-estado.svg" title="**Metáfora útil**: la altura de una montaña (función de estado) depende de la base (estado inicial) y la cima (estado final), no de la ruta que tomes. El esfuerzo para subir (trabajo, calor) depende de la senda que sigas. Fuente: https://depositphotos.com/vector/mountain-climbing-route-top-rock-red-flag-peak-business-journey-785336924.html." lightbox="false" width="100%" >}}

### Procesos termodinámicos

Un **proceso termodinámico** es la **transformación** que experimenta un sistema termodinámico al pasar de un estado inicial a un estado final. Los procesos termodinámicos pueden ser **reversibles** o **irreversibles**, dependiendo de si es posible revertir el proceso sin dejar cambios en el entorno. Según las **condiciones** en las que se realicen, tenemos procesos:

{{< figure src="termodinamica-quimica-2Bach-quimica/procesos.svg" lightbox="false" width="100%" theme="light" >}}

### Intercambios de energía entre sistemas: calor y trabajo

La **energía** se puede **intercambiar/transferir** mediante **calor** o **trabajo**. En el SI se mide en julios (J), aunque por razones históricas en química es habitual medirla en calorías (1&thinsp;cal = 4.18&thinsp;J). Otra unidad habitual es la atmósfera-litro (1&thinsp;atm&thinsp;L = 101.3&thinsp;J).

#### Calor *Q*

El **calor** se transfiere entre dos cuerpos que tienen **diferente temperatura** y siempre fluye del cuerpo con mayor temperatura al de menor temperatura, hasta que ambos alcanzan el **equilibrio térmico**[^1]. La **ecuación calorimétrica** explica cómo varía la temperatura según la masa $m$, el calor específico $c$ y el calor intercambiado $Q$:

[^1]: Esto es lo que se conoce como el [**principio cero de la termodinámica**](https://es.wikipedia.org/wiki/Principio_cero_de_la_termodinámica), que también puede enunciarse como: "*Si dos cuerpos A y B están en equilibrio térmico con un tercer cuerpo C, entonces A y B están también en equilibrio entre sí.*"

    {{< figure src="termodinamica-quimica-2Bach-quimica/principio-cero.svg" title="Adaptada de https://tikz.net/heat_baths/." lightbox="false" width="100%" >}}

$$
Q = m c \symup\Delta T
$$

#### Trabajo *W*

El **trabajo** se transfiere cuando entre dos cuerpos se realizan **fuerzas** que provocan desplazamientos o cambios en sus dimensiones.

##### Trabajo de expansión a presión constante

Supongamos que el gas que está dentro del cilindro se expande contra una presión exterior constante $p$:

{{< figure src="termodinamica-quimica-2Bach-quimica/trabajo-expansion.svg" title="Traducida y adaptada de https://www.coursehero.com/sg/general-chemistry/thermodynamic-work/." lightbox="false" width="100%" >}}

El trabajo realizado por el gas puede expresarse como:

$$
\begin{align*}
W & = \vec F\cdot \symup\Delta\vec r = - p\cdot A\cdot h = - p\cdot \symup \Delta V
\end{align*}
$$

### Primer principio de la termodinámica

Todo sistema, a una determinada presión y temperatura, posee una **energía interna** $U$, que es la suma de la energía cinética de todas sus partículas y de la energía potencial debida a las interacciones entre ellas. El **primer principio de la termodinámica** establece que:

> La variación de la energía interna de un sistema es igual a la suma del calor absorbido por el sistema y del trabajo realizado sobre él.
>
>  $$
  \begin{align*}
  \symup\Delta U & = Q + W                                       \\
  \symup\Delta U & = U_\mathrm{productos} - U_\mathrm{reactivos}
  \end{align*}
  $$

{{< figure src="termodinamica-quimica-2Bach-quimica/primer-principio.svg" title="Según el [**criterio IUPAC**](https://fisiquimicamente.com/blog/2022/11/12/normas-de-ortografia-en-fisica-y-quimica/#13-calor-y-trabajo), el **calor** $Q$ es **positivo** cuando es **absorbido** por el sistema y **negativo** cuando es **cedido** por el sistema. El **trabajo** $W$ es **positivo** cuando es **realizado sobre** el sistema y **negativo** cuando es **realizado por** el sistema. Adaptada de https://tikz.net/heat_baths/." lightbox="false" width="100%" theme="light" >}}

En función de las **condiciones** en las que se lleva a cabo el proceso, el **primer principio de la termodinámica** puede tomar **distintas formas**:

| Proceso isocórico ($V$ cte) | Proceso isobárico ($p$ cte) |
| :---: | :---: |
| $\symup\Delta U = Q_V$ | $\symup\Delta U = Q_p-p\symup\Delta V$ |
| **Proceso isotermo ($T$ cte)** | **Proceso adiabático ($Q=0$)** |
| $\symup\Delta U = 0$ | $\symup\Delta U = W = -p\symup\Delta V$ |

## Transferencia de calor en procesos químicos

### A volumen constante

Tiene lugar en los **procesos isocóricos**. En este caso, el trabajo realizado es nulo ($W=0$) y la variación de energía interna se iguala al calor transferido:

$$
\begin{align*}
\symup\Delta U = Q_V
\end{align*}
$$

### A presión constante: entalpía

Tiene lugar en los **procesos isobáricos** (los más habituales con reacciones químicas). En este caso, el trabajo realizado es $W=-p\symup\Delta V$ y la variación de energía interna es:

$$
\begin{align*}
\symup\Delta U = Q_p - p\symup\Delta V \Rightarrow Q_p = \symup\Delta U + p\symup\Delta V
\end{align*}
$$

Si definimos una nueva función de estado, la **entalpía** $H$, como:

$$
\begin{align*}
H = U + pV,
\end{align*}
$$

podemos escribir:

$$
\begin{align*}
Q_p = \symup\Delta H = \symup\Delta U + p\symup\Delta V = Q_V + p\symup\Delta V
\end{align*}
$$

Para un **gas ideal** a **temperatura constante**:

$$
pV=nRT\Rightarrow p\symup\Delta V = \symup\Delta n RT,
$$

por lo que:

$$
Q_p = Q_V + \symup\Delta n RT
$$

Si no hay variación de moles (gaseosos), $\symup\Delta n = 0\Rightarrow Q_p=Q_V$.

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

Como la mayoría de las reacciones químicas ocurren a presión constante, ese calor coincide con la variación de entalpía de la reacción, magnitud que depende de las condiciones del sistema, por lo que es preciso definir un **estado estándar** ($p = 1&thinsp;\mathrm{bar} = 10^5&thinsp;\mathrm{Pa}$ y $T=25&thinsp;\mathrm{&degC} = 298&thinsp;\mathrm K$). La **entalpía estándar de reacción**, $\symup{\Delta}_\mathrm r H^⦵$, es por tanto la variación de entalpía en una reacción química en la que los reactivos en estado estándar se transforman en productos en estado estándar. Suele medirse en kJ/mol.

### Procesos endotérmicos y exotérmicos

Atendiendo al calor puesto en juego en el proceso, las reacciones químicas pueden ser:

{{< figure src="termodinamica-quimica-2Bach-quimica/endo-exo.svg" title="**Endotérmicas**: si al pasar de reactivos a productos el sistema absorbe calor: $\symup\Delta H > 0$.<br>**Exotérmicas**: si al pasar de reactivos a productos el sistema cede calor: $\symup\Delta H < 0$.<br>Traducida y adaptada de https://depositphotos.com/v/znncz8-87801288." lightbox="false" width="100%" >}}

{{< figure src="termodinamica-quimica-2Bach-quimica/endo-exo-entalpias.svg" title="Traducida y adaptada de https://www.nagwa.com/en/explainers/178174130750/." lightbox="false" width="100%" theme="light" >}}

## Ley de Hess

Dado que la **entalpía** es **función de estado**:

> La variación de entalpía en una reacción química sólo depende de los estados inicial y final y es independiente de las etapas en las que se produzca la reacción.

La **ley de Hess** también se puede aplicar a la entropía[^2] y a la energía de Gibbs[^3], puesto que estas son funciones de estado igualmente. Otra manera de enunciar la ley de Hess es:

[^2]: {{< math color="white" >}}
      $$
      \symup{\Delta}_\mathrm r S^⦵ = \sum n S_\mathrm f^⦵(\text{productos}) - \sum m S_\mathrm f^⦵(\text{reactivos})
      $$
      {{< /math >}}

[^3]: {{< math color="white" >}}
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

### Energías de enlace
Una reacción química supone la ruptura de los enlaces de los reactivos y la formación de nuevos enlaces para dar lugar a los productos de reacción. Teniendo en cuenta que para romper un enlace hay que suministrar energía, y que al formarse se desprende, podremos calcular la entalpía de una reacción si conocemos el coste energético de cada uno de los enlaces que se rompe y forma, según la ecuación:

$$
\symup\Delta H = \sum \left|E_{\text{enlaces rotos}}\right| - \sum \left|E_{\text{enlaces formados}}\right|
$$

## Entropía y segundo principio de la termodinámica

La **entropía**, $S$, es una magnitud termodinámica fuertemente relacionada con la **espontaneidad** e **irreversibilidad** de los procesos termodinámicos. Es una **función de estado** que mide el grado de **dispersión** o **desorden** de la **energía** en un sistema. Es una magnitud extensiva y su unidad en el SI es J/K (en química J&thinsp;mol<sup>–1</sup>&thinsp;K<sup>–1</sup>). En los procesos espontáneos, la energía tiende a distribuirse entre más microestados accesibles, aumentando $S$ (ejemplo: la disolución/difusión de tinta en agua). El signo de la variación de entropía, $\symup\Delta S$, puede predecirse en función del cambio en el desorden relacionado con $\symup\Delta n(\mathrm g)$.

### Segundo principio de la termodinámica

El **segundo principio de la termodinámica** es el responsable, entre otras cosas, de que el calor siempre fluya de manera espontánea desde cuerpos calientes a cuerpos fríos, o de la degradación de la energía en cualquier proceso cíclico (no toda la energía puede convertirse en trabajo útil).

> En todo proceso espontáneo la entropía del universo aumenta, es decir, la energía disponible para realizar trabajo útil disminuye.

En un proceso reversible, la entropía total permanece constante.

## Energía de Gibbs y espontaneidad

Para determinar la espontaneidad de un proceso a presión y temperatura constantes, se define la **energía de Gibbs**, $G$, como:

$$
G = H - TS
$$

donde $H$ es la entalpía, $T$ es la temperatura en Kelvin y $S$ es la entropía. En caso de trabajar a una temperatura distinta de 25&thinsp;&deg;C (no estándar), supondremos que $H$ y $S$ no cambian con la temperatura.

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
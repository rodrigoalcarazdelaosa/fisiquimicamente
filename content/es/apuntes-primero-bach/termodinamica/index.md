---
translationKey: "/recursos-fisica-quimica/apuntes/1bach/termodinamica"
title: Termodinámica
url: "/recursos-fisica-quimica/apuntes/1bach/termodinamica"
subtitle: Sistemas, variables y procesos termodinámicos. Intercambios de energía entre sistemas
summary: "Sistemas, variables y procesos termodinámicos. Intercambios de energía entre sistemas."
breadcrumbs: ["recursos-fisica-quimica","apuntes","1bach"]
authors:
- rodrigo-alcaraz-de-la-osa
- angela-alcaraz-de-la-osa
- alba-lopez-valenzuela
tags:
- apuntes
- 1º Bach
- termodinámica
categories:
- Física
weight: 9

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Patrick Hendry**](https://unsplash.com/@worldsbetweenlines) en [Unsplash](https://unsplash.com/photos/-AbeoL252z0)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Póster
  url: termodinamica-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Ejercicios
  url: termodinamica-ejercicios.pdf
- icon_pack: fas
  icon:
  name: 🔢 Tablas
  url: termodinamica-tablas.pdf
#- icon_pack: fas
#  icon:
#  name: Frikiexamen
#  url: movimiento-parabolico-dinamica-frikiexamen.pdf

slides: termodinamica-1Bach

math: true

---

{{% toc %}}

La **termodinámica** es una **rama** de la **física** que se ocupa del **calor**, el **trabajo** y la **temperatura**, y su **relación** con la **energía**, la **entropía** y las **propiedades físicas** de la **materia** y la **radiación**.

## Sistemas termodinámicos

Un **sistema termodinámico** es una porción de materia delimitada para su estudio. En relación con el **entorno**, los sistemas termodinámicos se clasifican en:

{{< figure src="termodinamica-quimica-2Bach-quimica/sistemas.svg" title="Adaptada de https://www.nagwa.com/en/explainers/259104205403/." lightbox="false" width="100%" >}}

## Variables termodinámicas

Las **variables termodinámicas** son las **propiedades** que **definen** el **estado** de un **sistema termodinámico**. Pueden ser:

Intensivas
: No dependen de la cantidad de materia (temperatura, presión, densidad, concentración, etc.).

Extensivas
: Dependen de la cantidad de materia (masa, volumen, energía interna, entalpía, entropía, etc.).

### Funciones de estado

Algunas variables termodinámicas reciben el nombre de **funciones de estado** porque su valor depende únicamente de los estados inicial y final del sistema y no del camino seguido para pasar de un estado a otro. Son **funciones de estado** el **volumen**, la **presión**, la **temperatura**, la **energía interna**, la **entalpía**, la **entropía** y la **energía de Gibbs**. El **calor** y el **trabajo no** son **funciones de estado**.

{{< figure src="termodinamica-quimica-2Bach-quimica/funcion-estado.svg" title="**Metáfora útil**: la altura de una montaña (función de estado) depende de la base (estado inicial) y la cima (estado final), no de la ruta que tomes. El esfuerzo para subir (trabajo, calor) depende de la senda que sigas. Fuente: https://depositphotos.com/vector/mountain-climbing-route-top-rock-red-flag-peak-business-journey-785336924.html." lightbox="false" width="100%" >}}

## Procesos termodinámicos

Un **proceso termodinámico** es la **transformación** que experimenta un sistema termodinámico al pasar de un estado inicial a un estado final. Los procesos termodinámicos pueden ser **reversibles** o **irreversibles**, dependiendo de si es posible revertir el proceso sin dejar cambios en el entorno. Según las **condiciones** en las que se realicen, tenemos procesos:

{{< figure src="termodinamica-quimica-2Bach-quimica/procesos.svg" lightbox="false" width="100%" theme="light" >}}

## Intercambios de energía entre sistemas: calor y trabajo

La **energía** se puede **intercambiar/transferir** mediante **calor** o **trabajo**. En el SI se mide en julios (J), aunque por razones históricas en química es habitual medirla en calorías (1&thinsp;cal = 4.18&thinsp;J). Otra unidad habitual es la atmósfera-litro (1&thinsp;atm&thinsp;L = 101.3&thinsp;J).

### Calor *Q*

El **calor** se transfiere entre dos cuerpos que tienen **diferente temperatura** y siempre fluye del cuerpo con mayor temperatura al de menor temperatura, hasta que ambos alcanzan el **equilibrio térmico**[^1]. El **calor transferido**, $Q$, viene dado por[^2]:

[^1]: Esto es lo que se conoce como el [**principio cero de la termodinámica**](https://es.wikipedia.org/wiki/Principio_cero_de_la_termodinámica), que también puede enunciarse como: "*Si dos cuerpos A y B están en equilibrio térmico con un tercer cuerpo C, entonces A y B están también en equilibrio entre sí.*"

    {{< figure src="termodinamica-quimica-2Bach-quimica/principio-cero.svg" title="Adaptada de https://tikz.net/heat_baths/." lightbox="false" width="100%" >}}

[^2]: Se cumple que el calor cedido es igual a menos el calor absorbido.

    $$
      Q_\mathrm{cedido} = -Q_\mathrm{absorbido}
    $$

| Sin cambio de estado | Con cambio de estado |
| :---: | :---: |
$Q = m c \symup\Delta T$ | $Q = m L$ |

donde $m$ es la masa del cuerpo, $c$ el [calor específico](https://es.wikipedia.org/wiki/Calor_específico), $\symup\Delta T$ la variación de temperatura y $L$ el [calor latente](https://es.wikipedia.org/wiki/Calor_latente) (de fusión o de vaporización).

{{% callout note %}}
Recuerda [aquí]({{< relref "apuntes-segundo-tercero-eso/materia/index.md#cambios-de-estado" >}}) los **cambios de estado** y las **gráficas de calentamiento/enfriamiento**.
{{% /callout %}}

### Trabajo *W*

El **trabajo** se transfiere cuando entre dos cuerpos se realizan **fuerzas** que provocan desplazamientos o cambios en sus dimensiones.

#### Trabajo de expansión a presión constante

Supongamos que el gas que está dentro del cilindro se expande contra una presión exterior constante $p$:

{{< figure src="termodinamica-quimica-2Bach-quimica/trabajo-expansion.svg" title="Traducida y adaptada de https://www.coursehero.com/sg/general-chemistry/thermodynamic-work/." lightbox="false" width="100%" >}}

El trabajo realizado por el gas puede expresarse como:

$$
\begin{align*}
W & = \vec F\cdot \symup\Delta\vec r = - p\cdot A\cdot h = - p\cdot \symup \Delta V
\end{align*}
$$

## Primer principio de la termodinámica

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

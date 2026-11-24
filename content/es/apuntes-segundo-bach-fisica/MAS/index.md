---
title: MAS
url: "/recursos-fisica-quimica/apuntes/2bach/fisica/mas"
subtitle: Movimiento armónico simple
summary: "Cinemática, dinámica y energía del movimiento armónico simple."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","fisica"]
authors:
- rodrigo-alcaraz-de-la-osa
- alba-lopez-valenzuela
- leticia-cabezas
tags:
- apuntes
- 2º Bach
- movimiento
- fuerzas
- energía
- ondas
categories:
- Física
weight: 5

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**neo tam**](https://pixabay.com/es/users/neotam-11291643/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Póster
  url: MAS-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Ejercicios
  url: MAS-ejercicios.pdf
- icon_pack: fas
  icon:
  name: 📝 Frikiexamen
  url: energia-MAS-frikiexamen.pdf

slides: MAS-2Bach-fisica

math: true
---

{{% toc %}}

El **movimiento armónico simple** (MAS) es un tipo especial de **movimiento periódico** en el que la **fuerza restauradora** (elástica) sobre el objeto en movimiento es **directamente proporcional** a la magnitud del **desplazamiento** del objeto y actúa hacia su posición de equilibrio. El resultado es una **oscilación** que continúa indefinidamente salvo que sea inhibida por fricción o cualquier otra disipación de energía. Puede considerarse la **proyección unidimensional** del **movimiento circular uniforme** (MCU).

{{< figure library="true" src="MAS-2Bach-fisica/MAS-orbita.gif" title="Movimiento armónico simple, mostrado en el espacio real y en el [espacio fásico](https://es.wikipedia.org/wiki/Espacio_fásico). La órbita es periódica. <br> Fuente: https://commons.wikimedia.org/wiki/File:Simple_Harmonic_Motion_Orbit.gif" lightbox="false" >}}

Son **ejemplos** de **MAS** el [movimiento de una masa unida a un muelle](#ley-de-hooke), un [péndulo simple](#péndulo-simple) o un [*yugo escocés*](https://es.wikipedia.org/wiki/Yugo_escocés):

{{< youtube wSGNvD9cgF0 >}}

Aquí el [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) nos lo demuestra con esta máquina que dibuja ondas:

{{< youtube W1qVW-Gvj7U >}}

## Magnitudes

### Amplitud *A*

Máxima elongación (desplazamiento máximo de la posición de equilibrio). En el SI se mide en m.

### Periodo *T*

Tiempo empleado en completar una oscilación completa. En el SI se mide en s.

### Frecuencia *f*

Número de oscilaciones por unidad de tiempo: $f = 1/T$. En el SI se mide en Hz.

### Frecuencia angular *ω*

$$
\omega = \frac{2\pi}{T} = 2\pi f
$$

En el SI se mide en rad/s.

### Fase inicial

Indica el estado de oscilación/vibración inicial. Se denota por $\varphi_0$. En el SI se mide en rad.

## Ecuaciones

{{% callout note %}}
La posición de un MAS puede expresarse indistintamente en función del seno o del coseno, sin más que variar la fase inicial, teniendo en cuenta las relaciones:
<div align="center" style="margin-bottom: 1rem">
sin&thinsp;α = cos&thinsp;(α – π/2)<br>cos&thinsp;α = sin&thinsp;(α + π/2)
</div>
{{% /callout %}}

### Posición

{{< figure library="true" src="MAS-2Bach-fisica/x-vs-t.svg" title="" lightbox="false" width="100%" >}}

### Velocidad

{{< figure library="true" src="MAS-2Bach-fisica/v-vs-t.svg" title="" lightbox="false" width="100%" >}}

### Aceleración

{{< figure library="true" src="MAS-2Bach-fisica/a-vs-t.svg" title="" lightbox="false" width="100%" >}}

## Dinámica del MAS

### Ley de Hooke

Aplicando la **2ª ley de Newton** a una masa $m$ unida a un extremo de un muelle (resorte) de constante elástica $k$ (obviamos el carácter vectorial al ocurrir todo en una única dimensión):
		$$
		\begin{align*}
		F &= ma	\\
		-kx &= ma \\
		-kx &= -m\omega^2x
		\end{align*}
		$$
		de donde
		$$
		k = m\omega^2
		$$
		La frecuencia angular, $\omega$, puede calcularse por tanto como:
		$$
		\omega = \sqrt{\frac{k}{m}}
		$$
		El periodo, $T$, o la frecuencia, $f$, con la que oscila una masa $m$ unida a un extremo de un resorte de constante elástica $k$ pueden por tanto escribirse como:
		$$
		T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}};\quad f = \frac{1}{T} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}
		$$

{{< figure library="true" src="MAS-2Bach-fisica/masa-muelle.svg" title="Traducida y adaptada de https://www.chegg.com/learn/physics/introduction-to-physics/harmonic-motion." lightbox="false" width="100%" >}}

Puedes aprender más sobre **masas** y **resortes** con este excelente ***laboratorio***:

<iframe src="https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Péndulo simple

Consiste en una masa suspendida de un pivote de forma que puede oscilar libremente.

{{< figure library="true" src="MAS-2Bach-fisica/pendulo-simple.svg" title="Adaptada de https://commons.wikimedia.org/wiki/File:PendulumForces.svg." lightbox="false" width="100%" >}}

En este caso la **componente tangencial** del **peso** actúa como **fuerza recuperadora**, acelerando la masa hacia su posición de equilibrio, provocando la oscilación alrededor de ella:

$$
\begin{aligned}
	-mg\sin\theta &= ma \\
	-g\sin\theta &= -\omega^2x \\
	-g\sin\theta &= -\omega^2l\theta
\end{aligned}
$$

- En la **aproximación** para **ángulos pequeños**, $\sin\theta\approx\theta$, por lo que el movimiento se aproxima por un **movimiento armónico simple** de frecuencia angular:
$$
\omega = \sqrt{\frac{g}{l}}
$$
- El tiempo que tarda la masa en completar una oscilación completa es el **periodo**, que únicamente depende de la longitud del péndulo y de la aceleración de la gravedad, a través de la expresión:
$$
T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{l}{g}}
$$
- Fuera de la aproximación para ángulos pequeños, el periodo de un péndulo también depende ligeramente de la amplitud de la oscilación.

Puedes estudiar los **factores** que **influyen** en el **periodo** de un **péndulo** con este excelente ***laboratorio***:

<iframe src="https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Energía del MAS

### Energía potencial elástica

Como la **fuerza elástica** es **conservativa**, definimos la energía potencial asociada:
$$
E_\mathrm p = \frac{1}{2}kx^2,\quad \text{donde $k=m\omega^2$}
$$
Sustituyendo la expresión de la posición, $x = A\sin\left(\omega t + \varphi_0\right)$:
$$
E_\mathrm p = \frac{1}{2}kA^2\sin^2\left(\omega t + \varphi_0\right)
$$

### Energía cinética

La energía cinética viene dada por la expresión:
$$
E_\mathrm c = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2\left(A^2-x^2\right) = \frac{1}{2}k\left(A^2-x^2\right)
$$
Sustituyendo la expresión de la velocidad, $v = A\omega\cos\left(\omega t + \varphi_0\right)$:
$$
E_\mathrm c = \frac{1}{2}mA^2\omega^2\cos^2\left(\omega t + \varphi_0\right) = \frac{1}{2}kA^2\cos^2\left(\omega t + \varphi_0\right)
$$

### Energía mecánica

En ausencia de rozamiento y otras pérdidas de energía, la energía mecánica total es constante:
$$
E_\mathrm m = E_\mathrm c + E_\mathrm p = \frac{1}{2}k\left(A^2-x^2\right) + \frac{1}{2}kx^2 = \frac{1}{2}kA^2
$$

{{< figure library="true" src="MAS-2Bach-fisica/energias-vs-x.svg" title="" lightbox="false" width="100%" >}}

{{< figure library="true" src="MAS-2Bach-fisica/energias-vs-t.svg" title="" lightbox="false" width="100%" >}}

Puedes aprender más sobre la **energía** del **MAS** con este excelente 🧵 **hilo** de [**Rayleigh Lord**](https://twitter.com/RayleighLord) sobre el **oscilador armónico simple**:

<div align="center">
{{< x user="RayleighLord" id="1345689336549941248" >}}
</div>

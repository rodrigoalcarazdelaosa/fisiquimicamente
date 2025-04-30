---
translationKey: "/recursos-fisica-quimica/apuntes/1bach/movimiento-circular"
title: Movimiento circular
url: "/recursos-fisica-quimica/apuntes/1bach/movimiento-circular"
subtitle: Cinemática y dinámica del movimiento circular
summary: "Cinemática y dinámica del movimiento circular."
breadcrumbs: ["recursos-fisica-quimica","apuntes","1bach"]
tags:
- apuntes
- 1º Bach
- movimiento
- fuerzas
categories:
- Física
weight: 6

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Conor Luddy**](https://unsplash.com/@opticonor) en [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Póster
  url: movimiento-circular-poster.pdf

slides: movimiento-circular-1Bach

math: true
---

{{% toc %}}

## Movimiento circular uniforme (MCU)

### Características
Las **características** del **movimiento circular uniforme (MCU)** son:

- Trayectoria circular.
- Módulo de la velocidad constante (aceleración tangencial $a_\mathrm t=0$).

{{< figure library="true" src="movimientos-4ESO/MCU.svg" lightbox="false" width="100%" >}}

### Ecuación principal

La **ecuación principal** del MCU es:

$$
\varphi(t) = \varphi_0 + \omega (t-t_0),
$$

donde $\varphi$ es la posición angular final, $\varphi_0$ la posición angular inicial, $\omega$ la frecuencia o velocidad angular, $t$ el tiempo final y $t_0$ el tiempo inicial.

Periodo $T$
: El tiempo que tarda el móvil en completar una vuelta completa se llama **periodo**, $T$.

Frecuencia $f$
: El número de vueltas que da el móvil por unidad de tiempo es la **frecuencia**, $f$, y está relacionada con el periodo:
	$$
	f = \frac{1}{T}\thinspace \left[\frac{1}{\mathrm{s}} = \mathrm{s^{-1}} = \mathrm{Hz}\right]
	$$

La frecuencia o velocidad angular, $\omega$, está relacionada con el periodo y la frecuencia a través de las expresiones:

$$
\omega = \frac{\Delta \varphi}{\Delta t} = \frac{2\pi}{T} = 2\pi f
$$

Las magnitudes lineales y las angulares se relacionan a través del radio $R$:

\begin{align*}
	e &= \varphi R \\\\
	v &= \omega R = \frac{2\pi R}{T}
\end{align*}

### Aceleración centrípeta $a_\mathrm c$
También llamada **aceleración normal**, es una aceleración que surge del cambio de dirección de la velocidad. Su módulo es igual a:

$$
a_\mathrm c = \frac{v^2}{R} = \omega^2 R
$$

y siempre se dirige hacia el centro de la circunferencia.

## Movimiento circular uniformemente acelerado (MCUA)

### Componentes intrínsecas de la aceleración
La aceleración puede descomponerse en sus **componentes intrínsecas**, una normal (centrípeta) y otra tangencial, debida a la variación del módulo de la velocidad:

$$
\vec a = \vec a_\mathrm n + \vec a_\mathrm t \rightarrow a = \sqrt{a_\mathrm n^2 + a_\mathrm t^2},
$$

con

\begin{align*}
a_\mathrm n &= \frac{v^2}{r} \\\\
a_\mathrm t &= \frac{\mathrm d\thinspace v}{\mathrm d\thinspace t}
\end{align*}

donde $v$ representa el módulo de la velocidad instantánea y $r$ es el radio de curvatura.

{{< figure library="true" src="movimiento-circular-1Bach/MCUA.svg" title="**Componentes intrínsecas de la aceleración**. La componente normal se dirige hacia el centro mientras que la componente tangencial tiene la misma dirección y sentido que la velocidad. Adaptada de https://commons.wikimedia.org/wiki/File:Nonuniform_circular_motion.svg." lightbox="false" width="100%" >}}

La aceleración tangencial se relaciona con la aceleración angular, $\alpha$, a través de la expresión:

$$
a_\mathrm t = \alpha R
$$

### Características
Las **características** del **movimiento circular uniformemente acelerado (MCUA)** son:

- Trayectoria circular.
- Aceleración tangencial, $a_\mathrm t$, constante (velocidad angular $\omega$ variable).

### Ecuaciones principales
La **ecuaciones principales** del MCUA son:

$$
\begin{aligned}
\text{Posición angular: } \varphi(t) &= \varphi_0 + \omega_0(t-t_0) +\frac{1}{2}\alpha(t-t_0)^2 \\
\text{Velocidad angular: } \omega(t) &= \omega_0 + \alpha(t-t_0) \\
\omega^2-\omega_0^2 &= 2\alpha\symup\Delta \varphi
\end{aligned}
$$

donde $\varphi$ es la posición angular final, $\varphi_0$ la posición angular inicial, $\omega_0$ la velocidad angular inicial, $\omega$ la velocidad angular final, $\alpha$ la aceleración angular, $t$ el tiempo final, $t_0$ el tiempo inicial y $\symup\Delta \varphi = \varphi-\varphi_0$ es la distancia angular o espacio angular recorrido.

## Dinámica del movimiento circular

### Fuerza centrípeta

La **fuerza centrípeta** (que busca el centro) es una fuerza que hace que un cuerpo siga una trayectoria curva. Su dirección es siempre perpendicular al movimiento del cuerpo y hacia el centro de curvatura de la trayectoria.

$$
F_\mathrm c = ma_\mathrm c = \frac{mv^2}{r}
$$

### Péndulo cónico

Un **péndulo cónico** está formado por una masa $m$ suspendida de un hilo de longitud $L$, de tal forma que gira sin rozamiento con una velocidad $v$ constante describiendo una trayectoria circular, formando un ángulo $\theta$ con la vertical.

{{< figure library="true" src="movimiento-circular-1Bach/pendulo-conico.svg" title="Adaptada de https://commons.wikimedia.org/wiki/File:Conical_pendulum.svg." lightbox="false" width="100%" >}}

- La componente horizontal de la tensión actúa como fuerza centrípeta:
  $$
	T\sin\theta = \frac{mv^2}{r}
	$$
- La componente vertical de la tensión se compensa con el peso:
  $$
  T\cos\theta = mg
	$$
- Resolviendo el sistema y despejando la velocidad:
	$$
	v = \sqrt{rg\tan\theta}
	$$

### Curvas

####	Sin peralte
La única fuerza que mantiene al vehículo girando en su trayectoria es el **rozamiento**, que ha de ser suficientemente grande como para proporcionar la **fuerza centrípeta** necesaria:

$$
\mu m g > \frac{mv^2}{r} \Rightarrow v < \sqrt{\mu r g}
$$

#### Con peralte (sin rozamiento)
Los bordes inclinados añaden una fuerza adicional (la normal) que mantiene el vehículo en su trayectoria incluso en ausencia de rozamiento.

{{< figure library="true" src="movimiento-circular-1Bach/curva-peralte.svg" title="Traducida y adaptada de https://commons.wikimedia.org/wiki/File:Banked_turn.svg." lightbox="false" width="100%" >}}

- La componente horizontal de la fuerza normal actúa como fuerza centrípeta:
  $$
  N\sin\theta = \frac{mv^2}{r}
	$$
- La componente vertical de la normal se compensa con el peso:
  $$
  N\cos\theta = mg
	$$
- Resolviendo el sistema y despejando la velocidad:
  $$
  v = \sqrt{rg\tan\theta}
	$$


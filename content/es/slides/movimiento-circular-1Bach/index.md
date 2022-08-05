---
title: Movimiento circular
summary: "Cinemática y dinámica del movimiento circular."
url: "/recursos-fisica-quimica/apuntes/1bach/movimiento-circular/diapositivas"

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

# Movimiento circular

- [Movimiento circular uniforme (MCU)](#/1)
- [Movimiento circular uniformemente acelerado (MCUA)](#/2)
- [Dinámica del movimiento circular](#/3)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

</section>

---

{{% section %}}

## Movimiento circular uniforme (MCU)

- [Características](#/1/1)
- [Ecuación principal](#/1/3)
- [Aceleración centrípeta $a_\mathrm c$](#/1/7)

(continúa hacia abajo)

👇

---

### Características
Las **características** del **movimiento circular uniforme (MCU)** son:

- Trayectoria circular.
- Módulo de la velocidad constante (aceleración tangencial $a_\mathrm t=0$).

---

{{< figure library="true" src="movimientos-4ESO/MCU.svg" lightbox="false" width="80%" >}}

---

### Ecuación principal

La **ecuación principal** del MCU es:
$$
\varphi(t) = \varphi_0 + \omega (t-t_0),
$$

donde $\varphi$ es la posición angular final, $\varphi_0$ la posición angular inicial, $\omega$ la frecuencia o velocidad angular, $t$ el tiempo final y $t_0$ el tiempo inicial.

---

Periodo $T$
: El tiempo que tarda el móvil en completar una vuelta completa se llama **periodo**, $T$.

Frecuencia $f$
: El número de vueltas que da el móvil por unidad de tiempo es la **frecuencia**, $f$, y está relacionada con el periodo:
	$$
	f = \frac{1}{T}\thinspace \left[\frac{1}{\mathrm{s}} = \mathrm{s^{-1}} = \mathrm{Hz}\right]
	$$

---

La frecuencia o velocidad angular, $\omega$, está relacionada con el periodo y la frecuencia a través de las expresiones:
$$
\omega = \frac{\Delta \varphi}{\Delta t} = \frac{2\pi}{T} = 2\pi f
$$

---

Las magnitudes lineales y las angulares se relacionan a través del radio $R$:
\begin{align*}
	e &= \varphi R \\\\
	v &= \omega R = \frac{2\pi R}{T}
\end{align*}

---

### Aceleración centrípeta $a_\mathrm c$
También llamada **aceleración normal**, es una aceleración que surge del cambio de dirección de la velocidad. Su módulo es igual a:
$$
a_\mathrm c = \frac{v^2}{R} = \omega^2 R
$$
		
y siempre se dirige hacia el centro de la circunferencia.

{{% /section %}}

---

{{% section %}}

## Movimiento circular uniformemente acelerado (MCUA)

- [Componentes intrínsecas de la aceleración](#/2/1)
- [Características](#/2/5)
- [Ecuaciones principales](#/2/6)

(continúa hacia abajo)

👇

---

### Componentes intrínsecas de la aceleración
La aceleración puede descomponerse en sus **componentes intrínsecas**, una normal (centrípeta) y otra tangencial, debida a la variación del módulo de la velocidad:
$$
\vec a = \vec a_n + \vec a_t \rightarrow a = \sqrt{a_\mathrm n^2 + a_\mathrm t^2},
$$

---

con
\begin{align*}
a_\mathrm n &= \frac{v^2}{r} \\\\
a_\mathrm t &= \frac{\mathrm d\thinspace v}{\mathrm d\thinspace t}
\end{align*}
donde $v$ representa el módulo de la velocidad instantánea y $r$ es el radio de curvatura.

---

{{< figure library="true" src="movimiento-circular-1Bach/MCUA.svg" title="" lightbox="false" width="100%" >}}

---

La aceleración tangencial se relaciona con la aceleración angular, $\alpha$, a través de la expresión:
$$
a_\mathrm t = \alpha R	
$$

---

### Características
Las **características** del **movimiento circular uniformemente acelerado (MCUA)** son:
  
- Trayectoria circular.
- Aceleración tangencial, $a_\mathrm t$, constante (velocidad angular $\omega$ variable).

---
				
### Ecuaciones principales
La **ecuaciones principales** del MCUA son:
\begin{align*}
\text{Posición angular: } \varphi(t) &= \varphi_0 + \omega_0(t-t_0) +\frac{1}{2}\alpha(t-t_0)^2 \tag{1} \\\\
\text{Velocidad angular: } \omega(t) &= \omega_0 + \alpha(t-t_0) \tag{2} \\\\
\omega^2-\omega_0^2 &= 2\alpha\symup\Delta \varphi \tag{3}
\end{align*}

---

donde $\varphi$ es la posición angular final, $\varphi_0$ la posición angular inicial, $\omega_0$ la velocidad angular inicial, $\omega$ la velocidad angular final, $\alpha$ la aceleración angular, $t$ el tiempo final, $t_0$ el tiempo inicial y $\symup\Delta \varphi = \varphi-\varphi_0$ es la distancia angular o espacio angular recorrido.

{{% /section %}}

---

{{% section %}}

## Dinámica del movimiento circular

- [Fuerza centrípeta](#/3/1)
- [Péndulo cónico](#/3/3)
- [Curvas](#/3/8)

(continúa hacia abajo)

👇

---

### Fuerza centrípeta

La **fuerza centrípeta** (que busca el centro) es una fuerza que hace que un cuerpo siga una trayectoria curva.

---

Su dirección es siempre perpendicular al movimiento del cuerpo y hacia el centro de curvatura de la trayectoria.
$$
F_\mathrm c = ma_\mathrm c = \frac{mv^2}{r}	
$$

---

### Péndulo cónico

Un **péndulo cónico** está formado por una masa $m$ suspendida de un hilo de longitud $L$, de tal forma que gira sin rozamiento con una velocidad $v$ constante describiendo una trayectoria circular, formando un ángulo $\theta$ con la vertical.

---

{{< figure library="true" src="movimiento-circular-1Bach/pendulo-conico.svg" title="" lightbox="false" width="60%" >}}

---

- La componente horizontal de la tensión actúa como fuerza centrípeta:
  $$
	T\sin\theta = \frac{mv^2}{r}	
  $$

---

- La componente vertical de la tensión se compensa con el peso:
  $$
  T\cos\theta = mg	
  $$

---  

- Resolviendo el sistema y despejando la velocidad:
  $$
  v = \sqrt{rg\tan\theta}
  $$

---

### Curvas

- [Sin peralte](#/3/9)
- [Con peralte (sin rozamiento)](#/3/10)

(continúa hacia abajo)

👇

---

#### Sin peralte
La única fuerza que mantiene al vehículo girando en su trayectoria es el **rozamiento**, que ha de ser suficientemente grande como para proporcionar la **fuerza centrípeta** necesaria:
$$
\mu m g > \frac{mv^2}{r} \Rightarrow v < \sqrt{\mu r g}	
$$

---

#### Con peralte (sin rozamiento)
Los bordes inclinados añaden una fuerza adicional (la normal) que mantiene el vehículo en su trayectoria incluso en ausencia de rozamiento.

---

{{< figure library="true" src="movimiento-circular-1Bach/curva-peralte.svg" title="" lightbox="false" width="65%" >}}

---

- La componente horizontal de la fuerza normal actúa como fuerza centrípeta:
  $$
  N\sin\theta = \frac{mv^2}{r}	
  $$

---

- La componente vertical de la normal se compensa con el peso:
  $$
  N\cos\theta = mg	
  $$

---

- Resolviendo el sistema y despejando la velocidad:
  $$
  v = \sqrt{rg\tan\theta}
  $$

{{% /section %}}
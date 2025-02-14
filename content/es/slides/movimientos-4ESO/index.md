---
title: Movimientos
url: "/recursos-fisica-quimica/apuntes/4eso/movimientos/diapositivas"
summary: MRU, MRUA y MCU.

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

# Movimientos

- [Movimiento rectilíneo uniforme (MRU)](#/2)
- [Movimiento rectilíneo uniformemente acelerado (MRUA)](#/3)
- [Caída libre/lanzamiento vertical](#/4)
- [Encuentros](#/5)
- [Movimiento circular uniforme (MCU)](#/6)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

> **Aplica** y **relaciona** los **conceptos** estudiados en este tema a una **situación cotidiana** como puede ser el **desplazamiento** en un **vehículo**, con [esta genial **actividad**]({{< relref "/actividades-cuarto-eso/distancia-seguridad" >}}).

---

{{% section %}}

## Movimiento rectilíneo uniforme (MRU)
- [Características](#/2/1)
- [Ecuación principal](#/2/2)
- [Gráficas](#/2/3)
- [Ejemplo](#/2/5)

(continúa hacia abajo)

👇

---

### Características
Las **características** del **movimiento rectilíneo uniforme (MRU)** son:

- Trayectoria rectilínea.
- Velocidad $v$ constante (aceleración $a=0$).

---

### Ecuación principal

La **ecuación principal** del MRU es:

$$
x(t) = x_0 + v(t-t_0),
$$

donde $x$ es la posición final, $x_0$ la posición inicial, $v$ la velocidad, $t$ el tiempo final y $t_0$ el tiempo inicial.

---

### Gráficas
{{< figure library="true" src="movimientos-4ESO/graficas-MRU.svg" lightbox="false" width="100%" >}}

---

> Agudiza tu comprensión de la **posición**, la **velocidad** y la **aceleración** construyendo **gráficas** de **movimiento** en **tiempo real** con [este genial **juego**](https://www.universeandmore.com/motion-mapper-es/).

---

### Ejemplo
<q>Un caracol <span style="display: inline-flex;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🐌</span> recorre en línea recta una distancia de 10.8&thinsp;m en 1.5&thinsp;h. ¿Qué distancia recorrerá en 5&thinsp;min?</q>

---

Escribimos la ecuación del movimiento del caracol:
$$
x(t) = x_0 + vt,
$$
donde $x = 10.8\thinspace\mathrm m$, $x_0 = 0$, $v$ es la velocidad del caracol (desconocida) y $t=1.5\thinspace\mathrm h$.

---

Como nos preguntan la distancia que recorrerá, $\Delta x = x-x_0$, en $5\thinspace\mathrm{min}$, podemos pasar las $1.5\thinspace\mathrm h$ a minutos:

$$
1.5\thinspace\mathrm h\cdot \frac{60\thinspace\mathrm{min}}{1\thinspace\mathrm h} = 90\thinspace\mathrm{min}
$$

y así calcular la velocidad en m/min:
$$
10.8\thinspace\mathrm m = 0 + v\cdot 90\thinspace\mathrm{min} \rightarrow v = 0.12\thinspace\mathrm{m/min}
$$

---

La distancia recorrida en $5\thinspace\mathrm{min}$ será por tanto:
$$
\Delta x (5\thinspace\mathrm{min}) = x(5\thinspace\mathrm{min}) - x_0 =  0.12\thinspace\mathrm{m/min} \cdot 5\thinspace\mathrm{min} = 0.6\thinspace\mathrm m
$$

{{% /section %}}

---

{{% section %}}

## Movimiento rectilíneo uniformemente acelerado (MRUA)

- [Características](#/3/1)
- [Ecuaciones principales](#/3/2)
- [Gráficas](#/3/3)
- [Ejemplo](#/3/5)

(continúa hacia abajo)

👇

---

### Características

Las **características** del **movimiento rectilíneo uniformemente acelerado (MRUA)** son:

- Trayectoria rectilínea.
- Aceleración $a$ constante (velocidad $v$ variable).

---

### Ecuaciones principales

La **ecuaciones principales** del MRUA son:

{{% math width="100%" %}}
$$
\begin{aligned}
	\text{Ecuación de la posición: } x(t) &= x_0 +v_0(t-t_0) +\frac{1}{2}a(t-t_0)^2 \\
	\text{Ecuación de la velocidad: } v(t) &= v_0 + a(t-t_0) \\
	v^2-v_0^2 &= 2a\Delta x
\end{aligned}
$$
{{% /math %}}

donde $x$ es la posición final, $x_0$ la posición inicial, $v_0$ la velocidad inicial, $v$ la velocidad final, $a$ la aceleración, $t$ el tiempo final, $t_0$ el tiempo inicial y $\Delta x = x-x_0$ es la distancia o espacio recorrido.

---

### Gráficas
{{< figure library="true" src="movimientos-4ESO/graficas-MRUA.svg" lightbox="false" width="100%" >}}

---

> Agudiza tu comprensión de la **posición**, la **velocidad** y la **aceleración** construyendo **gráficas** de **movimiento** en **tiempo real** con [este genial **juego**](https://www.universeandmore.com/motion-mapper-es/).

---

### Ejemplo
<q>Un coche <span style="display: inline-flex;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚗</span> que circula a 70.2&thinsp;km/h disminuye su velocidad a razón de 3&thinsp;m/s cada segundo. ¿Qué distancia recorrerá hasta detenerse?</q>

---

Lo primero pasamos la **velocidad inicial** $v_0$ a m/s:
$$
v_0 = 70.2\thinspace\frac{\mathrm{km}}{\mathrm{h}}\cdot \frac{1000\thinspace\mathrm m}{1\thinspace\mathrm{km}} \cdot \frac{1\thinspace\mathrm h}{3600\thinspace\mathrm s} = 19.5\thinspace\mathrm{m/s}
$$

La frase "*disminuye su velocidad a razón de $3\thinspace\mathrm{m/s}$ cada segundo*" la tenemos que interpretar como que su **aceleración** $a=-3\thinspace\mathrm{m/s^2}$ (el signo $-$ es porque su velocidad disminuye, y la velocidad la tomamos positiva).

---

Como no me dan información sobre tiempo ni me piden ningún tiempo (sino distancia recorrida $\Delta x$), utilizo la ecuación (3):
$$
v^2-v_0^2 = 2a\Delta x, \tag{3}
$$
de donde despejo la distancia recorrida $\Delta x$:
$$
\Delta x = \frac{v^2-v_0^2}{2a} = \frac{0^2-19.5^2}{2\cdot (-3)} = 63.375\thinspace\mathrm m
$$

{{% /section %}}

---

{{% section %}}

## Caída libre/lanzamiento vertical
La **caída libre** o **lanzamiento vertical** es un caso especial de MRUA en el que la aceleración es igual a la aceleración de la **gravedad**. En el caso de la Tierra, $a=-g=-9.8\thinspace\mathrm{m/s^2}$ (el signo $-$ indica que la aceleración de la gravedad apunta, siempre, hacia abajo).

---

¿Qué ocurre cuando una bola de bolos y una pluma se dejan caer juntas en las condiciones del espacio exterior? [**Brian Cox**](https://es.wikipedia.org/wiki/Brian_Cox_(f%C3%ADsico)) nos lo enseña en este impresionante **vídeo**:

{{< youtube E43-CfukEgs >}}

---

### ¿Y cuánto vale la gravedad en otros astros del Sistema Solar?

| Astro | $g$ | $\mathrm{m/s^2}$ |
| --- | :---: | :---: |
| Sol :sunny: | 28.02 | 274.8 |
| Júpiter &#9795; | 2.53 | 24.8 |
| Neptuno &#9798; | 1.14 | 11.2 |
| Saturno &#9796; | 1.07 | 10.4 |
| Tierra &#9793; | 1 | 9.8 |

---

| Astro | $g$ | $\mathrm{m/s^2}$ |
| --- | :---: | :---: |
| Venus &#9792; | 0.90 | 8.9 |
| Urano &#9797; | 0.89 | 8.7 |
| Marte &#9794; | 0.38 | 3.7 |
| Mercurio &#9791; | 0.38 | 3.7 |
| Luna :crescent_moon: | 0.17 | 1.6 |

---

Descubre a qué altura podrías saltar en otros planetas con este genial **vídeo**:

{{< youtube D8H1RNtka6s >}}

---

### Ejemplo
<q>Desde la azotea de un rascacielos de 120&thinsp;m de altura se lanza una piedra con velocidad de 5&thinsp;m/s, hacia abajo. Calcular: a) Tiempo que tarda en llegar al suelo, b) velocidad con que choca contra el suelo.</q>

---

Escribimos la **ecuación del movimiento** (1) de la piedra:
$$
y(t) = y_0 + v_0 t + \frac{1}{2}at^2, \tag{1}
$$
donde $y_0 = 120\thinspace\mathrm m$, $v_0 = -5\thinspace\mathrm{m/s}$ (hacia abajo) y $a=-g=-9.8\thinspace\mathrm{m/s^2}$, de forma que la ecuación particularizada queda:
$$
y(t) = 120 - 5t + \frac{1}{2}\cdot (-9.8)\cdot t^2 = 120-5t-4.9t^2
$$

---

a) De la ecuación (1) podemos despejar el tiempo que tarda en llegar al suelo, sabiendo que cuando llega al suelo, $y=0$:

{{% math width="100%" %}}
$$
\begin{gathered}
	0 = 120 - 5t -4.9t^2 \\
	4.9t^2+5t-120=0 \\
	t = \frac{-5\pm \sqrt{5^2-4\cdot 4.9\cdot (-120)}}{2\cdot 4.9} = \frac{-5\pm \sqrt{2377}}{9.8} =  \begin{cases}
4.5\thinspace\mathrm s \\
\xcancel{-5.5\thinspace\mathrm s}
\end{cases}
\end{gathered}
$$
{{% /math %}}

---

b) Para calcular la velocidad con que choca contra el suelo podemos utilizar la ecuación (2) o la (3):

Utilizando la ecuación (2)
: Sustituyendo el tiempo por el tiempo de llegada al suelo:
	$$
	v(t) = v_0 + at = -5-9.8t = -5-9.8\cdot 4.5 = -48.8\thinspace\mathrm{m/s}
	$$

---

Utilizando la ecuación (3)
: Teniendo cuidado al calcular $\Delta x = x-x_0 = 0-120 = -120\thinspace\mathrm{m}$, e imponiendo el signo $-$ al despejar $v$:

$$
v^2-v_0^2 = 2a\Delta x \tag{3}
$$

$$
\begin{aligned}
v = - \sqrt{v_0^2 + 2a\Delta x} &= - \sqrt{(-5)^2 + 2\cdot (-9.8)\cdot (0-120)} \\
&= -48.8\thinspace\mathrm{m/s}
\end{aligned}
$$

---

{{< figure library="true" src="movimientos-4ESO/lanzamiento-vertical.svg" lightbox="false" width="25%" >}}

---

{{< figure library="true" src="movimientos-4ESO/lanzamiento-vertical-posicion-tiempo.svg" lightbox="false" width="90%" >}}

---

{{< figure library="true" src="movimientos-4ESO/lanzamiento-vertical-velocidad-tiempo.svg" lightbox="false" width="90%" >}}

---

{{< figure library="true" src="movimientos-4ESO/bola-billar-fqsaja.jpg" lightbox="false" width="40%" >}}

{{% /section %}}

---

{{% section %}}

## Encuentros
Se trata de situaciones en las que dos cuerpos, típicamente moviéndose con un MRU o un MRUA, comienzan en posiciones distintas y acaban encontrándose al cabo de un cierto tiempo.

---

Seguimos estos **tres pasos**:

1. **Escribir** las **ecuaciones de la posición** de cada cuerpo.
2. **Imponer** la condición de **encuentro**, es decir, que ambas posiciones coinciden cuando se encuentran.
3. **Despejar** la magnitud que me pidan.

---

### Ejemplo
<q>Un coche <span style="display: inline-flex;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚗</span> se desplaza por una carretera que es paralela a la vía de un tren. El coche se detiene ante un semáforo que está con luz roja en el mismo instante que pasa un tren <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚞</span> con una rapidez constante de 12&thinsp;m/s. El coche permanece detenido durante 6&thinsp;s y luego arranca con una aceleración constante de 2&thinsp;m/s<sup>2</sup>.</q>

---

<q>Determinar: <br>
a) El tiempo que emplea el coche en alcanzar al tren, medido desde el instante en que se detuvo ante el semáforo.<br>
b) La distancia que recorrió el coche desde el semáforo hasta que alcanzó al tren. <br>
c) La rapidez del coche en el instante que alcanza al tren.</q>

---

a) Lo primero que hacemos es escribir las **ecuaciones del movimiento** de cada móvil:

\begin{align*}
	\text{Coche (MRUA): } x_\mathrm c &= x_{0_\mathrm c} + v_{0_\mathrm c}(t-t_{0_\mathrm c})+\frac{1}{2}a_\mathrm c(t-t_{0_\mathrm c})^2 \\\\
	\text{Tren (MRU): } x_\mathrm t &= x_{0_\mathrm t} + v_\mathrm t(t-t_{0_\mathrm t})
\end{align*}

---

**Particularizamos** para nuestro caso:
$$
\begin{gathered}
x_{0_\mathrm c}=x_{0_\mathrm t}=0 \\
v_{0_\mathrm c}=0;\quad v_\mathrm t = 12\thinspace\mathrm{m/s} \\
a_\mathrm c = 2\thinspace\mathrm{m/s^2} \\
t_{0_\mathrm c}=6\thinspace\mathrm s;\quad t_{0_\mathrm t} = 0
\end{gathered}
$$

$$
\begin{aligned}
	\text{Coche (MRUA): } x_\mathrm c &= 0 + 0\cdot(t-6)+\frac{1}{2}\cdot 2\cdot(t-6)^2 \\
	 &= (t-6)^2 = t^2-12t+36 \\
	\text{Tren (MRU): } x_\mathrm t &= 0 + 12\cdot(t-0) = 12t
\end{aligned}
$$

---

A continuación imponemos la **condición de encuentro**:

$$
\begin{aligned}
x_\mathrm c &= x_\mathrm t \\
t^2-12t+36 &= 12t \\
t^2-24t+36 &= 0
\end{aligned}
$$

---

Despejamos el **tiempo de encuentro** $t^*$:

$$
t^* = \frac{24\pm\sqrt{24^2-4\cdot 1\cdot 36}}{2} = \frac{24\pm \sqrt{432}}{2} =  \begin{cases}
	22.4\thinspace\mathrm s \\\\
	\xcancel{1.6\thinspace\mathrm s}
\end{cases}
$$

donde descartamos la solución $t=1.6\thinspace\mathrm s$ por ser menor que los 6&thinsp;s que está parado el coche en el semáforo.

---

Podemos comprobar esto representando la gráfica de posición frente a tiempo ($x-t$) para cada móvil:

{{< figure library="true" src="movimientos-4ESO/encuentro.svg" lightbox="false" width="70%" >}}

---

donde se ve claramente cómo el coche está parado los primeros 6&thinsp;s para después arrancar acelerando (parábola) y alcanzando al tren a los 22.4&thinsp;s.

---

b) Para calcular la **distancia recorrida** por el coche solo tenemos que sustituir el tiempo de encuentro, $t^{*}=22.4\thinspace\mathrm s$, en su ecuación de posición, ya que comienza en $x_0 = 0$:

$$
x_{\mathrm c} (t^{*}) = t^{*2}-12t^{*}+36 = 22.4^2-12\cdot 22.4 + 36 = 268.7\thinspace\mathrm m
$$

---

c) La **rapidez** del coche cuando alcanza al tren la podemos calcular utilizando la **ecuación de la velocidad** del coche, sustituyendo $t=t^*$:

$$
v_\mathrm c(t^*) = v_{0_\mathrm c} + a_\mathrm c (t^*-t_0) = 0 + 2\cdot(22.4-6) = 32.8\thinspace\mathrm{m/s}
$$

{{% /section %}}

---

{{% section %}}

## Movimiento circular uniforme (MCU)

- [Características](#/6/1)
- [Ecuación principal](#/6/3)
- [Aceleración centrípeta $a_\mathrm c$](#/6/7)
- [Ejemplo](#/6/8)

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
	v &= \omega R
\end{align*}

---

### Aceleración centrípeta $a_\mathrm c$
También llamada **aceleración normal**, es una aceleración que surge del cambio de dirección de la velocidad. Su módulo es igual a:

$$
a_\mathrm c = \frac{v^2}{R} = \omega^2 R
$$

y siempre se dirige hacia el centro de la circunferencia.

---

### Ejemplo

<q>Las aspas de un ventilador giran uniformemente a razón de 90 vueltas por minuto (rpm). Determina: a) su velocidad angular, en rad/s; b) la velocidad lineal de un punto situado a 30&thinsp;cm del centro; c) el número de vueltas que darán las aspas en 5&thinsp;min.</q>

---

a) Utilizamos factores de conversión:

$$
\omega = 90\thinspace\mathrm{rpm} = 90\thinspace\frac{\mathrm{rev}}{\mathrm{min}} \cdot \frac{2\pi\thinspace\mathrm{rad}}{1\thinspace\mathrm{rev}} \cdot \frac{1\thinspace\mathrm{min}}{60\thinspace\mathrm{s}} = 3\pi\thinspace\mathrm{rad/s} \approx 9.4\thinspace\mathrm{rad/s}
$$

---

b) Utilizamos la relación entre las velocidades lineal y angular, con $R=30\thinspace\mathrm{cm} = 0.3\thinspace\mathrm{m}$:
$$
v = \omega R = 3\pi\thinspace\mathrm{rad/s}\cdot 0.3\thinspace\mathrm{m} = 0.9\pi\thinspace\mathrm{m/s} \approx 2.8\thinspace\mathrm{m/s}
$$

---

c) Escribimos la ecuación del movimiento de las aspas:
$$
\varphi(t) = \varphi_0 + \omega (t-t_0),
$$
donde $\varphi_0 = 0$, $\omega = 90\thinspace\mathrm{rpm}$ y $t_0 = 0$, es decir:
$$
\varphi(t) = 90t\thinspace[\mathrm{rev}]
$$
Sustituyendo el tiempo por $t=5\thinspace\mathrm{min}$, obtenemos el espacio angular en vueltas (rev):
$$
\varphi(5\thinspace\mathrm{min}) = 90\thinspace\mathrm{rev/min}\cdot 5\thinspace\mathrm{min} = 450\thinspace\mathrm{rev}
$$

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
---
title: Movimientos
summary: MRU, MRUV y MCU.

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Movimientos

- [Movimiento rectilíneo uniforme (MRU)](#/1)
- [Movimiento rectilíneo uniformemente variado (MRUV)](#/2)
- [Caída libre/lanzamiento vertical](#/3)
- [Encuentros](#/4)
- [Movimiento circular uniforme (MCU)](#/5)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

{{% section %}}

## Movimiento rectilíneo uniforme (MRU)
- [Características]
- [Ecuación principal]
- [Gráficas]
- [Ejemplo]

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

> Agudiza tu comprensión de la **posición**, la **velocidad** y la **aceleración** construyendo **gráficas** de **movimiento** en **tiempo real** con este genial **juego**: https://www.universeandmore.com/motion-mapper-es/.

---

### Ejemplo
<q>Un caracol 🐌 recorre en línea recta una distancia de $10.8\thinspace\mathrm m$ en $1.5\thinspace\mathrm h$. ¿Qué distancia recorrerá en $5\thinspace\mathrm{min}$?</q>

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

## Movimiento rectilíneo uniformemente variado (MRUV)

- [Características]
- [Ecuaciones principales]
- [Gráficas]
- [Ejemplo]

(continúa hacia abajo)

👇

---

### Características

Las **características** del **movimiento rectilíneo uniformemente variado (MRUV)** son:

- Trayectoria rectilínea.
- Aceleración $a$ constante (velocidad $v$ variable).

---

### Ecuaciones principales

La **ecuaciones principales** del MRUV son:
\begin{align*}
	\label{eq:1}
	\text{Posición: } x(t) &= x_0 +v_0(t-t_0) +\frac{1}{2}a(t-t_0)^2 \tag{1} \\\\
	\label{eq:2}
	\text{Velocidad: } v(t) &= v_0 + a(t-t_0) \tag{2} \\\\
	\label{eq:v2}
	v^2-v_0^2 &= 2a\Delta x \tag{3}
\end{align*}

donde $x$ es la posición final, $x_0$ la posición inicial, $v_0$ la velocidad inicial, $a$ la aceleración, $t$ el tiempo final, $t_0$ el tiempo inicial y $\Delta x = x-x_0$ es la distancia o espacio recorrido.

---

### Gráficas
{{< figure library="true" src="movimientos-4ESO/graficas-MRUV.svg" lightbox="false" width="100%" >}}

---

> Agudiza tu comprensión de la **posición**, la **velocidad** y la **aceleración** construyendo **gráficas** de **movimiento** en **tiempo real** con este genial **juego**: https://www.universeandmore.com/motion-mapper-es/.

---

### Ejemplo
<q>Un coche <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚗</span> que circula a $70.2\thinspace\mathrm{km/h}$ disminuye su velocidad a razón de $3\thinspace\mathrm{m/s}$ cada segundo. ¿Qué distancia recorrerá hasta detenerse?</q>

---

Lo primero pasamos la **velocidad inicial** $v_0$ a m/s:
$$
v_0 = 70.2\thinspace\frac{\mathrm{km}}{\mathrm{h}}\cdot \frac{1000\thinspace\mathrm m}{\thinspace\mathrm{km}} \cdot \frac{1\thinspace\mathrm h}{3600\thinspace\mathrm s} = 19.5\thinspace\mathrm{m/s}
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
La **caída libre** o **lanzamiento vertical** es un caso especial de MRUV en el que la aceleración es igual a la aceleración de la **gravedad**. En el caso de la Tierra, $a=-g=-9.8\thinspace\mathrm{m/s^2}$ (el signo $-$ indica que la aceleración de la gravedad apunta, siempre, hacia abajo).

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

### Ejemplo
<q>Desde la azotea de un rascacielos de $120\thinspace\mathrm m$ de altura se lanza una piedra con velocidad de $5\thinspace\mathrm{m/s}$, hacia abajo. Calcular: a) Tiempo que tarda en llegar al suelo, b) velocidad con que choca contra el suelo.</q>

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
\begin{gather*}
	0 = 120 - 5t -4.9t^2 \\\\
	4.9t^2+5t-120=0 \\\\
	t = \frac{-5\pm \sqrt{5^2-4\cdot 4.9\cdot (-120)}}{2\cdot 4.9} = \frac{-5\pm \sqrt{2377}}{9.8} =  \begin{cases}
4.5\thinspace\mathrm s \\\\
-5.5\thinspace\mathrm s\text{ (NO)}
\end{cases}
\end{gather*}

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
	\begin{align*}
	v = - \sqrt{v_0^2 + 2a\Delta x} &= - \sqrt{(-5)^2 + 2\cdot (-9.8)\cdot (0-250)} \\\\
	  &= -48.8\thinspace\mathrm{m/s}
	\end{align*}
	
---	
	
{{< figure library="true" src="movimientos-4ESO/lanzamiento-vertical.svg" lightbox="false" width="25%" >}}

{{% /section %}}

---

{{% section %}}

## Encuentros
Se trata de situaciones en las que dos cuerpos, típicamente moviéndose con un MRU o un MRUV, comienzan en posiciones distintas y acaban encontrándose al cabo de un cierto tiempo.

---

Seguimos estos **tres pasos**:

1. **Escribir** las **ecuaciones de la posición** de cada cuerpo.
2. **Imponer** la condición de **encuentro**, es decir, que ambas posiciones coinciden cuando se encuentran.
3. **Despejar** la magnitud que me pidan.

---

### Ejemplo
<q>Un coche <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚗</span> se desplaza por una carretera que es paralela a la vía de un tren. El coche se detiene ante un semáforo que está con luz roja en el mismo instante que pasa un tren <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚞</span> con una rapidez constante de $12\thinspace\mathrm{m/s}$. El coche permanece detenido durante $6\thinspace\mathrm s$ y luego arranca con una aceleración constante de $2\thinspace\mathrm{m/s^2}$.</q>
  
---
  
<q>Determinar: <br>
a) El tiempo que emplea el coche en alcanzar al tren, medido desde el instante en que se detuvo ante el semáforo.<br>
b) La distancia que recorrió el coche desde el semáforo hasta que alcanzó al tren. <br>
c) La rapidez del coche en el instante que alcanza al tren.</q>

---

a) Lo primero que hacemos es escribir las **ecuaciones del movimiento** de cada móvil:

\begin{align*}
	\text{Coche (MRUV): } x_\mathrm c &= x_{0_\mathrm c} + v_{0_\mathrm c}(t-t_{0_\mathrm c})+\frac{1}{2}a_\mathrm c(t-t_{0_\mathrm c})^2 \\\\
	\text{Tren (MRU): } x_\mathrm t &= x_{0_\mathrm t} + v_\mathrm t(t-t_{0_\mathrm t})
\end{align*}

---

**Particularizamos** para nuestro caso:
\begin{gather*}
x_{0_\mathrm c}=x_{0_\mathrm t}=0 \\\\
v_{0_\mathrm c}=0;\quad v_\mathrm t = 12\thinspace\mathrm{m/s} \\\\
a_\mathrm c = 2\thinspace\mathrm{m/s^2} \\\\
t_{0_\mathrm c}=6\thinspace\mathrm s;\quad t_{0_\mathrm t} = 0
\end{gather*}

\begin{align*}
	\text{Coche (MRUV): } x_\mathrm c &= 0 + 0\cdot(t-6)+\frac{1}{2}\cdot 2\cdot(t-6)^2 \\\\
	 &= (t-6)^2 = t^2-12t+36 \\\\
	\text{Tren (MRU): } x_\mathrm t &= 0 + 12\cdot(t-0) = 12t
\end{align*}

---

A continuación imponemos la **condición de encuentro**:

\begin{align*}		
x_\mathrm c &= x_\mathrm t \\\\
t^2-12t+36 &= 12t \\\\
t^2-24t+36 &= 0
\end{align*}

---

Despejamos el **tiempo de encuentro** $t^*$:

$$
t^* = \frac{24\pm\sqrt{24^2-4\cdot 1\cdot 36}}{2} = \frac{24\pm \sqrt{432}}{2} =  \begin{cases}
	22.4\thinspace\mathrm s \\\\
	1.6\thinspace\mathrm s\text{ (NO)}
\end{cases}
$$

donde descartamos la solución $t=1.6\thinspace\mathrm s$ por ser menor que los $6\thinspace\mathrm s$ que está parado el coche en el semáforo.

---

Podemos comprobar esto representando la gráfica de posición frente a tiempo ($x-t$) para cada móvil:

{{< figure library="true" src="movimientos-4ESO/encuentro.svg" lightbox="false" width="50%" >}}

donde se ve claramente cómo el coche está parado los primeros $6\thinspace\mathrm s$ para después arrancar acelerando (parábola) y alcanzando al tren a los $22.4\thinspace\mathrm s$.

---

b) Para calcular la **distancia recorrida** por el coche solo tenemos que sustituir el tiempo de encuentro, $t^*=22.4\thinspace\mathrm s$, en su ecuación de posición, ya que comienza en $x_0 = 0$:

$$
x_\mathrm c (t^*) = t^{*2}-12t^*+36 = 22.4^2-12\cdot 22.4 + 36 = 268.7\thinspace\mathrm m
$$
	
---

c) La **rapidez** del coche cuando alcanza al tren la podemos calcular utilizando la **ecuación de la velocidad** del coche, sustituyendo $t=t^*$:

$$
v_\mathrm c(t^*) = v_{0_\mathrm c} + a_\mathrm c (t^*-t_0) = 0 + 2\cdot(22.4-6) = 32.8\thinspace\mathrm{m/s}
$$

{{% /section %}}
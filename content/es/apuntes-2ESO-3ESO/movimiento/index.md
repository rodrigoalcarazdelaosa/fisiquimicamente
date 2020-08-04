---
title: El movimiento
subtitle: Conceptos de velocidad y aceleración
summary: "`EN CONSTRUCCIÓN` <br> Conceptos de velocidad y aceleración."
tags:
- 2º ESO
- movimiento
categories:
- Física

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Steve Sewell**](https://pixabay.com/es/users/sms467-1386127/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
# - icon_pack: fas
# icon: download
#  name: PDF Texto
#  url: movimientos_texto.pdf
  
- icon_pack: fas
  icon: download
  name: Póster
  url: movimiento-poster.pdf  
---

{{% toc %}}

## Definiciones
### Sistema de referencia
Conjunto de puntos respecto de los cuales definimos las posiciones.

### Posición
Lugar que ocupa un cuerpo en el espacio.

### Trayectoria
Línea imaginaria formada por el conjunto de puntos por los que pasa un cuerpo al moverse.

### Espacio recorrido
Longitud del camino que realiza el móvil medido sobre la trayectoria.

### Desplazamiento
Diferencia entre las posiciones final e inicial.

La siguiente figura muestra la **diferencia** entre **espacio recorrido** y **desplazamiento**:

{{< figure library="true" src="movimiento-2ESO/desplazamiento.svg" title="Adaptada de https://commons.wikimedia.org/wiki/File:Distancedisplacement.svg." lightbox="false" width="100%">}}

## Concepto de velocidad
La **velocidad** mide cómo cambia la posición de un móvil respecto al tiempo. En el SI se mide en m/s.

### Velocidad media
La **velocidad media** de un cuerpo es la relación entre el espacio recorrido y el tiempo invertido:
$$
v_\text{m} = \frac{\Delta x}{\Delta t},
$$
siendo $\Delta x$ el espacio recorrido y $\Delta t$ el tiempo transcurrido.

### Velocidad instantánea
Es la velocidad que tiene un móvil en un determinado instante de tiempo. Se puede entender como el límite de la velocidad media cuando el intervalo de tiempo tiende a cero.

## Movimiento rectilíneo uniforme (MRU)
### Características
Las **características** del **movimiento rectilíneo uniforme (MRU)** son:

- Trayectoria rectilínea.
- Velocidad $v$ constante (aceleración $a=0$).

### Ecuación principal

La **ecuación principal**[^1] del MRU es:
[^1]: Esta es la llamada **ecuación del movimiento** o **ecuación de la posición**, pues nos da la posición $x$ en función del tiempo $t$.

$$
x(t) = x_0 + v(t-t_0),
$$

donde $x$ es la posición final, $x_0$ la posición inicial, $v$ la velocidad, $t$ el tiempo final y $t_0$ el tiempo inicial.

## Concepto de aceleración
La **aceleración** mide cómo cambia la velocidad de un móvil respecto al tiempo:
$$
a = \frac{\Delta v}{\Delta t} = \frac{v-v_0}{t-t_0},
$$
donde $v$ y $v_0$ son las velocidades final e inicial, respectivamente; y $t$ y $t_0$ son el tiempo final e inicial, respectivamente. En el **SI** se mide en m/s<sup>2</sup>.

## Gráficas
### Movimiento uniforme
{{< figure library="true" src="movimiento-2ESO/graficas-MRU.png" >}}

### Movimiento acelerado
{{< figure library="true" src="movimiento-2ESO/graficas-MRUV.png" >}}

## Encuentros
Se trata de situaciones en las que dos cuerpos comienzan en posiciones distintas y acaban encontrándose al cabo de un cierto tiempo.

Seguimos estos **tres pasos**:

1. **Escribir** las **ecuaciones de la posición** de cada cuerpo.
2. **Imponer** la condición de **encuentro**, es decir, que ambas posiciones coinciden cuando se encuentran ($x_\mathrm A = x_\mathrm B$).
3. **Despejar** la magnitud que me pidan.

### Ejemplo resuelto
{{% alert example %}}
<br>

> Un coche y una moto salen uno hacia el otro desde dos ciudades que distan 200$\thinspace$km, con velocidades de 70$\thinspace$km/h y 90$\thinspace$km/h, respectivamente. Calcula:<br>
a) ¿Cuánto tiempo tardarán en encontrarse?<br>
b) ¿Qué distancia ha recorrido cada uno de ellos?

---

a) Lo primero que hacemos es escribir las **ecuaciones del movimiento** de cada móvil:

\begin{align*}
	\text{Coche (MRUV): } x_\mathrm c &= x_{0_\mathrm c} + v_{0_\mathrm c}(t-t_{0_\mathrm c})+\frac{1}{2}a_\mathrm c(t-t_{0_\mathrm c})^2 \\\\
	\text{Tren (MRU): } x_\mathrm t &= x_{0_\mathrm t} + v_\mathrm t(t-t_{0_\mathrm t})
\end{align*}

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

A continuación imponemos la **condición de encuentro**:

\begin{align*}		
x_\mathrm c &= x_\mathrm t \\\\
t^2-12t+36 &= 12t \\\\
t^2-24t+36 &= 0
\end{align*}

Despejamos el **tiempo de encuentro** $t^*$:

$$
t^* = \frac{24\pm\sqrt{24^2-4\cdot 1\cdot 36}}{2} = \frac{24\pm \sqrt{432}}{2} =  \begin{cases}
	22.4\thinspace\mathrm s \\\\
	\xcancel{1.6\thinspace\mathrm s}
\end{cases}
$$

donde descartamos la solución $t=1.6\thinspace\mathrm s$ por ser menor que los $6\thinspace\mathrm s$ que está parado el coche en el semáforo. Podemos comprobar esto representando la gráfica de posición frente a tiempo ($x-t$) para cada móvil:

{{< figure src="encuentro.png" lightbox="true" >}}

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
{{% /alert %}}
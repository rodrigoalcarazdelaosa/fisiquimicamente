---
title: El movimiento
subtitle: Conceptos de velocidad y aceleración
summary: "Conceptos de velocidad y aceleración."
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
La **velocidad** mide cómo cambia la posición de un móvil respecto al tiempo. En el **SI** se mide en m/s.

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
a = \frac{\Delta v}{\Delta t} = \frac{v-v_0}{t-t_0} \Rightarrow v = v_0 + a\cdot (t-t_0),
$$
donde $v$ y $v_0$ son las velocidades final e inicial, respectivamente; y $t$ y $t_0$ son el tiempo final e inicial, respectivamente. En el **SI** se mide en m/s<sup>2</sup>.

### Ejemplo resuelto
Un Fórmula 1 es capaz de acelerar de \SI{0} a \SI{300}{km/h} en \SI{10.6}{s}. ¿Qué velocidad alcanza el monoplaza tras recorrer la pista de \SI{2}{mi}? Compárala con la velocidad de despegue del avión.

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

El siguiente esquema representa la situación que tenemos:

{{< figure library="true" src="movimiento-2ESO/encuentro-planteamiento.png" >}}

a) Lo primero que hacemos es escribir las **ecuaciones del movimiento** de cada móvil:
\begin{align*}
\text{Coche (MRU): } x_\mathrm c &= x_{0_\mathrm c} + v_\mathrm c t \\\\
\text{Moto (MRU): } x_\mathrm m &= x_{0_\mathrm m} + v_\mathrm m t
\end{align*}

**Particularizamos** para nuestro caso, tomando el origen donde empieza el coche y sentido positivo hacia la derecha:
\begin{gather*}
x_{0_\mathrm c}=0;\quad x_{0_\mathrm m}=200\thinspace\mathrm{km} \\\\
v_\mathrm c=70\thinspace\mathrm{km/h};\quad v_\mathrm m = -90\thinspace\mathrm{km/h}
\end{gather*}

\begin{align*}
\text{Coche (MRU): } x_\mathrm c &= 0 + 70 t = 70t \\\\
\text{Moto (MRU): } x_\mathrm m &= 200 - 90t
\end{align*}

A continuación imponemos la **condición de encuentro**:
\begin{align*}		
x_\mathrm c &= x_\mathrm m \\\\
70t &= 200-90t \\\\
160 t &= 200
\end{align*}

Despejamos el **tiempo de encuentro** $t^*$:

$$
t^* = \frac{200\thinspace\mathrm{\cancel{km}}}{160\thinspace\mathrm{\cancel{km}/h}} = 1.25\thinspace\mathrm{h}
$$

Podemos comprobar esto representando la gráfica de posición frente a tiempo ($x-t$) para cada móvil:	
{{< figure library="true" src="movimiento-2ESO/encuentro-graficas.png" >}}


donde se ve claramente cómo el coche y la moto se encuentran para $t^* = 1.25\thinspace\mathrm{h}$.

---

b) Para calcular la **distancia recorrida** por cada uno de ellos, sustituimos el tiempo de encuentro, $t^*=1.25\thinspace\mathrm{h}$, en las ecuaciones de posición del coche y de la moto, teniendo en cuenta las posiciones iniciales de cada uno de ellos:

\begin{align*}
\Delta x_\mathrm c (t^*) &= x_\mathrm c (t^*) - x_{0_\mathrm c} \\\\
&= 70\cdot 1.25 = 87.5\thinspace\mathrm{km} \\\\
\Delta x_\mathrm m (t^*) &= x_\mathrm m (t^*) - x_{0_\mathrm m} \\\\
 &= 200-90\cdot 1.25 - 200 = -112.5\thinspace\mathrm{km}
\end{align*}

donde el signo $-$ indica que la moto ha recorrido esa distancia hacia la izquierda.
  
{{% /alert %}}
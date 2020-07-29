---
title: Energía, trabajo y calor
summary: "Energía y sus formas de intercambio (trabajo y calor)."

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Energía, trabajo y calor

- [Energías cinética, potencial y mecánica](#/1)
- [Conservación de la energía](#/2)
- [Intercambio de energía](#/3)
- [Trabajo y potencia](#/4)
- [Efectos del calor sobre los cuerpos](#/5)
- [Máquinas térmicas](#/6)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](fluidos-diapositivas.pdf)

---

La **energía** es la capacidad para realizar un trabajo.

Se mide en **julios** ($1\thinspace \mathrm{J} = 1\thinspace\mathrm{kg}\thinspace\mathrm{m^2}\thinspace\mathrm{s^{-2}}$).

---

## Simulación
<iframe src="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

{{% section %}}

## Energías cinética, potencial y mecánica

(continúa hacia abajo)

👇

---

### Energía cinética $E_\mathrm c$
Es la energía que posee un cuerpo por el hecho de estar en **movimiento**. Depende de la masa $m$ y de la velocidad $v$:
$$
E_\mathrm c = \frac{1}{2}mv^2
$$

---

### Energía potencial $E_\mathrm p$
Es la energía que posee un cuerpo debido a su **posición** y/o **configuración**. La energía potencial **gravitatoria** que posee una masa $m$ situada a una altura $h$ sobre la superficie terrestre vale:
$$
E_\mathrm p = m g h,
$$
donde $h\ll R_\mathrm T$ (con $R_\mathrm T$ el radio de la Tierra) y $g$ es el valor de la aceleración de la gravedad.

---

### Energía mecánica $E_\mathrm m$
Es la **suma** de la energía **cinética** $E\_\mathrm{c}$ y la energía **potencial** $E_\mathrm{p}$:
$$
E_\mathrm m = E_\mathrm c + E_\mathrm p
$$

{{% /section %}}

---

{{% section %}}

## Conservación de la energía

(continúa hacia abajo)

👇

---

### Principio de conservación de la energía mecánica
> Cuando sobre un cuerpo actúan únicamente **fuerzas conservativas**, su energía mecánica se conserva.

#### Ejemplos de fuerzas conservativas
Fuerzas gravitatorias, elásticas o electrostáticas.

La fuerza de **rozamiento** es un ejemplo de fuerza **no conservativa** o **disipativa**.

---

### Principio de conservación de la energía
> En cualquier proceso de la naturaleza, la energía **total** permanece constante.

---

#### Ejemplo resuelto
<q>Un carro de 50$\thinspace$kg desliza por una montaña rusa como la de la figura.</q>

{{< figure library="true" src="energia-trabajo-calor-4ESO/montana-rusa.png" lightbox="true" >}}

---

<q>Si en el punto A su velocidad es de 5$\thinspace$m/s y en el punto B es de 3.2$\thinspace$m/s, calcula: <br>
a) La energía mecánica en A y en B. <br>
b) La energía disipada en forma de calor debido a las fuerzas de rozamiento entre los puntos A y B.</q>

---

a) Para calcular la energía mecánica en los puntos A y B utilizamos la expresión:
$$
E_\mathrm m = E_\mathrm c + E_\mathrm p = \frac{1}{2}mv^2 + mgh
$$

---

Tanto en A como en B el carro tiene energía cinética (se mueve a una cierta velocidad) y potencial gravitatoria (está a una cierta altura).

\begin{align*}
\text{Punto A} & \begin{cases}
	v_\mathrm A = 5\thinspace\mathrm{m/s} \\\\
	h_\mathrm A = 30\thinspace\mathrm{m}
\end{cases} \\\\ \\\\
\text{Punto B} & \begin{cases}
	v_\mathrm B = 3.2\thinspace\mathrm{m/s} \\\\
	h_\mathrm B = 20\thinspace\mathrm{m}
\end{cases}
\end{align*}

---

\begin{align*}
E_{\mathrm{m}_\mathrm A} & = \frac{1}{2}mv_\mathrm A^2 + mgh_\mathrm A \\\\
& = \frac{1}{2}\cdot 50\cdot 5^2 + 50\cdot 9.8\cdot 30 \\\\
& = 625 + 14700 = 15325\thinspace\mathrm J
\end{align*}

\begin{align*}
E_{\mathrm{m}_\mathrm B} & = \frac{1}{2}mv_\mathrm B^2 + mgh_\mathrm B \\\\
& = \frac{1}{2}\cdot 50\cdot 3.2^2 + 50\cdot 9.8\cdot 20 \\\\
& = 256 + 9800 = 10056\thinspace\mathrm J
\end{align*}

---

b) La energía perdida por rozamiento (en forma de calor) es igual a la diferencia entre la energía inicial (A) y la final (B):
\begin{align*}
E_\text{disipada} & = E_{\mathrm{m}_\mathrm A} - E_{\mathrm{m}_\mathrm B} \\\\
& = 15325 - 10056 = 5269\thinspace\mathrm J
\end{align*}


---

Puedes aprender más sobre la **conservación** de la **energía** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Intercambio de energía
La energía se puede intercambiar/transferir mediante **trabajo** o **calor**.

(continúa hacia abajo)

👇

---

### Trabajo $W$
El **trabajo** se transfiere cuando entre dos cuerpos se realizan **fuerzas** que provocan desplazamientos o cambios en sus dimensiones.

El trabajo $W$ realizado por una fuerza $\vec F$ constante viene dado por:
$$
W = \vec F\cdot \vec d = F\cdot d \cdot \cos\alpha,
$$
donde $F$ es el módulo de la fuerza aplicada, $d$ el espacio recorrido y $\cos\alpha$ es el coseno del ángulo formado por la fuerza y el desplazamiento.

---

### Calor $Q$
El **calor** se transfiere entre dos cuerpos que tienen **diferente temperatura**, de forma que el calor cedido por el cuerpo a mayor temperatura es igual al calor ganado por el que está a menor temperatura:

$$
Q_\text{cedido} + Q_\text{ganado} = 0
$$

Por razones históricas el calor se mide a menudo en **calorías** ($1\thinspace\mathrm{cal} = 4.18\thinspace\mathrm{J}$).

{{% /section %}}

---

{{% section %}}

## Trabajo y potencia
La **potencia** $P$ es el trabajo $W$ realizado por unidad de tiempo $t$:
$$
P = \frac{W}{t} = \frac{\vec F\cdot \vec d}{t} = \vec F\cdot \vec v
$$

(continúa hacia abajo)

👇

---

En el **SI** la potencia se mide en **vatios** o ***watts*** ($1\thinspace\mathrm W = 1\thinspace\mathrm{J/s}$), siendo el **caballo de vapor** ($1\thinspace\mathrm{CV} \approx 735\thinspace\mathrm{W}$) otra unidad de uso común.

El **kilovatio hora**, $\mathrm{kW}\thinspace\mathrm h$, es una unidad de **energía** muy utilizada en la facturación para la energía entregada a los consumidores por las compañías eléctricas:
$$
1\thinspace\mathrm{kW}\thinspace\mathrm h\cdot \frac{1000\thinspace\mathrm{W}}{1\thinspace\mathrm{kW}}\cdot \frac{3600\thinspace\mathrm{s}}{1\thinspace\mathrm{h}} = 3.6\times 10^6\thinspace\mathrm{W\cdot s} = 3.6\times 10^6\thinspace\mathrm J
$$

---

### Ejemplo resuelto

<q>Los vecinos de un bloque de pisos se han quejado de que su ascensor, con capacidad para 400$\thinspace$kg, es demasiado lento. <br>
a) ¿Qué potencia deberá tener el nuevo motor que se instale para que pueda subir hasta arriba (supongamos 30$\thinspace$m) en 10 segundos?<br>
b) ¿Cuál es la velocidad media del ascensor?</q>

---

a) Para calcular la potencia $P$ utilizamos la expresión:
$$
P = \frac{W}{t},
$$
donde $W$ es el trabajo que ha de realizar el motor y $t$ es el tiempo.

---

La fuerza que debe vencer el ascensor es el peso del propio ascensor (supondremos unos 300$\thinspace$kg) más el peso de las personas que vayan dentro, suponiendo que sube lleno.
\begin{align*}
F &= P_\text{ascensor} + P_\text{personas} \\\\
&= m_\text{ascensor}\cdot g + m_\text{personas}\cdot g \\\\
&= (m_\text{ascensor} + m_\text{personas})\cdot g \\\\
&= (300\thinspace\mathrm{kg} + 400\thinspace\mathrm{kg})\cdot 9.8\thinspace\mathrm{N/kg} \\\\
&= 6860\thinspace\mathrm N
\end{align*}

---

El trabajo $W$ que deberá realizar el motor será:
$$
W = F\cdot h = 6860\thinspace\mathrm N \cdot 30\thinspace\mathrm m = 205800\thinspace\mathrm J
$$

La potencia $P$ será por tanto:
$$
P = \frac{W}{t} = \frac{205800\thinspace\mathrm J}{10\thinspace\mathrm s} = 20580\thinspace\mathrm W
$$

---

b) Podemos calcular la velocidad media del ascensor utilizando la expresión:
$$
v_\mathrm m = \frac{h}{t} = \frac{30\thinspace\mathrm m}{10\thinspace\mathrm s} = 3\thinspace\mathrm{m/s}
$$

Como curiosidad, [el ascensor más rápido del mundo es capaz de viajar a 21$\thinspace$m/s](https://www.bbc.com/mundo/noticias-40219932).

{{% /section %}}
---
title: ¿Qué es el espín?
subtitle: Una explicación a base de física experimental, mecánica cuántica y teoría de grupos
summary: "Una explicación del espín a base de física experimental, mecánica cuántica y teoría de grupos."
breadcrumbs: ["blog"]
date: "2022-05-02T00:00:00+02:00"
authors:
- pilar-palanca
- juan-docon
tags:
- blog
- física-s-xx
- espín
- Stern-Gerlach
- mecánica-cuántica
- teoría-grupos
categories:
- Física
image:
  placement: 3
  caption: ""

math: true
---

{{% callout thread %}}
Entrada basada en el siguiente hilo de Twitter:
<div align="center">
{{< x user="BTeseracto" id="1520085494071238660" >}}
</div>
{{% /callout %}}

Se suele describir al [**espín**](https://es.wikipedia.org/wiki/Esp%C3%ADn) como el [**momento angular**](https://es.wikipedia.org/wiki/Momento_angular) intrínseco de una partícula. Pero las partículas ni son bolitas ni están girando. La explicación requiere de [**física experimental**](https://es.wikipedia.org/wiki/F%C3%ADsica_experimental), [**mecánica cuántica**](https://es.wikipedia.org/wiki/Mecánica_cuántica), [**teoría de grupos**](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_grupos) y muchas ganas. Así que vamos allá ¿Qué es el espín?

## Experimento de Stern y Gerlach

Pongámonos en contexto. Año 1922, una época en la que el desarrollo de la [**mecánica cuántica**](https://es.wikipedia.org/wiki/Mecánica_cuántica) aún estaba en tareas pendientes y a los científicos [**Stern**](https://es.wikipedia.org/wiki/Otto_Stern) y [**Gerlach**](https://es.wikipedia.org/wiki/Walther_Gerlach) les dio por hacer pasar **átomos** de [**plata**](https://es.wikipedia.org/wiki/Plata) a través de un [**campo magnético**](https://es.wikipedia.org/wiki/Campo_magnético) variable:

{{< youtube rg4Fnag4V-E >}}

En ese momento, el modelo atómico prevalente era el de [**Bohr**]({{< ref "/apuntes-segundo-bach-quimica/estructura-materia/index.md#bohr" >}}), que describía los átomos como un núcleo rodeado por electrones que orbitaban a su alrededor en órbitas muy definidas (cuantizadas). Algo similar al [sistema solar](https://es.wikipedia.org/wiki/Sistema_solar). Esto hoy no se da como correcto.

{{< figure src="plata.svg" title="Esquema de los 47 electrones de la plata, distribuidos 2 en el primer nivel y 8, 18, 18 y 1 en los siguientes, respectivamente. Adaptada de https://commons.wikimedia.org/wiki/File:Capa_electr%C3%B3nica_047_Plata.svg." lightbox="false" width="100%" >}}

El átomo de plata tiene 47 electrones, 46 de ellos en sus primeros 4 niveles energéticos, lo que deja al último electrón solo en el siguiente nivel. Clásicamente hablando, esto genera un [**momento dipolar**](https://es.wikipedia.org/wiki/Dipolo_eléctrico#Momento_de_un_dipolo), algo similar a un [**imán**](https://es.wikipedia.org/wiki/Imán).

{{< figure src="electron-iman.jpg" title="Esquema de un electrón orbitando a un protón, a su lado aparece un imán con su lado norte y sur para representar el hecho de que se comportaría como un imán. Fuente: https://imamagnets.com/en/blog/which-is-the-magnetic-moment/." lightbox="true" >}}

Debido a esto, al pasar los átomos a través del campo magnético, este *dipolo* debería interactuar con el campo y desviar su trayectoria en una dirección aleatoria, pues cada átomo tendría una posición diferente. Creando así una distribución uniforme en la pantalla final. Lo que encontraron lo podemos ver en la imagen adjunta, extraída del artículo original de Stern y Gerlach. A la izquierda sin campo magnético, a la derecha con un campo variable no homogéneo. Un resultado que aún no podían explicar, pues no contaban con la mecánica cuántica.

{{< figure src="resultados-Stern-Gerlach.png" title="Resultados del experimento de Stern y Gerlach: se trata de dos muestras, en la de la izquierda el resultado es una línea vertical, y en la de la derecha podría decirse que tiene forma de anillo achatado por los laterales. Fuente: https://www.researchgate.net/figure/Pattern-created-by-a-ray-of-silver-atomes-in-the-original-Stern-Gerlach-experiment-left_fig1_325245608." lightbox="true" >}}

La interpretación a la que pudieron llegar después de años fue que estas partículas debían de tener alguna especie de momento angular interno en alguna clase de espacio interno. Esto explicaría las observaciones. A partir de aquí las cosas se pusieron aún más raras.

Hasta aquí llega lo que quizás hayáis visto otras veces, el espín como momento angular de la partícula. Sonaría muy bien si estas fueran bolitas, pero no es el caso. Podríamos haberlo dejado aquí y no habernos metido en este berenjenal, pero ya puestos, juguemos al juego de ver hasta dónde podemos llegar. Eso sí, no podemos prometer que no duela.

El espín es un efecto puramente cuántico, sin ningún tipo de homólogo clásico y sin nada en nuestra intuición física para apoyarnos. Lo único que tenemos es la mecánica cuántica. Así que ahí es donde nos tenemos que meter. En mecánica cuántica a cada [**observable**](https://es.wikipedia.org/wiki/Observable) le corresponde un operador. En el caso del [**electrón**](https://es.wikipedia.org/wiki/Electrón), tenemos tres observables, que son el espín en los tres ejes de coordenadas (*x*, *y*, *z*). En este caso serán **matrices de dimensión dos**, puesto que hay dos valores posibles que el espín puede tomar, con **12 incógnitas** en total:

$$
S_x = \begin{pmatrix}
S_{x_{11}} & S_{x_{12}} \\\\
S_{x_{21}} & S_{x_{22}}
\end{pmatrix};\quad S_y = \begin{pmatrix}
S_{y_{11}} & S_{y_{12}} \\\\
S_{y_{21}} & S_{y_{22}}
\end{pmatrix};\quad S_z = \begin{pmatrix}
S_{z_{11}} & S_{z_{12}} \\\\
S_{z_{21}} & S_{z_{22}}
\end{pmatrix}
$$

Necesitamos determinar cómo son estas matrices para poder trabajar con el espín en este espacio. Una de ellas es relativamente obvia, pues sabemos por los postulados de la mecánica cuántica que los valores propios de un operador son los resultados posibles de una medida. Esto nos permite determinar una de las matrices, que se suele escoger el operador del espín en la dirección *z*. Con ello tendremos una matriz diagonal con los dos valores posibles del espín. Valores que se han podido medir gracias al [**experimento de Stern y Gerlach**](https://es.wikipedia.org/wiki/Experimento_de_Stern_y_Gerlach):

$$
S_z = \begin{pmatrix}
\dfrac{\hbar}{2} & 0 \\\\
0 & -\dfrac{\hbar}{2}
\end{pmatrix}
$$

donde $\hbar = h/(2\pi)$ es la [**constante de Planck reducida**](https://es.wikipedia.org/wiki/Constante_de_Planck) o constante de Dirac.

¿Qué sabemos de las otras dos? Nada. Lo que sí que sabemos es que las [**matrices de rotación**](https://es.wikipedia.org/wiki/Matriz_de_rotación) en nuestro espacio clásico de toda la vida son las generadoras del momento angular, con lo cual vamos a postular que los operadores de espín están relacionados con ellas:

\begin{align*}
R_x &= \begin{pmatrix}
1 & 0 & 0 \\\\
0 & \cos\phi & -\sin\phi \\\\
0 & \sin\phi & \cos\phi
\end{pmatrix} \\\\
R_y &= \begin{pmatrix}
\cos\phi & 0 & \sin\phi \\\\
0 & 1 & 0 \\\\
-\sin\phi & 0 & \cos\phi
\end{pmatrix} \\\\
R_z &= \begin{pmatrix}
\cos\phi & -\sin\phi & 0 \\\\
\sin\phi & \cos\phi & 0 \\\\
0 & 0 & 1
\end{pmatrix}
\end{align*}

donde $\sin\phi$ y  $\cos\phi$ son el seno y el coseno del ángulo $\phi$ de rotación.

## Teoría de grupos

Como ya hemos dicho, aquí ya no sirve nuestra intuición física. Debemos recurrir a las matemáticas, más concretamente a la [**teoría de grupos**](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_grupos). Pero antes de nada, ¿qué es un [**grupo**](https://es.wikipedia.org/wiki/Grupo_(matemática))? Un grupo es una estructura algebraica formada por un conjunto cualquiera con una ley de composición interna. Una ley de composición interna es una aplicación que asocia una pareja de elementos de un conjunto a un único valor de ese conjunto. El conjunto tiene que cumplir **tres condiciones**:

1. Tiene que ser [**asociativo**](https://es.wikipedia.org/wiki/Asociatividad_(álgebra)), lo que significa que puedes operar en cualquier orden sin cambiar el resultado:
  $$
  x\*(y\*z) = (x\*y)\*z\quad \forall x,y,z\in G
  $$
  donde $*$ representa la aplicación (operación).
2. Que su [**elemento neutro**](https://es.wikipedia.org/wiki/Elemento_neutro) no lo cambie: cualquier elemento del grupo operado por el elemento neutro da como resultado el mismo elemento:
  $$
  e\*x = x\*e = x,
  $$
  donde $e$ es el elemento neutro.
3. Que la aplicación por su [**simétrico**](https://es.wikipedia.org/wiki/Elemento_simétrico) dé el elemento neutro: cualquier elemento del grupo operado por su simétrico da el elemento neutro:
  $$
  x\*x^{-1} = x^{-1}\*x = e,
  $$
  donde $x^{-1}$ es el elemento inverso de $x$.

A modo de ejemplo, el **conjunto** de los **números enteros**, $\mathbb Z$, con la suma (+) como operación, forma un grupo:

- **Asociativo**: puedes coger tres números enteros y sumarlos en el orden que quieras sin cambiar el resultado:
  \begin{align*}
  x+(y+z) &= (x+y)+z \\\\
  5+(7-2) &= (5+7)-2
  \end{align*}
- **Elemento neutro**: cualquier entero más el cero (0) es el mismo número:
  \begin{align*}
  x+0 &= 0+x = x \\\\
  5+0 &= 0+5 = 5
  \end{align*}
- **Elemento simétrico**: cualquier entero más su negativo da cero:
  \begin{align*}
  x+(-x) &= -x+x = 0 \\\\
  5+(-5) &= -5+5 = 0
  \end{align*}

En cambio, el conjunto de los números naturales, $\mathbb N$, con la suma (+), no sería un grupo puesto que no está claro si el 0 es un número natural y además no tiene elementos simétricos que son los números negativos.

El grupo que nos interesa para resolver este problema es el llamado [**SO(3)**](https://es.wikipedia.org/wiki/Grupo_de_rotación_SO(3)), que contiene las rotaciones en un espacio tridimensional sobre el origen de coordenadas. Está relacionado con el grupo [**SU(2)**](https://es.wikipedia.org/wiki/Grupo_unitario_especial#El_grupo_SU(2)), que tiene las matrices que nos interesan, a través de un [**isomorfismo**](https://es.wikipedia.org/wiki/Isomorfismo):

{{< figure src="isomorfismo.svg" lightbox="false" width="100%" theme="light" >}}

La importancia de esto es la relación de [**conmutación**](https://es.wikipedia.org/wiki/Conmutatividad) que cumple este grupo. El conmutador es la multiplicación de los operadores en un orden menos su multiplicación en el orden inverso[^1]:

[^1]: Recordemos: la matriz resultante de A por B no tiene por qué ser igual que la de B por A.

$$
\left[O_1,O_2\right] = O_1O_2-O_2O_1
$$

Si el orden de los factores altera el producto ($O_1O_2 \neq O_2O_1$) el conmutador es no nulo. Y es justamente el caso de estas matrices. A esto lo consideramos la [**relación de conmutación**](https://es.wikipedia.org/wiki/Relaciones_de_conmutación_canónicas) fundamental del momento angular y partimos de la base de que los operadores del espín también cumplirán esta relación de conmutación:

$$
\left[J_i,J_j\right] = i\hbar\epsilon_{ijk}J_k,
$$
donde $\epsilon_{ijk}$ es el [**símbolo de Levi-Civita**](https://es.wikipedia.org/wiki/S%C3%ADmbolo_de_Levi-Civita) que puede tener como valores –1, 0 o +1. En el caso del espín:
\begin{align*}
\left[S_x,S_y\right] &= i\hbar S_z \\\\
\left[S_x,S_z\right] &= -i\hbar S_y \\\\
\left[S_y,S_z\right] &= i\hbar S_x \\\\
\vdots
\end{align*}
lo que nos permite determinar $S_x$ y $S_y$. Por tanto, solo necesitamos encontrar las matrices dos por dos que cumplan estas relaciones. Las tres matrices son estas. Y son lo que necesitamos para poder hacer cálculos con el espín ½:

$$
S_x = \begin{pmatrix}
0 & \dfrac{\hbar}{2} \\\\
\dfrac{\hbar}{2} & 0
\end{pmatrix};\quad S_y = \begin{pmatrix}
0 & -\dfrac{i\hbar}{2} \\\\
\dfrac{i\hbar}{2} & 0
\end{pmatrix};\quad S_z = \begin{pmatrix}
\dfrac{\hbar}{2} & 0 \\\\
0 & -\dfrac{\hbar}{2}
\end{pmatrix}
$$

Como puede verse, los conmutadores entre los diferentes operadores del espín son no nulos, lo que implica que son incompatibles: la medida de uno te rompe la del otro. Igual que pasa con la posición y el momento, es algo que [sucede con frecuencia en mecánica cuántica](https://es.wikipedia.org/wiki/Relación_de_indeterminación_de_Heisenberg).

\begin{align*}
\left[S_x,S_z\right] &= \begin{pmatrix}
0 & \dfrac{\hbar}{2} \\\\
\dfrac{\hbar}{2} & 0
\end{pmatrix}\begin{pmatrix}
\dfrac{\hbar}{2} & 0 \\\\
0 & -\dfrac{\hbar}{2}
\end{pmatrix}-\begin{pmatrix}
\dfrac{\hbar}{2} & 0 \\\\
0 & -\dfrac{\hbar}{2}
\end{pmatrix}\begin{pmatrix}
0 & \dfrac{\hbar}{2} \\\\
\dfrac{\hbar}{2} & 0
\end{pmatrix} \\\\
&= \begin{pmatrix}
0 & -\dfrac{\hbar^2}{4} \\\\
\dfrac{\hbar^2}{4} & 0
\end{pmatrix}-\begin{pmatrix}
0 & \dfrac{\hbar^2}{4} \\\\
-\dfrac{\hbar^2}{4} & 0
\end{pmatrix} = \begin{pmatrix}
0 & -\dfrac{\hbar^2}{2} \\\\
\dfrac{\hbar^2}{2} & 0
\end{pmatrix} \\\\
&= i\hbar\begin{pmatrix}
0 & \dfrac{i\hbar}{2} \\\\
-\dfrac{i\hbar}{2} & 0
\end{pmatrix} = -i\hbar S_y;\text{ puesto que } S_y = \begin{pmatrix}
0 & -\dfrac{i\hbar}{2} \\\\
\dfrac{i\hbar}{2} & 0
\end{pmatrix}
\end{align*}

Estos operadores nos van a describir la rotación del espacio de los espínes y, por tanto, es lo que necesitamos para trabajar con ellos. En el caso del electrón (espín ½) las matrices son dos por dos, si el espín fuese 1 la matriz sería tres por tres, y así sucesivamente.

Si has llegado hasta aquí (gracias) tal vez te preguntes si toda esta explicación era necesaria. Después de darle muchas vueltas hemos creído que sí. Así es como se entiende el espín en mecánica cuántica. No hay ningún tipo de homólogo clásico sobre el que apoyarnos. Las partículas ni son bolitas ni dan vueltas y la forma que tenemos de entender que tengan un momento angular es esta.

## Teoría cuántica de campos

Y podemos ir más allá, porque en última instancia (hasta donde sabemos) las partículas son perturbaciones de campos cuánticos. La [**teoría cuántica de campos**](https://es.wikipedia.org/wiki/Teor%C3%ADa_cuántica_de_campos) es una **teoría cuántica relativista** (con la [especial](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_la_relatividad_especial), no con la [general](https://es.wikipedia.org/wiki/Relatividad_general)). En este marco, el espín aparece de forma natural. De haber contado con la teoría cuántica de campos, podrían haber predicho el resultado del experimento de Stern y Gerlach. Y de aquí podemos extraer el [**teorema de la estadística del espín**](https://es.wikipedia.org/wiki/Teorema_de_la_estad%C3%ADstica_del_esp%C3%ADn). Las partículas con espín fraccionario (1/2, 3/2, ...) siguen la [**estadística de Fermi-Dirac**](https://es.wikipedia.org/wiki/Estad%C3%ADstica_de_Fermi-Dirac), con lo que son [**fermiones**](https://es.wikipedia.org/wiki/Fermión). Las que tienen el espín entero siguen la de [**Bose-Einstein**](https://es.wikipedia.org/wiki/Estad%C3%ADstica_de_Bose-Einstein), son [**bosones**](https://es.wikipedia.org/wiki/Bosón).

El espín lo condiciona todo, desde la química hasta las interacciones fundamentales de la naturaleza. Aunque es puramente cuántico y sin mecánica cuántica no lo podemos describir, sigue siendo una pieza fundamental del universo tal y como lo conocemos.

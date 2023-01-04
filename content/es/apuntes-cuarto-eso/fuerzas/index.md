---
title: Fuerzas
url: "/recursos-fisica-quimica/apuntes/4eso/fuerzas"
subtitle: Leyes de Newton y fuerzas de especial interés
summary: "Leyes de Newton y fuerzas de especial interés."
breadcrumbs: ["recursos-fisica-quimica","apuntes","4eso"]
tags:
- apuntes
- 4º ESO
- fuerzas
categories:
- Física
weight: 7

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Andrea Piacquadio**](https://www.pexels.com/es-es/@olly) en [Pexels](https://www.pexels.com/es-es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: file-download
  name: Póster
  url: fuerzas-poster.pdf

slides: fuerzas-4ESO
---

{{% toc %}}

## Naturaleza vectorial de las fuerzas

Las **fuerzas** son **magnitudes vectoriales**, lo que significa que quedan definidas por un **vector**, del cual hay que definir su:

Módulo
: Longitud del segmento.

Dirección
: Recta que lo contiene.

Sentido
: Dado por la punta de la flecha.

{{< figure library="true" src="fuerzas-4ESO/vector.svg" title="En dos dimensiones, un vector se puede escribir como $\newcommand{\ihat}{\hat{\imath}}\newcommand{\jhat}{\hat{\jmath}}\vec a = a_x \ihat + a_y \jhat$, donde $\ihat$ y $\jhat$ son vectores unitarios ($\text{módulo} = 1$) a lo largo de los ejes $x$ e $y$. El módulo de $\vec a$, $|\vec a|$, se calcula como (teorema de Pitágoras) $|\vec a| = \sqrt{a_x^2+a_y^2}$." lightbox="false" width="100%" >}}

{{% callout note %}}
**Aprende más** sobre la **notación vectorial** [aquí]({{< relref "/post/normas-ortografia-fisica-quimica/index.md#2-notación-vectorial" >}}).
{{% /callout %}}

### Suma o resta de vectores
Gráficamente, dibujando un vector a continuación del otro y uniendo el origen con el punto final:

{{< figure library="true" src="fuerzas-4ESO/suma-vectores.svg" lightbox="false" width="100%" >}}

O analíticamente, componente a componente:
$$
\vec a + \vec b = (a_x+b_x)\ihat + (a_y+b_y)\jhat
$$

Puedes prácticar a sumar vectores con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Leyes de Newton

{{% callout note %}}
Os recomendamos pasaros por la sección de [**Historia de la Ciencia**](https://fisiquimicamente.com/recursos-fisica-quimica/historia-ciencia/) para echar un vistazo a la **biografía** y **principales contribuciones científicas** de **Isaac Newton** en **formato póster** y **tríptico**.
{{% /callout %}}

### 1ª ley (ley de la inercia)
> Todo cuerpo preserva su estado de reposo o movimiento rectilíneo uniforme salvo que actúe una fuerza sobre él.

### 2ª ley (ley fundamental de la dinámica)
> El cambio de movimiento es proporcional a la fuerza ejercida y se hace en la dirección de la línea recta en que se ejerce la fuerza.

Matemáticamente, se escribe como
$$
\sum\vec F = m\vec a\quad \text{(la aceleración es proporcional a la fuerza neta)}
$$

En el SI la fuerza se mide en Newton (N): $1\thinspace\mathrm N = 1\thinspace \mathrm{kg\thinspace m\thinspace s^{-2}}$.

### 3ª ley (ley de la acción-reacción)
> Para toda acción siempre hay una reacción igual y opuesta.

Si un cuerpo A ejerce una fuerza sobre otro cuerpo B, éste ejercerá sobre A una fuerza igual y de sentido contrario ($\vec F_\text{AB} = -\vec F_\text{BA}$).

## Fuerzas de especial interés

### Peso $\vec P$
El **peso** es la fuerza con la que la Tierra atrae a un objeto. Se calcula como:
$$
\vec P = m\vec g,
$$
donde $m$ es la masa del objeto y $\vec g$ es la aceleración de la gravedad. Siempre se dirige hacia el centro de la Tierra (hacia abajo en la mayoría de los casos).

### Normal $\vec N$
También llamada fuerza de **reacción**, se define como la fuerza que ejerce una superficie sobre un cuerpo apoyado sobre ella. Es de igual magnitud y dirección, pero de sentido contrario a la fuerza ejercida por el cuerpo sobre la superficie.

{{< figure library="true" src="fuerzas-4ESO/normal.svg" title="Fuerza normal en a) una superficie horizontal, b) un plano inclinado y c) una superficie vertical." lightbox="false" width="100%" >}}

### Rozamiento $\vec f_\mathrm r$
La **fuerza de rozamiento** es la fuerza que existe entre dos superficies en contacto, oponiéndose siempre al movimiento relativo entre ambas superficies. La fuerza de rozamiento es proporcional a la normal $N$:
$$
f_\mathrm r = \mu N,
$$
donde $\mu$ es el coeficiente de rozamiento[^1].

[^1]: En [esta tabla, tomada de la entrada sobre fricción en la versión inglesa de la Wikipedia](https://en.wikipedia.org/wiki/Friction#Approximate_coefficients_of_friction), puedes ver coeficientes de rozamiento aproximados entre dos materiales dados.

{{< figure library="true" src="fuerzas-4ESO/rozamiento.svg" title="Fuerza de rozamiento en a) una superficie horizontal, b) un plano inclinado y c) una superficie vertical." lightbox="false" width="100%" >}}

Puedes aprender más sobre la naturaleza del rozamiento con esta **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/friction/latest/friction_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

También puedes ver este excelente vídeo del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) donde nos enseñan cómo realizar una **práctica virtual para determinar coeficientes de rozamiento**:

{{< youtube x2vUbOPB1W8 >}}

{{% callout gdrive %}}
[Aquí](https://drive.google.com/file/d/1NrmIRaarKCZvh8VdIhzvRDOAkJSPEwfK/view) puedes descargarte el **guion** de la **práctica**. 
{{% /callout %}}

### Centrípeta $\vec f_\mathrm c$
Se llama **fuerza centrípeta** a la fuerza o a la componente de la fuerza que actúa sobre un objeto en movimiento sobre una trayectoria curvilínea y que está dirigida hacia el centro de curvatura de la trayectoria. Su módulo se calcula a partir de la **aceleración centrípeta**, haciendo uso de la **2ª ley de Newton**:
$$
f_\mathrm c = m a_\mathrm c = m\cdot \frac{v^2}{R} = \frac{mv^2}{R}
$$

## Ejemplo
{{% callout example %}}
<br>

> Un cuerpo baja por un plano inclinado $30^\circ$ con un coeficiente de rozamiento $\mu=0.2$. Calcula la velocidad que llevará y el espacio recorrido al cabo de $5\thinspace\mathrm s$, si inicialmente estaba en reposo.

---

Lo primero hacemos un dibujo representando la situación:

{{< figure library="true" src="fuerzas-4ESO/plano-inclinado.svg" lightbox="false" width="100%" >}}
				
Las **fuerzas** que actúan son:

- Peso $\vec P = -P_x\ihat - P_y\jhat$, donde:
	\begin{align*}
	P_x &= mg\sin\alpha = 9.8m\sin30^\circ = 4.9m\thinspace\mathrm{N} \\\\
	P_y &= mg\cos\alpha = 9.8m\cos30^\circ = 4.9\sqrt{3}m\thinspace\mathrm{N}
	\end{align*}
- Normal $\vec N = N\jhat$
- Fuerza de rozamiento $\vec f_\mathrm r=\mu N\ihat = 0.2N\ihat\thinspace\mathrm{N}$

Escribimos la **2ª ley de Newton** para cada **componente**:
\begin{align}
\text{Componente $x$}&\rightarrow f_\mathrm r - P_x = ma \tag{1} \\\\
\text{Componente $y$}&\rightarrow N-P_y = 0 \tag{2}
\end{align}

Despejando $N=P_y=4.9\sqrt{3}m$ de (2) y sustituyendo en (1), utilizando además que $f_\mathrm r = 0.2 N$ y que $P_x = 4.9m$:
\begin{gather*}		  	
0.2\cdot 4.9\sqrt{3}\cancel{m} - 4.9\cancel{m} = \cancel{m}a \rightarrow a = -3.2\thinspace\mathrm{m/s^2}\\\\
\vec a = -3.2\ihat\thinspace\mathrm{m/s^2}
\end{gather*}

---

La **velocidad** que llevará a los $5\thinspace\mathrm s$ la calculamos con la **ecuación de la velocidad**:
\begin{gather*}		  	
v = v_0 + at = 0 - 3.2\cdot 5 = -16.0\thinspace\mathrm{m/s}\\\\
\vec v = -16.0\ihat\thinspace\mathrm{m/s}
\end{gather*}

---

Para el **espacio recorrido** podemos utilizar la **ecuación del movimiento**:
$$
\Delta x = \left\lvert x - x_0\right\rvert = \left\lvert v_0\cdot t + \frac{1}{2}at^2\right\rvert = \left\lvert 0 - \frac{1}{2}\cdot 3.2\cdot 5^2\right\rvert = 40.0\thinspace\mathrm m
$$
{{% /callout %}}


## Simulación

Puedes seguir aprendiendo más cosas sobre la **relación** entre las **fuerzas** y el **movimiento** con esta **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>
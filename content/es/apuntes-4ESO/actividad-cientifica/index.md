---
title: La actividad científica
subtitle: La investigación científica, magnitudes escalares y vectoriales, análisis dimensional, errores en la medida y  expresión de resultados
summary: "La investigación científica. Magnitudes escalares y vectoriales. Análisis dimensional. Errores en la medida. Expresión de resultados."
tags:
- 4º ESO
- actividad-científica
categories:
- Física
- Química

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Hans Reniers**](https://unsplash.com/@hansreniers) en [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
- icon_pack: fas
  icon: file-download
  name: Póster
  url: actividad-cientifica-poster.pdf
  
slides: 
---

{{% toc %}}

## La investigación científica
La **investigación científica** es el proceso por el cual, mediante la aplicación del **método científico**, se consigue **ampliar** el **conocimiento** o dar **solución** a **problemas científicos**.

{{< spoiler text="¿Sabes en qué consiste un <strong>doctorado</strong> o <strong>Ph.D.</strong> por sus siglas en inglés? Descúbrelo aquí" >}}
Imagina un círculo que contiene todo el conocimiento de la humanidad:
![circulo](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.001.jpg)

Cuando terminas el colegio, sabes un poquito:
![colegio](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.002.jpg)

Cuando terminas el instituto, sabes un poco más:
![instituto](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.003.jpg)

Cuando te gradúas en la universidad, consigues una especialidad:
![grado](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.004.jpg)

Con un máster profundizas en dicha especialidad:
![master](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.005.jpg)

La lectura de literatura científica te lleva hasta la frontera del conocimiento de la humanidad:
![literatura](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.006.jpg)

Una vez en el límite, te centras en un tema específico:
![focus](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.007.jpg)

Empujas el límite durante unos años:
![empuje](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.008.jpg)

Hasta que, un día, el límite cede:
![limite cede](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.009.jpg)

Y esa mella que has hecho se llama doctorado (Ph.D.):
![Ph.D.](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.010.jpg)

Por supuesto, el mundo te parece muy distinto ahora:
![mundo distinto](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.011.jpg)

Pero no olvides tomar perspectiva:
![perspectiva](http://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.012.jpg)

Sigue empujando.

Fuente: https://ictlogy.net/sociedadred/20100818-guia-ilustrada-para-un-doctorado/
{{< /spoiler >}}

### Hipótesis, leyes y teorías
#### Hipótesis
Una **hipótesis científica** es una **propuesta** de **explicación** de un **fenómeno**, comprobable mediante el **método científico**.

#### Ley
Las **leyes científicas** son **enunciados**, basados en experimentos u observaciones repetidas, que **describen** o **predicen** una serie de **fenómenos naturales**.

#### Teoría
Una **teoría científica** es una **explicación** de un **aspecto** del **mundo natural** que puede ser repetidamente **comprobado** y **verificado** en **condiciones controladas**, de acuerdo con el **método científico**.

## Magnitudes escalares y vectoriales
### Magnitudes escalares
Son aquellas **magnitudes** que quedan **descritas** por un **número** (escalar) y una **unidad**.

#### Ejemplos
Masa, volumen, densidad, tiempo, temperatura, energía...

### Magnitudes vectoriales
Son aquellas **magnitudes** que quedan **descritas** por:

- Un **número** (escalar).
- Una **unidad**.
- Una **dirección**.
- Un **sentido**.
- Un **punto** de **aplicación**.

{{< figure library="true" src="actividad-cientifica-4ESO/vector-fuerza.svg" lightbox="false" width="100%" >}}

#### Ejemplos
Posición, desplazamiento, velocidad, aceleración, fuerza...

## Magnitudes fundamentales y derivadas
### Magnitudes fundamentales del SI
El **Sistema Internacional** de **Unidades** (SI) define **siete magnitudes fundamentales**[^1]:

[^1]: El **Sistema Internacional** de **Unidades** (SI) sufrió una revisión en 2018. Puedes leer más sobre ello [**aquí**]({{< ref "/post/actualizacion-unidades/index.md" >}}).

| Magnitud | Unidad | Símbolo |
| -------- | ------ | :-------: | 
| Tiempo   | Segundo | s |
| Longitud | Metro | m |
| Masa | Kilogramo | kg |
| Corriente eléctrica | Amperio | A |
| Temperatura | Kelvin | K |
| Cantidad de sustancia | Mol | mol |
| Intensidad luminosa | Candela | cd |

### Magnitudes derivadas
Las **magnitudes derivadas** se obtienen a partir de dos o más magnitudes fundamentales.

#### Ejemplos		
Superficie, volumen, densidad, velocidad, aceleración, fuerza, presión, energía...

## Análisis dimensional
El **análisis dimensional** nos permite **relacionar** las **dimensiones** (unidades) de una **magnitud derivada** con las de las **magnitudes fundamentales** en las que se basa.

### Ecuación de dimensiones
Las **ecuaciones** de **dimensiones** son expresiones algebraicas en las que sustituimos las magnitudes físicas por sus dimensiones (unidades). Para denotar las dimensiones de una magnitud utilizamos la notación de **corchetes** $[\ ]$. Destacamos:
\begin{align*}
[\text{Masa}] &= \mathsf M \\\\
[\text{Longitud}] &= \mathsf L \\\\
[\text{Tiempo}] &= \mathsf T
\end{align*}
Siempre que trabajemos con ecuaciones de dimensiones trataremos de expresar las dimensiones de las magnitudes físicas que nos encontremos en función de $\mathsf M$, $\mathsf L$ y $\mathsf T$.

#### Ejemplos

$$
[S] = \mathsf{L}^2; [V] = \mathsf{L}^3; [d] = \mathsf{M}\mathsf{L}^{-3};  [v] = \mathsf{L}\mathsf{T}^{-1}; [a] = \mathsf{L}\mathsf{T}^{-2}; [F] = \mathsf{M}\mathsf{L}\mathsf{T}^{-2}
$$

#### Ejemplo resuelto
{{% alert example %}}
<br>

> Demuestra que la energía cinética,
$$
E_\mathrm c = \frac{1}{2} m v^2,
$$
y la energía potencial gravitatoria,
$$
E_\mathrm p = mgh,
$$
tienen las mismas dimensiones, donde $m$ es masa, $v$ es velocidad, $g$ es la aceleración de la gravedad y $h$ es altura.	Utiliza el resultado para definir la unidad de energía en el SI, el julio (J), en función de las unidades de masa, longitud y tiempo del SI.		

---

Analizamos las **dimensiones** de la **energía cinética** $E_\mathrm c$:

$$
\left[E_\mathrm c\right] = 
\left[\frac{1}{2}mv^2\right] = \left[m\right]\cdot \left[v^2\right] = \mathsf{M}\cdot \left[v\right]^2,
$$

donde hemos utilizado que los **números** (escalares) **no tienen dimensiones**.

Necesitamos conocer las **dimensiones** de la **velocidad**:
$$
v = \frac{\Delta x}{\Delta t} \rightarrow \left[v\right] = \frac{\left[\Delta x\right]}{\left[\Delta t\right]} = \frac{\mathsf{L}}{\mathsf{T}} = \mathsf{L}\mathsf{T}^{-1}
$$

Por lo que llegamos a:

$$
\left[E_\mathrm c\right] = \mathsf{M}\left(\mathsf{L}\mathsf{T}^{-1}\right)^2 = \mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}
$$

---

Analizamos ahora las **dimensiones** de la **energía potencial gravitatoria** $E_\mathrm p$:

$$
\left[mgh\right] = \left[m\right]\cdot \left[g\right]\cdot \left[h\right] = \mathsf{M}\cdot\left[g\right]\cdot\mathsf{L}
$$

Necesitamos conocer las **dimensiones** de la **aceleración** $g$:

\begin{align*}
g\equiv a = \frac{\Delta v}{\Delta t} \rightarrow \left[g\right] = \frac{\left[\Delta v\right]}{\left[\Delta t\right]} &= \frac{\mathsf{L}\mathsf{T}^{-1}}{\mathsf{T}} \\\\
&= \mathsf{L}\mathsf{T}^{-2}
\end{align*}

Por lo que llegamos a:

$$
\left[E_\mathrm p\right] = \mathsf{M}\cdot\mathsf{L}\mathsf{T}^{-2}\cdot\mathsf{L} =  \mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}
$$

---

El **julio** (J) por lo tanto queda definido como:

$$
1\thinspace\mathrm J = 1\thinspace\mathrm{kg}\thinspace\mathrm{m^2}\thinspace\mathrm{s^{-2}}
$$

{{% /alert %}}

## Errores en la medida
**Siempre** que se realiza una **medida experimental** con un instrumento, ésta lleva asociada una **incertidumbre**, que hace que sea imposible obtener dos medidas *exactamente* iguales. Los **errores experimentales** son la **diferencia** entre los **valores medidos** y los **valores reales**. Distinguimos entre **errores sistemáticos** y **errores aleatorios**.

### Errores sistemáticos y errores aleatorios
#### Error sistemático
Siempre ocurre, con el mismo valor, cuando usamos el instrumento de la misma manera y en el mismo caso. Es **predecible** y típicamente **constante** o **proporcional** al **valor verdadero**. Suele ser debido a **imperfecciones** del **instrumento** de medida o de los **métodos** de **observación** (incluido el observador). Se puede **detectar** y **eliminar**.

#### Error aleatorio
Error **inevitable** que siempre está presente en cualquier medición. Causado por fluctuaciones inherentemente **impredecibles**. Se puede **estimar** comparando medidas y **reducir** promediando muchas medidas.
### Exactitud y precisión
#### Exactitud
Es la **cercanía** de las **mediciones** al **valor real**. Es una **descripción** de los **errores sistemáticos**.

#### Precisión
Es la **cercanía** de las **mediciones entre sí**. Es una **descripción** de los **errores aleatorios**.

{{< figure library="true" src="actividad-cientifica-4ESO/exactitud-precision.svg" lightbox="false" width="100%" >}}

### Error absoluto y error relativo
#### Error absoluto
Es la **diferencia** entre el **valor real** y el **valor medido**:

$$
\text{error absoluto} = \lvert\text{valor real} - \text{valor medido}\rvert
$$

Tiene las **mismas dimensiones** que la **magnitud medida**.

#### Error relativo
Es el **cociente** entre el **error absoluto** y el **valor real**:

$$
\text{error relativo} = \frac{\text{error absoluto}}{\text{valor real}} = \frac{\lvert\text{valor real} - \text{valor medido}\rvert}{\text{valor real}}
$$

Es **adimensional** (suele expresarse en % multiplicándolo por 100).

## Expresión de resultados
### Ejemplos

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
Siempre que trabajemos con ecuaciones de dimensiones trataremos de expresar las dimensiones de las magnitudes físicas que nos encontremos en función de $\mathsfup M$, $\mathsfup L$ y $\mathsfup T$.

\begin{description}
	\item[Ejemplos] $\mleft[S\mright] = \mathsfup{L}^2; \mleft[V\mright] = \mathsfup{L}^3; \mleft[d\mright] = \mathsfup{M}\mathsfup{L}^{-3};  \mleft[v\mright] = \mathsfup{L}\mathsfup{T}^{-1}; \mleft[a\mright] = \mathsfup{L}\mathsfup{T}^{-2}; \mleft[F\mright] = \mathsfup{M}\mathsfup{L}\mathsfup{T}^{-2}$
\end{description}

## Errores en la medida
### Errores sistemáticos y errores aleatorios
### Exactitud y precisión
#### Exactitud
#### Precisión
### Error absoluto y error relativo
#### Error absoluto
#### Error relativo

## Expresión de resultados
### Ejemplos

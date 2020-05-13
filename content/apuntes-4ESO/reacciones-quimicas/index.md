---
title: Reacciones químicas
subtitle: Ajuste de ecuaciones químicas, cálculos masa-masa y cálculos masa-volumen
summary: Ajuste de ecuaciones químicas, cálculos masa-masa y cálculos masa-volumen.
tags:
- 4º ESO
- reacciones-químicas
categories:
- Química

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Alex Kondratiev**](https://unsplash.com/@alexanderkondratiev) en [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
- icon_pack: fas
  icon: download
  name: PDF Texto
  url: reacciones-quimicas-texto.pdf
  
- icon_pack: fas
  icon: download
  name: PDF Póster
  url: reacciones-quimicas-poster.pdf  

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: 
---

{{% toc %}}

## Ajuste de ecuaciones químicas

La **ley de conservación de la masa** implica dos **principios**:

1. El número total de átomos antes y después de una reacción no cambia.
2. El número de átomos de cada tipo es igual antes y después.

En una **ecuación química** general:		

$$
\ce{aA + bB -> cC + dD}
$$

- A, B, C y D representan los **símbolos químicos** de los átomos o la **fórmula molecular** de los compuestos que reaccionan (lado izquierdo) y los que se producen (lado derecho).
- $a$, $b$, $c$ y $d$ representan los **coeficientes estequiométricos**, que deben ser ajustados según la **ley de conservación de la masa** (comparando de izquierda a derecha átomo por átomo el número que hay de estos a cada lado de la flecha).

Los **coeficientes estequiométricos** indican el número de átomos/moléculas/**moles** que reaccionan/se producen de cada elemento/compuesto.

{{% alert example %}}
<span style="font-variant:small-caps;">**ejemplo**</span> <br>
> Se desea ajustar la siguiente ecuación química:
$$
\ce{MnO2 + HCl -> MnCl2 + Cl2 + H2O}
$$

En el ejemplo se comienza por el $\ce{Mn}$: vemos que a la izquierda hay 1 átomo de $\ce{Mn}$ y a la derecha hay también 1 átomo, está **ajustado**.

Después miramos el $\ce{O}$: vemos que a la izquierda hay dos átomos de $\ce{O}$ y a la derecha solo hay 1. Por tanto debemos poner un 2 en la molécula de agua:

$$
\ce{MnO2 + HCl -> MnCl2 + Cl2 + 2H2O}
$$

Seguimos con el $\ce{H}$: a la izquierda hay 1 solo átomo mientras que a la derecha hay $2\times 2=4$ átomos. Por lo tanto debemos colocar un 4 en el $\ce{HCl}$:

$$
\ce{MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O}
$$

Finalmente el $\ce{Cl}$: como hemos puesto 4 moléculas de $\ce{HCl}$ hay 4 átomos de $\ce{Cl}$ a la izquierda, a la derecha hay 2 átomos de la molécula de cloruro de manganeso (II) y 2 átomos más de la molécula de cloro, 4 en total, con lo que está **ajustado** y no tenemos que poner nada más.

La **reacción ajustada** queda así:

$$
\ce{MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O}
$$

{{% /alert %}}

## Cálculos masa-masa

Se trata de situaciones en las que nos dan la masa (típicamente en g) de un compuesto químico y nos piden la masa (también en g) de otro compuesto químico.

Seguimos estos **tres pasos**:

1. **Pasar de g a mol** utilizando la **masa molar**.
2. **Relacionar moles** de un compuesto con moles de otro, a partir de los **coeficientes estequiométricos**.
3. **Pasar de mol a g** utilizando la **masa molar**.
	
{{% alert example %}}
<span style="font-variant:small-caps;">**ejemplo**</span> <br>
> El clorato de potasio, $\ce{KClO3}$, se descompone en cloruro de potasio, $\ce{KCl}$, y oxígeno. Calcula la masa de oxígeno que se obtiene al descomponerse $86.8\thinspace\mathrm g$ de clorato de potasio por la acción del calor. <br>
$M(\ce{K}) = 39.1\thinspace\mathrm{g/mol}$; $M(\ce{Cl}) = 35.5\thinspace\mathrm{g/mol}$; $M(\ce{O}) = 16\thinspace\mathrm{g/mol}$.

Escribimos la **ecuación química** de la descomposición:
$$
\ce{KClO3 -> KCl + O2}
$$

La **ajustamos**:
$$
\ce{2KClO3 -> 2KCl + 3O2}
$$

Calculamos las **masas molares** de todos los compuestos químicos involucrados, en este caso el $\ce{KClO3}$ y el $\ce{O2}$:
\begin{align*}
	M(\ce{KClO3}) &= M(\ce{K}) + M(\ce{Cl}) + 3\cdot M(\ce{O}) \\\\
	&= 39.1\thinspace\mathrm{g/mol} + 35.5\thinspace\mathrm{g/mol} + 3\cdot 16\thinspace\mathrm{g/mol} = 122.6\thinspace\mathrm{g/mol} \\\\
	M(\ce{O2}) &= 2\cdot M(\ce{O}) = 2\cdot 16\thinspace\mathrm{g/mol} = 32\thinspace\mathrm{g/mol}
\end{align*}			

Para relacionar los gramos de clorato de potasio con los gramos de oxígeno utilizamos los tres pasos del **cálculo masa-masa**:
$$
86.8\thinspace\mathrm{\cancel{g_{\ce{KClO3}}}}\cdot 
$$
{{% /alert %}}	

## Cálculos masa-volumen

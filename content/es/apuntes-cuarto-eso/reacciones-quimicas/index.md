---
title: Reacciones químicas
url: "/recursos-fisica-quimica/apuntes/4eso/reacciones-quimicas"
subtitle: Ajuste de ecuaciones químicas y cálculos estequiométricos
summary: Ajuste de ecuaciones químicas, cálculos masa-masa y cálculos masa-volumen.
breadcrumbs: ["recursos-fisica-quimica","apuntes","4eso"]
authors:
- rodrigo-alcaraz-de-la-osa
- alba-lopez-valenzuela
tags:
- apuntes
- 4º ESO
- reacciones-químicas
categories:
- Química
weight: 5

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Alex Kondratiev**](https://unsplash.com/@alexkondratiev) en [Unsplash](https://unsplash.com)
  focal_point: Smart

links:  
- icon_pack: fas
  icon: 
  name: 📜 Póster
  url: reacciones-quimicas-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Ejercicios
  url: reacciones-quimicas-ejercicios.pdf

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.

slides: reacciones-quimicas-4ESO

math: true
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

Los **coeficientes estequiométricos** indican el número de átomos/moléculas/**moles** que reaccionan/se producen de cada elemento/compuesto (o volumen si las sustancias intervinientes son gases en las mismas condiciones de presión y temperatura).

### Ejemplo
{{% callout example %}}
<br>

> Se desea ajustar la siguiente ecuación química:
$$
\ce{MnO2 + HCl -> MnCl2 + Cl2 + H2O}
$$

---

Comenzamos por el $\ce{Mn}$: vemos que a la izquierda hay 1 átomo de $\ce{Mn}$ y a la derecha hay también 1 átomo, está **ajustado**.

---

Después miramos el $\ce{O}$: vemos que a la izquierda hay 2 átomos de $\ce{O}$ y a la derecha solo hay 1. Por tanto debemos poner un 2 en la molécula de agua:

$$
\ce{MnO2 + HCl -> MnCl2 + Cl2 + 2H2O}
$$

---

Seguimos con el $\ce{H}$: a la izquierda hay 1 solo átomo mientras que a la derecha hay $2\times 2=4$ átomos. Por lo tanto debemos colocar un 4 en el $\ce{HCl}$:

$$
\ce{MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O}
$$

---

Finalmente el $\ce{Cl}$: como hemos puesto 4 moléculas de $\ce{HCl}$ hay 4 átomos de $\ce{Cl}$ a la izquierda, a la derecha hay 2 átomos de la molécula de cloruro de manganeso(II) y 2 átomos más de la molécula de cloro, 4 en total, con lo que está **ajustado** y no tenemos que poner nada más.

---

La **reacción ajustada** queda así:

$$
\ce{MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O}
$$

{{% /callout %}}

Puedes practicar más el **ajuste** de **ecuaciones químicas** con estas **simulaciones**:

<iframe src="https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

<iframe src="https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Cálculos masa-masa

Se trata de situaciones en las que nos dan la masa (típicamente en g) de un compuesto químico y nos piden la masa (también en g) de otro compuesto químico.

Seguimos estos **tres pasos**:

1. **Pasar de g a mol** utilizando la **masa molar**.
2. **Relacionar moles** de un compuesto con moles de otro, a partir de los **coeficientes estequiométricos**.
3. **Pasar de mol a g** utilizando la **masa molar**.
	
### Ejemplo
{{% callout example %}}
<br>

> El clorato de potasio, $\ce{KClO3}$, se descompone en cloruro de potasio, $\ce{KCl}$, y oxígeno. Calcula la masa de oxígeno que se obtiene al descomponerse $86.8\thinspace\mathrm g$ de clorato de potasio por la acción del calor.
$M(\ce{K}) = 39.1\thinspace\mathrm{g/mol}$; $M(\ce{Cl}) = 35.5\thinspace\mathrm{g/mol}$; $M(\ce{O}) = 16\thinspace\mathrm{g/mol}$.

---

Escribimos la **ecuación química** de la descomposición:
$$
\ce{KClO3 -> KCl + O2}
$$

---

La **ajustamos**:
$$
\ce{2KClO3 -> 2KCl + 3O2}
$$

---

Calculamos las **masas molares** de todos los compuestos químicos involucrados, en este caso el $\ce{KClO3}$ y el $\ce{O2}$:
\begin{align*}
	M(\ce{KClO3}) &= M(\ce{K}) + M(\ce{Cl}) + 3\cdot M(\ce{O}) \\\\
	&= 39.1\thinspace\mathrm{g/mol} + 35.5\thinspace\mathrm{g/mol} + 3\cdot 16\thinspace\mathrm{g/mol} = 122.6\thinspace\mathrm{g/mol} \\\\
	M(\ce{O2}) &= 2\cdot M(\ce{O}) = 2\cdot 16\thinspace\mathrm{g/mol} = 32\thinspace\mathrm{g/mol}
\end{align*}

---

Para relacionar los gramos de clorato de potasio con los gramos de oxígeno utilizamos los tres pasos del **cálculo masa-masa**:
$$
86.8\thinspace\mathrm{\cancel{g_{\ce{KClO3}}}}\cdot \frac{1\thinspace\mathrm{\cancel{mol_{\ce{KClO3}}}}}{122.6\thinspace\mathrm{\cancel{g_{\ce{KClO3}}}}}\cdot \frac{3\thinspace\mathrm{\cancel{mol_{\ce{O2}}}}}{2\thinspace\mathrm{\cancel{mol_{\ce{KClO3}}}}}\cdot \frac{32\thinspace\mathrm{g_{\ce{O2}}}}{1\thinspace\mathrm{\cancel{mol_{\ce{O2}}}}} = 34.0\thinspace\mathrm{g_\ce{O2}}
$$
{{% /callout %}}

## Reactivos en disolución
Cuando los **reactivos** se encuentran en **disolución**, tenemos que relacionar el número de moles, $n$, con el volumen, $V$, a través de la concentración molar o **molaridad**:

$$
c = \frac{n}{V}	\rightarrow n = cV\quad \text{($V$ en L)}
$$

Puedes aprender más con esta excelente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/molarity/latest/molarity_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Ejemplo
{{% callout example %}}
<br>

> El ácido clorhídrico reacciona con el hidróxido de calcio para producir cloruro de calcio y agua. Calcula el volumen de ácido clorhídrico 0.25 M que se necesita para reaccionar con 50 mL de hidróxido de calcio 0.5 M.
$$
\ce{2HCl(ac) + Ca(OH)2(ac) -> CaCl2(ac) +  2H2O(l)}
$$

---

\begin{align*}
50\thinspace\mathrm{\cancel{mL_{\ce{Ca(OH)2}}}} & \cdot \frac{1\thinspace\mathrm{\cancel{L_{\ce{Ca(OH)2}}}}}{1000\thinspace\mathrm{\cancel{mL_{\ce{Ca(OH)2}}}}} \cdot \frac{0.5\thinspace\mathrm{\cancel{mol_{\ce{Ca(OH)2}}}}}{1\thinspace\mathrm{\cancel{L_{\ce{Ca(OH)2}}}}} \\\\
& \cdot \frac{2\thinspace\mathrm{\cancel{mol_{\ce{HCl}}}}}{1\thinspace\mathrm{\cancel{mol_{\ce{Ca(OH)2}}}}}\cdot \frac{1\thinspace\mathrm{L_{\ce{HCl}}}}{0.25\thinspace\mathrm{\cancel{mol_{\ce{HCl}}}}} = 0.2\thinspace\mathrm{L_{\ce{HCl}}}
\end{align*}
{{% /callout %}}

## Cálculos masa-volumen
### Ecuación de los gases ideales
Cuando alguno de los compuestos que intervienen en la reacción es un **gas**, necesitamos hacer uso de la **ecuación de los gases ideales**:

$$
pV = nRT
$$

- $p$ es la **presión** a la que se encuentra el gas, medida en atm.
- $V$ es el volumen que ocupa el gas, medido en L.
- $n$ es el **número de moles** que tenemos del gas, que lo podemos relacionar con los gramos a través de la **masa molar**.
- $R=0.082\thinspace\frac{\mathrm{atm\thinspace L}}{\mathrm{mol\thinspace K}}$ es la **constante universal de los gases ideales**[^1].
- $T$ es la **temperatura** a la que se encuentra el gas, medida en K:
	$$
	T(\mathrm K) = T(^\circ\mathrm C) + 273
	$$

[^1]: En caso de trabajar en el SI, la constante de los gases ideales toma el valor $R=8.314\thinspace\frac{\mathrm{J}}{\mathrm{mol\thinspace K}} = 8.314\thinspace\frac{\mathrm{kPa\thinspace L}}{\mathrm{mol\thinspace K}}$.

### Ejemplo
{{% callout example %}}
<br>

> Calcula el volumen de hidrógeno, medido a $25\thinspace\mathrm{^\circ\mathrm C}$ y $0.98\thinspace\mathrm{atm}$, que se desprende al hacer reaccionar $41.4\thinspace\mathrm g$ de sodio en agua:
$$
\ce{2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)}
$$
$M(\ce{Na}) = 23\thinspace\mathrm{g/mol}$; $M(\ce{H}) = 1\thinspace\mathrm{g/mol}$; $M(\ce{O}) = 16\thinspace\mathrm{g/mol}$.

---

La ecuación nos la dan ya **escrita** y **ajustada**. Notar las letras entre paréntesis, que indican el **estado de agregación** de cada compuesto químico:

- (s) $\rightarrow$ **sólido**
- (l) $\rightarrow$ **líquido**
- (g) $\rightarrow$ **gas**
- (aq) $\rightarrow$ en **disolución acuosa** (*aqueous* en inglés)

---

Calculamos lo primero las **masas molares** de los compuestos involucrados:	
\begin{align*}
	M(\ce{Na}) &= 23\thinspace\mathrm{g/mol}\text{ (me lo daban como dato)} \\\\		
	M(\ce{H2}) &= 2\cdot M(\ce{H}) = 2\cdot 1\thinspace\mathrm{g/mol} = 2\thinspace\mathrm{g/mol}
\end{align*}

---

A partir de los gramos de $\ce{Na}$ calculamos los moles de $\ce{H2}$ que se desprenderán, utilizando los dos primeros pasos del **cálculo masa-masa**:

$$
41.4\thinspace\mathrm{\cancel{g_{\ce{Na}}}}\cdot \frac{1\thinspace\mathrm{\cancel{mol_{\ce{Na}}}}}{23\thinspace\mathrm{\cancel{g_{\ce{Na}}}}}\cdot \frac{1\thinspace\mathrm{mol_{\ce{H2}}}}{2\thinspace\mathrm{\cancel{mol_{\ce{Na}}}}} = 0.9\thinspace\mathrm{mol_\ce{H2}}
$$

---

Para relacionar la cantidad de hidrógeno que se desprende (medida en mol) con el volumen (medido en L), utilizamos la **ecuación de los gases ideales**:
$$
pV = nRT
$$

Cuidado porque la temperatura $T$ la tenemos que pasar a K:
\begin{align*}
T(\mathrm K) &= T(^\circ\mathrm C) + 273 \\\\
&= 25\thinspace ^\circ\mathrm C + 273 = 298\thinspace\mathrm K
\end{align*}

Despejamos el volumen $V$:
$$
V = \frac{nRT}{p} = \frac{0.9\thinspace\mathrm{\cancel{mol}} \cdot 0.082\thinspace\frac{\mathrm{\cancel{atm}\thinspace L}}{\mathrm{\cancel{mol}\thinspace \cancel{K}}}\cdot 298\thinspace\mathrm{\cancel{K}}}{0.98\thinspace\mathrm{\cancel{atm}}} = 22.4\thinspace\mathrm{L_\ce{H2}}
$$	
{{% /callout %}}

## Práctica virtual
Te recomendamos ver este precioso vídeo/corto-documental del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) donde se plantea, de modo cualitativo, una secuencia de cinco reacciones químicas que partiendo de cobre, entre otros metales, desemboca de nuevo en este metal:

{{< youtube KFcRVAjuxAM >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1wsDhdlJNQKB2VvzHSoMPOMhqPSKEyVP0/view) puedes descargarte el **guion** de la **práctica**. 
{{% /callout %}}

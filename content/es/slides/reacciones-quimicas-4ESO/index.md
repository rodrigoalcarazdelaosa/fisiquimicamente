---
title: Reacciones químicas
summary: Ajuste de ecuaciones químicas, cálculos masa-masa y cálculos masa-volumen.

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Reacciones químicas

- [Ajuste de ecuaciones químicas](#/1)
- [Cálculos masa-masa](#/2)
- [Cálculos masa-volumen](#/3)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

{{% section %}}

## Ajuste de ecuaciones químicas

La **ley de conservación de la masa** implica dos **principios**:

1. El número total de átomos antes y después de una reacción no cambia.
2. El número de átomos de cada tipo es igual antes y después.

---

En una **ecuación química** general:

$$
a\mathrm A + b\mathrm B \longrightarrow c\mathrm C + d\mathrm D
$$

---

- A, B, C y D representan los **símbolos químicos** de los átomos o la **fórmula molecular** de los compuestos que reaccionan (lado izquierdo) y los que se producen (lado derecho).

---

- $a$, $b$, $c$ y $d$ representan los **coeficientes estequiométricos**, que deben ser ajustados según la **ley de conservación de la masa** (comparando de izquierda a derecha átomo por átomo el número que hay de estos a cada lado de la flecha).

---

Los **coeficientes estequiométricos** indican el número de átomos/moléculas/**moles** que reaccionan/se producen de cada elemento/compuesto.

---

### Ejemplo
<q>Se desea ajustar la siguiente ecuación química:
$$
\mathrm{MnO_2} + \mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + \mathrm{H_2O}
$$</q>

---

Comenzamos por el Mn: vemos que a la izquierda hay 1 átomo de Mn y a la derecha hay también 1 átomo, está **ajustado**.

---

Después miramos el O: vemos que a la izquierda hay 2 átomos de O y a la derecha solo hay 1. Por tanto debemos poner un 2 en la molécula de agua:

$$
\mathrm{MnO_2} + \mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + 2\thinspace\mathrm{H_2O}
$$

---

Seguimos con el H: a la izquierda hay 1 solo átomo mientras que a la derecha hay $2\times 2=4$ átomos. Por lo tanto debemos colocar un 4 en el HCl:

$$
\mathrm{MnO_2} + 4\thinspace\mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + 2\thinspace\mathrm{H_2O}
$$

---

Finalmente el Cl: como hemos puesto 4 moléculas de HCl hay 4 átomos de Cl a la izquierda, a la derecha hay 2 átomos de la molécula de cloruro de manganeso(II) y 2 átomos más de la molécula de cloro, 4 en total, con lo que está **ajustado** y no tenemos que poner nada más.

---

La **reacción ajustada** queda así:

$$
\mathrm{MnO_2} + 4\thinspace\mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + 2\thinspace\mathrm{H_2O}
$$

---

Puedes practicar más el **ajuste** de **ecuaciones químicas** con estas **simulaciones**:

<iframe src="https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

<iframe src="https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Cálculos masa-masa

Se trata de situaciones en las que nos dan la masa (típicamente en g) de un compuesto químico y nos piden la masa (también en g) de otro compuesto químico.

---

Seguimos estos **tres pasos**:

1. **Pasar de g a mol** utilizando la **masa molar**.
2. **Relacionar moles** de un compuesto con moles de otro, a partir de los **coeficientes estequiométricos**.
3. **Pasar de mol a g** utilizando la **masa molar**.

---
	
### Ejemplo
<q>El clorato de potasio, $\ce{KClO3}$, se descompone en cloruro de potasio, $\ce{KCl}$, y oxígeno. Calcula la masa de oxígeno que se obtiene al descomponerse $86.8\thinspace\mathrm g$ de clorato de potasio por la acción del calor.
$M(\ce{K}) = 39.1\thinspace\mathrm{g/mol}$; $M(\ce{Cl}) = 35.5\thinspace\mathrm{g/mol}$; $M(\ce{O}) = 16\thinspace\mathrm{g/mol}$.</q>

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

{{% /section %}}
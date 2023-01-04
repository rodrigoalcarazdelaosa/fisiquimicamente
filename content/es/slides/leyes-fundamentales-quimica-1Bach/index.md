---
title: Leyes fundamentales de la Química
summary: "Leyes ponderales y leyes de los gases ideales."
url: "/recursos-fisica-quimica/apuntes/1bach/leyes-fundamentales-quimica/diapositivas"

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style:

  reveal_options:
    hash: true
---

<section data-background-image="/media/logo-diapositivas.svg, qrcode.svg" data-background-size="10%" data-background-position="3.629% 5%, 96.371% 5%">

<h1 style="font-size: 2em"> Leyes fundamentales<br>de la Química </h1>

- [Ley de conservación de la masa](#/1)
- [Ley de las proporciones definidas o ley de Proust](#/2)
- [Ley de las proporciones múltiples o ley de Dalton](#/3)
- [Ley de los volúmenes de combinación o ley de Gay-Lussac](#/4)
- [Hipótesis de Avogadro](#/5)
- [Gases ideales](#/6)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](#/PDF)

</section>

---

{{% section %}}

## Ley de conservación de la masa

También **ley de Lomonósov-Lavoisier**, ya que fue enunciada independientemente por Mijaíl Lomonósov en 1748 y por Antoine Lavoisier en 1785:
		
> En un sistema aislado, durante toda reacción química ordinaria, la masa total en el sistema permanece constante, es decir, la masa consumida de los reactivos es igual a la masa de los productos obtenidos.

---

{{< figure library="true" src="reacciones-quimicas-2ESO-3ESO/combustion-metano.svg" title="Reacción de **combustión** del **metano**, donde cuatro átomos de hidrógeno, cuatro átomos de oxígeno y uno de carbono están presentes antes y después de la reacción. La masa total después de la reacción es la misma que antes de la reacción." lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}
	
## Ley de las proporciones definidas o ley de Proust

Enunciada por Louis Proust en 1799:

> Cuando se combinan dos o más elementos para dar un determinado compuesto, siempre lo hacen en una relación constante de masas.

---

{{< figure library="true" src="leyes-fundamentales-quimica-1Bach/ley-proporciones-definidas.svg" lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}
	
## Ley de las proporciones múltiples o ley de Dalton

Enunciada por John Dalton en 1803:

> Cuando dos o más elementos se combinan para dar más de un compuesto, una cantidad fija de uno de ellos se combina con cantidades variables del otro, en una relación de números enteros sencillos.

---

{{< figure library="true" src="leyes-fundamentales-quimica-1Bach/ley-proporciones-multiples.svg" lightbox="false" width="75%" >}}

{{% /section %}}

---

{{% section %}}

## Ley de los volúmenes de combinación o ley de Gay-Lussac
		
Enunciada por Gay-Lussac en 1808:

> Cuando los gases se combinan a temperatura y presión constantes, los volúmenes implicados están siempre en la relación de números enteros simples.

{{% /section %}}

---

{{% section %}}

## Hipótesis de Avogadro

Tras introducir el concepto de **molécula** como la partícula integrante de los gases, en 1812 Avogadro formuló la ley que lleva su nombre:

> Volúmenes iguales de cualquier gas, medidos a la misma temperatura y presión, contienen el mismo número de moléculas.

---

### Mol

Tras la [última redefinición del Sistema Internacional (SI)]({{< relref "/post/actualizacion-unidades" >}}), el **mol** se define como:

> La [cantidad de sustancia]({{< relref "/post/normas-ortografia-fisica-quimica/index.md#8-cantidad-de-sustancia" >}}) de un sistema que contiene $6.02214076\times 10^{23}$ entidades elementales (átomos, moléculas, iones, electrones, etc.) especificadas.

{{% /section %}}

---

{{% section %}}
			
## Gases ideales

{{< figure library="true" src="leyes-fundamentales-quimica-1Bach/ley-gases-ideales.svg" lightbox="false" width="100%" >}}

---

### Densidad de un gas ideal

A partir de la ecuación de los gases ideales:
$$
pV = nRT = \frac{m}{M}\cdot RT \Rightarrow p = \frac{m}{V}\frac{RT}{M} = d\cdot \frac{RT}{M}
$$
$$
d = \frac{pM}{RT}\quad\mathrm{o}\quad M = \frac{dRT}{p},
$$
donde $M$ es la masa molar del gas.

---

### Ley de las presiones parciales o ley de Dalton

Enunciada por John Dalton en 1802:
		
> En una mezcla de gases que no reaccionan, la presión total ejercida es igual a la suma de las presiones parciales que ejercerían los gases individuales si ocuparan ellos solos todo el volumen de la mezcla.

---

$$
p_\mathrm t = \sum_{i=1}^{n} p_i = p_1 + p_2 + p_3 + \dots + p_n,
$$		
donde $p_i$ representa la **presión parcial** del gas $i$:
$$
p_i = \chi_i\cdot p_\mathrm t,
$$
donde $\chi_i = n_i/n_\mathrm t$ es la **fracción molar** del gas $i$.

---

{{< figure library="true" src="leyes-fundamentales-quimica-1Bach/ley-presiones-parciales.svg" lightbox="false" width="100%" >}}

---

### Simulación

Si quieres aprender más sobre las **propiedades** de los **gases** te recomendamos esta excelente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

{{< icon name="download" pack="fas" >}} Pincha [**aquí**](?print-pdf#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>
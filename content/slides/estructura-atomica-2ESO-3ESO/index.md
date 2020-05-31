---
title: Estructura atómica
summary: "Teoría atómica de Dalton, modelos atómicos, iones e isótopos."

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Estructura atómica

- [Teoría atómica de Dalton](#/1)
- [El átomo](#/2)
- [Modelos atómicos](#/3)
- [Iones e isótopos](#/4)
- [Masa atómica](#/5)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](estructura-materia-diapositivas.pdf)

---

{{% section %}}

## Teoría atómica de Dalton

En 1808, John Dalton retoma las ideas *atomistas* de Leucipo y su discípulo Demócrito. Su **teoría** se basa en:

(continúa hacia abajo)

👇

---

<ul>
	{{% fragment %}} <li>La <strong>materia</strong> está <strong>formada</strong> por partículas muy pequeñas e indivisibles, llamadas <strong>átomos</strong>.</li> {{% /fragment %}}
	{{% fragment %}} <li>Los <strong>átomos</strong> de un <strong>mismo elemento químico</strong> son todos <strong>iguales</strong> entre sí, y distintos de los de otro elemento químico.</li> {{% /fragment %}}
	{{% fragment %}} <li>Los <strong>compuestos químicos</strong> se forman por la <strong>unión</strong> de dos o más <strong>átomos</strong> según una relación numérica sencilla y constante.</li> {{% /fragment %}}
</ul>

{{% /section %}}

---

{{% section %}}

## El átomo

En la actualidad sabemos que los átomos están compuestos por:

(continúa hacia abajo)

👇

---

### Núcleo
Donde se encuentran los: 

- **Protones**: partículas con **carga** eléctrica **positiva**.
- **Neutrones**: partículas **neutras** (sin carga eléctrica).

---

### Corteza electrónica
Donde se encuentran los **electrones** (partículas con **carga** eléctrica **negativa**).

---

La siguiente tabla muestra la masa y carga de las partículas que componen los átomos:

| Partícula | Masa/kg | Carga/C |
| --- | :---: | :---: |
| Protón | $1.673\times 10^{-27}$ | $1.602\times 10^{-19}$ |
| Neutrón | $1.675\times 10^{-27}$ | $0$ |
| Electrón | $9.109\times 10^{-31}$ | $-1.602\times 10^{-19}$ |
<td colspan=3>$m_\text{protón}\simeq m_\text{neutrón}\sim 2000m_\text{electrón}$<br>	
<td colspan=3>$q_\text{protón}=-q_\text{electrón}$

---

{{< figure library="true" src="estructura-atomica-2ESO-3ESO/atomo-C.png" title="Representación de un átomo neutro de carbono-11 ($^{11}_6 \mathrm{C}$), con un núcleo con 6 protones (rojos) y 5 neutrones (azules), y 6 electrones en su corteza. Imagen de [burlesonmatthew](https://pixabay.com/es/users/burlesonmatthew-3904514/) en [Pixabay](https://pixabay.com/es/)." lightbox="false" width="50%">}}

---

### Número atómico $Z$
El **número atómico**, $Z$, es el número de **protones** que tiene un átomo en su núcleo.

Todos los **átomos** de un **mismo elemento químico** tienen el **mismo número** de **protones** en su núcleo y por tanto el **mismo número atómico** $Z$.

---

### Número másico $A$
El **número másico**, $A$, es la **suma** de **protones** y **neutrones**, cumpliéndose por tanto:		
$$
A = Z + N,
$$
donde $N=A-Z$ es el número de neutrones.
En general un átomo se representa con la siguiente **notación**:
$$
^{A}_{Z}\mathrm X^{\mathrm c \pm},
$$
donde $A$ es el número másico, $Z$ es el número atómico, $\mathrm{X}$ es el símbolo del elemento químico y $\mathrm c$ es la carga eléctrica del átomo (se omite en caso de ser cero ---átomo neutro).

{{% /section %}}

---

{{% section %}}

## Estados de agregación

- [Sólido](#/3/2)
- [Líquido](#/3/3)
- [Gaseoso](#/3/4)
- [Cambios de estado](#/3/5)

(continúa hacia abajo)

👇

---

Los tres principales **estados de agregación** en los que podemos encontrar a la materia son:

---

### Sólido
- Volumen y forma fijos.
- No se pueden comprimir.
- No fluyen por sí mismos.

---

### Líquido
- Volumen fijo, forma variable.
- Poco compresibles.
- Pueden fluir.

---

### Gaseoso
- Volumen y forma variables.
- Se comprimen.
- Fluyen fácilmente.

---

### Cambios de estado
La materia puede **cambiar** de **estado** al **variar** la **presión** o **temperatura**, permaneciendo su masa constante mientras que su volumen varía.

---

{{< figure library="true" src="materia-2ESO-3ESO/cambios-estado.png" lightbox="false" >}}

---

Además, **durante** un **cambio** de **estado** la **temperatura** permance **constante**, como se muestra en la siguiente curva de calentamiento de una sustancia pura:

---

{{< figure library="true" src="materia-2ESO-3ESO/grafica-calentamiento.png" lightbox="false" >}}

---

Las **temperaturas** (o puntos) de **fusión** y **ebullición** (ambas aumentan con la presión) son, al igual que la densidad, **propiedades características** de la materia.

{{% /section %}}

---

{{% section %}}

## Modelo cinético-molecular

- [Postulados](#/4/1)
- [Explicación de los estados de agregación](#/4/2)
- [Simulación](#/4/6)

(continúa hacia abajo)

👇

---

### Postulados

<ul>
	{{% fragment %}} <li>La <strong>materia</strong> está <strong>formada</strong> por <strong>partículas</strong> muy pequeñas, entre las que no existe nada (vacío).</li> {{% /fragment %}}
	{{% fragment %}} <li>Existen <strong>fuerzas</strong> de <strong>atracción</strong> que mantienen unidas a las partículas.</li> {{% /fragment %}}
	{{% fragment %}} <li>Las partículas están en <strong>continuo movimiento</strong>, siendo la <strong>temperatura</strong> una medida de la velocidad media a la que se mueven (a mayor temperatura mayor velocidad).</li> {{% /fragment %}}
</ul>

---

### Explicación de los estados de agregación

---

#### Sólido

{{< figure library="true" src="materia-2ESO-3ESO/solido.png" title="En un **sólido** la **interacción** entre las partículas es muy **fuerte**, y éstas están **vibrando**." lightbox="false" width="55%" >}}

---

#### Líquido

{{< figure library="true" src="materia-2ESO-3ESO/liquido.png" title="En un **líquido** la **interacción** entre las partículas es **intermedia**, y éstas además de **vibrar** pueden **rotar** y **moverse** ligeramente." lightbox="false" width="55%" >}}

---

#### Gas

{{< figure library="true" src="materia-2ESO-3ESO/gas.png" title="En un **gas** las partículas **apenas interactúan** entre sí y éstas se **mueven aleatoriamente** en todas las direcciones." lightbox="false" width="55%" >}}

---

### Simulación

---

<iframe src="https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_es.html" width="800" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Mezclas

- [Tipos](#/5/2)
- [Disoluciones](#/5/3)
- [Métodos de separación](#/5/11)

(continúa hacia abajo)

👇

---

Al mezclarse dos o más sustancias distintas, no se obtiene una nueva sustancia, ya que las sustancias que forman la mezcla **conservan** sus **propiedades** y **pueden separarse** mediante procedimientos físico-químicos.

---

### Tipos
<h4>{{% fragment %}} Homogéneas {{% /fragment %}}</h4>
{{% fragment %}} Aquellas en las que **no** es posible distinguir sus componentes a simple vista. {{% /fragment %}}

<h4>{{% fragment %}} Heterogéneas {{% /fragment %}}</h4>
{{% fragment %}} Aquellas en las que **sí** es posible distinguir sus componentes a simple vista. {{% /fragment %}}

---

### Disoluciones
Son un buen ejemplo de **mezclas homogéneas**, cuyos componentes pueden ser tanto sólidos, líquidos o gases. En una **disolución** distinguimos dos **componentes**:

---

<h4>{{% fragment %}} Soluto {{% /fragment %}}</h4>
{{% fragment %}} El componente que está en menor proporción. {{% /fragment %}}

<h4>{{% fragment %}} Disolvente {{% /fragment %}}</h4>
{{% fragment %}} El componente que está en mayor proporción. {{% /fragment %}}

---

#### Concentración
Podemos expresar la **concentración** de una disolución de varias formas distintas, entre ellas:

---

##### g/L
Expresa el número de gramos de soluto por cada litro de disolución:
$$
c\thinspace(\mathrm{g/L}) = \frac{m_\text{soluto}\thinspace (\mathrm{g})}{V_\text{disolución}\thinspace (\mathrm{L})}
$$

---
	
##### % en masa
Expresa el número de gramos de soluto por cada $100\thinspace\mathrm g$ de disolución:
$$
c\thinspace(\\%\thinspace m) = \frac{m_\text{soluto}}{m_\text{soluto}+m_\text{disolución}}\times 100
$$

---
	
##### % en volumen
Expresa el número de litros de soluto por cada $100\thinspace\mathrm L$ de disolución:
$$
c\thinspace(\\%\thinspace V) = \frac{V_\text{soluto}}{V_\text{soluto}+V_\text{disolución}}\times 100
$$

---

##### Simulación
Puedes aprender más con esta **simulación**, donde se expresa la concentración en mol/L, es decir, cuántos moles de soluto hay por cada litro de disolución:

---

<iframe src="https://phet.colorado.edu/sims/html/concentration/latest/concentration_es.html" width="800" height="600" scrolling="no" allowfullscreen></iframe>

---

### Métodos de separación

---

#### Decantación
Método **físico** para separar mezclas **heterogéneas** de líquidos y sólidos no solubles (suspendidos) o de líquidos no miscibles de **diferente densidad** (con un embudo de decantación).

---

#### Filtración
Método **físico** para separar mezclas **heterogéneas** de líquidos y sólidos no solubles a través de un medio poroso, llamado tamiz, criba, cedazo o **filtro**.

---

#### Destilación
Método **físico** para separar mezclas de líquidos con **distinto punto de ebullición**.

{{< figure library="true" src="materia-2ESO-3ESO/destilacion.png" title="Imagen de [OpenClipart-Vectors](https://pixabay.com/es/users/openclipart-vectors-30363/) en [Pixabay](https://pixabay.com/es/)." lightbox="false" width=65% >}}

---

#### Cristalización
Método **químico** para separar mezclas **homogéneas**, como sólidos disueltos en líquidos.

{{% /section %}}
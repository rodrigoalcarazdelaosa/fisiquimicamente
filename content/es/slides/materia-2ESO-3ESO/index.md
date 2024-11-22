---
title: La materia
summary: "Propiedades, estados de agregación y mezclas."
url: "/recursos-fisica-quimica/apuntes/2eso-3eso/materia/diapositivas"

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

# La materia

- [Propiedades generales](#/2)
- [Propiedades específicas](#/3)
- [Estados de agregación](#/4)
- [Modelo cinético-molecular](#/5)
- [Mezclas](#/6)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

> Te recomiendo echar un vistazo a [esta excelente entrada del **blog**]({{< ref "/post/materiales-quimica/index.md" >}}) para aprender sobre **materiales** y las **cuatro preguntas** esenciales de la **Química**.

---

{{% section %}}

## Propiedades generales

[Masa](#/2/3) y [volumen](#/2/4)

(continúa hacia abajo)

👇

---

<dl>
<dt>Materia</dt>
<dd>Todo lo que tiene <strong>masa</strong> y ocupa un <strong>volumen</strong>.</dd>
{{% fragment %}}<dt>Sistema material</dt>{{% /fragment %}}
{{% fragment %}}<dd>Porción de materia confinada en una región del espacio.</dd>{{% /fragment %}}
{{% fragment %}}<dt>Sustancia</dt>{{% /fragment %}}
{{% fragment %}}<dd>Forma de materia que tiene una composición química y unas propiedades características determinadas.</dd>{{% /fragment %}}
</dl>

---

La **masa** y el **volumen** son **propiedades generales** de la materia, lo que significa que no nos permiten distinguir una sustancia de otra.

---

### Masa
Es la **cantidad** de materia que tiene un objeto o sistema material.

{{% fragment %}} En el SI se mide en kg. {{% /fragment %}}

---

### Volumen
Es el **espacio** que ocupa un objeto o sistema material.

{{% fragment %}} En el SI se mide en $\mathrm{m^3}$, aunque también se puede medir en L ($1\thinspace\mathrm{m^3} = 10^3\thinspace\mathrm L$). {{% /fragment %}}

{{% /section %}}

---

{{% section %}}

## Propiedades específicas: densidad

Las **propiedades específicas** o **características** de la materia son aquellas que nos permiten distinguir una sustancia de otra.

(continúa hacia abajo)

👇

---

### Densidad
La **densidad** $d$ de un objeto se define como la relación (cociente) entre su masa $m$ y su volumen $V$:
$$
d = \frac{m}{V}
$$

{{% fragment %}} En el SI se mide en kg/m<sup>3</sup>. {{% /fragment %}}

---

En [esta tabla, tomada de la entrada sobre densidad en la versión inglesa de la Wikipedia](https://en.wikipedia.org/wiki/Density#Various_materials), puedes ver la densidad de diversos materiales (ordenados de menor a mayor densidad).

---

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Artsy_density_column.png/207px-Artsy_density_column.png" width="20%" lightbox="true" >}}

---

Aprende más sobre la **densidad** con esta **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/density/latest/density_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

---

#### Ejemplos

---

<q>El etanol tiene una densidad de $0.79\thinspace\mathrm{g/cm^3}$. Calcula la masa contenida en una botella de medio litro.</q>

---

Lo primero que tenemos que hacer es _**homogeneizar**_ las unidades. Podemos convertir el volumen, $0.5\thinspace\mathrm L$, en $\mathrm{cm^3}$:
$$
0.5\thinspace\mathrm L\cdot \frac{1\thinspace\mathrm{dm^3}}{1\thinspace\mathrm L}\cdot \frac{10^3\thinspace\mathrm{cm^3}}{1\thinspace\mathrm{dm^3}} = 500\thinspace\mathrm{cm^3}
$$

---

A partir de la expresión de la densidad, podemos **despejar** la **masa** $m$:
$$
d = \frac{m}{V}\rightarrow m = V\cdot d = 500\thinspace\mathrm{cm^3} \cdot 0.79\thinspace\mathrm{g/cm^3} = 395\thinspace\mathrm{g} = 0.395\thinspace\mathrm{kg}
$$

---

<q>Calcula el volumen que ocupan $390\thinspace\mathrm g$ de una sustancia cuya densidad es de $2390\thinspace\mathrm{kg/m^3}$.</q>

---

Ya que la densidad nos la dan en unidades del SI, pasamos la masa, $m=390\thinspace\mathrm g$, a kg:
$$
m = 390\thinspace\mathrm g \cdot \frac{1\thinspace\mathrm{kg}}{10^3\thinspace\mathrm g} = 0.390\thinspace\mathrm{kg}
$$

---

A partir de la expresión de la densidad, despejamos el volumen $V$:

$$
d = \frac{m}{V}\rightarrow V = \frac{m}{d} = \frac{0.390\thinspace\mathrm{kg}}{2390\thinspace\mathrm{kg/m^3}} = 1.632\times 10^{-4}\thinspace\mathrm{m^3} = 163.2\thinspace\mathrm{cm^3}
$$

{{% /section %}}

---

{{% section %}}

## Estados de agregación

- [Sólido](#/4/2)
- [Líquido](#/4/3)
- [Gaseoso](#/4/4)
- [Cambios de estado](#/4/6)

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

> ¿En qué **estado** de **agregación** está la **nieve**? Descúbrelo en [esta estupenda **entrada** del **blog**]({{< relref "/post/nieve" >}}).<br><br>También puedes **aprender más** sobre el cuarto estado de la materia, el **plasma**, [aquí]({{< relref "/post/plasma" >}}).

---

### Cambios de estado
La materia puede **cambiar** de **estado** al **variar** la **presión** o **temperatura**, permaneciendo su masa constante mientras que su volumen varía.

---

{{< figure library="true" src="materia-2ESO-3ESO/cambios-estado.svg" lightbox="false" width="100%" >}}

---

> Si quieres **aprender más** sobre la **naturaleza** de los **cambios** de **estado**, te recomendamos leer [esta **entrada** del **blog** del **IES Valle del Saja**](http://www.fqsaja.com/?p=10513).

---

Además, **durante** un **cambio** de **estado** la **temperatura** permanece **constante**, como se muestra en la siguiente curva de calentamiento de una sustancia pura:

---

{{< figure library="true" src="materia-2ESO-3ESO/grafica-calentamiento.svg" lightbox="false" width="100%" >}}

---

Las **temperaturas** (o puntos) de **fusión** y **ebullición** (ambas aumentan con la presión) son, al igual que la densidad, **propiedades características** de la materia.

---

#### Gráfica de enfriamiento del naftaleno

{{< youtube j1N81E1ys34 >}}

[Aquí](https://drive.google.com/file/d/1Bycu4IzGGw0OgaXdV7oo5Cko5C4TWa4H/view) puedes descargarte el **guion** de la **práctica**.

{{% /section %}}

---

{{% section %}}

## Modelo cinético-molecular

- [Postulados](#/5/1)
- [Explicación de los estados de agregación](#/5/2)
- [Simulación](#/5/7)

(continúa hacia abajo)

👇

---

### Postulados

<ul>
	{{% fragment %}} <li>La <strong>materia</strong> está <strong>formada</strong> por <strong>partículas</strong> muy pequeñas, entre las que no existe nada (vacío).</li> {{% /fragment %}}
	{{% fragment %}} <li>Existen <strong>fuerzas</strong> de <strong>atracción</strong> que mantienen unidas a las partículas.</li> {{% /fragment %}}
	{{% fragment %}} <li>Las partículas están en <strong>continuo movimiento</strong>, siendo la <strong>temperatura</strong> una medida de su <a href="/recursos-fisica-quimica/apuntes/4eso/energia-trabajo-calor/#energía-cinética-e_mathrm-c"><strong>energía cinética</strong></a> <strong>media</strong> (a mayor temperatura mayor velocidad).</li> {{% /fragment %}}
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

##### Simulación de aire

{{< youtube j9JvX58aRfg >}}

---

### Simulación

---

<iframe src="https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

---

#### Simulación de la congelación del agua en hielo

{{< youtube pYClU2f85H4 >}}

{{% /section %}}

---

{{% section %}}

## Mezclas

- [Tipos](#/6/2)
- [Disoluciones](#/6/3)
- [Métodos de separación](#/6/11)

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
Es una **medida** de la **cantidad** de **soluto** en una cantidad dada de disolvente. Podemos expresarla de varias formas distintas, entre ellas:

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
c\thinspace(\%\thinspace m) = \frac{m_\text{soluto}}{m_\text{soluto}+m_\text{disolvente}}\times 100
$$

---

##### % en volumen
Expresa el número de litros de soluto por cada $100\thinspace\mathrm L$ de disolución:
$$
c\thinspace(\%\thinspace V) = \frac{V_\text{soluto}}{V_\text{soluto}+V_\text{disolvente}}\times 100
$$

---

##### Simulación
Puedes aprender más con esta **simulación**, donde se expresa la concentración en mol/L, es decir, cuántos moles de soluto hay por cada litro de disolución:

---

<iframe src="https://phet.colorado.edu/sims/html/concentration/latest/concentration_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

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

{{< figure library="true" src="materia-2ESO-3ESO/destilacion.svg" lightbox="false" width=90% >}}

---

#### Cristalización
Método **químico** para separar mezclas **homogéneas**, como sólidos disueltos en líquidos.

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Pincha [**aquí**](?view=print#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>
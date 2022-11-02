---
title: Disoluciones
url: "/recursos-fisica-quimica/apuntes/1bach/disoluciones"
subtitle: Concentración, solubilidad, preparación y propiedades coligativas
summary: "Concentración, solubilidad, preparación y propiedades coligativas."
breadcrumbs: ["recursos-fisica-quimica","apuntes","1bach"]
authors:
- rodrigo-alcaraz-de-la-osa
- alba-lopez-valenzuela
- leticia-cabezas
tags:
- apuntes
- 1º Bach
- disoluciones
categories:
- Química
weight: 2

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Kindel Media**](https://www.pexels.com/es-es/@kindelmedia) en [Pexels](https://www.pexels.com/es-es/foto/colorido-colores-laboratorio-medicina-8325710/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: file-download
  name: Póster
  url: disoluciones-poster.pdf
- icon_pack: fas
  icon: external-link-alt
  name: Ejercicios
  url: https://drive.google.com/file/d/1eO4Hd_M8IoPcfWDl0V2215oPCi45xck4/view
- icon_pack: fas
  icon: file-download
  name: Prácticas de laboratorio
  url: disoluciones-practicas-laboratorio.pdf
- icon_pack: fas
  icon: file-download
  name: Frikiexámenes
  url: disoluciones-reacciones-quimicas-frikiexamenes.pdf

slides: disoluciones-1Bach
---

{{% toc %}}

Una **disolución** es una **mezcla homogénea** compuesta por un **disolvente** (componente que está en mayor proporción) y uno o varios **solutos** (sustancias en menor propoción, disueltas en el disolvente).

## Concentración

Es una **medida** de la **cantidad** de **soluto** en una cantidad dada de disolvente.

{{< figure library="true" src="disoluciones-1Bach/concentracion.svg" title="Adaptada de https://commons.wikimedia.org/wiki/File:Ejemplo_de_concentraci%C3%B3n_en_disoluci%C3%B3n.svg." lightbox="false" width="100%" >}}

### Porcentaje en masa
$$
c = \frac{m_\text{soluto}}{m_\text{disolución}}\cdot 100
$$

### Porcentaje en volumen
$$
c = \frac{V_\text{soluto}}{V_\text{disolución}}\cdot 100
$$

### Concentración en masa
$$
c = \frac{m_\text{soluto}}{V_\text{disolución}}
$$

Suele expresarse en g/L.
		
### Molaridad
$$
M = \frac{\text{cantidad de soluto (moles)}}{\text{volumen de disolución}}
$$

Suele expresarse en mol/L, en cuyo caso se dice *molar* (M).

### Molalidad
$$
m = \frac{\text{cantidad de soluto (moles)}}{\text{masa de disolvente}}
$$

En el SI se expresa en mol/kg, en cuyo caso se dice *molal* (m).

### Fracción molar
\begin{gather*}
\chi_\mathrm s = \frac{\text{cantidad de soluto (moles)}}{\text{cantidad total (moles)}} = \frac{n_\mathrm s}{n_\mathrm s + n_\mathrm d} \\\\
\chi_\mathrm d = \frac{n_\mathrm d}{n_\mathrm s + n_\mathrm d} \\\\
\chi_\mathrm s + \chi_\mathrm d = 1
\end{gather*}

Es una magnitud adimensional (mol/mol).

## Solubilidad

Es la máxima cantidad de soluto que puede disolverse a una temperatura dada en un disolvente. Se suele expresar en gramos de soluto por cada 100&thinsp;mL de disolvente.

### Saturación y sobresaturación
Una **disolución saturada** es aquella en la que ya no se puede disolver más soluto, a una temperaturada dada. La **sobresaturación** ocurre cuando la concentración de soluto excede el límite de solubilidad, típicamente a altas temperaturas, dando lugar a un estado metaestable que encontrará el equilibrio precipitando el exceso de soluto.

### Solubilidad y temperatura
#### Sólidos en agua
La **solubilidad** de muchas sales (sólidas) disueltas en agua **aumenta** con la temperatura. Algunas, como el Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, se vuelven menos solubles al aumentar la temperatura, debido a que su disolución en agua es exotérmica.

#### Gases en agua
La **solubilidad** suele **disminuir** al aumentar la temperatura.

#### Gases en disolventes orgánicos
La **solubilidad** suele **aumentar** con la temperatura.

### Solubilidad y presión
La **solubilidad** de los **gases aumenta** al aumentar la presión externa.

## Preparación de disoluciones

Es una práctica común en los laboratorios preparar una disolución o bien directamente a partir de sus constituyentes o bien diluyendo una disolución comercial más concentrada. A grandes rasgos, en el primer caso debemos medir la cantidad necesaria de soluto, mientras que en el segundo debemos añadir disolvente.

### Midiendo la cantidad necesaria de soluto
Para **solutos sólidos** disueltos en disolventes líquidos, pesamos la **masa** necesaria con ayuda de una **balanza** y los diluimos hasta el volumen deseado. En el caso de que el **soluto** sea **líquido**, en vez de pesar su masa, tomamos el **volumen** necesario con ayuda por ejemplo de una **pipeta**.

{{< figure library="true" src="disoluciones-1Bach/preparacion-disoluciones.svg" title="1: Pesamos la masa necesaria de soluto. 2: Añadimos el soluto al matraz aforado, junto con una pequeña cantidad de agua destilada para disolver. 3: Después de disolver el soluto, llenamos el matraz con agua destilada hasta el aforo. Traducida y adaptada de https://www.chegg.com/learn/chemistry/introduction-to-chemistry/standard-solution." lightbox="false" width="100%" >}}

### Dilución de disoluciones
Es el proceso mediante el cual se disminuye la concentración de una disolución, típicamente añadiendo más disolvente (aumentando el volumen total). Se cumple que:
$$
c_0V_0 = cV,	
$$

donde $c$ representa concentración, $V$ volumen de disolución y el subíndice 0 hace referencia a la disolución inicial. En el **laboratorio**, es habitual tener que obtener una disolución de menor concentración a partir de una disolución comercial más concentrada. Dada la densidad, $d_0$, y la riqueza (concentración), $c_0$, de la disolución comercial, podemos calcular el volumen de disolución comercial, $V_0$, necesario para obtener un volumen $V>V_0$ de disolución diluida con una concentración $c<c_0$:

1. Obtenemos la cantidad de soluto necesaria a partir del volumen, $V$, y de la concentración, $c$, de la disolución deseada. Suponiendo $c$ expresada como molaridad:
  $$
  c = \frac{n_\mathrm s}{V} \rightarrow n_\mathrm s = c\cdot V \rightarrow m_\mathrm s = n_\mathrm s\cdot M_\mathrm s\text{ (masa molar del soluto)}
	$$
2. Obtenemos la cantidad de disolución comercial necesaria a partir de la riqueza, $c_0$. Suponiendo la riqueza expresada en porcentaje en masa:
  $$
  c_0 = \frac{m_\mathrm s}{m_0}\cdot 100 \rightarrow m_0 = \frac{m_\mathrm s}{c_0}\cdot 100
	$$
3. Obtenemos el volumen de disolución comercial necesario, $V_0$, a partir de la densidad de la disolución comercial, $d_0$:
  $$
  d_0 = \frac{m_0}{V_0} \rightarrow V_0 = \frac{m_0}{d_0}
	$$

En el caso de querer **aumentar** la **concentración** de una disolución, podemos:

- Añadir más soluto puro.
- Mezclar con otra disolución del mismo soluto pero más concentrada.
- Eliminar disolvente por, por ejemplo, evaporación.

## Propiedades coligativas

Propiedades que dependen únicamente de la concentración de soluto, y no de su naturaleza.

### Disminución relativa de la presión de vapor: ley de Raoult

Se define la **presión de vapor** como la presión ejercida por un vapor en equilibrio termodinámico con sus fases condensadas (líquida o sólida) a una temperatura determinada en un sistema cerrado. En 1887, el químico francés François-Marie **Raoult** propone que la presión parcial de cada componente de una disolución ideal de líquidos, $p$, es igual a la presión de vapor del componente puro, $p^0$, multiplicada por su fracción molar, $\chi$.

{{< figure library="true" src="disoluciones-1Bach/ley-raoult.svg" title="Traducida y adaptada de https://psiberg.com/colligative-properties-of-solutions/." lightbox="false" width="100%" >}}			

En consecuencia, la disminución relativa de la presión de vapor de una disolución diluida de un soluto no volátil es igual a la fracción molar del soluto en la disolución:
$$
\Delta p = p^0-p = p^0\chi
$$

### Descenso crioscópico

Se trata de un **descenso** de la **temperatura** a la que se **congela** una **sustancia**, $T_\mathrm c$, provocado por la adición de una cantidad menor de otra sustancia no volátil. Para disoluciones diluidas con solutos que no se disocian (no electrolitos), tenemos:
$$
\Delta T_\mathrm c = K_\mathrm c \cdot m,
$$

donde $\Delta T_\mathrm c = T_\mathrm c^0-T_\mathrm c$ es la disminución del punto de congelación, $K_\mathrm c$ es la constante crioscópica (característica de cada disolvente) y $m$ es la molalidad (mol/kg).

### Ascenso ebulloscópico
Describe el fenómeno por el cual el **punto de ebullición**, $T_\mathrm e$, de un líquido (un **disolvente**) es **más alto** cuando se **añade** otro compuesto (**soluto**) no volátil. Para disoluciones diluidas con solutos que no se disocian (no electrolitos), tenemos:
$$
\Delta T_\mathrm e = K_\mathrm e \cdot m,
$$

donde $\Delta T_\mathrm e = T_\mathrm e-T_\mathrm e^0$ es el aumento del punto de ebullición, $K_\mathrm e$ es la constante ebulloscópica (característica de cada disolvente) y $m$ es la molalidad (mol/kg).

### Presión osmótica		

La **presión osmótica** de una disolución, $\Pi$, es la **diferencia** de **presión** entre la **disolución** y el **disolvente puro** cuando ambos están en equilibrio a través de una membrana semipermeable, que permite el paso de moléculas del disolvente pero no del soluto. Las **leyes** que gobiernan la **osmosis** fueron descubiertas por [**Pfeffer**](https://es.wikipedia.org/wiki/Wilhelm_Friedrich_Philipp_Pfeffer) y [**van 't Hoff**](https://es.wikipedia.org/wiki/Jacobus_Henricus_van_%27t_Hoff):

1. La presión osmótica de una disolución a temperatura constante es directamente proporcional a su concentración.
2. La presión osmótica de una disolución es directamente proporcional a su temperatura absoluta.				

{{< figure library="true" src="disoluciones-1Bach/presion-osmotica.svg" title="Traducida y adaptada de https://psiberg.com/colligative-properties-of-solutions/." lightbox="false" width="100%" >}}

Para una **disolución ideal**, se cumple (análogo a los gases ideales):
$$
\Pi V = nRT
$$

En función de la molaridad, $M = n/V$:
$$
\Pi = \frac{nRT}{V} = MRT
$$

---
title: Fluidos
subtitle: Concepto de presión, principios de la hidrostática y física de la atmósfera
summary: Concepto de presión, principios de la hidrostática y física de la atmósfera.
tags:
- 4º ESO
- fuerzas
- fluidos
categories:
- Física

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**PublicDomainPictures**](https://pixabay.com/es/users/publicdomainpictures-14/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: download
  name: Póster
  url: fluidos-poster.pdf
---

{{% toc %}}

## Concepto de presión
La **presión**, $p$, es una magnitud escalar que relaciona la fuerza $F$ (ejercida perpendicularmente) con la superficie $A$ sobre la que actúa:
$$
p = \frac{F}{A}
$$

### Unidades
En el SI la presión se mide en $\mathrm{N/m^2}$, que recibe el nombre de **pascal** ($1\thinspace\mathrm{Pa} = 1\thinspace\mathrm{N/m^2}$). Otras unidades de presión muy utilizadas son la **atmósfera** ($1\thinspace\mathrm{atm} = 101325\thinspace\mathrm{Pa}$) o el **bar** ($1\thinspace\mathrm{bar} = 10^5\thinspace\mathrm{Pa}$).

## Principios de la hidrostática
### Principio de Pascal

> Todo cambio de presión en un punto de un fluido incompresible encerrado en un recipiente de paredes indeformables se transmite con igual intensidad en todas las direcciones y en todos los puntos del fluido.

El siguiente vídeo del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) demuestra el **principio de Pascal**: 

{{< youtube iPQ3WORwUYQ >}}

Las **aplicaciones** del principio de Pascal incluyen las jeringuillas o las prensas y elevadores hidráulicos.

#### Elevador hidráulico
{{< figure library="true" src="fluidos-4ESO/elevador-hidraulico.png" title="Una pequeña fuerza F<sub>1</sub> produce un aumento de presión F<sub>1</sub>/A<sub>1</sub> que es transmitido por el líquido al pistón grande. Como los cambios de presión son iguales en todo el fluido (**principio de Pascal**), las fuerzas ejercidas en los pistones están relacionadas, siendo F<sub>2</sub> > F<sub>1</sub>. Permite elevar grandes pesos con una fuerza pequeña (semejante a la palanca). Adaptada de [https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg](https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg)." lightbox="true" >}}

$$
p_1 = p_2 \Rightarrow \frac{F_1}{A_1} = \frac{F_2}{A_2} \Rightarrow F_1A_2 = F_2A_1
$$

##### Ejemplo
{{% alert example %}}
<br>

> ¿Qué radio deberá tener el soporte circular sobre el que está *aparcado* un coche de masa $m = 1500\thinspace\mathrm{kg}$ si queremos levantarlo apretando uno de los pistones (también circular) de un elevador hidráulico con nuestra mano? <br>
(Suponer que la fuerza máxima que podemos hacer es $F_1 = 500\thinspace\mathrm N$ y que el pistón que apretamos tiene un radio $r_1 = 8\thinspace\mathrm{cm}$).

---

La fuerza que debemos superar es el peso del coche:

$$
F_2 = m\cdot g = 1500\thinspace\mathrm{\cancel{kg}}\cdot 9.8\thinspace\mathrm{N/\cancel{kg}} = 14700\thinspace\mathrm{N}
$$

Aplicando el **principio de Pascal**:

\begin{align*}
p_1 &= p_2 \\\\
\frac{F_1}{A_1} &= \frac{F_2}{A_2} \\\\
\frac{F_1}{\cancel{\pi} r_1^2} &= \frac{F_2}{\cancel{\pi} r_2^2}
\end{align*}
donde $F_1 = 500\thinspace\mathrm N$, $r_1 = 8\thinspace\mathrm{cm} = 0.08\thinspace\mathrm{m}$, $F_2 = 14700\thinspace\mathrm{N}$ y $r_2$ es lo que nos piden. Despejando $r_2$:

$$
r_2 = r_1 \sqrt{\frac{F_2}{F_1}} = 0.08\thinspace\mathrm{m}\sqrt{\frac{14700\thinspace\mathrm{\cancel{N}}}{500\thinspace\mathrm{\cancel{N}}}} = 0.434\thinspace\mathrm m = 43.4\thinspace\mathrm{cm}
$$

{{% /alert %}}

{{< vimeo 209053495 >}}

### Principio fundamental de la hidrostática
<iframe src="https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html" width="800" height="600" scrolling="no" allowfullscreen></iframe>

{{< youtube GuCGcOkoK5E >}}

### Principio de Arquímedes

## Física de la atmósfera
### Presión atmosférica
La **presión atmosférica** es el peso de la columna de aire que soporta un cuerpo por unidad de superficie.

### Experimento de Torricelli
Gracias al **experimento de Torricelli** se midió por primera vez la presión atmosférica y se produjo el primer vacío de la historia.

Al poner un tubo de \SI{100}{cm} de altura lleno de mercurio (Hg) boca abajo en una cubeta también llena de mercurio, se observa que el Hg desciende a $\approx\SI{76}{cm}$, creándose un vacío en los $\approx\SI{24}{cm}$ restantes:
\begin{align*}	  			
p_\text{atm} &= d_\text{Hg}\cdot g\cdot h \\\\ 
& = \SI{13534}{kg/m^3}\cdot \SI{9.8}{N/kg}\cdot \SI{0.76}{m} \\\\
&=  \SI{101325}{Pa} = \SI{1}{atm}
\end{align*}
{{< vimeo 110619312 >}}

### Hemisferios de Magdeburgo
En 1654, el científico alemán y burgomaestre de Magdeburgo **Otto von Guericke**, diseñó un par de grandes hemisferios de cobre, que se ajustaban con un anillo de acoplamiento formando una esfera. Tras sellar los bordes con grasa y extraer el aire con una bomba de vacío que él mismo había inventado, sendos tiros de 8 caballos intentaron separar ambos hemisferios, sin éxito, demostrando así el poder de la presión atmosférica.

En este vídeo del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) puedes ser testigo de *la verdadera lucha de los caballos contra la presión atmosférica*:

{{< vimeo 33482842 >}}

En este otro vídeo, también el [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) reproduce otras extraordinarias demostraciones que el propio Otto Von Guericke recoge en su libro:

{{< vimeo 67896094 >}}

Finalmente el gran [**Bruce Yeany**](https://www.youtube.com/channel/UCNk3CeLpCA0qIZsuzGl09cw) nos muestra un método alternativo que no requiere una bomba de vacío para eliminar el aire del interior de la esfera: 

{{< youtube Q66DxZB6plE >}}

### Fenómenos meteorológicos

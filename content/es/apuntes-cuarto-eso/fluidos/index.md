---
title: Fluidos
url: "/recursos-fisica-quimica/apuntes/4eso/fluidos"
subtitle: Concepto de presión, principios de la hidrostática y física de la atmósfera
summary: Concepto de presión, principios de la hidrostática y física de la atmósfera.
breadcrumbs: ["recursos-fisica-quimica","apuntes","4eso"]
authors:
- rodrigo-alcaraz-de-la-osa
- leticia-cabezas
tags:
- apuntes
- 4º ESO
- fuerzas
- fluidos
categories:
- Física
weight: 8

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**PublicDomainPictures**](https://pixabay.com/es/users/publicdomainpictures-14/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: file-download
  name: Póster
  url: fluidos-poster.pdf
- icon_pack: fas
  icon: file-download
  name: Frikiexámenes
  url: fluidos-energia-calor-frikiexamenes.pdf
  
slides: fluidos-4ESO
---

{{% toc %}}

## Concepto de presión
La **presión**, $p$, es una magnitud escalar que relaciona la fuerza $F$ (ejercida perpendicularmente) con la superficie $A$ sobre la que actúa:
$$
p = \frac{F}{A}
$$

### Unidades
En el SI la presión se mide en $\mathrm{N/m^2}$, que recibe el nombre de **pascal** ($1\thinspace\mathrm{Pa} = 1\thinspace\mathrm{N/m^2}$). La siguiente tabla[^1] muestra otras unidades de presión y su equivalencia entre ellas:

[^1]: [https://en.wikipedia.org/wiki/Template:Pressure_Units](https://en.wikipedia.org/wiki/Template:Pressure_Units).

| | Pascal (Pa) | Atmósfera (atm) | Bar (bar) | Torr (Torr) |
| :---: | :---: | :---: | :---: | :---: |
| **1 Pa** | 1 | $9.8692\times 10^{-6}$ | $10^{-5}$ | $7.5006\times 10^{-3}$ |
| **1 atm** | 101325 | 1 | 1.01325 | 760 |
| **1 bar** | $10^5$ | 0.98692 | 1 | 750.06 |
| **1 Torr** | 133.322368421 | 1/760 | 0.001333224 | 1 |

## Principios de la hidrostática
### Principio de Pascal

> Todo cambio de presión en un punto de un fluido incompresible encerrado en un recipiente de paredes indeformables se transmite con igual intensidad en todas las direcciones y en todos los puntos del fluido.

En el siguiente vídeo del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) puedes ver una demostración muy extendida del **principio de Pascal**, que "*consiste en rellenar con agua un recipiente esférico hueco al que se le han practicado diversos orificios. Mediante una jeringuilla acoplada al dispositivo, se le aplica una sobrepresión al fluido que contiene. Dado que la presión se transmite por igual a todos los puntos, el agua saldrá con la misma velocidad por todos los agujeros de la esfera*":

{{< youtube iPQ3WORwUYQ >}}

Las **aplicaciones** del principio de Pascal incluyen las jeringuillas o las prensas y elevadores hidráulicos.

#### Elevador hidráulico
{{< figure library="true" src="fluidos-4ESO/elevador-hidraulico.svg" title="Una pequeña fuerza F<sub>1</sub> produce un aumento de presión F<sub>1</sub>/A<sub>1</sub> que es transmitido por el líquido al pistón grande. Como los cambios de presión son iguales en todo el fluido (**principio de Pascal**), las fuerzas ejercidas en los pistones están relacionadas, siendo F<sub>2</sub> > F<sub>1</sub>. Permite elevar grandes pesos con una fuerza pequeña (semejante a la palanca). Adaptada de [https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg](https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg)." lightbox="false" width="100%" >}}

$$
p_1 = p_2 \Rightarrow \frac{F_1}{A_1} = \frac{F_2}{A_2} \Rightarrow F_1A_2 = F_2A_1
$$

##### Ejemplo
{{% callout example %}}
<br>

> ¿Qué radio deberá tener el soporte circular sobre el que está *aparcado* un coche de masa $m = 1500\thinspace\mathrm{kg}$ si queremos levantarlo apretando uno de los pistones (también circular) de un elevador hidráulico con nuestra mano? <br>
(Suponer que la fuerza máxima que podemos hacer es $F_1 = 500\thinspace\mathrm N$ y que el pistón que apretamos tiene un radio $r_1 = 8\thinspace\mathrm{cm}$).

---

La fuerza que debemos superar es el peso del coche:

\begin{align*}
F_2 = m\cdot g &= 1500\thinspace\mathrm{\cancel{kg}}\cdot 9.8\thinspace\mathrm{N/\cancel{kg}} \\\\
&= 14700\thinspace\mathrm{N}
\end{align*}

Aplicando el **principio de Pascal**:

\begin{align*}
p_1 &= p_2 \\\\
\frac{F_1}{A_1} &= \frac{F_2}{A_2} \\\\
\frac{F_1}{\cancel{\pi} r_1^2} &= \frac{F_2}{\cancel{\pi} r_2^2}
\end{align*}
donde $F_1 = 500\thinspace\mathrm N$, $r_1 = 8\thinspace\mathrm{cm} = 0.08\thinspace\mathrm{m}$, $F_2 = 14700\thinspace\mathrm{N}$ y $r_2$ es lo que nos piden.

Despejando $r_2$:

\begin{align*}
r_2 = r_1 \sqrt{\frac{F_2}{F_1}} &= 0.08\thinspace\mathrm{m}\sqrt{\frac{14700\thinspace\mathrm{\cancel{N}}}{500\thinspace\mathrm{\cancel{N}}}} \\\\
&= 0.434\thinspace\mathrm m = 43.4\thinspace\mathrm{cm}
\end{align*}

{{% /callout %}}

En el siguiente vídeo el [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) logra reproducir a pequeña escala el funcionamiento de un elevador hidráulico mediante un esquemático modelo con dos jeringuillas:

{{< vimeo 209053495 >}}

### Principio fundamental de la hidrostática
> La presión ejercida por un fluido de densidad $d$ en un punto situado a una profundidad $h$ de la superficie es numéricamente igual a la presión ejercida por una columna de fluido de altura $h$:
$$
p = \frac{F}{A} = \frac{m\cdot g}{A} = \frac{d\cdot V\cdot g}{A} = \frac{d\cdot \bcancel{A}\cdot h\cdot g}{\bcancel{A}} = d\cdot g \cdot h
$$

En el caso de que la superficie esté sometida a una presión $p_0$ (presión atmosférica por ejemplo), la presión total a una profundidad $h$ será:
$$
p = p_0 + dgh,
$$
que constituye la **ecuación fundamental de la hidrostática**.

#### Ejemplo
{{% callout example %}}
<br>

> Un reloj tiene una etiqueta que pone 10 ATM. ¿Hasta qué profundidad podremos sumergirlo en el mar?

{{< figure library="true" src="fluidos-4ESO/reloj.jpg" title="Foto adaptada de [Fabian Heimann](https://unsplash.com/@fabianheimann) en [Unsplash](https://unsplash.com)." lightbox="true" >}}

---

Lo primero que habría que decir es que ATM es el símbolo de la unidad de presión **atmósfera**, por lo que habría que escribirlo como atm. Esa etiqueta significa que 10 atm es la presión máxima que aguanta el reloj.

Haciendo uso de la ecuación fundamental de la hidrostática podemos relacionar la presión con la profundidad:

$$
p = p_0 + dgh,
$$
donde $p = 10\thinspace\mathrm{atm}$, $p_0 = 1\thinspace\mathrm{atm}$ es la presión atmosférica a nivel del mar, $d = 1025\thinspace\mathrm{kg/m^3}$ es la densidad media del agua del mar ([https://es.wikipedia.org/wiki/Agua_de_mar](https://es.wikipedia.org/wiki/Agua_de_mar)), $g = 9.8\thinspace\mathrm{N/kg}$ es la aceleración de la gravedad y $h$ es lo que nos piden.

Convertimos todo al SI:
\begin{align*}
10\thinspace\mathrm{\cancel{atm}}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{\cancel{atm}}} = 1013250\thinspace\mathrm{Pa} \\\\
1\thinspace\mathrm{\cancel{atm}}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{\cancel{atm}}} = 101325\thinspace\mathrm{Pa}
\end{align*}

Despejando $h$:

\begin{align*}
h = \frac{p-p_0}{dg} &= \frac{1013250\thinspace\mathrm{Pa}-101325\thinspace\mathrm{Pa}}{1025\thinspace\mathrm{kg/m^3}\cdot 9.8\thinspace\mathrm{N/kg}} \\\\
&= 90.8\thinspace\mathrm{m}
\end{align*}

Lo que confirma la *regla de oro* que nos dice que cada 10 m de profundidad la presión aumenta en 1 atm aproximadamente. 

{{% /callout %}}

#### Paradoja hidrostática. Vasos comunicantes

{{< figure library="true" src="fluidos-4ESO/vasos-comunicantes.svg" title="La **paradoja hidrostática** consiste en que la presión que ejerce un fluido sobre el fondo no depende de la forma (ni de la cantidad de fluido por tanto), sino del nivel (altura). En recipientes comunicados entre sí (**vasos comunicantes**), el fluido se distribuye hasta alcanzar el mismo nivel. Adaptada de [https://commons.wikimedia.org/wiki/File:Communicating_vessels.svg](https://commons.wikimedia.org/wiki/File:Communicating_vessels.svg)." lightbox="false" width="100%" >}}


#### Simulación
Puedes explorar con más detalle la **relación** entre la **presión**, la **densidad** y la **profundidad** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Principio de Arquímedes

> Todo cuerpo sumergido total o parcialmente en un fluido experimenta una fuerza de empuje ($E$) vertical hacia arriba que es igual al peso del fluido desalojado:
\begin{align*}					
E &= P_\text{fluido desalojado} \\\\
&= m_\text{fluido desalojado}\cdot g \\\\
&= d_\text{fluido}\cdot V_\text{desalojado}\cdot g \\\\
&= d_\text{fluido}\cdot V_\text{sumergido}\cdot g
\end{align*}

{{< figure library="true" src="fluidos-4ESO/flotacion.svg" title="Traducida y adaptada de [https://commons.wikimedia.org/wiki/File:Buoyancy.svg](https://commons.wikimedia.org/wiki/File:Buoyancy.svg)." lightbox="false" width="100%" >}}

#### Flotación
$$
\begin{cases}
	E<P_\text{cuerpo} & \text{se hunde} \\\\
	E=P_\text{cuerpo} & \text{flota} \Rightarrow \dfrac{V_\text{sumergido}}{V_\text{cuerpo}} = \dfrac{d_\text{cuerpo}}{d_\text{fluido}} \\\\
	E>P_\text{cuerpo} & \text{fuerza ascensional}
\end{cases}
$$

El peso aparente de un objeto puede calcularse como:
$$
P_\text{aparente} = P_\text{real} - E
$$

#### Ejemplo
{{% callout example %}}
<br>

> El Pont Aven es el ferry 🛳️ que navega, entre otras rutas, desde Santander hasta Plymouth. Tiene un *tonelaje de peso muerto* de 4803 toneladas. Si $d = 1025\thinspace\mathrm{kg/m^3}$ es la densidad media del agua del mar ([https://es.wikipedia.org/wiki/Agua_de_mar](https://es.wikipedia.org/wiki/Agua_de_mar)), ¿qué volumen del barco se encuentra sumergido?

{{< figure library="true" src="fluidos-4ESO/Pont-Aven.jpg" title="[https://www.brittanyferries.es/la-flota/ferries-desde-espana/pont-aven](https://www.brittanyferries.es/la-flota/ferries-desde-espana/pont-aven)" lightbox="true" >}}

---

Si el barco flota ha de cumplirse que la fuerza resultante neta sobre él tiene que ser cero, o lo que es lo mismo, el empuje ha de igualar al peso. Aplicando el **principio de Arquímedes**:

\begin{align*}
E &= P_\text{barco} \\\\
d_\text{fluido}\cdot V_\text{sumergido}\cdot \cancel{g} &= m_\text{barco}\cdot \cancel{g}
\end{align*}

Pasamos la masa del barco a kg:
$$
4803\thinspace\mathrm{\cancel{t}}\cdot \frac{10^3\thinspace\mathrm{kg}}{1\thinspace\mathrm{\cancel{t}}} = 4.803\times 10^6\thinspace\mathrm{kg}
$$

Despejamos el $V_\text{sumergido}$:

\begin{align*}
V_\text{sumergido} = \frac{m_\text{barco}}{d_\text{fluido}} &= \frac{4.803\times 10^6\thinspace\mathrm{\cancel{kg}}}{1025\thinspace\mathrm{\cancel{kg}/m^3}} \\\\
 &= 4685.85\thinspace\mathrm{m^3}
\end{align*}

{{% /callout %}}

#### Práctica virtual
También puedes ver este excelente vídeo del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) donde nos enseñan cómo realizar una **práctica virtual para determinar densidades y fuerzas de empuje**:

{{< youtube o7v9Kbs6e8Y >}}

{{% callout gdrive %}}
[Aquí](https://drive.google.com/file/d/1mPRJVEBM1Fvsm_Q6m0xxHJ4By6MDpdzz/view) puedes descargarte el **guion** de la **práctica**. 
{{% /callout %}}

## Física de la atmósfera
### Presión atmosférica
La **presión atmosférica** es el peso de la columna de aire que soporta un cuerpo por unidad de superficie.

### Experimento de Torricelli
Gracias al **experimento de Torricelli** se midió por primera vez la presión atmosférica y se produjo el primer vacío de la historia.

{{< figure library="true" src="fluidos-4ESO/experimento-Torricelli.png" title="Al poner un tubo de 100 cm de altura lleno de mercurio (Hg) boca abajo en una cubeta también llena de mercurio, se observa que el Hg desciende a aproximadamente 76 cm, creándose un vacío en los 24 cm restantes. Crédito: [ClipArt ETC](https://etc.usf.edu/clipart/53700/53703/53703_torricellian.htm)." lightbox="true" >}}

$$
p_\text{atm} = d_\text{Hg}\cdot g\cdot h = 13534\thinspace\mathrm{kg/m^3}\cdot 9.8\thinspace\mathrm{N/kg}\cdot 0.76\thinspace\mathrm{m} =  101325\thinspace\mathrm{Pa} = 1\thinspace\mathrm{atm}
$$

El [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) nos muestra esta célebre experiencia en el siguiente vídeo:

{{< vimeo 110619312 >}}

### Hemisferios de Magdeburgo
En 1654, el científico alemán y burgomaestre de Magdeburgo **Otto von Guericke**, diseñó un par de grandes hemisferios de cobre, que se ajustaban con un anillo de acoplamiento formando una esfera. Tras sellar los bordes con grasa y extraer el aire con una bomba de vacío que él mismo había inventado, sendos tiros de 8 caballos intentaron separar ambos hemisferios, sin éxito, demostrando así el poder de la presión atmosférica.

{{< figure library="true" src="fluidos-4ESO/hemisferios-Magdeburgo.jpg" title="Versión coloreada del grabado de [Gaspar Schott](https://www.gabinetedelgrabado.com/galer%C3%ADa/la-revolución-de-las-ciencias-s-xvii/schott-1608-1666/) del experimento de Otto von Guericke de los hemisferios de Magdeburgo. Crédito: [Science Source](https://www.sciencesource.com/archive/Magdeburg-Hemispheres--17th-Century-SS2636797.html)." lightbox="true" >}}

En este vídeo del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) puedes ser testigo de *la verdadera lucha de los caballos contra la presión atmosférica*:

{{< vimeo 33482842 >}}

En este otro vídeo, también el [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) reproduce otras extraordinarias demostraciones que el propio Otto Von Guericke recoge en su libro:

{{< vimeo 67896094 >}}

Finalmente, el gran [**Bruce Yeany**](https://www.youtube.com/channel/UCNk3CeLpCA0qIZsuzGl09cw) nos muestra cómo la presión atmosférica es capaz de aplastar distintos recipientes, además de un método alternativo que no requiere una bomba de vacío para eliminar el aire del interior de la esfera: 

{{< youtube lDUuB-Mdx0Q >}}

### Fenómenos meteorológicos
Las **diferencias** de **presión** entre distintos puntos de la atmósfera es el origen de numerosos **fenómenos meteorológicos**.

#### Viento
Los **vientos** soplan desde regiones con mayor presión hacia aquellas en las que la presión es menor (normalmente debido a diferencias de temperaturas).

#### Borrascas
Las **borrascas** o zonas de **baja presión** son regiones de la atmósfera en las que la presión atmosférica es más baja que la del aire circundante, lo que provoca que el aire húmedo ascienda, enfriándose, condensándose y originando **tiempo inestable**.

#### Anticiclones
Un **anticiclón** es una zona atmosférica de **alta presión**, en la cual la presión atmosférica es superior a la del aire circundante, provocando que el aire de las capas más altas descienda, originando **tiempo estable**.

{{< figure library="true" src="fluidos-4ESO/borrasca-anticiclon.jpg" title="[https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html](https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html)" lightbox="true" >}}

## Cortometraje-documental
En este cortometraje-documental del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) "*se somete a diversas revisiones el controvertido experimento conocido como tonel de Pascal*", ideado por el propio Pascal para demostrar de forma definitiva el principio que lleva su nombre:

{{< youtube GuCGcOkoK5E >}}
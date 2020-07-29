---
title: Energía, trabajo y calor
summary: "Energía y sus formas de intercambio (trabajo y calor)."

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Energía, trabajo y calor

- [Energías cinética, potencial y mecánica](#/1)
- [Conservación de la energía](#/2)
- [Intercambio de energía](#/3)
- [Trabajo y potencia](#/4)
- [Efectos del calor sobre los cuerpos](#/5)
- [Máquinas térmicas](#/6)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](fluidos-diapositivas.pdf)

---

{{% section %}}

## Concepto de presión

La **presión**, $p$, es una magnitud escalar que relaciona la fuerza $F$ (ejercida perpendicularmente) con la superficie $A$ sobre la que actúa:
$$
p = \frac{F}{A}
$$

(continúa hacia abajo)

👇

---

### Unidades
En el SI la presión se mide en $\mathrm{N/m^2}$, que recibe el nombre de **pascal** ($1\thinspace\mathrm{Pa} = 1\thinspace\mathrm{N/m^2}$). La siguiente tabla muestra otras unidades de presión y su equivalencia entre ellas:

[https://en.wikipedia.org/wiki/Template:Pressure_Units](https://en.wikipedia.org/wiki/Template:Pressure_Units)

{{% /section %}}

---

{{% section %}}

## Principios de la hidrostática

- [Principio de Pascal](#/2/1)
- [Principio fundamental de la hidrostática](#/2/9)
- [Principio de Arquímedes](#/2/20)

(continúa hacia abajo)

👇

---

### Principio de Pascal
> Todo cambio de presión en un punto de un fluido incompresible encerrado en un recipiente de paredes indeformables se transmite con igual intensidad en todas las direcciones y en todos los puntos del fluido.

---

{{< youtube iPQ3WORwUYQ >}}

---

#### Elevador hidráulico

{{< figure library="true" src="fluidos-4ESO/elevador-hidraulico.png" lightbox="false" >}}

$$
p_1 = p_2 \Rightarrow \frac{F_1}{A_1} = \frac{F_2}{A_2} \Rightarrow F_1A_2 = F_2A_1
$$

---

##### Ejemplo
<q>¿Qué radio deberá tener el soporte circular sobre el que está *aparcado* un coche de masa $m = 1500\thinspace\mathrm{kg}$ si queremos levantarlo apretando uno de los pistones (también circular) de un elevador hidráulico con nuestra mano? <br>
(Suponer que la fuerza máxima que podemos hacer es $F_1 = 500\thinspace\mathrm N$ y que el pistón que apretamos tiene un radio $r_1 = 8\thinspace\mathrm{cm}$).</q>

---

La fuerza que debemos superar es el peso del coche:

\begin{align*}
F_2 = m\cdot g &= 1500\thinspace\mathrm{kg}\cdot 9.8\thinspace\mathrm{N/kg} \\\\
&= 14700\thinspace\mathrm{N}
\end{align*}

---

Aplicando el **principio de Pascal**:

\begin{align*}
p_1 &= p_2 \\\\
\frac{F_1}{A_1} &= \frac{F_2}{A_2} \\\\
\frac{F_1}{\pi r_1^2} &= \frac{F_2}{\pi r_2^2}
\end{align*}
donde $F_1 = 500\thinspace\mathrm N$, $r_1 = 8\thinspace\mathrm{cm} = 0.08\thinspace\mathrm{m}$, $F_2 = 14700\thinspace\mathrm{N}$ y $r_2$ es lo que nos piden.

---

Despejando $r_2$:

\begin{align*}
r_2 = r_1 \sqrt{\frac{F_2}{F_1}} &= 0.08\thinspace\mathrm{m}\sqrt{\frac{14700\thinspace\mathrm{N}}{500\thinspace\mathrm{N}}} \\\\
&= 0.434\thinspace\mathrm m = 43.4\thinspace\mathrm{cm}
\end{align*}

---

{{< vimeo 209053495 >}}

---

### Principio fundamental de la hidrostática

> La presión ejercida por un fluido de densidad $d$ en un punto situado a una profundidad $h$ de la superficie es numéricamente igual a la presión ejercida por una columna de fluido de altura $h$.

---

$$
p = \frac{F}{A} = \frac{m\cdot g}{A} = \frac{d\cdot V\cdot g}{A} = \frac{d\cdot A\cdot h\cdot g}{A} = d\cdot g \cdot h
$$

---

En el caso de que la superficie esté sometida a una presión $p_0$ (presión atmosférica por ejemplo), la presión total a una profundidad $h$ será:
$$
p = p_0 + dgh,
$$
que constituye la **ecuación fundamental de la hidrostática**.

---

#### Ejemplo
<q>Un reloj tiene una etiqueta que pone 10 ATM. ¿Hasta qué profundidad podremos sumergirlo en el mar?</q>

{{< figure library="true" src="fluidos-4ESO/reloj.jpg" lightbox="false" width="40%" >}}

---

Lo primero que habría que decir es que ATM es el símbolo de la unidad de presión **atmósfera**, por lo que habría que escribirlo como atm.

Esa etiqueta significa que 10 atm es la presión máxima que aguanta el reloj.

---

Haciendo uso de la ecuación fundamental de la hidrostática podemos relacionar la presión con la profundidad:

$$
p = p_0 + dgh,
$$
donde $p = 10\thinspace\mathrm{atm}$, $p_0 = 1\thinspace\mathrm{atm}$ es la presión atmosférica a nivel del mar, $d = 1025\thinspace\mathrm{kg/m^3}$ es la densidad media del agua del mar, $g = 9.8\thinspace\mathrm{N/kg}$ es la aceleración de la gravedad y $h$ es lo que nos piden.

---

Convertimos todo al SI:
\begin{align*}
10\thinspace\mathrm{atm}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{atm}} = 1013250\thinspace\mathrm{Pa} \\\\
1\thinspace\mathrm{atm}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{atm}} = 101325\thinspace\mathrm{Pa}
\end{align*}

---

Despejando $h$:

\begin{align*}
h = \frac{p-p_0}{dg} &= \frac{1013250\thinspace\mathrm{Pa}-101325\thinspace\mathrm{Pa}}{1025\thinspace\mathrm{kg/m^3}\cdot 9.8\thinspace\mathrm{N/kg}} \\\\
&= 90.8\thinspace\mathrm{m}
\end{align*}

Lo que confirma la *regla de oro* que nos dice que cada 10 m de profundidad la presión aumenta en 1 atm aproximadamente. 

---

#### Paradoja hidrostática

La **paradoja hidrostática** consiste en que la presión que ejerce un fluido sobre el fondo no depende de la forma (ni de la cantidad de fluido por tanto), sino del nivel (altura).

---

##### Vasos comunicantes

En recipientes comunicados entre sí (**vasos comunicantes**), el fluido se distribuye hasta alcanzar el mismo nivel. 

{{< figure library="true" src="fluidos-4ESO/vasos-comunicantes.png" lightbox="false" >}}

---

#### Simulación
<iframe src="https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html" width="720" height="600" scrolling="no" allowfullscreen></iframe>

---

### Principio de Arquímedes

> Todo cuerpo sumergido total o parcialmente en un fluido experimenta una fuerza de empuje ($E$) vertical hacia arriba que es igual al peso del fluido desalojado.

---

\begin{align*}					
E &= P_\text{fluido desalojado} \\\\
&= m_\text{fluido desalojado}\cdot g \\\\
&= d_\text{fluido}\cdot V_\text{desalojado}\cdot g \\\\
&= d_\text{fluido}\cdot V_\text{sumergido}\cdot g
\end{align*}

---

{{< figure library="true" src="fluidos-4ESO/flotacion.png" lightbox="false" width="55%" >}}

---

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

---

#### Ejemplo
<q>El Pont Aven es el ferry que navega desde Santander hasta Plymouth. Tiene un *tonelaje de peso muerto* de 4803 toneladas. Si $d = 1025\thinspace\mathrm{kg/m^3}$ es la densidad media del agua del mar, ¿qué volumen del barco se encuentra sumergido?</q>

{{< figure library="true" src="fluidos-4ESO/Pont-Aven.jpg" lightbox="false" width="50%" >}}

---

Si el barco flota ha de cumplirse que la fuerza resultante neta sobre él tiene que ser cero, o lo que es lo mismo, el empuje ha de igualar al peso. Aplicando el **principio de Arquímedes**:

\begin{align*}
E &= P_\text{barco} \\\\
d_\text{fluido}\cdot V_\text{sumergido}\cdot g &= m_\text{barco}\cdot g
\end{align*}

---

Pasamos la masa del barco a kg:
$$
4803\thinspace\mathrm{t}\cdot \frac{10^3\thinspace\mathrm{kg}}{1\thinspace\mathrm{t}} = 4.803\times 10^6\thinspace\mathrm{kg}
$$

---

Despejamos el $V_\text{sumergido}$:

\begin{align*}
V_\text{sumergido} = \frac{m_\text{barco}}{d_\text{fluido}} &= \frac{4.803\times 10^6\thinspace\mathrm{kg}}{1025\thinspace\mathrm{kg/m^3}} \\\\
 &= 4685.85\thinspace\mathrm{m^3}
\end{align*}

{{% /section %}}

---

{{% section %}}

## Física de la atmósfera

- [Presión atmosférica](#/3/1)
- [Experimento de Torricelli](#/3/2)
- [Hemisferios de Magdeburgo](#/3/6)
- [Fenómenos meteorológicos](#/3/11)

(continúa hacia abajo)

👇

---

### Presión atmosférica
La **presión atmosférica** es el peso de la columna de aire que soporta un cuerpo por unidad de superficie.

---

### Experimento de Torricelli
Gracias al **experimento de Torricelli** se midió por primera vez la presión atmosférica y se produjo el primer vacío de la historia.

---

> Al poner un tubo de 100 cm de altura lleno de mercurio (Hg) boca abajo en una cubeta también llena de mercurio, se observa que el Hg desciende a aproximadamente 76 cm, creándose un vacío en los 24 cm restantes.

---

{{< figure library="true" src="fluidos-4ESO/experimento-Torricelli.png" lightbox="false" width="50%" >}}

\begin{align*}
p_\text{atm} = d_\text{Hg}\cdot g\cdot h &= 13534\thinspace\mathrm{kg/m^3}\cdot 9.8\thinspace\mathrm{N/kg}\cdot 0.76\thinspace\mathrm{m} \\\\
&=  101325\thinspace\mathrm{Pa} = 1\thinspace\mathrm{atm}
\end{align*}

---

{{< vimeo 110619312 >}}

---

### Hemisferios de Magdeburgo
En 1654, el científico alemán y burgomaestre de Magdeburgo **Otto von Guericke**, diseñó un par de grandes hemisferios de cobre, que se ajustaban con un anillo de acoplamiento formando una esfera. Tras sellar los bordes con grasa y extraer el aire con una bomba de vacío que él mismo había inventado, sendos tiros de 8 caballos intentaron separar ambos hemisferios, sin éxito, demostrando así el poder de la presión atmosférica.

---

{{< figure library="true" src="fluidos-4ESO/hemisferios-Magdeburgo.jpg" lightbox="false" width="70%" >}}

---

{{< vimeo 33482842 >}}

---

{{< vimeo 67896094 >}}

---
 
{{< youtube Q66DxZB6plE >}}

---

### Fenómenos meteorológicos
Las **diferencias** de **presión** entre distintos puntos de la atmósfera es el origen de numerosos **fenómenos meteorológicos**.

---

#### Viento
Los **vientos** soplan desde regiones con mayor presión hacia aquellas en las que la presión es menor (normalmente debido a diferencias de temperaturas).

---

#### Borrascas
Las **borrascas** o zonas de **baja presión** son regiones de la atmósfera en las que la presión atmosférica es más baja que la del aire circundante, lo que provoca que el aire húmedo ascienda, enfriándose, condensándose y originando **tiempo inestable**.

---

#### Anticiclones
Un **anticiclón** es una zona atmosférica de **alta presión**, en la cual la presión atmosférica es superior a la del aire circundante, provocando que el aire de las capas más altas descienda, originando **tiempo estable**.

---

{{< figure library="true" src="fluidos-4ESO/borrasca-anticiclon.jpg" title="[https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html](https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html)" lightbox="false" >}}

{{% /section %}}

---

## Cortometraje-documental
{{< youtube GuCGcOkoK5E >}}
---
title: Rédox
summary: "Equilibrio rédox. Ajuste rédox. Pilas galvánicas. Electrolisis."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/redox/diapositivas"

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

# Rédox

- [Oxidación-reducción](#/2)
- [Estado de oxidación](#/3)
- [Ajuste rédox](#/4)
- [Pilas galvánicas](#/5)
- [Potencial estándar de reducción](#/6)
- [Espontaneidad de las reacciones rédox](#/7)
- [Volumetrías rédox](#/8)
- [Electrolisis](#/9)
- [Aplicaciones y repercusiones de las reacciones rédox](#/10)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](#/PDF)

</section>

---

**Rédox** (reducción-oxidación) es un tipo de **reacción química** en la que el **estado de oxidación** de los átomos **cambia**, debido a una **transferencia** de **electrones**. 

---

{{% section %}}

## Oxidación-reducción

- [Oxidación](#/2/1)
- [Reducción](#/2/2)
- [Oxidantes y reductores](#/2/3)
- [Reacciones de dismutación](#/2/6)

(continúa hacia abajo)

👇

---

### Oxidación
*Pérdida* de *electrones* o *aumento* del *estado* de *oxidación* de un átomo.

---

### Reducción
*Ganancia* de *electrones* o *disminución* del *estado* de *oxidación* de un átomo.

---

### Oxidantes y reductores
El par de un agente oxidante y otro reductor que interviene en una determinada reacción se denomina **par rédox**.

---

Oxidante
: Sustancia capaz de oxidar a otras sustancias (causar que pierdan electrones), reduciéndose ella misma. El oxígeno (O<sub>2</sub>) es el agente oxidante por excelencia.

{{< figure src="redox-2Bach-quimica/oxidante.svg" title="[Pictograma de peligro](https://echa.europa.eu/es/regulations/clp/clp-pictograms) que indica que una sustancia es **comburente/oxidante**." lightbox="false" width="30%" >}}

---

Reductor
: Sustancia capaz de reducir a otras sustancias (causar que ganen electrones), oxidándose ella misma. Los metales electropositivos son buenos reductores.

---

### Reacciones de dismutación

Las reacciones de **dismutación** son aquellas en las que la misma especie se reduce y se oxida a la vez.

{{% /section %}}

---

{{% section %}}

## Estado de oxidación

El **estado de oxidación** describe el grado de oxidación (pérdida de electrones) de un átomo en un compuesto químico.

(continúa hacia abajo)

👇

---

Conceptualmente, el estado de oxidación es la carga hipotética que tendría un átomo si todos los enlaces con átomos de diferentes elementos fueran 100 \% iónicos, sin componente covalente.

---

Pérdida de electrones
: Aumenta el estado de oxidación.

Ganancia de electrones
: Disminuye el estado de oxidación (pudiendo ser **negativo**).

---

### Reglas para asignar estados de oxidación

> En [esta tabla periódica](https://fisiquimicamente.com/blog/2020/08/23/tabla-periodica-de-los-elementos/tabla-periodica-elementos-estados-oxidacion.pdf) puedes ver los posibles **estados de oxidación** de la mayoría de los **elementos químicos**.

---

1. El estado de oxidación de un elemento en estado libre es 0.
2. El estado de oxidación de un ion monoatómico coincide con la carga eléctrica del ion.
3. La suma de los estados de oxidación es igual a 0 para compuestos neutros e igual a la carga eléctrica neta para las especies iónicas poliatómicas.
4. Los metales alcalinos (grupo 1) y los alcalinotérreos (grupo 2) tienen estados de oxidación de +1 y de +2, respectivamente, en compuestos.

---

5. El estado de oxidación del flúor es –1 en compuestos.
6. El hidrógeno suele tener un estado de oxidación de $+1$ en compuestos, pero de –1 en hidruros.
7. El oxígeno suele tener un estado de oxidación de –2 en compuestos.
8. En compuestos binarios metálicos, los elementos del grupo 17 tienen un estado de oxidación de –1, los del grupo 16 de –2 y los del grupo 15 de –3.

{{% /section %}}

---

{{% section %}}

## Ajuste rédox

- [Método del estado de oxidación](#/4/2)
- [Método del ion-electrón](#/4/3)
- [Ejemplo](#/4/6)
- [Estequiometría rédox](#/4/13)

(continúa hacia abajo)

👇

---

Para describir la reacción electroquímica global de un proceso redox es necesario identificar y ajustar las **semirreacciones** de **oxidación** (&#8593; nº ox.) y **reducción** (&#8595; nº ox.) que lo componen.

---

### Método del estado de oxidación
Empleado sobre todo en reacciones rédox en **fase gaseosa**, consiste en calcular la **variación** del **estado** de **oxidación** en cada una de las semirreacciones e igualarlas multiplicando por coeficientes adecuados.

---
				
### Método del ion-electrón
Empleado en reacciones rédox que ocurren en **disolución** (ácida o básica).

---
				
#### Pasos

1. Ajustar átomos distintos de O e H.
2. Ajustar los átomos de O e H.
    - Medio ácido: añadir 1 H<sub>2</sub>O por cada O que falte y compensar con H<sup>+</sup> al otro lado de la ecuación.
    - Medio básico: añadir 1 H<sub>2</sub>O por cada O que exceda y compensar con OH<sup>–</sup> al otro lado de la ecuación.

---

3. Ajustar las cargas añadiendo electrones a la parte más positiva.
4. Igualar el número de electrones multiplicando por coeficientes adecuados.
5. Sumar las semirreacciones cancelando los electrones y términos comunes.

---
   
### Ejemplo

> Ajustar la siguiente ecuación en medio ácido:
$$
\mathrm{Cu} + \mathrm{HNO_3} \longrightarrow \mathrm{Cu(NO_3)_2} + \mathrm{NO} + \mathrm{H_2O}
$$

---

Escribimos las **semirreacciones** de oxidación (&#8593; nº ox.) y reducción (&#8595; nº ox.):
\begin{align*}
\text{oxidación (Cu: $0\rightarrow +2$): } \mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} \\\\
\text{reducción (N: $+5 \rightarrow +2$): } \mathrm{NO_3^-} &\longrightarrow \mathrm{NO}
\end{align*}

---

Ajustamos los oxígenos añadiendo moléculas de agua:

\begin{align*}
\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} \\\\
\mathrm{NO_3^-} &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O}
\end{align*}

---

Ajustamos los H añadiendo H<sup>+</sup>:

\begin{align*}
\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} \\\\
4\thinspace\mathrm H^+ + \mathrm{NO_3^-} &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O}
\end{align*}

---

Ajustamos las cargas añadiendo electrones:

\begin{align*}
\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} + 2\thinspace\mathrm e^- \\\\
4\thinspace\mathrm H^+ + \mathrm{NO_3^-} + 3\thinspace\mathrm e^- &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O}
\end{align*}

---

Igualamos el número de electrones multiplicando por coeficientes adecuados:

\begin{align*}
(\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} + 2\thinspace\mathrm e^-)\times 3 \\\\
(4\thinspace\mathrm H^+ + \mathrm{NO_3^-} + 3\thinspace\mathrm e^- &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O})\times 2
\end{align*}

---

Sumamos las semirreacciones para obtener la ecuación global:

$$				
\boxed{3\thinspace\mathrm{Cu} + 8\thinspace\mathrm{HNO_3} \longrightarrow 3\thinspace\mathrm{Cu(NO_3)_2} + 2\thinspace\mathrm{NO} + 4\thinspace\mathrm{H_2O}}
$$

---

### Estequiometría rédox

Con la reacción ajustada se pueden realizar todo tipo de **cálculos estequiométricos**.

{{% /section %}}

---

{{% section %}}

## Pilas galvánicas

Las **pilas galvánicas** (Galvani) o voltaicas (Volta) son celdas electroquímicas en las que se genera **electricidad** a partir de una **reacción rédox espontánea**.

(continúa hacia abajo)

👇

---

### Pila Daniell

Inventada por John Frederick Daniell en 1836, consiste en dos electrodos de zinc y cobre, inmersos en sendas disoluciones que contienen sus iones (Zn<sup>2+</sup> y Cu<sup>2+</sup>), conectadas por un puente salino, que permite el flujo de iones entre ambas disoluciones. Los electrones fluyen entre ambos electrodos gracias al hilo conductor que los conecta.

---

#### Puente salino

Un **puente salino** es un dispositivo de laboratorio que se utiliza para conectar las semiceldas de oxidación y reducción de una celda galvánica, cerrando así el circuito y manteniendo la electroneutralidad de las disoluciones.

---

Si no hubiera puente salino, la disolución de una semicelda acumularía carga negativa y la disolución de la otra semicelda acumularía carga positiva a medida que se produjera la reacción, lo que impediría rápidamente que se produjera una nueva reacción y, por tanto, la producción de electricidad.

---

Existen principalmente dos tipos de puentes salinos: tubo de vidrio (forma de U) y papel de filtro, en los que se utilizan electrolitos relativamente débiles (sales inertes solubles), como combinaciones de iones potasio o amonio y cloruro o nitrato.

---

{{< figure src="redox-2Bach-quimica/pila-daniell.svg" title="Zn(s) | Zn<sup>2+</sup> (1 M) || Cu<sup>2+</sup> (1 M) | Cu(s)" lightbox="false" width="80%" >}}

{{% /section %}}

---

{{% section %}}

## Potencial estándar de reducción $E^\circ$

Es la tendencia de una especie química a ser reducida en su **estado estándar** ($p = 1\thinspace\mathrm{bar} = 10^5\thinspace\mathrm{Pa}$ y $c = 1\thinspace\mathrm M$). Se puede medir experimentalmente con ayuda del **electrodo estándar de hidrógeno**.

---

### Electrodo estándar de hidrógeno

{{< figure src="redox-2Bach-quimica/electrodo-estandar-hidrogeno.svg"  lightbox="false" width="90%" >}}

---

{{< figure src="redox-2Bach-quimica/potencial-estandar-reduccion.svg"  lightbox="false" width="100%" >}}

---

> Consulta [en esta tabla](https://es.wikipedia.org/wiki/Anexo:Tabla_de_potenciales_de_reducción) los valores del potencial estándar de reducción de una gran variedad de especies químicas.

{{% /section %}}

---

{{% section %}}

## Espontaneidad de las reacciones rédox

(continúa hacia abajo)

👇

---

### Potencial de pila
El potencial estándar de una pila, $E_\text{pila}^\circ$, se calcula como la diferencia entre los potenciales estándar de reducción de las dos semirreacciones:

$$
E_\text{pila}^\circ = E_\text{cátodo}^\circ - E_\text{ánodo}^\circ
$$

---

Este potencial puede relacionarse con la **energía** de **Gibbs**, $\Delta G^\circ$, a través de la expresión:

$$
\Delta G^\circ = -nFE_\text{pila}^\circ,
$$

donde $n$ es el número de electrones transferidos en la reacción y $F \approx 96485\thinspace\mathrm{C/mol}$ es la constante de Faraday.

---

Una **reacción rédox espontánea** se caracteriza por un valor **negativo** de $\Delta G^\circ$, lo que corresponde a un valor **positivo** de $E_\text{pila}^\circ$.

$$
\text{reacción rédox espontánea} \Leftrightarrow E_\text{pila}^\circ > 0	
$$

{{% /section %}}

---

{{% section %}}

## Volumetrías rédox

Una **valoración/titulación rédox** es un método de análisis químico cuantitativo para determinar la concentración de un oxidante o reductor identificado (***analito***), que sufre una reacción rédox con una disolución estándar de reductor u oxidante de concentración conocida (**valorante**).

---

{{< figure src="acido-base-2Bach-quimica/volumetria-acido-base.svg"  lightbox="false" width="90%" >}}

---

A menudo es necesario utilizar un **indicador rédox** y/o un **potenciómetro** para conocer el **punto de equivalencia**.

---

### Punto de equivalencia

En el punto de equivalencia, el oxidante ha reaccionado con la cantidad equivalente de reductor, por lo que:

<div align="center" style="margin-bottom: 1rem">
 
*c*<sub>r</sub>*n*<sub>o</sub> = *c*<sub>o</sub>*n*<sub>r</sub>

*c*<sub>r</sub>*M*<sub>o</sub>*V*<sub>o</sub> = *c*<sub>o</sub>*M*<sub>r</sub>*V*<sub>r</sub>
</div>

donde *n* son los moles, *c* representa los coeficientes estequiométricos, *M* es la molaridad y *V* es el volumen.

---

### Ejemplos

- [Yodometría](#/8/5)
- [Permanganometría](#/8/9)

(continúa hacia abajo)

👇

---

#### Yodometría

Generalmente utilizada para analizar la concentración de agentes oxidantes en muestras de agua, implica la valoración indirecta de yodo liberado por reacción con el analito.

---
					
El tiosulfato de sodio (Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>) suele utilizarse como agente reductor.

---
					
La aparición o desaparición de yodo elemental indica el punto final.

---
					
No confundir con la **yodimetría**, que es una valoración directa utilizando yodo como sustancia valorante.

---

#### Permanganometría

Involucra el uso de permanganatos, típicamente el KMnO<sub>4</sub>, y se utiliza para medir la cantidad de analito, como por ejemplo hierro(II), en una muestra química desconocida.

---

En la mayoría de los casos, la permanganometría se lleva a cabo en una **disolución muy ácida**, en la que tiene lugar la siguiente reacción química:

<div align="center" style="margin-bottom: 1rem">
MnO<sub>4</sub><sup>–</sup> + 8 H<sup>+</sup> + 5 e<sup>–</sup> &#10230; Mn<sup>2+</sup> + 4 H<sub>2</sub>O; &emsp; <em>E</em><sup>&#x26AC;</sup> = +1.51 V
</div>

lo que demuestra que, en un medio muy ácido, el KMnO<sub>4</sub> es un agente oxidante muy fuerte.

---

En una **disolución muy básica**, solo se transfiere un electrón:

<div align="center" style="margin-bottom: 1rem">
MnO<sub>4</sub><sup>–</sup> + e<sup>–</sup> &#10230; MnO<sub>4</sub><sup>2–</sup>; &emsp; <em>E</em><sup>&#x26AC;</sup> = +0.56 V
</div>

{{% /section %}}

---

{{% section %}}

## Electrolisis

La **electrolisis** es una técnica que utiliza corriente eléctrica continua (CC) para impulsar una reacción química no espontánea.

(continúa hacia abajo)

👇

---

- [Celda (o cuba) electrolítica vs. celda galvánica](#/9/2)
- [Leyes de Faraday](#/9/5)
- [Electrolisis del agua](#/9/10)
- [Aplicaciones](#/9/14)

---

### Celda (o cuba) electrolítica vs. celda galvánica

- En una **celda electrolítica**, igual que en una celda galvánica, la reducción tiene lugar en el cátodo, y la oxidación en el ánodo. Sin embargo, debido a que el flujo de electrones está invertido, la polaridad de los electrodos está también invertida, por lo que el **ánodo** es **positivo** y el **cátodo negativo**.

---

- El potencial de la celda es positivo en la pila, negativo en la cuba.

---

- Además, en una cuba electrolítica los dos electrodos o bien están sumergidos en una disolución del ion del oxidante (por ejemplo, cuando se dan baños metálicos por [electrodeposición](https://es.wikipedia.org/wiki/Electrodeposición)) o bien en la disolución del electrolito fundido (como en la electrolisis del NaCl); en lugar de estar separados por un puente salino o por una membrana semipermeable, como es el caso de las pilas.

---

### Leyes de Faraday

Son **expresiones cuantitativas** que relacionan **magnitudes electroquímicas**, descritas por primera vez por Michael Faraday en 1833.

---

1. La masa de sustancia depositada en un electrodo, $m$, es directamente proporcional a la carga eléctrica transferida a ese electrodo, $Q$:
    $$
		m \propto Q	
		$$

---

2. Para una determinada cantidad de carga eléctrica, la masa de sustancia depositada en un electrodo, $m$, es directamente proporcional a su *masa equivalente*, $E$, que no es más que su masa molar, $M$, dividida por su valencia iónica (electrones por ion), $n$:
    $$
    m \propto E	= \frac{M}{n}
		$$

---    

Ambas leyes se pueden combinar en una sola expresión matemática dada por:

$$
m = \frac{Q}{F}\cdot \frac{M}{n},
$$

donde $Q$ es la carga eléctrica total transferida, $F \approx 96485\thinspace\mathrm{C/mol}$ es la constante de Faraday, $M$ es la masa molar de la sustancia (en g/mol) y $n$ es la valencia iónica (electrones por ion).

---

Si la **corriente** es **constante**, $Q = It$, y entonces:

$$
m = \frac{It}{F}\cdot\frac{M}{n}
$$

---

### Electrolisis del agua

Consiste en la **descomposición** del **agua** (H<sub>2</sub>O) en los gases oxígeno (O<sub>2</sub>) e hidrógeno (H<sub>2</sub>) mediante **electricidad**.

---

El oxígeno se oxida, depositándose en el ánodo, mientras que el hidrógeno se reduce, depositándose en el cátodo.

---

En condiciones ideales, la cantidad de hidrógeno depositada es el doble que la de oxígeno, de acuerdo a la ecuación:

<div align="center" style="margin-bottom: 1rem">
2 H<sub>2</sub>O(l) &#10230; 2 H<sub>2</sub>(g) + O<sub>2</sub>(g)
</div>

---

{{< figure src="redox-2Bach-quimica/electrolisis-agua.svg" lightbox="false" width="35%" >}}

---

### Aplicaciones

- Obtención de elementos puros, como el Al, Li, Na, K, Mg, Ca o Cu, mediante electrometalurgia.

> Aprende más sobre el proceso de **obtención** del **cobre** en [esta excelente entrada del **blog**]({{< ref "/post/pureza-quimica-cobre/index.md" >}}).

---

- Producción de cloro e hidróxido de sodio, mediante el [**proceso cloroalcalino**](https://es.wikipedia.org/wiki/Proceso_cloroalcalino).
    {{< figure src="redox-2Bach-quimica/cloroalcalino.svg" title="**Proceso cloroalcalino de membrana**." lightbox="false" width="100%" >}}

---

- Producción de clorato de sodio y clorato de potasio.

---

- Producción de hidrógeno para su uso como combustible para naves espaciales y submarinos nucleares.

{{% /section %}}

---

{{% section %}}

## Aplicaciones y repercusiones de las reacciones rédox

- [Pilas de combustible](#/10/1)
- [Prevención de la corrosión de metales](#/10/5)

(continúa hacia abajo)

👇

---

### Pilas de combustible

Son **celdas electroquímicas** que **convierten** la **energía química** de un **combustible** y un agente oxidante en **electricidad**, mediante un par de reacciones **rédox**.

---

#### Pilas de hidrógeno

En las **pilas** de **hidrógeno**, el oxígeno se reduce en el cátodo y el hidrógeno se oxida en el ánodo, liberando electrones. Cuando el oxígeno y el hidrógeno se encuentran, se forma vapor de agua, que es el único residuo que se produce.

---

{{< figure src="redox-2Bach-quimica/pila-combustible.svg" lightbox="false" width="60%" >}}

---

A pesar de sus ventajas, aún no se utilizan ampliamente, debido a su coste y baja eficiencia comparados con otras formas de producir electricidad.

---

### Prevención de la corrosión de metales

- [Corrosión](#/10/6)
- [Anodización](#/10/9)
- [Galvanoplastia](#/10/10)

(continúa hacia abajo)

👇

---

#### Corrosión

La **corrosión** es el proceso natural por el que los metales, como el hierro, se oxidan, volviendo a su estado de oxidación más estable, y destruyéndose gradualmente.

---

{{< figure src="redox-2Bach-quimica/corrosivo.svg" title="[Pictograma de peligro](https://echa.europa.eu/es/regulations/clp/clp-pictograms) que indica que una sustancia es **corrosiva**." lightbox="false" width="55%" >}}

---

El oxígeno atmosférico es el cátodo (oxidante) más común en las reacciones rédox de corrosión.

{{< figure src="redox-2Bach-quimica/corrosion.svg" lightbox="false" width="100%" >}}

---

#### Anodización		

Proceso electrolítico de *pasivación* que se utiliza para aumentar el grosor de la capa de óxido natural en la superficie de piezas metálicas, especialmente de aluminio (Al).

---
		
#### Galvanoplastia

Es la aplicación tecnológica de la deposición de metales mediante electricidad ([electrodeposición](https://es.wikipedia.org/wiki/Electrodeposición)), formando un recubrimiento protector, típicamente de zinc sobre hierro o acero (aleación de Fe y C).

---

{{< figure src="redox-2Bach-quimica/galvanizacion.svg" lightbox="false" width="100%" >}}

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

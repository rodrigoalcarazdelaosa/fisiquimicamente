---
title: Electricidad y electrónica
summary: "Electricidad y circuitos eléctricos. Ley de Ohm. Dispositivos electrónicos. Aspectos industriales de la energía."

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# Electricidad y electrónica

- [Concepto de energía](#/1)
- [Transformaciones energéticas](#/2)
- [Calor y temperatura](#/3)
- [Fuentes de energía](#/4)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

---

{{% section %}}

## Corriente eléctrica

Definimos la **corriente eléctrica** como **cargas** en **movimiento** a través de un conductor.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/corriente.svg" lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Magnitudes eléctricas

- [Intensidad de corriente $I$](#/1)
- [Diferencia de potencial $V$](#/1)
- [Resistencia $R$](#/1)

(continúa hacia abajo)

👇

---

### Intensidad de corriente $I$
La intensidad de corriente es la **cantidad** de **carga** eléctrica que **circula** por un circuito por unidad de **tiempo**.

En el **SI** se mide en **amperios** (A).

---

### Diferencia de potencial $V$
También llamada **tensión**, es la **diferencia** de **energía** eléctrica por unidad de carga que hay entre dos puntos de un circuito.

En el **SI** se mide en **voltios** (V).

---

### Resistencia $R$
La resistencia es una medida de la **oposición** que ofrece un material al **paso** de la **corriente** eléctrica.

En el **SI** se mide en **ohmios** ($\Omega$).

---

#### ¿De qué depende la resistencia en un alambre?
<iframe src="https://phet.colorado.edu/sims/html/resistance-in-a-wire/latest/resistance-in-a-wire_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

---

[Aquí](https://es.wikipedia.org/wiki/Resistividad#Tabla_de_resistividades_de_algunos_materiales) tienes los valores de resistividad $\rho$ de algunos materiales.

{{% /section %}}

---

{{% section %}}

## Ley de Ohm

La **ley** de **Ohm** establece que la **diferencia** de **potencial** $V$ que aplicamos en los extremos de un conductor es **proporcional** a la **intensidad** de corriente $I$ que circula por él, siendo la constante de proporcionalidad la resistencia $R$ del conductor:		
$$
V = R\cdot I
$$

---

### Simulación

<iframe src="https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Buenos y malos conductores
Según su **comportamiento** frente a la **corriente eléctrica**, distinguimos entre:

- [Buenos conductores]()
- [Malos conductores]()
- [Semiconductores]()

(continúa hacia abajo)

👇

---

### Buenos conductores
O **conductores** a secas. **Permiten** el **paso** de la **corriente** eléctrica, ofreciendo poca o ninguna resistencia al flujo de electrones. Los **metales** son buenos conductores.

---

### Malos conductores
O **aislantes**, son materiales que **impiden** el **paso** de la **corriente** eléctrica, ofreciendo mucha resistencia al flujo de electrones. La **madera** y el **plástico** son ejemplos de aislantes.

---

### Semiconductores
Materiales que pueden comportarse como **conductores** o como **aislantes**. El **silicio** (Si) es el semiconductor más empleado y es la base de la **electrónica** actual.

{{% /section %}}

---

{{% section %}}

## Máquinas eléctricas
Una **máquina eléctrica** es un dispositivo capaz de **transformar** cualquier **forma** de **energía** en energía **eléctrica** o a la inversa. Distinguimos entre:

- [Generadores]()
- [Motores]()
- [Transformadores]()

(continúa hacia abajo)

👇

---

### Generadores
Transforman **energía mecánica en eléctrica**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/generadores.jpg" lightbox="false" width="60%" >}}

---

### Motores
Transforman **energía eléctrica en mecánica**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/motor-electrico.jpg" lightbox="false" width="70%" >}}

---

### Transformadores
Transforman las **características** de la **energía**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/transformador.jpg" lightbox="false" width="80%" >}}

{{% /section %}}

---

{{% section %}}

## Circuitos eléctricos
Llamamos **circuito eléctrico** al conjunto de elementos que, interconectados entre sí, posibilitan que se establezca una **corriente eléctrica**.

- [Componentes básicos]()
- [En serie]()
- [En paralelo]()

(continúa hacia abajo)

👇

---

### Componentes básicos

- [Conductores]()
- [Generadores]()
- [Receptores]()
- [Elementos de control]()
- [Elementos de protección]()

---

#### Conductores
**Hilos/cables** por donde **circulan** las **cargas** eléctricas.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/cable.jpg" lightbox="false" width="55%" >}}

---

#### Generadores
**Producen** y **mantienen** la **corriente eléctrica** por el circuito, como las **pilas** 🔋 o las **baterías**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/baterias.png" lightbox="false" width="100%" >}}

---

#### Receptores
Elementos que **transforman** la **energía eléctrica** en otro tipo de energía, como las **resistencias**, las **bombillas** 💡 o los **motores**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/resistencias.jpg" lightbox="false" width="60%" >}}

---

##### ¿Quieres saber qué significan las bandas de color que aparecen en las resistencias?
{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/resistencia-colores.svg" title="**Código** de **colores** para conocer el **valor** de una **resistencia**." lightbox="false" width="100%" >}}

---

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/tabla-colores.png" lightbox="false" width="50%" >}}

---

En la resistencia de la figura:

- La primera cifra será un 2 por ser <span style="color:#AB2524">roja</span>.
- La segunda cifra será un 7 por ser <span style="color:#83639D">violeta</span>.
- El multiplicador será un 5 por ser <span style="color:#48A43F">verde</span>.
- La toleancia será del 10$\thinspace$% por ser <span style="color:#C0C0C0">plateada</span>.

El valor de la resistencia será por tanto:

$$
2.7\times 10^6 \pm 10\thinspace\\%\thinspace\Omega
$$

---

#### Elementos de control
Permiten **dirigir** o **interrumpir** el paso de la **corriente eléctrica**, como los **interruptores**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/interruptores.webp" lightbox="false" width="70%" >}}

---

#### Elementos de protección
**Protegen** los **circuitos** y a las **personas**, como los **fusibles**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/fusibles.jpg" lightbox="false" width="80%" >}}

---

#### Símbolos
{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/elementos-circuito.svg" title="**Símbolos** de algunos de los **elementos** típicos de un **circuito eléctrico**." lightbox="false" width="100%" >}}

---

### En serie
En los **circuitos** conectados en **serie**, la intensidad $I$ es la misma, mientras que la diferencia de potencial $V$ es la suma.

---

Los **generadores** han de conectarse entre polos de **distinto signo**.

La resistencia equivalente $R_\text{eq}$ es mayor que la mayor de todas las resistencias:

$$
R_\text{eq} = R_1 + R_2
$$

---

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/resistencias-serie.svg" lightbox="false" width="55%" >}}

---

### En paralelo				
En los **circuitos** conectados en **paralelo**, la diferencia de potencial $V$ es el mismo, mientras que la intensidad $I$ es la suma.

---

Los **generadores** han de conectarse entre polos del **mismo signo**.

La resistencia equivalente $R_\text{eq}$ es menor que la menor de todas las resistencias:

$$
\frac{1}{R_\text{eq}} = \frac{1}{R_1} + \frac{1}{R_2}
$$

---

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/resistencias-paralelo.svg" title="Circuito eléctrico con dos **resistencias** conectadas en **paralelo**. La **resistencia equivalente** viene dada por $1/R_\text{eq} = 1/R_1 + 1/R_2$." lightbox="false" width="100%" >}}

---

Puedes jugar a **construir circuitos eléctricos** con esta excelente **simulación**:
<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% section %}}
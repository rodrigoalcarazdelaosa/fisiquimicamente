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

#### ¿De qué depende la **resistencia** en un **alambre**?
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

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/generadores.jpg" lightbox="false" width="70%" >}}

---

### Motores
Transforman **energía eléctrica en mecánica**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/motor-electrico.jpg" title="Rotor, estátor y ventilador de un motor eléctrico.<br> https://commons.wikimedia.org/wiki/File:Rotterdam_Ahoy_Europort_2011_(14).JPG" lightbox="false" >}}

---

### Transformadores
Transforman las **características** de la **energía**.

{{< figure library="true" src="electricidad-electronica-2ESO-3ESO/transformador.jpg" title="Foto de [**Iqram-O-dowla Shawon**](https://unsplash.com/@iqram_shawon) en [Unsplash](https://unsplash.com/)." lightbox="false" >}}

{{% /section %}}
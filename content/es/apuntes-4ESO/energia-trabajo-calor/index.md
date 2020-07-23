---
title: Energía, trabajo y calor
subtitle: Energía y sus formas de intercambio (trabajo y calor)
summary: "Energía y sus formas de intercambio (trabajo y calor)."
tags:
- 4º ESO
- energía
categories:
- Física

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Hans Braxmeier**](https://pixabay.com/es/users/hans-2/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: download
  name: Póster
  url: energia-trabajo-calor-poster.pdf
  
slides: energia-trabajo-calor-4ESO
---

{{% toc %}}

La **energía** es la capacidad para realizar un trabajo, y se mide en **julios** ($1\thinspace \mathrm{J} = 1\thinspace\mathrm{kg}\thinspace\mathrm{m^2}\thinspace\mathrm{s^{-2}}$).

{{< spoiler text="Aprende más sobre las <strong>formas</strong> y <strong>cambios</strong> de <strong>energía</strong> con esta <strong>simulación</strong>" >}}
<iframe src="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>
{{< /spoiler >}}

## Energías cinética, potencial y mecánica
### Energía cinética $E_\mathrm c$
Es la energía que posee un cuerpo por el hecho de estar en **movimiento**. Depende de la masa $m$ y de la velocidad $v$:
$$
E_\mathrm c = \frac{1}{2}mv^2
$$

### Energía potencial $E_\mathrm p$
Es la energía que posee un cuerpo debido a su **posición** y/o **configuración**. La energía potencial **gravitatoria** que posee una masa $m$ situada a una altura $h$ sobre la superficie terrestre vale:
$$
E_\mathrm p = m g h,
$$
donde $h\ll R_\mathrm T$ (con $R_\mathrm T$ el radio de la Tierra) y $g$ es el valor de la aceleración de la gravedad.

### Energía mecánica $E_\mathrm m$
Es la **suma** de la energía **cinética** $E\_\mathrm{c}$ y la energía **potencial** $E_\mathrm{p}$:
$$
E_\mathrm m = E_\mathrm c + E_\mathrm p
$$

## Conservación de la energía
### Principio de conservación de la energía mecánica
> Cuando sobre un cuerpo actúan únicamente \textbf{fuerzas conservativas}, su energía mecánica se conserva.

Ejemplos de **fuerzas conservativas**: fuerzas gravitatorias, elásticas o electrostáticas.

La fuerza de **rozamiento** es un ejemplo de fuerza **no conservativa** o **disipativa**.

### Principio de conservación de la energía
> En cualquier proceso de la naturaleza, la energía \textbf{total} permanece constante.

Puedes aprender más sobre la **conservación** de la **energía** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_es.html" width="720" height="600" scrolling="no" allowfullscreen></iframe>

## Intercambio de energía
La energía se puede intercambiar/transferir mediante **trabajo** o **calor**.

### Trabajo $W$
El **trabajo** se transfiere cuando entre dos cuerpos se realizan **fuerzas** que provocan desplazamientos o cambios en sus dimensiones.

El trabajo realizado por una fuerza $\vec F$ constante viene dado por:
$$
W = \vec F\cdot \vec d = F\cdot d \cdot \cos\alpha,
$$
donde $F$ es el módulo de la fuerza aplicada, $d$ el espacio recorrido y $\cos\alpha$ es el coseno del ángulo formado por la fuerza y el desplazamiento.

### Calor $Q$
El **calor** se transfiere entre dos cuerpos que tienen **diferente temperatura**.

Por razones históricas el calor se mide a menudo en **calorías** ($1\thinspace\mathrm{cal} = 4.18\thinspace\mathrm{J}$).

## Trabajo y potencia
La **potencia** $P$ es el trabajo $W$ realizado por unidad de tiempo $t$:
$$
P = \frac{W}{t} = \frac{\vec F\cdot \vec d}{t} = \vec F\cdot \vec v
$$
En el **SI** la potencia se mide en **vatios** o ***watts*** ($1\thinspace\mathrm W = 1\thinspace\mathrm{J/s}$), siendo el **caballo de vapor**[^1] ($1\thinspace\mathrm{CV} \approx 735\thinspace\mathrm{W}$) otra unidad de uso común.

[^1]: No confundir con el *horsepower* anglosajón ($1\thinspace\mathrm{HP} \approx 1.014\thinspace\mathrm{CV}$).

El **kilovatio hora**, $\mathrm{kW}\thinspace\mathrm h$, es una unidad de **energía** muy utilizada en la facturación para la energía entregada a los consumidores por las compañías eléctricas:
$$
1\thinspace\mathrm{kW}\thinspace\mathrm h\cdot \frac{1000\thinspace\mathrm{W}}{1\thinspace\mathrm{kW}}\cdot \frac{3600\thinspace\mathrm{s}}{1\thinspace\mathrm{h}} = 3.6\times 10^6\thinspace\mathrm{W\cdot s} = 3.6\times 10^6\thinspace\mathrm J
$$

## Efectos del calor sobre los cuerpos
### Variación de temperatura
La relación entre el calor $Q$ que se proporciona a una masa $m$ de una sustancia y el incremento de temperatura $\Delta T$ viene dada por:
$$
Q = m\cdot c\cdot \Delta T,
$$
donde $c$ es el **calor específico** de la sustancia, que representa la cantidad de energía que es necesario suministrar a la unidad de masa de la sustancia para elevar su temperatura en una unidad. En el **SI** se mide en $\mathrm{J\thinspace kg^{-1}\thinspace K^{-1}}$.

<!-- {{< spoiler text="¿Sabes que el calor específico depende de la temperatura?" >}}
Hablar sobre la ley de Dulong y Petit...
{{< /spoiler >}} -->

### Dilatación
Como regla general, un cuerpo aumenta su volumen (*se dilata*) al aumentar su temperatura.

Si consideramos una varilla de longitud inicial $l_0$ a una temperatura inicial $T_0$ y elevamos su temperatura hasta $T$, la varilla aumentará su longitud hasta $l$.

{{< figure library="true" src="energia-trabajo-calor-4ESO/dilatacion.png" lightbox="true" >}}

El aumento de longitud experimentado, $\Delta l = l-l_0$, es proporcional a la longitud inicial $l_0$ y a la variación de temperatura $\Delta T = T-T_0$:
$$
\Delta l = \alpha\cdot l_0\cdot \Delta T,
$$
donde $\alpha$ es el llamado **coeficiente de dilatación lineal**. Se puede demostrar que los coeficientes de dilatación superficial y cúbica son el doble y el triple, respectivamente, del lineal:
$$
\Delta S = 2\alpha \cdot S_0\cdot \Delta T;\quad \Delta V = 3\alpha \cdot V_0\cdot \Delta T
$$  

### Cambios de estado
Al transferir calor a un cuerpo, su temperatura aumenta. Al variar la temperatura de un cuerpo, éste puede [**cambiar** su **estado** de agregación]({{< ref "/apuntes-2eso-3eso/materia/index.md#cambios-de-estado" >}}).

**Durante** un **cambio** de estado, la **temperatura** del cuerpo permanece **constante**, ya que durante el cambio la energía transferida al cuerpo se emplea en reorganizar las partículas (romper enlaces).

La cantidad de calor $Q$ que es necesario comunicar a una sustancia para que cambie de estado depende de la propia sustancia y de su masa $m$, a través de la expresión:
$$
Q = m\cdot L,
$$
donde $L$ es el **calor latente**, que representa la cantidad de energía requerida por la sustancia para cambiar de estado. En el **SI** se mide en $\mathrm{J/kg}$.

## Máquinas térmicas
Consideramos una **máquina térmica** a un sistema que funciona **periódicamente** entre dos focos a distinta temperatura, y transforma parte del calor absorbido del foco caliente en trabajo, cediendo otra parte al foco frío:

{{< figure library="true" src="energia-trabajo-calor-4ESO/maquina-termica.png" title="Esquema de una **máquina térmica**. La máquina absorbe calor desde la fuente caliente *T*<sub>1</sub> y cede calor a la fría *T*<sub>2</sub>, produciendo trabajo: *Q*<sub>1</sub> = *W* + |*Q*<sub>2</sub>|. Adaptada de [https://commons.wikimedia.org/wiki/File:HeatEngine.svg](https://commons.wikimedia.org/wiki/File:HeatEngine.svg)." lightbox="true" >}}

### Rendimiento energético
Llamamos **rendimiento energético**, $\eta$, al cociente entre el *beneficio* y el *coste*:
$$
	\eta = \frac{\text{trabajo que obtengo}}{\text{calor que consumo}}
$$
Para un **motor**:
$$
	\eta = \frac{W}{Q_1} = \frac{Q_1-|Q_2|}{Q_1} = 1-\frac{|Q_2|}{Q_1}<1
$$

Se puede demostrar que el rendimiento de una máquina térmica **ideal** (llamada **máquina de Carnot**) solo depende de las temperaturas de ambos focos:
$$
\eta_\text{ideal} = 1-\frac{T_2}{T_1},
$$
que es el máximo rendimiento que puede obtenerse para un ciclo térmico que se realiza entre dos fuentes con estas temperaturas.
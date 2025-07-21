---
title: Ondas
url: "/recursos-fisica-quimica/apuntes/2bach/fisica/ondas"
subtitle: Ondas armónicas, sonido y fenómenos ondulatorios
summary: "<code style='color: #2E3440;background:#88C0D0'>NOVEDAD</code><br>Ondas armónicas, sonido y fenómenos ondulatorios."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","fisica"]
authors:
- marta-rada-arias
- rodrigo-alcaraz-de-la-osa
- alba-lopez-valenzuela
- leticia-cabezas
tags:
- apuntes
- 2º Bach
- ondas
- sonido
categories:
- Física
weight: 6

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Arek Socha**](https://pixabay.com/es/users/qimono-1962238/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Póster ondas armónicas
  url: ondas-armonicas-poster.pdf
- icon_pack: fas
  icon:
  name: 📜 Póster sonido
  url: sonido-poster.pdf
- icon_pack: fas
  icon:
  name: 📜 Póster fenómenos ondulatorios
  url: fenomenos-ondulatorios-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Ejercicios
  url: ondas-ejercicios.pdf
- icon_pack: fas
  icon:
  name: 📝 Frikiexamen
  url: ondas-frikiexamen.pdf
- icon_pack: fas
  icon:
  name: 🎓 Ejercicios EBAU
  url: https://fisiquimicamente.com/recursos-fisica-quimica/ebau/fisica/por-temas/ondas/

slides: ondas-2Bach-fisica

math: true
---

{{% toc %}}

## Introducción
### Definición de onda
**Perturbación** (o variación de alguna propiedad del medio, como la presión, el campo eléctrico, magnético, etc.) que se **propaga** en el **espacio** y en el **tiempo**, transportando energía sin transportar materia. El **punto inicial** en el que se produce se denomina **foco**.

{{% callout example %}}
Para comprender mejor esto consideremos el siguiente **ejemplo**. Dejamos caer una piedra en un estanque. La piedra provoca un cambio de presión, una perturbación que se propaga. Aparecen ondas que nacen en el punto en el que cayó la piedra (foco) y se extienden hacia el exterior. En este caso el frente de ondas es circular. Si observamos lo que ocurre con objetos sobre la superficie del agua (hojas, un corcho, ...) veremos que, al pasar la onda, estos objetos se desplazan verticalmente (suben y bajan) pero no se desplazan por la superficie del agua.
{{% /callout %}}

### Clasificación de las ondas
#### Si se consideran las dimensiones de propagación

- Unidimensionales: se propagan en una sola dirección (ej. cuerdas).
- Bidimensionales: se propagan en dos direcciones (ej. ondas en la superficie del agua).
- Tridimensionales: se propagan en todas direcciones (ej. sonido o luz).

#### Según la dirección de propagación

En el ejemplo del estanque hemos visto que las partículas del agua viran en torno a sus posiciones de equilibrio (arriba y abajo) pero no avanzan con la onda. Teniendo en cuenta la dirección de vibración por un lado y la dirección de propagación de la onda por otro, podemos diferenciar dos tipos de ondas:

- Longitudinales: la vibración es paralela a la propagación (ej. sonido).

{{< youtube fMJrtheQfZw >}}

- Transversales: la vibración es perpendicular a la propagación (ej. ondas electromagnéticas).

{{< youtube g8GcMn7K0u4 >}}

#### Según su naturaleza

- Mecánicas: necesitan un medio material para propagarse (ej. sonido, ondas en cuerdas). El transporte de energía se produce en forma de energía mecánica (cinética y potencial) de las partículas del medio.
- Electromagnéticas: no necesitan medio material para propagarse, por lo que también pueden propagarse por el vacío (ej. luz). El transporte de energía se produce mediante campos eléctricos y magnéticos dependientes del tiempo (ondas electromagnéticas).

### Definición de medio elástico

Es aquel formado por partículas en equilibrio entre las cuales existen fuerzas de atracción y repulsión, comportándose como un **sistema masa-muelle**:

{{< figure library="true" src="ondas-2Bach-fisica/masa-muelle.svg" title="Se supone que las partículas del medio están unidas por muelles. Estos se oponen tanto a la compresión como a la extensión y por eso sirven para representar las fuerzas de atracción y repulsión entre las partículas." width="100%" lightbox="false" theme="light" >}}

Supongamos que se produce una perturbación en la partícula A (foco), que comienza a vibrar en torno a su posición de equilibrio, transmitiendo este movimiento con cierto retraso a las partículas adyacentes, y así sucesivamente. Por lo tanto, la energía se propaga pero las partículas no se desplazan.

## Ondas armónicas
### Definición y ecuación general de una onda armónica

Una **onda armónica** es una onda que se propaga en un medio elástico y cuya perturbación es armónica, es decir, que se puede describir mediante una función **sinusoidal** (la fuente que genera la onda describe un [**MAS**]({{< relref "apuntes-segundo-bach-fisica/mas/" >}}) con periodo $T$).

La **ecuación general** de una onda armónica unidimensional (propagándose en el eje $x$) es:

$$
\begin{align*}
y(x,t) & = A \sin(\omega t \pm kx + \varphi_0)                                      \\
y(x,t) & = A \sin\left[2\pi\left(\frac{t}{T} \pm \frac{x}{\lambda}\right) + \varphi_0\right]
\end{align*}
$$

Esta ecuación nos dice dónde se encuentra cada punto $x$ del medio en cada instante de tiempo $t$.

### Magnitudes características

#### Periodicidad espacial y temporal

Las ondas armónicas presentan una **doble periodicidad**:

Espacial
: Representada por la **longitud de onda** $\lambda$. Es la distancia entre dos puntos  consecutivos que se encuentran en el mismo estado de vibración (*en fase*). En el SI se mide en metros (m). Debe cumplirse que $y(x+n\lambda,t) = y(x,t)$, es decir, que la perturbación en un punto $x$ se repite cada $\lambda$ metros:

$$
\begin{align*}
y(x+n\lambda,t) & = A \sin[\omega t \pm k(x+n\lambda) + \varphi_0] \\
&= A \sin(\omega t \pm kx \pm nk\lambda + \varphi_0) \\
& = A \sin(\omega t \pm kx \pm n2\pi + \varphi_0) \\
&= A \sin(\omega t \pm kx + \varphi_0) = y(x,t)
\end{align*}
$$

Si consideramos cierto instante de tiempo $t$ (equivalente a sacar una foto de la onda):

{{< figure library="true" src="ondas-2Bach-fisica/y-vs-x.svg" width="100%" lightbox="false" theme="light" >}}

Temporal
: Representada por el **periodo** $T$, tiempo que tarda cada punto en realizar una oscilación completa. En el SI se mide en segundos (s). Debe cumplirse que $y(x,t+nT) = y(x,t)$, es decir, que la perturbación en un punto $x$ se repite cada $T$ segundos:

$$
\begin{align*}
y(x,t+nT) & = A \sin[\omega(t+nT) \pm kx + \varphi_0] \\
&= A \sin(\omega t + n\omega T \pm kx + \varphi_0)  \\
& = A \sin(\omega t + n2\pi \pm kx + \varphi_0) \\
&= A \sin(\omega t \pm kx + \varphi_0) = y(x,t)
\end{align*}
$$

Si consideramos un punto $x$:

{{< figure library="true" src="ondas-2Bach-fisica/y-vs-t.svg" width="100%" lightbox="false" theme="light" >}}

#### Frecuencia

Número de oscilaciones completas que realiza un punto en la onda en un segundo. Se mide en hertzios (Hz).

$$
f = \frac{1}{T}
$$

Es característica del foco e independiente del medio por el que se propaga la onda.

#### Pulsación

Número de oscilaciones de cada punto en $2\pi$&thinsp;s. Coincide con el número de ondas que pasan por un punto en $2\pi$&thinsp;s. Se mide en radianes por segundo (rad/s).

$$
\omega = \frac{2\pi}{T} = 2\pi f
$$

#### Número de onda

Número de longitudes de onda que hay en $2\pi$&thinsp;m. Se mide en radianes por metro (rad/m).

$$
k = \frac{2\pi}{\lambda}
$$

#### Fase

Ángulo que representa el estado de vibración de un punto en la onda. Se mide en radianes (rad).

$$
\varphi = \omega t \pm kx + \varphi_0,
$$

siendo $\varphi_0$ la fase inicial.

#### Amplitud *A*

Distancia máxima que se separa un punto de su posición de equilibrio. Es la misma para todos los puntos de la onda.

#### Velocidad de propagación

Velocidad a la que se propaga la perturbación en el medio. Se mide en m/s.

$$
v = \frac{\lambda}{T} = \lambda f = \frac{\omega}{k}
$$

{{< spoiler text="Pincha aquí para averiguar cómo se calcula la **velocidad** de **propagación** de una **onda mecánica**" >}}

- **Ondas transversales** en una **cuerda**:

$$
v = \sqrt{\frac{T}{\mu}},
$$

donde $T$ es la tensión de la cuerda y $\mu$ su densidad lineal de masa.

- **Ondas longitudinales** en **sólidos**:

$$
v = \sqrt{\frac{E}{\rho}},
$$

donde $E$ es el [módulo de Young](https://es.wikipedia.org/wiki/Módulo_de_Young) y $\rho$ la densidad del sólido.

- **Ondas longitudinales** en **líquidos**:

$$
v = \sqrt{\frac{K}{\rho}},
$$

donde $K$ es el [módulo de (in)compresibilidad](https://es.wikipedia.org/wiki/Módulo_de_incompresibilidad) y $\rho$ la densidad del líquido.

- **Ondas longitudinales** en **gases**:

$$
v = \sqrt{\frac{\gamma RT}{M}},
$$

donde $\gamma$ es el [coeficiente adiabático](https://es.wikipedia.org/wiki/Coeficiente_de_dilatación_adiabática) del gas (1.4 para el aire), $R$ es la constante de los gases ideales, $T$ es la temperatura del gas en kelvin y $M$ la masa molar del gas.

{{< /spoiler >}}

Es importante diferenciar la velocidad de propagación de la velocidad de vibración de las partículas del medio, $v(x,t)$, calculada derivando la ecuación de la onda:

$$
\begin{align*}
v(x,t) = \frac{\mathrm d y(x,t)}{\mathrm d t} &= A \omega \cos(\omega t \pm kx + \varphi_0) \\
&= \frac{2\pi A}{T}\cos\left[2\pi\left(\frac{t}{T} \pm \frac{x}{\lambda}\right) + \varphi_0\right]
\end{align*}
$$

Si quisiéramos calcular la aceleración de las partículas del medio, derivaríamos la velocidad:

$$
\begin{align*}
a(x,t) = \frac{\mathrm d v(x,t)}{\mathrm d t} &= -A \omega^2 \sin(\omega t \pm kx + \varphi_0) \\
&= -\frac{4\pi^2 A}{T^2}\sin\left[2\pi\left(\frac{t}{T} \pm \frac{x}{\lambda}\right) + \varphi_0\right]
\end{align*}
$$

### Criterio de signos

Se adopta el siguiente **criterio**:

- Signo **negativo** ($-$) para las ondas que se propagan hacia la **derecha** (en la dirección del eje $x$ positivo).
- Signo **positivo** ($+$) para las ondas que se propagan hacia la **izquierda** (en la dirección del eje $x$ negativo).

{{% callout warning %}}
Hemos visto la **notación** más empleada pero también nos podemos encontrar:

- En lugar de $\sin$ aparece $\cos$: todo es equivalente salvo en la fase inicial, pues están desfasadas $\pi/2$, ya que $\sin\varphi = \cos(\varphi-\pi/2); \cos\varphi = \sin(\varphi+\pi/2)$.
- Normalmente el $\pm$ acompaña a la parte espacial ($\pm kx$) pero los anglosajones se lo ponen a la parte temporal ($\pm \omega t$). En cualquier caso, si hay $-$ se desplaza hacia la derecha.
{{% /callout %}}

### Fase y desfase en una onda armónica

En general, en un instante $t$, el desfase $\symup\Delta \varphi$ entre dos puntos $x_1$ y $x_2$ viene dado por:

$$
\begin{align*}
\symup\Delta \varphi &= (\omega t \pm kx_2 + \varphi_0) - (\omega t \pm kx_1 + \varphi_0) \\
&= k\symup\Delta x = \frac{2\pi}{\lambda}\symup\Delta x
\end{align*}
$$

De forma análoga, para un punto dado $x$, el desfase $\symup\Delta \varphi$ entre dos instantes $t_1$ y $t_2$ es:

$$
\begin{align*}
\symup\Delta \varphi &= (\omega t_2 \pm kx + \varphi_0) - (\omega t_1 \pm kx + \varphi_0) \\
&= \omega\symup\Delta t = \frac{2\pi}{T} \symup\Delta t = 2\pi f \symup\Delta t
\end{align*}
$$

#### Concordancia de fase
Se dice que dos puntos de una onda están **en fase** cuando siempre se encuentran en el **mismo estado de vibración**, esto es, $\symup\Delta \varphi = 2\pi n$, donde $n$ es un número entero:

$$
\symup\Delta \varphi = 2\pi n \Rightarrow \frac{2\pi}{\lambda}\symup\Delta x = 2\pi n \Rightarrow \symup\Delta x = n\lambda
$$

#### Oposición de fase
Se dice que dos puntos de una onda están **en oposición de fase** cuando siempre se encuentran en **estados de vibración opuestos**, esto es, $\symup\Delta \varphi = (2n-1)\pi$, donde $n$ es un número entero:

$$
\begin{align*}
\symup\Delta \varphi &= (2n-1)\pi \\
\frac{2\pi}{\lambda}\symup\Delta x &= (2n-1)\pi \Rightarrow \symup\Delta x = (2n-1)\frac{\lambda}{2}
\end{align*}
$$

### Energía asociada a una onda armónica

En una onda mecánica que se propaga por un medio elástico, la **energía mecánica** de cada partícula es:

{{< math width="100%" >}}
$$
\begin{align*}
E &= \frac{1}{2}mv^2 + \frac{1}{2}kx^2 \\
&= \frac{1}{2}mA^2\omega^2\cos^2(\omega t \pm kx + \varphi_0) + \frac{1}{2}kA^2\sin^2(\omega t \pm kx + \varphi_0)
\end{align*}
$$
{{< /math >}}

Teniendo en cuenta que $k = m\omega^2$, podemos escribir:

{{< math width="100%" >}}
$$
\begin{align*}
E &= \frac{1}{2}mA^2\omega^2[\cos^2(\omega t \pm kx + \varphi_0) + \sin^2(\omega t \pm kx + \varphi_0)] \\
&= \frac{1}{2}m\omega^2A^2 = \frac{1}{2}m4\pi^2f^2A^2 = 2\pi^2mf^2A^2
\end{align*}
$$
{{< /math >}}

La energía transportada por la onda es directamente proporcional al cuadrado de la frecuencia $f$ y al cuadrado de la  amplitud $A$. Como es energía, se expresa en julios (J).

### Potencia de una onda armónica

Se define la potencia $P$ de una onda como la energía emitida por el foco por unidad de tiempo:

$$
P = \frac{E}{t}
$$

En el SI se mide en watios (W).

### Intensidad de una onda armónica

Es la potencia que se transmite por unidad de superficie perpendicular a la dirección de propagación:

$$
I = \frac{P}{S} = \frac{E}{S\cdot t}
$$

En el SI se mide en W/m$^2$.

La potencia y la intensidad también son proporcionales al cuadrado de la frecuencia $f$ y la amplitud $A$, pero esta última es la que mejor mide el efecto de la energía sobre un punto, por eso es la más empleada para tener en cuenta la energía transportada por una onda.

### Atenuación y absorción de ondas

#### Atenuación
A medida que una onda se propaga por un medio, su intensidad disminuye, porque la misma energía (generada en el foco) debe repartirse por igual entre más puntos del medio cada vez, exceptuando en las ondas unidimensionales.

Ondas unidimensionales (ej. cuerdas)
: El frente de onda es plano y la intensidad se trasnmite punto a punto, de forma que $I_1 = I_2$ (no hay atenuación). $I=P$.

Ondas bidimensionales (ej. ondas en la superficie del agua)
: La energía del foco se reparte entre todos los puntos del frente de onda, en este caso circular:

$$
I=\frac{P}{L} = \frac{P}{2\pi r} \Rightarrow \frac{I_1}{I_2} = \frac{r_2}{r_1} = \frac{A_1^2}{A_2^2}
$$

La intensidad disminuye a medida que nos alejamos del foco.

Ondas tridimensionales (ej. sonido o luz)
: La energía del foco se reparte entre todos los puntos del frente de onda, en este caso esférico:

$$
I=\frac{P}{S} = \frac{P}{4\pi r^2} \Rightarrow \frac{I_1}{I_2} = \frac{r_2^2}{r_1^2} = \frac{A_1^2}{A_2^2}
$$

La intensidad disminuye más rápidamente a medida que nos alejamos del foco.

#### Absorción
Cuando una onda se propaga por un medio, existen efectos disipativos que causan pérdidas de energía y la disminución de la intensidad. En el caso de ondas mecánicas, estos efectos disipativos (rozamiento) producen pérdidas de energía mecánica en forma de calor. Si fueran ondas electromagnéticas, las pérdidas de energía se deben a interacciones con la materia. En ambos casos, la intensidad disminuye exponencialmente con la distancia recorrida:

{{< figure library="true" src="ondas-2Bach-fisica/absorcion.svg" width="100%" lightbox="false" theme="light" >}}

La ecuación de absorción puede expresarse también en función del **espesor de semiabsorción** $D_{1/2}$, que es el espesor necesario para que la intensidad se reduzca a la mitad ($I=I_0/2$):

$$
\begin{align*}
\frac{I_0}{2} &= I_0\mathrm e^{-\beta D_{1/2}} \\
\frac{1}{2} &= \mathrm e^{-\beta D_{1/2}} \\
2 &= \mathrm e^{\beta D_{1/2}} \\
\ln 2 &= \beta D_{1/2} \Rightarrow D_{1/2} = \frac{\ln 2}{\beta}
\end{align*}
$$

**Explora** las **propiedades** de las **ondas** con esta magnífica **simulación**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/waves-intro/latest/waves-intro_all.html?locale=es" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## El sonido

### Introducción

El **sonido** es una **perturbación** que se produce por la **variación** de la **presión** de un **medio elástico**. Por eso se dice que el sonido es una **onda de presión**. Se caracteriza por ser una onda:

- Tridimensional.
- Mecánica.
- Longitudinal.

### Formación de ondas sonoras

Para explicar cómo se producen las ondas sonoras, consideremos un gas en el interior de un émbolo.

#### Compresión (condensación)
Al comprimir el émbolo, aumenta la presión de las partículas próximas a él y por tanto la presión del gas en esa zona. Las partículas comprimidas tienden a ocupar regiones de menor presión y así la compresión o condensación se va transmitiendo.

#### Dilatación (enrarecimiento)
En este caso, la presión disminuye y por tanto también la densidad. Las partículas circundantes a la zona de menor presión tienden a ocuparla, dejando a su vez zonas de menor presión. Así, la dilatación o enrarecimiento se va transmitiendo.

{{% callout note %}}
IMPORTANTE: No hay transporte de materia. Los movimientos de las partículas son en torno a sus posiciones de equilibrio.
{{% /callout %}}

Si el movimiento del émbolo se realiza de foma continuada y con frecuencia $f$, se forma la onda de presión que puede representarse mediante la ecuación:

$$
p = p_0 \cos(\omega t - kx + \varphi_0)
$$

{{< figure library="true" src="ondas-2Bach-fisica/formacion-sonido.svg" title="Se observa que el **sonido** es una **onda longitudinal**. La onda de presión va desfasada $\pi/2$ respecto a la elongación de las partículas ($y$), de forma que cuanto menor sea la presión más se moverán las partículas respecto de su posición de equilibrio. Adaptada de https://tikz.net/waves_air/." width="100%" lightbox="false" >}}

**Explora** las **ondas sonoras** con esta magnífica **simulación**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/sound-waves/latest/sound-waves_all.html?locale=es" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

En este **vídeo-demostración**, el [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) recupera un instrumento clásico como es el [**tubo** de **Kundt**](https://es.wikipedia.org/wiki/Tubo_de_Kundt) para **determinar** la **velocidad** del **sonido** (unos 343&thinsp;m/s a 20&thinsp;&deg;C):

{{< youtube JD7vWX6y0zk >}}

### Cualidades del sonido

#### Intensidad

Es la cualidad que permite identificar el sonido como fuerte o débil (volumen). Está relacionada con la amplitud de la onda, de forma que:

- Cuanto mayor sea la amplitud, mayor será la intensidad (sonido más fuerte).
- Cuanto menor sea la amplitud, menor será la intensidad (sonido más débil).

Los seres humanos podemos percibir sonidos con intensidades comprendidas entre 10<sup>-12</sup>&thinsp;W/m<sup>2</sup> (umbral auditivo) y 1&thinsp;W/m<sup>2</sup> (umbral del dolor).

#### Tono

Es la cualidad que permite distinguir los sonidos agudos de los graves. Está relacionada con la frecuencia de la onda, de forma que:

- Cuanto mayor sea la frecuencia, más agudo será el sonido.
- Cuanto menor sea la frecuencia, más grave será el sonido.

{{< spoiler text="Pincha aquí para averiguar más sobre la conocida como **voz de helio**" >}}

{{< youtube d0uekumMErc >}}

{{< /spoiler >}}

El oído humano percibe sonidos con frecuencias comprendidas entre 20&thinsp;Hz y <span style="white-space:nowrap">20&thinsp;000&thinsp;Hz</span>, aunque la percepción también depende de la intensidad. Se denominan:

Infrasonidos
: Sonidos con frecuencias menores de 20&thinsp;Hz. Los elefantes y las ballenas los utilizan para comunicarse a grandes distancias.

Ultrasonidos
: Sonidos con frecuencias mayores de <span style="white-space:nowrap">20&thinsp;000&thinsp;Hz</span>. Los murciélagos y los delfines los utilizan para orientarse y cazar. También se utilizan en ecografías y en la litotricia.

{{% callout note %}}
**Aprende más** sobre los **ultrasonidos** en [esta excelente **entrada** del **blog**]({{< ref "/post/ultrasonidos/index.md" >}}).
{{% /callout %}}

#### Timbre

Es la cualidad que permite distinguir dos sonidos de igual intensidad y tono, producidos por dos fuentes distintas. Está relacionado con la **forma** de las **ondas sonoras**.

{{< figure library="true" src="ondas-2Bach-fisica/timbre.svg" title="El diapasón permite emitir una nota pura, pero en el resto de instrumentos (incluida nuestra voz), la nota está formada por los armónicos, cada uno de las cuales tiene una intensidad distinta y es lo que caracteriza a cada instrumento. Adaptada de https://depositphotos.com/vector/education-chart-of-different-sound-timbre-diagram-190054332.html." width="100%" lightbox="false" >}}

**Crea ondas** con ayuda de las [**series** de **Fourier**](https://es.wikipedia.org/wiki/Serie_de_Fourier) y esta magnífica **simulación**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html?locale=es" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% callout note %}}
**Aprende más** sobre la **relación** entre la **música** y la **física** en [esta excelente **entrada** del **blog**]({{< ref "/post/musica-fisica/index.md" >}}).
{{% /callout %}}

### Nivel de intensidad sonora

El sonido que percibe el oído depende tanto de la intensidad de la onda sonora como de su frecuencia. Por eso es necesario definir una nueva magnitud que tenga esto en cuenta. El **nivel de intensidad sonora** $S$ representa la intensidad percibida y se define como:

$$
S = 10 \log_{10} \left(\frac{I}{I_0}\right),
$$

donde $I$ es la intensidad del sonido que llega hasta nosotros y $I_0$ es la intensidad umbral (10<sup>-12</sup>&thinsp;W/m<sup>2</sup> para 1000&thinsp;Hz). El nivel de intensidad sonora tiene un valor para cada frecuencia y se expresa en **decibelios** (dB), que es una unidad logarítmica, lo que implica que un aumento de 10&thinsp;dB significa que la intensidad del sonido se multiplica por 10.

{{% callout note %}}
IMPORTANTE: Si hay dos o más ondas, se suman las intensidades de cada una de ellas, no los dB.
{{% /callout %}}

{{< figure library="true" src="ondas-2Bach-fisica/escala-decibelios.svg" title="Escala de decibelios. Traducida y adaptada de https://tikz.net/wave_decibel_scale/." width="100%" lightbox="false" >}}

{{< figure library="true" src="ondas-2Bach-fisica/curvas-isofonicas.svg" title="[Curvas isofónicas](https://es.wikipedia.org/wiki/Curva_isofónica) según la norma [ISO 223:2003](https://www.iso.org/es/contents/data/standard/08/31/83117.html)." width="100%" lightbox="false" theme="light" >}}

### Fenómenos sonoros

Al igual que el resto de las ondas, uno de los fenómenos que experimenta el sonido es la **reflexión**. Cuando una onda sonora incide sobre una superficie, parte de la energía se refleja y parte se transmite. El oído humano solo puede distinguir sonidos separados como mínimo 0.1&thinsp;s. Teniendo esto en cuenta, se diferencia:

#### Eco
Somos capaces de diferenciar el sonido incidente del reflejado. La distancia del foco/receptor a la superficie de separación es lo suficientemente grande para que el sonido reflejado llegue, al menos, 0.1&thinsp;s más tarde.

#### Reverberación
La superficie de separación está próxima al foco/receptor, lo que provoca que el sonido reflejado se superponga al incidente. En este caso los sonidos no pueden ser completamente diferenciados, por lo que se perciben como un único sonido prolongado.

Observa y escucha a [**Armin Küpper**](https://www.armins-art.de) tocando un saxofón y usando una tubería como retardo natural y reverberación:

{{< youtube p8GcHoSIPDg >}}

### Aplicaciones del sonido

#### Sonar

Instrumento empleado en navegación, que sirve para localizar el fondo del mar u otros obstáculos (submarinos, ballenas...). Consiste en una fuente de ultrasonidos que, tras chocar contra un obstáculo, se reflejan y vuelven a ser captados por el dispositivo. El tiempo transcurrido desde que se emite el sonido hasta que se capta el reflejado permite determinar la distancia al obstáculo:

$$
d = \frac{v(t_\mathrm{ida}+t_\mathrm{vuelta})}{2},
$$

siendo $v$ la velocidad del sonido en el medio.

#### Ecografía

Puede considerarse la evolución del sonar. El ecógrafo envía ultrasonidos a distintas partes del cuerpo. Estos penetran más o menos y su velocidad es mayor o menor dependiendo del tejido (densidad). Se recoge el eco de los ultrasonidos que se produce cuando chocan contra el órgano en estudio. Esta señal se transforma en una señal eléctrica que a su vez se transforma en una imagen.

#### Litotricia

Se emplea la energía de los ultrasonidos para destruir cálculos biliares o renales. También se emplea para tratar dolores musculares, limpiar material quirúrgico o de laboratorio e incluso eliminar el sarro dental.

#### Usos industriales

Se emplean ultrasonidos para determinar irregularidades en los materiales usando una técnica similar a la ecografía. También se utilizan, por ejemplo, para recubrir objetos con películas especiales o para dispersar emulsiones de grasa en agua.

### Contaminación acústica

En relación a la [**acústica**](https://es.wikipedia.org/wiki/Acústica), multitud de organismos internacionales así como centros de investigación especializados recomiendan que el sonido ambiente no supere los 65&thinsp;dB. Se han llevado a cabo multitud de estudios que demuestran que exposiciones de más o menos larga duración a niveles superiores a estos valores pueden acarrear problemas físicos y psíquicos en los seres vivos. El problema de la [**contaminación acústica**](https://es.wikipedia.org/wiki/Contaminación_acústica) tiene su máxima expresión en los **núcleos urbanos** (combinación de tráfico, obras, actividades comerciales y de ocio, etc.).

#### Medidas contra la contaminación acústica

Las medidas contra la contaminación acústica suelen ser de dos tipos:

Activas
: Actúan directamente en el foco emisor. **Ejemplos**: silenciadores en los vehículos, prohibición de tráfico rodado, limitación de horarios de actividades ruidosas, etc.

Pasivas
: Tratan de amortizar el sonido en su propagación y su impacto en la audición. **Ejemplos**: auriculares antiruido, insonorización de locales y viviendas, pantallas acústicas, etc.

En muchas ocasiones es necesario emplear simultáneamente ambos tipos de medidas.

## Fenómenos ondulatorios

### Principio de Huygens

Para comprender los fenómenos que experimentan las ondas al propagarse, es necesario admitir que se propagan de forma diferente a como lo hacen las partículas:

{{< figure library="true" src="ondas-2Bach-fisica/propagacion-ondas.svg" title="Al contrario que con el caso de un haz de partículas, en el que solo alcanzan la pantalla las partículas que atraviesan la rendija, aparece un patrón de difracción que no tiene nada que ver con orificio iluminado y resto oscuro. Adaptada de https://tikz.net/optics_diffraction/." width="100%" lightbox="false" >}}

La primera solución al problema anterior fue proporcionada por el científico holandés [**Christiaan Huygens**](https://es.wikipedia.org/wiki/Christiaan_Huygens), quien expuso una teoría que explicaba geométricamente la propagación de las ondas (esto es anterior a la ecuación de ondas). Antes de enunciar el principio de Huygens, resulta conveniente definir:

#### Frente de onda

Superficie que forman todos los puntos alcanzados por la onda en el mismo instante de tiempo (tienen, en consecuencia, el mismo estado de vibración).

#### Rayos

Flechas que se emplean para indicar la(s) dirección(es) de propagación de la onda (son una representación, no existen físicamente). Siempre son perpendiculares al frente de onda.

{{< figure library="true" src="ondas-2Bach-fisica/frente-onda.svg" width="100%" lightbox="false" theme="light" >}}

El **principio de Huygens** establece que:

> Cada punto del frente de ondas se comporta como un foco emisor de ondas secundarias de las mismas características, cuya envolvente constituye el nuevo frente de ondas.

{{< figure library="true" src="ondas-2Bach-fisica/principio-Huygens.svg" title="Adaptada de https://tikz.net/optics_huygens/." width="100%" lightbox="false" >}}

### Reflexión

Fenómeno por el cual una onda cambia su dirección de propagación al incidir en la superficie de separación de dos medios. Tras la reflexión, la onda continúa propagándose en el mismo medio y a la misma velocidad.

#### Leyes de la reflexión

1. El rayo incidente, el rayo reflejado y la normal al punto de incidencia están en el mismo plano.
2. El ángulo de incidencia es igual al ángulo de reflexión.

{{< spoiler text="**Demostración** aplicando el **principio de Huygens**" >}}

{{< figure library="true" src="ondas-2Bach-fisica/reflexion-Huygens.svg" title="Los dos triángulos tienen dos lados y un ángulo en común, por lo que son [congruentes](https://es.wikipedia.org/wiki/Congruencia_(geometría)). Como $\theta$ y $\phi$ representan el mismo ángulo en los dos triángulos, deben ser el mismo ángulo. Esto significa que $\theta = \phi$. Traducida y adaptada de https://isaacphysics.org/concepts/cp_general_waves." width="100%" lightbox="false" theme="light" >}}

{{< /spoiler >}}

### Refracción

Fenómeno por el cual una onda cambia su dirección de propagación al pasar de un medio a otro diferente. En cada medio la onda se propaga a una velocidad distinta.

#### Leyes de la refracción

1. El rayo incidente, el rayo refractado y la normal al punto de incidencia están en el mismo plano.
2. Ley de [**Snell**](https://es.wikipedia.org/wiki/Willebrord_Snel_van_Royen):

$$
\frac{\sin\theta_1}{\sin\theta_2} = \frac{v_1}{v_2}
$$

- Si $v_1 < v_2 \rightarrow \theta_2 > \theta_1 \rightarrow$ el rayo refractado se aleja de la normal.
- Si $v_1 > v_2 \rightarrow \theta_2 < \theta_1 \rightarrow$ el rayo refractado se acerca a la normal.

{{< spoiler text="**Demostración** aplicando el **principio de Huygens**" >}}

{{< figure library="true" src="ondas-2Bach-fisica/refraccion-Huygens.svg" title="Traducida y adaptada de https://isaacphysics.org/concepts/cp_reflection_and_refraction." width="100%" lightbox="false" theme="light" >}}

A partir del primer diagrama, el tiempo $t$ que tarda un frente de onda en pasar completamente de un medio al otro viene dado por:

$$
t = \frac{d_1}{v_1} = \frac{d_2}{v_2},
$$

donde $d_1$ es la distancia que debe recorrer el frente de onda en el primer medio, $d_2$ es la distancia que debe recorrer en el segundo y $v_1$ y $v_2$ son las velocidades en los dos medios, respectivamente.

Dado que la anchura $w$ del rayo en la superficie es igual:

$$
w = \frac{d_1}{\sin\theta_1} = \frac{d_2}{\sin\theta_2}
$$

Reordenando:

$$
\frac{\sin\theta_1}{\sin\theta_2} = \frac{d_1}{d_2} = \frac{v_1}{v_2}
$$

{{< /spoiler >}}

{{< figure library="true" src="ondas-2Bach-fisica/reflexion-refraccion.svg" title="Reflexión y refracción. Adaptada de https://tikz.net/reflection-refraction/." width="100%" lightbox="false" theme="light" >}}

{{% callout note %}}
IMPORTANTE: La frecuencia de la onda es la misma en ambos medios. La longitud de onda y la velocidad de propagación, sin embargo, varían.
{{% /callout %}}

### Interferencias

Se producen cuando dos o más ondas se encuentran en un mismo punto del medio. En dicho punto se cumple el **principio de superposición**, que establece que la onda resultante es la suma algebraica de las ondas que se superponen.

{{< figure library="true" src="ondas-2Bach-fisica/interferencias.svg" title="Adaptada de https://tikz.net/optics_interference/." width="100%" lightbox="false" >}}

Vamos a estudiar el caso más sencillo, en el que interfieren dos ondas armónicas coherentes de la  misma frecuencia $f$ y longitud de onda $\lambda$ y de igual amplitud $A$, ambas propagándose en el eje $x$:

$$
\begin{align*}
y_1(x,t) & = A\sin(\omega t - kx_1) \\
y_2(x,t) & = A\sin(\omega t - kx_2)
\end{align*}
$$

En el punto P se superponen cumpliéndose el principio de superposición:

{{< math width="100%" >}}
$$
\begin{align*}
y(x,t) & = y_1(x,t) + y_2(x,t) = A\sin(\omega t - kx_1) + A\sin(\omega t - kx_2) \\
& = 2A\sin\left(\frac{\omega t - kx_1 + \omega t - kx_2}{2}\right)\cos\left(\frac{\omega t - kx_1 - (\omega t - kx_2)}{2}\right) \\
& = 2A\cos\left(k\frac{x_2 - x_1}{2}\right)\sin\left(\omega t - k\frac{x_1 + x_2}{2}\right)
\end{align*}
$$
{{< /math >}}

Así, la interferencia es otra onda armónica con la misma frecuencia y una amplitud $2A\cos[k(x_2 - x_1)/2]$ independiente del tiempo pero que depende de la diferencia de camino recorrido por cada onda.

#### Interferencia constructiva y destructiva

{{< figure library="true" src="ondas-2Bach-fisica/interferencia-constructiva-destructiva.svg" width="100%" lightbox="false" >}}

**Estudia** la **interferencia** de **ondas** con esta magnífica **simulación**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html?locale=es" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Ondas estacionarias

Son un caso particular de interferencia en el que se encuentran dos ondas armónicas con igual amplitud, frecuencia y longitud de onda, que se propagan en la misma dirección pero sentidos opuestos. La interferencia ya no se produce en un solo punto, sino en todos:

$$
\begin{align*}
y_1(x,t) & = A\sin(\omega t - kx) \\
y_2(x,t) & = A\sin(\omega t + kx)
\end{align*}
$$

Aplicando el principio de superposición:

$$
\begin{align*}
y(x,t) & = y_1(x,t) + y_2(x,t) \\
&= A\sin(\omega t - kx) + A\sin(\omega t + kx) \\
& = 2A\cos(kx)\sin(\omega t)
\end{align*}
$$

La onda resultante es una **onda estacionaria**, que no se propaga, sino que oscila en torno a una posición de equilibrio, con una amplitud $2A\cos(kx)$, independiente del tiempo aunque dependiente de la posición:

{{< figure library="true" src="ondas-2Bach-fisica/ondas-estacionarias.svg" title="Adaptada de https://tikz.net/waves_standing/." width="100%" lightbox="false" >}}

Dentro de una onda estacionaria diferenciamos dos tipos de puntos:

Vientres (V)
: La amplitud es máxima:

$$
\cos(kx) = \pm 1 \Leftrightarrow x = n\frac{\lambda}{2}
$$

Los vientres vibran con una amplitud máxima igual a $2A$.

Nodos (N)
: La amplitud es nula:

$$
\cos(kx) = 0 \Leftrightarrow x = \left(2n-1\right)\frac{\lambda}{4}
$$

Los nodos no vibran.

La distancia entre dos vientres/nodos consecutivos es $\lambda/2$ y entre un vientre y un nodo consecutivo es $\lambda/4$.

#### Diferencia entre onda viajera y onda estacionaria

La principal diferencia radica en que en el caso de las ondas estacionarias la energía no se propaga por el medio, como sucede con las ondas viajeras. Por el contrario, queda *confinada* entre los nodos de la onda.

{{< figure library="true" src="ondas-2Bach-fisica/ondas-estacionarias-instantes.svg" title="Distintos instantes de una onda estacionaria. Adaptada de https://tikz.net/waves_standing/." width="100%" lightbox="false" theme="light" >}}

#### Ondas estacionarias en cuerdas y tubos

Para que se genere una onda estacionaria, la distancia entre el origen y el punto en el que se produce la reflexión debe coincidir con una proporción concreta de $\lambda/2$ o $\lambda/4$, según el caso. Si no, no se producen ondas estacionarias.

##### Cuerda/tubo de longitud *L* fija/cerrado por sus dos extremos

Si sus extremos están fijos, son nodos. Por lo tanto, la distancia entre ellos será, necesariamente, un número entero de semilongitudes de onda:

$$
L = n\frac{\lambda_n}{2} \Leftrightarrow \lambda_n = \frac{2L}{n}; f_n = \frac{nv}{2L}\quad\text{con } n = 1,2,3,\ldots
$$

Para cada valor de $n$ tenemos una posible onda estacionaria, un **armónico**, con su $\lambda_n$ y $f_n$ correspondientes. El **primer armónico** ($n=1$) es el de menor frecuencia, y se denomina **fundamental**.

{{< figure library="true" src="ondas-2Bach-fisica/cuerda-fija-dos-extremos.svg" title="Cuerda/tubo fija/cerrado por sus dos extremos. Adaptada de https://tikz.net/waves_standing/." width="100%" lightbox="false" >}}

{{< figure library="true" src="ondas-2Bach-fisica/tubo-abierto-dos-extremos.svg" title="Tubo abierto por sus dos extremos. La situación es análoga pero ahora los extremos son vientres. Adaptada de https://tikz.net/waves_standing_air/." width="100%" lightbox="false" >}}

##### Cuerda/tubo de longitud *L* fija/cerrado por un extremo
El extremo fijo o cerrado es un nodo y el libre o abierto es un vientre. Así, la longitud debe ser un número impar de veces $\lambda/4$:

{{< math width="100%" >}}
$$
L = \left(2n-1\right)\frac{\lambda_n}{4} \Leftrightarrow \lambda_n = \frac{4L}{2n-1}; f_n = \frac{(2n-1)v}{4L}\quad\text{con } n = 1,2,3,\ldots
$$
{{< /math >}}

{{< figure library="true" src="ondas-2Bach-fisica/cuerda-fija-un-extremo.svg" title="Cuerda fija por un extremo. Adaptada de https://tikz.net/waves_standing/." width="100%" lightbox="false" >}}

{{< figure library="true" src="ondas-2Bach-fisica/tubo-cerrado-un-extremo.svg" title="Tubo cerrado por un extremo. Adaptada de https://tikz.net/waves_standing_air/." width="100%" lightbox="false" >}}

**Explora** las **ondas** en una **cuerda** con esta magnífica **simulación**:

<iframe loading=lazy src="https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_all.html?locale=es" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

o este **vídeo** del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com):

{{< youtube LmMu5m6Rb2c >}}

##### Fenómenos de resonancia

Os dejamos aquí unos cuantos **vídeos** del [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com):

- [**Tubo** de **Rubens**](https://es.wikipedia.org/wiki/Tubo_de_Rubens):

{{< youtube 3SrfEV3ajw4 >}}

- La **física** de los **tubos sonoros**:

{{< youtube -AIvSnvnQpc >}}

- **Rotura** de una **copa** por **resonancia**

{{< youtube tqSuJpJT8j0 >}}

- [**Placas** de **Chladni**](https://es.wikipedia.org/wiki/Figuras_de_Chladni)

{{< youtube t-Bg8GiTW8M >}}

### Difracción

Es un fenómeno que se produce cuando las ondas encuentran un obstáculo, rendija u orificio, cuyas dimensiones son comparables a la longitud de onda. La difracción puede explicarse mediante el principio de Huygens, teniendo en cuenta que los extremos de la rendija se comportan como fuente de ondas secundarias que interfieren tras la rendija.

#### Difracción por una rendija

{{< figure library="true" src="ondas-2Bach-fisica/difraccion-una-rendija.svg" title="Adaptada de https://tikz.net/optics_diffraction/." width="100%" lightbox="false" >}}

Los extremos de la rendija dan lugar a ondas esféricas secundarias que interfieren, produciendo el patrón de difracción característico con bandas de luz y oscuridad.

Los puntos en los que la interferencia es constructiva cumplen:

$$
\symup\Delta x = n\lambda = d\sin\theta
$$

Los puntos en los que la interferencia es destructiva cumplen:

$$
\symup\Delta x = \left(2n-1\right)\lambda/2 = d\sin\theta
$$

Si $d\ll D$, $\sin\theta\simeq \tan\theta = y/D$.

#### Difracción por doble rendija

{{< figure library="true" src="ondas-2Bach-fisica/difraccion-doble-rendija.svg" title="Adaptada de https://tikz.net/optics_diffraction/." width="100%" lightbox="false" >}}

Cada rendija da lugar a ondas esféricas secundarias que interfieren entre sí.

$$
\frac{\lambda}{d} = \frac{y}{D}
$$

Si $d\ll D$, de nuevo $\sin\theta=y/D$. Para los máximos llegamos a la misma ecuación:

$$
d\sin\theta = \Delta x = n\lambda
$$

#### Aplicaciones
La [difracción de rayos X](https://es.wikipedia.org/wiki/Cristalografía_de_rayos_X) (RX) es una de las principales aplicaciones y se emplea para caracterizar materiales. Los RX tienen una longitud de onda $\lambda \sim 0.1\,\mathrm{nm}$, por lo que son ideales para estudiar la estructura de la materia, como distancias entre átomos/iones en una red cristalina o la geometría de moléculas.

### Efecto Doppler

Es el cambio que tiene lugar en la frecuencia de una onda como consecuencia del movimiento relativo entre el foco emisor y el receptor de la misma.

El efecto Doppler es un efecto aplicable a cualquier onda. Tomaremos como ejemplo la onda sonora emitida por la sirena de una ambulancia. Este sonido se agudiza cuando se aproxima a nosotros y se hace más grave cuando se aleja. La frecuencia a la que se emite el sonido no cambia, pero varía la frecuencia percibida por el receptor (mayor &mdash;más agudo&mdash; cuando se acerca, menor &mdash;más grave&mdash; cuando se aleja).

{{< figure library="true" src="ondas-2Bach-fisica/doppler.svg" title="Adaptada de https://tikz.net/wave_doppler/." width="100%" lightbox="false" >}}

La frecuencia $f_\mathrm R$ que percibe el receptor viene dada por:

$$
f_\mathrm R = f\cdot\frac{v\pm v_\mathrm R}{v \mp v_\mathrm F},
$$

donde $f$ es la frecuencia emitida, $v$ la velocidad de propagación de la onda, $v_\mathrm R$ la velocidad del receptor y $v_\mathrm F$ la velocidad del emisor.

#### Criterio de signos
Nos fijamos en el movimiento relativo entre el receptor y el foco emisor:

- Si se alejan, el receptor percibe $f_\mathrm{R} < f$ así que elegimos numerador $-$ y denominador $+$.

$$
f_\mathrm R = f\cdot\frac{v-v_\mathrm R}{v+v_\mathrm F}
$$

- Si se acercan, el receptor percibe $f_\mathrm R>f$ y por tanto elegimos numerador $+$ y denominador $-$.

$$
f_\mathrm R = f\cdot\frac{v+v_\mathrm R}{v-v_\mathrm F}
$$

#### Ondas de choque
Las [**ondas de choque**](https://es.wikipedia.org/wiki/Onda_de_choque) se producen cuando $v_\mathrm F > v$. Las ondas generadas forman una envolvente cónica y quedan detrás del foco.

{{< figure library="true" src="ondas-2Bach-fisica/onda-choque.svg" title="Adaptada de https://tikz.net/wave_doppler/." width="100%" lightbox="false" >}}

{{< figure library="true" src="ondas-2Bach-fisica/barrera-sonido.jpg" title="Avión rompiendo la barrerra del sonido. Fuente: https://depositphotos.com/photo/fighter-overcomes-sound-barrier-moment-transition-sound-barrier-plane-241151302.html." lightbox="true" >}}

### Polarización

En muchas ondas transversales la oscilación del medio de propagación que se produce es en el plano perpendicular a la propagación y no está limitada a una única dirección, sino que puede tener lugar en cualquiera de las direcciones contenidas en el plano. Este tipo de ondas se denominan **no polarizadas**. Por el contrario, en las **ondas polarizadas** hay restricciones en la dirección de vibración:

{{< figure library="true" src="ondas-2Bach-fisica/polarizacion.svg" width="100%" lightbox="false" >}}

Un **polarizador** es un instrumento que permite filtrar la luz no polarizada, de forma que solo deja pasar la luz polarizada en una dirección concreta. La luz que sale del polarizador es linealmente polarizada.

{{< figure library="true" src="ondas-2Bach-fisica/polarizador.svg" title="Traducida y adaptada de https://tikz.net/optics_polarization/." width="100%" lightbox="false" >}}
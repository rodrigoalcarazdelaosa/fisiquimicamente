---
title: Energía, trabajo y calor
url: "/recursos-fisica-quimica/apuntes/4eso/energia-trabajo-calor"
subtitle: Energía y sus formas de intercambio (trabajo y calor)
summary: "Energía y sus formas de intercambio (trabajo y calor)."
breadcrumbs: ["recursos-fisica-quimica", "apuntes", "4eso"]
authors:
  - rodrigo-alcaraz-de-la-osa
  - leticia-cabezas
tags:
  - apuntes
  - 4º ESO
  - energía
categories:
  - Física
weight: 9

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: https://depositphotos.com/photo/wind-turbines-farm-at-sunset-8610489.html
  focal_point: Smart

links:
  - icon_pack: fas
    icon:
    name: 📜 Póster
    url: energia-trabajo-calor-poster.pdf
  - icon_pack: fas
    icon:
    name: 📝 Frikiexámenes
    url: fluidos-energia-calor-frikiexamenes.pdf

slides: energia-trabajo-calor-4ESO

math: true
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

Es la **suma** de la energía **cinética** $E_\mathrm{c}$ y la energía **potencial** $E_\mathrm{p}$:

$$
E_\mathrm m = E_\mathrm c + E_\mathrm p
$$

## Conservación de la energía

### Principio de conservación de la energía mecánica

> Cuando sobre un cuerpo actúan únicamente **fuerzas conservativas**, su energía mecánica se conserva.

#### Ejemplos de fuerzas conservativas

Fuerzas gravitatorias, elásticas o electrostáticas.

La fuerza de **rozamiento** es un ejemplo de fuerza **no conservativa** o **disipativa**.

### Principio de conservación de la energía

> En cualquier proceso de la naturaleza, la energía **total** permanece constante.

#### Ejemplo resuelto

{{% callout example %}}
<br>

> Un carro de 50$\thinspace$kg desliza por una montaña rusa como la de la figura. Si en el punto A su velocidad es de 5$\thinspace$m/s y en el punto B es de 3.2$\thinspace$m/s, calcula: <br>
> a) La energía mecánica en A y en B. <br>
> b) La energía disipada en forma de calor debido a las fuerzas de rozamiento entre los puntos A y B.

{{< figure library="true" src="energia-trabajo-calor-4ESO/montana-rusa.svg" lightbox="false" width="100%" >}}

---

a) Para calcular la energía mecánica en los puntos A y B utilizamos la expresión:

$$
E_\mathrm m = E_\mathrm c + E_\mathrm p = \frac{1}{2}mv^2 + mgh
$$

Tanto en A como en B el carro tiene energía cinética (se mueve a una cierta velocidad) y potencial gravitatoria (está a una cierta altura).

$$
\begin{align*}
\text{Punto A} & \begin{cases}
v_\mathrm A = 5\thinspace\mathrm{m/s} \\\\
h_\mathrm A = 30\thinspace\mathrm{m}
\end{cases} \\\\ \\\\
\text{Punto B} & \begin{cases}
v_\mathrm B = 3.2\thinspace\mathrm{m/s} \\\\
h_\mathrm B = 20\thinspace\mathrm{m}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
E_{\mathrm{m}_\mathrm A} & = \frac{1}{2}mv_\mathrm A^2 + mgh_\mathrm A \\\\
& = \frac{1}{2}\cdot 50\cdot 5^2 + 50\cdot 9.8\cdot 30 \\\\
& = 625 + 14700 = 15325\thinspace\mathrm J
\end{align*}
$$

$$
\begin{align*}
E_{\mathrm{m}_\mathrm B} & = \frac{1}{2}mv_\mathrm B^2 + mgh_\mathrm B \\\\
& = \frac{1}{2}\cdot 50\cdot 3.2^2 + 50\cdot 9.8\cdot 20 \\\\
& = 256 + 9800 = 10056\thinspace\mathrm J
\end{align*}
$$

---

b) La energía perdida por rozamiento (en forma de calor) es igual a la diferencia entre la energía inicial (A) y la final (B):
$$
\begin{align*}
E\_\text{disipada} & = E\_{\mathrm{m}\_\mathrm A} - E\_{\mathrm{m}\_\mathrm B} \\
& = 15325 - 10056 = 5269\thinspace\mathrm J
\end{align*}
$$

{{% /callout %}}

Puedes aprender más sobre la **conservación** de la **energía** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Intercambio de energía

La energía se puede intercambiar/transferir mediante **trabajo** o **calor**.

{{% callout note %}}
**Aprende más** sobre el **criterio de signos termodinámico** [aquí]({{< relref "/post/normas-ortografia-fisica-quimica/index.md#13-calor-y-trabajo" >}}).
{{% /callout %}}

### Trabajo _W_

El **trabajo** se transfiere cuando entre dos cuerpos se realizan **fuerzas** que provocan desplazamientos o cambios en sus dimensiones.

El trabajo $W$ realizado por una fuerza $\vec F$ constante viene dado por:

$$
W = \vec F\cdot \vec d = F\cdot d \cdot \cos\alpha,
$$

donde $F$ es el módulo de la fuerza aplicada, $d$ el espacio recorrido y $\cos\alpha$ es el coseno del ángulo formado por la fuerza y el desplazamiento.

### Calor _Q_

El **calor** se transfiere entre dos cuerpos que tienen **diferente temperatura**, de forma que el calor cedido por el cuerpo a mayor temperatura es igual al calor ganado por el que está a menor temperatura:

$$
Q_\text{cedido} + Q_\text{ganado} = 0
$$

Por razones históricas el calor se mide a menudo en **calorías** ($1\thinspace\mathrm{cal} = 4.19\thinspace\mathrm{J}$).

## Trabajo y potencia

La **potencia** $P$ es el trabajo $W$ realizado por unidad de tiempo $t$:

$$
P = \frac{W}{t} = \frac{\vec F\cdot \vec d}{t} = \vec F\cdot \vec v
$$

En el **SI** la potencia se mide en **vatios** o **_watts_** ($1\thinspace\mathrm W = 1\thinspace\mathrm{J/s}$), siendo el **caballo de vapor**[^1] ($1\thinspace\mathrm{CV} \approx 735\thinspace\mathrm{W}$) otra unidad de uso común.

[^1]: No confundir con el **_horsepower_** anglosajón ($1\thinspace\mathrm{HP} \approx 1.014\thinspace\mathrm{CV}$).

El **kilovatio hora**, $\mathrm{kW}\thinspace\mathrm h$, es una unidad de **energía** muy utilizada en la facturación para la energía entregada a los consumidores por las compañías eléctricas:

$$
1\thinspace\mathrm{kW}\thinspace\mathrm h\cdot \frac{1000\thinspace\mathrm{W}}{1\thinspace\mathrm{kW}}\cdot \frac{3600\thinspace\mathrm{s}}{1\thinspace\mathrm{h}} = 3.6\times 10^6\thinspace\mathrm{W\cdot s} = 3.6\times 10^6\thinspace\mathrm J
$$

### Ejemplo resuelto

{{% callout example %}}
<br>

> Los vecinos de un bloque de pisos se han quejado de que su ascensor, con capacidad para 400$\thinspace$kg, es demasiado lento. <br>
> a) ¿Qué potencia deberá tener el nuevo motor que se instale para que pueda subir hasta arriba (supongamos 30$\thinspace$m) en 10 segundos?<br>
> b) ¿Cuál es la velocidad media del ascensor?

---

a) Para calcular la potencia $P$ utilizamos la expresión:

$$
P = \frac{W}{t},
$$

donde $W$ es el trabajo que ha de realizar el motor y $t$ es el tiempo.

La fuerza que debe vencer el ascensor es el peso del propio ascensor (supondremos unos 300$\thinspace$kg) más el peso de las personas que vayan dentro, suponiendo que sube lleno.
$$
\begin{align*}
F &= P_\text{ascensor} + P_\text{personas} \\
&= m_\text{ascensor}\cdot g + m_\text{personas}\cdot g \\
&= (m_\text{ascensor} + m_\text{personas})\cdot g \\
&= (300\thinspace\mathrm{kg} + 400\thinspace\mathrm{kg})\cdot 9.8\thinspace\mathrm{N/kg} \\
&= 6860\thinspace\mathrm N
\end{align*}
$$

El trabajo $W$ que deberá realizar el motor será:

$$
W = F\cdot h = 6860\thinspace\mathrm N \cdot 30\thinspace\mathrm m = 205800\thinspace\mathrm J
$$

La potencia $P$ será por tanto:

$$
P = \frac{W}{t} = \frac{205800\thinspace\mathrm J}{10\thinspace\mathrm s} = 20580\thinspace\mathrm W
$$

---

b) Podemos calcular la velocidad media del ascensor utilizando la expresión:

$$
v_\mathrm m = \frac{h}{t} = \frac{30\thinspace\mathrm m}{10\thinspace\mathrm s} = 3\thinspace\mathrm{m/s}
$$

Como curiosidad, [el ascensor más rápido del mundo es capaz de viajar a 21$\thinspace$m/s](https://www.bbc.com/mundo/noticias-40219932).

{{% /callout %}}

## Efectos del calor sobre los cuerpos

### Variación de temperatura

La relación entre el calor $Q$ que se proporciona a una masa $m$ de una sustancia y el incremento de temperatura $\Delta T$ viene dada por:

$$
Q = m\cdot c\cdot \Delta T,
$$

donde $c$ es el **calor específico** de la sustancia[^2], que representa la cantidad de energía que es necesario suministrar a la unidad de masa de la sustancia para elevar su temperatura en una unidad. En el **SI** se mide en $\mathrm{J\thinspace kg^{-1}\thinspace K^{-1}}$.

[^2]: En [esta tabla](https://es.wikipedia.org/wiki/Calor_espec%C3%ADfico#Tabla_de_calores_espec%C3%ADficos_y_sustancias) puedes ver los **valores** del **calor específico** de diversas sustancias, medido a 25&thinsp;&deg;C a menos que se indique lo contrario.

{{< spoiler text="¿Sabes que el calor específico depende de la temperatura?" >}}
La siguiente gráfica muestra, a modo de ejemplo, la dependencia del calor específico del oro (Au), hierro (Fe) y carbono (C) con la temperatura, según el [modelo de Debye](https://es.wikipedia.org/wiki/Modelo_de_Debye):

{{< deferred_chart id="c-t" series="js/charts/specific-heat.js" >}}
return {
  datasets: [
    {
      data: series.cOro.map(([x, y]) => ({x, y})),
      label: "Oro",
      backgroundColor: "#4477AA",
      borderColor: "#4477AA",
      fill: false,
      pointRadius: 0,
    },
    {
      data: series.cHierro.map(([x, y]) => ({x, y})),
      label: "Hierro",
      backgroundColor: "#EE6677",
      borderColor: "#EE6677",
      fill: false,
      pointRadius: 0,
    },
    {
      data: series.cCarbono.map(([x, y]) => ({x, y})),
      label: "Carbono",
      backgroundColor: "#228833",
      borderColor: "#228833",
      fill: false,
      pointRadius: 0,
    },
  ],
  x: {title: "𝑇/K", max: 1000, min: 0, ticks: {stepSize: 100}},
  y: {title: "𝑐 [\tJ/(mol·K)]", beginAtZero: true, suggestedMax: 25, suggestedMin: 0, ticks: {stepSize: 5}},
  legend: {},
};
{{< /deferred_chart >}}

Se observa que, a altas temperaturas, el calor específico se acerca al valor $c = 25\thinspace\mathrm{J/(mol\cdot K)}$, resultado que se conoce como la [ley de Dulong y Petit](https://es.wikipedia.org/wiki/Ley_de_Dulong-Petit).
{{< /spoiler >}}

### Dilatación

Como regla general, un cuerpo aumenta su volumen (_se dilata_) al aumentar su temperatura[^3].

[^3]: Una **excepción** notable es la **dilatación anómala del agua**, ya que entre 0&thinsp;&deg;C y 4&thinsp;&deg;C el agua se contrae debido a que, _sorprendentemente_, el hielo es menos denso que el agua líquida, razón por la que flota sobre ella.

{{< figure library="true" src="energia-trabajo-calor-4ESO/junta-dilatacion.jpg" title="**Junta de dilatación** de un puente. Si estas juntas no se construyesen, la dilatación térmica de los materiales cuando aumentase la temperatura generaría unos esfuerzos tan grandes que fracturarían el puente. Para calcular estas juntas se necesita conocer el **coeficiente de dilatación térmica**. Imagen de [**Kranich17**](https://pixabay.com/es/users/kranich17-11197573/) en [Pixabay](https://pixabay.com/es/)." lightbox="true" >}}

Si consideramos una varilla de longitud inicial $l_0$ a una temperatura inicial $T_0$ y elevamos su temperatura hasta $T$, la varilla aumentará su longitud hasta $l$.

{{< figure library="true" src="energia-trabajo-calor-4ESO/dilatacion.svg" title="Adaptada de https://commons.wikimedia.org/wiki/File:Thermal-expansion.svg." lightbox="false" width="100%" >}}

El aumento de longitud experimentado, $\Delta l = l-l_0$, es proporcional a la longitud inicial $l_0$ y a la variación de temperatura $\Delta T = T-T_0$:

$$
\Delta l = \alpha\cdot l_0\cdot \Delta T,
$$

donde $\alpha$ es el llamado **coeficiente de dilatación lineal**[^4], cuyas unidades en el **SI** son $\mathrm{K^{-1}}$. Se puede demostrar que los coeficientes de dilatación superficial y cúbica son el doble y el triple, respectivamente, del lineal:

[^4]: En [esta tabla](https://es.wikipedia.org/wiki/Coeficiente_de_dilataci%C3%B3n#Valores_del_coeficiente_de_dilataci%C3%B3n_lineal) puedes ver los **valores** del **coeficiente de dilatación lineal** de diversos materiales.

$$
\Delta S = 2\alpha \cdot S_0\cdot \Delta T;\quad \Delta V = 3\alpha \cdot V_0\cdot \Delta T
$$

### Cambios de estado

Al transferir calor a un cuerpo, su temperatura aumenta. Al variar la temperatura de un cuerpo, éste puede [**cambiar** su **estado** de agregación]({{< ref "/apuntes-segundo-tercero-eso/materia/index.md#cambios-de-estado" >}}).

**Durante** un **cambio** de estado, la **temperatura** del cuerpo permanece **constante**, ya que durante el cambio la energía transferida al cuerpo se emplea en reorganizar las partículas (romper enlaces).

La cantidad de calor $Q$ que es necesario comunicar a una sustancia para que cambie de estado depende de la propia sustancia y de su masa $m$, a través de la expresión:

$$
Q = m\cdot L,
$$

donde $L$ es el **calor latente**[^5], que representa la cantidad de energía requerida por la sustancia para cambiar de estado. En el **SI** se mide en $\mathrm{J/kg}$.

[^5]: En [esta tabla, tomada de la entrada sobre calor latente en la versión inglesa de la Wikipedia](https://en.wikipedia.org/wiki/Latent_heat#Table_of_specific_latent_heats), puedes ver los **valores** del **calor latente** de **fusión** y de **vaporización** de diversas sustancias.

### Ejemplo resuelto

{{% callout example %}}
<br>

> Para forjar acero es necesario calentarlo a temperaturas de entre 800&thinsp;&deg;C y 1000&thinsp;&deg;C. Si tenemos una espada de acero de 1.2$\thinspace$kg de masa y 1$\thinspace$m de longitud a temperatura ambiente (20&thinsp;&deg;C) y la calentamos hasta los 900&thinsp;&deg;C, ¿cuál será su nueva longitud?<br>
> Dato: $\alpha_\text{acero} = 1.2\times 10^{-5}\thinspace\mathrm{^\circ C^{-1}}$.

---

La expresión:

$$
\Delta l = \alpha\cdot l_0\cdot \Delta T
$$

la podemos escribir como ($\Delta l = l-l_0$):

$$
\begin{align}
l-l_0 &= \alpha\cdot l_0\cdot \Delta T \\\\
l &= l_0 + \alpha\cdot l_0\cdot \Delta T \\\\
l &= l_0\cdot(1+\alpha\cdot \Delta T)
\end{align}
$$

Sustituyendo valores tenemos:

$$
\begin{align}
l &= 1\cdot [1+1.2\times 10^{-5}\cdot (900-20)] \\\\
&= 1.01\thinspace\mathrm m,
\end{align}
$$

es decir, se ha alargado 1$\thinspace$cm aproximadamente.

---

> Si tras calentar la espada la sumergimos en un tanque cilíndrico de 5$\thinspace$cm de radio y 1$\thinspace$m de altura, lleno de agua a temperatura ambiente (20&thinsp;&deg;C), ¿a qué temperatura se calentará el agua?<br>
> Datos: $d_\text{agua} = 1\thinspace\mathrm{kg/L}$; $c_\text{acero} = 0.12\thinspace\mathrm{kcal\thinspace kg^{-1}\thinspace ^\circ C^{-1}}$; $c_\text{agua} = 1\thinspace\mathrm{kcal\thinspace kg^{-1}\thinspace ^\circ C^{-1}}$.

---

La espada cederá calor al agua por estar a mayor temperatura, de tal forma que:

$$
Q_\text{cedido} + Q_\text{ganado} = 0
$$

El calor cedido por la espada es:

$$
Q_\text{cedido} = m_\text{espada}\cdot c_\text{acero}\cdot (T_\mathrm e - T_\text{espada}),
$$

con $m_\text{espada} = 1.2\thinspace\mathrm{kg}$, $c_\text{acero} = 0.12\thinspace\mathrm{kcal\thinspace kg^{-1}\thinspace ^\circ C^{-1}}$, $T_\text{espada} = 900\thinspace^\circ\mathrm{C}$ y $T_\mathrm e$ la temperatura final de equilibrio de la mezcla (en &deg;C). Sustituyendo valores:

$$
Q_\text{cedido} = 0.144T_\mathrm e - 129.6\thinspace[\mathrm{kcal}]
$$

El calor ganado por el agua es:

$$
Q_\text{ganado} = m_\text{agua}\cdot c_\text{agua}\cdot (T_\mathrm e - T_\text{agua}),
$$

con $c_\text{agua} = 1\thinspace\mathrm{kcal\thinspace kg^{-1}\thinspace ^\circ C^{-1}}$, $T_\text{agua} = 20\thinspace^\circ\mathrm{C}$ y $T_\mathrm e$ la temperatura final de equilibrio de la mezcla (en &deg;C).

Para calcular la masa de agua necesitamos primero calcular su volumen, para después obtener la masa a partir de la densidad:

$$
V_\text{agua} = \pi r^2 h\text{ (cilindro)},
$$

donde $r = 5\thinspace\mathrm{cm} = 0.05\thinspace\mathrm{m}$ y $h = 1\thinspace\mathrm m$:

$$
\begin{align*}
V_\text{agua} = \pi r^2 h = \pi\cdot 0.05^2\cdot 1 &= 0.0079\thinspace\mathrm{m^3} \\\\
& = 7.9\thinspace\mathrm{L}
\end{align*}
$$

Como la densidad del agua es $d_\text{agua} = 1\thinspace\mathrm{kg/L}$:

$$
d = \frac{m}{V}\rightarrow m = V\cdot d = 7.9\thinspace\mathrm{kg}
$$

Así que podemos escribir:

$$
Q_\text{ganado} = 7.9T_\mathrm e - 157.1\thinspace[\mathrm{kcal}]
$$

Imponiendo la **conservación de la energía**:
$$
\begin{align*}
Q_\text{cedido} + Q_\text{ganado} &= 0 \\
0.144T_\mathrm e - 129.6 + 7.9T_\mathrm e - 157.1 &= 0
\end{align*}
$$

de donde despejamos $T_\mathrm e = 35.8\thinspace ^\circ\mathrm C$.

{{% /callout %}}

## Máquinas térmicas

Consideramos una **máquina térmica** a un sistema que funciona **periódicamente** entre dos focos a distinta temperatura, y transforma parte del calor absorbido del foco caliente en trabajo, cediendo otra parte al foco frío:

{{< figure library="true" src="energia-trabajo-calor-4ESO/maquina-termica.svg" title="Esquema de una **máquina térmica**. La máquina absorbe calor desde la fuente caliente *T*<sub>1</sub> y cede calor a la fría *T*<sub>2</sub>, produciendo trabajo: *Q*<sub>1</sub> = *W* + |*Q*<sub>2</sub>|. Adaptada de [https://commons.wikimedia.org/wiki/File:Carnot_heat_engine_2.svg](https://commons.wikimedia.org/wiki/File:Carnot_heat_engine_2.svg)." lightbox="false" width="100%" >}}

### Rendimiento energético

Llamamos **rendimiento energético**, $\eta$, al cociente entre el _beneficio_ y el _coste_:

$$
\eta = \frac{\text{trabajo que obtengo}}{\text{calor que consumo}}
$$

Para un **motor**:

$$
\eta = \frac{W}{Q_1} = \frac{Q_1-|Q_2|}{Q_1} = 1-\frac{|Q_2|}{Q_1}<1
$$

Para una **calefacción**, tendríamos[^6]:

[^6]: Si la máquina **invierte el ciclo**, hablaríamos de una **máquina frigorífica**, cuyo rendimiento viene dado por la relación:

	$$
	\eta = \frac{|Q_2|}{W} = \frac{|Q_2|}{Q_1-|Q_2|} > 1
	$$

$$
\eta = \frac{Q_1}{W} = \frac{Q_1}{Q_1-|Q_2|} > 1
$$

Se puede demostrar que el rendimiento de una **máquina térmica ideal** (llamada **máquina de Carnot**) solo depende de las temperaturas de ambos focos:

$$
\eta_\text{ideal} = 1-\frac{T_2}{T_1},
$$

que es el máximo rendimiento que puede obtenerse para un ciclo térmico que se realiza entre dos fuentes con estas temperaturas.

### Motor de explosión

Se trata de una **máquina térmica** de **combustión interna** producida por una chispa eléctrica. Se puede considerar a **volumen constante**. El más utilizado es el de **cuatro tiempos** (gasolina), siendo el **ciclo de Otto** la aproximación más empleada:
{{< figure library="true" src="energia-trabajo-calor-4ESO/motor-4-tiempos.svg" lightbox="false" width="100%" >}}

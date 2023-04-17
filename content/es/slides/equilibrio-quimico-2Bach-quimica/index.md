---
title: Equilibrio químico
summary: "Ley de acción de masas. Constante de equilibrio. Principio de Le Chatelier. Equilibrios heterogéneos."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/equilibrio-quimico/diapositivas"

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

# Equilibrio químico

- [Ley de acción de masas](#/3)
- [Constante de equilibrio](#/4)
- [Cociente de reacción](#/5)
- [Grado de disociación](#/6)
- [Equilibrios con gases](#/7)
- [Factores que afectan al estado de equilibrio](#/8)
- [Obtención industrial del amoniaco](#/9)
- [Equilibrios heterogéneos](#/10)
- [Ejemplo](#/11)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

En 1803, [Berthollet](https://es.wikipedia.org/wiki/Claude_Louis_Berthollet) descubre que ciertas reacciones químicas son **reversibles**, llegando un momento en el que las velocidades de las reacciones directa e inversa se igualan, manteniéndose invariables las concentraciones de reactivos y productos (<span style="font-variant:small-caps;">**equilibrio**</span>).

---

{{< figure src="equilibrio-quimico-2Bach-quimica/equilibrio.svg" title="Traducida y adaptada de https://www.coursehero.com/sg/general-chemistry/reversible-reactions-and-equilibrium/." lightbox="false" width="100%" >}}

---

{{% section %}}

## Ley de acción de masas

También conocida como **ley de Guldberg y Waage**, establece que la velocidad de una reacción es directamente proporcional al producto de las concentraciones de los reactivos. 

(continúa hacia abajo)

👇

---

Como en el equilibrio las velocidades de las reacciones directa e inversa son iguales, esto implica que existe una relación constante entre concentraciones de reactivos y productos.

{{% /section %}}

---

{{% section %}}

## Constante de equilibrio
Como en el equilibrio las concentraciones de reactivos y productos se mantienen constantes, podemos calcular una constante de equilibrio $K_\mathrm c$, que será invariable a una cierta $T$.

(continúa hacia abajo)

👇

---

En un caso general:
$$
a\thinspace\mathrm A + b\thinspace\mathrm B &#8652; c\thinspace\mathrm C + d\thinspace\mathrm D,
$$

$$
K_\mathrm c = \frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}
$$

---

- La expresión de $K_\mathrm c$ (y su valor) depende de la forma en la que esté ajustada la reacción.

---

- Si se invierte la reacción, se invierte también el valor de la constante de equilibrio:
$$
K_\mathrm i = \frac{1}{K_\mathrm d}
$$

---

- Si se suman dos o más ecuaciones, la constante de equilibrio es el producto de las constantes de equilibrio de cada una de las reacciones.

---

- Si en la reacción intervienen sólidos o líquidos puros, dado que su concentración es constante, se considera incluida en el valor de la constante de equilibrio.

---

{{< figure src="equilibrio-quimico-2Bach-quimica/magnitud-K.svg" lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Cociente de reacción
Para poder saber si una reacción ha llegado a su equilibrio, se puede calcular el llamado **cociente de reacción**, $Q_\mathrm r$:

(continúa hacia abajo)

👇

---

$$
a\thinspace\mathrm A + b\thinspace\mathrm B &#8652; c\thinspace\mathrm C + d\thinspace\mathrm D,
$$
$$
Q_\mathrm r = \frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}
$$
donde las concentraciones no tienen por qué ser en el equilibrio, a diferencia de con $K_\mathrm c$.

---

- $Q_\mathrm r < K_\mathrm c$: deberá aumentar la concentración de productos (desplazarse hacia la derecha).
- $Q_\mathrm r = K_\mathrm c$: el sistema está en equilibrio.
- $Q_\mathrm r > K_\mathrm c$: deberá aumentar la concentración de reactivos (desplazarse hacia la izquierda).

{{% /section %}}

---

{{% section %}}

## Grado de disociación
El **grado de disociación**, $\alpha$, se define como el cociente entre la cantidad de sustancia disociada y la cantidad de sustancia inicial:

(continúa hacia abajo)

👇

---

$$
\alpha = \frac{\text{cantidad de sustancia disociada}}{\text{cantidad de sustancia inicial}}
$$
Suele expresarse en tanto por ciento (\%).

---    

Electrolitos, ácidos y bases fuertes
: $\alpha \approx 1$

Electrolitos, ácidos y bases débiles
: $\alpha < 1$

{{% /section %}}

---

{{% section %}}

## Equilibrios con gases
En reacciones en las cuales intervienen **gases**, se puede expresar la constante de equilibrio en función de las **presiones parciales** de cada gas en la mezcla en equilibrio:

(continúa hacia abajo)

👇

---

$$
a\thinspace\mathrm A + b\thinspace\mathrm B &#8652; c\thinspace\mathrm C + d\thinspace\mathrm D,
$$
$$
K_\mathrm p = \frac{(p_\mathrm C)^c(p_\mathrm D)^d}{(p_\mathrm A)^a(p_\mathrm B)^b}
$$

---

Utilizando la **ecuación de los gases ideales**, se puede demostrar que $K_\mathrm p$ está relacionada con $K_\mathrm c$ a través de la expresión:
$$
K_\mathrm p = K_\mathrm c\left(RT\right)^{\Delta n},
$$
donde $\Delta n = n_\text{final} - n_\text{inicial}$ es la <strong>variación</strong> de <strong>moles gaseosos</strong>.

---

{{< figure src="equilibrio-quimico-2Bach-quimica/equilibrio-quimico.svg" title="https://www.chegg.com/learn/chemistry/introduction-to-chemistry/chemical-equilibrium" lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Factores que afectan al estado de equilibrio

- [Principio de Le Châtelier](#/8/1)
- [Concentración](#/8/2)
- [Temperatura](#/8/3)
- [Presión o volumen](#/8/4)

(continúa hacia abajo)

👇

---

### Principio de Le Châtelier

> Cuando un sistema en equilibrio es perturbado, éste evoluciona a un nuevo equilibrio, contrarrestando parcialmente la perturbación introducida.

---

### Concentración

Si se añade reactivo/producto
: Éste tenderá a reaccionar para volver a conseguir el equilibrio y por lo tanto el sistema se desplazará hacia el lado contrario.

Si se extrae reactivo/producto
: Éste tenderá a formarse para volver a conseguir el equilibrio y por lo tanto el sistema se desplazará hacia su formación.

---

### Temperatura

Reacción exotérmica
: En una reacción exotérmica (desprende calor) el aumento de la temperatura desplaza la reacción hacia reactivos y una disminución de la temperatura la desplaza hacia productos.

Reacción endotérmica
: En una reacción endotérmica (absorbe calor) el aumento de la temperatura desplaza la reacción hacia productos y una disminución de la temperatura la desplaza hacia reactivos.

---

### Presión o volumen

De acuerdo a la **ley de Boyle-Mariotte**, la presión y el volumen son inversamente proporcionales: a mayor presión menor volumen y viceversa $\rightarrow pV = \text{constante}$.

---

Al aumentar la presión (disminuir el volumen)
: El sistema se desplazará de forma que la presión disminuya, es decir, hacia donde haya menos moles de gas.

Al disminuir la presión (aumentar el volumen)
: El sistema se desplazará de forma que la presión aumente, es decir, hacia donde haya más moles de gas.

---

{{< figure src="equilibrio-quimico-2Bach-quimica/le-chatelier.svg" lightbox="false" width="60%" >}}

{{% /section %}}

---

{{% section %}}

## Obtención industrial del amoniaco

El **amoniaco**, NH<sub>3</sub>, se produce industrialmente a partir de nitrógeno e hidrógeno gaseosos mediante el **proceso de Haber-Bosch**, un proceso de fijación artificial de nitrógeno.

(continúa hacia abajo)

👇

---

{{< figure src="equilibrio-quimico-2Bach-quimica/Haber-Bosch.svg" title="Diagrama del **proceso de Haber-Bosch**. Adaptada de https://commons.wikimedia.org/wiki/File:Haber-Bosch-es.svg." lightbox="false" width="100%" >}}

---

### Equilibrio exotérmico

En el proceso se hace reaccionar nitrógeno atmosférico, N<sub>2</sub>(g), con hidrógeno, H<sub>2</sub>(g), obtenido a partir de metano (gas natural), estableciéndose un **equilibrio exotérmico** dado por la ecuación:

---

$$
\mathrm{N_2(g)} + 3\thinspace \mathrm{H_2(g)} &#8652; 2\thinspace \mathrm{NH_3(g)} \qquad \Delta H \approx -92\thinspace\mathrm{kJ}
$$

cuya **constante de equilibrio** viene dada por:

$$
K_\mathrm p = \frac{(p_{\mathrm{NH_3}})^2}{p_{\mathrm{N_2}}(p_{\mathrm{H_2}})^3}
$$

donde $p$ representa la **presión parcial** de cada una de las sustancias.

---

#### Catalizador

La reacción natural es muy lenta debido sobretodo a la estabilidad de los enlaces triples del nitrógeno, por lo que se utiliza un catalizador de hierro (Fe<sup>3+</sup>) para acelerarla.

---

Notar que la adición de este catalizador no afecta al equilibrio ni a la cantidad de amoniaco que se produce.

---

#### Temperatura

Al ser exotérmica, según el principio de Le Châtelier, las bajas temperaturas favorecen la formación de amoniaco, pero a su vez ralentizan la reacción, por lo que se llega a un compromiso utilizando  temperaturas de entre 400&thinsp;&deg;C y 450&thinsp;&deg;C.

---

#### Presión

Al haber menos moles gasesos en los productos (2, frente a 4 en los reactivos), de acuerdo al principio de Le Châtelier, un aumento de presión desplazará el equilibrio hacia los productos, favoreciendo la producción de amoniaco.

---

Por otro lado, utilizar altas presiones tiene un coste muy elevado, por lo que de nuevo se llega a un compromiso, en este caso de unas 200 atm.

---

| Cambio | [N<sub>2</sub>] | [H<sub>2</sub>] | [NH<sub>3</sub>] |
| :--- | :---: | :---: | :---: |
| Aumento de temperatura | aumenta | aumenta | disminuye |
| Aumento de presión | disminuye | disminuye | aumenta |
| Adición de N<sub>2</sub> | aumenta | disminuye | aumenta |
| Adición de H<sub>2</sub>O | constante | constante | constante |
| Adición de catalizador | constante | constante | constante |

---

Puedes conocer más detalles sobre el proceso de Haber-Bosch viendo lo que ocurre en una **planta química**:

{{< youtube c4BmmcuXMu8 >}}

---

o conociendo la **importancia** del **proceso** para la **economía** y la **alimentación**:

{{< youtube o1_D4FscMnU >}}

{{% /section %}}

---

{{% section %}}

## Equilibrios heterogéneos

- [Reacciones de precipitación](#/10/1)
- [Solubilidad y producto de solubilidad](#/10/2)
- [Efecto del ion común](#/10/10)
- [Solubilidad y temperatura](#/10/12)

(continúa hacia abajo)

👇

---

### Reacciones de precipitación

Son reacciones en las que se forma un **producto insoluble** (que no se disuelve). Esto típicamente ocurre con **sustancias iónicas** cuyos iones tienden a permanecer unidos al ponerse en disolución, formando un **precipitado**.

---

### Solubilidad y producto de solubilidad

Cuando un compuesto químico coexiste en estado sólido y disuelto, se establece un **equilibrio de solubilidad** entre él y sus iones:

---

$$
\mathrm C_n\mathrm A_m(\mathrm s) &#8652; \mathrm C_n\mathrm A_m(\mathrm{ac}) \rightarrow n\thinspace\mathrm C^{m+}(\mathrm{ac}) + m\thinspace\mathrm A^{n-}(\mathrm{ac}),
$$

donde C representa un catión, A un anión y $n$ y $m$ sus respectivos índices estequiométricos.

---

#### Solubilidad

Llamamos **solubilidad**, $s$, a la máxima cantidad de soluto que puede disolverse a una temperatura dada en un disolvente. Se suele expresar en gramos de soluto por cada 100&thinsp;mL de disolvente.

---

#### Producto de solubilidad

Un equilibrio de solubilidad se caracteriza por un **producto de solubilidad**, $K_\mathrm s$, que hace las veces de <strong>constante de equilibrio</strong>:

---

$$
K_\mathrm s = [\mathrm C^{m+}]^n [\mathrm A^{n-}]^m,
$$

donde [ ] representa concentraciones molares salvo que se indique lo contrario.

---

A partir de la estequiometría, es posible establecer la relación entre el producto de solubilidad y la solubilidad:

{{< figure src="equilibrio-quimico-2Bach-quimica/producto-solubilidad.svg" lightbox="false" width="100%" >}}

---

Como en los equilibrios homogéneos, podemos comparar el cociente (*producto*) de reacción con el producto de solubilidad para determinar si se formará precipitado:

---

- $Q_\mathrm s < K_\mathrm s$: disolución insaturada &#8594; no hay precipitado
- $Q_\mathrm s = K_\mathrm s$: disolución saturada &#8594; equilibrio de solubilidad
- $Q_\mathrm s > K_\mathrm s$: disolución sobresaturada &#8594; se forma precipitado

---

### Efecto del ion común

El **efecto del ion común** es una consecuencia del principio de Le Châtelier y consiste en la **disminución de la solubilidad** de un precipitado iónico por la adición a la disolución de un compuesto soluble con un ion en común con el precipitado, aumentando su concentración y desplazando el equilibrio hacia la izquierda.

---

{{< figure src="equilibrio-quimico-2Bach-quimica/ion-comun.svg" title="Se forma precipitado de AgI en presencia de KI." lightbox="false" width="100%" >}}

---

### Solubilidad y temperatura

- [Sólidos en agua](#/10/13)
- [Gases en agua](#/10/14)
- [Gases en disolventes orgánicos](#/10/15)

(continúa hacia abajo)

👇

---

#### Sólidos en agua

La **solubilidad** de muchas sales (sólidas) disueltas en agua **aumenta** con la temperatura. Algunas, como el Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, se vuelven menos solubles al aumentar la temperatura, debido a que su disolución en agua es exotérmica.

---

#### Gases en agua

La **solubilidad** suele **disminuir** al aumentar la temperatura.

---

#### Gases en disolventes orgánicos

La **solubilidad** suele **aumentar** con la temperatura.

{{% /section %}}

---

{{% section %}}

## Ejemplo

<q>El SO<sub>3</sub>(g) se disocia a 127&thinsp;&deg;C mediante un proceso endotérmico, en SO<sub>2</sub>(g) y O<sub>2</sub>(g), estableciéndose un equilibrio. En un recipiente de 20 L a 127&thinsp;&deg;C se introducen 4.0 mol de SO<sub>3</sub> produciéndose una disociación del 30 \%.</q>

---

<q>a) Calcule las concentraciones molares de cada gas en el equilibrio.</q>

Escribimos el **equilibrio** de disociación ajustado en función del número de moles iniciales y del grado de disociación $\alpha$:

---

{{< figure src="equilibrio-quimico-2Bach-quimica/equilibrio-SO3.svg" lightbox="false" width="100%" >}}

donde $n = 4\thinspace\mathrm{mol}$ y $\alpha = 0.3$.

---

Calculamos las concentraciones de cada gas:

\begin{align*}
[\mathrm{SO_3}] & = \frac{4\thinspace\mathrm{mol}\cdot (1-0.3)}{20\thinspace\mathrm L} = 0.14\thinspace\mathrm{M} \\\\
[\mathrm{SO_2}] & = \frac{4\thinspace\mathrm{mol}\cdot 0.3}{20\thinspace\mathrm L} = 0.06\thinspace\mathrm{M} \\\\
[\mathrm{O_2}] & = \frac{1/2\cdot 4\thinspace\mathrm{mol}\cdot 0.3}{20\thinspace\mathrm L} = 0.03\thinspace\mathrm{M}
\end{align*}

---

<q>b) Calcule la presión total y parcial de cada gas.</q>

A partir de la **ecuación de los gases ideales**, $p = cRT$:
\begin{align*}
p_{\mathrm{SO_3}} &= 0.14\thinspace\mathrm{mol/L}\cdot 0.082\thinspace\mathrm{atm\thinspace L\thinspace mol^{-1}\thinspace K^{-1}}\cdot 400.15\thinspace \mathrm{K} \\\\
&= 4.6\thinspace\mathrm{atm} \\\\
p_{\mathrm{SO_2}} &= 0.06\thinspace\mathrm{mol/L}\cdot 0.082\thinspace\mathrm{atm\thinspace L\thinspace mol^{-1}\thinspace K^{-1}}\cdot 400.15\thinspace \mathrm{K} \\\\
&= 2\thinspace\mathrm{atm} \\\\
p_{\mathrm{O_2}} &= 0.03\thinspace\mathrm{mol/L}\cdot 0.082\thinspace\mathrm{atm\thinspace L\thinspace mol^{-1}\thinspace K^{-1}}\cdot 400.15\thinspace \mathrm{K} \\\\
&= 1\thinspace\mathrm{atm}
\end{align*}

---

De acuerdo a la **ley de las presiones parciales de Dalton**, la **presión total** es:

$$
p_\mathrm t = p_{\mathrm{SO_3}} + p_{\mathrm{SO_2}} + p_{\mathrm{O_2}} = 4.6 + 2.0 + 1.0 = 7.6\thinspace\mathrm{atm}
$$

---

<q>c) Calcule el valor de las constantes $K_\mathrm c$ y $K_\mathrm p$ a 127&thinsp;&deg;C.</q>

La expresión de la constante $K_\mathrm c$ es:

$$
K_\mathrm c  = \frac{\mathrm{[SO_2]^2}\mathrm{[O_2]}}{\mathrm{[SO_3]^2}}
$$

---

Sustituyendo valores:

$$
K_\mathrm c = \frac{(0.06)^2\cdot 0.03}{(0.14)^2} = 5.5\times 10^{-3}
$$

---

La expresión de la constante $K_\mathrm p$ es:

$$
K_\mathrm p  = \frac{(p_{\mathrm{SO_2}})^2p_{\mathrm{O_2}}}{(p_{\mathrm{SO_3}})^2}
$$

---

Sustituyendo valores:

$$
K_\mathrm p = \frac{(2.0)^2\cdot 1.0}{(4.6)^2} = 0.19,
$$

cumpliéndose que $K_\mathrm p = K_\mathrm c\left(RT\right)^{\Delta n_\text{gaseosos}}$.

---

<q>d) Si estando la mezcla en equilibrio se reduce el volumen del sistema (sin que resulte afectada la temperatura), ¿favorecerá la disociación del SO<sub>3</sub>?</q>

De acuerdo a la ley de Boyle-Mariotte, al reducir el volumen hasta un tercio de su valor inicial, la presión se triplica.

---

De acuerdo al principio de Le Châtelier, el sistema se desplazará hacia donde haya menos moles gaseosos, es decir, hacia la izquierda, formando más SO<sub>3</sub> y favoreciendo por tanto su disociación.

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Pincha [**aquí**](?print-pdf#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>
---
title: MAS
summary: "Cinemática, dinámica y energía del movimiento armónico simple."
url: "/recursos-fisica-quimica/apuntes/2bach/fisica/mas/diapositivas"

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

# MAS

- [Magnitudes](#/6)
- [Ecuaciones](#/7)
- [Dinámica del MAS](#/8)
- [Energía del MAS](#/9)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

El **movimiento armónico simple** (MAS) es un tipo especial de **movimiento periódico** en el que la **fuerza restauradora** (elástica) sobre el objeto en movimiento es **directamente proporcional** a la magnitud del **desplazamiento** del objeto y actúa hacia su posición de equilibrio.

---

El resultado es una **oscilación** que continúa indefinidamente salvo que sea inhibida por fricción o cualquier otra disipación de energía.

---

Puede considerarse la **proyección unidimensional** del **movimiento circular uniforme** (MCU).

{{< figure library="true" src="MAS-2Bach-fisica/MAS-orbita.gif" title="Movimiento armónico simple, mostrado en el espacio real y en el [espacio fásico](https://es.wikipedia.org/wiki/Espacio_fásico). La órbita es periódica." lightbox="false" >}}

---

Son **ejemplos** de **MAS** el [movimiento de una masa unida a un muelle](#/8/1), un [péndulo simple](#/8/6) o un [*yugo escocés*](https://es.wikipedia.org/wiki/Yugo_escocés):

{{< youtube wSGNvD9cgF0 >}}

---

Aquí el [Departamento de Física y Química del IES Valle del Saja](http://www.fqsaja.com) nos lo demuestra con esta máquina que dibuja ondas:

{{< youtube W1qVW-Gvj7U >}}

---

{{% section %}}

## Magnitudes

- [Amplitud *A*](#/6/1)
- [Periodo *T*](#/6/2)
- [Frecuencia *f*](#/6/3)
- [Frecuencia angular *ω*](#/6/4)
- [Fase inicial](#/6/5)

(continúa hacia abajo)

👇

---

### Amplitud *A*

Máxima elongación (desplazamiento máximo de la posición de equilibrio).

En el SI se mide en m.

---

### Periodo *T*

Tiempo empleado en completar una oscilación completa.

En el SI se mide en s.

---

### Frecuencia *f*

Número de oscilaciones por unidad de tiempo: $f = 1/T$.

En el SI se mide en Hz.

---

### Frecuencia angular *ω*

$$
\omega = \frac{2\pi}{T} = 2\pi f
$$

En el SI se mide en rad/s.

---

### Fase inicial

Indica el estado de oscilación/vibración inicial.

Se denota por $\varphi_0$.

En el SI se mide en rad.

{{% /section %}}

---

{{% section %}}

## Ecuaciones

- [Posición](#/7/2)
- [Velocidad](#/7/3)
- [Aceleración](#/7/4)

(continúa hacia abajo)

👇

---

<blockquote>
<p>
La posición de un MAS puede expresarse indistintamente en función del seno o del coseno, sin más que variar la fase inicial, teniendo en cuenta las relaciones:
</p>
<div align="center" style="margin-bottom: 1rem">
sin&thinsp;α = cos&thinsp;(α – π/2)<br>cos&thinsp;α = sin&thinsp;(α + π/2)
</div>
</blockquote>

---

### Posición

{{< figure library="true" src="MAS-2Bach-fisica/x-vs-t.svg" title="" lightbox="false" width="100%" >}}

---

### Velocidad

{{< figure library="true" src="MAS-2Bach-fisica/v-vs-t.svg" title="" lightbox="false" width="100%" >}}

---

### Aceleración

{{< figure library="true" src="MAS-2Bach-fisica/a-vs-t.svg" title="" lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Dinámica del MAS

- [Ley de Hooke](#/8/1)
- [Péndulo simple](#/8/6)

(continúa hacia abajo)

👇

---

### Ley de Hooke

Aplicando la **2ª ley de Newton** a una masa $m$ unida a un extremo de un muelle (resorte) de constante elástica $k$:
		$$
		\begin{align*}
		F &= ma	\\
		-kx &= ma \\
		-kx &= -m\omega^2x
		\end{align*}
		$$
		de donde
		$$
		k = m\omega^2
		$$

---

La frecuencia angular, $\omega$, puede calcularse por tanto como:
$$
\omega = \sqrt{\frac{k}{m}}
$$

---

El periodo, $T$, o la frecuencia, $f$, con la que oscila una masa $m$ unida a un extremo de un resorte de constante elástica $k$ pueden por tanto escribirse como:
$$
T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}};\quad f = \frac{1}{T} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}
$$

---

{{< figure library="true" src="MAS-2Bach-fisica/masa-muelle.svg" title="" lightbox="false" width="50%" >}}

---

Puedes aprender más sobre **masas** y **resortes** con este excelente ***laboratorio***:

<iframe src="https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

### Péndulo simple

Consiste en una masa suspendida de un pivote de forma que puede oscilar libremente.

{{< figure library="true" src="MAS-2Bach-fisica/pendulo-simple.svg" title="" lightbox="false" width="40%" >}}

---

En este caso la **componente tangencial** del **peso** actúa como **fuerza recuperadora**, acelerando la masa hacia su posición de equilibrio, provocando la oscilación alrededor de ella.

---

$$
\begin{aligned}
	-mg\sin\theta &= ma \\
	-g\sin\theta &= -\omega^2x \\
	-g\sin\theta &= -\omega^2l\theta
\end{aligned}
$$

---

- En la **aproximación** para **ángulos pequeños**, $\sin\theta\approx\theta$, por lo que el movimiento se aproxima por un **movimiento armónico simple** de frecuencia angular:
$$
\omega = \sqrt{\frac{g}{l}}
$$

---

- El tiempo que tarda la masa en completar una oscilación completa es el **periodo**, que únicamente depende de la longitud del péndulo y de la aceleración de la gravedad, a través de la expresión:
$$
T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{l}{g}}
$$

---

- Fuera de la aproximación para ángulos pequeños, el periodo de un péndulo también depende ligeramente de la amplitud de la oscilación.

---

Puedes estudiar los **factores** que **influyen** en el **periodo** de un **péndulo** con este excelente ***laboratorio***:

<iframe src="https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Energía del MAS

- [Energía potencial elástica](#/9/1)
- [Energía cinética](#/9/3)
- [Energía mecánica](#/9/5)

(continúa hacia abajo)

👇

---

### Energía potencial elástica

Como la **fuerza elástica** es **conservativa**, definimos la energía potencial asociada:
$$
E_\mathrm p = \frac{1}{2}kx^2,\quad \text{donde $k=m\omega^2$}
$$

---

Sustituyendo la expresión de la posición, $x = A\sin\left(\omega t + \varphi_0\right)$:
$$
E_\mathrm p = \frac{1}{2}kA^2\sin^2\left(\omega t + \varphi_0\right)
$$

---

### Energía cinética

La energía cinética viene dada por la expresión:
$$
E_\mathrm c = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2\left(A^2-x^2\right) = \frac{1}{2}k\left(A^2-x^2\right)
$$

---

Sustituyendo la expresión de la velocidad, $v = A\omega\cos\left(\omega t + \varphi_0\right)$:
$$
E_\mathrm c = \frac{1}{2}mA^2\omega^2\cos^2\left(\omega t + \varphi_0\right) = \frac{1}{2}kA^2\cos^2\left(\omega t + \varphi_0\right)
$$

---

### Energía mecánica

En ausencia de rozamiento y otras pérdidas de energía, la energía mecánica total es constante:
$$
E_\mathrm m = E_\mathrm c + E_\mathrm p = \frac{1}{2}k\left(A^2-x^2\right) + \frac{1}{2}kx^2 = \frac{1}{2}kA^2
$$

---

{{< figure library="true" src="MAS-2Bach-fisica/energias-vs-x.svg" title="" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="MAS-2Bach-fisica/energias-vs-t.svg" title="" lightbox="false" width="100%" >}}

---

Aprende más sobre la **energía** del **MAS** con este excelente 🧵 **hilo** sobre el **oscilador armónico simple**:

<div align="center">
{{< x user="RayleighLord" id="1345689336549941248" >}}
</div>

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Pincha [**aquí**](?view=print#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>

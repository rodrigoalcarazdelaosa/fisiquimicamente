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

La **energía** es la capacidad para realizar un trabajo.

Se mide en **julios** ($1\thinspace \mathrm{J} = 1\thinspace\mathrm{kg}\thinspace\mathrm{m^2}\thinspace\mathrm{s^{-2}}$).

---

## Simulación
<iframe src="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

{{% section %}}

## Energías cinética, potencial y mecánica

(continúa hacia abajo)

👇

---

### Energía cinética $E_\mathrm c$
Es la energía que posee un cuerpo por el hecho de estar en **movimiento**. Depende de la masa $m$ y de la velocidad $v$:
$$
E_\mathrm c = \frac{1}{2}mv^2
$$

---

### Energía potencial $E_\mathrm p$
Es la energía que posee un cuerpo debido a su **posición** y/o **configuración**. La energía potencial **gravitatoria** que posee una masa $m$ situada a una altura $h$ sobre la superficie terrestre vale:
$$
E_\mathrm p = m g h,
$$
donde $h\ll R_\mathrm T$ (con $R_\mathrm T$ el radio de la Tierra) y $g$ es el valor de la aceleración de la gravedad.

---

### Energía mecánica $E_\mathrm m$
Es la **suma** de la energía **cinética** $E\_\mathrm{c}$ y la energía **potencial** $E_\mathrm{p}$:
$$
E_\mathrm m = E_\mathrm c + E_\mathrm p
$$

{{% /section %}}

---

{{% section %}}

## Conservación de la energía

(continúa hacia abajo)

👇

---

### Principio de conservación de la energía mecánica
> Cuando sobre un cuerpo actúan únicamente **fuerzas conservativas**, su energía mecánica se conserva.

#### Ejemplos de fuerzas conservativas
Fuerzas gravitatorias, elásticas o electrostáticas.

La fuerza de **rozamiento** es un ejemplo de fuerza **no conservativa** o **disipativa**.

---

### Principio de conservación de la energía
> En cualquier proceso de la naturaleza, la energía **total** permanece constante.

---

#### Ejemplo resuelto
<q>Un carro de 50$\thinspace$kg desliza por una montaña rusa como la de la figura. Si en el punto A su velocidad es de 5$\thinspace$m/s y en el punto B es de 3.2$\thinspace$m/s, calcula: <br>
a) La energía mecánica en A y en B. <br>
b) La energía disipada en forma de calor debido a las fuerzas de rozamiento entre los puntos A y B.</q>

{{< figure library="true" src="energia-trabajo-calor-4ESO/montana-rusa.png" lightbox="true" >}}

---

a) Para calcular la energía mecánica en los puntos A y B utilizamos la expresión:
$$
E_\mathrm m = E_\mathrm c + E_\mathrm p = \frac{1}{2}mv^2 + mgh
$$

Tanto en A como en B el carro tiene energía cinética (se mueve a una cierta velocidad) y potencial gravitatoria (está a una cierta altura).

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

\begin{align*}
E_{\mathrm{m}_\mathrm A} & = \frac{1}{2}mv_\mathrm A^2 + mgh_\mathrm A \\\\
& = \frac{1}{2}\cdot 50\cdot 5^2 + 50\cdot 9.8\cdot 30 \\\\
& = 625 + 14700 = 15325\thinspace\mathrm J
\end{align*}

\begin{align*}
E_{\mathrm{m}_\mathrm B} & = \frac{1}{2}mv_\mathrm B^2 + mgh_\mathrm B \\\\
& = \frac{1}{2}\cdot 50\cdot 3.2^2 + 50\cdot 9.8\cdot 20 \\\\
& = 256 + 9800 = 10056\thinspace\mathrm J
\end{align*}

---

b) La energía perdida por rozamiento (en forma de calor) es igual a la diferencia entre la energía inicial (A) y la final (B):
\begin{align*}
E_\text{disipada} & = E_{\mathrm{m}_\mathrm A} - E_{\mathrm{m}_\mathrm B} \\\\
& = 15325 - 10056 = 5269\thinspace\mathrm J
\end{align*}

Puedes aprender más sobre la **conservación** de la **energía** con la siguiente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_es.html" width="720" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}
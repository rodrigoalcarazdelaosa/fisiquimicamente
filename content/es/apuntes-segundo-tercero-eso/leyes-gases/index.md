---
title: Leyes de los gases
url: "/recursos-fisica-quimica/apuntes/3eso/leyes-gases"
subtitle: Ley de Boyle-Mariotte, ley de Charles y ley de Gay-Lussac
summary: "Ley de Boyle-Mariotte, ley de Charles y ley de Gay-Lussac."
breadcrumbs: ["recursos-fisica-quimica","apuntes","3eso"]
tags:
- apuntes
- 3º ESO
- gases
categories:
- Física
- Química
weight: 3

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Chris Martin**](https://pixabay.com/es/users/cmart29-3708955/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: 
  name: 📜 Póster
  url: leyes-gases-poster.pdf  

slides: "leyes-gases-3ESO"

math: true
---

{{% toc %}}

## Ley de Boyle-Mariotte

> A **temperatura constante**, el volumen de una masa fija de gas es inversamente proporcional a la presión que éste ejerce.

**Matemáticamente**:

\begin{align*}
	pV &= \text{constante} \\\\
	& \text{o} \\\\
	p_1 V_1 &= p_2 V_2,
\end{align*}

donde:

- $p_1$ es la presión inicial.
- $V_1$ es el volumen inicial.
- $p_2$ es la presión final.
- $V_2$ es el volumen final.

{{< figure library="true" src="leyes-gases-3ESO/ley-boyle-mariotte.svg" title="**Ley de Boyle-Mariotte**. Al aumentar la presión, disminuye el volumen." width="100%" lightbox="false" >}}

### Ejemplo
{{% callout example %}}
<br>

> El volumen del aire en los pulmones de una persona es de 615&thinsp;mL aproximadamente, a una presión de 1&thinsp;atm. La inhalación ocurre cuando la presión de los pulmones desciende a 0.989&thinsp;atm. ¿A qué volumen se expanden los pulmones?

---

No nos lo dicen explícitamente pero tenemos que suponer que la **temperatura** permanece **constante**, por lo que debemos aplicar la ley de **Boyle-Mariotte**:		
$$
p_1 V_1 = p_2 V_2,
$$
donde $p_1=1\thinspace\mathrm{atm}$, $V_1=615\thinspace\mathrm{mL}$, $p_2=0.989\thinspace\mathrm{atm}$ y $V_2$ es lo que nos piden.

Despejamos $V_2$:
$$
V_2 = \frac{p_1 V_1}{p_2} = \frac{1\thinspace\mathrm{\cancel{atm}}\cdot 615\thinspace\mathrm{mL}}{0.989\thinspace\mathrm{\cancel{atm}}} = 621.8\thinspace\mathrm{mL}
$$

{{% /callout %}}

## Ley de Charles

> Para una cierta cantidad de gas a **presión constante**, su volumen es directamente proporcional a su temperatura.

**Matemáticamente**:
\begin{align*}
	\frac{V}{T} &= \text{constante} \\\\
	& \text{o} \\\\
	\frac{V_1}{T_1} &= \frac{V_2}{T_2},
\end{align*}

donde:		

- $V_1$ es el volumen inicial.
- $T_1$ es la temperatura inicial (¡en K!).
- $V_2$ es el volumen final.
- $T_2$ es la temperatura final (¡en K!).

{{< figure library="true" src="leyes-gases-3ESO/ley-charles.svg" title="**Ley de Charles**. Al aumentar el volumen, aumenta también la temperatura." width="100%" lightbox="false" >}}

### Ejemplo
{{% callout example %}}
<br>

> Si cierta masa de gas, a presión constante, llena un recipiente de 20&thinsp;L de capacidad a la temperatura de 124&thinsp;&deg;C, ¿qué temperatura alcanzará la misma cantidad de gas a presión constante, si el volumen aumenta a 30&thinsp;L?

---

Nos dicen explícitamente que la **presión** permanece **constante**, por lo que aplicamos la ley de **Charles**:		
$$
\frac{V_1}{T_1} = \frac{V_2}{T_2},
$$

donde $V_1 = 20\thinspace\mathrm{L}$, $T_1 = 124\thinspace\mathrm{^\circ C} = 397\thinspace\mathrm{K}$, $V_2 = 30\thinspace\mathrm{L}$ y $T_2$ es lo que nos piden.

Despejamos $T_2$:
$$
T_2 = T_1\cdot \frac{V_2}{V_1} = 397\thinspace\mathrm{K}\cdot \frac{30\thinspace\mathrm{\cancel{L}}}{20\thinspace\mathrm{\cancel{L}}} = 595.5\thinspace\mathrm{K} = 322.5\thinspace\mathrm{^\circ C}
$$

{{% /callout %}}

## Ley de Gay-Lussac

> La presión que ejerce un **volumen fijo** de gas es directamente proporcional a su temperatura.

**Matemáticamente**:
\begin{align*}
	\frac{p}{T} &= \text{constante} \\\\
	& \text{o} \\\\
	\frac{p_1}{T_1} &= \frac{p_2}{T_2},
\end{align*}

donde:		

- $p_1$ es la presión inicial.
- $T_1$ es la temperatura inicial (¡en K!).
- $p_2$ es la presión final.
- $T_2$ es la temperatura final (¡en K!).

{{< figure library="true" src="leyes-gases-3ESO/ley-gay-lussac.svg" title="**Ley de Gay-Lussac**. Al aumentar la presión, aumenta también la temperatura." width="100%" lightbox="false" >}}

### Ejemplo
{{% callout example %}}
<br>

> Es peligroso que los envases de aerosoles se expongan al calor. Si una lata de fijador para el cabello a una presión de 4&thinsp;atm y a una temperatura ambiente de 27&thinsp;&deg;C se arroja al fuego y el envase alcanza los 402&thinsp;&deg;C, ¿cuál será su nueva presión?

---

Suponemos que el envase mantiene su **volumen fijo**, por lo que aplicamos la ley de **Gay-Lussac**:
$$
\frac{p_1}{T_1} = \frac{p_2}{T_2},
$$

donde $p_1 = 4\thinspace\mathrm{atm}$, $T_1 = 27\thinspace\mathrm{^\circ C} = 300\thinspace\mathrm{K}$, $T_2=402\thinspace\mathrm{^\circ C} = 675\thinspace\mathrm{K}$ y $p_2$ es lo que nos piden.

Despejamos $p_2$:
$$
p_2 = T_2\cdot \frac{p_1}{T_1} = 675\thinspace\mathrm{\cancel{K}}\cdot \frac{4\thinspace\mathrm{atm}}{300\thinspace\mathrm{\cancel{K}}} = 9\thinspace\mathrm{atm}
$$

{{% /callout %}}

## Simulación

Si quieres aprender más sobre las **propiedades** de los **gases** te recomendamos que *enredes* con esta excelente **simulación**:

<iframe src="https://phet.colorado.edu/sims/html/gases-intro/latest/gases-intro_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

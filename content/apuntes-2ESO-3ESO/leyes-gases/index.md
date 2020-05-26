---
title: Leyes de los gases
subtitle: Ley de Boyle-Mariotte, ley de Charles y ley de Gay-Lussac
summary: "Ley de Boyle-Mariotte, ley de Charles y ley de Gay-Lussac."
tags:
- 3º ESO
- gases
categories:
- Física
- Química

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Chris Martin**](https://pixabay.com/es/users/cmart29-3708955/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

# links:
# - icon_pack: fas
# icon: download
#  name: PDF Texto
#  url: movimientos_texto.pdf
  
# - icon_pack: fas
#  icon: download
#  name: Póster
#  url: movimientos_poster.pdf  
---

{{% toc %}}

## Ley de Boyle-Mariotte

> A **temperatura constante**, el volumen de una masa fija de gas es inversamente proporcional a la presión que éste ejerce.

Matemáticamente:

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

### Ejemplo
{{% alert example %}}
<br>

> El volumen del aire en los pulmones de una persona es de $615\thinspace\mathrm{mL}$ aproximadamente, a una presión de $1\thinspace\mathrm{atm}$. La inhalación ocurre cuando la presión de los pulmones desciende a $0.989\thinspace\mathrm{atm}$. ¿A qué volumen se expanden los pulmones?

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

{{% /alert %}}

## Ley de Charles

> Para una cierta cantidad de gas a **presión constante**, su volumen es directamente proporcional a su temperatura.

Matemáticamente:
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

### Ejemplo
{{% alert example %}}
<br>

> Si cierta masa de gas, a presión constante, llena un recipiente de $20\thinspace\mathrm{L}$ de capacidad a la temperatura de $124\thinspace\mathrm{^\circ C}$, ¿qué temperatura alcanzará la misma cantidad de gas a presión constante, si el volumen aumenta a $30\thinspace\mathrm{L}$?

---

Nos dicen explícitamente que la **presión** permanece **constante**, por lo que aplicamos la ley de **Charles**:		
$$
\frac{V_1}{T_1} = \frac{V_2}{T_2},
$$

donde $V_1 = 20\thinspace\mathrm{L}$, $T_1 = 124\thinspace\mathrm{^\circ C} = 397\thinspace\mathrm{K}$, $V_2 = 30\thinspace\mathrm{L}$ y $T_2$ es lo que nos piden.

Despejamos $T_2$:
$$
T_2 = T_1\cdot \frac{V_2}{V_1} = \SI{397}{\K}\cdot \frac{\SI{30}{\cancel\liter}}{\SI{20}{\cancel\liter}} = \SI{595.5}{\K} = \SI{322.5}{\celsius}
$$

{{% /alert %}}
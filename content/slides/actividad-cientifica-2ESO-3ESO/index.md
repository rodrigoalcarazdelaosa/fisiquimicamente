---
title: Actividad científica
summary: "Método científico. Medidas de magnitudes. Laboratorio escolar."
tags:
- 2º ESO
- 3º ESO
- actividad-científica
categories:
- Física
- Química

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: tomorrow
---

# La actividad científica

Método científico, magnitudes y laboratorio escolar

---

{{% section %}}

## Método científico

---

Las **etapas** del **método científico** son las siguientes:

(continúa hacia abajo)

---

### Observación
Examinar un fenómeno con el objetivo de sacar toda la información, pero sin modificar dicho fenómeno.

---

### Hipótesis
Posible explicación del fenómeno.

#### Características
- Referirse siempre a situaciones reales o realizables.
- Utilizar un lenguaje claro.
- Variables a tratar precisas y bien definidas, además de ser observables y medibles.

---

### Experimentación
Comprobación de la hipótesis, tratando de controlar todos los parámetros ajenos al fenómeno que estamos estudiando.

---

### Análisis
Estudio de los resultados obtenidos.

---

### Conclusión
Razonamos si la hipótesis es o no válida.

{{% /section %}}

---

## Medidas de magnitudes

Una **magnitud** es toda propiedad que se puede medir.

**Medir** consiste en **comparar** una cantidad con otra de la misma magnitud, que tomamos como referencia, y a la cual denominamos **unidad**.

---

### Magnitudes fundamentales del SI
| Magnitud | Unidad | Símbolo |
| -------- | ------ | :-------: | 
| Tiempo   | segundo | s |
| Longitud | metro | m |
| Masa | kilogramo | kg |
| Corriente eléctrica | amperio | A |
| Temperatura | kelvin | K |
| Cantidad de sustancia | mol | mol |
| Intensidad luminosa | candela | cd |

---

#### Prefijos (múltiplos y submúltiplos) del SI

| Prefijo | Símbolo | Factor | Prefijo | Símbolo | Factor |
| ------- | :-----: | :----: | ------- | :-----: | :----: |
| Tera | T | $10^{12}$ | pico | p | $10^{-12}$ |
| Giga | G | $10^{9}$ | nano | n | $10^{-9}$ |
| Mega | M | $10^{6}$ | micro | $\mu$ | $10^{-6}$ |
| kilo | k | $10^{3}$ | mili | m | $10^{-3}$ |
| hecto | h | $10^{2}$ | centi | c | $10^{-2}$ |
| deca | da | $10^{1}$ | deci | d | $10^{-1}$ |

---

### Notación científica

Consiste en escribir un número de la forma:
$$
a\times 10^b,
$$
donde $1 \leq a<10$ y $b$ puede ser cualquier número entero (positivo o negativo).

---

#### Ejemplos
\begin{align*}
	500 &\rightarrow 5\times 10^2 \\\\
	520 &\rightarrow 5.2\times 10^2 \\\\
	600000 &\rightarrow 6\times 10^5 \\\\
	30000000 &\rightarrow 3\times 10^7 \\\\
	500 000 000 000 000 &\rightarrow 5\times 10^{14} \\\\
	7 000 000 000 000 000 000 000 000 &\rightarrow 7\times 10^{24}
\end{align*}	

---
\begin{align*}	
	0.05 &\rightarrow 5\times 10^{-2} \\\\
	0.052 &\rightarrow 5.2\times 10^{-2} \\\\
	0.0004 &\rightarrow 4\times 10^{-4} \\\\
	0.000 000 01 &\rightarrow 1\times 10^{-8} \\\\
	0.000 000 000 000 000 6 &\rightarrow 6\times 10^{-16} \\\\
	0.000 000 000 000 000 000 000 000 8 &\rightarrow 8\times 10^{-25}
\end{align*}

---

### Factores de conversión

Se trata de multiplicar por fracciones utilizando la conversión entre unidades. En el caso de unidades de superficie (volumen), los factores de conversión van elevados al cuadrado (cubo).

---

#### Ejemplos
##### $13\thinspace\mathrm{cg}  \longrightarrow \mathrm{hg}$
{{% fragment %}} $13\thinspace\mathrm{cg}$ {{% /fragment %}}
{{% fragment %}} $\cdot \frac{1\thinspace\mathrm g}{10^2\thinspace\mathrm{cg}}$ {{% /fragment %}}
{{% fragment %}} $\cdot \frac{1\thinspace\mathrm{hg}}{10^2\thinspace\mathrm{g}}$ {{% /fragment %}}
{{% fragment %}} $= 1.3\times 10^{-3}\thinspace\mathrm{hg}$ {{% /fragment %}}

---

\begin{align*}
24\thinspace\mathrm{g/cm^3} &\longrightarrow \mathrm{\mu g/\mu L} \\\\
24\thinspace\frac{\cancel{\mathrm g}}{\cancel{\mathrm{cm^3}}} &\cdot \frac{10^6\thinspace\mathrm{\mu g}}{1\thinspace\cancel{\mathrm{g}}} \cdot \frac{10^3\thinspace\cancel{\mathrm{cm^3}}}{1\thinspace\cancel{\mathrm{dm^3}}} \cdot \frac{1\thinspace\cancel{\mathrm{dm^3}}}{1\thinspace\cancel{\mathrm{L}}} \cdot \frac{1\thinspace\cancel{\mathrm{L}}}{10^6\thinspace\mathrm{\mu L}} = 2.4 \times 10^4\thinspace\mathrm{\mu g/\mu L} \\\\ \\\\
5\thinspace\mathrm{L/s} &\longrightarrow \mathrm{m^3/h} \\\\
5\thinspace\frac{\cancel{\mathrm L}}{\cancel{\mathrm s}} &\cdot \frac{1\thinspace\mathrm m^3}{10^3\thinspace\cancel{\mathrm L}} \cdot \frac{3600\thinspace\cancel{\mathrm s}}{1\thinspace\mathrm h} = 18\thinspace\mathrm{m^3/h}
\end{align*}
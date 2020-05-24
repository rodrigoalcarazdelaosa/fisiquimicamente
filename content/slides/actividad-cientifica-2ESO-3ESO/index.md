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

## Método científico

Las **etapas** del **método científico** son las siguientes:

Observación
: Examinar un fenómeno con el objetivo de sacar toda la información, pero sin modificar dicho fenómeno.

Hipótesis
: Posible explicación del fenómeno. **Características**:
	- Referirse siempre a situaciones reales o realizables.
	- Utilizar un lenguaje claro.
	- Variables a tratar precisas y bien definidas, además de ser observables y medibles.

---

Experimentación
: Comprobación de la hipótesis, tratando de controlar todos los parámetros ajenos al fenómeno que estamos estudiando.

Análisis
: Estudio de los resultados obtenidos.

Conclusión
: Razonamos si la hipótesis es o no válida.

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

La siguiente tabla muestra los **prefijos** (múltiplos y submúltiplos) del SI:

| Prefijo | Símbolo | Factor | Prefijo | Símbolo | Factor |
| ------- | :-----: | :----: | ------- | :-----: | :----: |
| Tera | T | $10^{12}$ | pico | p | $10^{-12}$ |
| Giga | G | $10^{9}$ | nano | n | $10^{-9}$ |
| Mega | M | $10^{6}$ | micro | $\mu$ | $10^{-6}$ |
| kilo | k | $10^{3}$ | mili | m | $10^{-3}$ |
| hecto | h | $10^{2}$ | centi | c | $10^{-2}$ |
| deca | da | $10^{1}$ | deci | d | $10^{-1}$ |

---

## Code Highlighting

Inline code: `variable`

Code block:
```python
porridge = "blueberry"
if porridge == "blueberry":
    print("Eating...")
```

---

## Math

In-line math: $x + y = z$

Block math:

$$
f\left( x \right) = \;\frac{{2\left( {x + 4} \right)\left( {x - 4} \right)}}{{\left( {x + 4} \right)\left( {x + 1} \right)}}
$$

---

## Fragments

Make content appear incrementally

```
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} **Two** {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

Press `Space` to play!

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} **Two** {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}

---

A fragment can accept two optional parameters:

- `class`: use a custom style (requires definition in custom CSS)
- `weight`: sets the order in which a fragment appears

---

## Speaker Notes

Add speaker notes to your presentation

```markdown
{{%/* speaker_note */%}}
- Only the speaker can read these notes
- Press `S` key to view
{{%/* /speaker_note */%}}
```

Press the `S` key to view the speaker notes!

{{< speaker_note >}}
- Only the speaker can read these notes
- Press `S` key to view
{{< /speaker_note >}}

---

## Themes

- black: Black background, white text, blue links (default)
- white: White background, black text, blue links
- league: Gray background, white text, blue links
- beige: Beige background, dark text, brown links
- sky: Blue background, thin dark text, blue links

---

- night: Black background, thick white text, orange links
- serif: Cappuccino background, gray text, brown links
- simple: White background, black text, blue links
- solarized: Cream-colored background, dark green text, blue links

---

{{< slide background-image="/img/boards.jpg" >}}

## Custom Slide

Customize the slide style and background

```markdown
{{</* slide background-image="/img/boards.jpg" */>}}
{{</* slide background-color="#0000FF" */>}}
{{</* slide class="my-style" */>}}
```

---

## Custom CSS Example

Let's make headers navy colored.

Create `assets/css/reveal_custom.css` with:

```css
.reveal section h1,
.reveal section h2,
.reveal section h3 {
  color: navy;
}
```

---

# Questions?

[Ask](https://spectrum.chat/academic)

[Documentation](https://sourcethemes.com/academic/docs/managing-content/#create-slides)

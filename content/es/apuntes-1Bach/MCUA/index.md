---
title: MCUA
subtitle: Movimiento circular uniformemente acelerado
summary: "`PRÓXIMAMENTE` <br> Movimiento circular uniformemente acelerado y dinámica del movimiento circular."
tags:
- 1º Bach
- movimiento
- fuerzas
categories:
- Física

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Conor Luddy**](https://unsplash.com/@opticonor) en [Unsplash](https://unsplash.com)
  focal_point: Smart

# links:
# - icon_pack: fas
#   icon: file-download
#   name: PDF Texto
#   url: MAS_texto.pdf
  
# - icon_pack: fas
#   icon: file-download
#   name: Póster
#   url: MAS_poster.pdf

---

Apuntes sobre el movimiento circular uniformemente acelerado (MCUA) y su dinámica, en formato texto y póster (tipo _chuleta_).

{{% callout note %}}
Próximamente...
{{% /callout %}}

\begin{align}
\sum_i (y_i - \bar{y})^2 &= \sum_i (y_i - \bar{y} + \hat{y}_i - \hat{y}_i)^2 \\\\
&= \sum_i \left( (\hat{y}_i - \bar{y}) + (y_i - \hat{y}_i) \right)^2 \\\\
&= \sum_i \left( (\hat{y}_i - \bar{y}) + e_i \right)^2 \\\\
&= \sum_i \left( (\hat{y}_i - \bar{y})^2 + e_i^2 + 2 \sum_i (y_i - \bar{y}) e_i \right) \\\\
&= \sum_i (\hat{y}_i - \bar{y})^2 + \sum_i e_i^2 + 2 \sum_i e_i (\hat{\beta}_0 + \hat{\beta}_1 x_{1,i} + ... + \hat{\beta}_K x_{K,i} - \bar{y}) \\\\
&= \sum_i (y_i - \hat{y})^2 + \sum_i e_i^2 + 2 (\hat{\beta}_0 - \bar{y}) \overbrace{\sum_i e_i}^{0} + 2 \hat{\beta}_1 \overbrace{\sum_i e_i x_{1,i}}^{0} + ... + 2 \hat{\beta}_K \overbrace{\sum_i e_i x_{K,i}}^{0} \\\\
\sum_i (y_i - \bar{y})^2 &= \sum_i (y_i - \hat{y})^2 + \sum_i e_i^2 \\\\
TSS &= ESS + RSS
\end{align}

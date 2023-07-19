---
title: Actualización de las unidades básicas del SI
subtitle: Ahora todas definidas en función de constantes físicas universales 
summary: Ahora todas definidas en función de constantes físicas universales.
breadcrumbs: ["blog"]
date: "2020-04-30T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- blog
- magnitudes
- unidades
- SI
categories:
- Física
- Química

image:
  placement: 3
  caption: "[https://www.cem.es/es/cem/metrologia/sistema-internacional-unidades-si](https://www.cem.es/es/cem/metrologia/sistema-internacional-unidades-si)"
links:
- icon_pack: fas
  icon:
  name: 📄 PDF BOE
  url: https://www.boe.es/boe/dias/2020/04/29/pdfs/BOE-A-2020-4707.pdf
  
- icon_pack: fas
  icon: 
  name: 📜 Póster Nuevo SI
  url: poster-nuevo-SI.pdf
- icon_pack: fas
  icon:
  name: 📄 Resumen conciso SI
  url: https://www.cem.es/sites/default/files/documentos/2021-07/Resumen%20conciso%20del%20SI%20%289ª%20ed_2019%29_0.pdf

math: true
---

{{% callout note %}}
Si no estás familiarizado con el **Sistema Internacional** de **Unidades** (SI) te recomiendo consultar [esta página](https://www.cem.es/es/cem/metrologia/sistema-internacional-unidades-si) del [Centro Español de Metrología (CEM)](https://www.cem.es), en particular el [**resumen conciso del SI**](https://www.cem.es/sites/default/files/documentos/2021-07/Resumen%20conciso%20del%20SI%20%289ª%20ed_2019%29_0.pdf).

Te recomiendo también [este magnífico **póster**](https://drive.google.com/file/d/1RzJO2jgjKt5LKy2RZhDuhVWmCVjbjaxr/view?usp=sharing) de **Berto Tomás**.
{{% /callout %}}

{{% callout note %}}
Si quieres ampliar la información mostrada aquí, [@fqsaja1](https://twitter.com/fqsaja1/status/1255585199015985155?s=20) nos recomienda _imprimir y tener en nuestras aulas, laboratorios o seminarios_ [este fantástico póster](https://www.cem.es/sites/default/files/2021-01/Poster%20Nuevo-SI.pdf) elaborado por el [Centro Español de Metrología (CEM)](https://www.cem.es) o echar un vistazo al magnífico artículo de David Newell [publicado en la revista Physics Today](https://physicstoday.scitation.org/doi/10.1063/PT.3.2448) (en inglés).
{{% /callout %}}

El **Sistema Internacional** de **Unidades** (SI) sufrió una [revisión en 2018](https://www.cem.es/sites/default/files/2021-01/cem_revisionsi_edem_18mayo2018.pdf), con la **redefinición** de cuatro de sus siete _unidades de base_, en concreto el kilogramo (kg), el amperio (A), el kelvin (K) y el mol.

{{< youtube nqxHnu4LJ6k >}}

Esta actualización se realizó para conseguir definir todas las unidades **en función de constantes físicas universales**, algo que ya se había conseguido con anterioridad para el segundo (1967) y el metro (1983). La siguiente tabla resume la relación entre cada unidad y la constante universal en la que se basa:

| Unidad (símbolo) | Constante universal (símbolo)                                             |
| ---------------- | ------------------------------------------------------------------------- |
| Segundo (s)      | Frecuencia de transición del átomo de cesio 133 ($\Delta\nu_\mathrm{Cs}$) |
| Metro (m)        | Velocidad de la luz en el vacío ($c$)                                     |
| Kilogramo (kg)   | Constante de Planck ($h$)                                                 |
| Amperio (A)      | Carga elemental ($e$)                                                     |
| Kelvin (K)       | Constante de Boltzmann ($k$)                                              |
| Mol (mol)        | Constante de Avogadro ($N_\mathrm A$)                                        |
| Candela (cd)     | Eficacia luminosa de la radiación de frecuencia $540\times 10^{12}\thinspace\mathrm{Hz}$ ($K_\mathrm{cd}$) |

## R.D. 493/2020, de 28 de abril [📄 PDF](https://www.boe.es/boe/dias/2020/04/29/pdfs/BOE-A-2020-4707.pdf)

El 29 de abril de 2020 se publicó en el BOE el _Real Decreto 493/2020, de 28 de abril, por el que se modifica el Real Decreto 2032/2009, de 30 de diciembre, por el que se establecen las unidades legales de medida_.

### Definiciones actuales de las unidades de base del SI

#### Segundo (s)

$$
1\thinspace \mathrm s = \frac{9192631770}{\Delta\nu_\mathrm{Cs}},
$$

donde $\Delta\nu_\mathrm{Cs} = 9192631770\thinspace\mathrm{Hz}$ es la frecuencia de la transición hiperfina del estado fundamental no perturbado del átomo de cesio 133.

{{% callout note %}}
El **segundo** es por tanto la duración de 9192631770 periodos de la radiación correspondiente a la transición entre los dos niveles hiperfinos del estado fundamental no perturbado del átomo de cesio 133.
{{% /callout %}}

#### Metro (m)
$$
1\thinspace\mathrm m = \frac{9192631770}{299792458}\frac{c}{\Delta\nu_\mathrm{Cs}},
$$

donde $c = 299792458\thinspace\mathrm{m\cdot s^{-1}}$ es la velocidad de la luz en el vacío.

{{% callout note %}}
El **metro** es por tanto la longitud del trayecto recorrido por la luz en el vacío durante un intervalo de tiempo de 1/299792458 de segundo.
{{% /callout %}}

#### Kilogramo (kg)
$$
1\thinspace\mathrm{kg} = \frac{(299792458)^2}{(6.62607015\times 10^{-34})(9192631770)}\frac{h\Delta\nu_\mathrm{Cs}}{c^2},
$$

donde $h = 6.62607015\times 10^{-34}\thinspace\mathrm{kg\cdot m^2\cdot s^{-1}}$ es la constante de Planck.

{{% callout note %}}
El **kilogramo** queda por tanto definido en función del valor de la constante de Planck, $h$.
{{% /callout %}}

#### Amperio (A)
$$
1\thinspace\mathrm{A} = \left(\frac{e}{1.602176634\times 10^{-19}}\right)\thinspace\mathrm{s^{-1}},
$$

donde $e = 1.602176634\times 10^{-19}\thinspace\mathrm{A\cdot s}$ es la carga elemental.

{{% callout note %}}
El **amperio** es por tanto la corriente eléctrica correspondiente al flujo de $1/(1.602176634\times 10^{-19}) = 6.241509074\times 10^{18}$ cargas elementales por segundo.
{{% /callout %}}

#### Kelvin (K)
$$
1\thinspace\mathrm{K} = \frac{1.380649\times 10^{-23}}{(6.62607015\times 10^{-34})(9192631770)}\frac{h\Delta\nu_\mathrm{Cs}}{k},
$$

donde $k = 1.380649\times 10^{-23}\thinspace\mathrm{kg\cdot m^2\cdot s^{-2}\cdot K^{-1}}$ es la constante de Boltzmann.

{{% callout note %}}
El **kelvin** es por tanto igual a la variación de temperatura termodinámica que da lugar a una variación de energía térmica $kT$ de $1.380649\times 10^{-23}\thinspace\mathrm J$.
{{% /callout %}}

#### Mol (mol)
$$
1\thinspace\mathrm{mol} = \frac{6.02214076\times 10^{23}}{N_\mathrm A},
$$

donde $N_\mathrm A = 6.02214076\times 10^{23}\thinspace\mathrm{mol^{-1}}$ es la constante de Avogadro.

{{% callout note %}}
El **mol** es por tanto la [cantidad de sustancia]({{< relref "/post/normas-ortografia-fisica-quimica/index.md#8-cantidad-de-sustancia" >}}) de un sistema que contiene $6.02214076\times 10^{23}$ entidades elementales especificadas.
{{% /callout %}}

#### Candela (cd)
$$
1\thinspace\mathrm{cd} = \frac{1}{(6.62607015\times 10^{-34})(9192631770)^2 683}h(\Delta\nu_\mathrm{Cs})^2 K_\mathrm{cd},
$$

donde $K_\mathrm{cd} = 683\thinspace\mathrm{cd\cdot sr\cdot kg^{-1}\cdot m^{-2}\cdot s^3}$ es la eficacia luminosa de la radiación monocromática de frecuencia $540\times 10^{12}\thinspace\mathrm{Hz}$.

{{% callout note %}}
La **candela** es por tanto la intensidad luminosa, en una dirección dada, de una fuente que emite radiación monocromática de frecuencia $540\times 10^{12}\thinspace\mathrm{Hz}$ y tiene una intensidad radiante en esa dirección de $(1/683)\thinspace\mathrm{W/sr}$.
{{% /callout %}}
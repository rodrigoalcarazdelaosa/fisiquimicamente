---
title: Updating SI Base Units
subtitle: Now all defined as a function of universal physical constants
summary: "Now all defined as a function of universal physical constants."
breadcrumbs: ["blog"]
date: "2020-04-30T00:00:00Z"
authors:
- rodrigo-alcaraz-de-la-osa
tags:
- blog
- scientific-activity
categories:
- Physics
- Chemistry

image:
  placement: 1
  caption: "[https://www.bipm.org/en/measurement-units/si-promotion](https://www.bipm.org/en/measurement-units/si-promotion)"
# links:
# - icon_pack: fas
#  icon:
#  name: BOE PDF
#  url: https://www.boe.es/boe/dias/2020/04/29/pdfs/BOE-A-2020-4707.pdf
  
# - icon_pack: fas
#  icon:
#  name: New SI Poster
#  url: https://www.cem.es/sites/default/files/files/Poster%20Nuevo-SI.pdf

math: true
---

{{% callout note %}}
If you are not familiar with the **International System of Units (SI)**, I recommend you to check out [this page](https://www.bipm.org/en/measurement-units/) of the [_Bureau International des Poids et Mesures_ (BIPM)](https://www.bipm.org/en/about-us/). You can also take a look at this fantastic collection of [**school posters**](https://www.npl.co.uk/school-posters) from the [**NPL**](https://www.npl.co.uk).
{{% /callout %}}

{{% callout note %}}
If you want more information, [@fqsaja1](https://twitter.com/fqsaja1/status/1255585201482317830?s=20) recommends that we take a look at David Newell's excellent article [published in Physics Today magazine](https://physicstoday.scitation.org/doi/10.1063/PT.3.2448).
{{% /callout %}}

The **International System of Units (SI)** underwent a [revision in 2018](https://www.bipm.org/en/committees/cg/cgpm/26-2018/resolution-1), with the **redefinition** of four of its seven _base units_, namely the kilogram (kg), the ampere (A), the kelvin (K) and the mole (mol).

This update was made to define all the units **as a function of universal physical constants**, something that had already been achieved previously for the second (1967) and the metre (1983). The following table summarises the relationship between each unit and the universal constant on which it is based:

| Unit (symbol) | Universal constant (symbol)                                             |
| ---------------- | ------------------------------------------------------------------------- |
| Second (s)      | Transition frequency of the caesium 133 atom ($\Delta\nu_\mathrm{Cs}$) |
| Metre (m)        | Speed of light in vacuum ($c$)                                     |
| Kilogram (kg)   | Planck constant ($h$)                                                 |
| Ampere (A)      | Elementary charge ($e$)                                                     |
| Kelvin (K)       | Boltzmann constant ($k$)                                              |
| Mole (mol)        | Avogadro constant ($N_\mathrm A$)                                        |
| Candela (cd)     | Luminous efficacy of radiation of frequency $540\times 10^{12}\thinspace\mathrm{Hz}$ ($K_\mathrm{cd}$) |

## Current Definitions of SI Base Units

### Second (s)

$$
1\thinspace \mathrm s = \frac{9192631770}{\Delta\nu_\mathrm{Cs}},
$$

where $\Delta\nu_\mathrm{Cs} = 9192631770\thinspace\mathrm{Hz}$ is the unperturbed ground state hyperfine transition frequency of the caesium 133 atom.

{{% callout note %}}
The **second** is therefore the duration of 9192631770 periods of radiation corresponding to the transition between the two hyperfine levels of the unperturbed ground state of the caesium 133 atom.
{{% /callout %}}

### Metre (m)
$$
1\thinspace\mathrm m = \frac{9192631770}{299792458}\frac{c}{\Delta\nu_\mathrm{Cs}},
$$

where $c = 299792458\thinspace\mathrm{m\cdot s^{-1}}$ is the speed of light in vacuum.

{{% callout note %}}
The **metre** is therefore the length of the path travelled by light in vacuum during a time interval of 1/299792458 of a second.
{{% /callout %}}

### Kilogram (kg)
$$
1\thinspace\mathrm{kg} = \frac{(299792458)^2}{(6.62607015\times 10^{-34})(9192631770)}\frac{h\Delta\nu_\mathrm{Cs}}{c^2},
$$

where $h = 6.62607015\times 10^{-34}\thinspace\mathrm{kg\cdot m^2\cdot s^{-1}}$ is the Planck constant.

{{% callout note %}}
The **kilogram** is therefore defined as a function of Planck's constant value, $h$.
{{% /callout %}}

### Ampere (A)
$$
1\thinspace\mathrm{A} = \left(\frac{e}{1.602176634\times 10^{-19}}\right)\thinspace\mathrm{s^{-1}},
$$

where $e = 1.602176634\times 10^{-19}\thinspace\mathrm{A\cdot s}$ is the elementary charge.

{{% callout note %}}
The **ampere** is therefore the electrical current corresponding to the flux of $1/(1.602176634\times 10^{-19}) = 6.241509074\times 10^{18}$ elementary charges per second.
{{% /callout %}}

### Kelvin (K)
$$
1\thinspace\mathrm{K} = \frac{1.380649\times 10^{-23}}{(6.62607015\times 10^{-34})(9192631770)}\frac{h\Delta\nu_\mathrm{Cs}}{k},
$$

where $k = 1.380649\times 10^{-23}\thinspace\mathrm{kg\cdot m^2\cdot s^{-2}\cdot K^{-1}}$ is the Boltzmann constant.

{{% callout note %}}
The **kelvin** is therefore equal to the thermodynamic temperature variation that results in a thermal energy variation $kT$ of $1.380649\times 10^{-23}\thinspace\mathrm J$.
{{% /callout %}}

### Mole (mol)
$$
1\thinspace\mathrm{mol} = \frac{6.02214076\times 10^{23}}{N_\mathrm A},
$$

where $N_\mathrm A = 6.02214076\times 10^{23}\thinspace\mathrm{mol^{-1}}$ is the Avogadro constant.

{{% callout note %}}
The **mole** is therefore the amount of substance in a system that contains $6.02214076\times 10^{23}$ specified elementary entities.
{{% /callout %}}

### Candela (cd)
$$
1\thinspace\mathrm{cd} = \frac{1}{(6.62607015\times 10^{-34})(9192631770)^2 683}h(\Delta\nu_\mathrm{Cs})^2 K_\mathrm{cd},
$$

where $K_\mathrm{cd} = 683\thinspace\mathrm{cd\cdot sr\cdot kg^{-1}\cdot m^{-2}\cdot s^3}$ is the luminous efficacy of monochromatic radiation of frequency $540\times 10^{12}\thinspace\mathrm{Hz}$.

{{% callout note %}}
The **candela** is therefore the luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency $540\times 10^{12}\thinspace\mathrm{Hz}$ and has a radiant intensity in that direction of $(1/683)\thinspace\mathrm{W/sr}$.
{{% /callout %}}
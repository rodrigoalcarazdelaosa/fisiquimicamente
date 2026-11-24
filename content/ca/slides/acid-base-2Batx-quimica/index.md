---
title: Àcid-base
url: "/recursos-fisica-quimica/apunts/2batx/quimica/acid-base/diapositives"
summary: "Teories àcid-base. Força relativa dels àcids i bases. Equilibri iònic de l'aigua. Concepte de pH. Volumetries de neutralització àcid-base. Indicadors àcid-base. Hidròlisi de sals. Dissolucions reguladores. Àcids i bases rellevants."

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

# Àcid-base

- [Teories àcid-base](#/1)
- [Força relativa dels àcids i bases](#/2)
- [Equilibri iònic de l'aigua](#/3)
- [Concepte de pH](#/4)
- [Volumetries de neutralització àcid-base](#/5)
- [Hidròlisi de sals](#/6)
- [Dissolucions reguladores](#/7)
- [Àcids i bases rellevants](#/8)
- [Simulació](#/9)

Descarrega aquestes diapositives en format PDF [📥](#/PDF)

</section>

---

{{% section %}}

## Teories àcid-base

- [Teoria d'Arrhenius](#/1/1)
- [Teoria de Brønsted-Lowry](#/1/4)

(continua cap avall)

👇🏼

---

### Teoria d'Arrhenius

Proposada pel suec **Svante Arrhenius** al 1884, constitueix la primera definició moderna d'àcids i bases en termes moleculars.

---

#### Àcid

Substància que es dissocia en aigua formant cations hidrogen (H<sup>+</sup>).

---

#### Base

Substància que es dissocia en aigua formant anions hidròxid (OH<sup>&ndash;</sup>).

---

### Teoria de Brønsted-Lowry

Proposada al 1923 independentment pel danès **Johannes Nicolaus Brønsted** i l'anglès **Martin Lowry**, es basa en la idea de **parells d'àcid-base conjugats**. 

---

Quan un àcid, HA, reacciona amb una base, B, l'àcid forma la base conjugada, A<sup>&ndash;</sup>, i la base forma el seu àcid conjugat, HB<sup>+</sup>, mitjançant l'intercanvi d'un protó (catió H<sup>+</sup>):

$$
\mathrm{HA} + \mathrm B &#8652; \mathrm A^- + \mathrm{HB}^+
$$

---

#### Àcid

Substància capaç de cedir protons (H<sup>+</sup>) a una base:

$$
\mathrm{HA} + \mathrm{H_2O} &#8652; \mathrm A^- + \mathrm{H_3O^+}
$$

---

#### Base

Substància capaç d'acceptar protons (H<sup>+</sup>) d'un àcid:

$$
\mathrm{B} + \mathrm{H_2O} &#8652; \mathrm{HB}^+ + \mathrm{OH^-}
$$

---

Aquesta teoria es considera una **generalització** de la teoria de **Arrhenius**.

{{% /section %}}

---

{{% section %}}

## Força relativa dels àcids i bases

En funció de com d'ionitzat/da o dissociat/da se trobi un àcid o una base, distingim entre **àcids/bases fortes i febles**, termes que descriuen la **facilitat** per a **conduir** l'**electricitat** (gràcies a la major o menor presència d'ions en la dissolució).

---

- [Grau d'ionització](#/2/2)
- [Constant de dissociació](#/2/5)

(continua cap avall)

👇🏼

---

### Grau d'ionització

També anomenat **grau de dissociació**, $\alpha$, es defineix com el quocient entre la quantitat d'àcid/base ionitzat/da i la quantitat d'àcid/base inicial:

$$
\alpha = \frac{\text{quantitat d'àcid/base ionitzat/da}}{\text{quantitat d'àcid/base inicial}}
$$

Sol expressar-se en tant per cent (\%).

---

#### Àcids i bases fortes

Totalment ionitzats/des ($\alpha \approx 1$). Condueixen bé l'electricitat.

- Àcids: HClO<sub>4</sub>, HI(aq), HBr(aq), HCl(aq), H<sub>2</sub>SO<sub>4</sub> (1ª ionització) i HNO<sub>3</sub>.
- Bases: Hidròxids de metalls alcalins i alcalinoterris.

---

#### Àcids i bases febles

Parcialment ionitzats/des: $\alpha < 1$. Condueixen malament l'electricitat.

- Àcids: HF(aq), H<sub>2</sub>S(aq), H<sub>2</sub>CO<sub>3</sub>, H<sub>2</sub>SO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, HNO<sub>2</sub> i àcids orgànics, com el CH<sub>3</sub>COOH.
- Bases: NH<sub>3</sub> (o NH<sub>4</sub>OH) i bases orgàniques nitrogenades, com les amines.

---

### Constant de dissociació

És una mesura de la **força** d'un **àcid/base** en dissolució:

| | ÀCID | BASE |
| :--- | :---: | :---: |
| **EQUILIBRI** | HA + H<sub>2</sub>O &#8652; A<sup>&ndash;</sup> + H<sub>3</sub>O<sup>+</sup> | B + H<sub>2</sub>O &#8652; HB<sup>+</sup> + OH<sup>&ndash;</sup> |
| **CONSTANT** | $\displaystyle K_\mathrm a = \frac{[\mathrm A^-][\mathrm{H_3O}^+]}{[\mathrm{HA}]}$ | $\displaystyle K_\mathrm b = \frac{[\mathrm{HB}^+][\mathrm{OH}^-]}{[\mathrm B]}$ |
| **COLOGARITME** | $\displaystyle \mathrm p K_\mathrm a = -\log K_\mathrm a$ | $\displaystyle \mathrm p K_\mathrm b = -\log K_\mathrm b$ |

{{% /section %}}

---

{{% section %}}

## Equilibri iònic de l'aigua

L'**aigua** és una substància **amfipròtica** (pot tant donar com acceptar un protó H<sup>+</sup>), la qual cosa li permet actuar tant com àcid o com a base (**amfoterisme**).

---

L'**equilibri iònic de l'aigua** fa referència a la reacció química en què dues molècules d'aigua reaccionen per produir un ió **oxoni** (H<sub>3</sub>O<sup>+</sup >) i un ió **hidròxid** (OH<sup>&ndash;</sup>):

---

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Autoionizacion-agua.gif" title="$\mathrm{H_2O} + \mathrm{H_2O} &#8652; \mathrm{H_3O^+} + \mathrm{OH^-}$. <br> https://commons.wikimedia.org/wiki/File:Autoionizacion-agua.gif" lightbox="false" width="100%" >}}

---

La constant d'equilibri, denominada **producte iònic de l'aigua**, i denotada per $K_\mathrm w$, pot aproximar-se pel producte:

$$
K_\mathrm w	= [\mathrm{H_3O^+}][\mathrm{OH^-}]
$$

---

A 25&thinsp;&deg;C:

$$[\mathrm{H_3O^+}] = [\mathrm{OH}^-] = 10^{-7}\thinspace\mathrm M \Rightarrow K_\mathrm w = 10^{-14}	
$$

---

### Relació entre $K_\mathrm a$ i $K_\mathrm b$

Donat un àcid, HA, i la seva base conjugada, A<sup>&ndash;</sup>, podem multiplicar $K_\mathrm a$ i $K_\mathrm b$:

$$
K_\mathrm a \cdot K_\mathrm b = \frac{[\mathrm A^-][\mathrm{H_3O}^+]}{[\mathrm{HA}]}\cdot\frac{[\mathrm{HA}][\mathrm{OH}^-]}{[\mathrm{A^-}]}	= [\mathrm{H_3O}^+][\mathrm{OH}^-] = K_\mathrm w,
$$

---

pel que (suposant $T = 25\thinspace^\circ\mathrm C$):

$$
\begin{align*}
K_\mathrm a\cdot K_\mathrm b &= K_\mathrm w = 10^{-14} \\
\mathrm p K_\mathrm a + \mathrm p K_\mathrm b &= \mathrm p K_\mathrm w = 14
\end{align*}
$$

{{% /section %}}

---

{{% section %}}

## Concepte de pH

Es defineix el pH com el cologaritme de la concentració d'ions oxoni, H<sub>3</sub>O<sup>+</sup>:

$$
\mathrm{pH} = -\log[\mathrm{H_3O^+}]
$$

---

Anàlogament es defineix el pOH en funció de la concentració d'ions hidròxid, OH<sup>&ndash;</sup>:

$$
\mathrm{pOH} = -\log[\mathrm{OH^-}]
$$

---

A partir de l'expressió del **producte iònic de l'aigua**, $K_\mathrm w$, prenent <strong>logaritmes</strong>:

$$
\begin{align*}
[\mathrm{H_3O^+}][\mathrm{OH^-}] &= K_\mathrm w \\
\log [\mathrm{H_3O^+}] + \log [\mathrm{OH^-}] &= \log K_\mathrm w \\
-\mathrm{pH} - \mathrm{pOH} &= -14 \\
\mathrm{pH} + \mathrm{pOH} &= 14
\end{align*}
$$

---

### Escala de pH

{{< figure src="acido-base-2Bach-quimica/escala-pH-cat.svg" lightbox="false" width="100%" >}}

---

També pots *jugar* amb aquesta **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Volumetries de neutralització àcid-base

Una **valoració/titulació àcid-base** és un mètode d'anàlisi química quantitativa per determinar la concentració d'un àcid o base identificat (***analit***), neutralitzant-lo exactament amb una dissolució estàndard de base o àcid de concentració coneguda (**valorant**).

---

{{< figure src="acido-base-2Bach-quimica/volumetria-acido-base-cat.svg" lightbox="false" width="90%" >}}

---

{{< figure src="acido-base-2Bach-quimica/ph-Vb-cat.svg" title="" lightbox="false" width="90%" >}}

---

### Reaccions de neutralització

A una reacció de **neutralització**, un àcid i una base reaccionen de manera **irreversible** per a produir una sal i aigua:

$$
\text{ÀCID} + \text{BASE} \longrightarrow \text{SAL} + \text{AIGUA}
$$

---

Segons sigui el valorant un àcid o una base forta, el pH al punt d'equivalència serà:

<table style="font-size:36px">
<thead>
<tr>
<th style="text-align:right">ANALIT/VALORANT</th>
<th style="text-align:center">Fort/Fort</th>
<th style="text-align:center">Àcid feble/Base forta</th>
<th style="text-align:center">Base feble/Àcid fort</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">pH (EQUIVALÈNCIA)</td>
<td style="text-align:center">7</td>
<td style="text-align:center">&gt; 7</td>
<td style="text-align:center">&lt; 7</td>
</tr>
<tr>
<td style="text-align:right">INDICADOR (vira en medi)</td>
<td style="text-align:center">Neutre</td>
<td style="text-align:center">Bàsic</td>
<td style="text-align:center">Àcid</td>
</tr>
</tbody>
</table>

---

> Aprèn més sobre la **importància** de les **reaccions àcid-base** a l'**esmalt dental** a [aquesta excel·lent entrada del **blog** (en espanyol)](https://fisiquimicamente.com/blog/2021/08/22/sonrisa-de-fluoruro/).

---

### Indicadors àcid-base

Un indicador de pH és un compost químic *halocròmic* (canvia de color ---*vira*--- davant canvis de pH) que s'afegeix en petites quantitats a una dissolució per poder determinar visualment el seu pH (acidesa o basicitat).

---

El canvi de color s'anomena **viratge**.

---

#### Tornasol

Mescla soluble en aigua de diferents colorants extrets de **líquens**. Absorbit en paper de filtre constitueix un dels indicadors de pH més antics utilitzats ($\sim$ 1300).

{{< figure src="acido-base-2Bach-quimica/pH-tornasol.svg" lightbox="false" width="100%" >}}

---

#### Taronja de metil

Colorant *azoderivat* que vira de vermell a taronja-groc en **medi àcid**:

{{< figure src="acido-base-2Bach-quimica/pH-metilo.svg" lightbox="false" width="100%" >}}

---

#### Fenolftaleïna

Indicador de pH incolor en medi àcid que vira a rosa en **medi bàsic**:

{{< figure src="acido-base-2Bach-quimica/pH-fenolftaleina.svg" lightbox="false" width="100%" >}}

---

#### Indicador universal

**Mescla d'indicadors** (blau de timol, vermell de metil, blau de bromotimol i fenolftaleïna) que presenta canvis suaus de color en una àmplia gamma de valors de pH.

{{< figure src="acido-base-2Bach-quimica/pH-universal-cat.svg" lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Hidròlisi de sals

{{< figure src="acido-base-2Bach-quimica/sal-ionizada-cat.svg" lightbox="false" width="100%" >}}

---

A partir d'aquí, suposarem sempre **quantitats estequiomètriques**.

En el cas que hi hagi excés d'alguna de les substàncies, el pH resultant queda determinat pel que queda sense reaccionar.

---

### Sals d'àcid fort i base forta

Quan els ions en què es dissocia una sal provenen d'àcids/bases fortes, no reaccionen amb aigua (hidrolitzen), ja que tendeixen a estar completament ionitzats:

{{< figure src="acido-base-2Bach-quimica/sal-acido-fuerte-base-fuerte-cat.svg" lightbox="false" width="100%" >}}

La **dissolució** resultant és **neutra** (pH = 7).

---

### Sals d'àcid feble i base forta

En aquest cas l'ió provinent de l'àcid feble sí que s'hidrolitza:

{{< figure src="acido-base-2Bach-quimica/sal-acido-debil-base-fuerte-cat.svg" lightbox="false" width="100%" >}}

La **dissolució** resultant és **bàsica** (pH $>$ 7).

---

### Sals d'àcid fort i base feble

En aquest cas l'ió provinent de la base feble sí que s'hidrolitza:

{{< figure src="acido-base-2Bach-quimica/sal-acido-fuerte-base-debil-cat.svg" lightbox="false" width="100%" >}}

La **dissolució** resultant és **àcid** (pH $<$ 7).

---

### Sals d'àcid feble i base feble

En aquest cas tots dos ions s'hidrolitzen:

{{< figure src="acido-base-2Bach-quimica/sal-acido-debil-base-debil-cat.svg" lightbox="false" width="100%" >}}

---

- $K_\mathrm a > K_\mathrm b \Rightarrow$ La <strong>dissolució</strong> resultant és <strong>àcida</strong> (pH $<$ 7).
- $K_\mathrm a = K_\mathrm b \Rightarrow$ La <strong>dissolució</strong> resultant és <strong>neutra</strong> (pH = 7).
- $K_\mathrm b > K_\mathrm a \Rightarrow$ La <strong>dissolució</strong> resultant és <strong>bàsica</strong> (pH $>$ 7).

{{% /section %}}

---

{{% section %}}

## Dissolucions reguladores

També anomenades **disolucions amortidores** o **tampó**, són dissolucions aquoses que consisteixen en una barreja d'un àcid o base feble i el seu conjugat corresponent.

---

Mantenen el pH d'una dissolució pràcticament invariable enfront de petites addicions d'àcid o base a la mateixa gràcies a la neutralització de l'excés d'ions H<sub>3</sub>O<sup>+</sup> o OH<sup>&ndash;</sup>.

---

### Tampó àcid feble + sal de la seva base conjugada
$$
\mathrm{HA} + \mathrm{H_2O} &#8652; \mathrm A^- + \mathrm{H_3O}^+
$$

---

Suposant que les concentracions en l'equilibri són aproximadament iguals a les concentracions inicials, a partir de l'expressió de la constant d'acidesa $K_\mathrm a$:
$$
K_\mathrm a = \frac{[\mathrm A^-][\mathrm{H_3O}^+]}{\mathrm{[HA]}},
$$

---

podem aïllar la concentració d'ions oxoni, H<sub>3</sub>O<sup>+</sup>:
$$
\mathrm{[H_3O^+]} = K_\mathrm a\cdot \frac{\mathrm{[HA]}}{\mathrm{[A^-]}}
$$

---

Prenent logaritmes i canviant de signe:
$$
\begin{align*}
-\log\mathrm{[H_3O^+]} &= -\log K_\mathrm a - \log\frac{\mathrm{[HA]}}{\mathrm{[A^-]}}	\\
\mathrm{pH} &= \mathrm p K_\mathrm a - \log\frac{\mathrm{[HA]}}{\mathrm{[A^-]}} \\
\mathrm{pH} &= \mathrm p K_\mathrm a + \log\frac{[\text{base conjugada}]}{[\text{àcid}]}
\end{align*}
$$

expressió que es coneix com a **equació de Henderson-Hasselbalch**.

---

### Tampó base feble + sal del seu àcid conjugat

$$
\mathrm B + \mathrm{H_2O} &#8652; \mathrm{HB}^+ + \mathrm{OH}^-
$$

---

Assumint novament que les concentracions en l'equilibri són aproximadament iguals a les concentracions inicials, a partir de l'expressió de la constant de basicitat $K_\mathrm b$:
$$
K_\mathrm b = \frac{\mathrm{[HB^+][OH^-]}}{\mathrm{[B]}},
$$

---

podem aïllar la concentració d'ions hidròxid, OH<sup>&ndash;</sup>:
$$
\mathrm{[OH^-]} = K_\mathrm b\cdot \frac{\mathrm{[B]}}{\mathrm{[HB^+]}}	
$$

---

Prenent logaritmes i canviant de signe arribem a una altra forma de l'**equació de Henderson-Hasselbalch**:

$$
\mathrm{pOH} = \mathrm p K_\mathrm b + \log\frac{[\text{àcid conjugat}]}{[\text{base}]}
$$

---

### Importància biològica del pH

- [Tampón H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>&ndash;</sup>](#/7/11)
- [Tampón H<sub>2</sub>PO<sub>4</sub><sup>&ndash;</sup> / HPO<sub>4</sub><sup>2&ndash;</sup>](#/7/12)

(continua cap avall)

👇🏼

---

#### Tampó H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>&ndash;</sup>

Regula el pH de la **sang** $\rightarrow$ $\mathrm{pH} = 7.40 \pm 0.05$:

{{< figure src="acido-base-2Bach-quimica/ph-sangre.svg" lightbox="false" width="100%" >}}

---

#### Tampó H<sub>2</sub>PO<sub>4</sub><sup>&ndash;</sup> / HPO<sub>4</sub><sup>2&ndash;</sup>

Regula el pH a l'**interior** de les **cèl·lules** $\rightarrow$ $\mathrm{pH} \approx 6.86$:
$$
\mathrm{H_2PO_4^-} &#8652; \mathrm{HPO_4^{2-}} + \mathrm{H}^+
$$

{{% /section %}}

---

{{% section %}}

## Àcids i bases rellevants

- [A nivell industrial](#/8/1)
- [A nivell de consum](#/8/4)
- [Problemes mediambientals](#/8/8)

(continua cap avall)

👇🏼

---

### A nivell industrial

- [Àcid sulfúric (H<sub>2</sub>SO<sub>4</sub>)](#/8/2)
- [Àcid nítric (HNO<sub>3</sub>)](#/8/3)

(continua cap avall)

👇🏼

---

#### Àcid sulfúric (H<sub>2</sub>SO<sub>4</sub>)

El compost químic més produït del món, obtingut a base d'hidratar SO<sub>3</sub> concentrat prèviament del SO<sub>2</sub>. El seu principal ús és per crear àcid fosfòric que alhora s'empra en **fertilitzants**.

$$
\begin{align*}
\mathrm{H_2SO_4} + \mathrm{H_2O} &\longrightarrow \mathrm{HSO_4^-} + \mathrm{H_3O^+}\quad\text{(àcid FORT)} \\
\mathrm{HSO_4^-} + \mathrm{H_2O} & &#8652; \mathrm{SO_4^{2-}} + \mathrm{H_3O^+}\quad\text{(àcid FEBLE)}
\end{align*}
$$

---

#### Àcid nítric (HNO<sub>3</sub>)

Emprat en la producció d'adobs, explosius i colorants:
$$
\mathrm{HNO_3} + \mathrm{H_2O} \longrightarrow \mathrm{NO_3^-} + \mathrm{H_3O^+}\quad\text{(àcid FORT)}	
$$

---

### A nivell de consum

- [Àcid acètic (CH<sub>3</sub>COOH)](#/8/5)
- [Amoníac (NH<sub>3</sub>)](#/8/6)
- [Hidròxid de sodi (NaOH)](#/8/7)

(continua cap avall)

👇🏼

---

#### Ácido acético (CH<sub>3</sub>COOH)

Present al vinagre, encara que principalment usat en la fabricació de **fibres tèxtils**.

$$					
\mathrm{CH_3COOH} + \mathrm{H_2O} &#8652; \mathrm{CH_3COO^-} + \mathrm{H_3O^+}\quad\text{(àcid FEBLE)}	
$$

---

#### Amoníac (NH<sub>3</sub>)

Emprat principalment en la producció de **fertilitzants**.

$$
\mathrm{NH_3} + \mathrm{H_2O} &#8652; \mathrm{NH_4^+} + \mathrm{OH^-}\quad\text{(base FEBLE)}	
$$

---

#### Hidròxid de sodi (NaOH)

Emprat sobretot en la fabricació de paper, teixits i productes de neteja.

$$
\mathrm{NaOH} \longrightarrow \mathrm{Na^+} + \mathrm{OH^-}\quad\text{(base FORTA)}	
$$

---

### Problemes mediambientals

- [Pluja àcida](#/8/9)
- [Esmog](#/8/12)

(continua cap avall)

👇🏼

---

#### Pluja àcida

Causada per l'emissió d'**òxids de sofre i nitrogen** que, en contacte amb l'aigua, formen **àcid sulfúric** i **àcid nítric**, entre d'altres:

<table>
<thead>
<tr>
<th style="text-align:center">Òxids de sofre (SO<sub>x</sub>)</th>
<th style="text-align:center">Òxids de nitrogen (NO<sub>x</sub>)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">SO<sub>2</sub> + H<sub>2</sub>O ⟶ H<sub>2</sub>SO<sub>3</sub></td>
<td style="text-align:center; vertical-align : middle" rowspan="2">3 NO<sub>2</sub> + H<sub>2</sub>O ⟶ 2 HNO<sub>3</sub> + NO</td>
</tr>
<tr>
<td style="text-align:center">SO<sub>3</sub> + H<sub>2</sub>O ⟶ H<sub>2</sub>SO<sub>4</sub></td>
</tr>
</tbody>
</table>

---

Es considera pluja àcida si $\mathrm{pH} < 5.5$.

Els seus principals **efectes** són:

- Acidificació d'aigües (riu/llacs) i sòls.
- Deteriorament del patrimoni històric (ataca roques calcàries, a base de CaCO<sub>3</sub>).

---

Algunes **solucions** serien:

- Substituir combustibles fòssils per energies renovables.
- Ús de catalitzadors en vehicles.
- Addició d'un compost alcalí a rius i/o llacs per neutralitzar-ne l'acidesa.
- Tractament de monuments amb recobriments adequats, com el Ba(OH)<sub>2</sub>, que reaccionen amb l'àcid sulfúric formant BaSO<sub>4</sub>, evitant l'erosió.

---

#### Esmog

Prové de la contracció de ***smoke*** i ***fog***, es refereix a una contaminació atmosfèrica deguda sobretot a **òxids de nitrogen** (NO<sub>x</sub>), **sofre** (SO<sub>x</sub>), **ozó** (O<sub>3</sub>), fum i altres partícules.

---

Es considera un problema derivat de la industrialització moderna, encara que és més comú a ciutats amb climes càlids, secs i molt de trànsit.

---

**Efectes**:

- La presència d'ozó i òxids de nitrogen i sofre causa problemes respiratoris, especialment en ancians i nens/es.

---

Algunes de les **solucions** proposades són:

- Reduir les emissions d'òxids de nitrogen i de compostos orgànics volàtils.
- Reduir la contaminació.

{{% /section %}}

---

{{% section %}}

## Simulació

<iframe src="https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Fes clic [**aquí**](?view=print#) i segueix aquestes **instruccions**:

1. Obre el diàleg d'**Impressió** (Control-P si ets al Windows).
2. Canvia la **Destinació** a **Desa com a PDF**.
3. Canvia el **Disseny** a **Horizontal**.
4. Canvia els **Marges** a **Cap**.
5. Activa l'opció **Gràfics de fons**.

El procés, en principi, només funciona amb **Google Chrome**.

</section>
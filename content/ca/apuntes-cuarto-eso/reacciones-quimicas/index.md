---
title: Reaccions químiques
url: "/recursos-fisica-quimica/apunts/4eso/reaccions-quimiques"
subtitle: Ajust d'equacions químiques i càlculs estequiomètrics
summary: "Ajust d'equacions químiques, càlculs massa-massa i càlculs massa-volum."
breadcrumbs: ["recursos-fisica-quimica","apunts","4teso"]
authors:
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
tags:
- apunts
- 4t ESO
- reaccions-químiques
categories:
- Química
weight: 5

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Alex Kondratiev**](https://unsplash.com/@alexkondratiev) a [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Pòster
  url: reaccions-quimiques-poster.pdf

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.

slides: reaccions-quimiques-4ESO

math: true
---

{{% toc %}}

## Ajust d'equacions químiques

La **llei de conservació de la massa** implica dos **principis**:

1. El nombre total d'àtoms abans i després d'una reacció no canvia.
2. El nombre d'àtoms de cada tipus és el mateix abans i després.

A una **equació química** general:

$$
\ce{aA + bB -> cC + dD}
$$

- A, B, C i D representen els **símbols químics** dels àtoms o la **fórmula molecular** dels compostos que reaccionen (costat esquerre) i els que es produeixen (costat dret).
- $a$, $b$, $c$ i $d$ representen els **coeficients estequiomètrics**, que han de ser ajustats segons la **llei de conservació de la massa** (comparant d'esquerra a dreta àtom per àtom el nombre que hi ha d'aquests a cada costat de la fletxa).

Els **coeficients estequiomètrics** indiquen el nombre d'àtoms/molècules/**mols** que reaccionen/es produeixen de cada element/compost (o volum si les substàncies que intervenen són gasos en les mateixes condicions de pressió i temperatura).

### Exemple
{{% callout example %}}
<br>

> Es vol ajustar la següent equació química:

{{% math %}}
$$
\ce{MnO2 + HCl -> MnCl2 + Cl2 + H2O}
$$
{{% /math %}}

---

Comencem pel $\ce{Mn}$: veiem que a l'esquerra hi ha 1 àtom de $\ce{Mn}$ i a la dreta hi ha també 1 àtom, està **ajustat**.

---

Després mirem l'$\ce{O}$: veiem que a l'esquerra hi ha 2 àtoms d'$\ce{O}$ i a la dreta només hi ha 1. Per tant hem de posar un 2 a la molècula d'aigua:

{{% math %}}
$$
\ce{MnO2 + HCl -> MnCl2 + Cl2 + 2H2O}
$$
{{% /math %}}

---

Seguim amb l'$\ce{H}$: a l'esquerra hi ha 1 sol àtom mentre que a la dreta hi ha $2\times 2=4$ àtoms. Per tant hem de col·locar un 4 al $\ce{HCl}$:

{{% math %}}
$$
\ce{MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O}
$$
{{% /math %}}

---

Finalment el $\ce{Cl}$: com hem posat 4 molècules de $\ce{HCl}$ hi ha 4 àtoms de $\ce{Cl}$ a l'esquerra, a la dreta hi ha 2 àtoms de la molècula de clorur de manganès(II) i 2 àtoms més de la molècula de clor, 4 en total, amb el que està **ajustat** i no hem de posar res més.

---

La **reacció ajustada** queda així:

{{% math %}}
$$
\ce{MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O}
$$
{{% /math %}}

{{% /callout %}}

Pots practicar més l'**ajust** d'**equacions químiques** amb aquestes **simulacions**:

<iframe src="https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

<iframe src="https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Càlculs massa-massa

Es tracta de situacions en les quals ens donen la massa (típicament en g) d'un compost químic i ens demanen la massa (també en g) d'un altre compost químic.

Seguim aquestes **tres passes**:

1. **Passar de g a mol** utilitzant la **massa molar**.
2. **Relacionar mols** d'un compost amb mols d'un altre, a partir dels **coeficients estequiomètrics**.
3. **Passar de mol a g** utilitzant la **massa molar**.

### Exemple
{{% callout example %}}
<br>

> El clorat de potassi, $\ce{KClO3}$, descompon en clorur de potassi, $\ce{KCl}$, i oxigen. Calcula la massa d'oxigen que s'obté quan descomponen $86.8\thinspace\mathrm g$ de clorat de potassi per l'acció de la calor.
$M(\ce{K}) = 39.1\thinspace\mathrm{g/mol}$; $M(\ce{Cl}) = 35.5\thinspace\mathrm{g/mol}$; $M(\ce{O}) = 16\thinspace\mathrm{g/mol}$.

---

Escrivim l'**equació química** de la descomposició:
$$
\ce{KClO3 -> KCl + O2}
$$

---

L'**ajustem**:
$$
\ce{2KClO3 -> 2KCl + 3O2}
$$

---

Calculem les **masses molars** de tots els compostos químics involucrats, en aquest cas el $\ce{KClO3}$ i el $\ce{O2}$:
{{% math %}}
$$
\begin{aligned}
	M(\ce{KClO3}) &= M(\ce{K}) + M(\ce{Cl}) + 3\cdot M(\ce{O}) \\\\
	&= 39.1\thinspace\mathrm{g/mol} + 35.5\thinspace\mathrm{g/mol} + 3\cdot 16\thinspace\mathrm{g/mol} = 122.6\thinspace\mathrm{g/mol} \\\\
	M(\ce{O2}) &= 2\cdot M(\ce{O}) = 2\cdot 16\thinspace\mathrm{g/mol} = 32\thinspace\mathrm{g/mol}
\end{aligned}
$$
{{% /math %}}

---

Per a relacionar els grams de clorat de potassi amb els grams d'oxigen utilitzem les tres passes del **càlcul massa-massa**:

{{% math %}}
$$
86.8\thinspace\mathrm{\cancel{g_{\ce{KClO3}}}}\cdot \frac{1\thinspace\mathrm{\cancel{mol_{\ce{KClO3}}}}}{122.6\thinspace\mathrm{\cancel{g_{\ce{KClO3}}}}}\cdot \frac{3\thinspace\mathrm{\cancel{mol_{\ce{O2}}}}}{2\thinspace\mathrm{\cancel{mol_{\ce{KClO3}}}}}\cdot \frac{32\thinspace\mathrm{g_{\ce{O2}}}}{1\thinspace\mathrm{\cancel{mol_{\ce{O2}}}}} = 34.0\thinspace\mathrm{g_\ce{O2}}
$$
{{% /math %}}
{{% /callout %}}

## Reactius en dissolució
Quan els **reactius** es troben en **dissolució**, hem de relacionar el nombre de mols, $n$, amb el volum, $V$, a través de la concentració molar o **molaritat**:

$$
c = \frac{n}{V}	\rightarrow n = cV\quad \text{($V$ en L)}
$$

Pots aprendre més amb aquesta excel·lent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/molarity/latest/molarity_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Exemple
{{% callout example %}}
<br>

> L'àcid clorhídric reacciona amb l'hidròxid de calci per a produir clorur de calci i aigua. Calcula el volum d'àcid clorhídric 0.25 M que es necessita per a reaccionar amb 50 ml d'hidròxid de calci 0.5 M.

{{% math %}}
$$
\ce{2HCl(aq) + Ca(OH)2(aq) -> CaCl2(aq) +  2H2O(l)}
$$
{{% /math %}}

---

{{% math %}}
$$
\begin{aligned}
50\thinspace\mathrm{\cancel{mL_{\ce{Ca(OH)2}}}} & \cdot \frac{1\thinspace\mathrm{\cancel{L_{\ce{Ca(OH)2}}}}}{1000\thinspace\mathrm{\cancel{mL_{\ce{Ca(OH)2}}}}} \cdot \frac{0.5\thinspace\mathrm{\cancel{mol_{\ce{Ca(OH)2}}}}}{1\thinspace\mathrm{\cancel{L_{\ce{Ca(OH)2}}}}} \\\\
& \cdot \frac{2\thinspace\mathrm{\cancel{mol_{\ce{HCl}}}}}{1\thinspace\mathrm{\cancel{mol_{\ce{Ca(OH)2}}}}}\cdot \frac{1\thinspace\mathrm{L_{\ce{HCl}}}}{0.25\thinspace\mathrm{\cancel{mol_{\ce{HCl}}}}} = 0.2\thinspace\mathrm{L_{\ce{HCl}}}
\end{aligned}
$$
{{% /math %}}
{{% /callout %}}

## Cálculs massa-volum
### Equació dels gasos ideals
Quan algun dels compostos que intervenen a la reacció és un **gas**, necessitem fer ús de l'**equació dels gasos ideals**:

$$
pV = nRT
$$

- $p$ és la **pressió** a la qual es troba el gas, mesurada en atm.
- $V$ és el volum que ocupa el gas, mesurat en L.
- $n$ és el **nombre de mols** que tenim del gas, que el podem relacionar amb els grams a través de la **massa molar**.
- $R=0.082\thinspace\frac{\mathrm{atm\thinspace L}}{\mathrm{mol\thinspace K}}$ és la **constant universal dels gasos ideals**[^1].
- $T$ és la **temperatura** a la qual es troba el gas, mesurada en K:
	$$
	T(\mathrm K) = T(^\circ\mathrm C) + 273
	$$

[^1]: En el cas de treballar en el SI, la constant dels gasos ideals pren el valor $R=8.314\thinspace\frac{\mathrm{J}}{\mathrm{mol\thinspace K}} = 8.314\thinspace\frac{\mathrm{kPa\thinspace L}}{\mathrm{mol\thinspace K}}$.

### Exemple
{{% callout example %}}
<br>

> Calcula el volum d'hidrogen, mesurat a $25\thinspace\mathrm{^\circ\mathrm C}$ i $0.98\thinspace\mathrm{atm}$, que es desprèn en fer reaccionar $41.4\thinspace\mathrm g$ de sodi en aigua:
{{% math %}}
$$
\ce{2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)}
$$
{{% /math %}}
$M(\ce{Na}) = 23\thinspace\mathrm{g/mol}$; $M(\ce{H}) = 1\thinspace\mathrm{g/mol}$; $M(\ce{O}) = 16\thinspace\mathrm{g/mol}$.

---

L'equació ens la donen ja **escrita** i **ajustada**. Fixeu-vos en les lletres entre parèntesis, que indiquen l'estat d'agregació de cada compost químic:

- (s) $\rightarrow$ **sòlid**
- (l) $\rightarrow$ **líquid**
- (g) $\rightarrow$ **gas**
- (aq) $\rightarrow$ a **dissolució aquosa** (*aqueous* en anglès)

---

Calculem primer les **masses molars** dels compostos involucrats:
{{% math %}}
$$
\begin{aligned}
	M(\ce{Na}) &= 23\thinspace\mathrm{g/mol}\text{ (m'ho donaven com a dada)} \\\\
	M(\ce{H2}) &= 2\cdot M(\ce{H}) = 2\cdot 1\thinspace\mathrm{g/mol} = 2\thinspace\mathrm{g/mol}
\end{aligned}
$$
{{% /math %}}

---

A partir dels grams de $\ce{Na}$ ccalculem els mols d'$\ce{H2}$ que es desprendran, utilitzant les dues primeres passes del **càlcul massa-massa**:

{{% math %}}
$$
41.4\thinspace\mathrm{\cancel{g_{\ce{Na}}}}\cdot \frac{1\thinspace\mathrm{\cancel{mol_{\ce{Na}}}}}{23\thinspace\mathrm{\cancel{g_{\ce{Na}}}}}\cdot \frac{1\thinspace\mathrm{mol_{\ce{H2}}}}{2\thinspace\mathrm{\cancel{mol_{\ce{Na}}}}} = 0.9\thinspace\mathrm{mol_\ce{H2}}
$$
{{% /math %}}

---

Per a relacionar la quantitat d'hidrogen que es desprèn (mesurada en mols) amb el volum (mesurat en L), utilitzem l'**equació dels gasos ideals**:
$$
pV = nRT
$$

S'ha d'anar amb cura perquè la temperatura $T$ l'hem de passar a K:
\begin{align*}
T(\mathrm K) &= T(^\circ\mathrm C) + 273 \\\\
&= 25\thinspace ^\circ\mathrm C + 273 = 298\thinspace\mathrm K
\end{align*}

Aïllem el volum $V$:
{{% math %}}
$$
V = \frac{nRT}{p} = \frac{0.9\thinspace\mathrm{\cancel{mol}} \cdot 0.082\thinspace\frac{\mathrm{\cancel{atm}\thinspace L}}{\mathrm{\cancel{mol}\thinspace \cancel{K}}}\cdot 298\thinspace\mathrm{\cancel{K}}}{0.98\thinspace\mathrm{\cancel{atm}}} = 22.4\thinspace\mathrm{L_\ce{H2}}
$$
{{% /math %}}
{{% /callout %}}

## Pràctica virtual
Et recomanem veure aquest preciós vídeo/curt-documental del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) on es planteja, de manera qualitativa, una seqüència de cinc reaccions químiques que partint de coure, entre altres metalls, desemboca de nou en aquest metall:

{{< youtube KFcRVAjuxAM >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1wsDhdlJNQKB2VvzHSoMPOMhqPSKEyVP0/view) pots descarregar-te el **guió** de la **pràctica**.
{{% /callout %}}
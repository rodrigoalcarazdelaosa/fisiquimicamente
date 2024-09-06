---
title: Reaccions químiques
url: "/recursos-fisica-quimica/apunts/4eso/reaccions-quimiques/diapositives"
summary: "Ajust d'equacions químiques, càlculs massa-massa i càlculs massa-volum."

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

# Reaccions químiques

- [Ajust d'equacions químiques](#/1)
- [Càlculs massa-massa](#/2)
- [Reactius en dissolució](#/3)
- [Càlculs massa-volum](#/4)
- [Pràctica virtual](#/5)

Descarrega aquestes diapositives en format PDF [📥](#/PDF)

</section>

---

{{% section %}}

## Ajust d'equacions químiques

La **llei de conservació de la massa** implica dos **principis**:

1. El nombre total d'àtoms abans i després d'una reacció no canvia.
2. El nombre d'àtoms de cada tipus és el mateix abans i després.

---

A una **equació química** general:

$$
a\mathrm A + b\mathrm B \longrightarrow c\mathrm C + d\mathrm D
$$

---

- A, B, C i D representen els **símbols químics** dels àtoms o la **fórmula molecular** dels compostos que reaccionen (costat esquerre) i els que es produeixen (costat dret).

---

- $a$, $b$, $c$ i $d$ representen els **coeficients estequiomètrics**, que han de ser ajustats segons la **llei de conservació de la massa** (comparant d'esquerra a dreta àtom per àtom el nombre que hi ha d'aquests a cada costat de la fletxa).

---

Els **coeficients estequiomètrics** indiquen el nombre d'àtoms/molècules/**mols** que reaccionen/es produeixen de cada element/compost (o volum si les substancies que intervenen són gasos en les mateixes condicions de pressió i temperatura).

---

### Exemple
<q>Es vol ajustar la següent equació química:
$$
\mathrm{MnO_2} + \mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + \mathrm{H_2O}
$$</q>

---

Comencem pel Mn: veiem que a l'esquerra hi ha 1 àtom de Mn i a la dreta hi ha també 1 àtom, està **ajustat**.

---

Després mirem l'O: veiem que a l'esquerra hi ha 2 àtoms d'O i a la dreta només hi ha 1. Per tant hem de posar un 2 a la molècula d'aigua:

$$
\mathrm{MnO_2} + \mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + 2\thinspace\mathrm{H_2O}
$$

---

Seguim amb l'H: a l'esquerra hi ha 1 sol àtom mentre que a la dreta hi ha $2\times 2=4$ àtoms. Per tant hem de col·locar un 4 al HCl:

$$
\mathrm{MnO_2} + 4\thinspace\mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + 2\thinspace\mathrm{H_2O}
$$

---

Finalment el Cl: com hem posat 4 molècules de HCl hi ha 4 àtoms de Cl a l'esquerra, a la dreta hi ha 2 àtoms de la molècula de clorur de manganès(II) i 2 àtoms més de la molècula de clor, 4 en total, amb el que està **ajustat** i no hem de posar res més.

---

La **reacció ajustada** queda així:

$$
\mathrm{MnO_2} + 4\thinspace\mathrm{HCl} \longrightarrow \mathrm{MnCl_2} + \mathrm{Cl_2} + 2\thinspace\mathrm{H_2O}
$$

---

Pots practicar més l'**ajust** d'**equacions químiques** amb aquestes **simulacions**:

<iframe src="https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_es.html" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

---

<iframe src="https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Càlculs massa-massa

Es tracta de situacions en les quals ens donen la massa (típicament en g) d'un compost químic i ens demanen la massa (també en g) d'un altre compost químic.

---

Seguim aquestes **tres passes**:

1. **Passar de g a mol** utilitzant la **massa molar**.
2. **Relacionar mols** d'un compost amb mols d'un altre, a partir dels **coeficients estequiomètrics**.
3. **Passar de mol a g** utilitzant la **massa molar**.

---

### Exemple
<q>El clorat de potassi, KClO<sub>3</sub>, descompon en clorur de potassi, KCl, i oxigen. Calculeu la massa d'oxigen que s'obté quan descomponen 86.8 g de clorat de potassi per l'acció de la calor.

$M(\mathrm{K}) = 39.1\thinspace\mathrm{g/mol}$; $M(\mathrm{Cl}) = 35.5\thinspace\mathrm{g/mol}$; $M(\mathrm{O}) = 16\thinspace\mathrm{g/mol}$.</q>

---

Escrivim l'**equació química** de la descomposició:
$$
\mathrm{KClO_3} \longrightarrow \mathrm{KCl} + \mathrm O_2
$$

---

L'**ajustem**:
$$
2\thinspace\mathrm{KClO_3} \longrightarrow 2\thinspace\mathrm{KCl} + 3\thinspace\mathrm O_2
$$

---

Calculem les **masses molars** de tots els compostos químics involucrats, en aquest cas el KClO<sub>3</sub> i el O<sub>2</sub>:

{{% math width="100%" %}}
$$
\begin{aligned}
  M(\mathrm{KClO_3}) &= M(\mathrm{K}) + M(\mathrm{Cl}) + 3\cdot M(\mathrm{O}) \\\\
  &= 39.1\thinspace\mathrm{g/mol} + 35.5\thinspace\mathrm{g/mol} + 3\cdot 16\thinspace\mathrm{g/mol} = 122.6\thinspace\mathrm{g/mol} \\\\
  M(\mathrm{O_2}) &= 2\cdot M(\mathrm{O}) = 2\cdot 16\thinspace\mathrm{g/mol} = 32\thinspace\mathrm{g/mol}
\end{aligned}
$$
{{% /math %}}

---

Per a relacionar els grams de clorat de potassi amb els grams d'oxigen utilitzem les tres passes del **càlcul massa-massa**:
$$
86.8\thinspace\mathrm{g_{\mathrm{KClO_3}}}\cdot \frac{1\thinspace\mathrm{mol_{\mathrm{KClO_3}}}}{122.6\thinspace\mathrm{g_{\mathrm{KClO_3}}}}\cdot \frac{3\thinspace\mathrm{mol_{\mathrm{O_2}}}}{2\thinspace\mathrm{mol_{\mathrm{KClO_3}}}}\cdot \frac{32\thinspace\mathrm{g_{\mathrm{O_2}}}}{1\thinspace\mathrm{mol_{\mathrm{O_2}}}} = 34.0\thinspace\mathrm{g_\mathrm{O_2}}
$$

{{% /section %}}

---

{{% section %}}

## Reactius en dissolució
Quan els **reactius** es troben en **dissolució**, hem de relacionar el nombre de mols, $n$, amb el volum, $V$, a través de la concentració molar o **molaritat**:

---

$$
c = \frac{n}{V}	\rightarrow n = cV\quad \text{($V$ en L)}
$$

---

Pots aprendre més amb aquesta excel·lent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/molarity/latest/molarity_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

---

### Exemple

<q>L'àcid clorhídric reacciona amb l'hidròxid de calci per a produir clorur de calci i aigua. Calcula el volum d'àcid clorhídric 0.25 M que es necessita per a reaccionar amb 50 ml d'hidròxid de calci 0.5 M.</q>
$$
2\thinspace \mathrm{HCl(ac)} + \mathrm{Ca(OH)_2(ac)} \longrightarrow \mathrm{CaCl_2(ac)} +  2\thinspace \mathrm{H_2O(l)}
$$

---

\begin{align*}
50\thinspace\mathrm{mL_{\mathrm{Ca(OH)2}}} & \cdot \frac{1\thinspace\mathrm{L_{\mathrm{Ca(OH)2}}}}{1000\thinspace\mathrm{mL_{\mathrm{Ca(OH)2}}}} \cdot \frac{0.5\thinspace\mathrm{mol_{\mathrm{Ca(OH)2}}}}{1\thinspace\mathrm{L_{\mathrm{Ca(OH)2}}}} \\\\
& \cdot \frac{2\thinspace\mathrm{mol_{\mathrm{HCl}}}}{1\thinspace\mathrm{mol_{\mathrm{Ca(OH)2}}}}\cdot \frac{1\thinspace\mathrm{L_{\mathrm{HCl}}}}{0.25\thinspace\mathrm{mol_{\mathrm{HCl}}}} = 0.2\thinspace\mathrm{L_{\mathrm{HCl}}}
\end{align*}

{{% /section %}}

---

{{% section %}}

## Càlculs massa-volum

- [Equació dels gasos ideals](#/4/1)
- [Exemple](#/4/4)

(continua cap avall)

👇

---

### Equació dels gasos ideals
Quan algun dels compostos que intervenen a la reacció és un **gas**, necessitem fer ús de l'**equació dels gasos ideals**:

$$
pV = nRT
$$

---

- $p$ és la **pressió** a la qual es troba el gas, mesurada en atm.
- $V$ és el volum que ocupa el gas, mesurat en L.
- $n$ és el **nombre de mols** que tenim del gas, que el podem relacionar amb els grams a través de la **massa molar**.
- $R=0.082\thinspace\frac{\mathrm{atm\thinspace L}}{\mathrm{mol\thinspace K}}$ és la **constant universal dels gasos ideals**[^1].
- $T$ és la **temperatura** a la qual es troba el gas, mesura en K:
  $$
  T(\mathrm K) = T(^\circ\mathrm C) + 273
  $$

---

En el cas de treballar en el SI, la constant dels gasos ideals pren el valor $R=8.314\thinspace\frac{\mathrm{J}}{\mathrm{mol\thinspace K}} = 8.314\thinspace\frac{\mathrm{kPa\thinspace L}}{\mathrm{mol\thinspace K}}$.

---

### Exemple
<q>Calcula el volum d'hidrogen, mesurat a $25\thinspace\mathrm{^\circ\mathrm C}$ i $0.98\thinspace\mathrm{atm}$, que es desprèn en fer reaccionar $41.4\thinspace\mathrm g$ de sodi en aigua:
$$
2\thinspace\mathrm{Na(s)} + 2\thinspace\mathrm{H_2O(l)} \longrightarrow 2\thinspace\mathrm{NaOH(aq)} + \mathrm{H_2(g)}
$$
$M(\mathrm{Na}) = 23\thinspace\mathrm{g/mol}$; $M(\mathrm{H}) = 1\thinspace\mathrm{g/mol}$; $M(\mathrm{O}) = 16\thinspace\mathrm{g/mol}$.</q>

---

L'equació ens la donen ja **escrita** i **ajustada**. Fixeu-vos en les lletres entre parèntesis, que indiquen l'estat d'agregació de cada compost químic:

- (s) $\rightarrow$ **sòlid**
- (l) $\rightarrow$ **líquid**
- (g) $\rightarrow$ **gas**
- (aq) $\rightarrow$ a **dissolució aquosa** (*aqueous* en anglès)

---

Calculem primer les **masses molars** dels compostos involucrats:
\begin{align*}
  M(\mathrm{Na}) &= 23\thinspace\mathrm{g/mol}\text{ (m'ho donaven com a dada)} \\\\
  M(\mathrm{H_2}) &= 2\cdot M(\mathrm{H}) = 2\cdot 1\thinspace\mathrm{g/mol} = 2\thinspace\mathrm{g/mol}
\end{align*}

---

A partir dels grams de Na calculem els mols d'H<sub>2</sub> que es desprendran, utilitzant les dues primeres passes del **càlcul massa-massa**:

$$
41.4\thinspace\mathrm{g_{\mathrm{Na}}}\cdot \frac{1\thinspace\mathrm{mol_{\mathrm{Na}}}}{23\thinspace\mathrm{g_{\mathrm{Na}}}}\cdot \frac{1\thinspace\mathrm{mol_{\mathrm{H_2}}}}{2\thinspace\mathrm{mol_{\mathrm{Na}}}} = 0.9\thinspace\mathrm{mol_\mathrm{H_2}}
$$

---

Per a relacionar la quantitat d'hidrogen que es desprèn (mesurada en mols) amb el volum (mesurat en L), utilitzem l'**equació dels gasos ideals**:
$$
pV = nRT
$$

---

S'ha d'anar amb cura perquè la temperatura $T$ l'hem de passar a K:
\begin{align*}
T(\mathrm K) &= T(^\circ\mathrm C) + 273 \\\\
&= 25\thinspace ^\circ\mathrm C + 273 = 298\thinspace\mathrm K
\end{align*}

---

Aïllem el volum $V$:
$$
V = \frac{nRT}{p} = \frac{0.9\thinspace\mathrm{mol} \cdot 0.082\thinspace\frac{\mathrm{atm\thinspace L}}{\mathrm{mol\thinspace K}}\cdot 298\thinspace\mathrm{K}}{0.98\thinspace\mathrm{atm}} = 22.4\thinspace\mathrm{L_\mathrm{H_2}}
$$

{{% /section %}}

---

{{% section %}}

## Pràctica virtual

{{< youtube KFcRVAjuxAM >}}

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Punxa [**aquí**](?view=print#) i segueix aquestes **instruccions**:

1. Obre el diàleg d'**Impressió** (Control-P si estàs en Windows).
2. Canvia el **Destí** a **Desar com PDF**.
3. Canvia el **Disseny** a **Horitzontal**.
4. Canvia els **Marges** a **Cap**.
5. Activa l'opció **Gràfics de fons**.

El procés, en principi, només funciona amb **Google Chrome**.

</section>
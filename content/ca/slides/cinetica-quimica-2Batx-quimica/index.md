---
title: Cinètica química
url: "/recursos-fisica-quimica/apunts/2batx/quimica/cinetica-quimica/diapositives"
summary: "Velocitat de reacció. Equacions cinètiques. Ordre de reacció. Mecanismes de reacció."

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

# Cinètica química

- [Teories de reaccions químiques](#/2)
- [Mecanismes de reacció](#/3)
- [Velocitat de reacció](#/4)
- [Equacions cinètiques](#/5)
- [Factors que influeixen en la velocitat de reacció](#/6)

Descarrega aquestes diapositives en format PDF [📥](#/PDF)

</section>

---

La **cinètica química** és la **branca** de la **química física** que s'ocupa de **comprendre** les **velocitats** de les **reaccions químiques**.

---

{{% section %}}

## Teories de reaccions químiques

- [Teoria de col·lisions](#/2/1)
- [Teoria de l'estat de transició o del complex activat](#/2/5)

(continua cap avall)

👇

---

### Teoria de col·lisions
La **teoria de col·lisions**, proposada per Lewis al 1918, explica una reacció des del punt de vista dinàmic.

---

Ens diu que les reaccions es produeixen a partir de xocs entre les molècules dels reactius.

---

Perquè aquests xocs siguin **eficaços**, les molècules han de tenir suficient energia (**energia d'activació**) i una orientació adequada.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-colisiones-cat.svg" title="Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

---

### Teoria de l'estat de transició o del complex activat

La **teoria de l'estat de transició**, proposada per Henry Eyring al 1935, explica una reacció química des del punt de vista energètic.

---

Quan les molècules dels reactius xoquen, donen lloc a un **estat de transició**, molt inestable, on es forma un **complex activat**, en el qual uns enllaços s'estan formant i altres trencant.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-estado-transicion-cat.svg" title="Quant menor sigui l'energia d'activació, més ràpida serà la reacció química." lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Mecanismes de reacció

El **mecanisme** d'una **reacció** és el conjunt de processos o reaccions elementals pels quals es produeix el canvi químic global.

(continua cap avall)

👇

---

Les espècies que no apareixen en la reacció global es denominen **intermedis de reacció**, ja que es produeixen en un procés elemental però es consumeixen en un altre.

---

La velocitat d'una reacció ve determinada per la reacció elemental més lenta, anomenada **etapa limitant** de la **velocitat**.

{{% /section %}}

---

{{% section %}}

## Velocitat de reacció

És la **velocitat** a la qual **ocorre** una **reacció química**. En una **equació química** general:

$$
a\mathrm A + b\mathrm B \longrightarrow c\mathrm C + d\mathrm D,
$$

(continua cap avall)

👇

---

$a$, $b$, $c$ i $d$ representen els **coeficients estequiomètrics** mentre que A, B, C i D representen els **símbols químics** dels àtoms o la **fórmula molecular** dels compostos que reaccionen (costat esquerre) i els que es produeixen (costat dret).

---

Definim la **velocitat instantània de reacció**, $v$, com:

$$
v = - \frac{1}{a} \frac{\mathrm d [\mathrm A]}{\mathrm d t} = - \frac{1}{b} \frac{\mathrm d [\mathrm B]}{\mathrm d t} = \frac{1}{c} \frac{\mathrm d [\mathrm C]}{\mathrm d t} = \frac{1}{d} \frac{\mathrm d [\mathrm D]}{\mathrm d t},
$$

on [ ] representa **concentració**, mesurada en mol/L.

---

En general, la velocitat d'una reacció química varia amb el temps i es determina experimentalment, mesurant la concentració a intervals de temps coneguts.

---

Advertir  que la velocitat referida als reactius (A i B) presenta un signe menys ($-$), ja que la concentració d'aquests disminueix amb el temps i per tant la seva variació és negativa.

{{% /section %}}

---

{{% section %}}

## Equacions cinètiques

**Relacionen** la **velocitat** de **reacció** amb la **concentració** dels **reactius**:

$$
v = k[\mathrm A]^n[\mathrm B]^m,
$$

(continua cap avall)

👇

---

on $k$ és la constant de velocitat (${\uparrow}k\rightarrow {\uparrow} v$); [A] i [B] les concentracions (molars) dels reactius; i $n$ i $m$ són els ordres de reacció parcials ($\text{ordre total} = n+m$).

---

En el cas de **reaccions elementals** (una sola etapa), els ordres parcials coincideixen amb els coeficients estequiomètrics, per la qual cosa l'ordre total coincideix amb la **molecularitat**.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/orden-reaccion-cat.svg" lightbox="false" width="100%" >}}

---

### Vida mitjana o període de semireacció

Definim la **vida mitjana** o **període de semireacció**, $t_{1/2}$, com el temps necessari perquè la concentració d'un determinat reactiu es redueixi a la meitat.

| Ordre | Integració | $t_{1/2}$ |
| :---: | :---: | :---: |
| 0 | $[\mathrm A] = [\mathrm A]_0 - kt$ | $\displaystyle \frac{[\mathrm A]_0}{2k}$ |
| 1 | $[\mathrm A] = [\mathrm A]_0 \cdot \mathrm e^{-kt}$ | $\displaystyle \frac{\ln 2}{k}$ |
| 2 | $\displaystyle [\mathrm A] = \frac{[\mathrm A]_0}{1+[\mathrm A]_0 kt}$ | $\displaystyle \frac{1}{k[A]_0}$ |
| 3 | $\displaystyle [\mathrm A] = \frac{[\mathrm A]_0}{\sqrt{1+2[\mathrm A]_0^2 kt}}$ | $\displaystyle \frac{3}{2k[A]_0^2}$ |
{.kinetics-table}

{{% /section %}}

---

{{% section %}}

## Factors que influeixen en la velocitat de reacció

- [Naturalesa dels reactius](#/6/1)
- [Estat d'agregació i grau de divisió dels reactius](#/6/3)
- [Concentració dels reactius](#/6/5)
- [Temperatura](#/6/6)
- [Catalizadors](#/6/8)

(continua cap avall)

👇

---

### Naturalesa dels reactius

La **naturalesa** i la **força** dels **enllaços** en les molècules **reactives** influeixen en gran manera en la velocitat de la seva transformació en productes.

---

Les substàncies iòniques solen reaccionar més ràpidament que les covalents a temperatura ambient.

---

### Estat d'agregació i grau de divisió dels reactius

Quan els reactius estan en estats diferents, la reacció només pot ocórrer en la seva àrea de contacte.

---

Això significa que **com més finament dividit** estigui un **reactiu** sòlid o líquid, **major** serà la seva **àrea** de **superfície** per unitat de volum i **major** serà el **contacte** amb l'altre reactiu, per la qual cosa la **reacció** serà **més ràpida**.

$$
v_\text{gas} > 	v_\text{líquid} > v_\text{sòlid}
$$

---

### Concentració dels reactius

La velocitat de reacció depèn de les concentracions dels reactius:

$$
v = k[\mathrm A]^n[\mathrm B]^m
$$

**Com més gran** sigui la **concentració**, més molècules hi haurà i més probable serà que col·lideixin i reaccionin entre si, donant lloc a un **augment** de la **velocitat** de **reacció**.

---

### Temperatura

A **major temperatura**, les molècules tenen més energia tèrmica i són més susceptibles de xocar eficaçment, **augmentant** la **velocitat** de **reacció**.

---

L'**equació d'Arrhenius** relaciona la constant de velocitat $k$ amb la temperatura $T$:

$$
k = A\mathrm e^{-\frac{E_\mathrm a}{RT}},
$$

on $A$ és el factor de freqüència, que reflecteix la freqüència de les col·lisions, $E_\mathrm a$ és l'energia d'activació i $R = 8.31\thinspace \mathrm J\thinspace\mathrm{mol}^{-1}\thinspace\mathrm K^{-1}$ és la constant universal dels gasos ideals.

---

### Catalizadors

Un **catalitzador** és una **substància** que **altera** la **velocitat** d'una **reacció** química sense consumir-se durant aquesta.

---

Distingim entre **catalitzadors**:

#### Positius

**Augmenten** la **velocitat** de reacció disminuint l'energia d'activació.

#### Negatius (inhibidors)

**Disminueixen** la **velocitat** de reacció augmentant $E_\mathrm a$.

---

Distingim també entre **catàlisi homogènia** o **heterogènia** depenent de si la fase del catalitzador és la mateixa o no que la dels reactius.

---

#### Catàlisi enzimàtica

Les **proteïnes** que actuen com a **catalitzadors** a les **reaccions bioquímiques** es diuen **enzims**.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/catalisis-enzimatica-cat.svg" title="Model d'ajust induït." lightbox="false" width="100%" >}}

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

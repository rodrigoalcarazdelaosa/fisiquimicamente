---
title: Cinètica química
url: "/recursos-fisica-quimica/apunts/2batx/quimica/cinetica-quimica"
subtitle: Velocitat i mecanismes de reacció
summary: "Velocitat de reacció. Equacions cinètiques. Ordre de reacció. Mecanismes de reacció."
breadcrumbs: ["recursos-fisica-quimica","apunts","2batx","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
- alba-lopez-valenzuela
- eduard-cremades
tags:
- apunts
- 2n Batx
- reaccions-químiques
- cinètica-química
categories:
- Química
weight: 5

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imatge de [**Jalyn Bryce**](https://pixabay.com/es/users/jalynbryce-5426636/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Pòster
  url: cinetica-quimica-poster.pdf 
- icon_pack: fas
  icon:
  name: ✏️ Exercicis
  url: cinetica-quimica-exercicis.pdf

slides: cinetica-quimica-2Batx-quimica

math: true
---

{{% toc %}}

La **cinètica química** és la **branca** de la **química física** que s'ocupa de **comprendre** les **velocitats** de les **reaccions químiques**.

[^1]: Com bé apunta Ricardo M. A. Estrada Ramírez, [seria més convenient parlar de **rapidesa de reacció**](https://twitter.com/ricestrada/status/1355607804497842182?s=20).

## Teories de reaccions químiques

### Teoria de col·lisions
La **teoria de col·lisions**, proposada per Lewis al 1918, explica una reacció des del punt de vista dinàmic. Ens diu que les reaccions es produeixen a partir de xocs entre les molècules dels reactius. Perquè aquests xocs siguin **eficaços**, les molècules han de tenir suficient energia (**energia d'activació**) i una orientació adequada.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-colisiones-cat.svg" title="Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

### Teoria de l'estat de transició o del complex activat

La **teoria de l'estat de transició**, proposada per Henry Eyring en 1935, explica una reacció química des del punt de vista energètic. Quan les molècules dels reactius xoquen, donen lloc a un **estat de transició**, molt inestable, on es forma un **complex activat**, en el qual uns enllaços s'estan formant i altres trencant.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-estado-transicion-cat.svg" title="Quant menor sigui l'energia d'activació, més ràpida serà la reacció química. <br> Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

## Mecanismes de reacció

El **mecanisme** d'una **reacció** és el conjunt de processos o reaccions elementals pels quals es produeix el canvi químic global.

Les espècies que no apareixen en la reacció global es denominen **intermedis de reacció**, ja que es produeixen en un procés elemental però es consumeixen en un altre.

La velocitat d'una reacció ve determinada per la reacció elemental més lenta, anomenada **etapa limitant** de la **velocitat**.

## Velocitat de reacció

És la **velocitat** a la qual **ocorre** una **reacció química**. En una **equació química** general:
$$
a\thinspace\mathrm A + b\thinspace\mathrm B \longrightarrow c\thinspace\mathrm C + d\thinspace\mathrm D,
$$
$a$, $b$, $c$ i $d$ representen els **coeficients estequiomètrics** mentre que A, B, C i D representen els **símbols químics** dels àtoms o la **fórmula molecular** dels compostos que reaccionen (costat esquerre) i els que es produeixen (costat dret).

Definim la **velocitat instantània de reacció**[^2], $v$, com:

[^2]: La **velocitat mitjana de reacció** es defineix com la variació de la concentració d'una espècie, $\Delta [A]$, en un interval de temps, $\Delta t$, donat:

    $$
    v_\mathrm m = - \frac{1}{a} \frac{\Delta [\mathrm A]}{\Delta t} = - \frac{1}{b} \frac{\Delta [\mathrm B]}{\Delta t} = \frac{1}{c} \frac{\Delta [\mathrm C]}{\Delta t} = \frac{1}{d} \frac{\Delta [\mathrm D]}{\Delta t}
    $$

$$
v = - \frac{1}{a} \frac{\mathrm d [\mathrm A]}{\mathrm d t} = - \frac{1}{b} \frac{\mathrm d [\mathrm B]}{\mathrm d t} = \frac{1}{c} \frac{\mathrm d [\mathrm C]}{\mathrm d t} = \frac{1}{d} \frac{\mathrm d [\mathrm D]}{\mathrm d t},
$$

on [ ] representa **concentració**, mesurada en mol/L. En general, la velocitat d'una reacció química varia amb el temps i es determina experimentalment, mesurant la concentració a intervals de temps coneguts. Advertir que la velocitat referida als reactius (A i B) presenta un signe menys ($-$), ja que la concentració d'aquests disminueix amb el temps i per tant la seva variació és negativa.

## Equacions cinètiques

**Relacionen** la **velocitat** de **reacció** amb la **concentració** dels **reactius**:

$$
v = k[\mathrm A]^n[\mathrm B]^m,
$$

on $k$ és la constant de velocitat (${\uparrow}k\rightarrow {\uparrow} v$); [A] i [B] les concentracions (molars) dels reactius; i $n$ i $m$ són els ordres de reacció parcials ($\text{ordre total} = n+m$). En el cas de **reaccions elementals** (una sola etapa), els ordres parcials coincideixen amb els coeficients estequiomètrics, per la qual cosa l'ordre total coincideix amb la **molecularitat**[^3].

[^3]: La **molecularitat** és el nombre de molècules que intervenen en una reacció elemental, i és igual a la suma dels coeficients estequiomètrics dels reactius.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/orden-reaccion-cat.svg" lightbox="false" width="100%" >}}

### Vida mitjana o període de semireacció $t_{1/2}$

Definim la **vida mitjana** o **període de semireacció**, $t_{1/2}$, com el temps necessari perquè la concentració d'un determinat reactiu es redueixi a la meitat.

| Ordre | 0 | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: | :---: |
| Integració | &nbsp; &nbsp; $[\mathrm A] = [\mathrm A]_0 - kt$ &nbsp; &nbsp; | $[\mathrm A] = [\mathrm A]_0 \cdot \mathrm e^{-kt}$ | &nbsp; &nbsp; $\displaystyle [\mathrm A] = \frac{[\mathrm A]_0}{1+[\mathrm A]_0 kt}$ &nbsp; &nbsp; | &nbsp; &nbsp; $\displaystyle [\mathrm A] = \frac{[\mathrm A]_0}{\sqrt{1+2[\mathrm A]_0^2 kt}}$ |
| $t_{1/2}$ | $\displaystyle \frac{[\mathrm A]_0}{2k}$ | $\displaystyle \frac{\ln 2}{k}$ | $\displaystyle \frac{1}{k[A]_0}$ | $\displaystyle \frac{3}{2k[A]_0^2}$

## Factors que influeixen en la velocitat de reacció

### Naturalesa dels reactius

La **naturalesa** i la **força** dels **enllaços** en les molècules **reactives** influeixen en gran manera en la velocitat de la seva transformació en productes. Les substàncies iòniques solen reaccionar més ràpidament que les covalents a temperatura ambient.

### Estat d'agregació i grau de divisió dels reactius

Quan els reactius estan en estats diferents, la reacció només pot ocórrer en la seva àrea de contacte. Això significa que **com més finament dividit** estigui un **reactiu** sòlid o líquid, **major** serà la seva **àrea** de **superfície** per unitat de volum i **major** serà el **contacte** amb l'altre reactiu, per la qual cosa la **reacció** serà **més ràpida**.

$$				
v_\text{gas} > 	v_\text{líquid} > v_\text{sòlid}
$$

### Concentració dels reactius

La velocitat de reacció depèn de les concentracions dels reactius:

$$
v = k[\mathrm A]^n[\mathrm B]^m
$$

**Com més gran** sigui la **concentració**, més molècules hi haurà i més probable serà que col·lideixin i reaccionin entre si, donant lloc a un **augment** de la **velocitat** de **reacció**.

### Temperatura

A **major temperatura**, les molècules tenen més energia tèrmica i són més susceptibles de xocar eficaçment, **augmentant** la **velocitat** de **reacció**. L'**equació d'Arrhenius** relaciona la constant de velocitat $k$ amb la temperatura $T$:

$$
k = A\mathrm e^{-\frac{E_\mathrm a}{RT}},
$$

on $A$ és el factor de freqüència, que reflecteix la freqüència de les col·lisions, $E_\mathrm a$ és l'energia d'activació i$R = 8.31\thinspace \mathrm J\thinspace\mathrm{mol}^{-1}\thinspace\mathrm K^{-1}$ és la constant universal dels gasos ideals.

### Catalizadors

Un **catalitzador** és una **substància** que **altera** la **velocitat** d'una **reacció** química sense consumir-se durant aquesta. Distingim entre **catalitzadors**:

#### Positius

**Augmenten** la **velocitat** de reacció disminuint l'energia d'activació.

#### Negatius (inhibidors)

**Disminueixen** la **velocitat** de reacció augmentant $E_\mathrm a$.

Distingim també entre **catàlisi homogènia** o **heterogènia** depenent de si la fase del catalitzador és la mateixa o no que la dels reactius.

#### Catàlisi enzimàtica

Les **proteïnes** que actuen com a **catalitzadors** a les **reaccions bioquímiques** es diuen **enzims**.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/catalisis-enzimatica-cat.svg" title="Model d'ajust induït. <br> Adaptada de https://commons.wikimedia.org/wiki/File:Induced_fit_diagram_es.svg" lightbox="false" width="100%" >}}


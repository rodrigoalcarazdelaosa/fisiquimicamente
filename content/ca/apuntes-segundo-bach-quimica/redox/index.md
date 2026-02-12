---
title: Redox
url: "/recursos-fisica-quimica/apunts/2batx/quimica/redox"
subtitle: Equilibri i ajust redox, piles galvàniques i electròlisi
summary: "Equilibri redox. Ajust redox. Piles galvàniques. Electròlisi."
breadcrumbs: ["recursos-fisica-quimica","apunts","2batx","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- eduard-cremades
- oscar-colomar
- alba-lopez-valenzuela
tags:
- apunts
- 2n Batx
- reaccions-químiques
- redox
- electròlisi
categories:
- Química
weight: 8

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Zdeněk Macháček**](https://unsplash.com/@zmachacek) a [Unsplash](https://unsplash.com)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Pòster
  url: redox-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Exercicis
  url: redox-exercicis.pdf

math: true

slides: redox-2Batx-quimica
---

{{% toc %}}

**Redox** (reducció-oxidació) és un tipus de **reacció química** en la qual l'**estat d'oxidació** dels àtoms **canvia**, a causa d'una **transferència** d'**electrons**.

## Oxidació-reducció

### Oxidació
**Pèrdua** d'**electrons** o **augment** de l'**estat** d'**oxidació** d'un àtom.

### Reducció
**Guany** d'**electrons** o **disminució** de l'**estat** d'**oxidació** d'un àtom.

### Oxidants i reductors
El parell d'un agent oxidant i un altre reductor que intervé en una determinada reacció es denomina **parell redox**.

Oxidant
: Substància capaç d'oxidar a altres substàncies (causar que perdin electrons), reduint-se ella mateixa. L'oxigen (O<sub>2</sub>) és l'agent oxidant per excel·lència.

{{< figure src="redox-2Bach-quimica/oxidante.svg" title="[Pictograma de perill](https://echa.europa.eu/es/regulations/clp/clp-pictograms) que indica que una substància és **comburent/oxidant**: que pot provocar o agreujar un incendi." lightbox="false" width="100%" >}}

Reductor
: Substància capaç de reduir a altres substàncies (causar que guanyin electrons), oxidant-se ella mateixa. Els metalls electropositius són bons reductors.

### Reaccions de dismutació

Les reaccions de **dismutació** són aquelles en les quals la mateixa espècie es redueix i s'oxida alhora.

## Estat d'oxidació

L'**estat d'oxidació** descriu el grau d'oxidació (pèrdua d'electrons) d'un àtom en un compost químic. Conceptualment, l'estat d'oxidació és la càrrega hipotètica que tindria un àtom si tots els enllaços amb àtoms de diferents elements fossin 100 \% iònics, sense component covalent.

Pèrdua d'electrons
: Augmenta l'estat d'oxidació.

Guany d'electrons
: Disminueix l'estat d'oxidació (podent ser **negatiu**).

### Regles per a assignar estats d'oxidació

{{% callout note %}}
A [aquesta taula periòdica](https://fisiquimicamente.com/blog/2020/08/23/tabla-periodica-de-los-elementos/tabla-periodica-elementos-estados-oxidacion.pdf) (en espanyol) pots veure els possibles **estats d'oxidació** de la majoria dels **elements químics**.
{{% /callout %}}

1. L'estat d'oxidació d'un element en estat lliure és 0.
2. L'estat d'oxidació d'un ió monoatòmic coincideix amb la càrrega elèctrica de l'ió.
3. La suma dels estats d'oxidació és igual a 0 per a compostos neutres i igual a la càrrega elèctrica neta per a les espècies iòniques poliatòmiques.
4. Els metalls alcalins (grup 1) i els alcalinoterris (grup 2) tenen estats d'oxidació de +1 i de +2, respectivament, en compostos.
5. L'estat d'oxidació del fluor és –1 en compostos.
6. L'hidrogen sol tenir un estat d'oxidació de $+1$ en compostos, però de –1 en hidrurs.
7. L'oxigen sol tenir un estat d'oxidació de –2 en compostos.
8. En compostos binaris metàl·lics, els elements del grup 17 tenen un estat d'oxidació de –1, els del grup 16 de –2 i els del grup 15 de –3.

## Ajust redox

Per a descriure la reacció electroquímica global d'un procés redox és necessari identificar i ajustar les **semireaccions** d'**oxidació** (&#8593; núm. ox.) i **reducció** (&#8595; núm. ox.) que ho componen.

### Mètode de l'estat d'oxidació
Emprat sobretot a reaccions redox en **fase gasosa**, consisteix a calcular la **variació** de l'**estat** d'**oxidació** a cadascuna de les semireaccions i igualar-les multiplicant per coeficients adequats.

### Mètode de l'ió-electró
Emprat a reaccions redox que ocorren en **dissolució** (àcida o bàsica).

#### Passes

1. Ajustar àtoms diferents d'O i H.
2. Ajustar els àtoms d'O i H:
 - Medi àcid: afegir 1 H<sub>2</sub>O per cada O que falti i compensar amb H<sup>+</sup> a l'altre costat de l'equació.
 - Medi bàsic: afegir 1 H<sub>2</sub>O per cada O que excedeixi i compensar amb OH<sup>–</sup> a l'altre costat de l'equació.
3. Ajustar les càrregues afegint electrons a la part més positiva.
4. Igualar el nombre d'electrons multiplicant per coeficients adequats.
5. Sumar les semireaccions cancel·lant els electrons i termes comuns.

### Exemple
{{% callout example %}}
<br>

> Ajustar la següent equació en medi àcid:
$$
\mathrm{Cu} + \mathrm{HNO_3} \longrightarrow \mathrm{Cu(NO_3)_2} + \mathrm{NO} + \mathrm{H_2O}
$$

---

Escrivim les **semireaccions** d'oxidació (&#8593; núm. ox.) i reducció (&#8595; núm. ox.):
\begin{align*}
\text{oxidació (Cu: $0\rightarrow +2$): } \mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} \\\\
\text{reducció (N: $+5 \rightarrow +2$): } \mathrm{NO_3^-} &\longrightarrow \mathrm{NO}
\end{align*}

Ajustem els oxígens afegint molècules d'aigua:

$$
\begin{align*}
\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} \\\\
\mathrm{NO_3^-} &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O}
\end{align*}
$$

Ajustem els H afegint H<sup>+</sup>:

$$
\begin{align*}
\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} \\\\
4\thinspace\mathrm H^+ + \mathrm{NO_3^-} &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O}
\end{align*}
$$

Ajustem les càrregues afegint electrons:

$$
\begin{align*}
\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} + 2\thinspace\mathrm e^- \\\\
4\thinspace\mathrm H^+ + \mathrm{NO_3^-} + 3\thinspace\mathrm e^- &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O}
\end{align*}
$$

Igualem el nombre d'electrons multiplicant per coeficients adequats:

$$
\begin{align*}
(\mathrm{Cu} &\longrightarrow \mathrm{Cu^{2+}} + 2\thinspace\mathrm e^-)\times 3 \\\\
(4\thinspace\mathrm H^+ + \mathrm{NO_3^-} + 3\thinspace\mathrm e^- &\longrightarrow \mathrm{NO} + 2\thinspace\mathrm{H_2O})\times 2
\end{align*}
$$

Sumem les semireaccions per a obtenir l'equació global:

$$
\boxed{3\thinspace\mathrm{Cu} + 8\thinspace\mathrm{HNO_3} \longrightarrow 3\thinspace\mathrm{Cu(NO_3)_2} + 2\thinspace\mathrm{NO} + 4\thinspace\mathrm{H_2O}}
$$
{{% /callout %}}

### Estequiometria redox

Amb la reacció ajustada es poden realitzar tot tipus de **càlculs estequiomètrics**.

## Piles galvàniques

Les **piles galvàniques** (Galvani) o voltaiques (Volta) són cel·les electroquímiques en les quals es genera **electricitat** a partir d'una **reacció redox espontània**.

### Pila Daniell

Inventada per John Frederick Daniell al 1836, consisteix en dos elèctrodes de zinc i coure, submergits en dues dissolucions que contenen els seus ions (Zn<sup>2+</sup> i Cu<sup>2+</sup>), connectades per un pont salí, que permet el flux d'ions entre totes dues dissolucions. Els electrons flueixen entre tots dos elèctrodes gràcies al fil conductor que els connecta.

{{< spoiler text="Punxa aquí per a conèixer millor les **funcions** del **pont salí**" >}}

Un **pont salí** és un dispositiu de laboratori que s'utilitza per a connectar les semicel·les d'oxidació i reducció d'una cel·la galvànica, tancant així el circuit i mantenint l'electroneutralitat de les dissolucions. Si no hi hagués pont salí, la dissolució d'una semicel·la acumularia càrrega negativa i la dissolució de l'altra semicel·la acumularia càrrega positiva a mesura que es produís la reacció, la qual cosa impediria ràpidament que es produís una nova reacció i, per tant, la producció d'electricitat.

Existeixen principalment dos tipus de ponts salins: tub de vidre (forma d'U) i paper de filtre, en els quals s'utilitzen electròlits relativament febles (sals inertes solubles), com a combinacions d'ions potassi o amoni i clorur o nitrat.

{{< /spoiler >}}

{{< figure src="redox-2Bach-quimica/pila-daniell-cat.svg" title="Zn(s) | Zn<sup>2+</sup> (1 M) || Cu<sup>2+</sup> (1 M) | Cu(s). <br> Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/galvanic-cells/." lightbox="false" width="100%" >}}

## Potencial estàndard de reducció $E^\circ$

És la tendència d'una espècie química a ser reduïda a una temperatura de 25&thinsp;&deg;C, una pressió de 1&thinsp;atm i en una dissolució aquosa amb una concentració 1&thinsp;M. Es pot mesurar experimentalment amb ajuda de l'**elèctrode estàndard d'hidrogen**.

{{< spoiler text="Punxa aquí per a conèixer més sobre l'**elèctrode estàndard d'hidrogen**" >}}

{{< figure src="redox-2Bach-quimica/electrodo-estandar-hidrogeno-cat.svg" title="Elèctrode estàndard d'hidrogen (EEH), fet d'un elèctrode inert (Pt) amb gas hidrogen a 1 atm de pressió en una dissolució àcida 1.0 M d'ions H<sup>+</sup>. Pot utilitzar-se per a determinar el potencial estàndard de reducció de l'espècie que es troba en l'altra semicel·la. El platí és inert, però proporciona els electrons necessaris per a la reacció 2 H<sup>+</sup>(aq) + 2 e<sup>–</sup> &#10230; H<sub>2</sub>(g). L'EEH té un potencial de reducció nul, pel que aparellant-lo amb qualsevol semicel·la proporciona una mesura del potencial de reducció d'aquesta semicel·la. <br> Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/galvanic-cells/." lightbox="false" width="100%" >}}

{{< /spoiler >}}

{{< figure src="redox-2Bach-quimica/potencial-estandar-reduccion-cat.svg" title="Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/galvanic-cells/." lightbox="false" width="100%" >}}

{{< callout note >}}
Consulta [a aquesta taula](https://es.wikipedia.org/wiki/Anexo:Tabla_de_potenciales_de_reducción) els valors del potencial estàndard de reducció d'una gran varietat d'espècies químiques.
{{< /callout >}}

## Espontaneïtat de les reaccions redox

### Potencial de pila

El potencial estàndard d'una pila, $E_\text{pila}^\circ$, es calcula com la diferència entre els potencials estàndard de reducció de les dues semireaccions:

$$
E_\text{pila}^\circ = E_\text{càtode}^\circ - E_\text{ànode}^\circ
$$

Aquest potencial pot relacionar-se amb l'**energia** de **Gibbs**, $\symup\Delta G^\circ$, a través de l'expressió:

$$
\symup\Delta G^\circ = -nFE_\text{pila}^\circ,
$$

on $n$ és el nombre d'electrons transferits en la reacció i $F \approx 96485\thinspace\mathrm{C/mol}$ és la constant de Faraday.

Una **reacció redox espontània** es caracteritza per un valor **negatiu** de $\symup\Delta G^\circ$, la qual cosa correspon a un valor **positiu** de $E_\text{pila}^\circ$.

$$
\text{reacció redox espontània} \Leftrightarrow E_\text{pila}^\circ > 0
$$

## Volumetries redox

Una **valoració/titulació redox** és un mètode d'anàlisi química quantitativa per a determinar la concentració d'un oxidant o reductor identificat (***anàlit***), que pateix una reacció redox amb una dissolució estàndard de reductor o oxidant de concentració coneguda (**valorant**).

{{< figure src="acido-base-2Bach-quimica/volumetria-acido-base-cat.svg" title="Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/quantitative-analysis-of-acids-and-bases/." lightbox="false" width="100%" >}}

Sovint és necessari utilitzar un **indicador redox** i/o un **potenciòmetre** per a conèixer el **punt d'equivalència**.

### Punt d'equivalència

En el punt d'equivalència, l'oxidant ha reaccionat amb la quantitat equivalent de reductor, per la qual cosa:

<div align="center" style="margin-bottom: 1rem">

*c*<sub>r</sub>*n*<sub>o</sub> = *c*<sub>o</sub>*n*<sub>r</sub>

*c*<sub>r</sub>*M*<sub>o</sub>*V*<sub>o</sub> = *c*<sub>o</sub>*M*<sub>r</sub>*V*<sub>r</sub>
</div>

on *n* són els mols, *c* representa els coeficients estequiomètrics, *M* és la molaritat i *V* és el volum.

### Exemples

#### Iodometria

Generalment utilitzada per a analitzar la concentració d'agents oxidants en mostres d'aigua, implica la valoració indirecta de iode alliberat per reacció amb l'anàlit.

El tiosulfat de sodi (Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>) sol utilitzar-se com a agent reductor.

L'aparició o desaparició de iode elemental indica el punt final.

No confondre amb la **iodimetria**, que és una valoració directa utilitzant iode com a substància valorante.

#### Permanganometria

Involucra l'ús de permanganats, típicament el KMnO<sub>4</sub>, i s'utilitza per a mesurar la quantitat d'anàlit, com per exemple ferro(II), en una mostra química desconeguda.

En la majoria dels casos, la permanganometria es duu a terme en una **dissolució molt àcida**, en la qual té lloc la següent reacció química:

<div align="center" style="margin-bottom: 1rem">
MnO<sub>4</sub><sup>–</sup> + 8 H<sup>+</sup> + 5 e<sup>–</sup> &#10230; Mn<sup>2+</sup> + 4 H<sub>2</sub>O; &emsp; <em>E</em><sup>&#x26AC;</sup> = +1.51 V
</div>

el que demostra que, a un medi molt àcid, el KMnO<sub>4</sub> és un agent oxidant molt fort.

A una **dissolució molt bàsica**, només es transfereix un electró:

<div align="center" style="margin-bottom: 1rem">
MnO<sub>4</sub><sup>–</sup> + e<sup>–</sup> &#10230; MnO<sub>4</sub><sup>2–</sup>; &emsp; <em>E</em><sup>&#x26AC;</sup> = +0.56 V
</div>

## Electròlisis

L'**electròlisis** és una tècnica que utilitza corrent elèctric continu (CC) per a impulsar una reacció química no espontània.

### Cel·la (o cuba) electrolítica vs. cel·la galvànica

- A una **cel·la electrolítica**, igual que a una cel·la galvànica, la reducció té lloc en el càtode, i l'oxidació en l'ànode. No obstant això, pel fet que el flux d'electrons està invertit, la polaritat dels elèctrodes està també invertida, per la qual cosa el **ànode** és **positiu** i el **càtode negatiu**.
- El potencial de la cel·la és positiu en la pila, negatiu en la cuba.
- A més, a una cuba electrolítica els dos elèctrodes o bé estan submergits en una dissolució de l'ió de l'oxidant (per exemple, quan es donen banys metàl·lics per [electrodeposició](https://ca.wikipedia.org/wiki/Refinació_electrolítica)) o bé en la dissolució de l'electròlit fos (com en l'electròlisi del NaCl); en lloc d'estar separats per un pont salí o per una membrana semipermeable, com és el cas de les piles.

### Lleis de Faraday

Són **expressions quantitatives** que relacionen **magnituds electroquímiques**, descrites per primera vegada per Michael Faraday al 1833.

1. La massa de substància dipositada a un elèctrode, $m$, és directament proporcional a la càrrega elèctrica transferida a aquest elèctrode, $Q$:
    $$
		m \propto Q
		$$
2. Per a una determinada quantitat de càrrega elèctrica, la massa de substància dipositada en un elèctrode, $m$, és directament proporcional a la seva *massa equivalent*, $E$, que no és més que la seva massa molar, $M$, dividida per la seva valència iònica (electrons per ió), $n$:
    $$
    m \propto E	= \frac{M}{n}
		$$

Totes dues lleis es poden combinar en una sola expressió matemàtica donada per:

$$
m = \frac{Q}{F}\cdot \frac{M}{n},
$$

on $Q$ és la càrrega elèctrica total transferida, $F \approx 96485\thinspace\mathrm{C/mol}$ és la constant de Faraday, $M$ és la massa molar de la substància (en g/mol) i $n$ és la valència iònica (electrons per ió).

Si el **corrent** és **constant**, $Q = It$, i llavors:

$$
m = \frac{It}{F}\cdot\frac{M}{n}
$$

### Electròlisi de l'aigua

Consisteix en la **descomposició** de l'**aigua** (H<sub>2</sub>O) en els gasos oxigen (O<sub>2</sub>) i hidrogen (H<sub>2</sub>) mitjançant **electricitat**.

L'oxigen s'oxida, dipositant-se a l'ànode, mentre que l'hidrogen es redueix, dipositant-se al càtode.

En condicions ideals, la quantitat d'hidrogen dipositada és el doble que la d'oxigen, d'acord amb l'equació:

<div align="center" style="margin-bottom: 1rem">
2 H<sub>2</sub>O(l) &#10230; 2 H<sub>2</sub>(g) + O<sub>2</sub>(g)
</div>

{{< figure src="redox-2Bach-quimica/electrolisis-agua-cat.svg" title="Traduïda i adaptada de https://commons.wikimedia.org/wiki/File:Schemas_electrolyse_h2o.svg." lightbox="false" width="100%" >}}

### Aplicacions

- Obtenció d'elements purs, com l'Al, Li, Na, K, Mg, Ca o Cu, mitjançant electrometal·lúrgia.
  {{< callout note >}}
  Aprèn més sobre el procés d'**obtenció** del **coure** a [aquesta excel·lent entrada del **blog**]({{< ref "/post/pureza-quimica-cobre/index.md" >}}).
  {{< /callout >}}
- Producció de clor i hidròxid de sodi, mitjançant el **procés cloralcalí**.
  {{< figure src="redox-2Bach-quimica/cloroalcalino-cat.svg" title="**Procés cloralcalí de membrana**. A l'ànode (A), el clorur (Cl<sup>–</sup>) s'oxida a clor. La membrana selectiva d'ions (B) permet que el contraió Na<sup>+</sup> flueixi lliurement, però impedeix que anions com l'hidròxid (OH<sup>–</sup>) i el clorur es difonguin. Al càtode (C), l'aigua es redueix a hidròxid i hidrogen gasós. El procés net és la electròlisi d'una solució aquosa de NaCl en productes industrialment útils: hidròxid de sodi (NaOH) i clor gasós. <br> Traduïda i adaptada de https://en.wikipedia.org/wiki/File:Chloralkali_membrane.svg." lightbox="false" width="100%" >}}
- Producció de clorat de sodi i clorat de potassi.
- Producció d'hidrogen per al seu ús com a combustible per a naus espacials i submarins nuclears.

## Aplicacions i repercusions de les reacciones redox

### Piles de combustible

Són **cel·les electroquímiques** que **converteixen** l'**energia química** d'un **combustible** i un agent oxidant en **electricitat**, mitjançant un parell de reaccions **redox**.

#### Piles d'hidrogen

En les **piles** d'**hidrogen**, l'oxigen es redueix en el càtode i l'hidrogen s'oxida a l'ànode, alliberant electrons. Quan l'oxigen i l'hidrogen es troben, es forma vapor d'aigua, que és l'únic residu que es produeix.

{{< figure src="redox-2Bach-quimica/pila-combustible-cat.svg" title="Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/galvanic-cells/." lightbox="false" width="100%" >}}

Malgrat els seus avantatges, encara no s'utilitzen àmpliament, a causa del seu cost i baixa eficiència comparats amb altres maneres de produir electricitat.

### Prevenció de la corrosió de metalls

#### Corrosió

La **corrosió** és el procés natural pel qual els metalls, com el ferro, s'oxiden, tornant al seu estat d'oxidació més estable, i destruint-se gradualment.

{{< figure src="redox-2Bach-quimica/corrosivo.svg" title="[Pictograma de perill](https://echa.europa.eu/es/regulations/clp/clp-pictograms) que indica que una substància és **corrosiva**.." lightbox="false" width="100%" >}}

L'oxigen atmosfèric és el càtode (oxidant) més comú en les reaccions redox de corrosió.

{{< figure src="redox-2Bach-quimica/corrosion-cat.svg" title="Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/corrosion/." lightbox="false" width="100%" >}}

#### Anodització

Procés electrolític de *passivació* que s'utilitza per a augmentar el gruix de la capa d'òxid natural a la superfície de peces metàl·liques, especialment d'alumini (Al).

#### Galvanoplàstia

És l'aplicació tecnològica de la deposició de metalls mitjançant electricitat ([electrodeposició](https://ca.wikipedia.org/wiki/Refinació_electrolítica)), formant un recobriment protector, típicament de zinc sobre ferro o acer (aliatge de Fe i C).

{{< figure src="redox-2Bach-quimica/galvanizacion-cat.svg" title="Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/corrosion/." lightbox="false" width="100%" >}}

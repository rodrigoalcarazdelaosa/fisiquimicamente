---
title: Química orgànica
url: "/recursos-fisica-quimica/apunts/2batx/quimica/quimica-organica"
subtitle: Isomeria, reactivitat i polímers
summary: "Isomeria, reactivitat i polímers."
breadcrumbs: ["recursos-fisica-quimica","apunts","2batx","quimica"]
authors:
- alba-lopez-valenzuela
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
- eduard-cremades
tags:
- apunts
- 2n Batx
- orgànica
- reaccions-químiques
- redox
- isomeria
- polímers
categories:
- Química
weight: 9

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imatge de [**Colin Behrens**](https://pixabay.com/es/users/colin00b-346653/) a [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Pòster isomeria i reactivitat
  url: quimica-organica-poster.pdf
- icon_pack: fas
  icon:
  name: 📜 Pòster polímers
  url: polimers-poster.pdf
- icon_pack: fas
  icon:
  name: ✏️ Exercicis
  url: quimica-organica-exercicis.pdf

slides: quimica-organica-2Batx-quimica

threedmol: true
---

{{% toc %}}

{{% callout note %}}
**Repassa** la **formulació** i la **nomenclatura** de **Química Orgànica** amb aquests [**apunts**]({{< relref "apuntes-formulacion/organica" >}}) actualitzats a les últimes recomanacions de la IUPAC de 2013.
{{% /callout %}}

{{% callout note %}}
Les **representacions tridimensionals de molècules** són possibles gràcies a [**3Dmol.js**](https://3dmol.csb.pitt.edu):

Nicholas Rego and David Koes

3Dmol.js: molecular visualization with WebGL

Bioinformatics (2015) 31 (8): 1322–1324 https://doi.org/10.1093/bioinformatics/btu829
{{% /callout %}}

## Isomeria

Dos compostos són **isòmers**[^1] entre si si tenen el mateix número i tipus d'àtoms, és a dir, si tenen la **mateixa fórmula molecular**. Dos compostos isòmers tenen el **mateix nombre** d'**insaturacions**.

[^1]: La paraula **isòmer** és un neologisme encunyat pel químic suec [Jöns Jacob Berzelius (1779–1848)](https://ca.wikipedia.org/wiki/Jöns_Jacob_Berzelius), formada del grec ισo (isos = igual) i μ𝜀ρo𝜍 (meros = part, porció).

### Isomeria constitucional

Es deu a **diferències** en l'**estructura** dels **compostos**, és a dir, canvia com estan units els àtoms (tenen diferent connectivitat). Dins d'aquest tipus, hi ha tres subtipus d'isomeria:

#### Isomeria de cadena

Es presenta en compostos que difereixen en l'**esquelet** de la **cadena carbonada**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/isomeros-cadena-cat.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquestes **molècules** en **3D**" >}}
##### Butà
{{% 3Dmol data_href="/media/quimica-organica-2Bach/butano.sdf" %}}

##### Metilpropà (isobutà)
{{% 3Dmol data_href="/media/quimica-organica-2Bach/isobutano.mol" %}}
{{< /spoiler >}}

A la següent taula pots veure el nombre d'isòmers que presenten els hidrocarburs lineals saturats:

| núm. C | Nom | Isòmers |
| :---: | :---: | :---: |
| 1 | Metà | 1 |
| 2 | Età | 1 |
| 3 | Propà | 1 |
| 4 | Butà | 2 |
| 5 | Pentà | 3 |
| 6 | Hexà | 5 |
| 7 | Heptà | 9 |
| 8 | Octà | 18 |
| 9 | Nonà | 35 |
| 10 | Decà | 75 |

#### Isomeria de posició

Es presenta en compostos que difereixen en la **posició** del seu **grup funcional**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/isomeros-posicio.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquestes **molècules** en **3D**" >}}
##### But–2–è
{{% 3Dmol data_href="/media/quimica-organica-2Bach/but-2-eno.mol" %}}

##### But–1–è
{{% 3Dmol data_href="/media/quimica-organica-2Bach/but-1-eno.mol" %}}

##### Butan–2–ol
{{% 3Dmol data_href="/media/quimica-organica-2Bach/butan-2-ol.mol" %}}

##### Butan–1–ol
{{% 3Dmol data_href="/media/quimica-organica-2Bach/butan-1-ol.mol" %}}
{{< /spoiler >}}

#### Isomeria de funció

Es presenta en compostos que tenen **grups funcionals diferents**. Solen ser isòmers de funció entre si:

- alcohols-èters,
- aldehids-cetones,
- i àcids carboxílics-èsters,

encara que existeixen moltes altres possibilitats.

{{< figure library="true" src="quimica-organica-2Bach-quimica/isomeros-funcio.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquestes **molècules** en  **3D**" >}}
##### Metil propil èter (metoxipropà)
{{% 3Dmol data_href="/media/quimica-organica-2Bach/metoxipropano.mol" %}}

##### Butan–1–ol
{{% 3Dmol data_href="/media/quimica-organica-2Bach/butan-1-ol.mol" %}}

##### Propanal
{{% 3Dmol data_href="/media/quimica-organica-2Bach/propanal.mol" %}}

##### Propanona (acetona)
{{% 3Dmol data_href="/media/quimica-organica-2Bach/acetona.sdf" %}}

##### Àcid propanoic
{{% 3Dmol data_href="/media/quimica-organica-2Bach/acido-propanoico.mol" %}}

##### Etanoat/acetat de metil
{{% 3Dmol data_href="/media/quimica-organica-2Bach/acetato-metilo.mol" %}}
{{< /spoiler >}}

### Estereoisomeria

En aquest cas, l'estructura de les substàncies és la mateixa (igual connectivitat entre àtoms) però es **diferencien** en la seva **orientació espacial**.

#### Isomeria geomètrica (*cis-trans*)

La isomeria *cis-trans* es presenta en alguns alquens, a causa de la incapacitat de rotació del doble enllaç. Perquè un doble enllaç presenti isomeria *cis-trans*, no pot haver-hi sobre qualsevol dels dos carbonis del doble enllaç dos substituents iguals. Dos compostos amb aquesta mena d'isomeria geomètrica són **diastereoisòmers**, sent les seves propietats físiques diferents.

Els isòmers *cis* tenen tots dos substituents del doble enllaç cap a un costat, els *trans* cap a costats oposats:

{{< figure library="true" src="quimica-organica-2Bach-quimica/cis-trans-cat.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquestes **molècules** en  **3D**" >}}
##### *cis*–1,2–dicloroetè
{{% 3Dmol data_href="/media/quimica-organica-2Bach/cis-12-dicloroeteno.mol" %}}

##### *trans*–1,2–dicloroetè
{{% 3Dmol data_href="/media/quimica-organica-2Bach/trans-12-dicloroeteno.mol" %}}
{{< /spoiler >}}

L'1,1–dicloroetè no pot presentar isomeria *cis-trans*:

{{< figure library="true" src="quimica-organica-2Bach-quimica/11-dicloroete.svg" lightbox="false" width="50%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquesta **molècula** en **3D**" >}}
{{% 3Dmol data_href="/media/quimica-organica-2Bach/11-dicloroeteno.mol" %}}
{{< /spoiler >}}

Aquest tipus d'isomeria es dona també en compostos amb un pla de simetria, a causa de la impossibilitat de rotació:

{{< figure library="true" src="quimica-organica-2Bach-quimica/cis-trans-plano-rotacion-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Notació E-Z

Quan existeixen diversos substituents diferents, la nomenclatura *cis-trans* en alquens pot resultar ambigua. En aquests casos s'adopta la nomenclatura E-Z. En alemany:

- E de *entgegen* (separats).
- Z de *zusammen* (junts).

A cada carboni del doble enllaç, el substituent de major nombre atòmic té major jerarquia. En cas d'empat, se segueix el mateix criteri amb els àtoms units a ells, fins a desempatar. L'isòmer Z serà el que tingui els dos substituents de major jerarquia del mateix costat del doble enllaç i l'isòmer E serà el que els tingui a diferent costat:

{{< figure library="true" src="quimica-organica-2Bach-quimica/E-Z-cat.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquestes **molècules** en  **3D**" >}}
###### (Z)–1–bromo–1–cloro–2–metilbut–1–è
{{% 3Dmol data_href="/media/quimica-organica-2Bach/Z-1-bromo-1-cloro-2-metilbut-1-eno.mol" %}}

###### (E)–1–bromo–1–cloro–2–metilbut–1–è
{{% 3Dmol data_href="/media/quimica-organica-2Bach/E-1-bromo-1-cloro-2-metilbut-1-eno.mol" %}}
{{< /spoiler >}}

Un exemple del diferents que poden arribar a ser dos isòmers *cis-trans* ho tenim amb els **àcids [fumàric](https://es.wikipedia.org/wiki/Ácido_fumárico)** i **[maleic](https://es.wikipedia.org/wiki/Ácido_cis-butenodioico)**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/fumaric-maleic.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquestes **molècules** en  **3D**" >}}
##### Àcid fumàric
{{% 3Dmol data_href="/media/quimica-organica-2Bach/acido-fumarico.mol" %}}

##### Àcid maleic
{{% 3Dmol data_href="/media/quimica-organica-2Bach/acido-maleico.mol" %}}
{{< /spoiler >}}

Sent el primer fonamental en diverses rutes del metabolisme cel·lular, destacant la seva participació en el [cicle de Krebs](https://es.wikipedia.org/wiki/Ciclo_de_Krebs); i el segon tòxic. Les seves propietats físiques són molt diferents.

#### Isomeria conformacional

{{% callout note %}}
La [**isomeria conformacional**](https://ca.wikipedia.org/wiki/Isomerisme_conformacional) no és matèria de batxillerat ni de PBAU.
{{% /callout %}}

Els alquens amb dobles enllaços conjugats poden adoptar dues diferents conformacions. Per exemple, en el **buta–1,3–diè** els dobles enllaços poden estar cap al mateix costat de l'enllaç simple o en costats oposats. Seria incorrecte referir-nos a les dues possibilitats com *cis i trans* ja que són **conformacions** (dinàmic!) i no configuracions (estàtic). És a dir, la molècula pot girar entorn de l'enllaç senzill i interconvertir-se d'una conformació a una altra, cosa que no pot ocórrer amb els isòmers *cis* i *trans* a causa de la rigidesa del doble enllaç o del cicle.

Aquests [**confòrmers**](https://es.wikipedia.org/wiki/Isomería_conformacional) s'anomenen amb el prefix "s" (de "sigma", o de "simple" si preferiu).

{{< figure library="true" src="quimica-organica-2Bach-quimica/conformers.svg" lightbox="false" width="100%" theme="light" >}}

Com hauràs estudiat en Biologia, [els anells de 6 membres poden adoptar dues diferents conformacions: forma de cadira i forma de pot](https://ca.wikipedia.org/wiki/Conformació_en_ciclohexà). La forma de cadira és més estable, però la diferència d'estabilitat entre les dues és molt petita, per la qual cosa es converteixen fàcilment l'una en l'altra. Aquestes estructures presenten isomeria conformacional.

{{< figure library="true" src="quimica-organica-2Bach-quimica/glucopiranosa-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Isomeria òptica

La isomeria òptica es presenta quan un compost no és superponible amb la seva imatge especular, i en aquest cas es diu que són **enantiòmers**. Perquè això ocorri, la molècula ha de posseir almenys un carboni **quiral**. Un carboni quiral és un carboni que té 4 substituents diferents:

{{< figure library="true" src="quimica-organica-2Bach-quimica/quiralidad.svg" title="L'àtom de carboni negre és un centre quiral perquè té quatre substituents diferents, un àtom de clor (Cl), un àtom d'hidrogen (H), un àtom de fluor (F) i un àtom de brom (Br). Les dues estructures són imatges especulars l'una de l'altra que no poden superposar-se. Adaptada de https://www.coursehero.com/sg/general-chemistry/chirality/." lightbox="false" width="100%" >}}

{{% callout warning %}}
Compte perquè pot ocórrer que un compost tingui dos centres quirals i que no presenti isomeria òptica.
{{% /callout %}}

Aquest és el tipus d'esteroisomeria que presenten molècules essencials per a la vida, com els [aminoàcids](https://es.wikipedia.org/wiki/Aminoácido) i els [monosacàrids](https://es.wikipedia.org/wiki/Monosacárido). Els enantiòmers tenen propietats físiques idèntiques[^3], diferenciant-se únicament en el seu comportament enfront de la llum polaritzada, perquè la desvien de manera diferent (mesurable amb un [polarímetre](https://ca.wikipedia.org/wiki/Polarímetre)). Si el pla de la llum polaritzada es desvia a la dreta són substàncies *dextrògires* i si es desvia a l'esquerra, *levògires*:

[^3]: La qual cosa no significa que la seva reactivitat sigui igual. Especialment sonada va ser l'anomenada [***catàstrofe** de la **talidomida***](https://publicacions.iec.cat/repository/pdf/00000173/00000015.pdf).

{{< spoiler text="Punx aquí per veure **animacions** d'**ones electromagnètiques circularment polaritzades**" >}}
{{< figure library="false" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Circular.Polarization.Circularly.Polarized.Light_Right.Handed.Animation.305x190.255Colors.gif" title="Una ona circularment polaritzada cap a la dreta des del punt de vista de l'observador. Font: https://commons.wikimedia.org/wiki/File:Circular.Polarization.Circularly.Polarized.Light_Right.Handed.Animation.305x190.255Colors.gif." lightbox="true" >}}

{{< figure library="false" src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Circular.Polarization.Circularly.Polarized.Light_Left.Hand.Animation.305x190.255Colors.gif" title="Una ona circularment polaritzada cap a l'esquerra des del punt de vista de l'observador. Font: https://commons.wikimedia.org/wiki/File:Circular.Polarization.Circularly.Polarized.Light_Left.Hand.Animation.305x190.255Colors.gif." lightbox="true" >}}
{{< /spoiler >}}

{{< figure library="true" src="quimica-organica-2Bach-quimica/alanina.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Punxa aquí per a **interactuar** amb aquestes **molècules** en  **3D**" >}}
##### <span style="font-variant:small-caps">d</span>-Alanina
{{% 3Dmol data_href="/media/quimica-organica-2Bach/D-alanina.mol" %}}

##### <span style="font-variant:small-caps">l</span>-Alanina
{{% 3Dmol data_href="/media/quimica-organica-2Bach/L-alanina.mol" %}}
{{< /spoiler >}}

##### Projeccions de Fischer

Amb la finalitat de facilitar la representació en el pla, s'utilitzen les **projeccions de Fischer**, ideades pel químic alemany Hermann Emil Fischer[^4] al 1891, per a representar la disposició espacial de molècules en les quals un o més àtoms de carboni són quirals:

[^4]: ![Fischer](quimica-organica-2Bach-quimica/Fischer.jpg "**Hermann Emil Fischer** (1852–1919) va ser un químic alemany, descobridor del [**barbital**](https://es.wikipedia.org/wiki/Barbital) (primer sedatiu i somnífer del grup dels [barbitúrics](https://es.wikipedia.org/wiki/Barbitúrico)). Va ser guardonat amb el **Premi Nobel de Química en 1902**. Font: https://commons.wikimedia.org/wiki/File:Hermann_Emil_Fischer_c1895.jpg.")

{{< figure library="true" src="quimica-organica-2Bach-quimica/proyecciones-fischer.svg" lightbox="false" width="100%" theme="light" >}}

## Reactivitat
### Reaccions de substitució

En aquest tipus de reaccions un àtom o grup d'àtoms d'una molècula és substituït per un altre àtom o grup d'àtoms d'una altra molècula:

{{< figure library="true" src="quimica-organica-2Bach-quimica/sustitucion.svg" lightbox="false" width="50%" theme="light" >}}

#### Halogenació d'alcans

Els alcans experimenten reaccions de substitució [**radicalaries**](https://es.wikipedia.org/wiki/Reacción_radicalaria)[^5]. Així, es pot aconseguir la substitució d'un enllaç –C–H per un enllaç –C–X mitjançant radiació lluminosa.

[^5]: Les reaccions radicalaries són les responsables de la formació i destrucció de la capa d'ozó. La formació ocorre a través de la reacció en cadena següent:
  {{< figure library="true" src="quimica-organica-2Bach-quimica/formacion-ozono.svg" lightbox="false" width="100%" theme="dark" >}}
  Reacció global:
  {{< figure library="true" src="quimica-organica-2Bach-quimica/formacion-ozono-global.svg" lightbox="false" width="100%" theme="dark" >}}
  La destrucció d'ozó (O<sub>3</sub>) ocorre a través d'una reacció en cadena que necessita un catalitzador X:
  {{< figure library="true" src="quimica-organica-2Bach-quimica/destruccion-ozono.svg" lightbox="false" width="100%" theme="dark" >}}
  Reacció global:
  {{< figure library="true" src="quimica-organica-2Bach-quimica/destruccion-ozono-global.svg" lightbox="false" width="100%" theme="dark" >}}

S'anomena **substitució fotoquímica** i és una reacció en la qual la llum trenca la molècula d'halogen X<sub>2</sub> (F<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub> o I<sub>2</sub>) donant una reacció en cadena amb fórmula general:

{{< figure library="true" src="quimica-organica-2Bach-quimica/radicalaria1-cat.svg" lightbox="false" width="50%" theme="light" >}}

La reacció pot continuar precisant a cada etapa llum o calor. A cada etapa es forma HX com a producte. La següent reacció està particularitzada per a (X = Cl). A cada etapa, a més del producte de substitució, es forma HCl:

{{< figure library="true" src="quimica-organica-2Bach-quimica/radicalaria2-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Substitució d'un halogen per un altre

{{< figure library="true" src="quimica-organica-2Bach-quimica/sustitucion-halogenos-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformació d'un derivat halogenat en un alcohol

La [**hidròlisis**](https://es.wikipedia.org/wiki/Hidrólisis) d'un haloalcà es duu a terme amb NaOH que dona la substitució de l'halogen pel grup –OH, donant l'alcohol:

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-alcohol-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformació d'un derivat halogenat en un èter

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-eter-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformació d'un derivat halogenat en una amina primària

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-amina-primaria-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformació d'un derivat halogenat en una amina secundària (o terciària)

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-amina-secundaria-cat.svg" lightbox="false" width="100%" theme="light" >}}

### Reaccions d'addició

Una molècula incorpora a la seva estructura una altra molècula. Ocorren amb substrats amb dobles o triples enllaços originant un producte amb un major grau de saturació.

#### Hidrogenació catalítica d'alquens

Es realitza amb hidrogen molecular en presència d'un catalitzador, normalment platí. És un procés exotèrmic. La reacció transcorre de manera que cada àtom d'hidrogen de la molècula H<sub>2</sub> s'afegeix a un dels dos carbonis que formen l'enllaç múltiple en el reactiu, saturant la molècula:

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrogenacion-alquenos-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidrogenació d'un alquí

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrogenacion-etino-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Halogenació d'alquens

De manera anàloga a la hidrogenació, l'halogen X<sub>2</sub> afegeix un àtom d'halogen a cada carboni que forma l'enllaç múltiple formant un dihalogen veïnal:

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogenacion-alquenos-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Halogenació d'un alquè

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogenacion-eteno-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Halogenació d'un alquí

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogenacion-etino-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Hidrohalogenació d'alquens

L'halur d'hidrogen HX s'afegeix a l'enllaç múltiple:

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrohalogenacion-alquenos-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidrohalogenació d'un alquè

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrohalogenacion-propeno-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidrohalogenació d'un alquí

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrohalogenacion-etino-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Hidratació d'alquens

La reacció succeeix en el tractament de l'alquè amb aigua i un catalitzador àcid fort, com el H<sub>2</sub>SO</sub>4</sub>, per un mecanisme similar al de l'addició de HX. L'aigua H<sub>2</sub>O també s'afegeix a l'enllaç múltiple:

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidratacion-alquenos-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidratació d'un alquè

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidratacion-propeno-cat.svg" lightbox="false" width="100%" theme="light" >}}

### Reaccions d'eliminació

Una molècula perd àtoms en posicions adjacents i origina una molècula amb un enllaç doble o triple. Les reaccions d'eliminació són les reaccions inverses a les d'addició a un doble enllaç.

> A les reaccions d'eliminació es perden àtoms de dos carbonis veïnals produint-se majoritàriament el **doble enllaç més substituït**.

#### Deshidrogenació

És la reacció inversa a la hidrogenació, i es dona amb un catalitzador i calor, donant l'alquè:

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidrogenacio.svg" lightbox="false" width="100%" theme="light" >}}

#### Deshidrohalogenació d'halurs d'alquil

És la reacció inversa a la hidrohalogenació, es produeix en presència de KOH i alcohol en la qual s'elimina KX i H<sub>2</sub>O, originant un doble enllaç. La deshidrohalogenació produeix majoritàriament el producte amb el doble enllaç més substituït:

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidrohalogenacion-haluros-alquilo-cat.svg" lightbox="false" width="100%" theme="light" >}}

##### Deshidrohalogenació de dihalurs veïnals

Com al cas anterior, s'eliminen molècules d'HX, en aquest cas 2 molècules HX, originant un enllaç triple. Aquesta reacció es produeix en presència d'un catalitzador:

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidrohalogenacion-dihaluros-vecinales-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Deshidratació d'alcohols

És la reacció inversa a la hidratació d'alcohols. Es produeix en medi àcid, generalment H<sub>2</sub>SO<sub>4</sub>, i calor. La deshidratació (pèrdua d'una molècula d'aigua) produeix, majoritàriament, el doble enllaç més substituït:

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidratacion-alcoholes-cat.svg" lightbox="false" width="100%" theme="light" >}}

### Reaccions d'oxidació-reducció (redox)

A les **reaccions d'oxidació**, el carboni que té unit un hidroxil (–OH) s'oxida. Aquesta oxidació té lloc per pèrdua d'un hidrogen unit al C i de l'hidrogen del grup –OH, formant-se un doble enllaç C=O conegut com a grup carbonil. Com a substància oxidant [Ox] pot usar-se dicromat de potassi K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> o permanganat de potassi KMnO<sub>4</sub> en medi àcid.

La reacció inversa a l'oxidació és la **reducció**. Com a substància reductora [Red] sol usar-se tetrahidrur d'alumini-liti, LiAlH<sub>4</sub>.

#### Alcohols primaris

Com en els **alcohols primaris** el grup –OH està unit a un carboni terminal, en oxidar-se produeix un carbonil terminal donant lloc a un **aldehid**, –CHO. Si l'oxidació continua l'aldehid s'oxida a **àcid carboxílic**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/alcohol-primario-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Alcohols secundaris

En el cas dels **alcohols secundaris**, l'oxidació del carboni produeix un carbonil no terminal, conegut com a grup **cetona**. La cetona no pot continuar oxidant-se:

{{< figure library="true" src="quimica-organica-2Bach-quimica/alcohol-secundario.svg" lightbox="false" width="100%" theme="light" >}}

#### Alcohols terciaris

L'oxidació es produiria per pèrdua d'un hidrogen unit al carboni que s'oxidaria, per la qual cosa aquest ha de tenir disponible almenys un. Per aquest motiu, els **alcohols terciaris** no donen reaccions d'oxidació:

{{< figure library="true" src="quimica-organica-2Bach-quimica/alcohol-terciario.svg" lightbox="false" width="50%" theme="light" >}}

#### Reaccions de combustió

La reacció de combustió d'un compost orgànic en atmosfera rica en oxigen dona lloc als òxids dels seus elements. Si el compost és un hidrocarbur, oxigenat o no, els productes de la reacció són diòxid de carboni i aigua, que són els òxids del carboni i de l'hidrogen:

<div align="center">
C<sub>3</sub>H<sub>8</sub>O + 9/2&thinsp;O<sub>2</sub> &xrarr; 3&thinsp;CO<sub>3</sub> + 4&thinsp;H<sub>2</sub>O
</div>

Les reaccions de combustió són reaccions exotèrmiques. Si el compost té altres elements, com a N o S, també habituals en química orgànica, s'obtenen els òxids d'aquests.

### Reaccions de condensació i hidròlisi

#### Reacció d'esterificació i saponificació

L'**esterificació** és la reacció de **condensació** entre un àcid carboxílic i un alcohol, per pèrdua d'aigua, produint-se un èster:

{{< figure library="true" src="quimica-organica-2Bach-quimica/esterificacio.svg" lightbox="false" width="100%" theme="light" >}}

La **saponificació** és la reacció inversa a l'esterificació. La hidròlisi de l'èster dona l'àcid carboxílic i l'alcohol. S'entén per saponificació la reacció que produeix la formació de sabons. La principal causa és la dissociació dels greixos en un medi alcalí, separant-se glicerina i àcids grassos. Aquests últims s'associen immediatament amb els àlcalis constituint les sals sòdiques dels àcids grassos: el sabó.

#### Reacció de condensació d'alcohols

La formació de l'èter competeix amb l'eliminació d'aigua per a donar l'alquè. Les condicions de reacció determinaran quina és la reacció majoritària:

{{< figure library="true" src="quimica-organica-2Bach-quimica/condensacion-alcoholes-cat.svg" lightbox="false" width="100%" theme="light" >}}

#### Reacció de condensació per a donar amides

L'amoníac, les amines primàries i les amines secundàries reaccionen amb els àcids carboxílics per a donar amides. És una reacció de condensació en la qual s'allibera aigua. La seva inversa, la reacció d'hidròlisi, permet obtenir l'amina i l'àcid corresponent:

{{< figure library="true" src="quimica-organica-2Bach-quimica/condensacion-amidas-cat.svg" lightbox="false" width="100%" theme="light" >}}

## Polímers

Els [**polímers**](https://es.wikipedia.org/wiki/Polímero) (també anomenats macromolècules) són molècules molt grans formades a partir de la repetició d'unitats més petites anomenades [**monòmers**](https://es.wikipedia.org/wiki/Monómero).

{{% callout note %}}
A [aquesta **entrada** del **blog**](https://fisiquimicamente.com/blog/2022/12/01/tipos-de-plasticos/) (en espanyol) analitzem les principals **propietats** i **usos** dels sis **plàstics bàsics** o de **consum** ([***commodity plastics***](https://en.wikipedia.org/wiki/Commodity_plastics) en anglès).

Aprèn a **anomenar polímers** amb [aquesta **guia breu** de la **IUPAC**](https://iupac.org/wp-content/uploads/2022/02/Brief-Guide-to-Polymer-Nomenclature_Espanol-20220214.pdf).
{{% /callout %}}

### Classificació dels polímers

Existeixen polímers **naturals** com els polisacàrids, les proteïnes o el cautxú (natural) i altres [**sintètics**](https://es.wikipedia.org/wiki/polímeros_sintéticos): polietilè (PE), niló, polièster, PVC, PET...

Respecte al comportament a temperatures elevades, els polímers es classifiquen com a termoplàstics o termoestables. Els [**termoplàstics**](https://es.wikipedia.org/wiki/termoplástico) (PET, PE, PVC, PP, PG...) s'estoven quan s'escalfen i s'endureixen quan es refreden. Els [**termoestables**](https://es.wikipedia.org/wiki/plástico_termoestable) (Poliuretà (PUR)) una vegada s'han endurit no s'estoven per escalfament.

Respecte als tipus d'unitats repetitives, si totes són del mateix tipus és un **homopolímer** i si conté dos o més tipus d'unitats repetitives és un [**copolímer**](https://es.wikipedia.org/wiki/copolímero).

### Síntesi de polímers

Els polímers es poden sintetitzar per dues rutes: reacció [**en cadena**](https://es.wikipedia.org/wiki/polimerización_en_cadena) (polimerització per addició) o reacció [**per etapes**](https://es.wikipedia.org/wiki/polimerización_por_etapas) (polimerització per condensació).

#### Polímers per creixement en cadena o polímers d'addició

S'obtenen a partir de la formació de llargues cadenes de monòmers que s'uneixen unes a altres sense que existeixi pèrdua de cap molècula en el procés:

- Iniciació
  {{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-iniciacion.svg" lightbox="false" width="100%" theme="light" >}}
- Creixement
  {{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-crecimiento.svg" lightbox="false" width="100%" theme="light" >}}
- Terminació
  {{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-terminacion.svg" lightbox="false" width="100%" theme="light" >}}

La reacció global quedaria com:

{{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-global.svg" lightbox="false" width="100%" theme="light" >}}

#### Polímers per creixement per etapes o polímers de condensació

S'obtenen per reacció entre dos monòmers, cadascun dels quals té, almenys, dos grups funcionals, amb eliminació d'alguna molècula (per exemple aigua). Els polièsters són polímers de condensació que s'obtenen a partir de diols i àcids dicarboxílics, que donen lloc als grups èster característics del polímer:

{{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-etapas-cat.svg" lightbox="false" width="100%" theme="light" >}}

---
title: Enllaç químic
url: "/recursos-fisica-quimica/apunts/2batx/quimica/enllac-quimic"
subtitle: Enllaç iònic, covalent i metàl·lic. Geometria molecular. Forces intermoleculars
summary: "Enllaç iònic, covalent i metàl·lic. Geometria molecular. Forces intermoleculars."
breadcrumbs: ["recursos-fisica-quimica","apunts","2batx","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
- alba-lopez-valenzuela
- eduard-cremades
tags:
- apunts
- 2n Batx
- enllaç-químic
categories:
- Química
weight: 3

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imatge de [**Tomislav Jakupec**](https://pixabay.com/es/users/tommyvideo-3092371/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: file-download
  name: Pòster
  url: enllac-quimic-poster.pdf
- icon_pack: fas
  icon: pencil-ruler
  name: Exercicis
  url: enllac-quimic-exercicis.pdf
  
slides: enllac-quimic-2Batx-quimica
---

{{% toc %}}

## Regla de l'octet

> La **configuració més estable** per a qualsevol àtom és comptar amb **vuit electrons** a la **capa exterior**.

Els elements tendiran a **unir-se** per a completar la seva capa exterior, **intercanviant** (cedint/captant $\rightarrow$ enllaç **iònic**) o **compartint electrons** (enllaç **covalent**), i així **guanyar estabilitat**.

## Paràmetres moleculars

{{< figure library="true" src="enlace-quimico-2Bach-quimica/parametros-moleculares-cat.svg" title="Traduïda i adaptada de https://ch301.cm.utexas.edu/section2.php?target=atomic/bonding/covalent-bonding.html." lightbox="false" width="100%" >}}

### Energia d'enllaç

És una mesura de la **fortalesa** d'un **enllaç químic**.

### Longitud d'enllaç

Distància mitjana entre els nuclis de dos àtoms enllaçats.

### Angle d'enllaç

Angle format per tres àtoms enllaçats consecutivament.

### Polaritat d'enllaç

És la separació de càrregues elèctriques al llarg d'un enllaç, donant lloc a un **moment dipolar elèctric**. La diferència d'electronegativitat, $\Delta \chi$, entre els àtoms d'un enllaç determina la seva polaritat:

{{< figure library="true" src="enlace-quimico-2Bach-quimica/polaridad-cat.svg" title="Imatges adaptades de https://www.chegg.com/learn/chemistry/introduction-to-chemistry/bond-polarity-and-dipole-moments." lightbox="false" width="100%" >}}

Una molècula serà polar si el moment dipolar total (suma vectorial) és diferent de zero.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/BF3.png" title="La molècula de BF<sub>3</sub> té tres enllaços polars però a causa de la seva geometria trigonal plana el moment dipolar resultant és nul.  Font: https://commons.wikimedia.org/wiki/File:Boron-trifluoride-elpot-3D-vdW.png." lightbox="true" >}}

Estudia la **polaritat** de **molècules** amb aquesta excel·lent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Enllaç iònic

És un enllaç que involucra l'**atracció electroestàtica** entre **ions** de **signe oposat**. L'**enllaç iònic** sol donar-se **entre metalls** (tendeixen a cedir electrons, convertint-se en cations) **i no metalls** (tendeixen a captar electrons, convertint-se en anions). Els compostos iònics formen **xarxes cristal·lines** compactes i **neutres** amb diferents geometries segons els ions que les formen.

{{< figure library="true" src="enlace-quimico-4ESO/enlace-ionico.svg" title="Representació de la **unió iònica** entre el **liti** (Li) i el **fluor** (F) per formar el **fluorur de liti** (LiF). El liti cedeix fàcilment el seu únic electró de valència a un àtom de fluor, que accepta l'electró donat.<br>Adaptada de https://commons.wikimedia.org/wiki/File:Ionic_bonding.svg." lightbox="false" width="100%" >}}

{{< figure library="true" src="enlace-quimico-4ESO/Lewis-LiF.svg" lightbox="false" width="100%" >}}

### Energia de xarxa $U_\mathrm R$

És l'**energia alliberada** al **formar-se** la **xarxa** a partir del seus ions en estat gasós.

#### Cicle de Born-Haber

Formació d'un compuest iònic a partir dels seus elements.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/Born-Haber-cat.svg" title="Cicle de Born-Haber per la formació del fluorur de liti (LiF). Basada en https://commons.wikimedia.org/wiki/File:Born-haber_cycle_LiF.svg." lightbox="false" width="100%" >}}

#### Equació de Born-Landé

Permet calcular l'**energia de xarxa** $U_\mathrm R$:

$$
U_\mathrm R = -\frac{N_\mathrm A M z^+ z^- e^2}{4\pi\epsilon_0 r_0}\left(1-\frac{1}{n}\right),
$$

on $N_\mathrm A = 6.022\times 10^{23}\thinspace\mathrm{mol^{-1}}$ és la constant d'Avogadro; $M$ és la constant de Madelung, relacionada amb la geometria del cristall; $z^+$ y $z^-$ són els números de càrrega del catió i de l'anió, respectivament; $e = 1.6\times 10^{-19}\thinspace\mathrm{C}$ és la càrrega elemental, $\epsilon_0 = 8.85\times 10^{-12}\thinspace\mathrm{C^2N^{-1}m^{-2}}$ és la *permitivitat elèctrica al buit; $r_0$ és la distància a l'ió més pròxim; i $5<n<12$ és l'exponent de Born (experimental).

Es comprova que el mòdul de l'**energia** de **xarxa** és:

- **Directament proporcional** al **producte** de les **càrregues** dels ions.
- **Inversament proporcional** a la **distància** interiònica.

### Propietats de les substàncies iòniques

- A causa de les **intenses forces electroestàtiques** entre els ions, solen tenir **temperatures** de **fusió** i **ebullició** molt **elevades**, per la qual cosa la majoria són **sòlids cristal·lins** a **temperatura ambient**.

{{< figure library="true" src="elementos-compuestos-2ESO-3ESO/cristal.svg" title="**Cristall** de **clorur de sodi** (sal comuna, NaCl). <br> 🔵 $\rightarrow$ sodi (Na); 🟢 $\rightarrow$ clor (Cl). <br> https://freesvg.org/sodium-chloride-crystal" lightbox="false" width="100%" >}}

- Davant **cops**, l'**alineament** dels **ions** positius i negatius **pot perdre's**, per la qual cosa són molt **fràgils**, encara que també molt **durs**.
- **Fosos** o en **dissolució**, **condueixen** el **corrent elèctric**.

## Enllaç metàl·lic

L'**enllaç metàl·lic** és l'enllaç químic que **manté units** als **àtoms** d'un **metall** entre si. Sorgeix de l'**atracció electroestàtica** entre els **electrons** de conducció i els **cations** metàl·lics.

### Model del gas electrònic

{{< figure library="true" src="enlace-quimico-4ESO/enlace-metalico.svg" title="Model del **gas electrònic**, amb els **cations** en **posicions fixes** i els **electrons movent-se lliurement** en un ***núvol***. Font: https://commons.wikimedia.org/wiki/File:Metalic_bond_model.svg." lightbox="false" width="100%" >}}

### Teoria de bandes

{{< figure library="true" src="enlace-quimico-2Bach-quimica/teoria-bandas-cat.svg" title="Comparació de l'**estructura** de **bandes** electròniques d'un **metall**, un **semiconductor** i un **aïllant**. Traduïda i adaptada de https://commons.wikimedia.org/wiki/File:Isolator-metal.svg." lightbox="false" width="100%" >}}

{{% callout note %}}
Pots aprendre més sobre la **teoria** de **bandes** i com aquesta explica la **conductivitat elèctrica** en [aquest excel·lent article](https://culturacientifica.com/2020/04/21/la-teoria-de-bandas-explica-la-conduccion-electrica/).
{{% /callout %}}

També et recomano donar un cop d'ull a aquest magnífic **vídeo** de [Quantum Made Simple](https://toutestquantique.fr/en/) (en anglès) on expliquen la **diferència** entre un **metall** i un **aïllant**:

{{< youtube LNsSS6Id6bM >}}

### Propietats de les substàncies metàl·liques

- **Aparença brillant**.
- Són **bons conductors** de la **calor** i de l'**electricitat**.
- Formen **aliatges** amb altres metalls.
- **Tendeixen** a **cedir** (perdre) **electrons** en reaccionar amb altres substàncies.
- La majoria són **sòlids** a temperatura ambient (**Hg** és💧).

## Enllaç covalent

És un enllaç químic que implica la **compartició** de **parells** d'**electrons** entre àtoms. L'**enllaç covalent** sol donar-se **entre no metalls** (tendència a captar electrons).

{{< figure library="true" src="enlace-quimico-4ESO/enlace-covalente.svg" title="Representació de la **unió covalent** entre dos àtoms de **fluor** (F) per a formar F<sub>2</sub>, amb un parell d'electrons compartits. Adaptada de https://commons.wikimedia.org/wiki/File:Covalent_bond_fluorine.svg." lightbox="false" width="100%" >}}

### Estructures de Lewis

Es tracta de **diagrames** que **mostren** la **unió** entre els **àtoms** d'una **molècula** i els **parells solitaris** d'**electrons** que poden existir a la molècula.

Les estructures de Lewis mostren cada àtom i la seva posició en l'estructura de la molècula usant el seu símbol químic. Es dibuixen línies entre els àtoms que estan units entre si (es poden utilitzar parells de punts en lloc de línies). L'excés d'electrons que formen parells solitaris es representen com a parells de punts, i es col·loquen al costat dels àtoms.

{{< spoiler text="Punxa aquí per a veure com construir <strong>estructures</strong> de <strong>Lewis</strong> <strong>pas a pas</strong>" >}}

1. Dibuixar la molècula de la forma més simètrica possible, col·locant els elements més electronegatius en els extrems.
2. Envoltar cada element del nombre d'electrons de valència ($N_\mathrm v$).
3. Calcular el nombre màxim d'electrons de valència complint la regla de l'octet ($N_\mathrm{máx}$).
4. Calcular el nombre d'electrons enllaçants ($N_\mathrm{e} = N_\mathrm{máx} - N_\mathrm{v}$).
5. Calcular el nombre d'electrons no enllaçants ($N_\mathrm{ne} = N_\mathrm{v} - N_\mathrm{e}$).

{{< /spoiler >}}

#### Exemples

##### Aigua (H<sub>2</sub>O)

{{< figure library="true" src="enlace-quimico-4ESO/Lewis-H2O.svg" lightbox="false" width="100%" >}}

##### Oxigen (O<sub>2</sub>)

{{< figure library="true" src="enlace-quimico-4ESO/Lewis-O2.svg" lightbox="false" width="100%" >}}

##### Diòxid de carboni (CO<sub>2</sub>)

{{< figure library="true" src="enlace-quimico-4ESO/Lewis-CO2.svg" lightbox="false" width="100%" >}}

### Enllaç covalent coordinat o datiu

Es tracta d'enllaços en els quals un sol element (***donador***) aporta el parell d'electrons, el qual és acceptat per un altre element que té un orbital buit (***acceptor***). És un enllaç molt comú[^1] i clau per a entendre el concepte **àcid-base de Lewis**, en el qual l'àcid és l'espècie que accepta el parell d'electrons (acceptor) i la base l'espècie que ho cedeix (donador).

[^1]: A tots els **aquo-complexes metàl·lics**, [M(H<sub>2</sub>O)<sub>*n*</sub>]<sup>*m*+</sup>, l'enllaç entre l'aigua i el catió metàl·lic es descriu com un **enllaç covalent coordinat**.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/enlace-coordinado-cat.svg" title="El catió H<sup>+</sup> no té electrons per a compartir, per la qual cosa el N i l'O aporten el parell d'electrons. L'enllaç covalent coordinat o datiu es representa amb una fletxa &#8594;, que va des de l'àtom donador a l'àtom acceptor." lightbox="false" width="100%" >}}

### Ressonància

La **ressonància** és una manera de descriure l'enllaç en unes certes molècules mitjançant la combinació de diverses **estructures ressonants** el conjunt de les quals es coneix com un **híbrid** de **ressonància**. És especialment útil per a descriure els **electrons deslocalitzats** (enllaços $=$ en diferents posicions) en unes certes molècules o ions poliatòmics.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/resonancia-cat.svg" title="Basada en https://commons.wikimedia.org/wiki/File:Benzene_delocalization.svg." lightbox="false" width="100%" >}}		

### Propietats de les substàncies covalents moleculars

{{< figure library="true" src="elementos-compuestos-2ESO-3ESO/molecula.svg" title="Representació esquemàtica en 3D d'una **molècula** de **sacarosa**. <br> ⚫ $\rightarrow$ carboni (C); 🔴 $\rightarrow$ oxigen (O); ⚪ $\rightarrow$ hidrogen (H). <br>Font: https://commons.wikimedia.org/wiki/File:Sucrose_molecule.svg" lightbox="false" width="100%" >}}

- A causa de les **febles interaccions entre molècules** covalents, solen tenir **temperatures** de **fusió** i **ebullició baixes** (molts compostos covalents són **líquids** o **gasos** a **temperatura ambient**).
- En estat sòlid són compostos **tous** i **fràgils**.
- Són **mals conductors** de la **calor** i de l'**electricitat**.

### Propietats de les substàncies covalents cristal·lines

Les **substàncies covalents cristal·lines** contenen un gran nombre d'**àtoms neutres** units entre si mitjançant **enllaços covalents**, formant **làmines bidimensionals**, com el grafit o el grafè, o **estructures tridimensionals**, com el  💎 diamant o el quars.

{{< figure library="true" src="enlace-quimico-4ESO/grafito-grafeno.svg" title="Estructura cristal·lina del **grafit**, format per capes de **grafè** (àtoms de **carboni**, C, units mitjançant **enllaços covalents** en una xarxa hexagonal).<br>Fuente: https://commons.wikimedia.org/wiki/File:Graphit_gitter.svg." lightbox="false" width="100%" >}}

{{< figure library="true" src="enlace-quimico-4ESO/diamante.svg" title="Estructura tetraèdrica del 💎 **diamant**, format per àtoms de **carboni** (C) units mitjançant **enllaços covalents**. Adaptada de https://www.physics-in-a-nutshell.com/article/13/diamond-structure." lightbox="false" width="100%" >}}

- A causa dels **forts enllaços covalents** entre els àtoms, solen tenir **temperatures** de **fusió** i **ebullició altes**, per la qual cosa són **sòlids** a **temperatura ambient**.
- Són substàncies molt **dures** encara que **fràgils**.
- Solen ser **mals conductors** (no vaig agafar el grafit o el grafè).

## Geometria molecular

### TRPECV

La **Teoria de Repulsió de Parells d'Electrons de la Capa de València** (TRPECV) es basa en el fet que, com els electrons de valència es repel·leixen els uns als altres, aquests tendeixen a adoptar una disposició espacial que minimitza aquesta repulsió.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/TRPECV-cat.svg" title="Imatges adaptades de https://www.sigmaaldrich.com/technical-documents/articles/chemistry/vsepr-chart-valence-shell-electron-pair-repulsion-theory.html." lightbox="false" width="100%" >}}

#### Exemples

##### Lineal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-lineal-cat.svg" lightbox="false" width="100%" >}}

##### Trigonal plana

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-trigonal-plana-cat.svg" lightbox="false" width="100%" >}}

##### Angular

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-angular-cat.svg" lightbox="false" width="100%" >}}

##### Tetraèdrica

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-tetraedrica-cat.svg" lightbox="false" width="100%" >}}

##### Piramidal trigonal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-piramidal-trigonal-cat.svg" lightbox="false" width="100%" >}}

##### Bipiramidal trigonal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-bipiramidal-trigonal-cat.svg" lightbox="false" width="100%" >}}

##### Balancí

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-balancin-cat.svg" lightbox="false" width="100%" >}}

##### Forma de T

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-forma-T-cat.svg" lightbox="false" width="100%" >}}

##### Octaèdrica

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-octaedrica-cat.svg" lightbox="false" width="100%" >}}

##### Piramidal quadrada

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-piramidal-cuadrada-cat.svg" lightbox="false" width="100%" >}}

##### Quadrada plana

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-cuadrada-plana-cat.svg" lightbox="false" width="100%" >}}

### TEV

La **Teoria de l'Enllaç de València** (TEV) es basa en el fet que els e<sup>&ndash;</sup> compartits es troben en una zona de **solapament orbital**:

{{< figure library="true" src="enlace-quimico-2Bach-quimica/TEV-cat.svg" title="També es pot donar un solapament frontal entre orbitals s, p i qualsevol de les seves hibridacions (sp, sp<sup>2</sup> i sp<sup>3</sup>). Imatges adaptades de https://www.coursehero.com/sg/general-chemistry/valence-bond-theory/." lightbox="false" width="100%" >}}

#### Promoció electrònica

Consisteix a aportar energia extra als electrons aparellats de la capa de valència perquè ocupin un orbital de major energia (s'*excitin*) i permetin a l'àtom tenir més electrons solitaris amb els quals formar els enllaços que necessiti.

{{< spoiler text="Punxa aquí per a veure detalladament com aplicar la TEV" >}}

1. Es tria l'àtom central.
2. S'estableix el nombre d'enllaços que ha de formar, mitjançant l'estructura de Lewis corresponent.
3. Es comprova si el nombre d'electrons desaparellats disponibles és suficient per a formar els enllaços necessaris. Si no és així, es promocionen els electrons a altres orbitals.
4. Es combinen els orbitals atòmics que formen enllaços $\sigma$ (solapament frontal) i els que posseeixen parells d'electrons apariats per a determinar la hibridació que tindrà lloc en l'àtom central.
5. Se solapen els orbitals híbrids amb els orbitals dels altres àtoms amb els quals forma enllaç, tenint en compte la TRPECV per a determinar la geometria final de la molècula.

{{< /spoiler >}}

#### Hibridació

La **hibridació** consisteix a combinar orbitals atòmics de l'àtom central per a formar **orbitals híbrids** energèticament iguals i orientats en la direcció de l'enllaç.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-cat.svg" title="Imatges preses de https://www.coursehero.com/sg/general-chemistry/types-of-hybrid-orbitals/." lightbox="false" width="100%" >}}

#### Exemples

##### sp: BeCl<sub>2</sub>

El beril·li no té electrons desaparellats pel que es produeix promoció electrònica i hibridació perquè pugui formar dos enllaços Be&mdash;Cl. Cadascun d'aquests **híbrids sp** se solapa frontalment amb un orbital p del clor, formant dos enllaços sigma:

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-BeCl2.svg" lightbox="false" width="100%" >}}

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-BeCl2.svg" title="Adaptada de http://www.organicmystery.com/MolecularStructure/Hybridisation.php." lightbox="false" width="100%" >}}

##### sp<sup>2</sup>: BF<sub>3</sub>

El bor només té un electró desaparellat però necessita tres, per la qual cosa es produeix promoció electrònica i hibridació perquè pugui formar tres enllaços B&mdash;F. Cadascun d'aquests **híbrids sp<sup>2</sup>** se solapa frontalment amb un orbital p del fluor, formant tres enllaços sigma:

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-BF3.svg" lightbox="false" width="100%" >}}

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-BF3.svg" title="Adaptada de http://www.organicmystery.com/MolecularStructure/Hybridisation.php." lightbox="false" width="100%" >}}

##### sp<sup>3</sup>: CH<sub>4</sub>

El carboni només té dos electrons desaparellats però necessita quatre, per la qual cosa es produeix promoció electrònica i hibridació perquè pugui formar quatre enllaços C&mdash;H. Cadascun d'aquests **híbrids sp<sup>3</sup>** se solapa frontalment amb un orbital s de l'hidrogen, formant quatre enllaços sigma:

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-CH4.svg" lightbox="false" width="100%" >}}

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-CH4.svg" title="Adaptada de http://www.organicmystery.com/MolecularStructure/Hybridisation.php." lightbox="false" width="100%" >}}

##### Enllaços múltiples

###### Etè (CH<sub>2</sub>=CH<sub>2</sub>)

Cada carboni necessita formar un enllaç doble (amb l'altre C) i dos enllaços simples (amb H), per la qual cosa es necessita promoció electrònica i una hibridació sp<sup>2</sup> per a tenir també un orbital pur p amb el qual formar un enllaç $\pi$ (solapament lateral).

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-eteno.svg" lightbox="false" width="100%" >}}

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-eteno-cat.svg" title="Cada orbital sp<sup>2</sup> del carboni solapa frontalment ($\sigma$) amb dos orbitals s de l'H i l'orbital sp<sup>2</sup> de l'altre carboni. A més a més, els orbitals p<sub><em>z</em></sub> de cada carboni solapan lateralment entre si ($\pi$) per formar el doble enllaç C=C. Adaptada de https://chem.libretexts.org/Courses/Colorado_State_University/Chem_476%3A_Physical_Chemistry_II_(Levinger)/Chapters/10%3A_Bonding_in_Polyatomic_Molecules/10.5%3A_The_Pi-Electron_Approximation_of_Conjugated_Hydrocarbons." lightbox="false" width="100%" >}}

###### Acetilè (CH&equiv;CH)

Cada carboni necessita formar un enllaç triple (amb l'altre C) i un enllaç simple (amb H), per la qual cosa es necessita promoció electrònica i una hibridació sp per a tenir dos orbitals purs p amb els quals formar dos enllaços $\pi$ (solapament lateral).

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-acetileno.svg" lightbox="false" width="100%" >}}

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-acetileno-cat.svg" title="L'enllaç triple de l'acetilè consisteix en un enllaç $\sigma$ (sp&ndash;s) i dos enllaços $\pi$ (p&ndash;p). Adaptada de https://www.coursehero.com/sg/organic-chemistry/structure-of-alkynes/." lightbox="false" width="100%" >}}

### Simulació

Explora les **formes moleculars** mitjançant la **construcció** de **molècules** en **3D** amb la següent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Forces intermoleculars

Les **forces intermoleculars** són les **forces** que existeixen **entre** les **molècules**, incloent les forces d'atracció o repulsió que actuen entre les molècules i altres tipus de partícules veïnes, per exemple, àtoms o ions. Les forces intermoleculars són **febles en relació amb** les **forces intramoleculars** (les que mantenen unida una molècula).

### Forces de van der Waals

{{< figure library="true" src="enlace-quimico-4ESO/fuerzas-intermoleculares-cat.svg" title="**Atracció intermolecular** entre molècules de **clorur d'hidrogen**, HCl. Traduïda i adaptada de https://www.coursehero.com/sg/organic-chemistry/intermolecular-forces/." lightbox="false" width="100%" >}}

Es poden donar entre **molècules polars** (dipol-dipol, més forts com més gran sigui la polaritat de la molècula), i **apolars** (anomenades **forces** de **dispersió** de ***London**, més fortes com més grans i massives són les molècules involucrades).

### Enllaços d'hidrogen

Són les **forces** intermoleculars més **intenses**. Es donen entre molècules que contenen àtoms d'**hidrogen** units a àtoms de **nitrogen** (N), **oxigen** (O) o **fluor** (F).

{{< figure library="true" src="enlace-quimico-4ESO/enlaces-hidrogeno-cat.svg" title="**Enllaços d'hidrogen** entre àtoms d'H i O en molècules d'**aigua** (H<sub>2</sub>O). Traduïda i adaptada de https://www.coursehero.com/sg/organic-chemistry/intermolecular-forces/." lightbox="false" width="100%" >}}

Els **enllaços** d'**hidrogen** són **responsables** de:

- Que l'**aigua** (H<sub>2</sub>O) tingui una **temperatura** d'**ebullició anormalment alta** (100 &deg;C a pressió atmosfèrica).
- L'**estructura** de **proteïnes** i **àcids nucleics**, com la **doble hèlix** de l'**ADN** 🧬.
- L'**estructura** de **polímers**.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/comparacion-fortaleza-enlaces-cat.svg" lightbox="false" width="100%" >}}
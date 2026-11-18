---
title: Enllaç químic
summary: "Enllaç iònic, covalent i metàl·lic. Geometria molecular. Forces intermoleculars."
url: "/recursos-fisica-quimica/apunts/2batx/quimica/enllac-quimic/diapositives"

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

# Enllaç químic

- [Regla de l'octet](#/1)
- [Paràmetres moleculars](#/2)
- [Enllaç iònic](#/3)
- [Enllaç metàl·lic](#/4)
- [Enllaç covalent](#/5)
- [Geometria molecular](#/6)
- [Forces intermoleculars](#/7)

Descarrega aquestes diapositives en format PDF [📥](#/PDF)

</section>

---

{{% section %}}

## Regla de l'octet

> La **configuració més estable** per a qualsevol àtom és comptar amb **vuit electrons** a la **capa exterior**.

(continua cap avall)

👇

---

### Excepcions

Existeixen **tres excepcions generals** a la regla de l'octet:

1. Molècules amb un nombre imparell d'electrons, com el nitrogen a NO o NO<sub>2</sub> (7&thinsp;e<sup>&ndash;</sup>).
2. Molècules en què un o més àtoms posseeixen més de vuit electrons, com el fòsfor a PCl<sub>5</sub> (10&thinsp;e<sup>&ndash;</sup>) o el sofre a SF<sub>6</sub> (12&thinsp;e<sup>&ndash;</sup>).
3. Molècules en què un o més àtoms posseeixen menys de vuit electrons, com el hidrogen a H<sub>2</sub> (2&thinsp;e<sup>&ndash;</sup>), el beril·li a BeH<sub>2</sub> (4&thinsp;e<sup>&ndash;</sup>) o el bor a BH<sub>3</sub>, BF<sub>3</sub> o BCl<sub>3</sub> (6&thinsp;e<sup>&ndash;</sup>).

---

Els elements tendiran a **unir-se** per a completar la seva capa exterior, **intercanviant** (cedint/captant $\rightarrow$ enllaç **iònic**) o **compartint electrons** (enllaç **covalent**), i així **guanyar estabilitat**.

{{% /section %}}

---

{{% section %}}

## Paràmetres moleculars

- [Energia d'enllaç](#/2/1)
- [Longitud d'enllaç](#/2/2)
- [Angle d'enllaç](#/2/3)
- [Polaritat d'enllaç](#/2/4)

---

### Energia d'enllaç
És una mesura de la **fortalesa** d'un **enllaç químic**.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/parametros-moleculares-cat.svg" lightbox="false" width="85%" >}}

---

### Longitud d'enllaç
Distància mitjana entre els nuclis de dos àtoms enllaçats.


---

### Angle d'enllaç
Angle format per tres àtoms enllaçats consecutivament.

---

### Polaritat d'enllaç
És la separació de càrregues elèctriques al llarg d'un enllaç, donant lloc a un **moment dipolar elèctric**. La diferència d'electronegativitat, $\Delta \chi$, entre els àtoms d'un enllaç determina la seva polaritat:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/polaridad-cat.svg" lightbox="false" width="100%" >}}

---

Una molècula serà polar si el moment dipolar total (suma vectorial) és diferent de zero.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/BF3.png" title="La molècula de BF<sub>3</sub> té tres enllaços polars però a causa de la seva geometria trigonal plana el moment dipolar resultant és nul." lightbox="false" width="50%" >}}

---

Estudia la **polaritat** de **molècules** amb aquesta **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Enllaç iònic
És un enllaç que involucra l'**atracció electroestàtica** entre **ions** de **signe oposat**.

(continua cap avall)

👇

---

L'**enllaç iònic** sol donar-se **entre metalls** (tendeixen a cedir electrons, convertint-se en cations) **i no metalls** (tendeixen a captar electrons, convertint-se en anions).

---

Els compostos iònics formen **xarxes cristal·lines** compactes i **neutres** amb diferents geometries segons els ions que les formen.

---

{{< figure library="true" src="enlace-quimico-4ESO/enlace-ionico.svg" title="Representació de la **unió iònica** entre el **liti** (Li) i el **fluor** (F) per formar el **fluorur de liti** (LiF). El liti cedeix fàcilment el seu únic electró de valència a un àtom de fluor, que accepta l'electró donat." lightbox="false" width="90%" >}}

---

{{< figure library="true" src="enlace-quimico-4ESO/Lewis-LiF.svg" lightbox="false" width="100%" >}}

---

### Energia de xarxa $U_\mathrm R$

És l'**energia alliberada** al **formar-se** la **xarxa** a partir del seus ions en estat gasós.

---

#### Cicle de Born-Haber
{{< figure library="true" src="enlace-quimico-2Bach-quimica/Born-Haber-cat.svg" lightbox="false" width="85%" >}}

---

#### Equació de Born-Landé
Permet calcular l'**energia de xarxa** $U_\mathrm R$:

$$
U_\mathrm R = -\frac{N_\mathrm A M z^+ z^- e^2}{4\pi\epsilon_0 r_0}\left(1-\frac{1}{n}\right),
$$

on $N_\mathrm A = 6.022\times 10^{23}\,\mathrm{mol^{-1}}$ és la constant d'Avogadro; $M$ és la constant de Madelung, relacionada amb la geometria del cristall; $z^+$ i $z^-$ són els números de càrrega del catió i de l'anió, respectivament;

---

$e = 1.6\times 10^{-19}\,\mathrm{C}$ és la càrrega elemental, $\epsilon_0 = 8.85\times 10^{-12}\,\mathrm{C^2\,N^{-1}\,m^{-2}}$ és la permitivitat elèctrica al buit; $r_0$ és la distància a l'ió més pròxim; i $5 < n < 12$ és l'exponent de Born (experimental).

---

Es comprova que el mòdul de l'**energia** de **xarxa** és:

- **Directament proporcional** al **producte** de les **càrregues** dels ions.
- **Inversament proporcional** a la **distància** interiònica i, per tant, al **mida** dels **ions**.

---

### Propietats de les substàncies iòniques
- A causa de les **intenses forces electroestàtiques** entre els ions, solen tenir **temperatures** de **fusió** i **ebullició** molt **elevades**, per la qual cosa la majoria són **sòlids cristal·lins** a **temperatura ambient**.

---

{{< figure library="true" src="elementos-compuestos-2ESO-3ESO/cristal.svg" title="**Cristall** de **clorur de sodi** (sal comuna, NaCl). <br> 🔵 $\rightarrow$ sodi (Na); 🟢 $\rightarrow$ clor (Cl)." lightbox="false" width="60%" >}}

---

- Davant **cops**, l'**alineament** dels **ions** positius i negatius **pot perdre's**, per la qual cosa són molt **fràgils**, encara que també molt **durs**.
- **Fosos** o en **dissolució**, **condueixen** el **corrent elèctric**.

{{% /section %}}

---

{{% section %}}

## Enllaç metàl·lic
L'**enllaç metàl·lic** és l'enllaç químic que **manté units** als **àtoms** d'un **metall** entre si.

(continua cap avall)

👇

---

Sorgeix de l'**atracció electroestàtica** entre els **electrons** de conducció i els **cations** metàl·lics.

---

### Model del gas electrònic

{{< figure library="true" src="enlace-quimico-4ESO/enlace-metalico.svg" title="Model del **gas electrònic**, amb els **cations** en **posicions fixes** i els **electrons movent-se lliurement** en un ***núvol***." lightbox="false" width="50%" >}}

---

### Teoria de bandes

{{< figure library="true" src="enlace-quimico-2Bach-quimica/teoria-bandas-cat.svg" lightbox="false" width="100%" >}}

---

> Pots aprendre més sobre la **teoria** de **bandes** i com aquesta explica la **conductivitat elèctrica** en [aquest excel·lent article](https://culturacientifica.com/2020/04/21/la-teoria-de-bandas-explica-la-conduccion-electrica/).

---

També et recomano donar un cop d'ull a aquest magnífic **vídeo** de [Quantum Made Simple](https://toutestquantique.fr/en/) (en anglès):

{{< youtube LNsSS6Id6bM >}}

---

### Propietats de les substàncies metàl·liques
- **Aparença brillant**.
- Són **bons conductors** de la **calor** i de l'**electricitat**.
- Formen **aliatges** amb altres metalls.
- **Tendeixen** a **cedir** (perdre) **electrons** en reaccionar amb altres substàncies.
- La majoria són **sòlids** a temperatura ambient (**Hg** és 💧).

{{% /section %}}

---

{{% section %}}

## Enllaç covalent
És un enllaç químic que implica la **compartició** de **parells** d'**electrons** entre àtoms.

(continua cap avall)

👇

---

L'**enllaç covalent** sol donar-se **entre no metalls** (tendència a captar electrons).

---

{{< figure library="true" src="enlace-quimico-4ESO/enlace-covalente.svg" title="Representació de la **unió covalent** entre dos àtoms de **fluor** (F) per a formar F<sub>2</sub>, amb un parell d'electrons compartits." lightbox="false" width="100%" >}}

---

#### Estructures de Lewis

Es tracta de **diagrames** que **mostren** la **unió** entre els **àtoms** d'una **molècula** i els **parells solitaris** d'**electrons** que poden existir a la molècula.

---

Les estructures de Lewis mostren cada àtom i la seva posició en l'estructura de la molècula usant el seu símbol químic.

---

Es dibuixen línies entre els àtoms que estan units entre si (es poden utilitzar parells de punts en lloc de línies).

---

L'excés d'electrons que formen parells solitaris es representen com a parells de punts, i es col·loquen al costat dels àtoms.

---

#### Exemples

---

##### Aigua (H<sub>2</sub>O)
{{< figure library="true" src="enlace-quimico-4ESO/Lewis-H2O.svg" lightbox="false" width="100%" >}}

---

##### Oxigen (O<sub>2</sub>)
{{< figure library="true" src="enlace-quimico-4ESO/Lewis-O2.svg" lightbox="false" width="100%" >}}

---

##### Diòxid de carboni (CO<sub>2</sub>)
{{< figure library="true" src="enlace-quimico-4ESO/Lewis-CO2.svg" lightbox="false" width="100%" >}}

---

### Enllaç covalent coordinat o datiu

Es tracta d'enllaços en els quals un sol element (***donador***) aporta el parell d'electrons, el qual és acceptat per un altre element que té un orbital buit (***acceptor***).

---

És un enllaç molt comú i clau per a entendre el concepte **àcid-base de Lewis**, en el qual l'àcid és l'espècie que accepta el parell d'electrons (acceptor) i la base l'espècie que ho cedeix (donador).

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/enlace-coordinado-cat.svg" lightbox="false" width="100%" >}}

---

### Ressonància
La **ressonància** és una manera de descriure l'enllaç en unes certes molècules mitjançant la combinació de diverses **estructures ressonants** el conjunt de les quals es coneix com un **híbrid** de **ressonància**.

---

És especialment útil per a descriure els **electrons deslocalitzats** (enllaços $=$ en diferents posicions) en unes certes molècules o ions poliatòmics.

{{< figure library="true" src="enlace-quimico-2Bach-quimica/resonancia-cat.svg" lightbox="false" width="100%" >}}

---

### Propietats de les substàncies covalents moleculars
{{< figure library="true" src="elementos-compuestos-2ESO-3ESO/molecula.svg" title="⚫ $\rightarrow$ C; 🔴 $\rightarrow$ O; ⚪ $\rightarrow$ H." lightbox="false" width="60%" >}}

---

- A causa de les **febles interaccions entre molècules** covalents, solen tenir **temperatures** de **fusió** i **ebullició baixes** (molts compostos covalents són **líquids** o **gasos** a **temperatura ambient**).
- En estat sòlid són compostos **tous** i **fràgils**.
- Són **mals conductors** de la **calor** i de l'**electricitat**.

---

### Propietats de les substàncies covalents cristal·lines
Les **substàncies covalents cristal·lines** contenen un gran nombre d'**àtoms neutres** units entre si mitjançant **enllaços covalents**, formant **làmines bidimensionals**, com el grafit o el grafè, o **estructures tridimensionals**, com el 💎 diamant o el quars.

---

#### Grafit/grafè

{{< figure library="true" src="enlace-quimico-4ESO/grafito-grafeno.svg" lightbox="false" width="50%" >}}

---

#### Diamant

{{< figure library="true" src="enlace-quimico-4ESO/diamante.svg" lightbox="false" width="75%" >}}

---

- A causa dels **forts enllaços covalents** entre els àtoms, solen tenir **temperatures** de **fusió** i **ebullició altes**, per la qual cosa són **sòlids** a **temperatura ambient**.
- Són substàncies molt **dures** encara que **fràgils**.
- Solen ser **mals conductors** (no així el grafit o el grafè).

{{% /section %}}

---

{{% section %}}

## Geometria molecular

- [TRPECV](#/6/1)
- [TEV](#/6/15)
- [Simulació](#/6/40)

(continua cap avall)

👇

---

### TRPECV
La **Teoria de Repulsió de Parells d'Electrons de la Capa de València** (TRPECV) es basa en el fet que, com els electrons de valència es repel·leixen els uns als altres, aquests tendeixen a adoptar una disposició espacial que minimitza aquesta repulsió.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/TRPECV-cat.svg" lightbox="false" width="90%" >}}

---

#### Exemples

---

##### Lineal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-lineal-cat.svg" lightbox="false" width="75%" >}}

---

##### Trigonal plana

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-trigonal-plana-cat.svg" lightbox="false" width="100%" >}}

---

##### Angular

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-angular-cat.svg" lightbox="false" width="100%" >}}

---

##### Tetraèdrica

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-tetraedrica-cat.svg" lightbox="false" width="100%" >}}

---

##### Piramidal trigonal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-piramidal-trigonal-cat.svg" lightbox="false" width="100%" >}}

---

##### Bipiramidal trigonal

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-bipiramidal-trigonal-cat.svg" lightbox="false" width="100%" >}}

---

##### Balancí

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-balancin-cat.svg" lightbox="false" width="100%" >}}

---

##### Forma de T

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-forma-T-cat.svg" lightbox="false" width="100%" >}}

---

##### Octaèdrica

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-octaedrica-cat.svg" lightbox="false" width="100%" >}}

---

##### Piramidal quadrada

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-piramidal-cuadrada-cat.svg" lightbox="false" width="100%" >}}

---

##### Quadrada plana

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-TRPECV-cuadrada-plana-cat.svg" lightbox="false" width="100%" >}}

---

### TEV
La **Teoria de l'Enllaç de València** (TEV) es basa en el fet que els e<sup>&ndash;</sup> compartits es troben en una zona de **solapament orbital**:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/TEV-cat.svg" lightbox="false" width="100%" >}}

---

#### Promoció electrònica

Consisteix a aportar energia extra als electrons aparellats de la capa de valència perquè ocupin un orbital de major energia (s'*excitin*) i permetin a l'àtom tenir més electrons solitaris amb els quals formar els enllaços que necessiti.

---

#### Hibridació

La **hibridació** consisteix a combinar orbitals atòmics de l'àtom central per a formar **orbitals híbrids** energèticament iguals i orientats en la direcció de l'enllaç.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-cat.svg" lightbox="false" width="100%" >}}

---

#### Exemples

---

##### sp: BeCl<sub>2</sub>

El beril·li no té electrons desaparellats pel que es produeix promoció electrònica i hibridació perquè pugui formar dos enllaços Be&mdash;Cl.

---

Cadascun d'aquests **híbrids sp** se solapa frontalment amb un orbital p del clor, formant dos enllaços sigma:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-BeCl2.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-BeCl2.svg" lightbox="false" width="100%" >}}

---

##### sp<sup>2</sup>: BF<sub>3</sub>

El bor només té un electró desaparellat però necessita tres, per la qual cosa es produeix promoció electrònica i hibridació perquè pugui formar tres enllaços B&mdash;F.

---

Cadascun d'aquests **híbrids sp<sup>2</sup>** se solapa frontalment amb un orbital p del fluor, formant tres enllaços sigma:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-BF3.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-BF3.svg" lightbox="false" width="85%" >}}

---

##### sp<sup>3</sup>: CH<sub>4</sub>

El carboni només té dos electrons desaparellats però necessita quatre, per la qual cosa es produeix promoció electrònica i hibridació perquè pugui formar quatre enllaços C&mdash;H.

---

Cadascun d'aquests **híbrids sp<sup>3</sup>** se solapa frontalment amb un orbital s de l'hidrogen, formant quatre enllaços sigma:

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-CH4.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-CH4.svg" lightbox="false" width="60%" >}}

---

##### Enllaços múltiples

---

###### Etè (CH<sub>2</sub>=CH<sub>2</sub>)

Cada carboni necessita formar un enllaç doble (amb l'altre C) i dos enllaços simples (amb H), per la qual cosa es necessita promoció electrònica i una hibridació sp<sup>2</sup> per a tenir també un orbital pur p amb el qual formar un enllaç $\pi$ (solapament lateral).

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-eteno.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-eteno-cat.svg" title="Cada orbital sp<sup>2</sup> del carboni solapa frontalment ($\sigma$) amb dos orbitals s de l'H i l'orbital sp<sup>2</sup> de l'altre carboni. A més a més, els orbitals p<sub><em>z</em></sub> de cada carboni solapan lateralment entre si ($\pi$) per formar el doble enllaç C=C." lightbox="false" width="100%" >}}

---

###### Acetilè (CH&equiv;CH)

Cada carboni necessita formar un enllaç triple (amb l'altre C) i un enllaç simple (amb H), per la qual cosa es necessita promoció electrònica i una hibridació sp per a tenir dos orbitals purs p amb els quals formar dos enllaços $\pi$ (solapament lateral).

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/ejemplos-hibridacion-acetileno.svg" lightbox="false" width="100%" >}}

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/hibridacion-acetileno-cat.svg" title="L'enllaç triple de l'acetilè consisteix en un enllaç $\sigma$ (sp&ndash;s) i dos enllaços $\pi$ (p&ndash;p)." lightbox="false" width="100%" >}}

---

### Simulació

Explora les **formes moleculars** mitjançant la **construcció** de **molècules** en **3D** amb la següent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_es.html" width="100%" height="450" scrolling="no" allowfullscreen></iframe>

{{% /section %}}

---

{{% section %}}

## Forces intermoleculars
Les **forces intermoleculars** són les **forces** que existeixen **entre** les **molècules**, incloent les forces d'atracció o repulsió que actuen entre les molècules i altres tipus de partícules veïnes, per exemple, àtoms o ions.

(continua cap avall)

👇

---

Les forces intermoleculars són **febles en relació amb** les **forces intramoleculars** (les que mantenen unida una molècula).

---

### Forces de van der Waals

{{< figure library="true" src="enlace-quimico-4ESO/fuerzas-intermoleculares-cat.svg" title="**Atracció intermolecular** entre molècules de **clorur d'hidrogen**, HCl." lightbox="false" width="100%" >}}

---

Es poden donar entre **molècules polars** (dipol-dipol, més fortes com més gran sigui la polaritat de la molècula), i **apolars** (anomenades **forces** de **dispersió** de **London**, més fortes com més grans i massives són les molècules involucrades).

---

### Enllaços d'hidrogen
Són les **forces** intermoleculars més **intenses**. Es donen entre molècules que contenen àtoms d'**hidrogen** units a àtoms de **nitrogen** (N), **oxigen** (O) o **fluor** (F).

---

{{< figure library="true" src="enlace-quimico-4ESO/enlaces-hidrogeno-cat.svg" title="**Enllaços d'hidrogen** entre àtoms d'H i O en molècules d'**aigua** (H<sub>2</sub>O)." lightbox="false" width="60%" >}}

---

Els **enllaços** d'**hidrogen** són **responsables** de:

- Que l'**aigua** (H<sub>2</sub>O) tingui una **temperatura** d'**ebullició anormalment alta** (100&thinsp;&deg;C a pressió atmosfèrica).
- L'**estructura** de **proteïnes** i **àcids nucleics**, com la **doble hèlix** de l'**ADN** 🧬.
- L'**estructura** de **polímers**.

---

{{< figure library="true" src="enlace-quimico-2Bach-quimica/comparacion-fortaleza-enlaces-cat.svg" lightbox="false" width="100%" >}}

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
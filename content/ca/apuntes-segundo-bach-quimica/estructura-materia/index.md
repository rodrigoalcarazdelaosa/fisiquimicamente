---
title: Estructura de la matèria
url: "/recursos-fisica-quimica/apunts/2batx/quimica/estructura-materia"
subtitle: Mecànica quàntica, orbitals atòmics, estructura electrònica i partícules subatòmiques
summary: "Mecànica quàntica, orbitals atòmics, estructura electrònica i partícules subatòmiques."
breadcrumbs: ["recursos-fisica-quimica","apunts","2batx","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
- alba-lopez-valenzuela
- eduard-cremades
tags:
- apunts
- 2n Batx
- estructura-atòmica
categories:
- Física
- Química
weight: 1

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imatge de [**LoveYouAll**](https://pixabay.com/es/users/loveyouall-3307648/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:  
- icon_pack: fas
  icon: file-download
  name: Pòster
  url: estructura-materia-poster.pdf
- icon_pack: fas
  icon: pencil-ruler
  name: Exercicis
  url: estructura-materia-exercicis.pdf

slides: estructura-materia-2Batx-quimica

math: true
---

{{% toc %}}

## Models atòmics
### Dalton
Basant-se en les idees de **Demòcrit**, John **Dalton** proposà aquest model a principis del segle XIX, considerant l'**àtom** com a una **esfera massissa indivisible**.
 
{{< figure library="true" src="estructura-materia-2Bach-quimica/Dalton.svg" title="L'**àtom** de **Dalton** és una **esfera massissa indivisible**." lightbox="false" width="100%" >}}

Els **descobriments** de la **radioactivitat natural** per **Becquerel** (1896) i l'**electró** per **Thomson** (1897) van fer necessària la revisió d'aquest model.

### Thomson

També conegut com el model del *pastís de panses*, va ser proposat el 1904 per J.J. **Thomson**, el qual considera que l'**àtom** està format per un ***núvol*** esfèric amb **càrrega positiva** on es troben **incrustats** els **electrons**, amb càrrega negativa, com les **panses** en un **pastís**.

{{< figure library="true" src="estructura-materia-2Bach-quimica/Thomson.svg" title="L'**àtom** de **Thomson** és un ***núvol*** esfèric amb **càrrega positiva** on es troben **incrustats** els **electrons**, amb càrrega negativa, com les **panses** en un **pastís**." lightbox="false" width="100%" >}}

Els **descobriments** del **nucli atòmic** i del **protó** per **Rutherford** (1911 i 1919, respectivament) van portar a la revisió d'aquest model.

### Rutherford
Gràcies al seu famós **experiment** de la **làmina** d'**or** (Au), Ernest **Rutherford** va proposar, el 1911, un model d'**àtom** format per un **nucli**, molt petit comparat amb el tamany de l'àtom, amb **càrrega positiva** i on es concentra quasi tota la seva **massa**. Els **electrons**, amb càrrega negativa, **giren al voltant** del **nucli** com ho fan els planetes al voltant del Sol.

{{< figure library="true" src="estructura-materia-2Bach-quimica/Rutherford.svg" title="L'**àtom** de **Rutherford** està format per un **nucli** amb **càrrega positiva** on es concentra la major part de la seva **massa**, i al voltant del qual giren els **electrons**, amb càrrega negativa." lightbox="false" width="100%" >}}

La **integritat** del **nucli**[^1] i la **inestabilitat** de les **òrbites electròniques**[^2] des d'un punt de vista clàssic van fer necessària la revisió d'aquest model.

[^1]: Si el nucli estigués format únicament per protons amb càrrega positiva, la seva repulsió faria que es *desintegrés*. El 1932 **Chadwick** descobreix el **neutró**, partícula sense càrrega encarregada de mantenir units entre si els protones mitjançant la **força nuclear forta**.

[^2]: La **física clàssica** prediu que una **partícula carregada i accelerada**, com seria el cas dels electrons *orbitant* al voltant del nucli, **emet radiació electromagnètica**, perdent energia i *col·lapsant* contra el nucli.

### Bohr

Proposat el **1913** per Niels **Bohr** per **explicar** l'**estabilitat** de la **matèria** i els **característics espectres** d'emissió i absorció dels **gasos**.

{{< figure library="true" src="modelos-atomicos-4ESO/espectro-H.svg" title="**Espectre** discret d'**emissió** de l'**hidrogen** (H)." lightbox="false" width="100%" >}}

{{< spoiler text="Vols veure com són els <strong>espectres d'emissió</strong> de la resta d'<strong>elements</strong> químics de la taula periòdica? Clica aquí" >}}

{{< figure library="true" src="modelos-atomicos-4ESO/tabla-periodica-espectros.jpg" title="https://www.fieldtestedsystems.com/ptable/" lightbox="true" >}}

{{< /spoiler >}}

{{% callout note %}}
Si vols aprendre més sobre **espectres atòmics** et recomanem llegir [aquesta interessant **entrada** del **blog**](https://fisiquimicamente.com/blog/2022/10/19/de-que-color-son-los-gases/) (en espanyol).
{{% /callout %}}

#### Postulats
Aquest model es basa en **tres postulats fonamentals**:

1. Els **electrons** descriuen **òrbites circulars** al voltant del nucli **sense irradiar energia**.
2. Només estan **permeses** aquelles **òrbites** en les quals l'electró té un **moment angular múltiple** enter de $\hbar = h/(2\pi)$.
3. L'**electró** només **emet** o **absorveix energia** en els **salts** d'una òrbita permesa a una altra, sent l'energia emesa/absorvida la diferència d'energia entre ambdós nivells.

{{< figure library="true" src="modelos-atomicos-4ESO/Bohr-cat.svg" title="Traduïda i adaptada de https://commons.wikimedia.org/wiki/File:Bohr_atom_model_English.svg." lightbox="false" width="100%" >}}

#### Equació de Rydberg

L'**equació** de **Rydberg** ens dona la **longitud** d'**ona** de les **línies espectrals** de molts elements químics. Pel cas de l'**hidrogen**:

$$
\frac{1}{\lambda} = R_\mathrm H\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

on $\lambda$ és la longitud d'ona de la radiació emesa en el buit, $R_\mathrm H = 1.097\times 10^7\thinspace \mathrm m^{-1}$ és la constant de Rydberg i $n_1$ i $n_2$ són els nombres quàntics principals de les òrbites involucrades en el salt (amb $n_2>n_1$).

Aquesta equació també ens permet calcular el **valor energètic** corresponent a una **transició electrònica** entre dos nivells donats, $\Delta E$:

$$
\Delta E = hcR_\mathrm H\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
$$

on $c = 299\thinspace 792\thinspace 458\thinspace \mathrm{m/s}$ és la velocitat de la llum en el buit.

{{< spoiler text="T'agraden les <strong>matemàtiques</strong> i vols saber més sobre el <strong>model</strong> de <strong>Bohr</strong>, arribant a <strong>deduir</strong> l'<strong>equació</strong> de <strong>Rydberg</strong>? Clica aquí" >}}

L'**equació** de **Rydberg** ens permet calcular el **valor energètic** corresponent a una **transició electrònica** entre dos nivells donats, $\Delta E$. Escriurem primer l'expressió que ens dona l'**energia total** d'un **electró** movent-se en una **òrbita** (suposadament circular):
$$
E = E_\mathrm c + E_\mathrm p,
$$
on $E_\mathrm c$ és l'energia cinètica i $E_\mathrm p$ l'energia potencial elèctrica de l'electró:
\begin{align*}
E_\mathrm c &= \frac{1}{2}mv^2 \\\\
E_\mathrm p &= -\frac{ke^2}{r}
\end{align*}

L'única força a la que està sotmesa l'electró és la **força** d'**atracció elèctrica** per part del nucli. Aquesta força, per tant, actuarà com una **força centrípeta**:

\begin{align}
\lvert F_\mathrm e\rvert &= \lvert f_\mathrm c\rvert \\\\
\frac{ke^2}{r^2} &= \frac{mv^2}{r} \rightarrow mv^2 = \frac{ke^2}{r}
\end{align}

I per tant podem escriure l'energia total com:

$$
E = \frac{1}{2}\frac{ke^2}{r}-\frac{ke^2}{r} = -\frac{1}{2}\frac{ke^2}{r}
$$

El **segon postulat** del **model** de **Bohr** imposa una condició per les **òrbites permeses**, cosa que significa que el **radi** de l'**òrbita**, $r$, està **quantitzat**:
\begin{align*}
mvr &= n\hbar \\\\
v &= \frac{n\hbar}{mr} \rightarrow v^2 = \frac{n^2\hbar^2}{m^2r^2}
\end{align*}

Substituint en l'anterior relació obtinguda a partir de la força centrípeta:

\begin{align*}
mv^2 &= \frac{ke^2}{r} \\\\
\frac{n^2\hbar^2}{mr^2} &= \frac{ke^2}{r} \rightarrow r = \frac{n^2\hbar^2}{ke^2m}
\end{align*}

Pel que podem escriure l'energia total com:
$$
E = -\frac{1}{2}\frac{ke^2}{r} = -\frac{k^2e^4m}{2n^2\hbar^2} = -\frac{\mathrm{cte}}{n^2},
$$

on $\mathrm{cte} = k^2e^4m/(2\hbar^2)$ pot escriure's com $\mathrm{cte} = hcR_\mathrm H$, sent $R_\mathrm H$ la **constant** de **Rydberg**. La **variació** d'**energia** entre dos nivells donats és per tant:

$$
\Delta E = hcR_\mathrm H\cdot\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right)
$$

{{< /spoiler >}}

## Orígens de la teoria quàntica

### Radiació de cos negre

És la **radiació electromagnètica reemesa** per un cos ideal que absorveix tota la radiació que incideix sobre ell (**cos negre**), estant en **equilibri** termodinàmic amb el seu **entorn**.

{{< figure library="true" src="estructura-materia-2Bach-quimica/cuerpo-negro.svg" title="Un cos negre és qualsevol objecte que absorveix tota la radiació electromagnètica que incideix sobre ell, reemetint-la. Font: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Map%3A_Physical_Chemistry_(McQuarrie_and_Simon)/01%3A_The_Dawn_of_the_Quantum_Theory/1.01%3A_Blackbody_Radiation_Cannot_Be_Explained_Classically." lightbox="false" width="100%" >}}

Té un espectre molt característic, inversament relacionat amb la intensitat, que depèn únicament de la temperatura del cos.

{{< figure library="true" src="estructura-materia-2Bach-quimica/radiacion-cuerpo-negro-cat.svg" title="Espectres de cossos negres a diferents temperatures, comparats amb la predicció clàssica (catàstrofe ultraviolada)." lightbox="false" width="100%" >}}

La **incapacitat** de la **teoria clàssica** vigent a l'hora d'explicar la forma d'aquest espectre es coneix com a **catàstrofe ultraviolada**.

**Max Planck** fou qui conseguí, el 1900, explicar l'espectre del cos negre, donant així **origen** a la **teoria quàntica**.

Aprèn més sobre la **radiació** de **cos negre** amb aquesta excel·lent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/blackbody-spectrum/latest/blackbody-spectrum_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Hipòtesi de Planck

> L'energia només pot ser emesa/absorvida en paquets discrets anomenats quants o **fotons**, múltiples de la freqüència $\nu$ de la radiació electromagnètica associada:
	$$
	E = h \nu,
	$$
	on $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ és la constant de Planck.

### Efecte fotoelèctric

L'**efecte fotoelèctric** consisteix en l'**emissió** de **(foto)electrons** quan radiació electromagnètica, com per exemple llum ultraviolada, incideix sobre un material, típicamente metàl·lic.

#### Característiques

- La **quantitat** de **fotoelectrons** emessos és directament **proporcional** a la **intensitat** de la **radiació** incident.
- L'**emissió** de **fotoelectrons** només es produeix quan la radiació incident té una **freqüència major o igual** que una certa freqüència mínima, anomenada **freqüència umbral** o **de tall**, $\nu_0$, que és característica de cada material.
- L'**energia cinètica** dels **fotoelectrons depèn** únicament de la **freqüència** de la **radiació** incident.
- L'**emissió** de **fotoelectrons** es realitza **instantàniament**, sense existir cap retràs entre l'absorció d'energia i l'emissió dels fotoelectrons.

{{< figure library="true" src="estructura-materia-2Bach-quimica/efecto-fotoelectrico.svg" title="Font: https://commons.wikimedia.org/wiki/File:Photoelectric_effect_in_a_solid_-_diagram.svg" lightbox="false" width="100%" >}}

\begin{align*}
	E &= \phi + E_\mathrm c \\\\
	h\nu &= h\nu_0 + E_\mathrm c \Rightarrow E_\mathrm c = h\left(\nu-\nu_0\right),
\end{align*}

on $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ és la constant de Planck, $\nu$ és la freqüència de la radiació incident, $\nu_0$ és la freqüència umbral (l'energia associada de la qual, $\phi = h \nu_0$ es denomina **funció** de **treball** o treball d'extracció) i $E_\mathrm c = h\left(\nu-\nu_0\right)$ és l'energia cinètica màxima dels fotoelectrons, emessos sempre que es compleixi $\nu \geq \nu_0$.

{{% callout note %}}
Si vols aprendre més sobre l'**efecte fotoelèctric** et recomano fer una ullada a [aquesta estupenda **simulació**](https://phet.colorado.edu/sims/cheerpj/photoelectric/latest/photoelectric.html?simulation=photoelectric&locale=es).
{{% /callout %}}

## Mecànica quàntica

### Dualitat ona-corpuscle
Consisteix en què el comportament dels **objectes quàntics** no pot ser descrit considerant a aquests com a partícules o ones, sinó que tenen una **naturalesa dual**.

{{< figure library="true" src="estructura-materia-2Bach-quimica/difraccion-electrones-cat.svg" title="**Electrons** mostrant un **comportament** clarament **ondulatori**, gràcies al famós **experiment** de la **doble escletxa**. Traduïda de https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Map%3A_Physical_Chemistry_(McQuarrie_and_Simon)/01%3A_The_Dawn_of_the_Quantum_Theory/1.07%3A_de_Broglie_Waves_can_be_Experimentally_Observed." lightbox="false" width="100%" >}}

A partir d'**experiments** de **difracció** d'**electrons**, **Louis de Broglie** va ser el primer que va proposar la següent **hipòtesi**:

> Tota partícula de massa $m$ movient-se a una velocitat $v$ té associada una ona (*de matèria*) la longitud d'ona de la qual, $\lambda$, ve donada per
	$$
	\lambda = \frac{h}{mv},
	$$
	sent $h = 6.626\times 10^{-34}\thinspace\mathrm{J\thinspace s}$ la constant de Planck.
	
En el següent **vídeo** de [Quantum Made Simple](https://toutestquantique.fr/en/) (en anglès) pots aprende més sobre la **dualitat ona-corpuscle**:

{{< youtube qCmtegdqOOA >}}	
	
### Principi d'incertesa de Heisenberg

> Existeixen certs parells de magnituds físiques (aquelles el producto del qual tenen dimensions de $\mathsf{M}\mathsf{L}^2\mathsf{T}^{-1}$), que no poden ser determinades simultàniament amb total exactitud, ja que el producte de les seves incerteses ha de ser major o igual que $h/(4\pi) = \hbar/2$.

**Exemples** de tals magnituds són:
	
\begin{align*}
	\text{Posició $x$ i moment lineal $p$: } & \Delta x \cdot \Delta p \geq \frac{\hbar}{2} \\\\
	\text{Energia $E$ i temps $t$: } & \Delta E \cdot \Delta t \geq \frac{\hbar}{2}
\end{align*}

on $\Delta$ denota la incertesa associada i $\hbar = h/(2\pi)$.

El **principi** d'**incertesa** de **Heisenberg** implica que, encara que s'especifiquin totes les condicions inicials, no és possible predir el valor d'una quantitat amb total certesa, donant així pas a una **interpretació probabilística** de la **mecànica quàntica**.

## Orbitals atòmics

Són **funcions matemàtiques** que **descriuen** la **mida**, la **forma** i l'**orientació** de les **regions** de l'**espai** on és **més probable trobar** l'**electró**.

{{< figure library="true" src="estructura-materia-2Bach-quimica/orbitales-atomicos-cat.svg" title="Orbitals s ($l=0$), p ($l=1$), d ($l=2$) i f ($l=3$). Adaptada de https://www.coursehero.com/sg/general-chemistry/quantum-theory/." lightbox="false" width="100%" >}}

### Nombres quàntics i la seva interpretació

Els **nombres quàntics** descriuen **valors** de **magnituds físiques** que es **conserven** en la dinàmica d'un sistema quàntic, tals como l'**energia** o el **moment angular**, les quals estan **quantitzades** i per tant prenen **valors discrets**.

Per **descriure** completament l'**estat quàntic** d'un **electró** en un àtom necessitem **quatre nombres quàntics**, els quals tenen un significat orbital concret.

#### Nombre quàntic principal $n$
Ens dona el **mida** i l'**energia** de l'**orbital**. Pren valors naturals ($1\leq n$), com per exemple $n = 1,2,3,\dots$

#### Nombre quàntic secundari $l$
Ens dona l'**energia** i **forma** de l'**orbital**. Pot prendre els següents valors:

$$
0\leq l\leq n-1
$$

de manera que, per exemple, per $n = 3$: $l=\\{0,1,2\\}$.

#### Nombre quàntic magnètic $m_l$

Ens dona l'**orientació** de l'**orbital**. Pot prendre els següents valors:

$$
-l\leq m_l\leq l
$$

de manera que, per exemple, per a $l = 2$: $m_l=\\{-2,-1,0,1,2\\}$.

#### Espín $m_s$

És el **moment angular intrínsec**. Pot prendre els següents valors:

$$
-s\leq m_s\leq s
$$

Per a un electró, $s=1/2$, pel que $m_s = \\{-1/2,1/2\\}$.

Coneix més sobre l'espín en aquest magnífic vídeo de [Quantum Made Simple](https://toutestquantique.fr/en/) (en anglès):

{{< youtube rg4Fnag4V-E >}}

## Estructura electrònica

### Principi d'exclusió de Pauli
> Dos o més electrons no poden tenir tots els seus nombres quàntics idèntics (ocupar el mateix estat quàntic) dintre del mateix sistema quàntic (àtom).

Gràcies a aquest principi podem determinar el **nombre màxim** d'**electrons** que ***caben*** en cada tipus d'**orbital**:

| Tipus d'orbital | s | p | d | f |
| :--- | :---: | :---: | :---: | :---: |
| **Nombre d'orbitals** | 1 | 3 | 5 | 7 |
| **Nombre màxim d'e**<sup>**&ndash;**</sup> | 2 | 6 | 10 | 14 |

### Ordre energètic creixent
La **configuració electrònica** és la **distribució** dels **electrons** d'un **àtom** en **orbitals atòmics** (s, p, d i f). El **diagrama** de **Möller** ens ajuda a saber en quin **ordre** han d'**omplir-se** els diferents **orbitals**, seguint les **fletxes** (ordre energètic creixent).

{{< figure library="true" src="estructura-materia-2Bach-quimica/orden-energetico-creciente-cat.png" lightbox="true" >}}

{{< figure library="true" src="sistema-periodico-4ESO/diagrama-Moller.svg" title="**Diagrama de Möller**. Adaptada de https://commons.wikimedia.org/wiki/File:Diagrama_de_Configuraci%C3%B3n_electr%C3%B3nica.svg." lightbox="false" width="100%" >}}

{{% callout note %}}
Els elements que apareixen [aquí](https://ptable.com/#Electrones/Expanded) en vermell són **excepcions**. Exemples notables són el **Cu** ([Ar] 4s<sup>1</sup> 3d<sup>10</sup>) i el **Cr** ([Ar] 4s<sup>1</sup> 3d<sup>5</sup>), pel fet que els **orbitals d** són **més estables** quan estan **plens** o **semiplens**, per raons de simetria.
{{% /callout %}}

### Regla de Hund de la màxima multiplicitat
> En omplir orbitals d'igual energia (per exemple els tres orbitals p) els electrons es distribueixen, sempre que sigui possible, amb els seus espins paral·lels, omplint els orbitals amb una multiplicitat major.

#### Exemples

Es mostren també els **nombres quàntics** de l'**últim electró**:

{{< figure library="true" src="estructura-materia-2Bach-quimica/regla-hund-cat.svg" lightbox="false" width="100%" >}}

{{% callout note %}}
La **configuració electrònica** del **nivell fonamental** compleix que 1) **minimitza** l'**energia** total dels **electrons**, (2) **obeeix** el **principi** d'**exclusió** de **Pauli**, (3) **obeeix** la **regla** d'**Hund** de la **màxima multiplicitat** i (4) **considera** la [**interacció** d'**intercanvi**](https://es.wikipedia.org/wiki/Interacción_de_canje).
{{% /callout %}}

## Partícules subatòmiques

Després dels descobriments de **Thomson**, **Rutherford** i **Chadwick** a principis del segle XX, semblava clar que l'àtomo estava format per **protons** i **neutrons** en el seu nucli i una escorça on estaven els **electrons**.

| Partícula | Massa/kg | Càrrega/C |
| --- | :---: | :---: |
| Protó | $1.673\times 10^{-27}$ | $1.602\times 10^{-19}$ |
| Neutró | $1.675\times 10^{-27}$ | $0$ |
| Electró | $9.109\times 10^{-31}$ | $-1.602\times 10^{-19}$ |
<td colspan=3>$m_\text{protó}\simeq m_\text{neutró}\sim 2000m_\text{electró}$<br>	
<td colspan=3>$q_\text{protó}=-q_\text{electró}$

### Model estàndard
És la teoria que **descriu tres de les quatre interaccions fonamentals** de la naturalesa conegudes (electromagnètica, nuclear forta i nuclear dèbil), a més a més de **classificar** totes les **partícules elementals** conegudes.

{{< figure library="true" src="estructura-materia-2Bach-quimica/modelo-estandar-cat.svg" title="Traduïda i adaptada de https://commons.wikimedia.org/wiki/File:Standard_Model_of_Elementary_Particles.svg." lightbox="false" width="100%" >}}
	
### Evolució de l'Univers

{{< figure library="true" src="estructura-materia-2Bach-quimica/evolucion-universo-cat.svg" title="Traduïda i adaptada de https://commons.wikimedia.org/wiki/File:History_of_the_Universe.svg. Icones dissenyades per [Freepik](https://www.freepik.com/) de https://www.flaticon.es/." lightbox="false" width="100%" >}}
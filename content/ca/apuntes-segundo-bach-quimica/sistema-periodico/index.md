---
title: Sistema periòdic
url: "/recursos-fisica-quimica/apunts/2batx/quimica/sistema-periodic"
subtitle: Taula periòdica, configuració electrònica i propietats periòdiques
summary: "Taula periòdica i configuració electrònica. Propietats periòdiques."
breadcrumbs: ["recursos-fisica-quimica","apunts","2batx","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
- alba-lopez-valenzuela
- eduard-cremades
tags:
- apunts
- 2n Batx
- taula-periòdica
categories:
- Química
weight: 2

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imatge de [**vubp**](https://pixabay.com/es/users/vubp-6000785/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:  
- icon_pack: fas
  icon:
  name: 📜 Pòster
  url: sistema-periodic-poster.pdf
- icon_pack: fas
  icon: pencil-ruler
  name: Exercicis
  url: sistema-periodic-exercicis.pdf

slides: sistema-periodic-2Batx-quimica

math: true
---

{{% toc %}}

## Taula periòdica i configuració electrònica

La **taula periòdica** dels **elements** organitza els **118 elements** coneguts en **7 períodes** (files) i **18 grups** (columnes), **ordenats** pel seu **nombre atòmic $Z$**.

{{% embed_pdf url="https://fisiquimicament.com/recursos-fisica-quimica/apunts/2batx/quimica/sistema-periodic/taula-periodica-elements.pdf" filename="taula-periodica-elements.pdf" %}}

{{% callout note %}}
Els elements que apareixen [aquí](https://ptable.com/#Electrones/Expanded) en vermell són **excepcions**. Exemples notables són el **Cu** ([Ar] 4s<sup>1</sup> 3d<sup>10</sup>) i el **Cr** ([Ar] 4s<sup>1</sup> 3d<sup>5</sup>), pel fet que els **orbitals d** són **més estables** quan estan **plens** o **semiplens**, per raons de simetria.
{{% /callout %}}

<!-- {{< figure library="true" src="sistema-periodico-2Bach-quimica/tabla-periodica-elementos.png" title="Descárgate esta **tabla periódica** en PDF de alta resolución [aquí](https://fisiquimicamente.com/recursos-fisica-quimica/apuntes/2bach/quimica/sistema-periodico/tabla-periodica-elementos.pdf) (cada **elemento** es un **enlace** que te lleva a su página de la **Wikipedia**)." lightbox="true" >}} -->

## Apantallament i càrrega nuclear efectiva

### Apantallament
L'**efecte pantalla** o **apantallament**, $a$, consisteix en l'**atenuació** de la **força** d'**atracció** del nucli sobre un electró, a causa de la **repulsió** d'altres **electrons**. Com més allunyat estigui un electró del nucli, més apantallat estarà.

{{< figure library="true" src="sistema-periodico-2Bach-quimica/apantallamiento-cat.svg" title="Traduïda de https://chem.libretexts.org/Courses/University_of_California_Davis/UCD_Chem_110A%3A_Physical_Chemistry__I/UCD_Chem_110A%3A_Physical_Chemistry_I_(Koski)/Text/07%3A_Approximation_Methods/7.2%3A_The_Variational_Method." lightbox="false" width="100%" >}}

### Càrrega nuclear efectiva
Es tracta de la **càrrega positiva neta**, $Z\_\mathrm{eff}$, que experimenta un electró degut a l'apantallament. La càrrega nuclear efectiva **augmenta** d'esquerra a dreta al llarg d'un **període** i és **constant** al llarg d'un **grup**.

Les [**regles** de **Slater**](https://es.wikipedia.org/wiki/Reglas_de_Slater) ens permeten calcular-la, d'acord amb l'expressió:

$$
Z_\mathrm{eff} = Z - a,
$$

on $Z$ és el nombre atòmic de l'element i $a$ l'apantallament patit per l'electró, tenint en compte que els electrons *de core* (interns) produeixen un major apantallament que els que es troben en el seu mateix nivell energètic:

\begin{align*}
\text{electrons de core (interns)} &\rightarrow a = 1 \\\\
\text{electrons de valència (mateix nivell)} &\rightarrow a < 1
\end{align*}

#### Exemple
Àtom de beril·li (<sub>4</sub>Be) $\rightarrow \mathrm{1s^2 2s^2}$

Cadascun dels dos electrons de valència pateix el següent apantallament:

Electrons de core $\mathrm{1s^2}$
: Cadascun d'ells produeix un apantallament màxim: $a=2$.

Electrons de valència $\mathrm{2s^1}$
: $a<1$.

Sent l'apantallament total $2<a<3$, pel que $1<Z_\mathrm{eff}<2$.

## Propietats periòdiques

{{< figure library="true" src="sistema-periodico-2Bach-quimica/variacion-propiedades-cat.svg" title="Basada en https://commons.wikimedia.org/wiki/File:Periodic_trends.svg. També pots veure com varien moltes propietats amb [aquesta **taula periòdica** en **3D**](https://periodic.donghwi.dev)." lightbox="false" width="100%" >}}

### Radi atòmic $r$
Definim el **radi atòmic** d'un element com la **meitat** de la **distància internuclear** mínima que presenta una **molècula diatòmica** d'aquest element en estat sòlid.

#### Al llarg d'un període
La **càrrega nuclear efectiva augmenta**, els **electrons** de valència estan **més atrets** pel nucli i, per tant, **disminueix** el **radi atòmic**.

####	Al llarg d'un grup
La **càrrega nuclear efectiva** és **constant** però **augmenta** el **nombre** de **capes**, per la qual cosa el **radi atòmic augmenta**.

#### Radi iònic
És el **radi** que presenta un **ió** monoatòmic en un **cristall iònic**.

##### Cations
Tenen un **menor número** d'**electrons**, pel que l'**apantallament** patit pels electrons de valència és **menor**, **augmentant** així la **càrrega nuclear efectiva** que experimenten i provocant que tinguin un **menor radi** atòmic comparant-los amb els seus elements neutres de referència.

##### Anions
Tenen un **major número** d'**electrons**, pel que l'**apantallament** patit pels electrons de valència és **major**, **disminuint** així la **càrrega nuclear efectiva** que experimenten i provocant que tinguin un **major radi** atòmic comparant-los amb els seus elements neutres de referència.

$$
r_\text{catió} < r_\text{neutre} < r_\text{anió}
$$

### Potencial d'ionització $E_\mathrm i$
Definim el **potencial** o **energia** d'**ionització** com la mínima **energia** que cal **proporcionar** a un àtom neutre, X, en estat gasós i en el seu estat electrònic fonamental, per a **arrencar** un **electró** de la seva escorça, formant un catió X<sup>+</sup>.

$$
\mathrm {X(g)} + E_\mathrm i \longrightarrow \mathrm{X^+(g)} + 1\thinspace\mathrm e^-
$$

### Afinitat electrònica $E_\mathrm{ea}$
L'**afinitat electrònica** és l'**energia alliberada** quan un àtom neutre, X, en estat gasós i en el seu estat fonamental, **capta** un **electró**, formant un anió X<sup>--</sup>.

$$
\mathrm{X(g)} + 1\thinspace\mathrm e^- \longrightarrow \mathrm{X^-(g)} + E_\mathrm{ea}
$$	

### Electronegativitat $\chi$
L'**electronegativitat** és una **mesura** de la **tendència** d'un àtom a **atreure** un parell d'**electrons** que comparteix amb un altre àtom al qual està unit mitjançant un enllaç químic. 

#### Al llarg d'un període
La **càrrega nuclear efectiva augmenta**, els **electrons** de valència són **més atrets** pel nucli i per tant **augmenten** l'**energia** d'**ionització**, l'**afinitat electrònica** i l'**electronegativitat**.

#### Al llarg d'un grup
La **càrrega nuclear efectiva** és **constant** però **augmenta** el **radi**, pel que els **electrons** són **menys atrets** i per tant **disminueixen** l'**energia** d'**ionització**, l'**afinitat electrònica** i l'**electronegativitat**.
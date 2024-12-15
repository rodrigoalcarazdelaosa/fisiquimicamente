---
title: Fluids
url: "/recursos-fisica-quimica/apunts/4eso/fluids"
subtitle: Concepte de pressió, principis de la hidrostàtica i física de l'atmosfera
summary: "<code style='color: #2E3440;background:#88C0D0'>NOVETAT</code><br>Concepte de pressió, principis de la hidrostàtica i física de l'atmosfera."
breadcrumbs: ["recursos-fisica-quimica","apunts","4teso"]
authors:
- rodrigo-alcaraz-de-la-osa
- eduard-cremades
- oscar-colomar
tags:
- apunts
- 4t ESO
- forces
- fluids
categories:
- Física
weight: 8

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imatge de [**PublicDomainPictures**](https://pixabay.com/es/users/publicdomainpictures-14/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Pòster
  url: fluids-poster.pdf

slides: fluids-4ESO

math: true
---

{{% toc %}}

## Concepte de pressió

La **pressió**, $p$, és una magnitud escalar que relaciona la força $F$ (exercida perpendicularment) amb la superfície $A$ sobre la que actua:

$$
p = \frac{F}{A}
$$

### Unitats
Al SI la pressió es mesura en $\mathrm{N/m^2}$, que rep el nom de **pascal** ($1\thinspace\mathrm{Pa} = 1\thinspace\mathrm{N/m^2}$). La següent taula[^1] mostra altres unitats de pressió i la seva equivalència entre elles:

[^1]: [https://en.wikipedia.org/wiki/Template:Pressure_Units](https://en.wikipedia.org/wiki/Template:Pressure_Units).

| | Pascal (Pa) | Atmosfera (atm) | Bar (bar) | Torr (Torr) |
| :---: | :---: | :---: | :---: | :---: |
| **1 Pa** | 1 | $9.8692\times 10^{-6}$ | $10^{-5}$ | $7.5006\times 10^{-3}$ |
| **1 atm** | 101325 | 1 | 1.01325 | 760 |
| **1 bar** | $10^5$ | 0.98692 | 1 | 750.06 |
| **1 Torr** | 133.322368421 | 1/760 | 0.001333224 | 1 |

## Principis de la hidrostàtica
### Principi de Pascal

> Tot canvi de pressió en un punt d'un fluid incompressible tancat en un recipient de parets indeformables es transmet amb igual intensitat en totes les direccions i en tots els punts del fluid.

Al següent vídeo del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) pots veure una demostració molt estesa del **principi de Pascal**, que "*consisteix a emplenar amb aigua un recipient esfèric buit al qual se li han practicat diversos orificis. Mitjançant una xeringa acoblada al dispositiu, se li aplica una sobrepressió al fluid que conté. Atès que la pressió es transmet per igual a tots els punts, l'aigua sortirà amb la mateixa velocitat per tots els forats de l'esfera*":

{{< youtube iPQ3WORwUYQ >}}

Les **aplicacions** del principi de Pascal inclouen les xeringues o les premses i elevadors hidràulics.

#### Elevador hidràulic
{{< figure library="true" src="fluidos-4ESO/elevador-hidraulico.svg" title="Una petita força F<sub>1</sub> produeix un augment de pressió F<sub>1</sub>/A<sub>1</sub> que és transmès pel líquid al pistó gran. Com els canvis de pressió són iguals en tot el fluid (**principi de Pascal**), les forces exercides en els pistons estan relacionades, sent F<sub>2</sub> > F<sub>1</sub>. Permet elevar grans pesos amb una força petita (semblant a la palanca). Adaptada de [https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg](https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg)." lightbox="false" width="100%" >}}

$$
p_1 = p_2 \Rightarrow \frac{F_1}{A_1} = \frac{F_2}{A_2} \Rightarrow F_1A_2 = F_2A_1
$$

##### Exemple
{{% callout example %}}
<br>

> Quin radi haurà de tenir la plataforma circular sobre la qual està *aparcat* un cotxe de massa $m = 1500\thinspace\mathrm{kg}$ si volem aixecar-ho estrenyent un dels pistons (també circular) d'un elevador hidràulic amb la nostra mà? <br>
(Suposar que la força màxima que podem fer és $F_1 = 500\thinspace\mathrm N$ i que el pistó que estrenyem té un radi $r_1 = 8\thinspace\mathrm{cm}$).

---

La força que hem de superar és el pes del cotxe:

$$
\begin{aligned}
F_2 = m\cdot g &= 1500\thinspace\mathrm{\cancel{kg}}\cdot 9.8\thinspace\mathrm{N/\cancel{kg}} \\
&= 14700\thinspace\mathrm{N}
\end{aligned}
$$

Aplicant el **principi de Pascal**:

$$
\begin{aligned}
p_1 &= p_2 \\
\frac{F_1}{A_1} &= \frac{F_2}{A_2} \\
\frac{F_1}{\cancel{\pi} r_1^2} &= \frac{F_2}{\cancel{\pi} r_2^2}
\end{aligned}
$$

on $F_1 = 500\thinspace\mathrm N$, $r_1 = 8\thinspace\mathrm{cm} = 0.08\thinspace\mathrm{m}$, $F_2 = 14700\thinspace\mathrm{N}$ i $r_2$ és el que ens demanen.

Aïllant $r_2$:

$$
\begin{aligned}
r_2 = r_1 \sqrt{\frac{F_2}{F_1}} &= 0.08\thinspace\mathrm{m}\sqrt{\frac{14700\thinspace\mathrm{\cancel{N}}}{500\thinspace\mathrm{\cancel{N}}}} \\
&= 0.434\thinspace\mathrm m = 43.4\thinspace\mathrm{cm}
\end{aligned}
$$

{{% /callout %}}

Al següent vídeo el [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) aconsegueix reproduir a petita escala el funcionament d'un elevador hidràulic mitjançant un esquemàtic model amb dues xeringues:

{{< vimeo 209053495 >}}

### Principi fonamental de la hidrostàtica

> La pressió exercida per un fluid de densitat $d$ en un punt situat a una profunditat $h$ de la superfície és numèricament igual a la pressió exercida per una columna de fluid d'altura $h$:

$$
p = \frac{F}{A} = \frac{m\cdot g}{A} = \frac{d\cdot V\cdot g}{A} = \frac{d\cdot \bcancel{A}\cdot h\cdot g}{\bcancel{A}} = d\cdot g \cdot h
$$

En el cas que la superfície estigui sotmesa a una pressió $p_0$ (pressió atmosfèrica per exemple), la pressió total a una profunditat $h$ serà:

$$
p = p_0 + dgh,
$$
que constitueix l'**equació fonamental de la hidrostàtica**.

#### Exemple
{{% callout example %}}
<br>

> Un rellotge té una etiqueta que posa 10 ATM. Fins a quina profunditat podrem submergir-ho a la mar?

{{< figure library="true" src="fluidos-4ESO/reloj.jpg" title="Foto adaptada de [Fabian Heimann](https://unsplash.com/@fabianheimann) en [Unsplash](https://unsplash.com)." lightbox="true" >}}

---

El primer que caldria dir és que ATM és el símbol de la unitat de pressió **atmosfera**, per la qual cosa caldria escriure'l com atm. Aquesta etiqueta significa que 10 atm és la pressió màxima que aguanta el rellotge.

Fent ús de l'equació fonamental de la hidrostàtica podem relacionar la pressió amb la profunditat:

$$
p = p_0 + dgh,
$$
on $p = 10\thinspace\mathrm{atm}$, $p_0 = 1\thinspace\mathrm{atm}$ és la pressió atmosfèrica a nivell de la mar, $d = 1025\thinspace\mathrm{kg/m^3}$ és la densitat mitjana de l'[aigua de la mar](https://ca.wikipedia.org/wiki/Aigua_de_mar), $g = 9.8\thinspace\mathrm{N/kg}$ és l'acceleració de la gravetat i $h$ és el que ens demanen.

Convertim totes les unitats al SI:
\begin{align*}
10\thinspace\mathrm{\cancel{atm}}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{\cancel{atm}}} = 1013250\thinspace\mathrm{Pa} \\\\
1\thinspace\mathrm{\cancel{atm}}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{\cancel{atm}}} = 101325\thinspace\mathrm{Pa}
\end{align*}

Aïllant $h$:

\begin{align*}
h = \frac{p-p_0}{dg} &= \frac{1013250\thinspace\mathrm{Pa}-101325\thinspace\mathrm{Pa}}{1025\thinspace\mathrm{kg/m^3}\cdot 9.8\thinspace\mathrm{N/kg}} \\\\
&= 90.8\thinspace\mathrm{m}
\end{align*}

El que confirma la *regla d'or* que ens diu que cada 10 m de profunditat la pressió augmenta en 1 atm aproximadament.

{{% /callout %}}

#### Paradoxa hidroestàtica. Vasos comunicants

{{< figure library="true" src="fluidos-4ESO/vasos-comunicantes.svg" title="La **paradoxa hidroestàtica** consisteix en el fet que la pressió que exerceix un fluid sobre el fons no depèn de la forma (ni de la quantitat de fluid per tant), sinó del nivell (altura). En recipients comunicats entre si (**vasos comunicants**), el fluid es distribueix fins a aconseguir el mateix nivell. Adaptada de [https://commons.wikimedia.org/wiki/File:Communicating_vessels.svg](https://commons.wikimedia.org/wiki/File:Communicating_vessels.svg)." lightbox="false" width="100%" >}}


#### Simulació
Pots explorar amb més detall la **relació** entre la **pressió**, la **densitat** i la **profunditat** amb la següent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

### Principi d'Arquimedes

> Tot cos submergit totalment o parcialment en un fluid experimenta una força d'empenta ($E$) vertical cap amunt que és igual al pes del fluid desallotjat:
\begin{align*}
E &= P_\text{fluid desallotjat} \\\\
&= m_\text{fluid desallotjat}\cdot g \\\\
&= d_\text{fluid}\cdot V_\text{desallotjat}\cdot g \\\\
&= d_\text{fluid}\cdot V_\text{submergit}\cdot g
\end{align*}

{{< figure library="true" src="fluidos-4ESO/flotacion-cat.svg" title="Traduïda i adaptada de [https://commons.wikimedia.org/wiki/File:Buoyancy.svg](https://commons.wikimedia.org/wiki/File:Buoyancy.svg)." lightbox="false" width="100%" >}}

#### Flotació

{{< figure library="true" src="fluidos-4ESO/casos-cat.svg" lightbox="false" width="100%" theme="light" >}}

El pes aparent d'un objecte pot calcular-se com:

$$
P_\text{aparent} = P_\text{real} - E
$$

#### Exemple
{{% callout example %}}
<br>

> El Pont Aven és el ferri que navega des de Santander fins a Plymouth. Té un *tonatge de pes mort* de 4803 tones. Si $d = 1025\thinspace\mathrm{kg/m^3}$ és la densitat mitjana de l'[aigua de la mar](https://ca.wikipedia.org/wiki/Aigua_de_mar), quin volum del vaixell es troba submergit?

{{< figure library="true" src="fluidos-4ESO/Pont-Aven.jpg" title="[https://www.brittanyferries.es/la-flota/ferries-desde-espana/pont-aven](https://www.brittanyferries.es/la-flota/ferries-desde-espana/pont-aven)" lightbox="true" >}}

---

Si el vaixell sura ha de complir-se que la força resultant neta sobre ell ha de ser zero, o el que és el mateix, l'embranzida ha d'igualar al pes. Aplicant el **principi d'Arquimedes**:

\begin{align*}
E &= P_\text{vaixell} \\\\
d_\text{fluid}\cdot V_\text{submergit}\cdot \cancel{g} &= m_\text{vaixell}\cdot \cancel{g}
\end{align*}

Passem la massa del vaixell a kg:
$$
4803\thinspace\mathrm{\cancel{t}}\cdot \frac{10^3\thinspace\mathrm{kg}}{1\thinspace\mathrm{\cancel{t}}} = 4.803\times 10^6\thinspace\mathrm{kg}
$$

Aïllem el $V_\text{submergit}$:

$$
\begin{aligned}
V_\text{submergit} = \frac{m_\text{vaixell}}{d_\text{fluid}} &= \frac{4.803\times 10^6\thinspace\mathrm{\cancel{kg}}}{1025\thinspace\mathrm{\cancel{kg}/m^3}} \\
&= 4685.85\thinspace\mathrm{m^3}
\end{aligned}
$$

{{% /callout %}}

#### Pràctica virtual
També pots veure aquest excel·lent vídeo del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) on ens ensenyen com realitzar una **pràctica virtual per a determinar densitats i forces d'empenyiment**:

{{< youtube o7v9Kbs6e8Y >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1mPRJVEBM1Fvsm_Q6m0xxHJ4By6MDpdzz/view) pots descarregar-te el **guió** de la **pràctica**.
{{% /callout %}}

## Física de l'atmosfera
### Pressió atmosfèrica
La **pressió atmosfèrica** és el pes de la columna d'aire que suporta un cos per unitat de superfície.

### Experiment de Torricelli
Gràcies a l'**experiment de Torricelli** es va mesurar per primera vegada la pressió atmosfèrica i es va produir per primera vegada a la història el buit.

{{< figure library="true" src="fluidos-4ESO/experimento-Torricelli.png" title="En posar un tub de 100 cm d'altura ple de mercuri (Hg) boca avall en una cubeta també plena de mercuri, s'observa que el Hg descendeix a aproximadament 76 cm, creant-se un buit en els 24 cm restants. Crèdits: [ClipArt ETC](https://etc.usf.edu/clipart/53700/53703/53703_torricellian.htm)." lightbox="true" >}}

\begin{align*}
p_\text{atm} = d_\text{Hg}\cdot g\cdot h &= 13\thinspace595.1\thinspace\mathrm{kg/m^3}\cdot 9.806\thinspace65\thinspace\mathrm{N/kg}\cdot 0.76\thinspace\mathrm{m} \\\\
&= 101\thinspace325\thinspace\mathrm{Pa} = 1\thinspace\mathrm{atm}
\end{align*}

El [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) ens mostra aquesta cèlebre experiència al següent vídeo:

{{< vimeo 110619312 >}}

Aprèn amb aquest 🧵 fil de Twitter com els [*sifons*](https://es.wikipedia.org/wiki/sifón) fan ús de la pressió atmosfèrica per a permetre'ns depassar un obstacle que supera el nivell del fluid, ajudant-nos a extreure un líquid d'un recipient no manipulable:

<div align="center">
{{< tweet user="fqsaja1" id="1641449863400550408" >}}
</div>

### Hemisferis de Magdeburg
Al 1654, el científic alemany i burgmestre de Magdeburg **Otto von Guericke**, va dissenyar un parell de grans hemisferis de coure, que s'ajustaven amb un anell d'acoblament formant una esfera. Després de segellar les vores amb greix i extreure l'aire amb una bomba de buit que ell mateix havia inventat, estirant amb dos grups de 8 cavalls van intentar separar tots dos hemisferis, sense èxit, demostrant així el poder de la pressió atmosfèrica.

{{< figure library="true" src="fluidos-4ESO/hemisferios-Magdeburgo.jpg" title="Versió acolorida del gravat de [Gaspar Schott](https://www.gabinetedelgrabado.com/galer%C3%ADa/la-revolución-de-las-ciencias-s-xvii/schott-1608-1666/) del experiment de l'Otto von Guericke dels hemisferis de Magdeburg. Crrèdits: [Science Source](https://www.sciencesource.com/archive/Magdeburg-Hemispheres--17th-Century-SS2636797.html)." lightbox="true" >}}

A aquest vídeo del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) pots ser testimoni de *la veritable lluita dels cavalls contra la pressió atmosfèrica*:

{{< vimeo 33482842 >}}

A aquest altre vídeo, també el [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) reprodueix altres extraordinàries demostracions que el mateix Otto Von Guericke recull en el seu llibre:

{{< vimeo 67896094 >}}

Finalment, el gran [*Bruce Yeany*](https://www.youtube.com/channel/ucnk3celpca0qizsuzgl09cw) ens mostra com la pressió atmosfèrica és capaç d'aixafar diferents recipients, a més d'un mètode alternatiu que no requereix una bomba de buit per a eliminar l'aire de l'interior de l'esfera:

{{< youtube lDUuB-Mdx0Q >}}

### Fenòmens meteorològics
Les **diferències** de *pressió** entre diferents punts de l'atmosfera són l'origen de nombrosos **fenòmens meteorològics**.

#### Vent
Els **vents** bufen des de regions amb major pressió cap a aquelles en les quals la pressió és menor (normalment a causa de diferències de temperatures).

#### Borrasques
Les **borrasques** o zones de **baixa pressió** són regions de l'atmosfera en les quals la pressió atmosfèrica és més baixa que la de l'aire circumdant, la qual cosa provoca que l'aire humit ascendeixi, refredant-se, condensant-se i originant **temps inestable**.

#### Anticiclons
Un **anticicló** és una zona atmosfèrica d'**alta pressió**, en la qual la pressió atmosfèrica és superior a la de l'aire circumdant, provocant que l'aire de les capes més altes descendeixi, originant **temps estable**.

{{< figure library="true" src="fluidos-4ESO/borrasca-anticiclon.jpg" title="[https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html](https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html)" lightbox="true" >}}

## Curtmetratge-documental
A aquest curtmetratge-documental del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) "se sotmet a diverses revisions el controvertit experiment conegut com a bota de Pascal", ideat pel mateix Pascal per a demostrar de manera definitiva el principi que porta el seu nom:

{{< youtube GuCGcOkoK5E >}}
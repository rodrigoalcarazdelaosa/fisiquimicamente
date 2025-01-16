---
title: Fluids
url: "/recursos-fisica-quimica/apunts/4eso/fluids/diapositives"
summary: "Concepte de pressió, principis de la hidrostàtica i física de l'atmosfera."

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

# Fluids

- [Concepte de pressió](#/1)
- [Principis de la hidrostàtica](#/2)
- [Física de l'atmosfera](#/3)
- [Curtmetratge-documental](#/4)

Descarrega aquestes diapositives en format PDF [📥](#/PDF)

</section>

---

{{% section %}}

## Concepte de pressió

La **pressió**, $p$, és una magnitud escalar que relaciona la força $F$ (exercida perpendicularment) amb la superfície $A$ sobre la que actua:

$$
p = \frac{F}{A}
$$

(continua cap avall)

👇

---

### Unitats
Al SI la pressió es mesura en $\mathrm{N/m^2}$, que rep el nom de **pascal** ($1\thinspace\mathrm{Pa} = 1\thinspace\mathrm{N/m^2}$). La següent taula mostra altres unitats de pressió i la seva equivalència entre elles:

[https://en.wikipedia.org/wiki/Template:Pressure_Units](https://en.wikipedia.org/wiki/Template:Pressure_Units)

{{% /section %}}

---

{{% section %}}

## Principis de la hidrostàtica

- [Principi de Pascal](#/2/1)
- [Principi fonamental de la hidrostàtica](#/2/9)
- [Principi d'Arquimedes](#/2/20)

(continua cap avall)

👇

---

### Principi de Pascal
> Tot canvi de pressió en un punt d'un fluid incompressible tancat en un recipient de parets indeformables es transmet amb igual intensitat en totes les direccions i en tots els punts del fluid.

---

{{< youtube iPQ3WORwUYQ >}}

---

#### Elevador hidràulic

{{< figure library="true" src="fluidos-4ESO/elevador-hidraulico.svg" lightbox="false" width="90%" >}}

$$
p_1 = p_2 \Rightarrow \frac{F_1}{A_1} = \frac{F_2}{A_2} \Rightarrow F_1A_2 = F_2A_1
$$

---

##### Exemple
<q>Quin radi haurà de tenir la plataforma circular sobre la qual està *aparcat* un cotxe de massa $m = 1500\thinspace\mathrm{kg}$ si volem aixecar-ho estrenyent un dels pistons (també circular) d'un elevador hidràulic amb la nostra mà? <br>
(Suposar que la força màxima que podem fer és $F_1 = 500\thinspace\mathrm N$ i que el pistó que estrenyem té un radi $r_1 = 8\thinspace\mathrm{cm}$).</q>

---

La força que hem de superar és el pes del cotxe:

\begin{align*}
F_2 = m\cdot g &= 1500\thinspace\mathrm{kg}\cdot 9.8\thinspace\mathrm{N/kg} \\\\
&= 14700\thinspace\mathrm{N}
\end{align*}

---

Aplicant el **principi de Pascal**:

$$
\begin{aligned}
p_1 &= p_2 \\
\frac{F_1}{A_1} &= \frac{F_2}{A_2} \\
\frac{F_1}{\cancel{\pi} r_1^2} &= \frac{F_2}{\cancel{\pi} r_2^2}
\end{aligned}
$$

on $F_1 = 500\thinspace\mathrm N$, $r_1 = 8\thinspace\mathrm{cm} = 0.08\thinspace\mathrm{m}$, $F_2 = 14700\thinspace\mathrm{N}$ i $r_2$ és el que ens demanen.

---

Aïllant $r_2$:

\begin{align*}
r_2 = r_1 \sqrt{\frac{F_2}{F_1}} &= 0.08\thinspace\mathrm{m}\sqrt{\frac{14700\thinspace\mathrm{N}}{500\thinspace\mathrm{N}}} \\\\
&= 0.434\thinspace\mathrm m = 43.4\thinspace\mathrm{cm}
\end{align*}

---

{{< vimeo 209053495 >}}

---

### Principi fonamental de la hidrostàtica

> La pressió exercida per un fluid de densitat $d$ en un punt situat a una profunditat $h$ de la superfície és numèricament igual a la pressió exercida per una columna de fluid d'altura $h$.

---

$$
p = \frac{F}{A} = \frac{m\cdot g}{A} = \frac{d\cdot V\cdot g}{A} = \frac{d\cdot A\cdot h\cdot g}{A} = d\cdot g \cdot h
$$

---

En el cas que la superfície estigui sotmesa a una pressió $p_0$ (pressió atmosfèrica per exemple), la pressió total a una profunditat $h$ serà:

$$
p = p_0 + dgh,
$$
que constitueix l'**equació fonamental de la hidrostàtica**.

---

#### Exemple
<q>Un rellotge té una etiqueta que posa 10 ATM. Fins a quina profunditat podrem submergir-ho a la mar?</q>

{{< figure library="true" src="fluidos-4ESO/reloj.jpg" lightbox="false" width="40%" >}}

---

El primer que caldria dir és que ATM és el símbol de la unitat de pressió **atmosfera**, per la qual cosa caldria escriure'l com atm.

Aquesta etiqueta significa que 10 atm és la pressió màxima que aguanta el rellotge.

---

Fent ús de l'equació fonamental de la hidrostàtica podem relacionar la pressió amb la profunditat:

$$
p = p_0 + dgh,
$$
on $p = 10\thinspace\mathrm{atm}$, $p_0 = 1\thinspace\mathrm{atm}$ és la pressió atmosfèrica a nivell de la mar, $d = 1025\thinspace\mathrm{kg/m^3}$ és la densitat mitjana de l'aigua de la mar, $g = 9.8\thinspace\mathrm{N/kg}$ és l'acceleració de la gravetat i $h$ és el que ens demanen.

---

Convertim totes les unitats al SI:
\begin{align*}
10\thinspace\mathrm{atm}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{atm}} = 1013250\thinspace\mathrm{Pa} \\\\
1\thinspace\mathrm{atm}& \cdot \frac{101325\thinspace\mathrm{Pa}}{1\thinspace\mathrm{atm}} = 101325\thinspace\mathrm{Pa}
\end{align*}

---

Aïllant $h$:

\begin{align*}
h = \frac{p-p_0}{dg} &= \frac{1013250\thinspace\mathrm{Pa}-101325\thinspace\mathrm{Pa}}{1025\thinspace\mathrm{kg/m^3}\cdot 9.8\thinspace\mathrm{N/kg}} \\\\
&= 90.8\thinspace\mathrm{m}
\end{align*}

El que confirma la *regla d'or* que ens diu que cada 10 m de profunditat la pressió augmenta en 1 atm aproximadament.

---

#### Paradoxa hidroestàtica

La **paradoxa hidroestàtica** consisteix en el fet que la pressió que exerceix un fluid sobre el fons no depèn de la forma (ni de la quantitat de fluid per tant), sinó del nivell (altura).

---

##### Vasos comunicants

En recipients comunicats entre si (**vasos comunicants**), el fluid es distribueix fins a aconseguir el mateix nivell.

{{< figure library="true" src="fluidos-4ESO/vasos-comunicantes.svg" lightbox="false" width="100%" >}}

---

#### Simulació
<iframe src="https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

---

### Principi d'Arquímedes

> Tot cos submergit totalment o parcialment en un fluid experimenta una força d'empenta ($E$) vertical cap amunt que és igual al pes del fluid desallotjat.

---

\begin{align*}
E &= P_\text{fluid desallotjat} \\\\
&= m_\text{fluid desallotjat}\cdot g \\\\
&= d_\text{fluid}\cdot V_\text{desallotjat}\cdot g \\\\
&= d_\text{fluid}\cdot V_\text{submergit}\cdot g
\end{align*}

---

{{< figure library="true" src="fluidos-4ESO/flotacion-cat.svg" lightbox="false" width="55%" >}}

---

#### Flotació

{{< figure library="true" src="fluidos-4ESO/casos-cat.svg" lightbox="false" width="100%" >}}

El pes aparent d'un objecte pot calcular-se com:

$$
P_\text{aparent} = P_\text{real} - E
$$

---

#### Exemple
<q>El Pont Aven és el ferri que navega des de Santander fins a Plymouth. Té un *tonatge de pes mort* de 4803 tones. Si $d = 1025\thinspace\mathrm{kg/m^3}$ és la densitat mitjana de l'aigua de la mar, quin volum del vaixell es troba submergit?</q>

{{< figure library="true" src="fluidos-4ESO/Pont-Aven.jpg" lightbox="false" width="50%" >}}

---

Si el vaixell sura ha de complir-se que la força resultant neta sobre ell ha de ser zero, o el que és el mateix, l'empenyment ha d'igualar al pes. Aplicant el **principi d'Arquimedes**:

\begin{align*}
E &= P_\text{vaixell} \\\\
d_\text{fluid}\cdot V_\text{submergit}\cdot g &= m_\text{vaixell}\cdot g
\end{align*}

---

Passem la massa del vaixell a kg:

$$
4803\thinspace\mathrm{t}\cdot \frac{10^3\thinspace\mathrm{kg}}{1\thinspace\mathrm{t}} = 4.803\times 10^6\thinspace\mathrm{kg}
$$

---

Aïllem el $V_\text{submergit}$:

$$
\begin{aligned}
V_\text{submergit} = \frac{m_\text{vaixell}}{d_\text{fluid}} &= \frac{4.803\times 10^6\thinspace\mathrm{kg}}{1025\thinspace\mathrm{kg/m^3}} \\
 &= 4685.85\thinspace\mathrm{m^3}
\end{aligned}
$$

---

#### Pràctica virtual
Per a determinar **densitats** i **forces d'empenyiment**:

{{< youtube o7v9Kbs6e8Y >}}

{{% /section %}}

---

{{% section %}}

## Física de l'atmosfera

- [Pressió atmosfèrica](#/3/1)
- [Experiment de Torricelli](#/3/2)
- [Hemisferis de Magdeburg](#/3/7)
- [Fenòmens meteorològics](#/3/13)

(continua cap avall)

👇

---

### Pressió atmosfèrica
La **pressió atmosfèrica** és el pes de la columna d'aire que suporta un cos per unitat de superfície.

---

### Experiment de Torricelli
Gràcies a l'**experiment de Torricelli** es va mesurar per primera vegada la pressió atmosfèrica i es va produir per primera vegada a la història el buit.

---

> En posar un tub de 100 cm d'altura ple de mercuri (Hg) boca avall en una cubeta també plena de mercuri, s'observa que el Hg descendeix a aproximadament 76 cm, creant-se un buit en els 24 cm restants.

---

{{< figure library="true" src="fluidos-4ESO/experimento-Torricelli.png" lightbox="false" width="40%" >}}

\begin{align*}
p_\text{atm} &= d_\text{Hg}\cdot g\cdot h \\\\
&= 13\thinspace595.1\thinspace\mathrm{kg/m^3}\cdot 9.806\thinspace65\thinspace\mathrm{N/kg}\cdot 0.76\thinspace\mathrm{m} \\\\
&= 101\thinspace325\thinspace\mathrm{Pa} = 1\thinspace\mathrm{atm}
\end{align*}

---

{{< vimeo 110619312 >}}

---

#### Sifons

<div align="center">
{{< tweet user="fqsaja1" id="1641449863400550408" >}}
</div>

---

### Hemisferis de Magdeburg
Al 1654, el científic alemany i burgmestre de Magdeburg **Otto von Guericke**, va dissenyar un parell de grans hemisferis de coure, que s'ajustaven amb un anell d'acoblament formant una esfera.

---

Després de segellar les vores amb greix i extreure l'aire amb una bomba de buit que ell mateix havia inventat, estirant amb dos grups de 8 cavalls van intentar separar tots dos hemisferis, sense èxit, demostrant així el poder de la pressió atmosfèrica.

---

{{< figure library="true" src="fluidos-4ESO/hemisferios-Magdeburgo.jpg" lightbox="false" width="70%" >}}

---

{{< vimeo 33482842 >}}

---

{{< vimeo 67896094 >}}

---

{{< youtube lDUuB-Mdx0Q >}}

---

### Fenòmens meteorològics
Les **diferències** de **pressió** entre diferents punts de l'atmosfera són l'origen de nombrosos **fenòmens meteorològics**.

---

#### Vent
Els **vents** bufen des de regions amb major pressió cap a aquelles en les quals la pressió és menor (normalment a causa de diferències de temperatures).

---

#### Borrasques
Les **borrasques** o zones de **baixa pressió** són regions de l'atmosfera en les quals la pressió atmosfèrica és més baixa que la de l'aire circumdant, la qual cosa provoca que l'aire humit ascendeixi, refredant-se, condensant-se i originant **temps inestable**.

---

#### Anticiclons
Un **anticicló** és una zona atmosfèrica d'**alta pressió**, en la qual la pressió atmosfèrica és superior a la de l'aire circumdant, provocant que l'aire de les capes més altes descendeixi, originant **temps estable**.

---

{{< figure library="true" src="fluidos-4ESO/borrasca-anticiclon.jpg" title="[https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html](https://clasesdesocialesarcas.blogspot.com/2013/11/presion-atmosferica-y-vientos.html)" lightbox="false" >}}

{{% /section %}}

---

{{% section %}}

## Curtmetratge-documental
{{< youtube GuCGcOkoK5E >}}

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Punxa [**aquí**](?view=print#) i segueix aquestes **instruccions**:

1. Obre el diàleg d'**Impressió** (Control-P si ets al Windows).
2. Canvia la **Destinació** a **Desar com a PDF**.
3. Canvia el **Disseny** a **Horizontal**.
4. Canvia els **Marges** a **Cap**.
5. Activa l'opció **Gràfics de fons**.

El procés, en principi, només funciona amb **Google Chrome**.

</section>
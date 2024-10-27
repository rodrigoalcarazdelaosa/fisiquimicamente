---
title: Forces
url: "/recursos-fisica-quimica/apunts/4eso/forces"
subtitle: Lleis de Newton i forces d'especial interès
summary: "<code style='color: #2E3440;background:#88C0D0'>NOVETAT</code><br>Lleis de Newton i forces d'especial interès."
breadcrumbs: ["recursos-fisica-quimica","apunts","4teso"]
authors:
- rodrigo-alcaraz-de-la-osa
- eduard-cremades
- oscar-colomar
tags:
- apunts
- 4t ESO
- forces
categories:
- Física
weight: 7

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Andrea Piacquadio**](https://www.pexels.com/es-es/@olly) a [Pexels](https://www.pexels.com/es-es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Pòster
  url: forces-poster.pdf

slides: forces-4ESO

math: true
---

{{% toc %}}

## Naturalesa vectorial de les forces

Les **forces** són **magnituds vectorials**, això significa que queden definides per un **vector**, del qual cal definir el seu:

Mòdul
: Longitud del segment.

Direcció
: Recta que ho conté.

Sentit
: Donada per la punta de la fletxa.

{{< figure library="true" src="fuerzas-4ESO/vector.svg" title="En dues dimensions, un vector es pot escriure com $\newcommand{\ihat}{\hat{\imath}}\newcommand{\jhat}{\hat{\jmath}}\vec a = a_x \ihat + a_y \jhat$, on $\ihat$ i $\jhat$ són vectors unitaris (mòdul = 1) al llarg dels eixos $x$ i $y$. El mòdul de $\vec a$, $|\vec a|$, es calcula com (teorema de Pitàgores) $|\vec a| = \sqrt{a_x^2+a_y^2}$." lightbox="false" width="100%" >}}

### Suma o resta de vectors
Gràficament, dibuixant un vector a continuació de l'altre i unint l'origen amb el punt final:

{{< figure library="true" src="fuerzas-4ESO/suma-vectores.svg" lightbox="false" width="100%" >}}

O analíticament, component a component:
$$
\vec a + \vec b = (a_x+b_x)\ihat + (a_y+b_y)\jhat
$$

Pots practicar la suma de vectors amb la següent **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

## Lleis de Newton

{{% callout note %}}
Us recomanem passar-vos per la secció d'[**Història de la Ciència**](https://fisiquimicamente.com/recursos-fisica-quimica/historia-ciencia/) per fer una ullada a la **biografia** i **principals contribucions científiques** de l'**Isaac Newton** en **format pòster** i **tríptic**.
{{% /callout %}}

### 1a llei (llei de la inèrcia)
> Tot cos preserva el seu estat de repòs o moviment rectilini uniforme llevat que hi actuï una força.

Al següent vídeo del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) pots veure un exemple de com els objectes tendeixen a mantenir el seu estat de repòs, utilitzant un polsador de bolígraf i una càmera d'alta velocitat:

{{< youtube 1-FP1_oD-zI >}}

### 2a llei (llei fonamental de la dinàmica)
> El canvi de moviment és proporcional a la força exercida i es fa en la direcció de la línia recta en què s'exerceix la força.

Matemàticament, s'escriu com
$$
\sum\vec F = m\vec a\quad \text{(l'acceleració és proporcional a la força neta)}
$$

Al SI la força es mesura en Newton (N): $1\thinspace\mathrm N = 1\thinspace \mathrm{kg\thinspace m\thinspace s^{-2}}$.

### 3a llei (llei de l'acció-reacció)
> Per a tota acció sempre hi ha una reacció igual i oposada.

Si un cos A exerceix una força sobre un altre cos B, aquest exercirà sobre A una força igual i de sentit contrari ($\vec F_\text{AB} = -\vec F_\text{BA}$).

{{% callout note %}}
Durant la seva estada a bord de la [**ISS**](https://es.wikipedia.org/wiki/Estación_Espacial_Internacional), l'exministre de Ciència i Innovació d'Espanya, [**Pedro Duque**](https://es.wikipedia.org/wiki/Pedro_Duque), va ser filmat realitzant demostracions en què explicava les **tres lleis del moviment de Newton**:

{{< youtube xO70CCH68t8 >}}
{{% /callout %}}

## Forces d'especial interés

### Pes $\vec P$
El **pes** és la força amb què la Terra atrau un objecte. Es calcula com:
$$
\vec P = m\vec g,
$$
on $m$ és la massa de l'objecte i $\vec g$ és l'acceleració de la gravetat. Sempre es dirigeix ​​cap al centre de la Terra (cap avall en la majoria dels casos).

### Normal $\vec N$
També anomenada força de **reacció**, es defineix com la força que exerceix una superfície sobre un cos recolzat sobre ella. És de la mateixa magnitud i direcció, però de sentit contrari a la força exercida pel cos sobre la superfície.

{{< figure library="true" src="fuerzas-4ESO/normal.svg" title="Força normal en a) una superfície horitzontal, b) un pla inclinat i c) una superfície vertical." lightbox="false" width="100%" >}}

### Fregament $\vec f_\mathrm r$
La **força de fregament** és la força que existeix entre dues superfícies en contacte, oposant-se sempre al moviment relatiu entre ambdues superfícies. La força de fregament és proporcional a la normal $N$:
$$
f_\mathrm r = \mu N,
$$
on $\mu$ és el coeficient de fregament[^1].

[^1]: A [aquesta taula, presa de l'entrada sobre fricció a la versió anglesa de la Wikipedia](https://en.wikipedia.org/wiki/Friction#Approximate_coefficients_of_friction), pots veure els coeficients de fregament aproximats entre dos materials donats.

{{< figure library="true" src="fuerzas-4ESO/rozamiento.svg" title="Força de fregament en a) una superfície horitzontal, b) un pla inclinat i c) una superfície vertical." lightbox="false" width="100%" >}}

Pots aprendre més sobre la naturalesa del fregament amb aquesta **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/friction/latest/friction_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>

També podeu veure aquest excel·lent vídeo del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) on ens ensenyen com realitzar una **pràctica virtual per determinar coeficients de fregament**:

{{< youtube x2vUbOPB1W8 >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1NrmIRaarKCZvh8VdIhzvRDOAkJSPEwfK/view) pots descarregar-te el **guió** de la **pràctica**.
{{% /callout %}}

### Centrípeta $\vec f_\mathrm c$
Es diu **força centrípeta** a la força o component de la força que actua sobre un objecte en moviment sobre una trajectòria curvilínia i que està dirigida cap al centre de curvatura de la trajectòria. El seu mòdul es calcula a partir de l'**acceleració centrípeta**, fent ús de la **2a llei de Newton**:
$$
f_\mathrm c = m a_\mathrm c = m\cdot \frac{v^2}{R} = \frac{mv^2}{R}
$$

## Exemple
{{% callout example %}}
<br>

> Un cos baixa per un pla inclinat $30^\circ$ amb un coeficient de fregament $\mu=0.2$. Calcula la velocitat que portarà i l'espai recorregut al cap de $5\thinspace\mathrm s$, si inicialment estava en repòs

---

El primer que fem és un dibuix representant la situació:

{{< figure library="true" src="fuerzas-4ESO/plano-inclinado.svg" lightbox="false" width="100%" >}}

Les **forces** que actuen són:

- Pes $\vec P = -P_x\ihat - P_y\jhat$, on:
	\begin{align*}
	P_x &= mg\sin\alpha = 9.8m\sin30^\circ = 4.9m\thinspace\mathrm{N} \\\\
	P_y &= mg\cos\alpha = 9.8m\cos30^\circ = 4.9\sqrt{3}m\thinspace\mathrm{N}
	\end{align*}
- Normal $\vec N = N\jhat$
- Força de fregament $\vec f_\mathrm r=\mu N\ihat = 0.2N\ihat\thinspace\mathrm{N}$

Escrivim la **2a llei de Newton** per a cada **component**:
\begin{align}
\text{Component $x$}&\rightarrow f_\mathrm r - P_x = ma \tag{1} \\\\
\text{Component $y$}&\rightarrow N-P_y = 0 \tag{2}
\end{align}

Aïllant $N=P_y=4.9\sqrt{3}m$ de (2) i substituint a (1), emprant que $f_\mathrm r = 0.2 N$ i que $P_x = 4.9m$:
$$
\begin{gathered}
0.2\cdot 4.9\sqrt{3}\cancel{m} - 4.9\cancel{m} = \cancel{m}a \rightarrow a = -3.2\thinspace\mathrm{m/s^2}\\
\vec a = -3.2\ihat\thinspace\mathrm{m/s^2}
\end{gathered}
$$

---

La **velocitat** que portarà als $5\thinspace\mathrm s$ la calculem amb l'**equació de la velocitat**:
\begin{gather*}
v = v_0 + at = 0 - 3.2\cdot 5 = -16.0\thinspace\mathrm{m/s}\\\\
\vec v = -16.0\ihat\thinspace\mathrm{m/s}
\end{gather*}

---

Per a l'**espai recorregut** podem utilitzar l'**equació del moviment**:
$$
\Delta x = \left\lvert x - x_0\right\rvert = \left\lvert v_0\cdot t + \frac{1}{2}at^2\right\rvert = \left\lvert 0 - \frac{1}{2}\cdot 3.2\cdot 5^2\right\rvert = 40.0\thinspace\mathrm m
$$
{{% /callout %}}


## Simulació

Pots seguir aprenent més coses sobre la **relació** entre les **forces** i el **moviment** amb aquesta **simulació**:

<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_es.html" width="100%" height="600" scrolling="no" allowfullscreen></iframe>
---
title: Equilibri químic
url: "/recursos-fisica-quimica/apunts/2batx/quimica/equilibri-quimic"
subtitle: Llei d'acció de masses, constant d'equilibri, principi de Le Chatelier i equilibris heterogenis
summary: "Llei d'acció de masses. Constant d'equilibri. Principi de Le Chatelier. Equilibris heterogenis."
breadcrumbs: ["recursos-fisica-quimica","apunts","2batx","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
- eduard-cremades
tags:
- apunts
- 2n Batx
- reaccions-químiques
- equilibri-químic
categories:
- Química
weight: 6

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Foto de [**Polina Tankilevitch**](https://www.pexels.com/es-es/@polina-tankilevitch) a [Pexels](https://www.pexels.com/es-es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon: file-download
  name: Pòster
  url: equilibri-quimic-poster.pdf

slides: equilibri-quimic-2Batx-quimica
---

{{% toc %}}

Al 1803, [Berthollet](https://es.wikipedia.org/wiki/Claude_Louis_Berthollet) descobreix que certes reacciones químiques el seu **reversibles**, arribant un moment en el qual les velocitats de les reacciones directa i inversa s'igualen, mantenint-se invariables les concentracions de reactius i productes (<span style="font-variant:small-caps;">**equilibri**</span>).

{{< figure src="equilibrio-quimico-2Bach-quimica/equilibrio-cat.svg" title="Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/reversible-reactions-and-equilibrium/." lightbox="false" width="100%" >}}

## Llei d'acció de masses
També coneguda com a **llei de Guldberg i Waage**, estableix que la velocitat d'una reacció és directament proporcional al producte de les concentracions dels reactius. Com en l'equilibri les velocitats de les reaccions directa i inversa són iguals, això implica que existeix una relació constant entre concentracions de reactius i productes.

## Constant d'equilibri
Com en l'equilibri les concentracions de reactius i productes es mantenen constants, podem calcular una constant d'equilibri $K_\mathrm c$, que serà invariable a una certa $T$.

En un cas general:
$$
a\thinspace\mathrm A + b\thinspace\mathrm B &#8652; c\thinspace\mathrm C + d\thinspace\mathrm D,
$$

$$
K_\mathrm c = \frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}
$$

- L'expressió de $K_\mathrm c$ (i el seu valor) depèn de la forma en la qual estigui ajustada la reacció.
- Si s'inverteix la reacció, s'inverteix també el valor de la constant d'equilibri:
$$
K_\mathrm i = \frac{1}{K_\mathrm d}
$$
- Si se sumen dos o més equacions, la constant d'equilibri és el producte de les constants d'equilibri de cadascuna de les reaccions.
- Si en la reacció intervenen sòlids o líquids purs, atès que la seva concentració és constant, es considera inclosa en el valor de la constant d'equilibri.

{{< figure src="equilibrio-quimico-2Bach-quimica/magnitud-K-cat.svg" lightbox="false" width="100%" >}}

## Quocient de reacció
Per a poder saber si una reacció ha arribat al seu equilibri, es pot calcular l'anomenat **quocient de reacció**, $Q_\mathrm r$:
$$
a\thinspace\mathrm A + b\thinspace\mathrm B &#8652; c\thinspace\mathrm C + d\thinspace\mathrm D,
$$
$$
Q_\mathrm r = \frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}
$$
on les concentracions no tenen per què estar en l'equilibri, a diferència d'amb $K_\mathrm c$.

- $Q_\mathrm r < K_\mathrm c$: haurà d'augmentar la concentració de productes (desplaçar-se cap a la dreta).
- $Q_\mathrm r = K_\mathrm c$: el sistema està en equilibri.
- $Q_\mathrm r > K_\mathrm c$: haurà d'augmentar la concentració de reactius (desplaçar-se cap a l'esquerra).

## Grau de dissociació
El **grau de dissociació**, $\alpha$, es defineix com el quocient entre la quantitat de substància dissociada i la quantitat de substància inicial:
    $$
     \alpha = \frac{\text{quantitat de substància dissociada}}{\text{quantitat de substància inicial}}
    $$
    Sol expressar-se en tant per cent (\%).

Electròlits, àcids i bases fortes
: $\alpha \approx 1$

Electròlits, àcids i bases febles
: $\alpha < 1$

## Equilibris amb gasos
En reaccions en les quals intervenen **gasos**, es pot expressar la constant d'equilibri en funció de les **pressions parcials** de cada gas en la mescla en equilibri:
$$
a\thinspace\mathrm A + b\thinspace\mathrm B &#8652; c\thinspace\mathrm C + d\thinspace\mathrm D,
$$
$$
K_\mathrm p = \frac{(p_\mathrm C)^c(p_\mathrm D)^d}{(p_\mathrm A)^a(p_\mathrm B)^b}
$$

Utilitzant l'**equació dels gasos ideals**, es pot demostrar que $K_\mathrm p$ està relacionada amb $K_\mathrm c$ a través de l'expressió:
$$
K_\mathrm p = K_\mathrm c\left(RT\right)^{\Delta n},
$$
on $\Delta n = n_\text{final} - n_\text{inicial}$ és la <strong>variació</strong> de <strong>mols gasosos</strong>.

{{< figure src="equilibrio-quimico-2Bach-quimica/equilibrio-quimico.svg" title="https://www.chegg.com/learn/chemistry/introduction-to-chemistry/chemical-equilibrium" lightbox="false" width="100%" >}}

## Factors que afecten l'estat d'equilibri

### Principi de Le Châtelier

> Quan un sistema en equilibri és pertorbat, aquest evoluciona a un nou equilibri, contrarrestant parcialment la pertorbació introduïda.

### Concentració

Si s'afegeix reactiu/producte
: Aquest tendirà a reaccionar per a tornar a aconseguir l'equilibri i per tant el sistema es desplaçarà cap al costat contrari.

Si s'extreu reactiu/producte
: Aquest tendirà a formar-se per a tornar a aconseguir l'equilibri i per tant el sistema es desplaçarà cap a la seva formació.

### Temperatura

Reacció exotèrmica
: En una reacció exotèrmica (desprèn calor) l'augment de la temperatura desplaça la reacció cap a reactius i una disminució de la temperatura la desplaça cap a productes.

Reacció endotèrmica
: En una reacció endotèrmica (absorbeix calor) l'augment de la temperatura desplaça la reacció cap a productes i una disminució de la temperatura la desplaça cap a reactius.

### Pressió o volum

D'acord amb la **llei de Boyle-Mariotte**, la pressió i el volum són inversament proporcionals: a major pressió menor volum i viceversa $\rightarrow pV = \text{constant}$.

En augmentar la pressió (disminuir el volum)
: El sistema es desplaçarà de manera que la pressió disminueixi, és a dir, cap a on hi hagi menys mols de gas.

En disminuir la pressió (augmentar el volum)
: El sistema es desplaçarà de manera que la pressió augmenti, és a dir, cap a on hi hagi més mols de gas.

{{< figure src="equilibrio-quimico-2Bach-quimica/le-chatelier-cat.svg" lightbox="false" width="100%" >}}

## Obtenció industrial de l'amoníac

L'**amoníac**, NH<sub>3</sub>, es produeix industrialment a partir de nitrogen i hidrogen gasosos mitjançant el **procés d'Haber-Bosch**, un procés de fixació artificial de nitrogen.

{{< figure src="equilibrio-quimico-2Bach-quimica/Haber-Bosch-cat.svg" title="Diagrama del **procés d'Haber-Bosch**. Adaptada de https://commons.wikimedia.org/wiki/File:Haber-Bosch-es.svg." lightbox="false" width="100%" >}}

### Equilibri exotèrmic

En el procés es fa reaccionar nitrogen atmosfèric, N<sub>2</sub>(g), amb hidrogen, H<sub>2</sub>(g), obtingut a partir de metà (gas natural), establint-se un **equilibri exotèrmic** donat per l'equació:

$$
\mathrm{N_2(g)} + 3\thinspace \mathrm{H_2(g)} &#8652; 2\thinspace \mathrm{NH_3(g)} \qquad \Delta H \approx -92\thinspace\mathrm{kJ}
$$

la **constant d'equilibri** del qual ve donada per:

$$
K_\mathrm p = \frac{(p_{\mathrm{NH_3}})^2}{p_{\mathrm{N_2}}(p_{\mathrm{H_2}})^3}
$$

on $p$ representa la **pressió parcial** de cadascuna de les substàncies.

#### Catalitzador

La reacció natural és molt lenta degut sobretot a l'estabilitat dels enllaços triples del nitrogen, per la qual cosa s'utilitza un catalitzador de ferro (Fe<sup>3+</sup>) per a accelerar-la. Notar que l'addició d'aquest catalitzador no afecta a l'equilibri ni a la quantitat d'amoníac que es produeix.

#### Temperatura

En ser exotèrmica, segons el principi de Le Châtelier, les baixes temperatures afavoreixen la formació d'amoníac, però al mateix temps alenteixen la reacció, per la qual cosa s'arriba a un compromís utilitzant temperatures d'entre 400 &deg;C i 450 &deg;C.

#### Pressió

En haver-hi menys mols gasosos en els productes (2, davant de 4 en els reactius), d'acord al principi de Le Châtelier, un augment de pressió desplaçarà l'equilibri cap als productes, afavorint la producció d'amoníac. D'altra banda, utilitzar altes pressions té un cost molt elevat, per la qual cosa es torna a arribar a un compromís, en aquest cas d'unes 200 atm.

| Canvi | [N<sub>2</sub>] | [H<sub>2</sub>] | [NH<sub>3</sub>] |
| :--- | :---: | :---: | :---: |
| Augment de temperatura | augmenta | augmenta | disminueix |
| Augment de pressió | disminueix | disminueix | augmenta |
| Addició de N<sub>2</sub> | augmenta | disminueix | augmenta |
| Addició d'H<sub>2</sub>O | constant | constant | constant |
| Addició de catalitzador | constant | constant | constant |

Pots conèixer més detalls sobre el procés d'Haber-Bosch veient el que ocorre en una **planta química**:

{{< youtube c4BmmcuXMu8 >}}

o coneixent la **importància** del **procés** per a l'**economia** i l'**alimentació**:

{{< youtube o1_D4FscMnU >}}

## Equilibris heterogenis

### Reaccions de precipitació

Són reaccions en les quals es forma un **producte insoluble** (que no es dissol). Això típicament ocorre amb **substàncies iòniques** els ions de les quals tendeixen a romandre units en posar-se en dissolució, formant un **precipitat**.

### Solubilitat i producte de solubilitat

Quan un compost químic coexisteix en estat sòlid i dissolt, s'estableix un **equilibri de solubilitat** entre ell i els seus ions:

$$
\mathrm C_n\mathrm A_m(\mathrm s) &#8652; \mathrm C_n\mathrm A_m(\mathrm{ac}) \rightarrow n\thinspace\mathrm C^{m+}(\mathrm{ac}) + m\thinspace\mathrm A^{n-}(\mathrm{ac}),
$$

on C representa un catió, A un anió i $n$ i $m$ els seus respectius índexs estequiomètrics.

#### Solubilitat

Anomenem **solubilitat**, $s$, a la màxima quantitat de solut que es pot dissoldre a una temperatura donada en un dissolvent. Se sol expressar en grams de solut per cada 100&thinsp;mL de dissolvent.

#### Producte de solubilitat

Un equilibri de solubilitat es caracteritza per un **producte de solubilitat**, $K_\mathrm s$, que fa les vegades de <strong>constant d'equilibri</strong>:

$$
K_\mathrm s = [\mathrm C^{m+}]^n [\mathrm A^{n-}]^m,
$$

on [ ] representa concentracions molars tret que s'indiqui el contrari. A partir de l'estequiometria, és possible establir la relació entre el producte de solubilitat i la solubilitat:

{{< figure src="equilibrio-quimico-2Bach-quimica/producto-solubilidad.svg" lightbox="false" width="100%" >}}

Com en els equilibris homogenis, podem comparar el quocient (*producte*) de reacció amb el producte de solubilitat per a determinar si es formarà precipitat:

- $Q_\mathrm s < K_\mathrm s$: dissolució insaturada &#8594; no hi ha precipitat
- $Q_\mathrm s = K_\mathrm s$: dissolució saturada &#8594; equilibri de solubilitat
- $Q_\mathrm s > K_\mathrm s$: dissolució sobresaturada &#8594; es forma precipitat

### Efecte de l'ió comú

L'**efecte de l'ió comú** és una conseqüència del principi de Le Châtelier i consisteix en la **disminució de la solubilitat** d'un precipitat iònic per l'addició a la dissolució d'un compost soluble amb un ió en comú amb el precipitat, augmentant la seva concentració i desplaçant l'equilibri cap a l'esquerra.

{{< figure src="equilibrio-quimico-2Bach-quimica/ion-comun-cat.svg" title="Es forma precipitat de AgI en presència de KI. Traduïda i adaptada de https://www.coursehero.com/sg/general-chemistry/shifting-the-solubility-equilibrium/." lightbox="false" width="100%" >}}

### Solubilitat i temperatura

#### Sòlids en aigua

La **solubilitat** de moltes sals (sòlides) dissoltes en aigua **augmenta** amb la temperatura. Algunes, com el Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, es tornen menys solubles en augmentar la temperatura, pel fet que la seva dissolució en aigua és exotèrmica.

#### Gasos en aigua

La **solubilitat** sol **disminuir** en augmentar la temperatura.

#### Gasos en dissolvents orgànics

La **solubilitat** sol **augmentar** amb la temperatura.

## Exemple
{{% callout example %}}
<br>

> El SO<sub>3</sub>(g) es dissocia a 127 &deg;C mitjançant un procés endotèrmic, a SO<sub>2</sub>(g) i O<sub>2</sub> (g), establint-se un equilibri. En un recipient de 20 L a 127 &deg;C s'introdueixen 4.0 mol de SO<sub>3</sub> i es produeix una dissociació del 30 \%.<br>  
  a) Calculi les concentracions molars de cada gas en l'equilibri.<br>
  b) Calculi la pressió total i parcial de cada gas.<br>
  c) Calculi el valor de les constants $K_\mathrm c$ i $K_\mathrm p$ a 127 &deg;C.<br>
  d) Si estant la mescla en equilibri es redueix el volum del sistema (sense que resulti afectada la temperatura), afavorirà la dissociació del SO<sub>3</sub>?

---

a) Escrivim l'**equilibri** de dissociació ajustat en funció del nombre de mols inicials i del grau de dissociació $\alpha$:

{{< figure src="equilibrio-quimico-2Bach-quimica/equilibrio-SO3-cat.svg" lightbox="false" width="100%" >}}

on $n = 4\thinspace\mathrm{mol}$ i $\alpha = 0.3$.

Calculem les concentracions de cada gas:

\begin{align*}
[\mathrm{SO_3}] & = \frac{4\thinspace\mathrm{mol}\cdot (1-0.3)}{20\thinspace\mathrm L} = 0.14\thinspace\mathrm{M} \\\\
[\mathrm{SO_2}] & = \frac{4\thinspace\mathrm{mol}\cdot 0.3}{20\thinspace\mathrm L} = 0.06\thinspace\mathrm{M} \\\\
[\mathrm{O_2}] & = \frac{1/2\cdot 4\thinspace\mathrm{mol}\cdot 0.3}{20\thinspace\mathrm L} = 0.03\thinspace\mathrm{M}
\end{align*}

b) A partir de l'**equació dels gasos ideals**, $p = cRT$:
\begin{align*}
p_{\mathrm{SO_3}} &= 0.14\thinspace\mathrm{mol/L}\cdot 0.082\thinspace\mathrm{atm\thinspace L\thinspace mol^{-1}\thinspace K^{-1}}\cdot 400.15\thinspace \mathrm{K} = 4.6\thinspace\mathrm{atm} \\\\
p_{\mathrm{SO_2}} &= 0.06\thinspace\mathrm{mol/L}\cdot 0.082\thinspace\mathrm{atm\thinspace L\thinspace mol^{-1}\thinspace K^{-1}}\cdot 400.15\thinspace \mathrm{K} = 2\thinspace\mathrm{atm} \\\\
p_{\mathrm{O_2}} &= 0.03\thinspace\mathrm{mol/L}\cdot 0.082\thinspace\mathrm{atm\thinspace L\thinspace mol^{-1}\thinspace K^{-1}}\cdot 400.15\thinspace \mathrm{K} = 1\thinspace\mathrm{atm}
\end{align*}

D'acord amb la **llei de les pressions parcials de Dalton**, la **pressió total** és:

$$
p_\mathrm t = p_{\mathrm{SO_3}} + p_{\mathrm{SO_2}} + p_{\mathrm{O_2}} = 4.6 + 2.0 + 1.0 = 7.6\thinspace\mathrm{atm}
$$

c) L'expressió de la constant $K_\mathrm c$ és:

$$
K_\mathrm c  = \frac{\mathrm{[SO_2]^2}\mathrm{[O_2]}}{\mathrm{[SO_3]^2}}
$$

Substituint valors:

$$
K_\mathrm c = \frac{(0.06)^2\cdot 0.03}{(0.14)^2} = 5.5\times 10^{-3}
$$

L'expressió de la constant $K_\mathrm p$ es:

$$
K_\mathrm p  = \frac{(p_{\mathrm{SO_2}})^2p_{\mathrm{O_2}}}{(p_{\mathrm{SO_3}})^2}
$$

Substituint valors

$$
K_\mathrm p = \frac{(2.0)^2\cdot 1.0}{(4.6)^2} = 0.19,
$$

complint-se que $K_\mathrm p = K_\mathrm c\left(RT\right)^{\Delta n_\text{gasosos}}$.

d) D'acord amb la llei de Boyle-Mariotte, en reduir el volum fins a un terç del seu valor inicial, la pressió es triplica. D'acord amb el principi de Le Châtelier, el sistema es desplaçarà cap a on hi hagi menys mols gasosos, és a dir, cap a l'esquerra, formant més SO<sub>3</sub> i afavorint, per tant, la seva dissociació.

{{% /callout %}}
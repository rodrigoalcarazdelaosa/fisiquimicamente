---
title: Moviments
url: "/recursos-fisica-quimica/apunts/4eso/moviments"
subtitle: MRU, MRUA i MCU
summary: "MRU, MRUA i MCU."
breadcrumbs: ["recursos-fisica-quimica","apunts","4teso"]
authors:
- rodrigo-alcaraz-de-la-osa
- oscar-colomar
tags:
- apunts
- 4t ESO
- moviment
categories:
- Física
weight: 6

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imatge de [**Shutterbug75**](https://pixabay.com/es/users/shutterbug75-2077322/) a [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
- icon_pack: fas
  icon:
  name: 📜 Pòster
  url: moviments-poster.pdf

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.

slides: moviments-4ESO

math: true
---

{{% toc %}}

## Moviment rectilini uniforme (MRU)
### Característiques
Les **característiques** del **moviment rectilini uniforme (MRU)** són:

- Trajectòria rectilínia.
- Velocitat $v$ constant (acceleració $a=0$).

### Equació principal

La **equació principal** del MRU és:
[^1]: Aquesta és l'anomenada **equació del moviment** o **equació de la posició**, perquè ens dona la posició $x$ en funció del temps $t$.

$$
x(t) = x_0 + v(t-t_0),
$$

on $x$ és la posició final, $x_0$ la posició inicial, $v$ la velocitat, $t$ el temps final i $t_0$ el temps inicial.

### Gràfiques
{{< figure library="true" src="movimientos-4ESO/graficas-MRU-cat.svg" lightbox="false" width="100%" >}}

{{% callout note %}}
Aguditza la teva comprensió de la **posició**, la **velocitat** i l'**acceleració** construint **gràfiques** de **moviment** en **temps real** amb [aquest genial **joc**](https://www.universeandmore.com/motion-mapper-es/).
{{% /callout %}}

### Exemple
{{% callout example %}}
<br>

> Un caragol 🐌 recorre en línia recta una distància de $10.8\thinspace\mathrm m$ en $1.5\thinspace\mathrm h$. Quina distància recorrerà en $5\thinspace\mathrm{min}$?

---

Escrivim l'equació del moviment del caragol:
$$
x(t) = x_0 + vt,
$$
on $x = 10.8\thinspace\mathrm m$, $x_0 = 0$, $v$ és la velocitat del caragol (desconeguda) i $t=1.5\thinspace\mathrm h$.

Com ens pregunten la distància que recorrerà, $\Delta x = x-x_0$, a $5\thinspace\mathrm{min}$, podem passar les $1.5\thinspace\mathrm h$ a minuts:

$$
1.5\thinspace\cancel{\mathrm h}\cdot \frac{60\thinspace\mathrm{min}}{1\thinspace\cancel{\mathrm h}} = 90\thinspace\mathrm{min}
$$

i així calcular la velocitat en m/min:
$$
10.8\thinspace\mathrm m = 0 + v\cdot 90\thinspace\mathrm{min} \rightarrow v = 0.12\thinspace\mathrm{m/min}
$$

La distància recorreguda en $5\thinspace\mathrm{min}$ serà, per tant:
$$
\Delta x (5\thinspace\mathrm{min}) = x(5\thinspace\mathrm{min}) - x_0 =  0.12\thinspace\mathrm{m/\cancel{min}} \cdot 5\thinspace\cancel{\mathrm{min}} = 0.6\thinspace\mathrm m
$$
{{% /callout %}}

### Pràctiques virtuals
També pots veure aquests excel·lents vídeos del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) on ens ensenyen com realitzar **pràctiques virtuals** relacionades amb el **MRU**:

{{< youtube C-1iJRD-u_I >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1utKM4BKCW5uIAc-9ggCjRFioXHaP1Z7E/view) pots descarregar-te el **guió** de la **pràctica**.
{{% /callout %}}

{{< youtube 3MXBhRjaIlE >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1oSsmSv0xhd2IH8j-9CubdC6aYFpT8NlV/view) pots descarregar-te el **guió** de la **pràctica**.
{{% /callout %}}

## Moviment rectilini uniformement accelerat (MRUA)

### Característiques

Les **característiques** del **moviment rectilini uniformement accelerat (MRUA)** són:

- Trajectòria rectilínia.
- Acceleració $a$ constant (velocitat $v$ variable).

### Equacions principals

Les **equacions principals** del MRUA són:

$$
\begin{aligned}
	\text{Equació de la posició: } x(t) &= x_0 +v_0(t-t_0) +\frac{1}{2}a(t-t_0)^2\\
	\text{Equació de la velocitat: } v(t) &= v_0 + a(t-t_0) \\
	v^2-v_0^2 &= 2a\Delta x
\end{aligned}
$$

on $x$ és la posició final, $x_0$ la posició inicial, $v_0$ la velocitat inicial, $v$ la velocitat final, $a$ l'acceleració, $t$ el temps final, $t_0$ el temps inicial i $\Delta x = x-x_0$ és la distància o espai recorregut.

### Gràfiques
{{< figure library="true" src="movimientos-4ESO/graficas-MRUA-cat.svg" lightbox="false" width="100%" >}}

{{% callout note %}}
Aguditza la teva comprensió de la **posició**, la **velocitat** i l'**acceleració** construint **gràfiques** de **moviment** en **temps real** amb [aquest genial **joc**](https://www.universeandmore.com/motion-mapper-es/).
{{% /callout %}}

### Exemple
{{% callout example %}}
<br>

> Un cotxe <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚗</span> que circula a 70.2&thinsp;km/h disminueix la seva velocitat a raó de 3&thinsp;m/s cada segon. Quina distància recorrerà fins a aturar-se?

---

El primer passem la **velocitat inicial** $v_0$ a m/s:
$$
v_0 = 70.2\thinspace\frac{\cancel{\mathrm{km}}}{\cancel{\mathrm{h}}}\cdot \frac{1000\thinspace\mathrm m}{1\thinspace\cancel{\mathrm{km}}} \cdot \frac{1\thinspace\cancel{\mathrm h}}{3600\thinspace\mathrm s} = 19.5\thinspace\mathrm{m/s}
$$

La frase "*disminueix la seva velocitat a raó de $3\thinspace\mathrm{m/s}$ cada segon*" l'hem d'interpretar com que la seva **acceleració** $a=-3\thinspace\mathrm{m/s^2}$ (el signe $-$ és perquè la seva velocitat disminueix, i la velocitat la prenem positiva). Com no em donen informació sobre temps ni em demanen cap temps (sinó distància recorreguda $\Delta x$), utilitzo l'equació (3):
$$
v^2-v_0^2 = 2a\Delta x, \tag{3}
$$
d'on aïllo la distància recorreguda $\Delta x$:
$$
\Delta x = \frac{v^2-v_0^2}{2a} = \frac{0^2-19.5^2}{2\cdot (-3)} = 63.375\thinspace\mathrm m
$$
{{% /callout %}}

### Pràctica virtual
També podeu veure aquest excel·lent vídeo del [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com) on ens ensenyen com realitzar una **pràctica virtual** relacionada amb el **MRUA** :

{{< youtube PhfYb7y8cXY >}}

{{% callout note %}}
[Aquí](https://drive.google.com/file/d/1ZC17GJcqX3h8rHlfdS43T9uBSkDrR8Oo/view) pots descarregar-te el **guió** de la **pràctica**.
{{% /callout %}}

## Caiguda lliure/llançament vertical
La **caiguda lliure** o **llançament vertical** és un cas especial de MRUA on l'acceleració és igual a l'acceleració de la **gravetat**. En el cas de la Terra, $a=-g=-9.8\thinspace\mathrm{m/s^2}$ (el signe $-$ indica que l'acceleració de la gravetat apunta sempre cap avall).

Què passa quan una bola de bitlles i una ploma es deixen caure juntes a les condicions de l'espai exterior? [**Brian Cox**](https://es.wikipedia.org/wiki/Brian_Cox_(f%C3%ADsico)) ens ho ensenya en aquest impressionant **vídeo**:

{{< youtube E43-CfukEgs >}}

{{< spoiler text="I quant val la <strong>gravetat</strong> en altres <strong>astres</strong> del <strong>sistema solar</strong>? Fes clic aquí" >}}
| Astre | $g$ | $\mathrm{m/s^2}$ |
| --- | :---: | :---: |
| Sol :sunny: | 28.02 | 274.8 |
| Júpiter &#9795; | 2.53 | 24.8 |
| Neptú &#9798; | 1.14 | 11.2 |
| Saturn &#9796; | 1.07 | 10.4 |
| Terra &#9793; | 1 | 9.8 |
| Venus &#9792; | 0.90 | 8.9 |
| Urà &#9797; | 0.89 | 8.7 |
| Mart &#9794; | 0.38 | 3.7 |
| Mercuri &#9791; | 0.38 | 3.7 |
| Lluna :crescent_moon: | 0.17 | 1.6 |

Descobreix a quina altura podries saltar en altres planetes amb aquest genial **vídeo**:

{{< youtube D8H1RNtka6s >}}

{{< /spoiler >}}

### Exemple
{{% callout example %}}
<br>

> Des del terrat d'un gratacel de 120&thinsp;m d'altura es llança una pedra amb velocitat de 5&thinsp;m/s, cap avall. Calcular: a) Temps que triga a arribar al terra, b) velocitat amb què xoca contra el terra.

---

Escrivim l'**equació del moviment** (1) de la pedra:
$$
y(t) = y_0 + v_0 t + \frac{1}{2}at^2, \tag{1}
$$
on $y_0 = 120\thinspace\mathrm m$, $v_0 = -5\thinspace\mathrm{m/s}$ (cap avall) i $a=-g=-9.8\thinspace\mathrm{m/s^2 }$, de manera que l'equació particularitzada queda:
$$
y(t) = 120 - 5t + \frac{1}{2}\cdot (-9.8)\cdot t^2 = 120-5t-4.9t^2
$$

a) De l'equació (1) podem aïllar el temps que triga en arribar a terra, sabent que quan arriba a terra, $y=0$:

$$
\begin{gathered}
	0 = 120 - 5t -4.9t^2 \\
	4.9t^2+5t-120=0 \\
	t = \frac{-5\pm \sqrt{5^2-4\cdot 4.9\cdot (-120)}}{2\cdot 4.9} = \frac{-5\pm \sqrt{2377}}{9.8} =  \begin{cases}
4.5\thinspace\mathrm s \\
\xcancel{-5.5\thinspace\mathrm s}
\end{cases}
\end{gathered}
$$

b) Per calcular la velocitat amb què xoca contra el terra podem utilitzar l'equació (2) o la (3):

Utilitzant l'equació (2)
: Substituint el temps pel temps d'arribada a terra:
	$$
	v(t) = v_0 + at = -5-9.8t = -5-9.8\cdot 4.5 = -48.8\thinspace\mathrm{m/s}
	$$

Utilitzant l'equació (3)
: Aneu amb compte en calcular $\Delta x = x-x_0 = 0-120 = -120\thinspace\mathrm{m}$, i imposant el signe $-$ quan aïlleu $v$:
	$$
	v^2-v_0^2 = 2a\Delta x \tag{3}
	$$
	$$
	\begin{align*}
	v = - \sqrt{v_0^2 + 2a\Delta x} &= - \sqrt{(-5)^2 + 2\cdot (-9.8)\cdot (0-120)} \\\\
	  &= -48.8\thinspace\mathrm{m/s}
	\end{align*}
	$$

{{< figure library="true" src="movimientos-4ESO/lanzamiento-vertical.svg" title="Representació gràfica del llançament vertical, on s'observa com en els primers intervals de temps la distància recorreguda és menor que en els intervals finals, a causa de l'increment de la velocitat." lightbox="false" width="100%" >}}

{{< figure library="true" src="movimientos-4ESO/lanzamiento-vertical-posicion-tiempo.svg" title="Gràfica de la posició de la pedra en funció del temps." lightbox="false" width="100%" >}}

{{< figure library="true" src="movimientos-4ESO/lanzamiento-vertical-velocidad-tiempo.svg" title="Gràfica de la velocitat de la pedra en funció del temps." lightbox="false" width="100%" >}}

{{% /callout %}}

{{< figure library="true" src="movimientos-4ESO/bola-billar-fqsaja.jpg" title="Fotografia d'una bola de billar caient. Presa pel [Departament de Física i Química de l'IES Valle del Saja](http://www.fqsaja.com). Més informació [aquí](https://twitter.com/fqsaja1/status/1334197067279966208)." lightbox="true" >}}

## Trobades
Es tracta de situacions en les quals dos cossos, típicament movent-se amb un MRU o un MRUA, comencen en posicions distintes i acaben trobant-se al cap d'un cert temps.

Seguim aquests **tres passos**:

1. **Escriure** les **equacions de la posició** de cada cos.
2. **Imposar** la condició de **trobada**, és a dir, que totes dues posicions coincideixen quan es troben.
3. **Aïllar** la magnitud que em demanin.

### Exemple
{{% callout example %}}
<br>

> Un cotxe <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚗</span> es desplaça per una carretera que és paral·lela a la via d'un tren. El cotxe es deté davant un semàfor que està amb llum vermella en el mateix instant que passa un tren <span style="display: inline-block;-moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);">🚞</span> amb una rapidesa constant de $12\thinspace\mathrm{m/s}$. El cotxe roman detingut durant $6\thinspace\mathrm s$ i després arrenca amb una acceleració constant de $2\thinspace\mathrm{m/s^2}$. Determineu: <br>
a) El temps que fa servir el cotxe a arribar al tren, mesurat des de l'instant en què es va aturar davant del semàfor.<br>
b) La distància que va recórrer el cotxe des del semàfor fins que va arribar al tren. <br>
c) La rapidesa del cotxe a l'instant que arriba al tren.

---

a) El primer que fem és escriure les **equacions del moviment** de cada mòbil:

$$
\begin{align*}
	\text{Cotxe (MRUA): } x_\mathrm c &= x_{0_\mathrm c} + v_{0_\mathrm c}(t-t_{0_\mathrm c})+\frac{1}{2}a_\mathrm c(t-t_{0_\mathrm c})^2 \\
	\text{Tren (MRU): } x_\mathrm t &= x_{0_\mathrm t} + v_\mathrm t(t-t_{0_\mathrm t})
\end{align*}
$$

**Particularitzem** per al nostre cas:

$$
\begin{gathered}
x_{0_\mathrm c}=x_{0_\mathrm t}=0 \\
v_{0_\mathrm c}=0;\quad v_\mathrm t = 12\thinspace\mathrm{m/s} \\
a_\mathrm c = 2\thinspace\mathrm{m/s^2} \\
t_{0_\mathrm c}=6\thinspace\mathrm s;\quad t_{0_\mathrm t} = 0
\end{gathered}
$$

$$
\begin{aligned}
	\text{Cotxe (MRUA): } x_\mathrm c &= 0 + 0\cdot(t-6)+\frac{1}{2}\cdot 2\cdot(t-6)^2 \\
	 &= (t-6)^2 = t^2-12t+36 \\
	\text{Tren (MRU): } x_\mathrm t &= 0 + 12\cdot(t-0) = 12t
\end{aligned}
$$

A continuació imposem la **condició per trobar-se**:

$$
\begin{aligned}
x_\mathrm c &= x_\mathrm t \\
t^2-12t+36 &= 12t \\
t^2-24t+36 &= 0
\end{aligned}
$$

Aïllem el **temps de trobada** $t^*$:

$$
t^* = \frac{24\pm\sqrt{24^2-4\cdot 1\cdot 36}}{2} = \frac{24\pm \sqrt{432}}{2} =  \begin{cases}
	22.4\thinspace\mathrm s \\\\
	\xcancel{1.6\thinspace\mathrm s}
\end{cases}
$$

on descartem la solució $t=1.6\thinspace\mathrm s$ per ser menor que els 6&thinsp;s que està parat el cotxe en el semàfor. Podem comprovar això representant la gràfica de posició enfront de temps ($x-t$) per a cada mòbil:

{{< figure library="true" src="movimientos-4ESO/encuentro-cat.svg" lightbox="false" width="100%" >}}

on es veu clarament com el cotxe està parat els primers 6&thinsp;s per a després arrencar accelerant (paràbola) i aconseguint al tren als 22.4&thinsp;s.

---

b) Per a calcular la **distància recorreguda** pel cotxe només hem de substituir el temps de trobada, $t^*=22.4\thinspace\mathrm s$, en la seva equació de posició, ja que comença en $x_0 = 0$:

$$
x_{\mathrm c} (t^{*}) = t^{*2}-12t^{*}+36 = 22.4^2-12\cdot 22.4 + 36 = 268.7\thinspace\mathrm m
$$

---

c) La **rapidesa** del cotxe quan arriba a l'alçada del tren la podem calcular utilitzant l'**equació de la velocitat** del cotxe, substituint $t=t^*$:

$$
v_\mathrm c(t^*) = v_{0_\mathrm c} + a_\mathrm c (t^*-t_0) = 0 + 2\cdot(22.4-6) = 32.8\thinspace\mathrm{m/s}
$$

{{% /callout %}}

## Moviment circular uniforme (MCU)

### Característiques
Les **característiques** del **moviment circular uniforme (MCU)** són:

- Trajectòria circular.
- Mòdul de la velocitat constant (acceleració tangencial $a_\mathrm t=0$).

{{< figure library="true" src="movimientos-4ESO/MCU.svg" lightbox="false" width="100%" >}}

### Equació principal

L'**equació principal** del MCU és:
$$
\varphi(t) = \varphi_0 + \omega (t-t_0),
$$

on $\varphi$ és la posició angular final, $\varphi_0$ la posició angular inicial, $\omega$ la freqüència o velocitat angular, $t$ el temps final i $t_0$ el temps inicial.

Període $T$
: El temps que triga el mòbil a completar una volta completa es diu **període**, $T$.

Freqüència $f$
: El nombre de voltes que dona el mòbil per unitat de temps és la **freqüència**, $f$, i està relacionada amb el període:
	$$
	f = \frac{1}{T}\thinspace \left[\frac{1}{\mathrm{s}} = \mathrm{s^{-1}} = \mathrm{Hz}\right]
	$$

La freqüència o velocitat angular, $\omega$, està relacionada amb el període i la freqüència a través de les expressions:
$$
\omega = \frac{\Delta \varphi}{\Delta t} = \frac{2\pi}{T} = 2\pi f
$$

Les magnituds lineals i les angulars es relacionen a través del radi $R$:
$$
\begin{align*}
	e &= \varphi R \\
	v &= \omega R
\end{align*}
$$

### Acceleració centrípeta $a_\mathrm c$
També anomenada **acceleració normal**, és una acceleració que sorgeix del canvi de direcció de la velocitat. El seu mòdul és igual a:
$$
a_\mathrm c = \frac{v^2}{R} = \omega^2 R
$$

i sempre es dirigeix cap al centre de la circumferència.

### Exemple
{{% callout example %}}
<br>

> Les aspes d'un ventilador giren uniformement a raó de 90 voltes per minut (rpm). Determina: a) la seva velocitat angular, en rad/s; b) la velocitat lineal d'un punt situat a $30\thinspace\mathrm{cm}$ del centre; c) el nombre de voltes que donaran les aspes en $5\thinspace\mathrm{min}$.

---

a) Utilitzem factors de conversió:

$$
\omega = 90\thinspace\mathrm{rpm} = 90\thinspace\frac{\cancel{\mathrm{rev}}}{\cancel{\mathrm{min}}} \cdot \frac{2\pi\thinspace\mathrm{rad}}{1\thinspace\cancel{\mathrm{rev}}} \cdot \frac{1\thinspace\cancel{\mathrm{min}}}{60\thinspace\mathrm{s}} = 3\pi\thinspace\mathrm{rad/s} \approx 9.4\thinspace\mathrm{rad/s}
$$

---

b) Utilitzem la relació entre les velocitats lineal i angular, amb $R=30\thinspace\mathrm{cm} = 0.3\thinspace\mathrm{m}$:
$$
v = \omega R = 3\pi\thinspace\mathrm{rad/s}\cdot 0.3\thinspace\mathrm{m} = 0.9\pi\thinspace\mathrm{m/s} \approx 2.8\thinspace\mathrm{m/s}
$$

---

c) Escrivim l'equació del moviment de les aspes:
$$
\varphi(t) = \varphi_0 + \omega (t-t_0),
$$
on $\varphi_0 = 0$, $\omega = 90\thinspace\mathrm{rpm}$ i $t_0 = 0$, és a dir:
$$
\varphi(t) = 90t\thinspace[\mathrm{rev}]
$$
Substituint el temps per $t=5\thinspace\mathrm{min}$, obtenim l'espai angular en voltes (rev):
$$
\varphi(5\thinspace\mathrm{min}) = 90\thinspace\mathrm{rev/\cancel{min}}\cdot 5\thinspace\cancel{\mathrm{min}} = 450\thinspace\mathrm{rev}
$$

{{% /callout %}}
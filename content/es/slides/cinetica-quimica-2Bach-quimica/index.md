---
title: Cinética química
summary: "Velocidad de reacción. Ecuaciones cinéticas. Orden de reacción. Mecanismos de reacción."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/cinetica-quimica/diapositivas"

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

# Cinética química

- [Teorías de reacciones químicas](#/2)
- [Mecanismos de reacción](#/3)
- [Velocidad de reacción](#/4)
- [Ecuaciones cinéticas](#/5)
- [Factores que influyen en la velocidad de reacción](#/6)

Descarga estas diapositivas en formato PDF[{{< icon name="download" pack="fas" >}}](#/PDF)

</section>

---

La **cinética química** es la **rama** de la **química física** que se ocupa de **comprender** las **velocidades** de las **reacciones químicas**.

---

{{% section %}}

## Teorías de reacciones químicas

- [Teoría de colisiones](#/2/1)
- [Teoría del estado de transición o del complejo activado](#/2/5)

(continúa hacia abajo)

👇

---

### Teoría de colisiones
La **teoría de colisiones**, propuesta por Lewis en 1918, explica una reacción desde el punto de vista dinámico.

---

Nos dice que las reacciones se producen a partir de choques entre las moléculas de los reactivos.

---

Para que estos choques sean **eficaces**, las moléculas han de tener suficiente energía (**energía de activación**) y una orientación adecuada.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-colisiones.svg" title="Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

---

### Teoría del estado de transición o del complejo activado

La **teoría del estado de transición**, propuesta por Henry Eyring en 1935, explica una reacción química desde el punto de vista energético.

---

Cuando las moléculas de los reactivos chocan, dan lugar a un **estado de transición**, muy inestable, donde se forma un **complejo activado**, en el que unos enlaces se están formando y otros rompiendo.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-estado-transicion.svg" title="Cuanto menor sea la energía de activación, más rápida será la reacción química." lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Mecanismos de reacción

El **mecanismo** de una **reacción** es el conjunto de procesos o reacciones elementales por los que se produce el cambio químico global.

(continúa hacia abajo)

👇

---

Las especies que no aparecen en la reacción global se denominan **intermedios de reacción**, ya que se producen en un proceso elemental pero se consumen en otro.

---

La velocidad de una reacción viene determinada por la reacción elemental más lenta, llamada **etapa limitante** o **controlante** de la **velocidad**.

{{% /section %}}

---

{{% section %}}

## Velocidad de reacción

Es la **velocidad** a la que **ocurre** una **reacción química**. En una **ecuación química** general:

$$
a\mathrm A + b\mathrm B \longrightarrow c\mathrm C + d\mathrm D,
$$

(continúa hacia abajo)

👇

---

$a$, $b$, $c$ y $d$ representan los **coeficientes estequiométricos** mientras que A, B, C y D representan los **símbolos químicos** de los átomos o la **fórmula molecular** de los compuestos que reaccionan (lado izquierdo) y los que se producen (lado derecho).

---

Definimos la **velocidad instantánea de reacción**, $v$, como:

$$
v = - \frac{1}{a} \frac{\mathrm d [\mathrm A]}{\mathrm d t} = - \frac{1}{b} \frac{\mathrm d [\mathrm B]}{\mathrm d t} = \frac{1}{c} \frac{\mathrm d [\mathrm C]}{\mathrm d t} = \frac{1}{d} \frac{\mathrm d [\mathrm D]}{\mathrm d t},
$$

donde [ ] representa **concentración**, medida en mol/L.

---

En general, la velocidad de una reacción química disminuye con el tiempo y se determina experimentalmente, midiendo la concentración a intervalos de tiempo conocidos.

---

Notar que la velocidad referida a los reactivos (A y B) presenta un signo menos (–), para transformar la variación (negativa) de la concentración de éstos en una velocidad positiva.

{{% /section %}}

---

{{% section %}}

## Ecuaciones cinéticas

**Relacionan** la **velocidad** de **reacción** con la **concentración** de los **reactivos**:

$$
v = k[\mathrm A]^n[\mathrm B]^m,
$$

(continúa hacia abajo)

👇

---

donde $k$ es la constante de velocidad (${\uparrow}k\rightarrow {\uparrow} v$); [A] y [B] las concentraciones (molares) de los reactivos; y $n$ y $m$ son los órdenes de reacción parciales ($\text{orden total} = n+m$).

---

En el caso de **reacciones elementales** (una sola etapa), los órdenes parciales coinciden con los coeficientes estequiométricos, por lo que el orden total coincide con la **molecularidad**.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/orden-reaccion.svg" lightbox="false" width="100%" >}}

---

### Vida media o periodo de semireacción

Definimos la **vida media** o **periodo de semireacción**, $t_{1/2}$, como el tiempo necesario para que la concentración de un determinado reactivo se reduzca a la mitad.

<table class=".table" style="font-size:23px">
<thead>
<tr>
<th style="text-align:center">Orden</th>
<th style="text-align:center">0</th>
<th style="text-align:center">1</th>
<th style="text-align:center">2</th>
<th style="text-align:center">3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Integración</td>
<td style="text-align:center">&nbsp; &nbsp; <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="18" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub><mo>−</mo><mi>k</mi><mi>t</mi></math></mjx-assistive-mml></mjx-container> &nbsp; &nbsp;</td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="19" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c22C5"></mjx-c></mjx-mo><mjx-msup space="3"><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c65"></mjx-c></mjx-mi></mjx-texatom><mjx-script style="vertical-align: 0.363em;"><mjx-texatom size="s" texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msup></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub><mo>⋅</mo><msup><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">e</mi></mrow><mrow data-mjx-texclass="ORD"><mo>−</mo><mi>k</mi><mi>t</mi></mrow></msup></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center">&nbsp; &nbsp; <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="20" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow><mrow><mn>1</mn><mo>+</mo><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container> &nbsp; &nbsp;</td>
<td style="text-align:center">&nbsp; &nbsp; <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="21" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msqrt><mjx-sqrt><mjx-surd><mjx-mo class="mjx-lop"><mjx-c class="mjx-c221A TEX-S2"></mjx-c></mjx-mo></mjx-surd><mjx-box style="padding-top: 0.339em;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msubsup><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.297em; margin-left: 0px;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-spacer style="margin-top: 0.18em;"></mjx-spacer><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msubsup><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-box></mjx-sqrt></mjx-msqrt></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow><msqrt><mn>1</mn><mo>+</mo><mn>2</mn><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msubsup><mo stretchy="false">]</mo><mn>0</mn><mn>2</mn></msubsup><mi>k</mi><mi>t</mi></msqrt></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
</tr>
<tr>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="22" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.177em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>t</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><mn>2</mn></mrow></msub></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="23" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mrow><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="24" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-n"><mjx-c class="mjx-c6C"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c2061"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="2"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mrow><mi>ln</mi><mo data-mjx-texclass="NONE">⁡</mo><mn>2</mn></mrow><mi>k</mi></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="25" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mn>1</mn><mrow><mi>k</mi><mo stretchy="false">[</mo><mi>A</mi><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="26" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c33"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-msubsup><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.297em; margin-left: 0px;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-spacer style="margin-top: 0.18em;"></mjx-spacer><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msubsup></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mn>3</mn><mrow><mn>2</mn><mi>k</mi><mo stretchy="false">[</mo><mi>A</mi><msubsup><mo stretchy="false">]</mo><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
</tr>
</tbody>
</table>

{{% /section %}}

---

{{% section %}}

## Factores que influyen en la velocidad de reacción

- [Naturaleza de los reactivos](#/6/1)
- [Estado de agregación y grado de división de los reactivos](#/6/3)
- [Concentración de los reactivos](#/6/5)
- [Temperatura](#/6/6)
- [Catalizadores](#/6/8)

(continúa hacia abajo)

👇

---

### Naturaleza de los reactivos

La **naturaleza** y la **fuerza** de los **enlaces** en las moléculas **reactivas** influyen en gran medida en la velocidad de su transformación en productos.

---

Las sustancias iónicas suelen reaccionar más rápidamente que las covalentes a temperatura ambiente.

---

### Estado de agregación y grado de división de los reactivos

Cuando los reactivos están en estados distintos, la reacción sólo puede ocurrir en su área de contacto.

---

Esto significa que **cuanto más finamente dividido** esté un **reactivo** sólido o líquido, **mayor** será su **área** de **superficie** por unidad de volumen y **mayor** será el **contacto** con el otro reactivo, por lo que la **reacción** será **más rápida**.

$$				
v_\text{gas} > 	v_\text{líquido} > v_\text{sólido}
$$

---

### Concentración de los reactivos

La velocidad de reacción depende de las concentraciones de los reactivos:

$$
v = k[\mathrm A]^n[\mathrm B]^m
$$

**Cuanto mayor** sea la **concentración**, más moléculas habrá y más probable será que colisionen y reaccionen entre sí, dando lugar a un **aumento** de la **velocidad** de **reacción**.

---

### Temperatura

A **mayor temperatura**, las moléculas tienen más energía térmica y son más susceptibles de chocar eficazmente, **aumentando** la **velocidad** de **reacción**.

---

La **ecuación de Arrhenius** relaciona la constante de velocidad $k$ con la temperatura $T$:

$$
k = A\mathrm e^{-\frac{E_\mathrm a}{RT}},
$$

donde $A$ es el factor de frecuencia, que refleja la frecuencia de las colisiones, $E_\mathrm a$ es la energía de activación y $R = 8.31\thinspace \mathrm J\thinspace\mathrm{mol}^{-1}\thinspace\mathrm K^{-1}$ es la constante universal de los gases ideales.

---

### Catalizadores

Un **catalizador** es una **sustancia** que **altera** la **velocidad** de una **reacción** química sin consumirse durante la misma.

---

Distinguimos entre **catalizadores**:

#### Positivos

**Aumentan** la **velocidad** de reacción disminuyendo la energía de activación.

#### Negativos (inhibidores)

**Disminuyen** la **velocidad** de reacción aumentando $E_\mathrm a$.

---

Distinguimos también  entre **catálisis homogénea** o **heterogénea** dependiendo de si la fase del catalizador es la misma o no que la de los reactivos.

---

#### Catálisis enzimática

Las **proteínas** que actúan como **catalizadores** en las **reacciones bioquímicas** se llaman **enzimas**.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/catalisis-enzimatica.svg" title="Modelo de llave y cerradura." lightbox="false" width="100%" >}}

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

{{< icon name="download" pack="fas" >}} Pincha [**aquí**](?print-pdf#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>
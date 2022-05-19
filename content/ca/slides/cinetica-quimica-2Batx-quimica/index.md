---
title: Cinètica química
url: "/recursos-fisica-quimica/apunts/2batx/quimica/cinetica-quimica/diapositives"
summary: "Velocitat de reacció. Equacions cinètiques. Ordre de reacció. Mecanismes de reacció."

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

# Cinètica química

- [Teories de reaccions químiques](#/2)
- [Mecanismes de reacció](#/3)
- [Velocitat de reacció](#/4)
- [Equacions cinètiques](#/5)
- [Factors que influeixen en la velocitat de reacció](#/6)

Descarrega aquestes diapositives en format PDF[{{< icon name="download" pack="fas" >}}](?print-pdf#)

</section>

---

La **cinètica química** és la **branca** de la **química física** que s'ocupa de **comprendre** les **velocitats** de les **reaccions químiques**.

---

{{% section %}}

## Teories de reaccions químiques

- [Teoria de col·lisions](#/2/1)
- [Teoria de l'estat de transició o del complex activat](#/2/5)

(continua cap avall)

👇🏼

---

### Teoria de col·lisions
La **teoria de col·lisions**, proposada per Lewis al 1918, explica una reacció des del punt de vista dinàmic.

---

Ens diu que les reaccions es produeixen a partir de xocs entre les molècules dels reactius.

---

Perquè aquests xocs siguin **eficaços**, les molècules han de tenir suficient energia (**energia d'activació**) i una orientació adequada.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-colisiones-cat.svg" title="Adaptada de https://www.coursehero.com/sg/general-chemistry/collision-theory/." lightbox="false" width="100%" >}}

---

### Teoria de l'estat de transició o del complex activat

La **teoria de l'estat de transició**, proposada per Henry Eyring al 1935, explica una reacció química des del punt de vista energètic.

---

Quan les molècules dels reactius xoquen, donen lloc a un **estat de transició**, molt inestable, on es forma un **complex activat**, en el qual uns enllaços s'estan formant i altres trencant.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/teoria-estado-transicion-cat.svg" title="Quant menor sigui l'energia d'activació, més ràpida serà la reacció química." lightbox="false" width="100%" >}}

{{% /section %}}

---

{{% section %}}

## Mecanismes de reacció

El **mecanisme** d'una **reacció** és el conjunt de processos o reaccions elementals pels quals es produeix el canvi químic global.

(continua cap avall)

👇🏼

---

Les espècies que no apareixen en la reacció global es denominen **intermedis de reacció**, ja que es produeixen en un procés elemental però es consumeixen en un altre.

---

La velocitat d'una reacció ve determinada per la reacció elemental més lenta, anomenada **etapa limitant** de la **velocitat**.

{{% /section %}}

---

{{% section %}}

## Velocitat de reacció

És la **velocitat** a la qual **ocorre** una **reacció química**. En una **equació química** general:

$$
a\mathrm A + b\mathrm B \longrightarrow c\mathrm C + d\mathrm D,
$$

(continua cap avall)

👇🏼

---

$a$, $b$, $c$ i $d$ representen els **coeficients estequiomètrics** mentre que A, B, C i D representen els **símbols químics** dels àtoms o la **fórmula molecular** dels compostos que reaccionen (costat esquerre) i els que es produeixen (costat dret).

---

Definim la **velocitat instantània de reacció**, $v$, com:

$$
v = - \frac{1}{a} \frac{\mathrm d [\mathrm A]}{\mathrm d t} = - \frac{1}{b} \frac{\mathrm d [\mathrm B]}{\mathrm d t} = \frac{1}{c} \frac{\mathrm d [\mathrm C]}{\mathrm d t} = \frac{1}{d} \frac{\mathrm d [\mathrm D]}{\mathrm d t},
$$

on [ ] representa **concentració**, mesurada en mol/L.

---

En general, la velocitat d'una reacció química varia amb el temps i es determina experimentalment, mesurant la concentració a intervals de temps coneguts.

---

Advertir  que la velocitat referida als reactius (A i B) presenta un signe menys ($-$), ja que la concentració d'aquests disminueix amb el temps i per tant la seva variació és negativa.

{{% /section %}}

---

{{% section %}}

## Equacions cinètiques

**Relacionen** la **velocitat** de **reacció** amb la **concentració** dels **reactius**:

$$
v = k[\mathrm A]^n[\mathrm B]^m,
$$

(continua cap avall)

👇🏼

---

on $k$ és la constant de velocitat (${\uparrow}k\rightarrow {\uparrow} v$); [A] i [B] les concentracions (molars) dels reactius; i $n$ i $m$ són els ordres de reacció parcials ($\text{ordre total} = n+m$).

---

En el cas de **reaccions elementals** (una sola etapa), els ordres parcials coincideixen amb els coeficients estequiomètrics, per la qual cosa l'ordre total coincideix amb la **molecularitat**.

---

{{< figure library="true" src="cinetica-quimica-2bach-quimica/orden-reaccion-cat.svg" lightbox="false" width="100%" >}}

---

### Vida mitjana o període de semireacció

Definim la **vida mitjana** o **període de semireacció**, $t_{1/2}$, com el temps necessari perquè la concentració d'un determinat reactiu es redueixi a la meitat.

<table class=".table" style="font-size:24px">
<thead>
<tr>
<th style="text-align:center">Ordre</th>
<th style="text-align:center">0</th>
<th style="text-align:center">1</th>
<th style="text-align:center">2</th>
<th style="text-align:center">3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Integració</td>
<td style="text-align:center">&nbsp; &nbsp; <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="19" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub><mo>−</mo><mi>k</mi><mi>t</mi></math></mjx-assistive-mml></mjx-container> &nbsp; &nbsp;</td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="20" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c22C5"></mjx-c></mjx-mo><mjx-msup space="3"><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c65"></mjx-c></mjx-mi></mjx-texatom><mjx-script style="vertical-align: 0.363em;"><mjx-texatom size="s" texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msup></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub><mo>⋅</mo><msup><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">e</mi></mrow><mrow data-mjx-texclass="ORD"><mo>−</mo><mi>k</mi><mi>t</mi></mrow></msup></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center">&nbsp; &nbsp; <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="21" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow><mrow><mn>1</mn><mo>+</mo><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container> &nbsp; &nbsp;</td>
<td style="text-align:center">&nbsp; &nbsp; <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="22" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msqrt><mjx-sqrt><mjx-surd><mjx-mo class="mjx-lop"><mjx-c class="mjx-c221A TEX-S2"></mjx-c></mjx-mo></mjx-surd><mjx-box style="padding-top: 0.339em;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msubsup><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.297em; margin-left: 0px;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-spacer style="margin-top: 0.18em;"></mjx-spacer><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msubsup><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-box></mjx-sqrt></mjx-msqrt></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow><msqrt><mn>1</mn><mo>+</mo><mn>2</mn><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msubsup><mo stretchy="false">]</mo><mn>0</mn><mn>2</mn></msubsup><mi>k</mi><mi>t</mi></msqrt></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
</tr>
<tr>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="23" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.177em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>t</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><mn>2</mn></mrow></msub></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="24" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mi class="mjx-n"><mjx-c class="mjx-c41"></mjx-c></mjx-mi></mjx-texatom><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mrow><mo stretchy="false">[</mo><mrow data-mjx-texclass="ORD"><mi data-mjx-auto-op="false" mathvariant="normal">A</mi></mrow><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="25" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-n"><mjx-c class="mjx-c6C"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c2061"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="2"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mrow><mi>ln</mi><mo data-mjx-texclass="NONE">⁡</mo><mn>2</mn></mrow><mi>k</mi></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="26" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mn>1</mn><mrow><mi>k</mi><mo stretchy="false">[</mo><mi>A</mi><msub><mo stretchy="false">]</mo><mn>0</mn></msub></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
<td style="text-align:center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" tabindex="0" ctxtmenu_counter="27" style="font-size: 89.6%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mstyle><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c33"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c5B"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-msubsup><mjx-mo class="mjx-n"><mjx-c class="mjx-c5D"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.297em; margin-left: 0px;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-spacer style="margin-top: 0.18em;"></mjx-spacer><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msubsup></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-mstyle></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true" scriptlevel="0"><mfrac><mn>3</mn><mrow><mn>2</mn><mi>k</mi><mo stretchy="false">[</mo><mi>A</mi><msubsup><mo stretchy="false">]</mo><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac></mstyle></math></mjx-assistive-mml></mjx-container></td>
</tr>
</tbody>
</table>

{{% /section %}}

---

{{% section %}}

## Factors que influeixen en la velocitat de reacció

- [Naturalesa dels reactius](#/6/1)
- [Estat d'agregació i grau de divisió dels reactius](#/6/3)
- [Concentració dels reactius](#/6/5)
- [Temperatura](#/6/6)
- [Catalizadors](#/6/8)

(continua cap avall)

👇🏼

---

### Naturalesa dels reactius

La **naturalesa** i la **força** dels **enllaços** en les molècules **reactives** influeixen en gran manera en la velocitat de la seva transformació en productes.

---

Les substàncies iòniques solen reaccionar més ràpidament que les covalents a temperatura ambient.

---

### Estat d'agregació i grau de divisió dels reactius

Quan els reactius estan en estats diferents, la reacció només pot ocórrer en la seva àrea de contacte.

---

Això significa que **com més finament dividit** estigui un **reactiu** sòlid o líquid, **major** serà la seva **àrea** de **superfície** per unitat de volum i **major** serà el **contacte** amb l'altre reactiu, per la qual cosa la **reacció** serà **més ràpida**.

$$				
v_\text{gas} > 	v_\text{líquid} > v_\text{sòlid}
$$

---

### Concentració dels reactius

La velocitat de reacció depèn de les concentracions dels reactius:

$$
v = k[\mathrm A]^n[\mathrm B]^m
$$

**Com més gran** sigui la **concentració**, més molècules hi haurà i més probable serà que col·lideixin i reaccionin entre si, donant lloc a un **augment** de la **velocitat** de **reacció**.

---

### Temperatura

A **major temperatura**, les molècules tenen més energia tèrmica i són més susceptibles de xocar eficaçment, **augmentant** la **velocitat** de **reacció**.

---

L'**equació d'Arrhenius** relaciona la constant de velocitat $k$ amb la temperatura $T$:

$$
k = A\mathrm e^{-\frac{E_\mathrm a}{RT}},
$$

on $A$ és el factor de freqüència, que reflecteix la freqüència de les col·lisions, $E_\mathrm a$ és l'energia d'activació i $R = 8.31\thinspace \mathrm J\thinspace\mathrm{mol}^{-1}\thinspace\mathrm K^{-1}$ és la constant universal dels gasos ideals.

---

### Catalizadors

Un **catalitzador** és una **substància** que **altera** la **velocitat** d'una **reacció** química sense consumir-se durant aquesta.

---

Distingim entre **catalitzadors**:

#### Positius

**Augmenten** la **velocitat** de reacció disminuint l'energia d'activació.

#### Negatius (inhibidors)

**Disminueixen** la **velocitat** de reacció augmentant $E_\mathrm a$.

---

Distingim també entre **catàlisi homogènia** o **heterogènia** depenent de si la fase del catalitzador és la mateixa o no que la dels reactius.

---

#### Catàlisi enzimàtica

Les **proteïnes** que actuen com a **catalitzadors** a les **reaccions bioquímiques** es diuen **enzims**.

{{< figure library="true" src="cinetica-quimica-2bach-quimica/catalisis-enzimatica-cat.svg" title="Model d'ajust induït." lightbox="false" width="100%" >}}

{{% /section %}}
---
title: Química orgánica
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/quimica-organica"
subtitle: Isomería, reactividad y polímeros
summary: "Isomería, reactividad y polímeros."
breadcrumbs: ["recursos-fisica-quimica", "apuntes", "2bach", "quimica"]
authors:
  - alba-lopez-valenzuela
  - rodrigo-alcaraz-de-la-osa
  - angela-alcaraz-de-la-osa
  - leticia-cabezas
tags:
  - apuntes
  - 2º Bach
  - orgánica
  - reacciones-químicas
  - rédox
  - isomería
  - polímeros
categories:
  - Química
weight: 9

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**Colin Behrens**](https://pixabay.com/es/users/colin00b-346653/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:
  - icon_pack: fas
    icon:
    name: 📜 Póster isomería y reactividad
    url: quimica-organica-poster.pdf
  - icon_pack: fas
    icon:
    name: 📜 Póster polímeros
    url: https://fisiquimicamente.com/blog/2022/12/01/tipos-de-plasticos/tipos-plasticos-poster.pdf
  - icon_pack: fas
    icon:
    name: ✏️ Ejercicios
    url: quimica-organica-ejercicios.pdf
  - icon_pack: fas
    icon:
    name: 📝 Frikiexámenes
    url: redox-quimica-organica-frikiexamenes.pdf
  - icon_pack: fas
    icon:
    name: 🎓 Ejercicios EBAU
    url: https://fisiquimicamente.com/recursos-fisica-quimica/ebau/quimica/por-temas/quimica-organica/

slides: quimica-organica-2Bach-quimica

threedmol: true
math: true
---

{{% toc %}}

{{% callout note %}}
**Repasa** la **formulación** y la **nomenclatura** de **Química Orgánica** con estos [**apuntes**]({{< relref "apuntes-formulacion/organica" >}}) actualizados a las últimas recomendaciones de la IUPAC de 2013.
{{% /callout %}}

{{% callout note %}}
Las **representaciones tridimensionales de moléculas** son posibles gracias a [**3Dmol.js**](https://3dmol.csb.pitt.edu):

Nicholas Rego and David Koes

3Dmol.js: molecular visualization with WebGL

Bioinformatics (2015) 31 (8): 1322–1324 https://doi.org/10.1093/bioinformatics/btu829
{{% /callout %}}

## Isomería

Dos compuestos son **isómeros**[^1] entre sí si tienen el mismo número y tipo de átomos, es decir, si tienen la **misma fórmula molecular**.

[^1]: La palabra **isómero** es un neologismo acuñado por el químico sueco [Jöns Jacob Berzelius (1779–1848)](https://es.wikipedia.org/wiki/Jöns_Jacob_Berzelius), formada del griego ισo (isos = igual) y μ𝜀ρo𝜍 (meros = parte, porción).

### Grado de insaturación (GI)

Dos compuestos isómeros tienen el **mismo número** de **insaturaciones** (enlaces dobles/triples o anillos), las cuales pueden determinarse calculando el **grado de insaturación**:

$$
\mathrm{GI} = 1 + C - \left(\frac{H+X-N}{2}\right),
$$

donde $C$ es el número de átomos de carbono, $H$ es el número de átomos de hidrógeno, $X$ es el número de átomos de halógenos y $N$ es el número de átomos de nitrógeno.

{{% callout note %}}
La siguiente tabla es una **guía rápida** con casos frecuentes en 2.º Bach: **no es exhaustiva**.
{{% /callout %}}

| GI  | Sin O (hidrocarburos)                               | Con 1 O                                  | Con 2 O                                           |
| :-: | --------------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
|  0  | Alcano                                              | Alcohol, éter                            | Diol, éter-alcohol                                |
|  1  | Alqueno (C=C) o ciclo                               | Aldehído o cetona (C=O)                  | Ácido carboxílico o éster                         |
|  2  | Alquino (C&equiv;C), dieno, ciclo + doble, 2 ciclos | Enona, alquinol, aldehído/cetona + ciclo | Dialdehído, dicetona, cetoaldehído, ácido + doble |

Para $\mathrm{GI} \geq 3$ existen múltiples combinaciones de enlaces dobles, triples y ciclos.

$\mathrm{GI} = 4$ suele indicar la presencia de **benceno** y sus derivados.

Para usar el GI sin perderse en todas las posibilidades:

1. Calcula GI con la fórmula.
2. Cuenta heteroátomos (O, N, X) para acotar familias funcionales.
3. Úsalo como **cribado** y confirma con reactividad, nombre o datos experimentales.

### Isomería constitucional

Se debe a **diferencias** en la **estructura** de los **compuestos**, es decir, cambia cómo están unidos los átomos (tienen diferente conectividad). Dentro de este tipo, hay tres subtipos de isomería:

#### Isomería de cadena

Se presenta en compuestos que difieren en el **esqueleto** de la **cadena carbonada**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/isomeros-cadena.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con estas **moléculas** en **3D**" >}}

##### Butano

{{% 3Dmol data_href="/media/quimica-organica-2Bach/butano.sdf" %}}

##### Metilpropano (isobutano)

{{% 3Dmol data_href="/media/quimica-organica-2Bach/isobutano.mol" %}}
{{< /spoiler >}}

En la siguiente tabla puedes ver el número de isómeros que presentan los hidrocarburos lineales saturados:

| nº C | Nombre  | Isómeros |
| :--: | ------- | :------: |
|  1   | Metano  |    1     |
|  2   | Etano   |    1     |
|  3   | Propano |    1     |
|  4   | Butano  |    2     |
|  5   | Pentano |    3     |
|  6   | Hexano  |    5     |
|  7   | Heptano |    9     |
|  8   | Octano  |    18    |
|  9   | Nonano  |    35    |
|  10  | Decano  |    75    |

#### Isomería de posición

Se presenta en compuestos que difieren en la **posición** de su **grupo funcional**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/isomeros-posicion.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con estas **moléculas** en **3D**" >}}

##### But–2–eno

{{% 3Dmol data_href="/media/quimica-organica-2Bach/but-2-eno.mol" %}}

##### But–1–eno

{{% 3Dmol data_href="/media/quimica-organica-2Bach/but-1-eno.mol" %}}

##### Butan–2–ol

{{% 3Dmol data_href="/media/quimica-organica-2Bach/butan-2-ol.mol" %}}

##### Butan–1–ol

{{% 3Dmol data_href="/media/quimica-organica-2Bach/butan-1-ol.mol" %}}
{{< /spoiler >}}

#### Isomería de función

Se presenta en compuestos que tienen **grupos funcionales distintos**. Suelen ser isómeros de función entre sí:

- alcoholes-éteres,
- aldehídos-cetonas,
- y ácidos carboxílicos-ésteres,

aunque existen otras muchas posibilidades.

{{< figure library="true" src="quimica-organica-2Bach-quimica/isomeros-funcion.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con estas **moléculas** en **3D**" >}}

##### Metil propil éter (metoxipropano)

{{% 3Dmol data_href="/media/quimica-organica-2Bach/metoxipropano.mol" %}}

##### Butan–1–ol

{{% 3Dmol data_href="/media/quimica-organica-2Bach/butan-1-ol.mol" %}}

##### Propanal

{{% 3Dmol data_href="/media/quimica-organica-2Bach/propanal.mol" %}}

##### Propanona (acetona)

{{% 3Dmol data_href="/media/quimica-organica-2Bach/acetona.sdf" %}}

##### Ácido propanoico

{{% 3Dmol data_href="/media/quimica-organica-2Bach/acido-propanoico.mol" %}}

##### Etanoato/acetato de metilo

{{% 3Dmol data_href="/media/quimica-organica-2Bach/acetato-metilo.mol" %}}
{{< /spoiler >}}

### Estereoisomería

En este caso, la estructura de las sustancias es la misma (igual conectividad entre átomos) pero se **diferencian** en su **orientación espacial**.

#### Isomería geométrica (_cis-trans_)

La isomería _cis-trans_ se presenta en algunos alquenos, debido a la incapacidad de rotación del doble enlace. Para que un doble enlace presente isomería _cis-trans_, no puede haber sobre cualquiera de los dos carbonos del doble enlace dos sustituyentes iguales. Dos compuestos con este tipo de isomería geométrica son **diastereoisómeros**, siendo sus propiedades físicas diferentes.

Los isómeros _cis_ tienen ambos sustituyentes del doble enlace hacia un lado, los _trans_ hacia lados opuestos:

{{< figure library="true" src="quimica-organica-2Bach-quimica/cis-trans.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con estas **moléculas** en **3D**" >}}

##### _cis_–1,2–dicloroeteno

{{% 3Dmol data_href="/media/quimica-organica-2Bach/cis-12-dicloroeteno.mol" %}}

##### _trans_–1,2–dicloroeteno

{{% 3Dmol data_href="/media/quimica-organica-2Bach/trans-12-dicloroeteno.mol" %}}
{{< /spoiler >}}

El 1,1–dicloroeteno no puede presentar isomería _cis-trans_:

{{< figure library="true" src="quimica-organica-2Bach-quimica/11-dicloroeteno.svg" lightbox="false" width="50%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con esta **molécula** en **3D**" >}}
{{% 3Dmol data_href="/media/quimica-organica-2Bach/11-dicloroeteno.mol" %}}
{{< /spoiler >}}

Este tipo de isomería se da también en compuestos con un plano de simetría, debido a la imposibilidad de rotación:

{{< figure library="true" src="quimica-organica-2Bach-quimica/cis-trans-plano-rotacion.svg" lightbox="false" width="100%" theme="light" >}}

##### Notación E-Z

Cuando existen varios sustituyentes distintos, la nomenclatura _cis-trans_ en alquenos puede resultar ambigua. En estos casos se adopta la nomenclatura E-Z. En alemán:

- E de _entgegen_ (separados).
- Z de _zusammen_ (juntos).

En cada carbono del doble enlace, el sustituyente de mayor número atómico tiene mayor jerarquía. En caso de empate, se sigue el mismo criterio con los átomos unidos a ellos, hasta desempatar. El isómero Z será el que tenga los dos sustituyentes de mayor jerarquía del mismo lado del doble enlace y el isómero E será el que los tenga a distinto lado:

{{< figure library="true" src="quimica-organica-2Bach-quimica/E-Z.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con estas **moléculas** en **3D**" >}}

###### (Z)–1–bromo–1–cloro–2–metilbut–1–eno

{{% 3Dmol data_href="/media/quimica-organica-2Bach/Z-1-bromo-1-cloro-2-metilbut-1-eno.mol" %}}

###### (E)–1–bromo–1–cloro–2–metilbut–1–eno

{{% 3Dmol data_href="/media/quimica-organica-2Bach/E-1-bromo-1-cloro-2-metilbut-1-eno.mol" %}}
{{< /spoiler >}}

Un ejemplo de lo diferentes que pueden llegar a ser dos isómeros _cis-trans_ lo tenemos con los **ácidos [fumárico](https://es.wikipedia.org/wiki/Ácido_fumárico)** y **[maleico](https://es.wikipedia.org/wiki/Ácido_cis-butenodioico)**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/fumarico-maleico.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con estas **moléculas** en **3D**" >}}

##### Ácido fumárico

{{% 3Dmol data_href="/media/quimica-organica-2Bach/acido-fumarico.mol" %}}

##### Ácido maleico

{{% 3Dmol data_href="/media/quimica-organica-2Bach/acido-maleico.mol" %}}
{{< /spoiler >}}

Siendo el primero fundamental en varias rutas del metabolismo celular, destacando su participación en el [ciclo de Krebs](https://es.wikipedia.org/wiki/Ciclo_de_Krebs); y el segundo tóxico. Sus propiedades físicas son muy diferentes.

#### Isomería conformacional

{{% callout note %}}
La [**isomería conformacional**](https://es.wikipedia.org/wiki/Isomería_conformacional) no es materia de bachillerato ni de EBAU.
{{% /callout %}}

Los alquenos con dobles enlaces conjugados pueden adoptar dos diferentes conformaciones. Por ejemplo, en el **buta–1,3–dieno** los dobles enlaces pueden estar hacia el mismo lado del enlace simple o en lados opuestos. Sería incorrecto referirnos a las dos posibilidades como _cis_ y _trans_ ya que son **conformaciones** (¡dinámico!) y no configuraciones (estático). Es decir, la molécula puede rotar en torno al enlace sencillo e interconvertirse de una conformación a otra, cosa que no puede ocurrir con los isómeros _cis_ y _trans_ debido a la rigidez del doble enlace o del ciclo.

Estos [**confórmeros**](https://es.wikipedia.org/wiki/Isomería_conformacional) se nombran con el prefijo "s" (de "sigma", o de "simple" si prefieres).

{{< figure library="true" src="quimica-organica-2Bach-quimica/conformeros.svg" lightbox="false" width="100%" theme="light" >}}

Como habrás estudiado en Biología, [los anillos de 6 miembros pueden adoptar dos diferentes conformaciones: forma de silla y forma de bote](https://es.wikipedia.org/wiki/Conformación_del_ciclohexano). La forma de silla es más estable, pero la diferencia de estabilidad entre las dos es muy pequeña, por lo que se convierten fácilmente la una en la otra. Estas estructuras presentan isomería conformacional.

{{< figure library="true" src="quimica-organica-2Bach-quimica/glucopiranosa.svg" lightbox="false" width="100%" theme="light" >}}

#### Isomería óptica

La isomería óptica se presenta cuando un compuesto no es superponible con su imagen especular, en cuyo caso se dice que son **enantiómeros**. Para que esto ocurra, la molécula tiene que poseer al menos un carbono con **hibridación sp<sup>3</sup>** y **quiral**. Un carbono quiral es un carbono que tiene 4 sustituyentes distintos:

{{< figure library="true" src="quimica-organica-2Bach-quimica/quiralidad.svg" title="El átomo de carbono negro es un centro quiral porque tiene cuatro sustituyentes diferentes, un átomo de cloro (Cl), un átomo de hidrógeno (H), un átomo de flúor (F) y un átomo de bromo (Br). Las dos estructuras son imágenes especulares la una de la otra que no pueden superponerse. Adaptada de https://www.coursehero.com/sg/general-chemistry/chirality/." lightbox="false" width="100%" >}}

{{% callout warning %}}
Cuidado porque puede ocurrir que un compuesto tenga dos centros quirales y que no presente isomería óptica.
{{% /callout %}}

Este es el tipo de esteroisomería que presentan moléculas esenciales para la vida, como los [aminoácidos](https://es.wikipedia.org/wiki/Aminoácido) y los [monosacáridos](https://es.wikipedia.org/wiki/Monosacárido). Los enantiómeros tienen propiedades físicas idénticas[^3], diferenciándose únicamente en su comportamiento frente a la luz polarizada, pues la desvían de manera distinta. Si el plano de la luz polarizada se desvía a la derecha son sustancias _dextrógiras_ y si se desvía a la izquierda, _levógiras_:

[^3]: Lo cual no significa que su reactividad sea igual. Especialmente sonada fue la llamada [**\*catástrofe** de la **talidomida\***](https://www.medigraphic.com/pdfs/cutanea/mc-2018/mc183r.pdf).

{{< spoiler text="Pincha aquí para ver **animaciones** de **ondas electromagnéticas circularmente polarizadas**" >}}
{{< figure library="false" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Circular.Polarization.Circularly.Polarized.Light_Right.Handed.Animation.305x190.255Colors.gif" title="Una onda circularmene polarizada hacia la derecha desde el punto de vista del observador. Fuente: https://commons.wikimedia.org/wiki/File:Circular.Polarization.Circularly.Polarized.Light_Right.Handed.Animation.305x190.255Colors.gif." lightbox="true" >}}

{{< figure library="false" src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Circular.Polarization.Circularly.Polarized.Light_Left.Hand.Animation.305x190.255Colors.gif" title="Una onda circularmene polarizada hacia la izquierda desde el punto de vista del observador. Fuente: https://commons.wikimedia.org/wiki/File:Circular.Polarization.Circularly.Polarized.Light_Left.Hand.Animation.305x190.255Colors.gif." lightbox="true" >}}
{{< /spoiler >}}

{{< figure library="true" src="quimica-organica-2Bach-quimica/alanina.svg" lightbox="false" width="100%" theme="light" >}}

{{< spoiler text="Pincha aquí para **interactuar** con estas **moléculas** en **3D**" >}}

##### <span style="font-variant:small-caps">d</span>-Alanina

{{% 3Dmol data_href="/media/quimica-organica-2Bach/D-alanina.mol" %}}

##### <span style="font-variant:small-caps">l</span>-Alanina

{{% 3Dmol data_href="/media/quimica-organica-2Bach/L-alanina.mol" %}}
{{< /spoiler >}}

##### Proyecciones de Fischer

Con el fin de facilitar la representación en el plano, se utilizan las **proyecciones de Fischer**, ideadas por el químico alemán Hermann Emil Fischer[^4] en 1891, para representar la disposición espacial de moléculas en las que uno o más átomos de carbono son quirales:

[^4]: ![Fischer](quimica-organica-2Bach-quimica/Fischer.jpg "**Hermann Emil Fischer** (1852–1919) fue un químico alemán, descubridor del [**barbital**](https://es.wikipedia.org/wiki/Barbital) (primer sedativo y somnífero del grupo de los [barbitúricos](https://es.wikipedia.org/wiki/Barbitúrico)). Fue galardonado con el **Premio Nobel de Química en 1902**. Fuente: https://commons.wikimedia.org/wiki/File:Hermann_Emil_Fischer_c1895.jpg.")

{{< figure library="true" src="quimica-organica-2Bach-quimica/proyecciones-fischer.svg" lightbox="false" width="100%" theme="light" >}}

## Reactividad

### Reacciones de sustitución

En este tipo de reacciones un átomo o grupo de átomos de una molécula es sustituido por otro átomo o grupo de átomos de otra molécula:

{{< figure library="true" src="quimica-organica-2Bach-quimica/sustitucion.svg" lightbox="false" width="50%" theme="light" >}}

#### Halogenación de alcanos

Los alcanos experimentan reacciones de sustitución [**radicalarias**](https://es.wikipedia.org/wiki/Reacción_radicalaria)[^5]. Así, se puede conseguir la sustitución de un enlace –C–H por un enlace –C–X por medio de una radiación luminosa.

[^5]:
    Las reacciones radicalarias son las responsables de la formación y destrucción de la capa de ozono. La formación ocurre a través de la reacción en cadena siguiente:
    {{< figure library="true" src="quimica-organica-2Bach-quimica/formacion-ozono.svg" lightbox="false" width="100%" theme="dark" >}}
    Reacción global:
    {{< figure library="true" src="quimica-organica-2Bach-quimica/formacion-ozono-global.svg" lightbox="false" width="100%" theme="dark" >}}
    La destrucción de ozono (O<sub>3</sub>) ocurre a través de una reacción en cadena que necesita un catalizador X:
    {{< figure library="true" src="quimica-organica-2Bach-quimica/destruccion-ozono.svg" lightbox="false" width="100%" theme="dark" >}}
    Reacción global:
    {{< figure library="true" src="quimica-organica-2Bach-quimica/destruccion-ozono-global.svg" lightbox="false" width="100%" theme="dark" >}}

Se llama **sustitución fotoquímica** y es una reacción en la que la luz rompe la molécula de halógeno X<sub>2</sub> (F<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub> o I<sub>2</sub>) dando una reacción en cadena con fórmula general:

{{< figure library="true" src="quimica-organica-2Bach-quimica/radicalaria1.svg" lightbox="false" width="50%" theme="light" >}}

La reacción puede continuar precisando en cada etapa luz o calor. En cada etapa se forma HX como producto. La siguiente reacción está particularizada para (X = Cl). En cada etapa, además del producto de sustitución, se forma HCl:

{{< figure library="true" src="quimica-organica-2Bach-quimica/radicalaria2.svg" lightbox="false" width="100%" theme="light" >}}

#### Sustitución de un halógeno por otro

{{< figure library="true" src="quimica-organica-2Bach-quimica/sustitucion-halogenos.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformación de un derivado halogenado en un alcohol

La [**hidrólisis**](https://es.wikipedia.org/wiki/Hidrólisis) de un haloalcano se lleva a cabo con NaOH que da la sustitución del halógeno por el grupo –OH, dando el alcohol:

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-alcohol.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformación de un derivado halogenado en un éter

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-eter.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformación de un derivado halogenado en una amina primaria

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-amina-primaria.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformación de un derivado halogenado en una amina secundaria (o terciaria)

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogeno-amina-secundaria.svg" lightbox="false" width="100%" theme="light" >}}

#### Transformación de un derivado halogenado en un nitrilo

El ion cianuro, CN<sup>–</sup>, puede sustituir al halógeno de un haloalcano, originando un **nitrilo**. Esta transformación es muy útil porque permite **aumentar en un carbono** la cadena carbonada:

<div align="center">
R–X + KCN &xrarr; R–C&equiv;N + KX
</div>

#### Transformación de un alcohol en un derivado halogenado

Los alcoholes pueden transformarse en haloalcanos mediante reacción con haluros de hidrógeno (HX):

<div align="center">
R–OH + HX &xrarr; R–X + H<sub>2</sub>O
</div>

Esta reacción es un caso de sustitución en la que el grupo –OH es reemplazado por un halógeno.

### Reacciones de adición

Una molécula incorpora a su estructura otra molécula. Ocurren con sustratos con dobles o triples enlaces originando un producto con un mayor grado de saturación.

> La adición en alquenos asimétricos ocurre según la [**regla de Markovnikov**](https://es.wikipedia.org/wiki/Regla_de_Markovnikov), que establece que la adición de un reactivo de tipo HX (H<sub>2</sub>O, HCl, ...) a un doble enlace da lugar a un producto mayoritario en el que el hidrógeno se une al carbono menos sustituido (con más H). El otro producto posible también se forma, pero en menor proporción.

#### Hidrogenación catalítica de alquenos

Se realiza con hidrógeno molecular en presencia de un catalizador, normalmente platino. Es un proceso exotérmico. La reacción transcurre de manera que cada átomo de hidrógeno de la molécula H<sub>2</sub> se añade a uno de los dos carbonos que forman el enlace múltiple en el reactivo, saturando la molécula:

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrogenacion-alquenos.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidrogenación de un alquino

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrogenacion-etino.svg" lightbox="false" width="100%" theme="light" >}}

#### Halogenación de alquenos

De manera análoga a la hidrogenación, el halógeno X<sub>2</sub> añade un átomo de halógeno a cada carbono que forma el enlace múltiple formando un dihalógeno vecinal:

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogenacion-alquenos.svg" lightbox="false" width="100%" theme="light" >}}

##### Halogenación de un alqueno

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogenacion-eteno.svg" lightbox="false" width="100%" theme="light" >}}

##### Halogenación de un alquino

{{< figure library="true" src="quimica-organica-2Bach-quimica/halogenacion-etino.svg" lightbox="false" width="100%" theme="light" >}}

#### Hidrohalogenación de alquenos

El haluro de hidrógeno HX se añade al enlace múltiple siguiendo la [**regla de Markovnikov**](https://es.wikipedia.org/wiki/Regla_de_Markovnikov):

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrohalogenacion-alquenos.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidrohalogenación de un alqueno

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrohalogenacion-propeno.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidrohalogenación de un alquino

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidrohalogenacion-propino.svg" lightbox="false" width="100%" theme="light" >}}

#### Hidratación de alquenos

La reacción sucede en el tratamiento del alqueno con agua y un catalizador ácido fuerte, como el H<sub>2</sub>SO<sub>4</sub>, por un mecanismo similar al de la adición de HX. El agua H<sub>2</sub>O también se añade al enlace múltiple siguiendo la [**regla de Markovnikov**](https://es.wikipedia.org/wiki/Regla_de_Markovnikov):

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidratacion-alquenos.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidratación de un alqueno

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidratacion-propeno.svg" lightbox="false" width="100%" theme="light" >}}

##### Hidratación de un alquino

Ya que los alquinos no reaccionan directamente con ácidos acuosos, uno de los métodos utilizados para la hidratación de alquinos utiliza ion mercurio(2+) como catalizador:

{{< figure library="true" src="quimica-organica-2Bach-quimica/hidratacion-propino.svg" lightbox="false" width="100%" theme="light" >}}

La hidratación de un alquino da un _enol_[^6]. Es interesante que el producto real que se aísla de la hidratación de un alquino no es el alcohol vinílico, o enol, sino que en su lugar es una cetona. Aunque el enol es un intermediario en la reacción, se rearregla inmediatamente a una cetona a través de un proceso llamado [**tautomería cetoenólica**](https://es.wikipedia.org/wiki/Tautómero#La_tautomería_ceto-enol). El equilibrio está muy desplazado a la derecha.

[^6]: Se dice que las formas _ceto_ y _enol_ individuales son [**tautómeros**](https://es.wikipedia.org/wiki/Tautómero), una palabra utilizada para describir dos isómeros constitucionales que rápidamente se interconvierten acompañados por el cambio de posición de un hidrógeno.

{{% callout note %}}
¿Cómo **predecir** el **producto mayoritario**?

- En alquenos simétricos solo hay un producto.
- En alquenos asimétricos, con HX o H<sub>2</sub>O/H<sup>+</sup>, se aplica la [**regla de Markovnikov**](https://es.wikipedia.org/wiki/Regla_de_Markovnikov).
  {{% /callout %}}

### Reacciones de eliminación

Una molécula pierde átomos en posiciones adyacentes y origina una molécula con un enlace doble o triple. Las reacciones de eliminación son las reacciones inversas a las de adición a un doble enlace.

> En las reacciones de eliminación se pierden átomos de dos carbonos vecinales produciéndose mayoritariamente el **doble enlace más sustituido**, según lo que se conoce como [**regla de Záitsev**](https://es.wikipedia.org/wiki/Regla_de_Záitsev).

#### Deshidrogenación

Es la reacción inversa a la hidrogenación, y se da con un catalizador y calor, dando el alqueno:

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidrogenacion.svg" lightbox="false" width="100%" theme="light" >}}

#### Deshidrohalogenación de haluros de alquilo

Es la reacción inversa a la hidrohalogenación, se produce en presencia de KOH y alcohol en la que se elimina KX y H<sub>2</sub>O, originando un doble enlace. La deshidrohalogenación produce mayoritariamente el producto con el doble enlace más sustituido según la [**regla de Záitsev**](https://es.wikipedia.org/wiki/Regla_de_Záitsev):

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidrohalogenacion-haluros-alquilo.svg" lightbox="false" width="100%" theme="light" >}}

##### Deshidrohalogenación de dihaluros vecinales

Como en el caso anterior, se eliminan moléculas de HX, en este caso 2 moléculas HX, originando un enlace triple. Esta reacción se produce en presencia de un catalizador:

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidrohalogenacion-dihaluros-vecinales.svg" lightbox="false" width="100%" theme="light" >}}

#### Deshidratación de alcoholes

Es la reacción inversa a la hidratación de alcoholes. Se produce en medio ácido, generalmente H<sub>2</sub>SO<sub>4</sub>, y calor. La deshidratación (pérdida de una molécula de agua) produce, mayoritariamente, el doble enlace más sustituido siguiendo la [**regla de Záitsev**](https://es.wikipedia.org/wiki/Regla_de_Záitsev):

{{< figure library="true" src="quimica-organica-2Bach-quimica/deshidratacion-alcoholes.svg" lightbox="false" width="100%" theme="light" >}}

{{% callout warning %}}
Si pueden formarse varios alquenos, el producto mayoritario suele ser el que presenta el doble enlace más sustituido ([**regla de Záitsev**](https://es.wikipedia.org/wiki/Regla_de_Záitsev)).
{{% /callout %}}

#### Eliminación vs. sustitución

En muchos casos (especialmente haluros secundarios), un mismo sustrato puede dar reacción de sustitución o una eliminación:

##### Eliminación

{{< figure library="true" src="quimica-organica-2Bach-quimica/eliminacion-vs.svg" lightbox="false" width="100%" theme="light" >}}

##### Sustitución

{{< figure library="true" src="quimica-organica-2Bach-quimica/sustitucion-vs.svg" lightbox="false" width="100%" theme="light" >}}

Que se dé una u otra depende de las características del **sustrato** y de las **condiciones de reacción**.

Sustrato
: - Si el sustrato es un derivado halogenado primario se da favorablemente la sustitución.

- Si el sustrato es un derivado halogenado secundario puede dar sustitución o eliminación según condiciones.
- Si el sustrato es un halogenado terciario se ve favorecida la eliminación.

Condiciones
: - Medio acuoso con OH<sup>–</sup>: suele favorecer sustitución.

- Medio alcohólico y calor: suele favorecer eliminación.
- Bases fuertes y/o voluminosas: favorecen eliminación.

### Reacciones de oxidación-reducción (rédox)

En las **reacciones de oxidación**, el carbono que tiene unido un hidroxilo (–OH) se oxida. Esta oxidación tiene lugar por pérdida de un hidrógeno unido al C y del hidrógeno del grupo –OH, formándose un doble enlace C=O conocido como grupo carbonilo. Como sustancia oxidante [Ox] puede usarse el [PCC](https://es.wikipedia.org/wiki/Clorocromato_de_piridinio) (suave), el dicromato de potasio K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> o el permanganato de potasio KMnO<sub>4</sub> (fuertes).

La reacción inversa a la oxidación es la **reducción**. Como sustancia reductora [Red] suele usarse tetrahidruro de aluminio-litio, LiAlH<sub>4</sub>.

#### Alcoholes primarios

Como en los **alcoholes primarios** el grupo –OH está unido a un carbono terminal, al oxidarse produce un carbonilo terminal dando lugar a un **aldehído**, –CHO. Si el oxidante es fuerte (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> o KMnO<sub>4</sub>) y la oxidación continúa, el aldehído se oxida a **ácido carboxílico**:

{{< figure library="true" src="quimica-organica-2Bach-quimica/alcohol-primario.svg" lightbox="false" width="100%" theme="light" >}}

#### Alcoholes secundarios

En el caso de los **alcoholes secundarios**, la oxidación del carbono produce un carbonilo no terminal, conocido como grupo **cetona**. La cetona no puede seguir oxidándose:

{{< figure library="true" src="quimica-organica-2Bach-quimica/alcohol-secundario.svg" lightbox="false" width="100%" theme="light" >}}

#### Alcoholes terciarios

La oxidación tiene que darse lugar por pérdida de un hidrógeno unido al carbono que va a oxidarse, por lo que éste debe tener disponible al menos uno. Por este motivo, los **alcoholes terciarios** no dan reacciones de oxidación:

{{< figure library="true" src="quimica-organica-2Bach-quimica/alcohol-terciario.svg" lightbox="false" width="50%" theme="light" >}}

#### Reacciones de combustión

La reacción de combustión de un compuesto orgánico en atmósfera rica en oxígeno da lugar a los óxidos de sus elementos. Si el compuesto es un hidrocarburo, oxigenado o no, los productos de la reacción son dióxido de carbono y agua, que son los óxidos del carbono y del hidrógeno:

<div align="center">
C<sub>3</sub>H<sub>8</sub>O + 9/2&thinsp;O<sub>2</sub> &xrarr; 3&thinsp;CO<sub>2</sub> + 4&thinsp;H<sub>2</sub>O
</div>

Las reacciones de combustión son reacciones exotérmicas. Si el compuesto tiene otros elementos, como N o S, también habituales en química orgánica, se obtienen los óxidos de éstos.

### Reacciones de condensación e hidrólisis

#### Reacción de esterificación y saponificación

La **esterificación** es la reacción de **condensación** entre un ácido carboxílico y un alcohol, por pérdida de agua, produciéndose un éster:

{{< figure library="true" src="quimica-organica-2Bach-quimica/esterificacion.svg" lightbox="false" width="100%" theme="light" >}}

La **saponificación** es la reacción inversa a la esterificación. La hidrólisis del éster da el ácido carboxílico y el alcohol. Se entiende por saponificación la reacción que produce la formación de jabones. La principal causa es la disociación de las grasas en un medio alcalino, separándose glicerina y ácidos grasos. Estos últimos se asocian inmediatamente con los álcalis constituyendo las sales sódicas de los ácidos grasos: el jabón.

#### Reacción de condensación de alcoholes

La formación del éter compite con la eliminación de agua para dar el alqueno. Las condiciones de reacción determinarán cuál es la reacción mayoritaria:

{{< figure library="true" src="quimica-organica-2Bach-quimica/condensacion-alcoholes.svg" lightbox="false" width="100%" theme="light" >}}

#### Reacción de condensación para dar amidas

El amoniaco, las aminas primarias y las aminas secundarias reaccionan con los ácidos carboxílicos para dar amidas. Es una reacción de condensación en la que se libera agua. Su inversa, la reacción de hidrólisis, permite obtener la amina y el ácido correspondiente:

{{< figure library="true" src="quimica-organica-2Bach-quimica/condensacion-amidas.svg" lightbox="false" width="100%" theme="light" >}}

### Reacciones en compuestos aromáticos

El anillo aromático (benceno y derivados) reacciona preferentemente mediante **sustitución**, no por adición.

#### Reacciones típicas

- Nitración: HNO<sub>3</sub> / H<sub>2</sub>SO<sub>4</sub> &rarr; nitrobenceno
- Halogenación: Cl<sub>2</sub> / FeCl<sub>3</sub> &rarr; clorobenceno
- Alquilación ([Friedel–Crafts](https://es.wikipedia.org/wiki/Reacción_de_Friedel-Crafts)): R–Cl / AlCl<sub>3</sub> &rarr; alquilbenceno

{{% callout note %}}
A este nivel basta con reconocer los **reactivos**, el **tipo de reacción** (sustitución) y el **producto principal**.
{{% /callout %}}

### Resumen operativo

- Haloalcano + NaOH acuoso &rarr; **sustitución** &rarr; alcohol.
- Haloalcano + KOH en etanol y calor &rarr; **eliminación** &rarr; alqueno.
- Alqueno + HX &rarr; **adición** (en alquenos asimétricos, siguiendo la [**regla de Markovnikov**](https://es.wikipedia.org/wiki/Regla_de_Markovnikov)).
- Alqueno + H<sub>2</sub>O/H<sup>+</sup> &rarr; **hidratación**.
- Alqueno o alquino + H<sub>2</sub>/Pt &rarr; **hidrogenación**.
- Alcohol primario o secundario + [Ox] &rarr; **oxidación**.
- Ácido carboxílico + alcohol &rarr; **esterificación**.
- Éster + agua &rarr; **hidrólisis**.

## Polímeros

Los [**polímeros**](https://es.wikipedia.org/wiki/Polímero) (también llamados macromoléculas) son moléculas muy grandes formadas a partir de la repetición de unidades más pequeñas llamadas [**monómeros**](https://es.wikipedia.org/wiki/Monómero).

{{% callout note %}}
En [esta **entrada** del **blog**]({{< relref "/post/tipos-plasticos" >}}) analizamos las principales **propiedades** y **usos** de los **plásticos básicos** o de **consumo** ([**_commodity plastics_**](https://en.wikipedia.org/wiki/Commodity_plastics) en inglés).

Aprende a **nombrar polímeros** con [esta **guía breve** de la **IUPAC**](https://iupac.org/wp-content/uploads/2022/02/Brief-Guide-to-Polymer-Nomenclature_Espanol-20220214.pdf).
{{% /callout %}}

### Clasificación de los polímeros

Existen polímeros **naturales** como los polisacáridos, las proteínas o el caucho (natural) y otros [**sintéticos**](https://es.wikipedia.org/wiki/Polímeros_sintéticos): polietileno (PE), nylon, poliéster, PVC, PET...

Con respecto al comportamiento a temperaturas elevadas, los polímeros se clasifican como termoplásticos o termoestables. Los [**termoplásticos**](https://es.wikipedia.org/wiki/Termoplástico) (PET, PE, PVC, PP, PS...) se ablandan cuando se calientan y se endurecen cuando se enfrían. Los [**termoestables**](https://es.wikipedia.org/wiki/Plástico_termoestable) (Poliuretano (PUR)) una vez se han endurecido no se reblandecen por calentamiento.

Con respecto a los tipos de unidades repetitivas, si todas son del mismo tipo es un **homopolímero** y si contiene dos o más tipos de unidades repetitivas es un [**copolímero**](https://es.wikipedia.org/wiki/Copolímero).

### Síntesis de polímeros

Los polímeros se pueden sintetizar por dos rutas: reacción [**en cadena**](https://es.wikipedia.org/wiki/Polimerización_en_cadena) (polimerización por adición) o reacción [**por etapas**](https://es.wikipedia.org/wiki/Polimerización_por_etapas) (polimerización por condensación).

#### Polímeros por crecimiento en cadena o polímeros de adición

Se obtienen a partir de la formación de largas cadenas de monómeros que se unen unas a otras sin que exista pérdida de ninguna molécula en el proceso:

- Iniciación
  {{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-iniciacion.svg" lightbox="false" width="100%" theme="light" >}}
- Crecimiento
  {{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-crecimiento.svg" lightbox="false" width="100%" theme="light" >}}
- Terminación
  {{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-terminacion.svg" lightbox="false" width="100%" theme="light" >}}

La reacción global quedaría como:

{{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-global.svg" lightbox="false" width="100%" theme="light" >}}

#### Polímeros por crecimiento por etapas o polímeros de condensación

Se obtienen por reacción entre dos monómeros, cada uno de los cuales tiene, al menos, dos grupos funcionales, con eliminación de alguna molécula (por ejemplo agua). Los poliésteres son polímeros de condensación que se obtienen a partir de dioles y ácidos dicarboxílicos, que dan lugar a los grupos éster característicos del polímero:

{{< figure library="true" src="quimica-organica-2Bach-quimica/polimeros-etapas.svg" lightbox="false" width="100%" theme="light" >}}

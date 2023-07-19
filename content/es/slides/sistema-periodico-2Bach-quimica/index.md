---
title: Sistema periódico
summary: "Tabla periódica y configuración electrónica. Propiedades periódicas."
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/sistema-periodico/diapositivas"

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

# Sistema periódico

- [Tabla periódica y configuración electrónica](#/1)
- [Apantallamiento y carga nuclear efectiva](#/2)
- [Propiedades periódicas](#/3)

Descarga estas diapositivas en formato PDF [📥](#/PDF)

</section>

---

{{% section %}}

## Tabla periódica y configuración electrónica

La **tabla periódica** de los **elementos** organiza los **118 elementos** conocidos en **7 periodos** (filas) y **18 grupos** (columnas), **ordenados** por su **número atómico $Z$**.

---

{{< figure library="true" src="sistema-periodico-2Bach-quimica/tabla-periodica-elementos.png" title="Descárgate esta **tabla periódica** en PDF de alta resolución [aquí](https://fisiquimicamente.com/blog/2020/08/23/tabla-periodica-de-los-elementos/tabla-periodica-elementos-configuraciones-electronicas.pdf)." lightbox="false" >}}

---

> Consulta [aquí]({{< relref "/post/normas-ortografia-fisica-quimica/index.md#7-configuración-electrónica" >}}) las **reglas** que se han de tener en cuenta a la hora de **escribir** la **configuración electrónica** de un átomo o un ion monoatómico.

---

> Los elementos que aparecen [aquí](https://ptable.com/#Electrones/Expanded) en rojo son **excepciones**. Ejemplos notables son el **Cu** ([Ar] 4s<sup>1</sup> 3d<sup>10</sup>) y el **Cr** ([Ar] 4s<sup>1</sup> 3d<sup>5</sup>), debido a que los **orbitales d** son **más estables** cuando están **llenos** o **semillenos**, por razones de simetría.

---

### Origen de la tabla periódica

> Os recomendamos [este magnífico **póster**](https://drive.google.com/file/d/1hh5wz8oVDqZ_Gzc5AYdxphLKHj7gjIMI/view?usp=share_link) de **Berto Tomás**, en colaboración con el [**Dr. Pep Antón Vieta**](https://twitter.com/pquimic).

{{% /section %}}

---

{{% section %}}

## Apantallamiento y carga nuclear efectiva

- [Apantallamiento](#/2/1)
- [Carga nuclear efectiva](#/2/3)

(continúa hacia abajo)

👇

---

### Apantallamiento
El **efecto pantalla** o **apantallamiento**, $a$, consiste en la **atenuación** de la **fuerza** de **atracción** del núcleo sobre un electrón, debido a la **repulsión** de otros **electrones**. Cuanto más alejado esté un electrón del núcleo, más apantallado estará.

---

{{< figure library="true" src="sistema-periodico-2Bach-quimica/apantallamiento.svg" lightbox="false" width="80%" >}}

---

### Carga nuclear efectiva
Se trata de la **carga positiva neta**, $Z\_\mathrm{eff}$, que experimenta un electrón debido al apantallamiento. La carga nuclear efectiva **aumenta** de izquierda a derecha a lo largo de un **periodo** y es **constante** a lo largo de un **grupo**.

---

Las [**reglas** de **Slater**](https://es.wikipedia.org/wiki/Reglas_de_Slater) nos permiten calcularla, de acuerdo a la expresión:

$$
Z_\mathrm{eff} = Z - a,
$$

---

donde $Z$ es el número atómico del elemento y $a$ el apantallamiento sufrido por el electrón, teniendo en cuenta que los electrones *de core* (internos) producen un mayor apantallamiento que los que se encuentran en su mismo nivel energético:

---

\begin{align*}
\text{electrones de core (internos)} &\rightarrow a = 1 \\\\
\text{electrones de valencia (mismo nivel)} &\rightarrow a < 1
\end{align*}

---

#### Ejemplo
Átomo de berilio (<sub>4</sub>Be) $\rightarrow \mathrm{1s^2 2s^2}$

---

Cada uno de los dos electrones de valencia sufre el siguiente apantallamiento:

---

Electrones de core $\mathrm{1s^2}$
: Cada uno de ellos produce un apantallamiento máximo: $a=2$.

Electrones de valencia $\mathrm{2s^1}$
: $a<1$.

---

Siendo el apantallamiento total $2<a<3$, por lo que $1<Z_\mathrm{eff}<2$.

{{% /section %}}

---

{{% section %}}

## Propiedades periódicas

- [Variación](#/3/1)
- [Radio atómico](#/3/2)
- [Potencial de ionización](#/3/8)
- [Afinidad electrónica](#/3/9)
- [Electronegatividad](#/3/10)

(continúa hacia abajo)

👇

---

{{< figure library="true" src="sistema-periodico-2Bach-quimica/variacion-propiedades.svg" title="Basada en https://commons.wikimedia.org/wiki/File:Periodic_trends.svg." lightbox="false" width="100%" >}}

---

### Radio atómico $r$
Definimos el **radio atómico** de un elemento como la **mitad** de la **distancia internuclear** mínima que presenta una **molécula diatómica** de ese elemento en estado sólido.

---

#### A lo largo de un periodo
La **carga nuclear efectiva aumenta**, los **electrones** de valencia son **más atraídos** por el núcleo y por tanto **disminuye** el **radio atómico**.

---

####	A lo largo de un grupo
La **carga nuclear efectiva** es **constante** pero **aumenta** el **número** de **capas**, por lo que el **radio atómico aumenta**.

---

#### Radio iónico
Es el **radio** que presenta un **ion** monoatómico en un **cristal iónico**.

---

##### Cationes
Tienen un **menor número** de **electrones**, por lo que el **apantallamiento** sufrido por los electrones de valencia es **menor**, **aumentando** por tanto la **carga nuclear efectiva** que experimentan y provocando que tengan un **menor radio** atómico que sus elementos neutros de referencia.

---

##### Aniones
Tienen un **mayor número** de **electrones**, por lo que el **apantallamiento** sufrido por los electrones de valencia es **mayor**, **disminuyendo** por tanto la **carga nuclear efectiva** que experimentan y provocando que tengan un **mayor radio** atómico que sus elementos neutros de referencia.

$$
r_\text{catión} < r_\text{neutro} < r_\text{anión}
$$

---

### Potencial de ionización $E_\mathrm i$
Definimos el **potencial** o **energía** de **ionización** como la mínima **energía** que hay que **proporcionar** a un átomo neutro, X, en estado gaseoso y en su estado electrónico fundamental, para **arrancar** un **electrón** de su corteza, formando un catión X<sup>+</sup>.

$$
\mathrm {X(g)} + E_\mathrm i \longrightarrow \mathrm{X^+(g)} + 1\thinspace\mathrm e^-
$$

---

### Afinidad electrónica $E_\mathrm{ea}$
La **afinidad electrónica** es la **energía liberada** cuando un átomo neutro, X, en estado gaseoso y en su estado fundamental, **capta** un **electrón**, formando un anión X<sup>--</sup>.

$$
\mathrm{X(g)} + 1\thinspace\mathrm e^- \longrightarrow \mathrm{X^-(g)} + E_\mathrm{ea}
$$

---

### Electronegatividad $\chi$
La **electronegativad** es una **medida** de la **tendencia** de un átomo a **atraer** un par de **electrones** que comparte con otro átomo al que está unido mediante un enlace químico.

---

### A lo largo de un periodo
La **carga nuclear efectiva aumenta**, los **electrones** de valencia son **más atraídos** por el núcleo y por tanto **aumentan** la **energía** de **ionización**, la **afinidad electrónica** y la **electronegatividad**.

---

### A lo largo de un grupo
La **carga nuclear efectiva** es **constante** pero **aumenta** el **radio**, por lo que los **electrones** son **menos atraídos** y por tanto **disminuyen** la **energía** de **ionización**, la **afinidad electrónica** y la **electronegatividad**.

{{% /section %}}

<section id="PDF" data-visibility="uncounted">

## Exportar a PDF

📥 Pincha [**aquí**](?print-pdf#) y sigue estas **instrucciones**:

1. Abre el diálogo de **Impresión** (Control-P si estás en Windows).
2. Cambia el **Destino** a **Guardar como PDF**.
3. Cambia el **Diseño** a **Horizontal**.
4. Cambia los **Márgenes** a **Ninguno**.
5. Activa la opción **Gráficos de fondo**.

El proceso, en principio, solo funciona con **Google Chrome**.

</section>
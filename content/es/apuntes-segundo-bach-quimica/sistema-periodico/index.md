---
title: Sistema periódico
url: "/recursos-fisica-quimica/apuntes/2bach/quimica/sistema-periodico"
subtitle: Tabla periódica, configuración electrónica y propiedades periódicas
summary: "Tabla periódica y configuración electrónica. Propiedades periódicas."
breadcrumbs: ["recursos-fisica-quimica","apuntes","2bach","quimica"]
authors:
- rodrigo-alcaraz-de-la-osa
- alba-lopez-valenzuela
tags:
- apuntes
- 2º Bach
- tabla-periódica
categories:
- Química
weight: 2

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Imagen de [**vubp**](https://pixabay.com/es/users/vubp-6000785/) en [Pixabay](https://pixabay.com/es/)
  focal_point: Smart

links:  
- icon_pack: fas
  icon: file-download
  name: Póster
  url: sistema-periodico-poster.pdf
- icon_pack: fas
  icon: pencil-ruler
  name: Ejercicios
  url: sistema-periodico-ejercicios.pdf   
- icon_pack: fas
  icon: external-link-alt
  name: Más ejercicios
  url: https://drive.google.com/file/d/1YAcvK97qORLRYqDZw7iyVm2t30uqJzjm/view

slides: sistema-periodico-2Bach-quimica
---

{{% toc %}}

## Tabla periódica y configuración electrónica

{{% callout game %}}
**Aprende química** mientras juegas con [esta genial **baraja** de la **tabla** **periódica**]({{< relref "/actividades-juegos-cuarto-eso/baraja-tabla-periodica" >}}).
{{% /callout %}}

La **tabla periódica** de los **elementos** organiza los **118 elementos** conocidos en **7 periodos** (filas) y **18 grupos** (columnas), **ordenados** por su **número atómico $Z$**.

{{% embed_pdf url="https://fisiquimicamente.com/blog/2020/08/23/tabla-periodica-de-los-elementos/tabla-periodica-elementos-configuraciones-electronicas.pdf" filename="tabla-periodica-elementos-configuraciones-electronicas.pdf" %}}

<!-- {{< figure library="true" src="sistema-periodico-2Bach-quimica/tabla-periodica-elementos.png" title="Descárgate esta **tabla periódica** en PDF de alta resolución [aquí](https://fisiquimicamente.com/recursos-fisica-quimica/apuntes/2bach/quimica/sistema-periodico/tabla-periodica-elementos.pdf) (cada **elemento** es un **enlace** que te lleva a su página de la **Wikipedia**)." lightbox="true" >}} -->

## Apantallamiento y carga nuclear efectiva

### Apantallamiento
El **efecto pantalla** o **apantallamiento**, $a$, consiste en la **atenuación** de la **fuerza** de **atracción** del núcleo sobre un electrón, debido a la **repulsión** de otros **electrones**. Cuanto más alejado esté un electrón del núcleo, más apantallado estará.

{{< figure library="true" src="sistema-periodico-2Bach-quimica/apantallamiento.svg" title="Traducida de https://chem.libretexts.org/Courses/University_of_California_Davis/UCD_Chem_110A%3A_Physical_Chemistry__I/UCD_Chem_110A%3A_Physical_Chemistry_I_(Koski)/Text/07%3A_Approximation_Methods/7.2%3A_The_Variational_Method." lightbox="false" width="100%" >}}

### Carga nuclear efectiva
Se trata de la **carga positiva neta**, $Z\_\mathrm{eff}$, que experimenta un electrón debido al apantallamiento. La carga nuclear efectiva **aumenta** de izquierda a derecha a lo largo de un **periodo** y es **constante** a lo largo de un **grupo**.

Las [**reglas** de **Slater**](https://es.wikipedia.org/wiki/Reglas_de_Slater) nos permiten calcularla, de acuerdo a la expresión:

$$
Z_\mathrm{eff} = Z - a,
$$

donde $Z$ es el número atómico del elemento y $a$ el apantallamiento sufrido por el electrón, teniendo en cuenta que los electrones *de core* (internos) producen un mayor apantallamiento que los que se encuentran en su mismo nivel energético:

\begin{align*}
\text{electrones de core (internos)} &\rightarrow a = 1 \\\\
\text{electrones de valencia (mismo nivel)} &\rightarrow a < 1
\end{align*}

#### Ejemplo
Átomo de berilio (<sub>4</sub>Be) $\rightarrow \mathrm{1s^2 2s^2}$

Cada uno de los dos electrones de valencia sufre el siguiente apantallamiento:

Electrones de core $\mathrm{1s^2}$
: Cada uno de ellos produce un apantallamiento máximo: $a=2$.

Electrones de valencia $\mathrm{2s^1}$
: $a<1$.

Siendo el apantallamiento total $2<a<3$, por lo que $1<Z_\mathrm{eff}<2$.

## Propiedades periódicas

{{< figure library="true" src="sistema-periodico-2Bach-quimica/variacion-propiedades.svg" title="Basada en https://commons.wikimedia.org/wiki/File:Periodic_trends.svg. También puedes ver cómo varían muchas propiedades con [esta **tabla periódica** en **3D**](https://periodic.donghwi.dev)." lightbox="false" width="100%" >}}

### Radio atómico $r$
Definimos el **radio atómico** de un elemento como la **mitad** de la **distancia internuclear** mínima que presenta una **molécula diatómica** de ese elemento en estado sólido.

#### A lo largo de un periodo
La **carga nuclear efectiva aumenta**, los **electrones** de valencia son **más atraídos** por el núcleo y por tanto **disminuye** el **radio atómico**.

####	A lo largo de un grupo
La **carga nuclear efectiva** es **constante** pero **aumenta** el **número** de **capas**, por lo que el **radio atómico aumenta**.

#### Radio iónico
Es el **radio** que presenta un **ion** monoatómico en un **cristal iónico**.

##### Cationes
Tienen un **menor número** de **electrones**, por lo que el **apantallamiento** sufrido por los electrones de valencia es **menor**, **aumentando** por tanto la **carga nuclear efectiva** que experimentan y provocando que tengan un **menor radio** atómico que sus elementos neutros de referencia.

##### Aniones
Tienen un **mayor número** de **electrones**, por lo que el **apantallamiento** sufrido por los electrones de valencia es **mayor**, **disminuyendo** por tanto la **carga nuclear efectiva** que experimentan y provocando que tengan un **mayor radio** atómico que sus elementos neutros de referencia.

$$
r_\text{catión} < r_\text{neutro} < r_\text{anión}
$$

### Potencial de ionización $E_\mathrm i$
Definimos el **potencial** o **energía** de **ionización** como la mínima **energía** que hay que **proporcionar** a un átomo neutro, X, en estado gaseoso y en su estado electrónico fundamental, para **arrancar** un **electrón** de su corteza, formando un catión X<sup>+</sup>.

$$
\mathrm {X(g)} + E_\mathrm i \longrightarrow \mathrm{X^+(g)} + 1\thinspace\mathrm e^-
$$

### Afinidad electrónica $E_\mathrm{ea}$
La **afinidad electrónica** es la **energía liberada** cuando un átomo neutro, X, en estado gaseoso y en su estado fundamental, **capta** un **electrón**, formando un anión X<sup>--</sup>.

$$
\mathrm{X(g)} + 1\thinspace\mathrm e^- \longrightarrow \mathrm{X^-(g)} + E_\mathrm{ea}
$$	

### Electronegatividad $\chi$
La **electronegativad** es una **medida** de la **tendencia** de un átomo a **atraer** un par de **electrones** que comparte con otro átomo al que está unido mediante un enlace químico. 

#### A lo largo de un periodo
La **carga nuclear efectiva aumenta**, los **electrones** de valencia son **más atraídos** por el núcleo y por tanto **aumentan** la **energía** de **ionización**, la **afinidad electrónica** y la **electronegatividad**.

#### A lo largo de un grupo
La **carga nuclear efectiva** es **constante** pero **aumenta** el **radio**, por lo que los **electrones** son **menos atraídos** y por tanto **disminuyen** la **energía** de **ionización**, la **afinidad electrónica** y la **electronegatividad**.
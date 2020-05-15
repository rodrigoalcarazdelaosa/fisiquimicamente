---
title: Curso básico
linktitle: Curso básico
toc: true
type: docs
draft: false
menu:
  latex:
    parent: $\LaTeX$
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

{{% alert note %}}
Este tutorial es una traducción y adaptación de la [excelente guía de Overleaf](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) para _aprender $\LaTeX$ en 30 minutos_.
{{% /alert %}}

{{% toc %}}

## ¿Qué es $\LaTeX$?

$\LaTeX$ (pronunciado LAH-tek) es una herramienta utilizada para crear documentos de aspecto profesional, ampliamente utilizada en la composición de textos científicos. A diferencia de procesadores de texto como Microsoft Word o LibreOffice, tipo `WYSIWYG` (_What You See Is What You Get_), $\LaTeX$ se basa en la idea `WYSIWYG` (_What You See Is What You Mean_). Es decir, cuando escribimos $\LaTeX$ nos centramos en el contenido y su estructura, y es el sistema quien se encarga de formatearlo.

## ¿Por qué aprender $\LaTeX$?
$\LaTeX$ se utiliza en todo el mundo para crear textos científicos, libros así como muchos otros tipos de publicaciones[^1]. Además de poder crear documentos _bellos_, $\LaTeX$ permite abordar muy fácilmente las partes más complicadas de la composición tipográfica, como la introducción de matemáticas, la creación de índices, la referenciación y la creación de bibliografías, y tener un diseño coherente en todas las secciones.

El hecho de que $\LaTeX$ sea **software libre** hace que tenga una enorme comunidad detrás, creando _paquetes_ que añaden aún más funcionalidad o facilitan tareas como la creación de diagramas, tablas, etc.

Una de las principales razones por las que la gente usa $\LaTeX$ es que separa el contenido de un documento de su estilo. Esto significa que, una vez hemos escrito el contenido de nuestro documento, cambiar su apariencia es muy fácil. Análogamente, podemos crear un estilo y utilizarlo para estandarizar la apariencia de muchos documentos. Así es como muchas revistas crean sus plantillas de publicación. Por supuesto en Internet podemos encontrar [multitud de plantillas distintas](https://www.latextemplates.com).

[^1]: En [esta página](https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends) tienes una muestra del tipo de documentos que se pueden crear con $\LaTeX$.

## ¿Cómo usar $\LaTeX$?

### Overleaf {{< icon name="overleaf" pack="ai" >}}
Sin duda la **opción recomendada** para poder empezar a escribir $\LaTeX$ sin necesidad de instalar nada localmente en nuestro ordenador. [Overleaf](https://www.overleaf.com/) es un editor de $\LaTeX$ online que nos permite además **colaborar** fácilmente con otras personas.

### Windows {{< icon name="windows" pack="fab" >}}
Tenemos principalmente dos opciones:

- [$\TeX$ Live](https://www.tug.org/texlive/): viene del mundo Unix y por defecto instala _todo_.

- [MiK$\TeX$](https://miktex.org): herramienta más _Windows_. Por defecto instala unos pocos paquetes y el resto se van instalando según sea necesario.

### macOS {{< icon name="apple" pack="fab" >}}
[Mac$\TeX$](https://tug.org/mactex/) es la versión de [$\TeX$ Live](https://www.tug.org/texlive/) para macOS. 

### Unix {{< icon name="linux" pack="fab" >}}
[$\TeX$ Live](https://www.tug.org/texlive/).

## Tu primer documento de $\LaTeX$
Todo documento de $\LaTeX$ comienza con el comando `\documentclass`, que nos permite escoger la _clase_ de documento que vamos a generar. La clase controla la apariencia general de nuestro documento. Las **3 clases básicas** son:

`article`
: Para **documentos sencillos**, en los que necesitemos **secciones** (`\section`), **subsecciones** (`\subsection`), etc.

`report`
: Para **documentos más complejos**, donde además necesitemos **capítulos** (`\chapter`).

`book`
: Para **libros** y documentos de complejidad similar (tesis, etc.), donde por defecto se utiliza la opción `twoside`, que aplica márgenes y encabezados/pies de página distintos para páginas pares e impares.

Tras el comando `\documentclass` viene lo que se denomina el **preámbulo** del documento, sobre el que hablaremos [más adelante](#el-preámbulo-de-un-documento). Seguido del preámbulo viene el contenido o _cuerpo_ de nuestro documento, encerrado entre los comandos `\begin{document}` y `\end{document}`.

El **ejemplo más simple** que nos podemos imaginar sería algo así:

```tex
\documentclass{article}

\begin{document}
Primer documento. Este es un ejemplo simple, sin incluir ningún parámetro (opción) o paquete extra.
\end{document}
```
lo que $\LaTeX$ transforma en:

{{< figure src="/tutoriales/latex/img/primer_documento.jpg" lightbox="true" >}}

## El preámbulo de un documento
En el anterior ejemplo hemos introducido texto directamente después del comando `\begin{document}`. El **preámbulo** es todo aquello que aparece _antes_ de ese comando. En el preámbulo se define el tipo de documento que estamos escribiendo, el lenguaje en el que lo escribimos, los paquetes que queremos usar y muchos otros elementos.

Por ejemplo, el preámbulo de un documento escrito en español tendría esta pinta:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}
```
 
donde:

`\documentclass[12pt,a4paper]{article}`
: Además de elegir la clase `article` le pasamos dos opciones o parámetros (entre corchetes, separados por comas) para establecer el tamaño de letra (`12pt`) y el tamaño del papel (`a4paper`).

`\usepackage[utf8]{inputenc}`
: Esta es la codificación del documento. La opción `[utf8]` nos permite escribir **caracteres especiales**, como tildes, eñes, etc., sin hacer nada especial.

`\usepackage[spanish]{babel}`
: Con la opción `[spanish]` le decimos a $\LaTeX$ que el texto de este documento va a estar escrito en **español**, y de esta forma cargará reglas específicas para este idioma, especialmente a la hora de romper palabras[^2].

[^2]: Junto con la opción `spanish` querremos incluir en muchos casos las opciones `es-tabla` (traduce *table* como *tabla* en lugar de como *cuadro*) y `es-nolists` (no cambia las listas `enumerate` e `itemize`).

## Añadiendo un título, un autor y una fecha
Para añadir un título, un autor y una fecha a nuestro documento, debemos añadir tres líneas a nuestro preámbulo (antes de `\begin{document}`). Estas líneas son:

`\title{Primer documento}`
: Este es el título.

`\author{Rodrigo Alcaraz de la Osa}`
: Este es el autor (o autores)[^3].

[^3]: Opcionalmente podemos introducir el comando `\thanks{}` después del autor, pero dentro de las llaves. Añade un superíndice y una nota al pie con el texto que haya dentro de las llaves. Es útil si se quiere agradecer a alguna institución.

`\date{Mayo 2020}`
: Podemos introducir la fecha manualmente o utilizar el comando `\today` para que aparezca la fecha en la que se compila el documento.

Con estas líneas, nuestro preámbulo debería parecerse a esto:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}

\title{Primer documento}
\author{Rodrigo Alcaraz de la Osa}
\date{Mayo 2020}
```

Para que esa información aparezca en el documento, tenemos que incluir el comando `\maketitle` en el cuerpo del documento, en el lugar donde queremos que aparezca.

```tex
\begin{document}

\maketitle

¡Hemos añadido un título, un autor y una fecha a nuestro primer documento \LaTeX!

\end{document}
```

{{< figure src="/tutoriales/latex/img/primer_documento_maketitle.jpg" lightbox="true" >}}

## Añadiendo comentarios
Como siempre que se escribe código, es muy útil y recomendable incluir **comentarios**. Los comentarios son trozos de texto que se pueden incluir en el propio código pero que no se imprimen ni afectan al documento de ninguna forma. Son útiles para organizar el trabajo, tomar notas, explicar el código o depurarlo comentando ciertas líneas/secciones. Para hacer un comentario en $\LaTeX$, simplemente escribe el símbolo `%` al principio de la línea:

```tex
\begin{document}

\maketitle

¡Hemos añadido un título, un autor y una fecha a nuestro primer documento \LaTeX!

% Esta línea es un comentario. No se imprimirá en el documento.

\end{document}
```

{{< figure src="/tutoriales/latex/img/primer_documento_maketitle.jpg" lightbox="true" >}}

## Negrita, cursiva y subrayado
Echemos un vistazo a algunos comandos simples para dar formato a nuestro texto:

- **Negrita**: el texto en negrita en $\LaTeX$ se escribe con el comando `\textbf{...}`.
- _Cursiva_: el texto en cursiva en $\LaTeX$ se escribe con el comando `\textit{...}`.
- <ins>Subrayado</ins>: el texto subrayado en $\LaTeX$ se escribe con el comando `\underline{...}`.

A continuación se muestra un ejemplo de cada uno de estos comandos en acción:

```tex
Algunos de los \textbf{mayores} descubrimientos de la \underline{ciencia} se hicieron por \textbf{\textit{accidente}}.
```

{{< figure src="/tutoriales/latex/img/negrita_cursiva_subrayado.jpg" lightbox="true" >}}

Otro comando muy útil es `\emph{...}`. Lo que el comando `\emph` hace realmente con su argumento depende del contexto[^4] &mdash;dentro del texto normal el texto enfatizado está en cursiva, pero este comportamiento se invierte si se usa dentro de un texto en cursiva&mdash;, como se muestra en el siguiente ejemplo:

[^4]: Además, algunos paquetes, como [beamer](https://ctan.org/pkg/beamer), modifican el comportamiento del comando `\emph`.

```tex
Algunos de los mayores \emph{descubrimientos} de la ciencia se hicieron por accidente.

\textit{Algunos de los mayores \emph{descubrimientos} de la ciencia se hicieron por accidente.}

\textbf{Algunos de los mayores \emph{descubrimientos} de la ciencia se hicieron por accidente.}
```

{{< figure src="/tutoriales/latex/img/negrita_cursiva_subrayado_emph.jpg" lightbox="true" >}}

## Añadiendo imágenes
$\LaTeX$ no puede manejar imágenes por sí solo, por lo que necesitamos un _paquete_. Los paquetes se pueden utilizar para cambiar la apariencia por defecto de nuestro documento, o para añadir funcionalidades. En este caso, para añadir imágenes utilizamos el paquete [graphicx](https://ctan.org/pkg/graphicx), que nos proporciona, entre otros, el comando `\includegraphics{...}`[^5].

[^5]: Este comando también admite opciones (entre corchetes) para especificar, entre otras cosas, el ancho (`width=`) o el alto (`height=`) de la imagen.

Para utilizar este paquete, incluimos la línea `\usepackage{graphicx}` en nuestro preámbulo. Además, cuando se colocan imágenes en un documento $\LaTeX$, siempre debemos ponerlas dentro de un entorno `figure`[^6], para que $\LaTeX$ posicione la imagen de manera que encaje con el resto del texto.

[^6]: Este entorno admite un parámetro (entre corchetes) para posicionar la imagen, que admite los siguientes valores:
	
	| Parámetro | Posición                                                                                                       |
	| --------- | -------------------------------------------------------------------------------------------------------------- |
	| h         | Posiciona la imagen _aquí_, es decir, *aproximadamente* en el mismo punto en que aparece en el texto de origen |
	| t         | Posiciona la imagen en la parte *superior* de la página                                                        |
	| b         | Posiciona la imagen en la parte *inferior* de la página                                                        |
	| p         | Posiciona la imagen en la siguiente *página*                                                                   |	

El entorno `figure` nos permite además añadir un pie de figura (`\caption{...}`) y una etiqueta (`\label{...}`), para poder referenciar (`\ref{...}`) la figura más adelante. El siguiente ejemplo muestra estos comandos en acción:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}
\usepackage{graphicx}

\begin{document}
	
La figura \ref{fig:leon_CTAN} muestra el león que dibujó Duane Bibby para las ilustraciones del libro original de Donald Knuth, \TeX book.

\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.5\textwidth]{ctan_lion_350x350}
    \caption{Dibujo de león de CTAN por Duane Bibby; gracias a www.ctan.org.}
    \label{fig:leon_CTAN}
\end{figure}

\end{document}
```

{{< figure src="/tutoriales/latex/img/ejemplo_imagen.jpg" lightbox="true" >}}

## Creando listas en $\LaTeX$
Es muy fácil crear listas con $\LaTeX$. Tenemos tres *entornos* principales para ello. Los entornos son secciones de nuestro documento que queremos presentar de una manera diferente al resto del documento. Siempre empiezan con el comando `\begin{...}` y terminan con un `\end{...}`[^7].

[^7]: Para [añadir imágenes](#añadiendo-imágenes) hemos utilizado el entorno `figure`.

Hay tres tipos principales de listas: listas no ordenadas, listas ordenadas y listas de descripción o definición. Cada uno utilizará un entorno diferente.

### Listas no ordenadas

Las listas no ordenadas, también conocidas como *viñetas*, se crean con el entorno `itemize`. Cada entrada (*item*) debe ir precedida por el comando `\item`:

```tex
\begin{itemize}
  \item La viñeta por defecto es un punto negro (\emph{bullet} en inglés).
  \item El texto de las entradas puede tener cualquier longitud.
\end{itemize}
```

{{< figure src="/tutoriales/latex/img/itemize.jpg" lightbox="true" >}}

### Listas ordenadas

Las listas ordenadas o numeradas tienen la misma sintaxis pero con otro entorno, esta vez `enumerate`:

```tex
\begin{enumerate}
  \item Esta es la primera entrada de nuestra lista.
  \item Los números de la lista aumentan con cada entrada que añadimos.
\end{enumerate}
```

{{< figure src="/tutoriales/latex/img/enumerate.jpg" lightbox="true" >}}

### Listas de descripción

Las listas de descripción o definición utilizan el entorno `description`. Su sintaxis varía ligeramente respecto a `itemize` y `enumerate`, ya que los `\item` ahora aceptan el *título* de cada entrada entre corchetes:

```tex
\begin{description}
  \item[Primera entrada] Por defecto el título de cada entrada aparece en \textbf{negrita}.
  \item[Segunda entrada] Normalmente no se pone ningún símbolo (: o similar) entre el título y su descripción o definición.
\end{description}
```

{{< figure src="/tutoriales/latex/img/description.jpg" lightbox="true" >}}

## Añadiendo matemáticas a $\LaTeX$
Una de las principales ventajas de $\LaTeX$ es la facilidad con la que podemos incluir expresiones matemáticas en nuestros documentos. Existen dos *modos* principales: ***inline*** y ___display___.

### Modo _inline_
Se utiliza para escribir expresiones que son parte del texto, encerrando la expresión entre `$...$`, como en el siguiente ejemplo:


```tex
En física, la equivalencia entre masa y energía se establece por la ecuación $E=mc^2$, descubierta por Albert Einstein en 1905.
```

{{< figure src="/tutoriales/latex/img/inline_math.jpg" lightbox="true" >}}

### Modo _display_
Se utiliza para escribir expresiones en líneas separadas. Tenemos dos versiones: expresiones numeradas (con el entorno `equation`) o sin numerar (encerrando la expresión entre `\[...\]`), como se muestra a continuación:

```tex
En física, la equivalencia entre masa y energía se establece por la ecuación	
\[
E=mc^2,
\]
descubierta por Albert Einstein en 1905. En unidades naturales ($c = 1$), la fórmula toma la forma
\begin{equation}
E=m
\end{equation}
```

{{< figure src="/tutoriales/latex/img/display_math.jpg" lightbox="true" >}}

### Paquete [amsmath](https://www.ctan.org/pkg/amsmath)[^8]
[^8]: Desarrollado por la [Sociedad Americana de Matemáticas](https://www.ams.org/home/page), o AMS por sus siglas en inglés.

A la hora de escribir matemáticas en $\LaTeX$, incluir el paquete [amsmath](https://www.ctan.org/pkg/amsmath) es prácticamente **obligatorio**, por la cantidad de comandos que añade.

A continuación se muestra un ejemplo con algunos de los comandos básicos:

```tex
Los subíndices y los superíndices pueden escribirse como $a_b$ o $a^b$, respectivamente. Pueden combinarse o anidarse para escribir expresions como
\[
T^{i_1 i_2 \dots i_p}_{j_1 j_2 \dots j_q} = T(x^{i_1},\dots,x^{i_p},e_{j_1},\dots,e_{j_q})
\]

Para escribir integrales utilizamos $\int$, y para fracciones utilizamos $\frac{a}{b}$. Los límites de las integrales se escriben con subíndices y superíndices:
\[
\int_0^1 \frac{dx}{e^x} =  \frac{e-1}{e}
\]

Podemos escribir letras griegas tanto en minúsuclas ($\omega$, $\delta$, etc.) como en mayúsculas ($\Omega$, $\Delta$, etc.).

Los operadores matemáticos se prefijan con una barra invertida, como $\sin(\beta)$, $\cos(\alpha)$, $\log(x)$, etc.
```

{{< figure src="/tutoriales/latex/img/amsmath.jpg" lightbox="true" >}}

## Formato básico
Veamos cómo añadir resúmenes (*abstracts* en inglés) y formatear un documento $\LaTeX$ en capítulos, secciones y párrafos.

### Resúmenes

Especialmente en documentos científicos, es una práctica común incluir una breve reseña del tema principal del documento. En $\LaTeX$ tenemos el entorno `abstract` para esto, el cual pondrá el texto en un formato especial al principio del documento.

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}

\begin{document}

\begin{abstract}
Este es un simple párrafo al principio del  
documento. Una breve introducción sobre el tema principal.
\end{abstract}

\end{document}
```

{{< figure src="/tutoriales/latex/img/abstract.jpg" lightbox="true" >}}

### Párrafos y saltos de línea

En general le indicamos a $\LaTeX$ que empezamos un nuevo párrafo dejando una línea en blanco[^9]. Además podemos añadir un párrafo con título con el comando `\paragraph{...}`, como en el siguiente ejemplo:

[^9]: Podemos escribir el comando `\par` al final de un párrafo para conseguir el mismo efecto.

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}

\begin{document}

\begin{abstract}
Este es un simple párrafo al principio del  
documento. Una breve introducción sobre el tema principal.
\end{abstract}

Ahora que hemos escrito nuestro resumen, podemos empezar a escribir nuestro primer párrafo.

Esta línea comenzará un segundo párrafo.

\paragraph{Título} Este párrafo tiene un título.

\end{document}
```

{{< figure src="/tutoriales/latex/img/parrafos.jpg" lightbox="true" >}}

### Capítulos y secciones

Como ya se vio al crear nuestro [primer documento](#tu-primer-documento-de-latex), dependiendo de la clase que escojamos, tenemos acceso a unos comandos de sección u otros. Por ejemplo con la clase `report` podemos escribir:

```tex
\chapter{Primer Capítulo}

\section{Primera sección}

Esta es la primera sección.

Lorem  ipsum  dolor  sit  amet,  consectetuer  adipiscing  
elit.   Etiam  lobortisfacilisis sem.  Nullam nec mi et 
neque pharetra sollicitudin.  Praesent imperdietmi nec ante. 
Donec ullamcorper, felis non sodales...

\section{Segunda sección}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  
Etiam lobortis facilisissem.  Nullam nec mi et neque pharetra 
sollicitudin.  Praesent imperdiet mi necante...

\subsection{Primera subsección}
Praesent imperdietmi nec ante. Donec ullamcorper, felis non sodales...

\section*{Sección no numerada}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  
Etiam lobortis facilisissem
```

{{< figure src="/tutoriales/latex/img/secciones.jpg" lightbox="true" >}}

El comando `\section{...}` marca el comienzo de una nueva sección, cuyo título se pone dentro de las llaves. Las secciones se numeran automáticamente aunque esto se puede desactivar incluyendo un asterisco (*) en el comando de la sección, como en `\section*{...}`. También podemos tener `\subsection{...}` o `\subsubsection{...}`. La siguiente tabla muestra los distintos **niveles de profundidad**:

| Nivel | Comando  |
| ---------------- | ------------------------------------------------------------------------- |
| -1    | `\part{...}` |
| 0     | `\chapter{...}`                                     |
| 1     | `\section{...}`                                                 |
| 2     | `\subsection{...}`                                                     |
| 3     | `\subsubsection{...}`                                              |
| 4     | `\paragraph{...}`                                        |
| 5     | `\subparagraph{...}` |

`\chapter` solo está disponible en las clases `report` y `book`.

## Creando tablas
A continuación puedes ver el ejemplo más sencillo de una tabla en $\LaTeX$:

```tex
\begin{tabular}{ccc}
 celda1 & celda2 & celda3 \\ 
 celda4 & celda5 & celda6 \\  
 celda7 & celda8 & celda9
\end{tabular}
```

{{< figure src="/tutoriales/latex/img/tabular.jpg" lightbox="true" >}}

El entorno `tabular` es el método por defecto de $\LaTeX$ para crear tablas. Entre llaves le indicamos cuántas columnas tendrá la tabla y cómo estará justificado el texto. En este caso `{ccc}` indica que habrá tres columnas y que el texto estará centrado (`c`). También se puede utilizar `r` para alinear el texto a la derecha o `l` para alinearlo a la izquierda. El símbolo de alineación `&` se utiliza para especificar los saltos entre columnas[^10] y el símbolo `\\` para especificar los saltos entre filas.

[^10]: Siempre debe haber un símbolo de alineación menos en cada línea que el número de columnas.

Al igual que en el caso de las [imágenes](#añadiendo-imágenes), como norma general siempre vamos a poner nuestras tablas dentro de un entorno `table`[^11], y utilizaremos el paquete [booktabs](https://ctan.org/pkg/booktabs) (`\usepackage{booktabs}`), que nos permite mejorar enormemente la calidad de nuestras tablas.

[^11]: Este entorno admite las mismas opciones de posicionamiento que el entorno `figure` (ver la sección [imágenes](#añadiendo-imágenes)).

El entorno `table` nos permite además añadir un pie de tabla (`\caption{...}`) y una etiqueta (`\label{...}`), para poder referenciar (`\ref{...}`) la tabla más adelante. El siguiente ejemplo muestra estos comandos en acción:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish,es-tabla]{babel}
\usepackage{booktabs}

\begin{document}
	
La tabla \ref{tab:ejemplo_booktabs} muestra un ejemplo de uso de los comandos del paquete \texttt{booktabs}, traducido de su propia documentación:
	
\begin{table}[htbp]
	\caption{Ejemplo de tabla creada con el paquete \texttt{booktabs}, traducido de su propia documentación. Notar que en las tablas el \emph{pie} se suele colocar encima de la tabla, y no debajo como en las figuras.}
	\label{tab:ejemplo_booktabs}
	\centering
	\begin{tabular}{@{}llr@{}}
		\toprule
		\multicolumn{2}{c}{\textbf{Artículo}} \\
		\cmidrule(r){1-2}
		\textbf{Animal} & \textbf{Descripción} & \textbf{Precio (€)} \\
		\midrule
		Mosquito        & por gramo            & 13.65               \\
	                    & cada uno             & 0.01                \\
	    Ñu              & relleno              & 92.50               \\
	    Emú             & relleno              & 33.33.              \\
		Armadillo       & congelado            & 8.99                \\
		\bottomrule
	\end{tabular}
\end{table}

\end{document}
```

{{< figure src="/tutoriales/latex/img/ejemplo_tabla.jpg" lightbox="true" >}}

## Añadiendo un índice
Crear el índice de un documento es tan fácil como escribir el comando `\tableofcontents` donde queramos incluirlo, y $\LaTeX$ hará todo el trabajo por nosotros, como en el siguiente ejemplo:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}

\title{Primer documento}
\author{Rodrigo Alcaraz de la Osa}
\date{Mayo 2020}
  
\begin{document}
  
\maketitle
  
\tableofcontents

\section{Primera sección}

Lorem  ipsum  dolor  sit  amet,  consectetuer  adipiscing  
elit.   Etiam  lobortisfacilisis sem.  Nullam nec mi et 
neque pharetra sollicitudin.  Praesent imperdietmi nec ante. 
Donec ullamcorper, felis non sodales...

\section{Segunda sección}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  
Etiam lobortis facilisissem.  Nullam nec mi et neque pharetra 
sollicitudin.  Praesent imperdiet mi necante...

\subsection{Primera subsección}
Praesent imperdietmi nec ante. Donec ullamcorper, felis non sodales...

\addcontentsline{toc}{section}{Sección no numerada}
\section*{Sección no numerada}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  
Etiam lobortis facilisissem
         
\end{document}
```

{{< figure src="/tutoriales/latex/img/indice.jpg" lightbox="true" >}}

Los capítulos (`\chapter{...}`), secciones (`\section{...}`) y subsecciones (`\subsection{...}`) se incluyen automática en el índice. Para incluir manualmente otras entradas, como secciones no numeradas (`\section*{...}`), podemos utilizar el comando `\addcontentsline`, como se ve en el ejemplo.
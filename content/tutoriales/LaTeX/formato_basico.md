---
title: Formato básico
linktitle: Formato básico
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 11

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 11
---

Veamos cómo añadir resúmenes (*abstracts* en inglés) y formatear un documento $\LaTeX$ en capítulos, secciones y párrafos.

## Resúmenes

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

## Párrafos y saltos de línea

En general le indicamos a $\LaTeX$ que empezamos un nuevo párrafo dejando una línea en blanco[^1]. Además podemos añadir un párrafo con título con el comando `\paragraph{...}`, como en el siguiente ejemplo:

[^1]: Podemos escribir el comando `\par` al final de un párrafo para conseguir el mismo efecto.

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

## Capítulos y secciones

Como ya se vio al crear nuestro [primer documento]({{< ref "/tutoriales/latex/primer_documento.md" >}}), dependiendo de la clase que escojamos, tenemos acceso a unos comandos de sección u otros. Por ejemplo con la clase `report` podemos escribir:

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
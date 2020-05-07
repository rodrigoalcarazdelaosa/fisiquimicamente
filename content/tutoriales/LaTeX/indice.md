---
title: Añadiendo un índice
linktitle: Índice
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 13

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 13
---

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
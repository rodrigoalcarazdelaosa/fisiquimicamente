---
# Course title, summary, and position.
linktitle: LaTeX
summary: Curso básico de LaTeX.
weight: 1

# Page metadata.
title: Curso básico de LaTeX
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  latex:
    name: LaTeX
    weight: 1
---

Todo documento de $\LaTeX$ comienza con el comando `\documentclass`, que nos permite escoger la _clase_ de documento que vamos a generar.

## Clases básicas
Las **3 clases básicas** son:

* `article`: para **documentos sencillos**, en los que necesitemos **secciones** (`\section`), **subsecciones** (`\subsection`), etc.
* `report`: para **documentos más complejos**, donde además necesitemos **capítulos** (`\chapter`).
* `book`: para **libros** y documentos de complejidad similar (tesis, etc.), donde además necesitemos **partes** (`\part`).

## Preámbulo

Tras el comando `\documentclass` viene lo que se denomina el **preámbulo** del documento, que es la parte del documento donce cargamos los distintos **paquetes** que vamos a necesitar para editar nuestro documento. Los paquetes son conjuntos de comandos que añaden funcionalidad a $\LaTeX$. Dependiendo del tipo de documento que vayamos a editar cargaremos unos paquetes u otros. Cuantos más paquetes carguemos más tardará el documento en compilar, por eso siempre es recomendable cargar solo aquellos paquetes que de verdad necesitemos.

### Paquetes básicos
Algunos **paquetes útiles** para escribir documentos en **español**:

- `inputenc`: con la opción `[utf8]`, que nos permite escribir **caracteres especiales**, como tildes, eñes, etc., sin hacer nada especial.
- `babel`: con la opción `[spanish]`, que le dice a $\LaTeX$ que el texto de este documento va a estar escrito en **español**, y de esta forma $\LaTeX$ cargará reglas específicas para este idioma, especialmente a la hora de romper palabras.

Tras el preámbulo comienza el documento. Para ello escribimos `\begin{document}`, y lo finalizamos con el comando `\end{document}`. Todo lo que escribamos entre esos 2 comandos es lo que $\LaTeX$ va a compilar e interpretar como parte de nuestro documento.

Para generar

```tex
\documentclass{article}

% PREÁMBULO
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}

% DOCUMENTO
\begin{document}
Todo documento de \LaTeX\ comienza con el comando \verb+\documentclass+, que nos permite escoger la \textit{clase} de documento que vamos a generar. 

\section*{Clases básicas} % el asterisco evita que la sección se numere
Las \textbf{3 clases básicas} son:
\begin{itemize}
\item \texttt{article}: para \textbf{documentos sencillos}, en los que necesitemos \textbf{secciones} (\verb+\section+), \textbf{subsecciones} (\verb+\subsection+), etc.
\item \texttt{report}: para \textbf{documentos más complejos}, donde además necesitemos \textbf{capítulos} (\verb+\chapter+).
\item \texttt{book}: para \textbf{libros} y documentos de complejidad similar (tesis, etc.), donde además necesitemos \textbf{partes} (\verb+\part+).
\end{itemize}

\section*{Preámbulo}
Tras el comando \verb+\documentclass+ viene lo que se denomina el \textbf{preámbulo} del documento, que es la parte del documento donce cargamos los distintos \textbf{paquetes} que vamos a necesitar para editar nuestro documento. Los paquetes son conjuntos de comandos que añaden funcionalidad a \LaTeX. Dependiendo del tipo de documento que vayamos a editar cargaremos unos paquetes u otros. Cuantos más paquetes carguemos más tardará el documento en compilar, por eso siempre es recomendable cargar solo aquellos paquetes que de verdad necesitemos.

\subsection*{Paquetes básicos}
Algunos \textbf{paquetes útiles} para escribir documentos en \textbf{español}:
\begin{itemize}
\item \texttt{inputenc}, con la opción \texttt{[utf8]}, que nos permite escribir \textbf{caracteres especiales}, como tildes, eñes, etc., sin hacer nada especial.
\item \texttt{babel}, con la opción \texttt{[spanish]}, que le dice a \LaTeX\ que el texto de este documento va a estar escrito en \textbf{español}, y de esta forma \LaTeX\ cargará reglas específicas para este idioma, especialmente a la hora de romper palabras.
\end{itemize}

Tras el preámbulo comienza el documento. Para ello escribimos \verb+\begin{document}+, y lo finalizamos con el comando \verb+\end{document}+. Todo lo que escribamos entre esos 2 comandos es lo que \LaTeX\ va a compilar e interpretar como parte de nuestro documento.

\end{document}
```
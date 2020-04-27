---
title: Documento básico
linktitle: Documento básico
toc: true
type: docs
date: "2019-05-05T00:00:00+01:00"
draft: false
menu:
  latex:
    parent: Introducción
    weight: 3

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 3
---

Tras el preámbulo comienza el documento. Para ello escribimos `\begin{document}`, y lo finalizamos con el comando `\end{document}`. Todo lo que escribamos entre esos 2 comandos es lo que $\LaTeX$ va a compilar e interpretar como parte de nuestro documento.

Para generar un documento parecido a esta página en $\LaTeX$ escribiríamos un código como este:

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

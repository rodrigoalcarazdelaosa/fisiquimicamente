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

## Introducción

Todo documento de LaTeX comienza con el comando `\documentclass`, que nos permite escoger la _clase_ de documento que vamos a generar. Las **3 clases básicas** son:

* `article`: para **documentos sencillos**, en los que necesitemos **secciones** (`\section`), **subsecciones** (`\subsection`), etc.
* `report`: para **documentos más complejos**, donde además necesitemos **capítulos** (`\chapter`).
* `book`: para **libros** y documentos de complejidad similar (tesis, etc.), donde además necesitemos **partes** (`\part`).

Tras el comando `\documentclass` viene lo que se denomina el **preámbulo** del documento, que es la parte del documento donce cargamos los distintos **paquetes** que vamos a necesitar para editar nuestro documento. Los paquetes son conjuntos de comandos que añaden funcionalidad a LaTeX. Dependiendo del tipo de documento que vayamos a editar cargaremos unos paquetes u otros. Cuantos más paquetes carguemos más tardará el documento en compilar, por eso siempre es recomendable cargar solo aquellos paquetes que de verdad necesitemos.

Algunos paquetes _imprescindibles_:

- `inputenc`: con la opción `[utf8]`, que nos permite escribir caracteres especiales, como tildes, sin hacer nada especial[^1].
- `babel`: con la opción `[spanish]`, que le dice a LaTeX que el texto de este documento va a estar escrito en **español**, y de esta forma LaTeX cargará reglas específicas para este idioma, especialmente a la hora de romper palabras.

Tras el preámbulo comienza el documento. Para ello escribimos `\begin{document}`, y lo finalizamos con el comando `\end{document}`. Todo lo que escribamos entre esos 2 comandos es lo que LaTeX va a compilar e interpretar como parte de nuestro documento.

[^1]: Cuando escribimos textos en **español** este paquete es casi obligatorio, para no tener problemas con las tildes, las eñes, etc.

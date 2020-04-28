---
title: Preámbulo
linktitle: Preámbulo
toc: true
type: docs
date: "2019-05-05T00:00:00+01:00"
draft: false
menu:
  latex:
    parent: Introducción
    weight: 2

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 3
---

Tras el comando `\documentclass` viene lo que se denomina el **preámbulo** del documento, que es la parte del documento donce cargamos los distintos **paquetes** que vamos a necesitar para editar nuestro documento. Los paquetes son conjuntos de comandos que añaden funcionalidad a $\LaTeX$. Dependiendo del tipo de documento que vayamos a editar cargaremos unos paquetes u otros. Cuantos más paquetes carguemos más tardará el documento en compilar, por eso siempre es recomendable cargar solo aquellos paquetes que de verdad necesitemos.

## Paquetes básicos
Algunos **paquetes útiles** para escribir documentos en **español**:

- `inputenc`: con la opción `[utf8]`, que nos permite escribir **caracteres especiales**, como tildes, eñes, etc., sin hacer nada especial.
- `babel`: con la opción `[spanish]`, que le dice a $\LaTeX$ que el texto de este documento va a estar escrito en **español**, y de esta forma $\LaTeX$ cargará reglas específicas para este idioma, especialmente a la hora de romper palabras.
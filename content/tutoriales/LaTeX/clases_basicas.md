---
title: Clases básicas
linktitle: Clases básicas
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Introducción
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

Todo documento de $\LaTeX$ comienza con el comando `\documentclass`, que nos permite escoger la _clase_ de documento que vamos a generar.

Las **3 clases básicas** son:

`article`
: Para **documentos sencillos**, en los que necesitemos **secciones** (`\section`), **subsecciones** (`\subsection`), etc.

`report`
: Para **documentos más complejos**, donde además necesitemos **capítulos** (`\chapter`).

`book`
: Para **libros** y documentos de complejidad similar (tesis, etc.), donde además necesitemos **partes** (`\part`).
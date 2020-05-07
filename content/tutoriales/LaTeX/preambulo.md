---
title: El preámbulo de un documento
linktitle: Preámbulo
toc: true
type: docs
draft: false
menu:
  latex:
    parent: Curso básico
    weight: 4

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 4
---

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
: Con la opción `[spanish]` le decimos a $\LaTeX$ que el texto de este documento va a estar escrito en **español**, y de esta forma cargará reglas específicas para este idioma, especialmente a la hora de romper palabras[^1].

[^1]: Junto con la opción `spanish` querremos incluir en muchos casos las opciones `es-tabla` (traduce *table* como *tabla* en lugar de como *cuadro*) y `es-nolists` (no cambia las listas `enumerate` e `itemize`).
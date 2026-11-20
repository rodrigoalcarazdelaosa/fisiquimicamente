# Inventario de plantillas de Hugo

La rama `dev` pasa de 188 a 151 archivos en `layouts/`. La referencia anterior a la limpieza es el commit `5f9235cd9`. Las rutas de las tablas son relativas a `layouts/`. Cada nombre abreviado en una lista corresponde a un archivo `.html` de la carpeta indicada.

## Plantillas retiradas

| Carpeta | Archivos | Motivo |
| --- | --- | --- |
| `landing/` | `list`, `single` | Ninguna página ni arquetipo usa el tipo `landing`. Las portadas usan widgets de la primera versión de Hugo Blox. |
| `_partials/` y `_partials/functions/` | `landing_page`, `functions/parse_block_v2` | Su función era recorrer la lista `sections` de las páginas de tipo `landing` y elegir un bloque v2. |
| `_partials/blocks/` | `about.avatar`, `about.biography`, `accomplishments`, `collection`, `contact`, `experience`, `features`, `hero`, `markdown`, `people`, `portfolio`, `skills`, `slider`, `tag_cloud` | Los 14 bloques dependían del selector v2. Los widgets de las páginas actuales se resuelven en otra carpeta, `blocks/v1/`. |
| `_partials/blocks/v1/` | `about.avatar`, `accomplishments`, `experience`, `hero`, `tag_cloud` | Ninguna declaración de widget los selecciona, ni siquiera entre las secciones desactivadas. Las variantes propias, como `experience-estancias` y `hero-home`, tienen archivos independientes. |
| `_partials/functions/` | `get_pub_types` | Ninguna plantilla llama a este parcial. El listado de publicaciones obtiene los tipos directamente de la taxonomía. |

Los siguientes 13 *shortcodes* tampoco tienen invocaciones en el contenido ni en los arquetipos. Se retiraron por decisión editorial.

| Archivos en `_shortcodes/` | Función que ofrecían |
| --- | --- |
| `audio`, `bilibili`, `gdocs` | Insertar un reproductor de audio, un vídeo de Bilibili o un documento de Google. |
| `chart`, `table` | Dibujar una gráfica Plotly a partir de JSON o una tabla a partir de CSV. Las tablas Markdown siguen disponibles. |
| `cite`, `staticref` | Mostrar otra página con una vista del tema o enlazar un recurso estático. |
| `dependencies`, `emoji_list`, `list_categories`, `list_tags` | Enumerar módulos de Hugo, emojis, categorías o etiquetas dentro de una página. |
| `slide`, `speaker_note` | Configurar una diapositiva o añadir notas del ponente mediante esos nombres. Las presentaciones actuales usan las plantillas de Reveal.js y otros *shortcodes*, entre ellos `section` y `fragment`. |

## Plantillas conservadas que merecen mención

| Archivos | Por qué se conservan |
| --- | --- |
| `baseof.html`, `slides/baseof.html`, `_partials/book_menu.html` | Hugo combina las bases con las plantillas hijas. El menú de libros se invoca con el nombre de plantilla `book-menu` desde la barra lateral. Contar solo las llamadas por ruta los pasaría por alto. |
| `_partials/blocks/v1/hero-lottie.html` | Diez archivos de contenido eligen esta variante personalizada aunque sus secciones estén desactivadas. |
| `_markup/render-codeblock-markmap.html`, `_markup/render-codeblock-mermaid.html` | Permiten escribir diagramas mediante bloques de código. El arquetipo de presentaciones menciona Mermaid. |
| `event/{section,single}.html`, `project/single.html`, `publication/{section,single}.html` | El repositorio incluye arquetipos para crear estos tipos de contenido. |
| `_partials/functions/{get_address,get_event_dates}.html`, `_partials/jsonld/event.html`, `_partials/citation.html` | Se usan de forma condicional al mostrar direcciones, fechas, datos estructurados de eventos o citas bibliográficas. |
| `_partials/views/{list,citation,showcase}.html` | Son opciones del selector de vistas, incluidas las opciones numéricas 1, 4 y 5. `showcase` es una adaptación propia. |
| `_partials/comments/{commento,disqus,giscus}.html` | El proveedor se selecciona en la configuración. El sitio usa Discord. |
| `_partials/components/announcement_bar.html` | Se activa cuando una página define el texto de un aviso. |
| `_partials/components/footers/minimal.html`, `_partials/site_footer_license.html` | El pie mínimo es la opción predeterminada y llama al parcial de licencia. El sitio configura su propio pie. |
| `_partials/hooks/`, `_shortcodes/3Dmol.html` | El tema descubre los hooks por carpeta. Las métricas de Hugo muestran el shortcode de moléculas como `3dmol.html`, aunque el archivo contiene una D mayúscula. |

## Cómo se comprobó

Se usó Hugo 0.170.1 con `--minify --templateMetrics` en los tres idiomas. Se repitió la compilación con `--buildDrafts --buildFuture --buildExpired`. Las compilaciones de referencia y de comprobación usaron el mismo reloj, la misma revisión para la información de Git y carpetas de salida distintas.

Las métricas se contrastaron con las invocaciones de *shortcodes*, los campos de los archivos de contenido, los arquetipos, la configuración y los nombres que las plantillas construyen al seleccionar widgets, vistas, hooks y proveedores. Para consultar un archivo retirado, se puede usar desde la raíz `git show 5f9235cd9:layouts/_shortcodes/chart.html`, sustituyendo la ruta por la del archivo que interese.

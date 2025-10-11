+++
# A Projects section created with the Portfolio widget.
widget = "portfolio"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

title = "🩻 Imagen para el Diagnóstico y Medicina Nuclear"
subtitle = "☢️ Técnicas de Radiofarmacia"

[content]
  # Page type to display. E.g. project.
  page_type = "recursos-tecnicas-radiofarmacia"

  # Filter toolbar (optional).
  # Add or remove as many filters (`[[content.filter_button]]` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove toolbar, delete/comment all instances of `[[content.filter_button]]` below.

  # Default filter index (e.g. 0 corresponds to the first `[[filter_button]]` instance below).
  filter_default = 0

  [[content.filter_button]]
    name = "Todos"
    tag = "*"

  [[content.filter_button]]
    name = "¿Qué es la medicina nuclear?"
    tag = "medicina-nuclear"

[[content.filter_button]]
    name = "Procedimiento de obtención de los radiofármacos"
    tag = "obtención-radiofármacos"

[[content.filter_button]]
    name = "El activímetro y el control de calidad del generador"
    tag = "activímetro"

[[content.filter_button]]
    name = "Determinación del procedimiento de marcaje del radiofármaco"
    tag = "marcaje-radiofármaco"

[[content.filter_button]]
    name = "Aplicación de técnicas de radioinmunoanálisis"
    tag = "técnicas-radioinmunoanálisis"

[[content.filter_button]]
    name = "Preparación del tratamiento radioisotópico"
    tag = "tratamiento-radioisotópico"

[[content.filter_button]]
    name = "Medidas que hay que adoptar en una unidad de terapia radiometabólica"
    tag = "medidas-unidad-terapia-radiometabólica"



[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view = "masonry"

  # For Showcase view, flip alternate rows?
  flip_alt_rows = false

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  color = "FFFFF8"

  # Background gradient.
  # gradient_start = "#BBCCEE"
  # gradient_end = "#FFFFF8"

  # Background image.
  # image = "apuntes.jpg"  # Name of image in `static/media/`.
  # image_darken = 0.5  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  image_position = "center"  # Options include `left`, `center` (default), or `right`.
  image_parallax = true  # Use a fun parallax-like fixed background effect? true/false

  # Text color (true=light or false=dark).
  text_color_light = false

[advanced]
 # Custom CSS.
 css_style = "padding-bottom: 0px;"

 # CSS class.
 css_class = ""

#{{% callout note %}}
#Si quieres realizar un **cuestionario** con **preguntas** de **todos** los **temas**, pincha **aquí**. ¡Buena suerte! 🤞
#{{% /callout %}}

+++
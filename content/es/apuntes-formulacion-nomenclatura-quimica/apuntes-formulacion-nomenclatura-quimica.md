+++
# A Projects section created with the Portfolio widget.
widget = "portfolio"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

title = "📚 Apuntes"
subtitle = "📔 Formulación y nomenclatura de Química"

[content]
  # Page type to display. E.g. project.
  page_type = "apuntes-formulacion"
  
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
    name = "Inorgánica"
    tag = "inorgánica"		
	
  [[content.filter_button]]
    name = "Orgánica"
    tag = "orgánica"														

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
+++

{{% callout note %}}
También te recomendamos echar un vistazo a los **apuntes** de [**FiQuiPedia**](http://www.fiquipedia.es/home/recursos/recursos-apuntes/recursos-apuntes-formulacion#TOC-Apuntes-elaboraci-n-propia), a los de [**FisQuiWeb**](https://fisquiweb.es/Formulacion/index.htm), a los de [**Nomenclatura química**](https://www.nomenclaturaquimica.com) o a las **cienciografías** de **Samuel Escudero** ([**inorgánica**](https://lasbarbasdedarwin.files.wordpress.com/2021/11/plbdd_formulacion_inorganica_.pdf) y [**orgánica**](https://lasbarbasdedarwin.files.wordpress.com/2021/11/plbdd_formulacion_organica.pdf)).

En [este **solucionario**](https://web-argitalpena.adm.ehu.es/bxnn/UCPDF22EBAZ.pdf) puedes encontrar muchos **ejemplos** para habituarte con la **nomenclatura química**.
{{% /callout %}}
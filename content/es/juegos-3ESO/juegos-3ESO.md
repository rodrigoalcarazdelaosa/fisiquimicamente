+++
# A Projects section created with the Portfolio widget.
widget = "portfolio"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

title = "🧩 Juegos"
subtitle = "📘 3.º ESO"

[content]
  # Page type to display. E.g. project.
  page_type = "juegos-segundo-tercero-eso"
  
  # Filter toolbar (optional).
  # Add or remove as many filters (`[[content.filter_button]]` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove toolbar, delete/comment all instances of `[[content.filter_button]]` below.
  
  # Default filter index (e.g. 0 corresponds to the first `[[filter_button]]` instance below).
  filter_default = 0
  
  [[content.filter_button]]
    name = "Todas"
    tag = "3º ESO"	
	
  [[content.filter_button]]
    name = "Actividad científica"
    tag = "actividad-científica"		
	
  [[content.filter_button]]
    name = "Materia"
    tag = "materia"				
	
  [[content.filter_button]]
    name = "Gases"
    tag = "gases"			
	
  [[content.filter_button]]
    name = "Estructura atómica"
    tag = "estructura-atómica"	
	
  [[content.filter_button]]
    name = "Elementos y compuestos"
    tag = "tabla-periódica"	
	
  [[content.filter_button]]
    name = "Reacciones químicas"
    tag = "reacciones-químicas"					
	
  [[content.filter_button]]
    name = "Energía"
    tag = "energía"	
	
  [[content.filter_button]]
    name = "Electricidad-electrónica"
    tag = "electricidad-electrónica"				

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


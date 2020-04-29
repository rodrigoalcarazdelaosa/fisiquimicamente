+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = false

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
height = "calc(100vh - 70px)"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "Apuntes de Física y Química"
  content = "Nivel desde 2º ESO hasta EBAU"
  align = "center"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
  # overlay_color = "#666"  # An HTML color value.
  overlay_img = "headers/apuntes.jpg"  # Image path relative to your `static/img/` folder.
  # overlay_filter = 0.5  # Darken the image. Value in range 0-1.

  # Call to action button (optional).
  #   Activate the button by specifying a URL and button label below.
  #   Deactivate by commenting out parameters, prefixing lines with `#`.
  cta_label = "Ir a APUNTES"
  cta_url = "apuntes/"
  cta_icon_pack = "fas"
  cta_icon = "book-open"

[[item]]
  title = "Tutoriales"
  content = "LaTeX, presentación de información, etc."
  align = "center"

  # overlay_color = "#FFFFFF"  # An HTML color value.
  overlay_img = "headers/tutoriales.jpg"  # Image path relative to your `static/img/` folder.
  # overlay_filter = 0.5  # Darken the image. Value in range 0-1.
  
  # Call to action button (optional).
  #   Activate the button by specifying a URL and button label below.
  #   Deactivate by commenting out parameters, prefixing lines with `#`.
  cta_label = "Ir a TUTORIALES"
  cta_url = "tutoriales/"
  cta_icon_pack = "fas"
  cta_icon = "hands-helping"

[[item]]
  title = "Enlaces de interés"
  content = "I am right aligned :smile:"
  align = "center"

  overlay_color = "#333"  # An HTML color value.
  overlay_img = ""  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.
+++

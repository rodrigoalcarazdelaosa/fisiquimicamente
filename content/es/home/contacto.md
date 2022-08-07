---
# An instance of the Contact widget.
# Documentation: https://sourcethemes.com/academic/docs/page-builder/
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 8

title: "📬 Contacto"
subtitle:

content:
  email: "contacto@fisiquimicamente.com"
  directions:
  office_hours:
  appointment_url:
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: "Síguenos en Twitter"
      link: "https://twitter.com/fqmente"
    - icon: instagram
      icon_pack: fab
      name: "Síguenos en Instagram"
      link: "https://www.instagram.com/fisiquimicamente/"
    - icon: pinterest
      icon_pack: fab
      name: "Síguenos en Pinterest"
      link: "https://www.pinterest.es/fisiquimicamente/"
    - icon: telegram
      icon_pack: fab
      name: "Suscríbete al canal de Telegram"
      link: "https://t.me/fisiquimicamente"
    - icon: newspaper
      icon_pack: fas
      name: "Suscríbete al boletín de noticias"
      link: https://www.getrevue.co/profile/fisiquimicamente      
    - icon: discord
      icon_pack: fab
      name: "Únete al servidor de Discord"
      link: "https://discord.gg/kJqPqTJ"

  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify    
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true
      success_url: /gracias
      attachments: true
  
design:
  columns: '1'
  background:
    # color: "#FFFFF8"

advanced:
  css_style: "padding-bottom: 0px;"
---
---
# An instance of the Contact widget.
# Documentation: https://sourcethemes.com/academic/docs/page-builder/
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 8

title: "📬 Contacte"
subtitle:

content:
  email: "contacte@fisiquimicament.com"    
  contact_links:
    - icon: "twitter"
      icon_pack: fab
      name: "Segueix-nos a Twitter"
      link: "https://twitter.com/fqmente"
    - icon: "instagram"
      icon_pack: "fab"
      name: "Segueix-nos a Instagram"
      link: "https://www.instagram.com/fisiquimicamente/"
    - icon: "pinterest"
      icon_pack: "fab"
      name: "Segueix-nos a Pinterest"
      link: "https://www.pinterest.es/fisiquimicamente/"
    - icon: telegram
      icon_pack: fab
      name: "Subscriu-te al canal de Telegram"
      link: "https://t.me/fisiquimicamente"      
    - icon: "discord"
      icon_pack: "fab"
      name: "Uneix-te a el servidor d'Discord"
      link: "https://discord.gg/kJqPqTJ"

  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify    
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true
      success_url: /gracies
      attachments: true
  
design:
  columns: '1'
  background:
    # color: "#FFFFF8"

advanced:
  css_style: "padding-bottom: 0px;"
---
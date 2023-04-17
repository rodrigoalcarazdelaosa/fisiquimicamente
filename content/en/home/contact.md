---
# An instance of the Contact widget.
# Documentation: https://sourcethemes.com/academic/docs/page-builder/
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 8

title: "📬 Contact"
subtitle:

content:
  email:
  contact_links:
    - icon: "twitter"
      icon_pack: svg
      name: "Follow us on Twitter"
      link: "https://twitter.com/fqmente"
    - icon: "instagram"
      icon_pack: svg
      name: "Follow us on Instagram"
      link: "https://www.instagram.com/fisiquimicamente/"
    - icon: "pinterest"
      icon_pack: svg
      name: "Follow us on Pinterest"
      link: "https://www.pinterest.es/fisiquimicamente/"
    - icon: telegram
      icon_pack: svg
      name: "Subscribe to the Telegram channel"
      link: "https://t.me/fisiquimicamente"      
    - icon: "discord"
      icon_pack: svg
      name: "Join the Discord server"
      link: "https://discord.gg/kJqPqTJ"    

  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: formspree
    formspree:
      id: mbjeavzq
  
design:
  columns: '1'
  background:
    # color: "#FFFFF8"

advanced:
  css_style: "padding-bottom: 0px;"	
---
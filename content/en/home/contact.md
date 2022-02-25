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
  email: "contact@physichemically.com"	  
  contact_links:
    - icon: "twitter"
      icon_pack: "fab"
      name: "Follow us on Twitter"
      link: "https://twitter.com/fqmente"
    - icon: "instagram"
      icon_pack: "fab"
      name: "Follow us on Instagram"
      link: "https://www.instagram.com/fisiquimicamente/"
    - icon: "pinterest"
      icon_pack: "fab"
      name: "Follow us on Pinterest"
      link: "https://www.pinterest.es/fisiquimicamente/"
    - icon: "discord"
      icon_pack: "fab"
      name: "Join the Discord server"
      link: "https://discord.gg/kJqPqTJ"    

  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify    
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true
      success_url: /thank-you
      attachments: true
  
design:
  columns: '1'
  background:
    # color: "#FFFFF8"

advanced:
  css_style: "padding-bottom: 0px;"	
---
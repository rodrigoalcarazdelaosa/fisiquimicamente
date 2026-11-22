---
# Display name
title: "{{ replace .Name "-" " " | title }}"

# Username (this should match the folder name and the name on publications)
authors:
- "{{ urlize .Name }}"

# Is this the primary user of the site?
superuser: false

# Role/position (e.g., Professor of Artificial Intelligence)
role:

# Organizations/Affiliations
organizations:
- name:
  url: ""

# Short bio (displayed in user profile at end of posts)
bio:

# List each interest with a dash
interests:
- Interest 1
- Interest 2

education:
  courses:
  - course: Title course 1
    institution: Name of Institution
    year: 2012
  - course: Title course 1
    institution: Name of Institution
    year: 2012

# Social/Academic Networking
# Use an emoji or a local SVG icon. Give each link a label.
social:
- icon: ✉️
  icon_pack: emoji
  label: Email
  link: '#contact'  # For a direct email link, use "mailto:test@example.org".
- icon: twitter
  icon_pack: svg
  label: X / Twitter
  link: https://twitter.com/USERNAME
- icon: 🎓
  icon_pack: emoji
  label: Google Scholar
  link: https://scholar.google.com/citations?user=PERSON-ID
- icon: github
  icon_pack: svg
  label: GitHub
  link: https://github.com/USERNAME
# Link to a PDF of your resume/CV from the About widget.
# To enable, copy your resume/CV to `static/files/cv.pdf` and uncomment the lines below.
# - icon: 📄
#   icon_pack: emoji
#   label: CV
#   link: files/cv.pdf

# Enter email to display Gravatar (if Gravatar enabled in Config)
email: ""

# Highlight the author in author lists? (true/false)
highlight_name: false

# Organizational groups that you belong to (for People widget)
#   Set this to `[]` or comment out if you are not using People widget.
user_groups:
- Group 1
- Group 2
---

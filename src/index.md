---
title: "Home"
layout: "layouts/home.html"
---

# Welcome to the **Starter** Page!

This starter project is meant to help you get an [Eleventy.js](https://github.com/11ty/eleventy) website set up as quickly as possible with the most modern static website generating experience I could come up with. Features include:

- Eleventy.js
- PostCSS-based styling libraries with features like:
    - Mixins
    - For Loops
    - PostCSS imports (non-runtime)
    - Font Size Ratio Mixin
    - Custom Media Queries (With built-in examples based on common user trends)

## Sure is neat!

{% for post in collections.posts %}
### [{{ post.data.title }}]({{ post.url }})

*{{ post.date.toLocaleDateString() }}*
{% endfor %}

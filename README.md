# This is a Static Website Starter Kit

Meaning it is meant more as a starter for full projects rather than just a starter
for eleventy.js itself or any other used technology.

As such, it is intended to be rather batteries-included, however I have chosen
a couple currently-unorthodox tools. Firstly, using PostCSS-only for any extra
features I might want in the stylesheets. Next, using a static website framework
rather than a frontend library like react or a server-side CMS such as Wordpress.
Then `pnpm` for package management because it is just better. Finally, liquid
templates because I've always liked the template languages it pulls inspiration
from such as jinja and swig.

Some of these choices are arbitrary, though a lot of them are in response to
what I see as the direction this side of the web-development experience is
moving towards.

## How to use

Clone the repository, then run:

```bash
pnpm i
pnpx @11ty/eleventy --serve
```

The home page should show up at `localhost:8080` in your browser

Styles are located in `src/assets/styles`
Pages in `src/_includes/layouts`
And page "components" in `src/_includes/partials`

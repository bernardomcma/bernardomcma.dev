# bernardomcma.dev

Personal site of Bernardo MCMA — software, data and BI.

Live at **[bernardomcma.dev](https://bernardomcma.dev)**.

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies —
what is in this repository is exactly what gets served.

- **Fonts** — Instrument Serif (display), Inter (body), JetBrains Mono (labels),
  self-hosted as Latin-subset WOFF2, ~90 KB total.
- **JavaScript** — one ~110 line file, no libraries. It handles the pinned
  header, reveal-on-scroll, the nav's active section, and keeping the language
  link pointed at the section you are reading. The site is fully readable and
  navigable with JavaScript disabled.
- **Languages** — English at `/`, Portuguese at `/pt/`, as two real pages with
  proper `hreflang`, not a runtime string swap.

## Local development

The pages reference assets with root-relative paths (`/assets/...`), so open
them through a server rather than double-clicking the file:

```bash
python -m http.server 8787
```

Then visit `http://localhost:8787`. There is nothing to install or compile.

## Project structure

```
index.html            English page (canonical root)
pt/index.html         Portuguese page — same structure, translated text
assets/
  css/main.css        All styling. Design tokens are at the top.
  js/main.js          All interaction.
  fonts/              Three self-hosted WOFF2 files
  img/                Open Graph images and PWA icons
favicon.svg           The M mark, drawn as geometry
_headers              Cloudflare Pages caching and security headers
robots.txt            Allows everything; points at the sitemap
sitemap.xml           Both language URLs, with alternates
```

## Updating content

**The two pages are kept structurally identical, line for line, so a diff
between them shows only translated text. Edit both.**

Section IDs (`#about`, `#projects`, `#education`, `#links`) are the same in both
languages — that is what lets the EN/PT switch keep you in the same place. Don't
rename them in one file only.

### Adding a project

In the Projects section of each page, copy the `<article class="project">`
block and replace the title, repository URL, meta line and description. There is
a `TODO` comment marking the spot. New projects stack automatically — the
hairline rules and spacing are handled by CSS.

Keep the repository as the title's link; a second destination (a store listing,
a live demo) goes in the `project__actions` line below.

### Adding experience

Education entries use `<li class="entry">`. Experience entries use the exact
same markup — add them to the same list. When the first one lands, rename the
section heading from "Education" / "Formação" to include experience, in both
pages and in both navs.

### Other placeholders

Search for `TODO` in either HTML file. Currently waiting on:

- a professional email on the domain (Links section and footer)
- a CV link
- UFOP start year and expected completion
- the next project

### Changing type or colour

Everything lives in the `:root` block at the top of `assets/css/main.css` —
five colours, three font families and the spacing rhythm. The palette is
deliberately near-monochrome with no accent hue; emphasis comes from contrast.
Every colour used for real text clears WCAG AA (4.5:1) against the background.

## Deployment

Pushing to `main` deploys automatically through Cloudflare Pages.

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | *(empty)* |
| Build output directory | `/` |

No build step means no build configuration. `_headers` is picked up by
Cloudflare automatically: fonts and images cache for a year, CSS and JS for an
hour so a deploy actually reaches people.

## Identity assets

`favicon.svg` is hand-written — an **M** drawn as four stroked segments rather
than a font glyph, so it stays crisp at 16px. The raster icons (`favicon.ico`,
`apple-touch-icon.png`, `assets/img/icon-*.png`) and the Open Graph images were
generated once from that same geometry with a throwaway Python/Pillow script,
kept out of the repository so the project stays dependency-free. Regenerating
them is only necessary if the mark itself changes.

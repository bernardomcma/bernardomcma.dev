# bernardomcma.dev

Personal site of Bernardo Martins — software, data, BI.

Live at **[bernardomcma.dev](https://bernardomcma.dev)**.

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies —
what is in this repository is exactly what gets served.

- **Font** — Space Grotesk, one family, self-hosted as a Latin-subset WOFF2, 22 KB.
  It's the same file Lock In ships. System `ui-monospace` handles the few numerals
  that want tabular figures, at no extra cost.
- **JavaScript** — one ~110 line file, no libraries: the pinned header,
  reveal-on-scroll, the nav's active section, and keeping the language link
  pointed at the section you're reading. The site is fully readable and
  navigable with JavaScript disabled.
- **Languages** — English at `/`, Portuguese at `/pt/`, as two real pages with
  proper `hreflang`, not a runtime string swap.

## Design system

The site runs on **Lock In's design system**, at lower density. That project's
`assets/theme.css` states the rules, and they hold here too:

> Nothing blurs. No backdrop-filter, no soft shadows, no gradient text. Every
> surface has a hard 2px border and a solid offset shadow. Colour is flat and
> saturated. Depth comes from offset, not from light.

The palette in `assets/css/main.css` is Lock In's dark mode verbatim. Lime is
rationed on purpose — hover, the active nav item, one primary button. Motion is
`80ms steps(2)`, stepped rather than eased, and pressing a button moves it onto
its own shadow.

Sections separate by **changing the background**, not by drawing rules. The Lock
In section goes further and takes over the whole band with that project's *light*
palette, so it reads as a window into the actual thing.

> **Gotcha worth knowing:** don't move those `box-shadow` colours back into a
> custom property like `--shadow: 4px 4px 0 var(--ink)`. A custom property
> substitutes its `var()`s on the element that *declares* it, so a token defined
> on `:root` bakes in the site's cream ink and stays cream inside the Lock In
> band — where it is invisible. The shadow colours are written out at each use
> site for exactly this reason.

## Local development

The pages reference assets with root-relative paths (`/assets/...`), so open them
through a server rather than double-clicking the file:

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
  fonts/              One self-hosted WOFF2
  img/                Open Graph image and PWA icons
favicon.svg           The letter B, as a real glyph outline
_headers              Cloudflare Pages caching and security headers
robots.txt            Allows everything; points at the sitemap
sitemap.xml           Both language URLs, with alternates
```

## Updating content

**The two pages are kept structurally identical, line for line, so a diff between
them shows only translated text. Edit both.**

Section IDs (`#about`, `#projects`, `#education`, `#links`) are the same in both
languages — that is what lets the EN/PT switch keep you in the same place. Don't
rename them in one file only.

### What is not translated

**software, data, BI** in the `<title>` and the Open Graph titles is the
positioning line, not copy — it stays in English on both pages, and both share
one Open Graph image. Descriptive prose *is* translated: the meta description,
the About copy, and the `knowsAbout` keywords in the JSON-LD.

Lock In's own copy comes from that project's `_locales/` files, so each language
shows the real store description rather than a translation of a translation.

### Adding a project

Each project is a full-width `.band` inside `<section id="projects">`. Copy either
existing one. Two shapes are available:

- **`.band--lockin`** — takes over with the project's own palette by redefining
  `--paper` / `--ink` on the band. Use this when a project has a visual identity
  of its own worth showing.
- **`.band--data`** — stays in the site's palette, one step darker, and uses the
  `.spec` description list for a dense technical readout. Use this when the
  interesting part is the architecture, not the interface.

Keep the repository as the primary action. A second destination (a store listing,
a live demo) goes beside it as a plain `.btn`.

### Lock In screenshots

The Lock In band has a commented-out `.shots` block waiting for the store PNGs.
Drop them in `assets/img/lockin/`, then follow the instructions in that comment
to switch the band to its two-column layout.

### Adding experience

Education uses `.edu`. Experience entries take the same shape — add them to the
same section, and rename the heading from "Studying" / "Faculdade" once it covers
both, in each page and in each nav.

### Other placeholders

Search for `TODO` in either HTML file. Currently waiting on: a professional email
on the domain, a CV link, the Lock In screenshots, and the next project.

## Deployment

Pushing to `main` deploys automatically through Cloudflare Pages.

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | *(empty)* |
| Build output directory | `/` |

No build step means no build configuration. `_headers` is picked up
automatically: fonts and images cache for a year, CSS and JS for an hour so a
deploy actually reaches people.

## Identity assets

`favicon.svg` is the letter **B** in Space Grotesk 700, as a real glyph outline
rather than a `<text>` element, so it renders identically everywhere. The raster
icons and the Open Graph image come from the same letter, generated once with a
throwaway Python script (Pillow + fontTools) kept out of the repository so the
project stays dependency-free. Regenerating is only needed if the mark changes.

# CLAUDE.md

## Project Overview

Burger Barn is a staged tutorial that teaches HTML and CSS by building a restaurant menu webpage from scratch. Each stage introduces one concept, and the learner always has a working page they can open in a browser.

## Architecture

This is a static site — no build tools, no frameworks, no server.

```
burger-barn/
├── index.html       ← the webpage
├── styles.css       ← stylesheet (added in stage 5)
├── docs/            ← tutorial documentation per stage
└── docs-site/       ← VitePress documentation site
```

## Tech Stack

| Layer    | Technology |
|----------|-----------|
| Markup   | HTML5     |
| Styling  | CSS3      |
| Tools    | Any text editor + any modern browser |

## Development

Open `index.html` in a browser. No build step, no server, no dependencies.

To use a live-reload server (optional):

```bash
make dev
```

## Coding Standards

### HTML
- Use the HTML5 doctype: `<!DOCTYPE html>`
- Always include `<html lang="en">`, `<head>` with charset and viewport, and `<body>`
- Use semantic elements: `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>` — not just `<div>`
- Use descriptive class names: `menu-item`, `item-price` — not `box1`, `text2`
- Indent nested elements with 2 spaces
- Always close tags — no self-closing shortcuts for non-void elements
- One element per line for readability

### CSS
- Use a separate `styles.css` file linked in `<head>` — no inline styles, no `<style>` tags
- Use class selectors (`.menu-item`) over element selectors (`div`) for styling
- Group related properties together (layout, then box model, then typography, then visual)
- Use `rem` for font sizes, `px` for borders and shadows
- Keep selectors flat — avoid nesting deeper than one level (`.menu-item .price` is fine, deeper is not)
- Use CSS custom properties (variables) only if explicitly introduced in a stage
- Mobile-first is not required — desktop-first with a max-width media query is fine for this tutorial

### General
- No JavaScript — this is an HTML & CSS only tutorial
- No external libraries, CDNs, or frameworks
- No build tools — the browser reads the files directly
- Keep file count minimal — one HTML file, one CSS file
- Every stage must produce a page that opens correctly in a browser

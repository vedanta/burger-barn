---
title: "Burger Barn — HTML & CSS"
repo: "vedanta/burger-barn"
base: "/burger-barn/"
accent: "amber"
stack:
  frontend:
    html: "5"
    css: "3"
  tools:
    browser: "any modern browser"
    editor: "any text editor"
groups:
  - name: "Foundation"
    icon: "🏗️"
    desc: "Build the bare HTML structure — a valid page with semantic elements."
    stages: [0, 1, 2]
  - name: "Content"
    icon: "🍔"
    desc: "Fill the page with menu items and a footer."
    stages: [3, 4]
  - name: "Styling"
    icon: "🎨"
    desc: "Add CSS for colors, spacing, and card-style components."
    stages: [5, 6, 7]
  - name: "Layout & Polish"
    icon: "📐"
    desc: "Use flexbox for alignment, then add hover effects and mobile support."
    stages: [8, 9]
stages:
  - number: 0
    title: "HTML Skeleton"
    branch: "main"
    tag: "v0-html-skeleton"
    concept: "basic HTML document structure"
    summary: "Create index.html with doctype, head, and body."
  - number: 1
    title: "Header & Intro"
    branch: "feature/01-header-intro"
    tag: "v1-header-intro"
    concept: "headings and paragraphs"
    summary: "Add the restaurant name and tagline."
  - number: 2
    title: "Semantic Sections"
    branch: "feature/02-semantic-sections"
    tag: "v2-semantic-sections"
    concept: "semantic HTML elements"
    summary: "Wrap content in main and section elements."
  - number: 3
    title: "Menu Items"
    branch: "feature/03-menu-items"
    tag: "v3-menu-items"
    concept: "reusable HTML patterns"
    summary: "Add burger items with name, description, and price."
  - number: 4
    title: "Footer"
    branch: "feature/04-footer"
    tag: "v4-footer"
    concept: "page completion with footer"
    summary: "Add location, hours, and copyright."
  - number: 5
    title: "Basic CSS"
    branch: "feature/05-basic-css"
    tag: "v5-basic-css"
    concept: "CSS fundamentals"
    summary: "Link a stylesheet and add colors, fonts, and background."
  - number: 6
    title: "Spacing"
    branch: "feature/06-spacing"
    tag: "v6-spacing"
    concept: "the CSS box model"
    summary: "Apply margin and padding to improve readability."
  - number: 7
    title: "Menu Cards"
    branch: "feature/07-menu-cards"
    tag: "v7-menu-cards"
    concept: "visual components with CSS"
    summary: "Style menu items with borders, border-radius, and box-shadow."
  - number: 8
    title: "Flexbox Layout"
    branch: "feature/08-flexbox-layout"
    tag: "v8-flexbox-layout"
    concept: "flexbox basics"
    summary: "Align item name and price side by side."
  - number: 9
    title: "Polish & Responsive"
    branch: "feature/09-polish-responsive"
    tag: "v9-polish-responsive"
    concept: "pseudo-classes and responsive design"
    summary: "Add hover effects and a media query for mobile."
---

# Tutorial Roadmap

## 🏗️ Foundation

### Stage 0 — HTML Skeleton
Create `index.html` with the HTML5 doctype, `<head>`, and `<body>`. This is the minimal valid HTML page — the scaffold everything else builds on. The learner opens the file in a browser and sees a blank page with a title in the tab.

### Stage 1 — Header & Intro
Add an `<h1>` with the restaurant name and a `<p>` with a tagline. The learner sees visible content on the page for the first time and learns how headings and paragraphs work.

### Stage 2 — Semantic Sections
Wrap the existing content in `<main>` and introduce `<section>` elements for the menu categories. The page looks the same but the HTML is now structured with meaningful, accessible elements.

## 🍔 Content

### Stage 3 — Menu Items
Add burger items inside each section using `<div>` containers with a name, description, and price. The learner practices a reusable HTML pattern — the same structure repeated for each menu item.

### Stage 4 — Footer
Add a `<footer>` with the restaurant's address, hours, and a copyright line. The page is now complete from top to bottom — header, content, and footer.

## 🎨 Styling

### Stage 5 — Basic CSS
Create `styles.css` and link it from `index.html`. Add a background color, font family, and text colors. The learner sees the page transform from browser defaults to a styled design.

### Stage 6 — Spacing
Apply `margin` and `padding` to headings, sections, and menu items. The learner experiments with the CSS box model — the space between and around elements.

### Stage 7 — Menu Cards
Add `border`, `border-radius`, and `box-shadow` to menu items so they look like cards. The learner creates a visual component purely with CSS.

## 📐 Layout & Polish

### Stage 8 — Flexbox Layout
Use `display: flex` and `justify-content: space-between` to align each item's name and price on the same line. The learner gets their first taste of CSS layout.

### Stage 9 — Polish & Responsive
Add `:hover` effects on menu cards and a `@media` query that adjusts the layout for small screens. The page is now interactive and mobile-friendly.

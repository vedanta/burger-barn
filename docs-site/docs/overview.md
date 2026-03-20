# Tutorial Overview

> **How do you build a restaurant menu webpage from scratch using only HTML and CSS?**

## How This Tutorial Works

This tutorial uses a **branch-per-stage** model. Each stage lives on its own Git branch and introduces one concept. You can follow along by checking out each branch in order, or read the docs to understand what changed.

```bash
# Start at the beginning
git checkout main

# Jump to any stage
git checkout feature/05-basic-css
```

Every stage produces a working page. You can stop at any stage and have something that opens in a browser.

## Stages

### 🏗️ Foundation

Build the bare HTML structure — a valid page with semantic elements.

| # | Stage | Branch | Concept |
|---|-------|--------|---------|
| 0 | [HTML Skeleton](/stage-00/) | `main` | Basic HTML document structure |
| 1 | [Header & Intro](/stage-01/) | `feature/01-header-intro` | Headings and paragraphs |
| 2 | [Semantic Sections](/stage-02/) | `feature/02-semantic-sections` | Semantic HTML elements |

### 🍔 Content

Fill the page with menu items and a footer.

| # | Stage | Branch | Concept |
|---|-------|--------|---------|
| 3 | Menu Items | `feature/03-menu-items` | Reusable HTML patterns |
| 4 | Footer | `feature/04-footer` | Page completion with footer |

### 🎨 Styling

Add CSS for colors, spacing, and card-style components.

| # | Stage | Branch | Concept |
|---|-------|--------|---------|
| 5 | Basic CSS | `feature/05-basic-css` | CSS fundamentals |
| 6 | Spacing | `feature/06-spacing` | The CSS box model |
| 7 | Menu Cards | `feature/07-menu-cards` | Visual components with CSS |

### 📐 Layout & Polish

Use flexbox for alignment, then add hover effects and mobile support.

| # | Stage | Branch | Concept |
|---|-------|--------|---------|
| 8 | Flexbox Layout | `feature/08-flexbox-layout` | Flexbox basics |
| 9 | Polish & Responsive | `feature/09-polish-responsive` | Pseudo-classes and responsive design |

## Tech Stack

| Technology | What For |
|-----------|----------|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout, and responsiveness |

No JavaScript. No frameworks. No build tools. Just a text editor and a browser.

## Prerequisites

- A text editor (VS Code, Sublime Text, or even Notepad)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No prior coding experience required

## Quick Start

```bash
git clone https://github.com/vedanta/burger-barn.git
cd burger-barn
open index.html
```

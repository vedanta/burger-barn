# Architecture -- Stage 1: Header & Intro

## Current Structure

```
burger-barn/
  index.html       <- the webpage (modified)
```

## Data Flow

The browser reads `index.html`, parses the HTML, and renders the heading and paragraph on screen.

```mermaid
graph LR
    A[index.html] --> B[Browser]
    B --> C[Page with heading and tagline]
```

## What Changed

No structural changes. The project still has a single HTML file. The only change is new content inside the `<body>` element: an `<h1>` heading and a `<p>` paragraph.

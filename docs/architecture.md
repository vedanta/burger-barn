# Architecture -- Stage 2: Semantic Sections

## Current Structure

```
burger-barn/
  index.html       <- the webpage (modified)
```

## Document Outline

The HTML now has a clear hierarchy:

```mermaid
graph TD
    A[body] --> B[header]
    A --> C[main]
    B --> D["h1 -- Burger Barn"]
    B --> E["p -- tagline"]
    C --> F["section -- Classic Burgers"]
    C --> G["section -- Specialty Burgers"]
    C --> H["section -- Sides"]
    F --> I[h2]
    G --> J[h2]
    H --> K[h2]

    style B fill:#92400e,color:#fff
    style C fill:#92400e,color:#fff
    style F fill:#b45309,color:#fff
    style G fill:#b45309,color:#fff
    style H fill:#b45309,color:#fff
```

The highlighted nodes are new in this stage. The `<header>` wraps existing content. The `<main>` and three `<section>` elements are entirely new.

## What Changed

The flat body content from Stage 1 is now organized into semantic containers. This is the first time the HTML has a meaningful structure beyond "some elements in a body." Future stages add content inside these sections.

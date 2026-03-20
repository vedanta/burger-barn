# Walkthrough -- Stage 2: Semantic Sections

> Open `index.html` side by side with this walkthrough. Read the code first, then read the explanation.

## File: [`index.html`](https://github.com/vedanta/burger-barn/blob/feature/02-semantic-sections/index.html)

### Lines 8--11: The header

```html
  <header>
    <h1>Burger Barn</h1>
    <p>Handcrafted burgers, made fresh daily.</p>
  </header>
```

**What's happening:**

The `<header>` element wraps introductory content for the page. In Stage 1, the `<h1>` and `<p>` sat directly inside `<body>`. Now they are grouped inside `<header>`, which tells browsers and screen readers "this is the introductory section of the page."

The `<header>` element does not change how the page looks. Visually, the heading and tagline appear exactly as before. The difference is in the HTML structure -- the content now has meaning attached to it.

### Lines 13--25: Main content with sections

```html
  <main>
    <section>
      <h2>Classic Burgers</h2>
    </section>

    <section>
      <h2>Specialty Burgers</h2>
    </section>

    <section>
      <h2>Sides</h2>
    </section>
  </main>
```

**What's happening:**

The `<main>` element marks the primary content of the page. A page should have only one `<main>` element. It tells screen readers "skip the header and navigation -- this is the core content."

Inside `<main>`, three `<section>` elements divide the content into menu categories. Each `<section>` starts with an `<h2>` heading. The `<h2>` is a level-2 heading -- it is a sub-topic under the `<h1>`. This creates a heading hierarchy:

- `<h1>` Burger Barn (the page topic)
  - `<h2>` Classic Burgers (a sub-topic)
  - `<h2>` Specialty Burgers (a sub-topic)
  - `<h2>` Sides (a sub-topic)

Each section is empty for now -- just a heading. In Stage 3, you will add menu items inside these sections.

### Why semantic elements matter

You could use `<div>` instead of `<header>`, `<main>`, and `<section>`. The page would look identical. But semantic elements carry meaning:

- Screen readers announce "main content" when they reach `<main>`, helping visually impaired users skip to what matters.
- Search engines understand the page structure better.
- Other developers reading your code immediately know what each section is for.

Semantic HTML is about writing HTML that describes what things *are*, not just how they look.

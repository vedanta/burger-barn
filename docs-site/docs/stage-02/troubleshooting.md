# Troubleshooting -- Stage 2: Semantic Sections

## Common Errors

### The page looks exactly the same as Stage 1

**Cause:** This is expected if you only added the semantic wrapper elements without the `<h2>` headings. Semantic elements like `<header>`, `<main>`, and `<section>` do not change the visual appearance on their own.

**Fix:** Make sure each `<section>` contains an `<h2>` heading (e.g., `<h2>Classic Burgers</h2>`). The `<h2>` headings are the new visible content in this stage.

### The section headings appear the same size as the main heading

**Cause:** You may have used `<h1>` instead of `<h2>` for the section headings.

**Fix:** Use `<h2>` for section headings. The `<h1>` is reserved for the page title ("Burger Barn"). Section headings should use `<h2>` to maintain the correct heading hierarchy.

### Content appears outside the sections in the Elements tab

**Cause:** A tag might not be closed properly, or the indentation is misleading.

**Fix:** Check that every opening tag has a matching closing tag. For example, `<section>` must have `</section>`, and `<main>` must have `</main>`. Use the Elements tab in developer tools to see the actual structure the browser parsed.

### The header content disappeared

**Cause:** The `<header>` closing tag might be in the wrong place, or the `<h1>` and `<p>` were accidentally deleted when wrapping them.

**Fix:** Make sure `<h1>` and `<p>` are between `<header>` and `</header>`. The content from Stage 1 should still be there, just wrapped in the new element.

## FAQ

### What is the difference between `<div>` and `<section>`?

Both are container elements that group other elements. The difference is meaning. A `<div>` is a generic container with no semantic meaning. A `<section>` tells browsers and screen readers "this is a thematic grouping of content." Use `<section>` when the content forms a logical group with a heading.

### Can I use `<main>` more than once?

No. A page should have only one `<main>` element. It represents the dominant content of the page. If you have content that repeats across pages (like a sidebar or navigation), that belongs outside `<main>`.

### Do I need to use `<header>` for the page header?

It is not strictly required, but it is best practice. The `<header>` element helps screen readers and search engines identify introductory content. It also makes your HTML self-documenting -- anyone reading the code can instantly see where the header content is.

### Why are the sections empty except for headings?

Each stage introduces one concept. This stage focuses on semantic structure. You will add menu items inside these sections in Stage 3.

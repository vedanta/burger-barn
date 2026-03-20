# Troubleshooting -- Stage 1: Header & Intro

## Common Errors

### Nothing shows up on the page

**Cause:** The heading and paragraph might be outside the `<body>` tags, or there is a typo in the tag names.

**Fix:** Make sure `<h1>` and `<p>` are between `<body>` and `</body>`. Check for typos like `<h1>` missing the closing `>`.

### The heading and paragraph run together on one line

**Cause:** You may have used `<span>` instead of `<h1>` or `<p>`. Span is an inline element that does not start a new line.

**Fix:** Use `<h1>` for the heading and `<p>` for the paragraph. These are block elements that each take their own line.

### The text appears but looks like code (angle brackets visible)

**Cause:** The file might be saved with a `.txt` extension instead of `.html`, or the tags have a typo.

**Fix:** Make sure the file is named `index.html` (not `index.html.txt`). Check that every `<` has a matching `>`.

## FAQ

### Why use `<h1>` instead of just making text bold?

Headings are not just about size. Screen readers use heading levels to help visually impaired users navigate the page. Search engines use them to understand what the page is about. Always use heading elements for headings, not bold or large text.

### Can I have more than one `<h1>` on a page?

Technically yes, but it is best practice to have exactly one `<h1>` per page. It should describe the main topic. Use `<h2>` through `<h6>` for sub-sections.

### Why does the browser add space between the heading and paragraph?

Browsers apply default styles to HTML elements. Headings and paragraphs both have built-in margin (space around them). You will learn to control this with CSS in a later stage.

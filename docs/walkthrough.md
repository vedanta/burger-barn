# Walkthrough -- Stage 1: Header & Intro

> Open `index.html` side by side with this walkthrough. Read the code first, then read the explanation.

## File: [`index.html`](https://github.com/vedanta/burger-barn/blob/feature/01-header-intro/index.html)

### Lines 8--10: Body content

```html
<body>
  <h1>Burger Barn</h1>
  <p>Handcrafted burgers, made fresh daily.</p>
</body>
```

**What's happening:**

In Stage 0, the `<body>` was empty. Now it has two elements.

The `<h1>` tag creates a level-1 heading -- the most important heading on the page. Browsers display it in large, bold text by default. HTML has six heading levels, `<h1>` through `<h6>`, where `<h1>` is the most important and `<h6>` is the smallest. A page should have exactly one `<h1>` that describes what the page is about.

The `<p>` tag creates a paragraph. It is the basic element for body text. Browsers add a small gap above and below each paragraph automatically.

Both elements are indented with 2 spaces inside `<body>`. This indentation is optional -- the browser ignores it -- but it makes the HTML easier to read because you can see which elements are inside which.

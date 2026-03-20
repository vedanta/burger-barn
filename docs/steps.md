# Steps -- Stage 2: Semantic Sections

> Follow these steps in order. Each step is a file edit.

## Prerequisites

Completed Stage 1. You should have `index.html` with a heading and tagline in the body.

## Steps

### 1. Wrap the heading and tagline in a `<header>`

Open `index.html`. Change the body content from this:

```html
<body>
  <h1>Burger Barn</h1>
  <p>Handcrafted burgers, made fresh daily.</p>
</body>
```

To this:

```html
<body>
  <header>
    <h1>Burger Barn</h1>
    <p>Handcrafted burgers, made fresh daily.</p>
  </header>
</body>
```

The `<header>` element groups introductory content. The heading and tagline are now inside it.

### 2. Add `<main>` with three `<section>` elements

After the closing `</header>` tag, add a `<main>` element with three sections:

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

Each `<section>` represents a menu category. The `<h2>` headings are subheadings under the `<h1>`.

### 3. Verify the complete file

Your `index.html` should now look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Burger Barn</title>
</head>
<body>
  <header>
    <h1>Burger Barn</h1>
    <p>Handcrafted burgers, made fresh daily.</p>
  </header>

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
</body>
</html>
```

## Verify

Open `index.html` in your browser. You should see:

- "Burger Barn" as the main heading
- "Handcrafted burgers, made fresh daily." as the tagline
- Three smaller headings: "Classic Burgers," "Specialty Burgers," and "Sides"
- Right-click, Inspect, and look at the Elements tab -- you should see `<header>`, `<main>`, and `<section>` wrapping the content

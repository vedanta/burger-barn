# Walkthrough -- Stage 0: HTML Skeleton

> Open `index.html` side by side with this walkthrough. Read the code first, then read the explanation.

## File: [`index.html`](https://github.com/vedanta/burger-barn/blob/main/index.html)

### Line 1: The doctype

```html
<!DOCTYPE html>
```

**What's happening:**

This tells the browser "this is an HTML5 document." Without it, browsers fall back to older rendering modes that behave unpredictably. Every HTML page starts with this line.

### Line 2: The html element

```html
<html lang="en">
```

**What's happening:**

The `html` element wraps everything on the page. The `lang="en"` attribute tells browsers and screen readers that the page content is in English. This helps with accessibility and search engines.

### Lines 3--7: The head

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Burger Barn</title>
</head>
```

**What's happening:**

The `head` contains information *about* the page -- it does not appear on screen.

- `charset="UTF-8"` tells the browser how to decode the text. UTF-8 supports virtually every character and language.
- The `viewport` meta tag makes the page display correctly on phones and tablets. Without it, mobile browsers zoom out and the page looks tiny.
- `title` sets the text that appears in the browser tab. This is the only visible result of Stage 0.

### Lines 8--9: The body

```html
<body>
</body>
```

**What's happening:**

The `body` is where all visible content goes -- text, images, links, everything you see on a webpage. Right now it is empty, so the page is blank. In the next stage, you will add the restaurant name and tagline here.

### Line 10: Closing the html element

```html
</html>
```

**What's happening:**

This closes the `html` element that you opened on line 2. Every opening tag needs a matching closing tag.

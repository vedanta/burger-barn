# Troubleshooting -- Stage 0: HTML Skeleton

## Common Errors

### The browser shows the raw HTML code instead of a blank page

**Cause:** The file was not saved with the `.html` extension. The browser is treating it as a plain text file.

**Fix:** Make sure the file is named `index.html` (not `index.txt` or `index`). Re-open it in your browser after renaming.

### The browser tab says "index.html" instead of "Burger Barn"

**Cause:** The `<title>` element is missing or empty, or there is a typo in the tags.

**Fix:** Check that your `<head>` section includes `<title>Burger Barn</title>` with matching opening and closing tags.

### The page shows strange characters or question marks

**Cause:** The character encoding meta tag is missing or the file was saved in a different encoding.

**Fix:** Make sure `<meta charset="UTF-8">` is the first element inside `<head>`. Save the file as UTF-8 in your text editor (most modern editors do this by default).

### Double-clicking the file opens a text editor instead of the browser

**Cause:** Your operating system is not set to open `.html` files in a browser by default.

**Fix:** Right-click the file and choose "Open with" then select your browser. On macOS you can also run `open index.html` in the terminal.

## FAQ

### Why is the page blank?

That is expected. The `<body>` is empty, so there is nothing to display. The only visible result of Stage 0 is the title in the browser tab. You will add visible content in Stage 1.

### Do I need a web server to open this file?

No. HTML files can be opened directly in a browser by double-clicking or dragging them into the browser window. A web server is not needed for this tutorial.

### What is the viewport meta tag for?

It tells mobile browsers to match the screen width instead of pretending the screen is wider (which causes a zoomed-out view). You will appreciate this in later stages when you add CSS.

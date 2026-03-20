# Exercises -- Stage 0: HTML Skeleton

## Exercise 1: Change the page title

**Goal:** See how the `title` element affects the browser tab.

**Steps:**
1. Open `index.html` in your editor
2. Change `Burger Barn` inside the `<title>` tags to `My Restaurant`
3. Save the file and refresh the browser

**What happened:** The browser tab now says "My Restaurant" instead of "Burger Barn." The `title` element controls the text in the tab, bookmarks, and search engine results. Change it back to `Burger Barn` when you are done.

## Exercise 2: Remove the doctype

**Goal:** Understand why the doctype matters.

**Steps:**
1. Delete the first line (`<!DOCTYPE html>`) from `index.html`
2. Save and open the file in your browser
3. Right-click the page, choose "Inspect", and look at the Console tab for any warnings
4. Add the doctype back

**What happened:** The page might look the same for now (it is blank either way), but the browser switches to "quirks mode" without the doctype. Quirks mode uses older, inconsistent rendering rules. You can check which mode the browser is in by typing `document.compatMode` in the console -- "CSS1Compat" means standards mode, "BackCompat" means quirks mode.

## Exercise 3: Add text to the body

**Goal:** Confirm that the body is where visible content goes.

**Steps:**
1. Between the `<body>` and `</body>` tags, type: `Hello, world!`
2. Save and refresh the browser

**What happened:** You see "Hello, world!" on the page. Anything inside the `body` element becomes visible content. Remove the text before moving to the next stage -- Stage 1 will add the real content.

## Exercise 4: Break a tag on purpose

**Goal:** See how the browser handles invalid HTML.

**Steps:**
1. Change `</head>` to `</hed>` (a typo)
2. Save and refresh the browser
3. Right-click, Inspect, and look at the Elements tab

**What happened:** The browser still renders the page. Browsers are forgiving -- they try to fix broken HTML silently. But the Elements tab may show an unexpected structure. Always close your tags correctly so the browser interprets your intent. Fix the typo before continuing.

## Exercise 5: Change the language

**Goal:** See what the `lang` attribute does.

**Steps:**
1. Change `lang="en"` to `lang="fr"` on the `<html>` tag
2. Save and refresh the browser
3. If you have browser translation features enabled, notice whether the browser now thinks the page is in French

**What happened:** The `lang` attribute does not change how the page looks, but it tells the browser and assistive tools what language the content is in. Screen readers use this to choose the correct pronunciation. Change it back to `lang="en"`.

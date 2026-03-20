# Exercises -- Stage 1: Header & Intro

## Exercise 1: Change the heading text

**Goal:** See that the `<h1>` content is what appears as the heading in the browser.

**Steps:**
1. Change the text inside `<h1>` to your own name, like `<h1>My Restaurant</h1>`
2. Save the file and refresh the browser

**What happened:** The heading on the page changed to whatever you typed between the opening `<h1>` and closing `</h1>` tags. The text between an opening and closing tag is called the element's content.

## Exercise 2: Try different heading levels

**Goal:** Understand how heading levels affect size and importance.

**Steps:**
1. Change `<h1>Burger Barn</h1>` to `<h2>Burger Barn</h2>`
2. Save and refresh. Notice the text got smaller.
3. Try `<h3>`, `<h4>`, `<h5>`, and `<h6>` -- each one is smaller than the last.
4. Change it back to `<h1>` when done.

**What happened:** HTML has six heading levels. `<h1>` is the largest and most important, `<h6>` is the smallest. These levels tell browsers and screen readers about the structure of your content.

## Exercise 3: Add a second paragraph

**Goal:** See how browsers stack block elements vertically.

**Steps:**
1. Add a second `<p>` tag below the first one: `<p>Open seven days a week.</p>`
2. Save and refresh

**What happened:** The new paragraph appears below the first one. Block elements like `<p>` stack vertically -- each one starts on a new line. The browser adds automatic spacing between them.

## Exercise 4: Remove the closing tag

**Goal:** Understand why closing tags matter.

**Steps:**
1. Delete `</h1>` from the heading line so it reads `<h1>Burger Barn`
2. Save and refresh. Look at what happened to the paragraph text.
3. Add `</h1>` back to fix it.

**What happened:** Without the closing tag, the browser treats everything after `<h1>` as part of the heading. The paragraph text appeared large and bold because the browser thought it was still inside the heading element. Always close your tags.

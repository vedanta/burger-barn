# Exercises -- Stage 2: Semantic Sections

## Exercise 1: Inspect the semantic structure

**Goal:** See how semantic elements appear in the browser's developer tools.

**Steps:**
1. Open `index.html` in your browser
2. Right-click anywhere on the page and choose "Inspect"
3. In the Elements tab, expand the `<body>` element
4. Look at the tree: `<header>`, then `<main>`, then each `<section>` inside `<main>`

**What happened:** The developer tools show the semantic structure of your HTML. You can see `<header>` and `<main>` as direct children of `<body>`, and three `<section>` elements nested inside `<main>`. This is exactly the hierarchy you wrote in the code.

## Exercise 2: Replace semantic elements with divs

**Goal:** Understand that semantic elements do not change the appearance.

**Steps:**
1. Change `<header>` to `<div>` and `</header>` to `</div>`
2. Change `<main>` to `<div>` and `</main>` to `</div>`
3. Change all three `<section>` tags to `<div>` (both opening and closing)
4. Save and refresh the browser

**What happened:** The page looks exactly the same. Semantic elements like `<header>`, `<main>`, and `<section>` behave just like `<div>` visually. The difference is invisible -- it is in the meaning. Screen readers, search engines, and other tools use these elements to understand the page. Change everything back to the semantic elements when done.

## Exercise 3: Use the accessibility tree

**Goal:** See how screen readers interpret semantic elements.

**Steps:**
1. Open the browser's developer tools (right-click, Inspect)
2. In Chrome: go to the Elements tab, then the "Accessibility" panel on the right side. In Firefox: go to the "Accessibility" tab.
3. Look for landmarks like "banner" (for `<header>`) and "main" (for `<main>`)

**What happened:** The browser creates an accessibility tree from your HTML. Semantic elements map to roles that assistive technology understands. `<header>` becomes a "banner" landmark, and `<main>` becomes the "main" landmark. These landmarks help screen reader users jump directly to the content they want.

## Exercise 4: Add a fourth section

**Goal:** Practice adding a new section to the structure.

**Steps:**
1. After the "Sides" section but before `</main>`, add a new section:
   ```html
   <section>
     <h2>Drinks</h2>
   </section>
   ```
2. Save and refresh

**What happened:** A new "Drinks" heading appears on the page. Adding a section follows the same pattern: a `<section>` element with an `<h2>` inside it. Remove it when done to keep your code matching this stage.

## Exercise 5: Nest sections incorrectly

**Goal:** See what happens when you put content outside the semantic containers.

**Steps:**
1. Add a new `<p>Today's special: BBQ Bacon Burger</p>` between `</header>` and `<main>` (outside both elements)
2. Save and refresh

**What happened:** The text appears on the page between the header and the sections. It works, but it is not inside `<main>`, which means screen readers might skip it when users jump to the main content. Every piece of important content should live inside the appropriate semantic element. Remove the paragraph when done.

# unilab-acceleration

# Shop.co - E-commerce Landing Page

A modern, fully responsive e-commerce landing page built with a focus on clean code, semantic HTML, and advanced CSS techniques. This project showcases a "Mobile First" approach and smooth user experience.

## 🚀 Live Demo

https://4shortiia.github.io/unilab-acceleration/

## ✨ Features

- **Mobile-First Responsive Design:** Optimized for all screen sizes, from small mobile devices (390px) to large ultra-wide monitors (1440px+).
- **Smooth Animations:** Includes floating sparkle effects in the Hero section and an infinite scrolling marquee for brand logos.
- **Dynamic Counters:** JavaScript-powered counters for business statistics (Brands, Products, Customers).
- **Interactive Elements:** Custom-styled buttons with hover states and transitions.

## 🛠️ Tech Stack

- **HTML5:** Focused on Accessibility (A11y) and Semantic structure.
- **CSS3 / SASS (SCSS):** - Used **BEM (Block Element Modifier)** naming convention for maintainability.
    - Modular architecture with `@use` and `@forward` rules.
    - Utilized Mixins, Variables (Maps), and Functions for a robust design system.
- **JavaScript (Vanilla):** For scroll-based animations and statistics counting.

## 🏗️ Technical Highlights

### 1. Semantic HTML & Accessibility

The project follows modern SEO and accessibility standards:

- Used `<section>`, `<article>`, `<figure>`, and `<header>` tags correctly to define document structure.
- Ensure all images have descriptive `alt` attributes.
- Buttons and links are keyboard-navigable.

### 2. SASS Structure & Methodology

- **BEM Naming:** Prevented style leakage and ensured a clear relationship between HTML and CSS (e.g., `.hero__title`, `.hero__btn--primary`).
- **Responsive Logic:** Implemented flexible layouts using `clamp()`, `calc()`, and relative units (`rem`, `em`, `vw`).
- **Layout Control:** Solved complex overflow issues on mobile devices using `overflow-x: hidden` and `box-sizing: border-box` to ensure a "locked" horizontal view.

### 3. Mobile Responsiveness Fixes

One of the key challenges was ensuring a seamless experience on small mobile screens. This was achieved by:

- Replacing fixed pixel widths with `max-width` and `calc()` for UI elements like buttons and banners.
- Implementing an `overflow-hidden` wrapper on the Hero section to contain decorative absolute elements (sparkles).
- Using `flex-wrap` and `object-fit` to prevent layout breaking on varying aspect ratios.

## 📂 Project Structure

```text
├── assets/             # Images, Icons, and Logos
├── scss/
│   ├── abstracts/      # Mixins, Variables, Functions
│   ├── base/           # Reset and Typography
│   ├── components/     # Buttons, Cards
│   ├── layout/         # Header, Footer, Hero Section
│   └── main.scss       # Main entry point
├── main.js             # Interaction logic
└── index.html          # Main markup
```

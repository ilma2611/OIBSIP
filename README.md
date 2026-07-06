# OIBSIP
internship projects
# CocoaCharm - Handmade Chocolates Landing Page 🍫

This is a landing page project made for a small home-based chocolate business called **CocoaCharm**. Built as a internship project using pure HTML and CSS (no JavaScript).

## What it looks like

A cute pastel-themed landing page with:
- Sticky navbar with logo and menu links
- Hero section with tilted polaroid-style photos
- Intro/about text section
- Top sellers product grid (4 products)
- "Shop by collection" section with wobbly blob-shaped buttons
- Our story section with photo
- Shop with us icon strip (delivery, custom orders, gift wrapping etc.)
- Footer

Fully responsive - collapses down nicely for mobile screens.

## Tech used

- HTML5
- CSS3 (flexbox + grid, no frameworks)
- Google Fonts (Quicksand + Caveat)
- No JavaScript at all

## Folder structure

```
my-website/
├── index.html
└── assets/
    └── images/
        ├── hero-choco.jpg
        ├── hero-gift.jpg
        ├── best-seller-dark-bar.jpg
        ├── truffle-box.jpg
        ├── fudge-bites.jpg
        ├── gift-hamper.jpg
        └── our-story.jpg
```

The `assets/images` folder needs to stay next to `index.html` for the images to load properly.

## How to run it

Just open `index.html` in any browser. No build steps, no npm install, nothing. It's plain HTML/CSS.

## Notes / things to improve later

- Images are currently placeholders - need to swap in real product photos
- Nav links (`#`) aren't wired to actual pages yet
- Mobile menu just hides the nav links since there's no JS - could add a pure CSS checkbox-toggle menu later
- Cart button doesn't actually do anything yet, just for looks

## Credits

Design inspired by a Shopify boutique theme reference, adapted here for a chocolate shop.

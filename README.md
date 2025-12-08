# Idaho Pharmacy, LLC — Long-Term Care Pharmacy

This repository contains the Idaho Pharmacy marketing homepage deliverables: a Figma-ready specification plus a production-ready responsive HTML/CSS/JS implementation with exportable assets.

## Contents
- `index.html` — semantic one-page layout with sticky header, hero, services, map, experts, onboarding CTA, footer, and onboarding modal.
- `styles.css` — custom CSS using CSS variables, responsive grid rules, expert/service card styling, and interaction states.
- `script.js` — minimal enhancements (mobile nav, sticky header, tooltip, modal, form validation).
- `assets/` — SVG icon system, Idaho mountain background, Idaho map, logo, and optimized hero/team imagery (WebP + PNG).
- `docs/figma-design-spec.md` — detailed layout + component directions for recreating the file in Figma (desktop + mobile frames, component library requirements).
- `docs/style-guide.md` + `docs/style-guide.pdf` — developer handoff and accessibility checklist.
- `figma/README.md` — step-by-step instructions for translating the spec into a .fig file with auto-layout components.

## Getting Started
1. Open `index.html` in any modern browser.
2. Update asset paths or text via `data-cms-key` attributes if integrating with a CMS.
3. For production, minify `styles.css` / `script.js` or integrate into your pipeline.

### Development Notes
- No build tooling is required; however, the CSS is Tailwind-ready via utility-like naming and CSS variables if you prefer to port it.
- `script.js` currently simulates network submission (`fakeSubmit`). Replace with a real `fetch` call inside `handleFormSubmit` and update the `data-endpoint` attribute on `.contact-form`.
- eMAR integration CTAs are grouped under the Services section; wire up actual URLs or API docs as needed.

### Assets & Export
- Icons are exported as accessible SVG (24–64px artboards) in `assets/images/`.
- Bitmap placeholders exist in both `.webp` and `.png` for browsers without WebP support.
- Additional asset exports (map, logo, hero artwork) are organized for quick download.

### Figma Guidance
- Recreate the provided spec in Figma using the measurements and components defined in `docs/figma-design-spec.md`.
- Set up auto-layout for navigation, cards, buttons, hero grid, and footer stacks.
- Include frames for Desktop 1440, Tablet 1024, and Mobile 375.
- Build a shared component library (Buttons, Cards, Form Fields, Map, Icon Set) with color and text styles matching the provided tokens.

### Accessibility Checklist
- Skip link jumps to `#main-content`.
- Sticky header focus order preserved on mobile via nav toggle `aria-expanded`.
- Map pins, modal, and form status messages use `aria-live` updates.
- Color palette meets WCAG AA (see `docs/style-guide.md`).

## Packaging
- Run `zip -r code.zip index.html styles.css script.js assets docs README.md` to ship the code bundle.
- Run `zip -r assets.zip assets` for a standalone asset archive.

## License
All branding copy is provided by Idaho Pharmacy, LLC. Artwork is bespoke to this mockup and free to modify for Idaho Pharmacy initiatives.

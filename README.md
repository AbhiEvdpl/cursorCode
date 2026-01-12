# Idaho Pharmacy — SpaceX-Inspired Website

A modern, cinematic website for Idaho Pharmacy, LLC featuring a SpaceX-inspired design with full-screen sections, dark theme, and dramatic visuals.

## Design Features

### SpaceX-Style Elements
- **Full-screen sections** with scroll snap behavior
- **Dark theme** with pure black background
- **Minimalist navigation** with sticky header
- **Bold typography** up to 120px hero text
- **Dramatic gradients** and visual effects
- **Smooth scroll animations** and parallax effects

### Sections
1. **Hero** - Full-screen intro with mountain silhouette and gradient glow
2. **Services** - Grid of 6 service cards with hover effects
3. **Coverage** - Idaho map visualization with pulsing markers
4. **eMAR Integration** - Technology partners showcase
5. **Facilities** - Types of facilities served
6. **Experts** - Team section with overlay image
7. **CTA** - Call-to-action banner
8. **Contact** - Full contact form with facility details

## Tech Stack

- HTML5 (semantic structure)
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (intersection observer, scroll effects)
- Google Fonts (Inter)

## Quick Start

```bash
# Open directly in browser
open index.html

# Or use a local server
python -m http.server 8000
npx serve
```

## File Structure

```
├── index.html          # Main HTML
├── styles.css          # All styles
├── script.js           # Interactions
├── assets/
│   └── images/         # SVG icons, photos
├── docs/
│   ├── style-guide.md
│   └── figma-design-spec.md
└── README.md
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | #000000 | Main background |
| Surface | #111111 | Cards, forms |
| Primary | #1E4637 | CTA section, accents |
| Secondary | #224E7A | Secondary elements |
| Accent | #C89F4A | Highlights, labels |
| Text | #FFFFFF | Primary text |
| Text Muted | rgba(255,255,255,0.7) | Secondary text |

## Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Features

- Scroll snap for section navigation
- Parallax hero effect
- Intersection Observer animations
- Form validation and submission
- Mobile navigation drawer
- Reduced motion support
- Keyboard navigation (ESC to close menu)

## License

© 2026 Idaho Pharmacy, LLC. All rights reserved.

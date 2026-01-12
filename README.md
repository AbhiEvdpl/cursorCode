# DataAirflow Website

A modern, SpaceX-inspired website for DataAirflow - a data pipeline infrastructure platform.

## Features

- **Full-Screen Sections** - Each section takes up 100vh with smooth snap scrolling
- **Dark Theme** - Pure black background with high-contrast accents
- **Animated Visualizations** - SVG pipeline flows, particle effects, chart animations
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Accessibility** - Reduced motion support, keyboard navigation, semantic HTML

## Sections

1. **Hero** - Animated particles, gradient text, scroll indicator
2. **Pipelines** - Real-time data flow visualization with stats
3. **Analytics** - Animated chart bars with feature list
4. **Integrations** - Cloud provider cards (AWS, GCP, Azure, etc.)
5. **Enterprise** - Security compliance badges
6. **Contact** - Email signup form

## Tech Stack

- HTML5
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (Intersection Observer, smooth scroll)
- Google Fonts (Inter)

## Quick Start

Open `index.html` in a browser, or use a local server:

```bash
python -m http.server 8000
```

## File Structure

```
index.html      # Main HTML
styles.css      # All styles
script.js       # Interactions and animations
assets/images/  # Image assets
```

## Customization

Edit CSS variables in `styles.css`:

```css
:root {
  --color-bg: #000000;
  --color-accent: #00d4ff;
  --color-accent-purple: #7c3aed;
  --color-accent-green: #10b981;
}
```

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## License

Copyright 2026 DataAirflow, Inc. All rights reserved.

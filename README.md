# Idaho Pharmacy, LLC — Long-Term Care Pharmacy Website

A modern, responsive website for Idaho Pharmacy, LLC — Idaho's trusted long-term care pharmacy partner. This design is inspired by premium Webflow templates (Ampul & Clenia) featuring smooth animations, clean medical aesthetics, and professional card-based layouts.

## 🎨 Design Features

### Visual Style
- **Clean Medical Aesthetic** — Professional healthcare branding with trust-building green and blue palette
- **Modern Hero Section** — Animated floating orbs, gradient backgrounds, and stat counters
- **Card-Based Layout** — Clenia-inspired service cards with hover animations and accent borders
- **Smooth Animations** — Scroll-triggered reveals, floating elements, and micro-interactions

### Brand Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#1E4637` | CTAs, headers, footer |
| Secondary Blue | `#224E7A` | Section backgrounds, headings |
| Accent Amber | `#C89F4A` | Highlights, icons, badges |
| Sky Blue | `#88C0E6` | Backgrounds, focus states |

### Typography
- **Font:** DM Sans (Google Fonts)
- **Hero:** clamp(2.5rem, 6vw, 4rem)
- **Section Titles:** clamp(2rem, 5vw, 3rem)
- **Body:** 18px with 1.7 line-height

## 📁 Project Structure

```
├── index.html           # Semantic HTML5 with modern structure
├── styles.css           # CSS with custom properties & animations
├── script.js            # Vanilla JS for interactions
├── assets/
│   └── images/          # SVG icons, WebP/PNG images
├── docs/
│   ├── figma-design-spec.md   # Comprehensive Figma recreation guide
│   └── style-guide.md         # Developer style reference
└── README.md
```

## 🚀 Quick Start

1. **Open in Browser**
   ```bash
   # Simply open index.html in any modern browser
   open index.html
   ```

2. **Local Development**
   ```bash
   # Use any local server
   npx serve .
   # or
   python -m http.server 8000
   ```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Single column, stacked sections |
| Tablet | 768-1023px | 2-column grids, mobile nav |
| Desktop | 1024-1439px | Full layout with animations |
| Large | ≥ 1440px | Wider container (1320px) |

## ✨ Key Features

### Sections
1. **Hero** — Animated background orbs, floating info cards, stat counters
2. **About** — Company intro with animated Idaho map
3. **Services** — 7 service cards with hover effects and featured badge
4. **Coverage** — Interactive map with tooltips, region cards
5. **Team** — Expert credentials with compact info cards
6. **CTA Banner** — Full-width call-to-action with gradient background
7. **Contact** — Form with validation and contact details
8. **Footer** — Links, social icons, legal information

### Interactive Elements
- Sticky header with backdrop blur on scroll
- Mobile navigation with slide-in panel
- Scroll-triggered animations (Intersection Observer)
- Map pin tooltips on hover/focus
- Form validation with status messages
- Smooth scroll navigation

### Accessibility
- Skip link for keyboard navigation
- ARIA labels on interactive elements
- Focus-visible states
- `prefers-reduced-motion` support
- Semantic HTML structure
- WCAG AA color contrast compliance

## 🎯 Figma Recreation

See `docs/figma-design-spec.md` for detailed specifications including:
- Complete color token system
- Typography scale
- Spacing system (8px base)
- Component specifications
- Animation timing
- Wireframe layouts
- Layer organization

## 📦 Production

### Minification
```bash
# CSS
npx csso styles.css -o styles.min.css

# JavaScript
npx terser script.js -o script.min.js -c -m
```

### Deployment
The site is static and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

### Form Integration
The contact form currently simulates submission. To connect to a real backend:

```javascript
// In script.js, replace the setTimeout simulation with:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Object.fromEntries(new FormData(form)))
});
```

## 🔧 Customization

### Colors
Edit CSS custom properties in `:root`:
```css
:root {
  --color-primary: #1E4637;
  --color-secondary: #224E7A;
  --color-accent: #C89F4A;
  /* ... */
}
```

### Content
Update text directly in `index.html`. All content is structured in semantic sections.

### Images
Replace files in `assets/images/` maintaining the same filenames, or update `src` attributes in HTML.

## 📄 License

All branding and content is provided by Idaho Pharmacy, LLC. The design implementation is available for use in Idaho Pharmacy initiatives.

---

*Built with modern HTML5, CSS3, and vanilla JavaScript. No build tools required.*

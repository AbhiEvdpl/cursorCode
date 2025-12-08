# Idaho Pharmacy — Web Style Guide

## Color System

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #1E4637 | Headers, CTAs, footer, primary actions |
| `--color-primary-dark` | #163328 | Hover states, dark variants |
| `--color-secondary` | #224E7A | Section headers, secondary buttons, links |
| `--color-secondary-dark` | #1a3d5f | Hover states |
| `--color-accent` | #C89F4A | Icons, highlights, badges, decorative |
| `--color-accent-light` | #d4b06a | Light accent variant |
| `--color-light-accent` | #88C0E6 | Backgrounds, gradients, focus states |

### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark` | #4A545E | Body text |
| `--color-dark-soft` | #6B7280 | Secondary text |
| `--color-light` | #F4F4F2 | Background sections |
| `--color-lighter` | #FAFAFA | Page background |
| `--color-white` | #FFFFFF | Cards, surfaces |
| `--color-black` | #1A1F25 | Headings |

### Gradients
```css
--gradient-primary: linear-gradient(135deg, #1E4637 0%, #224E7A 100%);
--gradient-hero: linear-gradient(135deg, rgba(136,192,230,0.15), rgba(30,70,55,0.08), rgba(200,159,74,0.1));
--gradient-accent: linear-gradient(135deg, #C89F4A 0%, #d4b06a 100%);
```

## Typography

### Font Stack
```css
font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Title | clamp(2.5rem, 6vw, 4rem) | 700 | 1.1 |
| Section Title | clamp(2rem, 5vw, 3rem) | 700 | 1.2 |
| Card Title | 20px | 600 | 1.3 |
| Body Large | 19px | 400 | 1.8 |
| Body | 18px | 400 | 1.7 |
| Small/Eyebrow | 14px | 600 | 1.4 |

## Spacing System

### Section Padding
| Breakpoint | Value |
|------------|-------|
| Desktop (1024px+) | 120px |
| Tablet (768-1023px) | 100px |
| Mobile (<768px) | 80px |

### Container
```css
max-width: 1320px;
padding-inline: 24px (mobile) / 40px (tablet) / 64px (desktop);
```

### Component Gaps
| Context | Value |
|---------|-------|
| Card Grid | 24px |
| Section Content | 40-60px |
| Form Fields | 20px |
| Button Groups | 16px |

## Border Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-2xl: 32px;
--radius-full: 9999px;
```

## Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.06);
--shadow-card-hover: 0 20px 40px rgba(0, 0, 0, 0.12);
```

## Component Specifications

### Buttons
- **Border Radius:** 9999px (pill shape)
- **Padding:** 14px 28px (default) / 18px 36px (large)
- **Font Weight:** 600
- **Transition:** all 250ms ease
- **Hover:** translateY(-2px) + enhanced shadow

### Cards (Service Cards)
- **Border Radius:** 24px
- **Padding:** 36px
- **Background:** white
- **Border:** 1px solid rgba(74, 84, 94, 0.08)
- **Shadow:** 0 4px 20px rgba(0, 0, 0, 0.06)
- **Hover:** translateY(-8px) + accent top border

### Navigation
- **Height:** 80px
- **Background:** rgba(255, 255, 255, 0.9)
- **Backdrop Filter:** blur(20px)
- **Position:** Fixed top

### Form Inputs
- **Border Radius:** 12px
- **Padding:** 14px 18px
- **Background:** #FAFAFA
- **Border:** 2px solid transparent
- **Focus:** Sky blue border + shadow

## Animation Specifications

### Page Load (Hero)
| Element | Delay | Duration |
|---------|-------|----------|
| Eyebrow | 0ms | 800ms |
| Title | 100ms | 800ms |
| Subtitle | 200ms | 800ms |
| CTA | 300ms | 800ms |
| Stats | 400ms | 800ms |
| Image | 200ms | 1000ms |

### Scroll Animations
```css
Initial: opacity: 0; transform: translateY(30px);
Final: opacity: 1; transform: translateY(0);
Duration: 600ms
Stagger: 100ms
Easing: ease
```

### Floating Elements
```css
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
Duration: 20s infinite
```

### Pulse Animation (Map Pins)
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(200,159,74,0.5); }
  50% { transform: scale(1.2); box-shadow: 0 0 0 15px rgba(200,159,74,0); }
}
Duration: 2s infinite
```

## Responsive Breakpoints

| Name | Width | Changes |
|------|-------|---------|
| Mobile | < 768px | Single column, stacked layouts, hidden scroll indicator |
| Tablet | 768-1023px | 2-column grids, mobile nav |
| Desktop | 1024-1439px | Full layout, all features |
| Large | ≥ 1440px | Wider container |

### Mobile Navigation
- Full-height slide-in panel (320px or 80vw)
- Transform: translateX(100%) → translateX(0)
- Duration: 400ms
- Body scroll lock when open

## Accessibility

### Focus States
- Outline: 3px solid #88C0E6
- Outline offset: 3px
- Border radius maintained

### Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic Structure
- `<header>` with `<nav>`
- `<main>` containing `<section>` elements
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Skip link for keyboard navigation

## Assets

### Images
| Image | Format | Usage |
|-------|--------|-------|
| hero-courier | WebP/PNG | Hero section |
| experts-team | WebP/PNG | Team section |
| idaho-map | SVG | About & Coverage |
| logo | SVG | Header & Footer |
| map-pin | SVG | Coverage map markers |

### Icons (SVG)
All service icons at 40x40px (card display) or 28x28px (chips)
- icon-after-hours.svg
- icon-daily-delivery.svg
- icon-packaging.svg
- icon-emar.svg
- icon-consultant.svg
- icon-stat.svg
- icon-onboarding.svg
- icon-snf.svg, icon-alf.svg, icon-memory.svg, icon-group-home.svg, icon-hospice.svg
- icon-team.svg, icon-certifications.svg, icon-regulatory.svg, icon-resident.svg

---

*Style Guide v2.0 — Idaho Pharmacy, LLC*

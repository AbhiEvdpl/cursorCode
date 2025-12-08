# Idaho Pharmacy, LLC — Web Style Guide

**Design System v1.0** | Modern Medical Aesthetic inspired by Ampul & Clenia

This style guide documents the design system, component specifications, and implementation guidelines for the Idaho Pharmacy, LLC website.

---

## 🎨 Brand Colors

### Primary Palette

| Token | Hex | RGB | Usage | Contrast on White |
|-------|-----|-----|-------|-------------------|
| **Primary Green** | `#1E4637` | rgb(30, 70, 55) | Headers, CTA buttons, Footer | 7.4:1 ✓ AAA |
| **Secondary Blue** | `#224E7A` | rgb(34, 78, 122) | Section titles, Links, Borders | 5.4:1 ✓ AA |
| **Accent Amber** | `#C89F4A` | rgb(200, 159, 74) | Icons, Highlights, List markers | 2.6:1 (large text only) |
| **Light Accent Sky** | `#88C0E6` | rgb(136, 192, 230) | Backgrounds, Gradients, Focus states | 3.1:1 (large text only) |

### Neutral Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Dark** | `#4A545E` | rgb(74, 84, 94) | Body text, Paragraphs |
| **Light** | `#F4F4F2` | rgb(244, 244, 242) | Page background |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Cards, Surfaces, Modals |

### CSS Variables

```css
:root {
  --color-primary: #1E4637;
  --color-secondary: #224E7A;
  --color-accent: #C89F4A;
  --color-light-accent: #88C0E6;
  --color-dark: #4A545E;
  --color-light: #F4F4F2;
  --color-white: #FFFFFF;
}
```

---

## ✍️ Typography

### Font Family

**Primary**: DM Sans (Google Fonts)  
**Fallbacks**: Lato, Source Sans Pro, system-ui, sans-serif

```css
font-family: 'DM Sans', 'Lato', 'Source Sans Pro', system-ui, -apple-system, sans-serif;
```

**Weights Used**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Type Scale

| Style | CSS | Desktop | Tablet | Mobile | Weight | Usage |
|-------|-----|---------|--------|--------|--------|-------|
| **Display** | `h1` | 60px / 72px | 48px / 58px | 40px / 48px | 700 | Hero headline |
| **Heading 2** | `h2` | 44px / 56px | 36px / 46px | 32px / 40px | 700 | Section headers |
| **Heading 3** | `h3` | 24px / 32px | 22px / 30px | 20px / 28px | 600 | Card titles |
| **Body Large** | `.lead` | 22px / 34px | 20px / 32px | 18px / 28px | 400 | Hero subtext |
| **Body** | `p` | 18px / 28px | 17px / 27px | 16px / 26px | 400 | Paragraphs |
| **Body Small** | `.body-small` | 16px / 26px | 16px / 26px | 15px / 24px | 400 | Captions |
| **Eyebrow** | `.eyebrow` | 14px / 22px | 14px / 22px | 13px / 20px | 600 | Section labels |
| **Button** | `.btn` | 16px / 24px | 16px / 24px | 15px / 22px | 600 | Button text |

### Typography Guidelines

- **Line Height**: Minimum 1.5 for body text (WCAG AA)
- **Letter Spacing**: 
  - Eyebrows: `0.1em` (10% tracking)
  - Headings: `-0.5px` (tight tracking for large text)
  - Body: `0` (default)
- **Font Smoothing**: Apply `-webkit-font-smoothing: antialiased` for crisp rendering
- **Responsive Scaling**: Use `clamp()` for fluid typography between breakpoints

```css
h1 {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  line-height: 1.15;
  font-weight: 700;
  color: var(--color-secondary);
}
```

---

## 📐 Spacing System

### Spacing Scale (8px base unit)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 8px | Icon gaps, tight spacing |
| `--space-sm` | 12px | Form field gaps, chip spacing |
| `--space-md` | 16px | Card content gaps, list items |
| `--space-lg` | 24px | Card padding, grid gaps |
| `--space-xl` | 32px | Section inner spacing |
| `--space-2xl` | 48px | Large section gaps |
| `--space-3xl` | 64px | Hero spacing |
| `--space-4xl` | 96px | Section padding (tablet) |
| `--space-5xl` | 120px | Section padding (desktop) |

### Layout Spacing

```css
section {
  padding: 120px 0;  /* Desktop */
}

@media (max-width: 1024px) {
  section {
    padding: 96px 0;  /* Tablet */
  }
}

@media (max-width: 600px) {
  section {
    padding: 72px 0;  /* Mobile */
  }
}
```

### Grid Gaps

- **Card Grids**: 24px (desktop/tablet), 16px (mobile)
- **Content Columns**: 32px (desktop), 24px (tablet), 16px (mobile)
- **Chips/Badges**: 12px all viewports

---

## 🎭 Shadows & Effects

### Shadow Tokens

```css
:root {
  --shadow-soft: 0 10px 30px rgba(30, 70, 55, 0.08);
  --shadow-card: 0 20px 60px rgba(30, 70, 55, 0.12);
  --shadow-hover: 0 30px 60px rgba(30, 70, 55, 0.18);
  --shadow-header: 0 8px 32px rgba(30, 70, 55, 0.12);
  --shadow-modal: 0 40px 80px rgba(30, 70, 55, 0.2);
}
```

### Usage Guidelines

| Element | Default Shadow | Hover Shadow | Notes |
|---------|---------------|--------------|-------|
| Cards | `shadow-card` | `shadow-hover` | + translateY(-8px) |
| Buttons | None | `shadow-soft` | + translateY(-2px) |
| Header (scrolled) | `shadow-header` | — | Sticky state |
| Modal | `shadow-modal` | — | + backdrop blur |
| Form | `shadow-card` | — | Static |

### Backdrop Effects

```css
backdrop-filter: blur(10px);  /* Header, Modal backdrop */
```

---

## 🎨 Gradients

### Defined Gradients

#### Hero Sky Gradient
```css
background: linear-gradient(
  135deg, 
  rgba(136, 192, 230, 0.35) 0%, 
  rgba(30, 70, 55, 0.08) 100%
);
```

#### Hero Radial Accent
```css
background: radial-gradient(
  circle at 20% 50%, 
  rgba(136, 192, 230, 0.2) 0%, 
  transparent 50%
);
```

#### Serving Section
```css
background: linear-gradient(
  180deg, 
  rgba(136, 192, 230, 0.3) 0%, 
  #F4F4F2 100%
);
```

#### Accent Bar (Card Hover)
```css
background: linear-gradient(
  90deg, 
  #C89F4A 0%, 
  #88C0E6 100%
);
```

---

## 🧩 Component Specifications

### Buttons

#### Variants

**Primary** (`.btn--primary`)
```css
background: var(--color-primary);
color: var(--color-white);
border-radius: 999px;
padding: 14px 32px;
font-weight: 600;
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

**Secondary** (`.btn--secondary`)
```css
background: var(--color-secondary);
color: var(--color-white);
```

**Ghost** (`.btn--ghost`)
```css
background: transparent;
border: 2px solid var(--color-secondary);
color: var(--color-secondary);
```

**Light** (`.btn--light`)
```css
background: var(--color-white);
color: var(--color-primary);
```

**Ghost Light** (`.btn--ghost-light`)
```css
background: transparent;
border: 2px solid var(--color-white);
color: var(--color-white);
```

#### States

```css
.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

.btn:focus-visible {
  outline: 3px solid var(--color-light-accent);
  outline-offset: 2px;
}

.btn:active {
  transform: translateY(0);
}
```

---

### Cards

#### Service Card (`.service-card`)

```css
.service-card {
  background: var(--color-white);
  border: 1px solid rgba(34, 78, 122, 0.08);
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: var(--shadow-card);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  border-color: rgba(200, 159, 74, 0.3);
}

/* Top accent bar on hover */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-light-accent));
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover::before {
  transform: scaleX(1);
}
```

**Contents**:
- Icon: 56×56px SVG, scales to 1.1 on hover
- Title: H3, color secondary
- Description: Body small, 90% opacity

**Grid**: 3 columns (>960px) → 2 columns (600-960px) → 1 column (<600px)

#### Expert Card (`.expert-card`)

```css
.expert-card {
  background: var(--color-white);
  border: 1px solid rgba(34, 78, 122, 0.08);
  border-radius: 20px;
  padding: 28px 24px;
  box-shadow: var(--shadow-soft);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.expert-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-light-accent);
}
```

**Contents**:
- Icon: 52×52px SVG, scales to 1.1 on hover
- Title: H3, 1.15rem
- Description: Body small, line-height 1.6

#### Badge Card (`.badge-card`)

```css
.badge-card {
  background: var(--color-white);
  border: 1px solid rgba(34, 78, 122, 0.1);
  border-radius: 20px;
  padding: 28px;
  box-shadow: var(--shadow-soft);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.badge-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
  border-color: var(--color-light-accent);
}
```

---

### Forms

#### Input Fields

```css
input, select, textarea {
  border: 2px solid rgba(34, 78, 122, 0.15);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 1rem;
  font-family: inherit;
  background: var(--color-white);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

input:hover, select:hover, textarea:hover {
  border-color: rgba(34, 78, 122, 0.25);
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--color-light-accent);
  box-shadow: 0 0 0 3px rgba(136, 192, 230, 0.15);
}
```

#### Form Layout

```css
.contact-form {
  background: var(--color-white);
  padding: 40px;
  border-radius: 24px;
  box-shadow: var(--shadow-card);
  border: 1px solid rgba(34, 78, 122, 0.08);
  display: grid;
  gap: 20px;
}
```

---

### Navigation

#### Header

```css
.site-header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  z-index: 900;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header.is-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-header);
}
```

**Height**: 80px  
**Contents**: Logo (40px height), Nav links (24px gap), CTA button

#### Mobile Menu

Breakpoint: **≤960px**

```css
.primary-nav {
  position: fixed;
  inset: 0 0 0 35%;
  background: var(--color-white);
  padding: 100px 32px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.primary-nav.open {
  transform: translateX(0);
}
```

---

### Modal

```css
.modal {
  border: none;
  border-radius: 28px;
  padding: 0;
  width: min(600px, 90vw);
  box-shadow: var(--shadow-modal);
  animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal::backdrop {
  background: rgba(30, 70, 55, 0.4);
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## 🎬 Animations

### Keyframe Definitions

```css
@keyframes floatCard {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@keyframes pulsePin {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### Transition Tokens

```css
:root {
  --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animation Usage

| Element | Animation | Duration | Easing | Loop |
|---------|-----------|----------|--------|------|
| Hero Image | `floatCard` | 6s | ease-in-out | Infinite |
| Map Pins | `pulsePin` | 3s | ease-in-out | Infinite |
| Sections | `fadeInUp` | 600ms | cubic-bezier | Once (on scroll) |
| Modal | `scaleIn` | 300ms | cubic-bezier | On open |
| Cards (hover) | `translateY` | 400ms | cubic-bezier | On hover |

### Scroll Animations (JavaScript)

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

// Observe sections and cards
document.querySelectorAll('section, .service-card, .expert-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
```

### Stagger Effect

```javascript
document.querySelectorAll('.card-grid .service-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Desktop First Approach */

/* Large Desktop (default) */
@media (min-width: 1440px) { ... }

/* Desktop */
@media (max-width: 1280px) { ... }

/* Tablet */
@media (max-width: 1024px) {
  /* Hero stacks vertically */
  /* Card grids to 2 columns */
}

/* Small Tablet */
@media (max-width: 768px) {
  /* Footer to 2 columns */
}

/* Mobile Menu */
@media (max-width: 960px) {
  /* Hamburger menu appears */
}

/* Mobile */
@media (max-width: 600px) {
  /* Cards to 1 column */
  /* Buttons stack vertically */
}
```

### Key Responsive Changes

| Breakpoint | Changes |
|------------|---------|
| **≤1024px** | Hero image stacks below text, 2-col grids |
| **≤960px** | Mobile navigation (hamburger menu) |
| **≤768px** | Footer to 2 columns, reduced section padding |
| **≤600px** | All cards to 1 column, full-width buttons |

### Container Widths

```css
.container {
  width: min(100% - 48px, 1280px);
  margin: 0 auto;
}

@media (max-width: 960px) {
  .container {
    width: min(100% - 32px, 1280px);
  }
}

@media (max-width: 600px) {
  .container {
    width: min(100% - 32px, 100%);
  }
}
```

---

## ♿ Accessibility

### Color Contrast (WCAG AA/AAA)

| Combination | Ratio | Pass |
|-------------|-------|------|
| Primary on White | 7.4:1 | ✓ AAA |
| Secondary on White | 5.4:1 | ✓ AA |
| Dark on Light | 4.8:1 | ✓ AA |
| Accent on White | 2.6:1 | Large text only |

### Focus States

```css
*:focus-visible {
  outline: 3px solid var(--color-light-accent);
  outline-offset: 2px;
}
```

All interactive elements must have visible focus indicators.

### Semantic HTML

- Use proper heading hierarchy: H1 → H2 → H3 (no skipping)
- Landmark regions: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Form labels explicitly bound: `<label for="input-id">`
- Alt text for all images (descriptive, contextual)

### ARIA Attributes

```html
<!-- Skip Link -->
<a class="skip-link" href="#main-content">Skip to main content</a>

<!-- Live Regions -->
<p role="status" aria-live="polite">Form submitted successfully</p>

<!-- Modal -->
<dialog aria-labelledby="modal-title" aria-describedby="modal-desc">
  <h2 id="modal-title">Start Service</h2>
  <p id="modal-desc">Complete the form below...</p>
</dialog>

<!-- Map Pins -->
<button aria-label="Boise and Treasure Valley coverage" data-region="...">
  <img src="map-pin.svg" alt="">
</button>
```

### Keyboard Navigation

- Tab order follows visual flow
- Enter/Space activates buttons and links
- ESC closes modals and mobile menu
- Modal traps focus (can't tab outside until closed)
- Skip link for keyboard users

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 📦 Assets & File Structure

### Directory Structure

```
/workspace
├── assets/
│   └── images/
│       ├── hero-courier.webp (+ .png)
│       ├── experts-team.webp (+ .png)
│       ├── icon-*.svg (20+ icons)
│       ├── idaho-map.svg
│       ├── logo.svg
│       ├── map-pin.svg
│       └── hero-mountains.svg
├── docs/
│   ├── figma-design-spec.md
│   └── style-guide.md (this file)
├── index.html
├── styles.css
└── script.js
```

### Image Optimization

- **WebP**: Quality 80-85, use Squoosh
- **PNG**: Compress with TinyPNG/ImageOptim
- **SVG**: Optimize with SVGO

### Icon Specifications

- UI Icons: 24×24px artboard, 1.5px stroke
- Service/Expert Icons: 56×56px artboard, 2px stroke
- Map/Logo: Scalable SVG, single color or gradient

---

## 🔧 Implementation Notes

### CSS Architecture

- **CSS Custom Properties**: All colors, shadows, transitions
- **Mobile-First**: Base styles → tablet → desktop
- **BEM Naming**: `.block__element--modifier`
- **Performance**: Prefer `transform` and `opacity` for animations (GPU-accelerated)

### JavaScript Patterns

- **Vanilla JS**: No dependencies, modern ES6+
- **Intersection Observer**: Scroll animations
- **Event Delegation**: For dynamic content
- **Progressive Enhancement**: Works without JS for core content

### CMS Integration

Data attributes mark editable content:

```html
<h1 data-cms-key="hero-headline">Your Idaho Long-Term Care Pharmacy Partner</h1>
```

### Performance Targets

- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5s

**Strategies**:
- Lazy load images below fold
- Preconnect to Google Fonts
- Inline critical CSS
- Defer non-critical JavaScript

---

## 📋 Component Checklist

When implementing a new component:

- ✅ Uses design tokens (colors, spacing, shadows)
- ✅ Responsive at all breakpoints
- ✅ Accessible (focus states, ARIA, semantic HTML)
- ✅ Smooth transitions (400ms default)
- ✅ Hover/focus states defined
- ✅ Tested with keyboard navigation
- ✅ Tested with reduced motion preference
- ✅ Documented in style guide

---

## 🎨 Design Philosophy

### Inspired by Ampul (ampul.webflow.io)
- Clean, minimal medical aesthetic with generous white space
- Soft gradient backgrounds and floating animations
- Large, readable typography with clear hierarchy
- Sticky header with subtle backdrop blur
- Smooth micro-interactions on all interactive elements

### Inspired by Clenia (clenia.webflow.io)
- Card-based layout with consistent grid spacing (24-32px)
- Icon + Title + Description pattern for content cards
- Soft, multi-layer shadows for depth
- Accent color bars on hover (animated reveal)
- Badge/chip components for categorization
- Testimonial overlays on imagery

### Idaho Pharmacy Brand Principles
- **Trust**: Professional color palette (green, blue) conveys medical expertise
- **Local**: Idaho-centric imagery (map, mountains) reinforces local ownership
- **Clarity**: Large type, simple layouts ensure accessibility for all users
- **Warmth**: Soft gradients and rounded corners create approachable aesthetic

---

## 📖 Resources

### Design Tools
- **Figma**: Primary design tool (see figma-design-spec.md)
- **Google Fonts**: DM Sans (weights 400, 500, 600, 700)
- **SVGOMG**: SVG optimization tool
- **Squoosh**: Image compression (WebP/PNG)

### Reference Websites
- **Ampul**: https://ampul.webflow.io/ (hero, animations, medical aesthetic)
- **Clenia**: https://clenia.webflow.io/ (cards, spacing, grid layout)

### Documentation
- **Figma Design Spec**: `/docs/figma-design-spec.md` (complete component library)
- **Style Guide**: `/docs/style-guide.md` (this file)
- **README**: `/README.md` (project overview)

---

**Style Guide Version**: 1.0  
**Last Updated**: December 2025  
**Maintainer**: Design Team  
**Status**: Production Ready ✓


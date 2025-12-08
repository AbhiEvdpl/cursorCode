# Idaho Pharmacy, LLC — Figma Design Specification

**Design System inspired by Ampul & Clenia**

Modern, clean medical aesthetic with soft animations, generous spacing, and accessible design patterns. This specification provides complete instructions for building the Idaho Pharmacy, LLC website in Figma with responsive breakpoints and component-driven architecture.

---

## 📐 Canvas & Layout Foundation

### Frame Setup
Create the following artboards in Figma:

| Device | Width | Height | Grid |
|--------|-------|--------|------|
| **Desktop** | 1440px | Auto (~5800px) | 12 columns, 24px gutter, 120px margins |
| **Tablet** | 1024px | Auto | 8 columns, 20px gutter, 80px margins |
| **Mobile** | 375px | Auto | 4 columns, 16px gutter, 16px margins |

### Layout Grid
- **Desktop**: 12-column grid with 80px columns, 24px gutters, 120px side margins
- **Tablet**: 8-column grid with 88px columns, 20px gutters, 80px side margins  
- **Mobile**: 4-column grid with 69px columns, 16px gutters, 16px side margins

### Container Max-Width
- Primary content container: **1280px**
- Content padding: **24px** (mobile) → **32px** (tablet) → **0px** (desktop with margins)

### Vertical Rhythm
- Section padding (top/bottom):
  - Desktop: **120px**
  - Tablet: **96px**
  - Mobile: **72px**
- Inter-element spacing: **8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 120px**

---

## 🎨 Color System

Create these color styles in Figma (Format: **color/name**):

### Primary Colors
```
color/primary          #1E4637  (Forest Green - Headers, CTA, Footer)
color/secondary        #224E7A  (Ocean Blue - Section titles, Links)
color/accent           #C89F4A  (Amber Gold - Icons, Highlights)
color/light-accent     #88C0E6  (Sky Blue - Backgrounds, Accents)
```

### Neutral Colors
```
color/dark             #4A545E  (Charcoal - Body text)
color/light            #F4F4F2  (Soft Gray - Page background)
color/white            #FFFFFF  (Pure White - Cards, Surfaces)
```

### Gradients
```
gradient/hero-sky
  Type: Linear, 135°
  Stops: 
    0%   → rgba(136, 192, 230, 0.35)  [Sky Blue 35%]
    100% → rgba(30, 70, 55, 0.08)     [Forest Green 8%]

gradient/hero-radial
  Type: Radial, center at 20% 50%
  Stops:
    0%   → rgba(136, 192, 230, 0.2)
    50%  → transparent

gradient/serving
  Type: Linear, 180° (top to bottom)
  Stops:
    0%   → rgba(136, 192, 230, 0.3)
    100% → #F4F4F2

gradient/accent-bar
  Type: Linear, 90° (left to right)
  Stops:
    0%   → #C89F4A  [Accent]
    100% → #88C0E6  [Light Accent]
```

### Opacity Overlays
```
overlay/modal-backdrop   rgba(30, 70, 55, 0.4) + 8px blur
overlay/nav-mobile       rgba(0, 0, 0, 0.3)
```

---

## ✍️ Typography System

**Font Family**: DM Sans (Google Fonts)  
**Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Text Styles

Create these text styles in Figma (Format: **text/name**):

| Style | Size/Line | Weight | Letter Spacing | Color | Usage |
|-------|-----------|--------|----------------|-------|-------|
| **text/display** | 60px / 72px | 700 | -0.5px | secondary | Hero H1 (desktop) |
| **text/display-mobile** | 40px / 48px | 700 | -0.5px | secondary | Hero H1 (mobile) |
| **text/h2** | 44px / 56px | 700 | -0.5px | secondary | Section headings |
| **text/h2-mobile** | 32px / 40px | 700 | -0.5px | secondary | Section headings (mobile) |
| **text/h3** | 24px / 32px | 600 | 0 | secondary | Card titles |
| **text/body-large** | 22px / 34px | 400 | 0 | dark | Hero subtext, leads |
| **text/body** | 18px / 28px | 400 | 0 | dark | Paragraph content |
| **text/body-small** | 16px / 26px | 400 | 0 | dark | Form labels, captions |
| **text/eyebrow** | 14px / 22px | 600 | 1.4px (10%) | accent | Section labels |
| **text/button** | 16px / 24px | 600 | 0 | — | Button labels |
| **text/caption** | 14px / 20px | 500 | 0 | dark | Helper text, metadata |

### Responsive Typography Notes
- Display scales: 60px (desktop) → 48px (tablet) → 40px (mobile)
- H2 scales: 44px (desktop) → 36px (tablet) → 32px (mobile)
- Body-large scales: 22px (desktop) → 20px (tablet) → 18px (mobile)
- All text maintains minimum 1.5 line-height for accessibility

---

## 🧩 Component Library

Create a dedicated **"Components"** page in Figma with all reusable elements.

### 1. Buttons

**Component Set**: `button` with variants

#### Variants
- **Type**: Primary, Secondary, Ghost, Light, Ghost-Light
- **State**: Default, Hover, Focus, Disabled
- **Size**: Default (14px/32px padding), Large (16px/40px padding)

#### Specifications

```
button/primary
  Fill: color/primary (#1E4637)
  Text: color/white, text/button
  Border-radius: 999px
  Padding: 14px horizontal, 32px vertical
  Hover: translateY(-2px), shadow/soft
  Focus: 3px outline color/light-accent, 2px offset

button/secondary
  Fill: color/secondary (#224E7A)
  Text: color/white, text/button
  Hover: translateY(-2px), shadow/soft

button/ghost
  Fill: transparent
  Border: 2px solid color/secondary
  Text: color/secondary, text/button
  Hover: background rgba(34, 78, 122, 0.05)

button/light
  Fill: color/white
  Text: color/primary, text/button
  Hover: shadow/soft

button/ghost-light
  Fill: transparent
  Border: 2px solid color/white
  Text: color/white, text/button
  Hover: background rgba(255, 255, 255, 0.1)
```

**Interactive**: Add prototype connections for hover/focus states using Smart Animate (duration: 200ms, ease-out)

---

### 2. Service Cards

**Component**: `card/service`

```
Dimensions: 320px × 400px (auto-height)
Background: color/white
Border: 1px solid rgba(34, 78, 122, 0.08)
Border-radius: 24px
Padding: 40px 32px
Shadow: effect/card

Layout (Auto Layout):
  Direction: Vertical
  Gap: 16px
  Align: Top Left

Contents:
  1. Icon (56×56px, SVG)
  2. Title (text/h3)
  3. Body (text/body-small, opacity 90%)

Hover State:
  - translateY(-8px)
  - Shadow: effect/card-hover
  - Border: rgba(200, 159, 74, 0.3)
  - Top accent bar: 4px height, gradient/accent-bar (animated scaleX 0→1)
  - Icon: scale(1.1)
```

**Grid Layout**: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)

---

### 3. Expert Cards

**Component**: `card/expert`

```
Dimensions: 280px × auto
Background: color/white
Border: 1px solid rgba(34, 78, 122, 0.08)
Border-radius: 20px
Padding: 28px 24px
Shadow: effect/card

Layout (Auto Layout):
  Direction: Vertical
  Gap: 12px

Contents:
  1. Icon (52×52px, SVG)
  2. Title (text/h3, 1.15rem)
  3. Description (text/caption, line-height 1.6)

Hover State:
  - translateY(-6px)
  - Shadow: effect/card-hover
  - Border: color/light-accent
  - Icon: scale(1.1)
```

---

### 4. Badge Cards

**Component**: `card/badge`

```
Dimensions: Flexible (min 240px)
Background: color/white
Border: 1px solid rgba(34, 78, 122, 0.1)
Border-radius: 20px
Padding: 28px
Shadow: effect/soft

Contents:
  1. Title (text/h3, 1.25rem, color/secondary)
  2. Description (text/body-small)

Hover State:
  - translateY(-4px)
  - Shadow: effect/card
  - Border: color/light-accent
```

---

### 5. Facility Chips

**Component**: `chip/facility`

```
Background: color/white
Border: 1px solid rgba(34, 78, 122, 0.08)
Border-radius: 999px (pill)
Padding: 10px 18px
Shadow: effect/soft

Layout (Auto Layout):
  Direction: Horizontal
  Gap: 8px
  Align: Center

Contents:
  1. Icon (24×24px, SVG)
  2. Label (text/body-small, 600 weight)

Hover State:
  - translateY(-2px)
  - Shadow: effect/card
  - Border: color/accent
```

**Examples**: SNF, ALF, Memory Care, Group Homes, Hospice

---

### 6. Form Inputs

**Component Set**: `input` with variants

#### Text Input
```
Width: Fill container (min 280px)
Height: 52px
Background: color/white
Border: 2px solid rgba(34, 78, 122, 0.15)
Border-radius: 12px
Padding: 14px 16px
Font: text/body-small

States:
  Default: border rgba(34, 78, 122, 0.15)
  Hover: border rgba(34, 78, 122, 0.25)
  Focus: border color/light-accent, 0 0 0 3px rgba(136, 192, 230, 0.15)
  Error: border #E74C3C, helper text red
```

#### Select Dropdown
Same as text input, add chevron icon (right-aligned, 16px)

#### Textarea
Same as text input, min-height: 120px (4 rows)

#### Label
```
Font: text/body-small, 600 weight
Color: color/secondary
Margin-bottom: 8px
```

---

### 7. Navigation Header

**Component**: `header/desktop` and `header/mobile`

#### Desktop Header
```
Width: 100%
Height: 80px
Background: rgba(255, 255, 255, 0.98)
Backdrop-blur: 10px
Shadow (default): 0 1px 0 rgba(0,0,0,0.05)
Shadow (scrolled): effect/header-sticky
Position: Sticky (top: 0, z-index: 900)

Layout (Auto Layout):
  Direction: Horizontal
  Justify: Space Between
  Padding: 0 120px
  Align: Center

Contents:
  1. Logo (height: 40px, width: auto)
  2. Nav Links (gap: 24px)
     - Font: text/body-small, 500 weight
     - Color: color/dark
     - Hover: color/secondary
  3. CTA Button (button/primary, "Start Service")
```

#### Mobile Header
```
Same height and background
Padding: 0 16px
Contents:
  1. Logo (height: 36px)
  2. Hamburger Toggle (24×18px, 3 bars)

Mobile Menu (Drawer):
  - Slides from right
  - Full-height overlay
  - Background: color/white
  - Padding: 100px 32px
  - Links stacked vertically (gap: 24px)
```

**Breakpoint**: Switch at **960px**

---

### 8. Modal

**Component**: `modal/onboarding`

```
Width: 600px (max 90vw on mobile)
Background: color/white
Border-radius: 28px
Padding: 40px
Shadow: effect/modal

Layout (Auto Layout):
  Direction: Vertical
  Gap: 20px

Contents:
  1. Close Button (top-right, 32px × 32px, × symbol)
  2. Eyebrow (text/eyebrow, "Start Service")
  3. Heading (text/h2-mobile, "Share onboarding details")
  4. Helper Text (text/body-small, opacity 80%)
  5. Form Fields (nested input components)
  6. Submit Button (button/primary, full-width)

Backdrop:
  - Background: rgba(30, 70, 55, 0.4)
  - Backdrop-blur: 8px

Animation:
  - Entry: scale(0.95) → scale(1), opacity 0 → 1
  - Duration: 300ms, cubic-bezier(0.4, 0, 0.2, 1)
```

---

### 9. Footer

**Component**: `footer/desktop` and `footer/mobile`

```
Background: color/primary (#1E4637)
Text: color/white
Padding: 64px 0 24px

Layout (Auto Layout, Grid):
  4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
  Gap: 32px

Contents:
  Column 1: Logo + Mission statement
  Column 2: Quick Links (Services, Service Areas, eMAR)
  Column 3: Facility Onboarding (Start Service, Contact)
  Column 4: Address + Phone (use <address> semantics)

Footer Legal:
  - Text: text/caption
  - Centered
  - Margin-top: 32px
  - "© 2025 Idaho Pharmacy, LLC. All rights reserved."
```

---

### 10. Map Module

**Component**: `module/idaho-map`

```
Background: color/white
Border-radius: 24px
Padding: 32px
Shadow: effect/card

Contents:
  1. Idaho SVG outline (responsive, maintain aspect ratio)
  2. Pin Components (absolute position, data-driven)
  3. Tooltip (bottom overlay, animated fade)

Pin Component:
  - Icon: 36×36px map pin SVG
  - Position: Constraints (Top %, Left %)
  - Animation: pulsePin (scale 1 → 1.1, 3s loop)
  - Hover: tooltip appears with region name

Tooltip:
  - Background: rgba(30, 70, 55, 0.9)
  - Text: color/white, text/body-small
  - Padding: 10px 16px
  - Border-radius: 12px
  - Position: Absolute bottom 16px, left 16px, right 16px
```

**Pin Coordinates**:
- Boise & Treasure Valley: `left: 55%, top: 42%`
- Rural & frontier Idaho: `left: 30%, top: 62%`

---

## 🎭 Effects & Shadows

Create these effect styles in Figma (Format: **effect/name**):

```
effect/card
  Type: Drop Shadow
  X: 0, Y: 20px, Blur: 60px
  Color: rgba(30, 70, 55, 0.12)

effect/card-hover
  Type: Drop Shadow
  X: 0, Y: 30px, Blur: 60px
  Color: rgba(30, 70, 55, 0.18)

effect/soft
  Type: Drop Shadow
  X: 0, Y: 10px, Blur: 30px
  Color: rgba(30, 70, 55, 0.08)

effect/header-sticky
  Type: Drop Shadow
  X: 0, Y: 8px, Blur: 32px
  Color: rgba(30, 70, 55, 0.12)

effect/modal
  Type: Drop Shadow
  X: 0, Y: 40px, Blur: 80px
  Color: rgba(30, 70, 55, 0.2)
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Desktop | 1440px+ | Default design, 12-col grid |
| Large | 1200px | Content scales down slightly |
| Tablet | 1024px | 8-col grid, hero stacks |
| Small Tablet | 768px | Cards to 2 columns |
| Phablet | 600px | Cards to 1 column |
| Mobile | 375px | Single column, full-width CTAs |

### Key Responsive Changes
- **Hero**: Image below text at <1024px
- **Service Cards**: 3 col → 2 col (960px) → 1 col (600px)
- **Navigation**: Hamburger menu at ≤960px
- **Footer**: 4 col → 2 col (768px) → 1 col (600px)
- **Buttons**: Stack vertically at <600px

---

## 📄 Page Sections

Build these sections in order on your desktop frame:

### 1. Header (Sticky)
- Height: **80px**
- Components: Logo, Navigation, CTA Button
- Sticky behavior: Background blur + shadow on scroll

---

### 2. Hero Section
**Height**: ~840px (desktop), flexible (mobile)

```
Layout: Two-column grid (1:1 ratio at >1024px)

Left Column (Content):
  - Eyebrow: "Idaho's Trusted Long-Term Care Pharmacy Partner"
  - H1: "Your Idaho Long-Term Care Pharmacy Partner"
  - Lead text (text/body-large): "Independent. Local. Dedicated to LTC excellence across Idaho."
  - CTA Buttons: 
    * "Start Service" (button/primary)
    * "Facility Onboarding" (button/ghost)
  - Bullet List (checkmarks/bullets):
    * eMAR + EHR integrations (PointClickCare, QuickMAR, Yardi)
    * Dedicated onboarding specialists
    * Daily route coverage across Boise, Treasure Valley, rural Idaho

Right Column (Visual):
  - Hero image: Pharmacist/courier (hero-courier.webp)
  - Border-radius: 24px
  - Shadow: effect/card
  - Animation: floatCard (translateY ±12px, 6s loop)
  - Testimonial card (absolute position, bottom-left):
    * Background: color/white
    * Padding: 16px 20px
    * Border-radius: 16px
    * Shadow: effect/soft
    * Quote: "Idaho Pharmacy keeps our Memory Care residents safe..."
    * Attribution: "Director of Nursing, Boise"

Background:
  - gradient/hero-sky (135° linear)
  - gradient/hero-radial (overlay)
  - Idaho mountains SVG (absolute bottom, opacity 60%)
```

**Responsive**: Stack vertically at <1024px, image below text.

---

### 3. About / Intro Section
**Padding**: 120px (top/bottom)

```
Layout: Two-column grid (1.2:1 ratio)

Left Column:
  - Eyebrow: "About Idaho Pharmacy"
  - H2: "Locally owned Idaho LTC pharmacy"
  - Paragraph: Full intro text (see content)
  - Facility Chips Row:
    * chip/facility × 5 (SNF, ALF, Memory Care, Group Homes, Hospice)
    * Gap: 12px, wrap

Right Column:
  - Idaho Map (module/idaho-map)
  - Background: color/white
  - Border-radius: 24px
  - Shadow: effect/card
  - Hover: lift 4px, shadow/card-hover
```

**Responsive**: Stack at <1024px.

---

### 4. Services Section ("Why Idaho LTC Facilities Choose Us")
**Padding**: 120px (top/bottom)  
**Background**: color/secondary (#224E7A)  
**Text Color**: color/white

```
Content:
  - Eyebrow: "Why Idaho LTC facilities choose us"
  - H2: "Service-first pharmacy partnership"
  - Card Grid: 7 cards (card/service)

Grid Layout:
  - Desktop: 3 columns (320px each)
  - Tablet: 2 columns
  - Mobile: 1 column
  - Gap: 24px

Service Cards (7 total):
  1. After-hours pharmacist support (icon-after-hours.svg)
  2. Daily delivery routes (icon-daily-delivery.svg)
  3. Advanced medication packaging (icon-packaging.svg)
  4. eMAR/EHR integration (icon-emar.svg)
  5. Consultant pharmacist services (icon-consultant.svg)
  6. STAT medications (icon-stat.svg)
  7. Onboarding specialists (icon-onboarding.svg)
```

**Animation**: Cards fade in with stagger (0.1s delay each) on scroll.

---

### 5. Serving Idaho Section
**Padding**: 120px (top/bottom)  
**Background**: gradient/serving (180° vertical)

```
Layout: Two-column grid (1:1)

Left Column (Map):
  - module/idaho-map
  - Interactive pins with tooltips
  - Pin 1: Boise & Treasure Valley (55%, 42%)
  - Pin 2: Rural & frontier Idaho (30%, 62%)

Right Column (Content):
  - Eyebrow: "Serving Idaho"
  - H2: "Urban to frontier coverage"
  - Paragraph: Logistics details
  - Badge Cards (2):
    * card/badge - "Boise & Treasure Valley"
    * card/badge - "Rural & frontier Idaho communities"
  - Gap: 16px
```

**Responsive**: Stack at <1024px.

---

### 6. Experts Section
**Padding**: 120px (top/bottom)

```
Layout: Two-column grid (1:1.2)

Left Column (Photo):
  - Team photo (experts-team.webp)
  - Border-radius: 32px
  - Shadow: effect/card

Right Column (Content):
  - Eyebrow: "Your LTC pharmacy experts"
  - H2: "LTC specialists rooted in Idaho"
  - Paragraph: Board-certified consultants, LTC technicians...
  - Expert Cards Grid (2×2):
    * card/expert × 4
    * Team expertise (icon-team.svg)
    * Certifications (icon-certifications.svg)
    * LTC regulatory training (icon-regulatory.svg)
    * Resident-focused care (icon-resident.svg)
  - CTA Buttons:
    * "Start Service" (button/secondary)
    * "Contact Us" (button/ghost)
```

**Responsive**: Stack at <1024px, photo on top.

---

### 7. Contact Section
**Padding**: 120px (top/bottom)  
**Background**: color/white

```
Layout: Two-column grid (1:1.2)

Left Column (Info):
  - Eyebrow: "Facility onboarding"
  - H2: "Talk with an onboarding specialist"
  - Paragraph: Share details...
  - Contact Info (Definition List):
    * Phone: (208) 555-1234
    * Email: onboarding@idahopharmacy.com
    * Address: 1200 Evergreen Ln, Boise, ID 83702

Right Column (Form):
  - Form container (background: white, shadow: effect/card)
  - Fields:
    * Contact name (input/text)
    * Facility name (input/text)
    * Email (input/email)
    * Phone (input/tel)
    * Facility type (input/select)
    * Message (input/textarea, 4 rows)
  - Submit Button (button/primary)
  - Helper text: "By submitting, you agree..."
```

**Responsive**: Stack at <1024px.

---

### 8. CTA Banner
**Padding**: 80px (top/bottom)  
**Background**: color/primary (#1E4637)  
**Text**: color/white, centered

```
Contents:
  - H2: "Ready to Partner with a Dedicated Idaho LTC Pharmacy?"
  - Paragraph: "Tap Start Service for onboarding or reach out..."
  - Buttons (centered, horizontal):
    * "Start Service" (button/light)
    * "Contact Us" (button/ghost-light)
  - Gap: 16px
```

**Optional**: Add subtle diagonal texture overlay (opacity 5%)

---

### 9. Footer
**Padding**: 64px 0 24px  
**Background**: color/primary  
**Text**: color/white

```
Layout: 4-column grid (see footer component above)

Columns:
  1. Logo + "Idaho's trusted long-term care pharmacy partner."
  2. Quick Links (Services, Service Areas, eMAR Integration)
  3. Facility Onboarding (Start Service button, Contact)
  4. Visit Us (Address, phone)

Legal Bar:
  - "© 2025 Idaho Pharmacy, LLC. All rights reserved."
  - text/caption, centered
  - Margin-top: 32px
```

---

## 🎬 Micro-Interactions & Prototyping

### Scroll Animations
Use **Intersection Observer** concept (document in design, implement in code):

1. **Fade In Up**: Sections, cards fade in from 30px below with opacity 0→1
   - Duration: 600ms
   - Easing: cubic-bezier(0.4, 0, 0.2, 1)
   - Threshold: 10% visible

2. **Stagger Effect**: Cards in grids animate with 100ms delay between each
   - Service cards: 7 items, 0.1s stagger
   - Expert cards: 4 items, 0.1s stagger

3. **Float Animation**: Hero image and map module subtly float
   - translateY: 0 → -12px → 0
   - Duration: 6s loop
   - Easing: ease-in-out

4. **Pulse Animation**: Map pins pulse scale 1 → 1.1 → 1
   - Duration: 3s loop
   - Easing: ease-in-out

### Button Interactions
Prototype button hover states with **Smart Animate**:
- Hover: translateY(-2px), shadow increase
- Duration: 200ms, ease-out
- Focus: 3px outline, color/light-accent

### Card Hovers
All cards (service, expert, badge, chip):
- Hover: translateY up, shadow increase, border color change
- Duration: 400ms, cubic-bezier(0.4, 0, 0.2, 1)

### Header Scroll
Create two header variants:
- **Default**: Subtle shadow, normal padding
- **Scrolled**: Enhanced shadow, slight background opacity change
- Trigger: After 10px scroll

### Modal Animation
- **Entry**: Scale 0.95 → 1, opacity 0 → 1, backdrop blur fade in
- **Exit**: Reverse animation
- Duration: 300ms, ease-out

### Smooth Scroll
All anchor links (`#services`, `#contact`, etc.) should trigger smooth scroll behavior (note for dev: `scroll-behavior: smooth`)

---

## ♿ Accessibility Annotations

Document these in Figma annotations:

### Color Contrast
- Primary on white: **7.4:1** ✓ AAA
- Secondary on white: **5.4:1** ✓ AA
- Accent on white: **2.6:1** (use only on large text/icons ≥24px)
- Body text on light: **4.8:1** ✓ AA

### Focus States
- All interactive elements: 3px outline, color/light-accent, 2px offset
- Visible on keyboard navigation
- Skip-link for keyboard users (hidden until focused)

### Semantic Structure
- Proper heading hierarchy (H1 → H2 → H3, no skipping)
- Landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Form labels explicitly bound to inputs
- Alt text for all images (descriptive, contextual to Idaho/LTC)

### ARIA Labels
- Buttons: Include `aria-label` for icon-only buttons
- Map pins: `aria-label="Boise and Treasure Valley coverage"`
- Modal: `aria-labelledby`, `aria-describedby`
- Live regions: Form status messages with `aria-live="polite"`

### Keyboard Navigation
- Tab order follows visual flow
- Modal traps focus (can't tab outside)
- ESC closes modal and mobile menu
- Enter/Space activates buttons

---

## 📦 Asset Export Settings

### Images
- **Hero/Team Photos**: Export as WebP @1x and @2x, PNG fallback
  - Quality: 85 (WebP), 90 (PNG)
  - Dimensions: Desktop @1x = source, @2x = 2× source
  
### Icons
- **SVG Icons**: Export at 1x, optimize with SVGOMG
  - Artboard size: 24×24px for UI icons, 56×56px for service/expert icons
  - Stroke width: 1.5px (UI), 2px (large icons)
  - Remove fills, keep strokes

### Logo
- **SVG**: Single color (color/primary), scalable
- Export sizes: 164px (desktop), 120px (mobile)

### Illustrations
- **Idaho Map**: SVG, single color (color/secondary), opacity 20%
- **Mountains**: SVG, gradient fill or solid color/accent

### Compression
- WebP: Use Squoosh or similar, quality 80-85
- PNG: TinyPNG or ImageOptim
- SVG: SVGO with default settings

### File Naming (Match Code Assets)
```
hero-courier.webp
hero-courier.png
experts-team.webp
experts-team.png
icon-after-hours.svg
icon-alf.svg
icon-certifications.svg
icon-consultant.svg
icon-daily-delivery.svg
icon-emar.svg
icon-group-home.svg
icon-hospice.svg
icon-memory.svg
icon-onboarding.svg
icon-packaging.svg
icon-regulatory.svg
icon-resident.svg
icon-snf.svg
icon-stat.svg
icon-team.svg
idaho-map.svg
logo.svg
map-pin.svg
hero-mountains.svg
```

---

## 🔗 Developer Handoff Notes

### CSS Variable Mapping
All Figma color/text/effect styles map to CSS custom properties:
- `color/primary` → `--color-primary`
- `text/display` → Applied to `h1` elements
- `effect/card` → `--shadow-card`

### Component Mapping
- Figma components → HTML semantic elements + CSS classes
- `button/primary` → `<button class="btn btn--primary">`
- `card/service` → `<article class="service-card">`

### Data Attributes
- CMS editable content: `data-cms-key="hero-headline"`
- Integration points: `data-integration="pointclickcare"`
- Modal triggers: `data-open-modal="onboarding"`

### Animation Implementation
- CSS: `@keyframes` for float, pulse, fadeInUp
- JavaScript: Intersection Observer for scroll animations
- Prefer `transform` and `opacity` for performance (GPU-accelerated)

### Responsive Approach
- Mobile-first CSS (base styles → tablet → desktop)
- Use CSS Grid and Flexbox for layouts
- Media queries match Figma breakpoints exactly

---

## 📋 Design Checklist

Before handoff, ensure:

- ✅ All color styles created and applied consistently
- ✅ All text styles created with responsive overrides
- ✅ Component library complete with all variants
- ✅ Desktop, tablet, and mobile frames built
- ✅ Prototype connections for key interactions
- ✅ Accessibility annotations added
- ✅ Assets organized and named per convention
- ✅ Export settings configured
- ✅ Design aligned with Ampul (animations, hero) and Clenia (cards, spacing)
- ✅ Content matches provided copy exactly

---

## 🎨 Style Inspiration Summary

### From Ampul (ampul.webflow.io):
- ✅ Clean, minimal medical aesthetic
- ✅ Generous white space and breathing room
- ✅ Soft gradient backgrounds (hero section)
- ✅ Smooth floating animations on hero imagery
- ✅ Large, readable typography with hierarchy
- ✅ Sticky header with backdrop blur on scroll
- ✅ Rounded corners (20-28px) on cards and buttons
- ✅ Subtle micro-interactions (hover lifts, scale effects)

### From Clenia (clenia.webflow.io):
- ✅ Card-based layout with consistent grid
- ✅ Icon + Title + Description card pattern
- ✅ 24px-32px spacing between grid items
- ✅ Soft shadows (multi-layer, subtle)
- ✅ Accent color bar on card hover (top border animation)
- ✅ Badge/chip components for categorization
- ✅ Two-column hero layout (text left, image right)
- ✅ Testimonial cards overlayed on imagery

---

## 🚀 Next Steps

1. **Build Component Library** (2-3 hours)
   - Create all button, card, input, and module components
   - Add variants and interactive states

2. **Design Desktop Frame** (4-5 hours)
   - Layout all 9 sections per specification
   - Apply components and content
   - Add background gradients and imagery

3. **Create Responsive Variants** (2-3 hours)
   - Duplicate to tablet and mobile frames
   - Adjust layouts per responsive notes
   - Update text styles to mobile overrides

4. **Add Prototyping** (1-2 hours)
   - Connect button hover states
   - Link modal open/close flows
   - Demonstrate scroll animations (notes/overlays)

5. **Export Assets** (1 hour)
   - Export all images (WebP + PNG)
   - Export all icons (SVG)
   - Organize into `/assets/images` structure

6. **Developer Handoff** (30 min)
   - Share Figma link with edit access
   - Provide this spec document
   - Walk through component usage

---

**Design System Version**: 1.0  
**Last Updated**: December 2025  
**Designer**: [Your Name]  
**Developer Handoff**: Ready for HTML/CSS implementation

---


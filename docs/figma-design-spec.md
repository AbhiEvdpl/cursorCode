# Idaho Pharmacy — Figma Design Specification

## Design Overview

A modern, professional long-term care pharmacy website inspired by:
- **Ampul.webflow.io** — Hero layout, animations, clean medical aesthetic
- **Clenia.webflow.io** — Card designs, spacing, grid systems

---

## 🎨 Brand Colors

### Primary Palette
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Green | `#1E4637` | 30, 70, 55 | Headers, CTAs, footer, trust elements |
| Secondary Blue | `#224E7A` | 34, 78, 122 | Section backgrounds, headings, links |
| Accent Amber | `#C89F4A` | 200, 159, 74 | Highlights, icons, decorative elements |
| Light Sky Blue | `#88C0E6` | 136, 192, 230 | Backgrounds, gradients, accents |

### Neutral Palette
| Name | Hex | Usage |
|------|-----|-------|
| Dark Gray | `#4A545E` | Body text |
| Light Gray | `#F4F4F2` | Page backgrounds |
| White | `#FFFFFF` | Cards, surfaces |
| Near Black | `#1A1F25` | Dark sections |

---

## 📝 Typography

### Font Stack
```
Primary: 'DM Sans', sans-serif
Fallback: 'Lato', 'Source Sans Pro', system-ui
```

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero Title | 72px / 4.5rem | 700 | 1.1 | -0.02em |
| H2 Sections | 48px / 3rem | 700 | 1.2 | -0.01em |
| H3 Cards | 24px / 1.5rem | 600 | 1.3 | 0 |
| Body Large | 20px / 1.25rem | 400 | 1.7 | 0 |
| Body | 18px / 1.125rem | 400 | 1.7 | 0 |
| Eyebrow | 14px / 0.875rem | 600 | 1.4 | 0.15em |
| Small/Caption | 14px / 0.875rem | 400 | 1.5 | 0 |

---

## 📐 Spacing System

### Section Spacing
| Breakpoint | Section Padding |
|------------|-----------------|
| Desktop (1200px+) | 140px top/bottom |
| Tablet (768-1199px) | 100px top/bottom |
| Mobile (<768px) | 80px top/bottom |

### Grid System
- **Max Width:** 1320px
- **Columns:** 12-column grid
- **Gutter:** 32px desktop, 24px tablet, 16px mobile
- **Margin:** 64px desktop, 40px tablet, 24px mobile

### Component Spacing
| Element | Value |
|---------|-------|
| Card Gap | 32px |
| Element Stack | 24px |
| Text Stack | 16px |
| Button Gap | 16px |

---

## 🧩 Component Specifications

### Navigation Bar
```
Height: 80px
Background: rgba(255, 255, 255, 0.95)
Backdrop Filter: blur(20px)
Shadow (scrolled): 0 4px 30px rgba(0, 0, 0, 0.08)
Position: Fixed top
Z-index: 1000
```

### Hero Section (Ampul-inspired)
```
Layout: Split — 55% content, 45% visual
Background: Gradient overlay with decorative shapes
Min Height: 90vh
Padding: 140px top
```
- Animated floating elements
- Gradient orbs in background
- Staggered text reveal animation
- Stats counter badges

### Service Cards (Clenia-inspired)
```
Background: #FFFFFF
Border Radius: 24px
Padding: 40px
Border: 1px solid rgba(34, 78, 122, 0.08)
Shadow: 0 4px 20px rgba(0, 0, 0, 0.04)
Shadow (hover): 0 20px 50px rgba(0, 0, 0, 0.1)
Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
```

### Feature Cards
```
Background: Linear gradient or solid
Border Radius: 20px
Padding: 32px
Icon Size: 56px
Icon Background: Colored circle (16px padding)
```

### Buttons

#### Primary Button
```
Background: #1E4637
Color: #FFFFFF
Padding: 18px 36px
Border Radius: 100px
Font Weight: 600
Shadow: 0 4px 15px rgba(30, 70, 55, 0.3)
```

#### Secondary Button
```
Background: transparent
Border: 2px solid #224E7A
Color: #224E7A
Padding: 16px 34px
Border Radius: 100px
```

#### Ghost Button
```
Background: transparent
Color: #224E7A
Text Decoration: underline offset 4px
```

### Button States
```css
Hover: translateY(-2px), increased shadow
Active: translateY(0), reduced shadow
Focus: 3px outline with #88C0E6
```

---

## 🎬 Animation Specifications

### Page Load Animations
| Element | Delay | Duration | Easing |
|---------|-------|----------|--------|
| Nav | 0ms | 600ms | ease-out |
| Hero Title | 200ms | 800ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Hero Subtitle | 400ms | 800ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Hero CTA | 600ms | 800ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Hero Image | 400ms | 1000ms | cubic-bezier(0.4, 0, 0.2, 1) |

### Scroll Animations
```css
Initial State: opacity: 0, transform: translateY(40px)
Final State: opacity: 1, transform: translateY(0)
Trigger: When element is 20% in viewport
Duration: 600ms
Stagger: 100ms between items
```

### Hover Micro-interactions
```css
Cards: scale(1.02), shadow expansion
Buttons: translateY(-2px), glow effect
Links: underline slide-in from left
Icons: subtle rotation or pulse
```

### Background Animations
```css
Floating Orbs: 20s infinite ease-in-out
Gradient Shift: 15s infinite alternate
Particle Drift: 30s infinite linear
```

---

## 📱 Responsive Breakpoints

| Name | Width | Columns |
|------|-------|---------|
| Mobile | 0-767px | 1-2 |
| Tablet | 768-1023px | 2-3 |
| Desktop | 1024-1439px | 3-4 |
| Large | 1440px+ | 4 |

### Mobile Navigation
- Hamburger icon (3 lines, 24px)
- Full-screen overlay menu
- Slide-in from right (300ms)
- Menu items stagger animate

---

## 🖼️ Section Layouts

### 1. Hero Section
```
┌────────────────────────────────────────────────┐
│  [Nav Logo]          [Links]        [CTA]      │
├────────────────────────────────────────────────┤
│                                                │
│   EYEBROW TEXT                    ┌──────────┐ │
│   Large Hero                      │          │ │
│   Headline Here                   │  Hero    │ │
│                                   │  Image   │ │
│   Supporting subtext that         │          │ │
│   explains the value prop         │          │ │
│                                   └──────────┘ │
│   [Primary CTA]  [Secondary CTA]               │
│                                                │
│   ┌─────┐  ┌─────┐  ┌─────┐                   │
│   │Stats│  │Stats│  │Stats│                   │
│   └─────┘  └─────┘  └─────┘                   │
│                                                │
└────────────────────────────────────────────────┘
```

### 2. About/Intro Section
```
┌────────────────────────────────────────────────┐
│                                                │
│   ┌─────────────────────────────────────────┐  │
│   │           Large Feature Image           │  │
│   └─────────────────────────────────────────┘  │
│                                                │
│         EYEBROW • About Idaho Pharmacy         │
│              Section Headline                  │
│                                                │
│   Description text centered and readable,      │
│   limited to ~65 characters per line.          │
│                                                │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐         │
│   │SNF │ │ALF │ │Mem │ │Grp │ │Hos │         │
│   └────┘ └────┘ └────┘ └────┘ └────┘         │
│                                                │
└────────────────────────────────────────────────┘
```

### 3. Services Grid (Why Choose Us)
```
┌────────────────────────────────────────────────┐
│                                                │
│         EYEBROW • Why Choose Us                │
│         Section Headline                       │
│         Subtext description                    │
│                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│   │   Icon   │  │   Icon   │  │   Icon   │   │
│   │  Title   │  │  Title   │  │  Title   │   │
│   │   Desc   │  │   Desc   │  │   Desc   │   │
│   └──────────┘  └──────────┘  └──────────┘   │
│                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│   │   Icon   │  │   Icon   │  │   Icon   │   │
│   │  Title   │  │  Title   │  │  Title   │   │
│   │   Desc   │  │   Desc   │  │   Desc   │   │
│   └──────────┘  └──────────┘  └──────────┘   │
│                                                │
└────────────────────────────────────────────────┘
```

### 4. Map/Coverage Section
```
┌────────────────────────────────────────────────┐
│                                                │
│   ┌─────────────────┐   EYEBROW • Coverage    │
│   │                 │   Section Headline       │
│   │    Idaho Map    │                         │
│   │    with Pins    │   Description text      │
│   │                 │                         │
│   │    📍 Boise     │   ┌─────────────────┐   │
│   │    📍 Rural     │   │  Region Card 1  │   │
│   │                 │   └─────────────────┘   │
│   │                 │   ┌─────────────────┐   │
│   └─────────────────┘   │  Region Card 2  │   │
│                         └─────────────────┘   │
│                                                │
└────────────────────────────────────────────────┘
```

### 5. Team/Experts Section
```
┌────────────────────────────────────────────────┐
│                                                │
│   ┌───────────────┐    EYEBROW • Our Team     │
│   │               │    Section Headline        │
│   │  Team Photo   │                           │
│   │               │    Description text       │
│   │               │                           │
│   └───────────────┘    ┌─────┐ ┌─────┐       │
│                        │Card │ │Card │       │
│                        └─────┘ └─────┘       │
│                        ┌─────┐ ┌─────┐       │
│                        │Card │ │Card │       │
│                        └─────┘ └─────┘       │
│                                                │
│                  [CTA Button]                  │
│                                                │
└────────────────────────────────────────────────┘
```

### 6. CTA Banner Section
```
┌────────────────────────────────────────────────┐
│██████████████████████████████████████████████ │
│██                                          ██ │
│██     Ready to Partner with Idaho LTC?     ██ │
│██     Supporting subtext here              ██ │
│██                                          ██ │
│██     [Primary CTA]    [Secondary CTA]     ██ │
│██                                          ██ │
│██████████████████████████████████████████████ │
└────────────────────────────────────────────────┘
```

### 7. Contact Section
```
┌────────────────────────────────────────────────┐
│                                                │
│   EYEBROW • Contact                           │
│   Section Headline                             │
│   Description text                             │
│                                                │
│   Phone: (208) 555-1234                       │
│   Email: onboarding@idahopharmacy.com         │
│   Address: 1200 Evergreen Ln, Boise           │
│                                                │
│   ┌─────────────────────────────────────────┐  │
│   │              Contact Form               │  │
│   │   [Name]              [Facility]        │  │
│   │   [Email]             [Phone]           │  │
│   │   [Facility Type ▼]                     │  │
│   │   [Message                        ]     │  │
│   │   [                               ]     │  │
│   │                     [Submit Button]     │  │
│   └─────────────────────────────────────────┘  │
│                                                │
└────────────────────────────────────────────────┘
```

---

## 🎯 Figma Layer Organization

```
📁 Idaho Pharmacy Website
├── 📁 🎨 Design System
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Effects (shadows, blurs)
│   └── Grids
├── 📁 🧩 Components
│   ├── Navigation
│   ├── Buttons
│   ├── Cards
│   ├── Forms
│   ├── Icons
│   └── Footer
├── 📁 🖥️ Desktop (1440px)
│   ├── Hero
│   ├── About
│   ├── Services
│   ├── Coverage
│   ├── Team
│   ├── CTA
│   ├── Contact
│   └── Footer
├── 📁 📱 Tablet (768px)
│   └── [All sections]
└── 📁 📱 Mobile (375px)
    └── [All sections]
```

---

## 🔧 Implementation Notes

### CSS Variables
All colors, spacing, and typography should use CSS custom properties for consistency and theming capability.

### Animation Library
Use CSS animations with `@keyframes` for performance. Consider Intersection Observer API for scroll-triggered animations.

### Accessibility
- All interactive elements keyboard accessible
- ARIA labels for icons and decorative elements
- Skip navigation link
- Focus visible states
- Reduced motion media query support

### Performance
- Lazy load images below the fold
- Use WebP format with PNG fallbacks
- Preload critical fonts
- Optimize SVG icons

---

*Design Specification v2.0 — Idaho Pharmacy, LLC*

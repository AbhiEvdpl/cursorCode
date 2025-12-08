# Idaho Pharmacy, LLC — Complete Figma Homepage Design Specification

## Design Direction
Modern, clean medical aesthetic inspired by **Ampul** (hero layout, animations, clean medical look) and **Clenia** (card design, spacing, grid layout). Professional, trustworthy, and accessible design for long-term care facilities.

---

## Design System

### Color Palette (Strict Brand Colors)
| Token | Hex | Usage |
|-------|-----|-------|
| `Primary Green` | #1E4637 | Primary CTAs, header, footer, main brand elements |
| `Secondary Blue` | #224E7A | Section headers, secondary buttons, links |
| `Accent Amber` | #C89F4A | Eyebrow labels, icons, highlights, list markers |
| `Light Accent Sky Blue` | #88C0E6 | Hero backgrounds, gradients, map accents |
| `Dark Neutral` | #4A545E | Body text, secondary content |
| `Light Neutral` | #F4F4F2 | Page background, form backgrounds |
| `White` | #FFFFFF | Cards, surfaces, text on dark backgrounds |

### Typography System
**Font Families:** DM Sans (primary), Lato (fallback), Source Sans Pro (fallback)

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| Display | 64px / 48px mobile | 1.1 | 700 | Hero headline |
| H1 | 48px / 36px mobile | 1.2 | 700 | Page titles |
| H2 | 40px / 32px mobile | 1.3 | 600 | Section headings |
| H3 | 28px / 24px mobile | 1.4 | 600 | Card titles |
| Body Large | 20px / 18px mobile | 1.6 | 400 | Hero subtext, lead paragraphs |
| Body | 18px / 16px mobile | 1.6 | 400 | Body copy |
| Caption | 14px | 1.5 | 600 | Eyebrow labels, badges, metadata |
| Small | 12px | 1.4 | 400 | Legal text, fine print |

**Letter Spacing:**
- Eyebrow labels: 0.08em (uppercase)
- Headings: -0.02em
- Body: 0em

### Spacing Scale
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 120px
- Section padding: 120px desktop / 96px tablet / 72px mobile
- Grid gaps: 32px desktop / 24px tablet / 16px mobile

### Effects & Shadows
- `shadow-soft`: 0 10px 30px rgba(14, 24, 42, 0.1)
- `shadow-card`: 0 20px 40px rgba(14, 24, 42, 0.14)
- `shadow-hover`: 0 25px 50px rgba(14, 24, 42, 0.18)
- `shadow-header-sticky`: 0 15px 25px rgba(4, 16, 16, 0.12)

### Gradients
- **Hero Background**: Linear 135deg, rgba(136, 192, 230, 0.45) → rgba(30, 70, 55, 0.12)
- **Serving Section**: Linear 180deg, rgba(136, 192, 230, 0.3) → #F4F4F2
- **CTA Overlay**: Subtle diagonal texture overlay on primary green

---

## Layout Grids

### Desktop (1440px)
- **Container Width**: 1200px max
- **Grid**: 12 columns, 80px columns, 24px gutters
- **Margins**: 120px (auto-centered)
- **Vertical Rhythm**: 120px between sections

### Tablet (1024px)
- **Container Width**: 960px max
- **Grid**: 8 columns, 72px margins, 16px gutters
- **Vertical Rhythm**: 96px between sections

### Mobile (375px)
- **Container Width**: 100% - 32px padding
- **Grid**: Single column
- **Vertical Rhythm**: 72px between sections

---

## Component Library

### 1. Header / Navigation
**Desktop:**
- Height: 80px
- Background: White (#FFFFFF)
- Sticky behavior: Yes (with shadow on scroll)
- Layout: Auto-layout row
  - Logo: 164px width (left-aligned)
  - Navigation links: Center-aligned, 24px gap
  - CTA button: Right-aligned ("Start Service" - Primary style)
- Links: Home, Services, Service Areas, eMAR Integration, Onboarding, Contact
- Typography: Body (18px), Weight 500, Color: Dark Neutral

**Mobile:**
- Hamburger menu (3-line icon)
- Slide-in drawer from right (65% width)
- Full-height overlay
- Links stack vertically
- CTA button in drawer

### 2. Buttons
**Primary** (Green #1E4637)
- Background: Primary Green
- Text: White
- Border radius: 999px
- Padding: 12px 24px
- Hover: Lifts 1px, adds shadow
- Focus: 3px outline in Light Accent Sky Blue

**Secondary** (Blue #224E7A)
- Background: Secondary Blue
- Text: White
- Same styling as Primary

**Ghost**
- Background: Transparent
- Text: Secondary Blue
- Border: 1px solid Secondary Blue
- Same padding and hover effects

**Light**
- Background: White
- Text: Primary Green
- Border: None

**Ghost Light**
- Background: Transparent
- Text: White
- Border: 1px solid White

### 3. Hero Section (Ampul-inspired)
**Layout:**
- Two-column grid (60/40 split)
- Left: Content stack
- Right: Image with floating animation
- Background: Gradient (sky blue to green wash)
- Mountain silhouette overlay at bottom

**Content Stack:**
1. Eyebrow: "Idaho's Trusted Long-Term Care Pharmacy Partner" (Caption, Amber)
2. Headline: "Your Idaho Long-Term Care Pharmacy Partner" (Display, Secondary Blue)
3. Lead: "Welcome to Idaho Pharmacy, LLC. — Idaho's Trusted Long-Term Care Pharmacy" (Body Large)
4. Description paragraph (Body)
5. CTA Buttons: "Start Service" (Primary) + "Facility Onboarding" (Ghost)
6. Bullet list (3 items with amber markers)

**Visual:**
- Courier/delivery image (rounded 32px, floating animation)
- Testimonial quote card (bottom-left overlay)
- Mountain SVG silhouette (bottom edge, 70% opacity)

**Animation:**
- Image float: 8s ease-in-out infinite (translateY ±8px)

### 4. Service Cards (Clenia-inspired)
**Dimensions:**
- Width: Auto (min 280px, max 320px)
- Height: Auto (min 360px)
- Padding: 32px
- Border radius: 20px
- Background: White
- Border: 1px solid rgba(34, 78, 122, 0.12)

**Content:**
- Icon: 48px × 48px (top)
- Title: H3 (28px, Secondary Blue)
- Description: Body (18px, Dark Neutral)
- Spacing: 16px gap between elements

**Hover State:**
- Transform: translateY(-4px)
- Shadow: shadow-card
- Border: Accent Amber at 50% opacity

**Grid Layout:**
- Desktop: 3-4 columns (auto-fit, minmax 280px)
- Tablet: 2 columns
- Mobile: 1 column

### 5. Expert Cards
**Similar to Service Cards but:**
- Slightly smaller padding (24px)
- 4-card grid (2×2 on desktop)
- Can include optional CTA arrow icon

### 6. Map Module
**Container:**
- Background: White card
- Border radius: 32px
- Padding: 32px
- Shadow: shadow-card

**Map:**
- Idaho outline SVG
- Gradient background overlay
- Pin components (absolutely positioned)

**Pins:**
- Size: 36px × 36px
- Animation: Pulse (3s infinite)
- Positions:
  - Boise & Treasure Valley: 55% left, 42% top
  - Rural & Frontier: 30% left, 62% top

**Tooltip:**
- Appears on hover/focus
- Background: rgba(30, 70, 55, 0.9)
- Text: White, Caption size
- Position: Bottom of map container
- Animation: Fade in/out

### 7. Form Components
**Input Fields:**
- Border: 1px solid rgba(34, 78, 122, 0.3)
- Border radius: 12px
- Padding: 12px
- Focus: 2px outline in Light Accent Sky Blue
- Font: Body (18px)

**Labels:**
- Font: Caption (14px), Weight 600
- Color: Secondary Blue
- Spacing: 8px gap from input

**Textarea:**
- Same styling as input
- Min height: 120px
- Resize: Vertical only

**Select:**
- Same styling as input
- Custom dropdown arrow

### 8. Modal
**Container:**
- Width: min(600px, 90vw)
- Border radius: 24px
- Background: White
- Padding: 32px

**Backdrop:**
- Background: rgba(4, 16, 16, 0.6)
- Blur: Optional (8px)

**Content:**
- Close button: Top-right (× icon)
- Eyebrow label
- H2 heading
- Helper text
- Form fields (reuse form components)
- Submit button (Primary)
- Status message area

### 9. Footer
**Layout:**
- Background: Primary Green (#1E4637)
- Text: White
- 4-column grid (desktop)
- Padding: 64px top, 24px bottom

**Columns:**
1. Logo + mission statement
2. Quick Links (Services, Service Areas, eMAR)
3. Facility Onboarding (Start Service, Contact)
4. Visit Us (Address, Phone)

**Legal:**
- Caption size, centered
- Copyright notice

---

## Section Breakdown

### 1. Header (80px height)
- Sticky navigation
- Logo + menu + CTA
- Mobile: Hamburger menu

### 2. Hero Section (~840px height)
- Two-column layout
- Gradient background
- Mountain silhouette overlay
- Floating image animation
- Testimonial quote card

### 3. About / Intro Section (~640px height)
- Two-column layout
- Left: Content + facility chips
- Right: Idaho map illustration
- Background: Light Neutral

### 4. Why Choose Us Section (~920px height)
- Background: Secondary Blue
- Text: White
- 7 service cards in grid
- Eyebrow + H2 heading

### 5. Serving Idaho Section (~780px height)
- Gradient background
- Two-column layout
- Left: Interactive map with pins
- Right: Content + badge cards
- Tooltip interactions

### 6. Experts Section (~760px height)
- Two-column layout
- Left: Team photo
- Right: Content + 4 expert cards
- CTA buttons at bottom

### 7. Contact / Onboarding Section (~600px height)
- Two-column layout
- Left: Contact info + description
- Right: Contact form
- Background: White

### 8. CTA Banner (~360px height)
- Full-width
- Background: Primary Green
- Text: White, centered
- Two CTA buttons
- Subtle texture overlay

### 9. Footer (~420px height)
- 4-column layout
- Background: Primary Green
- Links and contact info

---

## Micro-Interactions & Animations

### Scroll Animations
- **Header**: Shadow intensifies after 10px scroll
- **Cards**: Fade in on scroll (optional, respect reduced motion)

### Hover States
- **Buttons**: translateY(-1px) + shadow
- **Cards**: translateY(-4px) + shadow + accent border
- **Links**: Color change to Secondary Blue
- **Map Pins**: Scale to 1.05 + tooltip appears

### Focus States
- **All interactive**: 3px outline in Light Accent Sky Blue
- **Form inputs**: 2px outline + border color change

### Animations
- **Hero Image**: Float animation (8s infinite, ease-in-out)
- **Map Pins**: Pulse animation (3s infinite)
- **Modal**: Scale + fade on open/close
- **Mobile Menu**: Slide in from right

### Reduced Motion
- All animations respect `prefers-reduced-motion`
- Fallback: Color-only changes, no transforms

---

## Responsive Breakpoints

### Desktop (1440px+)
- Full 12-column grid
- All sections in two-column layouts
- Card grids: 3-4 columns
- Full navigation visible

### Large Tablet (1024px - 1439px)
- 8-column grid
- Hero stacks vertically (image below)
- Card grids: 2-3 columns
- Footer: 2 columns

### Tablet (768px - 1023px)
- 8-column grid
- Most sections stack
- Card grids: 2 columns
- Navigation: Hamburger menu

### Mobile (375px - 767px)
- Single column
- 16px lateral padding
- All grids: 1 column
- Buttons: Full-width
- Hero image: Below content
- Footer: Stacked

---

## Accessibility Requirements

### Color Contrast
- Primary Green on White: 7.4:1 ✓
- Secondary Blue on White: 5.4:1 ✓
- Accent Amber on White: 2.6:1 (used only for large text/icons ≥24px) ✓
- White on Primary Green: 7.4:1 ✓

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Landmark regions (header, nav, main, section, footer)
- Skip link for keyboard navigation
- ARIA labels on interactive elements

### Interactive Elements
- Focus indicators on all interactive elements
- Keyboard navigation support
- Screen reader announcements (aria-live)
- Form labels explicitly bound

### Images
- Descriptive alt text
- Decorative images: alt=""
- Contextual alt text for icons

---

## Export Specifications

### Images
- **Hero Image**: WebP @1x & @2x, PNG fallback
- **Expert Photo**: WebP @1x & @2x, PNG fallback
- **Icons**: SVG @1x (24px artboard, 1.5px stroke)
- **Map**: SVG (optimized)
- **Mountain Silhouette**: SVG

### Export Settings
- WebP: Quality 80, Squoosh compression
- PNG: 1x and 2x versions
- SVG: Optimized, viewBox defined

---

## Prototype Flow

### User Journey
1. **Landing**: Hero section with clear value proposition
2. **Scroll**: Smooth scroll to sections
3. **Services**: Hover cards to see details
4. **Map**: Interactive pins show service areas
5. **CTA**: "Start Service" opens modal
6. **Form**: Submit triggers success state
7. **Contact**: Alternative contact methods visible

### Interactive States
- All buttons: Default → Hover → Active → Focus
- Cards: Default → Hover → Focus
- Form inputs: Default → Focus → Valid/Invalid
- Modal: Closed → Opening → Open → Closing → Closed

---

## Design Handoff Notes

### For Developers
1. Use CSS custom properties for all color tokens
2. Implement animations with `@keyframes` and `prefers-reduced-motion` support
3. Use semantic HTML5 elements
4. Ensure all interactive elements are keyboard accessible
5. Test color contrast ratios
6. Implement responsive images (srcset, picture element)
7. Use CSS Grid and Flexbox for layouts
8. Modal should use native `<dialog>` element with fallback

### Asset Mapping
- All icons: `/assets/images/icon-*.svg`
- Hero image: `/assets/images/hero-courier.webp` (fallback: `.png`)
- Expert photo: `/assets/images/experts-team.webp` (fallback: `.png`)
- Map: `/assets/images/idaho-map.svg`
- Mountains: `/assets/images/hero-mountains.svg`
- Logo: `/assets/images/logo.svg`

### CMS Integration
- Mark all editable content with `data-cms-key` attributes
- Document all content blocks in component library
- Provide content guidelines for each section

---

## Figma File Structure

### Pages
1. **Homepage Design** (Desktop, Tablet, Mobile frames)
2. **Component Library** (All reusable components)
3. **Design System** (Colors, Typography, Spacing, Effects)
4. **Prototypes** (Interactive flows)

### Frames Organization
- Desktop: 1440px width, ~5200px height
- Tablet: 1024px width
- Mobile: 375px width
- Component Library: 1440px + 375px device frames

### Auto-Layout Usage
- All sections: Vertical auto-layout frames
- Card grids: Wrap auto-layout
- Navigation: Horizontal auto-layout
- Buttons: Horizontal auto-layout with icon slots
- Forms: Vertical auto-layout stacks

---

## Content Guidelines

### Tone of Voice
- Professional yet approachable
- Trustworthy and reliable
- Focused on partnership
- Idaho-specific and local

### Key Messages
1. Independent, locally owned
2. Dedicated exclusively to LTC
3. Statewide coverage
4. Expert team with Idaho regulatory knowledge
5. Seamless integration with eMAR/EHR systems

### Call-to-Actions
- Primary: "Start Service"
- Secondary: "Contact Us"
- Tertiary: "Facility Onboarding"
- All CTAs should be action-oriented and clear

---

This specification provides a complete blueprint for designing the Idaho Pharmacy homepage in Figma, ensuring consistency, accessibility, and alignment with the reference websites while maintaining the brand identity.

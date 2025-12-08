# Idaho Pharmacy — Complete Figma Recreation Guide

This guide provides step-by-step instructions to recreate the Idaho Pharmacy website design in Figma. Follow each section in order to build the complete design system and page layouts.

---

## 📋 Table of Contents

1. [Initial Setup](#1-initial-setup)
2. [Color Styles](#2-color-styles)
3. [Typography Styles](#3-typography-styles)
4. [Effect Styles](#4-effect-styles)
5. [Components](#5-components)
6. [Desktop Frame](#6-desktop-frame)
7. [Tablet Frame](#7-tablet-frame)
8. [Mobile Frame](#8-mobile-frame)
9. [Prototyping](#9-prototyping)
10. [Export Settings](#10-export-settings)

---

## 1. Initial Setup

### Create New File
1. Open Figma → New Design File
2. Rename to "Idaho Pharmacy — Website Design"

### Create Pages
Create these pages in the left sidebar:
- 🎨 Design System
- 🧩 Components
- 🖥️ Desktop (1440px)
- 📱 Tablet (768px)
- 📱 Mobile (375px)
- 📦 Assets

### Import Font
1. DM Sans is available in Figma's font library
2. Go to Text tool → Select "DM Sans"
3. If not available, install from Google Fonts

### Import Icons
1. Go to "📦 Assets" page
2. Import all SVG files from `/assets/images/`
3. Drag and drop or use File → Place Image

---

## 2. Color Styles

Go to "🎨 Design System" page and create these color styles:

### Primary Colors
| Style Name | Hex | Description |
|------------|-----|-------------|
| Primary/Default | #1E4637 | Main brand green |
| Primary/Dark | #163328 | Hover state |
| Primary/Light | #2A5A47 | Light variant |

### Secondary Colors
| Style Name | Hex | Description |
|------------|-----|-------------|
| Secondary/Default | #224E7A | Main brand blue |
| Secondary/Dark | #1A3D5F | Hover state |
| Secondary/Light | #2D6494 | Light variant |

### Accent Colors
| Style Name | Hex | Description |
|------------|-----|-------------|
| Accent/Default | #C89F4A | Amber accent |
| Accent/Light | #D4B06A | Light amber |
| Accent/Muted | #C89F4A @ 15% | Background tint |

### Sky Blue
| Style Name | Hex | Description |
|------------|-----|-------------|
| Sky/Default | #88C0E6 | Sky blue |
| Sky/Light | #A8D4F0 | Light sky |
| Sky/Muted | #88C0E6 @ 15% | Background tint |

### Neutrals
| Style Name | Hex | Description |
|------------|-----|-------------|
| Neutral/Black | #1A1F25 | Headings |
| Neutral/Dark | #4A545E | Body text |
| Neutral/Gray | #6B7280 | Secondary text |
| Neutral/Light | #F4F4F2 | Section backgrounds |
| Neutral/Lighter | #FAFAFA | Page background |
| Neutral/White | #FFFFFF | Cards, surfaces |

### Gradients
Create gradient styles:

**Gradient/Primary**
- Type: Linear, 135°
- Stop 1: #1E4637 @ 0%
- Stop 2: #224E7A @ 100%

**Gradient/Hero**
- Type: Linear, 135°
- Stop 1: #88C0E6 @ 15% opacity, 0%
- Stop 2: #1E4637 @ 8% opacity, 50%
- Stop 3: #C89F4A @ 10% opacity, 100%

**Gradient/Accent**
- Type: Linear, 135°
- Stop 1: #C89F4A @ 0%
- Stop 2: #D4B06A @ 100%

---

## 3. Typography Styles

Create these text styles:

### Display
| Style Name | Font | Size | Weight | Line Height | Letter Spacing |
|------------|------|------|--------|-------------|----------------|
| Display/Hero | DM Sans | 64px | Bold (700) | 70px | -2% |
| Display/Hero-Mobile | DM Sans | 40px | Bold (700) | 48px | -1% |

### Headings
| Style Name | Font | Size | Weight | Line Height | Letter Spacing |
|------------|------|------|--------|-------------|----------------|
| Heading/H2 | DM Sans | 48px | Bold (700) | 58px | -1% |
| Heading/H2-Mobile | DM Sans | 32px | Bold (700) | 40px | -0.5% |
| Heading/H3 | DM Sans | 24px | SemiBold (600) | 32px | 0 |
| Heading/H3-Small | DM Sans | 20px | SemiBold (600) | 28px | 0 |

### Body
| Style Name | Font | Size | Weight | Line Height |
|------------|------|------|--------|-------------|
| Body/Large | DM Sans | 19px | Regular (400) | 34px |
| Body/Default | DM Sans | 18px | Regular (400) | 31px |
| Body/Small | DM Sans | 15px | Regular (400) | 26px |

### UI
| Style Name | Font | Size | Weight | Line Height | Letter Spacing |
|------------|------|------|--------|-------------|----------------|
| UI/Eyebrow | DM Sans | 14px | SemiBold (600) | 20px | 10% |
| UI/Nav Link | DM Sans | 15px | Medium (500) | 20px | 0 |
| UI/Button | DM Sans | 16px | SemiBold (600) | 20px | 0 |
| UI/Button-Large | DM Sans | 17px | SemiBold (600) | 22px | 0 |
| UI/Caption | DM Sans | 13px | Medium (500) | 18px | 0 |
| UI/Label | DM Sans | 14px | SemiBold (600) | 20px | 0 |

---

## 4. Effect Styles

### Shadows
Create these effect styles:

| Style Name | X | Y | Blur | Spread | Color |
|------------|---|---|------|--------|-------|
| Shadow/Small | 0 | 1 | 2 | 0 | #000 @ 5% |
| Shadow/Medium | 0 | 4 | 6 | -1 | #000 @ 10% |
| Shadow/Large | 0 | 10 | 15 | -3 | #000 @ 10% |
| Shadow/XL | 0 | 20 | 25 | -5 | #000 @ 10% |
| Shadow/Card | 0 | 4 | 20 | 0 | #000 @ 6% |
| Shadow/Card-Hover | 0 | 20 | 40 | 0 | #000 @ 12% |

### Blurs
| Style Name | Type | Amount |
|------------|------|--------|
| Blur/Header | Background | 20px |

---

## 5. Components

Go to "🧩 Components" page.

### 5.1 Buttons

#### Primary Button
1. Create frame: Auto layout, Horizontal, Padding 14/28, Gap 10
2. Corner radius: 9999 (full)
3. Fill: Primary/Default
4. Add text "Button" with UI/Button style, color White
5. Add arrow icon (optional), 20x20, stroke White
6. Add Shadow/Medium effect
7. Create variant for Hover state: Fill Primary/Dark, Y offset -2

#### Secondary Button
- Same as Primary but Fill: Secondary/Default

#### Outline Button
1. Same structure as Primary
2. Fill: None
3. Stroke: Secondary/Default, 2px
4. Text color: Secondary/Default
5. Hover: Fill Secondary/Default, text White

#### Light Button
1. Fill: White
2. Text color: Primary/Default
3. Shadow/Medium effect

#### Ghost Light Button
1. Fill: None
2. Stroke: White @ 50%, 2px
3. Text color: White
4. Hover: Fill White @ 10%, stroke White

#### Button Sizes
Create size variants:
- Default: Padding 14/28, Font 16px
- Large: Padding 18/36, Font 17px

### 5.2 Navigation

#### Nav Logo
1. Import logo.svg
2. Set width: 160px, height: auto

#### Nav Link
1. Text with UI/Nav Link style
2. Color: Neutral/Dark
3. Create Hover state: Color Secondary/Default, underline

#### Nav Container (Desktop)
1. Frame: 1320x80, Auto layout Horizontal
2. Justify: Space Between, Align: Center
3. Children: Logo | Nav Links (gap 36) | Primary Button

#### Mobile Nav Toggle
1. Frame: 40x40
2. Three horizontal bars: 24x2px each, gap 5px
3. Color: Neutral/Dark
4. Create "Open" variant with X shape

### 5.3 Cards

#### Service Card
1. Frame: Auto layout Vertical, Padding 36, Gap 24
2. Corner radius: 24
3. Fill: White
4. Stroke: Neutral/Dark @ 8%, 1px
5. Shadow/Card effect
6. Children:
   - Icon container: 64x64, Corner 16, Fill Sky/Muted
   - Title: Heading/H3-Small, color Black
   - Text: Body/Small, color Gray
7. Create Hover state: Y offset -8, Shadow/Card-Hover, top accent border 4px

#### Service Card Featured
- Same as Service Card
- Add gradient background tint
- Add "Popular" badge (top right)

#### Expert Card
1. Frame: Auto layout Horizontal, Padding 24, Gap 16
2. Corner radius: 16
3. Fill: Neutral/Lighter
4. Children:
   - Icon container: 52x52, Corner 12, Fill White, Shadow/Small
   - Content stack (Vertical, gap 6): Title + Text

#### Region Card
1. Frame: Auto layout Vertical, Padding 28, Gap 12
2. Corner radius: 24
3. Fill: White
4. Stroke: Neutral/Dark @ 10%, 1px
5. Shadow/Card effect
6. Header (Horizontal, gap 16): Icon (48x48) + Title
7. Text below

#### Facility Chip
1. Frame: Auto layout Horizontal, Padding 14/24, Gap 12
2. Corner radius: 9999
3. Fill: Neutral/Lighter
4. Stroke: Neutral/Dark @ 10%, 1px
5. Icon container: 36x36, Corner 12, Fill White
6. Text: Body/Small, Medium weight

### 5.4 Form Elements

#### Text Input
1. Frame: Width 100% (fill), Height auto
2. Auto layout Vertical, Gap 8
3. Label: UI/Label style
4. Input field:
   - Padding: 14/18
   - Corner radius: 12
   - Fill: Neutral/Lighter
   - Stroke: None (default), Sky/Default (focus)
   - Placeholder text: Body/Default, color Gray

#### Select Dropdown
- Same as Text Input
- Add chevron-down icon on right

#### Textarea
- Same as Text Input
- Min height: 120px
- Resize vertical

#### Form Status
1. Frame: Padding 12, Corner 12
2. Success: Fill Primary @ 10%, text Primary
3. Error: Fill #DC2626 @ 10%, text #DC2626

### 5.5 Section Components

#### Section Eyebrow
1. Auto layout Horizontal, Gap 8
2. Line: 24x2px, Corner full, Fill Accent
3. Text: UI/Eyebrow style, color Accent, UPPERCASE

#### Hero Stat
1. Auto layout Vertical, Gap 4
2. Number: Display style, color Secondary, Bold
3. Suffix: Same size, color Accent
4. Label: Caption style, color Gray

#### Float Card
1. Frame: Auto layout Horizontal, Padding 16/20, Gap 12
2. Corner radius: 16
3. Fill: White
4. Shadow/XL effect
5. Icon container: 48x48, Corner 12, Fill Sky/Muted
6. Text stack: Title (Caption, Bold, Black) + Desc (Caption, Gray)

#### Map Pin
1. Import map-pin.svg
2. Add pulse animation ring behind (absolute)
3. Pulse: 56x56 circle, Fill Accent @ 30%

### 5.6 Footer

#### Footer Column
1. Auto layout Vertical, Gap 14
2. Heading: UI/Eyebrow, color Accent
3. Links: Body/Small, color White @ 70%

#### Social Link
1. Frame: 44x44, Corner 12
2. Fill: White @ 10%
3. Icon: 20x20, color White
4. Hover: Fill Accent

---

## 6. Desktop Frame (1440px)

Go to "🖥️ Desktop (1440px)" page.

### Frame Setup
1. Create frame: 1440 x 5500 (adjust height as needed)
2. Fill: Neutral/Lighter

### Grid
1. Add layout grid: 12 columns
2. Gutter: 24px
3. Margin: 60px
4. Max width: 1320px (centered)

### 6.1 Header
1. Frame: 1440x80, Fixed position
2. Fill: White @ 90%
3. Effect: Blur/Header
4. Add Nav Container component (centered)

### 6.2 Hero Section
**Container:** 1440 x 900, Fill: Gradient/Hero

**Background Elements:**
- Orb 1: 600x600 ellipse, Fill Sky @ 60%, Blur 80, Top right
- Orb 2: 400x400 ellipse, Fill Accent @ 60%, Blur 80, Bottom left
- Orb 3: 300x300 ellipse, Fill Primary @ 30%, Blur 80, Center
- Dot pattern: 40px grid of 1px circles @ 8% opacity

**Content Grid:** Two columns (55% / 45%)

**Left Column (Content):**
- Eyebrow badge: Padding 8/16, Corner full, Fill Accent/Muted, Stroke Accent @ 30%
- Hero title: Display/Hero style
- Subtitle: Body/Large style
- Button group: Primary + Outline buttons
- Stats row: 3x Hero Stat components

**Right Column (Visual):**
- Hero image: Corner 32, Shadow/2XL
- Float Card 1: Position top-left offset
- Float Card 2: Position bottom-right offset

**Scroll Indicator:** Center bottom, text + animated line

### 6.3 About Section
**Container:** Full width, Padding 120 top/bottom, Fill White

**Grid:** Two columns (1:1)

**Left Column:**
- Eyebrow
- Section title
- Two paragraphs of body text

**Right Column:**
- Map container: Corner 32, Fill Gradient/Hero
- Idaho map SVG centered
- Two pulse dots positioned on map

**Below Grid:**
- "Facilities We Serve" title
- Row of 5 Facility Chips

### 6.4 Services Section
**Container:** Full width, Padding 120, Fill Gradient/Primary

**Background:** Dot pattern overlay @ 5% white

**Header:** Center aligned
- Eyebrow (light variant)
- Section title (light)
- Subtitle (light)

**Card Grid:** 
- 7 Service Cards in responsive grid
- 3 columns on desktop
- Gap: 24px
- Card 4 is Featured variant

### 6.5 Coverage Section
**Container:** Full width, Padding 120
**Background:** Gradient from Lighter to White

**Grid:** Two columns (1:1)

**Left Column (Map):**
- Map container: Corner 32, Fill White, Shadow/XL, Padding 48
- Idaho map centered
- Two Map Pin components positioned
- Tooltip bar at bottom (hidden by default)

**Right Column:**
- Eyebrow + Section title
- Body text
- Two Region Cards stacked

### 6.6 Team Section
**Container:** Full width, Padding 120, Fill White

**Grid:** Two columns (1 : 1.2)

**Left Column:**
- Team photo: Corner 32, Shadow/2XL

**Right Column:**
- Eyebrow + Section title
- Body text
- 2x2 grid of Expert Cards

### 6.7 CTA Banner
**Container:** Full width, Padding 100, Fill Gradient/Primary

**Background Shapes:**
- Circle 1: 400px, White @ 10%, top-right offset
- Circle 2: 300px, Accent @ 10%, bottom-left offset

**Content:** Center aligned, max-width 700
- Title: Heading/H2, White
- Subtitle: Body/Default, White @ 85%
- Button group: Light + Ghost Light buttons

### 6.8 Contact Section
**Container:** Full width, Padding 120, Fill Neutral/Lighter

**Grid:** Two columns (1 : 1.2)

**Left Column:**
- Eyebrow + Section title
- Body text
- 3x Contact Detail cards (stacked)

**Right Column:**
- Form container: Corner 32, Fill White, Shadow/XL, Padding 40
- Form grid: 2 columns for name/facility, email/phone
- Full width: facility type, message
- Submit button (full width)
- Form note text

### 6.9 Footer
**Container:** Full width, Padding 80/32, Fill Primary

**Grid:** 4 columns
- Brand column: Logo + tagline + social links
- Services links
- Company links  
- Contact info

**Bottom bar:** 
- Border top White @ 10%
- Copyright left
- Legal links right

---

## 7. Tablet Frame (768px)

Create frame: 768 x 6000

### Adjustments
- Container padding: 40px
- Grid: 8 columns, 20px gutter
- Nav: Hide desktop nav, show mobile toggle
- Hero: Stack columns vertically
- Cards: 2-column grids
- Section padding: 100px
- Typography: Use mobile variants

---

## 8. Mobile Frame (375px)

Create frame: 375 x 7000

### Adjustments
- Container padding: 24px
- Grid: 4 columns, 16px gutter
- All grids: Single column
- Cards: Full width, stacked
- Section padding: 80px
- Hide: Scroll indicator, float cards
- Typography: Mobile scale
- Footer: 2-column then stacked

---

## 9. Prototyping

### Interactions to Add

#### Header Scroll
- On scroll > 50px: Add Shadow/Large effect

#### Mobile Nav
- Toggle click → Slide nav panel from right (300ms, ease-out)
- Overlay click → Close nav

#### Service Cards
- Hover → Move Y -8px, apply Shadow/Card-Hover

#### Map Pins
- Hover/Focus → Show tooltip, scale pin 1.15x

#### Buttons
- Hover → Move Y -2px, increase shadow

#### Form Inputs
- Focus → Show Sky border + glow

### Smart Animate
Use Smart Animate for smooth transitions between states.

---

## 10. Export Settings

### For Development
- Export frames as PNG @1x, @2x
- Export icons as SVG
- Use Figma Dev Mode for CSS inspection

### For Presentation
- Export full page as PDF
- Create presentation deck with key screens

### Handoff
- Share Figma link with Dev Mode enabled
- Reference design-tokens.json for exact values

---

## 📁 File Checklist

Before considering complete, verify:

- [ ] All color styles created and applied
- [ ] All text styles created and applied
- [ ] All effect styles created and applied
- [ ] All components built with variants
- [ ] Desktop frame complete (1440px)
- [ ] Tablet frame complete (768px)
- [ ] Mobile frame complete (375px)
- [ ] Prototype interactions added
- [ ] Components organized in library
- [ ] Assets page has all icons/images

---

*This guide corresponds to Idaho Pharmacy Website v2.0*

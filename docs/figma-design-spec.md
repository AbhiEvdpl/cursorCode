# Idaho Pharmacy, LLC — Figma Design Specification

Modern, soft medical art direction inspired by Ampul (hero/structure) and Clenia (card/grid treatment). Use the exact Idaho Pharmacy copy from the brief and mirror the semantic sections implemented in code.

## Frames & Layout
- **Desktop** (primary): 1440 × ~5200 px, 12-column grid (80 px columns / 24 px gutter / 120 px margins). Vertical spacing 120 px. Lock each section inside auto-layout stacks to keep breathing room consistent.
- **Tablet**: 1024 px, 8-column grid (72 px margins / 16 px gutter). Collapse cards to 2 columns, hero image under copy.
- **Mobile**: 375 px, single column with 16 px padding and 24 px vertical gutters. CTA buttons expand full-width.
- Include a dedicated **Component Library** page with 1440 + 375 device frames plus reusable components.
- Desktop stacking order (annotate section heights): Header 80 px → Hero 840 px → About 640 px → Services grid 920 px → Serving Idaho 780 px → Experts 760 px → CTA banner 360 px → Footer 420 px.
- Mobile stacking order mirrors desktop but collapses every grid to single column with 16 px lateral padding. Note where CTA buttons become full-width and hero image sits below copy.

## Color & Gradient Styles
Create named styles for every token:
| Style | Hex | Notes |
| --- | --- | --- |
| `color/primary` | #1E4637 | Header, CTA banner, buttons |
| `color/secondary` | #224E7A | Section titles, secondary CTA |
| `color/accent` | #C89F4A | Icon chips, list bullets |
| `color/light-accent` | #88C0E6 | Hero background wash, map glow |
| `color/dark-neutral` | #4A545E | Body copy |
| `color/light-neutral` | #F4F4F2 | Page background |
| `color/white` | #FFFFFF | Cards, surfaces |

Gradients: `hero/sky` (linear 135°, rgba(136,192,230,0.45) → rgba(30,70,55,0.12)) and `serving/vertical` (180°, rgba(136,192,230,0.3) → #F4F4F2). Add a subtle Idaho mountain silhouette overlay (vector) anchored to the hero’s lower edge.

## Typography Styles (DM Sans / Lato / Source Sans Pro)
**Primary Font Stack**: DM Sans (headings, buttons), Lato (body), Source Sans Pro (fallback)

- **Display** / 54 px / 64 px / Bold (DM Sans) — hero headline. Responsive: 40/48 on mobile.
- **H2** / 40 px / 52 px / SemiBold (DM Sans) — section headers. Responsive: 32/40 on tablet, 28/36 on mobile.
- **H3** / 28 px / 36 px / Medium (DM Sans) — service + expert cards. Responsive: 24/32 on mobile.
- **Body L** / 20 px / 32 px / Regular (Lato) — hero subtext, lead paragraphs. Responsive: 18/28 on mobile.
- **Body** / 18 px / 28 px / Regular (Lato) — paragraph content. Responsive: 16/24 on mobile.
- **Caption** / 14 px / 22 px / Medium (DM Sans) — eyebrow labels, badges, card meta. Letter spacing: 0.08em (80 tracking).

Document line heights, letter spacing (eyebrows at 80 tracking), and include responsive overrides. Publish these as `text/*` tokens inside the Component Library page so engineering can map each style to CSS variables.

**Font Loading**: Preconnect to Google Fonts, load DM Sans (400,500,600,700), Lato (400,600), Source Sans Pro (400,600) with `display=swap`.

## Component Library (Auto Layout Required - Clenia-Inspired)
1. **Navigation / Header**: 
   - Desktop + sticky variant plus mobile drawer
   - Auto-layout row (Logo locked at 164px, menu links distribute with 24px gap, CTA pinned right)
   - Sticky version: padding reduces to 16px, shadow amplifies to `effect/header-sticky`
   - Mobile: Hamburger menu (24px × 18px), drawer slides from right (35% width)
   
2. **Buttons** (DM Sans, 600 weight):
   - Primary: #1E4637 background, white text, 14px/32px padding, 999px radius
   - Secondary: #224E7A background, white text
   - Ghost: transparent, #224E7A text, 1px border
   - Light: white background, #1E4637 text
   - Ghost-Light: transparent, white text, 1px white border
   - Hover: translateY(-2px), enhanced shadow, ripple effect
   - Focus: 3px light-accent outline, 2px offset
   - Include optional leading/trailing icon slots (8px gap)
   
3. **Icon Chips**: 
   - Facility icons: 48px circular chips with accent background (#C89F4A)
   - Service cards: 56px icons with hover scale/rotate animation
   - Provide color overrides (primary, secondary, light accent)
   
4. **Service Cards** (Clenia-style):
   - 280px min-width, auto height white cards
   - 24px radius, 40px/32px padding
   - Top accent border (4px gradient) animates on hover
   - Icon (56px) + title (DM Sans, 600) + body copy (Lato, 400)
   - Hover: translateY(-8px), shadow 0 25px 50px rgba(14,24,42,0.15)
   - Border color changes to rgba(200,159,74,0.4) on hover
   
5. **Expert Cards**: 
   - 240px min-width, auto height
   - Sharing service card style with 28px/24px padding
   - Include boolean property for CTA arrow when reused
   
6. **Map Module**: 
   - Idaho outline SVG, gradient background
   - Detachable pin component (36px) with tooltip variant
   - Pin placement: Boise (55%/42%), Rural (30%/62%)
   - Pulse animation on pins, tooltip fades in on hover
   
7. **Form Inputs**: 
   - Text, select, textarea: 12px padding, 12px radius
   - Border: 1px rgba(34,78,122,0.3)
   - Focus: 2px light-accent outline, border transparent
   - Helper text: 0.85rem, dark color
   - Validation states: error (red border), success (green border)
   - Include Start Service modal form as nested component
   
8. **Modal**: 
   - Container: 600px max-width, 90vw mobile, 24px radius
   - Overlay: rgba(4,16,16,0.6) backdrop
   - Close icon: top-right, 1.5rem size
   - Body: 32px padding, vertical stack with 16px gap
   - Success state: swaps helper text for confirmation message
   - Auto-closes after 400ms on success
   
9. **Footer Columns**: 
   - Four-column grid (desktop), two-column (tablet), stacked (mobile)
   - Heading: DM Sans, 600, white
   - Links: Lato, 400, white with hover underline
   - Legal: caption style, centered
   
10. **Color, Typography, and Effect Styles**: 
    - Publish `color/*`, `text/*`, and `effect/*` tokens
    - Spacing tokens: 8, 12, 16, 24, 32, 40, 48, 64, 96, 120
    - Shadow tokens: `shadow-soft` (0 10px 30px), `shadow-card` (0 20px 40px), `shadow-hover` (0 25px 50px)

## Auto Layout & Constraints
- All sections sit inside vertical auto-layout frames with 32 px gap between headings and content groups; outer frames use 120 px top/bottom padding on desktop, 96 px tablet, 72 px mobile.
- Use `Wrap` auto-layout for card grids so they break cleanly to 2 columns (≥600 px) and 1 column (<600 px). Constrain cards left/right with 32 px gutters.
- Hero grid: text column min-width 560 px, image column min-width 460 px. Apply `Resize to Fit` so columns wrap vertically below 1024 px.
- Map module pins use Constraints (Top/Left percentages) to maintain placement when resizing the tile.
- Footer columns switch from four-up to two-up to single column using component variants + auto-layout `Wrap`.

## Section Breakdown (Use provided copy verbatim)
1. **Header**: 80 px tall, white background, sticky. Links: Home, Services, Service Areas, eMAR Integration, Onboarding, Contact. CTA button reads “Start Service” and uses primary fill. Include mobile nav toggle + overlay variant.
2. **Hero**: Ampul-style two-column layout. Left column stack = eyebrow “Idaho's Trusted Long-Term Care Pharmacy Partner”, headline “Your Idaho Long-Term Care Pharmacy Partner”, short lead (Body L), CTA buttons (Start Service primary, Facility Onboarding ghost), and bullet list (PointClickCare, QuickMAR, Yardi integrations + onboarding specialists + daily routes). Right column hosts courier illustration with sky-blue gradient, testimonial chip, and Idaho mountain silhouette overlay anchored bottom.
3. **About**: Two columns. Left column locks the paragraph “Idaho Pharmacy is a dedicated, independent, locally owned and operated, Idaho long-term care (LTC) pharmacy focused entirely on supporting skilled nursing, assisted living, memory care, group homes, and hospice providers across our state.” Facility chips (SNF, ALF, Memory Care, Group Homes, Hospice) appear below as icon chip components. Right column = Idaho map tile in rounded card with subtle drop shadow.
4. **Why Idaho LTC Facilities Choose Us**: Secondary-blue background with 7 white cards labeled exactly: “After hours pharmacist support”, “Daily delivery routes”, “Advanced packaging”, “eMAR / EHR integration”, “Consultant pharmacist services”, “STAT medications”, “Onboarding specialists”. Each card uses matching icon from `/assets/images` set and 1–2 sentence supporting copy.
5. **Serving Idaho**: Gradient wash with Idaho map, two pin components, tooltip label, and description copy. Badge cards highlight “Boise & Treasure Valley” and “Rural & frontier Idaho communities”.
6. **Your LTC Pharmacy Experts**: Grid pairs team photo with four expert cards (Team expertise, Certifications, LTC regulatory training, Resident-focused care). CTA buttons: Start Service (secondary) + Contact Us (ghost). Ensure cards reuse same component as services for consistency.
7. **CTA Banner**: Full-width, primary green (#1E4637). Headline “Ready to Partner with a Dedicated Idaho LTC Pharmacy?” Buttons: Start Service (light) + Contact Us (ghost light). Add subtle diagonal texture or gradient overlay to emulate Ampul.
8. **Footer**: Dark green background, four columns (Logo/mission, Quick Links, Facility Onboarding, Contact/Address). Footer legal line uses caption style; optionally include social icons as muted outlines.

## Micro-Interactions & Prototype (Ampul-Inspired)
- **Sticky header**: On-scroll trigger swaps to sticky variant with stronger shadow (0 15px 25px rgba(4,16,16,0.12)) and backdrop blur. Document effect token `effect/header-sticky`.
- **Buttons**: 
  - Hover: translateY(-2px), enhanced shadow (0 12px 24px rgba(14,24,42,0.15)), ripple effect via pseudo-element
  - Focus ring: 3px `color/light-accent` outline with 2px offset
  - Active: translateY(0) for tactile feedback
  - Smart Animate transitions: cubic-bezier(0.4, 0, 0.2, 1) for smooth motion
- **Cards**: 
  - While-hover: translateY(-8px), shadow increases to 0 25px 50px rgba(14,24,42,0.15)
  - Top accent border animates from scaleX(0) to scaleX(1) on hover
  - Icons scale(1.1) and rotate(5deg) on card hover
  - Reduced-motion fallback: no transform, color-only change
- **Hero illustration**: 
  - Float animation (translateY ±10px with subtle rotation) loops every 8s
  - Hover: scale(1.02) for interactivity
  - CSS `@keyframes floatCard` with multi-keyframe easing
- **Scroll-triggered animations**: 
  - Cards fade in with translateY(30px) → translateY(0) on scroll
  - Staggered delays (100ms per card) for cascading effect
  - Intersection Observer API implementation
- **Map pins**: 
  - Hover/focus triggers tooltip fade + slide (-8px)
  - Pulse animation (scale 1 → 1.05) loops every 3s
  - Document `aria-live` behavior for screen readers
- **Mobile nav**: 
  - Slide-in drawer from right (35% width) with overlay fade
  - ESC/overlay tap closes
  - Body scroll locked when open
- **CTA modal**: 
  - Start Service buttons open modal with scale + fade
  - Success state auto-closes after 400ms
  - Form inputs have focus states with light-accent outline

## Responsive Notes
- Breakpoints: 1440 (desktop), 1200 (large), 1024 (tablet), 768 (small tablet), 600 (phablet), 375 (mobile). Document constraints inside layout grid annotations.
- Hero image stacks below copy <1024 px, CTA buttons stack vertically <600 px.
- Service + expert cards drop to 2 columns at 960 px and 1 column at 600 px.
- Footer converts to 2 columns on tablet and stacked list on mobile (accordion optional).

## Assets & Export Prep
- Export hero + experts imagery in WebP (1x/2x) plus PNG fallbacks (already provided).
- Maintain SVG icon artboards at 24 px (stroke width 1.5 px). Include Idaho mountain silhouette and new expert icons.
- Provide component thumbnails and cover image for the Figma file.
- Reference `/assets/images` naming when assigning components (e.g., `hero-courier.webp`, `icon-after-hours.svg`, `idaho-map.svg`) so dev handoff maps 1:1.
- Note export settings in-file (SVG @1x, WebP @1× & @2×) and include instructions for compressing via Squoosh (quality 80) to match repo assets.

## Accessibility & Content
- Ensure color contrast meets WCAG AA (≥4.5:1). Use accent color only on large text or icons.
- All imagery references Idaho or LTC context in alt text.
- Document anchor IDs for CMS usage (matching `data-cms-key` attributes in HTML).
- Include annotations showing how eMAR integration partners (PointClickCare, QuickMAR, Yardi) appear within hero bullet list and CTA copy.

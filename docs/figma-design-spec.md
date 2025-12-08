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

## Typography Styles (Inter Family)
- Display / 54 px / 64 px / Bold — hero headline.
- H2 / 40 px / 52 px / SemiBold — section headers.
- H3 / 28 px / 36 px / Medium — service + expert cards.
- Body L / 20 px / 32 px / Regular — hero subtext.
- Body / 18 px / 28 px / Regular — paragraph content.
- Caption / 14 px / 22 px / Medium — eyebrow labels, badges, card meta.
Document line heights, letter spacing (eyebrows at 80 tracking), and include responsive overrides (Display drops to 40/48 on mobile). Publish these as `text/*` tokens inside the Component Library page so engineering can map each style to CSS variables.

## Component Library (Auto Layout Required)
1. **Navigation / Header**: Desktop + sticky variant plus mobile drawer. Auto-layout row (Logo locked at 164 px, menu links distribute, CTA pinned right). Sticky version tightens padding and amplifies drop shadow token `effect/header-sticky`.
2. **Buttons**: Primary, Secondary, Ghost, Light, Ghost-Light. Include hover/focus/disabled variants with optional leading/trailing icon slots and width resizing behavior (hug contents vs fill).
3. **Icon Chips**: 48 px circular chips with accent background for facility icons and 64 px rounded-square chips for service cards. Provide color overrides (primary, secondary, light accent).
4. **Service Cards**: 320 × 360 px white cards, 24 px radius, icon + title + body copy. Hover variant lifts 4 px, accent border appears, and drop shadow increases to `effect/card-hover`.
5. **Expert Cards**: 280 × auto cards sharing the service card style but with slimmer padding (24 px). Include boolean property for CTA arrow when reused in case studies.
6. **Map Module**: Idaho outline, gradient background, detachable pin component with tooltip variant (default, hover, active). Document pin placement percentages for Boise (55%/42%) and Rural (30%/62%).
7. **Form Inputs**: Text, select, textarea, helper text, validation states. Include Start Service modal form as a component with nested input instances.
8. **Modal**: Container + overlay, close icon, body copy stack, button row. Provide success state variant that swaps helper text for confirmation.
9. **Footer Columns**: Stackable column with heading + link list, plus smaller variant for legal copy.
10. **Color, Typography, and Effect Styles**: Publish `color/*`, `text/*`, and `effect/*` tokens plus spacing tokens (8, 12, 16, 24, 32, 48, 64, 96, 120).

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

## Micro-Interactions & Prototype
- Sticky header: On-scroll trigger swaps to sticky variant with stronger shadow and reduced padding. Document effect token `effect/header-sticky`.
- Buttons: Hover lightens fill by 5% and adds elevation; focus ring is 2 px `color/light-accent`. Provide Smart Animate transitions between states.
- Cards: While-hover lifts to 0 20 40 rgba(0,0,0,0.08) and reveals accent border; note reduced-motion fallback (no motion, color-only change).
- Hero illustration: Float animation (translateY ±8 px) loops every 8s. Mention CSS `@keyframes floatCard` implementation.
- Map pins: Hover/focus triggers tooltip fade + slide (-8 px). Document `aria-live` behavior.
- Mobile nav: Slide-in drawer from right with overlay fade; ESC/overlay tap closes.
- CTA modal: Start Service buttons open modal with scale + fade; success state auto-closes after 400 ms.

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

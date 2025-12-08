# Idaho Pharmacy, LLC — Figma Design Specification

Modern, soft medical art direction inspired by Ampul (hero/structure) and Clenia (card/grid treatment). Use the exact Idaho Pharmacy copy from the brief and mirror the semantic sections implemented in code.

## Frames & Layout
- **Desktop** (primary): 1440 × ~5200 px, 12-column grid (80 px columns / 24 px gutter / 120 px margins). Vertical spacing 120 px. Lock each section inside auto-layout stacks to keep breathing room consistent.
- **Tablet**: 1024 px, 8-column grid (72 px margins / 16 px gutter). Collapse cards to 2 columns, hero image under copy.
- **Mobile**: 375 px, single column with 16 px padding and 24 px vertical gutters. CTA buttons expand full-width.
- Include a dedicated **Component Library** page with 1440 + 375 device frames plus reusable components.

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
Document line heights, letter spacing (eyebrows at 80 tracking), and include responsive overrides (Display drops to 40/48 on mobile).

## Component Library (Auto Layout Required)
1. **Navigation / Header**: Logo, menu links, Start Service CTA. Sticky state variant with elevated shadow.
2. **Buttons**: Primary (green), Secondary (blue), Tertiary Ghost (outline white/blue), Light variant for dark backgrounds. Include hover/focus/disabled states.
3. **Icon Chips**: 48 px circular background w/ accent icon inside, used for facility types and card headers.
4. **Service Cards**: 320 × 360 px white cards, 24 px radius, icon + title + body copy. Hover variant with elevated shadow and accent border.
5. **Expert Cards**: 280 × auto cards for “Team expertise / Certifications / LTC regulatory training / Resident-focused care”.
6. **Map Module**: Idaho outline, gradient background, detachable pins + tooltip component.
7. **Form Inputs**: Field, select, textarea, helper text, validation states.
8. **Modal**: Container w/ close icon + stacked form.
9. **Footer Columns**: Stackable column w/ heading + links for quick duplication.

## Section Breakdown (Use provided copy verbatim)
1. **Header**: 80 px tall, white background, sticky. Links: Home, Services, Service Areas, eMAR Integration, Onboarding, Contact. Start Service button uses primary fill.
2. **Hero**: Ampul-style two-column layout. Left column = eyebrow “Idaho's Trusted Long-Term Care Pharmacy Partner”, hero headline “Your Idaho Long-Term Care Pharmacy Partner”, supporting text, buttons (Start Service primary, Facility Onboarding ghost). Include bullet list for integrations/routes. Right column = pharmacist delivery image on sky-blue gradient + testimonial card + optional Idaho mountain silhouette overlay behind illustration.
3. **About**: Two columns. Left = paragraph “Idaho Pharmacy is a dedicated, independent, locally owned…” plus facility icon chips (SNF, ALF, Memory Care, Group Homes, Hospice). Right = Idaho map tile within rounded card.
4. **Why Idaho LTC Facilities Choose Us**: Clenia-like grid on secondary blue background. Seven cards labeled: After hours pharmacist support, Daily delivery routes, Advanced packaging, eMAR / EHR integration, Consultant pharmacist services, STAT medications, Onboarding specialists. Icons pulled from asset set.
5. **Serving Idaho**: Clean Ampul section with Idaho map, two highlighted badges (“Boise & Treasure Valley”, “Rural & frontier Idaho communities”), tooltip micro-interaction on pins.
6. **Your LTC Pharmacy Experts**: Replace bullets with 4 cards (Team expertise, Certifications, LTC regulatory training, Resident-focused care). Each card includes supporting sentence plus icon chip. Optional team photo floats adjacent on desktop.
7. **CTA Banner**: Full-width, primary green background, white text “Ready to Partner with a Dedicated Idaho LTC Pharmacy?” Buttons: Start Service (light variant) and Contact Us (ghost light).
8. **Footer**: Dark green background, four columns (Logo/mission, Quick Links, Facility Onboarding, Contact/Address). Include social/icon placeholders if needed.

## Micro-Interactions & Prototype
- Sticky header shadow intensifies after scroll (simulate via component variant).
- Buttons lighten by 5% on hover, 2 px sky-blue focus ring.
- Cards lift to 0 20 40 rgba(0,0,0,0.08) with accent border highlight.
- Map pins trigger tooltip component with cross-fade.
- Mobile nav slides in from right with overlay fade.
- CTA modal opens from Start Service button (link flows between components).

## Responsive Notes
- Breakpoints: 1440 (desktop), 1200 (large), 1024 (tablet), 768 (small tablet), 600 (phablet), 375 (mobile). Document constraints inside layout grid annotations.
- Hero image stacks below copy <1024 px, CTA buttons stack vertically <600 px.
- Service + expert cards drop to 2 columns at 960 px and 1 column at 600 px.
- Footer converts to 2 columns on tablet and stacked list on mobile (accordion optional).

## Assets & Export Prep
- Export hero + experts imagery in WebP (1x/2x) plus PNG fallbacks (already provided).
- Maintain SVG icon artboards at 24 px (stroke width 1.5 px). Include Idaho mountain silhouette and new expert icons.
- Provide component thumbnails and cover image for the Figma file.

## Accessibility & Content
- Ensure color contrast meets WCAG AA (≥4.5:1). Use accent color only on large text or icons.
- All imagery references Idaho or LTC context in alt text.
- Document anchor IDs for CMS usage (matching `data-cms-key` attributes in HTML).
- Include annotations showing how eMAR integration partners (PointClickCare, QuickMAR, Yardi) appear within hero bullet list and CTA copy.

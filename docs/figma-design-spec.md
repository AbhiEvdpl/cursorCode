# Idaho Pharmacy, LLC — Figma Design Specification

Comprehensive homepage blueprint mirroring Ampul’s airy hero structure and Clenia’s card spacing while applying Idaho Pharmacy’s exact messaging, palette, and typography tokens. Pair this spec with the exported assets in `/assets/images` so dev handoff stays 1:1 with the production HTML.

## Frames & Layout

- **Desktop frame (1440 × ~5200 px)** — 12-column grid (80 px columns / 24 px gutters / 120 px margins). Vertical rhythm: 120 px section padding, 32 px intra-section gaps. Hero height locked at 840 px to accommodate the courier illustration plus gradient wash.
- **Tablet (1024 px)** — 8-column grid, 72 px outer margins, 16 px gutters. Wrap cards to two columns, move hero imagery beneath copy, and switch CTA buttons to `hug contents` with 16 px vertical spacing.
- **Mobile (375 px)** — Single column, 16 px padding. All cards full-width, CTA buttons `fill container`. Hero, Serving Idaho, and CTA banner maintain 72 px vertical padding.
- **Component Library page** — Dedicated file page housing Desktop + Tablet + Mobile devices plus reusable components. Include annotated layer names and usage notes per component.
- **Stacking order (Desktop)**: Header (80 px) → Hero (840 px) → About / Specialization (640 px) → Why Choose Us grid (920 px) → Serving Idaho (780 px) → Experts (760 px) → CTA Banner (360 px) → Footer (420 px).

## Color & Gradient Styles

Define named color styles to mirror the strict brand palette:

| Style Token           | Hex       | Usage                                                     |
| --------------------- | --------- | --------------------------------------------------------- |
| `color/primary`       | `#1E4637` | Header, CTA banner, primary buttons                       |
| `color/secondary`     | `#224E7A` | Section headings, secondary CTAs, hero headline           |
| `color/accent`        | `#C89F4A` | Bullet chips, icon backgrounds, hover borders             |
| `color/light-accent`  | `#88C0E6` | Hero background wash, Serving Idaho gradient, focus rings |
| `color/dark-neutral`  | `#4A545E` | Body copy                                                 |
| `color/light-neutral` | `#F4F4F2` | Page background, alternating rows                         |
| `color/white`         | `#FFFFFF` | Cards, navigation, form surfaces                          |

Gradients:

- `hero/sky` — linear 135°, rgba(136,192,230,0.45) → rgba(30,70,55,0.12); overlays Idaho mountain silhouette vector anchored to hero baseline.
- `serving/vertical` — linear 180°, rgba(136,192,230,0.3) → #F4F4F2; Idaho map tile floats above with soft shadow token `effect/map`.

## Typography Styles (DM Sans Family)

- `text/display` — DM Sans Bold, 54/64 px for hero headline “Your Idaho Long-Term Care Pharmacy Partner”. Mobile override 40/48 px.
- `text/h2` — DM Sans SemiBold, 40/52 px for section headers like “Why Idaho LTC Facilities Choose Us”.
- `text/h3` — DM Sans Medium, 28/36 px for service/expert cards.
- `text/body-large` — DM Sans Regular, 20/32 px for hero lead “Welcome to Idaho Pharmacy, LLC. — Idaho’s Trusted Long-Term Care Pharmacy”.
- `text/body` — DM Sans Regular, 18/28 px for paragraphs (“Idaho Pharmacy is a dedicated…” and “We specialize exclusively…”).
- `text/caption` — DM Sans Medium, 14/22 px with 80 tracking for eyebrows and badges.
  Publish typography tokens within the Component Library as `text/*` styles mapped to CSS custom properties.

## Component Library (Auto Layout Required)

1. **Navigation/Header** — Desktop + sticky variant + mobile drawer. Auto-layout row with logo locked at 164 px, menu links distributed, CTA pinned right. Sticky variant reduces vertical padding to 12 px and applies `effect/header-sticky` (0 15 25 rgba(4,16,16,0.12) + blur).
2. **Buttons** — Primary, Secondary, Ghost, Light, Ghost-Light; each includes hover, focus, active, and disabled states. Optional trailing icon slot sized 16 px.
3. **Eyebrow Tag** — Reusable component for “Idaho’s Trusted Long-Term Care Pharmacy Partner”, “Serving Idaho”, etc., controlling uppercase style and tracking.
4. **Icon Chips** — 48 px circular chips + 64 px rounded-square variant. Include facility icons (SNF, ALF, Memory Care, Group Homes, Hospice) and service icons mapped to `/assets/images/*.svg`.
5. **Service Cards** — 320 × 360 px, 24 px radius, icon/title/body stack. Hover variant lifts 4 px, toggles accent border, and increases shadow to `effect/card-hover`.
6. **Expert Cards** — Shares service card foundation; add boolean property for CTA arrow, used in “Your LTC Pharmacy Experts”.
7. **Map Module** — Idaho outline plus detachable pin components with tooltip states (default, hover, selected). Document pin coordinates: Boise & Treasure Valley (top 42%, left 55%), Rural & frontier (top 62%, left 30%).
8. **Form Inputs & Modal** — Text, select, textarea, helper text, validation states, success state. Include Start Service modal with nested inputs and success variant confirming “We make starting service simple…”.
9. **Footer Columns** — Stackable column component (heading + link list) plus legal/tiny variant.
10. **Texture Overlays** — Diagonal noise texture for CTA banner + hero sky blur stored as effects.

## Auto Layout & Constraints

- Wrap each major section in vertical auto-layout frames with 32 px gaps between heading stack and content groups. Outer frames: 120/96/72 px top-bottom padding (Desktop/Tablet/Mobile).
- Card grids use auto-layout with `Wrap` to shift from 3 columns (≥1200 px) → 2 columns (960–600 px) → single column (<600 px).
- Hero layout uses two-column auto-layout; left column min-width 560 px, right column min-width 460 px. Apply `Resize to Fit` and set imagery to “bottom” constraint so gradient + mountains stay anchored.
- Serving Idaho pins use percentage constraints; map tile remains centered with 32 px padding.
- Footer column component toggles between four-up, two-up, and stacked via component variant properties.

## Section Breakdown (Exact Copy Blocks)

1. **Header** — Sticky 80 px bar, white background. Links: Home, Services, Service Areas, eMAR Integration, Onboarding, Contact. CTA button: “Start Service”.
2. **Hero** — Eyebrow: “Idaho’s Trusted Long-Term Care Pharmacy Partner”. Headline: “Your Idaho Long-Term Care Pharmacy Partner”. Lead paragraph: “Welcome to Idaho Pharmacy, LLC. — Idaho’s Trusted Long-Term Care Pharmacy”. Body copy: “Idaho Pharmacy is a dedicated…” + “We specialize exclusively in LTC pharmacy services—no retail distractions, no walk-ins—so your residents and staff receive fast, accurate, and dependable medication support backed by Idaho-based expertise.” CTAs: Primary “Start Service”, Ghost “Facility Onboarding”. Bullet list (caption style) repeating hero benefits from the user brief.
3. **About + Facility Focus** — Keep original paragraph plus facility chips. Include supporting copy block describing facility types served exactly as provided.
4. **Why Idaho LTC Facilities Choose Us** — Secondary-blue background (#224E7A) with seven cards titled exactly as the brief lists:
   - “After hours pharmacist support for urgent orders & clinical questions”
   - “Daily delivery routes across Idaho”
   - “Advanced medication packaging for safety and accuracy”
   - “Seamless eMAR/EHR integration (PointClickCare, QuickMAR, Yardi, etc.)”
   - “Consultant pharmacist services to support compliance”
   - “STAT & emergency medication availability”
   - “Dedicated onboarding specialists to support facilities”
     Each card includes concise supporting body text referencing Idaho context.
5. **Serving Idaho** — Gradient module with map tile, tooltip, and supporting copy “Our LTC pharmacy supports facilities in: Boise & Treasure Valley; Rural & frontier Idaho communities.”
6. **Your LTC Pharmacy Experts** — Team image plus cards describing expertise: “Every member of our pharmacy team is trained in Idaho long-term care regulations, medication management protocols, MAR documentation, and best practices for resident-focused care.” Add four expert cards (Team expertise, Certifications, LTC regulatory training, Resident-focused care) and CTA buttons (Start Service secondary + Contact Us ghost).
7. **CTA Banner** — Headline “Ready to Partner with a Dedicated Idaho LTC Pharmacy?” Subtext: “We make starting service simple. Visit our Facility Onboarding page or contact us for a consultation.” Buttons: Start Service (light) + Contact Us (ghost-light). Include diagonal texture overlay referencing Ampul.
8. **Footer** — Primary green background, four columns, with legal line and optional social icons.

## Micro-Interactions & Prototype

- Sticky header transitions to compact variant after 10 px scroll; document Smart Animate between states.
- Buttons: Hover lifts 2 px, focus ring uses `color/light-accent` 2 px offset.
- Cards: Hover lifts, accent border animates, w/reduced motion fallback.
- Hero illustration floats using `@keyframes floatCard`; mention 8 s duration and translation ±8 px.
- Map pins: Tooltip fade + slide (-8 px) plus `aria-live` announcement.
- Mobile nav drawer slides from right, overlay fades; ESC closes.
- Start Service modal: scale + fade entrance, success state auto-closes after 400 ms.

## Responsive Notes

- Breakpoints: 1440, 1200, 1024, 960, 768, 600, 375 px. Document how grids collapse and how CTA buttons become full-width <600 px.
- Hero imagery stacks below copy below 1024 px; hero CTA buttons stack vertically <600 px.
- Service/expert cards drop to 2 columns at 960 px, single column at 600 px.
- Footer shifts four → two columns at 960 px, stacked at 600 px.

## Assets & Export Prep

- Export hero + expert images as WebP (1× & 2×) with PNG fallbacks. Maintain existing file names for dev parity.
- SVG icons locked at 24 px artboards, stroke 1.5 px. Include Idaho mountain silhouette vector.
- Provide cover image + component thumbnails for Figma file.
- Document export settings (SVG @1×, WebP @1×/@2×, compression via Squoosh at quality 80).

## Accessibility & Content

- Maintain WCAG AA contrast; accent amber reserved for bullets and icons on light surfaces.
- Provide descriptive alt text referencing Idaho LTC context.
- Annotate anchor IDs to match `data-cms-key` attributes (e.g., `data-cms-key="hero-tag"`).
- Note that hero bullets call out eMAR partners (PointClickCare, QuickMAR, Yardi) and onboarding support to align with marketing copy.

# Idaho Pharmacy, LLC — Figma Design Specification

## Frame Setup
- **Desktop**: 1440px width, 120px top/bottom spacing, 12-column grid (width 80px, 24px gutters, 120px margins). Auto-layout stack for sections.
- **Tablet**: 1024px width, 8-column grid (72px margins, 16px gutters). Sections collapse to single column where necessary.
- **Mobile**: 375px width, single column, 16px padding, 24px vertical spacing.

## Color Styles
| Token | Hex | Usage |
| --- | --- | --- |
| `color/primary` | #1E4637 | Header bg, primary CTA |
| `color/secondary` | #224E7A | Section headers, buttons |
| `color/accent` | #C89F4A | Icons, highlights |
| `color/light-accent` | #88C0E6 | Backgrounds, gradients |
| `color/dark-neutral` | #4A545E | Body text |
| `color/light-neutral` | #F4F4F2 | Page background |
| `color/white` | #FFFFFF | Surfaces, cards |

## Typography Styles (Inter)
- Display / 54px / 64px / Bold — hero headline
- H2 / 40px / 52px / SemiBold — section headers
- H3 / 28px / 36px / Medium — card titles
- Body Large / 20px / 32px / Regular — hero subtext
- Body / 18px / 28px / Regular — paragraphs
- Caption / 14px / 22px / Medium — kicker labels, badges

## Components (Auto Layout)
1. **Header/Nav**: Logo + navigation links + primary CTA. Sticky behavior with drop shadow.
2. **Buttons**: Primary solid (green), secondary solid (blue), tertiary outline, text button. States documented (default/hover/focus/disabled).
3. **Cards**: Service card 320x, icon chip 48px, team badge card (horizontal layout), map badge.
4. **Forms**: Input field (label + helper text), select dropdown, textarea, CTA button.
5. **Navigation Drawer**: Mobile slide-out with stacked links and CTA.
6. **Map Component**: Stylized Idaho vector with service pins and coverage glow.
7. **Icon Set**: Line icons for SNF, ALF, Memory Care, Group Homes, Hospice, Delivery, Packaging, Integration, Consultant, STAT, Onboarding.

## Section Structure
1. **Header**: Sticky, 80px height, white background, nav links (Home, Services, Service Areas, eMAR Integration, Onboarding, Contact).
2. **Hero**: Two-column layout; left text stack with headline, subtext, CTAs. Right imagery (pharmacist photo on sky-blue gradient) plus testimonial chip.
3. **About**: Two columns, text plus Idaho map and facility chips.
4. **Why Choose Us**: 7-card grid on blue background with amber icons.
5. **Serving Idaho**: Map-focused section with Boise/Treasure Valley and Rural/Frontier badges.
6. **Experts**: Image + trust badges + short bios.
7. **Onboarding CTA Banner**: Green background, white text, two buttons.
8. **Footer**: Dark green background, four columns with quick links, onboarding, contact, address.

## Micro-Interactions
- Header becomes tinted with subtle shadow on scroll.
- Buttons: hover lighten 5%, focus ring 2px sky-blue.
- Cards: elevate (0 20 40 rgba(0,0,0,0.08)) on hover.
- Map pins: hover tooltip for service areas.
- Mobile nav: slide-in from right with fade overlay.
- CTA modal for contact form with ESC and overlay click to close.

## Responsive Notes
- Breakpoints: 1440 (desktop), 1024 (large tablet), 768 (small tablet), 375 (mobile).
- Hero image stacks under text below 1024px; CTAs become full width below 768px.
- Cards wrap to 2 columns on tablet, single column on mobile.
- Footer stacks to two columns on tablet, accordion on mobile.

## Assets & Export
- Export hero and experts photos as WebP (1x/2x) plus fallback PNG.
- Icons exported as SVG with 24px artboards.
- Map exported as SVG with editable layers.
- Provide component thumbnails for library overview.

## Accessibility & Content Notes
- Maintain WCAG AA contrast (≥4.5:1 body text, 3:1 large text).
- All imagery uses meaningful alt text referencing Idaho/local LTC.
- Provide placeholder copy for eMAR integration CTAs referencing PointClickCare, QuickMAR, Yardi (non-linked text tokens).
- Document anchors for CMS injection via `data-cms-key` attributes in HTML implementation.

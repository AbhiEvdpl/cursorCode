# Idaho Pharmacy Web Style Guide

## Color Tokens
- `--color-primary` (#1E4637) – Header, footer, primary CTA
- `--color-secondary` (#224E7A) – Section headers, secondary buttons
- `--color-accent` (#C89F4A) – Icons, highlights, list markers
- `--color-light-accent` (#88C0E6) – Background accents, gradients
- `--color-dark` (#4A545E) – Body text
- `--color-light` (#F4F4F2) – Page background
- `--color-white` (#FFFFFF) – Cards, surfaces

## Typography Scale (Inter)
| Token | Size/Line | Weight | Usage |
| --- | --- | --- | --- |
| Display | 54/64 | 700 | Hero headline |
| H2 | 40/52 | 600 | Section headings |
| H3 | 28/36 | 600 | Card titles |
| Body L | 20/32 | 400 | Hero subtext |
| Body | 18/28 | 400 | Paragraphs |
| Caption | 14/22 | 600 | Eyebrow labels |

## Spacing
- Section padding: 120px desktop, 96px tablet, 72px mobile
- Grid gap: 32px desktop, 24px tablet, 16px mobile
- Card padding: 32px desktop, 24px tablet/mobile

## Component Notes
- **Buttons**: 999px radius, 12/24 padding. Hover: translateY(-1px), soft shadow. Focus: 3px sky-blue outline.
- **Cards**: Rounded 20–32px radius, 1px translucent border, drop shadow (0 20 40 rgba(14,24,42,0.14)).
- **Navigation**: Sticky header, auto layout row. Mobile menu slides in from right at ≤960px, body scroll locked.
- **Map Pins**: Absolutely positioned buttons with accessible `aria-label`, tooltip updates via JS.
- **Modal**: Native `<dialog>`, focus trap handled by browser; fallback `open` attribute for unsupported browsers.

## Accessibility Checklist
- WCAG AA contrast: Primary on white (7.4:1), secondary on white (5.4:1), accent on white (2.6:1 used only for accents ≥ 24px or bold text).
- Semantic structure: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Skip link included for keyboard users.
- Forms: Labels explicitly bound via `for`/`id`. Inputs include required + pattern validation.
- Interactive elements provide focus styles and `aria-live` status messages.
- Images include descriptive `alt` text referencing Idaho/LTC context.

## Responsive Behavior
- Breakpoints: 1440 (desktop grid), 1024 (tablet), 768 (small tablet), 375 (mobile).
- Card grids collapse to 2 columns at 960px and single column under 600px.
- Hero image stacks beneath copy under 960px.
- Footer reduces to two columns at tablet, stacked at mobile.
- Modal remains centered with 90vw max width on mobile.

## Integration Notes
- eMAR/EHR CTA references integration partners (PointClickCare, QuickMAR, Yardi). Use `data-integration` attributes when linking to API or developer docs.
- `data-cms-key` attributes mark copy blocks for future CMS injection.

## Interaction Specs
- Sticky header shadow intensifies after 10px scroll (`.is-scrolled`).
- Map tooltip fades in on pin hover/focus.
- CTA modal opens from buttons with `data-open-modal="onboarding"` and closes on overlay click or ESC.
- Form submission simulated with promise; hook into real endpoint by updating `fakeSubmit` helper.

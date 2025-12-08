# Figma Design Resources — Idaho Pharmacy

Since Figma files (`.fig`) can only be created within the Figma application, this folder contains comprehensive resources to help you recreate the design quickly and accurately.

## 📁 Files Included

| File | Purpose |
|------|---------|
| `figma-recreation-guide.md` | Step-by-step instructions for building in Figma |
| `design-tokens.json` | All design tokens (colors, typography, spacing) |
| `components.svg` | Visual component reference (importable into Figma) |

---

## 🚀 Quick Start

### Option 1: Use Figma Community Template (Recommended)

1. Go to [Figma Community](https://figma.com/community)
2. Search for "Medical Website Template" or "Healthcare Landing Page"
3. Duplicate a template similar to the design
4. Apply the Idaho Pharmacy brand tokens from `design-tokens.json`

### Option 2: Build from Scratch

1. **Import Components SVG**
   - Open Figma → File → Place Image
   - Select `components.svg`
   - Use as visual reference for component styling

2. **Set Up Design Tokens**
   - Install [Tokens Studio for Figma](https://tokens.studio/) plugin
   - Import `design-tokens.json`
   - Apply tokens to your designs

3. **Follow the Guide**
   - Open `figma-recreation-guide.md`
   - Follow step-by-step instructions
   - Build components first, then pages

---

## 🎨 Design Token Import

### Using Tokens Studio Plugin

1. Install "Tokens Studio for Figma" from Figma Community
2. Open plugin panel
3. Click "Import" → "JSON File"
4. Select `design-tokens.json`
5. Apply tokens to create color/text styles

### Manual Setup

Create these styles manually in Figma:

#### Colors
```
Primary/Default     #1E4637
Primary/Dark        #163328
Secondary/Default   #224E7A
Secondary/Dark      #1A3D5F
Accent/Default      #C89F4A
Accent/Light        #D4B06A
Sky/Default         #88C0E6
Sky/Light           #A8D4F0
Neutral/Black       #1A1F25
Neutral/Dark        #4A545E
Neutral/Gray        #6B7280
Neutral/Light       #F4F4F2
Neutral/Lighter     #FAFAFA
Neutral/White       #FFFFFF
```

#### Text Styles
```
Display/Hero        DM Sans, 64px, Bold, Line 70px
Heading/H2          DM Sans, 48px, Bold, Line 58px
Heading/H3          DM Sans, 24px, SemiBold, Line 32px
Body/Large          DM Sans, 19px, Regular, Line 34px
Body/Default        DM Sans, 18px, Regular, Line 31px
Body/Small          DM Sans, 15px, Regular, Line 26px
UI/Eyebrow          DM Sans, 14px, SemiBold, Line 20px, UPPERCASE
UI/Button           DM Sans, 16px, SemiBold, Line 20px
```

---

## 📐 Frame Dimensions

| Frame | Width | Height (approx) |
|-------|-------|-----------------|
| Desktop | 1440px | 5500px |
| Tablet | 768px | 6000px |
| Mobile | 375px | 7000px |

### Grid Settings

**Desktop (1440px)**
- Columns: 12
- Gutter: 24px
- Margin: 60px

**Tablet (768px)**
- Columns: 8
- Gutter: 20px
- Margin: 40px

**Mobile (375px)**
- Columns: 4
- Gutter: 16px
- Margin: 24px

---

## 🧩 Component Checklist

Build these components first:

- [ ] **Buttons** — Primary, Secondary, Outline, Light, Ghost
- [ ] **Navigation** — Desktop nav bar, Mobile toggle
- [ ] **Service Card** — Default and Featured variants
- [ ] **Expert Card** — Compact info card
- [ ] **Region Card** — Coverage area card
- [ ] **Facility Chip** — Facility type badge
- [ ] **Form Elements** — Input, Select, Textarea
- [ ] **Section Eyebrow** — Line + uppercase text
- [ ] **Hero Stat** — Number + label
- [ ] **Float Card** — Floating info card
- [ ] **Map Pin** — With pulse animation
- [ ] **Contact Detail** — Icon + info card
- [ ] **Footer Column** — Links section
- [ ] **Social Link** — Icon button

---

## 🎬 Animation Notes

For prototyping, add these interactions:

| Element | Trigger | Animation |
|---------|---------|-----------|
| Service Card | Hover | Move Y -8px, change shadow |
| Button | Hover | Move Y -2px, increase shadow |
| Map Pin | Hover | Scale 1.15x, show tooltip |
| Mobile Nav | Tap toggle | Slide in from right |
| Header | Scroll > 50px | Add shadow |

Use **Smart Animate** for smooth transitions.

---

## 📦 Asset Import

All icons and images are in `/assets/images/`:

### SVG Icons (import directly)
- `icon-after-hours.svg`
- `icon-daily-delivery.svg`
- `icon-packaging.svg`
- `icon-emar.svg`
- `icon-consultant.svg`
- `icon-stat.svg`
- `icon-onboarding.svg`
- `icon-snf.svg`, `icon-alf.svg`, `icon-memory.svg`
- `icon-group-home.svg`, `icon-hospice.svg`
- `icon-team.svg`, `icon-certifications.svg`
- `icon-regulatory.svg`, `icon-resident.svg`
- `logo.svg`
- `map-pin.svg`
- `idaho-map.svg`
- `hero-mountains.svg`

### Raster Images (use WebP or PNG)
- `hero-courier.webp` / `hero-courier.png`
- `experts-team.webp` / `experts-team.png`

---

## 🔗 Reference Links

- [Live Website Preview](./index.html) — Open in browser
- [Design Spec](../docs/figma-design-spec.md) — Full specifications
- [Style Guide](../docs/style-guide.md) — Developer reference

---

## 💡 Tips

1. **Use Auto Layout** — All components should use auto layout for responsive behavior

2. **Component Variants** — Create variants for different states (default, hover, active, disabled)

3. **Consistent Naming** — Follow the naming conventions in `design-tokens.json`

4. **Dev Mode** — Enable Dev Mode for easy handoff to developers

5. **Version Control** — Use Figma's version history or branching

---

## 🤝 Need Help?

If you're recreating this design:

1. Reference the live website at `index.html`
2. Inspect CSS in browser DevTools for exact values
3. All measurements are in `design-tokens.json`
4. Component visual reference is in `components.svg`

---

*Idaho Pharmacy Design System v2.0*

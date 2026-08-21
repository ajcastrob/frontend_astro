# Design Specification — AI Skills Lab Blog

> **Source**: Figma file `blog` (ID: `DCQmQajBGwXDYBSM11I05r`)
> **Generated**: 2026-08-20 via Composio CLI + Figma API
> **Owner**: josé (a.j.castro.b@gmail.com)
> **Status**: Initial extraction — verify against Figma source

---

## Table of Contents

1. [File Info](#file-info)
2. [Pages & Assets](#pages--assets)
3. [Design Tokens](#design-tokens)
   - [Colors](#colors)
   - [Strokes](#strokes)
   - [Spacing Scale](#spacing-scale)
   - [Padding](#padding)
   - [Border Radius](#border-radius)
4. [Typography](#typography)
5. [Images & Assets](#images--assets)
6. [Page Structure](#page-structure)
   - [Main Frame Anatomy](#main-frame-anatomy)
   - [TopNavBar](#topnavbar)
   - [Main Content](#main-content)
   - [Footer](#footer)
7. [Component Inventory](#component-inventory)
8. [Content Inventory](#content-inventory)
9. [Patterns & Guidelines](#patterns--guidelines)
10. [Open Questions / Gaps](#open-questions--gaps)

---

## File Info

| Property | Value |
|----------|-------|
| **Name** | blog |
| **Figma ID** | `DCQmQajBGwXDYBSM11I05r` |
| **URL** | https://www.figma.com/design/DCQmQajBGwXDYBSM11I05r/blog |
| **Owner** | josé (a.j.castro.b@gmail.com) |
| **Last Modified** | 2026-08-20T23:04:03Z |

---

## Pages & Assets

### Pages

| Page | Node ID | Children |
|------|---------|----------|
| Page 1 | `0:1` | 3 children |

### Top-Level Elements (Page 1)

| Name | Node ID | Size | Description |
|------|---------|------|-------------|
| Html → Body | `1:265` | 1280 × 1314.56px | Main design frame |
| image 2 | `2:365` | 794 × 794px | Standalone image asset |
| image 3 | `2:368` | 1024 × 1024px | Standalone image asset |

---

## Design Tokens

### Colors

| Token | Hex | RGB | Semantic Role | Usage |
|-------|-----|-----|---------------|-------|
| `fill1` | `#ffffff` | 255, 255, 255 | White / Background | Html→Body background, Button text |
| `fill2` | `#1a1c1c` | 26, 28, 28 | Text Primary (near-black) | Headings, nav brand, card titles |
| `fill3` | `#564338` | 86, 67, 56 | Text Secondary (warm brown) | Body text, subtitle, descriptions, footer links |
| `fill4` | `#ddc1b3` | 221, 193, 179 | Border / Divider (warm tan) | Horizontal divider, card borders, stroke borders |
| `fill5` | `#faf9f8` | 250, 249, 248 | Surface (off-white warm) | Article cards background, TopNavBar background |
| `fill6` | `#f4f3f2` | 244, 243, 242 | Surface Muted (light gray) | Tag badge backgrounds, Footer background |
| `fill7` | `#903f00` | 144, 63, 0 | Accent / CTA (deep orange-brown) | Tags text, nav active link, "Leer" CTA, button background |
| `fill8` | `#895033` | 137, 80, 51 | Text Tertiary (muted brown) | Footer copyright text |

#### CSS Custom Properties

```css
:root {
  --color-white: #ffffff;
  --color-text-primary: #1a1c1c;
  --color-text-secondary: #564338;
  --color-text-tertiary: #895033;
  --color-border: #ddc1b3;
  --color-surface: #faf9f8;
  --color-surface-muted: #f4f3f2;
  --color-accent: #903f00;
}
```

---

### Strokes

| Token | Color | Width | Style | Align | Usage |
|-------|-------|-------|-------|-------|-------|
| `stroke1` | `#000000` | 1px | solid | inside | Heading 1 border |
| `stroke2` | `#ddc1b3` | 1px | solid | inside | Article cards, tag badges, footer, navbar borders |
| `stroke3` | `#903f00` | 1px | solid | inside | Active nav link underline |

> **Note**: `stroke1` (`#000000` on H1) may be a Figma selection artifact — confirm with designer before implementation.

---

### Spacing Scale

The following gap values are used throughout the design:

| Value | Usage |
|-------|-------|
| `0px` | Many frames (no gap) |
| `4px` | Tag icon gap (text ↔ arrow) |
| `8px` | Tag container gap, footer brand gap, nav link → button |
| `16px` | Section header row gap, card margin-bottom (below tags) |
| `24px` | Card row gap, nav link spacing |
| `32px` | Nav link → button spacing, description margin-bottom |
| `128px` | Hero section vertical gap (Main layout) |

---

### Padding

| Pattern | Top | Right | Bottom | Left | Usage |
|---------|-----|-------|--------|------|-------|
| Hero | 95.4px | 64px | 128px | 64px | Main section |
| Card | 24px | 24px | 24px | 24px | Article cards |
| Tag Badge | 4px | 8px | 4px | 8px | Category tags |
| Button | 8px | 24px | 8px | 24px | CTA button |
| Footer | 48px | 0 | 48px | 0 | Footer section |
| Nav Bar Content | 0 | 64px | 0 | 64px | Horizontal padding |
| Card Margin (tags) | 0 | 0 | 16px | 0 | Space below tags |
| Description Margin | 0 | 0 | 32px | 0 | Space below body text |

---

### Border Radius

| Value | Usage |
|-------|-------|
| `2px` | Article cards, tag badges, CTA button |

> The design uses a minimal, editorial aesthetic with a single `2px` radius across all rounded elements.

---

## Typography

> **Important**: Font family, exact font sizes, and weights are inferred from bounding box dimensions in the Figma simplified export. The designer must confirm actual values from the Figma text style panel.

### Type Scale (Inferred)

| Role | Approx. Size | Line Height | Color Token | Usage |
|------|-------------|-------------|-------------|-------|
| Display / H1 | ~48–52px | ~53px | `fill2` (`#1a1c1c`) | Main hero title |
| Subtitle | ~28–30px | ~31px | `fill3` (`#564338`) | Hero subtitle |
| H2 | ~36–40px | ~42px | `fill2` (`#1a1c1c`) | Section heading ("Skills que molan") |
| H3 | ~28–32px | ~34px | `fill2` (`#1a1c1c`) | Card titles |
| Body | ~16–18px | ~24px | `fill3` (`#564338`) | Card descriptions |
| Tag | ~12–13px | ~13px | `fill7` (`#903f00`) | Category badges |
| Nav Link | ~24–28px | ~31px | `fill3` / `fill7` (active) | Navigation |
| Button Text | ~24–28px | ~31px | `fill1` (`#ffffff`) | CTA button |
| Footer Brand | ~20–22px | ~24px | `fill2` (`#1a1c1c`) | "AI Skills Lab" |
| Footer Copyright | ~20–22px | ~24px | `fill8` (`#895033`) | Copyright text |
| Footer Link | ~20–22px | ~24px | `fill3` (`#564338`) | Social links |

### Suggested CSS (placeholder — confirm with designer)

```css
/* Typography — placeholders pending confirmation */
:root {
  --font-family: /* TBD — confirm from Figma */;
  --font-size-display: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --font-size-body: 16px;
  --font-size-tag: 12px;
  --font-size-nav: 24px;
  --font-size-button: 24px;
  --font-size-footer: 20px;

  --line-height-display: 53px;
  --line-height-h2: 42px;
  --line-height-h3: 34px;
  --line-height-body: 24px;
  --line-height-tag: 13px;
  --line-height-nav: 31px;
  --line-height-button: 31px;
  --line-height-footer: 24px;
}
```

---

## Images & Assets

| Name | Node ID | Size | Type | Usage |
|------|---------|------|------|-------|
| AI Skills Lab Logo | `1:346` | 40 × 40px | Image | Logo in navbar |
| Icon (arrow) | `1:294`, `1:311`, `1:328` | 9.33 × 9.33px | Image | CTA arrow icons ("Leer") |
| image 2 | `2:365` | 794 × 794px | Standalone asset | Purpose unclear — likely featured image |
| image 3 | `2:368` | 1024 × 1024px | Standalone asset | Purpose unclear — likely featured image |

> **Action needed**: Export logo and arrow icons from Figma. Determine purpose of `image 2` and `image 3`.

---

## Page Structure

### Main Frame Anatomy

**Node**: `1:265` (Html → Body)
**Size**: 1280 × 1314.56px
**Background**: `#ffffff`
**Layout**: No auto-layout on root

```
Html → Body (1:265) — 1280 × 1314.56px, #ffffff
├── TopNavBar (1:343) — 1280 × 81px
├── Main (1:266) — 1280 × 1000.49px
│   ├── Header - Hero Section (1:267) — 720 × 199.3px
│   │   ├── Heading 1 (1:268) — 720 × 106px
│   │   └── Container (1:270) — 672 × 62px (subtitle)
│   └── Section - Main Content (1:272) — 1152 × 449.79px
│       ├── Section Header (1:273) — 1152 × 41.59px
│       │   ├── H2 "Skills que molan" (1:275)
│       │   └── Horizontal Divider (1:276) — 895.31 × 1px
│       └── Cards Row (1:277) — 1152 × 344.19px
│           ├── Card 1 (1:278) — 368 × 344px
│           ├── Card 2 (1:295) — 368 × 344px
│           └── Card 3 (1:312) — 368 × 344px
└── Footer (1:329) — 1280 × 153px
```

---

### TopNavBar

**Node**: `1:343`
**Size**: 1280 × 81px (80px content + 1px bottom border)
**Background**: `#faf9f8` (`fill5`)
**Border**: `#ddc1b3` 1px inside (`stroke2`)
**Layout**: Vertical, gap: 0

#### Child — Container (`1:344`)

- **Size**: 1280 × 80px
- **Layout**: Horizontal, `space-between`, center-aligned
- **Padding**: 0 / 64px / 0 / 64px

| Section | Node | Size | Layout | Content |
|---------|------|------|--------|---------|
| **Left — Logo** | `1:345` | 181.38 × 40px | Horizontal, gap 16, center | Logo image (40×40) + Brand text "AI Skills Lab" |
| **Center — Nav Links** | `1:349` | 433.81 × 37px | Horizontal, gap 32, center | Inicio, Skills, Biblioteca, Sobre el Laboratorio |
| **Right — CTA** | `1:358` | 137.98 × 47px | Button | "Suscribirse" |

#### Nav Link States

| Link | Text Color | Border | State |
|------|------------|--------|-------|
| Inicio | `#903f00` | `#903f00` 1px bottom | **Active** |
| Skills | `#564338` | none | Default |
| Biblioteca | `#564338` | none | Default |
| Sobre el Laboratorio | `#564338` | none | Default |

---

### Main Content

**Node**: `1:266`
**Size**: 1280 × 1000.49px
**Layout**: Vertical, gap: 128px, center-justified
**Padding**: 95.4px / 64px / 128px / 64px

#### Hero Section

**Node**: `1:267`
**Size**: 720 × 199.3px (centered within Main)
**Layout**: Vertical, gap: 31.3px, center-justified

| Element | Node | Size | Content |
|---------|------|------|---------|
| Heading 1 | `1:268` | 720 × 106px | "Dominando la IA: Del Prompt a la Automatización" |
| Subtitle | `1:270` | 672 × 62px | "Un espacio personal donde exploro las herramientas de IA que de verdad valen la pena. Sin ruido, solo curiosidad." |

> **Note**: H1 has a `#000000` 1px border (`stroke1`) — likely a Figma selection artifact. Confirm before production.

#### Section — Main Content

**Node**: `1:272`
**Size**: 1152 × 449.79px
**Layout**: Vertical, gap: 64px

##### Section Header (`1:273`)

- **Size**: 1152 × 41.59px
- **Layout**: Horizontal, gap: 16px, center-aligned
- **Children**: H2 "Skills que molan" + Horizontal Divider (1px, `#ddc1b3`, 895.31px wide)

##### Cards Row (`1:277`)

- **Size**: 1152 × 344.19px
- **Layout**: Horizontal, gap: 24px, center-aligned
- **3 Article Cards** (each 368 × 344px)

---

### Footer

**Node**: `1:329`
**Size**: 1280 × 153px
**Background**: `#f4f3f2` (`fill6`)
**Border**: `#ddc1b3` 1px inside (`stroke2`)
**Layout**: Vertical, gap: 0
**Padding**: 48px / 0 / 48px / 0

#### Child — Container (`1:330`)

- **Size**: 1280 × 56px
- **Layout**: Horizontal, `space-between`, center
- **Padding**: 0 / 64px / 0 / 64px

| Section | Content |
|---------|---------|
| **Left — Brand** | "AI Skills Lab" (`#1a1c1c`) + "© 2024 AI Skills Lab. El explorador digital de la curiosidad humana." (`#895033`) |
| **Right — Links** | LinkedIn, GitHub, Newsletter (`#564338`, horizontal, gap 24px) |

---

## Component Inventory

### 1. TopNavBar

| Property | Value |
|----------|-------|
| **Height** | 81px (80px + 1px border) |
| **Background** | `#faf9f8` |
| **Border** | `#ddc1b3` 1px bottom |
| **Layout** | Horizontal, `space-between`, 64px horizontal padding |
| **Children** | Logo + Brand text · Nav links (gap 32) · CTA Button |

**States**:
- Default: links in `#564338`
- Active: link in `#903f00` + 1px bottom border in `#903f00`

---

### 2. CTA Button

| Property | Value |
|----------|-------|
| **Size** | ~138 × 47px (auto from content + padding) |
| **Background** | `#903f00` |
| **Text** | `#ffffff`, centered |
| **Padding** | 8px vertical, 24px horizontal |
| **Border Radius** | 2px |
| **States** | Default only visible in design |

---

### 3. Article Card

| Property | Value |
|----------|-------|
| **Size** | 368 × 344px (fixed in 3-column row) |
| **Background** | `#faf9f8` |
| **Border** | `#ddc1b3` 1px |
| **Border Radius** | 2px |
| **Padding** | 24px all sides |
| **Layout** | Vertical, gap: 0 |

**Anatomy (top to bottom)**:

1. **Margin** — 16px space below tags
2. **Tags Container** — horizontal, gap: 8px
   - Tag badges: `#f4f3f2` bg, `#ddc1b3` border, `#903f00` text, radius 2px, padding 4/8/4/8
3. **Title** — H3, `#1a1c1c`, ~28–32px
4. **Description Margin** — 32px space below body text
   - Body text, `#564338`, ~16–18px
5. **"Leer" Link** — horizontal, gap: 4px, center
   - Text "Leer" in `#903f00`
   - Arrow icon (9.33 × 9.33px, `#903f00`)

---

### 4. Tag Badge

| Property | Value |
|----------|-------|
| **Background** | `#f4f3f2` |
| **Border** | `#ddc1b3` 1px |
| **Text** | `#903f00`, ~12–13px |
| **Padding** | 4px vertical, 8px horizontal |
| **Border Radius** | 2px |

---

### 5. "Leer" Link

| Property | Value |
|----------|-------|
| **Text** | "Leer" in `#903f00` |
| **Icon** | Arrow right, 9.33 × 9.33px, `#903f00` |
| **Gap** | 4px between text and icon |
| **Layout** | Horizontal, center-aligned |

---

### 6. Horizontal Divider

| Property | Value |
|----------|-------|
| **Width** | Flexible (fills container) |
| **Height** | 1px |
| **Color** | `#ddc1b3` |

---

### 7. Footer

| Property | Value |
|----------|-------|
| **Background** | `#f4f3f2` |
| **Border** | `#ddc1b3` 1px top |
| **Padding** | 48px vertical |
| **Layout** | Horizontal, `space-between`, 64px horizontal padding |
| **Left** | Brand + copyright |
| **Right** | Social links (LinkedIn, GitHub, Newsletter) |

---

## Content Inventory

### Navigation Links

| Label | Node ID | State |
|-------|---------|-------|
| Inicio | `1:351` | Active |
| Skills | `1:353` | Default |
| Biblioteca | `1:355` | Default |
| Sobre el Laboratorio | `1:357` | Default |

### Hero

| Field | Content |
|-------|---------|
| **Title** | Dominando la IA: Del Prompt a la Automatización |
| **Subtitle** | Un espacio personal donde exploro las herramientas de IA que de verdad valen la pena. Sin ruido, solo curiosidad. |

### Article Cards

| # | Title | Tags | Description |
|---|-------|------|-------------|
| 1 | Dominando Prompts Estructurales | Prompting, Productividad | Descubre cómo construir instrucciones precisas y predecibles. Un enfoque casi arquitectónico para hablar con modelos de lenguaje y obtener exactamente lo que necesitas, sin alucinaciones. |
| 2 | Automatización Humana | Automation, Python | Pequeños scripts que ahorran horas. Cómo delegar tareas repetitivas a la máquina para liberar espacio mental para lo que realmente importa: el trabajo creativo y estratégico. |
| 3 | La Estética de lo Invisible | Diseño, Opinión | Por qué el mejor diseño asistido por IA es aquel que no parece hecho por IA. Huyendo del "slop" visual hacia una estética más editorial, humana e imperfecta. |

### Footer

| Field | Content |
|-------|---------|
| **Brand** | AI Skills Lab |
| **Copyright** | © 2024 AI Skills Lab. El explorador digital de la curiosidad humana. |
| **Links** | LinkedIn, GitHub, Newsletter |

---

## Patterns & Guidelines

### Do

- Use the warm brown palette consistently:
  - `#1a1c1c` for headings
  - `#564338` for body text
  - `#903f00` for CTAs and accent elements
- Keep card layout as a 3-column grid with 24px gap
- Use `2px` border-radius universally (cards, tags, buttons)
- Maintain 64px horizontal padding on main content areas
- Use `#f4f3f2` for muted surfaces (tags, footer)
- Keep tag badges small with 4/8px padding
- Use flat borders instead of box shadows

### Don't

- Don't use pure black (`#000000`) for text — use `#1a1c1c`
- Don't use large border-radius — the design is editorial/minimal with 2px max
- Don't add drop shadows — the design uses flat borders instead
- Don't use heavy visual effects — the aesthetic is clean and editorial
- Don't deviate from the warm brown palette with unrelated colors

### Design Principles

The AI Skills Lab blog follows an **editorial, minimal** aesthetic:

- **Warmth**: The brown palette creates an inviting, human feel
- **Clarity**: Clean typography hierarchy with generous spacing
- **Simplicity**: Flat design with subtle borders, no shadows or gradients
- **Consistency**: Uniform `2px` radius, consistent padding patterns

---

## Responsive Hints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| **Desktop** | 1280px | Primary design — fully specified |
| **Content max-width** | 1152px | Constrained within 1280px frame |
| **Hero max-width** | 720px | Centered within Main |
| **Cards** | 368px each | 3-column grid (368 × 3 + 24 × 2 = ~1152px) |
| **Nav padding** | 64px horizontal | Consistent across breakpoints |

> **Note**: Only desktop (1280px) is designed. Mobile and tablet breakpoints need separate designs.

---

## Open Questions / Gaps

| # | Question | Priority | Status |
|---|----------|----------|--------|
| 1 | **Font family**: Not available in the Figma simplified export. Must be confirmed from the Figma file directly. | High | Open |
| 2 | **Exact font sizes**: Inferred from bounding boxes. Designer should confirm exact px values from Figma's text style panel. | High | Open |
| 3 | **Font weights**: Not available in export. Likely: Regular (400) for body, Medium/SemiBold (500–600) for headings, Bold (700) for H1. | High | Open |
| 4 | **Active nav state**: The `#903f00` bottom border on "Inicio" — confirm if this is an underline or a full border-box. | Medium | Open |
| 5 | **Heading 1 border**: The `#000000` 1px border on the H1 frame (`1:268`) may be a Figma selection artifact, not intended in production. Confirm with designer. | Medium | Open |
| 6 | **Image assets**: `image 2` (794×794) and `image 3` (1024×1024) are standalone assets — their purpose in the design is unclear. May be blog post featured images. | Medium | Open |
| 7 | **Logo image**: The AI Skills Lab logo (40×40) — need to export from Figma for implementation. | High | Open |
| 8 | **Arrow icon**: The 9.33×9.33px arrow icons for "Leer" CTAs — need to export or define as SVG. | High | Open |
| 9 | **Mobile/responsive breakpoints**: Only desktop (1280px) is designed. Need mobile and tablet designs. | High | Open |
| 10 | **Hover/focus states**: Only default and active (nav) states are visible. Need hover, focus, and disabled states for buttons, links, and cards. | High | Open |

---

## Appendix: Raw Node Data

### Node `1:265` (Html → Body) — Full Child Tree

```
1:265 — Html → Body (1280 × 1314.56px, #ffffff)
├── 1:343 — TopNavBar (1280 × 81px, #faf9f8, #ddc1b3 1px border)
│   └── 1:344 — Container (1280 × 80px, horizontal, space-between, 0/64/0/64)
│       ├── 1:345 — Logo container (181.38 × 40px, horizontal, gap 16)
│       │   ├── 1:346 — AI Skills Lab Logo (40 × 40px, image)
│       │   └── 1:348 — Brand text "AI Skills Lab" (#1a1c1c)
│       ├── 1:349 — Nav links (433.81 × 37px, horizontal, gap 32)
│       │   ├── 1:351 — "Inicio" (active: #903f00 + border)
│       │   ├── 1:353 — "Skills" (#564338)
│       │   ├── 1:355 — "Biblioteca" (#564338)
│       │   └── 1:357 — "Sobre el Laboratorio" (#564338)
│       └── 1:358 — CTA Button (137.98 × 47px, #903f00 bg)
│           └── "Suscribirse" (#ffffff, 8/24/8/24 padding, 2px radius)
├── 1:266 — Main (1280 × 1000.49px, vertical, gap 128, 95.4/64/128/64)
│   ├── 1:267 — Hero Section (720 × 199.3px, vertical, gap 31.3)
│   │   ├── 1:268 — Heading 1 (720 × 106px, #1a1c1c, ~48-52px)
│   │   └── 1:270 — Subtitle (672 × 62px, #564338, ~28-30px)
│   └── 1:272 — Main Content (1152 × 449.79px, vertical, gap 64)
│       ├── 1:273 — Section Header (1152 × 41.59px, horizontal, gap 16)
│       │   ├── 1:275 — H2 "Skills que molan" (#1a1c1c, ~36-40px)
│       │   └── 1:276 — Divider (895.31 × 1px, #ddc1b3)
│       └── 1:277 — Cards Row (1152 × 344.19px, horizontal, gap 24)
│           ├── 1:278 — Card 1 (368 × 344px)
│           │   ├── Tags: "Prompting", "Productividad"
│           │   ├── Title: "Dominando Prompts Estructurales"
│           │   ├── Description: "Descubre cómo construir..."
│           │   └── Link: "Leer" + arrow
│           ├── 1:295 — Card 2 (368 × 344px)
│           │   ├── Tags: "Automation", "Python"
│           │   ├── Title: "Automatización Humana"
│           │   ├── Description: "Pequeños scripts que ahorran horas..."
│           │   └── Link: "Leer" + arrow
│           └── 1:312 — Card 3 (368 × 344px)
│               ├── Tags: "Diseño", "Opinión"
│               ├── Title: "La Estética de lo Invisible"
│               ├── Description: "Por qué el mejor diseño..."
│               └── Link: "Leer" + arrow
└── 1:329 — Footer (1280 × 153px, #f4f3f2, #ddc1b3 1px border, 48/0/48/0)
    └── 1:330 — Container (1280 × 56px, horizontal, space-between, 0/64/0/64)
        ├── 1:331 — Brand
        │   ├── 1:333 — "AI Skills Lab" (#1a1c1c)
        │   └── 1:335 — "© 2024 AI Skills Lab..." (#895033)
        └── 1:336 — Links (horizontal, gap 24)
            ├── 1:338 — "LinkedIn" (#564338)
            ├── 1:340 — "GitHub" (#564338)
            └── 1:342 — "Newsletter" (#564338)
```

---

## Appendix: CSS Variables Reference

```css
:root {
  /* ── Colors ── */
  --color-white: #ffffff;
  --color-text-primary: #1a1c1c;
  --color-text-secondary: #564338;
  --color-text-tertiary: #895033;
  --color-border: #ddc1b3;
  --color-surface: #faf9f8;
  --color-surface-muted: #f4f3f2;
  --color-accent: #903f00;

  /* ── Typography (placeholders — confirm from Figma) ── */
  --font-family: /* TBD */;
  --font-size-display: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --font-size-body: 16px;
  --font-size-tag: 12px;
  --font-size-nav: 24px;
  --font-size-button: 24px;
  --font-size-footer: 20px;

  /* ── Spacing Scale ── */
  --space-0: 0px;
  --space-4: 4px;
  --space-8: 8px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-64: 64px;
  --space-128: 128px;

  /* ── Layout ── */
  --max-width-frame: 1280px;
  --max-width-content: 1152px;
  --max-width-hero: 720px;
  --card-width: 368px;
  --card-height: 344px;
  --nav-height: 81px;

  /* ── Borders ── */
  --border-radius: 2px;
  --border-width: 1px;
  --border-color: var(--color-border);
}
```

---

*This design spec was auto-generated from Figma file `DCQmQajBGwXDYBSM11I05r` (blog) on 2026-08-20 using Composio CLI + Figma API. Font sizes are inferred from bounding box dimensions and should be verified against the Figma source.*

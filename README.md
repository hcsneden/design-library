# design-library

A clean, variant-based React component library. Built for reuse across projects with a consistent API and a token-driven theming system that makes swapping visual styles trivial.

Works with TypeScript and vanilla JS React projects. No CSS imports required.

---

## Install

```bash
npm install design-library
# or
yarn add design-library
```

React 17+ is a peer dependency and must be installed separately.

---

## Usage

Wrap your app with `ThemeProvider` and pass a theme variant:

```tsx
import { ThemeProvider, monochrome } from 'design-library'

export const App = () => (
  <ThemeProvider theme={monochrome}>
    <YourApp />
  </ThemeProvider>
)
```

Then use components anywhere inside the provider:

```tsx
import { Button, Input, Typography, Card, Badge, Divider } from 'design-library'

// Button
<Button variant="primary" size="md">Get started</Button>
<Button variant="outline">Learn more</Button>
<Button variant="ghost" disabled>Unavailable</Button>

// Input
<Input label="Email" placeholder="you@example.com" helperText="We will never share your email." />
<Input label="Password" type="password" error="Password is required." />

// Typography
<Typography variant="display">Hero heading</Typography>
<Typography variant="h2">Section title</Typography>
<Typography variant="body">Body copy with comfortable line height.</Typography>
<Typography variant="caption" muted>Supporting note</Typography>

// Card
<Card shadow>
  <CardHeader title="Card title" subtitle="Supporting line" />
  <CardContent>
    <Typography variant="body">Card content goes here.</Typography>
  </CardContent>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>

// Badge
<Badge>New</Badge>
<Badge variant="outline">Beta</Badge>
<Badge variant="subtle">Draft</Badge>

// Divider
<Divider />
<Divider label="or" />
<Divider orientation="vertical" />
```

---

## Variants

Variants are theme objects that define all visual tokens: color, typography, spacing, radius, and shadow. Components never contain variant-specific logic - swapping a variant changes the entire look without touching component code.

### Adding a custom variant

```tsx
import type { Theme } from 'design-library'

export const myTheme: Theme = {
  name: 'my-theme',
  colors: {
    bg: '#f0f4ff',
    fg: '#0f172a',
    // ...
  },
  fonts: {
    sans: "'Inter', sans-serif",
    serif: "'Playfair Display', serif",
  },
  // ...
}
```

---

### Monochrome

A clean black and white variant with editorial typography. Headings use **DM Serif Display** (a refined, elegant serif) and body text uses **Inter** (highly readable sans-serif). Designed for portfolios, blogs, and professional sites where content clarity is the priority.

Add these fonts to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

**Typography scale**

```
Display   — DM Serif Display, 52px, weight 400, tracking -0.02em
H1        — DM Serif Display, 38px, weight 400
H2        — DM Serif Display, 30px, weight 400
H3        — Inter, 24px, weight 600
H4        — Inter, 20px, weight 600
Body      — Inter, 15px, weight 400, line-height 1.65
Caption   — Inter, 11px, muted gray
```

**Visual examples**

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  The art of clear design                        │  ← Display
│                                                 │
│  Functionality refined to its essence.          │  ← Body
│  Space that breathes. Type that speaks.         │
│                                                 │
│  ┌──────────────┐  ┌────────────────────┐       │
│  │  Get started │  │    Learn more      │       │
│  └──────────────┘  └────────────────────┘       │
│  (primary btn)      (outline btn)               │
│                                                 │
└─────────────────────────────────────────────────┘

Colors:   #0a0a0a (fg)  #ffffff (bg)  #737373 (muted)
Radius:   4px (sm)  8px (md)  12px (lg)
```

```
┌────────────────────────────────────┐
│                                    │  ← Card with shadow
│  Project title              [New]  │  ← H4 + Badge
│  A short supporting line.          │  ← Body-sm muted
│                                    │
│  ─────────────────────────────     │  ← Divider
│                                    │
│  Body copy that explains the       │
│  key details clearly.              │
│                                    │
├────────────────────────────────────┤
│  [  Action  ]                      │  ← CardFooter + Button
└────────────────────────────────────┘
```

---

## Publishing

Update the `name` field in `package.json` to your npm scope before publishing:

```json
{ "name": "@yourusername/design-library" }
```

Then:

```bash
npm login
npm publish --access public
```

The `prepublishOnly` script runs `build` and `type-check` automatically.

---

## Development

```bash
npm install
npm run dev       # watch mode
npm run build     # production build
npm test          # run tests
npm run test:coverage
npm run type-check
```

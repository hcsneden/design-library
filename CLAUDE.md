# Design Library - Claude Ruleset

## Project Overview

A React component library with a variant-based theming system. The primary goal is a clean, portfolio-quality codebase that is reusable across projects. It must support both TypeScript and vanilla JS React consumers.

## Code Conventions

- Arrow functions only. Never `function` keyword for components or utilities.
- No class components. Functional components with hooks only.
- Types should be simple unless complexity adds real business value.
- Reuse helpers and utilities. No duplicate logic across components.
- Remove all dead code. No unused imports, exports, or variables.
- No code comments. Code should be self-documenting through clear naming.
- No `// TODO` or `// FIXME` left in committed code.

## Architecture

### Component Structure
Each component lives in `src/components/ComponentName/`:
- `ComponentName.tsx` - the component implementation
- `index.ts` - re-exports the component and its types

### Style System
Styles are injected into `document.head` via `injectStyle(id, css)` from `src/utils/injectStyle.ts`. This approach:
- Requires no CSS imports on the consumer side
- Scopes styles with the `.dl-` prefix to avoid collisions
- Is SSR-safe (guards on `typeof document`)
- Deduplicates injections using a module-level Set

Components call `injectStyle('componentName', css)` at the top of the component body. CSS uses CSS custom properties (`var(--dl-*)`) for all theme values.

### Theme System
Themes live in `src/themes/variants/`. Each is a `Theme` object that satisfies the `Theme` interface in `src/themes/types.ts`.

`ThemeProvider` converts a `Theme` to CSS custom properties set on a wrapper `div` via the `style` prop. This scopes all tokens to within the provider.

**Current variants:**
- `monochrome` - clean black and white with DM Serif Display + Inter typography

### CSS Token Naming
All tokens follow `--dl-{category}-{name}`:
- Colors: `--dl-color-bg`, `--dl-color-fg`, `--dl-color-muted`, `--dl-color-border`, `--dl-color-border-hover`, `--dl-color-accent`, `--dl-color-accent-fg`, `--dl-color-surface`, `--dl-color-surface-hover`, `--dl-color-error`, `--dl-color-success`
- Fonts: `--dl-font-sans`, `--dl-font-serif`
- Radius: `--dl-radius-sm`, `--dl-radius-md`, `--dl-radius-lg`, `--dl-radius-full`
- Shadows: `--dl-shadow-sm`, `--dl-shadow-md`
- Font sizes: `--dl-font-size-xs` through `--dl-font-size-5xl`

### Build
`tsup` produces CJS (`dist/index.js`), ESM (`dist/index.mjs`), and TypeScript declarations (`dist/index.d.ts`). React is an external peer dependency and is never bundled.

## Design Principles (from research)

These principles must guide all component and variant work.

### Purposeful Simplicity
Clean UI is not sparse UI. Every element must justify its presence. Removing an element should only happen when it fails to serve the user, not to meet a minimalism quota. Incomplete or confusing interfaces are worse than complete ones.

### Whitespace as Structure
Generous whitespace creates hierarchy and breathing room. Default to more padding and margin, not less. The 4px/8px token system should be the foundation for all spacing decisions.

### Typography as the Primary Visual Element
Large, expressive headings anchored by restrained body text. Use weight, size, and letter-spacing for hierarchy instead of decorative elements. Maximum two font families per variant.

### Consistent Tokens
All visual decisions - color, spacing, radius, shadow, type - should reference design tokens. Never hardcode values inside components. This makes variants trivially easy to create.

### 60-30-10 Color Rule
- 60% dominant (background/surface)
- 30% complementary (text/structure)
- 10% accent (actions/CTAs only)

### Black and White First
Design components without color first. Introduce color only for emphasis, hierarchy, or semantic meaning (error states, etc.). This ensures the monochrome variant works perfectly and other variants are clean additions.

### No Trends
Avoid trendy design patterns that will date quickly. Prefer timeless fundamentals: clear hierarchy, sufficient contrast, readable type, consistent spacing.

### Calm Interfaces
Reduce cognitive load. Clear headings, short descriptions, obvious primary actions, sufficient spacing. Motion should explain change, not decorate.

### Accessibility
- WCAG AA contrast ratios minimum
- All interactive elements must have focus-visible states
- Use semantic HTML elements (correct heading levels, button vs div, etc.)
- ARIA attributes where needed (aria-invalid, aria-describedby, aria-label)

## Adding a New Variant

1. Create `src/themes/variants/variantName.ts` that exports a `Theme` object
2. Export it from `src/themes/index.ts`
3. Add font imports to the README documentation section for that variant
4. Add a visual example to the README

Variants only define tokens. Components never contain variant-specific logic.

## Adding a New Component

1. Create `src/components/ComponentName/ComponentName.tsx`
2. Create `src/components/ComponentName/index.ts` with re-exports
3. Add to `src/components/index.ts` barrel
4. Add tests in `tests/components/ComponentName.test.tsx`
5. All interactive CSS states (hover, focus, disabled) must be handled in the injected CSS

## Testing Standards

- Test runner: Jest + React Testing Library
- Tests live in `tests/` (separate from `src/`)
- Shared render wrapper in `tests/helpers/render.tsx` wraps with `ThemeProvider`
- Shared test data in `tests/testData/index.ts`
- Target ~60% coverage
- Test behavior, not implementation. Query by role, label, text - not class names (except when testing that a class is applied, which is valid for a component library).
- No snapshot tests.

## Publishing

Build with `npm run build`, then `npm publish`. The `prepublishOnly` script runs the build and type-check automatically.

Before publishing for the first time:
1. Update `name` in `package.json` to your npm scope: `@yourusername/design-library`
2. Add the font CDN links to your project or tell consumers to add them
3. Run `npm login` and `npm publish --access public`

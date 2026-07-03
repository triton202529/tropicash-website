# Atlantic Design System

The Atlantic Design System is the foundational design token layer for the Tropicash Corporate Website.

## Overview

Atlantic provides consistent visual language across the corporate site through:

- Color tokens
- Typography tokens
- Spacing scale
- Border radius
- Shadow tokens
- Component variants (Button, Card)

## Token Locations

| Token Type   | CSS                              | TypeScript                    |
| ------------ | -------------------------------- | ----------------------------- |
| Colors       | `styles/tokens/colors.css`       | `lib/design-system/tokens.ts` |
| Typography   | `styles/tokens/typography.css`   | `lib/design-system/tokens.ts` |
| Spacing      | `styles/tokens/spacing.css`      | `lib/design-system/tokens.ts` |
| Radius       | `styles/tokens/radius.css`       | `lib/design-system/tokens.ts` |
| Shadows      | `styles/tokens/shadows.css`      | `lib/design-system/tokens.ts` |

CSS tokens are imported via `styles/atlantic.css` and wired into Tailwind through `app/globals.css`.

## Color Palette

### Atlantic (Primary)

Ocean-inspired blue scale for primary actions and brand accents.

- `--color-atlantic-50` through `--color-atlantic-950`

### Neutral

Slate-based neutral scale for text, borders, and surfaces.

- `--color-neutral-50` through `--color-neutral-950`

### Semantic

- `--color-success` / `--color-warning` / `--color-error` / `--color-info`

### Surface Tokens

Semantic aliases mapped for component use:

- `--color-background`, `--color-foreground`
- `--color-muted`, `--color-muted-foreground`
- `--color-border`, `--color-ring`
- `--color-primary`, `--color-primary-foreground`
- `--color-secondary`, `--color-secondary-foreground`
- `--color-accent`, `--color-accent-foreground`

Dark mode overrides apply when `[data-theme="dark"]` is set on the document root.

## Typography

- **Sans**: Inter (via `next/font/google`)
- **Mono**: System monospace stack

Font sizes from `--font-size-xs` (0.75rem) to `--font-size-6xl` (3.75rem).

## Spacing

Consistent spacing scale from `--spacing-0` to `--spacing-32`.

Container breakpoints:

| Token            | Value    |
| ---------------- | -------- |
| `--container-sm` | 640px    |
| `--container-md` | 768px    |
| `--container-lg` | 1024px   |
| `--container-xl` | 1280px   |
| `--container-2xl`| 1440px   |

## Border Radius

`--radius-sm` through `--radius-3xl`, plus `--radius-full`.

## Shadows

`--shadow-xs` through `--shadow-2xl`, with dark-mode adjusted values.

## Component Variants

### Button (`components/ui/button.tsx`)

| Variant   | Usage                        |
| --------- | ---------------------------- |
| `primary` | Primary call-to-action       |
| `secondary` | Secondary actions          |
| `outline` | Bordered, transparent bg     |
| `ghost`   | Minimal, hover background    |
| `link`    | Text link style              |

Sizes: `sm`, `md`, `lg`

### Card (`components/ui/card.tsx`)

| Variant    | Usage                       |
| ---------- | --------------------------- |
| `default`  | Standard card with border   |
| `elevated` | Card with medium shadow     |
| `outlined` | Transparent with thick border |

Subcomponents: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

## Usage in Tailwind

Tokens are exposed as Tailwind theme values. Examples:

```tsx
<div className="bg-background text-foreground border-border" />
<button className="bg-primary text-primary-foreground" />
<p className="text-muted-foreground" />
```

## Branding Assets

Logo, favicon, and icon files belong in `branding/` subdirectories. Do not redesign the Tropicash logo in this project — use official brand assets when available.

## Programmatic Access

```ts
import { colors, spacing, radius, shadows, typography } from "@/lib/design-system";
```

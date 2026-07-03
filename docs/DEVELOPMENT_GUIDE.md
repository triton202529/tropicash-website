# Development Guide

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

```bash
cd tropicash-website
npm install
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable               | Description                          | Default                 |
| ---------------------- | ------------------------------------ | ----------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO metadata  | `https://tropicash.com` |

Create a `.env.local` file for local overrides:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
npx tsc --noEmit # TypeScript check
```

## Adding a New Page

1. Create a directory under `app/` with a `page.tsx` file.
2. Export page-level `metadata` for SEO.
3. Wrap content in `PageContainer`.
4. Add navigation links in `lib/navigation.ts` if needed.

Example:

```tsx
import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Page Title",
};

export default function ExamplePage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-semibold tracking-tight">Page Title</h1>
    </PageContainer>
  );
}
```

## Using Design Tokens

Prefer Tailwind utility classes backed by Atlantic tokens:

```tsx
<div className="rounded-xl border border-border bg-background p-6 shadow-sm">
  <p className="text-muted-foreground">Content</p>
</div>
```

For programmatic access, import from `@/lib/design-system`.

## Components

### Layout

- `GlobalNavigation` — site header (included in root layout)
- `GlobalFooter` — site footer (included in root layout)
- `PageContainer` — responsive content wrapper

### UI

- `Button` / `ButtonLink` — button variants
- `Card` — card variants with header/content/footer subcomponents

## Responsive Breakpoints

| Breakpoint | Min Width | Tailwind Prefix |
| ---------- | --------- | --------------- |
| Mobile     | 0         | (default)       |
| Tablet     | 768px     | `md:`           |
| Desktop    | 1024px    | `lg:`           |

`PageContainer` uses responsive padding: `px-4` (mobile), `md:px-6` (tablet), `lg:px-8` (desktop).

## Theme

The `ThemeProvider` supports `light`, `dark`, and `system` themes. Theme preference is stored in `localStorage` under `tropicash-theme`.

## Code Conventions

- Use TypeScript strict mode
- Prefer Server Components unless client interactivity is required
- Mark client components with `"use client"`
- Keep page files thin — extract reusable UI to `components/`
- Use semantic HTML and accessible labels

## What Not to Build Here

This is the corporate website foundation only. Do not add:

- Wallet functionality
- Admin dashboard features
- Developer console features
- Marketing homepage sections (future phases)

## Git Workflow

This project has its own Git repository, separate from the Tropicash wallet application.

Commit messages follow the phase prefix pattern:

```
W-000: initialize Tropicash corporate website foundation
W-001: add homepage hero section
```

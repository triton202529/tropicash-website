# Website Architecture

## Purpose

The Tropicash Corporate Website is the official public-facing presence for:

- Customers
- Businesses
- Developers
- Payment providers
- Banks
- Partners
- Investors

This project is a **standalone** Next.js application. It is not the wallet, admin dashboard, or developer console.

## Technology Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Framework   | Next.js 16 (App Router)       |
| UI          | React 19                      |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS v4               |
| Linting     | ESLint (eslint-config-next)   |

## Directory Structure

```
tropicash-website/
├── app/                    # Routes and layouts (App Router)
│   ├── layout.tsx          # Root layout with nav, footer, theme
│   ├── page.tsx            # Home
│   ├── about/
│   ├── platform/
│   ├── developers/
│   ├── security/
│   ├── partnerships/
│   ├── company/
│   ├── contact/
│   └── legal/
├── components/
│   ├── layout/             # GlobalNavigation, GlobalFooter, PageContainer
│   ├── providers/          # ThemeProvider
│   └── ui/                 # Button, Card variants
├── branding/               # Brand asset placeholders
├── public/                 # Static files
├── styles/                 # Atlantic Design System CSS tokens
├── lib/
│   ├── design-system/      # Token exports (TypeScript)
│   ├── metadata.ts         # SEO defaults
│   └── navigation.ts       # Nav link configuration
└── docs/                   # Project documentation
```

## Layout Architecture

The root layout (`app/layout.tsx`) composes:

1. **ThemeProvider** — light/dark/system theme via `data-theme` attribute
2. **GlobalNavigation** — sticky header with primary nav links
3. **Page content** — route-specific children
4. **GlobalFooter** — site-wide footer with link groups

All pages use `PageContainer` for consistent responsive padding and max-width.

## Routing

Routes are file-based via the App Router. Each public section has a designed page with route-level metadata. See [Launch Readiness Review](./WEBSITE_LAUNCH_READINESS.md) for the complete route inventory.

## SEO & Metadata

Global defaults live in `lib/metadata.ts`:

- `metadataBase` for canonical URLs
- Title template (`%s | Tropicash`)
- Open Graph and Twitter card defaults
- Robots configuration

Individual routes export page-level `metadata` overrides.

## Performance & Accessibility

Foundation prepared for:

- Server Components by default
- `display: swap` font loading
- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`)
- Focus-visible styles
- `prefers-reduced-motion` support
- Responsive breakpoints (mobile, tablet, desktop)

## Deployment

The site is independently deployable. Set `NEXT_PUBLIC_SITE_URL` for production metadata base URLs.

## Relationship to Other Projects

| Project              | Relationship                          |
| -------------------- | ------------------------------------- |
| Tropicash Wallet     | Separate application — do not modify  |
| Admin Dashboard      | Separate application                  |
| Developer Console    | Separate application                  |
| Corporate Website    | **This project**                      |

# Tropicash Corporate Website — Manual QA Checklist

Use this checklist before internal review, pre-deployment, or any content update release.

---

## Route QA

Visit each route at **desktop (1280px)**, **tablet (768px)**, and **mobile (375px)**.

| Route | Loads | Layout OK | No placeholder text | Hero readable | Notes |
| ----- | ----- | --------- | ------------------- | ------------- | ----- |
| `/` | ☐ | ☐ | ☐ | ☐ | |
| `/about` | ☐ | ☐ | ☐ | ☐ | |
| `/platform` | ☐ | ☐ | ☐ | ☐ | |
| `/developers` | ☐ | ☐ | ☐ | ☐ | |
| `/security` | ☐ | ☐ | ☐ | ☐ | |
| `/partnerships` | ☐ | ☐ | ☐ | ☐ | |
| `/company` | ☐ | ☐ | ☐ | ☐ | |
| `/contact` | ☐ | ☐ | ☐ | ☐ | |
| `/legal` | ☐ | ☐ | ☐ | ☐ | |

**Pass criteria:** All routes return 200, no broken layout, no admin-console or fake dashboard appearance.

---

## Link QA

### Global navigation

| Element | Target | OK |
| ------- | ------ | -- |
| Tropicash logo/name | `/` | ☐ |
| Platform | `/platform` | ☐ |
| Developers | `/developers` | ☐ |
| Security | `/security` | ☐ |
| Partnerships | `/partnerships` | ☐ |
| Company | `/company` | ☐ |
| Contact (header) | `/contact` | ☐ |
| Get Started | `/contact` | ☐ |

### Footer

| Link | Target | OK |
| ---- | ------ | -- |
| Platform | `/platform` | ☐ |
| Developers | `/developers` | ☐ |
| Security | `/security` | ☐ |
| About | `/about` | ☐ |
| Company | `/company` | ☐ |
| Partnerships | `/partnerships` | ☐ |
| Contact | `/contact` | ☐ |
| Legal | `/legal` | ☐ |

**Pass criteria:** No `href="#"`, no dead buttons, no broken external links.

---

## CTA QA

Spot-check primary and secondary CTAs on each page.

| Label pattern | Expected target |
| ------------- | --------------- |
| Explore Platform / Explore the Platform | `/platform` |
| View Developer Platform | `/developers` |
| View Partnerships | `/partnerships` |
| Partner With Tropicash / Partner With Us | `/partnerships` or `/contact` |
| Contact Tropicash | `/contact` |
| Start a Partnership Conversation | `/contact` |
| Get Started | `/contact` |

**Pass criteria:** Labels match destinations; no developer CTAs routing to `/platform` without context.

---

## Mobile QA

- ☐ Mobile nav row scrolls and all primary links are reachable
- ☐ Hero sections stack cleanly (no clipped headings under sticky nav)
- ☐ CTA buttons stack on narrow screens (`flex-col` → full width)
- ☐ Card grids do not cause horizontal page overflow
- ☐ Timeline/journey steps use mobile card layout (no desktop-only overflow)
- ☐ Footer columns wrap without awkward breaks
- ☐ Hero illustration cards scale appropriately on mobile

---

## Copy QA

- ☐ Wallet-first messaging visible on homepage and about page
- ☐ Send / receive / fund / manage balance language present
- ☐ Site does not read as merchant-only or developer-only
- ☐ Development-stage language used consistently (`being built`, `preparing`, `planned`)
- ☐ `/about` reads as product story; `/company` reads as mission/direction
- ☐ `/legal` clearly states informational, not final legal terms

---

## Legal / claim QA

Search or review for risky terms. **Should not appear** (unless negated, e.g. "No live API access"):

- licensed / regulated (for Tropicash itself)
- guaranteed / bank-grade / production ready
- live transfers / instant settlement / real-time settlement
- users can now / available everywhere
- live API / live merchant / live bank connectivity
- fake metrics, fake partners, fake balances

**Allowed:** being built, preparing, planned, foundation, readiness, future phase, sandbox-first, informational.

---

## Accessibility QA

- ☐ One logical `h1` per page
- ☐ Heading order is reasonable (no large skips)
- ☐ All links and buttons have visible text
- ☐ Decorative hero visuals marked `aria-hidden`
- ☐ Focus-visible rings visible on nav links and CTAs
- ☐ Body text contrast readable on white cards
- ☐ Page titles and meta descriptions are meaningful

---

## Deployment QA

Before go-live:

- ☐ `npm run lint` passes
- ☐ `npm run build` passes
- ☐ `npx tsc --noEmit` passes
- ☐ `NEXT_PUBLIC_SITE_URL` set to production domain
- ☐ No `.env` secrets committed
- ☐ No `.next/` directory committed
- ☐ Favicon and OG images reviewed (if added)
- ☐ Legal and privacy sign-off completed
- ☐ Contact method decided and verified

---

## Sign-off

| Role | Name | Date | Approved |
| ---- | ---- | ---- | -------- |
| Engineering | | | ☐ |
| Brand / Content | | | ☐ |
| Legal | | | ☐ |
| Executive | | | ☐ |

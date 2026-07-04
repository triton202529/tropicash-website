# Tropicash Corporate Website — Launch Readiness Review

**Phase:** W-011  
**Review date:** July 2026

---

## 1. Current status

The Tropicash Corporate Website public foundation is **complete and internally reviewable**.

The site is:

- Ready for **brand and content review**
- Ready for **internal stakeholder walkthrough**
- Ready for **pre-deployment preparation** (domain, hosting, legal, contact decisions)

The site is **not**:

- **Production launch approved**
- Connected to live wallet, payment, banking, or API systems
- A substitute for final legal terms, privacy policy, or regulatory disclosures
- A live customer support, onboarding, or account creation channel

This website is informational and development-stage safe. It describes what Tropicash is **being built** to become — not what is publicly available today.

---

## 2. Completed route inventory

| Route | Page | Status | Notes |
| ----- | ---- | ------ | ----- |
| `/` | Homepage | Complete | Wallet-first hero, audience, platform pillars, ecosystem flow, developer/business band, security, Caribbean focus, final CTA |
| `/about` | About | Complete | Product story, audience, Caribbean context, phased build path — distinct from `/company` |
| `/platform` | Platform | Complete | Wallet layer, architecture, capabilities, audience, governance, readiness |
| `/developers` | Developers | Complete | Sandbox-first, API foundations, integration journey, governance — no live API terminal |
| `/security` | Security | Complete | Trust/governance foundations — no certification claims |
| `/partnerships` | Partnerships | Complete | Partner pathways — no fake partner logos or claims |
| `/company` | Company | Complete | Mission, principles, growth path, company direction |
| `/contact` | Contact | Complete | Pathway cards linking to pages — **no forms or email delivery** |
| `/legal` | Legal & Notices | Complete | Development-stage notices — **not final attorney-reviewed legal terms** |

All routes render as static pages via Next.js App Router. No placeholder-only routes remain.

---

## 3. Messaging summary

**Positioning:**

Tropicash is a **Caribbean-first wallet and payment infrastructure platform** being built to help people **send, receive, fund, and manage money**, while preparing merchant, developer, security, governance, and partner-ready foundations.

**Audience hierarchy:**

1. **People / wallet users** — send money, receive money, fund wallet, manage balance, transaction history
2. **Businesses** — merchant payments, payment acceptance, customer transactions
3. **Developers** — API foundations, app registration, sandbox readiness, OAuth readiness, webhooks
4. **Partners** — financial institutions, regional businesses, governed access, responsible connectivity
5. **Security / governance** — account protection, KYC readiness, treasury review, audit records, fraud/risk monitoring

**Footer description (canonical):**

> Caribbean-first wallet and payment infrastructure for people, businesses, developers, and trusted partners.

---

## 4. Claim safety summary

The public website **does not claim**:

- Live wallet transfers or production money movement
- Live bank connectivity or partner rail availability
- Regulatory approval or licensing for Tropicash
- Production API access or live developer credentials
- Active merchant acceptance or live checkout
- Guaranteed availability, timelines, or feature delivery
- Fake metrics, fake partners, fake balances, or fake operational statuses

The website **does use** development-stage language:

- being built
- designed to support
- preparing / planned
- foundation / readiness
- future phase / sandbox-first
- informational (Legal page)

**Exception:** The word *regulated* appears only when referring to **regulated institutions** or future partner contexts — not to claim Tropicash itself is regulated.

The **Legal page** (`/legal`) is an informational notices foundation only. It is **not** final attorney-reviewed legal terms, privacy policy, or financial service disclosure.

---

## 5. Scope boundary

The corporate website is **separate from the Tropicash wallet app**.

This website phase does **not** include:

- Backend services or API routes
- Authentication or user accounts
- Payment execution or wallet transaction execution
- Supabase, PayPal, OAuth implementation, or banking integrations
- KYC implementation or operational compliance workflows
- Contact forms, email delivery, CRM, or live support
- Analytics, tracking, or operational dashboards

All CTAs route to informational pages or contact pathways — not to live product actions.

---

## 6. Validation checklist

Run before any deployment or release tag:

| Check | Command / action | Expected |
| ----- | ---------------- | -------- |
| Lint | `npm run lint` | Exit 0, no errors |
| Build | `npm run build` | Exit 0, all 9 routes static |
| TypeScript | `npx tsc --noEmit` | Exit 0 |
| Route render | Visit all 9 public routes | HTTP 200, no broken layout |
| Link / CTA audit | Nav, footer, page CTAs | No `#` hrefs, consistent targets |
| Mobile review | 375px / 768px / 1280px | No horizontal overflow, usable nav |
| Claim-safety review | Grep risky terms | No live/production/fake claims |
| Build hygiene | `.gitignore`, no secrets | No `.next`, no `.env` committed |

**W-011 validation (pre-commit):**

- `npm run lint` — pass
- `npm run build` — pass
- `npx tsc --noEmit` — pass

---

## 7. Known remaining pre-launch tasks

These are **out of scope** for the current website build phase. Do not implement without explicit approval:

- [ ] Final brand/logo assets and favicon/app icon review
- [ ] Final legal review (attorney-reviewed terms of use, privacy policy)
- [ ] Privacy policy and terms of use publication
- [ ] Real contact form or verified contact email decision
- [ ] Production deployment target decision (Vercel, static host, etc.)
- [ ] Domain and DNS setup (`NEXT_PUBLIC_SITE_URL`)
- [ ] Analytics and privacy/cookie decision
- [ ] Formal accessibility audit (WCAG)
- [ ] Performance audit (Lighthouse, Core Web Vitals)
- [ ] Open Graph / social preview images
- [ ] Final executive and content approval
- [ ] Bank/partner claim review before any public production claims
- [ ] Wallet app integration or deep links (if ever desired — separate project)

---

## 8. Launch recommendation

**Ready for internal review and pre-deployment preparation.**

**Not yet approved for public production launch** until legal, branding, domain, deployment, contact method, privacy, and final executive review are completed.

Recommended next steps:

1. Internal walkthrough of all 9 routes (desktop + mobile)
2. Brand/content sign-off
3. Legal counsel review of `/legal` and planned policy areas
4. Decide contact method (email, form provider, CRM — future phase)
5. Choose deployment target and configure `NEXT_PUBLIC_SITE_URL`
6. Re-run validation checklist before go-live

---

## 9. Phase history

| Phase | Description | Commit |
| ----- | ----------- | ------ |
| W-000 | Foundation | `91021c7` |
| W-001 | Homepage | `3804d4f` |
| W-001B | Homepage contrast/theme repair | `417f91d` |
| W-002 | Platform page | `6879679` |
| W-003 | Developers page | `faa3526` |
| W-004 | Security page | `8693580` |
| W-005 | Partnerships page | `4928f4c` |
| W-006 | Company page | `9e23cc0` |
| W-007 | Contact page | `4660e04` |
| W-008 | Core wallet + send/receive messaging | `10b8d91` |
| W-009 | Sitewide QA, link audit, mobile polish | `91a6b31` |
| W-010 | About + Legal page design | `a5f97a7` |
| W-011 | Final review + launch readiness pack | *(this commit)* |

---

## 10. Related documentation

- [Website Architecture](./WEBSITE_ARCHITECTURE.md)
- [Atlantic Design System](./ATLANTIC_DESIGN_SYSTEM.md)
- [Development Guide](./DEVELOPMENT_GUIDE.md)
- [Website QA Checklist](./WEBSITE_QA_CHECKLIST.md)

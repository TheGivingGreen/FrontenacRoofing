# Frontenac Roofing & Construction — Website

Marketing site for Frontenac Roofing & Construction, built to the visual system
in `DESIGN.md`, the content rules in `PROJECT_BRIEF.md`, and the layout in
`HOMEPAGE_WIREFRAME.md`.

> **Brand note:** the design and wireframe source documents were drafted under a
> placeholder codename ("Warson"). This build uses the confirmed brand,
> **Frontenac Roofing & Construction**, on the registered domain
> `frontenacroofing.com`. All brand facts live in one place: `lib/site.ts`.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Design tokens as CSS custom properties (`app/globals.css`) — no CSS framework
- Fonts via `next/font`: **Archivo** (display) + **Instrument Sans** (body)
- **lucide-react** for utility icons only

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## What's built

- Centralized brand object (`lib/site.ts`) and design-token system
- Fixed navigation (transparent-over-hero → solid on scroll) + mobile sheet
- The full homepage, all 14 sections in wireframe order (`app/page.tsx`)
- **All inner pages** so the navigation fully works:
  - Commercial Roofing (+ repair/replacement, coating/restoration, TPO/single-ply)
  - Residential Roofing (+ repair/replacement, specialty, storm/hail/insurance)
  - Siding & Exteriors, Services hub, Projects, About, Reviews, Service Areas, Contact
  - Legal: Privacy, Accessibility, Terms (templates flagged for review)
  - `/schedule-inspection` conversion page
- Reusable primitives: `Wordmark`, `Button`, `ImageSlot`, `PageHero`, `PageShell`,
  `CTABand`, `ServiceDetail`, section components
- **Auto-appearing images:** every image slot is wired to a filename in
  `public/images/`. Drop a correctly named file in and it replaces the placeholder
  automatically — no code change. See **`MEDIA_ASSETS.md`** for every filename,
  dimension, and generation prompt.
- Accessibility: skip link, semantic landmarks, visible focus states, keyboard
  nav, reduced-motion handling, 48px touch targets

## Placeholders & guardrails

Per `PROJECT_BRIEF.md`, **no unverified fact is presented as a published claim.**
Unconfirmed content renders as a labeled placeholder marked with a small
`CONFIRM` badge (see `.unverified` in `globals.css`), and every image is an
explicit `ImageSlot` with a declared aspect ratio — no invented photography.

### Confirm before launch (from `PROJECT_BRIEF.md §17` / Definition of Ready §19)

- **Public address** — 201 Hughes Ln vs 1610 Des Peres Rd (`site.address` blank)
- **Email domain** — stays `@frontenac.construction` until the new domain is live
- **Legacy domain redirects** — map old `frontenac.construction` URLs 1:1
- **Proof rail** — replace the two pending cells with a verified credential /
  project count / review score, or collapse to two larger cells
- **Credentials** — BBB A+, GAF, Owens Corning, James Hardie badge usage
- **Featured project + project grid** — validate case studies and get publication
  permission before using any client/property name
- **Testimonial** — confirm source, wording, and permission
- **Service territory** — confirm before publishing a city list
- **Renovation** — confirm current scope before promoting (shown conditional)
- **Solar / financing** — omitted pending business + legal verification
- **Form destination** — wire `/schedule-inspection` to a confirmed inbox/CRM
  with a success state and a promised response window

## Structure

```
app/            layout, globals (tokens), homepage, schedule-inspection stub
components/
  layout/       Nav, Footer
  sections/     the 14 homepage sections + shared home.module.css
  ui/           Wordmark, Button, ImageSlot
lib/site.ts     single source of truth for mutable brand data
```

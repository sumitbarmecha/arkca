# ARKCA build handoff

Status as of 5 Nov 2026. Written so a lighter AI model (or a person) can pick up and finish the site.

Project: ARKCA Corporate website. Next.js 16 App Router, Tailwind v4, TypeScript. Dev server: `npm run dev` then http://localhost:3000/. Folder: `c:\addtonewlaptop\c\html\arkca`.

Read these first (all in the project root):
- `ARKCA_ARCHITECTURE.md`: page types and templates.
- `ARKCA_URL_SEO_MIGRATION.md`: every live URL that must keep working. **Do not invent new URLs.**
- `ARKCA_CURSOR_RULES.md`: coding rules for this project.
- `ARKCA_PROJECT_CONTEXT.md` and `ARKCA_PROJECT_PLAN.md`: background and timeline.

---

## 1. What is done

### Pages that exist (routes under `app/`)

| URL | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero, services overview, how it works, about, testimonials, FAQ, insights |
| `/about-arkca/` | `app/about-arkca/page.tsx` | Hero, story, values, vision and mission, founders, testimonials |
| `/blogs/` and `/blogs/{slug}/` | `app/blogs/...` | Blog list and post pages (data in `lib/blog.ts`) |
| `/service/` | `app/service/page.tsx` | All-services overview with the five hub cards |
| `/service/epr/` | `app/service/epr/page.tsx` | EPR hub |
| `/service/{hub}/` | `app/service/[hub]/page.tsx` | The other four hubs. `generateStaticParams` filters out `epr` |
| `/service/epr/{stream}/` | `app/service/epr/[stream]/page.tsx` | All 10 EPR streams, one shared component |

Hub slugs: `epr`, `certification-and-compliances`, `business-setup-certifications`, `other-certification-services`, `other-services`.

EPR stream slugs: `plastic-waste`, `e-waste`, `battery-waste`, `tyre-waste`, `used-oil`, `end-of-life-vehicle`, `solid-waste-management`, `non-ferrous-metal`, `packaging-and-sanitary-waste`, `construction-and-demolition`.

### Data and components

| File | Purpose |
|---|---|
| `lib/navigation.ts` | `primaryNav` (the menu and the source of every service link), `consultationHref`, `contactDetails`, footer and social links |
| `lib/hubs.ts` | Hub content (`hubs`, `getHub`, `hubGroups`). Hub cards link to the menu items by URL prefix |
| `lib/epr.ts` | The 10 EPR streams (`eprStreams`, `getStream`, `taskHref`, `taskMeta`) |
| `lib/about.ts`, `lib/testimonials.ts`, `lib/blog.ts`, `lib/trust.ts` | Content data |
| `components/service/HubPage.tsx` | Hub template. Also exports `Breadcrumb`, `Eyebrow`, `sectionHeading` for reuse |
| `components/service/EprStreamPage.tsx` | Stream template |
| `components/home/*`, `components/about/ValueCard.tsx` | Home and about sections |
| `components/home/FaqAccordion.tsx` | Reusable FAQ (`FaqItem` type). Reuse it on every new page |
| `components/layout/*` | Header, mega menu, footer. `menuMeta.ts` has `MenuIcon`, `descFor`, `slugOf` |
| `components/ui/*` | `Container`, `Reveal` (scroll animation), `ArkSlider`, `Stars`, buttons |

### Design system (provisional, client has not approved it)
- Palette: deep navy plus gold. Tokens are in `styles/tokens.css` and mapped in `app/globals.css`.
- Tailwind utilities: `bg-brand`, `bg-brand-deep`, `bg-brand-night`, `text-accent`, `bg-accent`, `bg-canvas`.
- **A future re-brand means editing about six values in `styles/tokens.css`.** The tinted card backgrounds still use fixed hexes (`#e5ecf7`, `#e9f2f6`, `#efedf7`, `#fbf1dc`, `#faefe8`).
- Page rhythm to copy: eyebrow pill, then an h2 using `sectionHeading` (exported from `HubPage.tsx`), then content. Alternate white, `bg-canvas`, and a dark `bg-brand-night` band.
- Whole-card links use an `after:absolute after:inset-0` overlay on the title link.
- Put `overflow-hidden` on any card with a decorative blur, otherwise mobile gets horizontal scroll.

### Checked
- `tsc --noEmit` and `eslint` pass on everything I touched.
- Home, About, all `/service/*` hubs and all 10 EPR stream pages: no horizontal overflow at 390px. Desktop (1440px) looked at on home, about, EPR hub, plastic and e-waste.
- Not tested: tablet widths, Safari and Firefox, real Lighthouse scores.

---

## 2. What is remaining (in priority order)

### A. EPR task pages (about 25 pages): do this next
The stream pages already link to these, and the links currently 404.

- URL: `/service/epr/{stream}/{task}/`. Task slugs come from `taskMeta` in `lib/epr.ts`: `registration`, `compliance` (or `compliances` for some streams, see `complianceSlug`), `credit-transfer`, `legal-issues`, `surrender`.
- Only the five streams with a `tasks` object have task pages: plastic-waste, e-waste, battery-waste, tyre-waste, used-oil.
- Steps:
  1. Check `taskHref()` in `lib/epr.ts` and the real URLs in `ARKCA_URL_SEO_MIGRATION.md`. Fix the `complianceSlug` handling if it is wrong.
  2. Create `app/service/epr/[stream]/[task]/page.tsx` with `dynamicParams = false`, `generateStaticParams` (stream × task, only streams that have `tasks`), `generateMetadata` (title, description, canonical with trailing slash) and `notFound()`.
  3. Create `lib/eprTasks.ts` with per-task content: steps, documents, timeline, penalties or risks, FAQs. Start with plastic-waste Registration as the full example. Pull content from the live page at `https://arkcacorporate.com/service/epr/{stream}/{task}/` and rewrite it. Don't copy it word for word.
  4. Create `components/service/EprTaskPage.tsx`. Reuse `Breadcrumb`, `Eyebrow`, `sectionHeading`, `FaqAccordion`, `Reveal`, `Container`. Sections: hero, what it is, step list, documents, "how ARKCA helps", FAQ, link back to the stream and sibling tasks.
  5. Verify (see section 4).

### B. Flat service leaf pages (about 36 pages)
Licences, certifications, business setup, customs and so on. Hubs already link to them from `primaryNav`, so those links 404 for now.
- **Routing warning.** Check the real URL shape in `ARKCA_URL_SEO_MIGRATION.md` first. If leaves live at `/service/{slug}/`, they collide with the existing `app/service/[hub]/page.tsx`. Fix that by making one `[slug]` route that serves hubs and leaves from one lookup, with `dynamicParams = false`.
- Create `lib/services.ts` (typed records: slug, name, h1, metaTitle, description, lead, who it is for, documents, process steps, timeline, fees note, FAQs, related) and one `ServicePage` component. The task-page template from step A is a good starting point.
- Write one full example first, then fill the rest.

### C. Contact page (`/contact/`, not built)
Form (name, email, phone, service, message), contact details from `contactDetails` in `lib/navigation.ts`, a map or office list, and a Calendly CTA (`consultationHref`). The form needs a real backend: an API route or a form service. Ask the client which.

### D. Other site-wide items
- `app/not-found.tsx` (a branded 404) and `app/error.tsx`.
- `app/sitemap.ts` and `app/robots.ts` (all URLs need the trailing slash; `trailingSlash: true` is already set in `next.config.ts`).
- Redirects in `next.config.ts` for any old live URL that changes (see the migration doc).
- Per-page Open Graph image and metadata, JSON-LD (Organization, BreadcrumbList, FAQPage, Article).
- Analytics (GA4 or similar) once the client gives the ID.
- Footer pages: privacy, terms and other `legalLinks` (check `lib/navigation.ts` for which exist).
- Privacy and cookie notice if analytics is added.
- Performance pass: image sizes, `next/image`, Lighthouse.
- Accessibility pass: keyboard focus, colour contrast, the mega menu.
- Tablet-width QA (768px and 1024px) on every template.
- Deployment (hosting choice, env vars, domain, redirects from the old site) and a post-launch check. See `ARKCA_PROJECT_PLAN.md` sections 5.8 to 5.13.

### E. Small cleanups
- Empty folders `css`, `js`, `vendor`, `assets` in the project root can be deleted (check they are really empty first).
- Three pre-existing lint errors, not caused by recent work: `components/layout/SiteHeader.tsx` (around line 108), `components/home/HomeFirstView.tsx`, `components/ui/carousel.tsx`.
- The "Freight" hub (`other-services`) does not highlight "Import & Customs" in the header.

---

## 3. Needs a human or the client (not an AI task)

- **Compliance review of all legal and rule content.** The EPR stream copy (rule names, dates, penalties) was rewritten from the live site and has not been checked by a compliance expert. Examples: "2022 rules" for solar modules, 1 April 2026 for non-ferrous metal, EBWGR from 2026. The live site had cross-paste errors that were left out on purpose (see the header comment in `lib/epr.ts`).
- **Hub page copy** (`lib/hubs.ts`) is new and general. The client should confirm it. "Recyclers" in the EPR audience chips is unconfirmed.
- **Brand colours** are a guess. The client has not approved them.
- **Reviews.** Four Google reviews are used as placeholders. Two are from team members. The 4.4 rating from 52 reviews (`googleRating` in `lib/testimonials.ts`) must be re-checked before launch.
- **Founder photos and bios.** Currently initials only.
- **City list** ("Delhi · Mumbai · Kolkata · Guwahati") in the hero and footer is unverified.
- Calendly link, phone, email and address in `lib/navigation.ts` need confirming.

---

## 4. Rules for the next model (read before editing)

1. **Don't add routes that aren't in the live site.** Check `ARKCA_URL_SEO_MIGRATION.md`. Keep trailing slashes.
2. **Copy the pattern, don't invent a new one.** Open `EprStreamPage.tsx` and `HubPage.tsx` and follow them: same containers, spacing, headings, colours, `Reveal`.
3. **Use brand tokens** (`bg-brand`, `text-accent`...) and not new hex values, except the existing tints listed above.
4. **Content is typed data in `lib/`, and components stay generic.** Never hard-code page copy inside a component.
5. **Next.js 16**: `params` is a Promise (`await params`). Use `dynamicParams = false` plus `generateStaticParams` on every dynamic route, and `notFound()` for unknown slugs.
6. **Don't use dynamic components** (a component chosen in a variable). The lint rule `react-hooks/static-components` forbids it. Use a `switch` that returns JSX.
7. **Tool quirks on this Windows machine** (PowerShell): avoid heredocs, `Set-Content -Encoding`, `head`, and multi-line `node -e`. Use the editor's write and replace tools, or write a small `.mjs` script file and delete it afterwards.
8. **Never copy text word for word from the live site.** Rewrite it. Never claim certifications, numbers or legal outcomes you can't source.
9. Don't touch the three pre-existing lint errors unless asked.

### Verify every new template
```
npx tsc --noEmit
npx eslint app components lib
```
Then, with the dev server running:
- Every new URL returns 200, and an unknown slug returns 404.
- At 390px and 1440px, `document.documentElement.scrollWidth === window.innerWidth` (no sideways scroll).
- Look at the page in a browser at both widths: hero, cards, FAQ.
- A "1 Issue" hydration badge in the dev overlay is caused by the Cursor browser tool injecting `data-cursor-ref` attributes. Ignore it.

---

## 5. Suggested order

1. EPR task pages: one full example (plastic-waste Registration), then the template for the rest.
2. Service leaf template and its data, one full example first.
3. Contact page.
4. `not-found`, `sitemap`, `robots`, redirects, metadata and JSON-LD.
5. QA (tablet, accessibility, Lighthouse), then the client review items in section 3.
6. Deployment.

# ARKCA Corporate — Master Project Context

**Last updated:** 1 November 2026  
**Purpose:** Working source of truth for the Next.js website redevelopment. This is not an approved sitemap, signed contract, or final design specification.

## 1. Brand and Business

- **Brand:** ARKCA Corporate
- **Legal name currently used:** ARKCA Corporate Solutions Pvt. Ltd. — client confirmation still required.
- **Website:** https://arkcacorporate.com/
- **Market:** India
- **Business:** Regulatory compliance consultancy serving businesses, importers, exporters, producers, brand owners, recyclers, and founders.
- **Primary service positioning:** Extended Producer Responsibility (EPR) and CPCB-related environmental compliance.
- **Broader catalogue:** Product certifications, export/import compliance, licences, business setup, GST, ROC, and related corporate services.
- **Business model:** Consultation and lead generation through contact forms and booking links. No public ecommerce checkout or client portal is currently part of the known scope.

The audience is practical and risk-aware. Visitors need to understand which service applies to them, what the process involves, and how ARKCA can help.

**Brand voice:** Professional, clear, compliance-focused, specific, and trustworthy. Avoid exaggerated marketing language.

## 2. Redevelopment Objective

Rebuild the existing WordPress/Elementor website using Next.js.

The goal is to create a credible, modern, fast, secure, accessible, responsive, and SEO-friendly corporate website that improves service discovery and generates qualified enquiries.

Priorities:
- Clear information architecture and navigation.
- Reusable components and page templates.
- Accurate service-specific content.
- Consistent design across the website.
- Preservation of legitimate existing SEO value.
- Technical SEO, performance, security, and maintainability.
- Reliable contact and consultation journeys.

Implement incrementally. Complete and review one section or template at a time.

## 3. Design Direction

The website should feel modern, minimal, professional, and appropriate for a regulatory consultancy.

- Use clear hierarchy, whitespace, readable typography, and restrained visual effects.
- Make services easy to understand and navigate.
- Use genuine brand assets and real business information.
- Inspect the existing logo, assets, header, and implemented components before defining or changing design tokens.
- Retain brand identity unless a new direction is explicitly approved.
- Do not invent official colours, typography, brand guidelines, testimonials, certifications, or trust badges.
- Do not copy competitor designs.

**Design direction is not yet formally approved.** Treat existing styling and proposed redesigns as working decisions until the client confirms the visual direction.

## 4. Navigation

The current proposed top-level navigation is:

1. EPR & Environmental
2. Licences & Certifications
3. Business Setup
4. Import & Customs
5. Insights
6. About
7. Contact
8. Book a Consultation CTA

This is a proposed architecture, not a confirmed final sitemap.

Mega-menus should group related services into meaningful categories rather than overwhelm visitors with every subservice. Mobile navigation must remain accessible and easy to use.

Existing route examples include:

- `/about-arkca/`
- `/contact-us/`
- `/blogs/`
- `/service/epr/`
- `/service/certification-and-compliances/`
- `/service/business-setup-certifications/`
- `/service/other-services/`

Verify routes against the repository and `ARKCA_URL_SEO_MIGRATION.md` before using or changing them.

## 5. Services and Content Accuracy

The existing site contains multiple service categories, including:

- EPR: plastic, e-waste, battery, tyre, used oil, end-of-life vehicles, and other environmental categories.
- Licences and certifications: BIS/CRS, WPC/ETA, LMPC, FSSAI, CDSCO, ISO, and other published services.
- Business setup: company formation, LLP, OPC, GST, ROC, DPIIT Startup, and related services.
- Import/export: IEC, AD Code, ICEGATE, DGFT-related services, export registrations, and other published compliance services.

This is a summary of the existing catalogue, **not confirmation that every service remains in scope or is currently offered**.

Before creating new content or links:
- Check the existing page, URL inventory, and project documentation.
- Preserve useful and accurate existing content.
- Correct obvious copy errors only when the intended meaning is clear.
- Flag uncertain regulatory claims or business offerings for confirmation.
- Never invent legal requirements, fees, processing times, client results, or regulatory guarantees.

## 6. Business Facts Requiring Verification

The existing website and company profile contain conflicting claims, including client counts, team size, office presence, and company naming.

Do not repeat unverified claims such as:
- Conflicting client-count figures.
- Unconfirmed team-size or annual-registration statistics.
- Unsupported claims such as “best” or “number one.”
- Unverified office locations or legal-entity relationships.

Public contact details currently recorded on the website include:

- Email: `certificate@arkcacorporate.com`
- Phone: `+91 9316631170`
- Consultation: `https://calendly.com/corporatearkca/30min`

Verify these before implementation. Use only confirmed details and valid links. Do not expose internal email addresses or personal data from database dumps.

## 7. SEO and URL Migration

Preserving legitimate existing URLs and SEO value is a core requirement.

The WordPress site has multiple URL generations, inconsistent redirects, duplicate content risks, sitemap gaps, and evidence of a previous SEO-related security incident.

Rules:
- Use `ARKCA_URL_SEO_MIGRATION.md` as the detailed URL inventory and migration reference.
- Preserve existing legitimate URLs by default.
- Do not change slugs for aesthetic or architectural reasons alone.
- Implement a relevant 301 redirect whenever an approved URL change requires one.
- Do not invent redirects or delete URLs without reviewing their purpose and SEO history.
- Preserve appropriate metadata, canonicals, heading hierarchy, and internal links.
- Keep the sitemap limited to intended canonical, indexable pages.
- Do not publish injected spam content or treat it as legitimate brand material.
- Never guarantee rankings, traffic, or indexing outcomes.

The previous security incident does not prove that the site is currently infected. Security status and search-index cleanup require separate verification.

## 8. Technical Principles

- Use the existing repository architecture and conventions.
- Next.js is the confirmed target; specific routing, rendering, hosting, and content-management choices must follow the architecture document or be explicitly decided.
- Prefer reusable components, consistent page templates, and minimal dependencies.
- Prioritise performance, accessibility, security, and maintainability.
- Keep secrets and credentials out of source control.
- Do not use the old database dump as a public-content source without a specific, justified need.
- Do not introduce a CMS, database, or infrastructure complexity without a clear requirement.
- Test changes before declaring them complete.

## 9. Working Rules for AI and Developers

Treat project files and verified source content as the primary evidence.

For every task:
1. Inspect relevant existing code, assets, routes, and documentation.
2. Identify confirmed facts and unresolved decisions.
3. Make only the changes required for the task.
4. Validate links, responsive behaviour, accessibility, and build health where relevant.
5. Report what changed and what still needs confirmation.

**Never hallucinate.** Do not silently turn a suggestion into an approved decision, an estimate into a fact, or an existing website claim into independently verified truth.

If a decision materially affects business accuracy, URLs, SEO, security, architecture, or scope, ask for clarification rather than guessing.

Keep prompts and status reports concise. Do not repeatedly restate this entire document in every task.

## 10. Related Project Documents

Use each document for its specific purpose:

- `ARKCA_URL_SEO_MIGRATION.md` — URL inventory, SEO migration, redirects, and sitemap issues.
- `ARKCA_ARCHITECTURE.md` — technical architecture and unresolved implementation decisions.
- `ARKCA_PROJECT_PLAN.md` — timeline, milestones, and delivery checklist.
- `ARKCA_CURSOR_RULES.md` — detailed coding and workflow rules.
- PRD and contract — commercial scope and requirements; note that the existing documents are unsigned and contain conflicting proposals.

When documents conflict, do not silently reconcile them. Prefer the latest explicitly confirmed decision, and flag unresolved conflicts.
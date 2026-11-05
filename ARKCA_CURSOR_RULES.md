# Cursor rules for the ARKCA rebuild

These rules apply to every later session in this project. They sit on top of the markdown source of truth. If a chat instruction conflicts with an approved decision in those files, stop and say so before editing.

## Source of truth

1. Read these files before changing the site or writing new project decisions:
   - `ARKCA_PROJECT_CONTEXT.md` — company, scope, facts, conflicts
   - `ARKCA_URL_SEO_MIGRATION.md` — known URLs and migration status
   - `ARKCA_ARCHITECTURE.md` — existing IA, proposed IA, open technical choices
   - `ARKCA_PROJECT_PLAN.md` — dates, roles, checklist
2. The proposed navigation and the proposed technical stack are not approved. Do not treat them as requirements.
3. The fee and the eight-week schedule are the latest proposal. Acceptance and the exact end date still need confirmation. Three possible end dates are written in the plan. Do not pick one silently.
4. No earlier chat transcript was available when these files were created. Do not invent meetings, approvals, or messages “from Aditi”.

## Before editing

5. Inspect the repository before adding files or dependencies. Do not assume a Next.js app already exists.
6. Follow decisions marked confirmed. If a new request conflicts with one, name the conflict and wait.
7. Do not start the Next.js application until router, rendering, content format, and host are chosen, and until planning approval is recorded. Those items are open in the architecture file.
8. Do not implement out-of-scope features (accounts, payments, client portal, new service lines, recurring blog production, backlink work) unless a scope change is recorded.

## Facts, URLs, and SEO

9. Do not invent company facts, client counts, offices, people, licences, fees, timelines, reviews, or case studies. If the context file marks a claim as conflicting, keep it out of UI copy.
10. Do not invent URLs, keywords, title tags, or Search Console numbers. The URL file is the inventory. Anything missing is not yet audited.
11. Preserve existing SEO value. Do not change a live slug, including `compliance` versus `compliances`, unless the redirect is in an approved map.
12. Do not add redirects from a hypothesis. The migration file’s “possible current path” column is not approval.
13. Keep one H1 per page, a canonical, and indexable metadata when page templates are eventually built.
14. Do not promise rankings, traffic, or a position. The developer implements agreed technical SEO. Results also depend on competition, domain history, links, content, and Google.

## How to build, once building is allowed

15. Prefer a small set of reusable templates over a unique layout per service.
16. Keep components maintainable, accessible, responsive, and low in client JavaScript.
17. Do not add a dependency for something the platform already does.
18. Put secrets in environment variables. Never commit API keys, mail passwords, analytics secrets, or the WordPress SQL dump. Never copy form submissions or user records from that dump into source or docs.
19. Cloudflare DNS, CDN proxy, Workers, and Pages are different choices. The plan’s week-7 note does not select one. Leave hosting unresolved until it is written down.
20. Test the change you made: the route, the redirect row, or the form path. Say what you tested and what you could not test.
21. Do not call a checklist item complete unless it was verified. Use the status labels in the plan: Not started, In progress, Complete, Blocked, Awaiting approval, or Unknown.
22. Ask before a consequential choice that the architecture file still lists as open: host, CMS, form provider, URL renames, new pages, analytics events, and launch.
23. The commercial file has two fee proposals. The later proposal is ₹85,000 with payments of ₹30,000, ₹40,000, and ₹15,000. The 6 October PRD and unsigned contract say ₹1,00,000 on a different split. Do not treat either as accepted. Do not copy bank account numbers, UPI IDs, or the invoice’s payment instructions into code or new documents.
24. The August–September 2026 compromise is documented in the incident summary. The outdated All in One SEO plugin is a suspected entry point, not a proven one. Do not republish the injected gambling terms, do not add redirects toward them, and do not claim the index is clean until Search Console is checked.
25. The PRD says retain the existing brand identity. The later brief asks for a preferred look before development. Neither has been closed. Do not invent a new visual system.

## Editing these documents

26. When a decision is actually made, update the relevant file and mark the old proposal as superseded. Do not leave two “final” fees, end dates, or sitemaps.
27. Keep confirmed facts, proposals, and assumptions in separate sections.

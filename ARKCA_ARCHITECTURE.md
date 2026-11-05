# ARKCA information architecture and technical architecture

Status: the **existing** architecture below was observed on the live site on 26 October 2026. The **proposed** architecture is a recommendation for Aditi’s planning approval. It is not approved, and it is not a brief to start building.

Read [ARKCA_PROJECT_CONTEXT.md](ARKCA_PROJECT_CONTEXT.md) for the company facts and [ARKCA_URL_SEO_MIGRATION.md](ARKCA_URL_SEO_MIGRATION.md) for every known URL.

---

## 1. Existing architecture

### 1.1 What kind of site it is

A WordPress marketing site. Elementor builds the pages. The only primary conversion is an enquiry, plus an external Calendly link. Service information is a deep tree of static pages. Blog posts and a publication item sit beside that tree.

### 1.2 Primary navigation as rendered

```text
Home
About Us
Our Services
  EPR Certification and Compliance          (label only, href is #)
    EPR for Plastic Waste
      Registration | Compliance | Credit Transfer | Legal Issues | Surrender
    EPR for Used Oil
      Registration | Compliances | Credit Transfer | Legal Issues | Surrender
    EPR for E-Waste
      Registration | Compliances | Credit Transfer | Legal Issues | Surrender
    EPR for Battery Waste
      Registration | Compliance | Credit Transfer | Legal Issues | Surrender
    EPR for Tyre Waste
      Registration | Compliances | Credit Transfer | Legal Issues | Surrender
    EPR for ELV (End of Life Vehicle)
    EPR for Solid Waste Management
    EPR for Non-Ferrous Metal
    EPR for Packaging and Sanitary Waste
    EPR for Construction and Demolition
    SSO Registration Services
  Certificate and Compliance                (label only, href is #)
    CAPEXIL, EEPC, FSSAI, TDS, Spice Board, ISO, DSC, MSME,
    SIMS | PIMS | AIMS | CIMS, APEDA, MPEDA, CEPA, CDSCO, WPC, WPC-ETA,
    BIS CRS, LMPC, SCOMET, Trade Mark, Trade License
  Business Setup                            (label only, href is #)
    DPIIT Startup, GST, ROC, IEC, LLP, OPC, Company Formation, RCMC
  Other Service                             (label only, href is #)
    ICEGATE for Freight Forwarders, Advance Authorisation,
    NOC for DGFT / Steel Import / MoEFCC, ADCODE, IEC Renewal,
    IEC Modification, ICE GATE Modification, ICE Gate
Publication
Blogs
Contact Us
```

That is four commercial lines inside one mega menu, with EPR carrying most of the depth. The other three lines are flat lists. A visitor who knows the licence name can find it. A visitor who only knows “I import packaged food” or “I place plastic on the market” has to already know the acronym.

### 1.3 URL shapes in use today

Three generations are public at once. Details and the full list are in the migration file.

| Generation | Pattern | Role today |
| --- | --- | --- |
| Current pages | `/service/epr/{waste}/` and `/service/epr/{waste}/{task}/` | Menu and the stronger EPR templates |
| Current pages | `/service/certification-and-compliances/{service}/` | Menu |
| Current pages | `/service/business-setup-certifications/{service}/` | Menu. Folder name does not match the label. |
| Current pages | `/service/other-services/{service}/` and `/service/other-certification-services/{service}/` | One menu group, two folders |
| Current pages | `/sso-common-epr-portal/` | In the EPR menu, outside `/service/epr/` |
| Legacy posts | `/epr-certification-and-compliance/epr-for-{waste}/` | Still 200 in at least one sample, self-canonical |
| Legacy posts | `/certificate-and-compliance/{service}/` | Mixed. One sample 301s to the current page. |
| Legacy posts | `/business-setup/{service}/` and `/other-service/{service}/` | At least two samples still 200, self-canonical |
| Content | `/blogs/{slug}/`, `/blogs/`, `/a-to-z-epr-series/` | Insights. Publication body not confirmed. |
| Corporate | `/about-arkca/`, `/contact-us/`, privacy, terms, FAQ, careers, newsletter, essential forms, all-services, `/home-2/` | Mixed. Several are indexable and absent from the header. |

WordPress parent pages for `/service/` and each group exist and are indexable. The menu does not open them.

### 1.4 Page relationships that matter

- Homepage tabs repeat the four groups and, in the accessibility tree, repeat many service names as H1s. The homepage is acting as a second services index.
- `/service/` is another services index. Its extracted text showed three groups and did not show EPR. Confirm on screen before describing that page in the planning pack.
- `/all-services-list/` is a third services index.
- EPR category pages should be the parent of their five task pages. The menu does this. Whether the page body links to those tasks was not checked on every category.
- Blogs sometimes cover the same intent as a service page (plastic registration, BIS, IEC, SSO, ELV). A content pass should link each article to the service page and avoid letting the article compete with it. That linking map does not exist yet.
- FAQ answers the same services and is not in the menu.
- Contact is the conversion for every service. Essential-forms is a second form specifically titled for EPR credit transfer. Newsletter is a third capture page. Calendly is a fourth path.

### 1.5 Templates implied by the current site

These are observations of repeated layouts, not components to copy.

| Template | Examples | Repeatable parts |
| --- | --- | --- |
| Home | `/` | Hero, proof line, service tabs, blog carousel, meeting block, contact strip |
| Service category | Plastic, e-waste, and the other waste overviews | Definition, who must comply, risk of non-compliance, links onward, contact |
| Service task | Registration, compliance, credit transfer, legal, surrender | What it is, steps, documents, how ARKCA helps, contact |
| Flat service | FSSAI, GST, IEC, and the rest of the non-EPR leaves | Same intent as a task page, one level deep |
| Hub | `/service/` and the four or five group URLs | Group intro and child links. Currently underused. |
| Article | `/blogs/{slug}/` | Title, body, related service |
| Article index | `/blogs/` | List, pagination |
| Publication | `/a-to-z-epr-series/` | Unknown. May not match the article template. |
| About | `/about-arkca/` | Story, values, vision, mission, founders, reviews |
| Contact | `/contact-us/` | Intro, offices, form, proof strip |
| FAQ | `/frequently-asked-questions/` | Question list |
| Legal | Privacy, terms | Policy prose |
| Utility | Careers, newsletter, essential forms, all-services, home-2 | One-off. Scope unconfirmed. |

---

## 2. Proposed architecture

Awaiting approval. Do not implement this tree, and do not change live URLs to match it, until Aditi approves the planning pack and the SEO specialist confirms which existing URLs keep their equity.

### 2.1 Principle

Keep the commercial structure the business already sells. Make each group a real destination. Stop making the visitor parse a four-level acronym menu on every page. Leave the public URL of an existing offer unchanged in the first release whenever that URL is the one the menu already uses.

New hub copy can be written at the URLs that already exist (`/service/epr/` and the other group hubs). That is better than inventing a fresh slug such as `/epr-compliance/` and redirecting a whole catalogue in the same launch.

### 2.2 Proposed primary navigation

| Item | Opens | Why |
| --- | --- | --- |
| EPR | `/service/epr/` | This is the lead offer and the deepest tree. The hub explains PIBO, CPCB, and the waste streams, then links to each stream. |
| Licences and certifications | `/service/certification-and-compliances/` | Today’s “Certificate and Compliance” list. The hub can group export councils, product approvals, and food or wireless approvals so the menu is shorter. |
| Business setup | `/service/business-setup-certifications/` | Incorporation, GST, ROC, startup, IEC, RCMC. Keep the existing folder even though the name is awkward, until a redirect project is justified. |
| Import and customs | `/service/other-services/` or a single chosen hub | Today’s “Other Service” items: ICEGATE, advance authorisation, NOC, AD Code, IEC changes. The two folders need one parent in the menu. Which URL is the parent is **not decided**. |
| Insights | `/blogs/` | Blog, with the A to Z series linked from here once its content is known. |
| About | `/about-arkca/` | Firm, people, offices, proof. |
| Contact | `/contact-us/` | Form, offices, phone, email, Calendly. |

FAQ belongs in the footer and on service pages, and possibly as a text link in the header. It should not be an orphan.

Web hosting stays out of this menu unless the client confirms it is a service they still want on this domain. The page exists. Putting it beside CPCB registration dilutes the firm’s positioning.

### 2.3 Proposed page types for the new build

| Type | Purpose | First release content |
| --- | --- | --- |
| Home | One promise: EPR and regulatory compliance for Indian businesses, with a route into the four groups | One H1, one client-count only after the client picks it, four group cards, featured EPR tasks, a few articles, contact |
| Group hub | Explain who the group is for and list children | Use the hubs that already return 200 |
| EPR stream | One waste category | Keep the five task children where they already exist. Do not invent task pages for ELV and the other childless streams. |
| Service leaf | One job: registration, a licence, a filing | Migrated and rewritten within the agreed page count |
| Insight article | Support the service page, then link to it | Existing 27 posts, slugs preserved |
| About, contact, FAQ, privacy, terms | Trust and conversion | Migrated, facts corrected |
| Utility | Careers, newsletter, credit-transfer form, publication, all-services, web hosting | Include only if the client says the page is still needed |

### 2.4 Internal linking proposal

- Every service leaf links up to its group hub and sideways to the two closest services. EPR task pages link to the other four tasks in that waste stream.
- Every blog post links to one primary service page. The service page can list the posts that support it.
- FAQ answers link to the matching service page.
- Home links to hubs and to a small set of priority leaves, not to all 70 service URLs.
- Footer links to hubs, about, insights, FAQ, contact, privacy, and terms.
- Offices, phone, and email appear on contact and in the footer, using the single approved set of facts.

### 2.5 What this proposal deliberately does not do

- It does not rename `/compliance/` to `/compliances/` or the reverse.
- It does not move SSO, even though `/sso-common-epr-portal/` sits outside the EPR folder. Moving it is a redirect decision.
- It does not add income-tax, audit, PAN, or Section 8 pages just because the PDF mentions them.
- It does not merge the publication into the blog until someone has read the publication page.
- It does not choose the final visual design.

---

## 3. Technical architecture

### 3.1 Decided

- Rebuild the public site in Next.js.
- Phase 1, started 1 November 2026, created the app in this folder with the App Router, TypeScript, and plain CSS. No Tailwind and no component library. Hosting, CMS, and the form provider are still open. The header and footer use the existing logo and the verified hub URLs. The colour tokens are provisional, sampled from the logo, because there is no brand guide.
- The site is content plus a contact path. It is not an application with accounts.
- Existing indexed URLs are a migration constraint. See the migration file.
- Secrets and the WordPress SQL dump stay out of the repository and out of client-facing docs.

### 3.2 Open decisions

Record an answer here before coding the affected part.

| Decision | Options that are actually different | Current state |
| --- | --- | --- |
| Rendering | Static generation of marketing pages, with a server route or external endpoint for the form | Fits the brief, not approved |
| Router | App Router or Pages Router | Not approved. Do not start a repo until chosen. |
| Content | MDX or JSON in the repo, or a headless CMS | Brief implies static content. CMS not requested. Not approved. |
| Form delivery | Transactional email provider, or a form host | Current recipients must be confirmed. Calendly can remain an external link. |
| Analytics | GA4 and Search Console tags the client already owns | IDs not recorded. Consent approach not decided. |
| Hosting | A Node host, static export, or another model | Not chosen |
| Cloudflare | DNS, proxy CDN, Workers, or Pages | The week-7 note in the brief does not choose among these. Unresolved. |
| Domain cutover | Same domain, new host, redirect layer at the edge or in the app | Not chosen. Rollback owner not named. |
| Search | None, or a simple page search | Not requested. Leave it out unless asked. |
| Blog production | Developer migrates existing posts. New posts are out of the stated recurring scope. | Confirm how a later post gets published. |

### 3.3 Shape to aim for, once those decisions are made

This is a target, not a scaffold to generate now.

- Route tree that can emit the current public paths, including the awkward ones, so the first launch can preserve URLs.
- A typed service record: group, stream, task, slug, SEO title, description, canonical path, index flag, summary, document list, related slugs.
- An article record with the same SEO fields and one primary service slug.
- Shared chrome: header with real hub links, footer, contact strip, one H1 slot, breadcrumb.
- Metadata API usage per route, canonical, Open Graph, and a sitemap module generated from indexable records only.
- `robots` that points at that sitemap and does not advertise a second one.
- A redirect table loaded from the approved migration sheet, tested as data rather than handwritten ad hoc inside pages.
- Form route that validates input, sends mail, and does not log personal data to the client console. Spam control is required. The provider is not chosen.
- Environment variables for mail keys, analytics IDs, and the recipient list. No keys in source.
- Accessible components: real buttons, labelled inputs, visible focus, contrast that meets WCAG 2.2 AA as the target bar. Confirm the standard with the client if they need a formal claim.
- Responsive layouts for desktop, tablet, and a 390-wide phone. Not yet designed.
- Performance budget left numeric until a host is chosen. Intent: pages that ship little JavaScript, images with dimensions and useful alt text, and Core Web Vitals treated as a launch check.

### 3.4 Templates and components worth planning

| Piece | Used on |
| --- | --- |
| Site header and mobile navigation | All pages. Must reach hubs without a 70-link wall on a phone. |
| Footer | All pages |
| Page hero | Home and interior pages, different density |
| Service card and group card | Home, hubs |
| Document checklist | Service leaves |
| Step list | Registration and filing pages |
| FAQ accordion | FAQ and optional block on service pages |
| Office list | Contact, footer |
| Enquiry form | Contact, and any page that embeds it |
| Article card and article body | Blog |
| Proof module | About and home, only with approved facts and reviews |
| Breadcrumb | Interior pages |
| 404 | Unknown URLs |

Do not build a separate visual design for every service. The catalogue is too large. One strong service template, with EPR streams adding task navigation, will stay maintainable.

### 3.5 Analytics events to define before launch

Not implemented. Proposed names for the measurement plan:

- `contact_submit` success and failure
- `calendly_click`
- `phone_click`
- `email_click`
- `service_cta_click` with the service slug

What counts as a lead is a client decision. The developer instruments the agreed events and does not report rankings from them.

### 3.6 Security and operations

The current WordPress site was compromised in August–September 2026. See the context file for the incident summary: injected gambling SEO, a rogue administrator, suspicious files under `wp-includes`, FTP changes including `wp-config.php`, and unauthorised Search Console verifications. Cleanup and a core checksum check are recorded. The entry point is suspected to be an outdated All in One SEO plugin and is not proven. All in One SEO tables are still in the September database dump, alongside Yoast and Rank Math.

For the new site:

- HTTPS on the production domain. HSTS only after the host and certificate are stable.
- No WordPress admin, no plugin surface, and no copy of `wp-config.php` in the new repo.
- Confirm Search Console owners and leftover spam URLs before cutover. Do not redirect spam URLs to service pages.
- Dependency changes stay small and are reviewed.
- Form endpoint rate-limited.
- Errors logged without the visitor’s message body in a public log.
- A rollback path: previous deployment remains available until the client signs off the launch checks.
- The September SQL dump is a sensitive backup, not a content fixture for the app.

### 3.7 Testing bar

When implementation starts: route test that every preserved URL resolves, redirect test for every approved 301, metadata test for title, description, canonical, and single H1, form test for validation and a failed send, and a manual pass on home, one EPR stream, one flat service, blog, contact, and mobile nav. Lighthouse or field Core Web Vitals as a recorded baseline, not as a vanity score in the sales copy.

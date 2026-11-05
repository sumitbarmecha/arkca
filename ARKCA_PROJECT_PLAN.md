# ARKCA project plan

Status: schedule and checklist reconstructed from the 26 October 2026 brief, checked against the calendar. This file does not mean the client has accepted the dates or the fee.

Company and scope context: [ARKCA_PROJECT_CONTEXT.md](ARKCA_PROJECT_CONTEXT.md). URLs: [ARKCA_URL_SEO_MIGRATION.md](ARKCA_URL_SEO_MIGRATION.md). Architecture: [ARKCA_ARCHITECTURE.md](ARKCA_ARCHITECTURE.md).

---

## 1. Commercial terms as proposed

The later proposal, from the 26 October 2026 brief, is the one to plan against until the client says otherwise. It is not signed.

| Item | Amount | Status |
| --- | --- | --- |
| Total fee | ₹85,000 | Later proposal. Formal acceptance **needs confirmation**. |
| Advance | ₹30,000 | Proposed |
| On go-live, including the agreed SEO implementation | ₹40,000 | Proposed |
| After about 1–2 months, when the first performance report is presented | ₹15,000 | Proposed. This pays for the review window. It does not buy a ranking guarantee. |

An earlier proposal in the 6 October 2026 PRD and contract is **₹1,00,000**: ₹30,000 kickoff, ₹20,000 discovery and design, ₹30,000 development, ₹20,000 launch. The contract’s signature lines are blank. Do not mix the two schedules.

The 1–2 month review in the later proposal starts from go-live. It is not week 8 of the build, and it is not evidence that Google will have moved.

`INV-2026-001` (6 October 2026, due 8 October 2026) is a separate ₹7,500 invoice for the security cleanup. It is not a milestone of the website fee. Whether it was paid is unknown. Do not copy its bank details into other files.

---

## 2. Calendar

### 2.1 Dates that are explicit

| Event | Date given | Calendar check |
| --- | --- | --- |
| Project start | Wednesday 14 October 2026 | 14 October 2026 was a Wednesday. |
| Week 1 planning ends, planning pack to Aditi | Saturday 24 October 2026 | 24 October 2026 was a Saturday. |
| This plan written | Monday 26 October 2026 | The 24 October planning date is already past. No planning PDF was in the workspace. |

### 2.2 Eight-week deadline: three readings

The brief says both “eight weeks from the start date” and “week 1 through Saturday 24 October”. Those are not the same week length. Week 1 in the brief runs Wednesday 14 October through Saturday 24 October, which is 11 days.

| Reading | How it is counted | End date | Use |
| --- | --- | --- | --- |
| A. 56 days after the start date | 14 October 2026 + 56 days | **Wednesday 9 December 2026** | Literal “eight weeks from the start” |
| B. Week 1 ends Saturday 24 October, then seven-day weeks ending Saturday | Week 8 is Saturday 6 December through Saturday 12 December | **Saturday 12 December 2026** | Matches the only Saturday anchor the brief gives |
| C. Ordinary Monday–Sunday weeks, week 1 is the week of 12 October | Week 8 is Monday 30 November through Sunday 6 December | **Sunday 6 December 2026** | Does not match “week 1 through 24 October” |

**The project does not yet have one agreed end date.** Confirm A, B, or another date with Aditi before treating a deadline as missed or met. Do not silently use 9 December.

Under reading B, which is the only one that honours the written Saturday, the later weeks fall like this:

| Week | Dates | Brief’s intent |
| --- | --- | --- |
| 1 | Wed 14 Oct – Sat 24 Oct 2026 | Audit, sitemap, content scope, design direction. Planning pack. **Date passed. Deliverable not found in the workspace.** |
| 2 | Sun 25 Oct – Sat 31 Oct 2026 | Design and development start only after planning approval. |
| 3 | Sun 1 Nov – Sat 7 Nov 2026 | Brief: main website ready by the end of week 3, subject to scope and timely feedback. Under this reading that is **Saturday 7 November 2026**. |
| 4 | Sun 8 Nov – Sat 14 Nov 2026 | SEO implementation, keyword mapping, copy, images, technical SEO, migration prep. |
| 5 | Sun 15 Nov – Sat 21 Nov 2026 | Same block of work. |
| 6 | Sun 22 Nov – Sat 28 Nov 2026 | Same block of work. |
| 7 | Sun 29 Nov – Sat 5 Dec 2026 | Deployment preparation or launch, hosting and Cloudflare-related configuration, analytics, testing, monitoring. The exact host is unresolved. |
| 8 | Sun 6 Dec – Sat 12 Dec 2026 | Final testing, post-launch checks, fixes, client review, handover. |

If the client instead confirms reading A, week 3 does **not** end on 7 November and the table above must be redrawn. The week-3 “main site ready” promise cannot be scheduled until the week definition and the page scope are both fixed.

### 2.3 Conflict with today

On 26 October 2026 the planning pack is late relative to the brief, and design approval has no reference files. Development was not supposed to start before that approval. Starting the Next.js build now would compress weeks 2 and 3 and put the week-3 target at risk under every reading.

The SEO review window of 1–2 months after launch is a separate date. If launch were the end of week 8 under reading B, that review would fall roughly between mid-December 2026 and mid-February 2027, depending on the actual go-live day. It moves if launch moves. It is a report, not a ranking commitment.

### 2.4 Saturday reviews

The brief expects a weekly Saturday progress meeting with Aditi and her team, and iterative page reviews. No meeting notes are in the workspace, so attendance to date is **unknown**.

Suggested standing agenda, not yet agreed:

1. What was completed since the previous Saturday.
2. Pages ready for review, with one consolidated comment round.
3. Decisions needed: facts, scope, redirects, design.
4. What is blocked on the client or the SEO specialist.
5. Whether the end date still holds.

---

## 3. Dependencies that move the date

- Planning approval and a preferred look from Aditi before design is treated as final.
- An agreed page list. The live catalogue is large. “Copy for every current URL” may not fit the fee or week 3. The page scope is **not agreed**.
- SEO specialist named, available, and supplying the keyword-to-URL map during weeks 4–6. The person is **not named**.
- GSC and GA4 access before the redirect winners are chosen and before the baseline report.
- Confirmed legal name, one client-count statement, offices, phone, email recipients, and which utility pages stay.
- Host, DNS access, and a cutover window.
- One set of comments, not parallel edits from several people on the same page.

---

## 4. Risks

| Risk | Why it matters | What to do before building |
| --- | --- | --- |
| Week-1 date already past | The written plan and the calendar disagree with the current state | Reset the planning date in writing |
| Eight-week counting is ambiguous | Three different end dates. The 6 October PRD instead describes an indicative six-week project with no 14 October start. | Pick one schedule with the client. Do not run the six-week and eight-week plans at once. |
| Earlier fee still in the folder | Unsigned contract says ₹1,00,000. Later brief says ₹85,000. | Get a written choice before raising an invoice. |
| Security history | Gambling SEO and unauthorised Search Console owners were documented for August–September 2026. Cleanup is recorded. Entry point is not proven. | Check Search Console owners and leftover spam URLs before launch. Do not treat the hack as ongoing, and do not treat it as fully forgotten. |
| Page scope larger than the fee | About 70 service URLs, 27 posts, plus utility pages | Agree what is migrated as-is, rewritten, or dropped |
| Duplicate URLs | Legacy paths still return 200 with their own canonical | SEO specialist chooses winners using GSC, then the redirect list is frozen |
| Unverified claims | 10,000+ vs 15,000+, goals in the PDF, Gujarat vs the contact page | One approved fact sheet |
| No design reference | Brief forbids assuming a look | Wait for references or a short written direction |
| Host and Cloudflare unspecified | Week 7 cannot be executed as “Cloudflare” in the abstract | Choose DNS, app host, and certificate path |
| SEO results expected at the ₹15,000 review | Competitors, links, and history sit outside the build | State the reporting metrics before launch. Do not promise positions. |
| SQL dump in the project folder | It contains accounts, 2FA material, mail logs, and enquiries | Keep it out of git. Do not paste its private rows into docs. |
| Content defects | Cross-pasted waste streams, “ARKACA”, “I Support” in the contact title, employee quotes in the review block | Copy pass on every page that is rewritten. A full editorial audit of all 27 posts is not done. |
| Feedback latency | Week 3 depends on timely review | One approver, Saturday cadence, silence does not equal approval |

---

## 5. Implementation checklist

Status is set only where this workspace has evidence. **Unknown** means it may have happened outside the workspace.

| # | Item | Status | Evidence |
| --- | --- | --- | --- |
| 1 | Audit and discovery | In progress | Public site and sitemaps reviewed 26 October 2026. Full content read, performance, and accessibility audit not done. |
| 2 | SEO baseline and URL inventory | In progress | 161 sitemap URLs listed. GSC, GA4, and a full HTTP crawl are not done. Rank Math tables in the September dump were not analysed. |
| 3 | Information architecture | Awaiting approval | Existing menu documented. Proposed nav is a recommendation only. |
| 4 | Design and approval | Not started | No references, no approved layout. Planning PDF not in the workspace. |
| 5 | Development setup | Not started | No Next.js app in the workspace. Router and host not chosen. |
| 6 | Page templates and components | Not started | Template list is a proposal. |
| 7 | Content and image integration | Not started | Depends on approved page scope and fact sheet. |
| 8 | SEO implementation | Not started | Depends on the specialist’s map and approved technical rules. |
| 9 | Redirects and migration | Not started | Hypotheses exist. Winners not chosen. |
| 10 | Testing and security | Not started | No app to test. Current homepage is missing common security headers. |
| 11 | Deployment and analytics | Blocked | No host decision, no analytics IDs, no GSC access recorded. |
| 12 | Post-launch verification | Not started | Launch has not happened. |
| 13 | Handover and reporting | Not started | Metrics for the 1–2 month review are not defined. |

### 5.1 Audit and discovery

- [x] Read the live homepage, header, footer, and service menu. Status: complete for the menu structure.
- [x] Fetch About, contact, FAQ, blog index, services hub, and the company profile PDF.
- [ ] Read every service page for copied errors and missing sections. Status: not started as a full pass. Plastic registration has one known cross-paste.
- [ ] Confirm publication page contents visually. Status: text extract was almost empty.
- [ ] Measure mobile layout, contrast, and Core Web Vitals on the current site. Status: not started.
- [ ] Confirm which WordPress plugins are actually active. Status: unknown. Database shows several SEO and mail plugins.

### 5.2 SEO baseline and URL inventory

- [x] Download robots sitemap, Yoast page sitemap, and Yoast post sitemap.
- [x] Record the 14 current pages missing from the robots sitemap.
- [x] Record 27 blog slugs and 41 legacy paths.
- [ ] HTTP-check every legacy URL. Status: 4 sampled.
- [ ] Export GSC pages and queries. Status: blocked on access.
- [ ] Export GA4 landing pages and the current conversion definition. Status: blocked on access.
- [ ] Check manual actions and security issues in GSC. Status: unknown. No incident report was in the workspace.
- [ ] Produce the keyword-to-page map. Status: not started. Owner: SEO specialist.

### 5.3 Information architecture

- [x] Document the existing menu and the hubs it does not link to.
- [ ] Client approves group labels, whether web hosting stays, and whether careers, newsletter, essential forms, and the publication stay. Status: awaiting approval.
- [ ] Freeze the URL policy: preserve `/service/...` unless data says otherwise. Status: proposed.

### 5.4 Design and approval

- [ ] Receive look-and-feel references from Aditi. Status: outstanding.
- [ ] Planning pack: sitemap, page scope, design direction. Status: not found. Original date 24 October 2026 has passed.
- [ ] Approve desktop and mobile nav. Status: not started.
- [ ] Approve the fact sheet used in the design. Status: not started.

### 5.5 Development setup

- [ ] Choose router, rendering, content format, host, and form provider. Status: open.
- [ ] Initialise the Next.js project only after those choices and planning approval. Status: not started.
- [ ] Keep the SQL dump untracked. Status: the file is in the folder. Git status was not the focus of this pass.

### 5.6 Page templates and components

- [ ] Header, footer, service leaf, EPR stream, hub, article, contact, FAQ, legal, 404. Status: not started.

### 5.7 Content and image integration

- [ ] Approved fact sheet. Status: not started.
- [ ] Migrate agreed pages. Status: not started.
- [ ] Replace empty logo alt and document image alts. Status: not started.
- [ ] Optimise images that are actually used. Status: not started.

### 5.8 SEO implementation

- [ ] One H1 per template, unique title and description fields, canonical, breadcrumb.
- [ ] XML sitemap and robots from the indexable route list.
- [ ] Schema types chosen by the specialist, implemented by the developer.
- [ ] Internal links as in the architecture proposal, after approval.
- [ ] Search Console verification and sitemap submission at launch.

### 5.9 Redirects and migration

- [ ] Approved redirect sheet with status, canonical, and GSC columns filled.
- [ ] Implement only approved rows.
- [ ] Keep trailing slashes consistent with the preserved URLs.

### 5.10 Testing and security

- [ ] Every preserved URL returns 200.
- [ ] Every approved redirect returns 301 to the right target.
- [ ] Form validation, success, and failure.
- [ ] Keyboard and mobile nav.
- [ ] No secrets in the repo or the client bundle.

### 5.11 Deployment and analytics

- [ ] Production host, DNS, and certificate.
- [ ] Clarify Cloudflare’s role before calling week 7 done. DNS, CDN proxy, Workers, and Pages are separate choices.
- [ ] GA4 and agreed events.
- [ ] Rollback checked once.

### 5.12 Post-launch verification

- [ ] Old menu URLs and a sample of legacy URLs.
- [ ] Sitemap fetched by Search Console.
- [ ] 404 log reviewed.
- [ ] Form email received at the confirmed inbox.

### 5.13 Handover and reporting

- [ ] Repo, environment variable list (names only), redirect sheet, and content editing notes.
- [ ] Baseline versus the first 1–2 months: indexed pages, clicks, impressions, and the agreed conversions.
- [ ] Written note that movement in those numbers is influenced by competition, links, content depth, and Google’s systems, not by the build alone.

---

## 6. Immediate next step

The next planning action is a decision pack, not a repository:

1. Confirm the end date using one of the readings in section 2.2.
2. Confirm the fee proposal or replace it.
3. Ask Aditi for visual references and for a yes or no on utility pages and web hosting.
4. Ask for GSC and GA4 access, and for the SEO specialist’s name.
5. Approve or amend the proposed navigation in the architecture file.
6. Only then set up the Next.js project.

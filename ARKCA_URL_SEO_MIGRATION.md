# ARKCA URL inventory and SEO migration

Status: audit snapshot taken on **26 October 2026**. This is not an approved redirect map and not a keyword map.

Source of URLs:

- Header and footer links rendered on `https://arkcacorporate.com/`.
- `https://arkcacorporate.com/sitemap.xml` (the file `robots.txt` declares). 91 URLs.
- `https://arkcacorporate.com/page-sitemap.xml` (Yoast). 92 URLs.
- `https://arkcacorporate.com/post-sitemap.xml` (Yoast). 68 URLs.

`/sitemap_index.xml` and `/wp-sitemap.xml` both resolved to the 91-URL `sitemap.xml` on that date. Yoast’s two sitemap files were still publicly fetchable.

Unique URL count across the three files: **161**, including `https://arkcacorporate.com/feed/`.

The WordPress database export in the workspace is dated **27 September 2026** and was not used to invent extra URLs. The live site has changed since that export. A full crawl of every internal link, attachment, and parameter URL has **not** been done. Treat anything absent from this file as **not yet inventoried**, not as “does not exist”.

HTTP status was checked for a sample only. Unchecked URLs are marked **Not sampled**. A 200 in this file means “returned 200 on 26 October 2026”, not “should remain”.

---

## 1. How the three sitemaps disagree

| Set | Count | What it represents |
| --- | --- | --- |
| Robots sitemap `sitemap.xml` | 91 | Subset of current pages and some posts, plus the RSS feed. This is the only sitemap advertised to crawlers. |
| Yoast page sitemap | 92 | Current WordPress pages, including hubs and utility pages the robots sitemap omits. |
| Yoast post sitemap | 68 | 27 blog posts, plus 41 legacy service URLs that are still published as posts. |
| In the page sitemap but not in the robots sitemap | 14 | Hubs, utility pages, advance authorisation, web hosting, `/home-2/`. |
| In the post sitemap but not in the robots sitemap | 56 | 15 blog posts and the legacy service URLs. |
| In the robots sitemap but not in either Yoast sitemap | 1 | `/feed/` only. |

Pages in the Yoast page sitemap that the robots sitemap leaves out:

- `https://arkcacorporate.com/all-services-list/`
- `https://arkcacorporate.com/career-at-arkca/`
- `https://arkcacorporate.com/essential-forms/`
- `https://arkcacorporate.com/frequently-asked-questions/`
- `https://arkcacorporate.com/home-2/`
- `https://arkcacorporate.com/newsletter/`
- `https://arkcacorporate.com/service/`
- `https://arkcacorporate.com/service/business-setup-certifications/`
- `https://arkcacorporate.com/service/certification-and-compliances/`
- `https://arkcacorporate.com/service/epr/`
- `https://arkcacorporate.com/service/other-certification-services/`
- `https://arkcacorporate.com/service/other-services/`
- `https://arkcacorporate.com/service/other-services/advance-authorisation/`
- `https://arkcacorporate.com/service/other-services/web-hosting-and-development-service/`

All of those returned **200** with a self-canonical when sampled, except that this sentence covers the ones in the sample list in section 6. Advance authorisation, the hubs, FAQ, careers, newsletter, essential forms, all-services, web hosting, and `/home-2/` were sampled and returned 200.

---

## 2. Navigation to URL map

Menu parents marked `#` do not have a menu URL even though a hub page exists.

| Menu label | Menu target | Hub that exists but is not the menu target |
| --- | --- | --- |
| Home | `/` | — |
| About Us | `/about-arkca/` | — |
| Our Services | `#` | `/service/` |
| EPR Certification and Compliance | `#` | `/service/epr/` |
| Certificate and Compliance | `#` | `/service/certification-and-compliances/` |
| Business Setup | `#` | `/service/business-setup-certifications/` |
| Other Service | `#` | Split: `/service/other-services/` and `/service/other-certification-services/` |
| Publication | `/a-to-z-epr-series/` | — |
| Blogs | `/blogs/` | — |
| Contact Us | `/contact-us/` | — |

Footer: `/`, `/about-arkca/`, `/blogs/`, `/privacy-policy-of-arkca-corporate/`, `/terms-and-conditions/`.

Homepage buttons: “Check My Compliance Requirement” → `/contact-us/`. “Book Now” → `https://calendly.com/corporatearkca/30min`.

---

## 3. Current service URLs (menu generation)

These are the URLs the header uses. They are the **working canonicals to preserve unless Search Console shows a legacy URL holding the equity**. That choice is not approved.

Slug note: plastic and battery use `/compliance/`. Used oil, e-waste, and tyre use `/compliances/`. Do not “clean this up” without a redirect.

### 3.1 EPR category and task pages

All were in both the robots sitemap and the Yoast page sitemap. HTTP status: **Not sampled individually**, except plastic category and plastic registration, which are live pages fetched for content. Assume in-sitemap URLs are the ones Google is being pointed at. Still verify with a crawl before launch.

Base `https://arkcacorporate.com`

| Path | Role | In header |
| --- | --- | --- |
| `/service/epr/plastic-waste/` | Category | Yes |
| `/service/epr/plastic-waste/registration/` | Task | Yes |
| `/service/epr/plastic-waste/compliance/` | Task | Yes |
| `/service/epr/plastic-waste/credit-transfer/` | Task | Yes |
| `/service/epr/plastic-waste/legal-issues/` | Task | Yes |
| `/service/epr/plastic-waste/surrender/` | Task | Yes |
| `/service/epr/used-oil/` | Category | Yes |
| `/service/epr/used-oil/registration/` | Task | Yes |
| `/service/epr/used-oil/compliances/` | Task | Yes |
| `/service/epr/used-oil/credit-transfer/` | Task | Yes |
| `/service/epr/used-oil/legal-issues/` | Task | Yes |
| `/service/epr/used-oil/surrender/` | Task | Yes |
| `/service/epr/e-waste/` | Category | Yes |
| `/service/epr/e-waste/registration/` | Task | Yes |
| `/service/epr/e-waste/compliances/` | Task | Yes |
| `/service/epr/e-waste/credit-transfer/` | Task | Yes |
| `/service/epr/e-waste/legal-issues/` | Task | Yes |
| `/service/epr/e-waste/surrender/` | Task | Yes |
| `/service/epr/battery-waste/` | Category | Yes |
| `/service/epr/battery-waste/registration/` | Task | Yes |
| `/service/epr/battery-waste/compliance/` | Task | Yes |
| `/service/epr/battery-waste/credit-transfer/` | Task | Yes |
| `/service/epr/battery-waste/legal-issues/` | Task | Yes |
| `/service/epr/battery-waste/surrender/` | Task | Yes |
| `/service/epr/tyre-waste/` | Category | Yes |
| `/service/epr/tyre-waste/registration/` | Task | Yes |
| `/service/epr/tyre-waste/compliances/` | Task | Yes |
| `/service/epr/tyre-waste/credit-transfer/` | Task | Yes |
| `/service/epr/tyre-waste/legal-issues/` | Task | Yes |
| `/service/epr/tyre-waste/surrender/` | Task | Yes |
| `/service/epr/end-of-life-vehicle/` | Category only | Yes |
| `/service/epr/solid-waste-management/` | Category only | Yes |
| `/service/epr/non-ferrous-metal/` | Category only | Yes |
| `/service/epr/packaging-and-sanitary-waste/` | Category only | Yes |
| `/service/epr/construction-and-demolition/` | Category only | Yes |
| `/sso-common-epr-portal/` | Standalone, not under `/service/epr/` | Yes, label “SSO Registration Services” |

EPR task pages for ELV, solid waste, non-ferrous metal, packaging and sanitary waste, and construction and demolition were **not found**. Do not create them until the client confirms the service exists.

### 3.2 Certification and compliances

Parent path: `/service/certification-and-compliances/`. Each row is that path plus the slug. All 20 are in the header and in both sitemaps of current pages.

| Slug | Menu label |
| --- | --- |
| `capexil` | CAPEXIL |
| `eepc` | EEPC |
| `fssai-registration-and-compliance` | FSSAI Registration and Compliance |
| `tds-filing-registration-and-compliance` | TDS Filing Registration and Compliance |
| `spice-board-registration` | Spice Board Registration |
| `iso-certification` | ISO Certification |
| `dsc` | DSC (Digital Signature Certificate) |
| `msme-certification` | MSME Certification |
| `sims-pims-aims-cims` | SIMS \| PIMS \| AIMS \| CIMS |
| `apeda` | APEDA |
| `mpeda` | MPEDA |
| `cepa` | CEPA |
| `cdsco` | CDSCO |
| `wpc` | WPC |
| `wpc-eta` | WPC-ETA |
| `bis-crs` | BIS CRS |
| `lmpc` | LMPC |
| `scomet` | SCOMET |
| `trade-mark` | Trade Mark |
| `trade-license` | Trade License |

CAPEXIL and EEPC have no obvious legacy URL in the post sitemap. The other certification slugs do, under `/certificate-and-compliance/`.

### 3.3 Business setup

Parent path: `/service/business-setup-certifications/`.

| Slug | Menu label |
| --- | --- |
| `dpiit-startup-registration` | DPIIT Startup Registration |
| `gst-registration-and-compliance` | GST Registration and Compliance |
| `roc-compliance` | ROC Compliance |
| `iec-registration-and-compliance` | IEC Registration and Compliance |
| `llp-formation` | LLP Formation |
| `one-person-company` | One Person Company |
| `company-formation` | Company Formation |
| `rcmc` | RCMC |

IEC modification is **not** in this folder. It lives under other certification services. A legacy URL `/business-setup/iec-modification/` still exists in the post sitemap. Do not assume it should redirect into the business-setup folder.

### 3.4 Other services

| Path | Menu label | Robots sitemap |
| --- | --- | --- |
| `/service/other-services/icegate-for-freight-forwarders/` | ICEGATE for Freight Forwarders | Yes |
| `/service/other-services/advance-authorisation/` | Advance Authorisation | **No** |
| `/service/other-certification-services/noc-for-dgft-steel-import-moefcc/` | NOC for DGFT / Steel Import / MoEFCC | Yes |
| `/service/other-certification-services/adcode/` | ADCODE | Yes |
| `/service/other-certification-services/iec-renewal/` | IEC Renewal | Yes |
| `/service/other-certification-services/iec-modification/` | IEC Modification | Yes |
| `/service/other-certification-services/ice-gate-modification/` | ICE GATE Modification | Yes |
| `/service/other-certification-services/ice-gate/` | ICE Gate | Yes |
| `/service/other-services/web-hosting-and-development-service/` | Not in the header | **No** |

---

## 4. Corporate, utility, and hub URLs

| URL | Title observed | Header | Robots sitemap | Sampled status |
| --- | --- | --- | --- | --- |
| `https://arkcacorporate.com/` | EPR Certificate Registration Online \| ARKCA Corporate | Yes | Yes | 200, canonical self. Two welcome headings plus many service H1s. |
| `https://arkcacorporate.com/about-arkca/` | About Us - ARKCA Corporate | Yes | Yes | 200 (fetched) |
| `https://arkcacorporate.com/a-to-z-epr-series/` | A to Z EPR Series - ARKCA Corporate | Yes | Yes | 200. Body content not extracted. |
| `https://arkcacorporate.com/blogs/` | Latest Blog Posts & Insights \| Expert Articles & Tips | Yes | Yes | 200. Page 2 also 200: `/blogs/page/2/` |
| `https://arkcacorporate.com/contact-us/` | Contact Us \| ARKCA Corporate - I Support | Yes | Yes | 200, canonical self |
| `https://arkcacorporate.com/privacy-policy-of-arkca-corporate/` | Privacy Policy \| ARKCA Corporate Solutions Pvt. Ltd. | Footer | Yes | 200, canonical self |
| `https://arkcacorporate.com/terms-and-conditions/` | Terms and Conditions \| ARKCA Corporate \| Update 2026 | Footer | Yes | 200, canonical self |
| `https://arkcacorporate.com/frequently-asked-questions/` | FAQ \| ARKCA Corporate Solutions Pvt. Ltd. | No | No | 200, canonical self |
| `https://arkcacorporate.com/career-at-arkca/` | Careers \| Join Our Team … | No | No | 200, canonical self |
| `https://arkcacorporate.com/newsletter/` | Subscribe to Our Free Newsletter … | No | No | 200, canonical self |
| `https://arkcacorporate.com/essential-forms/` | Fill the form for EPR Credit Transfer \| ARKCA Corporate | No | No | 200, canonical self |
| `https://arkcacorporate.com/all-services-list/` | All EPR Certification & Compliance Services, ARKCA Corporate | No | No | 200, canonical self |
| `https://arkcacorporate.com/home-2/` | Home2 - ARKCA Corporate | No | No | 200, canonical self. Candidate to retire. Not approved. |
| `https://arkcacorporate.com/service/` | Our Services \| ARKCA Corporate Solution Pvt. Ltd. | No (menu is `#`) | No | 200, canonical self |
| `https://arkcacorporate.com/service/epr/` | EPR Certification and Compliance - ARKCA Corporate | No | No | 200, canonical self |
| `https://arkcacorporate.com/service/certification-and-compliances/` | Certification and Compliances - ARKCA Corporate | No | No | 200, canonical self |
| `https://arkcacorporate.com/service/business-setup-certifications/` | Business Setup Certifications - ARKCA Corporate | No | No | 200, canonical self |
| `https://arkcacorporate.com/service/other-services/` | Other Services - ARKCA Corporate | No | No | 200, canonical self |
| `https://arkcacorporate.com/service/other-certification-services/` | Other Certification Services - ARKCA Corporate | No | No | 200, canonical self |
| `https://arkcacorporate.com/feed/` | RSS | No | Yes | Not sampled as a page. Do not treat as an HTML landing page. |

`/blogs/page/2/` is a paginated archive, not a separate article. Handle archives in the new site deliberately. Do not create a fake article at that path.

---

## 5. Blog URLs

27 posts are in Yoast’s post sitemap. 12 of them are also in the robots sitemap. The other 15 are live URLs Google may still have discovered from the blog index even though the advertised sitemap omits them.

“In robots sitemap” means the post URL appeared in `sitemap.xml` on 26 October 2026.

| Path under `/blogs/` | In robots sitemap |
| --- | --- |
| `recycled-plastic-content-in-packaging-in-2026-new-epr-rules-and-how-brands-can-comply` | No |
| `plastic-waste-epr-registration-online-complete-cpcb-guide-for-pibos-in-2026` | No |
| `common-epr-mistakes-to-avoid` | Yes |
| `got-iec-you-may-still-be-missing-this-export-compliance-step` | Yes |
| `bis-certification-what-every-manufacturer-needs-to-know-before-selling-in-india` | Yes |
| `the-msme-digital-divide-why-small-recyclers-struggle-on-epr-portals-and-practical-fixes` | Yes |
| `cpcb-extended-epr-return-deadlines-for-battery-e-waste-heres-why` | Yes |
| `demystifying-scope-3-emissions-how-small-everyday-choices-can-cut-your-personal-carbon-footprint` | Yes |
| `extended-producer-responsibility-epr-business-compliance-what-every-brand-needs-to-know` | Yes |
| `e-waste-battery-recycling-2-0-recovering-critical-minerals-for-a-green-future` | Yes |
| `why-businesses-are-facing-notices-for-poor-waste-management` | Yes |
| `the-business-value-of-sustainable-packaging` | Yes |
| `waiting-for-your-epr-certificate-heres-what-you-need-to-know` | Yes |
| `what-businesses-must-know-about-epr-plastic-compliance-filing-and-regulations` | Yes |
| `smart-steps-in-solid-waste-management-for-a-greener-and-cleaner-future` | No |
| `how-cpcb-strengthens-indias-waste-management-and-recycling-framework-through-epr` | No |
| `what-is-the-elv-and-epr-certificate-step-by-step-process-for-vehicles` | No |
| `how-does-single-sign-on-sso-help-in-accessing-epr-portals` | No |
| `epr-plastic-registration-and-plasticwaste-recycling` | No |
| `can-electronic-business-landscape-ever-thrive` | No |
| `automated-waste-treatment-impact-healthcare-waste-disposal` | No |
| `how-microplastics-enter-the-human-body` | No |
| `top-cities-in-india-with-low-plastic-pollution` | No |
| `importance-of-construction-and-demolition-waste-management-for-sustainability` | No |
| `making-the-recycling-movement-from-awareness-to-action-through-peoples-efforts` | No |
| `evls-registration-through-eprextended-producer-responsibility-portals-in-india` | No |
| `epr-filling` | No |

`/blogs/epr-filling/` was sampled: **200**, canonical is itself, title “What is extended producer responsibility filing about?”. Note the slug spelling “filling”.

Homepage carousel links include posts both inside and outside the robots sitemap. Keeping the post slug on the new site is the safe default. Merging or deleting a post requires a redirect and client approval.

Blog pagination, categories, tags, and author archives were not inventoried. `/blogs/page/2/` exists. Category and tag URLs are **TBD**.

---

## 6. Legacy URLs still published

These 41 URLs are in the Yoast **post** sitemap, not the page sitemap. They use an older path shape. They are the main duplicate-content risk.

Probable current targets below are **hypotheses for the SEO specialist**. They are not approved redirects. Search Console must show which URL has impressions before the losing URL is redirected.

### 6.1 Sampled on 26 October 2026

| Legacy URL | Result | Canonical observed | Hypothesis, not approved |
| --- | --- | --- | --- |
| `/certificate-and-compliance/fssai-registration-and-compliance/` | **301** | n/a, it redirects | Already points at `/service/certification-and-compliances/fssai-registration-and-compliance/` |
| `/epr-certification-and-compliance/epr-for-plastic-waste/` | **200** | self | `/service/epr/plastic-waste/` |
| `/business-setup/company-formation/` | **200** | self | `/service/business-setup-certifications/company-formation/` |
| `/other-service/adcode/` | **200** | self | `/service/other-certification-services/adcode/` |

The rest of this section was **not** HTTP-checked. Do not assume the FSSAI 301 applies to every `/certificate-and-compliance/` URL.

### 6.2 EPR legacy category URLs

No legacy URL was found for the registration, compliance, credit, legal, or surrender child pages. The duplication found so far is at category level.

| Legacy path | Possible current path |
| --- | --- |
| `/epr-certification-and-compliance/epr-for-plastic-waste/` | `/service/epr/plastic-waste/` |
| `/epr-certification-and-compliance/epr-for-used-oil/` | `/service/epr/used-oil/` |
| `/epr-certification-and-compliance/epr-for-e-waste/` | `/service/epr/e-waste/` |
| `/epr-certification-and-compliance/epr-for-battery-waste/` | `/service/epr/battery-waste/` |
| `/epr-certification-and-compliance/epr-for-tyre-waste/` | `/service/epr/tyre-waste/` |
| `/epr-certification-and-compliance/epr-for-elv/` | `/service/epr/end-of-life-vehicle/` |
| `/epr-certification-and-compliance/epr-for-solid-waste-management/` | `/service/epr/solid-waste-management/` |
| `/epr-certification-and-compliance/epr-for-non-ferrous-metal/` | `/service/epr/non-ferrous-metal/` |
| `/epr-certification-and-compliance/epr-for-packaging-and-sanitary-waste/` | `/service/epr/packaging-and-sanitary-waste/` |
| `/epr-certification-and-compliance/epr-for-construction-and-demolition/` | `/service/epr/construction-and-demolition/` |

### 6.3 Certification legacy URLs

Pattern: `/certificate-and-compliance/{slug}/` → possibly `/service/certification-and-compliances/{slug}/`.

Slugs present: `trade-license`, `trade-mark`, `scomet`, `lmpc`, `bis-crs`, `wpc-eta`, `wpc`, `cdsco`, `cepa`, `mpeda`, `apeda`, `sims-pims-aims-cims`, `msme-certification`, `dsc`, `spice-board-registration`, `iso-certification`, `tds-filing-registration-and-compliance`, `fssai-registration-and-compliance` (301 confirmed).

Not in this legacy list: `capexil`, `eepc`.

### 6.4 Business-setup legacy URLs

Pattern: `/business-setup/{slug}/` → possibly `/service/business-setup-certifications/{slug}/`, **except IEC modification**.

Slugs: `iec-modification`, `rcmc`, `company-formation`, `one-person-company`, `llp-formation`, `iec-registration-and-compliance`, `roc-compliance`, `gst-registration-and-compliance`, `dpiit-startup-registration`.

`/business-setup/iec-modification/` likely belongs with `/service/other-certification-services/iec-modification/`, not with the business-setup hub. Confirm before redirecting.

### 6.5 Other-service legacy URLs

| Legacy path | Possible current path |
| --- | --- |
| `/other-service/ice-gate/` | `/service/other-certification-services/ice-gate/` |
| `/other-service/ice-gate-modification/` | `/service/other-certification-services/ice-gate-modification/` |
| `/other-service/iec-renewal/` | `/service/other-certification-services/iec-renewal/` |
| `/other-service/adcode/` | `/service/other-certification-services/adcode/` |
| `/other-service/noc-for-dgft-steel-import-moefcc/` | `/service/other-certification-services/noc-for-dgft-steel-import-moefcc/` |

No legacy URL was found for freight-forwarder ICEGATE, advance authorisation, or web hosting.

---

## 7. URLs not yet audited

Mark these pending. Do not fabricate them.

- Attachment and PDF URLs other than the known company profile PDF.
- WordPress media pages (`/wp-content/uploads/...`) that may be linked or indexed.
- Category, tag, and author archives.
- Any URL only present in the September database and since deleted or added after the sitemaps were read.
- Query-parameter duplicates (`?utm`, `?page`, Elementor actions). The homepage contains Elementor off-canvas hashes. Those are not separate pages.
- Inbound links from other domains.
- Every legacy URL’s real HTTP status and canonical. Only four were sampled.
- Search Console landing pages that might not be in any sitemap.
- Hreflang. None was observed. The site appears English-only. Confirm before adding a language version.
- PDF publications inside `/a-to-z-epr-series/`, if any.

Known asset, not a landing page: `https://arkcacorporate.com/wp-content/uploads/2026/02/ARKCA_Corporate_Profile.pdf`.

---

## 8. Historical spam URLs

The 6 October 2026 incident summary says gambling SEO and canonicals (PLNTOGEL, TOTO4D, SLOT GACOR) were injected and indexed, then removed or unindexed. None of those strings appear in the 161 URLs collected on 26 October 2026.

That does not close the item. Search Console may still list old spam URLs that are absent from the current sitemaps. Before launch:

- Export the page index and coverage report.
- Confirm the unauthorised owners named in the incident summary are gone.
- If a spam URL still returns 200, do not redirect it to a money page. Remove it and let it 404 or 410 once Search Console has been checked. The right status is an SEO decision, not a guess.
- Do not add the spam terms to the new sitemap, content, or redirect table.

## 9. Migration rules to apply when the map is approved

1. Export GSC pages and queries, and GA4 landing pages and conversions, before choosing winners.
2. One indexable URL per offer. The other URLs 301 to it. Do not leave two self-canonical 200s for the same service.
3. Prefer the menu URL under `/service/...` unless data shows the legacy URL is the one users and Google actually use.
4. Keep blog slugs, including awkward ones (`epr-filling`, `evls-registration-...`, `plasticwaste`), unless a redirect is explicit.
5. Match the live trailing-slash style.
6. Return a real 404 for unknown paths, with a way to reach services and contact. Do not soft-404.
7. Generate one sitemap index from the routes that should be indexed. Leave out drafts, thank-you pages if any, `/home-2/`, and feeds.
8. After DNS cutover, submit the sitemap, inspect a sample of old URLs, and watch coverage and 404 reports for at least the post-launch window in the plan.
9. Keyword, title, and H1 mapping is a separate deliverable from the SEO specialist. Empty cells stay empty until that file exists.

### Suggested columns for the working redirect sheet

When the specialist starts, extend this inventory rather than replacing it:

`legacy_url`, `http_status`, `canonical`, `gsc_clicks`, `gsc_impressions`, `ga4_sessions`, `proposed_target`, `decision` (keep / 301 / noindex / gone), `approved_by`, `date`.

All of those measurement columns are **TBD** today.

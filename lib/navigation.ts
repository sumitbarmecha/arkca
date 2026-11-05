/**
 * Navigation labels are a working information architecture.
 * Every href is a route verified on the live site (26 October 2026 audit).
 * Labels do not change those paths.
 *
 * Not linked from the header menu, on purpose:
 * - EPR task pages (registration, compliance, credit transfer, legal issues, surrender)
 * - Web hosting: /service/other-services/web-hosting-and-development-service/
 * The publication page `/a-to-z-epr-series/` is linked from the footer, not the header.
 *
 * Trademark and trade licence live under Licences, not Business Setup.
 * SIMS/PIMS/AIMS/CIMS and SCOMET live under the licences URL tree, and are
 * listed in Import & Customs because that is the task they describe.
 * Import & Customs has two parent hubs, not one. Both are linked.
 */

export type MenuLink = {
  label: string;
  href: string;
  hint?: string;
};

export type MenuGroup = {
  title: string;
  links: MenuLink[];
};

export type MenuExplore = {
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  summary?: string;
  groups?: MenuGroup[];
  explore?: MenuExplore[];
  guidance?: {
    title: string;
    text: string;
    href: string;
    linkLabel: string;
  };
};

export const consultationHref = "https://calendly.com/corporatearkca/30min";

const licences = "/service/certification-and-compliances";
const business = "/service/business-setup-certifications";
const customs = "/service/other-certification-services";
const freight = "/service/other-services";

export const primaryNav: NavItem[] = [
  {
    id: "epr",
    label: "EPR & Environmental",
    href: "/service/epr/",
    summary: "Registrations for the waste streams covered by India's EPR rules.",
    explore: [{ label: "Explore all EPR services", href: "/service/epr/" }],
    groups: [
      {
        title: "Plastic and packaging",
        links: [
          { label: "Plastic waste", href: "/service/epr/plastic-waste/" },
          {
            label: "Packaging and sanitary waste",
            href: "/service/epr/packaging-and-sanitary-waste/",
          },
        ],
      },
      {
        title: "Electronics and batteries",
        links: [
          { label: "E-waste", href: "/service/epr/e-waste/" },
          { label: "Battery waste", href: "/service/epr/battery-waste/" },
        ],
      },
      {
        title: "Tyres, oil and vehicles",
        links: [
          { label: "Tyre waste", href: "/service/epr/tyre-waste/" },
          { label: "Used oil", href: "/service/epr/used-oil/" },
          { label: "End-of-life vehicles", href: "/service/epr/end-of-life-vehicle/" },
        ],
      },
      {
        title: "Other environmental compliance",
        links: [
          { label: "Solid waste", href: "/service/epr/solid-waste-management/" },
          { label: "Non-ferrous metal", href: "/service/epr/non-ferrous-metal/" },
          {
            label: "Construction and demolition",
            href: "/service/epr/construction-and-demolition/",
          },
          {
            label: "SSO registration",
            href: "/sso-common-epr-portal/",
            hint: "Common EPR portal access",
          },
        ],
      },
    ],
    guidance: {
      title: "Not sure which stream applies?",
      text: "The obligation depends on what the business places on the Indian market.",
      href: consultationHref,
      linkLabel: "Book a consultation",
    },
  },
  {
    id: "licences",
    label: "Licences & Certifications",
    href: `${licences}/`,
    summary: "Product, food and export registrations used to sell or ship from India.",
    explore: [{ label: "Explore licences and certifications", href: `${licences}/` }],
    groups: [
      {
        title: "Product and market compliance",
        links: [
          { label: "BIS / CRS", href: `${licences}/bis-crs/`, hint: "Product certification" },
          { label: "WPC", href: `${licences}/wpc/`, hint: "Wireless approval" },
          { label: "WPC–ETA", href: `${licences}/wpc-eta/`, hint: "Equipment type approval" },
          { label: "LMPC", href: `${licences}/lmpc/`, hint: "Packaged commodities" },
          { label: "FSSAI", href: `${licences}/fssai-registration-and-compliance/`, hint: "Food licensing" },
          { label: "CDSCO", href: `${licences}/cdsco/`, hint: "Drugs and medical devices" },
        ],
      },
      {
        title: "Export registrations",
        links: [
          { label: "APEDA", href: `${licences}/apeda/`, hint: "Agricultural exports" },
          { label: "MPEDA", href: `${licences}/mpeda/`, hint: "Marine exports" },
          { label: "Spice Board", href: `${licences}/spice-board-registration/` },
          { label: "CAPEXIL", href: `${licences}/capexil/`, hint: "Export promotion council" },
          { label: "EEPC", href: `${licences}/eepc/`, hint: "Engineering exports" },
          { label: "CEPA", href: `${licences}/cepa/`, hint: "Trade-agreement certificate" },
        ],
      },
      {
        title: "Business credentials",
        links: [
          { label: "ISO certification", href: `${licences}/iso-certification/` },
          { label: "MSME / Udyam", href: `${licences}/msme-certification/` },
          { label: "DSC", href: `${licences}/dsc/`, hint: "Digital signature" },
          { label: "Trade mark", href: `${licences}/trade-mark/` },
          { label: "Trade licence", href: `${licences}/trade-license/` },
          {
            label: "TDS filing",
            href: `${licences}/tds-filing-registration-and-compliance/`,
            hint: "Tax deducted at source",
          },
        ],
      },
    ],
  },
  {
    id: "business",
    label: "Business Setup",
    href: `${business}/`,
    summary: "Company formation and the registrations that follow incorporation.",
    explore: [{ label: "Explore business setup", href: `${business}/` }],
    groups: [
      {
        title: "Company formation",
        links: [
          { label: "Company formation", href: `${business}/company-formation/` },
          { label: "LLP formation", href: `${business}/llp-formation/` },
          { label: "One person company", href: `${business}/one-person-company/` },
          { label: "DPIIT startup registration", href: `${business}/dpiit-startup-registration/` },
        ],
      },
      {
        title: "Registrations after setup",
        links: [
          { label: "GST registration", href: `${business}/gst-registration-and-compliance/` },
          { label: "ROC compliance", href: `${business}/roc-compliance/` },
          { label: "IEC registration", href: `${business}/iec-registration-and-compliance/` },
          { label: "RCMC", href: `${business}/rcmc/`, hint: "Export membership certificate" },
        ],
      },
    ],
  },
  {
    id: "import",
    label: "Import & Customs",
    href: `${customs}/`,
    summary: "Customs, DGFT and IEC filings. These pages currently sit on two hubs.",
    explore: [
      { label: "Customs and DGFT services", href: `${customs}/` },
      { label: "Freight and authorisations", href: `${freight}/` },
    ],
    groups: [
      {
        title: "Customs and DGFT",
        links: [
          {
            label: "DGFT, steel and MoEFCC NOC",
            href: `${customs}/noc-for-dgft-steel-import-moefcc/`,
          },
          { label: "AD code", href: `${customs}/adcode/`, hint: "Authorised dealer code" },
          { label: "ICEGATE", href: `${customs}/ice-gate/`, hint: "Customs filing system" },
          { label: "ICEGATE modification", href: `${customs}/ice-gate-modification/` },
          {
            label: "ICEGATE for freight forwarders",
            href: `${freight}/icegate-for-freight-forwarders/`,
          },
          { label: "Advance authorisation", href: `${freight}/advance-authorisation/` },
        ],
      },
      {
        title: "Import and export filings",
        links: [
          { label: "IEC renewal", href: `${customs}/iec-renewal/` },
          { label: "IEC modification", href: `${customs}/iec-modification/` },
          {
            label: "SIMS, PIMS, AIMS and CIMS",
            href: `${licences}/sims-pims-aims-cims/`,
            hint: "Import monitoring systems",
          },
          {
            label: "SCOMET",
            href: `${licences}/scomet/`,
            hint: "Sensitive export authorisation",
          },
        ],
      },
    ],
  },
  { id: "insights", label: "Insights", href: "/blogs/" },
  { id: "about", label: "About", href: "/about-arkca/" },
  { id: "contact", label: "Contact", href: "/contact-us/" },
];

export const footerExplore: MenuLink[] = [
  { label: "Home", href: "/" },
  { label: "About ARKCA", href: "/about-arkca/" },
  { label: "Insights", href: "/blogs/" },
  { label: "Publications", href: "/a-to-z-epr-series/" },
  { label: "Frequently asked questions", href: "/frequently-asked-questions/" },
  { label: "Contact", href: "/contact-us/" },
];

export const footerServiceGroups: MenuGroup[] = [
  {
    title: "EPR and environmental",
    links: [
      { label: "All EPR services", href: "/service/epr/" },
      { label: "Plastic waste", href: "/service/epr/plastic-waste/" },
      { label: "E-waste", href: "/service/epr/e-waste/" },
      { label: "Battery waste", href: "/service/epr/battery-waste/" },
      { label: "Tyre waste", href: "/service/epr/tyre-waste/" },
    ],
  },
  {
    title: "Licences and certifications",
    links: [
      { label: "All licences", href: "/service/certification-and-compliances/" },
      { label: "BIS / CRS", href: "/service/certification-and-compliances/bis-crs/" },
      { label: "WPC", href: "/service/certification-and-compliances/wpc/" },
      { label: "LMPC", href: "/service/certification-and-compliances/lmpc/" },
    ],
  },
  {
    title: "Business and import",
    links: [
      { label: "Business setup", href: "/service/business-setup-certifications/" },
      { label: "Import and customs", href: "/service/other-certification-services/" },
    ],
  },
];

export const legalLinks: MenuLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy-of-arkca-corporate/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
];

export const contactDetails = {
  email: "certificate@arkcacorporate.com",
  phoneDisplay: "+91 9316631170",
  phoneHref: "+919316631170",
};

/** Profiles linked from the current public website. The LinkedIn slug is spelled as published. */
export const socialLinks: MenuLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/arkcacorporatesolution" },
  { label: "Instagram", href: "https://www.instagram.com/arkcacorporate/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/arkca-corporte-solutions/" },
  { label: "X", href: "https://x.com/arkcacorporate?s=08" },
  { label: "YouTube", href: "https://www.youtube.com/@ARKCACorporate" },
];

export function isCurrentPath(pathname: string, href: string): boolean {
  const current = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const target = href.endsWith("/") ? href : `${href}/`;
  if (target === "/") return current === "/";
  return current === target || current.startsWith(target);
}

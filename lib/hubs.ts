import { primaryNav, type MenuGroup, type MenuLink } from "@/lib/navigation";
import type { FaqItem } from "@/components/home/FaqAccordion";

/**
 * Service hub pages. These are the group URLs that already return 200 on the live site.
 *
 * The live hub pages carry no body copy, so everything here is new, general wording.
 * It makes no claims about fees, timelines, outcomes, client numbers or legal specifics.
 * Have the client confirm it before launch.
 */

export type HubStep = { title: string; text: string };

export type Hub = {
  slug: string;
  path: string;
  /** Short name used in breadcrumbs, cards and menus. */
  name: string;
  h1: string;
  metaTitle: string;
  description: string;
  lead: string;
  /** Who the group is for. */
  audience: string[];
  /** Children whose href starts with one of these belong to the hub. */
  prefixes: string[];
  steps: HubStep[];
  faqs: FaqItem[];
  /** Blog category shown as "Related insights", if any. */
  insightCategory?: string;
  /** Other hub worth a mention at the bottom. */
  seeAlso?: string;
  /** Wording for the "not sure" card. */
  notSure: { title: string; text: string };
};

const consult: FaqItem["link"] = {
  label: "Book a consultation",
  href: "https://calendly.com/corporatearkca/30min",
};

export const hubs: Hub[] = [
  {
    slug: "epr",
    path: "/service/epr/",
    name: "EPR & Environmental",
    h1: "EPR Certification and Compliance",
    metaTitle: "EPR Certification and Compliance Services | ARKCA Corporate",
    description:
      "ARKCA Corporate Solutions helps producers, importers and brand owners register and comply under India's EPR rules for plastic, e-waste, battery, tyre, used oil and other waste streams.",
    lead: "Extended Producer Responsibility (EPR) rules make businesses that place certain products on the Indian market responsible for the waste those products become. ARKCA helps you work out which EPR streams apply to you, then handles the registrations and filings that follow.",
    audience: ["Producers", "Importers", "Brand owners", "Recyclers"],
    prefixes: ["/service/epr/", "/sso-common-epr-portal/"],
    steps: [
      {
        title: "Identify your stream",
        text: "Tell us what you make, import or sell. We confirm which waste streams apply and in what role.",
      },
      {
        title: "Prepare the paperwork",
        text: "You get a document checklist for your case, and we review your documents before anything is filed.",
      },
      {
        title: "Register and file",
        text: "We submit the application on the official portal and follow it through.",
      },
      {
        title: "Stay compliant",
        text: "Annual returns, credit transfers and renewals stay on the calendar so a deadline does not catch you out.",
      },
    ],
    faqs: [
      {
        question: "Which EPR streams does ARKCA cover?",
        answer:
          "Plastic waste, e-waste, battery waste, tyre waste and used oil, plus end-of-life vehicles, solid waste management, non-ferrous metal, packaging and sanitary waste, and construction and demolition. We also help with SSO registration for the common EPR portal.",
      },
      {
        question: "Who has to comply with EPR?",
        answer:
          "It depends on the stream and on your role. Producers, importers and brand owners are the usual starting point, and some streams also have duties for recyclers and others in the chain. A short consultation is the quickest way to confirm your position.",
        link: consult,
      },
      {
        question: "What comes after registration?",
        answer:
          "Registration is usually the start of ongoing duties such as annual returns and, in some streams, credit transfers. Authorities also update deadlines and portal requirements from time to time, which is why we track these for you.",
        link: { label: "Read our latest insights", href: "/blogs/" },
      },
    ],
    insightCategory: "EPR",
    notSure: {
      title: "Not sure which stream applies?",
      text: "The obligation depends on what your business places on the Indian market. Tell us what you make, import or sell and we will map it for you.",
    },
  },
  {
    slug: "certification-and-compliances",
    path: "/service/certification-and-compliances/",
    name: "Licences & Certifications",
    h1: "Licences, Certifications and Compliances",
    metaTitle: "Licences, Certifications and Compliances | ARKCA Corporate",
    description:
      "ARKCA Corporate Solutions helps Indian businesses with product approvals, food licences, export registrations and business credentials such as BIS CRS, WPC, FSSAI, ISO and trade mark.",
    lead: "Many products and businesses need an approval, licence or registration before they can be sold, shipped or operated in India. ARKCA helps you identify the right one and handles the application, from product approvals and food licences to export registrations and business credentials.",
    audience: [
      "Manufacturers",
      "Importers",
      "Exporters",
      "Food and agri businesses",
      "Brand owners",
    ],
    prefixes: ["/service/certification-and-compliances/"],
    steps: [
      {
        title: "Find the right approval",
        text: "Describe your product, business or export plan. We identify which licence or certificate applies.",
      },
      {
        title: "Gather your documents",
        text: "You receive a checklist for that specific approval, and we review what you have before applying.",
      },
      {
        title: "Apply and follow through",
        text: "We prepare and submit the application and keep you updated until a decision.",
      },
      {
        title: "Keep it valid",
        text: "Renewals, returns and changes in your business are tracked so the approval stays in force.",
      },
    ],
    faqs: [
      {
        question: "How do I know which licence or certificate I need?",
        answer:
          "It depends on what you sell, import or export and where it is sold. For example, a food business, an electronics importer and an agricultural exporter each deal with different bodies. Tell us about your activity and we will map the approvals that apply.",
        link: consult,
      },
      {
        question: "Can you help with more than one approval at a time?",
        answer:
          "Yes. Many businesses need several approvals, and we plan the order so that one does not hold up another.",
      },
      {
        question: "Do licences and certificates need to be renewed?",
        answer:
          "Many do, but rules and validity differ for each one, so we confirm this for your specific approval before you apply.",
      },
    ],
    notSure: {
      title: "Not sure which approval you need?",
      text: "Tell us about your product or business and we will point you to the right licences and certificates.",
    },
  },
  {
    slug: "business-setup-certifications",
    path: "/service/business-setup-certifications/",
    name: "Business Setup",
    h1: "Business Setup Certifications",
    metaTitle: "Business Setup and Registrations in India | ARKCA Corporate",
    description:
      "ARKCA Corporate Solutions supports company, LLP and one person company formation, DPIIT startup recognition, and the GST, ROC, IEC and RCMC registrations that follow.",
    lead: "Starting or restructuring a business in India means choosing a structure and then completing the registrations that follow. ARKCA supports company, LLP and one person company formation, startup recognition, and the GST, ROC, IEC and RCMC registrations that businesses commonly need next.",
    audience: ["Founders", "Startups", "Growing businesses", "New exporters and importers"],
    prefixes: ["/service/business-setup-certifications/"],
    steps: [
      {
        title: "Choose your structure",
        text: "We talk through your plans and help you compare company, LLP and one person company options.",
      },
      {
        title: "Incorporate",
        text: "We prepare the documents and handle the incorporation filings.",
      },
      {
        title: "Register for what follows",
        text: "GST, IEC, RCMC and other registrations are lined up in a sensible order.",
      },
      {
        title: "Keep your filings current",
        text: "Annual and periodic filings such as ROC and GST compliance stay on the calendar.",
      },
    ],
    faqs: [
      {
        question: "Which business structure should I choose?",
        answer:
          "It depends on how many owners you have, how you plan to raise money and what obligations you are prepared to carry. We walk through the options in a consultation so you can decide with the trade-offs in view.",
        link: consult,
      },
      {
        question: "Can ARKCA help after the company is set up?",
        answer:
          "Yes. Registrations such as GST, IEC and RCMC, and ongoing compliance such as ROC filings, are handled by the same team.",
      },
      {
        question: "Do I need an IEC to export or import?",
        answer:
          "In general, businesses that import or export goods need an Importer-Exporter Code. We confirm what applies to your case and help with the registration.",
        link: {
          label: "See IEC registration",
          href: "/service/business-setup-certifications/iec-registration-and-compliance/",
        },
      },
    ],
    notSure: {
      title: "Starting something new?",
      text: "Share your plans and we will suggest a structure and the registrations to line up first.",
    },
  },
  {
    slug: "other-certification-services",
    path: "/service/other-certification-services/",
    name: "Customs & DGFT",
    h1: "Import, Customs and DGFT Services",
    metaTitle: "Import, Customs and DGFT Services | ARKCA Corporate",
    description:
      "ARKCA Corporate Solutions helps with IEC renewal and modification, AD code, ICEGATE, and DGFT, steel and MoEFCC no-objection certificates for importers and exporters.",
    lead: "Importing and exporting involves filings with customs and DGFT, along with codes and no-objection certificates. ARKCA helps with IEC renewals and changes, AD code, ICEGATE registration and updates, and DGFT, steel and MoEFCC NOCs.",
    audience: ["Importers", "Exporters", "Traders", "Manufacturers"],
    prefixes: ["/service/other-certification-services/"],
    steps: [
      {
        title: "Tell us what you trade",
        text: "We look at what you import or export and which filing or code is involved.",
      },
      {
        title: "Check your records",
        text: "We review your existing codes and registrations, and flag what needs renewing or changing.",
      },
      {
        title: "File and follow",
        text: "We submit the application or update and follow it through.",
      },
      {
        title: "Keep it current",
        text: "Details that change, such as addresses or authorised persons, are updated so filings keep working.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between IEC renewal and IEC modification?",
        answer:
          "Renewal keeps your existing code active. Modification updates the details recorded against it, such as address or contact information. We check which one applies to you.",
        link: consult,
      },
      {
        question: "Can you help if my ICEGATE details are out of date?",
        answer:
          "Yes. ICEGATE modification updates the registration details used for customs filings, and we can handle the update for you.",
        link: {
          label: "See ICEGATE modification",
          href: "/service/other-certification-services/ice-gate-modification/",
        },
      },
    ],
    insightCategory: "Import & Customs",
    seeAlso: "other-services",
    notSure: {
      title: "Unsure which filing you need?",
      text: "Describe what you import or export and we will confirm the codes and filings involved.",
    },
  },
  {
    slug: "other-services",
    path: "/service/other-services/",
    name: "Freight & Authorisations",
    h1: "Freight and Authorisation Services",
    metaTitle: "Freight and Authorisation Services | ARKCA Corporate",
    description:
      "ARKCA Corporate Solutions supports ICEGATE access for freight forwarders and Advance Authorisation applications for exporters.",
    lead: "Some trade work needs specific access or authorisations. ARKCA supports freight forwarders with ICEGATE access and helps exporters with Advance Authorisation, which allows duty-free import of inputs used in export production.",
    audience: ["Freight forwarders", "Exporters", "Manufacturers"],
    prefixes: ["/service/other-services/"],
    steps: [
      {
        title: "Explain your need",
        text: "Tell us your role in the supply chain and what you are trying to move or produce.",
      },
      {
        title: "Prepare the application",
        text: "We list the documents required for your case and review them.",
      },
      {
        title: "Submit and follow up",
        text: "We file the application and follow it through to a decision.",
      },
    ],
    faqs: [
      {
        question: "What is Advance Authorisation?",
        answer:
          "It is a DGFT scheme that allows duty-free import of inputs used to make export products. Eligibility and conditions depend on your products and export plan, which we review with you.",
        link: {
          label: "See Advance Authorisation",
          href: "/service/other-services/advance-authorisation/",
        },
      },
      {
        question: "Does ARKCA help freight forwarders with ICEGATE?",
        answer:
          "Yes. We support freight forwarders with ICEGATE access so they can file with customs.",
        link: {
          label: "See ICEGATE for freight forwarders",
          href: "/service/other-services/icegate-for-freight-forwarders/",
        },
      },
    ],
    seeAlso: "other-certification-services",
    notSure: {
      title: "Not sure which one fits?",
      text: "Tell us how your business trades and we will point you to the right authorisation.",
    },
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}

export type HubGroup = { title: string; links: MenuLink[] };

/** Child links for a hub, grouped as in the main menu. */
export function hubGroups(hub: Hub): HubGroup[] {
  const groups: HubGroup[] = [];
  const seen = new Set<string>();

  primaryNav.forEach((item) => {
    (item.groups ?? []).forEach((g: MenuGroup) => {
      const links = g.links.filter(
        (l) => hub.prefixes.some((p) => l.href.startsWith(p)) && !seen.has(l.href),
      );
      links.forEach((l) => seen.add(l.href));
      if (links.length) groups.push({ title: g.title, links });
    });
  });

  return groups;
}

export function hubLinkCount(hub: Hub): number {
  return hubGroups(hub).reduce((n, g) => n + g.links.length, 0);
}

/**
 * EPR streams that already have task pages on the live site
 * (registration, compliance, credit transfer, legal issues, surrender).
 */
export const eprStreamsWithTasks = new Set([
  "plastic-waste",
  "used-oil",
  "e-waste",
  "battery-waste",
  "tyre-waste",
]);

export const eprTaskNames = [
  "Registration",
  "Compliance",
  "Credit transfer",
  "Legal issues",
  "Surrender",
];

/**
 * Placeholder blog data.
 *
 * The three posts below are taken from the current public ARKCA blog
 * (https://arkcacorporate.com/blogs/), lightly condensed. Publish dates, author
 * names, images and fee tables were not in the source text and are NOT invented
 * here. Replace this file with the real content source when it is chosen.
 *
 * The slugs match the current live URLs so /blogs/<slug>/ keeps its path.
 */

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type BlogTone = "peach" | "sky" | "mint" | "lavender";
export type BlogIcon = "calendar" | "ship" | "layers";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tone: BlogTone;
  icon: BlogIcon;
  /** Facts shown on the cover artwork. Each one comes from the post body. */
  cover: { value: string; label: string }[];
  blocks: BlogBlock[];
  sourceUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cpcb-extended-epr-return-deadlines-for-battery-e-waste-heres-why",
    title: "CPCB Extended EPR Return Deadlines for Battery & E-Waste: Here’s Why",
    excerpt:
      "CPCB extended the FY 2025–26 annual return deadlines for E-waste and Battery EPR. Here is what changed and why filings keep getting stuck.",
    category: "EPR",
    tone: "peach",
    icon: "calendar",
    cover: [
      { value: "30 Sep 2026", label: "E-waste annual filing" },
      { value: "30 Nov 2026", label: "Battery annual return" },
    ],
    sourceUrl:
      "https://arkcacorporate.com/blogs/cpcb-extended-epr-return-deadlines-for-battery-e-waste-heres-why/",
    blocks: [
      {
        type: "p",
        text: "Deadlines were supposed to mean compliance. Instead, they became a bottleneck.",
      },
      {
        type: "p",
        text: "On 27 August 2026, CPCB published two notices extending the deadlines for the Annual Return for Battery and E-waste EPR. The extension of these deadlines has revealed a reality that many businesses have been dealing with for some time.",
      },
      { type: "h2", text: "What changed?" },
      {
        type: "p",
        text: "On 27 August 2026 CPCB released two public notices which clearly mentioned the deadline for:",
      },
      {
        type: "ul",
        items: [
          "E-waste EPR for FY 2025–26: annual filing deadline extended to 30 September 2026 under Rule 9A of the E-Waste (Management) Amendment Rules, 2026.",
          "Battery EPR for FY 2025–26: annual return deadline extended to 30 November 2026 as per sub-rule 6 of Rule 14 of the Battery Waste Management (Amendment) Rules, 2023.",
        ],
      },
      {
        type: "p",
        text: "The EPR regulatory landscape keeps evolving, and annual return filing is where businesses are expected to demonstrate transparency in compliance in the waste management cycle.",
      },
      { type: "h2", text: "Why did the deadlines need extension?" },
      {
        type: "p",
        text: "CPCB’s notice highlighted “operational and technical challenges” that hindered many businesses in the timely submission of compliance-related data. To ensure compliance, the government and authorities expect all businesses to monitor, document, and report to the authorised bodies.",
      },
      {
        type: "p",
        text: "So, what are the operational reasons that cause businesses to miss or make mistakes in their Annual Return filings?",
      },
      { type: "h3", text: "Gaps in data collection" },
      {
        type: "p",
        text: "When the Annual Return is filed, data is usually taken from internal business records and portal transaction histories. Many businesses are currently struggling to keep track of their internal records like GST invoices, purchase bills and operational data. These struggles often create gaps in audit records, where businesses’ compliance fails.",
      },
      { type: "h3", text: "Reporting errors" },
      {
        type: "p",
        text: "One of the obvious consequences of gaps in data collection is reporting errors. When companies file for E-waste EPR or Battery Waste EPR, gaps in data result in incorrect information in the report. A mismatch between reported and actual data will be considered non-compliance. This triggers a series of investigations, which is damaging to the brand image, in addition to increased costs.",
      },
      { type: "h3", text: "Portal and technical challenges" },
      {
        type: "p",
        text: "The portal rejects many annual returns due to registration issues. It happens if your business details are incorrect, there is a mistake in GST details, or there are errors in category selection. Errors carried over from registration often resurface as rejections when it’s time to file the annual return. This might hamper future annual return filings.",
      },
      {
        type: "callout",
        text: "Have you encountered another EPR challenge? ARKCA Corporate helps businesses manage E-waste EPR and Battery EPR registration so you never miss your compliance obligations.",
      },
    ],
  },
  {
    slug: "importing-into-india-in-2026-heres-what-your-compliance-checklist-should-include",
    title: "Importing Into India in 2026? Here’s What Your Compliance Checklist Should Include",
    excerpt:
      "With the RBI’s FEMA Export-Import Regulations, 2026 effective from 1 October 2026, importers need to review payments, records and bank coordination. Six checks before your next shipment.",
    category: "Import & Customs",
    tone: "sky",
    icon: "ship",
    cover: [
      { value: "6", label: "checks before your next shipment" },
      { value: "1 Oct 2026", label: "New FEMA regulations effective" },
    ],
    sourceUrl:
      "https://arkcacorporate.com/blogs/importing-into-india-in-2026-heres-what-your-compliance-checklist-should-include/",
    blocks: [
      {
        type: "p",
        text: "Starting an import business in India? Check your compliance before your shipment takes off.",
      },
      {
        type: "p",
        text: "Importing into India is becoming more than a customs clearance exercise. With the RBI’s new FEMA Export-Import Regulations, 2026, effective from 1 October 2026, importers must pay closer attention to transaction monitoring, payment timelines, and coordination with their Authorised Dealer (AD) banks.",
      },
      {
        type: "p",
        text: "For businesses importing goods into India, understanding these changes is essential to keeping payments, documentation and outstanding transactions in order.",
      },
      { type: "h2", text: "What has changed for importers in 2026?" },
      {
        type: "p",
        text: "A missed payment deadline, an unreconciled import entry, or incomplete paperwork can create unnecessary compliance hurdles. The revised regulatory framework makes it important for importers to review their payment arrangements, banking processes, and transaction records. Addressing these gaps early can help prevent avoidable complications later.",
      },
      { type: "h2", text: "6 import compliance checks to make before your next shipment" },
      { type: "h3", text: "1. Verify your import payment deadlines" },
      {
        type: "p",
        text: "Check whether payments to overseas suppliers are being made within the period specified in the underlying contract. If you need an extension, coordinate with your AD bank and review the applicable requirements.",
      },
      { type: "h3", text: "2. Keep your IDPMS records reconciled" },
      {
        type: "p",
        text: "Ensure your Bills of Entry, supplier invoices and bank payment records match. For eligible import transactions of up to ₹10 lakh per Bill of Entry or service invoice, declaration-based closure under IDPMS is permitted, subject to applicable conditions.",
      },
      { type: "h3", text: "3. Review advance remittances" },
      {
        type: "p",
        text: "If you make payments before receiving goods or services, review your advance payment arrangements with your AD bank. Maintain the necessary supporting documents and track outstanding transactions.",
      },
      { type: "h3", text: "4. Document third-party payments" },
      {
        type: "p",
        text: "When a third party makes a payment on your behalf, verify that the arrangement satisfies the applicable regulatory conditions. Keep the commercial purpose and supporting documentation clear.",
      },
      { type: "h3", text: "5. Assess your set-off options" },
      {
        type: "p",
        text: "If your business has both export receivables and import payables, check whether you qualify for permitted set-off arrangements through your AD bank.",
      },
      { type: "h3", text: "6. Revisit your existing import transactions" },
      {
        type: "p",
        text: "Classify transactions completed before 1 October 2026 separately from outstanding and newly initiated transactions. Consult your AD bank to understand which regulatory provisions apply to each.",
      },
      { type: "h2", text: "Import compliance support for your business" },
      {
        type: "p",
        text: "Importing into India involves more than arranging suppliers and managing shipments. The right registrations, certifications, and documentation can be equally important. ARKCA Corporate helps importers navigate applicable Indian regulatory requirements, from IEC registration and BIS certification to LMPC registration and EPR compliance. The team assists with:",
      },
      {
        type: "ul",
        items: [
          "Regulatory applicability assessment: identify the registrations and approvals relevant to your products and business.",
          "Documentation support: organise the paperwork required for applicable compliance processes.",
          "Application and filing assistance: navigate relevant registrations and certification procedures.",
          "Regulatory coordination: get support through the applicable compliance process.",
        ],
      },
      {
        type: "callout",
        text: "Requirements vary depending on the product, business activity, and applicable regulations. Check your import compliance requirements with ARKCA Corporate before your next shipment.",
      },
    ],
  },
  {
    slug: "non-ferrous-metal-epr-registration-fees-2026-cpcb-fee-structure-explained",
    title: "Non-Ferrous Metal EPR Registration Fees 2026: CPCB Fee Structure Explained",
    excerpt:
      "CPCB has announced a new fee structure for non-ferrous metal EPR registration. What manufacturers, producers, importers and recyclers should know before planning their next steps.",
    category: "EPR",
    tone: "mint",
    icon: "layers",
    cover: [
      { value: "5", label: "entity categories must register" },
      { value: "10%", label: "capacity increase amendment fee" },
    ],
    sourceUrl:
      "https://arkcacorporate.com/blogs/non-ferrous-metal-epr-registration-fees-2026-cpcb-fee-structure-explained/",
    blocks: [
      {
        type: "p",
        text: "CPCB has announced a new fee structure for non-ferrous metal EPR registration, and businesses dealing with these metals need to take note. From registration fees to annual compliance charges, here is what manufacturers, producers, importers, and recyclers need to know before planning their next steps.",
      },
      { type: "h2", text: "Charges PIBOs should watch out for" },
      {
        type: "p",
        text: "Once your registration is complete, a few additional charges are easy to overlook but not worth missing. Missing these costs could complicate your compliance process and potentially expose your business to penalties.",
      },
      { type: "h3", text: "1. Capacity increase amendment fee" },
      {
        type: "p",
        text: "Has your business expanded beyond its originally registered capacity? If so, an amendment fee of 10% of the applicable registration fee is charged for the capacity increase. Factor this cost into your expansion plans to avoid unexpected compliance expenses.",
      },
      { type: "h3", text: "2. Annual Compliance Fee (ACF)" },
      {
        type: "p",
        text: "Registration isn’t the only expense to plan for. An Annual Compliance Fee (ACF) is also payable when filing your annual return. This fee covers:",
      },
      {
        type: "ul",
        items: [
          "Portal maintenance",
          "Compliance monitoring",
          "Institutional and administrative costs",
          "Data analytics",
          "Audit fees",
        ],
      },
      {
        type: "p",
        text: "The fee is calculated using a WPI-linked formula. Source: CPCB fee structure notice.",
      },
      { type: "h2", text: "Who is eligible for registration?" },
      {
        type: "p",
        text: "The CPCB framework identifies five categories of entities that need to register under the non-ferrous metal EPR system:",
      },
      {
        type: "ul",
        items: ["Manufacturers", "Producers", "Collection agents", "Refurbishers", "Recyclers"],
      },
      {
        type: "p",
        text: "Businesses involved in manufacturing, producing, collecting, refurbishing or recycling non-ferrous metals such as aluminium, copper, zinc and their alloys should assess their applicable registration category. If an entity operates in multiple categories, it must obtain separate registration for each applicable category. That is why identifying your business role correctly is essential to determining the relevant registration fee and compliance requirements.",
      },
      { type: "h2", text: "What is the next step?" },
      {
        type: "ul",
        items: [
          "Identify the applicable category: every business category has a separate fee. If your entity has multiple applicable categories, then multiple fees are applicable.",
          "Keep track of the amount of capacity handled: it can help you confirm the relevant capacity handling slab.",
          "Calculate your registration fee once you are clear on the capacity handling slab.",
          "Stay updated on the annual return audit and fee: the report you file should be based on CPCB guidelines, and the annual fee should be calculated using the WPI-linked formula.",
        ],
      },
      { type: "h2", text: "Your problem, our solution" },
      { type: "h3", text: "Unsure which registration category applies?" },
      {
        type: "p",
        text: "If your business operates across multiple roles, identifying the applicable category can get confusing. Since separate registrations and fees may apply to each category, getting this right matters. ARKCA helps assess your business activities and identify the applicable registration requirements.",
      },
      { type: "h3", text: "Not sure which capacity slab to choose?" },
      {
        type: "p",
        text: "Your registration fee depends on the capacity handled. Misjudging your applicable slab can affect your fee calculation and registration planning. ARKCA assists you in understanding the relevant capacity requirements and preparing your registration accordingly.",
      },
      { type: "h3", text: "Overlooking additional charges?" },
      {
        type: "p",
        text: "Capacity amendment charges and the WPI-linked Annual Compliance Fee (ACF) also need attention. ARKCA helps you understand applicable charges and plan for your compliance costs.",
      },
      { type: "h3", text: "Worried about returns and ongoing compliance?" },
      {
        type: "p",
        text: "Knowing when to file, what information to prepare and how to meet reporting requirements can become an ongoing challenge. From documentation and application filing to regulatory coordination, ARKCA supports businesses through their compliance requirements.",
      },
      {
        type: "callout",
        text: "Don’t let fee calculations and registration uncertainties complicate your compliance journey. Connect with ARKCA Corporate to assess your non-ferrous metal EPR registration requirements.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function postHref(post: Pick<BlogPost, "slug">): string {
  return `/blogs/${post.slug}/`;
}

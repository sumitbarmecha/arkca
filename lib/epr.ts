import type { FaqItem } from "@/components/home/FaqAccordion";

/**
 * EPR stream pages (/service/epr/{stream}/).
 *
 * Source: the ten category pages currently live on arkcacorporate.com, condensed and
 * de-duplicated. Things deliberately NOT copied across:
 *  - the e-waste page repeats the battery page's registration, credit, legal and surrender text;
 *  - the battery page repeats the generic "What is EPR" text under the battery heading;
 *  - the zinc and copper descriptions are identical; the C&D page has a heading about non-ferrous metal;
 *  - claims like "EPR in 30 seconds", the 15,000+ counter, and the bulk-waste-generator thresholds
 *    (the live text says "and" where the rules use "or"; confirm before quoting any numbers).
 *
 * Rule names, dates and legal consequences below are the client's own wording from those pages.
 * They need a compliance review before launch. Do not add fees or timelines.
 */

export type TaskKey = "registration" | "compliance" | "credit-transfer" | "legal-issues" | "surrender";

export const taskMeta: { key: TaskKey; label: string }[] = [
  { key: "registration", label: "Registration" },
  { key: "compliance", label: "Compliance" },
  { key: "credit-transfer", label: "Credit transfer" },
  { key: "legal-issues", label: "Legal issues" },
  { key: "surrender", label: "Surrender" },
];

export type EprStream = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  description: string;
  lead: string;
  /** "At a glance" facts, as stated on the live pages. */
  appliesTo: string;
  rules: string;
  authority: string;
  whatIs: {
    heading: string;
    paragraphs: string[];
    obligationsTitle: string;
    obligations: string[];
  };
  typesTitle?: string;
  types?: { name: string; text: string }[];
  /** Only the five streams that already have task pages on the live site. */
  tasks?: Record<TaskKey, string>;
  /** Live URL slug for the compliance task: "compliance" or "compliances". Do not normalise it. */
  complianceSlug?: "compliance" | "compliances";
  documents?: string[];
  faqs: FaqItem[];
  /** Blog slugs worth linking from this page. */
  posts?: string[];
};

const pibo = "Producers, importers and brand owners (PIBOs)";

export const eprStreams: EprStream[] = [
  {
    slug: "plastic-waste",
    name: "Plastic waste",
    h1: "EPR for Plastic Waste",
    metaTitle: "EPR for Plastic Waste: Registration and Compliance | ARKCA Corporate",
    description:
      "ARKCA helps producers, importers and brand owners with plastic waste EPR registration, targets, credits and annual returns under India's Plastic Waste Management Rules.",
    lead: "Businesses that place plastic packaging on the Indian market have Extended Producer Responsibility duties under the Plastic Waste Management Rules. ARKCA helps you register, meet your targets, manage credits and file on time.",
    appliesTo: `${pibo} and plastic packaging manufacturers`,
    rules: "Plastic Waste Management Rules",
    authority: "CPCB and State Pollution Control Boards",
    whatIs: {
      heading: "What is EPR for plastic waste?",
      paragraphs: [
        "Extended Producer Responsibility (EPR) holds producers, importers and brand owners accountable for the end-of-life waste their products create. For plastic, it applies to the packaging a business introduces into the Indian market.",
        "Under India's Plastic Waste Management (PWM) Rules, eligible businesses must complete EPR registration and meet the applicable compliance requirements.",
      ],
      obligationsTitle: "What eligible businesses must do",
      obligations: [
        "Register through the applicable CPCB or State Pollution Control Board process",
        "Report the quantity and category of plastic packaging placed on the market",
        "Meet the prescribed recycling, reuse and end-of-life disposal targets",
        "Obtain EPR certificates through the portal where required to meet targets",
        "File annual returns and keep supporting documents for verification",
      ],
    },
    typesTitle: "Plastic packaging categories",
    types: [
      {
        name: "Category I: Rigid plastic packaging",
        text: "Bottles, containers, jars, trays, caps and other hard plastic packaging used to store and transport goods.",
      },
      {
        name: "Category II: Flexible plastic packaging",
        text: "Carry bags, pouches, sachets, wraps and films made from single or multiple layers, widely used in FMCG packaging.",
      },
      {
        name: "Category III: Multi-layered packaging",
        text: "Packaging with several plastic layers, or plastic combined with materials such as aluminium foil or paper. It needs end-of-life disposal or co-processing as per the rules.",
      },
      {
        name: "Category IV: Plastic sheets and compostable plastics",
        text: "Plastic sheets used for packaging and carry bags made from compostable plastics. Compostable plastic makers need CPCB certification before selling.",
      },
    ],
    complianceSlug: "compliance",
    tasks: {
      registration:
        "Register through the applicable CPCB or State Pollution Control Board process and declare your plastic packaging by category.",
      compliance:
        "Targets depend on the plastic packaging you placed on the market in the previous financial year, and annual returns are filed on the CPCB portal.",
      "credit-transfer":
        "Registered recyclers generate EPR certificates that producers buy to meet targets. Credits are category-specific and traceable on the portal.",
      "legal-issues":
        "Misreporting, wrong category declarations or missed targets can bring environmental compensation or action against your registration.",
      surrender:
        "If you close down or restructure, you apply for amendment or surrender after pending targets, returns and compensation are cleared.",
    },
    faqs: [
      {
        question: "Who needs plastic EPR registration?",
        answer:
          "Eligible producers, importers, brand owners and plastic packaging manufacturers that place plastic packaging on the Indian market. Whether and how you are covered depends on your role and category, which we confirm in a consultation.",
        link: { label: "Book a consultation", href: "https://calendly.com/corporatearkca/30min" },
      },
      {
        question: "How do EPR credits work for plastic?",
        answer:
          "Registered recyclers process eligible plastic waste and EPR certificates are generated on the CPCB portal. Producers buy those certificates to meet annual targets. Credits are category-specific, traceable, and cannot be double-counted.",
      },
      {
        question: "What happens if I miss my targets?",
        answer:
          "Failing to meet obligations may result in environmental compensation as prescribed by CPCB guidelines, and in action against your registration. Planning credit purchases early helps avoid shortfalls.",
      },
      {
        question: "Can I close my EPR registration?",
        answer:
          "If an entity stops operating or changes its structure, it applies for amendment or surrender through the CPCB portal. Pending targets, returns and any compensation must be cleared first.",
      },
    ],
  },
  {
    slug: "e-waste",
    name: "E-waste",
    h1: "EPR for E-Waste",
    metaTitle: "EPR for E-Waste: Registration and Compliance | ARKCA Corporate",
    description:
      "ARKCA helps producers, importers and brand owners of electrical and electronic equipment with e-waste EPR registration, targets, credits and returns under the E-Waste (Management) Rules, 2022.",
    lead: "If you manufacture, import or sell electrical and electronic equipment in India, the E-Waste (Management) Rules, 2022 give you EPR duties. ARKCA helps with registration, targets, certificates and returns.",
    appliesTo: "Producers, importers and brand owners of electrical and electronic equipment",
    rules: "E-Waste (Management) Rules, 2022",
    authority: "CPCB",
    whatIs: {
      heading: "What is EPR for e-waste?",
      paragraphs: [
        "EPR makes producers responsible for the end-of-life management of the products they place on the market, rather than shifting that cost to municipalities or consumers.",
        "For e-waste, it applies to makers, importers and brand owners of electrical and electronic equipment (EEE). They must make sure equivalent quantities of end-of-life e-waste are collected and recycled through CPCB-registered recyclers.",
      ],
      obligationsTitle: "What producers must do",
      obligations: [
        "Obtain EPR registration through the CPCB online portal",
        "Achieve annual recycling targets based on the quantity placed on the market",
        "Procure EPR certificates generated by authorised recyclers",
        "File returns and maintain transparent compliance records",
      ],
    },
    typesTitle: "E-waste categories",
    types: [
      {
        name: "IT and telecom equipment",
        text: "Computers, laptops, servers, printers, mobile phones, routers and other data processing or communication devices.",
      },
      {
        name: "Consumer electricals",
        text: "Televisions, refrigerators, washing machines, air conditioners, microwave ovens and audio-video systems.",
      },
      {
        name: "Large and small electrical equipment",
        text: "Electric heaters, fans, mixers, grinders, power tools and similar plug-in devices, including smaller appliances listed in Schedule I.",
      },
      {
        name: "Lighting equipment",
        text: "Fluorescent lamps, CFLs and other mercury-containing lighting products that need careful handling.",
      },
      {
        name: "Medical devices",
        text: "Electrical and electronic medical devices, excluding implanted or infected products, including diagnostic and laboratory equipment.",
      },
      {
        name: "Monitoring and control instruments",
        text: "Thermostats, industrial monitoring equipment, measuring instruments, smoke detectors and similar control systems.",
      },
      {
        name: "Solar photovoltaic modules",
        text: "Solar panels, PV modules and associated components, which the 2022 rules specifically include.",
      },
    ],
    complianceSlug: "compliances",
    tasks: {
      registration:
        "Register on the CPCB portal as a producer, importer or brand owner, with your product categories and quantities declared.",
      compliance:
        "Registration is only the start. Annual collection and recycling targets rise over time, and returns are filed on the CPCB portal.",
      "credit-transfer":
        "Authorised recyclers generate EPR certificates that producers procure to meet their annual targets.",
      "legal-issues":
        "Missed targets or inaccurate reporting can lead to environmental compensation and regulatory action.",
      surrender:
        "If you stop placing electronics on the Indian market, you apply to surrender your registration once pending obligations are met.",
    },
    faqs: [
      {
        question: "Who must register for e-waste EPR?",
        answer:
          "Producers, importers and brand owners placing electrical and electronic equipment covered by the rules on the Indian market.",
        link: { label: "Book a consultation", href: "https://calendly.com/corporatearkca/30min" },
      },
      {
        question: "Is solar equipment covered?",
        answer:
          "Yes. Solar photovoltaic modules and associated components are specifically included in the E-Waste Rules, 2022.",
      },
      {
        question: "Is registration enough?",
        answer:
          "No. EPR is performance-based. You must also meet annual targets through CPCB-registered recyclers, keep records and file annual returns.",
      },
    ],
    posts: ["cpcb-extended-epr-return-deadlines-for-battery-e-waste-heres-why"],
  },
  {
    slug: "battery-waste",
    name: "Battery waste",
    h1: "EPR for Battery Waste",
    metaTitle: "EPR for Battery Waste: Registration and Compliance | ARKCA Corporate",
    description:
      "ARKCA helps battery producers, importers and brand owners with EPR registration, targets, credits and returns under the Battery Waste Management Rules, 2022.",
    lead: "Anyone placing batteries on the Indian market has EPR duties under the Battery Waste Management Rules, 2022. ARKCA helps with registration, targets, credits and annual returns.",
    appliesTo: `${pibo} placing batteries on the Indian market`,
    rules: "Battery Waste Management Rules, 2022",
    authority: "CPCB",
    whatIs: {
      heading: "What is EPR for battery waste?",
      paragraphs: [
        "EPR places responsibility for end-of-life products on the businesses that introduce them. For batteries, producers, importers and brand owners must make sure the batteries they sell are collected, recycled or disposed of in an environmentally sound way.",
        "Registration is the legal foundation. Without valid registration, selling or distributing batteries in India is not permitted, and the work continues each year with targets and returns.",
      ],
      obligationsTitle: "What producers must do",
      obligations: [
        "Register on the CPCB EPR portal, declaring battery category and quantity",
        "Meet annual collection and recycling targets through registered recyclers",
        "File periodic returns on the CPCB portal",
        "Keep transaction records and recycling certificates",
      ],
    },
    typesTitle: "Battery categories",
    types: [
      {
        name: "Portable batteries",
        text: "Small sealed batteries in phones, laptops, remotes and toys, which need separate collection because of their varied chemistries.",
      },
      {
        name: "Automotive batteries",
        text: "Starting, lighting and ignition batteries for cars, bikes and trucks, often lead-acid, which demand safe recycling.",
      },
      {
        name: "Electric vehicle batteries",
        text: "High-capacity traction batteries, typically lithium-based, that need specialised end-of-life collection and recovery.",
      },
      {
        name: "Industrial batteries",
        text: "Large batteries used in industrial equipment, backup systems and energy storage.",
      },
    ],
    complianceSlug: "compliance",
    tasks: {
      registration:
        "Register on the CPCB portal with your company details, battery categories and the quantity you place on the market.",
      compliance:
        "Compliance is performance-based: annual collection and recycling targets that rise over the years, plus returns on the portal.",
      "credit-transfer":
        "Registered recyclers generate EPR credits that producers purchase. The system is traceable and prevents double counting.",
      "legal-issues":
        "Non-compliance can bring environmental compensation, suspension or cancellation of registration, and action under the Environment (Protection) Act, 1986.",
      surrender:
        "If you stop placing batteries on the Indian market, you apply to surrender after liabilities, returns and compensation are cleared.",
    },
    documents: [
      "Company details and authorised signatory information",
      "GST and incorporation certificate",
      "IEC (for importers)",
      "Battery category declaration and quantity placed on the market, in tonnes",
    ],
    faqs: [
      {
        question: "Can I sell batteries without registration?",
        answer:
          "No. Valid EPR registration is required before batteries are sold or distributed in India.",
      },
      {
        question: "Which battery types are covered?",
        answer: "Portable, automotive, electric vehicle and industrial batteries.",
      },
      {
        question: "How do EPR credits work?",
        answer:
          "Registered recyclers generate certificates after recycling eligible battery waste and upload them to the CPCB portal. Producers purchase them to meet annual targets. Validity and use follow CPCB guidelines.",
      },
    ],
    posts: ["cpcb-extended-epr-return-deadlines-for-battery-e-waste-heres-why"],
  },
  {
    slug: "tyre-waste",
    name: "Tyre waste",
    h1: "EPR for Tyre Waste",
    metaTitle: "EPR for Tyre Waste: Registration and Compliance | ARKCA Corporate",
    description:
      "ARKCA helps tyre producers and importers with CPCB waste tyre EPR registration, annual targets, certificates and returns.",
    lead: "India's EPR framework for waste tyres covers the collection, recycling, retreading and safe disposal of end-of-life tyres. ARKCA supports registration, annual compliance and certificate management.",
    appliesTo: "Producers and importers of tyres",
    rules: "CPCB EPR framework for waste tyres",
    authority: "CPCB",
    whatIs: {
      heading: "What is EPR for tyre waste?",
      paragraphs: [
        "EPR for tyre waste is a framework introduced by the Central Pollution Control Board (CPCB) to ensure the environmentally sound management of end-of-life tyres. It makes obligated businesses responsible for collection, recycling, retreading and disposal through authorised channels.",
        "It supports resource recovery and circular-economy practices, reducing landfill and pollution, and gives businesses a way to meet their statutory duties and show responsible environmental stewardship.",
      ],
      obligationsTitle: "How ARKCA helps",
      obligations: [
        "CPCB waste tyre EPR portal registration",
        "Documentation review, preparation and eligibility assessment",
        "Annual EPR target calculation and compliance planning",
        "Annual return filing support and regulatory updates",
      ],
    },
    typesTitle: "Tyre types covered",
    types: [
      {
        name: "Bias tyres",
        text: "Built for off-road and heavy-load vehicles and equipment, where strength and durability matter more than high-speed performance.",
      },
      {
        name: "Radial tyres",
        text: "The common choice for passenger cars, SUVs, buses and commercial vehicles, for performance, durability and fuel efficiency.",
      },
    ],
    complianceSlug: "compliances",
    tasks: {
      registration:
        "We prepare and verify your documents, file on the CPCB waste tyre EPR portal and track the registration status.",
      compliance:
        "Annual EPR targets, record keeping and return filing, with ongoing monitoring of regulatory changes.",
      "credit-transfer":
        "Certified tyre recyclers issue EPR certificates after processing waste tyres, and these are transferred to obligated entities on the CPCB portal.",
      "legal-issues":
        "Missing registration, targets, certificate management or reporting duties can lead to legal action, penalties and operating restrictions.",
      surrender:
        "Surrender cancels your registration when you stop making, importing or selling tyres, or when ownership changes, once pending obligations are cleared.",
    },
    faqs: [
      {
        question: "Which tyres does EPR cover?",
        answer: "Bias tyres and radial tyres, including those for passenger and commercial vehicles.",
      },
      {
        question: "Who issues EPR certificates for tyres?",
        answer:
          "Certified tyre recyclers issue certificates after processing waste tyres according to CPCB guidelines. They are uploaded to the CPCB portal and can be transferred to obligated entities.",
      },
      {
        question: "What happens if I stop selling tyres in India?",
        answer:
          "You apply to surrender your EPR registration. Pending obligations, filings and dues must be cleared before it is approved.",
      },
    ],
  },
  {
    slug: "used-oil",
    name: "Used oil",
    h1: "EPR for Used Oil",
    metaTitle: "EPR for Used Oil: Registration and Compliance | ARKCA Corporate",
    description:
      "ARKCA helps producers and importers of base oil and lubrication oil with CPCB EPR registration, re-refining targets, certificates and annual returns.",
    lead: "Producers and importers of base oil and lubrication oil have EPR duties for the used oil their products become. ARKCA helps with CPCB registration, targets, certificates and returns.",
    appliesTo: "Producers and importers of base oil and lubrication oil",
    rules: "CPCB EPR framework under the Hazardous Waste Rules",
    authority: "CPCB",
    whatIs: {
      heading: "What is EPR for used oil?",
      paragraphs: [
        "EPR for used oil applies to producers and importers of base oil and lubrication oil placed in the Indian market. It aims to promote environmentally sound re-refining, reduce illegal burning or dumping, and strengthen the circular economy in petroleum waste management.",
      ],
      obligationsTitle: "What obligated entities must do",
      obligations: [
        "Register on the CPCB EPR portal",
        "Meet annual used oil recycling or re-refining targets",
        "Purchase EPR certificates generated by registered recyclers",
        "File annual returns and maintain compliance documentation",
      ],
    },
    typesTitle: "Types of used oil",
    types: [
      {
        name: "Used lubricating oil",
        text: "Oil from engines, machinery, turbines and gear systems, contaminated with metal particles, sludge and chemical impurities. It must go for re-refining through authorised recyclers.",
      },
      {
        name: "Used engine oil",
        text: "Oil from vehicles, generators and heavy equipment, containing degraded additives, hydrocarbons and heavy metals.",
      },
      {
        name: "Used hydraulic and industrial oil",
        text: "Oil from hydraulic systems, compressors, transformers and manufacturing units that becomes hazardous after prolonged use.",
      },
      {
        name: "Used specialty oil",
        text: "Transformer oil, heat transfer oil, metalworking fluids and cutting oils designed for specific industrial uses.",
      },
      {
        name: "Waste oil",
        text: "Residues that cannot be re-refined. They are not always eligible for credits, but must be managed under hazardous waste regulations.",
      },
    ],
    complianceSlug: "compliances",
    tasks: {
      registration:
        "Register through the centralised CPCB EPR portal with your company, GST, IEC (for importers) and oil details.",
      compliance:
        "Annual targets depend on the oil you placed in the market in the previous financial year, with channelisation to registered recyclers and annual returns.",
      "credit-transfer":
        "Registered recyclers and re-refiners generate EPR certificates that producers purchase. They are traceable, time-bound and cannot be double-counted.",
      "legal-issues":
        "Discrepancies in reporting or false documentation can bring environmental compensation, suspension of registration and enforcement action.",
      surrender:
        "If you stop placing lubrication oil in the Indian market, you apply to surrender your registration after targets, returns and compensation are cleared.",
    },
    faqs: [
      {
        question: "Who has to register for used oil EPR?",
        answer:
          "Producers and importers placing base oil or lubrication oil in the Indian market. Without valid registration they cannot legally operate in the used oil category.",
      },
      {
        question: "Where does used oil have to go?",
        answer:
          "It must be channelled to CPCB-registered recyclers or re-refiners so it is recovered safely, not burned or dumped.",
      },
      {
        question: "How do I prove I met my target?",
        answer:
          "By purchasing EPR certificates generated by registered recyclers, keeping digital transaction records and filing annual returns on the CPCB portal.",
      },
    ],
  },
  {
    slug: "end-of-life-vehicle",
    name: "End-of-life vehicles",
    h1: "EPR for End-of-Life Vehicles (ELV)",
    metaTitle: "EPR for End-of-Life Vehicles (ELV) | ARKCA Corporate",
    description:
      "ARKCA helps vehicle producers with ELV EPR registration on the CPCB portal, including eligibility checks, tie-ups with registered dismantlers, and filing.",
    lead: "ARKCA helps businesses register for ELV EPR on the CPCB portal, from eligibility checks and process flow diagrams to tie-ups with registered dismantlers and the application itself.",
    appliesTo: "Producers, bulk consumers, registered vehicle scrapping facilities (RVSFs) and others in vehicle collection and testing",
    rules: "Environment Protection (End-of-Life Vehicles) Rules, 2025",
    authority: "CPCB, with MoEF&CC",
    whatIs: {
      heading: "What is EPR for end-of-life vehicles?",
      paragraphs: [
        "A vehicle that has reached the end of its life can no longer be used on public roads. EPR for end-of-life vehicles (ELV) applies to producers, registered owners, bulk consumers, RVSFs and entities involved in the collection and testing of vehicles.",
        "Non-registration and missed targets can lead to legal scrutiny and financial compensation.",
      ],
      obligationsTitle: "What businesses are expected to do",
      obligations: [
        "Register under the ELV rules",
        "Partner with registered vehicle scrapping facilities",
        "Meet annual vehicle collection and scrapping targets",
        "Maintain compliance records and file annual returns",
      ],
    },
    typesTitle: "Vehicle types covered",
    types: [
      {
        name: "Passenger vehicles",
        text: "Private and commercial cars, multi-utility vehicles (MUVs) and sports utility vehicles (SUVs).",
      },
      {
        name: "Two and three wheelers",
        text: "Motorbikes, scooters, mopeds and auto-rickshaws.",
      },
      {
        name: "Commercial heavy vehicles",
        text: "Trucks, buses, trailers and light commercial vehicles (LCVs).",
      },
      {
        name: "Electric vehicles",
        text: "Battery-powered vehicles, including e-rickshaws and e-carts.",
      },
    ],
    documents: [
      "PAN card of the company or applicant",
      "Certificate of incorporation or business registration proof",
      "GST registration certificate",
      "Details of vehicles manufactured or imported",
      "EPR action plan for ELV management",
      "Agreement with authorised recyclers or dismantlers",
      "Annual production and sales data",
      "Authorisation letter, if filed through a consultant",
      "Digital Signature Certificate (DSC)",
    ],
    faqs: [
      {
        question: "Is EPR mandatory for vehicle manufacturers?",
        answer: "It applies to vehicle manufacturers and importers under the ELV rules.",
      },
      {
        question: "Who regulates ELV EPR?",
        answer: "MoEF&CC and CPCB oversee ELV compliance.",
      },
      {
        question: "Is a recycler agreement required?",
        answer: "Yes. A tie-up with an authorised recycler or dismantler is required.",
      },
      {
        question: "Are annual reports required?",
        answer: "Yes. Periodic compliance reporting is required.",
      },
    ],
  },
  {
    slug: "solid-waste-management",
    name: "Solid waste",
    h1: "EPR for Solid Waste Management",
    metaTitle: "EPR for Solid Waste Management | ARKCA Corporate",
    description:
      "ARKCA helps bulk waste generators and producers with EPR registration, certificates and reporting under the Solid Waste Management Rules.",
    lead: "Solid waste EPR places responsibility on the businesses behind waste in India. ARKCA helps with registration, certificates, record keeping and reporting under the Solid Waste Management Rules.",
    appliesTo: `${pibo}, and bulk waste generators (BWGs)`,
    rules: "Solid Waste Management Rules, 2016",
    authority: "CPCB and State Pollution Control Boards",
    whatIs: {
      heading: "What is EPR for solid waste management?",
      paragraphs: [
        "EPR holds the stakeholders in a product's supply chain responsible for waste management and recycling. From 2026, Extended Bulk Waste Generator Responsibility (EBWGR) applies under the Solid Waste Management Rules, 2016.",
        "Which businesses count as bulk waste generators is defined in the rules, so we confirm your position before anything is filed.",
      ],
      obligationsTitle: "What bulk waste generators are responsible for",
      obligations: [
        "Mandatory EPR registration for bulk waste generators",
        "Purchasing EBWGR certificates where wet waste cannot be processed on site",
        "Maintaining compliance records by solid waste category",
        "Submitting audit reports on the centralised online portal",
        "Setting up an on-site wet waste processing facility",
      ],
    },
    typesTitle: "Waste categories",
    types: [
      {
        name: "Dry waste",
        text: "Recyclable material such as plastic, paper, metal, wood and glass, sent to material recovery facilities.",
      },
      {
        name: "Wet waste",
        text: "Biodegradable waste such as kitchen waste, vegetable and fruit peels and flowers, processed by composting or bio-methanation, on site by bulk waste generators.",
      },
      {
        name: "Sanitary waste",
        text: "Diapers, sanitary towels and tampons, which must be securely wrapped, covered and disposed of.",
      },
      {
        name: "Special care waste",
        text: "Hazardous items such as paints, bulbs, mercury thermometers and expired medicines, processed by registered agencies and collection centres.",
      },
    ],
    documents: [
      "PAN card of the company or applicant",
      "Certificate of incorporation or business registration proof",
      "GST registration certificate",
      "Details of products generating solid waste",
      "Annual waste generation data",
      "Solid waste management action plan",
      "Agreement with authorised waste collectors or recyclers",
      "Environmental clearance documents, if applicable",
      "Authorisation letter, if filed through a consultant",
      "Digital Signature Certificate (DSC)",
    ],
    faqs: [
      {
        question: "Is EPR mandatory for all solid waste?",
        answer: "It applies to the categories notified under the rules.",
      },
      {
        question: "Who regulates solid waste EPR?",
        answer: "CPCB and State Pollution Control Boards.",
      },
      {
        question: "Is periodic reporting required?",
        answer: "Yes. Compliance reports must be submitted, including audit reports on the central portal.",
      },
    ],
  },
  {
    slug: "non-ferrous-metal",
    name: "Non-ferrous metal",
    h1: "EPR for Non-Ferrous Metal",
    metaTitle: "EPR for Non-Ferrous Metal: Registration and Compliance | ARKCA Corporate",
    description:
      "ARKCA helps producers, importers, brand owners and recyclers with non-ferrous metal EPR registration, certificates and reporting under the Hazardous and Other Wastes Rules.",
    lead: "EPR requirements for non-ferrous metal scrap are coming into force under the Hazardous and Other Wastes Rules. ARKCA helps you work out your registration category and handle the filings.",
    appliesTo: `${pibo}, recyclers and bulk consumers`,
    rules: "Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, as amended",
    authority: "CPCB and State Pollution Control Boards",
    whatIs: {
      heading: "What is EPR for non-ferrous metal?",
      paragraphs: [
        "EPR makes everyone in the production cycle responsible for waste management and recycling. The amended rules set EPR requirements for non-ferrous metal scrap, which take effect from 1 April 2026.",
        "Entities that operate in more than one category need a separate registration for each, so identifying your role correctly matters.",
      ],
      obligationsTitle: "What PIBOs are responsible for",
      obligations: [
        "Registering on the CPCB portal",
        "Purchasing EPR certificates",
        "Filing reports twice a year",
        "Disposing of residue properly",
        "Refurbishing used products",
      ],
    },
    typesTitle: "Metals covered",
    types: [
      {
        name: "Aluminium",
        text: "Alloys and products containing aluminium, such as beverage cans, foils, panels, windows and structural profiles.",
      },
      {
        name: "Copper",
        text: "Products containing copper, such as electrical cables, wires, motor windings and transformers.",
      },
      {
        name: "Zinc and other metals",
        text: "Zinc and its alloys are covered, along with lead.",
      },
    ],
    documents: [
      "PAN card of the company or applicant",
      "Certificate of incorporation or business registration proof",
      "GST registration certificate",
      "Details of non-ferrous metal products manufactured or imported",
      "Annual production and sales data",
      "Waste generation and recycling plan",
      "Agreement with authorised recyclers",
      "Environmental compliance documents, if applicable",
      "Authorisation letter, if filed through a consultant",
      "Digital Signature Certificate (DSC)",
    ],
    faqs: [
      {
        question: "Who must register for non-ferrous metal EPR?",
        answer: "Producers, importers and brand owners. Recyclers and bulk consumers also have responsibilities.",
      },
      {
        question: "Is a recycler agreement required?",
        answer: "Yes. An authorised recycler tie-up is required.",
      },
      {
        question: "Is annual reporting required?",
        answer: "Yes. Periodic compliance reports are required, including reports filed twice a year.",
      },
    ],
    posts: ["non-ferrous-metal-epr-registration-fees-2026-cpcb-fee-structure-explained"],
  },
  {
    slug: "packaging-and-sanitary-waste",
    name: "Packaging and sanitary waste",
    h1: "EPR for Packaging and Sanitary Waste",
    metaTitle: "EPR for Packaging and Sanitary Waste | ARKCA Corporate",
    description:
      "ARKCA helps producers, importers and brand owners with EPR registration and compliance for packaging and sanitary waste.",
    lead: "Producers, importers and brand owners of packaged and sanitary products have EPR obligations for plastic packaging and sanitary waste. ARKCA helps with registration, targets and reporting.",
    appliesTo: pibo,
    rules: "Plastic Waste Management Rules and related guidelines",
    authority: "CPCB and State Pollution Control Boards",
    whatIs: {
      heading: "What is EPR for packaging and sanitary waste?",
      paragraphs: [
        "It refers to the EPR obligations on producers, importers and brand owners for the environmentally sound management of plastic packaging and sanitary waste. It requires collection, recycling and safe disposal in line with CPCB and MoEF&CC waste management regulations.",
        "Non-compliance can result in penalties and hinder operations.",
      ],
      obligationsTitle: "What PIBOs must do",
      obligations: [
        "Register on the centralised EPR portal",
        "Fulfil packaging recycling targets, with reports filed twice a year",
        "Provide a traceable QR code or barcode for real-time auditing",
      ],
    },
    documents: [
      "PAN card of the company or applicant",
      "Certificate of incorporation or business registration proof",
      "GST registration certificate",
      "Details of packaging or sanitary products manufactured or imported",
      "Quantity of plastic or sanitary waste generated annually",
      "EPR action plan for waste collection and recycling",
      "Agreement with authorised recyclers or waste processors",
      "Environmental compliance documents, if applicable",
      "Authorisation letter, if filed through a consultant",
      "Digital Signature Certificate (DSC)",
    ],
    faqs: [
      {
        question: "Who must register?",
        answer: "Producers, importers and brand owners.",
      },
      {
        question: "Is EPR mandatory for plastic packaging?",
        answer: "Yes, under the Plastic Waste Management Rules.",
        link: { label: "See EPR for plastic waste", href: "/service/epr/plastic-waste/" },
      },
      {
        question: "Are recycling targets compulsory?",
        answer: "Yes. Annual recovery targets must be met, and an authorised recycler partnership is required.",
      },
    ],
  },
  {
    slug: "construction-and-demolition",
    name: "Construction and demolition",
    h1: "EPR for Construction and Demolition Waste",
    metaTitle: "EPR for Construction and Demolition Waste | ARKCA Corporate",
    description:
      "ARKCA helps developers, construction companies and producers with EPR registration and compliance for construction and demolition (C&D) waste.",
    lead: "Construction and demolition waste EPR requires producers, developers and construction companies to manage, recycle and dispose of debris responsibly. ARKCA helps with registration and compliance.",
    appliesTo: "Producers, developers, construction companies and infrastructure project owners",
    rules: "C&D waste management rules, with CPCB and MoEF&CC guidelines",
    authority: "CPCB and State Pollution Control Boards",
    whatIs: {
      heading: "What is EPR for construction and demolition waste?",
      paragraphs: [
        "EPR for construction and demolition (C&D) waste is an environmental compliance framework under CPCB and MoEF&CC guidelines. It ensures the sustainable handling of debris, concrete, steel and other materials generated by infrastructure work.",
        "It involves working with collection centres, recyclers and local government bodies. Non-compliance can result in penalties and hinder operations.",
      ],
      obligationsTitle: "What PIBOs must make sure of",
      obligations: [
        "They are registered on the centralised CPCB portal",
        "Waste management and recycling targets are completed",
        "C&D waste is used in road and construction projects",
        "Audits are tracked and reported",
      ],
    },
    typesTitle: "C&D waste types",
    types: [
      {
        name: "Concrete",
        text: "Pillars, foundations, roof slabs and broken cement blocks.",
      },
      {
        name: "Soil",
        text: "Gravel, sand and soil displaced during excavation and road projects.",
      },
      {
        name: "Steel, wood and plastics",
        text: "Iron rebar, structural steel, piping and aluminium scrap, plus framing lumber, packaging, plastic pipes and flooring.",
      },
      {
        name: "Bricks and mortar",
        text: "Whole or broken clay bricks, hollow blocks and wall plaster from demolition and construction.",
      },
    ],
    documents: [
      "PAN card of the company or applicant",
      "Certificate of incorporation or business registration proof",
      "GST registration certificate",
      "Project details and construction plan",
      "Estimated waste generation data",
      "Waste management action plan",
      "Agreement with authorised C&D waste recyclers",
      "Environmental clearance documents, if applicable",
      "Authorisation letter, if filed through a consultant",
      "Digital Signature Certificate (DSC)",
    ],
    faqs: [
      {
        question: "Who is responsible under C&D EPR?",
        answer: "Builders, developers and infrastructure project owners.",
      },
      {
        question: "Which authority regulates it?",
        answer: "CPCB and the respective State Pollution Control Boards.",
      },
      {
        question: "Is a recycler agreement compulsory?",
        answer: "Yes. A tie-up with an authorised C&D waste recycler is required.",
      },
      {
        question: "Are periodic reports required?",
        answer: "Yes. Compliance reporting is required.",
      },
    ],
  },
];

export function getStream(slug: string): EprStream | undefined {
  return eprStreams.find((s) => s.slug === slug);
}

export function taskHref(stream: EprStream, key: TaskKey): string {
  const slug = key === "compliance" ? (stream.complianceSlug ?? "compliance") : key;
  return `/service/epr/${stream.slug}/${slug}/`;
}

/**
 * About content. Source: the current https://arkcacorporate.com/about-arkca/ page.
 *
 * Left out on purpose because the project files mark them as conflicting or unverified:
 *  - the "15000+ clients" figure (other documents say 10,000+),
 *  - "presence across India" as an office claim (we only say ARKCA serves businesses across India),
 *  - founder photos and social links (none supplied).
 * Wording is lightly edited for UK spelling and for the "ARKACA" typo on the live page.
 */

export type ValueIcon = "integrity" | "trust" | "innovation" | "excellence";

export const aboutStory = {
  lead: "At ARKCA Corporate Solutions, we blend extensive industry expertise with a client-first approach to deliver accurate, timely and hassle-free regulatory compliance solutions.",
  paragraphs: [
    "We help organisations simplify regulatory processes, meet legal requirements and stay ahead of evolving regulations without interrupting their everyday operations.",
    "We believe compliance should drive business growth, not just satisfy legal requirements. We simplify complex regulations, provide practical solutions and deliver dependable compliance support that helps businesses across India operate without obstacles. Our professionals help businesses strengthen their brand reputation and value, build sustainable business practices, stay compliant and grow over the long term in an ever-changing regulatory environment.",
  ],
} as const;

export const aboutValues: {
  icon: ValueIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: "integrity",
    title: "Integrity",
    text: "We conduct every engagement with honesty, accountability and professionalism.",
  },
  {
    icon: "trust",
    title: "Trust",
    text: "Trust drives every client relationship through dependable compliance and expert guidance.",
  },
  {
    icon: "innovation",
    title: "Innovation",
    text: "We blend expertise with digital technology for quicker regulatory processes.",
  },
  {
    icon: "excellence",
    title: "Excellence",
    text: "We strive for excellence beyond registrations, approvals and every service we deliver.",
  },
];

export const aboutVision = {
  title: "Our vision",
  text: "To help organisations build ethical, future-ready businesses through streamlined regulatory solutions, digital innovation and environmental excellence, and to become India's most reputable sustainability partner for compliance.",
} as const;

export const aboutMission = {
  title: "Our mission",
  text: "To make regulatory compliance simple, transparent and accessible for every organisation, by combining professional guidance, innovative technology and practical solutions to navigate India's evolving regulatory landscape.",
} as const;

export type Founder = {
  name: string;
  initials: string;
  role: string;
  bio: string[];
};

export const founders: Founder[] = [
  {
    name: "Rajesh Agarwal",
    initials: "RA",
    role: "Founder & Managing Partner",
    bio: [
      "Rajesh steers ARKCA Corporate with a strategic vision to simplify complex regulatory frameworks and support business excellence through comprehensive compliance, certification and advisory services.",
      "With a principled, client-oriented approach, he treats transparency, trust and sustainable growth as part of every engagement.",
    ],
  },
  {
    name: "Sunaina Shaw",
    initials: "SS",
    role: "Co-Founder & Managing Partner",
    bio: [
      "Sunaina leads ARKCA Corporate Solutions Pvt. Ltd. with a focus on operational excellence and client success.",
      "Her leadership is built on demystifying complex compliance landscapes while promoting innovation, ethical governance and sustainable business practices, with a steady commitment to professionalism, precision and service quality.",
    ],
  },
];

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, BellRing, CircleCheck, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { asset } from "@/lib/assetPath";
import {
  FooterColumns,
  type FooterColumn,
  type FooterLinkItem,
} from "@/components/layout/FooterColumns";
import {
  consultationHref,
  contactDetails,
  footerExplore,
  legalLinks,
  primaryNav,
  socialLinks,
} from "@/lib/navigation";

/* ------------------------------------------------------------------ */
/* Link columns. Every href is looked up in lib/navigation.ts, so a    */
/* link that is not in the verified list is dropped instead of shown.  */
/* ------------------------------------------------------------------ */

const known = new Map<string, FooterLinkItem>();
for (const item of primaryNav) {
  known.set(item.href, { label: item.label, href: item.href });
  for (const group of item.groups ?? []) {
    for (const link of group.links) known.set(link.href, { label: link.label, href: link.href });
  }
}

const lic = "/service/certification-and-compliances";
const biz = "/service/business-setup-certifications";
const imp = "/service/other-certification-services";

function pick(hrefs: string[], labels: Record<string, string> = {}): FooterLinkItem[] {
  return hrefs.flatMap((href) => {
    const link = known.get(href);
    return link ? [{ href, label: labels[href] ?? link.label }] : [];
  });
}

const columns: FooterColumn[] = [
  {
    title: "EPR & Environmental",
    sections: [
      {
        links: pick(
          [
            "/service/epr/",
            "/service/epr/plastic-waste/",
            "/service/epr/e-waste/",
            "/service/epr/battery-waste/",
            "/service/epr/tyre-waste/",
            "/service/epr/used-oil/",
            "/service/epr/end-of-life-vehicle/",
            "/service/epr/solid-waste-management/",
            "/sso-common-epr-portal/",
          ],
          { "/service/epr/": "All EPR services" },
        ),
      },
    ],
  },
  {
    title: "Licences & Certifications",
    sections: [
      {
        links: pick(
          [
            `${lic}/`,
            `${lic}/bis-crs/`,
            `${lic}/wpc/`,
            `${lic}/lmpc/`,
            `${lic}/fssai-registration-and-compliance/`,
            `${lic}/cdsco/`,
            `${lic}/apeda/`,
            `${lic}/iso-certification/`,
            `${lic}/trade-mark/`,
          ],
          { [`${lic}/`]: "All licences" },
        ),
      },
    ],
  },
  {
    title: "Business & Import",
    sections: [
      {
        heading: "Business setup",
        links: pick(
          [
            `${biz}/`,
            `${biz}/company-formation/`,
            `${biz}/llp-formation/`,
            `${biz}/gst-registration-and-compliance/`,
            `${biz}/roc-compliance/`,
          ],
          { [`${biz}/`]: "All business setup" },
        ),
      },
      {
        heading: "Import & customs",
        links: pick(
          [
            `${imp}/`,
            `${biz}/iec-registration-and-compliance/`,
            `${imp}/ice-gate/`,
            `${imp}/noc-for-dgft-steel-import-moefcc/`,
            `${lic}/scomet/`,
          ],
          { [`${imp}/`]: "All import and customs" },
        ),
      },
    ],
  },
  {
    title: "Company",
    sections: [{ links: footerExplore }],
  },
];

/* ------------------------------------------------------------------ */
/* Social icons                                                        */
/* ------------------------------------------------------------------ */

function SocialIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: "size-[18px]",
  };

  switch (name) {
    case "Facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.4 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7Z"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M7.1 9.4H4.4V19h2.7V9.4ZM5.7 4.8A1.6 1.6 0 1 0 5.7 8a1.6 1.6 0 0 0 0-3.2ZM19.6 13.2c0-2.6-1.4-3.8-3.3-3.8-1.5 0-2.2.8-2.6 1.4V9.4H11v9.6h2.7v-5.3c0-1.4.7-2.2 1.8-2.2s1.6.8 1.6 2.2V19h2.7v-5.8Z"
          />
        </svg>
      );
    case "X":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14.7 10.6 20.4 4h-1.4l-5 5.7L9.8 4H4.6l6 8.7L4.6 20h1.4l5.3-6.1L14.4 20h5.2l-6.3-9.4Zm-1.9 2.2-.6-.9-4.9-7h2.1l4 5.7.6.9 5.1 7.3h-2.1l-4.2-6Z"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M21 8.2a3 3 0 0 0-2.1-2.1C17.2 5.7 12 5.7 12 5.7s-5.2 0-6.9.4A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.7.4 6.9.4 6.9.4s5.2 0 6.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8ZM10.4 15.1V8.9L15.6 12l-5.2 3.1Z"
          />
        </svg>
      );
  }
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-night text-white">
      <CtaBand />

      {/* Link area, framed by thin vertical rules on wide screens */}
      <Container className="xl:border-x xl:border-white/10">
        <div className="grid xl:grid-cols-[24rem_minmax(0,1fr)]">
          <div className="py-10 xl:border-r xl:border-white/10 xl:py-12 xl:pr-8 xl:pl-8">
            <Link href="/" className="inline-flex" aria-label="ARKCA Corporate, home">
              <Image
                src={asset("/brand/logo.webp")}
                alt=""
                width={290}
                height={83}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              ARKCA Corporate Solutions helps businesses navigate regulatory compliance,
              environmental obligations, product certifications, and business requirements.
            </p>

            <div className="mt-6 max-w-sm space-y-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                Talk to the team
              </p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-3 text-sm text-white/90 no-underline transition-colors hover:text-accent"
              >
                <Mail className="size-4 shrink-0 text-accent" aria-hidden />
                <span className="min-w-0 break-words">{contactDetails.email}</span>
              </a>
              <a
                href={`tel:${contactDetails.phoneHref}`}
                className="flex items-center gap-3 text-sm text-white/90 no-underline transition-colors hover:text-accent"
              >
                <Phone className="size-4 shrink-0 text-accent" aria-hidden />
                {contactDetails.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 xl:border-0 xl:px-10 xl:py-12">
            <FooterColumns columns={columns} />
          </div>
        </div>
      </Container>

      {/* Locations, social profiles */}
      <div className="border-t border-white/10">
        <Container className="xl:border-x xl:border-white/10">
          <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between xl:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Delhi · Mumbai · Kolkata · Guwahati
              </p>
              <ul className="mt-4 flex gap-2.5">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/85 transition-colors hover:border-accent/60 hover:bg-white/10 hover:text-accent"
                    >
                      <SocialIcon name={link.label} />
                      <span className="sr-only">{link.label} (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#content"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] font-medium text-white/80 no-underline transition-colors hover:bg-white/10 hover:text-white"
            >
              Back to top
              <ArrowUp className="size-3.5" aria-hidden />
            </a>
          </div>
        </Container>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10">
        <Container className="xl:border-x xl:border-white/10">
          <div className="flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between xl:px-8">
            <p>© {year} ARKCA Corporate Solutions Pvt. Ltd. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Call to action band with a preview peeking from the bottom          */
/* ------------------------------------------------------------------ */

function CtaBand() {
  const rows = [
    { label: "Plastic waste EPR", status: "Registered", tone: "bg-[#d4e1f7] text-[#26502b]" },
    { label: "BIS / CRS certification", status: "Documents mapped", tone: "bg-[#e5e1f5] text-[#443b78]" },
    { label: "IEC registration", status: "Filing in progress", tone: "bg-[#fbe9cf] text-[#7a4a12]" },
  ];

  return (
    <section
      aria-labelledby="footer-cta-title"
      className="relative overflow-hidden bg-brand bg-[radial-gradient(60%_90%_at_15%_0%,rgba(242,184,75,0.22),transparent_70%),radial-gradient(55%_80%_at_95%_35%,rgba(83,109,155,0.35),transparent_70%)]"
    >
      <Container className="relative pt-14 text-center md:pt-20">
        <h2
          id="footer-cta-title"
          className="font-display mx-auto max-w-2xl text-[1.9rem] font-bold leading-[1.12] tracking-[-0.03em] sm:text-4xl md:text-[2.6rem]"
        >
          Need help with regulatory compliance?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/70">
          Speak with the team to understand the requirements relevant to your business.
        </p>
        <a
          href={consultationHref}
          className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold !text-brand no-underline shadow-[0_12px_28px_-12px_rgba(242,184,75,0.6)] transition-colors hover:bg-accent-soft"
        >
          Book a Consultation
          <ArrowRight className="size-4" aria-hidden />
        </a>

        {/* Peeking preview (illustrative) */}
        <div className="relative mx-auto mt-12 max-w-[44rem] md:mt-16" aria-hidden>
          <div className="absolute left-0 top-10 z-10 hidden items-center gap-2.5 rounded-xl bg-white px-3 py-2 text-left text-brand shadow-[0_14px_30px_-14px_rgba(0,0,0,0.55)] lg:-left-40 lg:flex">
            <span className="grid size-8 place-items-center rounded-lg bg-[#faefe8] text-[#a4552a]">
              <BellRing className="size-4" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-xs font-semibold leading-4">Annual return</span>
              <span className="block text-[10px] text-[#606a7b]">Reminder set</span>
            </span>
          </div>
          <div className="absolute right-0 top-24 z-10 hidden items-center gap-2.5 rounded-xl bg-white px-3 py-2 text-left text-brand shadow-[0_14px_30px_-14px_rgba(0,0,0,0.55)] lg:-right-44 lg:flex">
            <span className="grid size-8 place-items-center rounded-lg bg-[#dee7f7] text-[#2f6b3a]">
              <CircleCheck className="size-4" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-xs font-semibold leading-4">Documents verified</span>
              <span className="block text-[10px] text-[#606a7b]">Ready to file</span>
            </span>
          </div>

          <div className="h-[11.5rem] overflow-hidden rounded-t-2xl border border-b-0 border-white/20 bg-canvas text-left shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.5)] md:h-[13rem]">
            <div className="flex items-center gap-1.5 border-b border-[#dde1e8] bg-white px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-[#ff6b5e]" />
              <span className="size-2.5 rounded-full bg-[#ffc044]" />
              <span className="size-2.5 rounded-full bg-[#33c84b]" />
              <span className="ml-3 text-[11px] font-medium text-[#606a7b]">Your compliance plan</span>
              <span className="ml-auto rounded-full bg-[#edeff3] px-2 py-0.5 text-[10px] font-semibold text-[#606a7b]">
                Sample view
              </span>
            </div>
            <div className="space-y-2 p-3.5 md:p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#707b8e]">
                Compliance overview
              </p>
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-[#dde1e8] bg-white px-3.5 py-2.5"
                >
                  <span className="min-w-0 truncate text-[13px] font-semibold text-brand">
                    {row.label}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${row.tone}`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

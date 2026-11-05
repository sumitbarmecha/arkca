import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, BadgeCheck, Briefcase, Globe2, HelpCircle, Recycle } from "lucide-react";
import { ArkSlider } from "@/components/ui/ArkSlider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { consultationHref, primaryNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * BACKGROUND IMAGE
 * Put the image in /public (for example /public/images/services-bg.jpg) and set
 * the path here. The dark overlay keeps the text readable on top of it.
 */
const SECTION_BG_IMAGE = ""; // e.g. "/images/services-bg.jpg"

/* ------------------------------------------------------------------ */
/* Content. Every href comes from lib/navigation.ts, the verified list. */
/* ------------------------------------------------------------------ */

const navLinks = primaryNav.flatMap((item) => item.groups?.flatMap((g) => g.links) ?? []);

function hrefFor(navLabel: string): string {
  const link = navLinks.find((l) => l.label === navLabel);
  if (!link) throw new Error(`ServicesOverview: "${navLabel}" is not in lib/navigation.ts`);
  return link.href;
}

type Chip = { label: string; href: string };

/** `navLabel` looks the link up in navigation.ts. `label` overrides the text shown. */
function chip(navLabel: string, label = navLabel): Chip {
  return { label, href: hrefFor(navLabel) };
}

type Tone = "mint" | "sky" | "lavender" | "peach";

/**
 * `card`  : gradient that covers the whole card.
 * `chip`  : colour a chip turns into on hover. It is the card's own background
 *           colour (the stronger end of the gradient), so the chip blends in.
 */
const tones: Record<Tone, { card: string; chip: string; icon: string }> = {
  mint: {
    card: "bg-[linear-gradient(165deg,#abc4ee_0%,#d9e4f7_50%,#bdd1f2_100%)]",
    chip: "#abc4ee",
    icon: "text-[#2f7a45]",
  },
  sky: {
    card: "bg-[linear-gradient(165deg,#b5d9e6_0%,#e3f0f5_50%,#c4e1ec_100%)]",
    chip: "#b5d9e6",
    icon: "text-[#25728a]",
  },
  lavender: {
    card: "bg-[linear-gradient(165deg,#cfc5f1_0%,#ece9f8_50%,#dcd3f4_100%)]",
    chip: "#cfc5f1",
    icon: "text-[#5b44b5]",
  },
  peach: {
    card: "bg-[linear-gradient(165deg,#f6cfb0_0%,#fbeee5_50%,#f7d9c4_100%)]",
    chip: "#f6cfb0",
    icon: "text-[#c25a2a]",
  },
};

type Category = {
  id: string;
  title: string;
  description: string;
  href: string;
  tone: Tone;
  icon: typeof Recycle;
  chips: Chip[];
  visual: ReactNode;
};

const categories: Category[] = [
  {
    id: "epr",
    title: "EPR & Environmental",
    description:
      "Registrations and compliance for the waste streams covered by India's EPR rules.",
    href: "/service/epr/",
    tone: "mint",
    icon: Recycle,
    chips: [
      chip("Plastic waste"),
      chip("E-waste"),
      chip("Battery waste"),
      chip("Tyre waste"),
      chip("Used oil"),
      chip("End-of-life vehicles"),
    ],
    visual: <EprVisual />,
  },
  {
    id: "licences",
    title: "Licences & Certifications",
    description:
      "Product, food and export registrations used to sell or ship from India.",
    href: "/service/certification-and-compliances/",
    tone: "lavender",
    icon: BadgeCheck,
    chips: [
      chip("BIS / CRS"),
      chip("ISO certification", "ISO"),
      chip("FSSAI"),
      chip("APEDA"),
      chip("LMPC"),
      chip("WPC"),
    ],
    visual: <LicenceVisual />,
  },
  {
    id: "business",
    title: "Business Setup",
    description: "Company formation and the registrations that follow incorporation.",
    href: "/service/business-setup-certifications/",
    tone: "sky",
    icon: Briefcase,
    chips: [
      chip("Company formation"),
      chip("LLP formation"),
      chip("One person company", "OPC"),
      chip("DPIIT startup registration", "Startup India"),
      chip("GST registration"),
      chip("ROC compliance"),
    ],
    visual: <SetupVisual />,
  },
  {
    id: "import",
    title: "Import & Customs",
    description: "Customs, DGFT and IEC filings, from application to approval.",
    href: "/service/other-certification-services/",
    tone: "peach",
    icon: Globe2,
    chips: [
      chip("DGFT, steel and MoEFCC NOC", "DGFT & steel NOC"),
      chip("IEC registration"),
      chip("RCMC"),
      chip("AD code"),
      chip("ICEGATE"),
      chip("SCOMET"),
    ],
    visual: <ImportVisual />,
  },
];

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function ServicesOverview() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative isolate overflow-x-clip bg-brand py-16 text-white md:py-24"
    >
      {/* Background: flat brand green. Only shows an image once SECTION_BG_IMAGE is set. */}
      {SECTION_BG_IMAGE ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(11,28,55,0.85), rgba(11,28,55,0.85)), url(${SECTION_BG_IMAGE})`,
          }}
        />
      ) : null}

      <Container>
        <Reveal>
          <header className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75 backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,184,75,0.18)]" />
              What we do
            </p>
            <h2
              id="services-title"
              className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[3.25rem]"
            >
              Comply, certify and grow.
              <br />
              All in one place.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/65 md:text-base">
              From EPR registration to company setup and import filings, ARKCA handles the
              regulatory work end to end, so you can focus on running your business.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-10 md:mt-14">
          {/* Framing lines on wide screens */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -top-24 left-0 hidden w-px bg-white/10 xl:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -top-24 right-0 hidden w-px bg-white/10 xl:block"
          />

          <ArkSlider label="ARKCA services" tone="dark" className="xl:px-7">
            {categories.map((category) => (
              <ServiceCard key={category.id} category={category} />
            ))}
          </ArkSlider>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 md:mt-14">
          {/* Highlighted call to action: solid light panel on the dark section */}
          <div className="flex flex-col gap-6 rounded-[1.25rem] bg-accent p-6 text-brand shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)] md:flex-row md:items-center md:justify-between md:px-10 md:py-9">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-accent">
                <HelpCircle className="size-6" strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-display text-xl font-bold tracking-[-0.02em] md:text-2xl">
                  Not sure what applies to your business?
                </p>
                <p className="mt-1.5 max-w-lg text-sm leading-6 text-brand/75 md:text-[15px]">
                  Tell us what you make, import or sell. We will map the registrations you need.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <a
                href={consultationHref}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold !text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-[0_12px_28px_-10px_rgba(17,40,75,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Book a consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/service/epr/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand/35 px-6 text-sm font-semibold text-brand transition-colors hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Explore all services
              </Link>
            </div>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-xs leading-5 text-white/40">
          Dashboard previews are illustrative.
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

function ServiceCard({ category }: { category: Category }) {
  const tone = tones[category.tone];
  const Icon = category.icon;

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[1.25rem] text-brand shadow-[0_24px_44px_-26px_rgba(0,0,0,0.7)]",
        tone.card,
      )}
      style={{ "--chip-hover": tone.chip } as CSSProperties}
    >
      <div className="flex items-center gap-3 px-6 pt-6">
        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-xl bg-white shadow-[0_6px_14px_-8px_rgba(0,0,0,0.35)]",
            tone.icon,
          )}
        >
          <Icon className="size-5" strokeWidth={1.8} />
        </span>
        <h3 className="font-display text-[1.0625rem] font-bold leading-tight tracking-[-0.015em]">
          <Link href={category.href} className="no-underline hover:underline">
            {category.title}
          </Link>
        </h3>
      </div>

      <p className="px-6 pt-4 text-sm leading-6 text-brand/70">{category.description}</p>

      <ul className="flex flex-wrap gap-2 px-6 pb-6 pt-5">
        {category.chips.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="group/chip inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[13px] font-medium leading-none text-brand shadow-[0_1px_2px_rgba(17,40,75,0.06),0_0_0_1px_rgba(17,40,75,0.05)] no-underline transition-colors duration-200 hover:bg-[var(--chip-hover)] focus-visible:bg-[var(--chip-hover)]"
            >
              {c.label}
              <ArrowRight
                className="size-3 opacity-60 transition-all duration-300 ease-out group-hover/chip:-rotate-45 group-hover/chip:opacity-100 group-focus-visible/chip:-rotate-45 group-focus-visible/chip:opacity-100"
                strokeWidth={2.4}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Preview panel, pinned to the bottom of the card (same height in every card) */}
      <div className="mt-auto pl-5 pt-2">{category.visual}</div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Illustrative previews (static, no client JS)                        */
/* ------------------------------------------------------------------ */

function Panel({ title, aside, children }: { title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <div className="h-[12.5rem] overflow-hidden rounded-tl-2xl bg-white/90 p-4 shadow-[0_24px_40px_-18px_rgba(17,40,75,0.35),0_0_0_1px_rgba(17,40,75,0.05)]">
      <p className="mb-3 flex items-center justify-between gap-2 text-xs font-semibold text-brand/60">
        {title}
        {aside}
      </p>
      {children}
    </div>
  );
}

function Pill({ tone, children }: { tone: "ok" | "warn"; children: ReactNode }) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-1 text-[11px] font-semibold",
        tone === "ok" ? "bg-[#d7e2f4] text-[#1e5c38]" : "bg-[#fbe9c6] text-[#8a5200]",
      )}
    >
      {children}
    </span>
  );
}

function EprVisual() {
  const rows = [
    { label: "Plastic", value: 92 },
    { label: "E-waste", value: 78 },
    { label: "Battery", value: 64 },
  ];
  return (
    <Panel title="EPR target progress">
      <div className="space-y-3.5 pt-1">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[3.25rem_1fr_2.25rem] items-center gap-2.5 text-xs">
            <span className="text-brand/70">{r.label}</span>
            <span className="h-2 overflow-hidden rounded-full bg-brand/10">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-[#3f9a5c] to-accent-soft"
                style={{ width: `${r.value}%` }}
              />
            </span>
            <b className="text-right font-semibold">{r.value}%</b>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function LicenceVisual() {
  const rings = [
    { label: "BIS", value: 100 },
    { label: "ISO", value: 84 },
    { label: "FSSAI", value: 62 },
  ];
  return (
    <Panel title="Application progress">
      <div className="flex items-center justify-around gap-2 pt-2">
        {rings.map((r) => (
          <div
            key={r.label}
            className="relative grid size-[4.25rem] place-items-center rounded-full"
            style={{
              background: `conic-gradient(#5b44b5 ${r.value}%, rgba(17,40,75,0.09) 0)`,
            }}
          >
            <span className="absolute inset-[7px] rounded-full bg-white" />
            <b className="relative text-[11px] font-bold tracking-wide">{r.label}</b>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function SetupVisual() {
  const rows = [
    { label: "Company incorporation", status: "Done", ok: true },
    { label: "GST registration", status: "Done", ok: true },
    { label: "ROC annual filing", status: "Upcoming", ok: false },
  ];
  return (
    <Panel title="Setup checklist">
      <ul>
        {rows.map((r) => (
          <li
            key={r.label}
            className="flex items-center gap-2.5 border-t border-brand/8 py-2.5 text-[13px] font-medium"
          >
            <span
              className={cn(
                "grid size-[1.125rem] shrink-0 place-items-center rounded-full text-white",
                r.ok ? "bg-[#2f9a5f]" : "bg-[#e9a227]",
              )}
            >
              <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
                <path
                  d={r.ok ? "M2.5 6.3 5 8.7 9.5 3.6" : "M6 3v3.4M6 8.6v.01"}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="flex-1">{r.label}</span>
            <Pill tone={r.ok ? "ok" : "warn"}>{r.status}</Pill>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function ImportVisual() {
  const steps = [
    { label: "Documents", state: "done" },
    { label: "Filed", state: "done" },
    { label: "Review", state: "current" },
    { label: "Approved", state: "todo" },
  ] as const;
  return (
    <Panel title="NOC application" aside={<Pill tone="warn">In review</Pill>}>
      <ol>
        {steps.map((s, i) => (
          <li
            key={s.label}
            className={cn(
              "relative flex items-center gap-3 py-1.5 text-[13px] font-medium",
              s.state === "todo" ? "text-brand/40" : "text-brand",
            )}
          >
            {i < steps.length - 1 && (
              <span
                className={cn(
                  "absolute left-[6px] top-1/2 h-full w-0.5",
                  s.state === "done" ? "bg-[#2f9a5f]" : "bg-brand/12",
                )}
              />
            )}
            <span
              className={cn(
                "relative z-10 size-3.5 shrink-0 rounded-full border-2 bg-white",
                s.state === "done" && "border-[#2f9a5f] bg-[#2f9a5f]",
                s.state === "current" && "border-[#e9a227] shadow-[0_0_0_4px_rgba(233,162,39,0.22)]",
                s.state === "todo" && "border-brand/20",
              )}
            />
            {s.label}
          </li>
        ))}
      </ol>
    </Panel>
  );
}

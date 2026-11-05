import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  Check,
  ChevronRight,
  FileCheck2,
  ListChecks,
  Route,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { consultationHref } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Third home section: the story after "what we do" is "how it works".
 * Copy avoids invented numbers, timelines or client names. The panels are
 * illustrative and labelled as such.
 */

const promises = [
  "EPR, licences, company setup and import filings under one roof",
  "A clear checklist before anything is filed",
  "Reminders for renewals and annual filings",
];

type Step = {
  title: string;
  text: string;
  icon: LucideIcon;
  tone: { panel: string; badge: string };
  visual: ReactNode;
};

const steps: Step[] = [
  {
    title: "Talk it through",
    text: "Book a 30-minute consultation. Tell us what you make, import or sell, and we listen before we recommend anything.",
    icon: CalendarCheck,
    tone: { panel: "bg-[#e9f2f6]", badge: "bg-[#d3e6ee] text-[#1f4a5c]" },
    visual: <ConsultVisual />,
  },
  {
    title: "Map what applies",
    text: "We work out which registrations, licences and filings your business actually needs, and in what order.",
    icon: Route,
    tone: { panel: "bg-[#e5ecf7]", badge: "bg-[#cad8f1] text-[#26502b]" },
    visual: <MapVisual />,
  },
  {
    title: "Prepare and file",
    text: "You get a document checklist. We review the paperwork and submit the application on the official portal.",
    icon: FileCheck2,
    tone: { panel: "bg-[#efedf7]", badge: "bg-[#dfdbf0] text-[#443b78]" },
    visual: <FileVisual />,
  },
  {
    title: "Follow through",
    text: "Approval is not the end. We keep renewals, annual returns and portal updates on your calendar.",
    icon: BellRing,
    tone: { panel: "bg-[#faefe8]", badge: "bg-[#f5dccd] text-[#7a3f1d]" },
    visual: <FollowVisual />,
  },
];

const audiences = [
  "Manufacturers",
  "Importers",
  "Exporters",
  "Producers",
  "Brand owners",
  "Recyclers",
  "Founders",
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="relative border-t border-[#e5e8ee] bg-canvas py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 xl:gap-20">
          {/* Intro, sticky on desktop so the story stays in view while steps scroll */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
                <span className="size-1.5 rounded-full bg-[#536d9b] shadow-[0_0_0_4px_rgba(83,109,155,0.18)]" />
                How it works
              </p>
              <h2
                id="how-title"
                className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.9rem]"
              >
                One Partner. Every Compliance Path Covered
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#555d6c] md:text-base">
                Whether it is an EPR registration, a product licence, a new company or an import
                code, the path is the same: one conversation, one plan, and one team from the first
                call to the final filing and beyond.
              </p>

              <ul className="mt-6 space-y-3">
                {promises.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#2c323d]">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-accent">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={consultationHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold !text-white no-underline shadow-[0_10px_24px_-12px_rgba(17,40,75,0.6)] transition-colors hover:bg-brand-deep"
                >
                  Book a consultation
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/service/epr/"
                  className="hidden h-12 items-center justify-center rounded-full border sm:inline-flex border-[#c8ced8] bg-white px-6 text-sm font-semibold !text-brand no-underline transition-colors hover:bg-[#f4f6f9]"
                >
                  Explore EPR services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Steps */}
          <ol className="grid gap-4 md:gap-5">
            {steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.04}>
                  <article className="grid gap-6 rounded-[1.5rem] border border-[#dde1e8] bg-white p-5 shadow-[0_14px_36px_-24px_rgba(17,40,75,0.35)] sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:items-center md:gap-7">
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "grid size-10 place-items-center rounded-xl",
                            step.tone.badge,
                          )}
                        >
                          <step.icon className="size-5" strokeWidth={1.8} aria-hidden />
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#707b8e]">
                          Step {i + 1} of {steps.length}
                        </span>
                      </div>
                      <h3 className="font-display mt-4 text-xl font-bold tracking-[-0.02em] text-brand md:text-[1.4rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#555d6c] md:text-[15px] md:leading-7">
                        {step.text}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "rounded-2xl p-3.5 sm:p-4",
                        step.tone.panel,
                      )}
                      aria-hidden
                    >
                      {step.visual}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Who it is for: closes the story and leads into the rest of the page */}
        <Reveal className="mt-10 md:mt-14">
          <div className="flex flex-col gap-5 rounded-[1.5rem] bg-brand p-6 text-white md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
            <div className="md:max-w-sm">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] md:text-2xl">
                Built for the people who carry the obligation
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                The duty often sits with more than the name on the invoice. We help you see where it
                lies and what to do about it.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 md:max-w-xl md:justify-end">
              {audiences.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-medium text-white/90"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-xs text-[#7f899b] md:text-left">
          Panels above are illustrative examples, not live data.
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Illustrative step panels                                            */
/* ------------------------------------------------------------------ */

function MiniCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/5 bg-white p-3 shadow-[0_6px_18px_-12px_rgba(17,40,75,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ConsultVisual() {
  return (
    <div className="space-y-2.5">
      <MiniCard className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand text-accent">
          <CalendarCheck className="size-[18px]" strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-brand">30-minute consultation call</p>
          <p className="text-[11px] text-[#606a7b]">Pick a slot that suits you</p>
        </div>
      </MiniCard>
      <p className="px-0.5 pt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4d6a77]">
        Tell us
      </p>
      <div className="flex flex-wrap gap-1.5">
        {["What you make", "What you import", "What you sell"].map((c) => (
          <span
            key={c}
            className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[#1f4a5c] shadow-sm"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function MapVisual() {
  const rows = ["Plastic waste EPR", "BIS / CRS certification", "IEC registration"];
  return (
    <MiniCard className="p-3.5">
      <div className="flex items-center gap-2">
        <ListChecks className="size-4 text-[#26502b]" strokeWidth={1.9} />
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#26502b]">
          What may apply to you
        </p>
      </div>
      <ul className="mt-2.5 space-y-1.5">
        {rows.map((r, i) => (
          <li
            key={r}
            className="flex items-center gap-2.5 rounded-lg bg-[#f0f4fb] px-2.5 py-2 text-[13px] font-medium text-brand"
          >
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#cad8f1] text-[10px] font-bold text-[#26502b]">
              {i + 1}
            </span>
            <span className="min-w-0 flex-1 truncate">{r}</span>
            <ChevronRight className="size-3.5 text-[#8492a9]" />
          </li>
        ))}
      </ul>
    </MiniCard>
  );
}

function FileVisual() {
  const rows: { label: string; state: "done" | "active" }[] = [
    { label: "Documents collected", state: "done" },
    { label: "Application reviewed", state: "done" },
    { label: "Submitted on the portal", state: "active" },
  ];
  return (
    <MiniCard className="p-3.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#443b78]">
        Application checklist
      </p>
      <ul className="mt-2.5 space-y-2">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center gap-2.5">
            <span
              className={cn(
                "grid size-5 shrink-0 place-items-center rounded-full",
                r.state === "done" ? "bg-[#536d9b] text-white" : "border-2 border-[#8d85c9] bg-white",
              )}
            >
              {r.state === "done" ? (
                <Check className="size-3" strokeWidth={3} />
              ) : (
                <span className="size-1.5 rounded-full bg-[#8d85c9]" />
              )}
            </span>
            <span
              className={cn(
                "text-[13px] font-medium",
                r.state === "done" ? "text-brand" : "text-[#443b78]",
              )}
            >
              {r.label}
            </span>
          </li>
        ))}
      </ul>
    </MiniCard>
  );
}

function FollowVisual() {
  const rows = [
    { label: "Annual return", note: "Reminder set" },
    { label: "Renewal", note: "On your calendar" },
    { label: "Portal update", note: "We flag it" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <MiniCard key={r.label} className="flex items-center gap-3 py-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#faefe8] text-[#a4552a]">
            <BellRing className="size-4" strokeWidth={1.8} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold leading-4 text-brand">{r.label}</p>
          </div>
          <span className="shrink-0 rounded-full bg-[#faefe8] px-2 py-0.5 text-[10px] font-semibold text-[#7a3f1d]">
            {r.note}
          </span>
        </MiniCard>
      ))}
    </div>
  );
}

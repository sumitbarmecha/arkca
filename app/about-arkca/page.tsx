import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Compass, Target } from "lucide-react";
import { ValueCard } from "@/components/about/ValueCard";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  aboutMission,
  aboutStory,
  aboutValues,
  aboutVision,
  founders,
} from "@/lib/about";
import { consultationHref } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "About ARKCA Corporate Solutions | Regulatory Compliance Experts",
  description:
    "ARKCA Corporate Solutions helps organisations simplify regulatory processes, meet legal requirements and stay ahead of evolving regulations. Meet our values, vision and founders.",
};

const focusAreas = [
  { label: "EPR & environmental compliance", href: "/service/epr/" },
  { label: "Licences & certifications", href: "/service/certification-and-compliances/" },
  { label: "Business setup", href: "/service/business-setup-certifications/" },
  { label: "Import & customs", href: "/service/other-services/" },
];

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={
        dark
          ? "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85"
          : "inline-flex items-center gap-2 rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]"
      }
    >
      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,184,75,0.25)]" />
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main id="content" className="bg-canvas">
      {/* Hero */}
      <section aria-labelledby="about-hero-title" className="py-14 md:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-[#606a7b]">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="no-underline hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-brand">
                About us
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>About us</Eyebrow>
              <h1
                id="about-hero-title"
                className="font-display mt-5 text-[2.4rem] font-bold leading-[1.05] tracking-[-0.035em] text-brand sm:text-5xl lg:text-[3.5rem]"
              >
                About{" "}
                <span className="bg-[linear-gradient(transparent_62%,rgba(242,184,75,0.55)_62%)] [box-decoration-break:clone]">
                  ARKCA Corporate Solutions
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#2c323d] md:text-lg md:leading-8">
                {aboutStory.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={consultationHref}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold !text-white no-underline shadow-[0_10px_24px_-12px_rgba(17,40,75,0.6)] transition-colors hover:bg-brand-deep"
                >
                  Book a consultation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#founders"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#c8ced8] bg-white px-7 text-[15px] font-semibold !text-brand no-underline transition-colors hover:bg-[#f4f6f9]"
                >
                  Meet the founders
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-[2rem] bg-brand p-6 text-white shadow-[0_40px_80px_-40px_rgba(17,40,75,0.6)] sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-accent/25 blur-2xl"
                />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  Where we help
                </p>
                <p className="font-display relative mt-3 text-xl font-bold leading-snug tracking-[-0.01em] sm:text-2xl">
                  One team for the registrations, licences and filings your business depends on.
                </p>
                <ul className="relative mt-6 divide-y divide-white/10 border-y border-white/10">
                  {focusAreas.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="group flex items-center justify-between gap-4 py-3.5 text-[15px] font-medium !text-white no-underline"
                      >
                        {a.label}
                        <ArrowRight className="size-4 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section
        aria-labelledby="story-title"
        className="border-t border-[#e5e8ee] bg-white py-16 md:py-24"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
              <h2
                id="story-title"
                className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.75rem]"
              >
                Practical compliance, delivered with a client-first approach
              </h2>
            </Reveal>
            <Reveal delay={0.05} className="space-y-5 text-base leading-8 text-[#47505e]">
              {aboutStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.05} className="mt-12">
            <figure className="relative overflow-hidden rounded-[2rem] bg-brand-night px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 -top-10 size-56 rounded-full bg-accent/15 blur-3xl"
              />
              <blockquote className="font-display relative max-w-4xl text-2xl font-bold leading-[1.25] tracking-[-0.02em] sm:text-3xl md:text-[2.25rem]">
                Compliance should drive business growth,{" "}
                <span className="text-accent">not just satisfy legal requirements.</span>
              </blockquote>
              <figcaption className="relative mt-5 text-sm text-white/60">
                How we think about every engagement
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <header className="max-w-2xl">
              <Eyebrow>Our values</Eyebrow>
              <h2
                id="values-title"
                className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.75rem]"
              >
                Why choose ARKCA Corporate
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#555d6c] md:text-base">
                Four principles shape how we advise, file and follow through.
              </p>
            </header>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
            {aboutValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.04} className="h-full">
                <ValueCard {...v} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision and mission */}
      <section
        aria-labelledby="vision-title"
        className="border-t border-[#e5e8ee] bg-white py-16 md:py-24"
      >
        <Container>
          <Reveal>
            <header className="max-w-2xl">
              <Eyebrow>Vision &amp; mission</Eyebrow>
              <h2
                id="vision-title"
                className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.75rem]"
              >
                Where we are headed, and how we get there
              </h2>
            </header>
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2">
            <Reveal className="h-full">
              <article className="relative h-full overflow-hidden rounded-[2rem] bg-brand p-7 text-white md:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 size-52 rounded-full bg-accent/20 blur-3xl"
                />
                <span className="relative grid size-12 place-items-center rounded-2xl bg-accent text-brand">
                  <Compass className="size-6" aria-hidden />
                </span>
                <h3 className="font-display relative mt-6 text-2xl font-bold tracking-[-0.02em]">
                  {aboutVision.title}
                </h3>
                <p className="relative mt-3 text-base leading-8 text-white/75">{aboutVision.text}</p>
              </article>
            </Reveal>
            <Reveal delay={0.05} className="h-full">
              <article className="h-full rounded-[2rem] bg-[#fbf1dc] p-7 md:p-10">
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#8a5200] shadow-[0_6px_14px_-8px_rgba(17,40,75,0.35)]">
                  <Target className="size-6" aria-hidden />
                </span>
                <h3 className="font-display mt-6 text-2xl font-bold tracking-[-0.02em] text-brand">
                  {aboutMission.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-[#47505e]">{aboutMission.text}</p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section id="founders" aria-labelledby="founders-title" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <header className="max-w-2xl">
              <Eyebrow>Leadership</Eyebrow>
              <h2
                id="founders-title"
                className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.75rem]"
              >
                From the founders&apos; desk
              </h2>
            </header>
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-[2rem] border border-[#dde1e8] bg-white p-6 shadow-[0_14px_36px_-24px_rgba(17,40,75,0.35)] sm:p-8">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="grid size-16 shrink-0 place-items-center rounded-2xl bg-brand font-display text-xl font-bold text-accent"
                    >
                      {f.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-brand">
                        {f.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-[#606a7b]">{f.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 border-t border-[#e5e8ee] pt-6 text-[15px] leading-7 text-[#47505e]">
                    {f.bio.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection id="about-testimonials" />
    </main>
  );
}

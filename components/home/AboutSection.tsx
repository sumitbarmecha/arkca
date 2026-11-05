import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { ValueCard } from "@/components/about/ValueCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aboutMission, aboutStory, aboutValues, founders } from "@/lib/about";
import { consultationHref } from "@/lib/navigation";

/** Home teaser. The full story, vision and founders live on /about-arkca/. */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-[#e5e8ee] bg-white py-16 md:py-24"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16 xl:gap-24">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,184,75,0.25)]" />
              About ARKCA
            </p>
            <h2
              id="about-title"
              className="font-display mt-5 text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.75rem]"
            >
              Compliance should drive growth, not just satisfy the law
            </h2>
            <p className="mt-5 text-base leading-7 text-[#2c323d]">{aboutStory.lead}</p>
            <p className="mt-4 text-[15px] leading-7 text-[#555d6c]">{aboutStory.paragraphs[0]}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {founders.map((f) => (
                <li
                  key={f.name}
                  className="flex items-center gap-3 rounded-2xl border border-[#e5e8ee] bg-canvas p-3 pr-4"
                >
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-accent"
                  >
                    {f.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-brand">{f.name}</span>
                    <span className="block text-xs leading-5 text-[#606a7b]">{f.role}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about-arkca/"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold !text-white no-underline shadow-[0_10px_24px_-12px_rgba(17,40,75,0.6)] transition-colors hover:bg-brand-deep"
              >
                Read our story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={consultationHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#c8ced8] bg-white px-6 text-sm font-semibold !text-brand no-underline transition-colors hover:bg-[#f4f6f9]"
              >
                Book a consultation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutValues.map((v) => (
                <ValueCard key={v.title} {...v} />
              ))}

              <article className="relative overflow-hidden rounded-[1.5rem] bg-brand p-6 text-white sm:col-span-2 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-accent/20 blur-2xl"
                />
                <span className="relative grid size-11 place-items-center rounded-xl bg-accent text-brand">
                  <Target className="size-5" aria-hidden />
                </span>
                <h3 className="font-display relative mt-5 text-xl font-bold tracking-[-0.01em]">
                  {aboutMission.title}
                </h3>
                <p className="relative mt-2 max-w-xl text-[15px] leading-7 text-white/75">
                  {aboutMission.text}
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

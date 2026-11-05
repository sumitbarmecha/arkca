import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { MenuIcon, descFor, slugOf } from "@/components/layout/menuMeta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/blog";
import {
  eprStreamsWithTasks,
  eprTaskNames,
  getHub,
  hubGroups,
  hubLinkCount,
  type Hub,
} from "@/lib/hubs";
import { consultationHref } from "@/lib/navigation";

export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,184,75,0.25)]" />
      {children}
    </p>
  );
}

export const sectionHeading =
  "font-display mt-5 text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.5rem]";

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[#606a7b]">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((t, i) => (
          <li key={t.label} className="flex items-center gap-1.5">
            {i > 0 ? <ChevronRight className="size-3.5" aria-hidden /> : null}
            {t.href ? (
              <Link href={t.href} className="no-underline hover:text-brand">
                {t.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-brand">
                {t.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function HubPage({ hub }: { hub: Hub }) {
  const groups = hubGroups(hub);
  const total = hubLinkCount(hub);
  const preview = groups.flatMap((g) => g.links).slice(0, 5);
  const posts = hub.insightCategory
    ? blogPosts.filter((p) => p.category === hub.insightCategory)
    : [];
  const sibling = hub.seeAlso ? getHub(hub.seeAlso) : undefined;
  const isEpr = hub.slug === "epr";

  return (
    <main id="content" className="bg-canvas">
      {/* Hero */}
      <section aria-labelledby="hub-title" className="py-12 md:py-20">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/service/" },
              { label: hub.name },
            ]}
          />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>{hub.name}</Eyebrow>
              <h1
                id="hub-title"
                className="font-display mt-5 text-balance text-[2.3rem] font-bold leading-[1.05] tracking-[-0.035em] text-brand sm:text-5xl lg:text-[3.25rem]"
              >
                {hub.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#2c323d] md:text-lg md:leading-8">
                {hub.lead}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Who this is for">
                {hub.audience.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[13px] font-medium text-brand"
                  >
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={consultationHref}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold !text-white no-underline shadow-[0_10px_24px_-12px_rgba(17,40,75,0.6)] transition-colors hover:bg-brand-deep"
                >
                  Book a consultation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#c8ced8] bg-white px-7 text-[15px] font-semibold !text-brand no-underline transition-colors hover:bg-[#f4f6f9]"
                >
                  Browse {total} services
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
                  What we cover
                </p>
                <p className="font-display relative mt-2 text-5xl font-bold tracking-[-0.04em]">
                  {total}
                  <span className="ml-2 text-lg font-semibold tracking-normal text-white/60">
                    services
                  </span>
                </p>
                <ul className="relative mt-6 divide-y divide-white/10 border-y border-white/10">
                  {preview.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group flex items-center gap-3 py-3 text-[15px] font-medium !text-white no-underline"
                      >
                        <span className="grid size-8 place-items-center rounded-lg bg-white/10 text-accent">
                          <MenuIcon href={l.href} className="size-4" />
                        </span>
                        <span className="flex-1">{l.label}</span>
                        <ArrowRight className="size-4 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
                {total > preview.length ? (
                  <p className="relative mt-4 text-sm text-white/60">
                    and {total - preview.length} more below
                  </p>
                ) : null}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section
        id="services"
        aria-labelledby="hub-services-title"
        className="border-t border-[#e5e8ee] bg-white py-16 md:py-24"
      >
        <Container>
          <Reveal>
            <header className="max-w-2xl">
              <Eyebrow>Our services</Eyebrow>
              <h2 id="hub-services-title" className={sectionHeading}>
                Choose what you need
              </h2>
            </header>
          </Reveal>

          <div className="mt-10 divide-y divide-[#e5e8ee] border-t border-[#e5e8ee] md:mt-12">
            {groups.map((g) => (
              <Reveal
                key={g.title}
                className="grid gap-5 py-8 first:pt-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10 lg:py-10"
              >
                <div>
                  <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-brand lg:sticky lg:top-28">
                    {g.title}
                    <span className="mt-1 block text-sm font-medium tracking-normal text-[#606a7b]">
                      {g.links.length} {g.links.length === 1 ? "service" : "services"}
                    </span>
                  </h3>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {g.links.map((l) => {
                    const slug = slugOf(l.href);
                    const desc = descFor(l.href, l.hint);
                    const hasTasks = isEpr && eprStreamsWithTasks.has(slug);
                    return (
                      <li key={l.href}>
                        <article className="group relative flex h-full flex-col rounded-[1.5rem] border border-[#dde1e8] bg-canvas p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white hover:shadow-[0_22px_44px_-26px_rgba(17,40,75,0.45)] sm:p-6">
                          <div className="flex items-start justify-between gap-3">
                            <span className="grid size-11 place-items-center rounded-xl bg-white text-brand shadow-[0_6px_14px_-8px_rgba(17,40,75,0.35)] transition-colors group-hover:bg-brand group-hover:text-accent">
                              <MenuIcon href={l.href} className="size-5" />
                            </span>
                            <ArrowUpRight
                              className="size-5 text-[#8a93a3] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                              aria-hidden
                            />
                          </div>
                          <h4 className="font-display mt-5 text-lg font-bold tracking-[-0.01em] text-brand">
                            <Link
                              href={l.href}
                              className="no-underline after:absolute after:inset-0 after:rounded-[1.5rem] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand"
                            >
                              {l.label}
                            </Link>
                          </h4>
                          {desc ? (
                            <p className="mt-1.5 text-sm leading-6 text-[#555d6c]">{desc}</p>
                          ) : null}
                          {hasTasks ? (
                            <p className="mt-4 border-t border-[#dde1e8] pt-3 text-xs leading-5 text-[#606a7b]">
                              {eprTaskNames.join(" · ")}
                            </p>
                          ) : null}
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* Not sure */}
          <Reveal className="mt-14">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-night px-6 py-8 text-white sm:px-10 sm:py-10 md:flex md:items-center md:justify-between md:gap-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 -top-10 size-48 rounded-full bg-accent/15 blur-3xl"
              />
              <div className="relative max-w-xl">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">
                  {hub.notSure.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-white/70">{hub.notSure.text}</p>
              </div>
              <Link
                href={consultationHref}
                className="group relative mt-6 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold !text-brand no-underline transition-colors hover:bg-accent-soft md:mt-0"
              >
                Book a consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Steps */}
      <section aria-labelledby="hub-steps-title" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <header className="max-w-2xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 id="hub-steps-title" className={sectionHeading}>
                One team from first call to final filing
              </h2>
            </header>
          </Reveal>
          <ol
            className={
              "mt-10 grid gap-4 md:mt-12 " +
              (hub.steps.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4")
            }
          >
            {hub.steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.04} className="h-full">
                  <div className="flex h-full flex-col rounded-[1.5rem] border border-[#dde1e8] bg-white p-6 shadow-[0_14px_36px_-26px_rgba(17,40,75,0.35)]">
                    <span className="font-display grid size-10 place-items-center rounded-xl bg-brand text-sm font-bold text-accent">
                      {i + 1}
                    </span>
                    <h3 className="font-display mt-5 text-lg font-bold tracking-[-0.01em] text-brand">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#555d6c]">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="hub-faq-title"
        className="border-t border-[#d5dcea] bg-[#e8eef7] py-16 md:py-24"
      >
        <Container>
          <Reveal>
            <header className="mx-auto max-w-2xl text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 id="hub-faq-title" className={sectionHeading}>
                Common questions
              </h2>
            </header>
          </Reveal>
          <Reveal delay={0.05} className="mx-auto mt-10 max-w-3xl md:mt-12">
            <FaqAccordion items={hub.faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Related insights */}
      {posts.length > 0 ? (
        <section
          aria-labelledby="hub-insights-title"
          className="border-t border-[#e5e8ee] bg-white py-16 md:py-24"
        >
          <Container>
            <Reveal>
              <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <Eyebrow>Insights</Eyebrow>
                  <h2 id="hub-insights-title" className={sectionHeading}>
                    Related reading
                  </h2>
                </div>
                <Link
                  href="/blogs/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand no-underline hover:underline"
                >
                  See all insights
                  <ArrowRight className="size-4" />
                </Link>
              </header>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
              {posts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Sibling hub */}
      {sibling ? (
        <section className="border-t border-[#e5e8ee] py-10">
          <Container>
            <Link
              href={sibling.path}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#dde1e8] bg-white p-5 no-underline transition-shadow hover:shadow-[0_18px_36px_-24px_rgba(17,40,75,0.4)] sm:p-6"
            >
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#606a7b]">
                  Also see
                </span>
                <span className="font-display mt-1 block text-lg font-bold text-brand">
                  {sibling.h1}
                </span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
            </Link>
          </Container>
        </section>
      ) : null}
    </main>
  );
}

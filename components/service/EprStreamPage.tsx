import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowRight,
  Check,
  ClipboardCheck,
  FileCheck2,
  LogOut,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { MenuIcon } from "@/components/layout/menuMeta";
import { Breadcrumb, Eyebrow, sectionHeading } from "@/components/service/HubPage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/blog";
import { eprStreams, taskHref, taskMeta, type EprStream, type TaskKey } from "@/lib/epr";
import { getHub } from "@/lib/hubs";
import { consultationHref } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const taskIcons: Record<TaskKey, LucideIcon> = {
  registration: FileCheck2,
  compliance: ClipboardCheck,
  "credit-transfer": ArrowLeftRight,
  "legal-issues": Scale,
  surrender: LogOut,
};

const typeTones = ["bg-[#e5ecf7]", "bg-[#e9f2f6]", "bg-[#efedf7]", "bg-[#fbf1dc]", "bg-[#faefe8]"];

export function EprStreamPage({ stream }: { stream: EprStream }) {
  const hub = getHub("epr");
  const posts = blogPosts.filter((p) => stream.posts?.includes(p.slug));
  const others = eprStreams.filter((s) => s.slug !== stream.slug);
  const streamHref = `/service/epr/${stream.slug}/`;

  return (
    <main id="content" className="bg-canvas">
      {/* Hero */}
      <section aria-labelledby="stream-title" className="py-12 md:py-20">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/service/" },
              { label: "EPR", href: "/service/epr/" },
              { label: stream.name },
            ]}
          />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>{`EPR · ${stream.name}`}</Eyebrow>
              <h1
                id="stream-title"
                className="font-display mt-5 text-balance text-[2.3rem] font-bold leading-[1.05] tracking-[-0.035em] text-brand sm:text-5xl lg:text-[3.25rem]"
              >
                {stream.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#2c323d] md:text-lg md:leading-8">
                {stream.lead}
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
                  href="#overview"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#c8ced8] bg-white px-7 text-[15px] font-semibold !text-brand no-underline transition-colors hover:bg-[#f4f6f9]"
                >
                  What it involves
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-[2rem] bg-brand p-6 text-white shadow-[0_40px_80px_-40px_rgba(17,40,75,0.6)] sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-accent/25 blur-2xl"
                />
                <div className="relative flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-brand">
                    <MenuIcon href={streamHref} className="size-5" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    At a glance
                  </p>
                </div>
                <dl className="relative mt-6 divide-y divide-white/10 border-y border-white/10">
                  {[
                    ["Who it applies to", stream.appliesTo],
                    ["Governed by", stream.rules],
                    ["Regulator", stream.authority],
                  ].map(([k, v]) => (
                    <div key={k} className="py-4">
                      <dt className="text-xs font-medium uppercase tracking-[0.1em] text-white/50">
                        {k}
                      </dt>
                      <dd className="mt-1 text-[15px] font-medium leading-6">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section
        id="overview"
        aria-labelledby="overview-title"
        className="border-t border-[#e5e8ee] bg-white py-16 md:py-24"
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>What it is</Eyebrow>
              <h2 id="overview-title" className={sectionHeading}>
                {stream.whatIs.heading}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-[#47505e]">
                {stream.whatIs.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[2rem] bg-canvas p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-brand">
                  {stream.whatIs.obligationsTitle}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {stream.whatIs.obligations.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-[15px] leading-6 text-[#2c323d]">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-accent">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Types */}
      {stream.types ? (
        <section aria-labelledby="types-title" className="py-16 md:py-24">
          <Container>
            <Reveal>
              <header className="max-w-2xl">
                <Eyebrow>Categories</Eyebrow>
                <h2 id="types-title" className={sectionHeading}>
                  {stream.typesTitle}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#555d6c] md:text-base">
                  Which category applies to you decides your registration and your targets.
                </p>
              </header>
            </Reveal>
            <ul
              className={cn(
                "mt-10 grid gap-4 sm:grid-cols-2 md:mt-12",
                stream.types.length >= 4 ? "xl:grid-cols-4" : stream.types.length === 3 ? "lg:grid-cols-3" : "",
              )}
            >
              {stream.types.map((t, i) => (
                <li key={t.name}>
                  <Reveal delay={i * 0.03} className="h-full">
                    <article
                      className={cn("flex h-full flex-col rounded-[1.5rem] p-6", typeTones[i % typeTones.length])}
                    >
                      <span className="font-display grid size-9 place-items-center rounded-lg bg-white text-sm font-bold text-brand shadow-[0_6px_14px_-8px_rgba(17,40,75,0.35)]">
                        {i + 1}
                      </span>
                      <h3 className="font-display mt-4 text-lg font-bold leading-snug tracking-[-0.01em] text-brand">
                        {t.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#47505e]">{t.text}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Task pages */}
      {stream.tasks ? (
        <section
          id="services"
          aria-labelledby="tasks-title"
          className="border-t border-[#e5e8ee] bg-white py-16 md:py-24"
        >
          <Container>
            <Reveal>
              <header className="max-w-2xl">
                <Eyebrow>How we help</Eyebrow>
                <h2 id="tasks-title" className={sectionHeading}>
                  {`Every step of ${stream.name.toLowerCase()} EPR, covered`}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#555d6c] md:text-base">
                  From the first registration to a clean exit, each stage has its own page.
                </p>
              </header>
            </Reveal>
            <ol className="mt-10 divide-y divide-[#e5e8ee] border-y border-[#e5e8ee] md:mt-12">
              {taskMeta.map((t, i) => {
                const Icon = taskIcons[t.key];
                return (
                  <li key={t.key}>
                    <Reveal delay={i * 0.03}>
                      <div className="group relative grid items-center gap-3 py-6 transition-colors hover:bg-canvas md:grid-cols-[3rem_14rem_minmax(0,1fr)_2rem] md:gap-8 md:px-4 md:py-7">
                        <span className="grid size-11 place-items-center rounded-xl bg-canvas text-brand transition-colors group-hover:bg-brand group-hover:text-accent md:bg-white md:group-hover:bg-brand">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-brand">
                          <Link
                            href={taskHref(stream, t.key)}
                            className="no-underline after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand"
                          >
                            {t.label}
                          </Link>
                        </h3>
                        <p className="text-[15px] leading-7 text-[#555d6c]">{stream.tasks![t.key]}</p>
                        <ArrowRight
                          className="hidden size-5 text-[#8a93a3] transition-all group-hover:translate-x-1 group-hover:text-brand md:block"
                          aria-hidden
                        />
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>
      ) : null}

      {/* Documents */}
      {stream.documents ? (
        <section aria-labelledby="docs-title" className="py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
              <Reveal>
                <Eyebrow>Documents</Eyebrow>
                <h2 id="docs-title" className={sectionHeading}>
                  What you may need to prepare
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#555d6c] md:text-base">
                  These are generally required. You get a checklist for your own case before anything
                  is filed.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {stream.documents.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 rounded-2xl border border-[#dde1e8] bg-white p-4 text-sm leading-6 text-[#2c323d]"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#e5ecf7] text-brand">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      {/* How ARKCA helps */}
      {hub ? (
        <section
          aria-labelledby="process-title"
          className="relative overflow-hidden bg-brand-night py-16 text-white md:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-accent/15 blur-3xl"
          />
          <Container className="relative">
            <Reveal>
              <header className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                  <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,184,75,0.2)]" />
                  The ARKCA way
                </p>
                <h2
                  id="process-title"
                  className="font-display mt-5 text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.5rem]"
                >
                  One team from first call to final filing
                </h2>
              </header>
            </Reveal>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
              {hub.steps.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={i * 0.04} className="h-full">
                    <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
                      <span className="font-display grid size-10 place-items-center rounded-xl bg-accent text-sm font-bold text-brand">
                        {i + 1}
                      </span>
                      <h3 className="font-display mt-5 text-lg font-bold tracking-[-0.01em]">{s.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">{s.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {/* FAQ */}
      <section
        aria-labelledby="stream-faq-title"
        className="border-b border-[#d5dcea] bg-[#e8eef7] py-16 md:py-24"
      >
        <Container>
          <Reveal>
            <header className="mx-auto max-w-2xl text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 id="stream-faq-title" className={sectionHeading}>
                {`${stream.name} EPR: common questions`}
              </h2>
            </header>
          </Reveal>
          <Reveal delay={0.05} className="mx-auto mt-10 max-w-3xl md:mt-12">
            <FaqAccordion items={stream.faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Related reading */}
      {posts.length > 0 ? (
        <section aria-labelledby="stream-posts-title" className="bg-white py-16 md:py-24">
          <Container>
            <Reveal>
              <header className="max-w-2xl">
                <Eyebrow>Insights</Eyebrow>
                <h2 id="stream-posts-title" className={sectionHeading}>
                  Related reading
                </h2>
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

      {/* Other streams */}
      <section aria-labelledby="other-streams-title" className="py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="other-streams-title"
                className="font-display text-2xl font-bold tracking-[-0.02em] text-brand"
              >
                Other EPR streams
              </h2>
              <Link
                href="/service/epr/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand no-underline hover:underline"
              >
                All EPR services
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/service/epr/${s.slug}/`}
                    className="group flex items-center gap-3 rounded-2xl border border-[#dde1e8] bg-white p-4 no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-24px_rgba(17,40,75,0.4)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-canvas text-brand transition-colors group-hover:bg-brand group-hover:text-accent">
                      <MenuIcon href={`/service/epr/${s.slug}/`} className="size-5" />
                    </span>
                    <span className="flex-1 text-[15px] font-semibold text-brand">{s.name}</span>
                    <ArrowRight className="size-4 text-[#8a93a3] transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

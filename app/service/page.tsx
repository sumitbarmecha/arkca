import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/service/HubPage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { hubGroups, hubLinkCount, hubs } from "@/lib/hubs";
import { consultationHref } from "@/lib/navigation";
import { MenuIcon } from "@/components/layout/menuMeta";

export const metadata: Metadata = {
  title: "Our Services | ARKCA Corporate Solutions",
  description:
    "EPR, licences and certifications, business setup, and import and customs services from ARKCA Corporate Solutions.",
  alternates: { canonical: "/service/" },
};

const tones = ["bg-[#e5ecf7]", "bg-[#efedf7]", "bg-[#e9f2f6]", "bg-[#faefe8]", "bg-[#fbf1dc]"];

export default function ServicesPage() {
  return (
    <main id="content" className="bg-canvas">
      <section aria-labelledby="services-title" className="py-12 md:py-20">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Services" }]} />

          <Reveal className="mt-8 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,184,75,0.25)]" />
              Our services
            </p>
            <h1
              id="services-title"
              className="font-display mt-5 text-balance text-[2.3rem] font-bold leading-[1.05] tracking-[-0.035em] text-brand sm:text-5xl lg:text-[3.25rem]"
            >
              Regulatory services for every compliance path
            </h1>
            <p className="mt-6 text-base leading-7 text-[#2c323d] md:text-lg md:leading-8">
              From EPR registration to company setup and import filings, ARKCA handles the
              regulatory work end to end, so you can focus on running your business.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-5 md:grid-cols-2 md:mt-14">
            {hubs.map((hub, i) => {
              const links = hubGroups(hub).flatMap((g) => g.links);
              return (
                <li key={hub.slug} className={hubs.length % 2 === 1 ? "md:last:col-span-2" : undefined}>
                  <Reveal delay={i * 0.04} className="h-full">
                    <article
                      className={`group relative flex h-full flex-col rounded-[2rem] p-6 transition-shadow duration-300 hover:shadow-[0_26px_50px_-28px_rgba(17,40,75,0.5)] sm:p-8 ${tones[i % tones.length]}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
                          {hubLinkCount(hub)} services
                        </p>
                        <ArrowUpRight
                          className="size-6 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </div>
                      <h2 className="font-display mt-4 text-2xl font-bold tracking-[-0.02em] text-brand">
                        <Link
                          href={hub.path}
                          className="no-underline after:absolute after:inset-0 after:rounded-[2rem] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand"
                        >
                          {hub.h1}
                        </Link>
                      </h2>
                      <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-[#3a404a]">
                        {hub.lead}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {links.slice(0, 5).map((l) => (
                          <li
                            key={l.href}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[13px] font-medium text-brand"
                          >
                            <MenuIcon href={l.href} className="size-3.5" />
                            {l.label}
                          </li>
                        ))}
                        {links.length > 5 ? (
                          <li className="inline-flex items-center rounded-lg px-2 py-2 text-[13px] font-medium text-[#47505e]">
                            +{links.length - 5} more
                          </li>
                        ) : null}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal className="mt-12">
            <div className="flex flex-col gap-5 rounded-[2rem] bg-brand p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">
                  Not sure where to start?
                </h2>
                <p className="mt-2 max-w-xl text-[15px] leading-7 text-white/70">
                  Tell us what your business makes, imports or sells. We will map the registrations
                  and filings that apply.
                </p>
              </div>
              <Link
                href={consultationHref}
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold !text-brand no-underline transition-colors hover:bg-accent-soft"
              >
                Book a consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

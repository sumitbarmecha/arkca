import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, BadgeCheck, Briefcase, Globe2, MapPin, Recycle } from "lucide-react";
import { HeroVisual } from "@/components/home/HeroVisual";
import { Container } from "@/components/ui/Container";
import { consultationHref } from "@/lib/navigation";
import { trustBrands } from "@/lib/trust";

const quickLinks = [
  { label: "EPR", href: "/service/epr/", icon: Recycle },
  { label: "Licences", href: "/service/certification-and-compliances/", icon: BadgeCheck },
  { label: "Business setup", href: "/service/business-setup-certifications/", icon: Briefcase },
  { label: "Import & customs", href: "/service/other-certification-services/", icon: Globe2 },
];

const brandNames = trustBrands.map((b) => b.name);
const rowA = brandNames.filter((_, i) => i % 2 === 0);
const rowB = brandNames.filter((_, i) => i % 2 === 1);

/** Staggered entrance. Pure CSS (see .hero-rise in globals.css) so the copy is in the first paint. */
function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

export function HomeHero() {
  return (
    <section className="relative overflow-x-clip bg-canvas" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-center gap-12 pb-14 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-14 lg:pb-20 lg:pt-16 xl:gap-20">
          {/* Copy */}
          <div>
            <div className="hero-rise" style={delay(0.02)}>
              <Link
                href="/service/epr/"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#dbdee3] bg-white py-1.5 pl-2.5 pr-3 text-[13px] font-medium text-brand no-underline shadow-[0_1px_2px_rgba(17,40,75,0.04)] transition-colors hover:border-brand/40"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#4f72af] opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#2f9a5f]" />
                </span>
                10 EPR streams covered
                <ArrowRight className="size-3.5 text-[#555d6c] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <h1
              id="hero-title"
              className="hero-rise font-display mt-5 text-[2.35rem] font-bold leading-[1.06] tracking-[-0.035em] text-brand sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem]"
              style={delay(0.1)}
            >
              Compliance clarity for{" "}
              <span className="-mx-1 box-decoration-clone bg-[linear-gradient(transparent_64%,var(--brand-accent-soft)_64%)] px-1">
                better decisions.
              </span>
            </h1>

            <p
              className="hero-rise mt-5 max-w-xl text-base leading-7 text-[#4c5461] sm:text-lg sm:leading-8"
              style={delay(0.18)}
            >
              EPR registration, licences, company setup and import filings, handled end to end in
              one clear path from consultation to completion.
            </p>

            <div
              className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={delay(0.26)}
            >
              <a
                href={consultationHref}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold !text-white no-underline shadow-[0_10px_24px_-12px_rgba(17,40,75,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-[0_16px_30px_-12px_rgba(17,40,75,0.7)]"
              >
                Book a consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/service/epr/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand/20 bg-white px-7 text-[15px] font-semibold !text-brand no-underline transition-colors hover:border-brand/60"
              >
                Explore EPR services
              </Link>
            </div>

            <p
              className="hero-rise mt-4 flex items-start gap-2 text-[13px] leading-5 text-[#606a7b]"
              style={delay(0.3)}
            >
              <MapPin className="mt-0.5 size-3.5 shrink-0" />
              <span>30-minute consultation call · Delhi · Mumbai · Kolkata · Guwahati</span>
            </p>

            <div className="hero-rise mt-8 border-t border-[#e0e2e6] pt-6" style={delay(0.36)}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f899a]">
                Jump to
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {quickLinks.map(({ label, href, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 rounded-full border border-[#dbdfe6] bg-white px-3.5 py-2 text-[13px] font-medium text-brand no-underline transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_18px_-12px_rgba(17,40,75,0.4)]"
                    >
                      <Icon className="size-4 text-[#435b85]" strokeWidth={1.8} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual */}
          <HeroVisual />
        </div>
      </Container>

      {/* Client marquee */}
      <div className="border-t border-[#e0e2e6] bg-white py-8 sm:py-10">
        <p className="px-5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f899a]">
          Trusted by manufacturers, importers and brand owners
        </p>
        <div className="mt-6 space-y-4">
          <Marquee names={rowA} duration={70} />
          <Marquee names={rowB} duration={80} reverse />
        </div>
      </div>
    </section>
  );
}

function Marquee({
  names,
  duration,
  reverse,
}: {
  names: string[];
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className={`ark-marquee${reverse ? " ark-marquee--reverse" : ""}`}>
      <ul className="ark-marquee__track" style={{ animationDuration: `${duration}s` }}>
        {[...names, ...names].map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= names.length ? true : undefined}
            className="font-display flex items-center whitespace-nowrap px-6 text-[15px] font-bold tracking-[-0.01em] text-[#919aa9] transition-colors hover:text-brand sm:px-8 sm:text-base"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

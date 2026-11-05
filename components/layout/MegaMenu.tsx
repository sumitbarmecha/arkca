"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Award,
  ChevronRight,
  Recycle,
  Ship,
} from "lucide-react";
import { consultationHref, type MenuGroup, type MenuLink, type NavItem } from "@/lib/navigation";
import { MenuIcon, descFor, groupBlurbs } from "@/components/layout/menuMeta";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/* Each menu borrows the colour of its card in the home Services section. */
const tones = {
  mint: { soft: "bg-[#e5ecf7]", tile: "bg-[#c4d5f3]", icon: "text-[#2f7a45]", dot: "bg-[#2f7a45]" },
  lavender: { soft: "bg-[#efedf7]", tile: "bg-[#dcd3f4]", icon: "text-[#5b44b5]", dot: "bg-[#5b44b5]" },
  sky: { soft: "bg-[#e9f2f6]", tile: "bg-[#c4e1ec]", icon: "text-[#25728a]", dot: "bg-[#25728a]" },
  peach: { soft: "bg-[#faefe8]", tile: "bg-[#f7d9c4]", icon: "text-[#c25a2a]", dot: "bg-[#c25a2a]" },
} as const;

type Tone = (typeof tones)[keyof typeof tones];

type MegaMenuProps = {
  item: NavItem;
  onNavigate: () => void;
  variant?: "desktop" | "mobile";
};

type LayoutProps = { item: NavItem; onNavigate: () => void; reduce: boolean };

const widths: Record<string, string> = {
  epr: "w-[min(1120px,calc(100vw-7.5rem))]",
  licences: "w-[min(980px,calc(100vw-7.5rem))]",
  business: "w-[min(820px,calc(100vw-7.5rem))]",
  import: "w-[min(900px,calc(100vw-7.5rem))]",
};

export function MegaMenu({ item, onNavigate, variant = "desktop" }: MegaMenuProps) {
  const reduce = !!useReducedMotion();
  if (!item.groups?.length) return null;

  if (variant === "mobile") return <MobileMenu item={item} onNavigate={onNavigate} />;

  const showGuidanceInFooter = item.id !== "epr";

  return (
    <motion.div
      className="overflow-hidden rounded-[1.25rem] border border-[#dde0e4] bg-white shadow-[0_28px_70px_-20px_rgba(7,13,23,0.28),0_8px_20px_-8px_rgba(7,13,23,0.08)]"
      initial={reduce ? false : { opacity: 0, y: 10, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduce ? 0 : 0.22, ease }}
    >
      <div className={widths[item.id] ?? "w-[min(760px,calc(100vw-7.5rem))]"}>
        {item.id === "epr" ? <EprLayout item={item} onNavigate={onNavigate} reduce={reduce} /> : null}
        {item.id === "licences" ? (
          <LicencesLayout item={item} onNavigate={onNavigate} reduce={reduce} />
        ) : null}
        {item.id === "business" ? (
          <BusinessLayout item={item} onNavigate={onNavigate} reduce={reduce} />
        ) : null}
        {item.id === "import" ? (
          <ImportLayout item={item} onNavigate={onNavigate} reduce={reduce} />
        ) : null}
      </div>

      {/* Footer bar */}
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[#e2e4e9] bg-[#f3f5f8] px-7 py-3.5">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {item.explore?.map((link) => (
            <FooterLink key={link.href} href={link.href} onNavigate={onNavigate}>
              {link.label}
            </FooterLink>
          ))}
        </div>
        {showGuidanceInFooter ? (
          <FooterLink href={item.guidance?.href ?? consultationHref} onNavigate={onNavigate} muted>
            {item.guidance?.linkLabel ?? "Not sure where to start? Book a consultation"}
          </FooterLink>
        ) : null}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function FooterLink({
  href,
  onNavigate,
  children,
  muted,
}: {
  href: string;
  onNavigate: () => void;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-colors hover:text-brand-deep",
        muted ? "text-[#4a515e]" : "text-brand",
      )}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

function Column({
  children,
  index,
  reduce,
  className,
}: {
  children: ReactNode;
  index: number;
  reduce: boolean;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: reduce ? 0 : 0.05 + index * 0.05, ease }}
    >
      {children}
    </motion.section>
  );
}

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6f7a8e]",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** One link: icon tile, label, one-line description, arrow that slides in on hover. */
function MenuRow({
  link,
  tone,
  onNavigate,
  hover = "hover:bg-white",
  className,
}: {
  link: MenuLink;
  tone: Tone;
  onNavigate: () => void;
  hover?: string;
  className?: string;
}) {
  const text = descFor(link.href, link.hint);
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={cn(
        "group flex items-start gap-3 rounded-xl p-2.5 no-underline transition-colors duration-200",
        hover,
        className,
      )}
    >
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-[0.65rem] transition-transform duration-200 group-hover:scale-105",
          tone.tile,
          tone.icon,
        )}
      >
        <MenuIcon href={link.href} className="size-[18px]" strokeWidth={1.8} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-sm font-semibold leading-5 text-brand">
          {link.label}
          <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
        </span>
        {text ? (
          <span className="mt-0.5 block text-[13px] leading-[1.15rem] text-[#555d6c]">{text}</span>
        ) : null}
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* 1 · EPR: brand rail + one card per waste family                      */
/* ------------------------------------------------------------------ */

const eprTones: Tone[] = [tones.mint, tones.sky, tones.peach, tones.lavender];

function EprLayout({ item, onNavigate, reduce }: LayoutProps) {
  const groups = item.groups ?? [];
  const streams = groups
    .flatMap((g) => g.links)
    .filter((l) => l.href.startsWith("/service/epr/")).length;

  return (
    <div className="grid grid-cols-[16.5rem_minmax(0,1fr)]">
      <aside className="flex flex-col justify-between gap-8 bg-brand p-7 text-white">
        <div>
          <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-accent">
            <Recycle className="size-6" strokeWidth={1.7} />
          </span>
          <h2 className="font-display mt-5 text-[1.45rem] font-bold leading-tight tracking-[-0.02em]">
            A registration for every waste stream
          </h2>
          <p className="mt-3 text-[13px] leading-5 text-white/65">{item.summary}</p>
        </div>

        <div>
          <p className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-bold tracking-[-0.04em] text-accent">
              {streams}
            </span>
            <span className="text-[13px] font-medium text-white/70">EPR streams covered</span>
          </p>

          {item.guidance ? (
            <div className="mt-5 rounded-xl border border-white/12 bg-white/[0.06] p-4">
              <p className="text-sm font-semibold">{item.guidance.title}</p>
              <p className="mt-1 text-[12.5px] leading-5 text-white/60">{item.guidance.text}</p>
              <Link
                href={item.guidance.href}
                onClick={onNavigate}
                className="group mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent no-underline"
              >
                {item.guidance.linkLabel}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ) : null}
        </div>
      </aside>

      <div className="grid grid-cols-2 content-start gap-3 p-5">
        {groups.map((group, index) => {
          const tone = eprTones[index % eprTones.length];
          return (
            <Column
              key={group.title}
              index={index}
              reduce={reduce}
              className={cn("min-w-0 rounded-2xl p-2.5", tone.soft)}
            >
              <div className="flex items-center justify-between gap-2 px-2.5 pb-1.5 pt-1.5">
                <h2 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3a404a]">
                  <span className={cn("size-1.5 rounded-full", tone.dot)} />
                  {group.title}
                </h2>
                <span className="rounded-full bg-white/70 px-2 py-0.5 text-[11px] font-semibold text-[#3a404a]">
                  {group.links.length}
                </span>
              </div>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <MenuRow link={link} tone={tone} onNavigate={onNavigate} />
                  </li>
                ))}
              </ul>
            </Column>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · Licences: tabbed directory (18 services, three families)         */
/* ------------------------------------------------------------------ */

const licenceGroupIcons = [BadgeCheck, Ship, Award];

function LicencesLayout({ item, onNavigate, reduce }: LayoutProps) {
  const groups = item.groups ?? [];
  const [active, setActive] = useState(0);
  const tone = tones.lavender;
  const current: MenuGroup = groups[active] ?? groups[0];

  return (
    <div className="grid grid-cols-[17rem_minmax(0,1fr)]">
      <div
        role="tablist"
        aria-label="Licence families"
        aria-orientation="vertical"
        className="flex flex-col gap-1.5 border-r border-[#e2e4e9] bg-[#f3f5f8] p-3.5"
      >
        <Eyebrow className="px-2.5 pb-1.5 pt-2">Browse by type</Eyebrow>
        {groups.map((group, i) => {
          const Icon = licenceGroupIcons[i % licenceGroupIcons.length];
          const selected = i === active;
          return (
            <button
              key={group.title}
              id={`licence-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="licence-panel"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                "group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200",
                selected
                  ? "border-[#e1d9f5] bg-white shadow-[0_10px_24px_-14px_rgba(60,40,140,0.35)]"
                  : "border-transparent hover:bg-white/70",
              )}
            >
              <span
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-xl transition-colors",
                  selected ? "bg-brand text-white" : cn(tone.tile, tone.icon),
                )}
              >
                <Icon className="size-5" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-5 text-brand">
                  {group.title}
                </span>
                <span className="block text-xs text-[#606a7b]">{group.links.length} services</span>
              </span>
              <ChevronRight
                className={cn(
                  "size-4 shrink-0 text-brand transition-all duration-200",
                  selected ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
                )}
              />
            </button>
          );
        })}
      </div>

      <div
        id="licence-panel"
        role="tabpanel"
        aria-labelledby={`licence-tab-${active}`}
        className="p-5"
      >
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease }}
        >
          <div className="flex items-end justify-between gap-4 px-2.5 pb-3">
            <div>
              <h2 className="font-display text-lg font-bold tracking-[-0.01em] text-brand">
                {current.title}
              </h2>
              {groupBlurbs[current.title] ? (
                <p className="mt-0.5 text-[13px] text-[#606a7b]">{groupBlurbs[current.title]}</p>
              ) : null}
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
            {current.links.map((link) => (
              <li key={link.href}>
                <MenuRow link={link} tone={tone} onNavigate={onNavigate} hover="hover:bg-[#efedf7]" />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Business setup: a two-step journey                               */
/* ------------------------------------------------------------------ */

function BusinessLayout({ item, onNavigate, reduce }: LayoutProps) {
  const [setup, after] = item.groups ?? [];
  const tone = tones.sky;
  if (!setup || !after) return null;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch p-5">
      {/* Step 1 */}
      <Column index={0} reduce={reduce} className={cn("rounded-2xl p-3.5", tone.soft)}>
        <StepHeader step={1} title="Choose your structure" />
        <ul className="mt-2">
          {setup.links.map((link) => (
            <li key={link.href}>
              <MenuRow link={link} tone={tone} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </Column>

      <div className="flex items-center px-2" aria-hidden="true">
        <span className="grid size-9 place-items-center rounded-full border border-[#dde0e4] bg-white text-brand shadow-[0_8px_18px_-10px_rgba(7,13,23,0.4)]">
          <ChevronRight className="size-4" />
        </span>
      </div>

      {/* Step 2 */}
      <Column index={1} reduce={reduce} className="p-3.5">
        <StepHeader step={2} title={after.title} />
        <ol className="mt-3">
          {after.links.map((link, i) => {
            const text = descFor(link.href, link.hint);
            const last = i === after.links.length - 1;
            return (
              <li key={link.href} className="relative">
                {!last ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[1.35rem] top-10 h-[calc(100%-1.5rem)] w-px bg-[#c4e1ec]"
                  />
                ) : null}
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="group flex items-start gap-3 rounded-xl p-2.5 no-underline transition-colors duration-200 hover:bg-[#f3f7f9]"
                >
                  <span
                    className={cn(
                      "relative z-10 grid size-9 shrink-0 place-items-center rounded-full border-2 border-white transition-transform duration-200 group-hover:scale-105",
                      tone.tile,
                      tone.icon,
                    )}
                  >
                    <MenuIcon href={link.href} className="size-4" strokeWidth={1.9} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5 text-sm font-semibold leading-5 text-brand">
                      {link.label}
                      <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    {text ? (
                      <span className="mt-0.5 block text-[13px] leading-[1.15rem] text-[#555d6c]">
                        {text}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </Column>
    </div>
  );
}

function StepHeader({ step, title }: { step: number; title: string }) {
  return (
    <div className="flex items-center gap-3 px-1.5">
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">
        {step}
      </span>
      <div>
        <Eyebrow>{step === 1 ? "Set up" : "Then register"}</Eyebrow>
        <h2 className="font-display text-base font-bold leading-tight tracking-[-0.01em] text-brand">
          {title}
        </h2>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4 · Import and customs: featured NOC + filings panel                 */
/* ------------------------------------------------------------------ */

function ImportLayout({ item, onNavigate, reduce }: LayoutProps) {
  const [customs, filings] = item.groups ?? [];
  const tone = tones.peach;
  if (!customs || !filings) return null;

  const [featured, ...rest] = customs.links;
  const featuredText = descFor(featured.href, featured.hint);

  return (
    <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-4 p-5">
      <Column index={0} reduce={reduce} className="min-w-0">
        <Eyebrow className="px-1.5 pb-2">{customs.title}</Eyebrow>

        <Link
          href={featured.href}
          onClick={onNavigate}
          className="group flex items-start gap-4 rounded-2xl bg-brand p-5 text-white no-underline transition-shadow duration-200 hover:shadow-[0_18px_34px_-18px_rgba(17,40,75,0.7)]"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#f6cfb0] transition-transform duration-200 group-hover:scale-105">
            <MenuIcon href={featured.href} className="size-6" strokeWidth={1.7} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="font-display flex items-center justify-between gap-3 text-[1.0625rem] font-bold leading-snug tracking-[-0.01em]">
              {featured.label}
              <ArrowUpRight className="size-5 shrink-0 text-[#f6cfb0] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            {featuredText ? (
              <span className="mt-1 block text-[13px] leading-5 text-white/65">{featuredText}</span>
            ) : null}
          </span>
        </Link>

        <ul className="mt-2 grid grid-cols-2 gap-x-1">
          {rest.map((link) => (
            <li key={link.href}>
              <MenuRow link={link} tone={tone} onNavigate={onNavigate} hover="hover:bg-[#faefe8]" />
            </li>
          ))}
        </ul>
      </Column>

      <Column index={1} reduce={reduce} className={cn("min-w-0 rounded-2xl p-3.5", tone.soft)}>
        <Eyebrow className="px-1.5 pb-2 text-[#8a6a58]">{filings.title}</Eyebrow>
        <ul>
          {filings.links.map((link) => (
            <li key={link.href}>
              <MenuRow link={link} tone={tone} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </Column>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile accordion content                                            */
/* ------------------------------------------------------------------ */

const mobileTones: Record<string, Tone> = {
  epr: tones.mint,
  licences: tones.lavender,
  business: tones.sky,
  import: tones.peach,
};

function MobileMenu({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const tone = mobileTones[item.id] ?? tones.mint;
  return (
    <div className="space-y-5 pb-3 pl-1 pt-2">
      {item.groups?.map((group) => (
        <section key={group.title}>
          <Eyebrow>{group.title}</Eyebrow>
          <ul className="mt-1.5">
            {group.links.map((link) => {
              const text = descFor(link.href, link.hint);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="flex items-center gap-3 rounded-lg py-2 no-underline"
                  >
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-lg",
                        tone.tile,
                        tone.icon,
                      )}
                    >
                      <MenuIcon href={link.href} className="size-4" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-5 text-brand">
                        {link.label}
                      </span>
                      {text ? (
                        <span className="block truncate text-xs text-[#606a7b]">{text}</span>
                      ) : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {item.explore?.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="flex items-center gap-1.5 text-sm font-semibold text-brand no-underline"
        >
          {link.label}
          <ArrowRight className="size-3.5" />
        </Link>
      ))}
    </div>
  );
}

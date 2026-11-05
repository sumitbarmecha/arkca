import { Quote } from "lucide-react";
import { ArkSlider } from "@/components/ui/ArkSlider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { cn } from "@/lib/utils";
import { googleRating, testimonials, type Reviewer, type Testimonial } from "@/lib/testimonials";

const [featured, ...others] = testimonials;

const relationStyle: Record<Reviewer, string> = {
  Client: "bg-accent text-brand",
  "Team member": "bg-white/10 text-white/80",
  "Google reviewer": "bg-white/10 text-white/80",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({ name, className }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-full bg-accent/90 text-sm font-bold text-brand",
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}

/** Featured quote with the key phrase highlighted. */
function Highlighted({ quote, phrase }: { quote: string; phrase?: string }) {
  if (!phrase || !quote.includes(phrase)) return <>{quote}</>;
  const [before, after] = quote.split(phrase);
  return (
    <>
      {before}
      <mark className="rounded bg-accent/45 px-1 py-0.5 text-brand [box-decoration-break:clone]">
        {phrase}
      </mark>
      {after}
    </>
  );
}

function FeaturedReview({ t }: { t: Testimonial }) {
  return (
    <figure className="grid gap-8 rounded-[2rem] bg-white p-6 text-brand shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] sm:p-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-12 lg:p-12">
      <div>
        <span className="grid size-12 place-items-center rounded-2xl bg-brand text-accent">
          <Quote className="size-5 fill-current" aria-hidden />
        </span>
        <blockquote className="font-display mt-6 text-[1.3rem] font-medium leading-[1.45] tracking-[-0.01em] sm:text-2xl lg:text-[1.75rem]">
          <Highlighted quote={t.quote} phrase={t.highlight} />
        </blockquote>
      </div>

      <figcaption className="flex flex-col justify-between gap-8 rounded-2xl bg-canvas p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <Avatar name={t.name} className="size-14 text-base" />
          <div>
            <p className="font-display text-lg font-bold leading-tight">{t.name}</p>
            <p className="mt-0.5 text-sm text-[#555d6c]">Reviewed on Google</p>
          </div>
        </div>

        <div>
          <Stars value={5} size="size-5" className="text-brand" />
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#606a7b]">
            What stood out
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {t.traits?.map((trait) => (
              <li
                key={trait}
                className="rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[13px] font-medium"
              >
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </figcaption>
    </figure>
  );
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
      <Stars value={5} className="text-white" />
      <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-white/85">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <Avatar name={t.name} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{t.name}</p>
          <p
            className={cn(
              "mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
              relationStyle[t.relation],
            )}
          >
            {t.relation}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection({ id = "testimonials" }: { id?: string }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative overflow-x-clip bg-brand-night bg-[radial-gradient(55%_70%_at_90%_0%,rgba(242,184,75,0.16),transparent_70%),radial-gradient(50%_60%_at_0%_100%,rgba(70,110,190,0.22),transparent_70%)] py-16 text-white md:py-24"
    >
      <Container>
        <Reveal>
          <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,184,75,0.2)]" />
                Testimonials
              </p>
              <h2
                id={`${id}-title`}
                className="font-display mt-5 text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]"
              >
                Trusted by clients. Valued by the team.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-white/70 md:text-base">
                What people say about working with ARKCA Corporate Solutions, as posted on Google.
              </p>
            </div>

            <div className="flex w-fit items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4">
              <p className="font-display text-5xl font-bold leading-none tracking-[-0.04em]">
                {googleRating.score}
              </p>
              <div>
                <Stars value={googleRating.score} size="size-[18px]" className="text-white" />
                <p className="mt-1.5 text-[13px] text-white/70">
                  {googleRating.reviews} Google reviews
                </p>
              </div>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 md:mt-12">
          <FeaturedReview t={featured} />
        </Reveal>

        <Reveal delay={0.08} className="mt-5 md:mt-6">
          <ArkSlider label="More reviews" tone="dark" desktopColumns={3}>
            {others.map((t) => (
              <ReviewCard key={t.name} t={t} />
            ))}
          </ArkSlider>
        </Reveal>
      </Container>
    </section>
  );
}

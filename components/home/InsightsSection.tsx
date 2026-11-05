import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { ArkSlider } from "@/components/ui/ArkSlider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/blog";

/**
 * Fourth home section: after "how it works", show that ARKCA keeps up with the
 * rules. Cards come from lib/blog.ts (placeholder data for now).
 */
export function InsightsSection() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
      className="overflow-x-clip border-t border-[#e5e8ee] bg-white py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d7dce5] bg-canvas px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
                <span className="size-1.5 rounded-full bg-[#536d9b] shadow-[0_0_0_4px_rgba(83,109,155,0.18)]" />
                Insights
              </p>
              <h2
                id="insights-title"
                className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.75rem]"
              >
                Stay ahead of every notice and deadline
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#555d6c] md:text-base">
                Plain-language updates on EPR, imports and registrations, written for the people who
                have to act on them.
              </p>
            </div>

            <Link
              href="/blogs/"
              className="inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold !text-white no-underline transition-colors hover:bg-brand-deep"
            >
              See all insights
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </header>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 md:mt-12">
          <ArkSlider label="ARKCA insights" tone="light">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </ArkSlider>
        </Reveal>
      </Container>
    </section>
  );
}

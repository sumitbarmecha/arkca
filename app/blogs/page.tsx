import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights | ARKCA Corporate",
  description:
    "Plain-language updates on EPR, imports and registrations from ARKCA Corporate.",
};

export default function BlogsPage() {
  return (
    <main id="content" className="bg-canvas">
      <section className="py-14 md:py-20">
        <Container>
          <header className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d7dce5] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
              <span className="size-1.5 rounded-full bg-[#536d9b] shadow-[0_0_0_4px_rgba(83,109,155,0.18)]" />
              Insights
            </p>
            <h1 className="font-display mt-5 text-[2.2rem] font-bold leading-[1.08] tracking-[-0.03em] text-brand sm:text-5xl">
              Stay ahead of every notice and deadline
            </h1>
            <p className="mt-4 text-base leading-7 text-[#555d6c]">
              Plain-language updates on EPR, imports and registrations, written for the people who
              have to act on them.
            </p>
          </header>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

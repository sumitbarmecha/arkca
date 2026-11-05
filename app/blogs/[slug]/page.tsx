import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogCover } from "@/components/blog/BlogCover";
import { Container } from "@/components/ui/Container";
import { blogPosts, getPost, type BlogBlock } from "@/lib/blog";
import { consultationHref } from "@/lib/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | ARKCA Corporate`, description: post.excerpt };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display mt-12 text-2xl font-bold tracking-[-0.02em] text-brand md:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display mt-8 text-lg font-bold tracking-[-0.01em] text-brand md:text-xl">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-7 text-[#3a404a]">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#536d9b]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="mt-10 rounded-2xl border border-[#bdcce7] bg-[#e5ecf7] p-5 text-base font-medium leading-7 text-[#182741] md:p-6">
          {block.text}
        </p>
      );
    default:
      return <p className="mt-4 text-base leading-7 text-[#3a404a]">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <main id="content" className="bg-canvas">
      <article className="py-10 md:py-16">
        <Container>
          <Link
            href="/blogs/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All insights
          </Link>

          <header className="mt-6 max-w-3xl">
            <h1 className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl md:text-[2.8rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-[#555d6c] md:text-lg md:leading-8">
              {post.excerpt}
            </p>
          </header>

          <BlogCover
            post={post}
            className="mt-8 aspect-[16/10] w-full rounded-[1.5rem] md:mt-10 md:aspect-auto md:h-64"
          />

          <div className="mx-auto mt-10 max-w-3xl md:mt-14">
            {post.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            <div className="mt-12 flex flex-col gap-4 rounded-[1.5rem] bg-brand p-6 text-white sm:flex-row sm:items-center sm:justify-between md:p-8">
              <div>
                <p className="font-display text-xl font-bold tracking-[-0.02em]">
                  Not sure what applies to your business?
                </p>
                <p className="mt-1.5 text-sm leading-6 text-white/65">
                  Tell us what you make, import or sell. We will map the registrations you need.
                </p>
              </div>
              <a
                href={consultationHref}
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold !text-brand no-underline transition-colors hover:bg-accent-soft"
              >
                Book a consultation
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-title" className="border-t border-[#e5e8ee] bg-white py-14 md:py-20">
          <Container>
            <h2
              id="related-title"
              className="font-display text-2xl font-bold tracking-[-0.02em] text-brand md:text-3xl"
            >
              More insights
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}

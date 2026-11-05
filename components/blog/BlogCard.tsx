import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCover } from "@/components/blog/BlogCover";
import { postHref, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#dde1e8] bg-white shadow-[0_14px_36px_-26px_rgba(17,40,75,0.35)] transition-shadow duration-300 hover:shadow-[0_22px_44px_-26px_rgba(17,40,75,0.45)]">
      <BlogCover post={post} className="aspect-[16/11] w-full" />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold leading-snug tracking-[-0.02em] text-brand sm:text-[1.2rem]">
          <Link
            href={postHref(post)}
            className="no-underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand focus-visible:after:ring-offset-2 focus-visible:after:rounded-[1.5rem]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#555d6c]">{post.excerpt}</p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand">
          Read article
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </article>
  );
}

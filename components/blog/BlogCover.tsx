import { CalendarClock, Layers, Ship, type LucideIcon } from "lucide-react";
import type { BlogIcon, BlogPost, BlogTone } from "@/lib/blog";
import { cn } from "@/lib/utils";

/** Placeholder cover artwork until real blog images exist. Uses facts from the post. */

const icons: Record<BlogIcon, LucideIcon> = {
  calendar: CalendarClock,
  ship: Ship,
  layers: Layers,
};

const tones: Record<BlogTone, { bg: string; ink: string; chip: string }> = {
  peach: {
    bg: "linear-gradient(160deg,#fbf1ea 0%,#f4d9c7 100%)",
    ink: "text-[#a4552a]",
    chip: "bg-white/80 text-[#7a3f1d]",
  },
  sky: {
    bg: "linear-gradient(160deg,#edf5f8 0%,#cbe2ec 100%)",
    ink: "text-[#1f6a86]",
    chip: "bg-white/80 text-[#1f4a5c]",
  },
  mint: {
    bg: "linear-gradient(160deg,#e9effa 0%,#c1d1ed 100%)",
    ink: "text-[#2f6b3a]",
    chip: "bg-white/80 text-[#26502b]",
  },
  lavender: {
    bg: "linear-gradient(160deg,#f1effa 0%,#d9d4f0 100%)",
    ink: "text-[#5a4fa0]",
    chip: "bg-white/80 text-[#443b78]",
  },
};

export function BlogCover({
  post,
  className,
}: {
  post: Pick<BlogPost, "category" | "tone" | "icon" | "cover">;
  className?: string;
}) {
  const tone = tones[post.tone];
  const Icon = icons[post.icon];

  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      style={{ background: tone.bg }}
      aria-hidden
    >
      {/* Soft rings */}
      <span className="absolute -right-16 -top-16 size-56 rounded-full border border-black/[0.06]" />
      <span className="absolute -right-6 -top-6 size-36 rounded-full border border-black/[0.06]" />
      <Icon
        className={cn("absolute right-5 top-5 size-14 opacity-25 sm:size-16", tone.ink)}
        strokeWidth={1.3}
      />

      <span
        className={cn(
          "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur",
          tone.chip,
        )}
      >
        {post.category}
      </span>

      <div className="absolute inset-x-4 bottom-4 grid max-w-md grid-cols-2 gap-2.5">
        {post.cover.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-white/90 px-3 py-2.5 shadow-[0_8px_20px_-14px_rgba(17,40,75,0.45)]"
          >
            <p className={cn("font-display text-[15px] font-bold leading-5 sm:text-base", tone.ink)}>
              {stat.value}
            </p>
            <p className="mt-0.5 text-[11px] leading-4 text-[#555d6c]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

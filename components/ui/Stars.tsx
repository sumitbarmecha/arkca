import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarsProps = {
  /** 0 to 5, decimals allowed (4.4 fills the last star 40%). */
  value: number;
  className?: string;
  /** Tailwind size class for each star. */
  size?: string;
};

/** Read-only star rating. The visible stars are hidden from screen readers; the label carries the value. */
export function Stars({ value, className, size = "size-4" }: StarsProps) {
  const pct = Math.max(0, Math.min(5, value)) * 20;

  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className={cn("relative inline-flex", className)}
    >
      <span className="flex gap-0.5 text-current opacity-25" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className={cn(size, "fill-current")} strokeWidth={0} />
        ))}
      </span>
      <span
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pct}%` }}
        aria-hidden
      >
        <span className="flex w-max gap-0.5 text-accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className={cn(size, "fill-current")} strokeWidth={0} />
          ))}
        </span>
      </span>
    </span>
  );
}

import { Award, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ValueIcon } from "@/lib/about";

const tones: Record<ValueIcon, { card: string; icon: string }> = {
  integrity: { card: "bg-[#e5ecf7]", icon: "text-brand" },
  trust: { card: "bg-[#e9f2f6]", icon: "text-[#1f6a86]" },
  innovation: { card: "bg-[#efedf7]", icon: "text-[#5b44b5]" },
  excellence: { card: "bg-[#fbf1dc]", icon: "text-[#8a5200]" },
};

function Icon({ name, className }: { name: ValueIcon; className?: string }) {
  switch (name) {
    case "integrity":
      return <ShieldCheck className={className} aria-hidden />;
    case "trust":
      return <Handshake className={className} aria-hidden />;
    case "innovation":
      return <Lightbulb className={className} aria-hidden />;
    case "excellence":
      return <Award className={className} aria-hidden />;
  }
}

export function ValueCard({
  icon,
  title,
  text,
  className,
}: {
  icon: ValueIcon;
  title: string;
  text: string;
  className?: string;
}) {
  const t = tones[icon];
  return (
    <article className={cn("flex h-full flex-col rounded-[1.5rem] p-5 sm:p-6", t.card, className)}>
      <span className="grid size-11 place-items-center rounded-xl bg-white shadow-[0_6px_14px_-8px_rgba(17,40,75,0.35)]">
        <Icon name={icon} className={cn("size-5", t.icon)} />
      </span>
      <h3 className="font-display mt-5 text-lg font-bold tracking-[-0.01em] text-brand">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#47505e]">{text}</p>
    </article>
  );
}

"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

/** One open at a time. The first item starts open so the section never looks empty. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <li
            key={item.question}
            className={cn(
              "rounded-2xl border bg-white transition-shadow duration-300",
              isOpen
                ? "border-[#c1ccde] shadow-[0_16px_36px_-24px_rgba(17,40,75,0.4)]"
                : "border-[#d6dde9]",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:p-6"
              >
                <span className="font-display text-base font-bold leading-snug tracking-[-0.01em] text-brand sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-200",
                    isOpen
                      ? "border-brand bg-brand text-accent"
                      : "border-[#c8ced8] text-brand",
                  )}
                  aria-hidden
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div
                className={cn(
                  "overflow-hidden transition-[visibility] duration-0",
                  !isOpen && "invisible delay-300",
                )}
              >
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="max-w-2xl text-[15px] leading-7 text-[#4a525f]">{item.answer}</p>
                  {item.link ? (
                    <Link
                      href={item.link.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand no-underline hover:underline"
                    >
                      {item.link.label}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

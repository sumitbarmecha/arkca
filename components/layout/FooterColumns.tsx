"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FooterLinkItem = { label: string; href: string };
export type FooterSection = { heading?: string; links: FooterLinkItem[] };
export type FooterColumn = { title: string; sections: FooterSection[] };

/**
 * Footer link columns.
 * Below lg each column is an accordion (one open at a time, all closed by default).
 * From lg up the columns are always open and the heading is a plain heading.
 */
export function FooterColumns({ columns }: { columns: FooterColumn[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="grid lg:grid-cols-4 lg:gap-x-8 xl:gap-x-10">
      {columns.map((column, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <nav
            key={column.title}
            aria-label={column.title}
            className="border-b border-white/10 lg:border-0"
          >
            {/* Desktop heading */}
            <h2 className="hidden pb-5 text-[13px] font-medium text-white/55 lg:block">
              {column.title}
            </h2>

            {/* Mobile accordion trigger */}
            <h2 className="lg:hidden">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold text-white"
              >
                {column.title}
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-white/60 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h2>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out lg:!grid-rows-[1fr]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div
                className={cn(
                  "overflow-hidden max-lg:transition-[visibility] max-lg:duration-0",
                  // Keep links of a closed accordion panel out of the tab order.
                  !isOpen && "max-lg:invisible max-lg:delay-300",
                )}
              >
                <div className="space-y-6 pb-5 lg:pb-8">
                  {column.sections.map((section, s) => (
                    <div key={section.heading ?? s}>
                      {section.heading ? (
                        <p className="mb-3 text-[13px] font-medium text-white/45">
                          {section.heading}
                        </p>
                      ) : null}
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="text-sm text-white/90 no-underline transition-colors hover:text-accent"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        );
      })}
    </div>
  );
}

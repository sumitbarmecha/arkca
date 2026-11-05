"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { TrustLogoCarousel } from "@/components/home/TrustLogoCarousel";
import { consultationHref } from "@/lib/navigation";

const stats = [
  { value: "Up to 80%", label: "faster screening than other solutions" },
  { value: "Up to 70%", label: "more productivity for compliance teams" },
  { value: "Minutes", label: "to a full, source-linked report" },
  { value: "Up to 95%", label: "of noise removed before review" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** Hidden from homepage for now — replaced by GreenlyHero. Keep for later A/B or restore. */
export function HomeFirstView() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const live = ready && !reduce;

  function fadeUp(delay: number) {
    return {
      initial: live ? { opacity: 0, y: 18 } : false,
      animate: { opacity: 1, y: 0 },
      transition: { duration: live ? 0.55 : 0, delay: live ? delay : 0, ease },
    };
  }

  return (
    <section className="flex min-h-[calc(100svh-var(--header-height))] flex-col bg-white">
      <Container className="flex flex-1 flex-col items-center justify-center px-0 pb-8 pt-10 text-center md:pb-10 md:pt-14">
        <motion.h1
          className="font-display max-w-4xl text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] text-brand sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05] lg:tracking-[-0.035em]"
          {...fadeUp(0.05)}
        >
          Regulatory compliance, handled with clarity.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base leading-7 text-[#525252] md:mt-5 md:text-lg md:leading-8"
          {...fadeUp(0.14)}
        >
          EPR registration, product licences, company setup, and import filings for businesses that
          need a clear next step.
        </motion.p>

        <motion.div className="mt-7 md:mt-8" {...fadeUp(0.22)}>
          <Button
            asChild
            size="lg"
            className="rounded-xl px-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,40,75,0.18)]"
          >
            <a href={consultationHref}>Book a Consultation</a>
          </Button>
        </motion.div>

        <motion.div className="mt-10 w-full md:mt-12" {...fadeUp(0.32)}>
          <TrustLogoCarousel />
        </motion.div>
      </Container>

      <motion.div
        className="border-t border-[#e5e8ee]"
        initial={live ? { opacity: 0, y: 16 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: live ? 0.55 : 0, delay: live ? 0.42 : 0, ease }}
      >
        <Container className="px-0 py-8 md:py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                className={
                  index === 0
                    ? "text-left lg:pr-8"
                    : "text-left lg:border-l lg:border-[#e5e8ee] lg:px-8 last:lg:pr-0"
                }
                initial={live ? { opacity: 0, y: 14 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: live ? 0.45 : 0,
                  delay: live ? 0.48 + index * 0.07 : 0,
                  ease,
                }}
              >
                <p className="font-display text-2xl font-bold tracking-[-0.02em] text-brand md:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[16rem] text-sm leading-6 text-[#606a7b]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}

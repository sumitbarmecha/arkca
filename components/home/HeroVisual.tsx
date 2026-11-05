"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";
import { BadgeCheck, BatteryCharging, CalendarClock, Cpu, Recycle } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type Stream = {
  label: string;
  status: string;
  progress: number;
  tone: "done" | "active" | "todo";
  icon: typeof Recycle;
};

const streams: Stream[] = [
  { label: "Plastic waste EPR", status: "Registered", progress: 100, tone: "done", icon: Recycle },
  { label: "E-waste EPR", status: "Filing in progress", progress: 68, tone: "active", icon: Cpu },
  {
    label: "Battery waste EPR",
    status: "Documents mapped",
    progress: 40,
    tone: "todo",
    icon: BatteryCharging,
  },
];

const toneStyles = {
  done: { pill: "bg-[#d7e2f4] text-[#1e5c38]", bar: "bg-[#2f9a5f]" },
  active: { pill: "bg-[#fbe9c6] text-[#8a5200]", bar: "bg-[#e9a227]" },
  todo: { pill: "bg-[#e4e7ed] text-[#414853]", bar: "bg-[#5c7bb1]" },
} as const;

const READINESS = 78;
const RING_R = 34;
const RING_C = 2 * Math.PI * RING_R;

/** Illustrative product preview for the home hero. Static data, no backend. */
export function HeroVisual() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      {/* Backdrop panel: swap for a photo any time */}
      <div className="rounded-[1.75rem] bg-[#cfdaed] p-4 pb-10 pt-14 sm:rounded-[2rem] sm:p-8 sm:pb-12 sm:pt-16">
        <motion.div
          className="rounded-2xl border border-white/80 bg-white p-4 shadow-[0_30px_60px_-30px_rgba(17,40,75,0.35)] sm:p-5"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f899a]">
                Compliance overview
              </p>
              <p className="font-display mt-1 text-base font-bold text-brand sm:text-lg">
                EPR registrations
              </p>
            </div>
            <span className="rounded-full border border-[#e0e2e6] bg-[#f4f6f8] px-2.5 py-1 text-[11px] font-medium text-[#606a7b]">
              Sample view
            </span>
          </div>

          {/* Readiness ring */}
          <div className="mt-4 flex items-center gap-4 rounded-xl bg-[#f4f6f8] p-3.5 sm:p-4">
            <div className="relative size-[4.5rem] shrink-0 sm:size-20">
              <svg viewBox="0 0 80 80" className="size-full -rotate-90" aria-hidden="true">
                <circle cx="40" cy="40" r={RING_R} fill="none" stroke="#d9dfea" strokeWidth="8" />
                <motion.circle
                  cx="40"
                  cy="40"
                  r={RING_R}
                  fill="none"
                  stroke="#11284b"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  initial={{ strokeDashoffset: RING_C }}
                  animate={{ strokeDashoffset: RING_C * (1 - READINESS / 100) }}
                  transition={{ duration: 1.2, delay: 0.5, ease }}
                />
              </svg>
              <span className="font-display absolute inset-0 grid place-items-center text-lg font-bold text-brand sm:text-xl">
                {READINESS}%
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Filing readiness</p>
              <p className="mt-0.5 text-[13px] leading-5 text-[#555d6c]">
                Documents mapped, portal filing is the next step.
              </p>
            </div>
          </div>

          {/* Streams */}
          <ul className="mt-3 space-y-2.5">
            {streams.map((s, i) => {
              const Icon = s.icon;
              const t = toneStyles[s.tone];
              return (
                <li
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl border border-[#e5e8ee] p-3"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#e5ebf6] text-brand">
                    <Icon className="size-[18px]" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[13px] font-semibold text-brand">{s.label}</p>
                      <span
                        className={cn(
                          "hidden shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold min-[420px]:inline",
                          t.pill,
                        )}
                      >
                        {s.status}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8eaef]">
                      <motion.div
                        className={cn("h-full rounded-full", t.bar)}
                        initial={{ width: 0 }}
                        animate={{ width: `${s.progress}%` }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.12, ease }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>

      {/* Floating cards */}
      <Float
        delay={0.9}
        drift={-6}
        duration={5}
        className="-left-1 top-1.5 sm:-left-5 sm:top-4"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#fbe9c6] text-[#8a5200]">
          <CalendarClock className="size-[18px]" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-xs font-semibold text-brand">Annual return</p>
          <p className="text-[11px] text-[#606a7b]">Reminder set</p>
        </div>
      </Float>

      <Float
        delay={1.05}
        drift={6}
        duration={6}
        className="-right-1 bottom-1 sm:-right-5 sm:bottom-3"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d7e2f4] text-[#1e5c38]">
          <BadgeCheck className="size-[18px]" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-xs font-semibold text-brand">Documents verified</p>
          <p className="text-[11px] text-[#606a7b]">Ready to file</p>
        </div>
      </Float>
    </div>
    </MotionConfig>
  );
}

function Float({
  children,
  className,
  delay,
  drift,
  duration,
}: {
  children: ReactNode;
  className?: string;
  delay: number;
  drift: number;
  duration: number;
}) {
  return (
    <motion.div
      className={cn(
        "absolute flex items-center gap-2.5 rounded-xl border border-[#e0e2e6] bg-white py-2 pl-2 pr-3.5 shadow-[0_16px_36px_-14px_rgba(17,40,75,0.3)]",
        className,
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, drift, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
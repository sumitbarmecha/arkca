"use client";

/**
 * ArkSlider: the one slider setup used across the whole site.
 *
 *  - Swiper under the hood.
 *  - Progress bar at the bottom left, previous / next arrows side by side
 *    at the bottom right, next to the bar.
 *  - By default the slider switches itself off from the `lg` breakpoint and
 *    the slides sit in a plain row (one column per slide). Set
 *    `alwaysSlide` for sliders that should slide on every screen size.
 *
 * Usage:
 *   <ArkSlider label="Services" tone="dark">
 *     <Card />
 *     <Card />
 *   </ArkSlider>
 */

import { Children, useCallback, useState, type CSSProperties, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import "swiper/css";

type ArkSliderProps = {
  children: ReactNode;
  /** Accessible name for the carousel region. */
  label: string;
  /** "dark" for dark backgrounds, "light" for light ones. */
  tone?: "dark" | "light";
  /** Slide on every screen size instead of only below `lg`. */
  alwaysSlide?: boolean;
  /** Slides visible at once on large screens when `alwaysSlide` is false. Defaults to the slide count. */
  desktopColumns?: number;
  className?: string;
};

const tones = {
  dark: {
    track: "bg-white/15",
    fill: "bg-accent",
    button:
      "border-white/25 text-white hover:bg-accent hover:border-accent hover:text-brand focus-visible:ring-accent",
  },
  light: {
    track: "bg-brand/12",
    fill: "bg-brand",
    button:
      "border-brand/25 text-brand hover:bg-brand hover:border-brand hover:text-white focus-visible:ring-brand",
  },
} as const;

export function ArkSlider({
  children,
  label,
  tone = "dark",
  alwaysSlide = false,
  desktopColumns,
  className,
}: ArkSliderProps) {
  const slides = Children.toArray(children);
  const columns = desktopColumns ?? slides.length;
  const t = tones[tone];

  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const sync = useCallback((s: SwiperType) => {
    const steps = Math.max(s.snapGrid.length, 1);
    setProgress(s.isEnd ? 1 : (s.snapIndex + 1) / steps);
    setAtStart(s.isBeginning);
    setAtEnd(s.isEnd);
  }, []);

  return (
    <div
      className={cn("ark-slider", !alwaysSlide && "ark-slider--grid-lg", className)}
      style={{ "--ark-cols": columns } as CSSProperties}
    >
      <Swiper
        modules={[A11y, Keyboard]}
        className="ark-slider__swiper"
        aria-label={label}
        slidesPerView={1.12}
        spaceBetween={14}
        speed={600}
        grabCursor
        watchOverflow
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ enabled: true }}
        breakpoints={{
          520: { slidesPerView: 1.6 },
          768: { slidesPerView: 2.2, spaceBetween: 16 },
          1024: alwaysSlide
            ? { slidesPerView: Math.min(columns, 3.2), spaceBetween: 18 }
            : { slidesPerView: columns, spaceBetween: 18, enabled: false },
        }}
        onSwiper={(s) => {
          setSwiper(s);
          sync(s);
        }}
        onSlideChange={sync}
        onProgress={sync}
        onResize={sync}
        onBreakpoint={sync}
        onUpdate={sync}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="!h-auto">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bar (left) + arrows side by side (right) */}
      <div className={cn("mt-6 flex items-center gap-5", !alwaysSlide && "lg:hidden")}>
        <div
          className={cn("relative h-[3px] flex-1 overflow-hidden rounded-full", t.track)}
          role="progressbar"
          aria-label={`${label} progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <span
            className={cn(
              "absolute inset-0 origin-left rounded-full transition-transform duration-500 ease-out",
              t.fill,
            )}
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <div className="flex shrink-0 gap-2.5">
          <button
            type="button"
            aria-label="Previous"
            disabled={atStart}
            onClick={() => swiper?.slidePrev()}
            className={cn(
              "grid size-11 place-items-center rounded-full border bg-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-95 disabled:pointer-events-none disabled:opacity-35",
              t.button,
            )}
          >
            <ArrowLeft className="size-[18px]" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={atEnd}
            onClick={() => swiper?.slideNext()}
            className={cn(
              "grid size-11 place-items-center rounded-full border bg-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-95 disabled:pointer-events-none disabled:opacity-35",
              t.button,
            )}
          >
            <ArrowRight className="size-[18px]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

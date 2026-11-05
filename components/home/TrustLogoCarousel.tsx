"use client";

import Image from "next/image";
import { asset } from "@/lib/assetPath";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { trustBrands } from "@/lib/trust";

function BrandMark({ name, slug, hasLogo }: { name: string; slug?: string; hasLogo?: boolean }) {
  if (hasLogo && slug) {
    return (
      <Image
        src={asset(`/trust/${slug}.png`)}
        alt={name}
        width={140}
        height={40}
        className="h-8 w-auto max-w-[140px] object-contain opacity-70 grayscale"
      />
    );
  }

  return (
    <span className="whitespace-nowrap text-sm font-medium tracking-[-0.01em] text-[#7f899a]">
      {name}
    </span>
  );
}

export function TrustLogoCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 2200);
    return () => window.clearInterval(timer);
  }, [api]);

  const slides = [...trustBrands, ...trustBrands];

  return (
    <div className="w-full">
      <p className="text-center text-[11px] font-medium uppercase tracking-[0.14em] text-[#7f899a]">
        Trusted by compliance and risk teams at
      </p>
      <Carousel
        className="mt-6"
        opts={{ align: "start", loop: true, dragFree: true }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-6 md:-ml-10">
          {slides.map((brand, index) => (
            <CarouselItem
              key={`${brand.name}-${index}`}
              className="basis-1/2 pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 md:pl-10"
            >
              <div className="flex h-12 items-center justify-center px-2">
                <BrandMark name={brand.name} slug={brand.slug} hasLogo={brand.hasLogo} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

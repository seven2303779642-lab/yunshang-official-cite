"use client";

import type { SiteContent } from "@/data/siteContent";
import { useEffect, useState } from "react";

const AUTO_PLAY_INTERVAL = 4500;

type HeroSliderProps = {
  content: SiteContent["home"]["heroSlider"];
};

export default function HeroSlider({ content }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % content.slides.length,
      );
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [content.slides.length]);

  return (
    <section className="relative h-[530px] min-[1025px]:h-[775px] overflow-hidden bg-black">
      {content.slides.map((slide, index) => (
        <picture
          key={slide.desktopImage}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            activeIndex === index
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <source
            media="(max-width: 1024px)"
            srcSet={slide.mobileImage ?? slide.desktopImage}
          />
          <img
            src={slide.desktopImage}
            alt={slide.alt}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </picture>
      ))}

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 min-[1025px]:bottom-6">
        {content.slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={content.slideIndicatorAriaLabelTemplate.replace(
              "{n}",
              String(index + 1),
            )}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "scale-110 bg-[#c83f3b]"
                : "bg-white/90 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

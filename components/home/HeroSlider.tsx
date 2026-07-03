"use client";

import type { SiteContent } from "@/data/siteContent";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_PLAY_INTERVAL = 4500;
const SWIPE_THRESHOLD = 48;

type HeroSliderProps = {
  content: SiteContent["home"]["heroSlider"];
};

export default function HeroSlider({ content }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = content.slides.length;
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const intervalRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
  }, [slideCount]);

  const goToPrev = useCallback(() => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + slideCount) % slideCount,
    );
  }, [slideCount]);

  const goToIndex = useCallback(
    (index: number) => {
      setActiveIndex(index);
    },
    [],
  );

  const startAutoplay = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
    }, AUTO_PLAY_INTERVAL);
  }, [slideCount]);

  useEffect(() => {
    startAutoplay();

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [startAutoplay]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;

    if (!start) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;

    if (
      Math.abs(deltaX) < SWIPE_THRESHOLD ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
    } else {
      goToPrev();
    }

    startAutoplay();
  };

  const handlePointerCancel = () => {
    pointerStart.current = null;
  };

  const handleDotClick = (index: number) => {
    goToIndex(index);
    startAutoplay();
  };

  return (
    <section className="relative h-[530px] min-[1025px]:h-[775px] overflow-hidden bg-black">
      <div
        className="absolute inset-0 touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
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
              className="h-full w-full object-cover select-none"
              draggable={false}
            />
          </picture>
        ))}
      </div>

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
            onClick={() => handleDotClick(index)}
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

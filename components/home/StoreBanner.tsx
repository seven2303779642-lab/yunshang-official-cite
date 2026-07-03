"use client";

import StoreNearbyButton from "@/components/home/StoreNearbyButton";
import type { SiteContent } from "@/data/siteContent";
import { useEffect, useRef, useState } from "react";

type StoreBannerProps = {
  content: SiteContent["home"]["storeBanner"];
};

export default function StoreBanner({ content }: StoreBannerProps) {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textBlock = textRef.current;
    if (!textBlock) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setIsTextVisible(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(textBlock);

    return () => observer.disconnect();
  }, []);

  const revealClass = `transition-opacity duration-700 ease-in-out ${
    isTextVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <section className="relative h-[430px] overflow-hidden bg-black min-[768px]:h-[530px] min-[1025px]:h-[520px]">
      <img
        src="/images/home/store-banner/stores.jpg"
        alt={content.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div ref={textRef}>
          <h2 className={`type-display-title !text-white ${revealClass}`}>
            {content.title}
          </h2>

          <p
            className={`type-body-copy-emphasis mt-[20px] text-white transition-opacity delay-200 duration-700 ease-in-out ${
              isTextVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {content.subtitle}
          </p>
        </div>

        <div className="relative mt-7 inline-flex items-center justify-center">
          <StoreNearbyButton href={content.storesButtonHref}>
            {content.storesButton}
          </StoreNearbyButton>
        </div>
      </div>
    </section>
  );
}

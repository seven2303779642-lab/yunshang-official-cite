"use client";

import StoreNearbyButton from "@/components/home/StoreNearbyButton";
import type { Locale, SiteContent } from "@/data/siteContent";
import { scrollRevealClass, useScrollReveal } from "@/hooks/useScrollReveal";

type StoreBannerProps = {
  content: SiteContent["home"]["storeBanner"];
  locale: Locale;
};

export default function StoreBanner({ content, locale }: StoreBannerProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

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
        <div ref={ref}>
          <h2
            className={`type-display-title !text-white${locale === "en" ? " uppercase" : ""} ${scrollRevealClass(isVisible)}`}
          >
            {content.title}
          </h2>

          <p
            className={`type-body-copy-emphasis mt-[20px] text-white ${scrollRevealClass(isVisible, "delay-200")}`}
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

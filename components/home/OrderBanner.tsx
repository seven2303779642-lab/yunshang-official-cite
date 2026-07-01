"use client";

import BrandButton from "@/components/ui/BrandButton";
import type { SiteContent } from "@/data/siteContent";
import { useEffect, useRef, useState } from "react";

type OrderBannerProps = {
  content: SiteContent["home"]["orderBanner"];
};

export default function OrderBanner({ content }: OrderBannerProps) {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setIsHeadingVisible(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`relative min-h-[460px] overflow-hidden bg-black text-white min-[1025px]:min-h-[500px]${
        content.titleImage ? " order-banner--with-title-image" : ""
      }`}
    >
      <img
        src="/images/home/order-banner/orderbanner.png"
        alt={content.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="order-banner__content relative z-20 flex min-h-[460px] flex-col items-center justify-center px-6 pb-[118px] pt-16 text-center min-[1025px]:min-h-[500px] min-[1025px]:pb-[135px] min-[1025px]:pt-20">
        {content.titleImage ? (
          <img
            src={content.titleImage}
            alt={content.titleImageAlt ?? ""}
            className="order-banner-title-image"
            draggable={false}
          />
        ) : null}

        <h2
          ref={headingRef}
          className={`type-display-title !text-white transition-opacity duration-700 ease-in-out min-[1025px]:font-normal min-[1025px]:text-[64px] ${
            isHeadingVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block">{content.headingLines[0]}</span>
          <span className="mt-3 block min-[1025px]:mt-[20px]">{content.headingLines[1]}</span>
        </h2>

        <div className="mt-10 flex flex-col items-center gap-5 min-[768px]:flex-row min-[768px]:gap-[120px]">
          <BrandButton href={content.orderButtonHref}>{content.pickupButton}</BrandButton>
          <BrandButton href={content.orderButtonHref}>{content.deliveryButton}</BrandButton>
        </div>
      </div>
    </section>
  );
}

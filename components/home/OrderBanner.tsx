"use client";

import BrandButton from "@/components/ui/BrandButton";
import type { Locale, SiteContent } from "@/data/siteContent";
import { scrollRevealClass, useScrollReveal } from "@/hooks/useScrollReveal";
import { Fragment } from "react";
import OrderBannerImageButton from "./OrderBannerImageButton";

type OrderBannerProps = {
  content: SiteContent["home"]["orderBanner"];
  locale: Locale;
};

function OrderBannerHighlightLine({ line }: { line: string }) {
  const parts = line.split("\n");

  return (
    <span className="order-banner__title-line">
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index > 0 ? <br /> : null}
          {part}
        </Fragment>
      ))}
    </span>
  );
}

export default function OrderBanner({ content, locale }: OrderBannerProps) {
  const { ref, isVisible } = useScrollReveal<HTMLHeadingElement>();
  const hasTitleText = Boolean(content.titleLines?.length);
  const desktopTitleLines = content.titleLines ?? [];
  const mobileTitleLines = content.mobileTitleLines ?? content.titleLines ?? [];
  const desktopHeadingLines = content.headingLines;
  const mobileHeadingLines =
    content.mobileHeadingLines ?? content.headingLines;
  const hasResponsiveCopy = Boolean(
    content.mobileTitleLines?.length || content.mobileHeadingLines?.length,
  );
  const useEnMobileImageButtons = locale === "en" && hasTitleText;

  return (
    <section
      className={`order-banner relative min-h-[460px] overflow-hidden bg-black text-white min-[1025px]:min-h-[500px]${
        hasTitleText ? " order-banner--with-title-text" : ""
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
        {hasTitleText ? (
          hasResponsiveCopy ? (
            <>
              <p className="order-banner-title-text order-banner-title-text--desktop">
                {desktopTitleLines.map((line) => (
                  <span key={line} className="order-banner-title-text__line">
                    {line}
                  </span>
                ))}
              </p>
              <p className="order-banner-title-text order-banner-title-text--mobile">
                {mobileTitleLines.map((line) => (
                  <span key={line} className="order-banner-title-text__line">
                    {line}
                  </span>
                ))}
              </p>
            </>
          ) : (
            <p className="order-banner-title-text">
              {desktopTitleLines.map((line) => (
                <span key={line} className="order-banner-title-text__line">
                  {line}
                </span>
              ))}
            </p>
          )
        ) : null}

        <h2
          ref={ref}
          className={`order-banner__title ${scrollRevealClass(isVisible)}`}
        >
          {hasResponsiveCopy ? (
            <>
              <span className="order-banner__heading-set order-banner__heading-set--desktop">
                {desktopHeadingLines.map((line) => (
                  <OrderBannerHighlightLine key={line} line={line} />
                ))}
              </span>
              <span className="order-banner__heading-set order-banner__heading-set--mobile">
                {mobileHeadingLines.map((line) => (
                  <OrderBannerHighlightLine key={line} line={line} />
                ))}
              </span>
            </>
          ) : (
            content.headingLines.map((line) => (
              <OrderBannerHighlightLine key={line} line={line} />
            ))
          )}
        </h2>

        {useEnMobileImageButtons ? (
          <>
            <div className="order-banner__actions order-banner__actions--desktop mt-10 hidden flex-col items-center gap-5 min-[768px]:flex min-[768px]:flex-row min-[768px]:gap-[120px]">
              <BrandButton href={content.pickupButtonHref}>
                {content.pickupButton}
              </BrandButton>
              <BrandButton href={content.deliveryButtonHref}>
                {content.deliveryButton}
              </BrandButton>
            </div>
            <div className="order-banner__actions order-banner__actions--mobile mt-10 flex flex-col items-center min-[768px]:hidden">
              <OrderBannerImageButton href={content.pickupButtonHref}>
                {content.pickupButton}
              </OrderBannerImageButton>
              <OrderBannerImageButton href={content.deliveryButtonHref}>
                {content.deliveryButton}
              </OrderBannerImageButton>
            </div>
          </>
        ) : (
          <div className="order-banner__actions mt-10 flex flex-col items-center gap-5 min-[768px]:flex-row min-[768px]:gap-[120px]">
            <BrandButton href={content.pickupButtonHref}>
              {content.pickupButton}
            </BrandButton>
            <BrandButton href={content.deliveryButtonHref}>
              {content.deliveryButton}
            </BrandButton>
          </div>
        )}
      </div>
    </section>
  );
}

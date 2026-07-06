"use client";

import BrandButton from "@/components/ui/BrandButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { SiteContent } from "@/data/siteContent";
import { useEffect, useState } from "react";

const VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/H_a0OlznLLs?autoplay=1&rel=0&modestbranding=1";

type AboutIntroProps = {
  content: SiteContent["home"]["aboutIntro"];
};

export default function AboutIntro({ content }: AboutIntroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!isVideoOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <section className="relative grid overflow-hidden bg-[var(--color-red)] text-white min-[1025px]:min-h-[500px] min-[1025px]:grid-cols-2">
      <div className="relative z-20 flex flex-col items-center justify-center px-[15px] py-[60px] text-center min-[768px]:px-[50px] min-[768px]:py-[68px] min-[1025px]:items-start min-[1025px]:justify-start min-[1025px]:py-[60px] min-[1025px]:pl-[100px] min-[1025px]:pr-[60px] min-[1025px]:text-left">
        <h2 className="type-display-title !text-white">
          {content.headingLines[0]}
          <br />
          {content.headingLines[1]}
        </h2>

        <p className="type-body-copy mt-[20px] max-w-[920px] text-white min-[1025px]:max-w-[580px] min-[1025px]:pr-[48px]">
          {content.body}
        </p>

        <img
          src={content.titleImage}
          alt={content.titleImageAlt}
          className="mt-9 w-full max-w-[430px] origin-center -rotate-[5deg] select-none min-[1025px]:origin-left min-[1025px]:translate-x-1"
          draggable={false}
        />

        <BrandButton href={content.aboutButtonHref} className="mt-12 w-fit">
          {content.aboutButton}
        </BrandButton>
      </div>

      <ScrollReveal className="pointer-events-none absolute left-[calc(50%+115px)] top-[105px] z-30 hidden h-[286px] w-[434px] -translate-x-1/2 select-none min-[1025px]:block">
        <img
          src="/images/home/decorative/cloud.svg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
          draggable={false}
        />
      </ScrollReveal>

      <div className="relative h-[300px] overflow-hidden bg-black min-[768px]:h-[488px] min-[1025px]:h-auto min-[1025px]:min-h-[500px]">
        <img
          src="/images/home/about-intro/bone-soup.webp"
          alt={content.boneSoupImageAlt}
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10" />

        <ScrollReveal className="pointer-events-none absolute left-[-64px] top-[130px] z-20 hidden w-[235px] select-none min-[768px]:block min-[1025px]:hidden">
          <img
            src="/images/home/decorative/cloud.svg"
            alt=""
            aria-hidden="true"
            className="w-full object-contain"
            draggable={false}
          />
        </ScrollReveal>

        <button
          type="button"
          aria-label={content.playVideoAriaLabel}
          onClick={() => setIsVideoOpen(true)}
          className="group absolute left-1/2 top-1/2 z-30 flex h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white text-white transition-colors duration-300 hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="ml-[4px] h-[34px] w-[34px] fill-current"
          >
            <path d="M18.2 14.6C17.1 14 16 14.8 16 16.1v15.8c0 1.3 1.4 2.1 2.5 1.4l12.8-7.9c1-.6 1-2.1 0-2.7L18.2 14.6Z" />
          </svg>
        </button>
      </div>

      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={content.videoDialogAriaLabel}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            type="button"
            aria-label={content.closeVideoAriaLabel}
            onClick={() => setIsVideoOpen(false)}
            className="absolute right-5 top-4 z-[110] text-5xl leading-none text-white transition-colors duration-300 hover:text-[var(--color-red)]"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-[1030px] bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video w-full">
              <iframe
                title={content.videoTitle}
                src={VIDEO_EMBED_URL}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

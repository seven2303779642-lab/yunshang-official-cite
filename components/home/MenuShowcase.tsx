"use client";

import BrandButton from "@/components/ui/BrandButton";
import type { SiteContent } from "@/data/siteContent";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const SCROLL_SPRING = { stiffness: 80, damping: 22, mass: 0.4 };

type MenuShowcaseProps = {
  content: SiteContent["home"]["menuShowcase"];
};

export default function MenuShowcase({ content }: MenuShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawBackgroundX = useTransform(scrollYProgress, [0.18, 0.9], [0, -240]);
  const backgroundX = useSpring(rawBackgroundX, SCROLL_SPRING);

  const rawLeftY = useTransform(scrollYProgress, [0.08, 0.92], [0, 520]);
  const leftY = useSpring(rawLeftY, SCROLL_SPRING);

  const rawRightY = useTransform(scrollYProgress, [0.08, 0.92], [520, 0]);
  const rightY = useSpring(rawRightY, SCROLL_SPRING);

  return (
    <section
      ref={sectionRef}
      className="menu-showcase relative overflow-hidden bg-[#fff4ec] px-6 pt-20 pb-28 min-[1025px]:px-12 min-[1025px]:pt-28 min-[1025px]:pb-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-full z-0 -translate-x-1/2 translate-y-[-30%] overflow-visible min-[768px]:max-[1024px]:translate-y-[-40%] max-[767px]:translate-y-[-55%]">
        <motion.img
          src="/images/home/menu-showcase/背景云.png"
          alt=""
          aria-hidden="true"
          className="w-[2600px] max-w-none select-none max-[767px]:w-[1800px]"
          style={{ x: backgroundX }}
          draggable={false}
        />
      </div>

      <div className="menu-showcase__inner relative z-10 mx-auto max-[1024px]:max-w-[1180px]">
        <div className="menu-showcase__cards max-[767px]:grid max-[767px]:grid-cols-1 max-[767px]:gap-14 min-[768px]:max-[1024px]:flex min-[768px]:max-[1024px]:flex-col min-[768px]:max-[1024px]:gap-16">
          {content.items.map((item, index) => {
            const asset = content.assets.items[index];

            return (
              <article
                key={item.title}
                className={`menu-showcase__item text-center min-[768px]:max-[1024px]:flex min-[768px]:max-[1024px]:items-stretch min-[768px]:max-[1024px]:gap-10 min-[768px]:max-[1024px]:text-center ${
                  index % 2 === 1
                    ? "min-[768px]:max-[1024px]:flex-row-reverse"
                    : "min-[768px]:max-[1024px]:flex-row"
                }`}
              >
                <div className="menu-showcase__media relative mx-auto w-full max-w-[360px] shrink-0 overflow-visible min-[768px]:max-[1024px]:mx-0 min-[768px]:max-[1024px]:w-[46%] min-[768px]:max-[1024px]:max-w-[400px]">
                  <div className="menu-showcase__image-frame w-full overflow-hidden max-[1024px]:aspect-[304/390]">
                    <img
                      src={asset.image}
                      alt={item.title}
                      className="menu-showcase__image object-cover max-[1024px]:h-full max-[1024px]:w-full"
                      draggable={false}
                    />
                  </div>

                  <img
                    src={asset.tag}
                    alt=""
                    aria-hidden="true"
                    className="menu-showcase__tag pointer-events-none absolute -right-10 -top-12 w-[136px] rotate-[-8deg] select-none max-[1024px]:w-[136px]"
                    draggable={false}
                  />
                </div>

                <div className="menu-showcase__copy relative min-[768px]:max-[1024px]:min-h-0 min-[768px]:max-[1024px]:flex-1 min-[768px]:max-[1024px]:self-stretch">
                  <div
                    className={`min-[768px]:max-[1024px]:absolute min-[768px]:max-[1024px]:inset-x-0 min-[768px]:max-[1024px]:top-0 min-[768px]:max-[1024px]:flex min-[768px]:max-[1024px]:items-center ${
                      index === content.items.length - 1
                        ? "min-[768px]:max-[1024px]:bottom-[62px]"
                        : "min-[768px]:max-[1024px]:bottom-0"
                    }`}
                  >
                    <div className="menu-showcase__copy-inner w-full">
                      <div className="menu-showcase__title-row mt-2 flex items-center justify-center gap-3 leading-none min-[768px]:max-[1024px]:mt-0 min-[768px]:max-[1024px]:justify-center min-[1025px]:justify-center">
                        {asset.titleImage ? (
                          <img
                            src={asset.titleImage}
                            alt={item.title}
                            className="menu-showcase__title-image select-none"
                            draggable={false}
                          />
                        ) : (
                          <>
                            <img
                              src="/images/home/decorative/cloud-red-text.svg"
                              alt=""
                              aria-hidden="true"
                              className="menu-showcase__title-icon h-6 w-6 shrink-0 translate-y-[3px] select-none"
                              draggable={false}
                            />
                            <h3 className="menu-showcase__title type-menu-category-title !text-[var(--color-red)] !leading-none">
                              {item.title}
                            </h3>
                            <img
                              src="/images/home/decorative/cloud-red-text.svg"
                              alt=""
                              aria-hidden="true"
                              className="menu-showcase__title-icon h-6 w-6 shrink-0 translate-y-[3px] select-none"
                              draggable={false}
                            />
                          </>
                        )}
                      </div>

                      <p className="menu-showcase__text type-body-copy mx-auto mt-4 text-[#202020] max-[1024px]:max-w-[360px] min-[768px]:max-[1024px]:mx-auto min-[768px]:max-[1024px]:max-w-none">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {index === content.items.length - 1 && (
                    <div className="mt-8 hidden min-[768px]:max-[1024px]:absolute min-[768px]:max-[1024px]:bottom-0 min-[768px]:max-[1024px]:left-0 min-[768px]:max-[1024px]:mt-0 min-[768px]:max-[1024px]:block">
                      <BrandButton href={content.viewMenuHref}>
                        {content.viewMenuButton}
                      </BrandButton>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center min-[768px]:max-[1024px]:hidden">
          <BrandButton href={content.viewMenuHref}>{content.viewMenuButton}</BrandButton>
        </div>
      </div>

      <motion.img
        src={content.assets.leftLabel}
        alt={content.leftLabelAlt}
        className="menu-showcase__side-label menu-showcase__side-label--left pointer-events-none absolute z-30 hidden select-none min-[1025px]:block"
        style={{ y: leftY }}
        draggable={false}
      />

      <motion.img
        src={content.assets.rightLabel}
        alt={content.rightLabelAlt}
        className="menu-showcase__side-label menu-showcase__side-label--right pointer-events-none absolute z-30 hidden select-none min-[1025px]:block"
        style={{ y: rightY }}
        draggable={false}
      />
    </section>
  );
}

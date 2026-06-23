"use client";

import BrandButton from "@/components/BrandButton";
import { useEffect, useRef } from "react";

const menus = [
  {
    tag: "/images/menushowcase/经典.png",
    image: "/images/menushowcase/过桥米线.png",
    title: "过桥米线",
    text: "源自云南的非物质文化遗产，凭借“一汤锁鲜”的匠心智慧传承百年。云尚过桥米线提供多种汤底口味选择，并搭配12款精美配菜。食材与滚烫高汤分开出品，食用时按“先荤后素”依次烫熟，最后加入爽滑米线，滚烫高汤瞬间激发食材本味，鲜香扑鼻！",
  },
  {
    tag: "/images/menushowcase/人气.png",
    image: "/images/menushowcase/特色米线.png",
    title: "特色米线",
    text: "除了经典过桥米线，我们还将传统骨汤米线与独特风味完美融合，打造惊喜满满的特色米线系列！酸辣开胃的老坛酸菜鱼米线、甘香爽口的番茄肥牛米线、麻辣过瘾的川香爆肠旺米线……每一款都让人一口接一口，停不下来！还能自由搭配配菜，想怎么吃就怎么吃，打造你的专属米线体验！",
  },
  {
    tag: "/images/menushowcase/必点.png",
    image: "/images/menushowcase/凉菜小吃.png",
    title: "凉菜小吃",
    text: "云尚米线菜品丰富，除了经典米线，还有各式精美凉菜、小吃和甜品。香辣开胃的口水鸡、酸甜爽脆的土豆丝、每桌必点的夫妻肺片，款款都是开胃神器！还有盐酥鸡、奥尔良鸡翅、蒜泥炸豆腐等特色小吃，香酥可口，一口接一口，停不下来！",
  },
];


type MotionTransforms = {
  backgroundX: number;
  leftY: number;
  rightY: number;
};

const DESKTOP_INITIAL: MotionTransforms = {
  backgroundX: -400,
  leftY: 0,
  rightY: 400,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function rangeProgress(value: number, start: number, end: number) {
  return clamp((value - start) / (end - start), 0, 1);
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function getMotionTransforms(
  sectionRect: DOMRect,
  sectionHeight: number,
  viewportHeight: number,
  viewportWidth: number,
): MotionTransforms {
  const rawProgress = clamp(
    (viewportHeight - sectionRect.top) / (viewportHeight + sectionHeight),
    0,
    1,
  );

  if (viewportWidth < 768) {
    return {
      backgroundX: 0,
      leftY: 0,
      rightY: 400,
    };
  }

  const backgroundProgress = rangeProgress(rawProgress, 0.25, 0.9);
  const backgroundX = lerp(-400, -525, backgroundProgress);

  if (viewportWidth <= 1024) {
    return {
      backgroundX,
      leftY: 0,
      rightY: 400,
    };
  }

  const leftProgress = rangeProgress(rawProgress, 0.12, 0.95);
  const rightProgress = rangeProgress(rawProgress, 0.05, 0.85);

  return {
    backgroundX,
    leftY: lerp(0, 400, leftProgress),
    rightY: lerp(400, -160, rightProgress),
  };
}

export default function MenuShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLImageElement | null>(null);
  const leftLabelRef = useRef<HTMLImageElement | null>(null);
  const rightLabelRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let frameId = 0;

    const applyTransforms = () => {
      const section = sectionRef.current;
      if (!section) return;

      const transforms = getMotionTransforms(
        section.getBoundingClientRect(),
        section.offsetHeight,
        window.innerHeight,
        window.innerWidth,
      );

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(${transforms.backgroundX}px, 0, 0)`;
      }

      if (leftLabelRef.current) {
        leftLabelRef.current.style.transform = `translate3d(0, ${transforms.leftY}px, 0)`;
      }

      if (rightLabelRef.current) {
        rightLabelRef.current.style.transform = `translate3d(0, ${transforms.rightY}px, 0)`;
      }
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(applyTransforms);
    };

    applyTransforms();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fff4ec] px-6 py-20 min-[1025px]:px-12 min-[1025px]:py-28"
    >
      <img
        ref={backgroundRef}
        src="/images/menushowcase/背景云.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-10%] z-0 h-full w-[120%] max-w-none select-none object-cover will-change-transform"
        style={{
          transform: `translate3d(${DESKTOP_INITIAL.backgroundX}px, 0, 0)`,
        }}
        draggable={false}
      />

      <img
        ref={leftLabelRef}
        src="/images/menushowcase/一碗好米线.png"
        alt="一碗好米线"
        className="pointer-events-none absolute left-7 top-24 z-10 hidden w-[116px] select-none will-change-transform min-[1025px]:block"
        style={{ transform: `translate3d(0, ${DESKTOP_INITIAL.leftY}px, 0)` }}
        draggable={false}
      />

      <img
        ref={rightLabelRef}
        src="/images/menushowcase/半碗都是料.png"
        alt="半碗都是料"
        className="pointer-events-none absolute bottom-20 right-7 z-10 hidden w-[116px] select-none will-change-transform min-[1025px]:block"
        style={{ transform: `translate3d(0, ${DESKTOP_INITIAL.rightY}px, 0)` }}
        draggable={false}
      />

      <div className="relative z-20 mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-14 min-[900px]:grid-cols-3 min-[1025px]:gap-16">
          {menus.map((item) => (
            <article key={item.title} className="text-center">
              <div className="relative mx-auto max-w-[360px] overflow-visible">
                <div className="aspect-[304/390] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>

                <img
                  src={item.tag}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-12 w-[136px] rotate-[-8deg] select-none min-[1025px]:w-[146px]"
                  draggable={false}
                />
              </div>

              <div className="mt-7 flex items-center justify-center gap-3 leading-none">
                <img
                  src="/images/云-红字.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 translate-y-[3px] select-none"
                  draggable={false}
                />
                <h3 className="type-menu-category-title !text-[var(--color-red)] !leading-none">{item.title}</h3>
                <img
                  src="/images/云-红字.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 translate-y-[3px] select-none"
                  draggable={false}
                />
              </div>

              <p className="type-body-copy mx-auto mt-5 max-w-[360px] text-[#202020]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <BrandButton href="/menu">查看菜单</BrandButton>
        </div>
      </div>
    </section>
  );
}

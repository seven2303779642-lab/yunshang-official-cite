"use client";

import BrandButton from "@/components/BrandButton";
import { useEffect, useState } from "react";

const VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/H_a0OlznLLs?autoplay=1&rel=0&modestbranding=1";

export default function AboutIntro() {
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
    <section className="relative grid overflow-hidden bg-[var(--color-red)] text-white min-[1025px]:min-h-[560px] min-[1025px]:grid-cols-2">
      <div className="relative z-20 flex flex-col items-center justify-center px-[50px] py-[68px] text-center min-[1025px]:items-start min-[1025px]:justify-start min-[1025px]:p-[100px] min-[1025px]:text-left">
        <h2 className="type-display-title !text-white">
          一碗有温度的米线，
          <br />
          从匠心开始
        </h2>

        <p className="type-body-copy mt-8 max-w-[920px] text-white min-[1025px]:max-w-[476px]">
          云尚米线，传承云南百年米线文化，以滚烫鲜骨浓汤激发食材本味，
          醇厚鲜香，一口暖心！严选央企华润五丰米线，100%纯大米研磨，
          0胶添加，爽滑Q弹，吸汁入味。高汤精选优质鲜骨，慢熬12小时以上，
          浓郁纯正，无添加更安心。搭配本地新鲜食材，锁住天然美味。
          每一碗都是实打实的真材实料，肉足菜丰，汤鲜味美，满足感拉满！
        </p>

        <img
          src="/images/aboutintro-title.png"
          alt="不想做饭？来碗云尚米线！"
          className="mt-9 w-full max-w-[430px] origin-center -rotate-[5deg] select-none min-[1025px]:origin-left min-[1025px]:translate-x-1"
          draggable={false}
        />

        <BrandButton href="/about" className="mt-12 w-fit">
          关于云尚
        </BrandButton>
      </div>

      <img
        src="/images/云.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(50%+115px)] top-[185px] z-30 hidden h-[286px] w-[434px] -translate-x-1/2 select-none object-contain min-[1025px]:block"
        draggable={false}
      />

      <div className="relative h-[488px] overflow-hidden bg-black min-[1025px]:h-auto min-[1025px]:min-h-[560px]">
        <img
          src="/images/骨汤.webp"
          alt="云尚米线骨汤熬制画面"
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10" />

        <img
          src="/images/云.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-64px] top-[210px] z-20 block w-[235px] select-none min-[1025px]:hidden"
          draggable={false}
        />

        <button
          type="button"
          aria-label="播放云尚米线介绍视频"
          onClick={() => setIsVideoOpen(true)}
          className="group absolute left-1/2 top-1/2 z-30 flex h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white text-white transition-colors duration-300 hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="ml-[3px] h-[25px] w-[25px] fill-current"
          >
            <path d="M18.2 14.6C17.1 14 16 14.8 16 16.1v15.8c0 1.3 1.4 2.1 2.5 1.4l12.8-7.9c1-.6 1-2.1 0-2.7L18.2 14.6Z" />
          </svg>
        </button>
      </div>

      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="云尚米线介绍视频播放窗口"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            type="button"
            aria-label="关闭视频"
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
                title="云尚米线介绍视频"
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

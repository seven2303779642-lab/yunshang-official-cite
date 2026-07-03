import type { AboutContent } from "@/data/siteContent";

type AboutIntroProps = {
  content: AboutContent["intro"];
};

const ABOUT_INTRO_CLOUD_ICON = "/images/home/decorative/cloud-white-text.svg";

export default function AboutIntro({ content }: AboutIntroProps) {
  return (
    <section className="about-intro relative min-h-[460px] overflow-x-hidden bg-[var(--color-red)] px-10">
      <div className="about-intro-content relative z-[2] mx-auto flex min-h-[460px] max-w-[900px] flex-col items-center justify-center pb-[110px] pt-8 text-center">
        {content.title ? (
          <div className="about-intro__title-row mb-6">
            <img
              src={ABOUT_INTRO_CLOUD_ICON}
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              className="about-intro__title-icon h-6 w-6 shrink-0 translate-y-[3px] select-none"
              draggable={false}
            />
            <h2 className="about-intro__title">{content.title}</h2>
            <img
              src={ABOUT_INTRO_CLOUD_ICON}
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              className="about-intro__title-icon h-6 w-6 shrink-0 translate-y-[3px] select-none"
              draggable={false}
            />
          </div>
        ) : (
          <img
            src={content.icon}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            className="mb-6 h-10 w-10 shrink-0"
            draggable={false}
          />
        )}

        <div className="space-y-5">
          {content.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="type-body-copy text-white min-[768px]:text-[17px] min-[768px]:leading-[1.9]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="about-intro-wave" aria-hidden="true">
        <img
          src="/images/about/decorative/bolang-long.svg"
          alt=""
          className="about-intro-wave-img"
          draggable={false}
        />
      </div>
    </section>
  );
}

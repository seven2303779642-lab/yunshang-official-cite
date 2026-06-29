import type { AboutContent } from "@/data/siteContent";

type AboutIntroProps = {
  content: AboutContent["intro"];
};

export default function AboutIntro({ content }: AboutIntroProps) {
  return (
    <section className="bg-[var(--color-cream)] px-6 py-16 min-[768px]:px-12 min-[1025px]:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 min-[1025px]:grid-cols-2 min-[1025px]:gap-16">
        <div className="text-center min-[1025px]:text-left">
          <img
            src={content.icon}
            alt=""
            aria-hidden="true"
            className="mx-auto mb-6 h-10 w-10 min-[1025px]:mx-0"
            draggable={false}
          />

          <div className="space-y-5">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body-copy text-[#202020]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-sm bg-white shadow-sm">
          <img
            src={content.image}
            alt={content.imageAlt}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

import type { EventsContent } from "@/data/siteContent";

type EventsHeroProps = {
  content: EventsContent["hero"];
};

export default function EventsHero({ content }: EventsHeroProps) {
  return (
    <section className="events-hero">
      <div className="border-b border-[var(--color-red)]/15 bg-[var(--color-cream)] px-6 py-14 text-center min-[768px]:px-12 min-[1025px]:py-20">
        <div className="mx-auto max-w-[800px]">
          <h1 className="type-display-title text-[var(--color-red)]">
            {content.title}
          </h1>
          <p className="type-body-copy-emphasis mt-4 text-[#202020]">
            {content.subtitle}
          </p>
        </div>
      </div>

      {content.desktopImage && content.mobileImage && (
        <div className="relative h-[200px] overflow-hidden bg-black min-[768px]:h-[320px] min-[1025px]:h-[400px]">
          <picture className="absolute inset-0">
            <source media="(max-width: 1024px)" srcSet={content.mobileImage} />
            <img
              src={content.desktopImage}
              alt={content.imageAlt ?? ""}
              className="h-full w-full object-cover object-center"
              draggable={false}
            />
          </picture>
          <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        </div>
      )}
    </section>
  );
}

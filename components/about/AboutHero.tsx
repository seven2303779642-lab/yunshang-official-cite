import type { AboutContent } from "@/data/siteContent";

type AboutHeroProps = {
  content: AboutContent["hero"];
};

export default function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="relative h-[280px] overflow-hidden bg-black min-[768px]:h-[420px] min-[1025px]:h-[520px]">
      <picture className="absolute inset-0">
        <source media="(max-width: 1024px)" srcSet={content.mobileImage} />
        <img
          src={content.desktopImage}
          alt={content.alt}
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
      </picture>
      <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
    </section>
  );
}

import type { AboutContent } from "@/data/siteContent";

type AboutHeroProps = {
  content: AboutContent["hero"];
};

export default function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="about-hero relative min-h-[calc(100vh-76px)] overflow-hidden min-[1025px]:min-h-[calc(100vh-100px)]">
      <picture className="absolute inset-0 block h-full w-full">
        <source media="(max-width: 1024px)" srcSet={content.mobileImage} />
        <img
          src={content.desktopImage}
          alt={content.alt}
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
      </picture>
    </section>
  );
}

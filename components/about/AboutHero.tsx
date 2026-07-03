import type { AboutContent } from "@/data/siteContent";

type AboutHeroProps = {
  content: AboutContent["hero"];
};

export default function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="about-hero">
      <picture className="about-hero__picture">
        <source media="(max-width: 1024px)" srcSet={content.mobileImage} />
        <img
          src={content.desktopImage}
          alt={content.alt}
          className="about-hero__image"
          draggable={false}
        />
      </picture>
    </section>
  );
}

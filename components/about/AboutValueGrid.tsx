import FeatureCard from "@/components/ui/FeatureCard";
import type { AboutContent } from "@/data/siteContent";

const TITLE_ICON = "/images/about/decorative/white-icon.png";

type AboutValueGridProps = {
  content: AboutContent["values"];
};

export default function AboutValueGrid({ content }: AboutValueGridProps) {
  return (
    <section className="about-features">
      <div
        aria-hidden="true"
        className="about-features__bg"
        style={{
          backgroundImage:
            'url("/images/about/decorative/Key-Feature-Bg.png")',
        }}
      />

      <div className="about-features__grid features-grid">
        {content.items.map((item) => (
          <FeatureCard
            key={item.title}
            variant="about"
            imageSrc={item.image}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
            titleIconSrc={TITLE_ICON}
          />
        ))}
      </div>
    </section>
  );
}

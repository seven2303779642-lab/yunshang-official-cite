import FeatureCard from "@/components/ui/FeatureCard";
import type { AboutContent } from "@/data/siteContent";

const TITLE_ICON = "/images/about/decorative/white-icon.png";
const BACKGROUND_IMAGE_DEFAULT = "/images/about/decorative/Key-Feature-Bg.png";
const BACKGROUND_IMAGE_EN =
  "/images/about/decorative/big-white-clound-pattern-yunshang.svg";

type AboutValueGridProps = {
  content: AboutContent["values"];
  variant?: "default" | "en";
};

export default function AboutValueGrid({
  content,
  variant = "default",
}: AboutValueGridProps) {
  return (
    <section
      className={`about-features${variant === "en" ? " about-features--en" : ""}`}
    >
      <div
        aria-hidden="true"
        className="about-features__bg"
        style={{
          backgroundImage: `url("${
            variant === "en" ? BACKGROUND_IMAGE_EN : BACKGROUND_IMAGE_DEFAULT
          }")`,
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
            titleLines={item.titleLines}
            description={item.description}
            titleIconSrc={TITLE_ICON}
          />
        ))}
      </div>
    </section>
  );
}

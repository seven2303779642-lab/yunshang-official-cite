import FeatureCard from "@/components/ui/FeatureCard";
import type { SiteContent } from "@/data/siteContent";

const FEATURE_IMAGES = [
  {
    image: "/images/home/feature-cards/fc1-1.png",
    icon: "/images/home/feature-cards/fc1-2.png",
  },
  {
    image: "/images/home/feature-cards/fc2-1.png",
    icon: "/images/home/feature-cards/fc2-2.png",
  },
  {
    image: "/images/home/feature-cards/fc3-1.png",
    icon: "/images/home/feature-cards/fc3-2.png",
  },
];

type FeatureCardsProps = {
  content: SiteContent["home"]["featureCards"];
};

export default function FeatureCards({ content }: FeatureCardsProps) {
  return (
    <section className="home-features">
      <div
        aria-hidden="true"
        className="home-features__bg"
        style={{
          backgroundImage:
            'url("/images/home/feature-cards/featurecard-background.png")',
        }}
      />

      <div className="home-features__grid features-grid">
        {content.features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            variant="home"
            imageSrc={FEATURE_IMAGES[index].image}
            iconSrc={FEATURE_IMAGES[index].icon}
            feature={feature}
          />
        ))}
      </div>
    </section>
  );
}

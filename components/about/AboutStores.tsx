import BrandButton from "@/components/ui/BrandButton";
import type { AboutContent } from "@/data/siteContent";

const TITLE_ICON = "/images/about/decorative/group-1021.svg";

type AboutStoresProps = {
  content: AboutContent["stores"];
};

export default function AboutStores({ content }: AboutStoresProps) {
  return (
    <section className="about-stores">
      <div className="about-stores-inner">
        <h2 className="about-stores-title">
          <img
            src={TITLE_ICON}
            alt=""
            aria-hidden="true"
            className="about-stores-title-icon"
            draggable={false}
          />
          <span>{content.title}</span>
          <img
            src={TITLE_ICON}
            alt=""
            aria-hidden="true"
            className="about-stores-title-icon"
            draggable={false}
          />
        </h2>

        <div className="about-stores-visual">
          <img
            src="/images/about/decorative/white-clound-pattern-yunshang.svg"
            alt=""
            aria-hidden="true"
            className="about-stores-map-cloud"
            draggable={false}
          />
          <img
            src={content.mapImage}
            alt={content.mapAlt}
            className="about-stores-map"
            draggable={false}
          />
        </div>

        <div className="about-stores-cta">
          <BrandButton href={content.ctaHref} variant="wide">
            {content.ctaLabel}
          </BrandButton>
        </div>
      </div>
    </section>
  );
}

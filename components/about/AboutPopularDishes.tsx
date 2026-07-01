import BrandButton from "@/components/ui/BrandButton";
import type { AboutContent } from "@/data/siteContent";

const TITLE_ICON = "/images/about/decorative/white-icon.png";

const TAG_POSITIONS = [
  "about-popular-dishes-tag--1",
  "about-popular-dishes-tag--2",
  "about-popular-dishes-tag--3",
  "about-popular-dishes-tag--4",
];

type AboutPopularDishesProps = {
  content: AboutContent["popularDishes"];
};

export default function AboutPopularDishes({
  content,
}: AboutPopularDishesProps) {
  return (
    <section className="about-popular-dishes">
      <div className="about-popular-dishes-inner">
        <h2 className="about-popular-dishes-title">
          <img
            src={TITLE_ICON}
            alt=""
            aria-hidden="true"
            className="about-section-title-icon"
            draggable={false}
          />
          <span>{content.title}</span>
          <img
            src={TITLE_ICON}
            alt=""
            aria-hidden="true"
            className="about-section-title-icon"
            draggable={false}
          />
        </h2>

        <div className="about-popular-dishes-grid">
          {content.items.map((item, index) => (
            <article key={item.title} className="about-popular-dishes-card">
              <div className="about-popular-dishes-photo-wrap">
                <div className="about-popular-dishes-photo">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="about-popular-dishes-image"
                    draggable={false}
                  />
                </div>

                <img
                  src={item.tagImage}
                  alt=""
                  aria-hidden="true"
                  className={`about-popular-dishes-tag ${TAG_POSITIONS[index] ?? ""}`}
                  draggable={false}
                />
              </div>

              <h3 className="about-popular-dishes-name">{item.title}</h3>
              <p className="about-popular-dishes-tagline">{item.tagline}</p>
            </article>
          ))}
        </div>

        <div className="about-popular-dishes-cta">
          <BrandButton href={content.ctaHref}>{content.ctaLabel}</BrandButton>
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

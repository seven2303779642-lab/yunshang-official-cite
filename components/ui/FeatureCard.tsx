import type { FeatureCardContent } from "@/data/content/types";

type HomeFeatureCardProps = {
  variant: "home";
  imageSrc: string;
  iconSrc: string;
  feature: FeatureCardContent;
};

type AboutFeatureCardProps = {
  variant: "about";
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  titleIconSrc: string;
};

export type FeatureCardProps = HomeFeatureCardProps | AboutFeatureCardProps;

export default function FeatureCard(props: FeatureCardProps) {
  if (props.variant === "home") {
    const { imageSrc, iconSrc, feature } = props;

    return (
      <article className="feature-card">
        <div className="feature-card__image-wrap">
          <img
            src={imageSrc}
            alt={feature.imageAlt}
            className="feature-card__image"
            draggable={false}
          />
        </div>

        <div className="feature-card__content feature-card__content--home">
          <div className="feature-card__content-inner">
            <h3 className="feature-card__title type-feature-title">
              {feature.mobileTitleLines ? (
                <>
                  <span className="feature-card__title-mobile">
                    {feature.mobileTitleLines.map((line) => (
                      <span key={line} className="feature-card__title-line">
                        {line}
                      </span>
                    ))}
                  </span>
                  <span
                    className={`feature-card__title-desktop ${feature.nowrap ? "feature-card__title--nowrap" : ""}`}
                  >
                    {feature.title}
                  </span>
                </>
              ) : (
                <span
                  className={feature.nowrap ? "feature-card__title--nowrap" : ""}
                >
                  {feature.title}
                </span>
              )}
            </h3>

            <div className="feature-card__divider" aria-hidden="true" />

            <div className="feature-card__body feature-card__body--home">
              <img
                src={iconSrc}
                alt={feature.iconAlt}
                className="feature-card__icon"
                draggable={false}
              />

              <p className="feature-card__text type-body-copy-emphasis">
                {feature.lines.map((line) => (
                  <span key={line} className="feature-card__text-line">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  const { imageSrc, imageAlt, title, description, titleIconSrc } = props;

  return (
    <article className="feature-card">
      <div className="feature-card__image-wrap">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="feature-card__image"
          draggable={false}
        />
      </div>

      <div className="feature-card__content feature-card__content--about">
        <h3 className="feature-card__title feature-card__title--about type-feature-title">
          <img
            src={titleIconSrc}
            alt=""
            aria-hidden="true"
            className="feature-card__title-icon"
            draggable={false}
          />
          <span className="feature-card__title-text">{title}</span>
          <img
            src={titleIconSrc}
            alt=""
            aria-hidden="true"
            className="feature-card__title-icon"
            draggable={false}
          />
        </h3>

        <div className="feature-card__divider" aria-hidden="true" />

        <p className="feature-card__text feature-card__text--about type-body-copy">
          {description}
        </p>
      </div>
    </article>
  );
}

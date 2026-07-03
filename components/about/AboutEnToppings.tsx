import type { AboutEnToppingsContent } from "@/data/siteContent";

type AboutEnToppingsProps = {
  content: AboutEnToppingsContent;
};

export default function AboutEnToppings({ content }: AboutEnToppingsProps) {
  return (
    <section className="about-en-toppings">
      <div className="about-en-toppings__header">
        <h2 className="about-en-toppings__title">
          <img
            src={content.titleIcon}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            className="about-en-toppings__title-icon"
            draggable={false}
          />
          <span>{content.title}</span>
          <img
            src={content.titleIcon}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            className="about-en-toppings__title-icon"
            draggable={false}
          />
        </h2>
      </div>

      <div className="about-en-toppings__visual">
        <img
          src={content.desktopImage}
          alt={content.imageAlt}
          className="about-en-toppings__image about-en-toppings__image--desktop"
          draggable={false}
        />
        <img
          src={content.mobileImage}
          alt={content.imageAlt}
          className="about-en-toppings__image about-en-toppings__image--mobile"
          draggable={false}
        />
      </div>
    </section>
  );
}

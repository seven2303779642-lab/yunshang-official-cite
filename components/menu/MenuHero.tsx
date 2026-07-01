import type { MenuContent } from "@/data/siteContent";

type MenuHeroProps = {
  content: MenuContent["hero"];
};

export default function MenuHero({ content }: MenuHeroProps) {
  return (
    <section className="menu-hero bg-[#fff4ec]">
      <div className="menu-hero-banner">
        <h1 className="menu-hero-title type-display-title text-white">
          {content.title}
        </h1>
      </div>

      <div className="menu-hero-mobile-heading">
        <h1 className="type-display-title text-[var(--color-red)]">
          {content.title}
        </h1>
      </div>
    </section>
  );
}

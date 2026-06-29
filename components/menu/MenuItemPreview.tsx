import BrandButton from "@/components/ui/BrandButton";
import type { MenuContent } from "@/data/siteContent";

type MenuItemPreviewProps = {
  content: MenuContent["featuredItems"];
};

export default function MenuItemPreview({ content }: MenuItemPreviewProps) {
  return (
    <section className="menu-items bg-[#fff4ec] px-6 py-16 min-[768px]:px-12 min-[1025px]:py-24">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="type-display-title text-[var(--color-red)]">
          {content.title}
        </h2>
        <p className="type-body-copy-emphasis mt-4 text-[#202020]">
          {content.subtitle}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 min-[768px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="menu-item-card overflow-hidden border border-[var(--color-red)]/10 bg-white text-left"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>

              <div className="px-5 py-6">
                <h3 className="font-display text-[22px] font-medium leading-tight text-[var(--color-red)] min-[768px]:text-[24px]">
                  {item.title}
                </h3>
                <p className="type-body-copy mt-3 text-[#202020]">
                  {item.description}
                </p>

                {item.badges.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                    {item.badges.map((badge) => (
                      <li key={badge}>
                        <span className="menu-item-badge">{badge}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <BrandButton href={content.ctaHref}>{content.ctaLabel}</BrandButton>
        </div>
      </div>
    </section>
  );
}

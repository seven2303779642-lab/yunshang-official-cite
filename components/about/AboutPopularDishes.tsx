import BrandButton from "@/components/ui/BrandButton";
import type { AboutContent } from "@/data/siteContent";

type AboutPopularDishesProps = {
  content: AboutContent["popularDishes"];
};

export default function AboutPopularDishes({ content }: AboutPopularDishesProps) {
  return (
    <section className="bg-[#fff4ec] px-6 py-16 min-[768px]:px-12 min-[1025px]:py-24">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="type-display-title text-[var(--color-red)]">
          {content.title}
        </h2>
        <p className="type-body-copy-emphasis mt-4 text-[#202020]">
          {content.subtitle}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 min-[768px]:grid-cols-2 min-[1025px]:grid-cols-4">
          {content.items.map((item) => (
            <article key={item.title} className="overflow-hidden bg-white">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>

              <div className="px-4 py-6">
                <h3 className="type-menu-category-title !text-[var(--color-red)]">
                  {item.title}
                </h3>
                <p className="type-body-copy mt-3 text-[#202020]">{item.tagline}</p>
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

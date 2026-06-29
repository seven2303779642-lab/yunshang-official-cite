import type { AboutContent } from "@/data/siteContent";

type AboutValueGridProps = {
  content: AboutContent["values"];
};

export default function AboutValueGrid({ content }: AboutValueGridProps) {
  return (
    <section className="bg-[var(--color-red)] px-6 py-16 text-white min-[768px]:px-12 min-[1025px]:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="type-display-title mb-10 text-center !text-white min-[1025px]:mb-14">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 min-[768px]:grid-cols-2 min-[1025px]:grid-cols-4">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden bg-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>

              <div className="px-5 py-6 text-center">
                <h3 className="type-feature-title !text-white">{item.title}</h3>
                <p className="type-body-copy mt-4 text-white/90">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

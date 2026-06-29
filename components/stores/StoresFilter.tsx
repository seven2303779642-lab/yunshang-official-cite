import type { StoresContent } from "@/data/siteContent";

type StoresFilterProps = {
  content: StoresContent["filters"];
};

export default function StoresFilter({ content }: StoresFilterProps) {
  return (
    <section className="stores-filters bg-white px-6 py-12 min-[768px]:px-12 min-[1025px]:py-16">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="type-feature-title text-[var(--color-red)]">
          {content.title}
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3 min-[768px]:gap-4">
          {content.items.map((item, index) => (
            <button
              key={item}
              type="button"
              className={
                index === 0
                  ? "stores-filter-btn stores-filter-btn--active"
                  : "stores-filter-btn"
              }
              aria-pressed={index === 0}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

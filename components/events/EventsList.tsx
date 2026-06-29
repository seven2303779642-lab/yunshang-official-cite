import Link from "next/link";
import type { EventsContent } from "@/data/siteContent";

type EventsListProps = {
  content: EventsContent["list"];
};

export default function EventsList({ content }: EventsListProps) {
  return (
    <section className="events-list bg-[#fff4ec] px-6 py-16 min-[768px]:px-12 min-[1025px]:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="type-display-title text-[var(--color-red)]">
            {content.title}
          </h2>
          <p className="type-body-copy-emphasis mt-4 text-[#202020]">
            {content.subtitle}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-8 min-[768px]:grid-cols-2">
          {content.items.map((item) => (
            <li key={item.title}>
              <article className="events-card overflow-hidden border border-[var(--color-red)]/10 bg-white text-left">
                <div className="aspect-[16/9] overflow-hidden bg-[var(--color-cream)]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>

                <div className="px-5 py-6 min-[768px]:px-6">
                  {item.tag && (
                    <span className="events-card-tag">{item.tag}</span>
                  )}

                  <h3 className="font-display text-[22px] font-medium leading-tight text-[var(--color-red)] min-[768px]:text-[24px]">
                    {item.title}
                  </h3>

                  <time
                    dateTime={item.date}
                    className="events-card-date mt-2 block"
                  >
                    {item.date}
                  </time>

                  <p className="type-body-copy mt-3 text-[#202020]">
                    {item.excerpt}
                  </p>

                  <div className="mt-6">
                    <Link href={item.href} className="events-card-link">
                      {content.ctaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

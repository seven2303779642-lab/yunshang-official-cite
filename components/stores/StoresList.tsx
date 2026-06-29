import Link from "next/link";
import type { Locale, StoresContent } from "@/data/siteContent";

type StoresListProps = {
  content: StoresContent["locations"];
  locale: Locale;
};

const detailLabels: Record<
  Locale,
  { address: string; phone: string; hours: string }
> = {
  zh: { address: "地址", phone: "电话", hours: "营业时间" },
  en: { address: "Address", phone: "Phone", hours: "Hours" },
};

export default function StoresList({ content, locale }: StoresListProps) {
  const labels = detailLabels[locale];

  return (
    <section className="stores-list bg-[#fff4ec] px-6 py-16 min-[768px]:px-12 min-[1025px]:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="type-display-title text-[var(--color-red)]">
            {content.title}
          </h2>
          <p className="type-body-copy-emphasis mt-4 text-[#202020]">
            {content.subtitle}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-8 min-[768px]:grid-cols-2 min-[1025px]:gap-10">
          {content.items.map((store) => (
            <li key={store.name}>
              <article className="stores-location-card overflow-hidden border border-[var(--color-red)]/10 bg-white">
                <div className="aspect-[16/9] overflow-hidden bg-[var(--color-cream)]">
                  <img
                    src={store.image}
                    alt={store.imageAlt}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>

                <div className="px-5 py-6 min-[768px]:px-6">
                  <h3 className="font-display text-[22px] font-medium leading-tight text-[var(--color-red)] min-[768px]:text-[24px]">
                    {store.name}
                  </h3>
                  <p className="stores-location-meta mt-2">
                    {store.province} · {store.region}
                  </p>

                  <dl className="stores-location-details mt-4 space-y-2">
                    <div>
                      <dt className="stores-location-label">{labels.address}</dt>
                      <dd className="type-body-copy text-[#202020]">
                        {store.address}
                      </dd>
                    </div>
                    <div>
                      <dt className="stores-location-label">{labels.phone}</dt>
                      <dd className="type-body-copy text-[#202020]">
                        {store.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="stores-location-label">{labels.hours}</dt>
                      <dd className="type-body-copy text-[#202020]">
                        {store.hours}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6">
                    <Link
                      href={store.directionsHref}
                      className="stores-directions-link"
                    >
                      {content.directionsLabel}
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

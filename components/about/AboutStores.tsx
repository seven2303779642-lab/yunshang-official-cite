import StoresButton from "@/components/ui/StoresButton";
import type { AboutContent } from "@/data/siteContent";

type AboutStoresProps = {
  content: AboutContent["stores"];
};

export default function AboutStores({ content }: AboutStoresProps) {
  return (
    <section className="bg-[var(--color-cream)] px-6 py-16 min-[768px]:px-12 min-[1025px]:py-24">
      <div className="mx-auto max-w-[1000px] text-center">
        <h2 className="type-display-title text-[var(--color-red)]">
          {content.title}
        </h2>
        <p className="type-body-copy-emphasis mt-4 text-[#202020]">
          {content.subtitle}
        </p>

        <div className="mt-10 overflow-hidden bg-white shadow-sm">
          <img
            src={content.mapImage}
            alt={content.mapAlt}
            className="h-auto w-full"
            draggable={false}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <StoresButton href={content.ctaHref} label={content.ctaLabel} />
        </div>
      </div>
    </section>
  );
}

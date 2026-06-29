import type { StoresContent } from "@/data/siteContent";

type StoresHeroProps = {
  content: StoresContent["hero"];
};

export default function StoresHero({ content }: StoresHeroProps) {
  return (
    <section className="stores-hero border-b border-[var(--color-red)]/15 bg-[var(--color-cream)] px-6 py-14 text-center min-[768px]:px-12 min-[1025px]:py-20">
      <div className="mx-auto max-w-[800px]">
        <h1 className="type-display-title text-[var(--color-red)]">
          {content.title}
        </h1>
        <p className="type-body-copy-emphasis mt-4 text-[#202020]">
          {content.subtitle}
        </p>
      </div>
    </section>
  );
}

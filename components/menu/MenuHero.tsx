import type { MenuContent } from "@/data/siteContent";

type MenuHeroProps = {
  content: MenuContent["hero"];
};

export default function MenuHero({ content }: MenuHeroProps) {
  return (
    <section className="menu-hero border-b border-[var(--color-red)]/15 bg-[var(--color-cream)] px-6 py-14 text-center min-[768px]:px-12 min-[1025px]:py-20">
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

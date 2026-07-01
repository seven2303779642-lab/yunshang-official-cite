import MenuContent from "@/components/menu/MenuContent";
import MenuHero from "@/components/menu/MenuHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Locale, MenuContent as MenuContentType } from "@/data/siteContent";

type MenuPageProps = {
  content: MenuContentType;
  locale: Locale;
};

export function MenuPage({ content, locale }: MenuPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <MenuHero content={content.hero} />
        <MenuContent content={content} locale={locale} />
      </main>
      <Footer />
    </>
  );
}

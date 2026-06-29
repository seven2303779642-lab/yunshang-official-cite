import MenuCategoryGrid from "@/components/menu/MenuCategoryGrid";
import MenuHero from "@/components/menu/MenuHero";
import MenuItemPreview from "@/components/menu/MenuItemPreview";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Locale, MenuContent } from "@/data/siteContent";

type MenuPageProps = {
  content: MenuContent;
  locale: Locale;
};

export function MenuPage({ content }: MenuPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <MenuHero content={content.hero} />
        <MenuCategoryGrid content={content.categories} />
        <MenuItemPreview content={content.featuredItems} />
      </main>
      <Footer />
    </>
  );
}

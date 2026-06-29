import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutPopularDishes from "@/components/about/AboutPopularDishes";
import AboutStores from "@/components/about/AboutStores";
import AboutValueGrid from "@/components/about/AboutValueGrid";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { AboutContent, Locale } from "@/data/siteContent";

type AboutPageProps = {
  content: AboutContent;
  locale: Locale;
};

export function AboutPage({ content }: AboutPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero content={content.hero} />
        <AboutIntro content={content.intro} />
        <AboutValueGrid content={content.values} />
        <AboutPopularDishes content={content.popularDishes} />
        <AboutStores content={content.stores} />
      </main>
      <Footer />
    </>
  );
}

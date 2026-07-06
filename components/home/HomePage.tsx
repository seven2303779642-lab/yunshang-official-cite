import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Locale, SiteContent } from "@/data/siteContent";
import AboutIntro from "./AboutIntro";
import FeatureCards from "./FeatureCards";
import HeroSlider from "./HeroSlider";
import MenuShowcase from "./MenuShowcase";
import OrderBanner from "./OrderBanner";
import StoreBanner from "./StoreBanner";

type HomePageProps = {
  content: SiteContent;
  locale: Locale;
};

export default function HomePage({ content, locale }: HomePageProps) {
  return (
    <>
      <Navbar />
      <main>
        <div id="hero">
          <HeroSlider content={content.home.heroSlider} />
        </div>
        <div id="intro">
          <AboutIntro content={content.home.aboutIntro} />
        </div>
        <div id="features">
          <FeatureCards content={content.home.featureCards} />
        </div>
        <StoreBanner content={content.home.storeBanner} locale={locale} />
        <div id="menu-showcase">
          <MenuShowcase content={content.home.menuShowcase} locale={locale} />
        </div>
        <OrderBanner content={content.home.orderBanner} />
      </main>
      <Footer />
    </>
  );
}

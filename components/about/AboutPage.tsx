import AboutEnBridge from "@/components/about/AboutEnBridge";
import AboutEnToppings from "@/components/about/AboutEnToppings";
import AboutEnVideo from "@/components/about/AboutEnVideo";
import AboutGallery from "@/components/about/AboutGallery";
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
        <div id="hero">
          <AboutHero content={content.hero} />
        </div>
        <div id="intro">
          <AboutIntro content={content.intro} />
        </div>
        {content.enSections ? (
          <>
            <AboutEnToppings content={content.enSections.toppings} />
            <AboutEnBridge content={content.enSections.bridge} />
          </>
        ) : null}
        <div id="features">
          <AboutValueGrid
            content={content.values}
            variant={content.enSections ? "en" : "default"}
          />
        </div>
        {content.enSections ? (
          <AboutEnVideo content={content.enSections.video} />
        ) : (
          <AboutGallery />
        )}
        <AboutPopularDishes content={content.popularDishes} />
        <AboutStores content={content.stores} />
      </main>
      <Footer />
    </>
  );
}

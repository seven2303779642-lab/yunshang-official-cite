import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StoresFilter from "@/components/stores/StoresFilter";
import StoresHero from "@/components/stores/StoresHero";
import StoresList from "@/components/stores/StoresList";
import type { Locale, StoresContent } from "@/data/siteContent";

type StoresPageProps = {
  content: StoresContent;
  locale: Locale;
};

export function StoresPage({ content, locale }: StoresPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <StoresHero content={content.hero} />
        <StoresFilter content={content.filters} />
        <StoresList content={content.locations} locale={locale} />
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LocationsContent from "@/components/locations/LocationsContent";
import LocationsHero from "@/components/locations/LocationsHero";
import type { Locale, LocationsContent as LocationsContentType } from "@/data/siteContent";

type LocationsPageProps = {
  content: LocationsContentType;
  locale: Locale;
};

export function LocationsPage({ content, locale }: LocationsPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <LocationsHero content={content.hero} />
        <LocationsContent
          locale={locale}
          directionsLabel={content.locations.directionsLabel}
          filterAria={content.filterAria}
        />
      </main>
      <Footer />
    </>
  );
}

import PageBanner from "@/components/common/PageBanner";
import type { LocationsContent } from "@/data/siteContent";

type LocationsHeroProps = {
  content: LocationsContent["hero"];
};

export default function LocationsHero({ content }: LocationsHeroProps) {
  return (
    <PageBanner
      title={content.title}
      subtitle={content.subtitle}
      imageSrc="/images/locations/banner/locations-banner.jpg"
      imageAlt={content.title}
      showMobileText={false}
    />
  );
}

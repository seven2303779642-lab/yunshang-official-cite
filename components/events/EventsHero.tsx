import PageBanner from "@/components/common/PageBanner";
import { getEventsBannerImage } from "@/data/events";
import type { EventsContent } from "@/data/siteContent";

type EventsHeroProps = {
  content: EventsContent["hero"];
};

export default function EventsHero({ content }: EventsHeroProps) {
  const imageSrc =
    getEventsBannerImage() ?? content.desktopImage ?? content.mobileImage;

  if (!imageSrc) {
    return null;
  }

  return (
    <PageBanner
      title={content.title}
      imageSrc={imageSrc}
      imageAlt={content.imageAlt ?? content.title}
      className="page-banner--events"
    />
  );
}

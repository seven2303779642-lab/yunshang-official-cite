import EventsHero from "@/components/events/EventsHero";
import EventsList from "@/components/events/EventsList";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { EventsContent, Locale } from "@/data/siteContent";

type EventsPageProps = {
  content: EventsContent;
  locale: Locale;
};

export function EventsPage({ content, locale }: EventsPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <EventsHero content={content.hero} />
        <EventsList locale={locale} />
      </main>
      <Footer />
    </>
  );
}

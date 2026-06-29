import { EventsPage } from "@/components/events/EventsPage";
import { enContent } from "@/data/siteContent";

export default function Page() {
  return <EventsPage content={enContent.events} locale="en" />;
}

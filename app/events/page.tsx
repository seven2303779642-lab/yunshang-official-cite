import { EventsPage } from "@/components/events/EventsPage";
import { zhContent } from "@/data/siteContent";

export default function Page() {
  return <EventsPage content={zhContent.events} locale="zh" />;
}

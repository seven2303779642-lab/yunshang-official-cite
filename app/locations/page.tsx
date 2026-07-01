import { LocationsPage } from "@/components/locations/LocationsPage";
import { zhContent } from "@/data/siteContent";

export default function Page() {
  return <LocationsPage content={zhContent.locations} locale="zh" />;
}

import { LocationsPage } from "@/components/locations/LocationsPage";
import { enContent } from "@/data/siteContent";

export default function Page() {
  return <LocationsPage content={enContent.locations} locale="en" />;
}

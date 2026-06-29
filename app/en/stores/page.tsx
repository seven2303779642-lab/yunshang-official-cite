import { StoresPage } from "@/components/stores/StoresPage";
import { enContent } from "@/data/siteContent";

export default function Page() {
  return <StoresPage content={enContent.stores} locale="en" />;
}

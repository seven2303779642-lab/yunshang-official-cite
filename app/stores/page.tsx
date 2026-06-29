import { StoresPage } from "@/components/stores/StoresPage";
import { zhContent } from "@/data/siteContent";

export default function Page() {
  return <StoresPage content={zhContent.stores} locale="zh" />;
}

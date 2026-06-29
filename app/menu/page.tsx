import { MenuPage } from "@/components/menu/MenuPage";
import { zhContent } from "@/data/siteContent";

export default function Page() {
  return <MenuPage content={zhContent.menu} locale="zh" />;
}

import { MenuPage } from "@/components/menu/MenuPage";
import { enContent } from "@/data/siteContent";

export default function Page() {
  return <MenuPage content={enContent.menu} locale="en" />;
}

import { AboutPage } from "@/components/about/AboutPage";
import { zhContent } from "@/data/siteContent";

export default function Page() {
  return <AboutPage content={zhContent.about} locale="zh" />;
}

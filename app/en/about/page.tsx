import { AboutPage } from "@/components/about/AboutPage";
import { enContent } from "@/data/siteContent";

export default function Page() {
  return <AboutPage content={enContent.about} locale="en" />;
}

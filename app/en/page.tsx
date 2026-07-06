import HomePage from "@/components/home/HomePage";
import { enContent } from "@/data/siteContent";

export default function EnglishHomePage() {
  return (
    <div className="home-page--en">
      <HomePage content={enContent} locale="en" />
    </div>
  );
}

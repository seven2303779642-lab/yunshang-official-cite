import PageBanner from "@/components/common/PageBanner";
import type { MenuContent } from "@/data/siteContent";

type MenuHeroProps = {
  content: MenuContent["hero"];
};

export default function MenuHero({ content }: MenuHeroProps) {
  return (
    <PageBanner
      title={content.title}
      imageSrc="/images/menu/banner/banner.jpg"
      imageAlt={content.title}
    />
  );
}

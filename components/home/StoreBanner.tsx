import BrandButton from "@/components/ui/BrandButton";
import type { SiteContent } from "@/data/siteContent";

type StoreBannerProps = {
  content: SiteContent["home"]["storeBanner"];
};

export default function StoreBanner({ content }: StoreBannerProps) {
  return (
    <section className="relative h-[430px] overflow-hidden bg-black min-[768px]:h-[530px] min-[1025px]:h-[520px]">
      <img
        src="/images/home/store-banner/stores.jpg"
        alt={content.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="type-display-title !text-white">
          {content.title}
        </h2>

        <p className="type-body-copy-emphasis mt-[20px] text-white">
          {content.subtitle}
        </p>

        <div className="relative mt-7 inline-flex items-center justify-center">
          <BrandButton href={content.storesButtonHref} variant="wide">
            {content.storesButton}
          </BrandButton>
        </div>
      </div>
    </section>
  );
}

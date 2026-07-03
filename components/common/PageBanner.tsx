import Image from "next/image";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  showMobileText?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  className,
  titleClassName,
  subtitleClassName,
  showMobileText = true,
}: PageBannerProps) {
  return (
    <section className={cn("page-banner bg-[#fff4ec]", className)}>
      <div className="page-banner__media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="page-banner__image"
          draggable={false}
        />
        <div className="page-banner__overlay" aria-hidden="true" />
        <div className="page-banner__copy">
          <h1
            className={cn("page-banner__title text-white", titleClassName)}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "page-banner__subtitle type-body-copy text-white",
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      {showMobileText ? (
        <div className="page-banner__mobile-copy">
          <h1 className="page-banner__title text-[var(--color-red)]">
            {title}
          </h1>
          {subtitle ? (
            <p className="type-body-copy mt-4 text-[#202020]">{subtitle}</p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

"use client";

import { useOrderPopup } from "@/components/order/OrderPopupContext";
import {
  enContent,
  getLanguageFromPathname,
  zhContent,
} from "@/data/siteContent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SOCIAL_ICONS = [
  {
    href: "#",
    icon: "/images/common/logos/facebook.svg",
  },
  {
    href: "#",
    icon: "/images/common/logos/ins.svg",
  },
  {
    href: "#",
    icon: "/images/common/logos/redbook.svg",
  },
];

function FooterLink({
  href,
  label,
  opensOrderPopup = false,
}: {
  href: string;
  label: string;
  opensOrderPopup?: boolean;
}) {
  const { openOrderPopup } = useOrderPopup();
  const sharedClassName =
    "type-footer-link relative isolate px-4 py-0.5 text-white transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-[-8px] before:inset-y-[-4px] before:-z-10 before:scale-x-50 before:scale-y-75 before:bg-white before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:text-[var(--color-red)] hover:before:scale-x-100 hover:before:scale-y-100 hover:before:opacity-100";

  if (opensOrderPopup) {
    return (
      <button
        type="button"
        className={`${sharedClassName} cursor-pointer border-0 bg-transparent`}
        onClick={openOrderPopup}
      >
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {label}
    </Link>
  );
}

function FooterLinkColumn({
  links,
}: {
  links: Array<{
    href: string;
    label: string;
    opensOrderPopup?: boolean;
  }>;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src="/images/home/decorative/cloud-white-text.svg"
        alt=""
        width={34}
        height={34}
        className="h-[22px] w-[22px]"
        aria-hidden="true"
      />

      {links.map((item) => (
        <FooterLink
          key={`${item.label}-${item.href}`}
          href={item.href}
          label={item.label}
          opensOrderPopup={item.opensOrderPopup}
        />
      ))}
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const language = getLanguageFromPathname(pathname);
  const footer = language === "en" ? enContent.footer : zhContent.footer;

  return (
    <footer className="relative overflow-visible bg-[var(--color-red)]">
      {/* Floating top decoration: sits above footer and covers the previous section */}
      <div
        className="pointer-events-none absolute left-0 top-[-80px] z-20 h-[80px] w-full bg-repeat-x"
        style={{
          backgroundImage: "url('/images/common/footer/footer-bolang-up.png')",
          backgroundPosition: "center top",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/common/footer/footer-icons.svg"
          alt=""
          width={420}
          height={96}
          className="absolute left-1/2 top-[-46px] z-30 h-[86px] w-auto -translate-x-1/2"
          aria-hidden="true"
        />
      </div>

      <div className="relative min-h-[350px] overflow-hidden bg-[var(--color-red)] px-10 py-[60px] text-white max-[767px]:px-8">
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-[140px] w-full bg-repeat-x"
          style={{
            backgroundImage: "url('/images/common/footer/footer-bolang-bottom.png')",
            backgroundPosition: "center bottom",
            backgroundSize: "auto 100%",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex max-w-[1200px] items-start justify-between gap-16 max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-start max-[767px]:gap-9">
          <div className="flex w-[170px] flex-col items-center min-[768px]:ml-14 max-[767px]:w-[170px] max-[767px]:flex-col-reverse max-[767px]:gap-7 max-[767px]:ml-0">
            <Link href={footer.homeHref} aria-label={footer.homeAriaLabel}>
              <Image
                src="/images/common/logos/云尚-2.png"
                alt={footer.logoAlt}
                width={260}
                height={120}
                className="h-auto w-full max-w-[170px]"
              />
            </Link>

            <div className="mt-6 flex w-full items-center justify-between max-[767px]:mt-0 max-[767px]:w-[170px]">
              {footer.social.map((item, index) => (
                <Link
                  key={item.label}
                  href={SOCIAL_ICONS[index].href}
                  aria-label={item.ariaLabel}
                >
                  <Image
                    src={SOCIAL_ICONS[index].icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-[22px] w-[22px]"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-start justify-center gap-24 max-[767px]:w-full max-[767px]:gap-20">
            <FooterLinkColumn links={footer.linksLeft} />
            <FooterLinkColumn links={footer.linksRight} />
          </div>

          <div className="flex flex-col items-center">
            <div className="type-footer-support mb-4 text-white">
              {footer.wechatSupport}
            </div>
            <Image
              src="/images/common/footer/service-barcode.png"
              alt={footer.wechatQrAlt}
              width={140}
              height={140}
              className="h-[120px] w-[120px] rounded-[10px]"
            />
          </div>
        </div>
      </div>

      <div className="relative flex h-[60px] items-center justify-center bg-[var(--color-cream)] px-10 text-[var(--color-red)]">
        <Image
          src="/images/home/decorative/cloud-red-text.svg"
          alt=""
          width={28}
          height={28}
          className="absolute left-[13%] h-7 w-7 max-[767px]:left-6"
          aria-hidden="true"
        />

        <p className="type-footer-copyright w-[706px] max-w-full text-center text-[var(--color-red)]">
          <span>{footer.copyright}</span>
          <span className="max-[767px]:block">{footer.copyrightMobile}</span>
        </p>

        <Image
          src="/images/home/decorative/cloud-red-text.svg"
          alt=""
          width={28}
          height={28}
          className="absolute right-[13%] h-7 w-7 max-[767px]:right-6"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}

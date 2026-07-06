import Link from "next/link";
import type { ReactNode } from "react";
import { orderBannerEnMobileButtonAssets } from "@/data/orderBannerButtonAssets";
import { isExternalHref } from "@/data/orderLinks";
import "./order-banner-image-button.css";

type OrderBannerImageButtonProps = {
  href: string;
  children: ReactNode;
};

export default function OrderBannerImageButton({
  href,
  children,
}: OrderBannerImageButtonProps) {
  const external = isExternalHref(href);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="order-banner-image-button"
    >
      <img
        src={orderBannerEnMobileButtonAssets.default}
        alt=""
        aria-hidden="true"
        className="order-banner-image-button__bg order-banner-image-button__bg--default"
        draggable={false}
      />
      <img
        src={orderBannerEnMobileButtonAssets.hover}
        alt=""
        aria-hidden="true"
        className="order-banner-image-button__bg order-banner-image-button__bg--hover"
        draggable={false}
      />
      <span className="order-banner-image-button__label">{children}</span>
    </Link>
  );
}

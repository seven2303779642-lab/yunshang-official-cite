import Link from "next/link";
import type { ReactNode } from "react";
import { isExternalHref } from "@/data/orderLinks";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type BrandButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "section" | "navbar" | "wide" | "light";
};

function RedBrandButtonVisual({
  children,
  labelClass,
  variant,
}: {
  children: ReactNode;
  labelClass: string;
  variant: BrandButtonProps["variant"];
}) {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-[3px] bg-white" />

      <div
        aria-hidden="true"
        className="absolute inset-[6px] bg-[var(--color-red)]"
      />

      <div
        className={cn(
          "absolute inset-[9px] z-20 flex items-center justify-center bg-transparent text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-red)]",
          labelClass,
          variant === "wide" && "whitespace-nowrap px-3",
        )}
      >
        {children}
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 168 46"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
      >
        <g
          stroke="var(--color-red)"
          strokeLinecap="butt"
          className="transition-all duration-300 [stroke-width:1] group-hover:[stroke-width:2]"
        >
          <line x1="1" y1="1" x2="6" y2="6" />
          <line x1="167" y1="1" x2="162" y2="6" />
          <line x1="1" y1="45" x2="6" y2="40" />
          <line x1="167" y1="45" x2="162" y2="40" />
        </g>
      </svg>
    </>
  );
}

function LightBrandButtonVisual({
  children,
  labelClass,
}: {
  children: ReactNode;
  labelClass: string;
}) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 border-[3px] border-white bg-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-[6px] border border-white bg-transparent"
      />

      <div
        className={cn(
          "absolute inset-[9px] z-20 flex items-center justify-center bg-transparent font-normal text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-red)]",
          labelClass,
        )}
      >
        {children}
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 168 46"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
      >
        <g
          stroke="#ffffff"
          strokeLinecap="butt"
          className="transition-all duration-300 [stroke-width:1] group-hover:[stroke-width:2]"
        >
          <line x1="1" y1="1" x2="6" y2="6" />
          <line x1="167" y1="1" x2="162" y2="6" />
          <line x1="1" y1="45" x2="6" y2="40" />
          <line x1="167" y1="45" x2="162" y2="40" />
        </g>
      </svg>
    </>
  );
}

export default function BrandButton({
  href,
  children,
  className,
  onClick,
  variant = "section",
}: BrandButtonProps) {
  const isLight = variant === "light";

  const sizeClass =
    variant === "wide"
      ? "h-[46px] min-w-[220px]"
      : "h-[46px] min-w-[168px]";

  const labelClass =
    variant === "navbar"
      ? "text-[18px] font-normal leading-none"
      : "text-[20px] font-normal leading-none min-[768px]:text-[26px]";

  const sharedClassName = cn(
    "group relative block",
    isLight ? "bg-transparent" : "bg-[var(--color-red)]",
    sizeClass,
    className,
  );
  const sharedStyle = { fontFamily: "var(--font-display)" };

  const visual = isLight ? (
    <LightBrandButtonVisual labelClass={labelClass}>
      {children}
    </LightBrandButtonVisual>
  ) : (
    <RedBrandButtonVisual labelClass={labelClass} variant={variant}>
      {children}
    </RedBrandButtonVisual>
  );

  if (!href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={sharedClassName}
        style={sharedStyle}
      >
        {visual}
      </button>
    );
  }

  const external = isExternalHref(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={sharedClassName}
      style={sharedStyle}
    >
      {visual}
    </Link>
  );
}

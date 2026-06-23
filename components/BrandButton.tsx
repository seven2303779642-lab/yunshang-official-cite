import Link from "next/link";
import type { ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type BrandButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function BrandButton({
  href,
  children,
  className,
  onClick,
}: BrandButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative block h-[46px] min-w-[168px] bg-[var(--color-red)]",
        className,
      )}
      style={{ fontFamily: "var(--font-display)" }}
    >
      <div aria-hidden="true" className="absolute inset-[3px] bg-white" />

      <div
        aria-hidden="true"
        className="absolute inset-[6px] bg-[var(--color-red)]"
      />

      <div className="absolute inset-[9px] z-20 flex items-center justify-center bg-transparent text-lg font-bold leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-red)]">
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
    </Link>
  );
}

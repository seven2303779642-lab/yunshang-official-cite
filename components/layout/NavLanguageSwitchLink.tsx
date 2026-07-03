"use client";

import { getLanguageSwitchHref } from "@/data/content/languageSwitch";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";

type NavLanguageSwitchLinkProps = {
  className: string;
  ariaLabel: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavLanguageSwitchLinkInner({
  className,
  ariaLabel,
  children,
  onClick,
}: NavLanguageSwitchLinkProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  const href = useMemo(
    () => getLanguageSwitchHref(pathname, searchParams.toString(), hash),
    [pathname, searchParams, hash],
  );

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function NavLanguageSwitchLinkFallback({
  className,
  ariaLabel,
  children,
  onClick,
}: NavLanguageSwitchLinkProps) {
  const pathname = usePathname();
  const href = getLanguageSwitchHref(pathname);

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function NavLanguageSwitchLink(props: NavLanguageSwitchLinkProps) {
  return (
    <Suspense fallback={<NavLanguageSwitchLinkFallback {...props} />}>
      <NavLanguageSwitchLinkInner {...props} />
    </Suspense>
  );
}

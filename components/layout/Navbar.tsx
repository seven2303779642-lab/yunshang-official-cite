"use client";

import BrandButton from "@/components/ui/BrandButton";
import {
  enContent,
  getLanguageFromPathname,
  zhContent,
} from "@/data/siteContent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const NAV_ITEM_CONFIG = [
  { key: "home", zhHref: "/", enHref: "/en", labelKey: "home" as const },
  { key: "about", zhHref: "/about", enHref: "/en/about", labelKey: "about" as const },
  { key: "menu", zhHref: "/menu", enHref: "/en/menu", labelKey: "menu" as const },
  { key: "locations", zhHref: "/locations", enHref: "/en/locations", labelKey: "stores" as const },
  { key: "events", zhHref: "/events", enHref: "/en/events", labelKey: "events" as const },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isNavItemActive(
  pathname: string,
  zhHref: string,
  enHref: string,
  language: "zh" | "en",
) {
  const href = language === "en" ? enHref : zhHref;

  if (href === "/" || href === "/en") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const language = getLanguageFromPathname(pathname);
  const content = language === "en" ? enContent : zhContent;
  const nav = content.nav;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = language;
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navBaseClass = useMemo(
    () =>
      "type-nav-link relative isolate px-3 py-1 " +
      "before:pointer-events-none before:absolute before:inset-x-[-6px] before:inset-y-[-2px] before:-z-10 before:bg-white",
    [],
  );

  const navActiveClass =
    "!text-[var(--color-red)] before:opacity-100 before:scale-x-100 before:scale-y-100";

  const navInactiveClass =
    "text-white before:opacity-0 before:scale-x-50 before:scale-y-75 " +
    "transition-colors duration-300 before:transition-all before:duration-300 before:ease-out " +
    "hover:text-[var(--color-red)] hover:before:opacity-100 hover:before:scale-x-100 hover:before:scale-y-100";

  function getNavItemClass(active = false) {
    return cn(navBaseClass, active ? navActiveClass : navInactiveClass);
  }

  function getMobileNavItemClass(active = false) {
    return cn(
      "type-nav-link px-4 py-1 transition-colors duration-300",
      active
        ? "bg-white text-[var(--color-red)]"
        : "text-white hover:bg-white hover:text-[var(--color-red)]",
    );
  }

  function handleMobileLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-red)]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between px-5 min-[1025px]:min-h-[100px] min-[1025px]:px-10">
        <Link
          href={nav.homeHref}
          className="flex items-center"
          aria-label={nav.homeAriaLabel}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/common/logos/云尚-1.png"
            alt={nav.logoAlt}
            width={260}
            height={80}
            priority
            className="h-12 w-auto min-[1025px]:h-16"
          />
        </Link>

        <div className="hidden items-center gap-[54px] text-white min-[1025px]:flex">
          <div className="grid grid-flow-col auto-cols-max items-center gap-7">
            {NAV_ITEM_CONFIG.map((item) => {
              const href = language === "en" ? item.enHref : item.zhHref;
              const active = isNavItemActive(
                pathname,
                item.zhHref,
                item.enHref,
                language,
              );

              return (
                <Link
                  key={item.key}
                  href={href}
                  className={getNavItemClass(active)}
                  style={active ? { color: "var(--color-red)" } : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {nav[item.labelKey]}
                </Link>
              );
            })}

            <Link
              href={nav.languageHref}
              className={getNavItemClass(false)}
              aria-label={nav.languageSwitchAriaLabel}
            >
              {nav.languageSwitch}
            </Link>
          </div>

          <div className="flex items-center">
            <BrandButton href={nav.orderHref} variant="navbar">
              {nav.orderOnline}
            </BrandButton>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-white min-[1025px]:hidden"
          aria-label={menuOpen ? nav.mobileMenuCloseLabel : nav.mobileMenuOpenLabel}
          aria-expanded={menuOpen}
        >
          <span className="relative block h-5 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-[3px] w-6 bg-white transition-transform duration-300",
                menuOpen && "translate-y-[8px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[8px] h-[3px] w-6 bg-white transition-opacity duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[16px] h-[3px] w-6 bg-white transition-transform duration-300",
                menuOpen && "-translate-y-[8px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "fixed right-0 top-[76px] z-40 min-h-[calc(100vh-76px)] w-[270px]",
          "bg-[var(--color-red)] transition-transform duration-500 ease-in-out min-[1025px]:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col items-center gap-6 px-8 pt-16 text-white">
          {NAV_ITEM_CONFIG.map((item) => {
            const href = language === "en" ? item.enHref : item.zhHref;
            const active = isNavItemActive(
              pathname,
              item.zhHref,
              item.enHref,
              language,
            );

            return (
              <Link
                key={item.key}
                href={href}
                onClick={handleMobileLinkClick}
                className={getMobileNavItemClass(active)}
                style={active ? { color: "var(--color-red)" } : undefined}
                aria-current={active ? "page" : undefined}
              >
                {nav[item.labelKey]}
              </Link>
            );
          })}

          <Link
            href={nav.languageHref}
            onClick={handleMobileLinkClick}
            className={getMobileNavItemClass(false)}
            aria-label={nav.languageSwitchAriaLabel}
          >
            {nav.languageSwitch}
          </Link>

          <BrandButton
            href={nav.orderHref}
            variant="navbar"
            className="mt-2"
            onClick={() => setMenuOpen(false)}
          >
            {nav.orderOnline}
          </BrandButton>
        </div>
      </div>
    </nav>
  );
}

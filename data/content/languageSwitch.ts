import { getLanguageFromPathname } from "./index";

const ZH_TO_EN_ROUTES: Record<string, string> = {
  "/home": "/en",
  "/about": "/en/about",
  "/menu": "/en/menu",
  "/stores": "/en/stores",
  "/locations": "/en/locations",
  "/events": "/en/events",
  "/order": "/en/order",
};

const EN_TO_ZH_ROUTES: Record<string, string> = {
  "/en": "/home",
  "/en/home": "/home",
  "/en/about": "/about",
  "/en/menu": "/menu",
  "/en/stores": "/stores",
  "/en/locations": "/locations",
  "/en/events": "/events",
  "/en/order": "/order",
};

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return pathname;
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function mapPathname(
  pathname: string,
  routeMap: Record<string, string>,
): string | null {
  const normalized = normalizePathname(pathname);
  const routes = Object.keys(routeMap).sort((a, b) => b.length - a.length);

  for (const sourcePath of routes) {
    if (normalized === sourcePath) {
      return routeMap[sourcePath];
    }

    if (normalized.startsWith(`${sourcePath}/`)) {
      return `${routeMap[sourcePath]}${normalized.slice(sourcePath.length)}`;
    }
  }

  return null;
}

export function getLanguageSwitchPathname(pathname: string): string {
  const language = getLanguageFromPathname(pathname);
  const mapped =
    language === "en"
      ? mapPathname(pathname, EN_TO_ZH_ROUTES)
      : mapPathname(pathname, ZH_TO_EN_ROUTES);

  if (mapped) {
    return mapped;
  }

  return language === "en" ? "/home" : "/en";
}

export function getLanguageSwitchHref(
  pathname: string,
  search = "",
  hash = "",
): string {
  const path = getLanguageSwitchPathname(pathname);
  const query =
    search.length > 0
      ? search.startsWith("?")
        ? search
        : `?${search}`
      : "";
  const fragment =
    hash.length > 0 ? (hash.startsWith("#") ? hash : `#${hash}`) : "";

  return `${path}${query}${fragment}`;
}

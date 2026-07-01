export * from "./types";
export { zhContent } from "./zh";
export { enContent } from "./en";

import type { Locale, SiteContent } from "./types";
import { enContent } from "./en";
import { zhContent } from "./zh";

export function getLanguageFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

export function getSiteContent(pathname: string): SiteContent {
  return getLanguageFromPathname(pathname) === "en" ? enContent : zhContent;
}

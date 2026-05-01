import type { Locale } from "@/config/locales";
import { locales } from "@/config/locales";

export function getLocalizedPath(locale: Locale, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function getAlternateLanguageLinks(path: string) {
  return Object.fromEntries(locales.map((locale) => [locale, `/${locale}${path}`]));
}

import type { Locale } from "@/config/locales";
import { defaultLocale, isLocale } from "@/config/locales";

export function resolveLocale(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

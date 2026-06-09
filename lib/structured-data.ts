import type { Locale } from "@/config/locales";
import { siteConfig } from "@/config/site";

export function getOrganizationJsonLd(locale: Locale) {
  const availableLanguage = Array.from(new Set([locale, "en", "es", "pt"]));
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.linkedinUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage,
    },
  };
}

export function getWebsiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/${locale}`,
    inLanguage: locale,
  };
}

export function getBreadcrumbJsonLd(
  locale: Locale,
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}/${locale}${item.path}`,
    })),
  };
}

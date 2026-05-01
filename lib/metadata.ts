import type { Metadata } from "next";
import type { Locale } from "@/config/locales";
import { locales } from "@/config/locales";
import { siteConfig } from "@/config/site";

type MetadataInput = {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
};

export function buildPageMetadata({
  locale,
  pathname,
  title,
  description,
}: MetadataInput): Metadata {
  const normalizedPath = pathname ? `/${pathname.replace(/^\/|\/$/g, "")}` : "";
  const localizedPath = `/${locale}${normalizedPath}`;
  const canonical = `${siteConfig.siteUrl}${localizedPath}`;

  const languages = Object.fromEntries(
    locales.map((currentLocale) => [
      currentLocale,
      `${siteConfig.siteUrl}/${currentLocale}${normalizedPath}`,
    ])
  );

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": `${siteConfig.siteUrl}/${siteConfig.defaultLocale}${normalizedPath}`,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

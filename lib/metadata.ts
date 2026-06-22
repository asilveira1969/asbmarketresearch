import type { Metadata } from "next";
import type { Locale } from "@/config/locales";
import { locales } from "@/config/locales";
import { siteConfig } from "@/config/site";

const socialImage = {
  url: "/media/market-research-workstation-workflow.png",
  width: 1672,
  height: 941,
  alt: "ASB Market Research social preview",
} as const;

type MetadataInput = {
  locale: Locale;
  pathname: string;
  title: string;
  absoluteTitle?: string;
  description: string;
  robots?: Metadata["robots"];
};

export function buildPageMetadata({
  locale,
  pathname,
  title,
  absoluteTitle,
  description,
  robots,
}: MetadataInput): Metadata {
  const normalizedPath = pathname ? `/${pathname.replace(/^\/|\/$/g, "")}` : "";
  const localizedPath = `/${locale}${normalizedPath}`;
  const canonical = `${siteConfig.siteUrl}${localizedPath}`;
  const resolvedTitle = absoluteTitle ?? title;

  const languages = Object.fromEntries(
    locales.map((currentLocale) => [
      currentLocale,
      `${siteConfig.siteUrl}/${currentLocale}${normalizedPath}`,
    ])
  );

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    ...(robots ? { robots } : {}),
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": `${siteConfig.siteUrl}/en${normalizedPath}`,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      title: resolvedTitle,
      description,
      siteName: siteConfig.name,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [socialImage.url],
    },
  };
}

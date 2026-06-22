import type { MetadataRoute } from "next";
import { locales } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { insightArticles } from "@/content/insights";
import { sampleReports } from "@/content/reports";
import { serviceDetails } from "@/content/services";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/methodology",
  "/sample-reports",
  "/pricing",
  "/insights",
  "/contact",
  "/quotation",
  "/newsletter",
  "/privacy-policy",
  "/terms",
  "/agentic-market-intelligence-system",
];

const now = new Date();

function buildAlternates(pathname: string): MetadataRoute.Sitemap[number]["alternates"] {
  const normalizedPath = pathname ? `/${pathname.replace(/^\/|\/$/g, "")}` : "";
  const languages = Object.fromEntries([
    ...locales.map((locale) => [locale, `${siteConfig.siteUrl}/${locale}${normalizedPath}`] as const),
    ["x-default", `${siteConfig.siteUrl}/en${normalizedPath}`] as const,
  ]) as Record<string, string>;

  return {
    languages,
  };
}

function buildEntry(
  urlPath: string,
  {
    changeFrequency,
    priority,
    alternates,
  }: {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    alternates?: MetadataRoute.Sitemap[number]["alternates"];
  }
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteConfig.siteUrl}${urlPath}`,
    lastModified: now,
    changeFrequency,
    priority,
    ...(alternates ? { alternates } : {}),
  };
}

function sharedLocaleEntries(path: string, options: { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }) {
  return locales.map((locale) =>
    buildEntry(`/${locale}${path}`, {
      ...options,
      alternates: buildAlternates(path),
    })
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) =>
    sharedLocaleEntries(path, {
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const serviceEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    serviceDetails.map((service) =>
      buildEntry(`/${locale}/services/${service.slug}`, {
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: buildAlternates(`/services/${service.slug}`),
      })
    )
  );

  const insightEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    insightArticles.map((article) =>
      buildEntry(`/${locale}/insights/${article.slug}`, {
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: buildAlternates(`/insights/${article.slug}`),
      })
    )
  );

  const reportEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    sampleReports.map((report) =>
      buildEntry(`/${locale}/sample-reports/${report.slug}`, {
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: buildAlternates(`/sample-reports/${report.slug}`),
      })
    )
  );

  return [...staticEntries, ...serviceEntries, ...insightEntries, ...reportEntries];
}

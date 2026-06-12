import type { MetadataRoute } from "next";
import { locales } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { insightArticles } from "@/content/insights";
import { sampleReports } from "@/content/reports";
import { serviceDetails } from "@/content/services";

const staticPaths = ["", "/about", "/services", "/methodology", "/sample-reports", "/pricing", "/insights", "/contact", "/quotation", "/request-received", "/newsletter", "/privacy-policy", "/terms", "/thank-you/contact", "/thank-you/newsletter", "/thank-you/report-request", "/agentic-market-intelligence-system"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => {
      const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = path === "" ? "weekly" : "monthly";

      return {
        url: `${siteConfig.siteUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority: path === "" ? 1 : 0.7,
      };
    })
  );

  const serviceEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    serviceDetails.map((service) => ({
      url: `${siteConfig.siteUrl}/${locale}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }))
  );

  const insightEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    insightArticles.map((article) => ({
      url: `${siteConfig.siteUrl}/${locale}/insights/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  const reportEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    sampleReports.map((report) => ({
      url: `${siteConfig.siteUrl}/${locale}/sample-reports/${report.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    }))
  );

  return [...entries, ...serviceEntries, ...insightEntries, ...reportEntries];
}

import Link from "next/link";
import type { Locale } from "@/config/locales";
import { ArticleCard } from "@/components/cards/article-card";
import { insightArticles } from "@/content/insights";
import { workstationHomeContent } from "@/content/workstation-home";
import { getLocalizedPath } from "@/lib/routes";

type InsightsSectionProps = {
  locale: Locale;
};

export function InsightsSection({ locale }: InsightsSectionProps) {
  const content = workstationHomeContent[locale];
  const labels =
    locale === "es"
      ? { insights: "Insights", viewInsights: "Ver insights" }
      : locale === "pt"
        ? { insights: "Insights", viewInsights: "Ver insights" }
        : { insights: "Insights", viewInsights: "View insights" };

  return (
    <section className="bg-canvas">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">{labels.insights}</p>
        <h2 className="mt-3 text-display-sm text-brand-primary">{content.insightsTitle}</h2>
        <p className="mt-4 text-body-secondary">{content.insightsBody}</p>
        <p className="mt-4 text-body-secondary">{content.insightsClosing}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {insightArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            locale={locale}
            slug={article.slug}
            title={article.locales[locale].title}
            excerpt={article.locales[locale].excerpt}
            category={article.locales[locale].category}
            publishedAt={article.publishedAt}
            readingTimeMinutes={article.readingTimeMinutes}
          />
        ))}
      </div>
      <div className="mt-8">
        <Link className="button-secondary" href={getLocalizedPath(locale, "/insights")}>
          {labels.viewInsights}
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ArticleCard } from "@/components/cards/article-card";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/routes";
import { staticPages } from "@/content/site";
import { insightArticles, insightCategoryLabels, type InsightCategoryKey } from "@/content/insights";
import type { Locale } from "@/config/locales";

const categoryOrder: InsightCategoryKey[] = ["strategy", "competition", "briefing"];

function getCategoryLabel(locale: Locale, category: InsightCategoryKey) {
  return insightCategoryLabels[category][locale];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const page = staticPages[locale].insights;
  return buildPageMetadata({ locale, pathname: "/insights", title: page.title, description: page.description });
}

export default async function InsightsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const page = staticPages[locale].insights;
  const resolvedSearchParams = await searchParams;
  const requestedCategory = resolvedSearchParams.category;
  const selectedCategory =
    requestedCategory === "strategy" || requestedCategory === "competition" || requestedCategory === "briefing"
      ? requestedCategory
      : "all";
  const filteredArticles =
    selectedCategory === "all"
      ? insightArticles
      : insightArticles.filter((article) => article.categoryKey === selectedCategory);
  const featuredArticle = filteredArticles[0];
  const listArticles = filteredArticles.slice(1);

  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        eyebrow={locale === "es" ? "Contenido editorial" : locale === "pt" ? "Conteúdo editorial" : "Editorial"}
      />
      <Section className="bg-surface">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-3">
            <Link
              className={`button-secondary ${selectedCategory === "all" ? "border-brand-primary bg-brand-primary text-white hover:bg-brand-secondary" : ""}`}
              href={getLocalizedPath(locale, "/insights")}
            >
              {locale === "es" ? "Todos" : locale === "pt" ? "Todos" : "All"}
            </Link>
            {categoryOrder.map((category) => {
              const href = getLocalizedPath(locale, `/insights?category=${category}`);
              const active = selectedCategory === category;
              return (
                <Link
                  key={category}
                  className={`button-secondary ${active ? "border-brand-primary bg-brand-primary text-white hover:bg-brand-secondary" : ""}`}
                  href={href}
                >
                  {getCategoryLabel(locale, category)}
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
      <Section className="bg-surface !pt-0">
        {featuredArticle ? (
          <div className="mb-8">
            <ArticleCard
              locale={locale}
              slug={featuredArticle.slug}
              title={featuredArticle.locales[locale].title}
              excerpt={featuredArticle.locales[locale].excerpt}
              category={featuredArticle.locales[locale].category}
              publishedAt={featuredArticle.publishedAt}
              readingTimeMinutes={featuredArticle.readingTimeMinutes}
              featured
            />
          </div>
        ) : null}
        {listArticles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {listArticles.map((article) => (
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
        ) : (
          <p className="max-w-2xl text-lg leading-8 text-body-secondary">
            {locale === "es"
              ? "No hay artículos para esta categoría."
              : locale === "pt"
                ? "Não há artigos para esta categoria."
                : "There are no articles in this category."}
          </p>
        )}
      </Section>
    </>
  );
}

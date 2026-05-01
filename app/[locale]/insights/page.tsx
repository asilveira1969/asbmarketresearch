import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ArticleCard } from "@/components/cards/article-card";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { staticPages } from "@/content/site";
import { insightArticles } from "@/content/insights";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const page = staticPages[locale].insights;
  return buildPageMetadata({ locale, pathname: "/insights", title: page.title, description: page.description });
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const page = staticPages[locale].insights;
  return (
    <>
      <PageHeader title={page.title} description={page.description} eyebrow="Editorial" />
      <Section className="bg-surface"><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{insightArticles.map((article) => <ArticleCard key={article.slug} locale={locale} slug={article.slug} title={article.locales[locale].title} excerpt={article.locales[locale].excerpt} category={article.locales[locale].category} publishedAt={article.publishedAt} />)}</div></Section>
    </>
  );
}

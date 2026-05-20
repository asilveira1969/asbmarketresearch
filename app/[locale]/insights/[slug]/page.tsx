import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ArticleCard } from "@/components/cards/article-card";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { insightArticles } from "@/content/insights";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return buildPageMetadata({
    locale,
    pathname: `/insights/${article.slug}`,
    title: article.locales[locale].title,
    description: article.locales[locale].excerpt,
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const content = article.locales[locale];
  const relatedArticles = insightArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Section className="bg-canvas py-4">
        <Breadcrumbs locale={locale} items={[{ label: "Insights", href: "/insights" }, { label: content.title }]} />
      </Section>
      <PageHeader title={content.title} description={content.excerpt} eyebrow={content.category} />
      <Section className="bg-surface">
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{article.author}</span>
            <span aria-hidden="true">-</span>
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            <span aria-hidden="true">-</span>
            <span>{article.readingTimeMinutes} min read</span>
          </div>
          <div className="mt-8 grid gap-6">
            {content.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-body-secondary">
                {paragraph}
              </p>
            ))}
          </div>
          {article.pdfHref ? (
            <div className="mt-10">
              <PdfDownloadCard
                title={content.title}
                description={content.excerpt}
                href={article.pdfHref}
                label={locale === "es" ? "Descargar version PDF" : locale === "pt" ? "Baixar versao PDF" : "Download PDF version"}
              />
            </div>
          ) : null}
        </article>
      </Section>
      <Section className="bg-canvas">
        <div className="mx-auto mb-10 max-w-3xl">
          <p className="eyebrow">{locale === "es" ? "Lecturas relacionadas" : locale === "pt" ? "Leituras relacionadas" : "Related reading"}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">
            {locale === "es" ? "Más contenidos editoriales" : locale === "pt" ? "Mais conteúdos editoriais" : "More editorial insights"}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {relatedArticles.map((relatedArticle) => (
            <ArticleCard
              key={relatedArticle.slug}
              locale={locale}
              slug={relatedArticle.slug}
              title={relatedArticle.locales[locale].title}
              excerpt={relatedArticle.locales[locale].excerpt}
              category={relatedArticle.locales[locale].category}
              publishedAt={relatedArticle.publishedAt}
              readingTimeMinutes={relatedArticle.readingTimeMinutes}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

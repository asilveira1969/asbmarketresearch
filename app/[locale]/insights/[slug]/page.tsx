import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { insightArticles } from "@/content/insights";

export function generateStaticParams() { return insightArticles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return buildPageMetadata({ locale, pathname: `/insights/${article.slug}`, title: article.locales[locale].title, description: article.locales[locale].excerpt });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const content = article.locales[locale];

  return (
    <>
      <Section className="bg-canvas py-4"><Breadcrumbs locale={locale} items={[{ label: "Insights", href: "/insights" }, { label: content.title }]} /></Section>
      <PageHeader title={content.title} description={content.excerpt} eyebrow={content.category} />
      <Section className="bg-surface"><article className="mx-auto max-w-3xl"><div className="grid gap-6">{content.body.map((paragraph) => <p key={paragraph} className="text-lg leading-8 text-body-secondary">{paragraph}</p>)}</div>{article.pdfHref ? <div className="mt-10"><PdfDownloadCard title={content.title} description={content.excerpt} href={article.pdfHref} label={locale === "es" ? "Descargar version PDF" : locale === "pt" ? "Baixar versao PDF" : "Download PDF version"} /></div> : null}</article></Section>
    </>
  );
}


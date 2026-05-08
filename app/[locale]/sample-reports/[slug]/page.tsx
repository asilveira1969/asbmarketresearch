import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { EmbedContentBlock } from "@/components/content/embed-content-block";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { sampleReports } from "@/content/reports";

export function generateStaticParams() { return sampleReports.map((report) => ({ slug: report.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const report = sampleReports.find((item) => item.slug === slug);
  if (!report) return {};
  return buildPageMetadata({ locale, pathname: `/sample-reports/${report.slug}`, title: report.locales[locale].title, description: report.locales[locale].excerpt });
}

export default async function SampleReportDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const report = sampleReports.find((item) => item.slug === slug);
  if (!report) notFound();
  const content = report.locales[locale];

  return (
    <>
      <Section className="bg-canvas py-4"><Breadcrumbs locale={locale} items={[{ label: locale === "es" ? "Reportes de muestra" : locale === "pt" ? "Relatórios de amostra" : "Sample Reports", href: "/sample-reports" }, { label: content.title }]} /></Section>
      <PageHeader title={content.title} description={content.excerpt} eyebrow={content.market} />
      <Section className="bg-surface"><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="surface-panel"><p className="eyebrow">{locale === "es" ? "Aspectos clave" : locale === "pt" ? "Aspectos-chave" : "Highlights"}</p><ul className="mt-5 grid gap-4 text-body-secondary">{content.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div><PdfDownloadCard title={content.title} description={content.excerpt} href={report.pdfHref} label={report.pdfHref ? (locale === "es" ? "Descargar PDF" : locale === "pt" ? "Baixar PDF" : "Download PDF") : (locale === "es" ? "Disponible a pedido" : locale === "pt" ? "Disponivel sob consulta" : "Available on request")} /></div></Section>
      <Section className="bg-canvas"><EmbedContentBlock type="pdf" locale={locale} title={locale === "es" ? "Vista previa del documento" : locale === "pt" ? "Prévia do documento" : "Document preview"} src={report.pdfHref || "/pdfs/placeholder.pdf"} /></Section>
    </>
  );
}

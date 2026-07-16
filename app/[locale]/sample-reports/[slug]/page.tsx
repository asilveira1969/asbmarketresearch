import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { EmbedContentBlock } from "@/components/content/embed-content-block";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { GermanySmartphoneReport } from "@/components/content/germany-smartphone-report";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { getBreadcrumbJsonLd } from "@/lib/structured-data";
import { sampleReports } from "@/content/reports";
import { germanySmartphoneReport, germanySmartphoneReportPublished, germanySmartphoneReportSlug } from "@/content/germany-smartphone-report";
import { siteConfig } from "@/config/site";

export function generateStaticParams() { return sampleReports.map((report) => ({ slug: report.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const report = sampleReports.find((item) => item.slug === slug);
  if (!report) return {};
  const metadataTitle = slug === germanySmartphoneReportSlug
    ? report.locales[locale].title
    : `${report.locales[locale].title} — ${report.locales[locale].market}`;
  const metadataDescription =
    locale === "es"
      ? `${report.locales[locale].excerpt} Aspectos clave: ${report.locales[locale].highlights.join(", ")}.`
      : locale === "pt"
        ? `${report.locales[locale].excerpt} Aspectos-chave: ${report.locales[locale].highlights.join(", ")}.`
        : `${report.locales[locale].excerpt} Highlights: ${report.locales[locale].highlights.join(", ")}.`;
  return buildPageMetadata({
    locale,
    pathname: `/sample-reports/${report.slug}`,
    title: metadataTitle,
    absoluteTitle: `${metadataTitle} | ASB Market Research`,
    description: metadataDescription,
  });
}

export default async function SampleReportDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const report = sampleReports.find((item) => item.slug === slug);
  if (!report) notFound();
  const content = report.locales[locale];
  const pdfHref = report.pdfHref;
  const isGermanySmartphoneReport = slug === germanySmartphoneReportSlug;
  const sampleReportsLabel = locale === "es" ? "Reportes de muestra" : locale === "pt" ? "Relatórios de amostra" : "Sample Reports";
  const reportUrl = `${siteConfig.siteUrl}/${locale}/sample-reports/${slug}`;
  const reportJsonLd = isGermanySmartphoneReport ? {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: germanySmartphoneReport[locale].fullTitle,
    name: content.title,
    description: content.excerpt,
    inLanguage: locale,
    datePublished: germanySmartphoneReportPublished,
    dateModified: germanySmartphoneReportPublished,
    url: reportUrl,
    mainEntityOfPage: reportUrl,
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
    associatedMedia: pdfHref ? {
      "@type": "MediaObject",
      contentUrl: `${siteConfig.siteUrl}${pdfHref}`,
      encodingFormat: "application/pdf",
      name: content.title,
    } : undefined,
  } : null;
  const breadcrumbJsonLd = isGermanySmartphoneReport ? getBreadcrumbJsonLd(locale, [
    { name: locale === "es" ? "Inicio" : locale === "pt" ? "Início" : "Home", path: "" },
    { name: sampleReportsLabel, path: "/sample-reports" },
    { name: content.title, path: `/sample-reports/${slug}` },
  ]) : null;

  return (
    <>
      {reportJsonLd ? <JsonLd data={reportJsonLd} /> : null}
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <Section className="bg-canvas py-4"><Breadcrumbs locale={locale} items={[{ label: sampleReportsLabel, href: "/sample-reports" }, { label: content.title }]} /></Section>
      <PageHeader title={content.title} description={content.excerpt} eyebrow={content.market} />
      <Section className="bg-surface"><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="surface-panel"><p className="eyebrow">{locale === "es" ? "Aspectos clave" : locale === "pt" ? "Aspectos-chave" : "Highlights"}</p><ul className="mt-5 grid gap-4 text-body-secondary">{content.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div><PdfDownloadCard title={content.title} description={content.excerpt} href={report.pdfHref} label={report.pdfHref ? (locale === "es" ? "Descargar PDF" : locale === "pt" ? "Baixar PDF" : "Download PDF") : (locale === "es" ? "Disponible a pedido" : locale === "pt" ? "Disponivel sob consulta" : "Available on request")} /></div></Section>
      <Section className="bg-canvas">
        {pdfHref ? (
          <EmbedContentBlock
            type="pdf"
            locale={locale}
            title={locale === "es" ? "Vista previa del documento" : locale === "pt" ? "Prévia do documento" : "Document preview"}
            src={pdfHref}
          />
        ) : (
          <div className="surface-card">
            <p className="eyebrow">{locale === "es" ? "Vista previa" : locale === "pt" ? "Prévia" : "Preview"}</p>
            <h3 className="mt-4 text-xl font-medium text-brand-primary">
              {locale === "es" ? "PDF pendiente" : locale === "pt" ? "PDF pendente" : "PDF coming soon"}
            </h3>
            <p className="mt-4 text-body-secondary">
              {locale === "es"
                ? "Esta plantilla está reservada para cargar un PDF más adelante."
                : locale === "pt"
                  ? "Este modelo está reservado para carregar um PDF mais tarde."
                  : "This template is reserved for a PDF upload later."}
            </p>
          </div>
        )}
      </Section>
      {isGermanySmartphoneReport ? <GermanySmartphoneReport locale={locale} /> : null}
    </>
  );
}

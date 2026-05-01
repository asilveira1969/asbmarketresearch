import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { staticPages } from "@/content/site";
import { sampleReports } from "@/content/reports";
import { getLocalizedPath } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const page = staticPages[locale]["sample-reports"];
  return buildPageMetadata({ locale, pathname: "/sample-reports", title: page.title, description: page.description });
}

export default async function SampleReportsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const page = staticPages[locale]["sample-reports"];
  const previewReportSlugs = new Set([
    "latam-b2b-software-expansion-snapshot",
    "premium-food-category-benchmark",
  ]);

  return (
    <>
      <PageHeader title={page.title} description={page.description} eyebrow="Library" />
      <Section className="bg-surface"><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{sampleReports.map((report) => <div key={report.slug} className="grid gap-4"><PdfDownloadCard title={report.locales[locale].title} description={report.locales[locale].excerpt} href={report.pdfHref} previewHref={previewReportSlugs.has(report.slug) ? report.pdfHref : undefined} label={report.pdfHref ? (locale === "es" ? "Descargar PDF" : locale === "pt" ? "Baixar PDF" : "Download PDF") : (locale === "es" ? "Disponible a pedido" : locale === "pt" ? "Disponivel sob consulta" : "Available on request")} /><Link href={getLocalizedPath(locale, `/sample-reports/${report.slug}`)} className="text-sm font-semibold text-accent transition-colors hover:text-brand-primary">{locale === "es" ? "Ver ficha" : locale === "pt" ? "Ver ficha" : "View overview"}</Link></div>)}</div></Section>
    </>
  );
}

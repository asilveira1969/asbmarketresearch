import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { serviceDetails } from "@/content/services";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) return {};
  return buildPageMetadata({ locale, pathname: `/services/${service.slug}`, title: service.locales[locale].title, description: service.locales[locale].summary });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) notFound();

  const content = service.locales[locale];
  const bodyParagraphs = [content.summary, ...content.body];

  const labels = {
    es: { services: "Servicios", deliverables: "Entregables", downloadPdf: "Descargar PDF" },
    en: { services: "Services", deliverables: "Deliverables", downloadPdf: "Download PDF" },
    pt: { services: "Serviços", deliverables: "Entregáveis", downloadPdf: "Baixar PDF" },
  }[locale];

  const sampleReportPlaceholder =
    service.slug === "industry-product-reports" || service.slug === "custom-research-studies" || service.slug === "monthly-market-briefings"
      ? {
          title:
            service.slug === "monthly-market-briefings"
              ? locale === "es"
                ? "Briefing mensual de muestra"
                : locale === "pt"
                  ? "Briefing mensal de amostra"
                  : "Monthly Market Briefing Sample"
              : service.slug === "custom-research-studies"
                ? locale === "es"
                  ? "Estudio de investigación de muestra"
                  : locale === "pt"
                    ? "Estudo de pesquisa de amostra"
                    : "Custom Research Study Sample"
                : locale === "es"
                  ? "Reporte de muestra de industria o producto"
                  : locale === "pt"
                    ? "Relatório de amostra de indústria ou produto"
                    : "Industry or Product Sample Report",
          description:
            locale === "es"
              ? "Espacio preparado para incorporar un PDF de muestra de este tipo de servicio."
              : locale === "pt"
                ? "Espaço preparado para incorporar um PDF de amostra deste tipo de serviço."
                : "Placeholder prepared for uploading a sample PDF for this service type.",
          label:
            locale === "es"
              ? "PDF de muestra pendiente"
              : locale === "pt"
                ? "PDF de amostra pendente"
                : "Sample PDF pending",
        }
      : null;

  return (
    <>
      <Section className="bg-canvas !py-3 md:!py-3">
        <Breadcrumbs locale={locale} items={[{ label: labels.services, href: "/services" }, { label: content.title }]} />
      </Section>
      <Section className="border-b border-line bg-canvas py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{labels.services}</p>
          <h1 className="mt-1 text-display-sm text-brand-primary">{content.title}</h1>
          <p className="mt-2 text-base leading-7 text-body-secondary md:text-lg md:leading-8">{content.summary}</p>
        </div>
      </Section>
      <Section className="bg-surface py-16 md:py-24">
        {sampleReportPlaceholder ? (
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <PdfDownloadCard title={sampleReportPlaceholder.title} description={sampleReportPlaceholder.description} label={sampleReportPlaceholder.label} />
            </div>
            <div className="grid gap-6">
              <div className="grid gap-5">
                {bodyParagraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="surface-panel">
                <p className="eyebrow">{labels.deliverables}</p>
                <ul className="mt-5 grid gap-4 text-body-secondary">
                  {content.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5">
              {bodyParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="surface-panel">
              <p className="eyebrow">{labels.deliverables}</p>
              <ul className="mt-5 grid gap-4 text-body-secondary">
                {content.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Section>
      <Section className="bg-canvas py-16 md:py-24">
        <PdfDownloadCard title={content.title} description={content.summary} href={service.brochureHref} label={labels.downloadPdf} />
      </Section>
    </>
  );
}

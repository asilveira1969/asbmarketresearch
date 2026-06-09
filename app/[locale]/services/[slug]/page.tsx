import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactCalloutCard } from "@/components/content/contact-callout-card";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { ReportRequestForm } from "@/components/forms/report-request-form";
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

  const metadataTitle = service.locales[locale].title;

  return buildPageMetadata({
    locale,
    pathname: `/services/${service.slug}`,
    title: metadataTitle,
    absoluteTitle: `${metadataTitle} | ASB Market Research`,
    description: service.locales[locale].summary,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) notFound();

  const content = service.locales[locale];
  const bodyParagraphs = [content.summary, ...content.body];
  const samplePrice = service.samplePrice?.[locale];
  const requestQuoteLabel = locale === "es" ? "Solicitar cotización" : locale === "pt" ? "Solicitar cotação" : "Request a Quote";
  const requestDemoLabel = locale === "es" ? "Solicitar demo" : locale === "pt" ? "Solicitar demo" : "Request a Demo";
  const workstationWorkflowImageAlt = {
    es: "Diagrama del flujo de trabajo del workstation de inteligencia de mercado",
    en: "Workflow diagram showing how the market research workstation works",
    pt: "Diagrama do fluxo de trabalho da workstation de inteligência de mercado",
  }[locale];

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
                ? "Muestra de briefing mensual"
                : locale === "pt"
                  ? "Amostra de briefing mensal"
                  : "Monthly Market Briefing Sample"
              : service.slug === "custom-research-studies"
                ? locale === "es"
                  ? "Estudio de investigación de muestra"
                  : locale === "pt"
                    ? "Estudo de pesquisa de amostra"
                    : "Custom Research Sample - Context Aware Analysis"
                : locale === "es"
                  ? "Reporte de muestra de industria o producto"
                  : locale === "pt"
                    ? "Relatório de amostra de indústria ou produto"
                    : "Industry or Product Sample Report",
          description:
            service.slug === "industry-product-reports"
              ? locale === "es"
                ? "Panorama del mercado de cerveza artesanal de Connecticut"
                : locale === "pt"
                  ? "Panorama do mercado de cerveja artesanal de Connecticut"
                  : "Connecticut Craft Beer Market Landscape"
              : service.slug === "monthly-market-briefings"
                ? "Monthly Brief on Gold"
                : locale === "es"
                  ? "Análisis y recomendaciones con contexto por la agente Maria, nuestra estratega senior de investigación."
                  : locale === "pt"
                    ? "Análise e recomendações com contexto pela agente Maria, nossa estrategista sênior de pesquisa."
                    : "Context Aware Analysis and Recommendations by Agent Maria, our Strategic Senior Researcher",
          label:
            service.slug === "industry-product-reports" || service.slug === "custom-research-studies"
              ? labels.downloadPdf
              : locale === "es"
                ? "PDF de muestra pendiente"
                : locale === "pt"
                  ? "PDF de amostra pendente"
                  : "Sample PDF Download",
          href: service.samplePdfHref,
          previewHref: service.samplePdfHref,
        }
      : null;

  return (
    <>
      <Section className="bg-canvas !py-0" innerClassName="py-1 md:py-1.5">
        <Breadcrumbs locale={locale} items={[{ label: labels.services, href: "/services" }, { label: content.title }]} />
      </Section>
      <Section className="border-b border-line bg-canvas !py-0" innerClassName="py-3 md:py-4">
        <div className="max-w-3xl space-y-1.5">
          <p className="eyebrow">{labels.services}</p>
          <h1 className="text-display-sm text-brand-primary">{content.title}</h1>
          <p className="text-base leading-6 text-body-secondary md:text-lg md:leading-7">{content.summary}</p>
        </div>
      </Section>
      <Section className="bg-surface py-10 md:py-14">
        {sampleReportPlaceholder ? (
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <PdfDownloadCard
                title={sampleReportPlaceholder.title}
                description={sampleReportPlaceholder.description}
                href={sampleReportPlaceholder.href}
                previewHref={sampleReportPlaceholder.previewHref}
                label={sampleReportPlaceholder.label}
              />
            </div>
            <div className="grid gap-5">
              <div className="grid gap-3">
                {bodyParagraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-[42rem] text-[1.02rem] leading-[1.55] text-body-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
              {samplePrice ? (
                <div className="rounded-2xl border border-line bg-canvas px-5 py-4 shadow-soft">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="eyebrow">{samplePrice.label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl">{samplePrice.amount}</p>
                      <p className="mt-2 max-w-md text-sm leading-6 text-body-secondary">{samplePrice.note}</p>
                    </div>
                    {service.slug === "industry-product-reports" ||
                    service.slug === "custom-research-studies" ||
                    service.slug === "monthly-market-briefings" ||
                    service.slug === "agentic-research-workstation" ? (
                      <div className="flex flex-col gap-3 md:self-start">
                        <a className="button-primary inline-flex w-fit min-w-max items-center justify-center whitespace-nowrap text-center" href="#request-a-quote-form">
                          {requestQuoteLabel}
                        </a>
                        {service.slug === "agentic-research-workstation" ? (
                          <a className="button-secondary inline-flex w-fit min-w-max items-center justify-center whitespace-nowrap text-center" href="#request-a-quote-form">
                            {requestDemoLabel}
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="flex flex-col gap-6">
              {bodyParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[42rem] text-base leading-[1.5] text-body-secondary">
                  {paragraph}
                </p>
              ))}
              {service.slug === "agentic-research-workstation" ? (
                <div className="max-w-[40rem] overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-soft">
                  <Image
                    src="/media/agentic-research-workstation-workflow-diagram.png"
                    alt={workstationWorkflowImageAlt}
                    width={1672}
                    height={941}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ) : null}
            </div>
            <div className="grid gap-6">
              {samplePrice ? (
                <div className="rounded-2xl border border-line bg-canvas px-5 py-4 shadow-soft">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="eyebrow">{samplePrice.label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl">{samplePrice.amount}</p>
                      <p className="mt-2 max-w-md text-sm leading-6 text-body-secondary">{samplePrice.note}</p>
                    </div>
                    {service.slug === "agentic-research-workstation" ? (
                      <div className="flex flex-col gap-3 md:self-start">
                        <a className="button-primary inline-flex w-fit min-w-max items-center justify-center whitespace-nowrap text-center" href="#request-a-quote-form">
                          {requestQuoteLabel}
                        </a>
                        <a className="button-secondary inline-flex w-fit min-w-max items-center justify-center whitespace-nowrap text-center" href="#request-a-quote-form">
                          {requestDemoLabel}
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
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
        )}
      </Section>
      <Section className="bg-canvas py-12 md:py-16">
        {service.slug === "industry-product-reports" ? (
          <div id="request-a-quote-form" className="mx-auto grid max-w-4xl gap-8 scroll-mt-28 md:scroll-mt-32">
            <ContactCalloutCard locale={locale} />
            <ReportRequestForm locale={locale} />
          </div>
        ) : service.slug === "custom-research-studies" ? (
          <div className="mx-auto grid max-w-4xl gap-8">
            <PdfDownloadCard
              title={content.title}
              description={content.summary}
              href={service.brochureHref}
              previewHref={service.brochureHref}
              label={labels.downloadPdf}
            />
            <div id="request-a-quote-form" className="grid gap-8 scroll-mt-28 md:scroll-mt-32">
              <ContactCalloutCard locale={locale} />
              <ReportRequestForm locale={locale} />
            </div>
          </div>
        ) : service.slug === "monthly-market-briefings" ? (
          <div id="request-a-quote-form" className="mx-auto grid max-w-4xl gap-8 scroll-mt-28 md:scroll-mt-32">
            <ContactCalloutCard locale={locale} />
            <ReportRequestForm locale={locale} />
          </div>
        ) : service.slug === "agentic-research-workstation" ? (
          <div className="mx-auto grid max-w-4xl gap-8">
            <PdfDownloadCard
              title={content.title}
              description={content.summary}
              href={service.brochureHref}
              previewHref={service.brochureHref}
              label={labels.downloadPdf}
            />
            <div id="request-a-quote-form" className="grid gap-8 scroll-mt-28 md:scroll-mt-32">
              <ContactCalloutCard locale={locale} />
              <ReportRequestForm locale={locale} />
            </div>
          </div>
        ) : (
          <PdfDownloadCard
            title={content.title}
            description={content.summary}
            href={service.brochureHref}
            previewHref={
              service.slug === "agentic-research-workstation" || service.slug === "custom-research-studies"
                ? service.brochureHref
                : undefined
            }
            label={labels.downloadPdf}
          />
        )}
      </Section>
    </>
  );
}

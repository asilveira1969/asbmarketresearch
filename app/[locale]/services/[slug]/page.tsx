import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { serviceDetails } from "@/content/services";

export function generateStaticParams() { return serviceDetails.map((service) => ({ slug: service.slug })); }

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
  const isAgenticSystem = service.slug === "agentic-market-intelligence-system";
  const agenticPrimary =
    locale === "en"
      ? {
          eyebrow: "Agentic Market Intelligence System",
          title: "Market Research Workstation",
          body: "Agentic market intelligence for teams that need repeatable research workflows and decision-ready reports.",
          support:
            "An AI-powered research workstation designed for organizations with recurring market intelligence needs. It combines AI agents, company context, public sources, internal data, and structured reporting workflows in one integrated environment.",
        }
      : null;
  const agenticSecondary =
    locale === "es"
      ? {
          title: "Un sistema para convertir research recurrente en workflows internos",
          body: "El sistema agentic permite organizar preguntas de negocio, contexto de la empresa, fuentes, analisis y outputs para que la inteligencia de mercado pueda actualizarse y reutilizarse con mayor consistencia.",
          alt: "Sistema agentic de inteligencia de mercado de ASB",
        }
      : locale === "pt"
        ? {
            title: "Um sistema para transformar research recorrente em workflows internos",
            body: "O sistema agentic permite organizar perguntas de negocio, contexto da empresa, fontes, analise e outputs para que a inteligencia de mercado possa ser atualizada e reutilizada com maior consistencia.",
            alt: "Sistema agentic de inteligencia de mercado da ASB",
          }
        : {
            title: "Market Research Workstation",
            body: "A custom research environment where AI agents, company context, public sources, and structured reporting workflows work together in one place.",
            support:
              "The system is designed to help teams ask research questions, collect market signals, compare companies or competitors, and generate decision-ready outputs such as executive summaries, standard reports, full reports, raw data, and recurring intelligence updates.",
            closing:
              "For companies with ongoing research needs, this turns market intelligence from a one-time PDF into a reusable internal capability.",
            alt: "ASB agentic market intelligence system",
          };
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
                ? "Estudio de research de muestra"
                : locale === "pt"
                  ? "Estudo de research de amostra"
                  : "Custom Research Study Sample"
              : locale === "es"
                ? "Reporte de muestra de industria o producto"
                : locale === "pt"
                  ? "Relatorio de amostra de industria ou produto"
                  : "Industry or Product Sample Report",
          description:
            locale === "es"
              ? "Espacio preparado para incorporar un PDF de muestra de este tipo de servicio."
              : locale === "pt"
                ? "Espaco preparado para incorporar um PDF de amostra deste tipo de servico."
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
      <Section className="bg-canvas !py-3 md:!py-3"><Breadcrumbs locale={locale} items={[{ label: locale === "es" ? "Servicios" : locale === "pt" ? "Servicos" : "Services", href: "/services" }, { label: content.title }]} /></Section>
      <PageHeader title={content.title} description="" />
      <Section className="bg-surface">
        {sampleReportPlaceholder ? (
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div><PdfDownloadCard title={sampleReportPlaceholder.title} description={sampleReportPlaceholder.description} label={sampleReportPlaceholder.label} /></div>
            <div className="grid gap-6">
              <div className="grid gap-5">{bodyParagraphs.map((paragraph) => <p key={paragraph} className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{paragraph}</p>)}</div>
              <div className="surface-panel"><p className="eyebrow">{locale === "es" ? "Entregables" : locale === "pt" ? "Entregaveis" : "Deliverables"}</p><ul className="mt-5 grid gap-4 text-body-secondary">{content.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        ) : isAgenticSystem ? (
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6">
              {agenticPrimary ? (
                <>
                  <p className="eyebrow">{agenticPrimary.eyebrow}</p>
                  <h2 className="text-display-xs text-brand-primary">{agenticPrimary.title}</h2>
                  <p className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{agenticPrimary.body}</p>
                  <p className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{agenticPrimary.support}</p>
                </>
              ) : (
                <>
                  {bodyParagraphs.map((paragraph) => <p key={paragraph} className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{paragraph}</p>)}
                  <p className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{agenticSecondary.body}</p>
                </>
              )}
            </div>
            <div className="surface-panel flex min-h-80 items-center justify-center overflow-hidden !p-0">
              <Image
                src="/media/market-research-workstation.jpg"
                alt={agenticSecondary.alt}
                width={1366}
                height={900}
                className="h-full min-h-80 w-full object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div className="grid gap-5">{bodyParagraphs.map((paragraph) => <p key={paragraph} className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{paragraph}</p>)}</div><div className="surface-panel"><p className="eyebrow">{locale === "es" ? "Entregables" : locale === "pt" ? "Entregaveis" : "Deliverables"}</p><ul className="mt-5 grid gap-4 text-body-secondary">{content.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
        )}
      </Section>
      {isAgenticSystem ? (
        <Section className="bg-canvas">
          <div className="mx-auto grid max-w-4xl gap-8 text-center">
            <div className="surface-panel mx-auto flex min-h-80 w-full max-w-3xl items-center justify-center text-center">
              <Image
                src="/media/market-research-workstation-workflow.png"
                alt="Market Research Workstation workflow"
                width={1800}
                height={1000}
                className="h-full min-h-80 w-full object-contain"
              />
            </div>
            <div className="mx-auto max-w-3xl">
              <p className="eyebrow">Agentic workflow</p>
              <h2 className="mt-3 text-display-xs text-brand-primary">Customizable Market Research Workstation</h2>
              <p className="mt-5 text-[1.05rem] leading-[1.65] text-body-secondary">The Market Research Workstation is designed to reflect how market research departments operate in real-world organizations. It brings together multiple research skills, data sources, and methodologies — including primary research, secondary research, quantitative research, and qualitative research — within one integrated agentic intelligence system.</p>
              <p className="mt-5 text-[1.05rem] leading-[1.65] text-body-secondary">Depending on the needs of each organization, ASB Market Research designs customized research workflows aligned with the company’s objectives, internal capabilities, available data sources, market challenges, and growth strategy.</p>
              <p className="mt-5 text-[1.05rem] leading-[1.65] text-body-secondary">Organizations can request a customized implementation of the Market Research Workstation to support recurring research needs, automate intelligence workflows, and generate decision-ready reports for management teams.</p>
              <p className="mt-5 text-[1.05rem] leading-[1.65] text-body-secondary">Contact ASB Market Research to request a quote and explore how this system can be installed and customized for your organization.</p>
            </div>
          </div>
        </Section>
      ) : null}
      <Section className="bg-canvas"><PdfDownloadCard title={content.title} description={content.summary} href={service.brochureHref} label={locale === "es" ? "Descargar PDF" : locale === "pt" ? "Baixar PDF" : "Download PDF"} /></Section>
    </>
  );
}

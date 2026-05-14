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

  const labels = {
    es: { services: "Servicios", deliverables: "Entregables", downloadPdf: "Descargar PDF" },
    en: { services: "Services", deliverables: "Deliverables", downloadPdf: "Download PDF" },
    pt: { services: "Serviços", deliverables: "Entregáveis", downloadPdf: "Baixar PDF" },
  }[locale];

  const agenticPrimary =
    locale === "es"
      ? {
          eyebrow: "Sistema Agentic de Inteligencia de Mercado",
          title: "Market Research Workstation",
          body: "Inteligencia de mercado agentic para equipos que necesitan workflows de research repetibles y reportes listos para decisiones.",
          support:
            "Una estación de trabajo de research impulsada por AI, diseñada para organizaciones con necesidades recurrentes de inteligencia de mercado. Combina agentes de AI, contexto de la empresa, fuentes públicas, datos internos y workflows estructurados de reporting en un solo entorno integrado.",
          alt: "Sistema agentic de inteligencia de mercado de ASB",
        }
      : locale === "pt"
        ? {
            eyebrow: "Sistema Agentic de Inteligência de Mercado",
            title: "Market Research Workstation",
            body: "Inteligência de mercado agentic para equipes que precisam de workflows de pesquisa repetíveis e relatórios prontos para decisão.",
            support:
              "Uma estação de trabalho de pesquisa impulsionada por AI, desenhada para organizações com necessidades recorrentes de inteligência de mercado. Combina agentes de AI, contexto da empresa, fontes públicas, dados internos e workflows estruturados de reporting em um único ambiente integrado.",
            alt: "Sistema agentic de inteligência de mercado da ASB",
          }
        : {
            eyebrow: "Agentic Market Intelligence System",
            title: "Market Research Workstation",
            body: "Agentic market intelligence for teams that need repeatable research workflows and decision-ready reports.",
            support:
              "An AI-powered research workstation designed for organizations with recurring market intelligence needs. It combines AI agents, company context, public sources, internal data, and structured reporting workflows in one integrated environment.",
            alt: "ASB agentic market intelligence system",
          };

  const agenticWorkflow =
    locale === "es"
      ? {
          eyebrow: "Workflow agentic",
          title: "Market Research Workstation personalizable",
          body: [
            "El Market Research Workstation está diseñado para reflejar cómo operan los departamentos de research en organizaciones reales. Reúne múltiples capacidades de investigación, fuentes de datos y metodologías, incluyendo investigación primaria, investigación secundaria, investigación cuantitativa e investigación cualitativa, dentro de un sistema integrado de inteligencia agentic.",
            "Según las necesidades de cada organización, ASB Market Research diseña workflows de research personalizados y alineados con los objetivos de la empresa, sus capacidades internas, fuentes de datos disponibles, desafíos de mercado y estrategia de crecimiento.",
            "Las organizaciones pueden solicitar una implementación personalizada del Market Research Workstation para apoyar necesidades recurrentes de research, automatizar workflows de inteligencia y generar reportes listos para equipos de dirección.",
            "Contacta a ASB Market Research para solicitar una cotización y explorar cómo este sistema puede instalarse y personalizarse para tu organización.",
          ],
        }
      : locale === "pt"
        ? {
            eyebrow: "Workflow agentic",
            title: "Market Research Workstation personalizável",
            body: [
              "O Market Research Workstation foi desenhado para refletir como departamentos de pesquisa de mercado operam em organizações reais. Ele reúne múltiplas capacidades de pesquisa, fontes de dados e metodologias, incluindo pesquisa primária, pesquisa secundária, pesquisa quantitativa e pesquisa qualitativa, dentro de um sistema integrado de inteligência agentic.",
              "De acordo com as necessidades de cada organização, a ASB Market Research desenha workflows de pesquisa personalizados e alinhados aos objetivos da empresa, capacidades internas, fontes de dados disponíveis, desafios de mercado e estratégia de crescimento.",
              "As organizações podem solicitar uma implementação personalizada do Market Research Workstation para apoiar necessidades recorrentes de pesquisa, automatizar workflows de inteligência e gerar relatórios prontos para equipes de gestão.",
              "Entre em contato com a ASB Market Research para solicitar uma cotação e explorar como este sistema pode ser instalado e personalizado para sua organização.",
            ],
          }
        : {
            eyebrow: "Agentic workflow",
            title: "Customizable Market Research Workstation",
            body: [
              "The Market Research Workstation is designed to reflect how market research departments operate in real-world organizations. It brings together multiple research skills, data sources, and methodologies, including primary research, secondary research, quantitative research, and qualitative research, within one integrated agentic intelligence system.",
              "Depending on the needs of each organization, ASB Market Research designs customized research workflows aligned with the company's objectives, internal capabilities, available data sources, market challenges, and growth strategy.",
              "Organizations can request a customized implementation of the Market Research Workstation to support recurring research needs, automate intelligence workflows, and generate decision-ready reports for management teams.",
              "Contact ASB Market Research to request a quote and explore how this system can be installed and customized for your organization.",
            ],
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
      <Section className="bg-canvas !py-3 md:!py-3"><Breadcrumbs locale={locale} items={[{ label: labels.services, href: "/services" }, { label: content.title }]} /></Section>
      <PageHeader title={content.title} description="" />
      <Section className="bg-surface">
        {sampleReportPlaceholder ? (
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div><PdfDownloadCard title={sampleReportPlaceholder.title} description={sampleReportPlaceholder.description} label={sampleReportPlaceholder.label} /></div>
            <div className="grid gap-6">
              <div className="grid gap-5">{bodyParagraphs.map((paragraph) => <p key={paragraph} className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{paragraph}</p>)}</div>
              <div className="surface-panel"><p className="eyebrow">{labels.deliverables}</p><ul className="mt-5 grid gap-4 text-body-secondary">{content.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        ) : isAgenticSystem ? (
          <div className="mx-auto grid max-w-5xl gap-8 text-center">
            <div className="surface-panel mx-auto flex min-h-80 w-full items-center justify-center text-center">
              <Image
                src="/media/market-research-workstation-workflow.png"
                alt="Market Research Workstation workflow"
                width={1800}
                height={1000}
                className="h-full min-h-80 w-full object-contain"
              />
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-[1fr_0.85fr] lg:items-start">
              <div className="max-w-3xl">
              <p className="eyebrow">{agenticWorkflow.eyebrow}</p>
              <h2 className="mt-3 text-display-xs text-brand-primary">{agenticWorkflow.title}</h2>
              {agenticWorkflow.body.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-[1.05rem] leading-[1.65] text-body-secondary">{paragraph}</p>
              ))}
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-line bg-canvas shadow-soft lg:mt-[6.75rem]">
                <Image
                  src="/media/agentic-workflow-programmer.png"
                  alt="Technical consultant configuring a market intelligence workstation"
                  width={1200}
                  height={900}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div className="grid gap-5">{bodyParagraphs.map((paragraph) => <p key={paragraph} className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{paragraph}</p>)}</div><div className="surface-panel"><p className="eyebrow">{labels.deliverables}</p><ul className="mt-5 grid gap-4 text-body-secondary">{content.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
        )}
      </Section>
      {isAgenticSystem ? (
        <Section className="bg-canvas">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-6">
              <p className="eyebrow">{agenticPrimary.eyebrow}</p>
              <h2 className="text-display-xs text-brand-primary">{agenticPrimary.title}</h2>
              <p className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{agenticPrimary.body}</p>
              <p className="max-w-[42rem] text-[1.05rem] leading-[1.65] text-body-secondary">{agenticPrimary.support}</p>
            </div>
            <div className="surface-panel flex min-h-80 items-center justify-center overflow-hidden !p-0">
              <Image
                src="/media/market-research-workstation.jpg"
                alt={agenticPrimary.alt}
                width={1366}
                height={900}
                className="h-full min-h-80 w-full object-contain"
              />
            </div>
          </div>
        </Section>
      ) : null}
      <Section className="bg-canvas"><PdfDownloadCard title={content.title} description={content.summary} href={service.brochureHref} label={labels.downloadPdf} /></Section>
    </>
  );
}

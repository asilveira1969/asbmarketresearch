import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/routes";

const pricingContent = {
  es: {
    eyebrow: "Precios y servicios",
    title: "Precios y servicios",
    description:
      "ASB Market Research ofrece precios flexibles según el alcance, la profundidad, la frecuencia y el nivel de personalización que necesite cada cliente.",
    intro: [
      "Las organizaciones pueden empezar con un solo reporte de investigación de mercado, avanzar a briefings de inteligencia recurrente o solicitar un Sistema Agéntico de Inteligencia de Mercado diseñado a medida según sus necesidades internas.",
      "Para flujos de trabajo personalizados, integraciones de datos e instalaciones del workstation, el precio se define por cotización después de una consulta inicial.",
    ],
    progression: "Reportes -> Inteligencia recurrente -> Sistema Agéntico de Inteligencia de Mercado",
    bestFor: "Ideal para",
    note:
      "Los precios son rangos iniciales orientativos. El precio final depende del alcance de la investigación, la complejidad de la industria, la cobertura geográfica, la disponibilidad de datos, la urgencia, el formato de entrega y el nivel de personalización requerido.",
    cards: [
      {
        title: "Briefings de industria de investigación de mercado",
        price: "GRATIS",
        description:
          "Suscríbete a nuestro newsletter y te enviaremos reportes quincenales de novedades de tu industria.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Reportes de investigación de mercado",
        price: "USD 250-500 / por reporte",
        description:
          "Para empresas que necesitan un reporte específico de investigación de mercado, revisión de competidores, brief sectorial, evaluación de entrada a mercado o resumen ejecutivo.",
        bestFor:
          "Preguntas puntuales de mercado, oportunidades de negocio, análisis de competidores, panorama de industria y evaluación de inversión o expansión.",
        cta: "Solicitar cotización de reporte",
      },
      {
        title: "Briefings recurrentes de inteligencia",
        price: "USD 500-1,500/mes",
        description:
          "Para empresas que necesitan actualizaciones regulares del mercado, monitoreo de competidores, análisis de tendencias y resúmenes ejecutivos para equipos directivos o comerciales.",
        bestFor:
          "Inteligencia mensual o semanal, monitoreo de industria, seguimiento competitivo, actualizaciones estratégicas y apoyo recurrente a la toma de decisiones.",
        cta: "Solicitar cotización mensual",
      },
      {
        title: "Prueba gratuita del Workstation",
        price: "PRUEBA GRATIS de 15 días",
        description:
          "Prueba lo básico de lo que el Sistema Agéntico de Inteligencia de Mercado puede hacer por tu empresa. Solicita una contraseña para una prueba gratuita de 15 días sin compromiso.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Sistema Agéntico de Inteligencia de Mercado",
        price: "Cotización personalizada",
        description:
          "Para organizaciones que desean un workstation de investigación de mercado impulsado por IA con agentes personalizados, flujos de trabajo de investigación, fuentes de datos y salidas estructuradas.",
        bestFor:
          "Empresas que quieren construir capacidad interna de inteligencia de mercado, automatizar flujos recurrentes de investigación, conectar fuentes internas y externas y generar inteligencia continua lista para decidir.",
        cta: "Solicitar cotización del sistema",
      },
    ],
    closing: "Solicita una cotización para evaluar la configuración adecuada para tu organización.",
    customQuote: "Solicitar cotización personalizada",
  },
  en: {
    eyebrow: "Pricing & Services",
    title: "Pricing and Services",
    description:
      "ASB Market Research offers flexible pricing depending on the scope, depth, frequency, and level of customization required by each client.",
    intro: [
      "Organizations can start with a single market research report, move into recurring intelligence briefings, or request a customized Agentic Market Intelligence System designed around their internal research needs.",
      "For custom research workflows, data integrations, and workstation installations, pricing is provided by quotation after an initial consultation.",
    ],
    progression: "Reports -> Recurring Intelligence -> Agentic Market Intelligence System",
    bestFor: "Best for",
    note:
      "Prices are indicative starting ranges. Final pricing depends on research scope, industry complexity, geographic coverage, data availability, urgency, deliverable format, and level of customization required.",
    cards: [
      {
        title: "Market Research Industry Briefings",
        price: "FREE",
        description:
          "Subscribe to our newsletter and we will send you bi-weekly industry updates from your sector.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Market Research Reports",
        price: "USD 250-500 / per report",
        description:
          "For companies that need a specific market research report, competitor review, industry brief, market entry assessment, or executive summary.",
        bestFor:
          "One-off market questions, business opportunities, competitor analysis, industry overview, and investment or expansion evaluation.",
        cta: "Request a Report Quote",
      },
      {
        title: "Recurring Intelligence Briefings",
        price: "USD 500-1,500/month",
        description:
          "For companies that need regular market updates, competitor monitoring, market trend analysis, and executive summaries prepared for management or commercial teams.",
        bestFor:
          "Monthly or weekly market intelligence, industry monitoring, competitor tracking, strategic updates, and recurring decision support.",
        cta: "Request Monthly Briefing Quote",
      },
      {
        title: "Workstation Free Trial",
        price: "15-day FREE TRIAL",
        description:
          "Experience the basics of what the Agentic Market Intelligence System can do for your company. Request a password for a 15-day free trial with no commitments.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Agentic Market Intelligence System",
        price: "Custom quotation",
        description:
          "For organizations that want an AI-powered market research workstation with customized agents, research workflows, data sources, and structured reporting outputs.",
        bestFor:
          "Companies that want to build internal market intelligence capability, automate recurring research workflows, connect internal and external data sources, and generate continuous decision-ready intelligence.",
        cta: "Request System Quotation",
      },
    ],
    closing: "Request a quotation to evaluate the right configuration for your organization.",
    customQuote: "Request a Custom Quote",
  },
  pt: {
    eyebrow: "Preços e serviços",
    title: "Preços e serviços",
    description:
      "A ASB Market Research oferece preços flexíveis conforme o escopo, a profundidade, a frequência e o nível de personalização exigidos por cada cliente.",
    intro: [
      "As organizações podem começar com um único relatório de pesquisa de mercado, avançar para briefings recorrentes de inteligência ou solicitar um Sistema Agêntico de Inteligência de Mercado personalizado para suas necessidades internas.",
      "Para fluxos de pesquisa sob medida, integrações de dados e instalações do workstation, o valor é fornecido por cotação após uma consulta inicial.",
    ],
    progression: "Relatórios -> Inteligência recorrente -> Sistema Agêntico de Inteligência de Mercado",
    bestFor: "Ideal para",
    note:
      "Os preços são faixas iniciais indicativas. O valor final depende do escopo da pesquisa, da complexidade do setor, da cobertura geográfica, da disponibilidade de dados, da urgência, do formato de entrega e do nível de personalização exigido.",
    cards: [
      {
        title: "Briefings setoriais de pesquisa de mercado",
        price: "GRÁTIS",
        description:
          "Assine a newsletter e enviaremos relatórios quinzenais sobre novidades do seu setor.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Relatórios de pesquisa de mercado",
        price: "USD 250-500 / por relatório",
        description:
          "Para empresas que precisam de um relatório específico de pesquisa de mercado, revisão de concorrentes, brief setorial, avaliação de entrada em mercado ou resumo executivo.",
        bestFor:
          "Perguntas pontuais de mercado, oportunidades de negócio, análise de concorrentes, panorama do setor e avaliação de investimento ou expansão.",
        cta: "Solicitar cotação do relatório",
      },
      {
        title: "Briefings recorrentes de inteligência",
        price: "USD 500-1,500/mês",
        description:
          "Para empresas que precisam de atualizações regulares de mercado, monitoramento de concorrentes, análise de tendências e resumos executivos para equipes de gestão ou comerciais.",
        bestFor:
          "Inteligência mensal ou semanal, monitoramento do setor, acompanhamento competitivo, atualizações estratégicas e apoio recorrente à tomada de decisão.",
        cta: "Solicitar cotação mensal",
      },
      {
        title: "Teste gratuito do Workstation",
        price: "TESTE GRÁTIS de 15 dias",
        description:
          "Experimente o básico do que o Sistema Agêntico de Inteligência de Mercado pode fazer pela sua empresa. Solicite uma senha para um teste gratuito de 15 dias sem compromisso.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Sistema Agêntico de Inteligência de Mercado",
        price: "Cotação personalizada",
        description:
          "Para organizações que querem um workstation de pesquisa de mercado com IA, agentes personalizados, fluxos de pesquisa, fontes de dados e entregáveis estruturados.",
        bestFor:
          "Empresas que querem construir capacidade interna de inteligência de mercado, automatizar fluxos recorrentes de pesquisa, conectar fontes internas e externas e gerar inteligência contínua pronta para decisão.",
        cta: "Solicitar cotação do sistema",
      },
    ],
    closing: "Solicite uma cotação para avaliar a configuração adequada para a sua organização.",
    customQuote: "Solicitar cotação personalizada",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pricingContent[locale];
  return buildPageMetadata({
    locale,
    pathname: "/pricing",
    title: `${content.title} | ASB Market Research`,
    description: content.description,
  });
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pricingContent[locale];

  return (
    <>
      <PageHeader eyebrow={content.eyebrow} title={content.title} description={content.description} />
      <Section className="bg-surface">
        <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-brand-primary bg-surface p-6 shadow-soft md:p-8">
          <div className="divide-y divide-brand-primary/15">
            {content.cards.map((card) => (
              <article key={card.title} className="grid gap-5 py-6 lg:grid-cols-[1fr_0.45fr] lg:items-start">
                <div>
                  <h2 className="text-lg font-semibold text-brand-primary">{card.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-body-secondary">
                    {card.title === "Market Research Industry Briefings" ? (
                      <>
                        <Link className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary" href={getLocalizedPath(locale, "/newsletter")}>
                          Subscribe to our newsletter
                        </Link>{" "}
                        and we will send you bi-weekly industry updates from your sector.
                      </>
                    ) : (
                      card.description
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-6 text-ink">{card.price}</p>
                  {card.title === "Workstation Free Trial" ? (
                    <div className="mt-3 grid gap-2 text-sm leading-6">
                      <a className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary" href="https://maria.agentesdeprocesos.com/" target="_blank" rel="noreferrer">
                        Visit trial website
                      </a>
                      <Link className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary" href={getLocalizedPath(locale, "/contact")}>
                        Request password here
                      </Link>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-brand-primary/20 pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm leading-7 text-body-secondary">{content.closing}</p>
              <p className="mt-2 text-xs leading-6 text-body-secondary">{content.note}</p>
            </div>
            <Link className="button-primary shrink-0" href={getLocalizedPath(locale, "/quotation")}>
              {content.customQuote}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

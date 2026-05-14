import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/routes";

const useCaseContent = {
  es: {
    title: "Casos de uso",
    description:
      "Formas concretas en que el Market Research Workstation puede apoyar decisiones de mercado, expansion, competencia y estrategia comercial.",
    eyebrow: "Market Research Workstation",
    intro:
      "El workstation se adapta a organizaciones que necesitan inteligencia recurrente, pero no siempre cuentan con un departamento interno de research. Cada caso de uso se puede implementar como reporte puntual, briefing mensual o workflow agentic continuo.",
    cta: "Solicitar consultoria",
    secondary: "Ver sistema",
    cases: [
      {
        title: "Empresas sin departamento de research",
        body: "Construir una capacidad de inteligencia de mercado sin contratar un equipo completo: fuentes organizadas, preguntas recurrentes, briefs ejecutivos y mapas competitivos.",
      },
      {
        title: "Camaras y asociaciones empresariales",
        body: "Crear reportes sectoriales, monitoreo de tendencias y materiales de inteligencia para miembros, comites directivos o agendas institucionales.",
      },
      {
        title: "America Latina y mercados emergentes",
        body: "Ordenar informacion dispersa, comparar paises, detectar riesgos de entrada y entender dinamicas competitivas en mercados con datos fragmentados.",
      },
      {
        title: "Equipos de estrategia y comerciales",
        body: "Apoyar decisiones de expansion, pricing, canales, ventas B2B, posicionamiento y priorizacion de oportunidades comerciales.",
      },
      {
        title: "Consultores y firmas de advisory",
        body: "Acelerar research documental, construir evidencia para proyectos de clientes y generar entregables consistentes con un tono consultivo.",
      },
      {
        title: "Empresas que quieren decidir mejor",
        body: "Transformar preguntas difusas sobre mercado, competencia o clientes en workflows claros, repetibles y listos para accion.",
      },
    ],
  },
  en: {
    title: "Use Cases",
    description:
      "Concrete ways the Market Research Workstation can support market decisions, expansion, competition, and commercial strategy.",
    eyebrow: "Market Research Workstation",
    intro:
      "The workstation adapts to organizations that need recurring intelligence, but do not always have an internal research department. Each use case can be implemented as a one-off report, monthly briefing, or continuous agentic workflow.",
    cta: "Request Consultation",
    secondary: "View System",
    cases: [
      {
        title: "Companies without a research department",
        body: "Build market intelligence capability without hiring a full team: organized sources, recurring questions, executive briefs, and competitive maps.",
      },
      {
        title: "Business associations and chambers",
        body: "Create sector reports, trend monitoring, and intelligence material for members, boards, committees, or institutional agendas.",
      },
      {
        title: "Latin America and emerging markets",
        body: "Organize fragmented information, compare countries, identify entry risks, and understand competitive dynamics in markets where data is scattered.",
      },
      {
        title: "Strategy and commercial teams",
        body: "Support decisions around expansion, pricing, channels, B2B sales, positioning, and commercial opportunity prioritization.",
      },
      {
        title: "Consultants and advisory firms",
        body: "Accelerate desk research, build evidence for client projects, and generate deliverables with a consistent consulting tone.",
      },
      {
        title: "Companies that want smarter decisions",
        body: "Turn broad questions about markets, competitors, or customers into clear, repeatable workflows prepared for action.",
      },
    ],
  },
  pt: {
    title: "Casos de uso",
    description:
      "Formas concretas em que o Market Research Workstation pode apoiar decisoes de mercado, expansao, concorrencia e estrategia comercial.",
    eyebrow: "Market Research Workstation",
    intro:
      "O workstation se adapta a organizacoes que precisam de inteligencia recorrente, mas nem sempre contam com um departamento interno de research. Cada caso de uso pode ser implementado como relatorio pontual, briefing mensal ou workflow agentic continuo.",
    cta: "Solicitar consultoria",
    secondary: "Ver sistema",
    cases: [
      {
        title: "Empresas sem departamento de research",
        body: "Construir uma capacidade de inteligencia de mercado sem contratar uma equipe completa: fontes organizadas, perguntas recorrentes, briefs executivos e mapas competitivos.",
      },
      {
        title: "Associacoes empresariais e camaras",
        body: "Criar relatorios setoriais, monitoramento de tendencias e materiais de inteligencia para membros, diretorias, comites ou agendas institucionais.",
      },
      {
        title: "America Latina e mercados emergentes",
        body: "Organizar informacao fragmentada, comparar paises, identificar riscos de entrada e entender dinamicas competitivas em mercados com dados dispersos.",
      },
      {
        title: "Equipes de estrategia e comerciais",
        body: "Apoiar decisoes de expansao, pricing, canais, vendas B2B, posicionamento e priorizacao de oportunidades comerciais.",
      },
      {
        title: "Consultores e firmas de advisory",
        body: "Acelerar desk research, construir evidencias para projetos de clientes e gerar entregaveis com tom consultivo consistente.",
      },
      {
        title: "Empresas que querem decidir melhor",
        body: "Transformar perguntas amplas sobre mercado, concorrentes ou clientes em workflows claros, repetiveis e prontos para acao.",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = useCaseContent[locale];
  return buildPageMetadata({
    locale,
    pathname: "/use-cases",
    title: `${content.title} | ASB Market Research`,
    description: content.description,
  });
}

export default async function UseCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = useCaseContent[locale];

  return (
    <>
      <PageHeader title={content.title} description={content.description} eyebrow={content.eyebrow} />
      <Section className="bg-surface !pt-2 md:!pt-3">
        <div className="max-w-4xl">
          <p className="text-lg leading-8 text-body-secondary">{content.intro}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.cases.map((item) => (
            <article key={item.title} className="surface-card h-full">
              <h2 className="text-xl font-medium text-brand-primary">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-body-secondary md:text-base">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link className="button-primary" href={getLocalizedPath(locale, "/quotation")}>
            {content.cta}
          </Link>
          <Link className="button-secondary" href={getLocalizedPath(locale, "/services/agentic-market-intelligence-system")}>
            {content.secondary}
          </Link>
        </div>
      </Section>
    </>
  );
}

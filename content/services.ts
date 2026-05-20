import type { Locale } from "@/config/locales";

export type ServiceDetail = {
  slug: string;
  icon: string;
  brochureHref?: string;
  locales: Record<
    Locale,
    {
      title: string;
      summary: string;
      body: string[];
      deliverables: string[];
    }
  >;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "industry-product-reports",
    icon: "01",
    brochureHref: "/pdfs/services/industry-product-reports.pdf",
    locales: {
      es: {
        title: "Reportes de industria y producto",
        summary: "Inteligencia de mercado lista para usar sobre una industria, categoría de producto, país u oportunidad específica.",
        body: [
          "Preparamos reportes profesionales que ayudan a comprender rápidamente una industria, categoría de producto, geografía u oportunidad comercial concreta.",
          "Este servicio es ideal para clientes que necesitan un entregable claro y ejecutivo sin iniciar todavía un proceso consultivo profundo.",
        ],
        deliverables: ["Reporte PDF", "Resumen ejecutivo", "Hallazgos clave", "Fuentes y anexos"],
      },
      en: {
        title: "Industry & Product Reports",
        summary: "Ready-to-use market intelligence for a specific industry, product category, country, or opportunity.",
        body: [
          "We prepare professional reports that help companies quickly understand a specific industry, product category, country, or market opportunity.",
          "This service is designed for clients who need a clear executive deliverable without starting a deeper consulting process yet.",
        ],
        deliverables: ["PDF report", "Executive summary", "Key findings", "Sources and appendices"],
      },
      pt: {
        title: "Relatórios de indústria e produto",
        summary: "Inteligência de mercado pronta para uso sobre uma indústria, categoria de produto, país ou oportunidade específica.",
        body: [
          "Preparamos relatórios profissionais que ajudam empresas a compreender rapidamente uma indústria, categoria de produto, geografia ou oportunidade comercial concreta.",
          "Este serviço é ideal para clientes que precisam de um entregável claro e executivo sem iniciar ainda um processo consultivo mais profundo.",
        ],
        deliverables: ["Relatório PDF", "Resumo executivo", "Achados-chave", "Fontes e anexos"],
      },
    },
  },
  {
    slug: "custom-research-studies",
    icon: "02",
    brochureHref: "/pdfs/services/custom-research-studies.pdf",
    locales: {
      es: {
        title: "Estudios de investigación a medida",
        summary: "Investigación a medida para una pregunta de negocio, decisión de mercado, tema competitivo u oportunidad de crecimiento.",
        body: [
          "Diseñamos estudios puntuales alrededor de una pregunta concreta del cliente, con alcance, fuentes y profundidad definidos según la decisión que se necesita apoyar.",
          "Cada estudio transforma información dispersa en una lectura estructurada con implicancias, riesgos y recomendaciones prácticas.",
        ],
        deliverables: ["Brief de investigación", "Análisis estructurado", "Mapa competitivo o de oportunidad", "Recomendaciones estratégicas"],
      },
      en: {
        title: "Custom Research Studies",
        summary: "Tailored research for a specific business question, market decision, competitor issue, or growth opportunity.",
        body: [
          "We design focused studies around a concrete client question, with scope, sources, and depth defined by the decision that needs support.",
          "Each study turns dispersed information into a structured reading with implications, risks, and practical recommendations.",
        ],
        deliverables: ["Research brief", "Structured analysis", "Competitive or opportunity map", "Strategic recommendations"],
      },
      pt: {
        title: "Estudos de pesquisa sob medida",
        summary: "Pesquisa sob medida para uma pergunta de negócio, decisão de mercado, tema competitivo ou oportunidade de crescimento.",
        body: [
          "Desenhamos estudos pontuais em torno de uma pergunta concreta do cliente, com escopo, fontes e profundidade definidos pela decisão que precisa de apoio.",
          "Cada estudo transforma informação dispersa em uma leitura estruturada com implicações, riscos e recomendações práticas.",
        ],
        deliverables: ["Brief de pesquisa", "Análise estruturada", "Mapa competitivo ou de oportunidade", "Recomendações estratégicas"],
      },
    },
  },
  {
    slug: "monthly-market-briefings",
    icon: "03",
    brochureHref: "/pdfs/services/monthly-market-briefings.pdf",
    locales: {
      es: {
        title: "Briefings mensuales de mercado",
        summary: "Actualizaciones recurrentes de inteligencia de mercado para seguir mercados, competidores, tendencias y señales estratégicas.",
        body: [
          "Entregamos briefings mensuales para empresas que necesitan monitorear cambios de mercado, movimientos competitivos, tendencias emergentes y señales relevantes para la estrategia.",
          "El objetivo es convertir la investigación en un hábito de seguimiento ejecutivo, no en un documento aislado.",
        ],
        deliverables: ["Briefing mensual", "Actualización competitiva", "Señales de mercado", "Implicancias y próximos pasos"],
      },
      en: {
        title: "Monthly Market Briefings",
        summary: "Recurring market intelligence updates for tracking markets, competitors, trends, and strategic signals over time.",
        body: [
          "We deliver monthly briefings for companies that need to monitor market changes, competitor movements, emerging trends, and strategic signals over time.",
          "The goal is to turn research into a recurring executive intelligence habit, not a one-off document.",
        ],
        deliverables: ["Monthly briefing", "Competitor update", "Market signals", "Implications and next steps"],
      },
      pt: {
        title: "Briefings mensais de mercado",
        summary: "Atualizações recorrentes de inteligência de mercado para acompanhar mercados, concorrentes, tendências e sinais estratégicos.",
        body: [
          "Entregamos briefings mensais para empresas que precisam monitorar mudanças de mercado, movimentos competitivos, tendências emergentes e sinais relevantes para a estratégia.",
          "O objetivo é transformar a pesquisa em um hábito recorrente de inteligência executiva, não em um documento isolado.",
        ],
        deliverables: ["Briefing mensal", "Atualização competitiva", "Sinais de mercado", "Implicações e próximos passos"],
      },
    },
  },
  {
    slug: "agentic-market-intelligence-system",
    icon: "04",
    brochureHref: "/pdfs/services/agentic-market-intelligence-system.pdf",
    locales: {
      es: {
        title: "Sistema Agéntico de Inteligencia de Mercado",
        summary: "Market Research Workstation para construir capacidad recurrente de inteligencia de mercado sin depender de un departamento interno completo.",
        body: [
          "Implementamos o configuramos un workstation impulsado por agentes para que la organización pueda generar, organizar, actualizar y reutilizar inteligencia de mercado de forma continua.",
          "Este servicio está pensado para empresas, cámaras, asociaciones, equipos comerciales y consultores con necesidades recurrentes de investigación que quieren convertir preguntas de negocio en flujos de trabajo y entregables estructurados.",
        ],
        deliverables: ["Market Research Workstation", "Flujo de trabajo de inteligencia de mercado", "Configuración de contexto de empresa", "Briefs, reportes y outputs reutilizables"],
      },
      en: {
        title: "Agentic Market Intelligence System",
        summary: "Market Research Workstation for building recurring market intelligence capability without depending on a full internal research department.",
        body: [
          "We implement or configure an agent-powered workstation so the organization can generate, organize, update, and reuse market intelligence continuously.",
          "This service is designed for companies, chambers, associations, commercial teams, and consultants with recurring research needs that want to turn business questions into repeatable workflows and structured outputs.",
        ],
        deliverables: ["Market Research Workstation", "Market intelligence workflow", "Company context configuration", "Reusable briefs, reports, and outputs"],
      },
      pt: {
        title: "Sistema Agêntico de Inteligência de Mercado",
        summary: "Market Research Workstation para construir capacidade recorrente de inteligência de mercado sem depender de um departamento interno completo.",
        body: [
          "Implementamos ou configuramos um workstation com agentes para que a organização possa gerar, organizar, atualizar e reutilizar inteligência de mercado continuamente.",
          "Este serviço é indicado para empresas, câmaras, associações, equipes comerciais e consultores com necessidades recorrentes de pesquisa que querem transformar perguntas de negócio em fluxos de trabalho repetíveis e entregáveis estruturados.",
        ],
        deliverables: ["Market Research Workstation", "Fluxo de trabalho de inteligência de mercado", "Configuração de contexto da empresa", "Briefs, relatórios e entregáveis reutilizáveis"],
      },
    },
  },
];

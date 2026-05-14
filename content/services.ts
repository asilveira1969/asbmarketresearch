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
        title: "Reportes de Industria y Producto",
        summary: "Inteligencia de mercado lista para usar sobre una industria, categoria de producto, pais u oportunidad especifica.",
        body: [
          "Preparamos reportes profesionales que ayudan a comprender rapidamente una industria, categoria de producto, geografia u oportunidad comercial concreta.",
          "Este servicio es ideal para clientes que necesitan un entregable claro y ejecutivo sin iniciar todavia un proceso consultivo profundo.",
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
        title: "Relatórios de Indústria e Produto",
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
        title: "Estudios de Research a Medida",
        summary: "Investigacion a medida para una pregunta de negocio, decision de mercado, tema competitivo u oportunidad de crecimiento.",
        body: [
          "Disenamos estudios puntuales alrededor de una pregunta concreta del cliente, con alcance, fuentes y profundidad definidos segun la decision que se necesita apoyar.",
          "Cada estudio transforma informacion dispersa en una lectura estructurada con implicancias, riesgos y recomendaciones practicas.",
        ],
        deliverables: ["Brief de investigacion", "Analisis estructurado", "Mapa competitivo o de oportunidad", "Recomendaciones estrategicas"],
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
        title: "Estudos de Pesquisa sob Medida",
        summary: "Pesquisa sob medida para uma pergunta de negocio, decisao de mercado, tema competitivo ou oportunidade de crescimento.",
        body: [
          "Desenhamos estudos pontuais em torno de uma pergunta concreta do cliente, com escopo, fontes e profundidade definidos pela decisao que precisa de apoio.",
          "Cada estudo transforma informacao dispersa em uma leitura estruturada com implicacoes, riscos e recomendacoes praticas.",
        ],
        deliverables: ["Brief de pesquisa", "Analise estruturada", "Mapa competitivo ou de oportunidade", "Recomendacoes estrategicas"],
      },
    },
  },
  {
    slug: "monthly-market-briefings",
    icon: "03",
    brochureHref: "/pdfs/services/monthly-market-briefings.pdf",
    locales: {
      es: {
        title: "Briefings Mensuales de Mercado",
        summary: "Actualizaciones recurrentes de inteligencia de mercado para seguir mercados, competidores, tendencias y senales estrategicas.",
        body: [
          "Entregamos briefings mensuales para empresas que necesitan monitorear cambios de mercado, movimientos competitivos, tendencias emergentes y senales relevantes para la estrategia.",
          "El objetivo es convertir la investigacion en un habito de seguimiento ejecutivo, no en un documento aislado.",
        ],
        deliverables: ["Briefing mensual", "Actualizacion competitiva", "Senales de mercado", "Implicancias y proximos pasos"],
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
        title: "Briefings Mensais de Mercado",
        summary: "Atualizacoes recorrentes de inteligencia de mercado para acompanhar mercados, concorrentes, tendencias e sinais estrategicos.",
        body: [
          "Entregamos briefings mensais para empresas que precisam monitorar mudancas de mercado, movimentos competitivos, tendencias emergentes e sinais relevantes para a estrategia.",
          "O objetivo e transformar pesquisa em um habito recorrente de inteligencia executiva, nao em um documento isolado.",
        ],
        deliverables: ["Briefing mensal", "Atualizacao competitiva", "Sinais de mercado", "Implicacoes e proximos passos"],
      },
    },
  },
  {
    slug: "agentic-market-intelligence-system",
    icon: "04",
    brochureHref: "/pdfs/services/agentic-market-intelligence-system.pdf",
    locales: {
      es: {
        title: "Sistema Agentic de Inteligencia de Mercado",
        summary: "Market Research Workstation para construir capacidad recurrente de inteligencia de mercado sin depender de un departamento interno completo.",
        body: [
          "Implementamos o configuramos un workstation agent-powered para que la organizacion pueda generar, organizar, actualizar y reutilizar inteligencia de mercado de forma continua.",
          "Este servicio esta pensado para empresas, camaras, asociaciones, equipos comerciales y consultores con necesidades recurrentes de research que quieren convertir preguntas de negocio en workflows y outputs estructurados.",
        ],
        deliverables: ["Market Research Workstation", "Workflow de inteligencia de mercado", "Configuracion de contexto de empresa", "Briefs, reportes y outputs reutilizables"],
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
        title: "Sistema Agentic de Inteligência de Mercado",
        summary: "Market Research Workstation para construir capacidade recorrente de inteligencia de mercado sem depender de um departamento interno completo.",
        body: [
          "Implementamos ou configuramos um workstation agent-powered para que a organizacao possa gerar, organizar, atualizar e reutilizar inteligencia de mercado continuamente.",
          "Este servico e indicado para empresas, camaras, associacoes, equipes comerciais e consultores com necessidades recorrentes de research que querem transformar perguntas de negocio em workflows repetiveis e outputs estruturados.",
        ],
        deliverables: ["Market Research Workstation", "Workflow de inteligencia de mercado", "Configuracao de contexto da empresa", "Briefs, relatorios e outputs reutilizaveis"],
      },
    },
  },
];

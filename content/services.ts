import type { Locale } from "@/config/locales";

export type ServiceDetail = {
  slug: string;
  icon: string;
  brochureHref?: string;
  samplePdfHref?: string;
  samplePrice?: Record<Locale, { label: string; amount: string; note: string }>;
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
    samplePdfHref: "/pdfs/services/connecticut-craft-beer-market-landscape.pdf",
    samplePrice: {
      es: {
        label: "Precio inicial",
        amount: "USD 490",
        note: "El precio final puede variar según alcance, geografía y plazo de entrega.",
      },
      en: {
        label: "Starting at",
        amount: "USD 490",
        note: "Final price may vary by scope, geography, and delivery time.",
      },
      pt: {
        label: "Preço inicial",
        amount: "USD 490",
        note: "O preço final pode variar conforme escopo, geografia e prazo de entrega.",
      },
    },
    locales: {
      es: {
        title: "Reportes de industria y producto",
        summary: "Inteligencia de mercado lista para usar sobre una industria, categorÃ­a de producto, paÃ­s u oportunidad especÃ­fica.",
        body: [
          "Preparamos reportes profesionales que ayudan a comprender rÃ¡pidamente una industria, categorÃ­a de producto, geografÃ­a u oportunidad comercial concreta.",
          "Este servicio es ideal para clientes que necesitan un entregable claro y ejecutivo sin iniciar todavÃ­a un proceso consultivo profundo.",
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
        title: "RelatÃ³rios de indÃºstria e produto",
        summary: "InteligÃªncia de mercado pronta para uso sobre uma indÃºstria, categoria de produto, paÃ­s ou oportunidade especÃ­fica.",
        body: [
          "Preparamos relatÃ³rios profissionais que ajudam empresas a compreender rapidamente uma indÃºstria, categoria de produto, geografia ou oportunidade comercial concreta.",
          "Este serviÃ§o Ã© ideal para clientes que precisam de um entregÃ¡vel claro e executivo sem iniciar ainda um processo consultivo mais profundo.",
        ],
        deliverables: ["RelatÃ³rio PDF", "Resumo executivo", "Achados-chave", "Fontes e anexos"],
      },
    },
  },
  {
    slug: "custom-research-studies",
    icon: "02",
    brochureHref: "/pdfs/services/custom-research-studies.pdf",
    locales: {
      es: {
        title: "Estudios de investigaciÃ³n a medida",
        summary: "InvestigaciÃ³n a medida para una pregunta de negocio, decisiÃ³n de mercado, tema competitivo u oportunidad de crecimiento.",
        body: [
          "DiseÃ±amos estudios puntuales alrededor de una pregunta concreta del cliente, con alcance, fuentes y profundidad definidos segÃºn la decisiÃ³n que se necesita apoyar.",
          "Cada estudio transforma informaciÃ³n dispersa en una lectura estructurada con implicancias, riesgos y recomendaciones prÃ¡cticas.",
        ],
        deliverables: ["Brief de investigaciÃ³n", "AnÃ¡lisis estructurado", "Mapa competitivo o de oportunidad", "Recomendaciones estratÃ©gicas"],
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
        summary: "Pesquisa sob medida para uma pergunta de negÃ³cio, decisÃ£o de mercado, tema competitivo ou oportunidade de crescimento.",
        body: [
          "Desenhamos estudos pontuais em torno de uma pergunta concreta do cliente, com escopo, fontes e profundidade definidos pela decisÃ£o que precisa de apoio.",
          "Cada estudo transforma informaÃ§Ã£o dispersa em uma leitura estruturada com implicaÃ§Ãµes, riscos e recomendaÃ§Ãµes prÃ¡ticas.",
        ],
        deliverables: ["Brief de pesquisa", "AnÃ¡lise estruturada", "Mapa competitivo ou de oportunidade", "RecomendaÃ§Ãµes estratÃ©gicas"],
      },
    },
  },
  {
    slug: "monthly-market-briefings",
    icon: "03",
    brochureHref: "/pdfs/services/monthly-market-briefings.pdf",
    samplePdfHref: "/pdfs/services/monthly-brief-on-gold.pdf",
    samplePrice: {
      es: {
        label: "Precio inicial",
        amount: "USD 490",
        note: "El precio final puede variar según alcance, geografía y plazo de entrega.",
      },
      en: {
        label: "Starting at",
        amount: "USD 490",
        note: "Final price may vary by scope, geography, and delivery time.",
      },
      pt: {
        label: "Preço inicial",
        amount: "USD 490",
        note: "O preço final pode variar conforme escopo, geografia e prazo de entrega.",
      },
    },
    locales: {
      es: {
        title: "Briefings mensuales de mercado",
        summary: "Actualizaciones recurrentes de inteligencia de mercado para seguir mercados, competidores, tendencias y seÃ±ales estratÃ©gicas.",
        body: [
          "Entregamos briefings mensuales para empresas que necesitan monitorear cambios de mercado, movimientos competitivos, tendencias emergentes y seÃ±ales relevantes para la estrategia.",
          "El objetivo es convertir la investigaciÃ³n en un hÃ¡bito de seguimiento ejecutivo, no en un documento aislado.",
        ],
        deliverables: ["Briefing mensual", "ActualizaciÃ³n competitiva", "SeÃ±ales de mercado", "Implicancias y prÃ³ximos pasos"],
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
        summary: "AtualizaÃ§Ãµes recorrentes de inteligÃªncia de mercado para acompanhar mercados, concorrentes, tendÃªncias e sinais estratÃ©gicos.",
        body: [
          "Entregamos briefings mensais para empresas que precisam monitorar mudanÃ§as de mercado, movimentos competitivos, tendÃªncias emergentes e sinais relevantes para a estratÃ©gia.",
          "O objetivo Ã© transformar a pesquisa em um hÃ¡bito recorrente de inteligÃªncia executiva, nÃ£o em um documento isolado.",
        ],
        deliverables: ["Briefing mensal", "AtualizaÃ§Ã£o competitiva", "Sinais de mercado", "ImplicaÃ§Ãµes e prÃ³ximos passos"],
      },
    },
  },
  {
    slug: "agentic-research-workstation",
    icon: "04",
    brochureHref: "/pdfs/services/agentic-market-intelligence-workstation-flyer.pdf",
    samplePrice: {
      es: {
        label: "Desde",
        amount: "$1490",
        note: "El precio final depende de la cantidad de agentes, workflows, complejidad del setup y el nivel de soporte requerido.",
      },
      en: {
        label: "Starting at",
        amount: "$1490",
        note: "Final pricing depends on the number of agents, workflows, setup complexity, and the support required for implementation.",
      },
      pt: {
        label: "A partir de",
        amount: "$1490",
        note: "O preço final depende da quantidade de agentes, workflows, complexidade do setup e do nível de suporte necessário.",
      },
    },
    locales: {
      es: {
        title: "Agentic Research Workstation",
        summary: "Sistema estructurado de inteligencia de mercado con workflows impulsados por IA, agentes especializados, fuentes conectadas y reportes orientados al negocio.",
        body: [
          "Este servicio esta pensado para organizaciones que necesitan convertir preguntas recurrentes de mercado en una capacidad de inteligencia mas continua, reutilizable y ejecutiva.",
          "La implementacion combina metodologia consultiva, contexto de negocio, workflows estructurados y soporte de investigacion para producir briefs, reportes, monitoreo y recomendaciones listas para decision.",
        ],
        deliverables: ["Diseno de workflow", "Configuracion de contexto", "Soporte de investigacion", "Outputs ejecutivos"],
      },
      en: {
        title: "Agentic Research Workstation",
        summary: "Structured market intelligence system with AI-powered workflows, specialized agents, connected sources, and business-oriented reporting.",
        body: [
          "This service is designed for organizations that need to turn recurring market questions into a more continuous, reusable, and executive intelligence capability.",
          "The implementation combines consulting discipline, business context, structured workflows, and research support to produce briefs, reports, monitoring, and decision-ready recommendations.",
        ],
        deliverables: ["Workflow design", "Context configuration", "Research support", "Executive outputs"],
      },
      pt: {
        title: "Agentic Research Workstation",
        summary: "Sistema estruturado de inteligencia de mercado com workflows impulsionados por IA, agentes especializados, fontes conectadas e relatorios orientados ao negocio.",
        body: [
          "Este servico foi pensado para organizacoes que precisam transformar perguntas recorrentes de mercado em uma capacidade de inteligencia mais continua, reutilizavel e executiva.",
          "A implementacao combina criterio consultivo, contexto de negocio, workflows estruturados e suporte de pesquisa para produzir briefs, relatorios, monitoramento e recomendacoes prontas para decisao.",
        ],
        deliverables: ["Desenho de workflow", "Configuracao de contexto", "Suporte de pesquisa", "Outputs executivos"],
      },
    },
  },
];


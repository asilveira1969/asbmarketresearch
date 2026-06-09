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
        deliverables: ["Relatório em PDF", "Resumo executivo", "Achados principais", "Fontes e anexos"],
      },
    },
  },
  {
    slug: "custom-research-studies",
    icon: "02",
    brochureHref: "/pdfs/services/uruguay-wine-exports.pdf",
    samplePdfHref: "/pdfs/services/custom-research-context-aware-analisis.pdf",
    samplePrice: {
      es: {
        label: "Precio inicial",
        amount: "USD 990",
        note: "El precio final puede variar según alcance, fuentes, geografía y plazo de entrega.",
      },
      en: {
        label: "Starting at",
        amount: "USD 990",
        note: "Final price may vary by scope, sources, geography, and delivery time.",
      },
      pt: {
        label: "Preço inicial",
        amount: "USD 990",
        note: "O preço final pode variar conforme escopo, fontes, geografia e prazo de entrega.",
      },
    },
    locales: {
      es: {
        title: "Estudios de investigación a medida",
        summary: "Investigación a medida para una pregunta de negocio, decisión de mercado, tema competitivo u oportunidad de crecimiento.",
        body: [
          "Diseñamos estudios puntuales en torno a una pregunta concreta del cliente, con alcance, fuentes y profundidad definidos según la decisión que se necesita respaldar.",
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
        deliverables: [
          "Context Aware Analysis (Document 1 of 2)",
          "Research Work (Document 2 of 2)",
          "Structured analysis",
          "Competitive or opportunity map",
          "Strategic recommendations",
        ],
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
    slug: "agentic-research-workstation",
    icon: "04",
    brochureHref: "/pdfs/services/agentic-market-intelligence-workstation-flyer.pdf",
    samplePrice: {
      es: {
        label: "Desde",
        amount: "USD 1490",
        note: "El precio final depende de la cantidad de agentes, workflows, complejidad del setup y el nivel de soporte requerido.",
      },
      en: {
        label: "Starting at",
        amount: "USD 1490",
        note: "Final pricing depends on the number of agents, workflows, setup complexity, and the support required for implementation.",
      },
      pt: {
        label: "A partir de",
        amount: "USD 1490",
        note: "O preço final depende da quantidade de agentes, workflows, complexidade do setup e do nível de suporte necessário.",
      },
    },
    locales: {
      es: {
        title: "Workstation agéntica de investigación",
        summary: "Sistema estructurado de inteligencia de mercado con flujos de trabajo impulsados por IA, agentes especializados, fuentes conectadas y reportes orientados al negocio.",
        body: [
          "Este servicio está pensado para organizaciones que necesitan convertir preguntas recurrentes de mercado en una capacidad de inteligencia más continua, reutilizable y ejecutiva.",
          "La implementación combina metodología consultiva, contexto de negocio, flujos de trabajo estructurados y soporte de investigación para producir briefs, reportes, monitoreo y recomendaciones listas para la toma de decisiones.",
        ],
        deliverables: ["Diseño de flujos de trabajo", "Configuración de contexto", "Soporte de investigación", "Resultados ejecutivos"],
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
        title: "Workstation agêntica de pesquisa",
        summary: "Sistema estruturado de inteligência de mercado com fluxos de trabalho impulsionados por IA, agentes especializados, fontes conectadas e relatórios orientados ao negócio.",
        body: [
          "Este serviço foi pensado para organizações que precisam transformar perguntas recorrentes de mercado em uma capacidade de inteligência mais contínua, reutilizável e executiva.",
          "A implementação combina metodologia consultiva, contexto de negócio, fluxos de trabalho estruturados e suporte de pesquisa para produzir briefs, relatórios, monitoramento e recomendações prontas para a tomada de decisão.",
        ],
        deliverables: ["Desenho de fluxos de trabalho", "Configuração de contexto", "Suporte de pesquisa", "Resultados executivos"],
      },
    },
  },
];

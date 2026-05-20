import type { Locale } from "@/config/locales";

type WorkstationHomeContent = {
  eyebrow: string;
  title: string;
  description: string;
  heroDetail: string;
  heroParagraphs: string[];
  primaryCta: string;
  secondaryCta: string;
  tertiaryCta: string;
  trustPoints: string[];
  valueTitle: string;
  valueBody: string;
  valuePoints: Array<{ title: string; body: string }>;
  audienceTitle: string;
  audienceBody: string;
  audienceItems: string[];
  serviceTitle: string;
  serviceBody: string;
  serviceClosing: string;
  methodologyTitle: string;
  methodologyBody: string;
  methodologySteps: Array<{ title: string; body: string }>;
  reportsTitle: string;
  reportsBody: string;
  reportsClosing: string;
  insightsTitle: string;
  insightsBody: string;
  insightsClosing: string;
  founderTitle: string;
  founderBody: string;
  founderPoints: string[];
  founderCta: string;
  newsletterTitle: string;
  newsletterBody: string;
  newsletterPoints: string[];
  newsletterCta: string;
  finalCtaTitle: string;
  finalCtaBody: string;
};

export const workstationHomeContent: Record<Locale, WorkstationHomeContent> = {
  es: {
    eyebrow: "Sistema Agéntico de Inteligencia de Mercado",
    title: "Workstation de investigación agéntica",
    description:
      "ASB Market Research ayuda a las organizaciones a construir capacidades estructuradas de inteligencia de mercado mediante workflows de investigación impulsados por IA, agentes especializados, fuentes de datos conectadas y sistemas de reporting orientados al negocio.",
    heroDetail:
      "La workstation fue diseñada para empresas que necesitan algo más que herramientas de IA basadas en conversación.",
    heroParagraphs: [
      "En lugar de prompts aislados y resultados genéricos, la plataforma combina agentes de investigación especializados, metodologías de investigación separadas, flujos de trabajo estructurados, fuentes de datos internas y externas conectadas, procesos de inteligencia recurrentes y entregables empresariales listos para decidir.",
      "El entorno admite investigación secundaria, investigación cualitativa, análisis cuantitativo, bases de datos empresariales, monitoreo de mercados, seguimiento de competidores y flujos de reporting impulsados por IA dentro de una sola infraestructura de investigación unificada.",
      "Las organizaciones pueden transformar preguntas recurrentes de negocio en operaciones de inteligencia reutilizables capaces de producir resúmenes ejecutivos, briefings estratégicos, reportes de mercado, monitoreo sectorial, análisis de oportunidades y soporte estructurado para la toma de decisiones.",
      "Los servicios tradicionales de investigación siguen disponibles, pero ahora funcionan como parte de un sistema de inteligencia de mercado más escalable, repetible y continuo.",
    ],
    primaryCta: "Solicitar consultoría del Workstation",
    secondaryCta: "Ver reportes de muestra",
    tertiaryCta: "Explorar servicios",
    trustPoints: [
      "Investigación estructurada sin crear un departamento interno",
      "Flujos de trabajo agénticos con criterio consultivo y entregables ejecutivos",
      "Enfoque preparado para América Latina, mercados emergentes y equipos multilingües",
    ],
    valueTitle: "Una capacidad de inteligencia de mercado, no solo un reporte aislado",
    valueBody:
      "El objetivo es convertir preguntas recurrentes sobre mercado, competencia, expansión, clientes y categorías en un sistema de trabajo repetible. ASB diseña el flujo de trabajo, configura el contexto y ayuda a producir inteligencia que pueda reutilizarse.",
    valuePoints: [
      {
        title: "Flujos repetibles",
        body: "Las preguntas frecuentes de negocio se transforman en procesos de investigación claros para monitoreo, comparación y actualización.",
      },
      {
        title: "Contexto de empresa",
        body: "El sistema puede organizar prioridades, mercados, competidores, fuentes y criterios de análisis propios de cada organización.",
      },
      {
        title: "Entregables ejecutivos",
        body: "El resultado son briefs, reportes, mapas competitivos y recomendaciones preparadas para conversaciones de dirección, estrategia o ventas.",
      },
    ],
    audienceTitle: "Para quién está diseñado",
    audienceBody:
      "El workstation está pensado para organizaciones que necesitan inteligencia profesional, pero no siempre tienen equipo, tiempo o metodología para producirla internamente.",
    audienceItems: [
      "Empresas sin departamento de investigación o inteligencia competitiva",
      "Cámaras, asociaciones empresariales y organizaciones sectoriales",
      "Compañías que operan en América Latina o mercados emergentes",
      "Equipos de estrategia, crecimiento, ventas y desarrollo comercial",
      "Consultores y firmas de consultoría que necesitan soporte de investigación",
      "Empresas evaluando expansión, inversión, categorías o nuevos canales",
    ],
    serviceTitle: "De reportes puntuales a una capacidad recurrente",
    serviceBody:
      "La oferta se organiza como una escalera: reportes de industria y producto, estudios a medida, briefings mensuales y el Market Research Workstation como sistema agéntico de inteligencia de mercado.",
    serviceClosing:
      "Una empresa puede comenzar con un entregable puntual y evolucionar hacia un flujo de trabajo continuo que preserve conocimiento, mejore velocidad y reduzca la improvisación en decisiones de mercado.",
    methodologyTitle: "Cómo funciona el Workstation",
    methodologyBody:
      "La implementación mantiene el estilo consultivo de ASB: definir la decisión, mapear fuentes y contexto, diseñar flujos de trabajo y producir inteligencia útil para actuar.",
    methodologySteps: [
      {
        title: "Definir preguntas de inteligencia",
        body: "Se identifican las decisiones que el sistema debe apoyar: expansión, competencia, categorías, pricing, canales, clientes o riesgos.",
      },
      {
        title: "Configurar contexto y fuentes",
        body: "Se ordenan datos internos, fuentes públicas, competidores, mercados prioritarios y criterios de lectura para cada organización.",
      },
      {
        title: "Producir briefs y reportes",
        body: "Los flujos de trabajo generan salidas reutilizables: actualizaciones competitivas, mapas de mercado, notas de alcance, reportes y recomendaciones.",
      },
    ],
    reportsTitle: "Ejemplos del tipo de output que puede producir la capacidad",
    reportsBody:
      "Los reportes de muestra ayudan a visualizar cómo se traduce la investigación en documentos ejecutivos, comparables y fáciles de usar en discusiones comerciales o estratégicas.",
    reportsClosing:
      "La biblioteca puede crecer con reportes por industria, mercado, categoría, país, asociación o necesidad recurrente de cada cliente.",
    insightsTitle: "Insights para educar al mercado y construir autoridad",
    insightsBody:
      "La capa editorial debe reforzar la idea central: las mejores decisiones requieren preguntas bien formuladas, fuentes ordenadas y síntesis clara.",
    insightsClosing:
      "Cada hallazgo puede enlazar a casos de uso del workstation, servicios de investigación o futuras landings por industria y mercado.",
    founderTitle: "Tecnología con criterio consultivo",
    founderBody:
      "El valor no está solo en automatizar búsquedas. Está en diseñar una forma seria de investigar, interpretar y comunicar información de mercado.",
    founderPoints: [
      "Metodología profesional para briefs, fuentes y síntesis ejecutiva",
      "Implementación adaptada a clientes corporativos, institucionales y consultivos",
      "Enfoque sobrio para decisiones de expansión, competencia e inversión",
    ],
    founderCta: "Conocer el perfil completo",
    newsletterTitle: "Seguimiento profesional de inteligencia de mercado",
    newsletterBody:
      "La newsletter puede funcionar como un canal editorial para compartir nuevos hallazgos, reportes, marcos de trabajo y ejemplos de inteligencia de mercado aplicada.",
    newsletterPoints: [
      "Notas sobre inteligencia competitiva y expansión",
      "Nuevos reportes, ejemplos y materiales descargables",
      "Ideas sobre IA, flujos de trabajo de investigación y mercados emergentes",
    ],
    newsletterCta: "Suscribirse al newsletter",
    finalCtaTitle: "Si tu organización necesita mejores decisiones de mercado, el siguiente paso es diseñar el flujo de trabajo.",
    finalCtaBody:
      "ASB Market Research puede ayudarte a convertir preguntas recurrentes en una capacidad estructurada de inteligencia de mercado, desde un primer reporte hasta un workstation agéntico personalizado.",
  },
  en: {
    eyebrow: "Agentic Market Intelligence System",
    title: "Agentic Research Workstation",
    description:
      "ASB Market Research supports organizations in building structured market intelligence capabilities through AI-powered research workflows, specialized agents, connected data sources, and business-oriented reporting systems.",
    heroDetail:
      "The workstation was designed for companies that need more than conversation-based AI tools.",
    heroParagraphs: [
      "Instead of isolated prompts and generic outputs, the platform combines specialized research agents; separated research methodologies; structured workflows; connected internal and external data sources; recurring intelligence processes; and decision-ready business deliverables.",
      "The environment supports secondary research, qualitative research, quantitative analysis, company databases, market monitoring, competitor tracking, and AI-powered reporting workflows inside one unified research infrastructure.",
      "Organizations can transform recurring business questions into reusable intelligence operations capable of producing executive summaries, strategic briefings, market reports, industry monitoring, opportunity analysis, and structured decision support.",
      "Traditional research services remain available, but they now operate as part of a more scalable, repeatable, and continuous market intelligence system.",
    ],
    primaryCta: "Request Workstation Consultation",
    secondaryCta: "View Sample Reports",
    tertiaryCta: "Explore Services",
    trustPoints: [
      "Structured research without building a full internal department",
      "Agentic workflows shaped by consulting discipline and executive outputs",
      "Built for Latin America, emerging markets, and multilingual teams",
    ],
    valueTitle: "A market intelligence capability, not just another isolated report",
    valueBody:
      "The goal is to turn recurring questions about markets, competitors, expansion, customers, and categories into a repeatable operating system. ASB designs the workflow, configures the context, and helps produce intelligence that can be reused.",
    valuePoints: [
      {
        title: "Repeatable workflows",
        body: "Recurring business questions become clear research processes for monitoring, comparison, and updates.",
      },
      {
        title: "Company context",
        body: "The system can organize priorities, markets, competitors, sources, and analysis criteria around each organization.",
      },
      {
        title: "Executive outputs",
        body: "Outputs include briefs, reports, competitive maps, and recommendations prepared for management, strategy, and commercial teams.",
      },
    ],
    audienceTitle: "Who the workstation is built for",
    audienceBody:
      "The workstation is designed for organizations that need professional intelligence, but do not always have the team, time, or method to produce it internally.",
    audienceItems: [
      "Companies without a research or competitive intelligence department",
      "Business associations, chambers, and sector organizations",
      "Companies operating in Latin America or emerging markets",
      "Strategy, growth, sales, and commercial development teams",
      "Consultants and advisory firms that need research support",
      "Companies evaluating expansion, investment, categories, or new channels",
    ],
    serviceTitle: "From one-off reports to recurring intelligence capability",
    serviceBody:
      "The offer is organized as a ladder: industry and product reports, custom research studies, monthly market briefings, and the Market Research Workstation as an agentic market intelligence system.",
    serviceClosing:
      "A company can begin with a single deliverable and evolve into a continuous workflow that preserves knowledge, improves speed, and reduces improvisation in market decisions.",
    methodologyTitle: "How the Workstation works",
    methodologyBody:
      "Define the decision, map sources and context, design workflows, and produce intelligence that is useful for action.",
    methodologySteps: [
      {
        title: "Define intelligence questions",
        body: "We identify the decisions the system must support: expansion, competition, categories, pricing, channels, customers, or risks.",
      },
      {
        title: "Configure context and sources",
        body: "Internal data, public sources, competitors, priority markets, and analysis criteria are organized around each organization.",
      },
      {
        title: "Produce briefs and reports",
        body: "Workflows generate reusable outputs: competitor updates, market maps, scoping notes, reports, and recommendations.",
      },
    ],
    reportsTitle: "Examples of the outputs this capability can support",
    reportsBody:
      "Sample reports help visitors understand how research becomes executive documents that are comparable, practical, and useful in commercial or strategic discussions.",
    reportsClosing:
      "The library can grow with reports by industry, market, category, country, association, or each client's recurring intelligence need.",
    insightsTitle: "Insights that educate the market and build authority",
    insightsBody:
      "The editorial layer should reinforce the central idea: better decisions require better-framed questions, organized sources, and clear synthesis.",
    insightsClosing:
      "Each insight can connect to workstation use cases, research services, or future landing pages by industry and market.",
    founderTitle: "Technology guided by consulting discipline",
    founderBody:
      "The value is not only in automating searches. It is in designing a serious way to investigate, interpret, and communicate market information.",
    founderPoints: [
      "Professional methodology for briefs, sources, and executive synthesis",
      "Implementation suitable for corporate, institutional, and advisory clients",
      "A sober approach for expansion, competition, and investment decisions",
    ],
    founderCta: "View full profile",
    newsletterTitle: "Market Intelligence Newsletter",
    newsletterBody:
      "Receive occasional updates with market insights, research notes, reports, and selected examples from our intelligence workflows.",
    newsletterPoints: [
      "Market intelligence updates",
      "Research reports and examples",
      "AI and workflow insights",
      "Emerging markets and industry notes",
    ],
    newsletterCta: "Subscribe to Newsletter",
    finalCtaTitle: "If your organization needs better market decisions, the next step is to design the workflow.",
    finalCtaBody:
      "ASB Market Research supports organizations in transforming recurring business questions into structured market intelligence systems, from focused research reports to customized agentic workstations.",
  },
  pt: {
    eyebrow: "Sistema agêntico de inteligência de mercado",
    title: "Workstation de pesquisa agêntica",
    description:
      "A ASB Market Research ajuda organizações a construir capacidades estruturadas de inteligência de mercado por meio de workflows de pesquisa impulsionados por IA, agentes especializados, fontes de dados conectadas e sistemas de relatórios orientados para negócios.",
    heroDetail:
      "A workstation foi projetada para empresas que precisam de mais do que ferramentas de IA baseadas em conversa.",
    heroParagraphs: [
      "Em vez de prompts isolados e resultados genéricos, a plataforma combina agentes de pesquisa especializados, metodologias de pesquisa separadas, workflows estruturados, fontes de dados internas e externas conectadas, processos recorrentes de inteligência e entregáveis empresariais prontos para decisão.",
      "O ambiente oferece suporte a pesquisa secundária, pesquisa qualitativa, análise quantitativa, bases de dados empresariais, monitoramento de mercado, acompanhamento de concorrentes e workflows de relatórios impulsionados por IA dentro de uma única infraestrutura de pesquisa unificada.",
      "As organizações podem transformar perguntas recorrentes de negócio em operações de inteligência reutilizáveis capazes de produzir resumos executivos, briefings estratégicos, relatórios de mercado, monitoramento setorial, análise de oportunidades e suporte estruturado à tomada de decisão.",
      "Os serviços tradicionais de pesquisa continuam disponíveis, mas agora operam como parte de um sistema de inteligência de mercado mais escalável, repetível e contínuo.",
    ],
    primaryCta: "Solicitar consultoria do Workstation",
    secondaryCta: "Ver relatórios de amostra",
    tertiaryCta: "Explorar serviços",
    trustPoints: [
      "Pesquisa estruturada sem criar um departamento interno completo",
      "Fluxos de trabalho agênticos com critério consultivo e entregáveis executivos",
      "Enfoque preparado para América Latina, mercados emergentes e equipes multilíngues",
    ],
    valueTitle: "Uma capacidade de inteligência de mercado, não apenas outro relatório isolado",
    valueBody:
      "O objetivo é transformar perguntas recorrentes sobre mercado, concorrência, expansão, clientes e categorias em um sistema de trabalho repetível. A ASB desenha o fluxo de trabalho, configura o contexto e ajuda a produzir inteligência que pode ser reutilizada.",
    valuePoints: [
      {
        title: "Fluxos repetíveis",
        body: "Perguntas frequentes de negócio se transformam em processos claros de pesquisa para monitoramento, comparação e atualização.",
      },
      {
        title: "Contexto da empresa",
        body: "O sistema pode organizar prioridades, mercados, concorrentes, fontes e critérios de análise próprios de cada organização.",
      },
      {
        title: "Entregáveis executivos",
        body: "Os resultados incluem briefs, relatórios, mapas competitivos e recomendações preparadas para gestão, estratégia e equipes comerciais.",
      },
    ],
    audienceTitle: "Para quem o workstation foi desenhado",
    audienceBody:
      "O workstation foi pensado para organizações que precisam de inteligência profissional, mas nem sempre possuem equipe, tempo ou metodologia para produzi-la internamente.",
    audienceItems: [
      "Empresas sem departamento de pesquisa ou inteligência competitiva",
      "Associações empresariais, câmaras e organizações setoriais",
      "Empresas que operam na América Latina ou em mercados emergentes",
      "Equipes de estratégia, crescimento, vendas e desenvolvimento comercial",
      "Consultores e firmas de consultoria que precisam de suporte de pesquisa",
      "Empresas avaliando expansão, investimento, categorias ou novos canais",
    ],
    serviceTitle: "De relatórios pontuais a uma capacidade recorrente",
    serviceBody:
      "A oferta se organiza como uma escada: relatórios de indústria e produto, estudos sob medida, briefings mensais e o Market Research Workstation como sistema agêntico de inteligência de mercado.",
    serviceClosing:
      "Uma empresa pode começar com um entregável pontual e evoluir para um fluxo de trabalho contínuo que preserve conhecimento, melhore velocidade e reduza improvisação em decisões de mercado.",
    methodologyTitle: "Como o Workstation funciona",
    methodologyBody:
      "A implementação mantém o estilo consultivo da ASB: definir a decisão, mapear fontes e contexto, desenhar fluxos de trabalho e produzir inteligência útil para agir.",
    methodologySteps: [
      {
        title: "Definir perguntas de inteligência",
        body: "Identificamos as decisões que o sistema deve apoiar: expansão, concorrência, categorias, pricing, canais, clientes ou riscos.",
      },
      {
        title: "Configurar contexto e fontes",
        body: "Dados internos, fontes públicas, concorrentes, mercados prioritários e critérios de análise são organizados para cada organização.",
      },
      {
        title: "Produzir briefs e relatórios",
        body: "Os fluxos de trabalho geram entregas reutilizáveis: atualizações competitivas, mapas de mercado, notas de escopo, relatórios e recomendações.",
      },
    ],
    reportsTitle: "Exemplos dos entregáveis que essa capacidade pode apoiar",
    reportsBody:
      "Os relatórios de amostra ajudam a visualizar como a pesquisa se transforma em documentos executivos, comparáveis e úteis em discussões comerciais ou estratégicas.",
    reportsClosing:
      "A biblioteca pode crescer com relatórios por indústria, mercado, categoria, país, associação ou necessidade recorrente de cada cliente.",
    insightsTitle: "Insights para educar o mercado e construir autoridade",
    insightsBody:
      "A camada editorial deve reforçar a ideia central: melhores decisões exigem perguntas bem formuladas, fontes organizadas e síntese clara.",
    insightsClosing:
      "Cada insight pode se conectar a casos de uso do workstation, serviços de pesquisa ou futuras landings por indústria e mercado.",
    founderTitle: "Tecnologia guiada por critério consultivo",
    founderBody:
      "O valor não está apenas em automatizar buscas. Está em desenhar uma forma séria de investigar, interpretar e comunicar informação de mercado.",
    founderPoints: [
      "Metodologia profissional para briefs, fontes e síntese executiva",
      "Implementação adequada para clientes corporativos, institucionais e consultivos",
      "Enfoque sóbrio para decisões de expansão, concorrência e investimento",
    ],
    founderCta: "Ver perfil completo",
    newsletterTitle: "Acompanhamento profissional de inteligência de mercado",
    newsletterBody:
      "A newsletter pode funcionar como um canal editorial para compartilhar novos achados, relatórios, estruturas de trabalho e exemplos de inteligência de mercado aplicada.",
    newsletterPoints: [
      "Notas sobre inteligência competitiva e expansão",
      "Novos relatórios, exemplos e materiais baixáveis",
      "Ideias sobre IA, fluxos de trabalho de pesquisa e mercados emergentes",
    ],
    newsletterCta: "Assinar newsletter",
    finalCtaTitle: "Se sua organização precisa tomar melhores decisões de mercado, o próximo passo é desenhar o fluxo de trabalho.",
    finalCtaBody:
      "A ASB Market Research pode ajudar a transformar perguntas recorrentes em uma capacidade estruturada de inteligência de mercado, desde um primeiro relatório até um workstation agêntico personalizado.",
  },
};

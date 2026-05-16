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
    eyebrow: "Sistema Agentic de Inteligencia de Mercado",
    title: "Market Research Workstation para equipos que necesitan mejores decisiones de mercado.",
    description:
      "ASB Market Research ayuda a empresas, camaras, asociaciones, consultores y equipos comerciales a construir una capacidad de inteligencia de mercado sin depender de un departamento interno completo de research.",
    heroDetail:
      "El workstation combina metodologia consultiva, agentes de AI, contexto de la empresa, fuentes publicas, conocimiento interno y workflows estructurados para convertir preguntas recurrentes de negocio en reportes, briefings e insights listos para decisiones.",
    heroParagraphs: [
      "Esta propuesta esta pensada para organizaciones que necesitan monitorear mercados, competidores, riesgos, oportunidades y tendencias con mayor disciplina, especialmente en America Latina y mercados emergentes.",
      "Los servicios tradicionales de research siguen disponibles, pero ahora funcionan como puntos de entrada hacia una capacidad mas recurrente, reutilizable y escalable de inteligencia de mercado.",
    ],
    primaryCta: "Solicitar consultoria del Workstation",
    secondaryCta: "Ver reportes de muestra",
    tertiaryCta: "Explorar servicios",
    trustPoints: [
      "Research estructurado sin crear un departamento interno",
      "Workflows agentic con criterio consultivo y outputs ejecutivos",
      "Enfoque preparado para America Latina, mercados emergentes y equipos multilingues",
    ],
    valueTitle: "Una capacidad de inteligencia de mercado, no solo un reporte aislado",
    valueBody:
      "El objetivo es convertir preguntas recurrentes sobre mercado, competencia, expansion, clientes y categorias en un sistema de trabajo repetible. ASB disena el workflow, configura el contexto y ayuda a producir inteligencia que pueda reutilizarse.",
    valuePoints: [
      {
        title: "Workflows repetibles",
        body: "Preguntas frecuentes de negocio se transforman en procesos de research claros para monitoreo, comparacion y actualizacion.",
      },
      {
        title: "Contexto de empresa",
        body: "El sistema puede organizar prioridades, mercados, competidores, fuentes y criterios de analisis propios de cada organizacion.",
      },
      {
        title: "Outputs ejecutivos",
        body: "El resultado son briefs, reportes, mapas competitivos y recomendaciones preparadas para conversaciones de direccion, estrategia o ventas.",
      },
    ],
    audienceTitle: "Para quien esta disenado",
    audienceBody:
      "El workstation esta pensado para organizaciones que necesitan inteligencia profesional, pero no siempre tienen equipo, tiempo o metodologia para producirla internamente.",
    audienceItems: [
      "Empresas sin departamento de research o inteligencia competitiva",
      "Camaras, asociaciones empresariales y organizaciones sectoriales",
      "Companias que operan en America Latina o mercados emergentes",
      "Equipos de estrategia, crecimiento, ventas y desarrollo comercial",
      "Consultores y firmas de advisory que necesitan soporte de research",
      "Empresas evaluando expansion, inversion, categorias o nuevos canales",
    ],
    serviceTitle: "De reportes puntuales a una capacidad recurrente",
    serviceBody:
      "La oferta se organiza como una escalera: reportes de industria y producto, estudios a medida, briefings mensuales y el Market Research Workstation como sistema agentic de inteligencia de mercado.",
    serviceClosing:
      "Una empresa puede comenzar con un entregable puntual y evolucionar hacia un workflow continuo que preserve conocimiento, mejore velocidad y reduzca la improvisacion en decisiones de mercado.",
    methodologyTitle: "Como funciona el Workstation",
    methodologyBody:
      "La implementacion mantiene el estilo consultivo de ASB: definir la decision, mapear fuentes y contexto, disenar workflows y producir inteligencia util para actuar.",
    methodologySteps: [
      {
        title: "Definir preguntas de inteligencia",
        body: "Se identifican las decisiones que el sistema debe apoyar: expansion, competencia, categorias, pricing, canales, clientes o riesgos.",
      },
      {
        title: "Configurar contexto y fuentes",
        body: "Se ordenan datos internos, fuentes publicas, competidores, mercados prioritarios y criterios de lectura para cada organizacion.",
      },
      {
        title: "Producir briefs y reportes",
        body: "Los workflows generan salidas reutilizables: updates competitivos, mapas de mercado, scoping notes, reportes y recomendaciones.",
      },
    ],
    reportsTitle: "Ejemplos del tipo de output que puede producir la capacidad",
    reportsBody:
      "Los reportes de muestra ayudan a visualizar como se traduce la investigacion en documentos ejecutivos, comparables y faciles de usar en discusiones comerciales o estrategicas.",
    reportsClosing:
      "La biblioteca puede crecer con reportes por industria, mercado, categoria, pais, asociacion o necesidad recurrente de cada cliente.",
    insightsTitle: "Insights para educar al mercado y construir autoridad",
    insightsBody:
      "La capa editorial debe reforzar la idea central: las mejores decisiones requieren preguntas bien formuladas, fuentes ordenadas y sintesis clara.",
    insightsClosing:
      "Cada insight puede enlazar a casos de uso del workstation, servicios de research o futuras landings por industria y mercado.",
    founderTitle: "Tecnologia con criterio consultivo",
    founderBody:
      "El valor no esta solo en automatizar busquedas. Esta en disenar una forma seria de investigar, interpretar y comunicar informacion de mercado.",
    founderPoints: [
      "Metodologia profesional para briefs, fuentes y sintesis ejecutiva",
      "Implementacion adaptada a clientes corporativos, institucionales y consultivos",
      "Enfoque sobrio para decisiones de expansion, competencia e inversion",
    ],
    founderCta: "Conocer el perfil completo",
    newsletterTitle: "Seguimiento profesional de inteligencia de mercado",
    newsletterBody:
      "La newsletter puede funcionar como un canal editorial para compartir nuevos insights, reportes, frameworks y ejemplos de market intelligence aplicada.",
    newsletterPoints: [
      "Notas sobre inteligencia competitiva y expansion",
      "Nuevos reportes, ejemplos y materiales descargables",
      "Ideas sobre AI, research workflows y mercados emergentes",
    ],
    newsletterCta: "Suscribirse al newsletter",
    finalCtaTitle: "Si tu organizacion necesita mejores decisiones de mercado, el siguiente paso es disenar el workflow.",
    finalCtaBody:
      "ASB Market Research puede ayudarte a convertir preguntas recurrentes en una capacidad estructurada de inteligencia de mercado, desde un primer reporte hasta un workstation agentic personalizado.",
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
      "ASB Market Research supports organizations in transforming recurring business questions into structured market intelligence systems - from focused research reports to customized agentic workstations.",
  },
  pt: {
    eyebrow: "Sistema Agentic de Inteligencia de Mercado",
    title: "Market Research Workstation para equipes que precisam tomar melhores decisoes de mercado.",
    description:
      "A ASB Market Research ajuda empresas, associacoes, camaras, consultores e equipes comerciais a construir capacidade de inteligencia de mercado sem depender de um departamento interno completo de research.",
    heroDetail:
      "O workstation combina metodologia consultiva, agentes de AI, contexto da empresa, fontes publicas, conhecimento interno e workflows estruturados para transformar perguntas recorrentes de negocio em relatorios, briefings e insights prontos para decisao.",
    heroParagraphs: [
      "A proposta foi pensada para organizacoes que precisam monitorar mercados, concorrentes, riscos, oportunidades e tendencias com mais disciplina, especialmente na America Latina e em mercados emergentes.",
      "Os servicos tradicionais de research continuam disponiveis, mas agora funcionam como pontos de entrada para uma capacidade mais recorrente, reutilizavel e escalavel de inteligencia de mercado.",
    ],
    primaryCta: "Solicitar consultoria do Workstation",
    secondaryCta: "Ver relatorios de amostra",
    tertiaryCta: "Explorar servicos",
    trustPoints: [
      "Research estruturado sem criar um departamento interno completo",
      "Workflows agentic com criterio consultivo e outputs executivos",
      "Enfoque preparado para America Latina, mercados emergentes e equipes multilingues",
    ],
    valueTitle: "Uma capacidade de market intelligence, nao apenas outro relatorio isolado",
    valueBody:
      "O objetivo e transformar perguntas recorrentes sobre mercado, concorrencia, expansao, clientes e categorias em um sistema de trabalho repetivel. A ASB desenha o workflow, configura o contexto e ajuda a produzir inteligencia que pode ser reutilizada.",
    valuePoints: [
      {
        title: "Workflows repetiveis",
        body: "Perguntas frequentes de negocio se transformam em processos claros de research para monitoramento, comparacao e atualizacao.",
      },
      {
        title: "Contexto da empresa",
        body: "O sistema pode organizar prioridades, mercados, concorrentes, fontes e criterios de analise proprios de cada organizacao.",
      },
      {
        title: "Outputs executivos",
        body: "Os resultados incluem briefs, relatorios, mapas competitivos e recomendacoes preparadas para gestao, estrategia e equipes comerciais.",
      },
    ],
    audienceTitle: "Para quem o workstation foi desenhado",
    audienceBody:
      "O workstation foi pensado para organizacoes que precisam de inteligencia profissional, mas nem sempre possuem equipe, tempo ou metodologia para produzi-la internamente.",
    audienceItems: [
      "Empresas sem departamento de research ou inteligencia competitiva",
      "Associacoes empresariais, camaras e organizacoes setoriais",
      "Empresas que operam na America Latina ou em mercados emergentes",
      "Equipes de estrategia, crescimento, vendas e desenvolvimento comercial",
      "Consultores e firmas de advisory que precisam de suporte de research",
      "Empresas avaliando expansao, investimento, categorias ou novos canais",
    ],
    serviceTitle: "De relatorios pontuais a uma capacidade recorrente",
    serviceBody:
      "A oferta se organiza como uma escada: relatorios de industria e produto, estudos sob medida, briefings mensais e o Market Research Workstation como sistema agentic de inteligencia de mercado.",
    serviceClosing:
      "Uma empresa pode comecar com um entregavel pontual e evoluir para um workflow continuo que preserve conhecimento, melhore velocidade e reduza improvisacao em decisoes de mercado.",
    methodologyTitle: "Como o Workstation funciona",
    methodologyBody:
      "A implementacao mantem o estilo consultivo da ASB: definir a decisao, mapear fontes e contexto, desenhar workflows e produzir inteligencia util para agir.",
    methodologySteps: [
      {
        title: "Definir perguntas de inteligencia",
        body: "Identificamos as decisoes que o sistema deve apoiar: expansao, concorrencia, categorias, pricing, canais, clientes ou riscos.",
      },
      {
        title: "Configurar contexto e fontes",
        body: "Dados internos, fontes publicas, concorrentes, mercados prioritarios e criterios de analise sao organizados para cada organizacao.",
      },
      {
        title: "Produzir briefs e relatorios",
        body: "Os workflows geram outputs reutilizaveis: updates competitivos, mapas de mercado, scoping notes, relatorios e recomendacoes.",
      },
    ],
    reportsTitle: "Exemplos dos outputs que essa capacidade pode apoiar",
    reportsBody:
      "Os relatorios de amostra ajudam a visualizar como a pesquisa se transforma em documentos executivos, comparaveis e uteis em discussoes comerciais ou estrategicas.",
    reportsClosing:
      "A biblioteca pode crescer com relatorios por industria, mercado, categoria, pais, associacao ou necessidade recorrente de cada cliente.",
    insightsTitle: "Insights para educar o mercado e construir autoridade",
    insightsBody:
      "A camada editorial deve reforcar a ideia central: melhores decisoes exigem perguntas bem formuladas, fontes organizadas e sintese clara.",
    insightsClosing:
      "Cada insight pode se conectar a casos de uso do workstation, servicos de research ou futuras landings por industria e mercado.",
    founderTitle: "Tecnologia guiada por criterio consultivo",
    founderBody:
      "O valor nao esta apenas em automatizar buscas. Esta em desenhar uma forma seria de investigar, interpretar e comunicar informacao de mercado.",
    founderPoints: [
      "Metodologia profissional para briefs, fontes e sintese executiva",
      "Implementacao adequada para clientes corporativos, institucionais e consultivos",
      "Enfoque sobrio para decisoes de expansao, concorrencia e investimento",
    ],
    founderCta: "Ver perfil completo",
    newsletterTitle: "Acompanhamento profissional de inteligencia de mercado",
    newsletterBody:
      "A newsletter pode funcionar como canal editorial para compartilhar novos insights, relatorios, frameworks e exemplos de market intelligence aplicada.",
    newsletterPoints: [
      "Notas sobre inteligencia competitiva e expansao",
      "Novos relatorios, exemplos e materiais baixaveis",
      "Ideias sobre AI, research workflows e mercados emergentes",
    ],
    newsletterCta: "Assinar Newsletter",
    finalCtaTitle: "Se sua organizacao precisa tomar melhores decisoes de mercado, o proximo passo e desenhar o workflow.",
    finalCtaBody:
      "A ASB Market Research pode ajudar a transformar perguntas recorrentes em uma capacidade estruturada de inteligencia de mercado, desde um primeiro relatorio ate um workstation agentic personalizado.",
  },
};

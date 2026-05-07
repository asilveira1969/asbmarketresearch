import type { Locale } from "@/config/locales";

export type StaticPageKey = "about" | "services" | "methodology" | "sample-reports" | "insights" | "contact" | "quotation" | "newsletter" | "privacy-policy" | "terms";

type HomeLocaleContent = {
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

export const homeContent: Record<Locale, HomeLocaleContent> = {
  es: {
    eyebrow: "Investigacion de mercado y consultoria estrategica",
    title: "ASB Market Research transforma la incertidumbre del mercado en decisiones estrategicas estructuradas.",
    description:
      "Desarrollamos investigaciones de mercado totalmente personalizadas, disenadas en funcion de los objetivos especificos de cada cliente. No producimos reportes genericos de industria: analizamos cada situacion de manera independiente para identificar oportunidades, riesgos y dinamicas competitivas relevantes.",
    heroDetail:
      "Nuestro enfoque se centra en el descubrimiento y la interpretacion de informacion clave del mercado, integrando multiples fuentes para construir una vision clara y accionable. A partir de este analisis, elaboramos recomendaciones estrategicas que aportan una perspectiva solida y, cuando es necesario, alternativas sobre las hipotesis planteadas.",
    heroParagraphs: [
      "Contamos con una capacidad analitica robusta y acceso a una amplia base de informacion secundaria, lo que nos permite estructurar reportes precisos, relevantes y adaptados a cada necesidad.",
      "El resultado es un documento profesional de varias paginas que describe el contexto de mercado, los actores clave, las tendencias y los insights necesarios para respaldar la toma de decisiones y mejorar la ejecucion estrategica.",
    ],
    primaryCta: "Solicitar un reporte de investigacion",
    secondaryCta: "Ver reportes de muestra",
    tertiaryCta: "Contactar",
    trustPoints: [
      "Reportes ejecutivos claros y argumentados",
      "Enfoque sobrio para decisiones comerciales e inversion",
      "Cobertura preparada para tres idiomas y crecimiento editorial",
    ],
    valueTitle: "Una propuesta de valor centrada en claridad, rigor y utilidad ejecutiva",
    valueBody:
      "ASB Market Research no produce volumen de informacion por si mismo. El foco esta en ordenar datos, priorizar senales relevantes y convertir hallazgos en un insumo serio para decidir.",
    valuePoints: [
      {
        title: "Perspectiva consultiva",
        body: "Cada estudio se construye alrededor de la decision que debe tomarse, no solo alrededor del tema investigado.",
      },
      {
        title: "Lectura estructurada del mercado",
        body: "Organizamos demanda, competencia, barreras, riesgos y escenarios en un formato claro para lectura ejecutiva.",
      },
      {
        title: "Entregables utilizables",
        body: "El resultado final esta pensado para conversaciones comerciales, de direccion, expansion o evaluacion de inversion.",
      },
    ],
    audienceTitle: "A quien sirve ASB Market Research",
    audienceBody:
      "La propuesta esta preparada para organizaciones y profesionales que necesitan evidencia mejor ordenada para decidir con mayor seguridad.",
    audienceItems: [
      "Empresas que estudian expansion geografica o sectorial",
      "Equipos comerciales o estrategicos que necesitan inteligencia competitiva",
      "Inversionistas y asesores que requieren un primer marco de analisis serio",
      "Consultores que necesitan soporte documental riguroso para sus clientes",
    ],
    serviceTitle: "Servicios de research para distintos niveles de necesidad",
    serviceBody:
      "La oferta se organiza en cuatro niveles: reportes de industria y producto, estudios a medida, briefings mensuales y sistemas agent-powered de inteligencia de mercado.",
    serviceClosing:
      "La progresion Reports -> Studies -> Briefings -> Systems permite empezar con un entregable puntual y avanzar hacia una capacidad recurrente o interna de research.",
    methodologyTitle: "Metodo de trabajo disciplinado y comprensible",
    methodologyBody:
      "La metodologia se comunica con el tono de una firma consultiva: definicion clara del brief, investigacion estructurada y sintesis final pensada para actuar.",
    methodologySteps: [
      {
        title: "Definicion del objetivo",
        body: "Se establece que decision debe apoyar el estudio, que alcance tiene y que profundidad necesita el cliente.",
      },
      {
        title: "Investigacion y contraste",
        body: "Se relevan fuentes, competidores, dinamicas de mercado y referencias comparables con criterio de validacion.",
      },
      {
        title: "Sintesis ejecutiva",
        body: "Los hallazgos se ordenan en una lectura profesional con implicancias, riesgos y recomendacion de siguiente paso.",
      },
    ],
    reportsTitle: "Reportes de muestra preparados para descarga directa y evolucion futura",
    reportsBody:
      "La homepage presenta ejemplos de salida para que el visitante entienda rapidamente el tipo de producto intelectual que puede solicitar.",
    reportsClosing:
      "Esta seccion esta lista para crecer con mas reportes, previews embebidos, fichas sectoriales o documentos premium descargables.",
    insightsTitle: "Insights para construir autoridad y posicionamiento organico",
    insightsBody:
      "La capa editorial permite publicar articulos, notas estrategicas y analisis breves con valor SEO y con un tono coherente con una firma de investigacion seria.",
    insightsClosing:
      "Cada insight puede vincularse a un servicio, a un reporte o a una futura landing por industria, mercado o tema.",
    founderTitle: "Credibilidad profesional y respaldo personal visible",
    founderBody:
      "La homepage incorpora un bloque de confianza para presentar al fundador, sus credenciales y el enfoque profesional detras de la firma.",
    founderPoints: [
      "Perfil visible con biografia, CV y enlaces profesionales",
      "Presentacion adecuada para clientes institucionales o corporativos",
      "Base lista para reforzar autoridad, experiencia sectorial y trayectoria",
    ],
    founderCta: "Conocer el perfil completo",
    newsletterTitle: "Newsletter para seguimiento profesional y relacion de largo plazo",
    newsletterBody:
      "La suscripcion no se presenta como marketing liviano, sino como una via para recibir nuevos analisis, publicaciones y materiales seleccionados.",
    newsletterPoints: [
      "Nuevos insights y articulos",
      "Actualizaciones sobre reportes y documentos de muestra",
      "Notas ejecutivas sobre mercado, competencia y expansion",
    ],
    newsletterCta: "Suscribirse al newsletter",
    finalCtaTitle: "Si ya existe una pregunta de mercado importante, el siguiente paso es estructurarla correctamente.",
    finalCtaBody:
      "ASB Market Research puede convertir una necesidad difusa en un brief claro, un reporte ejecutivo o una lectura competitiva util para apoyar decisiones con mas fundamento.",
  },
  en: {
    eyebrow: "Market research and strategic consulting",
    title: "ASB Market Research turns market uncertainty into better structured business decisions.",
    description:
      "We develop executive-grade research for leaders, investors, consultants, and companies that need a clearer view of markets, competitors, and commercial opportunities.",
    heroDetail:
      "Typical outputs include custom research reports, market entry assessments, competitor intelligence, and executive summaries prepared for board, expansion, or commercial use.",
    heroParagraphs: [],
    primaryCta: "Request a Research Report",
    secondaryCta: "View Sample Reports",
    tertiaryCta: "Contact",
    trustPoints: [
      "Executive reports built for practical decision support",
      "A sober consulting tone suitable for serious business contexts",
      "Multilingual publishing foundation ready for long-term growth",
    ],
    valueTitle: "A value proposition built on clarity, rigor, and executive usefulness",
    valueBody:
      "ASB Market Research is not designed to accumulate information for its own sake. The work is designed to structure evidence, prioritize relevant signals, and support decisions with disciplined analysis.",
    valuePoints: [
      {
        title: "Consulting discipline",
        body: "Each engagement starts from the decision to be supported, not simply from the topic being researched.",
      },
      {
        title: "Structured market reading",
        body: "Demand, competitors, barriers, risks, and strategic implications are organized into a format that executives can use quickly.",
      },
      {
        title: "Decision-ready outputs",
        body: "Final deliverables are prepared for strategic reviews, investment discussions, market expansion, and commercial planning.",
      },
    ],
    audienceTitle: "Who ASB Market Research is built for",
    audienceBody:
      "The offer is designed for organizations and professionals who need stronger market evidence in order to decide with greater confidence.",
    audienceItems: [
      "Companies evaluating geographic or sector expansion",
      "Commercial and strategy teams that need competitor intelligence",
      "Investors and advisors who need an initial market framing before deeper work",
      "Consultants who require disciplined research support for client assignments",
    ],
    serviceTitle: "Research services for different levels of need",
    serviceBody:
      "The offer is organized into four levels: industry and product reports, custom research studies, monthly market briefings, and agent-powered market intelligence systems.",
    serviceClosing:
      "The progression Reports -> Studies -> Briefings -> Systems allows clients to start with a single deliverable and move toward recurring or internal research capability.",
    methodologyTitle: "A disciplined and transparent working method",
    methodologyBody:
      "The methodology preview presents the process with the tone of a professional advisory firm: clear brief definition, structured research, and a final synthesis that is ready to be used.",
    methodologySteps: [
      {
        title: "Decision definition",
        body: "We clarify what decision the research must support, what scope is relevant, and how deep the work needs to go.",
      },
      {
        title: "Research and validation",
        body: "Sources, competitors, market dynamics, and comparable references are reviewed with a structured validation lens.",
      },
      {
        title: "Executive synthesis",
        body: "Findings are translated into a professional narrative with implications, risks, and a recommended next step.",
      },
    ],
    reportsTitle: "Sample reports prepared for direct download and future expansion",
    reportsBody:
      "The homepage shows representative outputs so visitors can quickly understand the kind of intellectual product they can commission.",
    reportsClosing:
      "This section is ready to grow into a broader library of reports, embedded previews, premium downloads, or topic-specific research collections.",
    insightsTitle: "Insights that strengthen authority and organic visibility",
    insightsBody:
      "The editorial layer supports articles, strategic notes, and short analyses that reinforce search visibility while preserving a serious research-led tone.",
    insightsClosing:
      "Each insight can support a service line, connect to a sample report, or evolve into a dedicated landing page by industry, market, or topic.",
    founderTitle: "Visible founder credibility and professional backing",
    founderBody:
      "The homepage includes a trust section to present the founder, credentials, and professional orientation behind the firm.",
    founderPoints: [
      "Visible profile with biography, resume, and professional links",
      "Suitable presentation for institutional and corporate buyers",
      "Ready to strengthen authority, sector background, and track record",
    ],
    founderCta: "View full profile",
    newsletterTitle: "A newsletter designed for professional follow-up, not casual promotion",
    newsletterBody:
      "Subscription is framed as a channel for selected analysis, new publications, and high-value updates rather than light marketing content.",
    newsletterPoints: [
      "New insights and research articles",
      "Updates on sample reports and downloadable material",
      "Executive notes on market, competition, and expansion topics",
    ],
    newsletterCta: "Subscribe to Newsletter",
    finalCtaTitle: "If there is already an important market question on the table, the next step is to structure it properly.",
    finalCtaBody:
      "ASB Market Research can turn a broad need into a clear brief, an executive report, or a practical competitive reading that supports better decisions.",
  },
  pt: {
    eyebrow: "Pesquisa de mercado e consultoria estrategica",
    title: "A ASB Market Research transforma incerteza de mercado em decisoes empresariais mais bem estruturadas.",
    description:
      "Produzimos pesquisa executiva para liderancas, investidores, consultores e empresas que precisam compreender mercados, concorrentes e oportunidades com maior clareza.",
    heroDetail:
      "As entregas incluem relatorios sob medida, avaliacoes de entrada em mercado, inteligencia competitiva e sinteses executivas preparadas para diretoria, expansao ou uso comercial.",
    heroParagraphs: [],
    primaryCta: "Solicitar um Relatorio de Pesquisa",
    secondaryCta: "Ver Relatorios de Amostra",
    tertiaryCta: "Contato",
    trustPoints: [
      "Relatorios executivos preparados para apoiar decisoes reais",
      "Tom consultivo sobrio para contextos empresariais serios",
      "Base multilingue pronta para crescimento editorial consistente",
    ],
    valueTitle: "Uma proposta de valor baseada em clareza, rigor e utilidade executiva",
    valueBody:
      "A ASB Market Research nao foi pensada para acumular informacao sem criterio. O trabalho existe para estruturar evidencias, priorizar sinais relevantes e apoiar decisoes com analise disciplinada.",
    valuePoints: [
      {
        title: "Disciplina consultiva",
        body: "Cada projeto parte da decisao que precisa ser apoiada, e nao apenas do tema geral da pesquisa.",
      },
      {
        title: "Leitura estruturada do mercado",
        body: "Demanda, concorrencia, barreiras, riscos e implicacoes estrategicas sao organizados em um formato claro para uso executivo.",
      },
      {
        title: "Entregas prontas para decisao",
        body: "Os materiais finais sao preparados para revisoes estrategicas, discussoes de investimento, expansao de mercado e planejamento comercial.",
      },
    ],
    audienceTitle: "Para quem a ASB Market Research foi estruturada",
    audienceBody:
      "A proposta atende organizacoes e profissionais que precisam de evidencias de mercado mais bem organizadas para decidir com maior seguranca.",
    audienceItems: [
      "Empresas avaliando expansao geografica ou setorial",
      "Times comerciais e estrategicos que precisam de inteligencia competitiva",
      "Investidores e assessores que necessitam de um primeiro enquadramento serio de mercado",
      "Consultores que buscam suporte de pesquisa disciplinado para projetos de clientes",
    ],
    serviceTitle: "Servicos de research para diferentes niveis de necessidade",
    serviceBody:
      "A oferta se organiza em quatro niveis: relatorios de industria e produto, estudos sob medida, briefings mensais e sistemas agent-powered de inteligencia de mercado.",
    serviceClosing:
      "A progressao Reports -> Studies -> Briefings -> Systems permite comecar com um entregavel pontual e evoluir para uma capacidade recorrente ou interna de research.",
    methodologyTitle: "Um metodo de trabalho disciplinado e transparente",
    methodologyBody:
      "A previa da metodologia apresenta o processo com o tom de uma firma consultiva profissional: definicao precisa do brief, pesquisa estruturada e sintese final pronta para uso.",
    methodologySteps: [
      {
        title: "Definicao da decisao",
        body: "Clarificamos qual decisao a pesquisa deve apoiar, qual escopo e relevante e qual profundidade o trabalho exige.",
      },
      {
        title: "Pesquisa e validacao",
        body: "Fontes, concorrentes, dinamicas de mercado e referencias comparaveis sao examinadas com criterio de validacao.",
      },
      {
        title: "Sintese executiva",
        body: "Os achados sao convertidos em uma narrativa profissional com implicacoes, riscos e recomendacao de proximo passo.",
      },
    ],
    reportsTitle: "Relatorios de amostra prontos para download e expansao futura",
    reportsBody:
      "A homepage mostra exemplos representativos de entrega para que o visitante compreenda rapidamente o tipo de produto intelectual que pode contratar.",
    reportsClosing:
      "Esta secao pode evoluir para uma biblioteca mais ampla de relatorios, previews embutidos, downloads premium e colecoes tematicas.",
    insightsTitle: "Insights para reforcar autoridade e visibilidade organica",
    insightsBody:
      "A camada editorial permite publicar artigos, notas estrategicas e analises curtas com valor SEO, mantendo um tom serio e coerente com uma firma de pesquisa.",
    insightsClosing:
      "Cada insight pode apoiar uma linha de servico, conectar-se a um relatorio de amostra ou evoluir para uma landing dedicada por tema, setor ou mercado.",
    founderTitle: "Credibilidade visivel do fundador e respaldo profissional",
    founderBody:
      "A homepage inclui um bloco de confianca para apresentar o fundador, credenciais e a orientacao profissional por tras da firma.",
    founderPoints: [
      "Perfil visivel com biografia, curriculo e links profissionais",
      "Apresentacao adequada para compradores institucionais e corporativos",
      "Base pronta para reforcar autoridade, experiencia setorial e trajetoria",
    ],
    founderCta: "Ver perfil completo",
    newsletterTitle: "Newsletter pensada para acompanhamento profissional, nao para promocao superficial",
    newsletterBody:
      "A inscricao e apresentada como um canal para receber analises selecionadas, novas publicacoes e atualizacoes de valor, e nao como marketing leve.",
    newsletterPoints: [
      "Novos insights e artigos de pesquisa",
      "Atualizacoes sobre relatorios e materiais baixaveis",
      "Notas executivas sobre mercado, concorrencia e expansao",
    ],
    newsletterCta: "Assinar Newsletter",
    finalCtaTitle: "Se ja existe uma pergunta importante de mercado, o proximo passo e estrutura-la corretamente.",
    finalCtaBody:
      "A ASB Market Research pode transformar uma necessidade ampla em um brief claro, um relatorio executivo ou uma leitura competitiva pratica para apoiar melhores decisoes.",
  },
};

export const staticPages = {
  es: {
    about: { title: "Quienes somos", description: "Somos los ojos y oidos de las empresas." },
    services: { title: "Servicios", description: "Reportes, estudios a medida, briefings mensuales y sistemas agent-powered de inteligencia de mercado." },
    methodology: { title: "Metodologia", description: "Garantizamos la solidez, trazabilidad y credibilidad de cada reporte que entregamos." },
    "sample-reports": { title: "Reportes de muestra", description: "Biblioteca preparada para descargas PDF, vistas previas y futuros casos." },
    insights: { title: "Insights", description: "Base editorial para articulos, estudios breves y contenidos SEO en tres idiomas." },
    contact: { title: "Contacto", description: "Formulario general para iniciar conversaciones y consultas profesionales." },
    quotation: { title: "Cotizacion", description: "Solicita cotizacion sin compromiso y sin cargo alguno." },
    newsletter: { title: "Newsletter", description: "Captacion de suscriptores para novedades, reportes y notas de analisis." },
    "privacy-policy": { title: "Politica de privacidad", description: "Texto base listo para adaptacion legal final antes de publicacion." },
    terms: { title: "Terminos y condiciones", description: "Marco base para uso del sitio, contenidos y formularios." }
  },
  en: {
    about: { title: "Who we are", description: "We are the eyes and ears of companies." },
    services: { title: "Services", description: "Industry reports, custom research studies, monthly market briefings, and agent-powered market intelligence systems." },
    methodology: { title: "Methodology", description: "We ensure the solidity, traceability, and credibility of every report we deliver." },
    "sample-reports": { title: "Sample Reports", description: "A library prepared for PDF downloads, previews, and future case material." },
    insights: { title: "Insights", description: "Editorial base for articles, short studies, and multilingual SEO content." },
    contact: { title: "Contact", description: "General contact form for professional inquiries and conversations." },
    quotation: { title: "Quotation", description: "Quotation request form for briefs and report requirements." },
    newsletter: { title: "Newsletter", description: "Subscriber capture for updates, research notes, and future publications." },
    "privacy-policy": { title: "Privacy Policy", description: "Base privacy copy ready for final legal review before launch." },
    terms: { title: "Terms", description: "Base terms for site use, content access, and form submissions." }
  },
  pt: {
    about: { title: "Quem somos", description: "Somos os olhos e ouvidos das empresas." },
    services: { title: "Servicos", description: "Relatorios, estudos sob medida, briefings mensais e sistemas agent-powered de inteligencia de mercado." },
    methodology: { title: "Metodologia", description: "Garantimos a solidez, a rastreabilidade e a credibilidade de cada relatorio que entregamos." },
    "sample-reports": { title: "Relatorios de amostra", description: "Biblioteca preparada para downloads em PDF, previews e futuros casos." },
    insights: { title: "Insights", description: "Base editorial para artigos, estudos curtos e conteudo SEO multilingue." },
    contact: { title: "Contato", description: "Formulario geral para iniciar consultas e conversas profissionais." },
    quotation: { title: "Cotacao", description: "Formulario de cotacao para briefs e necessidades de relatorio." },
    newsletter: { title: "Newsletter", description: "Captacao de assinantes para atualizacoes, notas de pesquisa e futuras publicacoes." },
    "privacy-policy": { title: "Politica de privacidade", description: "Texto base pronto para revisao juridica final antes do lancamento." },
    terms: { title: "Termos", description: "Marco base para uso do site, conteudos e formularios." }
  }
} as const;

export const faqContent: Record<Locale, Array<{ question: string; answer: string }>> = {
  es: [
    { question: "Que tipo de reportes puede solicitarse?", answer: "Evaluaciones de mercado, inteligencia competitiva, informes ejecutivos y briefs de expansion." },
    { question: "Los entregables pueden descargarse en PDF?", answer: "Si. La arquitectura ya queda preparada para descargas directas y futuras bibliotecas documentales." },
    { question: "El sitio esta preparado para crecer?", answer: "Si. Incluye rutas localizadas, colecciones de contenido y componentes reutilizables para nuevas paginas." }
  ],
  en: [
    { question: "What type of reports can be requested?", answer: "Market assessments, competitor intelligence, executive reports, and expansion briefs." },
    { question: "Can deliverables be downloaded as PDFs?", answer: "Yes. The architecture is already prepared for direct downloads and future document libraries." },
    { question: "Is the site ready to grow?", answer: "Yes. It includes localized routing, content collections, and reusable components for new pages." }
  ],
  pt: [
    { question: "Que tipo de relatorios podem ser solicitados?", answer: "Avaliacoes de mercado, inteligencia competitiva, relatorios executivos e briefs de expansao." },
    { question: "As entregas podem ser baixadas em PDF?", answer: "Sim. A arquitetura ja esta preparada para downloads diretos e futuras bibliotecas documentais." },
    { question: "O site esta pronto para crescer?", answer: "Sim. Inclui rotas localizadas, colecoes de conteudo e componentes reutilizaveis para novas paginas." }
  ]
};



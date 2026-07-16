import type { Locale } from "@/config/locales";

export const germanySmartphoneReportSlug = "smartphone-sales-in-germany";
export const germanySmartphoneReportPublished = "2026-07-14";

type LocalizedReport = {
  fullTitle: string;
  subtitle: string;
  labels: {
    report: string;
    contents: string;
    keyFindings: string;
    geography: string;
    industry: string;
    sources: string;
    date: string;
    discoverySource: string;
    methodology: string;
    sourceTitle: string;
    domain: string;
    type: string;
    credibility: string;
    score: string;
    high: string;
    medium: string;
    related: string;
    relatedDescription: string;
    readReport: string;
  };
  meta: { geography: string; industry: string; sources: string; date: string; discoverySource: string };
  findings: string[];
  sections: Array<{ id: string; title: string; paragraphs: string[] }>;
  methodologyIntro: string;
  limitations: string[];
};

export const germanySmartphoneReport: Record<Locale, LocalizedReport> = {
  en: {
    fullTitle: "Smartphone Sales in Germany: Market Profile and Executive Outlook",
    subtitle: "A public-web assessment of Germany's smartphone sales environment, competitive structure, channels, regulation, consumer trends, opportunities, and risks.",
    labels: {
      report: "Full market research report",
      contents: "Report contents",
      keyFindings: "Key findings",
      geography: "Geography",
      industry: "Industry",
      sources: "Sources",
      date: "Date",
      discoverySource: "Discovery source",
      methodology: "Research scope and limitations",
      sourceTitle: "Title",
      domain: "Domain",
      type: "Type",
      credibility: "Credibility",
      score: "Score",
      high: "High",
      medium: "Medium",
      related: "Related reports",
      relatedDescription: "Continue exploring existing ASB Market Research reports.",
      readReport: "Read report",
    },
    meta: { geography: "Germany", industry: "Market research", sources: "133 total (75 high credibility)", date: "July 14, 2026", discoverySource: "Tavily Open Web Discovery" },
    findings: [
      "The most consistent market-size evidence places Germany smartphone sales at USD 12.11 billion in 2023 with a 2.02% CAGR forecast through 2029 [src-001, src-003].",
      "Mintel's 2025 evidence points to a market near EUR 13 billion, modest annual growth above 2%, lengthening replacement cycles, and a shift toward durable premium devices [src-059].",
      "Apple and Samsung dominate the competitive picture, but leadership varies by source and metric; StatCounter page-view data favors Apple, while brand-rank commentary identifies Samsung as leading [src-009, src-028].",
      "Premium models are visible in sales evidence: Statista's September 2025 best-selling model list is led by Apple iPhone models, with Samsung Galaxy A56 also among the top devices [src-023].",
      "5G, AI features, sustainability, repairability, and e-commerce are the strongest demand themes in the supplied evidence [src-005, src-028, src-059, src-127, src-129].",
      "The main risks are market saturation, longer replacement cycles, privacy and regulatory complexity, and lower-end device pressure from memory-cost increases [src-059, src-080, src-099, src-127, src-139].",
    ],
    sections: [
      { id: "executive-summary", title: "Executive Summary", paragraphs: [
        "Germany's smartphone market appears mature, high-value, and only moderately expanding on the most directly relevant market-size evidence. Research and Markets and TechSci Research both place the market at USD 12.11 billion in 2023 and forecast a 2.02% CAGR through 2029, while Mintel describes the 2025 market as nearly EUR 13 billion with modest annual growth above 2% [src-001, src-003, src-059].",
        "The competitive picture is concentrated around Apple and Samsung, with Xiaomi, Google, and other Android brands competing behind them. StatCounter's June 2026 mobile vendor page-view data shows Apple at 39.12%, Samsung at 27.96%, Xiaomi at 9.18%, and Google at 8.04%, while Statista's September 2025 best-selling model data is led by Apple iPhone models with the Samsung Galaxy A56 also appearing among top devices [src-009, src-023].",
        "Growth drivers cluster around 5G, premium replacement demand, AI-enabled features, foldables, durability, and e-commerce. At the same time, the evidence base points to long replacement cycles, market saturation, privacy and regulatory complexity, and potential component-cost pressure on lower-end devices as the principal constraints [src-005, src-059, src-127, src-139].",
      ]},
      { id: "market-overview", title: "Market Overview", paragraphs: [
        "The most internally consistent market-size signals describe Germany smartphone sales as a low-single-digit growth market. Two market reports converge on a 2023 value of USD 12.11 billion and a 2.02% CAGR forecast through 2029; Mintel's 2025 report similarly describes the market as nearly EUR 13 billion and growing modestly above 2% annually [src-001, src-003, src-059].",
        "Germany's market profile is shaped by a large base of connected, experienced buyers rather than first-time adoption. TechSci characterizes the country as technologically advanced with strong telecommunications infrastructure and privacy expectations, while Springer-linked survey evidence notes high market saturation and high smartphone penetration in Germany [src-003, src-127].",
        "Forecast signals are not fully aligned across providers. Market Research Future reports a much larger 2024-2035 market trajectory than the Research and Markets, TechSci, and Mintel figures, so it is best treated as a directional indicator of growth expectations rather than as the controlling market-size anchor for this report [src-001, src-002, src-003, src-059].",
      ]},
      { id: "competitive-landscape", title: "Competitive Landscape", paragraphs: [
        "Apple and Samsung define the upper tier of competition, but the exact leadership order depends on the metric used. StatCounter's June 2026 page-view data gives Apple the largest vendor share at 39.12% and Samsung second at 27.96%; Global Brands Magazine, by contrast, describes Samsung as the leading mobile phone brand in Germany and Apple as a core rival in a price-aware, Android-first market [src-009, src-028].",
        "Sales-model evidence points strongly toward Apple in the premium segment. Statista's September 2025 list of leading smartphone models sold in Germany places Apple iPhone 17 at 9%, Apple iPhone 16 at 6%, Apple iPhone 17 Pro Max at 5%, Samsung Galaxy A56 at 5%, and Apple iPhone 17 Pro at 5% [src-023].",
        "Xiaomi is the clearest challenger brand in the supplied evidence. StatCounter places Xiaomi at 9.18% of mobile vendor page views in June 2026, and Global Brands Magazine describes Xiaomi as having surged into third place, supported by German buyer sensitivity to value-focused Android propositions [src-009, src-028].",
      ]},
      { id: "pricing-distribution", title: "Pricing & Distribution", paragraphs: [
        "The pricing evidence indicates a tilt toward premium and durable devices rather than rapid low-cost replacement. Mintel reports lengthening replacement cycles alongside continued movement toward higher-priced smartphones, particularly in the EUR 550-plus range, and describes consumer interest in longevity, security, and AI features [src-059].",
        "5G also has a measurable pricing dimension. A German residential-customer study using the Van Westendorp method found that more than half of surveyed customers already owned a 5G smartphone and that 5G owners were less price sensitive; the accepted monthly 5G surcharge range was EUR 10.00 to EUR 15.40 [src-127].",
        "Distribution is increasingly tied to digital commerce and mobile-led shopping behavior. Evidence on Germany's e-commerce market describes the country as one of Europe's largest e-commerce markets, with a cited 2022 market value of USD 141.2 billion and 66% of online purchases made via smartphones; official e-commerce guidance also identifies Germany as a major European e-commerce market [src-081, src-086, src-129].",
      ]},
      { id: "regulatory-environment", title: "Regulatory Environment", paragraphs: [
        "Germany's smartphone market operates inside a regulatory setting where privacy, platform governance, customs processes, and product compliance all matter. TechSci emphasizes Germany's commitment to data protection and the influence of the General Data Protection Regulation on smartphone usage and development, while Market Data Forecast notes that the GDPR and Digital Markets Act affect device design, user privacy standards, and software ecosystems in Europe [src-003, src-005].",
        "For importers and distributors, the supplied evidence points to EU customs and market-entry procedures rather than smartphone-specific tariffs as the main operational consideration. Export Hub describes the Single Administrative Document, EORI registration, import controls, and the EU's ICS2 pre-arrival safety and security program as part of the goods-flow process into EU member states [src-080].",
        "Official Germany commercial-guide evidence also frames the country as a rules-intensive operating environment, with sections covering export controls, temporary entry, prohibited and restricted imports, distribution and sales channels, e-commerce, and selling factors [src-099].",
      ]},
      { id: "consumer-trends", title: "Consumer Trends", paragraphs: [
        "German smartphone consumers show a combination of premium appetite and value discipline. Mintel identifies a shift toward premium, durable devices and reports that Gen Z willingness to pay EUR 850 or more for flagship smartphones has increased, while Global Brands Magazine describes Germany as price-aware and unusually receptive to value-focused Android brands [src-028, src-059].",
        "Longevity and sustainability are important themes across the evidence. Mintel describes longer replacement cycles and demand for long-lasting devices, 6Wresearch points to interest in smartphones with longer lifecycles and reduced environmental impact, and Global Brands Magazine says Germany's sustainability focus gives Fairphone a foothold through repairable, ethically built phones with long support [src-007, src-028, src-059].",
        "Feature demand is moving toward 5G, AI, and foldables, but not all of these trends are equally scaled. Market Data Forecast identifies 5G-enabled smartphones as a European market driver, Mintel points to AI features, and Accio cites a 2023 signal that foldables accounted for 3% of premium smartphone sales in German urban centers [src-004, src-005, src-059].",
      ]},
      { id: "key-opportunities", title: "Key Opportunities", paragraphs: [
        "The clearest opportunity is premium replacement demand. Evidence from Mintel, Statista, and StatCounter shows a market where higher-priced phones, Apple models, and the Apple-Samsung competitive core remain highly visible; this supports opportunities in flagship devices, premium trade-in programs, financing, and service bundles, where those models are backed by channel evidence [src-009, src-023, src-059].",
        "5G creates a second opportunity layer because it links device replacement, tariff design, and consumer willingness to pay. Market Data Forecast identifies 5G-enabled devices as a major driver, and the Springer-linked study indicates that existing 5G smartphone owners are less price sensitive and accept a monthly 5G surcharge range of EUR 10.00 to EUR 15.40 [src-005, src-127].",
        "A third opportunity sits at the intersection of sustainability and differentiation. Evidence that consumers are prioritizing longevity, repairability, reduced environmental impact, and eco-friendly devices suggests space for durable hardware, longer support commitments, refurbished and trade-in propositions, and brands that can credibly connect value with sustainability [src-002, src-007, src-028, src-059].",
      ]},
      { id: "risks-challenges", title: "Risks & Challenges", paragraphs: [
        "Market saturation is the central structural challenge. Springer-linked evidence describes Germany as having very high market saturation and smartphone penetration, while Mintel reports lengthening replacement cycles; together, these signals imply that much of the sales opportunity depends on replacement timing, upgrades, and premiumization rather than broad new-user expansion [src-059, src-127].",
        "Lower-end devices face a cost-pressure risk. Telecoms.com reports a 2026 expectation of a 22% drop in lower-end smartphones linked to rising memory costs, a 12% overall market decline, and relative resilience for smartphones priced above USD 400, which are expected to grow 5.7% [src-139].",
        "Regulatory and trust factors add friction to market execution. The evidence base highlights GDPR, the Digital Markets Act, EU import controls, EORI requirements, ICS2, and prohibited or restricted import guidance; these factors do not eliminate the market opportunity, but they raise the execution bar for vendors, distributors, app ecosystem participants, and cross-border sellers [src-003, src-005, src-080, src-099].",
      ]},
    ],
    methodologyIntro: "This report is a public-web assessment based on the supplied local evidence package and Tavily Open Web Discovery. The source package contains 133 sources, 75 classified as high credibility.",
    limitations: [
      "The supplied evidence contains inconsistent market-size estimates, including figures that differ sharply by provider and unit basis; this draft anchors on the internally consistent USD 12.11 billion 2023 and nearly EUR 13 billion 2025 signals rather than reconciling all estimates.",
      "Some competitive evidence measures page views or brand commentary rather than sell-through, so market-share statements are qualified by metric where possible.",
      "Several sources are commercial report pages or secondary summaries with limited methodological detail in the extracted evidence.",
      "The evidence package includes some broader Europe, e-commerce, mobile application, and mobile marketing sources; these are used only where they directly support Germany smartphone-market interpretation.",
      "No outside research was added beyond the supplied local evidence package.",
    ],
  },
  es: {
    fullTitle: "Ventas de smartphones en Alemania: perfil de mercado y perspectivas ejecutivas",
    subtitle: "Una evaluación basada en fuentes web públicas del entorno de ventas de smartphones en Alemania, su estructura competitiva, canales, regulación, tendencias de consumo, oportunidades y riesgos.",
    labels: {
      report: "Reporte completo de investigación de mercado", contents: "Índice del reporte", keyFindings: "Hallazgos clave", geography: "Geografía", industry: "Industria", sources: "Fuentes", date: "Fecha", discoverySource: "Fuente de descubrimiento", methodology: "Alcance y limitaciones de la investigación", sourceTitle: "Título", domain: "Dominio", type: "Tipo", credibility: "Credibilidad", score: "Puntuación", high: "Alta", medium: "Media", related: "Reportes relacionados", relatedDescription: "Continúa explorando reportes existentes de ASB Market Research.", readReport: "Ver reporte",
    },
    meta: { geography: "Alemania", industry: "Investigación de mercados", sources: "133 en total (75 de alta credibilidad)", date: "14 de julio de 2026", discoverySource: "Tavily Open Web Discovery" },
    findings: [
      "La evidencia más consistente sobre el tamaño del mercado sitúa las ventas de smartphones en Alemania en USD 12,11 mil millones en 2023, con una CAGR prevista del 2,02% hasta 2029 [src-001, src-003].",
      "La evidencia de Mintel para 2025 apunta a un mercado cercano a EUR 13 mil millones, un crecimiento anual moderado superior al 2%, ciclos de reemplazo más largos y un desplazamiento hacia dispositivos premium duraderos [src-059].",
      "Apple y Samsung dominan el panorama competitivo, pero el liderazgo varía según la fuente y la métrica; los datos de páginas vistas de StatCounter favorecen a Apple, mientras que los comentarios sobre rankings de marcas identifican a Samsung como líder [src-009, src-028].",
      "Los modelos premium son visibles en la evidencia de ventas: la lista de Statista de los modelos más vendidos en septiembre de 2025 está encabezada por modelos Apple iPhone, con el Samsung Galaxy A56 también entre los principales dispositivos [src-023].",
      "5G, funciones de IA, sostenibilidad, reparabilidad y comercio electrónico son los temas de demanda más fuertes en la evidencia suministrada [src-005, src-028, src-059, src-127, src-129].",
      "Los principales riesgos son la saturación del mercado, los ciclos de reemplazo más largos, la complejidad regulatoria y de privacidad, y la presión del aumento del costo de las memorias sobre los dispositivos de gama baja [src-059, src-080, src-099, src-127, src-139].",
    ],
    sections: [
      { id: "resumen-ejecutivo", title: "Resumen ejecutivo", paragraphs: [
        "El mercado alemán de smartphones parece maduro, de alto valor y con una expansión apenas moderada según la evidencia más directamente relevante sobre su tamaño. Research and Markets y TechSci Research sitúan el mercado en USD 12,11 mil millones en 2023 y prevén una CAGR del 2,02% hasta 2029, mientras que Mintel describe el mercado de 2025 como cercano a EUR 13 mil millones, con un crecimiento anual moderado superior al 2% [src-001, src-003, src-059].",
        "El panorama competitivo se concentra en Apple y Samsung, con Xiaomi, Google y otras marcas Android compitiendo detrás. Los datos de StatCounter sobre páginas vistas por proveedor móvil en junio de 2026 muestran a Apple con el 39,12%, Samsung con el 27,96%, Xiaomi con el 9,18% y Google con el 8,04%; a su vez, los datos de Statista sobre los modelos más vendidos en septiembre de 2025 están encabezados por Apple iPhone, con el Samsung Galaxy A56 también entre los principales dispositivos [src-009, src-023].",
        "Los impulsores del crecimiento se concentran en 5G, demanda de reemplazo premium, funciones habilitadas por IA, plegables, durabilidad y comercio electrónico. Al mismo tiempo, la evidencia señala como principales restricciones los ciclos de reemplazo largos, la saturación del mercado, la complejidad regulatoria y de privacidad, y la posible presión del costo de los componentes sobre los dispositivos de gama baja [src-005, src-059, src-127, src-139].",
      ]},
      { id: "panorama-del-mercado", title: "Panorama del mercado", paragraphs: [
        "Las señales más coherentes sobre el tamaño del mercado describen las ventas de smartphones en Alemania como un mercado de crecimiento bajo de un solo dígito. Dos reportes convergen en un valor de USD 12,11 mil millones para 2023 y una CAGR prevista del 2,02% hasta 2029; el reporte de Mintel de 2025 describe de forma similar un mercado cercano a EUR 13 mil millones, con un crecimiento anual moderado superior al 2% [src-001, src-003, src-059].",
        "El perfil del mercado alemán está determinado por una gran base de compradores conectados y experimentados, más que por nuevos usuarios. TechSci caracteriza al país como tecnológicamente avanzado, con una sólida infraestructura de telecomunicaciones y altas expectativas de privacidad; una encuesta vinculada a Springer señala una elevada saturación del mercado y una alta penetración de smartphones en Alemania [src-003, src-127].",
        "Las señales de pronóstico no están plenamente alineadas entre proveedores. Market Research Future presenta una trayectoria de mercado 2024-2035 mucho mayor que las cifras de Research and Markets, TechSci y Mintel, por lo que conviene tratarla como indicador direccional de las expectativas de crecimiento y no como referencia principal del tamaño del mercado [src-001, src-002, src-003, src-059].",
      ]},
      { id: "panorama-competitivo", title: "Panorama competitivo", paragraphs: [
        "Apple y Samsung definen el nivel superior de la competencia, pero el orden exacto de liderazgo depende de la métrica utilizada. Los datos de páginas vistas de StatCounter para junio de 2026 otorgan a Apple la mayor participación por proveedor, con 39,12%, y a Samsung el segundo lugar, con 27,96%; Global Brands Magazine, en cambio, describe a Samsung como la marca líder de teléfonos móviles en Alemania y a Apple como rival central en un mercado sensible al precio y con predominio de Android [src-009, src-028].",
        "La evidencia por modelos vendidos apunta con fuerza hacia Apple en el segmento premium. La lista de Statista de los principales modelos vendidos en Alemania en septiembre de 2025 sitúa al Apple iPhone 17 en 9%, Apple iPhone 16 en 6%, Apple iPhone 17 Pro Max en 5%, Samsung Galaxy A56 en 5% y Apple iPhone 17 Pro en 5% [src-023].",
        "Xiaomi es la marca desafiante más clara en la evidencia suministrada. StatCounter sitúa a Xiaomi en el 9,18% de las páginas vistas por proveedor móvil en junio de 2026, y Global Brands Magazine describe su avance hasta el tercer puesto, respaldado por la sensibilidad de los compradores alemanes a las propuestas Android centradas en el valor [src-009, src-028].",
      ]},
      { id: "precios-distribucion", title: "Precios y distribución", paragraphs: [
        "La evidencia sobre precios indica una inclinación hacia dispositivos premium y duraderos, más que hacia un reemplazo rápido de bajo costo. Mintel informa ciclos de reemplazo más largos junto con un movimiento continuo hacia smartphones de mayor precio, particularmente en el rango superior a EUR 550, y describe el interés del consumidor por la longevidad, la seguridad y las funciones de IA [src-059].",
        "El 5G también tiene una dimensión de precio medible. Un estudio de clientes residenciales alemanes que utilizó el método Van Westendorp encontró que más de la mitad de los encuestados ya poseía un smartphone 5G y que sus propietarios eran menos sensibles al precio; el rango aceptado de recargo mensual por 5G fue de EUR 10,00 a EUR 15,40 [src-127].",
        "La distribución está cada vez más vinculada al comercio digital y a las compras impulsadas por dispositivos móviles. La evidencia sobre el comercio electrónico alemán lo describe como uno de los mayores mercados de Europa, con un valor citado de USD 141,2 mil millones en 2022 y el 66% de las compras en línea realizadas mediante smartphones; la guía oficial de comercio electrónico también identifica a Alemania como un importante mercado europeo [src-081, src-086, src-129].",
      ]},
      { id: "entorno-regulatorio", title: "Entorno regulatorio", paragraphs: [
        "El mercado alemán de smartphones opera en un entorno regulatorio donde importan la privacidad, la gobernanza de plataformas, los procesos aduaneros y el cumplimiento de los productos. TechSci destaca el compromiso de Alemania con la protección de datos y la influencia del Reglamento General de Protección de Datos en el uso y desarrollo de smartphones; Market Data Forecast señala que el GDPR y la Ley de Mercados Digitales afectan el diseño de dispositivos, los estándares de privacidad y los ecosistemas de software en Europa [src-003, src-005].",
        "Para importadores y distribuidores, la evidencia suministrada apunta a procedimientos aduaneros y de entrada al mercado de la UE, más que a aranceles específicos para smartphones, como principal consideración operativa. Export Hub describe el Documento Único Administrativo, el registro EORI, los controles de importación y el programa ICS2 de seguridad previa a la llegada como parte del flujo de mercancías hacia los Estados miembros de la UE [src-080].",
        "La evidencia de la guía comercial oficial de Alemania también presenta al país como un entorno operativo intensivo en normas, con secciones sobre controles de exportación, entrada temporal, importaciones prohibidas y restringidas, canales de distribución y venta, comercio electrónico y factores de comercialización [src-099].",
      ]},
      { id: "tendencias-del-consumidor", title: "Tendencias del consumidor", paragraphs: [
        "Los consumidores alemanes de smartphones combinan apetito por productos premium y disciplina de valor. Mintel identifica un desplazamiento hacia dispositivos premium duraderos e informa que ha aumentado la disposición de la generación Z a pagar EUR 850 o más por smartphones insignia; Global Brands Magazine describe a Alemania como un mercado sensible al precio y especialmente receptivo a las marcas Android centradas en el valor [src-028, src-059].",
        "La longevidad y la sostenibilidad son temas importantes en toda la evidencia. Mintel describe ciclos de reemplazo más largos y demanda de dispositivos duraderos; 6Wresearch apunta al interés por smartphones con mayor vida útil y menor impacto ambiental; Global Brands Magazine afirma que el foco alemán en sostenibilidad da espacio a Fairphone mediante teléfonos reparables, fabricados éticamente y con soporte prolongado [src-007, src-028, src-059].",
        "La demanda de funciones avanza hacia 5G, IA y plegables, aunque estas tendencias no tienen la misma escala. Market Data Forecast identifica los smartphones 5G como impulsor del mercado europeo, Mintel señala las funciones de IA y Accio cita una señal de 2023 según la cual los plegables representaron el 3% de las ventas de smartphones premium en centros urbanos alemanes [src-004, src-005, src-059].",
      ]},
      { id: "oportunidades-clave", title: "Oportunidades clave", paragraphs: [
        "La oportunidad más clara es la demanda de reemplazo premium. La evidencia de Mintel, Statista y StatCounter muestra un mercado donde los teléfonos de mayor precio, los modelos Apple y el núcleo competitivo Apple-Samsung mantienen una gran visibilidad; esto respalda oportunidades en dispositivos insignia, programas premium de canje, financiación y paquetes de servicios, cuando esos modelos están respaldados por evidencia de canal [src-009, src-023, src-059].",
        "El 5G crea una segunda capa de oportunidad porque vincula el reemplazo de dispositivos, el diseño de tarifas y la disposición del consumidor a pagar. Market Data Forecast identifica los dispositivos 5G como impulsor importante, y el estudio vinculado a Springer indica que quienes ya poseen smartphones 5G son menos sensibles al precio y aceptan un recargo mensual de entre EUR 10,00 y EUR 15,40 [src-005, src-127].",
        "Una tercera oportunidad se encuentra en la intersección entre sostenibilidad y diferenciación. La evidencia de que los consumidores priorizan longevidad, reparabilidad, menor impacto ambiental y dispositivos ecológicos sugiere espacio para hardware duradero, compromisos de soporte más largos, propuestas de reacondicionamiento y canje, y marcas capaces de vincular de forma creíble valor y sostenibilidad [src-002, src-007, src-028, src-059].",
      ]},
      { id: "riesgos-desafios", title: "Riesgos y desafíos", paragraphs: [
        "La saturación del mercado es el principal desafío estructural. La evidencia vinculada a Springer describe una saturación y penetración de smartphones muy elevadas en Alemania, mientras Mintel informa ciclos de reemplazo más largos; en conjunto, estas señales implican que buena parte de la oportunidad de ventas depende del momento de reemplazo, las actualizaciones y la premiumización, más que de una amplia expansión de nuevos usuarios [src-059, src-127].",
        "Los dispositivos de gama baja enfrentan un riesgo de presión de costos. Telecoms.com informa una expectativa para 2026 de una caída del 22% en smartphones de gama baja vinculada al aumento del costo de las memorias, una contracción del 12% del mercado total y una resiliencia relativa de los smartphones por encima de USD 400, que se espera crezcan un 5,7% [src-139].",
        "Los factores regulatorios y de confianza agregan fricción a la ejecución. La evidencia destaca el GDPR, la Ley de Mercados Digitales, los controles de importación de la UE, los requisitos EORI, ICS2 y las orientaciones sobre importaciones prohibidas o restringidas; estos factores no eliminan la oportunidad, pero elevan las exigencias para proveedores, distribuidores, participantes del ecosistema de aplicaciones y vendedores transfronterizos [src-003, src-005, src-080, src-099].",
      ]},
    ],
    methodologyIntro: "Este reporte es una evaluación basada en fuentes web públicas a partir del paquete de evidencia local suministrado y de Tavily Open Web Discovery. El paquete contiene 133 fuentes, 75 clasificadas como de alta credibilidad.",
    limitations: [
      "La evidencia suministrada contiene estimaciones inconsistentes del tamaño del mercado, incluidas cifras que difieren sustancialmente según el proveedor y la unidad de medida; este borrador se basa en las señales internamente coherentes de USD 12,11 mil millones en 2023 y casi EUR 13 mil millones en 2025, en lugar de conciliar todas las estimaciones.",
      "Parte de la evidencia competitiva mide páginas vistas o comentarios sobre marcas, en vez de ventas efectivas; por ello, las afirmaciones de participación de mercado se califican según la métrica cuando es posible.",
      "Varias fuentes son páginas comerciales de reportes o resúmenes secundarios con detalles metodológicos limitados en la evidencia extraída.",
      "El paquete incluye algunas fuentes más amplias sobre Europa, comercio electrónico, aplicaciones móviles y marketing móvil; sólo se utilizan cuando respaldan directamente la interpretación del mercado alemán de smartphones.",
      "No se añadió investigación externa fuera del paquete de evidencia local suministrado.",
    ],
  },
  pt: {
    fullTitle: "Vendas de smartphones na Alemanha: perfil de mercado e perspectivas executivas",
    subtitle: "Uma avaliação baseada em fontes públicas da web sobre o ambiente de vendas de smartphones na Alemanha, sua estrutura competitiva, canais, regulamentação, tendências de consumo, oportunidades e riscos.",
    labels: {
      report: "Relatório completo de pesquisa de mercado", contents: "Índice do relatório", keyFindings: "Principais conclusões", geography: "Geografia", industry: "Setor", sources: "Fontes", date: "Data", discoverySource: "Fonte de descoberta", methodology: "Escopo e limitações da pesquisa", sourceTitle: "Título", domain: "Domínio", type: "Tipo", credibility: "Credibilidade", score: "Pontuação", high: "Alta", medium: "Média", related: "Relatórios relacionados", relatedDescription: "Continue explorando relatórios existentes da ASB Market Research.", readReport: "Ver relatório",
    },
    meta: { geography: "Alemanha", industry: "Pesquisa de mercado", sources: "133 no total (75 de alta credibilidade)", date: "14 de julho de 2026", discoverySource: "Tavily Open Web Discovery" },
    findings: [
      "A evidência mais consistente sobre o tamanho do mercado situa as vendas de smartphones na Alemanha em USD 12,11 bilhões em 2023, com CAGR projetada de 2,02% até 2029 [src-001, src-003].",
      "A evidência da Mintel para 2025 aponta para um mercado próximo de EUR 13 bilhões, crescimento anual moderado acima de 2%, ciclos de substituição mais longos e uma mudança para dispositivos premium duráveis [src-059].",
      "Apple e Samsung dominam o cenário competitivo, mas a liderança varia conforme a fonte e a métrica; os dados de visualizações de página da StatCounter favorecem a Apple, enquanto comentários sobre rankings de marcas identificam a Samsung como líder [src-009, src-028].",
      "Os modelos premium aparecem na evidência de vendas: a lista da Statista dos modelos mais vendidos em setembro de 2025 é liderada por modelos Apple iPhone, com o Samsung Galaxy A56 também entre os principais dispositivos [src-023].",
      "5G, recursos de IA, sustentabilidade, reparabilidade e comércio eletrônico são os temas de demanda mais fortes na evidência fornecida [src-005, src-028, src-059, src-127, src-129].",
      "Os principais riscos são a saturação do mercado, os ciclos de substituição mais longos, a complexidade regulatória e de privacidade e a pressão do aumento dos custos de memória sobre os aparelhos de entrada [src-059, src-080, src-099, src-127, src-139].",
    ],
    sections: [
      { id: "resumo-executivo", title: "Resumo executivo", paragraphs: [
        "O mercado alemão de smartphones parece maduro, de alto valor e com expansão apenas moderada segundo a evidência mais diretamente relevante sobre seu tamanho. Research and Markets e TechSci Research situam o mercado em USD 12,11 bilhões em 2023 e projetam CAGR de 2,02% até 2029, enquanto a Mintel descreve o mercado de 2025 como próximo de EUR 13 bilhões, com crescimento anual moderado acima de 2% [src-001, src-003, src-059].",
        "O cenário competitivo está concentrado em Apple e Samsung, com Xiaomi, Google e outras marcas Android disputando posições atrás delas. Os dados da StatCounter sobre visualizações de página por fornecedor móvel em junho de 2026 mostram Apple com 39,12%, Samsung com 27,96%, Xiaomi com 9,18% e Google com 8,04%; os dados da Statista sobre os modelos mais vendidos em setembro de 2025 são liderados por Apple iPhone, com o Samsung Galaxy A56 também entre os principais aparelhos [src-009, src-023].",
        "Os vetores de crescimento concentram-se em 5G, demanda de substituição premium, recursos habilitados por IA, dobráveis, durabilidade e comércio eletrônico. Ao mesmo tempo, a evidência aponta ciclos longos de substituição, saturação do mercado, complexidade regulatória e de privacidade e possível pressão do custo de componentes sobre aparelhos de entrada como as principais restrições [src-005, src-059, src-127, src-139].",
      ]},
      { id: "panorama-do-mercado", title: "Panorama do mercado", paragraphs: [
        "Os sinais mais coerentes sobre o tamanho do mercado descrevem as vendas de smartphones na Alemanha como um mercado de crescimento baixo de um dígito. Dois relatórios convergem em um valor de USD 12,11 bilhões para 2023 e CAGR projetada de 2,02% até 2029; o relatório da Mintel de 2025 descreve de modo semelhante um mercado próximo de EUR 13 bilhões, com crescimento anual moderado acima de 2% [src-001, src-003, src-059].",
        "O perfil do mercado alemão é moldado por uma grande base de compradores conectados e experientes, e não pela adoção de novos usuários. A TechSci caracteriza o país como tecnologicamente avançado, com forte infraestrutura de telecomunicações e elevadas expectativas de privacidade; uma pesquisa vinculada à Springer observa alta saturação do mercado e elevada penetração de smartphones na Alemanha [src-003, src-127].",
        "Os sinais de previsão não estão totalmente alinhados entre os fornecedores. A Market Research Future apresenta uma trajetória de mercado para 2024-2035 muito maior do que as cifras da Research and Markets, TechSci e Mintel, por isso deve ser tratada como indicador direcional das expectativas de crescimento, e não como referência principal para o tamanho do mercado [src-001, src-002, src-003, src-059].",
      ]},
      { id: "cenario-competitivo", title: "Cenário competitivo", paragraphs: [
        "Apple e Samsung definem o nível superior da concorrência, mas a ordem exata de liderança depende da métrica utilizada. Os dados de visualizações de página da StatCounter para junho de 2026 dão à Apple a maior participação por fornecedor, com 39,12%, e à Samsung o segundo lugar, com 27,96%; a Global Brands Magazine, por outro lado, descreve a Samsung como a principal marca de celulares na Alemanha e a Apple como rival central em um mercado atento a preços e com predominância do Android [src-009, src-028].",
        "A evidência por modelos vendidos aponta fortemente para a Apple no segmento premium. A lista da Statista dos principais modelos vendidos na Alemanha em setembro de 2025 coloca o Apple iPhone 17 em 9%, Apple iPhone 16 em 6%, Apple iPhone 17 Pro Max em 5%, Samsung Galaxy A56 em 5% e Apple iPhone 17 Pro em 5% [src-023].",
        "A Xiaomi é a concorrente desafiante mais clara na evidência fornecida. A StatCounter situa a Xiaomi em 9,18% das visualizações de página por fornecedor móvel em junho de 2026, e a Global Brands Magazine descreve seu avanço para o terceiro lugar, apoiado pela sensibilidade dos compradores alemães a propostas Android centradas em valor [src-009, src-028].",
      ]},
      { id: "precos-distribuicao", title: "Preços e distribuição", paragraphs: [
        "A evidência de preços indica uma inclinação para dispositivos premium e duráveis, em vez de substituições rápidas de baixo custo. A Mintel relata ciclos de substituição mais longos acompanhados de um movimento contínuo para smartphones de maior preço, especialmente acima de EUR 550, e descreve o interesse do consumidor por longevidade, segurança e recursos de IA [src-059].",
        "O 5G também tem uma dimensão de preço mensurável. Um estudo com clientes residenciais alemães que utilizou o método Van Westendorp constatou que mais da metade dos entrevistados já possuía um smartphone 5G e que seus proprietários eram menos sensíveis a preço; a faixa aceita de acréscimo mensal pelo 5G foi de EUR 10,00 a EUR 15,40 [src-127].",
        "A distribuição está cada vez mais ligada ao comércio digital e às compras realizadas por dispositivos móveis. A evidência sobre o comércio eletrônico alemão descreve o país como um dos maiores mercados europeus, com valor citado de USD 141,2 bilhões em 2022 e 66% das compras on-line realizadas por smartphones; orientações oficiais também identificam a Alemanha como um importante mercado europeu de comércio eletrônico [src-081, src-086, src-129].",
      ]},
      { id: "ambiente-regulatorio", title: "Ambiente regulatório", paragraphs: [
        "O mercado alemão de smartphones opera em um ambiente regulatório no qual importam privacidade, governança de plataformas, processos alfandegários e conformidade de produtos. A TechSci enfatiza o compromisso da Alemanha com a proteção de dados e a influência do Regulamento Geral de Proteção de Dados no uso e desenvolvimento de smartphones; a Market Data Forecast observa que o GDPR e a Lei dos Mercados Digitais afetam o design de aparelhos, os padrões de privacidade e os ecossistemas de software na Europa [src-003, src-005].",
        "Para importadores e distribuidores, a evidência fornecida aponta os procedimentos alfandegários e de entrada no mercado da UE, mais do que tarifas específicas para smartphones, como principal consideração operacional. A Export Hub descreve o Documento Administrativo Único, o registro EORI, os controles de importação e o programa ICS2 de segurança antes da chegada como parte do fluxo de mercadorias para os Estados-membros da UE [src-080].",
        "A evidência do guia comercial oficial da Alemanha também apresenta o país como um ambiente operacional intensivo em regras, com seções sobre controles de exportação, entrada temporária, importações proibidas e restritas, canais de distribuição e vendas, comércio eletrônico e fatores de comercialização [src-099].",
      ]},
      { id: "tendencias-do-consumidor", title: "Tendências do consumidor", paragraphs: [
        "Os consumidores alemães de smartphones combinam apetite por produtos premium e disciplina de valor. A Mintel identifica uma mudança para dispositivos premium duráveis e relata que aumentou a disposição da geração Z de pagar EUR 850 ou mais por smartphones topo de linha; a Global Brands Magazine descreve a Alemanha como um mercado atento a preços e particularmente receptivo a marcas Android centradas em valor [src-028, src-059].",
        "Longevidade e sustentabilidade são temas importantes em toda a evidência. A Mintel descreve ciclos de substituição mais longos e demanda por dispositivos duráveis; a 6Wresearch aponta interesse em smartphones com maior vida útil e menor impacto ambiental; a Global Brands Magazine afirma que o foco alemão em sustentabilidade dá espaço à Fairphone por meio de aparelhos reparáveis, produzidos de forma ética e com suporte prolongado [src-007, src-028, src-059].",
        "A demanda por recursos avança para 5G, IA e dobráveis, embora essas tendências não tenham a mesma escala. A Market Data Forecast identifica smartphones 5G como vetor do mercado europeu, a Mintel aponta os recursos de IA e a Accio cita um sinal de 2023 segundo o qual os dobráveis representaram 3% das vendas de smartphones premium nos centros urbanos alemães [src-004, src-005, src-059].",
      ]},
      { id: "principais-oportunidades", title: "Principais oportunidades", paragraphs: [
        "A oportunidade mais clara é a demanda de substituição premium. A evidência da Mintel, Statista e StatCounter mostra um mercado no qual telefones de maior preço, modelos Apple e o núcleo competitivo Apple-Samsung continuam muito visíveis; isso sustenta oportunidades em aparelhos topo de linha, programas premium de troca, financiamento e pacotes de serviços, quando esses modelos são respaldados por evidência de canal [src-009, src-023, src-059].",
        "O 5G cria uma segunda camada de oportunidade porque conecta substituição de aparelhos, desenho de tarifas e disposição do consumidor para pagar. A Market Data Forecast identifica dispositivos 5G como importante vetor, e o estudo vinculado à Springer indica que os atuais proprietários de smartphones 5G são menos sensíveis a preço e aceitam um acréscimo mensal entre EUR 10,00 e EUR 15,40 [src-005, src-127].",
        "Uma terceira oportunidade está na interseção entre sustentabilidade e diferenciação. A evidência de que consumidores priorizam longevidade, reparabilidade, menor impacto ambiental e dispositivos ecológicos sugere espaço para hardware durável, compromissos de suporte mais longos, propostas de recondicionamento e troca e marcas capazes de conectar valor e sustentabilidade de forma crível [src-002, src-007, src-028, src-059].",
      ]},
      { id: "riscos-desafios", title: "Riscos e desafios", paragraphs: [
        "A saturação do mercado é o principal desafio estrutural. A evidência vinculada à Springer descreve saturação e penetração de smartphones muito elevadas na Alemanha, enquanto a Mintel relata ciclos de substituição mais longos; juntas, essas indicações sugerem que grande parte da oportunidade de vendas depende do momento de troca, de atualizações e da premiumização, e não de uma ampla expansão de novos usuários [src-059, src-127].",
        "Os aparelhos de entrada enfrentam risco de pressão de custos. A Telecoms.com relata uma expectativa para 2026 de queda de 22% nos smartphones de entrada associada ao aumento dos custos de memória, retração de 12% do mercado total e resiliência relativa dos smartphones acima de USD 400, que devem crescer 5,7% [src-139].",
        "Fatores regulatórios e de confiança acrescentam atrito à execução. A evidência destaca o GDPR, a Lei dos Mercados Digitais, controles de importação da UE, requisitos EORI, ICS2 e orientações sobre importações proibidas ou restritas; esses fatores não eliminam a oportunidade, mas elevam as exigências para fornecedores, distribuidores, participantes do ecossistema de aplicativos e vendedores transfronteiriços [src-003, src-005, src-080, src-099].",
      ]},
    ],
    methodologyIntro: "Este relatório é uma avaliação baseada em fontes públicas da web a partir do pacote local de evidências fornecido e do Tavily Open Web Discovery. O pacote contém 133 fontes, 75 classificadas como de alta credibilidade.",
    limitations: [
      "A evidência fornecida contém estimativas inconsistentes do tamanho do mercado, incluindo valores que diferem fortemente conforme o fornecedor e a unidade de medida; este rascunho se baseia nos sinais internamente consistentes de USD 12,11 bilhões em 2023 e quase EUR 13 bilhões em 2025, em vez de conciliar todas as estimativas.",
      "Parte da evidência competitiva mede visualizações de página ou comentários sobre marcas, e não vendas efetivas; por isso, as afirmações de participação de mercado são qualificadas pela métrica sempre que possível.",
      "Várias fontes são páginas comerciais de relatórios ou resumos secundários com detalhes metodológicos limitados na evidência extraída.",
      "O pacote inclui algumas fontes mais amplas sobre Europa, comércio eletrônico, aplicativos móveis e marketing móvel; elas são usadas somente quando sustentam diretamente a interpretação do mercado alemão de smartphones.",
      "Nenhuma pesquisa externa foi adicionada além do pacote local de evidências fornecido.",
    ],
  },
};

export const germanySmartphoneSources = [
  ["Germany Smartphone Market Size, Share & Forecast to 2029", "https://www.researchandmarkets.com/report/germany-smartphone-market", "researchandmarkets.com", "company", "high", 100],
  ["Germany Smartphone Market Size, Share & Growth Analysis 2035", "https://www.marketresearchfuture.com/reports/germany-smartphone-market-46139", "marketresearchfuture.com", "research_firm", "high", 100],
  ["Germany Smartphone Market Size and Forecast 2029 | TechSci Research", "https://www.techsciresearch.com/report/germany-smartphone-market/12971.html", "techsciresearch.com", "company", "high", 100],
  ["Popular Phone Brands in Germany Trend 2026", "https://www.accio.com/business/popular-phone-brands-in-germany-trend", "accio.com", "company", "high", 100],
  ["Europe Smartphone Market Size, Share & Analysis, 2034", "https://www.marketdataforecast.com/market-reports/europe-smartphone-market", "marketdataforecast.com", "company", "high", 100],
  ["Germany Smartphone Market Size & Outlook, 2026-2033", "https://www.grandviewresearch.com/horizon/outlook/smartphone-market/germany", "grandviewresearch.com", "research_firm", "high", 100],
  ["Germany Smartphone Market (2025-2031) | Forecast & Share", "https://www.6wresearch.com/industry-report/germany-smartphone-market-2020-2026", "6wresearch.com", "company", "high", 100],
  ["Best-selling smartphone models Germany 2025 | Statista", "https://www.statista.com/statistics/700712/smartphone-market-share-in-germany-by-model", "statista.com", "research_firm", "high", 100],
  ["Mobile Phones Market Trends in Germany | PDF | Smartphone | E Commerce", "https://www.scribd.com/document/844878177/Mobile-Phones-in-Germany", "scribd.com", "company", "high", 100],
  ["Top 10 Mobile Phone Brands in Germany (2026) - Global Brands Magazine", "https://www.globalbrandsmagazine.com/mobile-phone-brands-in-germany", "globalbrandsmagazine.com", "company", "high", 100],
  ["Xiaomi - Germany market entry marketing strategy - MBA, HULT International Business School | PDF", "https://www.slideshare.net/slideshow/xiaomi-germany-market-entry-marketing-strategy-mba-hult-international-business-school/50870697", "slideshare.net", "company", "high", 100],
  ["Best Selling Mobile in Germany 2025", "https://www.accio.com/business/best-selling-mobile-in-germany", "accio.com", "company", "high", 100],
  ["Germany Mobile Marketing Market Trend | 2035", "https://www.marketresearchfuture.com/reports/germany-mobile-marketing-market-64225", "marketresearchfuture.com", "research_firm", "high", 100],
  ["Germany Mobile Application Market Research Report | 2035", "https://www.marketresearchfuture.com/reports/germany-mobile-application-market-61344", "marketresearchfuture.com", "research_firm", "high", 100],
  ["Europe Smartphone Market Size, Share & Outlook 2034", "https://www.imarcgroup.com/europe-smartphone-market", "imarcgroup.com", "company", "high", 100],
  ["Mobile, Internet, and Social Media Usage in Germany - Globig", "https://globig.co/mobile-and-internet-usage-in-germany", "globig.co", "company", "medium", 69],
  ["How to Do Market Research, Types, and Example", "https://www.investopedia.com/terms/m/market-research.asp", "investopedia.com", "company", "medium", 69],
  ["The Future of Wholesale Electronics in Germany: Trends & Insights – Liquidation Stock", "https://liquidationstock.com/blogs/guides/the-future-of-wholesale-electronics-in-germany-trends-insights", "liquidationstock.com", "company", "medium", 68],
  ["How to send IT equipment to Germany", "https://growrk.com/country-guide/germany", "growrk.com", "company", "medium", 67],
  ["How to Choose New Mobile Phones in Germany — 2025/2026 Guide", "https://electronics.alibaba.com/buyingguides/how-to-choose-new-mobile-phones-in-germany-(2025%E2%80%932026)", "electronics.alibaba.com", "marketplace", "medium", 66],
  ["Lower-end smartphone market squeezed by soaring memory costs - Telecoms", "https://www.telecoms.com/mobile-devices/lower-end-smartphone-market-squeezed-by-soaring-memory-costs", "telecoms.com", "company", "medium", 66],
  ["GSM World Limited", "https://gsmworld-wholesale.com", "gsmworld-wholesale.com", "company", "medium", 65],
  ["[PDF] Guidelines for international trade policy - DIHK Strategy Paper 2024", "https://www.dihk.de/resource/blob/109950/6871326e2a8f4dab948b209c1fbe4943/dihk-positionspapier-handelspolitik-englisch-data.pdf", "dihk.de", "company", "medium", 63],
  ["Study on wholesale mobile connectivity, trends and issues for emerging mobile technologies and deployments", "https://www.berec.europa.eu/system/files/2023-04/BoR%20%2823%29%2041%20Study%20on%20wholesale%20mobile%20connectivity%20trends%20and%20issues%20for%20emerging%20mobile%20technologies%20and%20deployments_final_0.pdf", "berec.europa.eu", "company", "medium", 61],
  ["Global Smartphone Exports Data 2025: Top 10 Smartphone Manufacturers & Suppliers Database - TradeImeX Blog", "https://www.tradeimex.in/blogs/global-smartphone-exports-2025-smartphone-manufacturers-suppliers-database", "tradeimex.in", "company", "medium", 60],
] as const;

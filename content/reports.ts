import type { Locale } from "@/config/locales";

export type PublicationTier = "full_report" | "legacy_pdf" | "needs_review";
export type CatalogVisibility = "primary" | "legacy" | "hidden";
export type ReportFormat = "html" | "pdf" | "markdown" | "json";
export type PrimaryLanguage = Locale | "multilingual" | "unverified";
export type SampleReport = {
  slug: string;
  pdfHref?: string;
  locales: Record<Locale, { title: string; excerpt: string; market: string; highlights: string[] }>;
  publicationTier: PublicationTier;
  catalogVisibility: CatalogVisibility;
  validationWarnings: string[];
  availableFormats: ReportFormat[];
  primaryLanguage: PrimaryLanguage;
};

export const sampleReports: SampleReport[] = [
  {
    slug: "latam-b2b-software-expansion-snapshot",
    publicationTier: "needs_review",
    catalogVisibility: "hidden",
    validationWarnings: ["The generic software expansion slug does not identify the Brazilian wine export PDF."],
    availableFormats: ["pdf"],
    primaryLanguage: "unverified",
    pdfHref: "/pdfs/reports/brazilian-wine-exports-to-premium-importers.pdf",
    locales: {
      es: { title: "Industria y producto por país", excerpt: "Exportaciones de vino de Brasil a importadores premium.", market: "Brasil", highlights: ["Demanda priorizada", "Importadores premium", "Lectura por país"] },
      en: { title: "Industry & Product by Country", excerpt: "Brazilian Wine Exports to Premium Importers", market: "Brazil", highlights: ["Prioritized demand", "Premium importers", "Country-level reading"] },
      pt: { title: "Indústria e produto por país", excerpt: "Exportações de vinho brasileiro para importadores premium.", market: "Brasil", highlights: ["Demanda priorizada", "Importadores premium", "Leitura por país"] }
    }
  },
  {
    slug: "premium-food-category-benchmark",
    publicationTier: "needs_review",
    catalogVisibility: "hidden",
    validationWarnings: ["The premium food title and description do not match the Uruguay Economic Profile PDF."],
    availableFormats: ["pdf"],
    primaryLanguage: "unverified",
    pdfHref: "/pdfs/reports/uruguay-economic-profile-2024-2025.pdf",
    locales: {
      es: { title: "Benchmark de categoria premium food", excerpt: "Reporte de muestra para comparar posicionamiento, pricing y canales.", market: "Alimentos", highlights: ["Mapa de marcas", "Rangos de precio", "Canales de distribucion"] },
      en: { title: "World Bank Research Studies", excerpt: "Uruguay Economic Profile 2024 - 2025", market: "Food", highlights: ["Brand map", "Price ranges", "Channel structure"] },
      pt: { title: "Benchmark da categoria premium food", excerpt: "Relatorio de amostra para comparar posicionamento, precos e canais.", market: "Alimentos", highlights: ["Mapa de marcas", "Faixas de preco", "Estrutura de canais"] }
    }
  },
  {
    slug: "investor-market-scoping-note",
    publicationTier: "needs_review",
    catalogVisibility: "hidden",
    validationWarnings: ["The investor scoping slug does not identify the Ferrari Luce consumer-sentiment PDF."],
    availableFormats: ["pdf"],
    primaryLanguage: "unverified",
    pdfHref: "/pdfs/reports/consumer-sentiment-pulse-italian-sentiment-on-electric-ferrari-luce.pdf",
    locales: {
      es: { title: "Pulso de sentimiento del consumidor", excerpt: "Sentimiento italiano sobre Electric Ferrari Luce.", market: "Italia", highlights: ["Percepcion de marca", "Senales de demanda", "Posicionamiento premium"] },
      en: { title: "Consumer Sentiment Pulse", excerpt: "Italian Sentiment on Electric Ferrari Luce", market: "Italy", highlights: ["Brand perception", "Demand signals", "Premium positioning"] },
      pt: { title: "Pulso de sentimento do consumidor", excerpt: "Sentimento italiano sobre Electric Ferrari Luce.", market: "Itália", highlights: ["Percepcao da marca", "Sinais de demanda", "Posicionamento premium"] }
    }
  },
  {
    slug: "consumer-sentiment-template",
    publicationTier: "needs_review",
    catalogVisibility: "hidden",
    validationWarnings: ["The consumer sentiment template slug does not identify the Berlin restaurant leads PDF."],
    availableFormats: ["pdf"],
    primaryLanguage: "unverified",
    pdfHref: "/pdfs/reports/restaurants-berlin-germany-leads.pdf",
    locales: {
      es: { title: "Leads de negocio por segmentos de mercado", excerpt: "Restaurantes en Berlin, Alemania.", market: "Berlin, Alemania", highlights: ["Agregar PDF", "Agregar hallazgos", "Agregar resumen ejecutivo"] },
      en: { title: "Business leads by Market Segments", excerpt: "Restaurants in Berlin Germany", market: "Berlin, Germany", highlights: ["Add PDF", "Add findings", "Add executive summary"] },
      pt: { title: "Leads de negocios por segmentos de mercado", excerpt: "Restaurantes em Berlim, Alemanha.", market: "Berlim, Alemanha", highlights: ["Adicionar PDF", "Adicionar achados", "Adicionar resumo executivo"] }
    }
  },
  {
    slug: "competitive-benchmark-template",
    publicationTier: "needs_review",
    catalogVisibility: "hidden",
    validationWarnings: ["The competitive benchmark template slug does not identify the Smartphone Sales in Italy PDF."],
    availableFormats: ["pdf"],
    primaryLanguage: "unverified",
    pdfHref: "/pdfs/reports/smartphone-sales-in-italy.pdf",
    locales: {
      es: { title: "Industria y producto por pais", excerpt: "Ventas de smartphones en Italia.", market: "Italia", highlights: ["Agregar PDF", "Agregar comparacion", "Agregar analisis"] },
      en: { title: "Industry & Product by Country", excerpt: "Smartphone Sales in Italy", market: "Italy", highlights: ["Add PDF", "Add comparison", "Add analysis"] },
      pt: { title: "Industria e produto por pais", excerpt: "Vendas de smartphones na Italia.", market: "Italia", highlights: ["Adicionar PDF", "Adicionar comparacao", "Adicionar analise"] }
    }
  },
  {
    slug: "country-market-template",
    publicationTier: "needs_review",
    catalogVisibility: "hidden",
    validationWarnings: ["The country market template slug does not identify the Costa Rica economic indicators PDF."],
    availableFormats: ["pdf"],
    primaryLanguage: "unverified",
    pdfHref: "/pdfs/reports/world-bank-costa-rica-study.pdf",
    locales: {
      es: { title: "Perfil de país del Banco Mundial", excerpt: "Perfil de Costa Rica: 10 indicadores económicos principales.", market: "Costa Rica", highlights: ["Indicadores economicos", "Resumen pais", "PDF de referencia"] },
      en: { title: "World Bank Country Profile", excerpt: "Costa Rica Profile Top 10 Economic Indicators", market: "Costa Rica", highlights: ["Economic indicators", "Country snapshot", "Reference PDF"] },
      pt: { title: "Perfil do país do Banco Mundial", excerpt: "Perfil da Costa Rica: 10 principais indicadores econômicos.", market: "Costa Rica", highlights: ["Indicadores econômicos", "Resumo do país", "PDF de referência"] }
    }
  },
  {
    slug: "smartphone-sales-in-spain",
    publicationTier: "full_report",
    catalogVisibility: "primary",
    validationWarnings: [],
    availableFormats: ["html", "pdf", "markdown", "json"],
    primaryLanguage: "en",
    pdfHref: "/pdfs/reports/smartphone-sales-in-spain.pdf",
    locales: {
      es: { title: "Ventas de smartphones en España", excerpt: "Panorama del mercado español de smartphones, con foco en demanda, competencia, canales de distribución y comportamiento del consumidor.", market: "España", highlights: ["Impulsores de demanda", "Panorama competitivo", "Canales y comportamiento del consumidor"] },
      en: { title: "Smartphone Sales in Spain", excerpt: "An overview of Spain's smartphone sales market, covering demand drivers, competition, distribution channels and consumer behavior.", market: "Spain", highlights: ["Demand drivers", "Competitive landscape", "Channels and consumer behavior"] },
      pt: { title: "Vendas de smartphones na Espanha", excerpt: "Panorama do mercado espanhol de smartphones, com foco em demanda, concorrência, canais de distribuição e comportamento do consumidor.", market: "Espanha", highlights: ["Vetores de demanda", "Cenário competitivo", "Canais e comportamento do consumidor"] }
    }
  },
  {
    slug: "smartphone-sales-in-germany",
    publicationTier: "full_report",
    catalogVisibility: "primary",
    validationWarnings: [],
    availableFormats: ["html", "pdf"],
    primaryLanguage: "multilingual",
    pdfHref: "/pdfs/reports/smartphone-sales-in-germany.pdf",
    locales: {
      es: { title: "Ventas de smartphones en Alemania", excerpt: "Panorama del mercado alemán de smartphones, con foco en demanda, competencia, canales de distribución y comportamiento del consumidor.", market: "Alemania", highlights: ["Impulsores de demanda", "Panorama competitivo", "Canales y comportamiento del consumidor"] },
      en: { title: "Smartphone Sales in Germany", excerpt: "An overview of Germany's smartphone sales market, covering demand drivers, competition, distribution channels and consumer behavior.", market: "Germany", highlights: ["Demand drivers", "Competitive landscape", "Channels and consumer behavior"] },
      pt: { title: "Vendas de smartphones na Alemanha", excerpt: "Panorama do mercado alemão de smartphones, com foco em demanda, concorrência, canais de distribuição e comportamento do consumidor.", market: "Alemanha", highlights: ["Vetores de demanda", "Cenário competitivo", "Canais e comportamento do consumidor"] }
    }
  },
  {
    slug: "italy-refurbished-smartphone-market",
    publicationTier: "legacy_pdf",
    catalogVisibility: "legacy",
    validationWarnings: [],
    availableFormats: ["pdf"],
    primaryLanguage: "en",
    pdfHref: "/pdfs/reports/italy-refurbished-smartphone-market.pdf",
    locales: {
      es: { title: "Mercado italiano de smartphones reacondicionados", excerpt: "Panorama del mercado italiano de smartphones reacondicionados, que analiza demanda, competencia, canales de venta y factores de adopción.", market: "Italia", highlights: ["Demanda de reacondicionados", "Panorama competitivo", "Canales y factores de adopción"] },
      en: { title: "Italy Refurbished Smartphone Market", excerpt: "An overview of Italy's refurbished smartphone market, examining demand, competition, sales channels and adoption factors.", market: "Italy", highlights: ["Refurbished demand", "Competitive landscape", "Sales channels and adoption factors"] },
      pt: { title: "Mercado italiano de smartphones recondicionados", excerpt: "Panorama do mercado italiano de smartphones recondicionados, analisando demanda, concorrência, canais de venda e fatores de adoção.", market: "Itália", highlights: ["Demanda por recondicionados", "Cenário competitivo", "Canais e fatores de adoção"] }
    }
  }
];

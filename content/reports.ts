import type { Locale } from "@/config/locales";

export type SampleReport = {
  slug: string;
  pdfHref?: string;
  locales: Record<Locale, { title: string; excerpt: string; market: string; highlights: string[] }>;
};

export const sampleReports: SampleReport[] = [
  {
    slug: "latam-b2b-software-expansion-snapshot",
    pdfHref: "/pdfs/reports/brazilian-wine-exports-to-premium-importers.pdf",
    locales: {
      es: { title: "Industria y producto por país", excerpt: "Exportaciones de vino de Brasil a importadores premium.", market: "Brasil", highlights: ["Demanda priorizada", "Importadores premium", "Lectura por país"] },
      en: { title: "Industry & Product by Country", excerpt: "Brazilian Wine Exports to Premium Importers", market: "Brazil", highlights: ["Prioritized demand", "Premium importers", "Country-level reading"] },
      pt: { title: "Indústria e produto por país", excerpt: "Exportações de vinho brasileiro para importadores premium.", market: "Brasil", highlights: ["Demanda priorizada", "Importadores premium", "Leitura por país"] }
    }
  },
  {
    slug: "premium-food-category-benchmark",
    pdfHref: "/pdfs/reports/uruguay-economic-profile-2024-2025.pdf",
    locales: {
      es: { title: "Benchmark de categoria premium food", excerpt: "Reporte de muestra para comparar posicionamiento, pricing y canales.", market: "Alimentos", highlights: ["Mapa de marcas", "Rangos de precio", "Canales de distribucion"] },
      en: { title: "World Bank Research Studies", excerpt: "Uruguay Economic Profile 2024 - 2025", market: "Food", highlights: ["Brand map", "Price ranges", "Channel structure"] },
      pt: { title: "Benchmark da categoria premium food", excerpt: "Relatorio de amostra para comparar posicionamento, precos e canais.", market: "Alimentos", highlights: ["Mapa de marcas", "Faixas de preco", "Estrutura de canais"] }
    }
  },
  {
    slug: "investor-market-scoping-note",
    pdfHref: "/pdfs/reports/consumer-sentiment-pulse-italian-sentiment-on-electric-ferrari-luce.pdf",
    locales: {
      es: { title: "Pulso de sentimiento del consumidor", excerpt: "Sentimiento italiano sobre Electric Ferrari Luce.", market: "Italia", highlights: ["Percepcion de marca", "Senales de demanda", "Posicionamiento premium"] },
      en: { title: "Consumer Sentiment Pulse", excerpt: "Italian Sentiment on Electric Ferrari Luce", market: "Italy", highlights: ["Brand perception", "Demand signals", "Premium positioning"] },
      pt: { title: "Pulso de sentimento do consumidor", excerpt: "Sentimento italiano sobre Electric Ferrari Luce.", market: "Itália", highlights: ["Percepcao da marca", "Sinais de demanda", "Posicionamento premium"] }
    }
  },
  {
    slug: "consumer-sentiment-template",
    pdfHref: "/pdfs/reports/restaurants-berlin-germany-leads.pdf",
    locales: {
      es: { title: "Leads de negocio por segmentos de mercado", excerpt: "Restaurantes en Berlin, Alemania.", market: "Berlin, Alemania", highlights: ["Agregar PDF", "Agregar hallazgos", "Agregar resumen ejecutivo"] },
      en: { title: "Business leads by Market Segments", excerpt: "Restaurants in Berlin Germany", market: "Berlin, Germany", highlights: ["Add PDF", "Add findings", "Add executive summary"] },
      pt: { title: "Leads de negocios por segmentos de mercado", excerpt: "Restaurantes em Berlim, Alemanha.", market: "Berlim, Alemanha", highlights: ["Adicionar PDF", "Adicionar achados", "Adicionar resumo executivo"] }
    }
  },
  {
    slug: "competitive-benchmark-template",
    pdfHref: "/pdfs/reports/smartphone-sales-in-italy.pdf",
    locales: {
      es: { title: "Industria y producto por pais", excerpt: "Ventas de smartphones en Italia.", market: "Italia", highlights: ["Agregar PDF", "Agregar comparacion", "Agregar analisis"] },
      en: { title: "Industry & Product by Country", excerpt: "Smartphone Sales in Italy", market: "Italy", highlights: ["Add PDF", "Add comparison", "Add analysis"] },
      pt: { title: "Industria e produto por pais", excerpt: "Vendas de smartphones na Italia.", market: "Italia", highlights: ["Adicionar PDF", "Adicionar comparacao", "Adicionar analise"] }
    }
  },
  {
    slug: "country-market-template",
    pdfHref: "/pdfs/reports/world-bank-costa-rica-study.pdf",
    locales: {
      es: { title: "Perfil de país del Banco Mundial", excerpt: "Perfil de Costa Rica: 10 indicadores económicos principales.", market: "Costa Rica", highlights: ["Indicadores economicos", "Resumen pais", "PDF de referencia"] },
      en: { title: "World Bank Country Profile", excerpt: "Costa Rica Profile Top 10 Economic Indicators", market: "Costa Rica", highlights: ["Economic indicators", "Country snapshot", "Reference PDF"] },
      pt: { title: "Perfil do país do Banco Mundial", excerpt: "Perfil da Costa Rica: 10 principais indicadores econômicos.", market: "Costa Rica", highlights: ["Indicadores econômicos", "Resumo do país", "PDF de referência"] }
    }
  }
];

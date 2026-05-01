import type { Locale } from "@/config/locales";

export type SampleReport = {
  slug: string;
  pdfHref?: string;
  locales: Record<Locale, { title: string; excerpt: string; market: string; highlights: string[] }>;
};

export const sampleReports: SampleReport[] = [
  {
    slug: "latam-b2b-software-expansion-snapshot",
    pdfHref: "/pdfs/reports/executive-report.pdf",
    locales: {
      es: { title: "Expansion B2B software en Latam", excerpt: "Ejemplo de lectura ejecutiva sobre tamano, competencia y entrada al mercado.", market: "LatAm", highlights: ["Demanda priorizada", "Competidores principales", "Recomendacion de entrada"] },
      en: { title: "LatAm B2B software expansion snapshot", excerpt: "Sample executive read on market size, competition, and expansion feasibility.", market: "LatAm", highlights: ["Prioritized demand", "Main competitors", "Entry recommendation"] },
      pt: { title: "Panorama de expansao de software B2B na America Latina", excerpt: "Exemplo executivo sobre tamanho de mercado, concorrencia e viabilidade de entrada.", market: "America Latina", highlights: ["Demanda priorizada", "Principais concorrentes", "Recomendacao de entrada"] }
    }
  },
  {
    slug: "premium-food-category-benchmark",
    pdfHref: "/pdfs/reports/uruguay-economic-profile-2024-2025.pdf",
    locales: {
      es: { title: "Benchmark de categoria premium food", excerpt: "Reporte de muestra para comparar posicionamiento, pricing y canales.", market: "Alimentos", highlights: ["Mapa de marcas", "Rangos de precio", "Canales de distribucion"] },
      en: { title: "Premium food category benchmark", excerpt: "Sample report comparing positioning, pricing, and channel structure.", market: "Food", highlights: ["Brand map", "Price ranges", "Channel structure"] },
      pt: { title: "Benchmark de categoria premium food", excerpt: "Relatorio de amostra para comparar posicionamento, precos e canais.", market: "Alimentos", highlights: ["Mapa de marcas", "Faixas de preco", "Estrutura de canais"] }
    }
  },
  {
    slug: "investor-market-scoping-note",
    pdfHref: "/pdfs/reports/montevideo-dental-clinics-map.pdf",
    locales: {
      es: { title: "Nota de alcance de mercado para inversion", excerpt: "Formato breve para analisis preliminar antes de due diligence ampliada.", market: "Inversion", highlights: ["Tesis inicial", "Alertas tempranas", "Areas a profundizar"] },
      en: { title: "Investor market scoping note", excerpt: "Short format for early market screening before deeper diligence.", market: "Investment", highlights: ["Initial thesis", "Early warnings", "Areas for deeper work"] },
      pt: { title: "Nota de escopo de mercado para investimento", excerpt: "Formato breve para triagem inicial antes de uma diligencia mais profunda.", market: "Investimento", highlights: ["Tese inicial", "Alertas antecipados", "Areas para aprofundar"] }
    }
  }
];

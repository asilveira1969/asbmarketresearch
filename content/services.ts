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
    slug: "market-entry-assessment",
    icon: "01",
    brochureHref: "/pdfs/services/market-entry-assessment.pdf",
    locales: {
      es: {
        title: "Market Entry Assessment",
        summary: "Evaluacion estructurada de atractivo, competencia y riesgos para nuevos mercados.",
        body: [
          "Analizamos demanda, estructura competitiva, barreras de entrada y viabilidad comercial.",
          "La entrega final esta pensada para conversaciones de directorio, inversion y expansion regional.",
        ],
        deliverables: ["Mapa competitivo", "Tamano de oportunidad", "Riesgos y recomendaciones"],
      },
      en: {
        title: "Market Entry Assessment",
        summary: "Structured evaluation of opportunity, competition, and execution risk for new markets.",
        body: [
          "We assess demand, competitive structure, entry barriers, and commercial feasibility in one decision-ready view.",
          "Final outputs are designed for board, investment, and regional expansion discussions.",
        ],
        deliverables: ["Competitive map", "Opportunity sizing", "Risk and recommendation set"],
      },
      pt: {
        title: "Market Entry Assessment",
        summary: "Avaliacao estruturada de oportunidade, concorrencia e risco para novos mercados.",
        body: [
          "Avaliamos demanda, estrutura competitiva, barreiras de entrada e viabilidade comercial em uma unica visao executiva.",
          "As entregas finais foram pensadas para discussoes de diretoria, investimento e expansao regional.",
        ],
        deliverables: ["Mapa competitivo", "Dimensionamento da oportunidade", "Riscos e recomendacoes"],
      },
    },
  },
  {
    slug: "competitor-intelligence",
    icon: "02",
    brochureHref: "/pdfs/services/competitor-intelligence.pdf",
    locales: {
      es: {
        title: "Competitor Intelligence",
        summary: "Lectura profunda de jugadores, posicionamiento, oferta, mensajes y movimientos del mercado.",
        body: [
          "Combinamos desk research, comparacion estructurada y sintesis ejecutiva para que la accion sea inmediata.",
          "Ideal para decisiones de estrategia comercial, pricing, diferenciacion y reposicionamiento.",
        ],
        deliverables: ["Benchmark competitivo", "Mensajes clave", "Vacios estrategicos"],
      },
      en: {
        title: "Competitor Intelligence",
        summary: "Deep competitor reading across positioning, offer design, messaging, and market behavior.",
        body: [
          "We combine desk research, structured comparison, and executive synthesis so recommendations are immediately usable.",
          "Best suited for pricing, differentiation, go-to-market, and repositioning decisions.",
        ],
        deliverables: ["Competitive benchmark", "Key message map", "Strategic whitespace"],
      },
      pt: {
        title: "Competitor Intelligence",
        summary: "Leitura profunda de concorrentes em posicionamento, oferta, mensagens e movimentos de mercado.",
        body: [
          "Combinamos desk research, comparacao estruturada e sintese executiva para que as recomendacoes sejam imediatamente acionaveis.",
          "Indicado para decisoes de pricing, diferenciacao, go-to-market e reposicionamento.",
        ],
        deliverables: ["Benchmark competitivo", "Mapa de mensagens", "Espacos estrategicos"],
      },
    },
  },
  {
    slug: "executive-research-briefs",
    icon: "03",
    brochureHref: "/pdfs/services/executive-research-briefs.pdf",
    locales: {
      es: {
        title: "Executive Research Briefs",
        summary: "Reportes ejecutivos a medida para directorios, inversionistas y equipos de estrategia.",
        body: [
          "Convertimos preguntas abiertas en entregables claros, comparables y con orientacion de decision.",
          "Cada brief prioriza claridad, fuentes transparentes y narrativa sobria para uso profesional.",
        ],
        deliverables: ["Documento PDF", "Resumen ejecutivo", "Anexos y fuentes"],
      },
      en: {
        title: "Executive Research Briefs",
        summary: "Custom executive reports for boards, investors, and strategy teams.",
        body: [
          "We turn open strategic questions into clear, comparable, decision-ready deliverables.",
          "Each brief prioritizes source transparency, sober presentation, and practical executive use.",
        ],
        deliverables: ["PDF document", "Executive summary", "Appendices and sources"],
      },
      pt: {
        title: "Executive Research Briefs",
        summary: "Relatorios executivos sob medida para diretorias, investidores e equipes de estrategia.",
        body: [
          "Transformamos perguntas estrategicas abertas em entregas claras, comparaveis e orientadas a decisao.",
          "Cada brief prioriza transparencia de fontes, apresentacao sobria e utilidade executiva.",
        ],
        deliverables: ["Documento PDF", "Resumo executivo", "Anexos e fontes"],
      },
    },
  },
];

import type { Locale } from "@/config/locales";

export type InsightArticle = {
  slug: string;
  publishedAt: string;
  pdfHref?: string;
  locales: Record<Locale, { title: string; excerpt: string; category: string; body: string[] }>;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "how-to-evaluate-a-new-market-without-noise",
    publishedAt: "2026-03-30",
    pdfHref: "/pdfs/insights/how-to-evaluate-a-new-market.pdf",
    locales: {
      es: { title: "Como evaluar un mercado nuevo sin ruido", excerpt: "Marco breve para separar senales utiles de datos irrelevantes al estudiar expansion.", category: "Estrategia", body: ["Los mejores estudios de mercado reducen complejidad en lugar de aumentarla.", "En expansion geografica, el valor real esta en ordenar demanda, competidores, barreras y velocidad de entrada.", "Un analisis ejecutivo debe responder que hacer, por que y con que nivel de riesgo."] },
      en: { title: "How to evaluate a new market without noise", excerpt: "A concise framework to separate useful signals from irrelevant data during expansion research.", category: "Strategy", body: ["The best market research reduces complexity instead of multiplying it.", "For geographic expansion, the core value lies in organizing demand, competitors, barriers, and time-to-entry.", "An executive analysis should answer what to do, why it matters, and how much risk it carries."] },
      pt: { title: "Como avaliar um novo mercado sem ruido", excerpt: "Estrutura breve para separar sinais uteis de dados irrelevantes em estudos de expansao.", category: "Estrategia", body: ["As melhores pesquisas de mercado reduzem complexidade em vez de aumenta-la.", "Em expansao geografica, o valor esta em organizar demanda, concorrentes, barreiras e velocidade de entrada.", "Uma analise executiva deve responder o que fazer, por que e com qual nivel de risco."] }
    }
  },
  {
    slug: "what-executives-actually-need-from-competitive-intelligence",
    publishedAt: "2026-03-30",
    locales: {
      es: { title: "Lo que los ejecutivos realmente necesitan de la inteligencia competitiva", excerpt: "Mas claridad estrategica y menos acumulacion de datos descriptivos.", category: "Competencia", body: ["La inteligencia competitiva debe conectar observacion con decision.", "No alcanza con listar competidores: hay que explicar implicancias comerciales, posicionamiento y respuesta recomendada."] },
      en: { title: "What executives actually need from competitive intelligence", excerpt: "Less descriptive overload and more strategic clarity.", category: "Competition", body: ["Competitive intelligence should connect observation with action.", "Listing competitors is not enough; the work must explain commercial implications, positioning, and the recommended response."] },
      pt: { title: "O que executivos realmente precisam da inteligencia competitiva", excerpt: "Menos excesso descritivo e mais clareza estrategica.", category: "Concorrencia", body: ["Inteligencia competitiva deve conectar observacao com acao.", "Listar concorrentes nao basta; o trabalho precisa explicar implicacoes comerciais, posicionamento e resposta recomendada."] }
    }
  },
  {
    slug: "how-to-commission-a-useful-market-research-brief",
    publishedAt: "2026-03-30",
    locales: {
      es: { title: "Como encargar un brief de investigacion realmente util", excerpt: "Preguntas bien formuladas producen reportes mas accionables.", category: "Briefing", body: ["Los mejores proyectos comienzan con un objetivo de decision preciso.", "Definir alcance, profundidad, horizonte temporal y comparables mejora la calidad del resultado final."] },
      en: { title: "How to commission a market research brief that is actually useful", excerpt: "Well-framed questions lead to more actionable reports.", category: "Briefing", body: ["The strongest projects begin with a precise decision objective.", "Defining scope, depth, timeline, and comparables improves the quality of the final report."] },
      pt: { title: "Como solicitar um brief de pesquisa realmente util", excerpt: "Perguntas bem formuladas geram relatorios mais acionaveis.", category: "Briefing", body: ["Os melhores projetos comecam com um objetivo de decisao preciso.", "Definir escopo, profundidade, prazo e comparaveis melhora a qualidade da entrega final."] }
    }
  }
];

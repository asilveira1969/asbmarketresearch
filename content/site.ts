import type { Locale } from "@/config/locales";

export type StaticPageKey =
  | "about"
  | "services"
  | "methodology"
  | "sample-reports"
  | "insights"
  | "contact"
  | "quotation"
  | "request-received"
  | "newsletter"
  | "privacy-policy"
  | "terms";

export const staticPages = {
  es: {
    about: { title: "Quiénes somos", description: "Conoce ASB Market Research, la trayectoria del fundador y el enfoque de inteligencia de mercado." },
    services: { title: "Servicios", description: "Reportes de industria, estudios a medida, briefings mensuales y sistemas de inteligencia de mercado impulsados por agentes." },
    methodology: { title: "Metodología", description: "Garantizamos la solidez, trazabilidad y credibilidad de cada reporte que entregamos." },
    "sample-reports": { title: "Reportes de muestra", description: "Biblioteca preparada para descargas PDF, vistas previas y materiales futuros." },
    insights: { title: "Insights", description: "Artículos editoriales, notas breves y lecturas sobre inteligencia de mercado, competencia y estrategia." },
    contact: {
      title: "Contacto",
      description: "Llámanos o escríbenos por WhatsApp al +1 305 784 0514. Nos dará mucho gusto conversar sobre tus necesidades de investigación.",
    },
    quotation: {
      title: "Detailed Project Brief",
      description: "Completa un Detailed Project Brief para reportes de mercado, briefings recurrentes o un sistema agéntico de inteligencia de mercado.",
    },
    "request-received": {
      title: "Thank You",
      description: "Hemos recibido tu solicitud. Elige la opción que mejor te convenga.",
    },
    newsletter: { title: "Newsletter", description: "Captación de suscriptores para actualizaciones, notas de investigación y futuras publicaciones." },
    "privacy-policy": { title: "Política de privacidad", description: "Texto base listo para revisión legal final antes del lanzamiento." },
    terms: { title: "Términos", description: "Base de términos para el uso del sitio, acceso a contenidos y envío de formularios." },
  },
  en: {
    about: { title: "Who we are", description: "Learn about ASB Market Research, the founder's background, and our market intelligence approach." },
    services: { title: "Services", description: "Industry reports, custom research studies, monthly market briefings, and agent-powered market intelligence systems." },
    methodology: { title: "Methodology", description: "We ensure the solidity, traceability, and credibility of every report we deliver." },
    "sample-reports": { title: "Sample Reports", description: "A library prepared for PDF downloads, previews, and future case material." },
    insights: { title: "Insights", description: "Editorial articles, short notes, and reads on market intelligence, competition, and strategy." },
    contact: {
      title: "Contact",
      description: "Call or WhatsApp us at +1 305 784 0514. We would be pleased to discuss your research needs.",
    },
    quotation: {
      title: "Detailed Project Brief",
      description: "Complete a Detailed Project Brief for market reports, recurring briefings, or a customized agentic market intelligence system.",
    },
    "request-received": {
      title: "Thank You",
      description: "We have received your request. Choose the option that works best for you.",
    },
    newsletter: { title: "Newsletter", description: "Subscriber capture for updates, research notes, and future publications." },
    "privacy-policy": { title: "Privacy Policy", description: "Base privacy copy ready for final legal review before launch." },
    terms: { title: "Terms", description: "Base terms for site use, content access, and form submissions." },
  },
  pt: {
    about: { title: "Quem somos", description: "Conheça a ASB Market Research, a trajetória do fundador e o nosso enfoque de inteligência de mercado." },
    services: { title: "Serviços", description: "Relatórios de indústria, estudos sob medida, briefings mensais e sistemas de inteligência de mercado impulsionados por agentes." },
    methodology: { title: "Metodologia", description: "Garantimos a solidez, a rastreabilidade e a credibilidade de cada relatório que entregamos." },
    "sample-reports": { title: "Relatórios de amostra", description: "Biblioteca preparada para downloads em PDF, prévias e materiais futuros." },
    insights: { title: "Insights", description: "Artigos editoriais, notas breves e leituras sobre inteligência de mercado, concorrência e estratégia." },
    contact: {
      title: "Contato",
      description: "Ligue ou envie uma mensagem no WhatsApp para +1 305 784 0514. Teremos prazer em conversar sobre suas necessidades de pesquisa.",
    },
    quotation: {
      title: "Detailed Project Brief",
      description: "Complete um Detailed Project Brief para relatórios de mercado, briefings recorrentes ou um sistema agêntico de inteligência de mercado personalizado.",
    },
    "request-received": {
      title: "Thank You",
      description: "Recebemos sua solicitação. Escolha a opção que funciona melhor para você.",
    },
    newsletter: { title: "Newsletter", description: "Captação de assinantes para atualizações, notas de pesquisa e futuras publicações." },
    "privacy-policy": { title: "Política de privacidade", description: "Texto base pronto para revisão jurídica final antes do lançamento." },
    terms: { title: "Termos", description: "Base de termos para uso do site, acesso a conteúdos e envio de formulários." },
  },
} as const;

export const faqContent: Record<Locale, Array<{ question: string; answer: string }>> = {
  es: [
    { question: "¿Qué tipo de reportes pueden solicitarse?", answer: "Evaluaciones de mercado, inteligencia competitiva, informes ejecutivos y briefs de expansión." },
    { question: "¿Los entregables pueden descargarse en PDF?", answer: "Sí. La arquitectura ya está preparada para descargas directas y futuras bibliotecas documentales." },
    { question: "¿El sitio está preparado para crecer?", answer: "Sí. Incluye rutas localizadas, colecciones de contenido y componentes reutilizables para nuevas páginas." },
  ],
  en: [
    { question: "What type of reports can be requested?", answer: "Market assessments, competitor intelligence, executive reports, and expansion briefs." },
    { question: "Can deliverables be downloaded as PDFs?", answer: "Yes. The architecture is already prepared for direct downloads and future document libraries." },
    { question: "Is the site ready to grow?", answer: "Yes. It includes localized routing, content collections, and reusable components for new pages." },
  ],
  pt: [
    { question: "Que tipo de relatórios podem ser solicitados?", answer: "Avaliações de mercado, inteligência competitiva, relatórios executivos e briefs de expansão." },
    { question: "As entregas podem ser baixadas em PDF?", answer: "Sim. A arquitetura já está preparada para downloads diretos e futuras bibliotecas documentais." },
    { question: "O site está pronto para crescer?", answer: "Sim. Inclui rotas localizadas, coleções de conteúdo e componentes reutilizáveis para novas páginas." },
  ],
};

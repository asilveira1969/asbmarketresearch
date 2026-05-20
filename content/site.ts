import type { Locale } from "@/config/locales";

export type StaticPageKey =
  | "about"
  | "services"
  | "methodology"
  | "sample-reports"
  | "insights"
  | "contact"
  | "quotation"
  | "newsletter"
  | "privacy-policy"
  | "terms";

export const staticPages = {
  es: {
    about: { title: "Quiénes somos", description: "Sobre la empresa y el fundador." },
    services: { title: "Servicios", description: "Reportes de industria, estudios a medida, briefings mensuales y sistemas de inteligencia de mercado impulsados por agentes." },
    methodology: { title: "Metodología", description: "Garantizamos la solidez, trazabilidad y credibilidad de cada reporte que entregamos." },
    "sample-reports": { title: "Reportes de muestra", description: "Biblioteca preparada para descargas PDF, vistas previas y materiales futuros." },
    insights: { title: "Insights", description: "Blog editorial para artículos, estudios breves y opiniones." },
    contact: { title: "Contacto", description: "Formulario general para consultas y conversaciones profesionales." },
    quotation: { title: "Cotización", description: "Formulario para solicitar una propuesta de investigación personalizada." },
    newsletter: { title: "Newsletter", description: "Captación de suscriptores para actualizaciones, notas de investigación y futuras publicaciones." },
    "privacy-policy": { title: "Política de privacidad", description: "Texto base listo para revisión legal final antes del lanzamiento." },
    terms: { title: "Términos", description: "Base de términos para el uso del sitio, acceso a contenidos y envío de formularios." },
  },
  en: {
    about: { title: "Who we are", description: "About and Founder" },
    services: { title: "Services", description: "Industry reports, custom research studies, monthly market briefings, and agent-powered market intelligence systems." },
    methodology: { title: "Methodology", description: "We ensure the solidity, traceability, and credibility of every report we deliver." },
    "sample-reports": { title: "Sample Reports", description: "A library prepared for PDF downloads, previews, and future case material." },
    insights: { title: "Insights", description: "Editorial blog for articles, short studies, and opinions." },
    contact: { title: "Contact", description: "General contact form for professional inquiries and conversations." },
    quotation: { title: "Request for Custom Research Proposal", description: "Quotation request form for briefs and report requirements." },
    newsletter: { title: "Newsletter", description: "Subscriber capture for updates, research notes, and future publications." },
    "privacy-policy": { title: "Privacy Policy", description: "Base privacy copy ready for final legal review before launch." },
    terms: { title: "Terms", description: "Base terms for site use, content access, and form submissions." },
  },
  pt: {
    about: { title: "Quem somos", description: "Sobre a empresa e o fundador." },
    services: { title: "Serviços", description: "Relatórios de indústria, estudos sob medida, briefings mensais e sistemas de inteligência de mercado impulsionados por agentes." },
    methodology: { title: "Metodologia", description: "Garantimos a solidez, a rastreabilidade e a credibilidade de cada relatório que entregamos." },
    "sample-reports": { title: "Relatórios de amostra", description: "Biblioteca preparada para downloads em PDF, prévias e materiais futuros." },
    insights: { title: "Insights", description: "Blog editorial para artigos, estudos curtos e opiniões." },
    contact: { title: "Contato", description: "Formulário geral para consultas e conversas profissionais." },
    quotation: { title: "Cotação", description: "Formulário para solicitar uma proposta de pesquisa personalizada." },
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

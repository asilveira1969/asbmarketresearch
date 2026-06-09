import type { Locale } from "@/config/locales";
import { siteConfig } from "@/config/site";

export const founderProfile = {
  name: siteConfig.founderName,
  linkedinUrl: "https://www.linkedin.com/in/anastaciosilveira/",
  role: {
    es: "Fundador y director de consultoría",
    en: "Founder and consulting director",
    pt: "Fundador e diretor de consultoria",
  } satisfies Record<Locale, string>,
  image: "/media/anastacio-silveira.jpeg",
  resumeUrl: "/pdfs/company/asb-founder-resume.pdf",
  biography: {
    es: "Veo a los investigadores de mercado como los ojos y oídos de una organización. Nuestra función es identificar oportunidades, detectar riesgos y hacer visible la información de mercado relevante para quienes toman decisiones.\n\nLa investigación se vuelve valiosa cuando se interpreta dentro del contexto de la organización. Al combinar realidades específicas de la empresa con inteligencia de mercado y análisis estructurado, transformamos la información en conocimientos accionables que ayudan a evaluar alternativas, reducir la incertidumbre y tomar mejores decisiones estratégicas.\n\nEn definitiva, la investigación de mercado no consiste solo en entregar datos: consiste en aportar claridad para decidir.",
    en: "I view market researchers as the eyes and ears of an organization. Our role is to identify opportunities, uncover risks, and make relevant market information visible to decision-makers.\n\nResearch becomes valuable when it is interpreted within the context of the organization. By combining company-specific realities with market intelligence and structured analysis, we transform information into actionable insights that help organizations evaluate alternatives, reduce uncertainty, and make better strategic decisions.\n\nUltimately, market research is not about delivering data-it is about providing clarity for decision-making.",
    pt: "Vejo os pesquisadores de mercado como os olhos e ouvidos de uma organização. Nossa função é identificar oportunidades, revelar riscos e tornar visível a informação de mercado relevante para quem toma decisões.\n\nA pesquisa se torna valiosa quando é interpretada dentro do contexto da organização. Ao combinar realidades específicas da empresa com inteligência de mercado e análise estruturada, transformamos informações em insights acionáveis que ajudam as organizações a avaliar alternativas, reduzir incertezas e tomar melhores decisões estratégicas.\n\nEm última análise, pesquisa de mercado não é sobre entregar dados: é sobre oferecer clareza para a tomada de decisão.",
  } satisfies Record<Locale, string>,
  credentialsHeading: {
    es: "Formación académica y profesional",
    en: "Academic & Professional Background",
    pt: "Formação acadêmica e profissional",
  } satisfies Record<Locale, string>,
  educationLabel: {
    es: "Formación empresarial",
    en: "Business Education",
    pt: "Formação empresarial",
  } satisfies Record<Locale, string>,
  experienceLabel: {
    es: "Experiencia en investigación de mercado",
    en: "Market Research Experience",
    pt: "Experiência em pesquisa de mercado",
  } satisfies Record<Locale, string>,
  education: [
    {
      degree: "Master of Science in Marketing",
      institution: "The Johns Hopkins University",
    },
    {
      degree: "Bachelor of Science in Business",
      institution: "University of Baltimore",
    },
  ],
  experience: [
    {
      company: "General Electric",
      location: "Stamford, Connecticut, USA",
    },
    {
      company: "Zurich Insurance Group",
      location: "Baltimore, Maryland, USA",
    },
  ],
};

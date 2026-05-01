import type { Locale } from "@/config/locales";
import { siteConfig } from "@/config/site";

export const founderProfile = {
  name: siteConfig.founderName,
  role: {
    es: "Fundador y director de consultoria",
    en: "Founder and consulting director",
    pt: "Fundador e diretor de consultoria",
  } satisfies Record<Locale, string>,
  image: "/media/anastacio-silveira.jpeg",
  resumeUrl: "/pdfs/company/asb-founder-resume.pdf",
  biography: {
    es: "Los investigadores de mercado somos los ojos y oidos de las empresas. Identificamos y hacemos visibles las oportunidades y las amenazas. A partir del contexto del cliente y la recopilacion de informacion, elaboramos reportes que articulan hallazgos clave, permitiendo al cliente trazar su propio plan de accion con base en evidencia.",
    en: "Market researchers are the eyes and ears of a business. We identify and make visible both opportunities and threats. Based on the client context and the information gathered, we develop reports that articulate key findings, enabling each client to define its own course of action on an evidence-based foundation.",
    pt: "Os pesquisadores de mercado sao os olhos e os ouvidos das empresas. Identificamos e tornamos visiveis as oportunidades e as ameacas. A partir do contexto do cliente e da coleta de informacoes, elaboramos relatorios que articulam achados-chave, permitindo ao cliente tracar seu proprio plano de acao com base em evidencia.",
  } satisfies Record<Locale, string>,
  credentialsHeading: {
    es: "Formacion academica y experiencia profesional en investigacion de mercados",
    en: "Academic Background & Professional Experience in Market Research",
    pt: "Formacao academica e experiencia profissional em pesquisa de mercado",
  } satisfies Record<Locale, string>,
  educationLabel: {
    es: "Formacion",
    en: "Education",
    pt: "Formacao",
  } satisfies Record<Locale, string>,
  experienceLabel: {
    es: "Experiencia",
    en: "Experience",
    pt: "Experiencia",
  } satisfies Record<Locale, string>,
  education: [
    {
      degree: "Master of Science in Marketing",
      institution: "Johns Hopkins University",
    },
    {
      degree: "Bachelor of Science",
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


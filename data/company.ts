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
    es: "Los investigadores de mercado somos los ojos y oídos de las empresas. Identificamos y hacemos visibles las oportunidades y las amenazas. A partir del contexto del cliente y la recopilación de información, elaboramos reportes que articulan hallazgos clave, permitiendo al cliente trazar su propio plan de acción con base en evidencia.",
    en: "I view market researchers as the eyes and ears of an organization. Our role is to identify opportunities, uncover risks, and make relevant market information visible to decision-makers.\n\nResearch becomes valuable when it is interpreted within the context of the organization. By combining company-specific realities with market intelligence and structured analysis, we transform information into actionable insights that help organizations evaluate alternatives, reduce uncertainty, and make better strategic decisions.\n\nUltimately, market research is not about delivering data-it is about providing clarity for decision-making.",
    pt: "Os pesquisadores de mercado são os olhos e os ouvidos das empresas. Identificamos e tornamos visíveis as oportunidades e as ameaças. A partir do contexto do cliente e da coleta de informações, elaboramos relatórios que articulam achados-chave, permitindo ao cliente traçar seu próprio plano de ação com base em evidência.",
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

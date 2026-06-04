import type { Locale } from "@/config/locales";

export type NavigationItem = {
  href: string;
  label: Record<Locale, string>;
};

export const headerNavigation: NavigationItem[] = [
  { href: "/services", label: { es: "Servicios", en: "Services", pt: "ServiÃ§os" } },
  { href: "/sample-reports", label: { es: "Reportes", en: "Reports", pt: "RelatÃ³rios" } },
  { href: "/insights", label: { es: "Insights", en: "Insights", pt: "Insights" } },
  { href: "/about", label: { es: "Nosotros", en: "About Us", pt: "Sobre" } },
];

export const footerPrimaryNavigation: NavigationItem[] = [
  { href: "/services", label: { es: "Servicios", en: "Services", pt: "ServiÃ§os" } },
  { href: "/sample-reports", label: { es: "Reportes", en: "Reports", pt: "RelatÃ³rios" } },
  { href: "/methodology", label: { es: "MetodologÃ­a", en: "Methodology", pt: "Metodologia" } },
  { href: "/insights", label: { es: "Insights", en: "Insights", pt: "Insights" } },
  { href: "/about", label: { es: "Nosotros", en: "About Us", pt: "Sobre" } },
  { href: "/contact", label: { es: "Contacto", en: "Contact", pt: "Contato" } },
  { href: "/quotation", label: { es: "CotizaciÃ³n", en: "Quotation", pt: "CotaÃ§Ã£o" } },
];

export const footerNavigation: NavigationItem[] = [
  { href: "/methodology", label: { es: "MetodologÃ­a", en: "Methodology", pt: "Metodologia" } },
  { href: "/newsletter", label: { es: "BoletÃ­n", en: "Newsletter", pt: "Boletim" } },
  { href: "/privacy-policy", label: { es: "Privacidad", en: "Privacy Policy", pt: "Privacidade" } },
  { href: "/terms", label: { es: "TÃ©rminos", en: "Terms", pt: "Termos" } },
];

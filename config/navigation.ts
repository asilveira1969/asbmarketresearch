import type { Locale } from "@/config/locales";

export type NavigationItem = {
  href: string;
  label: Record<Locale, string>;
};

export const headerNavigation: NavigationItem[] = [
  { href: "/services", label: { es: "Servicios", en: "Services", pt: "Serviços" } },
  { href: "/sample-reports", label: { es: "Reportes", en: "Sample Reports", pt: "Relatórios" } },
  { href: "/insights", label: { es: "Insights", en: "Insights", pt: "Insights" } },
  { href: "/about", label: { es: "Nosotros", en: "About Us", pt: "Sobre" } },
];

export const footerPrimaryNavigation: NavigationItem[] = [
  { href: "/services", label: { es: "Servicios", en: "Services", pt: "Serviços" } },
  { href: "/sample-reports", label: { es: "Reportes", en: "Reports", pt: "Relatórios" } },
  { href: "/methodology", label: { es: "Metodología", en: "Methodology", pt: "Metodologia" } },
  { href: "/insights", label: { es: "Insights", en: "Insights", pt: "Insights" } },
  { href: "/about", label: { es: "Nosotros", en: "About Us", pt: "Sobre" } },
  { href: "/contact", label: { es: "Contacto", en: "Contact", pt: "Contato" } },
  { href: "/quotation", label: { es: "Cotización", en: "Quotation", pt: "Cotação" } },
];

export const footerNavigation: NavigationItem[] = [
  { href: "/methodology", label: { es: "Metodología", en: "Methodology", pt: "Metodologia" } },
  { href: "/newsletter", label: { es: "Boletín", en: "Newsletter", pt: "Boletim" } },
  { href: "/privacy-policy", label: { es: "Privacidad", en: "Privacy Policy", pt: "Privacidade" } },
  { href: "/terms", label: { es: "Términos", en: "Terms", pt: "Termos" } },
];

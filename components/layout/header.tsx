import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/locales";
import { headerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getLocalizedPath } from "@/lib/routes";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ContactMenu } from "@/components/layout/contact-menu";

export function Header({ locale }: { locale: Locale }) {
  const copy = {
    es: {
      quote: "Solicita Cotización Gratis",
      agentic: "Sistema Agentic de Inteligencia de Mercado",
      badge: "Nuevo!",
    },
    en: {
      quote: "Request Proposal",
      agentic: "Agentic Market Intelligence System",
      badge: "New!",
    },
    pt: {
      quote: "Solicite Cotação Grátis",
      agentic: "Sistema Agentic de Inteligência de Mercado",
      badge: "Novo!",
    },
  }[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-3 md:px-8">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 md:gap-8">
            <Link href={getLocalizedPath(locale)} className="shrink-0 overflow-hidden rounded-2xl border-2 border-brand-primary bg-canvas shadow-soft w-[280px] md:w-[360px]">
              <Image
                src="/media/asb-logo-primary.png"
                alt={siteConfig.name}
                width={1120}
                height={630}
                priority
                className="h-[110px] md:h-[140px] w-full object-contain mix-blend-multiply"
              />
            </Link>
            <div className="hidden lg:flex lg:flex-1 lg:flex-col">
              <nav className="flex items-center gap-4">
                {headerNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocalizedPath(locale, item.href)}
                    className="text-sm font-medium text-body-secondary transition-colors hover:text-brand-primary"
                  >
                    {item.label[locale]}
                  </Link>
                ))}
                <ContactMenu label={locale === "es" ? "Contacto" : locale === "pt" ? "Contato" : "Contact"} locale={locale} quoteLabel={copy.quote} />
              </nav>
              <div className="mt-6 grid w-full grid-cols-[auto_1fr_auto] items-center">
                <a
                  className="inline-flex items-center gap-1.5 justify-self-start"
                  href={getLocalizedPath(locale, "/services/agentic-market-intelligence-system")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex min-h-[2.125rem] items-center justify-center rounded-full bg-brand-primary px-4 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-secondary">
                    {copy.agentic}
                  </span>
                  <span className="-ml-1 -rotate-6 rounded-full bg-[#76b900] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white shadow-sm">
                    {copy.badge}
                  </span>
                </a>
                <div />
                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:hidden">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}

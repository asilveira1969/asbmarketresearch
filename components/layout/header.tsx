import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/locales";
import { headerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getLocalizedPath } from "@/lib/routes";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { QuoteCta } from "@/components/layout/quote-cta";

export function Header({ locale }: { locale: Locale }) {
  const copy = {
    es: {
      workstation: "Sistema Agéntico de Inteligencia de Mercado",
    },
    en: {
      workstation: "Agentic Research Workstation",
    },
    pt: {
      workstation: "Sistema Agêntico de Inteligência de Mercado",
    },
  }[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-3 md:px-8">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 md:gap-8">
            <Link href={getLocalizedPath(locale)} className="shrink-0 overflow-hidden rounded-2xl border-2 border-brand-primary bg-canvas shadow-soft w-[280px] md:w-[360px]">
              <Image
                src="/media/asb-logo-horizontal.png"
                alt={siteConfig.name}
                width={1120}
                height={630}
                priority
                className="h-[110px] md:h-[140px] w-full object-contain mix-blend-multiply"
              />
            </Link>
            <div className="hidden lg:flex lg:flex-1 lg:flex-col">
              <div className="flex items-center gap-6">
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
                  <Link
                    href={getLocalizedPath(locale, "/contact")}
                    className="text-sm font-medium text-body-secondary transition-colors hover:text-brand-primary"
                  >
                    {locale === "es" ? "Contacto" : locale === "pt" ? "Contato" : "Contact"}
                  </Link>
                </nav>
              </div>
              <div className="mt-4 flex justify-center">
                <Link
                  href={getLocalizedPath(locale, "/agentic-market-intelligence-system")}
                  className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-soft transition-colors hover:bg-brand-secondary"
                >
                  {copy.workstation}
                </Link>
                <span className="ml-1 -rotate-6 rounded-full bg-[#9BE400] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white shadow-sm">
                  NEW!
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <QuoteCta locale={locale} />
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}

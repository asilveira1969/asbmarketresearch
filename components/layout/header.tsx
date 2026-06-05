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
        <div className="flex items-center justify-between gap-6 lg:hidden">
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
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/asb-market-research/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit ASB Market Research on LinkedIn"
              title="ASB Market Research on LinkedIn"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-canvas transition-colors hover:border-brand-primary hover:bg-surface"
            >
              <Image
                src="/media/linkedin-logo.svg"
                alt="ASB Market Research LinkedIn profile"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </a>
            <QuoteCta locale={locale} className="shrink-0" />
            <div className="shrink-0">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-start gap-8">
          <Link
            href={getLocalizedPath(locale)}
            className="shrink-0 overflow-hidden rounded-2xl border-2 border-brand-primary bg-canvas shadow-soft w-[255px] xl:w-[290px]"
          >
            <Image
              src="/media/asb-logo-horizontal.png"
              alt={siteConfig.name}
              width={1120}
              height={630}
              priority
              className="h-[102px] xl:h-[112px] w-full object-contain mix-blend-multiply"
            />
          </Link>
          <div className="flex min-w-0 flex-1 flex-col gap-4 pt-6">
            <nav className="flex items-center gap-4 whitespace-nowrap">
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
            <div className="flex items-center justify-between gap-8 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <Link
                  href={getLocalizedPath(locale, "/agentic-market-intelligence-system")}
                  className="inline-flex shrink-0 items-center rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-soft transition-colors hover:bg-brand-secondary"
                >
                  {copy.workstation}
                </Link>
                <span className="shrink-0 -rotate-6 rounded-full bg-[#9BE400] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white shadow-sm">
                  NEW!
                </span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <QuoteCta locale={locale} className="shrink-0" />
                <div className="shrink-0">
                  <LanguageSwitcher locale={locale} />
                </div>
                <a
                  href="https://www.linkedin.com/company/asb-market-research/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit ASB Market Research on LinkedIn"
                  title="ASB Market Research on LinkedIn"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-canvas transition-colors hover:border-brand-primary hover:bg-surface"
                >
                  <Image
                    src="/media/linkedin-logo.svg"
                    alt="ASB Market Research LinkedIn profile"
                    width={24}
                    height={24}
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

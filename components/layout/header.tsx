import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/locales";
import { mainNavigation } from "@/config/navigation";
import { serviceDetails } from "@/content/services";
import { siteConfig } from "@/config/site";
import { getLocalizedPath } from "@/lib/routes";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ServicesMenu } from "@/components/layout/services-menu";

export function Header({ locale }: { locale: Locale }) {
  const brief =
    locale === "es"
      ? "Solicita Cotizacion Gratis"
      : locale === "pt"
        ? "Solicite Cotacao Gratis"
        : "Request Free Quotation";

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
            <div className="hidden lg:flex lg:flex-col lg:items-center">
              <nav className="flex items-center gap-4">
                {mainNavigation.map((item) =>
                  item.href === "/services" ? (
                    <ServicesMenu key={item.href} label={item.label[locale]} locale={locale} services={serviceDetails} />
                  ) : (
                    <Link
                      key={item.href}
                      href={getLocalizedPath(locale, item.href)}
                      className="text-sm font-medium text-body-secondary transition-colors hover:text-brand-primary"
                    >
                      {item.label[locale]}
                    </Link>
                  )
                )}
              </nav>
              <Link
                className="mt-3 inline-flex min-h-[2.125rem] items-center justify-center rounded-full bg-brand-primary px-4 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-secondary"
                href={getLocalizedPath(locale, "/quotation")}
              >
                {brief}
              </Link>
              <div className="mt-2 flex items-center">
                <a
                  className="inline-flex items-center gap-1.5"
                  href={getLocalizedPath(locale, "/services/agentic-market-intelligence-system")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex min-h-[2.125rem] items-center justify-center rounded-full bg-brand-primary px-4 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-secondary">
                    Agentic Market Intelligence System
                  </span>
                  <span className="-ml-1 -rotate-6 rounded-full bg-[#76b900] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white shadow-sm">
                    New!
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/locales";
import { footerNavigation, footerPrimaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getLocalizedPath } from "@/lib/routes";

type FooterProps = { locale: Locale };

export function Footer({ locale }: FooterProps) {
  const pathname = usePathname().replace(/\/$/, "");
  const servicesPath = getLocalizedPath(locale, "/services").replace(/\/$/, "");
  const isServicesPage = pathname === servicesPath;
  const visiblePrimaryLinks = footerPrimaryNavigation.filter((item) => item.href !== "/methodology" && item.href !== "/quotation");
  const visibleLegalLinks = footerNavigation.filter((item) => item.href !== "/methodology" && item.href !== "/newsletter");
  const currentYear = new Date().getFullYear();

  const copy = {
    es: { navigation: "Navegacion" },
    en: { navigation: "Navigation" },
    pt: { navigation: "Navegacao" },
  }[locale];

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr_1fr_1fr] md:items-start md:px-8">
        <div className="max-w-xl">
          <Link
            href={getLocalizedPath(locale)}
            className="-ml-4 inline-block w-[180px] overflow-hidden rounded-2xl border-2 border-brand-primary bg-canvas shadow-soft md:-ml-5 md:w-[220px]"
          >
            <Image
              src="/media/asb-logo-horizontal.png"
              alt={siteConfig.name}
              width={560}
              height={315}
              className="h-[92px] w-full object-contain mix-blend-multiply md:h-[112px]"
            />
          </Link>
        </div>
        <div className="max-w-xs">
          <address className="space-y-0.5 not-italic text-xs leading-5 text-body-secondary">
            <p>Navarrete 472</p>
            <p>Melo, Cerro Largo 37000, Uruguay</p>
            <p className="leading-5">
              <a className="transition-colors hover:text-brand-primary" href="tel:+59897285929">
                +598 (97) 285 929
              </a>
            </p>
            <p className="leading-5">
              <a className="transition-colors hover:text-brand-primary" href="tel:+13057840514">
                +1 (305) 784 0514
              </a>
            </p>
            <p className="leading-5">
              <a className="transition-colors hover:text-brand-primary" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
          </address>
          <a
            href="https://www.linkedin.com/company/asb-market-research/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ASB Market Research on LinkedIn"
            title="ASB Market Research on LinkedIn"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-2.5 py-1.5 text-xs text-body-secondary transition-colors hover:border-brand-primary hover:text-brand-primary"
          >
            <Image
              src="/media/linkedin-logo.svg"
              alt="ASB Market Research LinkedIn profile"
              width={20}
              height={20}
              className="h-4 w-4"
            />
            <span>LinkedIn</span>
          </a>
          <p className="mt-3 text-[0.7rem] leading-5 text-body-secondary">
            Copyright {currentYear} ASB Market Research
          </p>
        </div>
        <div>
          <p className="eyebrow">{copy.navigation}</p>
          <div className="mt-4 flex flex-col gap-3">
            {visiblePrimaryLinks.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedPath(locale, item.href)}
                className="text-sm text-body-secondary transition-colors hover:text-brand-primary"
              >
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Legal</p>
          <div className="mt-4 flex flex-col gap-3">
            {visibleLegalLinks.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedPath(locale, item.href)}
                className="text-sm text-body-secondary transition-colors hover:text-brand-primary"
              >
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

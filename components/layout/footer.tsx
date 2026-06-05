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

  const copy = {
    es: { navigation: "Navegacion" },
    en: { navigation: "Navigation" },
    pt: { navigation: "Navegacao" },
  }[locale];

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
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

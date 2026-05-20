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
  const copy = {
    es: {
      navigation: "Navegación",
      description:
        "ASB Market Research entrega inteligencia de mercado estructurada, soporte consultivo e investigación lista para decisiones ejecutivas, inversión y crecimiento.",
    },
    en: {
      navigation: "Navigation",
      description: siteConfig.defaultDescription,
    },
    pt: {
      navigation: "Navegação",
      description:
        "A ASB Market Research entrega inteligência de mercado estruturada, suporte consultivo e pesquisa pronta para decisões executivas, investimento e crescimento.",
    },
  }[locale];

  return (
    <footer className={`border-t border-line ${isServicesPage ? "bg-surface" : "bg-canvas"}`}>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div className="max-w-xl">
          <Link href={getLocalizedPath(locale)} className="-ml-4 inline-block md:-ml-5">
            <Image
              src="/media/asb-logo-primary.png"
              alt={siteConfig.name}
              width={1120}
              height={630}
              className="h-auto w-[317px] md:w-[422px]"
            />
          </Link>
          <p className="mt-5 text-body-secondary">{copy.description}</p>
        </div>
        <div>
          <p className="eyebrow">{copy.navigation}</p>
          <div className="mt-4 flex flex-col gap-3">
            {footerPrimaryNavigation.map((item) => (
              <Link key={item.href} href={getLocalizedPath(locale, item.href)} className="text-sm text-body-secondary transition-colors hover:text-brand-primary">
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Legal</p>
          <div className="mt-4 flex flex-col gap-3">
            {footerNavigation.map((item) => (
              <Link key={item.href} href={getLocalizedPath(locale, item.href)} className="text-sm text-body-secondary transition-colors hover:text-brand-primary">
                {item.label[locale]}
              </Link>
            ))}
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="text-sm text-body-secondary transition-colors hover:text-brand-primary">
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-body-secondary transition-colors hover:text-brand-primary">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

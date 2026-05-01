import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/locales";
import { footerNavigation, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getLocalizedPath } from "@/lib/routes";

type FooterProps = { locale: Locale };

export function Footer({ locale }: FooterProps) {
  const navLabel = locale === "es" ? "Navegacion" : locale === "pt" ? "Navegacao" : "Navigation";

  return (
    <footer className="border-t border-line bg-canvas">
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
          <p className="mt-5 text-body-secondary">{siteConfig.defaultDescription}</p>
        </div>
        <div>
          <p className="eyebrow">{navLabel}</p>
          <div className="mt-4 flex flex-col gap-3">
            {mainNavigation.map((item) => (
              <Link key={item.href} href={getLocalizedPath(locale, item.href)} className="text-sm text-body-secondary transition-colors hover:text-brand-primary">{item.label[locale]}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Legal</p>
          <div className="mt-4 flex flex-col gap-3">
            {footerNavigation.map((item) => (
              <Link key={item.href} href={getLocalizedPath(locale, item.href)} className="text-sm text-body-secondary transition-colors hover:text-brand-primary">{item.label[locale]}</Link>
            ))}
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="text-sm text-body-secondary transition-colors hover:text-brand-primary">LinkedIn</a>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-body-secondary transition-colors hover:text-brand-primary">{siteConfig.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}




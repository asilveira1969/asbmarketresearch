import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { locales } from "@/config/locales";
import { resolveLocale } from "@/lib/i18n";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!locales.includes(localeParam as (typeof locales)[number])) notFound();
  const locale = resolveLocale(localeParam);

  return (
    <>
      <JsonLd data={getOrganizationJsonLd(locale)} />
      <JsonLd data={getWebsiteJsonLd(locale)} />
      <div className="flex min-h-screen flex-col">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </div>
    </>
  );
}

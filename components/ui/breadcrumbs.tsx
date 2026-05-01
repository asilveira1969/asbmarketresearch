import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type BreadcrumbsProps = {
  locale: Locale;
  items: Array<{ label: string; href?: string }>;
};

export function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  const home = locale === "es" ? "Inicio" : locale === "pt" ? "Inicio" : "Home";

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href={getLocalizedPath(locale)} className="transition-colors hover:text-brand-primary">{home}</Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={getLocalizedPath(locale, item.href)} className="transition-colors hover:text-brand-primary">{item.label}</Link>
            ) : (
              <span className="text-brand-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}


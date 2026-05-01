import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type ServiceCardProps = { locale: Locale; title: string; summary: string; slug: string; icon: string };

export function ServiceCard({ locale, title, summary, slug, icon }: ServiceCardProps) {
  const label = locale === "es" ? "Ver detalle" : locale === "pt" ? "Ver detalhe" : "View details";

  return (
    <article className="surface-card flex h-full flex-col justify-between">
      <div>
        <p className="eyebrow">{icon}</p>
        <h3 className="mt-4 text-xl font-medium text-brand-primary">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-body-secondary md:text-base">{summary}</p>
      </div>
      <Link className="mt-8 inline-flex text-sm font-semibold text-accent transition-colors hover:text-brand-primary" href={getLocalizedPath(locale, `/services/${slug}`)}>{label}</Link>
    </article>
  );
}

import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type ArticleCardProps = { locale: Locale; title: string; excerpt: string; category: string; slug: string; publishedAt: string };

export function ArticleCard({ locale, title, excerpt, category, slug, publishedAt }: ArticleCardProps) {
  const label = locale === "es" ? "Leer" : locale === "pt" ? "Ler" : "Read";

  return (
    <article className="surface-card flex h-full flex-col">
      <p className="eyebrow">{category}</p>
      <h3 className="mt-4 text-xl font-medium text-brand-primary">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-body-secondary md:text-base">{excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-muted">
        <time dateTime={publishedAt}>{publishedAt}</time>
        <Link className="font-semibold text-accent transition-colors hover:text-brand-primary" href={getLocalizedPath(locale, `/insights/${slug}`)}>{label}</Link>
      </div>
    </article>
  );
}

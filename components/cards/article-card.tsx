import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type ArticleCardProps = {
  locale: Locale;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  publishedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
};

export function ArticleCard({
  locale,
  title,
  excerpt,
  category,
  slug,
  publishedAt,
  readingTimeMinutes,
  featured = false,
}: ArticleCardProps) {
  const label = locale === "es" ? "Leer" : locale === "pt" ? "Ler" : "Read";

  return (
    <Link
      className="group block h-full cursor-pointer"
      href={getLocalizedPath(locale, `/insights/${slug}`)}
      aria-label={`${title} - ${label}`}
    >
      <article className={`surface-card flex h-full flex-col transition-transform duration-200 group-hover:-translate-y-0.5 ${featured ? "border-brand-primary shadow-soft" : ""}`}>
        <p className="eyebrow">{category}</p>
        <h3 className={`mt-4 font-medium text-brand-primary transition-colors group-hover:text-brand-secondary ${featured ? "text-2xl" : "text-xl"}`}>{title}</h3>
        <p className={`mt-4 flex-1 text-sm leading-7 text-body-secondary md:text-base ${featured ? "max-w-3xl" : ""}`}>{excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
          <time dateTime={publishedAt}>{publishedAt}</time>
          <span aria-hidden="true">-</span>
          <span>{readingTimeMinutes} min read</span>
          <span className="ml-auto font-semibold text-accent transition-colors group-hover:text-brand-primary">
            {label}
          </span>
        </div>
      </article>
    </Link>
  );
}

"use client";

import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";
import { cn } from "@/lib/utils";

type QuoteCtaProps = {
  locale: Locale;
  className?: string;
};

const quoteLabels: Record<Locale, string> = {
  es: "Request a Quote",
  en: "Request a Quote",
  pt: "Request a Quote",
};

export function QuoteCta({ locale, className }: QuoteCtaProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-soft transition-colors hover:bg-brand-secondary whitespace-nowrap",
        className,
      )}
      href={getLocalizedPath(locale, "/contact")}
    >
      {quoteLabels[locale]}
    </Link>
  );
}

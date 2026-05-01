"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/locales";
import { localeLabels, locales } from "@/config/locales";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const segments = pathname.split("/").filter(Boolean);
  const pathWithoutLocale = segments.length > 1 ? `/${segments.slice(1).join("/")}` : "";

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-canvas p-0.5 shadow-none">
      {locales.map((item) => (
        <Link key={item} href={`/${item}${pathWithoutLocale}`} className={cn("rounded-full px-3 py-1 text-xs font-semibold tracking-[0.16em] transition-colors", item === locale ? "bg-brand-primary text-white" : "text-muted hover:text-brand-primary")}>{localeLabels[item]}</Link>
      ))}
    </div>
  );
}


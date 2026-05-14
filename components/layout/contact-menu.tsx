"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type ContactMenuProps = {
  label: string;
  locale: Locale;
  quoteLabel: string;
};

export function ContactMenu({ label, locale, quoteLabel }: ContactMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const contactLabel = locale === "es" ? "Contacto" : locale === "pt" ? "Contato" : "Contact";

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        className="text-sm font-medium text-body-secondary transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
        onClick={() => setIsOpen((current) => !current)}
      >
        {label}
      </button>
      {isOpen ? (
        <div className="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-2xl border border-line bg-surface p-2 shadow-soft">
          <div className="grid gap-2">
            <Link
              href={getLocalizedPath(locale, "/contact")}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-body-secondary transition-colors hover:bg-canvas hover:text-brand-primary"
              onClick={() => setIsOpen(false)}
            >
              {contactLabel}
            </Link>
            <Link
              href={getLocalizedPath(locale, "/quotation")}
              className="inline-flex min-h-[2.125rem] items-center justify-center rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-secondary"
              onClick={() => setIsOpen(false)}
            >
              {quoteLabel}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

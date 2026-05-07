"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/locales";
import type { ServiceDetail } from "@/content/services";
import { getLocalizedPath } from "@/lib/routes";

type ServicesMenuProps = {
  label: string;
  locale: Locale;
  services: ServiceDetail[];
};

export function ServicesMenu({ label, locale, services }: ServicesMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        <div className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-2xl border border-line bg-surface p-2 shadow-soft">
          <div className="grid gap-1">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={getLocalizedPath(locale, `/services/${service.slug}`)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-body-secondary transition-colors hover:bg-canvas hover:text-brand-primary"
                onClick={() => setIsOpen(false)}
              >
                {service.locales[locale].title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

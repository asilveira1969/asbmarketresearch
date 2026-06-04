import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";
import { Section } from "@/components/ui/section";

type CTABlockProps = { locale: Locale; title: string; body: string };

export function CTABlock({ locale, title, body }: CTABlockProps) {
  const eyebrow = locale === "es" ? "Siguiente paso" : locale === "pt" ? "Próximo passo" : "Next step";
  const contact = locale === "es" ? "Solicitar consultoría" : locale === "pt" ? "Solicitar consultoria" : "Request consultation";
  const services = locale === "es" ? "Ver servicios" : locale === "pt" ? "Ver serviços" : "Explore services";

  return (
    <Section className="bg-brand-primary text-white">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-white/75">{eyebrow}</p>
          <h2 className="mt-3 text-display-xs text-white">{title}</h2>
          <p className="mt-4 text-base leading-8 text-white/80">{body}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link className="button-primary bg-white text-brand-primary hover:bg-white/90" href={getLocalizedPath(locale, "/quotation")}>
            {contact}
          </Link>
          <Link className="button-secondary border-white/25 text-white hover:bg-white/8" href={getLocalizedPath(locale, "/services")}>
            {services}
          </Link>
        </div>
      </div>
    </Section>
  );
}

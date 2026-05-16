import Link from "next/link";
import type { Locale } from "@/config/locales";
import { serviceDetails } from "@/content/services";
import { workstationHomeContent } from "@/content/workstation-home";
import { getLocalizedPath } from "@/lib/routes";

type ServicesSectionProps = {
  locale: Locale;
};

export function ServicesSection({ locale }: ServicesSectionProps) {
  const content = workstationHomeContent[locale];
  const serviceDetailLabel = locale === "es" ? "Ver detalle" : locale === "pt" ? "Ver detalhe" : "View details";

  return (
    <section className="bg-surface">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-display-sm text-brand-primary">{content.serviceTitle}</h2>
        <p className="mt-4 text-body-secondary">{content.serviceBody}</p>
        <p className="mt-4 text-body-secondary">{content.serviceClosing}</p>
      </div>
      <div className="grid gap-5">
        {serviceDetails.map((service) => (
          <article key={service.slug} className="surface-card grid gap-5 md:grid-cols-[4rem_1fr_auto] md:items-center">
            <p className="eyebrow text-brand-primary">{service.icon}</p>
            <div>
              <h3 className="text-xl font-medium text-brand-primary">{service.locales[locale].title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-body-secondary md:text-base">{service.locales[locale].summary}</p>
            </div>
            <Link className="button-secondary w-fit md:justify-self-end" href={getLocalizedPath(locale, `/services/${service.slug}`)}>
              {serviceDetailLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

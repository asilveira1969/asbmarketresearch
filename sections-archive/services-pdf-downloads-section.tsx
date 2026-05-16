import type { Locale } from "@/config/locales";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { Section } from "@/components/ui/section";
import { serviceDetails } from "@/content/services";

type ServicesPdfDownloadsSectionProps = {
  locale: Locale;
};

const labels = {
  es: {
    eyebrow: "PDF DOWNLOADS",
    title: "Folletos y documentos",
    label: "Descargar folleto",
  },
  en: {
    eyebrow: "PDF DOWNLOADS",
    title: "Brochures and documents",
    label: "Download brochure",
  },
  pt: {
    eyebrow: "PDF DOWNLOADS",
    title: "Folhetos e documentos",
    label: "Baixar folheto",
  },
} as const;

export function ServicesPdfDownloadsSection({ locale }: ServicesPdfDownloadsSectionProps) {
  const copy = labels[locale];

  return (
    <Section className="bg-canvas">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="mt-3 text-display-sm text-brand-primary">{copy.title}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {serviceDetails.map((service) => (
          <PdfDownloadCard
            key={service.slug}
            title={service.locales[locale].title}
            description={service.locales[locale].summary}
            href={service.brochureHref}
            label={copy.label}
          />
        ))}
      </div>
    </Section>
  );
}

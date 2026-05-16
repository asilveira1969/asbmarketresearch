import Link from "next/link";
import type { Locale } from "@/config/locales";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { Section } from "@/components/ui/section";
import { sampleReports } from "@/content/reports";
import { getLocalizedPath } from "@/lib/routes";

type SampleReportsSectionProps = {
  locale: Locale;
};

const labels = {
  es: {
    eyebrow: "SAMPLE REPORTS",
    title: "Ejemplos de los entregables que esta capacidad puede soportar",
    intro:
      "Los reportes de muestra ayudan a los visitantes a entender cómo la investigación se convierte en documentos ejecutivos comparables, prácticos y útiles en discusiones comerciales o estratégicas.",
    closing:
      "La biblioteca puede crecer con reportes por industria, mercado, categoría, país, asociación o según la necesidad recurrente de inteligencia de cada cliente.",
    action: "Ver reportes de muestra",
    availableOnRequest: "Disponible a pedido",
    pdfLabel: "Descargar PDF",
  },
  en: {
    eyebrow: "SAMPLE REPORTS",
    title: "Examples of the outputs this capability can support",
    intro:
      "Sample reports help visitors understand how research becomes executive documents that are comparable, practical, and useful in commercial or strategic discussions.",
    closing:
      "The library can grow with reports by industry, market, category, country, association, or each client's recurring intelligence need.",
    action: "View Sample Reports",
    availableOnRequest: "Available on request",
    pdfLabel: "Download PDF",
  },
  pt: {
    eyebrow: "SAMPLE REPORTS",
    title: "Exemplos das entregas que esta capacidade pode suportar",
    intro:
      "Os relatórios de amostra ajudam os visitantes a entender como a pesquisa se transforma em documentos executivos comparáveis, práticos e úteis em discussões comerciais ou estratégicas.",
    closing:
      "A biblioteca pode crescer com relatórios por indústria, mercado, categoria, país, associação ou conforme a necessidade recorrente de inteligência de cada cliente.",
    action: "Ver relatórios de amostra",
    availableOnRequest: "Disponível sob consulta",
    pdfLabel: "Baixar PDF",
  },
} as const;

export function SampleReportsSection({ locale }: SampleReportsSectionProps) {
  const copy = labels[locale];

  return (
    <Section className="bg-surface">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="mt-3 text-display-sm text-brand-primary">{copy.title}</h2>
        <p className="mt-4 text-body-secondary">{copy.intro}</p>
        <p className="mt-4 text-body-secondary">{copy.closing}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sampleReports.map((report) => (
          <PdfDownloadCard
            key={report.slug}
            title={report.locales[locale].title}
            description={report.locales[locale].excerpt}
            href={report.pdfHref}
            label={report.pdfHref ? copy.pdfLabel : copy.availableOnRequest}
          />
        ))}
      </div>
      <div className="mt-8">
        <Link className="button-secondary" href={getLocalizedPath(locale, "/sample-reports")}>
          {copy.action}
        </Link>
      </div>
    </Section>
  );
}

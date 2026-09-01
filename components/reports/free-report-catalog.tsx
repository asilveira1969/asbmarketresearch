"use client";

import Link from "next/link";
import { useState } from "react";

import type { Locale } from "@/config/locales";
import { reportCatalog } from "@/content/report-catalog";
import type { SampleReport } from "@/content/reports";
import { getLocalizedPath } from "@/lib/routes";

const copy = {
  es: {
    title: "Reportes gratuitos de inteligencia de mercado",
    description: "Los reportes completos validados pueden leerse en línea. Los reportes PDF heredados verificados permanecen disponibles para su consulta y descarga gratuita.",
    search: "Buscar por país, industria o tema",
    allCountries: "Todos los países",
    allIndustries: "Todas las industrias",
    allYears: "Todos los años",
    allLanguages: "Todos los idiomas",
    english: "Inglés",
    spanish: "Español",
    portuguese: "Portugués",
    reportsFound: "reportes encontrados",
    legacyTitle: "Reportes PDF heredados",
    legacyDescription: "Documentos PDF verificados que todavía no cuentan con una versión HTML completa.",
    fullReport: "REPORTE COMPLETO",
    legacyPdf: "PDF HEREDADO",
    readFullReport: "Leer reporte completo",
    openPdf: "Abrir PDF",
    downloadPdf: "Descargar PDF",
    language: "Idioma",
    formats: "Formatos",
    noReports: "No hay reportes que coincidan con estos filtros.",
  },
  en: {
    title: "Free Market Intelligence Reports",
    description: "Validated full reports can be read online. Verified legacy PDF reports remain available for free reading and download.",
    search: "Search by country, industry or topic",
    allCountries: "All countries",
    allIndustries: "All industries",
    allYears: "All years",
    allLanguages: "All languages",
    english: "English",
    spanish: "Spanish",
    portuguese: "Portuguese",
    reportsFound: "reports found",
    legacyTitle: "Legacy PDF Reports",
    legacyDescription: "Verified PDF documents that do not yet have a complete HTML edition.",
    fullReport: "FULL REPORT",
    legacyPdf: "LEGACY PDF",
    readFullReport: "Read Full Report",
    openPdf: "Open PDF",
    downloadPdf: "Download PDF",
    language: "Language",
    formats: "Formats",
    noReports: "No reports match these filters.",
  },
  pt: {
    title: "Relatórios gratuitos de inteligência de mercado",
    description: "Os relatórios completos validados podem ser lidos online. Os relatórios PDF legados verificados permanecem disponíveis para leitura e download gratuitos.",
    search: "Buscar por país, indústria ou tema",
    allCountries: "Todos os países",
    allIndustries: "Todas as indústrias",
    allYears: "Todos os anos",
    allLanguages: "Todos os idiomas",
    english: "Inglês",
    spanish: "Espanhol",
    portuguese: "Português",
    reportsFound: "relatórios encontrados",
    legacyTitle: "Relatórios PDF legados",
    legacyDescription: "Documentos PDF verificados que ainda não têm uma edição HTML completa.",
    fullReport: "RELATÓRIO COMPLETO",
    legacyPdf: "PDF LEGADO",
    readFullReport: "Ler relatório completo",
    openPdf: "Abrir PDF",
    downloadPdf: "Baixar PDF",
    language: "Idioma",
    formats: "Formatos",
    noReports: "Nenhum relatório corresponde a estes filtros.",
  },
} as const;

type CatalogCard = {
  report: SampleReport;
  details: (typeof reportCatalog)[string][Locale];
};

type CatalogCopy = (typeof copy)[Locale];

export function FreeReportCatalog({ locale, reports }: { locale: Locale; reports: SampleReport[] }) {
  const t = copy[locale];
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");

  const cards: CatalogCard[] = reports.flatMap((report) => {
    if (report.catalogVisibility === "hidden") return [];

    const contentLocale = report.primaryLanguage === "en" ? "en" : locale;
    const details = reportCatalog[report.slug]?.[contentLocale];
    return details ? [{ report, details }] : [];
  });
  const countries = [...new Set(cards.map(({ details }) => details.country))];
  const industries = [...new Set(cards.map(({ details }) => details.industry))];
  const years = [...new Set(cards.map(({ details }) => details.year))];
  const languageOptions = (["en", "es", "pt"] as const)
    .filter((candidate) =>
      cards.some(({ report }) => report.primaryLanguage === "multilingual" || report.primaryLanguage === candidate),
    )
    .map((value) => ({
      value,
      label: value === "en" ? t.english : value === "es" ? t.spanish : t.portuguese,
    }));
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = cards.filter(({ report, details }) => {
    const contentLocale = report.primaryLanguage === "en" ? "en" : locale;
    const searchable = [
      report.locales[contentLocale].title,
      report.locales[contentLocale].excerpt,
      details.country,
      details.industry,
      ...details.topics,
    ]
      .join(" ")
      .toLowerCase();

    return (
      searchable.includes(normalizedQuery) &&
      (!country || country === details.country) &&
      (!industry || industry === details.industry) &&
      (!year || Number(year) === details.year) &&
      (!language || report.primaryLanguage === "multilingual" || report.primaryLanguage === language)
    );
  });
  const primaryCards = filtered.filter(({ report }) => report.catalogVisibility === "primary");
  const legacyCards = filtered.filter(({ report }) => report.catalogVisibility === "legacy");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h1 className="text-display-lg">{t.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-body-secondary">{t.description}</p>

        <div className="mt-12 border-y border-line py-6">
          <input
            aria-label={t.search}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.search}
            className="h-14 w-full rounded-xl border border-brand-primary px-5 hover:ring-1 hover:ring-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          />
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Select value={country} setValue={setCountry} name={t.allCountries} options={countries.map((value) => ({ value, label: value }))} />
            <Select value={industry} setValue={setIndustry} name={t.allIndustries} options={industries.map((value) => ({ value, label: value }))} />
            <Select value={year} setValue={setYear} name={t.allYears} options={years.map((value) => ({ value: String(value), label: String(value) }))} />
            <Select value={language} setValue={setLanguage} name={t.allLanguages} options={languageOptions} />
          </div>
        </div>

        <p className="mt-6 border-b border-line pb-5 text-sm">
          <b>{filtered.length}</b> {t.reportsFound}
        </p>

        {primaryCards.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {primaryCards.map((card) => (
              <ReportCard key={card.report.slug} card={card} locale={locale} t={t} />
            ))}
          </div>
        ) : null}

        {legacyCards.length > 0 ? (
          <section className="mt-16 border-t border-line pt-10" aria-labelledby="legacy-pdf-reports">
            <h2 id="legacy-pdf-reports" className="text-3xl font-semibold tracking-tight text-ink">
              {t.legacyTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-body-secondary">{t.legacyDescription}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {legacyCards.map((card) => (
                <ReportCard key={card.report.slug} card={card} locale={locale} t={t} />
              ))}
            </div>
          </section>
        ) : null}

        {filtered.length === 0 ? <p className="mt-8 text-body-secondary">{t.noReports}</p> : null}
      </div>
    </section>
  );
}

function ReportCard({ card, locale, t }: { card: CatalogCard; locale: Locale; t: CatalogCopy }) {
  const { report, details } = card;
  const contentLocale = report.primaryLanguage === "en" ? "en" : locale;
  const content = report.locales[contentLocale];
  const isFullReport = report.publicationTier === "full_report";
  const language = report.primaryLanguage === "multilingual" ? "ES · EN · PT" : "ENGLISH";
  const badge = isFullReport ? `FREE · ${language}` : `LEGACY PDF · ${language}`;
  const readHref =
    report.slug === "smartphone-sales-in-spain"
      ? "/en/sample-reports/smartphone-sales-in-spain"
      : getLocalizedPath(locale, `/sample-reports/${report.slug}`);

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white">
      <div className="relative aspect-video overflow-hidden bg-[#f7f5f2]">
        {report.pdfHref ? (
          <iframe
            title={`${content.title} cover`}
            src={`${report.pdfHref}#page=1&toolbar=0&navpanes=0`}
            className="pointer-events-none h-[180%] w-full -translate-y-[10%] border-0"
          />
        ) : null}
        <span className="absolute left-4 top-4 bg-brand-primary px-2 py-1 text-xs font-bold text-white">{badge}</span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase text-muted">
          {details.country} / {details.industry} / {details.year}
        </p>
        <h2 className="mt-4 text-2xl font-semibold">{content.title}</h2>
        <p className="mt-3 text-sm text-body-secondary">{content.excerpt}</p>
        <dl className="mt-5 space-y-1 text-xs font-semibold uppercase tracking-wide text-muted">
          <div>
            <dt className="inline">{t.language}: </dt>
            <dd className="inline">{language}</dd>
          </div>
          <div>
            <dt className="inline">{t.formats}: </dt>
            <dd className="inline">{report.availableFormats.map((format) => format.toUpperCase()).join(" · ")}</dd>
          </div>
        </dl>
        <div className="mt-7 flex flex-wrap gap-4">
          {isFullReport ? (
            <Link className="font-semibold text-brand-primary" href={readHref}>
              {t.readFullReport} →
            </Link>
          ) : report.pdfHref ? (
            <a className="font-semibold text-brand-primary" href={report.pdfHref} target="_blank" rel="noreferrer">
              {t.openPdf} →
            </a>
          ) : null}
          {report.pdfHref ? (
            <a className="button-secondary min-h-10 px-4 text-xs" href={report.pdfHref} download>
              {t.downloadPdf}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Select({
  value,
  setValue,
  name,
  options,
}: {
  value: string;
  setValue: (value: string) => void;
  name: string;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <select
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className="h-12 rounded-xl border border-brand-primary bg-white px-4 text-sm hover:ring-1 hover:ring-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
    >
      <option value="">{name}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
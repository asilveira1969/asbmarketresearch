import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";
import { germanySmartphoneReport, germanySmartphoneSources } from "@/content/germany-smartphone-report";

const relatedReports = [
  { slug: "smartphone-sales-in-spain", title: { es: "Ventas de smartphones en España", en: "Smartphone Sales in Spain", pt: "Vendas de smartphones na Espanha" } },
  { slug: "italy-refurbished-smartphone-market", title: { es: "Mercado italiano de smartphones reacondicionados", en: "Italy Refurbished Smartphone Market", pt: "Mercado italiano de smartphones recondicionados" } },
] as const;

export function GermanySmartphoneReport({ locale }: { locale: Locale }) {
  const report = germanySmartphoneReport[locale];
  const contents = [
    { id: "hallazgos", title: report.labels.keyFindings },
    ...report.sections.map(({ id, title }) => ({ id, title })),
    { id: "metodologia", title: report.labels.methodology },
    { id: "fuentes", title: `${report.labels.sources} (133)` },
    { id: "relacionados", title: report.labels.related },
  ];

  const meta = [
    [report.labels.geography, report.meta.geography],
    [report.labels.industry, report.meta.industry],
    [report.labels.sources, report.meta.sources],
    [report.labels.date, report.meta.date],
    [report.labels.discoverySource, report.meta.discoverySource],
  ];

  return (
    <section aria-labelledby="full-report-title" className="border-t border-line bg-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <article className="mx-auto max-w-4xl">
          <header className="border-b border-line pb-10">
            <p className="eyebrow">{report.labels.report}</p>
            <h2 id="full-report-title" className="mt-4 scroll-mt-40 text-display-sm text-brand-primary">{report.fullTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-body-secondary">{report.subtitle}</p>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
              {meta.map(([label, value]) => (
                <div key={label} className="bg-canvas p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <nav aria-labelledby="report-contents-title" className="my-10 rounded-2xl border border-line bg-canvas p-6 md:p-8">
            <h3 id="report-contents-title" className="text-xl font-semibold text-brand-primary">{report.labels.contents}</h3>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {contents.map((item, index) => (
                <li key={item.id}>
                  <a className="group flex items-baseline gap-3 text-sm leading-6 text-body-secondary hover:text-brand-primary" href={`#${item.id}`}>
                    <span className="font-semibold tabular-nums text-brand-primary">{String(index + 1).padStart(2, "0")}</span>
                    <span className="underline decoration-line underline-offset-4 group-hover:decoration-brand-primary">{item.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="hallazgos" aria-labelledby="hallazgos-title" className="scroll-mt-40 rounded-2xl border-l-4 border-brand-primary bg-canvas p-6 md:p-8">
            <h2 id="hallazgos-title" className="text-display-xs text-brand-primary">{report.labels.keyFindings}</h2>
            <ul className="mt-6 grid gap-4 text-base leading-7 text-body-secondary">
              {report.findings.map((finding) => <li key={finding} className="pl-1">• {finding}</li>)}
            </ul>
          </section>

          <div className="mt-12">
            {report.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-40 border-b border-line py-10 first:pt-0">
                <h2 id={`${section.id}-title`} className="text-display-xs text-brand-primary">{section.title}</h2>
                <div className="mt-6 space-y-5 text-[1.03rem] leading-8 text-body-secondary">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <section id="metodologia" aria-labelledby="metodologia-title" className="scroll-mt-40 py-10">
            <h2 id="metodologia-title" className="text-display-xs text-brand-primary">{report.labels.methodology}</h2>
            <p className="mt-6 text-[1.03rem] leading-8 text-body-secondary">{report.methodologyIntro}</p>
            <ul className="mt-6 grid gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950 md:p-8">
              {report.limitations.map((limitation) => <li key={limitation} className="list-disc ml-5 pl-1">{limitation}</li>)}
            </ul>
          </section>

          <section id="fuentes" aria-labelledby="fuentes-title" className="scroll-mt-40 border-t border-line py-10">
            <h2 id="fuentes-title" className="text-display-xs text-brand-primary">{report.labels.sources} (133)</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-ink text-white">
                  <tr>
                    {[report.labels.sourceTitle, report.labels.domain, report.labels.type, report.labels.credibility, report.labels.score].map((heading) => <th key={heading} scope="col" className="px-4 py-3 font-semibold">{heading}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {germanySmartphoneSources.map(([title, href, domain, type, credibility, score]) => (
                    <tr key={href} className="border-t border-line even:bg-canvas">
                      <td className="px-4 py-3 align-top font-medium text-brand-primary"><a href={href} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-brand-primary">{title}</a></td>
                      <td className="px-4 py-3 align-top text-body-secondary">{domain}</td>
                      <td className="px-4 py-3 align-top text-body-secondary">{type}</td>
                      <td className="px-4 py-3 align-top font-semibold text-body-secondary">{credibility === "high" ? report.labels.high : report.labels.medium}</td>
                      <td className="px-4 py-3 align-top tabular-nums text-body-secondary">{score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="relacionados" aria-labelledby="relacionados-title" className="scroll-mt-40 border-t border-line py-10">
            <h2 id="relacionados-title" className="text-display-xs text-brand-primary">{report.labels.related}</h2>
            <p className="mt-4 text-body-secondary">{report.labels.relatedDescription}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedReports.map((related) => (
                <div key={related.slug} className="rounded-2xl border border-line bg-canvas p-6">
                  <h3 className="text-lg font-semibold text-ink">{related.title[locale]}</h3>
                  <Link className="mt-5 inline-flex text-sm font-semibold text-brand-primary underline decoration-line underline-offset-4 hover:decoration-brand-primary" href={getLocalizedPath(locale, `/sample-reports/${related.slug}`)}>{report.labels.readReport}</Link>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}

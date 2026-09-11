import Link from "next/link";

import report from "@/content/reports/smartphone-sales-in-england/en/tavily-research-result.json";
import { ReportCta, ReportFindings, ReportMetadata, ReportNote, ReportSources, ReportTableOfContents, ReportTextSection } from "@/components/reports/full-report-primitives";

const reportPath = "/en/sample-reports/smartphone-sales-in-england";
const downloadPath = "/en/downloads/reports/smartphone-sales-in-england";
const sectionLabels: Record<keyof typeof report.presentation.sections, string> = {
  market_overview: "Market Overview",
  market_size_demand_supply: "Market Size, Demand & Supply",
  competitive_landscape: "Competitive Landscape",
  pricing_distribution: "Pricing & Distribution",
  regulatory_environment: "Regulatory Environment",
  buyer_trends: "Buyer Trends",
  key_opportunities: "Key Opportunities",
  market_constraints: "Market Constraints",
};

const sections = Object.entries(report.presentation.sections).map(([key, paragraphs]) => ({
  id: key.replaceAll("_", "-"),
  title: sectionLabels[key as keyof typeof report.presentation.sections],
  paragraphs,
}));
const contents = [
  { id: "key-findings", title: "Key Findings" },
  ...sections.map(({ id, title }) => ({ id, title })),
  { id: "methodology", title: "Methodology & limitations" },
  { id: "sources", title: `Sources (${report.sources.length})` },
];

export function EnglandSmartphoneReport() {
  return <section aria-labelledby="full-report-title" className="bg-surface py-12 md:py-20">
    <div className="mx-auto w-full max-w-6xl px-6 md:px-8"><article className="mx-auto max-w-4xl">
      <header className="border-b border-line pb-8 md:pb-10">
        <p className="eyebrow">FREE · ENGLISH</p>
        <h1 id="full-report-title" className="mt-4 max-w-3xl text-display-lg text-brand-primary">{report.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-body-secondary">{report.presentation.executive_summary}</p>
        <nav aria-label="Report formats" className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          <Link href={reportPath} className="button-primary w-full sm:w-auto">Read HTML</Link>
          <a href="/pdfs/reports/smartphone-sales-in-england.pdf" download className="button-secondary w-full sm:w-auto">Download PDF</a>
          <Link href={`${downloadPath}/markdown`} download className="button-secondary w-full sm:w-auto">Download Markdown</Link>
          <Link href={`${downloadPath}/json`} download className="button-secondary w-full sm:w-auto">Download JSON</Link>
        </nav>
      </header>
      <ReportMetadata items={[
        { label: "Geography", value: report.presentation.geography },
        { label: "Industry", value: report.presentation.market },
        { label: "Sources", value: `${report.sources.length} (${report.presentation.source_assessments.filter((source) => source.credibility === "high").length} high credibility)` },
        { label: "Date", value: report.access_date },
      ]} />
      <ReportTableOfContents items={contents} />
      <ReportFindings findings={report.key_findings} />
      <div className="mt-12">{sections.map((section) => <ReportTextSection key={section.id} {...section} />)}</div>
      <div className="grid gap-6 py-10 lg:grid-cols-2">
        <ReportNote id="methodology" title="Methodology"><ul className="grid gap-4 text-sm leading-7">{report.presentation.methodology_performed.map((item) => <li key={item} className="ml-5 list-disc pl-1">{item}</li>)}</ul></ReportNote>
        <ReportNote id="limitations" title="Research limitations"><ul className="grid gap-4 text-sm leading-7">{report.limitations.map((item) => <li key={item} className="ml-5 list-disc pl-1">{item}</li>)}</ul></ReportNote>
      </div>
      <ReportSources sourceText={report.sources.map((source) => `${source.source_id}. ${source.title} — ${source.publisher} (${source.publication_date})`).join("\n")} />
      <ReportCta><div><h2 className="text-display-xs text-brand-primary">Need a tailored answer?</h2><p className="mt-3 max-w-2xl text-body-secondary">Discuss a custom market research report or ongoing intelligence support with ASB Market Research.</p></div><Link href="/en/quotation" className="button-primary mt-6 md:mt-0">Request custom research</Link></ReportCta>
    </article></div>
  </section>;
}
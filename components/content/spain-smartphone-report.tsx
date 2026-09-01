import Link from "next/link";
import report from "@/content/reports/smartphone-sales-in-spain/en/report.json";

const reportPath = "/en/sample-reports/smartphone-sales-in-spain";
const downloadPath = "/en/downloads/reports/smartphone-sales-in-spain";

export function SpainSmartphoneReport() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <article className="mx-auto max-w-4xl px-6 md:px-8">
        <header className="border-b border-line pb-10">
          <p className="eyebrow">FREE · ENGLISH</p>
          <h1 className="mt-4 text-display-sm text-brand-primary">{report.title}</h1>
          <nav aria-label="Report formats" className="mt-8 flex flex-wrap gap-3">
            <Link href={reportPath} className="button-primary">Read HTML</Link>
            <a href={report.pdf_path} download className="button-secondary">Download PDF</a>
            <Link href={`${downloadPath}/markdown`} download className="button-secondary">Download Markdown</Link>
            <Link href={`${downloadPath}/json`} download className="button-secondary">Download JSON</Link>
          </nav>
        </header>
        <div className="whitespace-pre-wrap py-10 text-[1.03rem] leading-8 text-body-secondary">{report.content}</div>
        <aside className="border-t border-line pt-8">
          <h2 className="text-display-xs text-brand-primary">Need a tailored answer?</h2>
          <p className="mt-4 text-body-secondary">Discuss a custom market research report or ongoing intelligence support with ASB Market Research.</p>
          <Link href="/en/quotation" className="button-primary mt-6">Request custom research</Link>
        </aside>
      </article>
    </section>
  );
}
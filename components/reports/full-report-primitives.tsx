import type { ReactNode } from "react";

export type ReportMetaItem = { label: string; value: string };
export type ReportContentsItem = { id: string; title: string };

export function ReportMetadata({ items }: { items: ReportMetaItem[] }) {
  return <dl className="grid border-y border-line py-5 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item) => <div key={item.label} className="border-line px-0 py-3 sm:px-5 sm:py-1 lg:border-l first:lg:border-l-0">
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">{item.label}</dt>
      <dd className="mt-2 text-sm leading-6 text-body-secondary">{item.value}</dd>
    </div>)}
  </dl>;
}

export function ReportTableOfContents({ items }: { items: ReportContentsItem[] }) {
  return <nav aria-labelledby="report-contents-title" className="my-10 rounded-2xl border border-line bg-canvas p-6 md:p-8">
    <h2 id="report-contents-title" className="text-xl font-semibold text-brand-primary">Table of Contents</h2>
    <ol className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => <li key={item.id}><a className="group flex items-baseline gap-3 text-sm leading-6 text-body-secondary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary" href={`#${item.id}`}><span className="font-semibold tabular-nums text-brand-primary">{String(index + 1).padStart(2, "0")}</span><span className="underline decoration-line underline-offset-4 group-hover:decoration-brand-primary">{item.title}</span></a></li>)}
    </ol>
  </nav>;
}

export function ReportFindings({ id = "key-findings", findings }: { id?: string; findings: string[] }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-40 rounded-2xl border-l-4 border-brand-primary bg-canvas p-6 md:p-8">
    <h2 id={`${id}-title`} className="text-display-xs text-brand-primary">Key Findings</h2>
    <ul className="mt-6 grid gap-4 text-base leading-7 text-body-secondary">{findings.map((finding) => <li key={finding} className="pl-1">• {finding}</li>)}</ul>
  </section>;
}

export function ReportTextSection({ id, title, paragraphs }: { id: string; title: string; paragraphs: string[] }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-40 border-b border-line py-10 first:pt-0">
    <h2 id={`${id}-title`} className="text-display-xs text-brand-primary">{title}</h2>
    <div className="mt-6 space-y-5 text-[1.03rem] leading-8 text-body-secondary">{paragraphs.map((paragraph, index) => <p key={`${id}-${index}`}>{paragraph}</p>)}</div>
  </section>;
}

export function ReportNote({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-40 rounded-2xl border border-line bg-canvas p-6 md:p-8">
    <h2 id={`${id}-title`} className="text-display-xs text-brand-primary">{title}</h2>
    <div className="mt-6 text-[1.03rem] leading-8 text-body-secondary">{children}</div>
  </section>;
}

export function ReportSources({ sourceText }: { sourceText: string }) {
  return <section id="sources" aria-labelledby="sources-title" className="scroll-mt-40 border-t border-line py-10">
    <h2 id="sources-title" className="text-display-xs text-brand-primary">Sources (156 total)</h2>
    <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white"><pre className="min-w-[760px] whitespace-pre-wrap p-5 font-mono text-xs leading-6 text-body-secondary md:p-6">{sourceText}</pre></div>
  </section>;
}

export function ReportCta({ children }: { children: ReactNode }) {
  return <aside className="mt-10 border border-brand-primary bg-canvas p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">{children}</aside>;
}
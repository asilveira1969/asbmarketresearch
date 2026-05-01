type PdfDownloadCardProps = {
  title: string;
  description: string;
  href?: string;
  label: string;
  previewHref?: string;
};

export function PdfDownloadCard({ title, description, href, label, previewHref }: PdfDownloadCardProps) {
  return (
    <article className="surface-card flex h-full flex-col justify-between">
      <div>
        <p className="eyebrow">PDF</p>
        <h3 className="mt-4 text-xl font-medium text-brand-primary">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-body-secondary md:text-base">{description}</p>
        {previewHref ? (
          <div className="mt-5 h-56 overflow-hidden rounded-xl border border-line bg-canvas md:h-64">
            <iframe
              title={`${title} preview`}
              src={`${previewHref}#toolbar=0&navpanes=0&scrollbar=0`}
              className="h-full w-full"
            />
          </div>
        ) : null}
      </div>
      {href ? (
        <a className="button-secondary mt-8 w-fit" href={href} download target="_blank" rel="noreferrer">{label}</a>
      ) : (
        <span className="mt-8 inline-flex text-sm font-semibold text-muted">{label}</span>
      )}
    </article>
  );
}

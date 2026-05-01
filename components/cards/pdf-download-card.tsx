type PdfDownloadCardProps = { title: string; description: string; href?: string; label: string };

export function PdfDownloadCard({ title, description, href, label }: PdfDownloadCardProps) {
  return (
    <article className="surface-card flex h-full flex-col justify-between">
      <div>
        <p className="eyebrow">PDF</p>
        <h3 className="mt-4 text-xl font-medium text-brand-primary">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-body-secondary md:text-base">{description}</p>
      </div>
      {href ? (
        <a className="button-secondary mt-8 w-fit" href={href} download target="_blank" rel="noreferrer">{label}</a>
      ) : (
        <span className="mt-8 inline-flex text-sm font-semibold text-muted">{label}</span>
      )}
    </article>
  );
}

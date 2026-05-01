type EmbedContentBlockProps =
  | { type: "video"; title: string; src: string }
  | { type: "pdf"; title: string; src: string }
  | { type: "reference"; title: string; href: string; description: string };

export function EmbedContentBlock(props: EmbedContentBlockProps) {
  if (props.type === "reference") {
    return (
      <div className="surface-card">
        <p className="eyebrow">Reference</p>
        <h3 className="mt-4 text-xl font-medium text-brand-primary">{props.title}</h3>
        <p className="mt-4 text-body-secondary">{props.description}</p>
        <a className="mt-6 inline-flex text-sm font-semibold text-accent transition-colors hover:text-brand-primary" href={props.href} target="_blank" rel="noreferrer">Open reference</a>
      </div>
    );
  }

  return (
    <div className="surface-card">
      <p className="eyebrow">{props.type === "video" ? "Video" : "PDF Preview"}</p>
      <h3 className="mt-4 text-xl font-medium text-brand-primary">{props.title}</h3>
      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-brand-secondary/5">
        <iframe title={props.title} src={props.src} className="h-[360px] w-full md:h-[460px]" />
      </div>
    </div>
  );
}

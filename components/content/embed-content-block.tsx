import type { Locale } from "@/config/locales";

type EmbedContentBlockProps =
  | { type: "video"; title: string; src: string; locale?: Locale }
  | { type: "pdf"; title: string; src: string; locale?: Locale }
  | { type: "reference"; title: string; href: string; description: string; locale?: Locale };

export function EmbedContentBlock(props: EmbedContentBlockProps) {
  const locale = props.locale ?? "en";
  const labels = {
    es: { reference: "Referencia", openReference: "Abrir referencia", video: "Video", pdf: "Vista previa PDF" },
    en: { reference: "Reference", openReference: "Open reference", video: "Video", pdf: "PDF Preview" },
    pt: { reference: "Referência", openReference: "Abrir referência", video: "Vídeo", pdf: "Prévia PDF" },
  }[locale];

  if (props.type === "reference") {
    return (
      <div className="surface-card">
        <p className="eyebrow">{labels.reference}</p>
        <h3 className="mt-4 text-xl font-medium text-brand-primary">{props.title}</h3>
        <p className="mt-4 text-body-secondary">{props.description}</p>
        <a className="mt-6 inline-flex text-sm font-semibold text-accent transition-colors hover:text-brand-primary" href={props.href} target="_blank" rel="noreferrer">{labels.openReference}</a>
      </div>
    );
  }

  return (
    <div className="surface-card">
      <p className="eyebrow">{props.type === "video" ? labels.video : labels.pdf}</p>
      <h3 className="mt-4 text-xl font-medium text-brand-primary">{props.title}</h3>
      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-brand-secondary/5">
        <iframe title={props.title} src={props.src} className="h-[360px] w-full md:h-[460px]" />
      </div>
    </div>
  );
}

import type { Locale } from "@/config/locales";
import { workstationHomeContent } from "@/content/workstation-home";

type PositioningSectionProps = {
  locale: Locale;
};

export function PositioningSection({ locale }: PositioningSectionProps) {
  const content = workstationHomeContent[locale];
  const labels =
    locale === "es"
      ? { positioning: "Posicionamiento", audience: "A quién sirve", value: "Valor" }
      : locale === "pt"
        ? { positioning: "Posicionamento", audience: "Para quem serve", value: "Valor" }
        : { positioning: "Positioning", audience: "Who it serves", value: "Value" };

  return (
    <section className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="eyebrow">{labels.positioning}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.valueTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{content.valueBody}</p>
        </div>
        <div className="surface-panel">
          <p className="eyebrow">{labels.audience}</p>
          <h3 className="mt-3 text-xl font-medium text-brand-primary">{content.audienceTitle}</h3>
          <p className="mt-4 text-body-secondary">{content.audienceBody}</p>
          <ul className="mt-5 grid gap-3 text-body-secondary">
            {content.audienceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {content.valuePoints.map((item) => (
          <article key={item.title} className="surface-card h-full">
            <p className="eyebrow">{labels.value}</p>
            <h3 className="mt-4 text-xl font-medium text-brand-primary">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-body-secondary md:text-base">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

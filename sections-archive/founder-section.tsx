import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/locales";
import { founderProfile } from "@/data/company";
import { getLocalizedPath } from "@/lib/routes";

type FounderSectionProps = {
  locale: Locale;
  title: string;
  bodyTitle: string;
  body: string;
  points: string[];
  profileLabel: string;
  ctaLabel: string;
};

export function FounderSection({
  locale,
  title,
  bodyTitle,
  body,
  points,
  profileLabel,
  ctaLabel,
}: FounderSectionProps) {
  return (
    <section className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="surface-card">
          <Image
            src={founderProfile.image}
            alt={founderProfile.name}
            width={560}
            height={680}
            className="w-full rounded-2xl border border-line object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">{profileLabel}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{founderProfile.name}</h2>
          <p className="mt-4 text-body-secondary">{bodyTitle}</p>
          <p className="mt-4 text-body-secondary">{body}</p>
          <ul className="mt-6 grid gap-3 text-body-secondary">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="mt-8 surface-panel">
            <p className="eyebrow">{founderProfile.credentialsHeading[locale]}</p>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-brand-primary">{founderProfile.educationLabel[locale]}</h3>
                <div className="mt-4 grid gap-4">
                  {founderProfile.education.map((item) => (
                    <div key={`${item.degree}-${item.institution}`}>
                      <p className="font-medium text-brand-primary">{item.degree}</p>
                      <p className="text-body-secondary">{item.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-brand-primary">{founderProfile.experienceLabel[locale]}</h3>
                <div className="mt-4 grid gap-4">
                  {founderProfile.experience.map((item) => (
                    <div key={`${item.company}-${item.location}`}>
                      <p className="font-medium text-brand-primary">{item.company}</p>
                      <p className="text-body-secondary">{item.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="button-primary" href={getLocalizedPath(locale, "/about")}>
              {ctaLabel}
            </Link>
            <a className="button-secondary" href={founderProfile.resumeUrl} download>
              {locale === "es" ? "Descargar CV" : locale === "pt" ? "Baixar CV" : "Download resume"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

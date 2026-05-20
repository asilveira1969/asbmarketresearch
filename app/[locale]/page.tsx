import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { CTABlock } from "@/components/ui/cta-block";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { workstationHomeContent } from "@/content/workstation-home";
import { getLocalizedPath } from "@/lib/routes";
import { AgenticWorkflowSection } from "@/sections-archive/agentic-workflow-section";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  return buildPageMetadata({
    locale,
    pathname: "",
    title: "Agentic Market Intelligence System | ASB Market Research",
    description: workstationHomeContent[locale].description,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = workstationHomeContent[locale];
  const newsletterLink = getLocalizedPath(locale, "/newsletter");
  const labels = {
    es: {
      methodology: "Metodología",
      newsletter: "Newsletter",
      viewMethodology: "Ver sistema",
    },
    en: {
      methodology: "Methodology",
      newsletter: "Newsletter",
      viewMethodology: "View system",
    },
    pt: {
      methodology: "Metodologia",
      newsletter: "Newsletter",
      viewMethodology: "Ver sistema",
    },
  }[locale];

  return (
    <>
      <Section className="border-b border-line bg-canvas py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="mt-1 text-display-sm text-brand-primary">{content.title}</h1>
          <p className="mt-2 text-base leading-7 text-body-secondary md:text-lg md:leading-8">{content.description}</p>
        </div>
      </Section>
      <Section className="border-b border-line bg-surface py-16 md:py-24">
        <div className="mb-10 max-w-4xl">
          <p className="eyebrow">{locale === "es" ? "Nuevo servicio" : locale === "pt" ? "Novo serviço" : "New service"}</p>
          <h1 className="mt-3 text-display-xs text-brand-primary">
            {locale === "es" ? "Workstation para el Sistema Agéntico de Inteligencia de Mercado" : locale === "pt" ? "Workstation para o Sistema Agêntico de Inteligência de Mercado" : "Workstation for the Agentic Market Intelligence System"}
          </h1>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-canvas shadow-soft">
          <Image
            src="/media/market-research-workstation-v2.jpg"
            alt="ASB Market Research Market Research Workstation"
            width={1366}
            height={900}
            priority
            className="aspect-[16/9] w-full object-contain"
          />
        </div>
      </Section>
      <Section className="border-b border-line bg-canvas">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{labels.methodology}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.methodologyTitle}</h2>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft">
          <Image
            src="/media/market-research-workstation-workflow.png"
            alt="Market Research Workstation workflow diagram"
            width={1600}
            height={900}
            className="w-full object-contain"
          />
        </div>
        <div className="mt-8">
          <Link className="button-secondary" href={getLocalizedPath(locale, "/services/agentic-market-intelligence-system")}>
            {labels.viewMethodology}
          </Link>
        </div>
      </Section>
      <AgenticWorkflowSection locale={locale} />
      <Section className="border-b border-line bg-canvas">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow">{labels.newsletter}</p>
            <h2 className="mt-3 text-display-sm text-brand-primary">{content.newsletterTitle}</h2>
            <p className="mt-4 text-body-secondary">{content.newsletterBody}</p>
            <ul className="mt-6 grid gap-3 text-body-secondary">
              {content.newsletterPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Link className="button-secondary" href={newsletterLink}>{content.newsletterCta}</Link>
            </div>
          </div>
          <NewsletterForm locale={locale} />
        </div>
      </Section>

      <CTABlock locale={locale} title={content.finalCtaTitle} body={content.finalCtaBody} />
    </>
  );
}


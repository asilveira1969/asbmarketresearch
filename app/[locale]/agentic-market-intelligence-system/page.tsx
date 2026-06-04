import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { CTABlock } from "@/components/ui/cta-block";
import { PageHeader } from "@/components/ui/page-header";
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
    pathname: "/agentic-market-intelligence-system",
    title: "Agentic Market Intelligence System | ASB Market Research",
    description: workstationHomeContent[locale].description,
  });
}

export default async function AgenticMarketIntelligenceSystemPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = workstationHomeContent[locale];
  const introDescription =
    locale === "en" ? "Building market research capabilities through AI-powered research workflows" : content.description;
  const newServiceHero =
    locale === "es"
      ? {
          eyebrow: "Nuevo servicio",
          title: "Workstation para el Sistema Agéntico de Inteligencia de Mercado",
        }
      : locale === "pt"
        ? {
            eyebrow: "Novo serviço",
            title: "Workstation para o Sistema Agêntico de Inteligência de Mercado",
          }
        : {
            eyebrow: "New Service",
            title: "Workstation for the Agentic Market Intelligence System",
          };
  const newsletterLink = getLocalizedPath(locale, "/newsletter");
  const labels = {
    es: {
      methodology: "MetodologÃ­a",
      newsletter: "Newsletter",
      viewServices: "Ver servicios",
    },
    en: {
      methodology: "Methodology",
      newsletter: "Newsletter",
      viewServices: "View services",
    },
    pt: {
      methodology: "Metodologia",
      newsletter: "Newsletter",
      viewServices: "Ver serviÃ§os",
    },
  }[locale];

  return (
    <>
      <PageHeader eyebrow={content.eyebrow} title={content.title} description={introDescription} />
      <Section className="border-b border-line bg-surface pt-12 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">
              ASB Market Research supports organizations in building structured market intelligence capabilities through AI-powered research workflows, specialized agents, connected data sources, and business-oriented reporting systems.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{content.heroDetail}</p>
            {content.heroParagraphs.slice(0, 2).map((paragraph, index) =>
              index === 0 ? (
                <div key={paragraph} className="mt-5 max-w-3xl">
                  <p className="text-base leading-8 text-body-secondary md:text-lg">Instead of isolated prompts and generic outputs, the platform combines:</p>
                  <ul className="mt-4 grid gap-2 text-base leading-7 text-body-secondary md:text-lg">
                    {[
                      "Specialized research agents",
                      "Separated research methodologies",
                      "Structured workflows",
                      "Connected internal and external data sources",
                      "Recurring intelligence processes",
                      "Decision-ready business deliverables",
                    ].map((item) => (
                      <li key={item} className="border-l-2 border-brand-primary pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p key={paragraph} className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">
                  {paragraph}
                </p>
              ),
            )}
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-canvas shadow-soft">
            <Image
              src="/media/hero-boardroom-asb.png"
              alt="ASB Market Research executive boardroom discussion"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </Section>
      <Section className="border-b border-line bg-canvas pb-12 pt-18 md:pb-14 md:pt-24">
        <div className="mb-10 max-w-4xl">
          <p className="eyebrow">{newServiceHero.eyebrow}</p>
          <h1 className="mt-3 text-display-xs text-brand-primary">{newServiceHero.title}</h1>
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
          <Link className="button-secondary" href={getLocalizedPath(locale, "/services")}>
            {labels.viewServices}
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
              <Link className="button-secondary" href={newsletterLink}>
                {content.newsletterCta}
              </Link>
            </div>
          </div>
          <NewsletterForm locale={locale} />
        </div>
      </Section>
      <CTABlock locale={locale} title={content.finalCtaTitle} body={content.finalCtaBody} />
    </>
  );
}

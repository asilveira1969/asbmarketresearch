import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/cards/article-card";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { CTABlock } from "@/components/ui/cta-block";
import { Section } from "@/components/ui/section";
import { founderProfile } from "@/data/company";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { workstationHomeContent } from "@/content/workstation-home";
import { insightArticles } from "@/content/insights";
import { sampleReports } from "@/content/reports";
import { serviceDetails } from "@/content/services";
import { getLocalizedPath } from "@/lib/routes";

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
  const reportButton = locale === "es" ? "Descargar PDF" : locale === "pt" ? "Baixar PDF" : "Download PDF";
  const founderLink = getLocalizedPath(locale, "/about");
  const newsletterLink = getLocalizedPath(locale, "/newsletter");
  const labels = {
    es: {
      positioning: "Posicionamiento",
      audience: "A quién sirve",
      value: "Valor",
      services: "Servicios",
      methodology: "Metodología",
      sampleReports: "Reportes de muestra",
      insights: "Insights",
      founder: "Fundador",
      newsletter: "Newsletter",
      viewMethodology: "Ver sistema",
      viewInsights: "Ver insights",
    },
    en: {
      positioning: "Positioning",
      audience: "Who it serves",
      value: "Value",
      services: "Services",
      methodology: "Methodology",
      sampleReports: "Sample reports",
      insights: "Insights",
      founder: "Founder",
      newsletter: "Newsletter",
      viewMethodology: "View system",
      viewInsights: "View insights",
    },
    pt: {
      positioning: "Posicionamento",
      audience: "Para quem serve",
      value: "Valor",
      services: "Serviços",
      methodology: "Metodologia",
      sampleReports: "Relatórios de amostra",
      insights: "Insights",
      founder: "Fundador",
      newsletter: "Newsletter",
      viewMethodology: "Ver sistema",
      viewInsights: "Ver insights",
    },
  }[locale];
  const serviceDetailLabel = locale === "es" ? "Ver detalle" : locale === "pt" ? "Ver detalhe" : "View details";
  const agenticWorkflowIntro =
    locale === "es"
      ? {
          eyebrow: "Workflow agentic",
          title: "Market Research Workstation personalizable",
          body: [
            "El Market Research Workstation esta disenado para reflejar como operan los departamentos de research en organizaciones reales. Reune multiples capacidades de investigacion, fuentes de datos y metodologias, incluyendo investigacion primaria, investigacion secundaria, investigacion cuantitativa e investigacion cualitativa, dentro de un sistema integrado de inteligencia agentic.",
            "Segun las necesidades de cada organizacion, ASB Market Research disena workflows de research personalizados y alineados con los objetivos de la empresa, sus capacidades internas, fuentes de datos disponibles, desafios de mercado y estrategia de crecimiento.",
            "Las organizaciones pueden solicitar una implementacion personalizada del Market Research Workstation para apoyar necesidades recurrentes de research, automatizar workflows de inteligencia y generar reportes listos para equipos de direccion.",
            "Contacta a ASB Market Research para solicitar una cotizacion y explorar como este sistema puede instalarse y personalizarse para tu organizacion.",
          ],
        }
      : locale === "pt"
        ? {
            eyebrow: "Workflow agentic",
            title: "Market Research Workstation personalizavel",
            body: [
              "O Market Research Workstation foi desenhado para refletir como departamentos de pesquisa de mercado operam em organizacoes reais. Ele reune multiplas capacidades de pesquisa, fontes de dados e metodologias, incluindo pesquisa primaria, pesquisa secundaria, pesquisa quantitativa e pesquisa qualitativa, dentro de um sistema integrado de inteligencia agentic.",
              "De acordo com as necessidades de cada organizacao, a ASB Market Research desenha workflows de pesquisa personalizados e alinhados aos objetivos da empresa, capacidades internas, fontes de dados disponiveis, desafios de mercado e estrategia de crescimento.",
              "As organizacoes podem solicitar uma implementacao personalizada do Market Research Workstation para apoiar necessidades recorrentes de pesquisa, automatizar workflows de inteligencia e gerar relatorios prontos para equipes de gestao.",
              "Entre em contato com a ASB Market Research para solicitar uma cotizacao e explorar como este sistema pode ser instalado e personalizado para sua organizacao.",
            ],
          }
        : {
            eyebrow: "Agentic workflow",
            title: "Customizable Workstation",
            body: [
              "The Market Research Workstation is designed to reflect how market research departments operate in real-world organizations. It brings together multiple research skills, data sources, and methodologies, including primary research, secondary research, quantitative research, and qualitative research, within one integrated agentic intelligence system.",
              "Depending on the needs of each organization, ASB Market Research designs customized research workflows aligned with the company's objectives, internal capabilities, available data sources, market challenges, and growth strategy.",
              "Organizations can request a customized implementation of the Market Research Workstation to support recurring research needs, automate intelligence workflows, and generate decision-ready reports for management teams.",
              "Contact ASB Market Research to request a quote and explore how this system can be installed and customized for your organization.",
            ],
          };

  return (
    <>
      <Section className="border-b border-line bg-canvas !py-3 md:!py-4">
        <div className="max-w-3xl">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="mt-1 text-display-sm text-brand-primary">{content.title}</h1>
          <p className="mt-2 text-base leading-7 text-body-secondary md:text-lg md:leading-8">{content.description}</p>
        </div>
      </Section>
      <Section className="border-b border-line bg-surface pb-12 pt-18 md:pb-14 md:pt-24">
        <div className="mb-10 max-w-4xl">
          <p className="eyebrow">New Service</p>
          <h1 className="mt-3 text-display-xs text-brand-primary">
            Workstation for the Agentic Market Intelligence System
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
      <Section className="bg-canvas">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="eyebrow">{agenticWorkflowIntro.eyebrow}</p>
            <h2 className="mt-3 text-display-sm text-brand-primary md:text-display-xs">{agenticWorkflowIntro.title}</h2>
            {agenticWorkflowIntro.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-[1.05rem] leading-[1.65] text-body-secondary">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-canvas shadow-soft">
            <Image
              src="/media/agentic-workflow-programmer.png"
              alt="Technical consultant configuring a customizable market research workstation"
              width={1200}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-8 max-w-4xl">
          <div className="flex flex-wrap gap-4">
            <Link className="button-primary" href={getLocalizedPath(locale, "/quotation")}>{content.primaryCta}</Link>
            <Link className="button-secondary" href={getLocalizedPath(locale, "/sample-reports")}>{content.secondaryCta}</Link>
            <Link className="button-secondary" href={getLocalizedPath(locale, "/services")}>{content.tertiaryCta}</Link>
          </div>
        </div>
      </Section>
      <Section className="bg-canvas">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{labels.methodology}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.methodologyTitle}</h2>
          <p className="mt-4 text-body-secondary">{content.methodologyBody}</p>
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
      <Section className="bg-surface">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{labels.sampleReports}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.reportsTitle}</h2>
          <p className="mt-4 text-body-secondary">{content.reportsBody}</p>
          <p className="mt-4 text-body-secondary">{content.reportsClosing}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sampleReports.map((report) => (
            <PdfDownloadCard
              key={report.slug}
              title={report.locales[locale].title}
              description={report.locales[locale].excerpt}
              href={report.pdfHref}
              label={report.pdfHref ? reportButton : locale === "es" ? "Disponible a pedido" : locale === "pt" ? "Disponivel sob consulta" : "Available on request"}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link className="button-secondary" href={getLocalizedPath(locale, "/sample-reports")}>
            {content.secondaryCta}
          </Link>
        </div>
      </Section>
      <Section className="border-b border-line bg-canvas pt-12 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            {locale === "en" ? (
              <>
                <h1 className="mt-6 max-w-3xl text-display-xs text-brand-primary">{content.title}</h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{content.description}</p>
              </>
            ) : (
              <>
                <h1 className="mt-4 max-w-3xl text-display-xs text-brand-primary">{content.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-body-secondary">{content.description}</p>
              </>
          )}
          <p className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{content.heroDetail}</p>
          {content.heroParagraphs.map((paragraph) => (
            paragraph.includes(";") ? (
              <div key={paragraph} className="mt-5 max-w-3xl">
                <p className="text-base leading-8 text-body-secondary md:text-lg">
                  Instead of isolated prompts and generic outputs, the platform combines:
                </p>
                <ul className="mt-4 grid gap-2 text-base leading-7 text-body-secondary md:text-lg">
                  {[
                    "Specialized research agents",
                    "Separated research methodologies",
                    "Structured workflows",
                    "Connected internal and external data sources",
                    "Recurring intelligence processes",
                    "Decision-ready business deliverables",
                  ].map((item) => (
                    <li key={item} className="border-l-2 border-brand-primary pl-4">{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p
                key={paragraph}
                className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg"
              >
                {locale === "en" && paragraph.includes("Agentic Market Intelligence System") ? (
                  <>
                    We also offer our new{" "}
                    <Link
                      className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary"
                      href={getLocalizedPath(locale, "/services/agentic-market-intelligence-system")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Agentic Market Intelligence System
                    </Link>
                    : an AI-powered research environment designed to help organizations transform recurring market questions into structured workflows, continuous analysis, and decision-ready intelligence.
                  </>
                ) : (
                  paragraph
                )}
              </p>
            )
          ))}
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

      <Section className="bg-surface">
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
      </Section>

      <Section className="bg-surface">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{labels.services}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.serviceTitle}</h2>
          <p className="mt-4 text-body-secondary">{content.serviceBody}</p>
          <p className="mt-4 text-body-secondary">{content.serviceClosing}</p>
        </div>
        <div className="grid gap-5">
          {serviceDetails.map((service) => (
            <article
              key={service.slug}
              className="surface-card grid gap-5 md:grid-cols-[4rem_1fr_auto] md:items-center"
            >
              <p className="eyebrow text-brand-primary">{service.icon}</p>
              <div>
                <h3 className="text-xl font-medium text-brand-primary">{service.locales[locale].title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-body-secondary md:text-base">
                  {service.locales[locale].summary}
                </p>
              </div>
              <Link
                className="button-secondary w-fit md:justify-self-end"
                href={getLocalizedPath(locale, `/services/${service.slug}`)}
              >
                {serviceDetailLabel}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
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
            <p className="eyebrow">{labels.founder}</p>
            <h2 className="mt-3 text-display-sm text-brand-primary">{founderProfile.name}</h2>
            <p className="mt-4 text-body-secondary">{content.founderTitle}</p>
            <p className="mt-4 text-body-secondary">{content.founderBody}</p>
            <ul className="mt-6 grid gap-3 text-body-secondary">
              {content.founderPoints.map((point) => (
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
              <Link className="button-primary" href={founderLink}>{content.founderCta}</Link>
              <a className="button-secondary" href={founderProfile.resumeUrl} download>
                {locale === "es" ? "Descargar CV" : locale === "pt" ? "Baixar CV" : "Download resume"}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-canvas">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{labels.insights}</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.insightsTitle}</h2>
          <p className="mt-4 text-body-secondary">{content.insightsBody}</p>
          <p className="mt-4 text-body-secondary">{content.insightsClosing}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {insightArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              locale={locale}
              slug={article.slug}
              title={article.locales[locale].title}
              excerpt={article.locales[locale].excerpt}
              category={article.locales[locale].category}
              publishedAt={article.publishedAt}
              readingTimeMinutes={article.readingTimeMinutes}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link className="button-secondary" href={getLocalizedPath(locale, "/insights")}>
            {labels.viewInsights}
          </Link>
        </div>
      </Section>

      <Section className="bg-canvas">
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

import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/cards/article-card";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { ServiceCard } from "@/components/cards/service-card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { CTABlock } from "@/components/ui/cta-block";
import { Section } from "@/components/ui/section";
import { founderProfile } from "@/data/company";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { homeContent } from "@/content/site";
import { insightArticles } from "@/content/insights";
import { sampleReports } from "@/content/reports";
import { serviceDetails } from "@/content/services";
import { getLocalizedPath } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  return buildPageMetadata({
    locale,
    pathname: "",
    title: "ASB Market Research",
    description: homeContent[locale].description,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = homeContent[locale];
  const reportButton = locale === "es" ? "Descargar PDF" : locale === "pt" ? "Baixar PDF" : "Download PDF";
  const founderLink = getLocalizedPath(locale, "/about");
  const newsletterLink = getLocalizedPath(locale, "/newsletter");

  return (
    <>
      <Section className="border-b border-line bg-surface pb-18 pt-18 md:pb-24 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="max-w-4xl">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="mt-4 text-display-sm font-bold text-brand-primary md:text-[2.6rem] md:leading-[1.08]">{content.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-body-secondary">{content.description}</p>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{content.heroDetail}</p>
            {content.heroParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="button-primary" href={getLocalizedPath(locale, "/contact")}>{content.primaryCta}</Link>
              <Link className="button-secondary" href={getLocalizedPath(locale, "/sample-reports")}>{content.secondaryCta}</Link>
              <Link className="button-secondary" href={getLocalizedPath(locale, "/contact")}>{content.tertiaryCta}</Link>
            </div>
          </div>
          <div className="mt-24 overflow-hidden rounded-[2rem] border border-line bg-surface shadow-soft lg:mt-0">
            <Image
              src="/media/hero-boardroom-asb.png"
              alt="ASB Market Research executive meeting"
              width={1200}
              height={1500}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-canvas">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">Positioning</p>
            <h2 className="mt-3 text-display-sm text-brand-primary">{content.valueTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{content.valueBody}</p>
          </div>
          <div className="surface-panel">
            <p className="eyebrow">Who it serves</p>
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
              <p className="eyebrow">Value</p>
              <h3 className="mt-4 text-xl font-medium text-brand-primary">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-body-secondary md:text-base">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.serviceTitle}</h2>
          <p className="mt-4 text-body-secondary">{content.serviceBody}</p>
          <p className="mt-4 text-body-secondary">{content.serviceClosing}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceDetails.map((service) => (
            <ServiceCard
              key={service.slug}
              locale={locale}
              icon={service.icon}
              slug={service.slug}
              title={service.locales[locale].title}
              summary={service.locales[locale].summary}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-canvas">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Methodology</p>
          <h2 className="mt-3 text-display-sm text-brand-primary">{content.methodologyTitle}</h2>
          <p className="mt-4 text-body-secondary">{content.methodologyBody}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {content.methodologySteps.map((step, index) => (
            <article key={step.title} className="surface-card h-full">
              <span className="text-sm font-semibold text-accent">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-medium text-brand-primary">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-body-secondary md:text-base">{step.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link className="button-secondary" href={getLocalizedPath(locale, "/methodology")}>
            {locale === "es" ? "Ver metodologia" : locale === "pt" ? "Ver metodologia" : "View methodology"}
          </Link>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Sample reports</p>
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

      <Section className="bg-canvas">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Insights</p>
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
            />
          ))}
        </div>
        <div className="mt-8">
          <Link className="button-secondary" href={getLocalizedPath(locale, "/insights")}>
            {locale === "es" ? "Ver insights" : locale === "pt" ? "Ver insights" : "View insights"}
          </Link>
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
            <p className="eyebrow">Founder</p>
            <h2 className="mt-3 text-display-sm text-brand-primary">{content.founderTitle}</h2>
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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow">Newsletter</p>
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




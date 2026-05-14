import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/routes";

const pricingContent = {
  es: {
    eyebrow: "Pricing & Services",
    title: "Pricing and Services",
    description:
      "ASB Market Research offers flexible pricing depending on the scope, depth, frequency, and level of customization required by each client.",
    intro: [
      "Organizations can start with a single market research report, move into recurring intelligence briefings, or request a customized Agentic Market Intelligence System designed around their internal research needs.",
      "For custom research workflows, data integrations, and workstation installations, pricing is provided by quotation after an initial consultation.",
    ],
    progression: "Reports -> Recurring Intelligence -> Agentic Market Intelligence System",
    bestFor: "Best for",
    note:
      "Prices are indicative starting ranges. Final pricing depends on research scope, industry complexity, geographic coverage, data availability, urgency, deliverable format, and level of customization required.",
    cards: [
      {
        title: "Market Research Industry Briefings",
        price: "FREE",
        description:
          "Subscribe to our newsletter and we will send you bi-weekly industry new development reports specifically from your industry.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Market Research Reports",
        price: "USD 250-500 / per report",
        description:
          "For companies that need a specific market research report, competitor review, industry brief, market entry assessment, or executive summary.",
        bestFor:
          "One-off market questions, business opportunities, competitor analysis, industry overview, and investment or expansion evaluation.",
        cta: "Request a Report Quote",
      },
      {
        title: "Recurring Intelligence Briefings",
        price: "USD 500-1,500/month",
        description:
          "For companies that need regular market updates, competitor monitoring, market trend analysis, and executive summaries prepared for management or commercial teams.",
        bestFor:
          "Monthly or weekly market intelligence, industry monitoring, competitor tracking, strategic updates, and recurring decision support.",
        cta: "Request Monthly Briefing Quote",
      },
      {
        title: "Workstation FREE Trial use",
        price: "15 day FREE TRIAL",
        description:
          "Experience the basics of what the Agentic Market Intelligence System can do for your company. Request a password for a 15-day free trial basic use with no commitments.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Agentic Market Intelligence System",
        price: "Custom quotation",
        description:
          "For organizations that want an AI-powered market research workstation with customized agents, research workflows, data sources, and structured reporting outputs.",
        bestFor:
          "Companies that want to build internal market intelligence capability, automate recurring research workflows, connect internal and external data sources, and generate continuous decision-ready intelligence.",
        cta: "Request System Quotation",
      },
    ],
    closing: "Request a quotation to evaluate the right configuration for your organization.",
    customQuote: "Request a Custom Quote",
  },
  en: {
    eyebrow: "Pricing & Services",
    title: "Pricing and Services",
    description:
      "ASB Market Research offers flexible pricing depending on the scope, depth, frequency, and level of customization required by each client.",
    intro: [
      "Organizations can start with a single market research report, move into recurring intelligence briefings, or request a customized Agentic Market Intelligence System designed around their internal research needs.",
      "For custom research workflows, data integrations, and workstation installations, pricing is provided by quotation after an initial consultation.",
    ],
    progression: "Reports -> Recurring Intelligence -> Agentic Market Intelligence System",
    bestFor: "Best for",
    note:
      "Prices are indicative starting ranges. Final pricing depends on research scope, industry complexity, geographic coverage, data availability, urgency, deliverable format, and level of customization required.",
    cards: [
      {
        title: "Market Research Industry Briefings",
        price: "FREE",
        description:
          "Subscribe to our newsletter and we will send you bi-weekly industry new development reports specifically from your industry.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Market Research Reports",
        price: "USD 250-500 / per report",
        description:
          "For companies that need a specific market research report, competitor review, industry brief, market entry assessment, or executive summary.",
        bestFor:
          "One-off market questions, business opportunities, competitor analysis, industry overview, and investment or expansion evaluation.",
        cta: "Request a Report Quote",
      },
      {
        title: "Recurring Intelligence Briefings",
        price: "USD 500-1,500/month",
        description:
          "For companies that need regular market updates, competitor monitoring, market trend analysis, and executive summaries prepared for management or commercial teams.",
        bestFor:
          "Monthly or weekly market intelligence, industry monitoring, competitor tracking, strategic updates, and recurring decision support.",
        cta: "Request Monthly Briefing Quote",
      },
      {
        title: "Workstation FREE Trial use",
        price: "15 day FREE TRIAL",
        description:
          "Experience the basics of what the Agentic Market Intelligence System can do for your company. Request a password for a 15-day free trial basic use with no commitments.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Agentic Market Intelligence System",
        price: "Custom quotation",
        description:
          "For organizations that want an AI-powered market research workstation with customized agents, research workflows, data sources, and structured reporting outputs.",
        bestFor:
          "Companies that want to build internal market intelligence capability, automate recurring research workflows, connect internal and external data sources, and generate continuous decision-ready intelligence.",
        cta: "Request System Quotation",
      },
    ],
    closing: "Request a quotation to evaluate the right configuration for your organization.",
    customQuote: "Request a Custom Quote",
  },
  pt: {
    eyebrow: "Pricing & Services",
    title: "Pricing and Services",
    description:
      "ASB Market Research offers flexible pricing depending on the scope, depth, frequency, and level of customization required by each client.",
    intro: [
      "Organizations can start with a single market research report, move into recurring intelligence briefings, or request a customized Agentic Market Intelligence System designed around their internal research needs.",
      "For custom research workflows, data integrations, and workstation installations, pricing is provided by quotation after an initial consultation.",
    ],
    progression: "Reports -> Recurring Intelligence -> Agentic Market Intelligence System",
    bestFor: "Best for",
    note:
      "Prices are indicative starting ranges. Final pricing depends on research scope, industry complexity, geographic coverage, data availability, urgency, deliverable format, and level of customization required.",
    cards: [
      {
        title: "Market Research Industry Briefings",
        price: "FREE",
        description:
          "Subscribe to our newsletter and we will send you bi-weekly industry new development reports specifically from your industry.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Market Research Reports",
        price: "USD 250-500 / per report",
        description:
          "For companies that need a specific market research report, competitor review, industry brief, market entry assessment, or executive summary.",
        bestFor:
          "One-off market questions, business opportunities, competitor analysis, industry overview, and investment or expansion evaluation.",
        cta: "Request a Report Quote",
      },
      {
        title: "Recurring Intelligence Briefings",
        price: "USD 500-1,500/month",
        description:
          "For companies that need regular market updates, competitor monitoring, market trend analysis, and executive summaries prepared for management or commercial teams.",
        bestFor:
          "Monthly or weekly market intelligence, industry monitoring, competitor tracking, strategic updates, and recurring decision support.",
        cta: "Request Monthly Briefing Quote",
      },
      {
        title: "Workstation FREE Trial use",
        price: "15 day FREE TRIAL",
        description:
          "Experience the basics of what the Agentic Market Intelligence System can do for your company. Request a password for a 15-day free trial basic use with no commitments.",
        bestFor: "",
        cta: "",
      },
      {
        title: "Agentic Market Intelligence System",
        price: "Custom quotation",
        description:
          "For organizations that want an AI-powered market research workstation with customized agents, research workflows, data sources, and structured reporting outputs.",
        bestFor:
          "Companies that want to build internal market intelligence capability, automate recurring research workflows, connect internal and external data sources, and generate continuous decision-ready intelligence.",
        cta: "Request System Quotation",
      },
    ],
    closing: "Request a quotation to evaluate the right configuration for your organization.",
    customQuote: "Request a Custom Quote",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pricingContent[locale];
  return buildPageMetadata({
    locale,
    pathname: "/pricing",
    title: `${content.title} | ASB Market Research`,
    description: content.description,
  });
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pricingContent[locale];

  return (
    <>
      <PageHeader eyebrow={content.eyebrow} title={content.title} description={content.description} />
      <Section className="bg-surface">
        <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-brand-primary bg-surface p-6 shadow-soft md:p-8">
          <div className="divide-y divide-brand-primary/15">
            {content.cards.map((card) => (
              <article key={card.title} className="grid gap-5 py-6 lg:grid-cols-[1fr_0.45fr] lg:items-start">
                <div>
                  <h2 className="text-lg font-semibold text-brand-primary">{card.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-body-secondary">
                    {card.title === "Market Research Industry Briefings" ? (
                      <>
                        <Link className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary" href={getLocalizedPath(locale, "/newsletter")}>
                          Subscribe to our newsletter
                        </Link>{" "}
                        and we will send you bi-weekly industry new development reports specifically from your industry.
                      </>
                    ) : (
                      card.description
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-6 text-ink">{card.price}</p>
                  {card.title === "Workstation FREE Trial use" ? (
                    <div className="mt-3 grid gap-2 text-sm leading-6">
                      <a className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary" href="https://maria.agentesdeprocesos.com/" target="_blank" rel="noreferrer">
                        Visit trial website
                      </a>
                      <Link className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary" href={getLocalizedPath(locale, "/contact")}>
                        Request password here
                      </Link>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-brand-primary/20 pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm leading-7 text-body-secondary">{content.closing}</p>
              <p className="mt-2 text-xs leading-6 text-body-secondary">{content.note}</p>
            </div>
            <Link className="button-primary shrink-0" href={getLocalizedPath(locale, "/quotation")}>
              {content.customQuote}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

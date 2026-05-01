import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { serviceDetails } from "@/content/services";

export function generateStaticParams() { return serviceDetails.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) return {};
  return buildPageMetadata({ locale, pathname: `/services/${service.slug}`, title: service.locales[locale].title, description: service.locales[locale].summary });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) notFound();
  const content = service.locales[locale];

  return (
    <>
      <Section className="bg-canvas py-4"><Breadcrumbs locale={locale} items={[{ label: locale === "es" ? "Servicios" : locale === "pt" ? "Servicos" : "Services", href: "/services" }, { label: content.title }]} /></Section>
      <PageHeader title={content.title} description={content.summary} eyebrow={service.icon} />
      <Section className="bg-surface"><div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div className="grid gap-6">{content.body.map((paragraph) => <p key={paragraph} className="text-lg leading-8 text-body-secondary">{paragraph}</p>)}</div><div className="surface-panel"><p className="eyebrow">{locale === "es" ? "Entregables" : locale === "pt" ? "Entregaveis" : "Deliverables"}</p><ul className="mt-5 grid gap-4 text-body-secondary">{content.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div></Section>
      <Section className="bg-canvas"><PdfDownloadCard title={content.title} description={content.summary} href={service.brochureHref} label={locale === "es" ? "Descargar PDF" : locale === "pt" ? "Baixar PDF" : "Download PDF"} /></Section>
    </>
  );
}


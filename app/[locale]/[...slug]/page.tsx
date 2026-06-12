import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/cards/article-card";
import { PdfDownloadCard } from "@/components/cards/pdf-download-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ReportRequestForm } from "@/components/forms/report-request-form";
import { ContactCalloutCard } from "@/components/content/contact-callout-card";
import { EmbedContentBlock } from "@/components/content/embed-content-block";
import { FAQBlock } from "@/components/content/faq-block";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { faqContent, staticPages } from "@/content/site";
import { insightArticles, insightCategoryLabels, type InsightCategoryKey } from "@/content/insights";
import { sampleReports } from "@/content/reports";
import { founderProfile } from "@/data/company";
import { siteConfig } from "@/config/site";
import { serviceDetails } from "@/content/services";
import { getLocalizedPath } from "@/lib/routes";

const thankYouContent = {
  contact: {
    es: { title: "Gracias por contactarnos", description: "Su mensaje fue recibido. Este espacio queda listo para conectar con email o CRM." },
    en: { title: "Thank you for getting in touch", description: "Your message was received. This flow is ready to connect with email or a CRM later." },
    pt: { title: "Obrigado pelo contato", description: "Sua mensagem foi recebida. Este fluxo já está pronto para conectar com email ou CRM depois." },
  },
  newsletter: {
    es: { title: "Suscripción confirmada", description: "La arquitectura está lista para integrar su proveedor de email marketing." },
    en: { title: "Subscription confirmed", description: "The architecture is ready to connect your email marketing provider." },
    pt: { title: "Inscrição confirmada", description: "A arquitetura está pronta para integrar seu provedor de email marketing." },
  },
  "report-request": {
    es: { title: "Detailed Project Brief received", description: "El detailed project brief fue enviado y esta estructura ya soporta respuestas futuras por email o automatización." },
    en: { title: "Detailed Project Brief received", description: "The Detailed Project Brief was submitted and this structure can later connect to email or automation workflows." },
    pt: { title: "Detailed Project Brief received", description: "O Detailed Project Brief foi enviado e esta estrutura pode depois se conectar a email ou automações." },
  },
} as const;

const requestReceivedContent = {
  es: {
    body: [
      "Hemos recibido su solicitud.",
      "Agradecemos su interés en ASB Market Research.",
      "Nuestro equipo revisará su consulta y responderá dentro de las próximas 24 horas respecto a sus necesidades de información e investigación.",
      "Gracias por brindarnos la oportunidad de asistirle.",
      "Equipo de ASB Market Research",
      "Research. Intelligence. Decisions.",
    ],
  },
  en: {
    body: [
      "Your request has been received.",
      "We appreciate your interest in ASB Market Research.",
      "Our team will review your inquiry and respond within the next 24 hours regarding your information and research needs.",
      "Thank you for the opportunity to assist you.",
      "ASB Market Research Team",
      "Research. Intelligence. Decisions.",
    ],
  },
  pt: {
    body: [
      "Recebemos sua solicitação.",
      "Agradecemos seu interesse na ASB Market Research.",
      "Nossa equipe analisará sua consulta e responderá dentro das próximas 24 horas sobre suas necessidades de informação e pesquisa.",
      "Obrigado pela oportunidade de ajudá-lo.",
      "Equipe ASB Market Research",
      "Research. Intelligence. Decisions.",
    ],
  },
} as const;

const pageLabels = {
  es: {
    confirmation: "Confirmación",
    returnHome: "Volver al inicio",
    capabilities: "Capacidades",
    pdfDownloads: "Descargas PDF",
    process: "Proceso",
    leadGeneration: "Generación de leads",
    briefing: "Detailed Project Brief",
    legal: "Legal",
  },
  en: {
    confirmation: "Confirmation",
    returnHome: "Return home",
    capabilities: "Capabilities",
    pdfDownloads: "PDF Downloads",
    process: "Process",
    leadGeneration: "Contact form",
    briefing: "Detailed Project Brief",
    legal: "Legal",
  },
  pt: {
    confirmation: "Confirmação",
    returnHome: "Voltar ao início",
    capabilities: "Capacidades",
    pdfDownloads: "Downloads PDF",
    process: "Processo",
    leadGeneration: "Geração de leads",
    briefing: "Detailed Project Brief",
    legal: "Legal",
  },
} as const;

const insightCategoryOrder: InsightCategoryKey[] = ["strategy", "competition", "briefing"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  if (slug[0] === "thank-you" && slug[1] && slug[1] in thankYouContent) {
    const entry = thankYouContent[slug[1] as keyof typeof thankYouContent][locale];
    return buildPageMetadata({ locale, pathname: `/thank-you/${slug[1]}`, title: entry.title, description: entry.description });
  }
  if (slug.length !== 1 || !(slug[0] in staticPages[locale])) return {};
  const page = staticPages[locale][slug[0] as keyof typeof staticPages[typeof locale]];
  const metadataTitle =
    slug[0] === "newsletter"
      ? locale === "es"
        ? "Boletín"
        : locale === "pt"
          ? "Boletim"
          : page.title
      : page.title;
  return buildPageMetadata({
    locale,
    pathname: `/${slug[0]}`,
    title: metadataTitle,
    absoluteTitle: `${metadataTitle} | ASB Market Research`,
    description: page.description,
  });
}

export default async function StaticPageRouter({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const labels = pageLabels[locale];
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  if (slug[0] === "thank-you" && slug[1] && slug[1] in thankYouContent) {
    const entry = thankYouContent[slug[1] as keyof typeof thankYouContent][locale];
    return <><PageHeader title={entry.title} description={entry.description} eyebrow={labels.confirmation} /><Section className="bg-surface"><Link className="button-primary" href={getLocalizedPath(locale)}>{labels.returnHome}</Link></Section></>;
  }

  if (slug.length !== 1 || !(slug[0] in staticPages[locale])) notFound();
  const key = slug[0] as keyof typeof staticPages[typeof locale];
  const page = staticPages[locale][key];

  if (key === "about") {
    const biographyParagraphs = founderProfile.biography[locale].split("\n\n");
    const aboutCopy = {
      es: {
        eyebrow: "SOBRE NOSOTROS",
        title: "De reportes de mercado a sistemas de inteligencia",
        intro:
          "ASB Market Research es una iniciativa independiente de inteligencia de mercado fundada por Anastacio Silveira, que combina la metodología tradicional de investigación de mercado con flujos de trabajo de investigación emergentes asistidos por IA y por agentes.",
        body:
          "A partir de la experiencia previa en investigación de mercado, estrategia de negocios, emprendimiento y entornos corporativos multinacionales, la iniciativa explora cómo las tecnologías modernas pueden hacer que las capacidades estructuradas de inteligencia de mercado sean más accesibles y escalables para organizaciones de distintos tamaños.",
        listIntro: "ASB Market Research se enfoca principalmente en:",
        bullets: [
          "investigación secundaria;",
          "análisis cualitativo de mercado;",
          "interpretación estratégica;",
          "reportes de inteligencia de mercado;",
          "y flujos de trabajo de investigación asistidos por IA.",
        ],
        closing:
          "La visión más amplia detrás del proyecto es explorar cómo las metodologías estructuradas, el contexto organizacional y los sistemas modernos asistidos por IA pueden trabajar juntos para crear un enfoque más continuo, escalable y orientado a la decisión para la inteligencia de mercado.",
      },
      pt: {
        eyebrow: "SOBRE NÓS",
        title: "De relatórios de mercado a sistemas de inteligência",
        intro:
          "A ASB Market Research é uma iniciativa independente de inteligência de mercado fundada por Anastacio Silveira, que combina a metodologia tradicional de pesquisa de mercado com fluxos de trabalho de pesquisa emergentes assistidos por IA e por agentes.",
        body:
          "A partir da experiência prévia em pesquisa de mercado, estratégia de negócios, empreendedorismo e ambientes corporativos multinacionais, a iniciativa explora como as tecnologias modernas podem tornar as capacidades estruturadas de inteligência de mercado mais acessíveis e escaláveis para organizações de diferentes portes.",
        listIntro: "A ASB Market Research se concentra principalmente em:",
        bullets: [
          "pesquisa secundária;",
          "análise qualitativa de mercado;",
          "interpretação estratégica;",
          "relatórios de inteligência de mercado;",
          "e fluxos de trabalho de pesquisa assistidos por IA.",
        ],
        closing:
          "A visão mais ampla por trás do projeto é explorar como metodologias estruturadas, contexto organizacional e sistemas modernos assistidos por IA podem trabalhar juntos para criar uma abordagem mais contínua, escalável e orientada à decisão para a inteligência de mercado.",
      },
      en: {
        eyebrow: "ABOUT",
        title: "Market Reports to Intelligence Systems",
        intro:
          "ASB Market Research is an independent market intelligence initiative founded by Anastacio Silveira, combining traditional market research methodology with emerging AI-assisted and agent-powered research workflows.",
        body:
          "Drawing from prior experience in market research, business strategy, entrepreneurship, and multinational corporate environments, the initiative explores how modern technologies can make structured market intelligence capabilities more accessible and scalable across organizations of different sizes.",
        listIntro: "ASB Market Research focuses primarily on:",
        bullets: ["secondary research;", "qualitative market analysis;", "strategic interpretation;", "market intelligence reporting;", "and AI-assisted research workflows."],
        closing:
          "The broader vision behind the project is to explore how structured methodologies, organizational context, and modern AI-assisted systems can work together to create a more continuous, scalable, and decision-oriented approach to market intelligence.",
      },
    }[locale];

    return (
      <>
        <PageHeader title={page.title} description={page.description} />
        <Section className="bg-surface">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="surface-card self-start">
              <Image src={founderProfile.image} alt={founderProfile.name} width={640} height={800} className="w-full rounded-2xl border border-line object-cover" />
            </div>
            <div>
              <p className="eyebrow">{founderProfile.role[locale]}</p>
              <h2 className="mt-3 text-display-sm text-brand-primary">{founderProfile.name}</h2>
              <div className="mt-5 grid gap-5">
                {biographyParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-body-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 surface-panel">
                <p className="eyebrow">{founderProfile.credentialsHeading[locale]}</p>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium text-ink">{founderProfile.educationLabel[locale]}</h3>
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
                    <h3 className="text-lg font-medium text-ink">{founderProfile.experienceLabel[locale]}</h3>
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
              <div className="mt-8">
                <a
                  className="button-secondary w-fit gap-2"
                  href={founderProfile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ASB Market Research on LinkedIn"
                  aria-label="Visit ASB Market Research on LinkedIn"
                >
                  <Image
                    src="/media/linkedin-logo.svg"
                    alt="ASB Market Research LinkedIn profile"
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0"
                  />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section className="bg-canvas">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="max-w-4xl">
              <p className="eyebrow">{aboutCopy.eyebrow}</p>
              <h2 className="mt-3 text-display-sm text-brand-primary">{aboutCopy.title}</h2>
              <p className="mt-5 text-lg leading-8 text-body-secondary">{aboutCopy.intro}</p>
              <p className="mt-5 text-lg leading-8 text-body-secondary">{aboutCopy.body}</p>
              <div className="mt-6">
                <p className="text-lg leading-8 text-body-secondary">{aboutCopy.listIntro}</p>
                <ul className="mt-4 grid gap-3 pl-5 text-lg leading-8 text-body-secondary list-disc">
                  {aboutCopy.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-lg leading-8 text-body-secondary">{aboutCopy.closing}</p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-canvas shadow-soft">
              <Image
                src="/media/about-market-reports-to-intelligence-systems.png"
                alt="ASB Market Research team reviewing market intelligence materials"
                width={1024}
                height={1536}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </Section>
        <Section className="bg-white">
          <div className="mx-auto max-w-3xl">
            <NewsletterForm locale={locale} />
          </div>
        </Section>
      </>
    );
  }

  if (key === "services") {
    return (
      <>
        <PageHeader title={page.title} description={page.description} eyebrow={labels.capabilities} />
        <Section className="bg-surface !pt-2 md:!pt-3">
          <div className="mt-10 grid gap-5">
            {serviceDetails.map((service) => (
              <article key={service.slug} className="surface-card grid gap-5 md:grid-cols-[4rem_1fr_auto] md:items-center">
                <p className="eyebrow text-brand-primary">{service.icon}</p>
                <div>
                  <h2 className="text-xl font-medium text-brand-primary">{service.locales[locale].title}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-body-secondary md:text-base">{service.locales[locale].summary}</p>
                </div>
                <Link className="button-secondary w-fit md:justify-self-end" href={getLocalizedPath(locale, `/services/${service.slug}`)}>
                  {locale === "es" ? "Ver detalle" : locale === "pt" ? "Ver detalhe" : "View details"}
                </Link>
              </article>
            ))}
          </div>
        </Section>
      </>
    );
  }

  if (key === "methodology") {
    const methodologyIntro = locale === "es"
      ? {
          paragraphs: [
            "Nuestra metodologia esta disenada para garantizar la solidez, trazabilidad y credibilidad de cada reporte que entregamos. Comunicar como se construye el analisis es tan importante como el resultado final, ya que permite entender el origen de cada conclusion y sustentar la toma de decisiones.",
            "El proceso se basa en la recopilacion exhaustiva de informacion secundaria disponible en el mercado. Esto incluye fuentes como informes de asociaciones del sector, noticias de la industria, newsletters de competidores, estudios previamente realizados, plataformas de datos online y mercados de compra y venta de productos o servicios, entre otras.",
            "A partir de estas fuentes, reunimos y consolidamos toda la informacion relevante para luego someterla a un proceso riguroso de lectura, analisis e interpretacion.",
            "Nuestro objetivo no es unicamente compilar informacion, sino transformarla en conocimiento estructurado. Esto implica identificar patrones, conexiones y hallazgos clave que se convierten en insights accionables, fundamentales para la toma de decisiones estrategicas.",
          ],
          listTitle: "Nuestra metodologia se centra en el uso de informacion secundaria como base, incluyendo:",
          listItems: ["Bancos de datos", "Informes sectoriales", "Publicaciones especializadas", "Fuentes institucionales y gubernamentales", "Plataformas digitales de mercado"],
          closing: "Este enfoque nos permite desarrollar reportes solidos, relevantes y orientados a resultados, adaptados a las necesidades especificas de cada cliente.",
        }
      : locale === "pt"
        ? {
            paragraphs: [
              "Nossa metodologia foi desenhada para garantir a solidez, a rastreabilidade e a credibilidade de cada relatorio que entregamos. Comunicar como a analise e construida e tao importante quanto o resultado final, pois permite compreender a origem de cada conclusao e sustentar a tomada de decisoes.",
              "O processo se baseia na recopilacao exaustiva de informacao secundaria disponivel no mercado. Isso inclui fontes como relatorios de associacoes setoriais, noticias da industria, newsletters de concorrentes, estudos previamente realizados, plataformas de dados online e mercados de compra e venda de produtos ou servicos, entre outras.",
              "A partir dessas fontes, reunimos e consolidamos toda a informacao relevante para depois submetela a um processo rigoroso de leitura, analise e interpretacao.",
              "Nosso objetivo nao e apenas compilar informacao, mas transforma-la em conhecimento estruturado. Isso implica identificar padroes, conexoes e achados-chave que se convertem em insights acionaveis, fundamentais para a tomada de decisoes estrategicas.",
            ],
            listTitle: "Nossa metodologia se apoia no uso de informacao secundaria como base, incluindo:",
            listItems: ["Bancos de dados", "Relatórios setoriais", "Publicações especializadas", "Fontes institucionais e governamentais", "Plataformas digitais de mercado"],
            closing: "Essa abordagem nos permite desenvolver relatorios solidos, relevantes e orientados a resultados, adaptados as necessidades especificas de cada cliente.",
          }
        : {
            paragraphs: [
              "Our methodology is designed to ensure the solidity, traceability, and credibility of every report we deliver. Explaining how the analysis is built is as important as the final output because it clarifies the origin of each conclusion and supports strategic decision-making.",
              "The process is based on the thorough collection of secondary information available in the market. This includes sources such as industry association reports, sector news, competitor newsletters, previously published studies, online data platforms, and marketplaces for buying and selling products or services, among others.",
              "From these sources, we gather and consolidate all relevant information before submitting it to a rigorous process of reading, analysis, and interpretation.",
              "Our objective is not merely to compile information, but to transform it into structured knowledge. This means identifying patterns, connections, and key findings that become actionable insights for strategic decision-making.",
            ],
            listTitle: "Our methodology relies on secondary information as a foundation, including:",
            listItems: ["Data banks", "Industry reports", "Specialized publications", "Institutional and government sources", "Digital market platforms"],
            closing: "This approach allows us to develop solid, relevant, and results-oriented reports tailored to the specific needs of each client.",
          };

    const steps = locale === "es"
      ? ["Alineamos la pregunta con la decision que se necesita tomar.", "Definimos alcance, fuentes, comparables y criterio de profundidad.", "Entregamos sintesis ejecutiva con hallazgos, riesgos y siguiente accion recomendada."]
      : locale === "pt"
        ? ["Alinhamos a pergunta de pesquisa com a decisao que precisa ser tomada.", "Definimos escopo, fontes, comparaveis e profundidade da analise.", "Entregamos sintese executiva com achados, riscos e a proxima acao recomendada."]
        : ["We align the research question with the decision that must be made.", "We define scope, sources, comparables, and the required depth of analysis.", "We deliver executive synthesis with findings, risks, and the next recommended action."];

    return <><PageHeader title={page.title} description={page.description} eyebrow={labels.process} /><Section className="bg-surface !pt-2 md:!pt-3"><div className="max-w-4xl"><div className="grid gap-5 text-lg leading-8 text-body-secondary">{methodologyIntro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-6"><p className="text-lg leading-8 text-body-secondary">{methodologyIntro.listTitle}</p><ul className="mt-4 grid gap-3 pl-5 text-lg leading-8 text-body-secondary list-disc">{methodologyIntro.listItems.map((item) => <li key={item}>{item}</li>)}</ul></div><p className="mt-6 text-lg leading-8 text-body-secondary">{methodologyIntro.closing}</p></div><div className="mt-10 grid gap-5">{steps.map((step, index) => <div key={step} className="surface-card flex gap-5"><span className="text-sm font-semibold text-accent">0{index + 1}</span><p className="text-lg leading-8 text-body-secondary">{step}</p></div>)}</div></Section><Section className="bg-canvas"><div className="grid gap-8 lg:grid-cols-2"><EmbedContentBlock type="pdf" locale={locale} title={locale === "es" ? "Vista previa de metodología" : locale === "pt" ? "Prévia da metodologia" : "Methodology preview"} src="/pdfs/company/methodology-overview.pdf" /><FAQBlock items={faqContent[locale]} /></div></Section></>;
  }

  if (key === "contact") {
    return (
      <>
        <PageHeader title={page.title} description="" eyebrow={labels.leadGeneration} />
        <Section className="bg-surface">
          <div className="grid gap-8">
            <ContactCalloutCard locale={locale} className="max-w-3xl" />
            <div className="max-w-3xl">
              <ContactForm locale={locale} />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (key === "request-received") {
    const copy = requestReceivedContent[locale];
    return (
      <>
        <Section className="bg-canvas !py-20 md:!py-28">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[1.5rem] border border-line bg-surface px-6 py-12 shadow-soft md:px-10 md:py-16">
              <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <h1 className="text-display-sm text-brand-primary">{page.title}</h1>
                <div className="mt-8 grid gap-5 text-lg leading-8 text-body-secondary md:text-xl md:leading-9">
                  {copy.body.slice(0, 4).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 grid gap-3">
                  <p className="text-lg font-medium text-brand-primary">{copy.body[4]}</p>
                  <p className="text-sm leading-6 text-body-secondary md:text-base md:leading-7">{copy.body[5]}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (key === "quotation") {
    return (
      <>
        <PageHeader title={page.title} description={page.description} eyebrow={labels.briefing} />
        <Section className="bg-surface">
          <div className="grid gap-8">
            <ContactCalloutCard locale={locale} className="max-w-4xl" />
            <div className="max-w-4xl">
              <ReportRequestForm locale={locale} />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (key === "newsletter") {
    return <><PageHeader title={page.title} description="" /><Section className="bg-surface"><div className="max-w-3xl"><NewsletterForm locale={locale} /></div></Section></>;
  }

  if (key === "sample-reports") {
    const previewReportSlugs = new Set([
      "latam-b2b-software-expansion-snapshot",
      "premium-food-category-benchmark",
      "investor-market-scoping-note",
    ]);

    return (
      <>
        <PageHeader title={page.title} description={page.description} eyebrow={locale === "es" ? "Biblioteca" : locale === "pt" ? "Biblioteca" : "Library"} />
        <Section className="bg-surface">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sampleReports.map((report) => (
              <div key={report.slug} className="grid gap-4">
                <PdfDownloadCard
                  title={report.locales[locale].title}
                  description={report.locales[locale].excerpt}
                  href={report.pdfHref}
                  previewHref={previewReportSlugs.has(report.slug) ? report.pdfHref : undefined}
                  label={
                    report.pdfHref
                      ? locale === "es"
                        ? "Descargar PDF"
                        : locale === "pt"
                          ? "Baixar PDF"
                          : "Download PDF"
                      : locale === "es"
                        ? "Disponible a pedido"
                        : locale === "pt"
                          ? "Disponivel sob consulta"
                          : "Available on request"
                  }
                />
                <Link
                  href={getLocalizedPath(locale, `/sample-reports/${report.slug}`)}
                  className="text-sm font-semibold text-accent transition-colors hover:text-brand-primary"
                >
                  {locale === "es" ? "Ver ficha" : locale === "pt" ? "Ver ficha" : "View overview"}
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </>
    );
  }

  if (key === "insights") {
    const requestedCategory = typeof resolvedSearchParams?.category === "string" ? resolvedSearchParams.category : undefined;
    const selectedCategory =
      requestedCategory === "strategy" || requestedCategory === "competition" || requestedCategory === "briefing"
        ? requestedCategory
        : "all";
    const filteredArticles =
      selectedCategory === "all"
        ? insightArticles
        : insightArticles.filter((article) => article.categoryKey === selectedCategory);
    const featuredArticle = filteredArticles[0];
    const listArticles = filteredArticles.slice(1);

    return (
      <>
        <PageHeader
          title={page.title}
          description={page.description}
          eyebrow={locale === "es" ? "Contenido editorial" : locale === "pt" ? "Conteudo editorial" : "Editorial"}
        />
        <Section className="bg-surface">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <Link
                className={`button-secondary ${selectedCategory === "all" ? "border-brand-primary bg-brand-primary text-white hover:bg-brand-secondary" : ""}`}
                href={getLocalizedPath(locale, "/insights")}
              >
                {locale === "es" ? "Todos" : locale === "pt" ? "Todos" : "All"}
              </Link>
              {insightCategoryOrder.map((category) => {
                const href = getLocalizedPath(locale, `/insights?category=${category}`);
                const active = selectedCategory === category;
                return (
                  <Link
                    key={category}
                    className={`button-secondary ${active ? "border-brand-primary bg-brand-primary text-white hover:bg-brand-secondary" : ""}`}
                    href={href}
                  >
                    {insightCategoryLabels[category][locale]}
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
        <Section className="bg-surface !pt-0">
          {featuredArticle ? (
            <div className="mb-8">
              <ArticleCard
                locale={locale}
                slug={featuredArticle.slug}
                title={featuredArticle.locales[locale].title}
                excerpt={featuredArticle.locales[locale].excerpt}
                category={featuredArticle.locales[locale].category}
                publishedAt={featuredArticle.publishedAt}
                readingTimeMinutes={featuredArticle.readingTimeMinutes}
                featured
              />
            </div>
          ) : null}
          {listArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {listArticles.map((article) => (
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
          ) : (
            <p className="max-w-2xl text-lg leading-8 text-body-secondary">
              {locale === "es"
                ? "No hay articulos para esta categoria."
                : locale === "pt"
                  ? "Nao ha artigos para esta categoria."
                  : "There are no articles in this category."}
            </p>
          )}
        </Section>
      </>
    );
  }

  const paragraphs = key === "privacy-policy" ? (locale === "es" ? ["Esta pagina constituye una base inicial. Debe adaptarse con revision legal antes del lanzamiento publico.", "ASB Market Research puede recopilar datos enviados voluntariamente mediante formularios de contacto, newsletter y solicitudes de reportes.", "La informacion sera utilizada para responder consultas, enviar comunicaciones autorizadas y mejorar la experiencia comercial."] : locale === "pt" ? ["Esta pagina e uma base inicial. Deve ser ajustada com revisao juridica antes do lancamento publico.", "A ASB Market Research pode coletar dados enviados voluntariamente por formularios de contato, newsletter e solicitacoes de relatorio.", "As informacoes podem ser utilizadas para responder consultas, enviar comunicacoes autorizadas e melhorar a experiencia comercial."] : ["This page is an initial base. It should be adapted with legal review before public launch.", "ASB Market Research may collect information voluntarily submitted through contact, newsletter, and report request forms.", "The information may be used to answer inquiries, send authorized communications, and improve the commercial experience."]) : (locale === "es" ? ["Este sitio ofrece informacion institucional y contenidos profesionales de ASB Market Research.", "El material publicado tiene caracter informativo y no reemplaza asesoramiento legal, financiero o de inversion.", "Los formularios y descargas no implican una relacion contractual automatica; toda contratacion requerira acuerdo posterior."] : locale === "pt" ? ["Este site oferece informacoes institucionais e conteudo profissional da ASB Market Research.", "Os materiais publicados sao informativos e nao substituem assessoria juridica, financeira ou de investimento.", "Formularios e downloads nao criam relacao contratual automatica; qualquer contratacao exigira acordo posterior."] : ["This website provides institutional information and professional content from ASB Market Research.", "Published materials are informational and do not replace legal, financial, or investment advice.", "Forms and downloads do not create an automatic contractual relationship; any engagement requires a separate agreement."]);

  return <><PageHeader title={page.title} description="" eyebrow={labels.legal} /><Section className="bg-surface"><div className="mx-auto max-w-3xl grid gap-6">{paragraphs.map((paragraph) => <p key={paragraph} className="text-lg leading-8 text-body-secondary">{paragraph}</p>)}</div></Section></>;
}

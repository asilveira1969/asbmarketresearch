import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ReportRequestForm } from "@/components/forms/report-request-form";
import { EmbedContentBlock } from "@/components/content/embed-content-block";
import { FAQBlock } from "@/components/content/faq-block";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { faqContent, staticPages } from "@/content/site";
import { founderProfile } from "@/data/company";
import { siteConfig } from "@/config/site";
import { serviceDetails } from "@/content/services";
import { workstationHomeContent } from "@/content/workstation-home";
import { getLocalizedPath } from "@/lib/routes";

const thankYouContent = {
  contact: {
    es: { title: "Gracias por contactarnos", description: "Su mensaje fue recibido. Este espacio queda listo para conectar con email o CRM." },
    en: { title: "Thank you for getting in touch", description: "Your message was received. This flow is ready to connect with email or a CRM later." },
    pt: { title: "Obrigado pelo contato", description: "Sua mensagem foi recebida. Este fluxo ja esta pronto para conectar com email ou CRM depois." },
  },
  newsletter: {
    es: { title: "Suscripcion confirmada", description: "La arquitectura esta lista para integrar su proveedor de email marketing." },
    en: { title: "Subscription confirmed", description: "The architecture is ready to connect your email marketing provider." },
    pt: { title: "Inscricao confirmada", description: "A arquitetura esta pronta para integrar seu provedor de email marketing." },
  },
  "report-request": {
    es: { title: "Solicitud recibida", description: "El brief fue enviado y esta estructura ya soporta respuestas futuras por email o automatizacion." },
    en: { title: "Request received", description: "The brief was submitted and this structure can later connect to email or automation workflows." },
    pt: { title: "Solicitacao recebida", description: "O brief foi enviado e esta estrutura pode depois se conectar a email ou automacoes." },
  },
} as const;

const pageLabels = {
  es: {
    confirmation: "ConfirmaciÃ³n",
    returnHome: "Volver al inicio",
    capabilities: "Capacidades",
    pdfDownloads: "Descargas PDF",
    process: "Proceso",
    leadGeneration: "GeneraciÃ³n de leads",
    briefing: "Briefing",
    crm: "CRM",
    legal: "Legal",
    whatToExpect: "QuÃ© recibir",
    newsletterItems: ["Notas de research y alertas de artÃ­culos", "Actualizaciones de reportes de muestra", "Insights ejecutivos seleccionados"],
  },
  en: {
    confirmation: "Confirmation",
    returnHome: "Return home",
    capabilities: "Capabilities",
    pdfDownloads: "PDF Downloads",
    process: "Process",
    leadGeneration: "Contact form",
    briefing: "Briefing",
    crm: "CRM",
    legal: "Legal",
    whatToExpect: "What to expect",
    newsletterItems: ["Research notes and article alerts", "Sample report updates", "Selected executive insights"],
  },
  pt: {
    confirmation: "ConfirmaÃ§Ã£o",
    returnHome: "Voltar ao inÃ­cio",
    capabilities: "Capacidades",
    pdfDownloads: "Downloads PDF",
    process: "Processo",
    leadGeneration: "GeraÃ§Ã£o de leads",
    briefing: "Briefing",
    crm: "CRM",
    legal: "Legal",
    whatToExpect: "O que receber",
    newsletterItems: ["Notas de pesquisa e alertas de artigos", "AtualizaÃ§Ãµes de relatÃ³rios de amostra", "Insights executivos selecionados"],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  if (slug[0] === "thank-you" && slug[1] && slug[1] in thankYouContent) {
    const entry = thankYouContent[slug[1] as keyof typeof thankYouContent][locale];
    return buildPageMetadata({ locale, pathname: `/thank-you/${slug[1]}`, title: entry.title, description: entry.description });
  }
  if (slug.length !== 1 || !(slug[0] in staticPages[locale])) return {};
  const page = staticPages[locale][slug[0] as keyof typeof staticPages[typeof locale]];
  return buildPageMetadata({ locale, pathname: `/${slug[0]}`, title: page.title, description: page.description });
}

export default async function StaticPageRouter({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale: localeParam, slug } = await params;
  const locale = resolveLocale(localeParam);
  const labels = pageLabels[locale];

  if (slug[0] === "thank-you" && slug[1] && slug[1] in thankYouContent) {
    const entry = thankYouContent[slug[1] as keyof typeof thankYouContent][locale];
    return <><PageHeader title={entry.title} description={entry.description} eyebrow={labels.confirmation} /><Section className="bg-surface"><Link className="button-primary" href={getLocalizedPath(locale)}>{labels.returnHome}</Link></Section></>;
  }

  if (slug.length !== 1 || !(slug[0] in staticPages[locale])) notFound();
  const key = slug[0] as keyof typeof staticPages[typeof locale];
  const page = staticPages[locale][key];

  if (key === "about") {
    return (
      <>
        <PageHeader title={page.title} description={page.description} />
        <Section className="bg-surface">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="max-w-4xl">
              <p className="eyebrow">ABOUT</p>
              <h2 className="mt-3 text-display-sm text-brand-primary">Market Reports to Intelligence Systems</h2>
              <p className="mt-5 text-lg leading-8 text-body-secondary">
                ASB Market Research is an independent market intelligence initiative founded by Anastacio Silveira,
                combining traditional market research methodology with emerging AI-assisted and agent-powered research workflows.
              </p>
              <p className="mt-5 text-lg leading-8 text-body-secondary">
                Drawing from prior experience in market research, business strategy, entrepreneurship, and multinational
                corporate environments, the initiative explores how modern technologies can make structured market intelligence
                capabilities more accessible and scalable across organizations of different sizes.
              </p>
              <div className="mt-6">
                <p className="text-lg leading-8 text-body-secondary">ASB Market Research focuses primarily on:</p>
                <ul className="mt-4 grid gap-3 pl-5 text-lg leading-8 text-body-secondary list-disc">
                  <li>secondary research;</li>
                  <li>qualitative market analysis;</li>
                  <li>strategic interpretation;</li>
                  <li>market intelligence reporting;</li>
                  <li>and AI-assisted research workflows.</li>
                </ul>
              </div>
              <p className="mt-6 text-lg leading-8 text-body-secondary">
                The broader vision behind the project is to explore how structured methodologies, organizational context, and
                modern AI-assisted systems can work together to create a more continuous, scalable, and decision-oriented
                approach to market intelligence.
              </p>
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
        <Section className="bg-canvas">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="surface-card">
              <Image src={founderProfile.image} alt={founderProfile.name} width={640} height={800} className="w-full rounded-2xl border border-line object-cover" />
            </div>
            <div>
              <p className="eyebrow">{founderProfile.role[locale]}</p>
              <h2 className="mt-3 text-display-sm text-brand-primary">{founderProfile.name}</h2>
              <p className="mt-5 text-lg leading-8 text-body-secondary">{founderProfile.biography[locale]}</p>
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
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a className="button-secondary w-fit" href={founderProfile.resumeUrl} download>
                  {locale === "es" ? "Descargar CV" : locale === "pt" ? "Baixar CV" : "Download resume"}
                </a>
                <a className="button-secondary w-fit" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section className="bg-surface">
          <EmbedContentBlock
            type="reference"
            locale={locale}
            title={locale === "es" ? "CurrÃ­culum y credenciales" : locale === "pt" ? "CurrÃ­culo e credenciais" : "Resume and credentials"}
            href={founderProfile.resumeUrl}
            description={locale === "es" ? "Coloque aquÃ­ el PDF final del CV, certificaciones o credenciales profesionales." : locale === "pt" ? "Coloque aqui o PDF final do currÃ­culo, certificaÃ§Ãµes ou credenciais profissionais." : "Place the final PDF resume, certifications, or credentials here."}
          />
        </Section>
      </>
    );
  }

  if (key === "services") {
    const servicesIntro = locale === "es"
      ? []
      : locale === "pt"
        ? []
        : [];
    const workstation = workstationHomeContent[locale];
    const servicesHeroParagraphs = workstation.heroParagraphs.slice(0, 2);

    return (
      <>
        <PageHeader title={page.title} description={page.description} eyebrow={labels.capabilities} />
        <Section className="border-b border-line bg-surface pt-12 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow">{workstation.eyebrow}</p>
              <h1 className="mt-6 max-w-3xl text-display-xs text-brand-primary">{workstation.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{workstation.description}</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-body-secondary md:text-lg">{workstation.heroDetail}</p>
              {servicesHeroParagraphs.map((paragraph) =>
                paragraph.includes(";") ? (
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
                        <li key={item} className="border-l-2 border-brand-primary pl-4">{item}</li>
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
        <Section className="bg-canvas !pt-2 md:!pt-3">
          <div className="max-w-4xl">
            <div className="grid gap-5 text-lg leading-8 text-body-secondary">
              {servicesIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
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
            listItems: ["Bancos de dados", "RelatÃ³rios setoriais", "PublicaÃ§Ãµes especializadas", "Fontes institucionais e governamentais", "Plataformas digitais de mercado"],
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

    return <><PageHeader title={page.title} description={page.description} eyebrow={labels.process} /><Section className="bg-surface !pt-2 md:!pt-3"><div className="max-w-4xl"><div className="grid gap-5 text-lg leading-8 text-body-secondary">{methodologyIntro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-6"><p className="text-lg leading-8 text-body-secondary">{methodologyIntro.listTitle}</p><ul className="mt-4 grid gap-3 pl-5 text-lg leading-8 text-body-secondary list-disc">{methodologyIntro.listItems.map((item) => <li key={item}>{item}</li>)}</ul></div><p className="mt-6 text-lg leading-8 text-body-secondary">{methodologyIntro.closing}</p></div><div className="mt-10 grid gap-5">{steps.map((step, index) => <div key={step} className="surface-card flex gap-5"><span className="text-sm font-semibold text-accent">0{index + 1}</span><p className="text-lg leading-8 text-body-secondary">{step}</p></div>)}</div></Section><Section className="bg-canvas"><div className="grid gap-8 lg:grid-cols-2"><EmbedContentBlock type="pdf" locale={locale} title={locale === "es" ? "Vista previa de metodologÃ­a" : locale === "pt" ? "PrÃ©via da metodologia" : "Methodology preview"} src="/pdfs/company/methodology-overview.pdf" /><FAQBlock items={faqContent[locale]} /></div></Section></>;
  }

  if (key === "contact") {
    return <><PageHeader title={page.title} description={page.description} eyebrow={labels.leadGeneration} /><Section className="bg-surface"><div className="max-w-3xl"><ContactForm locale={locale} /></div></Section></>;
  }

  if (key === "quotation") {
    return <><PageHeader title={page.title} description={page.description} eyebrow={labels.briefing} /><Section className="bg-surface"><div className="max-w-4xl"><ReportRequestForm locale={locale} /></div></Section></>;
  }

  if (key === "newsletter") {
    return <><PageHeader title={page.title} description="" eyebrow={labels.crm} /><Section className="bg-surface"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div className="surface-panel"><p className="eyebrow">{labels.whatToExpect}</p><ul className="mt-5 grid gap-4 text-body-secondary">{labels.newsletterItems.map((item) => <li key={item}>{item}</li>)}</ul></div><NewsletterForm locale={locale} /></div></Section></>;
  }

  const paragraphs = key === "privacy-policy" ? (locale === "es" ? ["Esta pagina constituye una base inicial. Debe adaptarse con revision legal antes del lanzamiento publico.", "ASB Market Research puede recopilar datos enviados voluntariamente mediante formularios de contacto, newsletter y solicitudes de reportes.", "La informacion sera utilizada para responder consultas, enviar comunicaciones autorizadas y mejorar la experiencia comercial."] : locale === "pt" ? ["Esta pagina e uma base inicial. Deve ser ajustada com revisao juridica antes do lancamento publico.", "A ASB Market Research pode coletar dados enviados voluntariamente por formularios de contato, newsletter e solicitacoes de relatorio.", "As informacoes podem ser utilizadas para responder consultas, enviar comunicacoes autorizadas e melhorar a experiencia comercial."] : ["This page is an initial base. It should be adapted with legal review before public launch.", "ASB Market Research may collect information voluntarily submitted through contact, newsletter, and report request forms.", "The information may be used to answer inquiries, send authorized communications, and improve the commercial experience."]) : (locale === "es" ? ["Este sitio ofrece informacion institucional y contenidos profesionales de ASB Market Research.", "El material publicado tiene caracter informativo y no reemplaza asesoramiento legal, financiero o de inversion.", "Los formularios y descargas no implican una relacion contractual automatica; toda contratacion requerira acuerdo posterior."] : locale === "pt" ? ["Este site oferece informacoes institucionais e conteudo profissional da ASB Market Research.", "Os materiais publicados sao informativos e nao substituem assessoria juridica, financeira ou de investimento.", "Formularios e downloads nao criam relacao contratual automatica; qualquer contratacao exigira acordo posterior."] : ["This website provides institutional information and professional content from ASB Market Research.", "Published materials are informational and do not replace legal, financial, or investment advice.", "Forms and downloads do not create an automatic contractual relationship; any engagement requires a separate agreement."]);

  return <><PageHeader title={page.title} description="" eyebrow={labels.legal} /><Section className="bg-surface"><div className="mx-auto max-w-3xl grid gap-6">{paragraphs.map((paragraph) => <p key={paragraph} className="text-lg leading-8 text-body-secondary">{paragraph}</p>)}</div></Section></>;
}


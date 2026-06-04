import Image from "next/image";
import type { Locale } from "@/config/locales";
import { PageHeader } from "@/components/ui/page-header";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

type HomeContent = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  placeholderLabel: string;
  placeholderBody: string;
};

const homeContent: Record<Locale, HomeContent> = {
  en: {
    eyebrow: "Overview",
    title: "Market research that becomes usable intelligence",
    description: "A practical view of how ASB Market Research turns structured research into intelligence that supports better decisions.",
    paragraphs: [
      "We at ASB Market Research believe that market research should not be limited to reports sitting on a shelf or files stored on a server.",
      "The true value of market research comes from how intelligence is shared, discussed, and applied across an organization.",
      "We provide custom market research, industry analysis, competitor intelligence, customer insights, and executive reporting designed to support better business decisions. Beyond delivering research, we believe organizations should develop the capability to continuously gather, analyze, and use market intelligence as part of their daily operations.",
      "Our approach combines research expertise, structured workflows, specialized AI agents, and executive communication tools to transform information into actionable intelligence.",
      "Whether you need a single research project, ongoing intelligence support, executive presentations, or your own dedicated Market Research Workstation, our objective remains the same: helping organizations build stronger decision-making capabilities through better market intelligence.",
    ],
    placeholderLabel: "Image placeholder",
    placeholderBody: "Add a supporting image, diagram, or campaign visual here.",
  },
  es: {
    eyebrow: "Resumen",
    title: "Investigación de mercado que se convierte en inteligencia útil",
    description: "Una visión práctica de cómo ASB Market Research convierte la investigación estructurada en inteligencia que apoya mejores decisiones.",
    paragraphs: [
      "En ASB Market Research creemos que la investigación de mercado no debe limitarse a reportes guardados en una estantería o archivos almacenados en un servidor.",
      "El verdadero valor de la investigación de mercado está en cómo la inteligencia se comparte, se discute y se aplica dentro de una organización.",
      "Ofrecemos investigación de mercado a medida, análisis de industria, inteligencia de competidores, insights de clientes e informes ejecutivos diseñados para apoyar mejores decisiones de negocio. Más allá de entregar estudios, creemos que las organizaciones deben desarrollar la capacidad de recopilar, analizar y usar inteligencia de mercado de forma continua como parte de sus operaciones diarias.",
      "Nuestro enfoque combina experiencia en investigación, workflows estructurados, agentes de IA especializados y herramientas de comunicación ejecutiva para transformar la información en inteligencia accionable.",
      "Ya sea que necesites un proyecto puntual de investigación, apoyo continuo de inteligencia, presentaciones ejecutivas o tu propia Market Research Workstation dedicada, nuestro objetivo sigue siendo el mismo: ayudar a las organizaciones a construir una capacidad de decisión más fuerte a través de una mejor inteligencia de mercado.",
    ],
    placeholderLabel: "Espacio para imagen",
    placeholderBody: "Aquí puedes colocar una imagen de apoyo, un diagrama o un visual de campaña.",
  },
  pt: {
    eyebrow: "Visão geral",
    title: "Pesquisa de mercado que se transforma em inteligência útil",
    description: "Uma visão prática de como a ASB Market Research transforma pesquisa estruturada em inteligência que apoia melhores decisões.",
    paragraphs: [
      "Na ASB Market Research acreditamos que a pesquisa de mercado não deve se limitar a relatórios guardados em uma prateleira ou arquivos armazenados em um servidor.",
      "O verdadeiro valor da pesquisa de mercado está em como a inteligência é compartilhada, discutida e aplicada em toda a organização.",
      "Oferecemos pesquisa de mercado personalizada, análise de indústria, inteligência competitiva, insights de clientes e relatórios executivos pensados para apoiar melhores decisões de negócio. Além de entregar pesquisas, acreditamos que as organizações devem desenvolver a capacidade de coletar, analisar e usar inteligência de mercado continuamente como parte de suas operações diárias.",
      "Nossa abordagem combina experiência em pesquisa, fluxos de trabalho estruturados, agentes de IA especializados e ferramentas de comunicação executiva para transformar informação em inteligência acionável.",
      "Se você precisa de um projeto pontual de pesquisa, apoio contínuo de inteligência, apresentações executivas ou da sua própria Market Research Workstation dedicada, nosso objetivo continua sendo o mesmo: ajudar organizações a construir uma capacidade de decisão mais forte por meio de uma melhor inteligência de mercado.",
    ],
    placeholderLabel: "Espaço para imagem",
    placeholderBody: "Adicione aqui uma imagem de apoio, um diagrama ou um visual de campanha.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = homeContent[locale];

  return buildPageMetadata({
    locale,
    pathname: "",
    title: `${siteConfig.name} | ${content.title}`,
    description: content.paragraphs[0],
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = homeContent[locale];

  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title="Research. Intelligence. Decisions."
        description="A practical framework for making market research useful across the organization."
      />
      <Section className="border-b border-line bg-canvas py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-3xl">
            <div className="grid gap-5 text-[1.05rem] leading-[1.7] text-body-secondary md:text-lg md:leading-8">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="surface-card border-dashed border-line bg-gradient-to-br from-canvas via-surface to-canvas shadow-soft">
            <div className="overflow-hidden rounded-[1.5rem] border border-dashed border-line/60 bg-white/80 p-4 shadow-soft">
              <Image
                src="/media/hero-boardroom-asb.png"
                alt="ASB Market Research executive boardroom discussion"
                width={1200}
                height={1500}
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

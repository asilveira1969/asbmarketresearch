import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type AgenticWorkflowSectionProps = {
  locale: Locale;
};

export function AgenticWorkflowSection({ locale }: AgenticWorkflowSectionProps) {
  const content =
    locale === "es"
      ? {
          eyebrow: "Workflow agentic",
          title: "Market Research Workstation personalizable",
          body: [
            "El Market Research Workstation está diseñado para reflejar cómo operan los departamentos de research en organizaciones reales. Reúne múltiples capacidades de investigación, fuentes de datos y metodologías, incluyendo investigación primaria, investigación secundaria, investigación cuantitativa e investigación cualitativa, dentro de un sistema integrado de inteligencia agentic.",
            "Según las necesidades de cada organización, ASB Market Research diseña workflows de research personalizados y alineados con los objetivos de la empresa, sus capacidades internas, fuentes de datos disponibles, desafíos de mercado y estrategia de crecimiento.",
            "Las organizaciones pueden solicitar una implementación personalizada del Market Research Workstation para apoyar necesidades recurrentes de research, automatizar workflows de inteligencia y generar reportes listos para equipos de dirección.",
            "Contacta a ASB Market Research para solicitar una cotización y explorar cómo este sistema puede instalarse y personalizarse para tu organización.",
          ],
        }
      : locale === "pt"
        ? {
            eyebrow: "Workflow agentic",
            title: "Market Research Workstation personalizável",
            body: [
              "O Market Research Workstation foi desenhado para refletir como departamentos de pesquisa de mercado operam em organizações reais. Ele reúne múltiplas capacidades de pesquisa, fontes de dados e metodologias, incluindo pesquisa primária, pesquisa secundária, pesquisa quantitativa e pesquisa qualitativa, dentro de um sistema integrado de inteligência agentic.",
              "De acordo com as necessidades de cada organização, a ASB Market Research desenha workflows de pesquisa personalizados e alinhados aos objetivos da empresa, capacidades internas, fontes de dados disponíveis, desafios de mercado e estratégia de crescimento.",
              "As organizações podem solicitar uma implementação personalizada do Market Research Workstation para apoiar necessidades recorrentes de pesquisa, automatizar workflows de inteligência e gerar relatórios prontos para equipes de gestão.",
              "Entre em contato com a ASB Market Research para solicitar uma cotação e explorar como este sistema pode ser instalado e personalizado para sua organização.",
            ],
          }
        : {
            eyebrow: "Agentic workflow",
            title: "Customizable Market Research Workstation",
            body: [
              "The Market Research Workstation is designed to reflect how market research departments operate in real-world organizations. It brings together multiple research skills, data sources, and methodologies, including primary research, secondary research, quantitative research, and qualitative research, within one integrated agentic intelligence system.",
              "Depending on the needs of each organization, ASB Market Research designs customized research workflows aligned with the company's objectives, internal capabilities, available data sources, market challenges, and growth strategy.",
              "Organizations can request a customized implementation of the Market Research Workstation to support recurring research needs, automate intelligence workflows, and generate decision-ready reports for management teams.",
              "Contact ASB Market Research to request a quote and explore how this system can be installed and customized for your organization.",
            ],
          };

  return (
    <section className="border-b border-line bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 text-center md:px-8">
        <div className="grid gap-10 text-left lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="mt-3 text-display-sm text-brand-primary md:text-display-xs">{content.title}</h2>
            {content.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-[1.05rem] leading-[1.65] text-body-secondary">
                {locale === "en" && paragraph.startsWith("Contact ASB Market Research") ? (
                  <>
                    <Link className="font-semibold text-brand-primary transition-colors hover:text-brand-secondary" href={getLocalizedPath(locale, "/contact")}>
                      Contact
                    </Link>{" "}
                    ASB Market Research to request a quote and explore how this system can be installed and customized for your organization.
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-canvas shadow-soft lg:mt-[6.75rem]">
            <Image
              src="/media/agentic-workflow-programmer.png"
              alt="Technical consultant configuring a customizable market research workstation"
              width={1200}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

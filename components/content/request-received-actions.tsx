"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type RequestReceivedActionsProps = {
  locale: Locale;
};

const labels = {
  es: {
    optionATitle: "Programa una llamada de descubrimiento de 15 minutos",
    optionADescription: "Habla directamente con ASB Market Research sobre tus necesidades de investigación.",
    optionAButton: "Request a 15-Minute Call",
    optionASuccess:
      "Gracias por tu interés en hablar con nosotros. Un miembro de ASB Market Research se pondrá en contacto contigo por correo electrónico para coordinar un horario conveniente para una llamada de descubrimiento de 15 minutos.",
    optionBTitle: "Completa un Detailed Project Brief",
    optionBDescription: "Proporciona información adicional y recibe una propuesta en 24 horas.",
    optionBButton: "Complete Detailed Brief",
  },
  en: {
    optionATitle: "Schedule a 15-Minute Discovery Call",
    optionADescription: "Discuss your research needs directly with ASB Market Research.",
    optionAButton: "Request a 15-Minute Call",
    optionASuccess:
      "Thank you for your interest in speaking with us. A member of ASB Market Research will contact you shortly by email to coordinate a convenient time for a 15-minute discovery call.",
    optionBTitle: "Complete a Detailed Project Brief",
    optionBDescription: "Provide additional information and receive a proposal within 24 hours.",
    optionBButton: "Complete Detailed Brief",
  },
  pt: {
    optionATitle: "Agende uma chamada de descoberta de 15 minutos",
    optionADescription: "Converse diretamente com a ASB Market Research sobre suas necessidades de pesquisa.",
    optionAButton: "Request a 15-Minute Call",
    optionASuccess:
      "Obrigado pelo seu interesse em falar conosco. Um membro da ASB Market Research entrará em contato em breve por e-mail para coordenar um horário conveniente para uma chamada de descoberta de 15 minutos.",
    optionBTitle: "Complete um Detailed Project Brief",
    optionBDescription: "Forneça informações adicionais e receba uma proposta em até 24 horas.",
    optionBButton: "Complete Detailed Brief",
  },
} as const;

export function RequestReceivedActions({ locale }: RequestReceivedActionsProps) {
  const copy = labels[locale];
  const [callRequested, setCallRequested] = useState(false);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <article className="surface-card grid gap-4">
        <div className="grid gap-2">
          <h2 className="text-xl font-semibold text-brand-primary">{copy.optionATitle}</h2>
          <p className="text-sm leading-6 text-body-secondary">{copy.optionADescription}</p>
        </div>
        {callRequested ? (
          <p className="rounded-2xl border border-brand-primary/15 bg-surface px-4 py-3 text-sm leading-6 text-body-secondary" role="status" aria-live="polite">
            {copy.optionASuccess}
          </p>
        ) : (
          <button className="button-primary w-fit" type="button" onClick={() => setCallRequested(true)}>
            {copy.optionAButton}
          </button>
        )}
      </article>

      <article className="surface-card grid gap-4">
        <div className="grid gap-2">
          <h2 className="text-xl font-semibold text-brand-primary">{copy.optionBTitle}</h2>
          <p className="text-sm leading-6 text-body-secondary">{copy.optionBDescription}</p>
        </div>
        <Link className="button-secondary w-fit" href={getLocalizedPath(locale, "/quotation")}>
          {copy.optionBButton}
        </Link>
      </article>
    </div>
  );
}

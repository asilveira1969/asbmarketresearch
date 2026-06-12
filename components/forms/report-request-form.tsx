"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/config/locales";
import { reportBudgetOptions, reportTimelineOptions } from "@/config/forms";
import { getLocalizedPath } from "@/lib/routes";

type ReportRequestFormProps = { locale: Locale };

const labels = {
  es: {
    title: "Detailed Project Brief",
    intro: "Comparte los detalles de tu proyecto para que podamos preparar una propuesta más precisa y definir los siguientes pasos.",
    fullName: "Nombre completo",
    company: "Empresa",
    email: "Email",
    phone: "Teléfono",
    country: "País / mercado",
    industry: "Industria",
    objective: "Objetivo del proyecto",
    competitors: "Competidores a analizar",
    timeline: "Plazo esperado",
    budget: "Presupuesto aproximado",
    notes: "Notas adicionales",
    submit: "Submit Detailed Brief",
    sending: "Enviando...",
    error: "Hubo un problema al enviar el formulario.",
  },
  en: {
    title: "Detailed Project Brief",
    intro: "Share the details of your project so we can prepare a more precise proposal and follow up with the next steps.",
    fullName: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone number",
    country: "Country / market",
    industry: "Industry",
    objective: "Project objective",
    competitors: "Competitors to analyze",
    timeline: "Expected timeline",
    budget: "Approximate budget",
    notes: "Additional notes",
    submit: "Submit Detailed Brief",
    sending: "Submitting...",
    error: "There was a problem submitting the form.",
  },
  pt: {
    title: "Detailed Project Brief",
    intro: "Compartilhe os detalhes do seu projeto para prepararmos uma proposta mais precisa e definirmos os próximos passos.",
    fullName: "Nome completo",
    company: "Empresa",
    email: "Email",
    phone: "Número de telefone",
    country: "País / mercado",
    industry: "Indústria",
    objective: "Objetivo do projeto",
    competitors: "Concorrentes a analisar",
    timeline: "Prazo esperado",
    budget: "Orçamento aproximado",
    notes: "Notas adicionais",
    submit: "Submit Detailed Brief",
    sending: "Enviando...",
    error: "Houve um problema ao enviar o formulário.",
  },
} as const;

export function ReportRequestForm({ locale }: ReportRequestFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const copy = labels[locale];

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError("");
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType: "report-request", locale, payload }),
    });
    setIsSubmitting(false);
    if (!response.ok) {
      setError(copy.error);
      return;
    }
    router.push(getLocalizedPath(locale, "/thank-you/report-request"));
  }

  return (
    <form action={onSubmit} className="surface-card grid gap-5">
      <h2 className="text-2xl font-semibold text-brand-primary">{copy.title}</h2>
      <p className="text-sm leading-6 text-body-secondary">{copy.intro}</p>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="form-label">{copy.fullName}</span>
          <input className="form-input" name="fullName" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.company}</span>
          <input className="form-input" name="company" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.email}</span>
          <input className="form-input" name="email" type="email" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.phone}</span>
          <input className="form-input" name="phoneNumber" type="tel" inputMode="tel" autoComplete="tel" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.country}</span>
          <input className="form-input" name="country" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.industry}</span>
          <input className="form-input" name="industry" required />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="form-label">{copy.objective}</span>
          <textarea className="form-textarea" name="objective" rows={4} required />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="form-label">{copy.competitors}</span>
          <textarea className="form-textarea" name="competitors" rows={3} />
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.timeline}</span>
          <select className="form-input" name="timeline" required defaultValue="">
            <option value="" disabled>
              -
            </option>
            {reportTimelineOptions[locale].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.budget}</span>
          <select className="form-input" name="budget" required defaultValue="">
            <option value="" disabled>
              -
            </option>
            {reportBudgetOptions[locale].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="form-label">{copy.notes}</span>
          <textarea className="form-textarea" name="notes" rows={4} />
        </label>
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button className="button-primary w-fit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? copy.sending : copy.submit}
      </button>
    </form>
  );
}

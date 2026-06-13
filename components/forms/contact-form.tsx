"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type ContactFormProps = { locale: Locale };

const labels = {
  es: {
    title: "Contacte a ASB Market Research",
    subtitle: "Solicite una demo, una cotización, haga una pregunta o converse sobre sus necesidades de investigación.",
    fullName: "Nombre completo",
    company: "Empresa / startup / proyecto",
    email: "Email",
    phone: "Número de teléfono (opcional)",
    message: "¿Qué información o investigación necesitas?",
    submit: "Enviar solicitud",
    sending: "Enviando...",
    error: "Hubo un problema al enviar el formulario.",
    confirmation: "Le responderemos dentro de las 24 horas posteriores a recibir su solicitud. Gracias por contactar a ASB Market Research.",
  },
  en: {
    title: "Contact ASB Market Research",
    subtitle: "Request a demo, quote, ask a question, or discuss your research needs.",
    fullName: "Full name",
    company: "Company / Startup / Project Name",
    email: "Email",
    phone: "Phone number (optional)",
    message: "What information or research do you need?",
    submit: "Send Request",
    sending: "Sending...",
    error: "There was a problem submitting the form.",
    confirmation: "We will respond within 24 hours of receiving your request. Thank you for contacting ASB Market Research.",
  },
  pt: {
    title: "Entre em contato com a ASB Market Research",
    subtitle: "Solicite uma demo, um orçamento, faça uma pergunta ou discuta suas necessidades de pesquisa.",
    fullName: "Nome completo",
    company: "Empresa / startup / projeto",
    email: "Email",
    phone: "Número de telefone (opcional)",
    message: "Que informações ou pesquisa você precisa?",
    submit: "Enviar solicitação",
    sending: "Enviando...",
    error: "Houve um problema ao enviar o formulário.",
    confirmation: "Responderemos dentro de 24 horas após receber sua solicitação. Obrigado por entrar em contato com a ASB Market Research.",
  },
} as const;

export function ContactForm({ locale }: ContactFormProps) {
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
      body: JSON.stringify({ formType: "contact", locale, payload }),
    });
    setIsSubmitting(false);
    if (!response.ok) {
      setError(copy.error);
      return;
    }
    router.push(getLocalizedPath(locale, "/request-received"));
  }

  return (
    <form action={onSubmit} className="surface-card grid gap-5">
      <h2 className="text-2xl font-semibold text-brand-primary">{copy.title}</h2>
      <p className="text-sm leading-6 text-body-secondary">{copy.subtitle}</p>
      <label className="grid gap-2">
        <span className="form-label">{copy.fullName}</span>
        <input className="form-input" name="fullName" autoComplete="name" required />
      </label>
      <label className="grid gap-2">
        <span className="form-label">{copy.company}</span>
        <input className="form-input" name="company" autoComplete="organization" />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="form-label">{copy.email}</span>
          <input className="form-input" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">{copy.phone}</span>
          <input className="form-input" name="phone" type="tel" inputMode="tel" autoComplete="tel" />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="form-label">{copy.message}</span>
        <textarea className="form-textarea" name="message" rows={5} required />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button className="button-primary w-fit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? copy.sending : copy.submit}
      </button>
      <p className="text-sm leading-6 text-body-secondary">{copy.confirmation}</p>
    </form>
  );
}

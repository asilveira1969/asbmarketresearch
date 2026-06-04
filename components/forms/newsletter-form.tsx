"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/config/locales";

type NewsletterFormProps = { locale: Locale };
const labels = {
  es: {
    title: "Suscripción",
    name: "Nombre",
    email: "Email",
    industryLabel: "INDUSTRIA",
    industryPlaceholder: "Industria que le interesa",
    consent: "Acepto recibir novedades y comunicaciones relacionadas.",
    submit: "Suscribirme",
    sending: "Enviando...",
    error: "Hubo un problema al enviar el formulario.",
  },
  en: {
    title: "Subscription",
    name: "Name",
    email: "Email",
    industryLabel: "INDUSTRY",
    industryPlaceholder: "Industry you are interested in",
    consent: "I agree to receive updates and related communications.",
    submit: "Subscribe",
    sending: "Submitting...",
    error: "There was a problem submitting the form.",
  },
  pt: {
    title: "Inscrição",
    name: "Nome",
    email: "Email",
    industryLabel: "SETOR",
    industryPlaceholder: "Setor de interesse",
    consent: "Concordo em receber novidades e comunicações relacionadas.",
    submit: "Inscrever-me",
    sending: "Enviando...",
    error: "Houve um problema ao enviar o formulário.",
  },
} as const;

export function NewsletterForm({ locale }: NewsletterFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const copy = labels[locale];

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true); setError("");
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/forms", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ formType: "newsletter", locale, payload }) });
    setIsSubmitting(false);
    if (!response.ok) { setError(copy.error); return; }
    router.push(`/${locale}/thank-you/newsletter`);
  }

  return (
      <form action={onSubmit} className="surface-card grid gap-5">
      <h2 className="text-2xl font-semibold text-brand-primary">{copy.title}</h2>
      <label className="grid gap-2"><span className="form-label">{copy.name}</span><input className="form-input" name="name" required /></label>
      <label className="grid gap-2"><span className="form-label">{copy.email}</span><input className="form-input" name="email" type="email" required /></label>
      <label className="grid gap-2"><span className="form-label">{copy.industryLabel}</span><input className="form-input" name="industry" type="text" placeholder={copy.industryPlaceholder} /></label>
      <label className="flex items-start gap-3 text-sm text-body-secondary"><input className="mt-1" name="consent" type="checkbox" required /><span>{copy.consent}</span></label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button className="button-primary w-fit" type="submit" disabled={isSubmitting}>{isSubmitting ? copy.sending : copy.submit}</button>
    </form>
  );
}

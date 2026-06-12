"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/config/locales";
import { getLocalizedPath } from "@/lib/routes";

type ContactFormProps = { locale: Locale };

const labels = {
  es: {
    title: "Formulario de contacto",
    fullName: "Nombre completo",
    company: "Empresa / startup / proyecto",
    email: "Email",
    phone: "Número de teléfono (opcional)",
    message: "¿Qué información o investigación necesitas?",
    submit: "Request a Quote",
    sending: "Enviando...",
    error: "Hubo un problema al enviar el formulario.",
  },
  en: {
    title: "Contact form",
    fullName: "Full name",
    company: "Company / Startup / Project Name",
    email: "Email",
    phone: "Phone number (optional)",
    message: "What information or research do you need?",
    submit: "Request a Quote",
    sending: "Sending...",
    error: "There was a problem submitting the form.",
  },
  pt: {
    title: "Formulário de contato",
    fullName: "Nome completo",
    company: "Empresa / startup / projeto",
    email: "Email",
    phone: "Número de telefone (opcional)",
    message: "Que informações ou pesquisa você precisa?",
    submit: "Request a Quote",
    sending: "Enviando...",
    error: "Houve um problema ao enviar o formulário.",
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
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/config/locales";

type ContactFormProps = { locale: Locale };
const labels = {
  es: { title: "Formulario de contacto", name: "Nombre completo", email: "Email", phone: "Número de teléfono", company: "Empresa", message: "Mensaje", submit: "Enviar consulta", sending: "Enviando...", error: "Hubo un problema al enviar el formulario." },
  en: { title: "Contact form", name: "Full name", email: "Email", phone: "Phone number", company: "Company", message: "Message", submit: "Send inquiry", sending: "Sending...", error: "There was a problem submitting the form." },
  pt: { title: "Formulário de contato", name: "Nome completo", email: "Email", phone: "Número de telefone", company: "Empresa", message: "Mensagem", submit: "Enviar consulta", sending: "Enviando...", error: "Houve um problema ao enviar o formulário." },
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
    const response = await fetch("/api/forms", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ formType: "contact", locale, payload }) });
    setIsSubmitting(false);
    if (!response.ok) { setError(copy.error); return; }
    router.push(`/${locale}/thank-you/contact`);
  }

  return (
    <form action={onSubmit} className="surface-card grid gap-5">
      <h2 className="text-2xl font-semibold text-brand-primary">{copy.title}</h2>
      <label className="grid gap-2"><span className="form-label">{copy.name}</span><input className="form-input" name="fullName" required /></label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2"><span className="form-label">{copy.email}</span><input className="form-input" name="email" type="email" required /></label>
        <label className="grid gap-2"><span className="form-label">{copy.phone}</span><input className="form-input" name="phone" type="tel" /></label>
      </div>
      <label className="grid gap-2"><span className="form-label">{copy.company}</span><input className="form-input" name="company" /></label>
      <label className="grid gap-2"><span className="form-label">{copy.message}</span><textarea className="form-textarea" name="message" rows={5} required /></label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button className="button-primary w-fit" type="submit" disabled={isSubmitting}>{isSubmitting ? copy.sending : copy.submit}</button>
    </form>
  );
}

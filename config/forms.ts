import type { Locale } from "@/config/locales";

export const reportTimelineOptions: Record<Locale, string[]> = {
  es: ["1-2 semanas", "3-4 semanas", "5+ semanas"],
  en: ["1-2 weeks", "3-4 weeks", "5+ weeks"],
  pt: ["1-2 semanas", "3-4 semanas", "5+ semanas"],
};

export const reportBudgetOptions: Record<Locale, string[]> = {
  es: ["Menos de USD 2.000", "USD 2.000 - 5.000", "USD 5.000 - 10.000", "Más de USD 10.000"],
  en: ["Under USD 2,000", "USD 2,000 - 5,000", "USD 5,000 - 10,000", "Over USD 10,000"],
  pt: ["Menos de USD 2.000", "USD 2.000 - 5.000", "USD 5.000 - 10.000", "Mais de USD 10.000"],
};

import { defaultLocale, locales } from "@/config/locales";

export const siteConfig = {
  name: "ASB Market Research",
  tagline: "Structured Insights for Better Decisions",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.asbmarketresearch.com",
  defaultLocale,
  locales,
  defaultDescription:
    "ASB Market Research provides an agentic market intelligence workstation for companies, associations, consultants, and strategy teams that need structured research workflows and decision-ready reports.",
  email: "asb.marketresearch@gmail.com",
  linkedinUrl: "https://www.linkedin.com/company/asb-market-research/",
  founderName: "Anastacio Silveira",
  legalName: "ASB Market Research",
  analyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
} as const;

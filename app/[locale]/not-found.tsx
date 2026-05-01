import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { defaultLocale } from "@/config/locales";

export default function LocaleNotFound() {
  return (
    <>
      <PageHeader title="Page not found" description="The requested localized page could not be found." />
      <Section><Link className="button-primary" href={`/${defaultLocale}`}>Return to site</Link></Section>
    </>
  );
}

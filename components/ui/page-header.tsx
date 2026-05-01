import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <Section className="border-b border-line bg-canvas !py-3 md:!py-4">
      <div className="max-w-3xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-1 text-display-sm text-brand-primary">{title}</h1>
        {description ? <p className="mt-2 text-base leading-7 text-body-secondary md:text-lg md:leading-8">{description}</p> : null}
        {children}
      </div>
    </Section>
  );
}

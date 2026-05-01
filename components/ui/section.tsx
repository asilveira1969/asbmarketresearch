import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export function Section({ children, className, innerClassName, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", innerClassName)}>{children}</div>
    </section>
  );
}

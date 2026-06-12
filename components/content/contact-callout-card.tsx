import type { ReactNode } from "react";
import type { Locale } from "@/config/locales";
import { cn } from "@/lib/utils";

type ContactLink = {
  href: string;
  label: string;
  ariaLabel: string;
  external?: boolean;
};

type ContactCalloutCardProps = {
  locale: Locale;
  className?: string;
  note?: string;
};

const labels = {
  es: {
    callTitle: "Llámanos",
    whatsappTitle: "Escríbenos",
    note: "¿Prefieres hablar directamente? Llámanos o escríbenos por WhatsApp para conversar sobre tus necesidades de investigación y solicitar una cotización personalizada.",
  },
  en: {
    callTitle: "Call us",
    whatsappTitle: "Message us",
    note: "Prefer to speak directly? Call or WhatsApp us to discuss your research requirements and request a custom quote.",
  },
  pt: {
    callTitle: "Ligue para nós",
    whatsappTitle: "Fale conosco",
    note: "Prefere falar diretamente? Ligue ou envie uma mensagem no WhatsApp para conversar sobre suas necessidades de pesquisa e solicitar um orçamento personalizado.",
  },
} as const;

const phoneLinks: ContactLink[] = [
  {
    href: "tel:+13057840514",
    label: "+1 (305) 784-0514",
    ariaLabel: "Call ASB Market Research at +1 (305) 784-0514",
  },
  {
    href: "tel:+59897285929",
    label: "+598 97 285-929",
    ariaLabel: "Call ASB Market Research at +598 97 285-929",
  },
];

const whatsappLinks: ContactLink[] = [
  {
    href: "https://wa.me/13057840514",
    label: "+1 (305) 784-0514",
    ariaLabel: "Message ASB Market Research on WhatsApp at +1 (305) 784-0514",
    external: true,
  },
  {
    href: "https://wa.me/59897285929",
    label: "+598 97 285-929",
    ariaLabel: "Message ASB Market Research on WhatsApp at +598 97 285-929",
    external: true,
  },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className="h-10 w-10 md:h-11 md:w-11">
      <path
        d="M25.1 14.7c1.1-1.1 2.9-1.1 4 0l4.8 4.8c1.1 1.1 1.1 2.9 0 4l-2.6 2.6c-.9.9-1.1 2.2-.6 3.4 2 3.9 5.1 7.6 8.9 10.3 1.2.8 2.7.7 3.8-.4l2.4-2.4c1.1-1.1 2.9-1.1 4 0l4.8 4.8c1.1 1.1 1.1 2.9 0 4l-2.3 2.3c-1.3 1.3-3 1.9-4.8 1.7-7.3-.8-15.3-5.9-21.8-12.4-6.5-6.5-11.6-14.5-12.4-21.8-.2-1.8.4-3.6 1.7-4.8l2.3-2.3z"
        fill="currentColor"
      />
      <path d="M39 15c4.8 1.2 8.6 5 9.8 9.8" fill="none" stroke="#e4002b" strokeLinecap="round" strokeWidth="3.2" />
      <path d="M42.7 10.8c7.1 1.8 12.6 7.3 14.4 14.4" fill="none" stroke="#e4002b" strokeLinecap="round" strokeWidth="3.2" />
      <path d="M46.7 6.7c9 2.3 16 9.3 18.3 18.3" fill="none" stroke="#e4002b" strokeLinecap="round" strokeWidth="3.2" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className="h-10 w-10 md:h-11 md:w-11">
      <path
        d="M16 17c0-3.3 2.7-6 6-6h20c8.8 0 16 7.2 16 16v1c0 8.8-7.2 16-16 16H29l-11 8 3.2-8H22c-3.3 0-6-2.7-6-6z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <circle cx="25" cy="28" r="2.7" fill="#e4002b" />
      <circle cx="33" cy="28" r="2.7" fill="#e4002b" />
      <circle cx="41" cy="28" r="2.7" fill="#e4002b" />
    </svg>
  );
}

function ContactMethod({
  icon,
  title,
  links,
}: {
  icon: ReactNode;
  title: string;
  links: ContactLink[];
}) {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-[#10224a] md:h-20 md:w-20">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-medium text-brand-primary md:text-xl">{title}</h3>
        <div className="mt-2 grid gap-1 text-base leading-6 font-normal text-ink md:text-lg md:leading-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.ariaLabel}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="block text-pretty transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContactCalloutCard({ locale, className, note: customNote }: ContactCalloutCardProps) {
  const copy = labels[locale];
  const note = customNote ?? copy.note;

  return (
    <div className={cn("surface-card w-full !p-6 md:!p-8", className)}>
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:items-start md:gap-6">
        <ContactMethod icon={<PhoneIcon />} title={copy.callTitle} links={phoneLinks} />
        <div className="hidden md:block self-stretch bg-line" aria-hidden="true" />
        <ContactMethod icon={<MessageIcon />} title={copy.whatsappTitle} links={whatsappLinks} />
      </div>
      <p className="mt-6 max-w-4xl text-base font-normal leading-7 text-ink md:text-lg md:leading-8">{note}</p>
    </div>
  );
}

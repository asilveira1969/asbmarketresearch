import type { Metadata } from "next";
import { cookies } from "next/headers";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { defaultLocale, isLocale } from "@/config/locales";
import { siteConfig } from "@/config/site";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  verification: {
    google: "rP9uSG__9-NVBuhNbvVEX4CR4vINX90V2JpvyS1KPvE",
  },
  };
  

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const locale = isLocale(localeCookie) ? localeCookie : defaultLocale;

  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <body className="min-h-full bg-canvas text-ink antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

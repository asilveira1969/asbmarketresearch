"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site";

export function GoogleAnalytics() {
  if (!siteConfig.analyticsId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analyticsId}`} strategy="afterInteractive" />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.analyticsId}');
        `}
      </Script>
    </>
  );
}

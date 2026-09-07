"use client";
import { useEffect, useRef } from "react";
declare global { interface Window { turnstile?: { render: (element: HTMLElement, options: Record<string, unknown>) => void } } }
export function Turnstile({ onToken, onError }: { onToken: (token: string) => void; onError: () => void }) {
  const node = useRef<HTMLDivElement>(null); const rendered = useRef(false);
  useEffect(() => { const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY; if (!sitekey || !node.current) { onError(); return; } const render = () => { if (!node.current || rendered.current || !window.turnstile) return; rendered.current = true; window.turnstile.render(node.current, { sitekey, callback: (token: string) => onToken(token), "error-callback": onError, "expired-callback": onError }); }; const existing = document.querySelector<HTMLScriptElement>('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"]'); if (window.turnstile) render(); else if (existing) existing.addEventListener("load", render, { once: true }); else { const script = document.createElement("script"); script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; script.async = true; script.defer = true; script.addEventListener("load", render, { once: true }); script.addEventListener("error", onError, { once: true }); document.head.appendChild(script); } }, [onError, onToken]);
  return <div ref={node} />;
}
export function Honeypot() { return <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden"><input name="website_url" tabIndex={-1} autoComplete="off" /></div>; }

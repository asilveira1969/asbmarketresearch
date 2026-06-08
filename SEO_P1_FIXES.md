# SEO P1 Fixes - ASB Market Research

Fecha: `2026-06-05`

## Scope

This document covers only the P1 issues identified in [SEO_PRELAUNCH_AUDIT.md](./SEO_PRELAUNCH_AUDIT.md):
- global `og:image` and `twitter:image`
- duplicate titles
- sitemap coverage for `agentic-market-intelligence-system`
- robots.txt confirmation

No visual design, layout, CTA, or marketing copy was changed.

## Files Modified

- [lib/metadata.ts](/f:/WORK/ASB%20Market%20Research/lib/metadata.ts)
- [app/[locale]/page.tsx](/f:/WORK/ASB%20Market%20Research/app/[locale]/page.tsx)
- [app/[locale]/pricing/page.tsx](/f:/WORK/ASB%20Market%20Research/app/[locale]/pricing/page.tsx)
- [app/[locale]/agentic-market-intelligence-system/page.tsx](/f:/WORK/ASB%20Market%20Research/app/[locale]/agentic-market-intelligence-system/page.tsx)
- [app/[locale]/insights/page.tsx](/f:/WORK/ASB%20Market%20Research/app/[locale]/insights/page.tsx)
- [app/[locale]/services/[slug]/page.tsx](/f:/WORK/ASB%20Market%20Research/app/[locale]/services/[slug]/page.tsx)
- [app/[locale]/sample-reports/[slug]/page.tsx](/f:/WORK/ASB%20Market%20Research/app/[locale]/sample-reports/[slug]/page.tsx)
- [app/[locale]/[...slug]/page.tsx](/f:/WORK/ASB%20Market%20Research/app/[locale]/[...slug]/page.tsx)
- [app/sitemap.ts](/f:/WORK/ASB%20Market%20Research/app/sitemap.ts)

## Changes Implemented

### 1. Global social images

Implemented global social preview images in the shared metadata helper:
- `og:image`
- `twitter:image`

Implementation details:
- Added a shared social image reference in [lib/metadata.ts](/f:/WORK/ASB%20Market%20Research/lib/metadata.ts)
- Reused an existing site asset:
  - `/media/market-research-workstation-workflow.png`
- Added image metadata so the preview is available across the site without changing the visual UI

Effect:
- LinkedIn and other crawlers now receive a real social image in the initial HTML
- The change applies to every route that uses `buildPageMetadata()`

### 2. Duplicate titles

Added support for `absoluteTitle` in [lib/metadata.ts](/f:/WORK/ASB%20Market%20Research/lib/metadata.ts) so pages that already manage their own brand placement do not get the root template appended a second time.

Resolved the duplicate-title cases by using locale-aware metadata titles for:
- Home
- Insights index
- Newsletter
- Agentic Market Intelligence System
- Agentic Research Workstation
- Premium food category benchmark sample report

Effect:
- Titles are now unique across the production sitemap
- Brand consistency is preserved
- The visible page headings were not changed

### 3. Sitemap

Updated [app/sitemap.ts](/f:/WORK/ASB%20Market%20Research/app/sitemap.ts) to include:
- `/agentic-market-intelligence-system`

Because the sitemap is locale-aware, this now expands to:
- `/en/agentic-market-intelligence-system`
- `/es/agentic-market-intelligence-system`
- `/pt/agentic-market-intelligence-system`

### 4. Robots

No code change was required in [app/robots.ts](/f:/WORK/ASB%20Market%20Research/app/robots.ts).

Validated in production:
- `robots.txt` still references the sitemap at `https://www.asbmarketresearch.com/sitemap.xml`
- `host` remains set correctly

## URLs Affected

### Global

- `/en`
- `/es`
- `/pt`
- Every locale page that uses [lib/metadata.ts](/f:/WORK/ASB%20Market%20Research/lib/metadata.ts)

### Sitemap additions

- `/en/agentic-market-intelligence-system`
- `/es/agentic-market-intelligence-system`
- `/pt/agentic-market-intelligence-system`

### Title updates by route

#### Home

- EN: `ASB Market Research | Market research that becomes usable intelligence`
- ES: `ASB Market Research | Investigación de mercado que se convierte en inteligencia útil`
- PT: `ASB Market Research | Pesquisa de mercado que se transforma em inteligência útil`

#### Insights index

- EN: `Insights | ASB Market Research`
- ES: `Insights editoriales | ASB Market Research`
- PT: `Insights editoriais | ASB Market Research`

#### Newsletter

- EN: `Newsletter | ASB Market Research`
- ES: `Boletín | ASB Market Research`
- PT: `Boletim | ASB Market Research`

#### Agentic Market Intelligence System

- EN: `Agentic Market Intelligence System | ASB Market Research`
- ES: `Sistema Agéntico de Inteligencia de Mercado | ASB Market Research`
- PT: `Sistema Agêntico de Inteligência de Mercado | ASB Market Research`

#### Agentic Research Workstation

- EN: `Agentic Research Workstation | ASB Market Research`
- ES: `Workstation agéntica de investigación | ASB Market Research`
- PT: `Workstation agêntica de pesquisa | ASB Market Research`

#### Premium food category benchmark sample report

- EN: `Premium food category benchmark | ASB Market Research`
- ES: `Benchmark de categoría premium food | ASB Market Research`
- PT: `Benchmark da categoria premium food | ASB Market Research`

## Validation Final

### Build

- `npm run build` completed successfully
- TypeScript passed during the production build
- Production route generation completed without errors

### Production HTML checks

Validated against a production server running from the build:
- `og:image` is present on `/en`, `/es`, and `/pt`
- `twitter:image` is present on `/en`, `/es`, and `/pt`
- `robots.txt` references `sitemap.xml`
- `sitemap.xml` includes the agentic market intelligence system for all three locales

### Title inventory sweep

Production crawl results:
- `81` URLs checked
- `81` unique titles
- `0` duplicate titles

Sample resolved titles from the production sweep:
- `/es` -> `ASB Market Research | Investigación de mercado que se convierte en inteligencia útil`
- `/en` -> `ASB Market Research | Market research that becomes usable intelligence`
- `/pt` -> `ASB Market Research | Pesquisa de mercado que se transforma em inteligência útil`
- `/es/insights` -> `Insights editoriales | ASB Market Research`
- `/en/insights` -> `Insights | ASB Market Research`
- `/pt/insights` -> `Insights editoriais | ASB Market Research`
- `/es/newsletter` -> `Boletín | ASB Market Research`
- `/en/newsletter` -> `Newsletter | ASB Market Research`
- `/pt/newsletter` -> `Boletim | ASB Market Research`
- `/es/agentic-market-intelligence-system` -> `Sistema Agéntico de Inteligencia de Mercado | ASB Market Research`
- `/en/agentic-market-intelligence-system` -> `Agentic Market Intelligence System | ASB Market Research`
- `/pt/agentic-market-intelligence-system` -> `Sistema Agêntico de Inteligência de Mercado | ASB Market Research`
- `/es/services/agentic-research-workstation` -> `Workstation agéntica de investigación | ASB Market Research`
- `/en/services/agentic-research-workstation` -> `Agentic Research Workstation | ASB Market Research`
- `/pt/services/agentic-research-workstation` -> `Workstation agêntica de pesquisa | ASB Market Research`

## Final Title Inventory

Below is the resolved title inventory by route group. The production sweep verified every URL in the sitemap, including dynamic content pages.

### Static pages

| Route | EN | ES | PT |
|---|---|---|---|
| `/` | `ASB Market Research | Market research that becomes usable intelligence` | `ASB Market Research | Investigación de mercado que se convierte en inteligencia útil` | `ASB Market Research | Pesquisa de mercado que se transforma em inteligência útil` |
| `/about` | `Who we are | ASB Market Research` | `Quiénes somos | ASB Market Research` | `Quem somos | ASB Market Research` |
| `/services` | `Services | ASB Market Research` | `Servicios | ASB Market Research` | `Serviços | ASB Market Research` |
| `/methodology` | `Methodology | ASB Market Research` | `Metodología | ASB Market Research` | `Metodologia | ASB Market Research` |
| `/sample-reports` | `Sample Reports | ASB Market Research` | `Reportes de muestra | ASB Market Research` | `Relatórios de amostra | ASB Market Research` |
| `/pricing` | `Pricing and Services | ASB Market Research` | `Precios y servicios | ASB Market Research` | `Preços e serviços | ASB Market Research` |
| `/insights` | `Insights | ASB Market Research` | `Insights editoriales | ASB Market Research` | `Insights editoriais | ASB Market Research` |
| `/contact` | `Contact | ASB Market Research` | `Contacto | ASB Market Research` | `Contato | ASB Market Research` |
| `/quotation` | `Request a Quote | ASB Market Research` | `Cotización | ASB Market Research` | `Cotação | ASB Market Research` |
| `/newsletter` | `Newsletter | ASB Market Research` | `Boletín | ASB Market Research` | `Boletim | ASB Market Research` |
| `/privacy-policy` | `Privacy Policy | ASB Market Research` | `Política de privacidad | ASB Market Research` | `Política de privacidade | ASB Market Research` |
| `/terms` | `Terms | ASB Market Research` | `Términos | ASB Market Research` | `Termos | ASB Market Research` |
| `/agentic-market-intelligence-system` | `Agentic Market Intelligence System | ASB Market Research` | `Sistema Agéntico de Inteligencia de Mercado | ASB Market Research` | `Sistema Agêntico de Inteligência de Mercado | ASB Market Research` |

### Thank-you pages

| Route | EN | ES | PT |
|---|---|---|---|
| `/thank-you/contact` | `Thank you for getting in touch | ASB Market Research` | `Gracias por contactarnos | ASB Market Research` | `Obrigado pelo contato | ASB Market Research` |
| `/thank-you/newsletter` | `Subscription confirmed | ASB Market Research` | `Suscripción confirmada | ASB Market Research` | `Inscrição confirmada | ASB Market Research` |
| `/thank-you/report-request` | `Request received | ASB Market Research` | `Solicitud recibida | ASB Market Research` | `Solicitação recebida | ASB Market Research` |

### Service detail pages

| Route | EN | ES | PT |
|---|---|---|---|
| `/services/industry-product-reports` | `Industry & Product Reports | ASB Market Research` | `Reportes de industria y producto | ASB Market Research` | `Relatórios de indústria e produto | ASB Market Research` |
| `/services/custom-research-studies` | `Custom Research Studies | ASB Market Research` | `Estudios de investigación a medida | ASB Market Research` | `Estudos de pesquisa sob medida | ASB Market Research` |
| `/services/monthly-market-briefings` | `Monthly Market Briefings | ASB Market Research` | `Briefings mensuales de mercado | ASB Market Research` | `Briefings mensais de mercado | ASB Market Research` |
| `/services/agentic-research-workstation` | `Agentic Research Workstation | ASB Market Research` | `Workstation agéntica de investigación | ASB Market Research` | `Workstation agêntica de pesquisa | ASB Market Research` |

### Sample report detail pages

| Route | EN | ES | PT |
|---|---|---|---|
| `/sample-reports/latam-b2b-software-expansion-snapshot` | `LatAm B2B software expansion snapshot | ASB Market Research` | `Expansion B2B software en Latam | ASB Market Research` | `Panorama de expansão de software B2B na América Latina | ASB Market Research` |
| `/sample-reports/premium-food-category-benchmark` | `Premium food category benchmark | ASB Market Research` | `Benchmark de categoría premium food | ASB Market Research` | `Benchmark da categoria premium food | ASB Market Research` |
| `/sample-reports/investor-market-scoping-note` | `Investor market scoping note | ASB Market Research` | `Nota de alcance de mercado para inversion | ASB Market Research` | `Nota de escopo de mercado para investimento | ASB Market Research` |

### Insights detail pages

| Route | EN | ES | PT |
|---|---|---|---|
| `/insights/why-market-reports-to-intelligence-systems-matters` | `Why Market Reports To Intelligence Systems Matters | ASB Market Research` | `Por qué importan los reportes de mercado y los sistemas de inteligencia | ASB Market Research` | `Por que relatórios de mercado e sistemas de inteligência importam | ASB Market Research` |
| `/insights/how-to-read-a-new-market` | `How To Read A New Market Without Losing Clarity | ASB Market Research` | `Como Leer Un Mercado Nuevo Sin Perder Claridad | ASB Market Research` | `Como Ler Um Mercado Novo Sem Perder Clareza | ASB Market Research` |
| `/insights/how-to-request-a-useful-research-report` | `How To Request A Useful Research Report | ASB Market Research` | `Como Pedir Un Reporte Util De Investigacion | ASB Market Research` | `Como Pedir Um Relatorio Util De Pesquisa | ASB Market Research` |
| `/insights/why-company-context-matters-for-agents` | `Why Company Context Matters In The Age Of Agents | ASB Market Research` | `Por qué el contexto de la empresa es clave en la era de los agentes | ASB Market Research` | `Por que o contexto da empresa é fundamental na era dos agentes | ASB Market Research` |

## Summary

The P1 items are now closed:
- social previews are available globally
- duplicate titles were resolved
- the sitemap includes the agentic system in all locales
- robots.txt still points to the sitemap

The production sweep confirms the site now has unique titles across all checked URLs.


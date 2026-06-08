# SEO Prelaunch Audit - ASB Market Research

Fecha de auditoría: `2026-06-05`

Alcance:
- Auditoría SEO y de producción antes del lanzamiento.
- Revisión de `http://localhost:3053` en desarrollo y build de producción servido localmente.
- Cobertura de `EN`, `ES` y `PT`.
- Sin cambios de diseño, colores, tipografía, layout, CTA o copy de marketing.

## Resumen ejecutivo

El sitio está bien encaminado para lanzamiento y la base técnica es sólida:
- `Best Practices` llegó a `100` en todos los idiomas en producción.
- `SEO` llegó a `100` en todos los idiomas en producción.
- `Accessibility` se mantuvo estable en `96` en todos los idiomas.
- `hreflang`, `canonical` y `robots.txt` están implementados correctamente.

Los hallazgos que más importan antes de publicar son:
1. Faltan imágenes Open Graph/Twitter para las páginas clave, así que la previsualización en LinkedIn queda incompleta.
2. Hay varios PDFs referenciados por el sitio que todavía no existen o devuelven `404`.
3. Hay duplicación de marca en algunos `<title>` por combinación de `title.template` global + títulos manuales.
4. El sitemap omite una ruta importante: `/[locale]/agentic-market-intelligence-system`.

## Metodología

- Lighthouse fue ejecutado en:
  - desarrollo: `http://localhost:3053/en`, `/es`, `/pt`
  - producción: build local con `npm run build` + servidor `npm run start`
- La auditoría técnica se hizo revisando el código fuente en:
  - `app/layout.tsx`
  - `app/[locale]/layout.tsx`
  - `lib/metadata.ts`
  - `lib/structured-data.ts`
  - `app/sitemap.ts`
  - `app/robots.ts`
  - `content/*`
  - `data/company.ts`
  - `public/pdfs/README.md`

## Fase 1 - Lighthouse en producción

### Resultados completos

| Locale | Entorno | Performance | Accessibility | Best Practices | SEO | LCP | TBT | TTI |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| EN | Dev | 92 | 96 | 100 | 100 | 1.2 s | 360 ms | 7.5 s |
| ES | Dev | 80 | 96 | 100 | 100 | 4.1 s | 300 ms | 9.0 s |
| PT | Dev | 88 | 96 | 100 | 100 | 2.5 s | 380 ms | 8.9 s |
| EN | Prod | 94 | 96 | 100 | 100 | 1.0 s | 120 ms | 3.7 s |
| ES | Prod | 98 | 96 | 100 | 100 | 2.3 s | 100 ms | 3.6 s |
| PT | Prod | 97 | 96 | 100 | 100 | 2.2 s | 150 ms | 3.5 s |

### Comparación dev vs producción

| Locale | Performance | Accessibility | Best Practices | SEO | Lectura |
|---|---:|---:|---:|---:|---|
| EN | +2 | = | = | = | Mejora leve; producción ya es muy sólida. |
| ES | +18 | = | = | = | La mayor mejora; dev penalizaba fuerte la experiencia. |
| PT | +9 | = | = | = | Mejora clara; producción deja el sitio en una banda sana. |

Observaciones:
- La mejora de producción frente a desarrollo es normal y esperable en Next.js.
- `Best Practices` y `SEO` permanecen en `100` en ambos entornos.
- La variación más notoria está en `Performance`, especialmente en `ES`.
- El `Accessibility` score no cambia entre entornos y se mantiene en `96`.

### Hallazgos de performance relevantes

- El `LCP` en producción ya es aceptable en los tres idiomas.
- La página `EN` presenta el `LCP` más rápido entre los locales, con `1.0 s`.
- En producción, el `TBT` bajó de forma notable respecto a dev.
- El principal costo restante está en imágenes y en el tiempo de render, no en fallos estructurales graves.

### Hallazgos de accesibilidad relevantes

- El único hallazgo numérico repetido es `target-size`.
- El problema apunta a los enlaces telefónicos del footer en `components/layout/footer.tsx`.
- No se modificó nada porque este documento es solo auditoría.

## Fase 2 - SEO técnico

### A. Metadata

#### Estado general

La base de metadata está bien armada:
- `title` presente en todas las páginas revisadas.
- `description` presente y localizada.
- `canonical` correcto por idioma.
- `alternates.languages` con `en`, `es`, `pt`.
- `x-default` presente y apuntando al locale por defecto (`es`).
- `openGraph` presente.
- `twitter` presente.

#### Problema principal de títulos

Hay duplicación de marca en algunos títulos porque el proyecto combina:
- `title.template: "%s | ASB Market Research"` en `app/layout.tsx`
- títulos que ya incluyen `ASB Market Research` manualmente en varias páginas

Páginas afectadas:
- `app/[locale]/page.tsx`
- `app/[locale]/pricing/page.tsx`
- `app/[locale]/agentic-market-intelligence-system/page.tsx`

Efecto:
- El `<title>` final termina repitiendo `ASB Market Research` dos veces en algunas rutas.
- Esto no rompe el sitio, pero sí debilita la presentación SEO y la legibilidad del snippet.

#### Revisión por idioma

| Locale | Canonical | Description | Hreflang | Open Graph | Twitter | Estado |
|---|---|---|---|---|---|---|
| EN | Correcto | Presente | Correcto | Presente, sin imagen | Presente, sin imagen | Bueno, con observación |
| ES | Correcto | Presente | Correcto | Presente, sin imagen | Presente, sin imagen | Bueno, con observación |
| PT | Correcto | Presente | Correcto | Presente, sin imagen | Presente, sin imagen | Bueno, con observación |

#### Qué falta en metadata

- `og:image` no existe.
- `twitter:image` no existe.
- No se declara `robots` a nivel de metadata de página, pero no hay señales de bloqueo y el sitio queda indexable por defecto.

### B. Internacionalización

#### Verificación

- `hreflang` para `en`, `es` y `pt`: correcto.
- `x-default`: correcto.
- Enlaces cruzados entre idiomas: correctos.

La navegación de idiomas usa enlaces reales y crawlables en `components/layout/language-switcher.tsx`, por lo que Google puede seguirlos sin depender de JavaScript-only navigation.

#### Errores detectados

- No se detectó un error de `hreflang`.
- La única decisión que podría revisarse en el futuro es si `x-default` debe seguir apuntando a `es` o a otra ruta, pero hoy es coherente con el locale por defecto.

### C. Sitemap

#### Estado general

- `sitemap.xml` existe.
- Las páginas estáticas principales están incluidas.
- Las rutas de servicios, insights y sample reports están incluidas.
- Las variantes por idioma `EN`, `ES` y `PT` aparecen correctamente.

#### Problema detectado

La ruta siguiente no aparece en el sitemap:
- `/[locale]/agentic-market-intelligence-system`

Esto es importante porque:
- la página existe,
- es indexable,
- y forma parte de la arquitectura principal del sitio.

#### Conclusión del sitemap

- `EN`, `ES` y `PT` están bien representados en general.
- El sitemap necesita incorporar la página del sistema agéntico antes del lanzamiento.

### D. Robots

#### Estado general

`robots.txt` está bien configurado:
- permite rastreo general,
- declara `sitemap.xml`,
- declara `host`,
- no introduce bloqueos accidentales.

#### Conclusión

- No hay problema de indexación en `robots.txt`.
- La configuración es apta para lanzamiento.

## Fase 3 - Structured Data

### Esquemas encontrados

| Schema | Existe | Dónde | Estado |
|---|---|---|---|
| Organization | Sí | `app/[locale]/layout.tsx` vía `getOrganizationJsonLd()` | Correcto |
| WebSite | Sí | `app/[locale]/layout.tsx` vía `getWebsiteJsonLd()` | Correcto |

### Esquemas que faltan

| Schema | Existe hoy | Prioridad | Observación |
|---|---|---|---|
| ProfessionalService | No | P2 | Muy recomendable para las páginas de servicios. |
| BreadcrumbList | Helper sí, inyección no | P2 | Ya existe la función, pero no se está usando en el render. |
| Article | No | P2 | Recomendable para `insights`. |
| Report | No | P2 | Recomendable para `sample-reports`. |

### Prioridad de implementación sugerida

1. `ProfessionalService`
2. `Report`
3. `Article`
4. `BreadcrumbList`

Razón:
- Las páginas de servicios y reportes son las más cercanas a intención comercial y se benefician más de schema adicional.
- `BreadcrumbList` es útil, pero no es el más urgente comparado con las entidades de negocio y contenido.

## Fase 4 - PDFs

### PDFs presentes en `public/pdfs`

| Archivo | URL prevista | Relación actual | SEO-friendly | Observación |
|---|---|---|---|---|
| `public/pdfs/reports/executive-report.pdf` | `/pdfs/reports/executive-report.pdf` | `sampleReports[0]` | Parcial | Nombre genérico; funciona, pero no describe claramente el contenido final. |
| `public/pdfs/reports/uruguay-economic-profile-2024-2025.pdf` | `/pdfs/reports/uruguay-economic-profile-2024-2025.pdf` | `sampleReports[1]` | Parcial | Nombre descriptivo, pero no coincide con el topic de la ficha actual. |
| `public/pdfs/reports/montevideo-dental-clinics-map.pdf` | `/pdfs/reports/montevideo-dental-clinics-map.pdf` | `sampleReports[2]` | Parcial | Nombre descriptivo, pero no coincide con el topic de la ficha actual. |

### PDFs referenciados pero faltantes

| URL | Estado | Dónde se referencia | Prioridad |
|---|---|---|---|
| `/pdfs/company/methodology-overview.pdf` | Falta | `app/[locale]/[...slug]/page.tsx` en la sección de metodología | P1 |
| `/pdfs/services/industry-product-reports.pdf` | Falta | `content/services.ts` / detalle de servicio | P1 |
| `/pdfs/services/custom-research-studies.pdf` | Falta | `content/services.ts` / detalle de servicio | P1 |
| `/pdfs/services/monthly-market-briefings.pdf` | Falta | `content/services.ts` / detalle de servicio | P1 |
| `/pdfs/company/asb-founder-resume.pdf` | Falta | `data/company.ts` | P2 si vuelve a exponerse; hoy no está visible en UI |
| `/pdfs/insights/how-to-evaluate-a-new-market.pdf` | Falta | `public/pdfs/README.md` | P3 si se publica como activo editorial |
| `/pdfs/placeholder.pdf` | Falta | `app/[locale]/sample-reports/[slug]/page.tsx` como fallback | P3 |

### Conclusión de PDFs

Problemas importantes:
- Hay enlaces/embeds rotos para metodología y servicios.
- El sitio publica activos PDF reales, pero el set completo todavía no está listo.
- `public/pdfs/README.md` está desalineado con el estado actual del proyecto.

### Nota sobre SEO de nombres de archivo

Para SEO y mantenibilidad, el nombre de archivo debería reflejar:
- el tema real del PDF,
- el slug de la página,
- y la intención del contenido.

Hoy el inventario tiene una mezcla de:
- nombres genéricos,
- nombres descriptivos,
- y nombres que no coinciden con la ficha o la página que los enlaza.

## Fase 5 - Open Graph

### Estado por idioma

| Idioma | og:title | og:description | og:image | Twitter card | LinkedIn preview |
|---|---|---|---|---|---|
| EN | Sí | Sí | No | `summary_large_image` sin imagen | Incompleto |
| ES | Sí | Sí | No | `summary_large_image` sin imagen | Incompleto |
| PT | Sí | Sí | No | `summary_large_image` sin imagen | Incompleto |

### Conclusión para LinkedIn

LinkedIn no mostrará una previsualización rica completa porque falta `og:image`.

Efecto esperado:
- el enlace seguirá siendo válido,
- el título y la descripción sí podrán aparecer,
- pero la tarjeta no tendrá una imagen fuerte de branding.

### Riesgo SEO/social

- No es un problema de indexación.
- Sí es un problema de presentación social y de CTR potencial en compartidos.

## Fase 6 - Informe final por prioridad

### P1 - Corregir antes del lanzamiento

1. **Falta `og:image` y `twitter:image` en todo el sitio**
   - Impacto directo en LinkedIn y otras redes.
   - Afecta a `EN`, `ES` y `PT`.

2. **Hay PDFs críticos faltantes**
   - `methodology-overview.pdf`
   - `industry-product-reports.pdf`
   - `custom-research-studies.pdf`
   - `monthly-market-briefings.pdf`
   - Rompen embeds o botones de descarga visibles.

3. **Duplicación de marca en algunos títulos**
   - El global `title.template` más los títulos manuales generan `<title>` redundantes.
   - Afecta especialmente al home, pricing y agentic system.

4. **El sitemap omite `/[locale]/agentic-market-intelligence-system`**
   - Ruta importante, indexable y de negocio.
   - Debe incorporarse.

### P2 - Recomendable

1. **Structured data faltante**
   - `ProfessionalService`
   - `Report`
   - `Article`
   - `BreadcrumbList` no inyectado

2. **Accesibilidad del footer**
   - `target-size` en los links telefónicos.

3. **PDFs y naming**
   - Hay desalineación entre archivos, slugs y contenido.
   - `public/pdfs/README.md` necesita actualización.

4. **Performance visual**
   - El sitio ya está bien en producción, pero todavía hay margen en imágenes y render.

### P3 - Opcional

1. **`/pdfs/placeholder.pdf`**
   - Fallback útil para previews o estados temporales.

2. **Renombrado fino de PDFs ya existentes**
   - Útil si se quiere máxima coherencia SEO.

3. **Schemas adicionales de bajo impacto**
   - Extensiones futuras si el contenido editorial crece.

## Recomendación final

El sitio está cerca de estar listo para lanzamiento, pero antes de publicar conviene cerrar estos cuatro bloques:
1. imágenes Open Graph/Twitter,
2. PDFs faltantes,
3. corrección de títulos duplicados,
4. inclusión de la página agéntica en el sitemap.

Si esos cuatro puntos quedan resueltos, el sitio pasará de “técnicamente bueno” a “listo para lanzamiento con base SEO sólida”.


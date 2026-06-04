# Memoria Operativa - ASB Market Research

## 1) Proyecto
- Nombre: ASB Market Research
- Ruta local: `F:\WORK\ASB Market Research`
- Sitio local: `http://localhost:3053`
- Idiomas activos: `en`, `es`, `pt`
- Framework: Next.js 16.2.1
- Tipo de proyecto: sitio web corporativo / research / market intelligence

## 2) Fuentes de verdad
- El inglés (`en`) es la fuente de verdad para el contenido.
- `es` y `pt` deben seguir la misma estructura y significado del inglés, aunque no sean traducción literal.
- Cuando se corrige copy, primero se corrige `en` y luego se alinean `es` y `pt`.

## 3) Repositorio y despliegue
- GitHub remoto: `https://github.com/asilveira1969/asbmarketresearch`
- Vercel producción: `https://asb-market-research.vercel.app`
- Vercel project: `https://vercel.com/anastacios-projects-481225da/asb-market-research`
- El repo local está vinculado a Vercel mediante `.vercel/project.json`

## 4) Git actual
- Rama actual: `codex-asb-website-experiments`
- Rama rastreada en origin: `origin/codex-asb-website-experiments`
- Último commit conocido: `6d3a63a`
- Mensaje del commit: `Update multilingual site content and layout`

## 5) Estado operativo actual
- El sitio local puede levantarse con `npm run dev -- -p 3053`
- `localhost:3053/en` responde `200` cuando el servidor está arriba
- En este entorno, `next dev` puede tardar en compilar por filesystem lento en `F:`
- También se ha probado `next start` para arrancar más estable cuando hace falta

## 6) Estado del working tree
- Hay cambios locales posibles o pendientes si se vuelve a editar el proyecto
- Si se pide subir cambios, revisar `git status` antes de publicar
- Si se cambia algo en el layout raíz o en texto multidioma, validar `typecheck`

## 7) Decisiones de contenido ya tomadas
- `About Us` reemplaza `About`
- `Contact` funciona como menú desplegable
- `Quotation` aparece oculto debajo de `Contact`
- El botón rojo `Agentic Market Intelligence System` vive en la fila inferior del header
- `Newsletter` debe ser fuerte en la home, pero no repetirse como bloque grande en todas las páginas
- La home y `Services` usan alternancia de fondos beige y blanco
- `Agentic Workflow` fue copiada a la home desde `Services`
- La home quedó más tipo hub, no como landing larga con duplicación completa de contenido

## 8) Estructura del sitio
- Home `/[locale]`
  - Hero principal
  - New Service
  - Methodology
  - Agentic Workflow
  - Newsletter
  - CTA final
- Services `/[locale]/services`
  - lista de servicios
  - sección `Agentic Market Intelligence System`
- About Us `/[locale]/about`
  - Founder and Consulting Director primero
  - About después
- Contact `/[locale]/contact`
  - contacto principal
  - acceso a quotation

## 9) Secciones archivadas
- Existe `sections-archive/` para bloques movidos fuera de páginas activas.
- Si una sección se reutiliza, debe copiarse o importarse explícitamente desde ahí.
- Ejemplos archivados:
  - `agentic-workflow-section.tsx`
  - `sample-reports-section.tsx`
  - `services-pdf-downloads-section.tsx`
  - `founder-section.tsx`
  - `positioning-section.tsx`
  - `services-section.tsx`
  - `insights-section.tsx`

## 10) Archivos clave
- [`app/layout.tsx`](F:\WORK%20ASB%20Market%20Research\app\layout.tsx)
- [`app/[locale]/page.tsx`](F:\WORK%20ASB%20Market%20Research\app\[locale]\page.tsx)
- [`app/[locale]/[...slug]/page.tsx`](F:\WORK%20ASB%20Market%20Research\app\[locale]\[...slug]\page.tsx)
- [`app/[locale]/services/[slug]/page.tsx`](F:\WORK%20ASB%20Market%20Research\app\[locale]\services\[slug]\page.tsx)
- [`components/layout/header.tsx`](F:\WORK%20ASB%20Market%20Research\components\layout\header.tsx)
- [`components/layout/footer.tsx`](F:\WORK%20ASB%20Market%20Research\components\layout\footer.tsx)
- [`config/navigation.ts`](F:\WORK%20ASB%20Market%20Research\config\navigation.ts)
- [`content/workstation-home.ts`](F:\WORK%20ASB%20Market%20Research\content\workstation-home.ts)
- [`content/site.ts`](F:\WORK%20ASB%20Market%20Research\content\site.ts)
- [`content/services.ts`](F:\WORK%20ASB%20Market%20Research\content\services.ts)
- [`content/insights.ts`](F:\WORK%20ASB%20Market%20Research\content\insights.ts)

## 11) Nota técnica importante
- Hubo un hydration warning en `<html>` por atributos inyectados por extensiones del navegador.
- Se mitigó con `suppressHydrationWarning` en `app/layout.tsx`.
- Si reaparece un overlay de hidratación, revisar extensiones antes de asumir un bug del sitio.

## 12) Memoria de trabajo para próximos hilos
- Antes de hacer cambios grandes:
  - revisar `git status`
  - confirmar si el cambio afecta `en`, `es`, `pt` o las tres
  - verificar si la sección pertenece a la home, a services o a un archivo archivado
- Si se toca contenido:
  - mantener inglés como fuente de verdad
  - alinear español y portugués después
- Si se publica:
  - commit
  - push a GitHub
  - verificar despliegue en Vercel

## 13) Última revisión
- Fecha: 2026-05-29
- Estado: memoria operativa inicial completada y alineada con el sitio actual
- Pendientes típicos:
  - seguir afinando copy multidioma
  - mantener coherencia visual y de navegación
  - verificar despliegues después de cambios importantes


# ASB MCP Research Registry

Servidor MCP local por `stdio` que expone el inventario maestro de fuentes como herramientas MCP.

## Objetivo
- permitir que agentes locales descubran fuentes por categoria, subseccion, pais, idioma y formato
- recomendar fuentes priorizando APIs y datos estructurados
- usar la plantilla maestra como capa de verdad antes de integrar APIs reales

## Scripts
- `npm run mcp:research`: levanta el servidor MCP
- `npm run mcp:smoke`: ejecuta una prueba cliente-servidor local

## Fuente de datos
Por defecto lee:

`project-assets/001 FORMATOS FUENTES DE INFORMACIÓN (SCRAPING AGENT)/PLANTILLA_MAESTRA_FUENTES_MCP_RESEARCH_2026.csv`

Puedes cambiarla con:

`ASB_RESEARCH_SOURCES_CSV=...`

## Tools iniciales
- `search_sources`
- `get_source_details`
- `recommend_sources`
- `registry_coverage`

## Siguiente fase sugerida
Agregar conectores reales solo para las fuentes mejor posicionadas:
- `american_community_survey`
- `bureau_of_labor_statistics`
- `data_gov`
- `oecd_data`
- `data_usa`

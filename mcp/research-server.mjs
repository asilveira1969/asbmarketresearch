#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import * as z from 'zod/v4';

import {
  DEFAULT_SOURCE_CSV_PATH,
  buildCoverageSummary,
  filterSources,
  loadSourceRegistry,
  summarizeSource
} from './research-source-registry.mjs';

const registryPath = process.env.ASB_RESEARCH_SOURCES_CSV || DEFAULT_SOURCE_CSV_PATH;
const sources = loadSourceRegistry(registryPath);

const server = new McpServer({
  name: 'asb-market-research-registry',
  version: '0.1.0'
});

server.registerTool(
  'search_sources',
  {
    description:
      'Busca fuentes del inventario ASB para una seccion del informe, pais, idioma o tipo de acceso.',
    inputSchema: {
      query: z.string().optional().describe('Texto libre para buscar en nombre, datos o notas'),
      categoria: z.string().optional().describe('Categoria principal del informe'),
      subseccion: z.string().optional().describe('Sub-seccion del informe'),
      pais: z.string().optional().describe('Codigo ISO-2 de pais, por ejemplo US'),
      idioma: z.string().optional().describe('Idioma como en o es'),
      tipoAcceso: z.string().optional().describe('Fragmento de tipo de acceso, por ejemplo API REST'),
      formato: z.string().optional().describe('Formato tecnico esperado, por ejemplo json o csv'),
      visualizacion: z.string().optional().describe('Uso visual como tabla, barras o mapa'),
      limit: z.number().int().min(1).max(25).default(10).describe('Cantidad maxima de resultados')
    },
    outputSchema: {
      total_matches: z.number(),
      returned_matches: z.number(),
      items: z.array(
        z.object({
          source_id: z.string(),
          nombre_fuente: z.string(),
          categoria_informe: z.string(),
          subseccion_informe: z.string(),
          tipo_acceso: z.string(),
          cobertura_paises: z.string(),
          idiomas_disponibles: z.string(),
          formato_respuesta_tecnica: z.string(),
          uso_visual_recomendado: z.string(),
          herramientas_mcp_potenciales: z.string(),
          costo: z.string(),
          calidad_esperada: z.string()
        })
      )
    }
  },
  async ({ limit = 10, ...filters }) => {
    const matches = filterSources(sources, filters);
    const items = matches.slice(0, limit).map(summarizeSource);
    const structuredContent = {
      total_matches: matches.length,
      returned_matches: items.length,
      items
    };

    return {
      content: [{ type: 'text', text: JSON.stringify(structuredContent, null, 2) }],
      structuredContent
    };
  }
);

server.registerTool(
  'get_source_details',
  {
    description: 'Devuelve el registro completo de una fuente del inventario ASB usando source_id.',
    inputSchema: {
      source_id: z.string().describe('Identificador de la fuente en la plantilla maestra')
    }
  },
  async ({ source_id }) => {
    const source = sources.find((item) => item.source_id === source_id);

    if (!source) {
      const message = `No encontre una fuente con source_id "${source_id}".`;
      return {
        content: [{ type: 'text', text: message }],
        isError: true
      };
    }

    return {
      content: [{ type: 'text', text: JSON.stringify(source, null, 2) }],
      structuredContent: source
    };
  }
);

server.registerTool(
  'recommend_sources',
  {
    description:
      'Sugiere fuentes para una seccion del informe y prioriza las que parecen mas listas para conectarse.',
    inputSchema: {
      categoria: z.string().describe('Categoria principal del informe'),
      subseccion: z.string().optional().describe('Sub-seccion del informe'),
      pais: z.string().optional().describe('Codigo ISO-2 del pais'),
      prefer_api_ready: z.boolean().default(true).describe('Favorece APIs y datos estructurados'),
      limit: z.number().int().min(1).max(15).default(5)
    }
  },
  async ({ categoria, subseccion, pais, prefer_api_ready = true, limit = 5 }) => {
    let matches = filterSources(sources, { categoria, subseccion, pais });

    matches = matches.sort((a, b) => {
      const score = (source) => {
        let value = 0;
        if (source.prioridad_inicial === 'alta') value += 5;
        if (source.calidad_esperada === 'alta') value += 4;
        if (source.tipo_acceso.includes('API REST')) value += prefer_api_ready ? 5 : 2;
        if (source.tipo_acceso.includes('dataset')) value += 3;
        if (source.formato_respuesta_tecnica.includes('json')) value += 2;
        if (source.formato_respuesta_tecnica.includes('csv')) value += 2;
        if (source.costo === 'gratis') value += 2;
        if (source.costo === 'mixto') value += 1;
        if (source.auth_complejidad === 'baja') value += 1;
        return value;
      };

      return score(b) - score(a);
    });

    const items = matches.slice(0, limit).map((source) => ({
      ...summarizeSource(source),
      razon: [
        source.prioridad_inicial && `prioridad ${source.prioridad_inicial}`,
        source.calidad_esperada && `calidad ${source.calidad_esperada}`,
        source.tipo_acceso && `acceso ${source.tipo_acceso}`,
        source.formato_respuesta_tecnica && `formato ${source.formato_respuesta_tecnica}`
      ]
        .filter(Boolean)
        .join(', ')
    }));

    const structuredContent = {
      total_candidates: matches.length,
      recommended: items
    };

    return {
      content: [{ type: 'text', text: JSON.stringify(structuredContent, null, 2) }],
      structuredContent
    };
  }
);

server.registerTool(
  'registry_coverage',
  {
    description: 'Resume la cobertura actual del inventario ASB por categoria y pais.',
    inputSchema: {}
  },
  async () => {
    const structuredContent = buildCoverageSummary(sources);

    return {
      content: [{ type: 'text', text: JSON.stringify(structuredContent, null, 2) }],
      structuredContent
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    `ASB research registry MCP server running on stdio with ${sources.length} sources from ${registryPath}`
  );
}

main().catch((error) => {
  console.error('ASB MCP server error:', error);
  process.exit(1);
});

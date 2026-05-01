import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DEFAULT_SOURCE_CSV_PATH = path.resolve(
  __dirname,
  '../project-assets/001 FORMATOS FUENTES DE INFORMACIÓN (SCRAPING AGENT)/PLANTILLA_MAESTRA_FUENTES_MCP_RESEARCH_2026.csv'
);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        value += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(value);
      value = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') {
        i += 1;
      }

      row.push(value);
      value = '';

      const isEmptyRow = row.every((cell) => cell === '');
      if (!isEmptyRow) {
        rows.push(row);
      }

      row = [];
      continue;
    }

    value += char;
  }

  if (value.length > 0 || row.length > 0) {
    row.push(value);
    const isEmptyRow = row.every((cell) => cell === '');
    if (!isEmptyRow) {
      rows.push(row);
    }
  }

  return rows;
}

function normalizeCell(value) {
  return (value ?? '').trim();
}

function normalizeMultiValue(value) {
  return normalizeCell(value)
    .split('|')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export function loadSourceRegistry(csvPath = DEFAULT_SOURCE_CSV_PATH) {
  const raw = readFileSync(csvPath, 'utf8').replace(/^\uFEFF/, '');
  const rows = parseCsv(raw);

  if (rows.length < 2) {
    return [];
  }

  const [headers, ...body] = rows;

  return body.map((cells) => {
    const entry = {};

    headers.forEach((header, index) => {
      entry[header] = normalizeCell(cells[index] ?? '');
    });

    entry.subsecciones = normalizeMultiValue(entry.subseccion_informe);
    entry.paises = normalizeMultiValue(entry.cobertura_paises);
    entry.idiomas = normalizeMultiValue(entry.idiomas_disponibles);
    entry.capacidades = normalizeMultiValue(entry.capacidades_tecnicas);
    entry.tools = normalizeMultiValue(entry.herramientas_mcp_potenciales);

    return entry;
  });
}

function containsValue(sourceValues, expected) {
  if (!expected) {
    return true;
  }

  const wanted = expected.toLowerCase();
  return sourceValues.some((value) => value.toLowerCase() === wanted);
}

function matchesText(value, expected) {
  if (!expected) {
    return true;
  }

  return normalizeCell(value).toLowerCase().includes(expected.toLowerCase());
}

function normalizeSubsectionAndCountry(subseccion, pais) {
  const normalizedSubsection = normalizeCell(subseccion);
  const normalizedCountry = normalizeCell(pais);

  if (!normalizedSubsection) {
    return {
      subseccion: normalizedSubsection,
      pais: normalizedCountry
    };
  }

  const match = normalizedSubsection.match(/\s+(?:en|in)\s+([A-Za-z]{2,})$/i);
  if (!match) {
    return {
      subseccion: normalizedSubsection,
      pais: normalizedCountry
    };
  }

  const inferredCountry = match[1].toUpperCase();
  const cleanedSubsection = normalizedSubsection.slice(0, match.index).trim();

  return {
    subseccion: cleanedSubsection,
    pais: normalizedCountry || inferredCountry
  };
}

export function filterSources(sources, filters = {}) {
  const normalized = normalizeSubsectionAndCountry(filters.subseccion, filters.pais);

  return sources.filter((source) => {
    return (
      matchesText(source.categoria_informe, filters.categoria) &&
      matchesText(source.subseccion_informe, normalized.subseccion) &&
      containsValue(source.paises, normalized.pais) &&
      containsValue(source.idiomas, filters.idioma) &&
      matchesText(source.tipo_acceso, filters.tipoAcceso) &&
      matchesText(source.formato_respuesta_tecnica, filters.formato) &&
      matchesText(source.uso_visual_recomendado, filters.visualizacion) &&
      matchesText(source.nombre_fuente, filters.query) &&
      matchesText(source.datos_que_entrega, filters.query) &&
      matchesText(source.notas, filters.query)
    );
  });
}

export function summarizeSource(source) {
  return {
    source_id: source.source_id,
    nombre_fuente: source.nombre_fuente,
    categoria_informe: source.categoria_informe,
    subseccion_informe: source.subseccion_informe,
    tipo_acceso: source.tipo_acceso,
    cobertura_paises: source.cobertura_paises,
    idiomas_disponibles: source.idiomas_disponibles,
    formato_respuesta_tecnica: source.formato_respuesta_tecnica,
    uso_visual_recomendado: source.uso_visual_recomendado,
    herramientas_mcp_potenciales: source.herramientas_mcp_potenciales,
    costo: source.costo,
    calidad_esperada: source.calidad_esperada
  };
}

export function buildCoverageSummary(sources) {
  const categories = new Map();
  const countries = new Map();

  for (const source of sources) {
    categories.set(
      source.categoria_informe,
      (categories.get(source.categoria_informe) ?? 0) + 1
    );

    for (const country of source.paises) {
      countries.set(country, (countries.get(country) ?? 0) + 1);
    }
  }

  return {
    total_sources: sources.length,
    categorias: Object.fromEntries([...categories.entries()].sort()),
    paises: Object.fromEntries([...countries.entries()].sort())
  };
}

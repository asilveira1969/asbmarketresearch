#!/usr/bin/env node
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [, , toolName = 'search_sources', ...rawArgs] = process.argv;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const serverPath = path.resolve(__dirname, 'research-server.mjs');

function parseArgs(args) {
  const parsed = {};

  for (let i = 0; i < args.length; i += 1) {
    const token = args[i];
    if (!token.startsWith('--')) {
      continue;
    }

    const key = token.slice(2);
    const value = args[i + 1];
    if (!value || value.startsWith('--')) {
      parsed[key] = true;
      continue;
    }

    parsed[key] = value;
    i += 1;
  }

  return parsed;
}

function normalizeValue(value) {
  if (value === undefined) return undefined;
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value.trim() !== '' && !Number.isNaN(Number(value))) return Number(value);
  return value;
}

async function main() {
  const payload = Object.fromEntries(
    Object.entries(parseArgs(rawArgs)).map(([key, value]) => [key, normalizeValue(value)])
  );

  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [serverPath],
    cwd: projectRoot,
    stderr: 'pipe'
  });

  const client = new Client({
    name: 'asb-mcp-cli',
    version: '0.1.0'
  });

  await client.connect(transport);

  try {
    const result = await client.callTool({
      name: toolName,
      arguments: payload
    });

    const text = result.content?.find((item) => item.type === 'text')?.text ?? '';
    console.log(text);
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error('query-registry failed:', error);
  process.exit(1);
});

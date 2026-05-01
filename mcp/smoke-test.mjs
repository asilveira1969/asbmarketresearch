#!/usr/bin/env node
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

async function main() {
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: ['mcp/research-server.mjs'],
    cwd: process.cwd(),
    stderr: 'pipe'
  });

  const client = new Client({
    name: 'asb-mcp-smoke-test',
    version: '0.1.0'
  });

  await client.connect(transport);

  const tools = await client.listTools();
  const search = await client.callTool({
    name: 'search_sources',
    arguments: {
      categoria: 'Contexto Macroeconomico',
      pais: 'US',
      limit: 3
    }
  });

  const coverage = await client.callTool({
    name: 'registry_coverage',
    arguments: {}
  });

  console.log(
    JSON.stringify(
      {
        tool_count: tools.tools.length,
        tool_names: tools.tools.map((tool) => tool.name),
        search_result: search.content?.[0]?.text,
        coverage_result: coverage.content?.[0]?.text
      },
      null,
      2
    )
  );

  await client.close();
}

main().catch((error) => {
  console.error('Smoke test failed:', error);
  process.exit(1);
});

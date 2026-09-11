import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const formats = ["markdown", "json"] as const;
type Format = (typeof formats)[number];
const artifacts: Record<Format, { file: string; filename: string; contentType: string }> = {
  markdown: { file: "report.md", filename: "smartphone-sales-in-england-v2.0.0.md", contentType: "text/markdown; charset=utf-8" },
  json: { file: "tavily-research-result.json", filename: "smartphone-sales-in-england-v2.0.0.json", contentType: "application/json; charset=utf-8" },
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export function generateStaticParams() { return formats.map((format) => ({ format })); }

type Context = { params: Promise<{ format: string }> };
async function handle(request: Request, { params }: Context) {
  const { format } = await params;
  if (!formats.includes(format as Format)) return new Response("Not found", { status: 404 });
  const artifact = artifacts[format as Format];
  const filePath = path.join(process.cwd(), "content", "reports", "smartphone-sales-in-england", "en", artifact.file);
  const [body, metadata] = await Promise.all([readFile(filePath), stat(filePath)]);
  const etag = `"sha256-${createHash("sha256").update(body).digest("hex")}"`;
  const headers = new Headers({ "content-type": artifact.contentType, "content-disposition": `attachment; filename="${artifact.filename}"`, etag, "last-modified": metadata.mtime.toUTCString(), "cache-control": "private, no-store", "x-robots-tag": "noindex, nofollow" });
  if (request.headers.get("if-none-match")?.split(",").some((tag) => tag.trim().replace(/^W\//, "") === etag)) return new Response(null, { status: 304, headers });
  return new Response(request.method === "HEAD" ? null : body, { headers });
}
export async function GET(request: Request, context: Context) { return handle(request, context); }
export async function HEAD(request: Request, context: Context) { return handle(request, context); }
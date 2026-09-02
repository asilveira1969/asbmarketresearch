import {
  ArtifactUnavailableError,
  isPilotArtifactRequest,
  loadSpainDownloadArtifact,
  spainDownloadFormats,
  type SpainDownloadFormat,
} from "@/lib/report-artifacts/spain-downloads.server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return spainDownloadFormats.map((format) => ({ format }));
}

type DownloadContext = { params: Promise<{ format: string }> };

async function handleDownload(request: Request, { params }: DownloadContext) {
  const { format } = await params;
  if (!isPilotArtifactRequest("smartphone-sales-in-spain", format)) return new Response("Not found", { status: 404 });

  try {
    const artifact = await loadSpainDownloadArtifact(format as SpainDownloadFormat, request.method as "GET" | "HEAD", request.headers.get("if-none-match"));
    return new Response(artifact.body ? Uint8Array.from(artifact.body).buffer : null, { status: artifact.status, headers: artifact.headers });
  } catch (error) {
    if (error instanceof ArtifactUnavailableError) return new Response("Report artifact is temporarily unavailable.", { status: 503 });
    throw error;
  }
}

export async function GET(request: Request, context: DownloadContext) {
  return handleDownload(request, context);
}

export async function HEAD(request: Request, context: DownloadContext) {
  return handleDownload(request, context);
}

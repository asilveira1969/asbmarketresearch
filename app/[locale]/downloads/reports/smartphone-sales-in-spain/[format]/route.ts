import report from "@/content/reports/smartphone-sales-in-spain/en/report.json";

const downloads = {
  markdown: {
    body: report.content,
    contentType: "text/markdown; charset=utf-8",
    filename: "smartphone-sales-in-spain-v1.0.0.md",
  },
  json: {
    body: `${JSON.stringify(report, null, 2)}\n`,
    contentType: "application/json; charset=utf-8",
    filename: "smartphone-sales-in-spain-v1.0.0.json",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(downloads).map((format) => ({ format }));
}

export async function GET(_request: Request, { params }: RouteContext<"/[locale]/downloads/reports/smartphone-sales-in-spain/[format]">) {
  const { format } = await params;
  const download = downloads[format as keyof typeof downloads];

  if (!download) return new Response("Not found", { status: 404 });

  return new Response(download.body, {
    headers: {
      "Content-Type": download.contentType,
      "Content-Disposition": `attachment; filename="${download.filename}"`,
      "X-ASB-Report-Id": report.report_id,
      "X-ASB-Report-Version": report.version,
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
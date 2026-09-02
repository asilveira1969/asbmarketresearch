# Storage contract — Smartphone Sales in Spain

`rpt_spain_smartphone_sales` is the stable report identifier and `1.0.0` is the immutable pilot version. The canonical public HTML URL remains the Vercel route:

`/en/sample-reports/smartphone-sales-in-spain`

The future R2 HTML object is a versioned snapshot, not the canonical HTML URL. Its keys, along with the PDF, Markdown, JSON and metadata keys, are documented in `metadata/report.json`.

The English body belongs only in `en/report.md`, `en/report.json` and the versioned HTML snapshot. ES and PT retain their existing catalogue/detail-page fichas; no placeholder full-content objects are created.

D1 should contain only the discovery and governance fields listed in `metadata/report.json`: identifiers, status/type, country and industry codes, lifecycle dates, current version, access and licence, source count, primary language and available formats. It must not store the full report body.
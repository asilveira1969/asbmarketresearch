PRAGMA foreign_keys = ON;

INSERT INTO reports (
  report_id, canonical_slug, title, country_code, region_code, industry_code, report_year,
  primary_language, publication_tier, catalog_visibility, access_level, license,
  publication_status, published_at
) VALUES (
  'rpt_spain_smartphone_sales', 'smartphone-sales-in-spain',
  'Smartphone Sales in Spain: Market Profile and Competitive Dynamics',
  'ES', 'EU', 'mobile-technology', 2026, 'en', 'full_report', 'primary', 'free',
  'ASB-public-report', 'published', '2026-07-14'
);

INSERT INTO report_versions (
  report_version_id, report_id, version, source_count, summary, content_checksum, publication_status, published_at
) VALUES (
  'rpt_spain_smartphone_sales@1.0.0', 'rpt_spain_smartphone_sales', '1.0.0', 156,
  'Market profile covering Spain''s smartphone demand, competition, distribution and consumer behavior.',
  '3CF15F8949ECE8A2CF783C90A3B7F920E49485C8E01E635E78B584EEA22DFAB7', 'published', '2026-07-14'
);

INSERT INTO report_localizations (report_version_id, locale, title, summary, content_state) VALUES (
  'rpt_spain_smartphone_sales@1.0.0', 'en',
  'Smartphone Sales in Spain: Market Profile and Competitive Dynamics',
  'Market profile covering Spain''s smartphone demand, competition, distribution and consumer behavior.',
  'complete'
);

INSERT INTO report_artifacts (
  artifact_id, report_version_id, locale, format, r2_key, content_type, content_disposition,
  byte_size, sha256, publication_status
) VALUES
  ('rpt_spain_smartphone_sales@1.0.0:en:html', 'rpt_spain_smartphone_sales@1.0.0', 'en', 'html',
   'reports/rpt_spain_smartphone_sales/versions/1.0.0/html/en/index.html',
   'text/html; charset=utf-8', 'attachment; filename="smartphone-sales-in-spain-v1.0.0.html"',
   16889, '95A475D281D33C3B497AB1E2349C24D1D019659762DA0EE0617F60F342050F94', 'published'),
  ('rpt_spain_smartphone_sales@1.0.0:en:pdf', 'rpt_spain_smartphone_sales@1.0.0', 'en', 'pdf',
   'reports/rpt_spain_smartphone_sales/versions/1.0.0/pdf/en/report.pdf',
   'application/pdf', 'inline; filename="smartphone-sales-in-spain-v1.0.0.pdf"',
   188595, '6AFB57CF7512DC6FB29875A5F35770F8C45D026723EDCAB450037B4B3563C489', 'published'),
  ('rpt_spain_smartphone_sales@1.0.0:en:markdown', 'rpt_spain_smartphone_sales@1.0.0', 'en', 'markdown',
   'reports/rpt_spain_smartphone_sales/versions/1.0.0/content/en/report.md',
   'text/markdown; charset=utf-8', 'attachment; filename="smartphone-sales-in-spain-v1.0.0.md"',
   16592, 'D40124137CD893C460F6000DE3DAB6B41279C4EC81A172E0A19E2396484D24D2', 'published'),
  ('rpt_spain_smartphone_sales@1.0.0:en:json', 'rpt_spain_smartphone_sales@1.0.0', 'en', 'json',
   'reports/rpt_spain_smartphone_sales/versions/1.0.0/content/en/report.json',
   'application/json; charset=utf-8', 'attachment; filename="smartphone-sales-in-spain-v1.0.0.json"',
   17925, '3CF15F8949ECE8A2CF783C90A3B7F920E49485C8E01E635E78B584EEA22DFAB7', 'published');

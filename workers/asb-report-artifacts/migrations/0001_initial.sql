PRAGMA foreign_keys = ON;

CREATE TABLE reports (
  report_id TEXT PRIMARY KEY,
  canonical_slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  country_code TEXT,
  region_code TEXT,
  industry_code TEXT,
  report_year INTEGER,
  primary_language TEXT NOT NULL,
  publication_tier TEXT NOT NULL CHECK (publication_tier IN ('full_report', 'legacy_pdf', 'needs_review')),
  catalog_visibility TEXT NOT NULL CHECK (catalog_visibility IN ('primary', 'legacy', 'hidden')),
  access_level TEXT NOT NULL,
  license TEXT NOT NULL,
  publication_status TEXT NOT NULL CHECK (publication_status IN ('draft', 'validated', 'published', 'archived')),
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE report_versions (
  report_version_id TEXT PRIMARY KEY,
  report_id TEXT NOT NULL REFERENCES reports(report_id),
  version TEXT NOT NULL,
  source_count INTEGER NOT NULL CHECK (source_count >= 0),
  summary TEXT,
  content_checksum TEXT,
  publication_status TEXT NOT NULL CHECK (publication_status IN ('draft', 'validated', 'published', 'archived')),
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (report_id, version)
);

CREATE TABLE report_localizations (
  report_version_id TEXT NOT NULL REFERENCES report_versions(report_version_id),
  locale TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  content_state TEXT NOT NULL CHECK (content_state IN ('complete', 'metadata_only')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (report_version_id, locale)
);

CREATE TABLE report_artifacts (
  artifact_id TEXT PRIMARY KEY,
  report_version_id TEXT NOT NULL REFERENCES report_versions(report_version_id),
  locale TEXT NOT NULL,
  format TEXT NOT NULL CHECK (format IN ('html', 'pdf', 'markdown', 'json')),
  r2_key TEXT NOT NULL UNIQUE,
  content_type TEXT NOT NULL,
  content_disposition TEXT NOT NULL,
  byte_size INTEGER NOT NULL CHECK (byte_size >= 0),
  sha256 TEXT NOT NULL,
  etag TEXT,
  publication_status TEXT NOT NULL CHECK (publication_status IN ('draft', 'validated', 'published', 'archived')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (report_version_id, locale, format)
);

CREATE INDEX idx_reports_catalog ON reports(catalog_visibility, publication_status);
CREATE INDEX idx_versions_report ON report_versions(report_id, version);
CREATE UNIQUE INDEX idx_one_published_version_per_report
  ON report_versions(report_id)
  WHERE publication_status = 'published';
CREATE INDEX idx_artifacts_lookup
  ON report_artifacts(report_version_id, locale, format, publication_status);

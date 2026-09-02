const encoder = new TextEncoder();

export const MAX_SIGNATURE_AGE_SECONDS = 5 * 60;
export const artifactFormats = ["html", "pdf", "markdown", "json"] as const;
export type ArtifactFormat = (typeof artifactFormats)[number];

export type ArtifactRequest = {
  slug: string;
  format: ArtifactFormat;
};

function base64UrlToBytes(value: string): Uint8Array | null {
  if (!/^[A-Za-z0-9_-]+$/.test(value)) return null;
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (value.length % 4)) % 4);
  try {
    return Uint8Array.from(atob(base64), (character) => character.charCodeAt(0));
  } catch {
    return null;
  }
}

export function parseArtifactPath(rawPathname: string): ArtifactRequest | null {
  if (
    rawPathname.includes("\\") ||
    rawPathname.includes("..") ||
    /%(?:2f|5c|2e)/i.test(rawPathname) ||
    rawPathname.includes("//")
  ) return null;

  const match = rawPathname.match(/^\/internal\/v1\/reports\/([a-z0-9]+(?:-[a-z0-9]+)*)\/artifacts\/(html|pdf|markdown|json)$/);
  if (!match) return null;
  return { slug: match[1], format: match[2] as ArtifactFormat };
}

export function signaturePayload(timestamp: number, method: string, pathname: string): string {
  return `${timestamp}\n${method.toUpperCase()}\n${pathname}`;
}

function timingSafeEqual(left: Uint8Array, right: Uint8Array): boolean {
  if (left.byteLength !== right.byteLength) return false;
  let difference = 0;
  for (let index = 0; index < left.byteLength; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

export async function verifyHmacSignature(request: Request, secret: string, now = Date.now()): Promise<boolean> {
  const timestampHeader = request.headers.get("x-asb-timestamp");
  const signatureHeader = request.headers.get("x-asb-signature");
  if (!timestampHeader || !signatureHeader || !/^\d{10}$/.test(timestampHeader)) return false;

  const timestamp = Number(timestampHeader);
  if (!Number.isSafeInteger(timestamp) || Math.abs(Math.floor(now / 1000) - timestamp) > MAX_SIGNATURE_AGE_SECONDS) return false;

  const supplied = base64UrlToBytes(signatureHeader);
  if (!supplied) return false;

  const url = new URL(request.url);
  if (url.search) return false;
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const expected = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(signaturePayload(timestamp, request.method, url.pathname))));
  return timingSafeEqual(expected, supplied);
}

export function parseSingleRange(value: string | null, size: number): { offset: number; length: number; contentRange: string } | "invalid" | null {
  if (!value) return null;
  const match = value.match(/^bytes=(\d*)-(\d*)$/);
  if (!match || size < 1) return "invalid";
  const [, rawStart, rawEnd] = match;
  if (!rawStart && !rawEnd) return "invalid";

  let start: number;
  let end: number;
  if (!rawStart) {
    const suffixLength = Number(rawEnd);
    if (!Number.isSafeInteger(suffixLength) || suffixLength < 1) return "invalid";
    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  } else {
    start = Number(rawStart);
    end = rawEnd ? Number(rawEnd) : size - 1;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || end < start || start >= size) return "invalid";
    end = Math.min(end, size - 1);
  }
  return { offset: start, length: end - start + 1, contentRange: `bytes ${start}-${end}/${size}` };
}

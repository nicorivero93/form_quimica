export interface WikipediaSummary {
  title: string;
  extract: string;
  thumbnail?: { source: string; width: number; height: number };
  originalimage?: { source: string; width: number; height: number };
  content_urls?: { desktop: { page: string }; mobile: { page: string } };
}

export async function fetchWikipediaSummary(slug: string): Promise<WikipediaSummary | null> {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) return null;
  return res.json();
}

export function bestWikipediaImage(s: WikipediaSummary | null | undefined): string | null {
  if (!s) return null;
  return s.originalimage?.source ?? s.thumbnail?.source ?? null;
}

export function wikipediaPageUrl(s: WikipediaSummary | null | undefined): string | null {
  return s?.content_urls?.desktop?.page ?? null;
}

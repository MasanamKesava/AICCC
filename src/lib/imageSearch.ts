// src/lib/imageSearch.ts
// Vite + React browser-side image fetcher with CORS-friendly MediaWiki calls.

const UA = "VitaCulvert/1.0 (edu use)";
const HEADERS: HeadersInit = { "Accept": "application/json" };

// small helper
async function getJson(url: string) {
  const res = await fetch(url, { headers: HEADERS, cache: "no-store" });
  if (!res.ok) throw new Error(`Fetch failed: ${url}`);
  return res.json();
}

/** Try: Wikipedia REST /summary */
async function fromWikipediaSummary(q: string): Promise<string | undefined> {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`;
  const j = await getJson(url);
  return j?.thumbnail?.source || j?.originalimage?.source;
}

/** Try: MediaWiki pageimages (generator=search) */
async function fromWikipediaPageImages(q: string): Promise<string | undefined> {
  const url =
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages` +
    `&piprop=thumbnail&pithumbsize=900&generator=search&gsrsearch=${encodeURIComponent(q)}` +
    `&gsrlimit=1&origin=*`;
  const j = await getJson(url);
  const pages = j?.query?.pages || {};
  for (const k of Object.keys(pages)) {
    const thumb = pages[k]?.thumbnail?.source;
    if (thumb) return thumb;
  }
}

/** Try: search -> images -> imageinfo */
async function fromWikipediaImageInfo(q: string): Promise<string | undefined> {
  const searchUrl =
    `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search` +
    `&srsearch=${encodeURIComponent(q)}&srlimit=1&origin=*`;
  const s = await getJson(searchUrl);
  const title = s?.query?.search?.[0]?.title;
  if (!title) return;

  const imagesUrl =
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images` +
    `&titles=${encodeURIComponent(title)}&imlimit=8&origin=*`;
  const im = await getJson(imagesUrl);
  const pages = im?.query?.pages || {};

  let fileTitle: string | undefined;
  for (const k of Object.keys(pages)) {
    const arr = pages[k]?.images || [];
    const hit = arr.find((x: any) => typeof x?.title === "string" && x.title.startsWith("File:"));
    if (hit?.title) { fileTitle = hit.title; break; }
  }
  if (!fileTitle) return;

  const infoUrl =
    `https://en.wikipedia.org/w/api.php?action=query&format=json` +
    `&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url|mime` +
    `&iiurlwidth=900&origin=*`;
  const info = await getJson(infoUrl);
  const ipages = info?.query?.pages || {};
  for (const k of Object.keys(ipages)) {
    const ii = ipages[k]?.imageinfo?.[0];
    const url = ii?.thumburl || ii?.url;
    if (url) return url;
  }
}

/** Try: Wikimedia Commons file search */
async function fromWikimediaCommons(q: string): Promise<string | undefined> {
  const url =
    `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search` +
    `&gsrsearch=${encodeURIComponent(q)}&gsrlimit=1&gsrnamespace=6&prop=imageinfo` +
    `&iiprop=url&iiurlwidth=900&origin=*`;
  const j = await getJson(url);
  const pages = j?.query?.pages || {};
  for (const k of Object.keys(pages)) {
    const ii = pages[k]?.imageinfo?.[0];
    const u = ii?.thumburl || ii?.url;
    if (u) return u;
  }
}

/** Try: Openverse (CC images) */
async function fromOpenverse(q: string): Promise<string | undefined> {
  const url = `https://api.openverse.engineering/v1/images/?q=${encodeURIComponent(q)}&page_size=1`;
  const j = await getJson(url);
  return j?.results?.[0]?.thumbnail || j?.results?.[0]?.url;
}

/** Last resort: Unsplash Source (random but reliable) */
function fromUnsplash(q: string): string {
  return `https://source.unsplash.com/900x560/?${encodeURIComponent(q)}`;
}

/**
 * Main fetcher
 * Order: Wikipedia Summary → PageImages → ImageInfo → Wikimedia Commons → Openverse → Unsplash
 */
export async function fetchImageForTerm(q: string): Promise<string> {
  const tries = [
    () => fromWikipediaSummary(q),
    () => fromWikipediaPageImages(q),
    () => fromWikipediaImageInfo(q),
    () => fromWikimediaCommons(q),
    () => fromOpenverse(q),
  ];

  for (const t of tries) {
    try {
      const url = await t();
      if (url) return url;
    } catch { /* continue */ }
  }
  return fromUnsplash(q);
}

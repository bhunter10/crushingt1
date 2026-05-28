import { PRINTIFY_STORE_URL, type PrintifyProduct } from "@/lib/printify-store";

/** How long production caches the Printify catalog before refetching. */
const REVALIDATE_SECONDS = 60;

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal) => String.fromCodePoint(Number(decimal)));
}

function parseProducts(html: string, storeUrl: string): PrintifyProduct[] {
  const ids = [...new Set(html.match(/\/product\/(\d+)/g)?.map((path) => path.replace("/product/", "")) ?? [])];

  return ids.map((id) => {
    const slugMatch = html.match(new RegExp(`/product/${id}/([^"\\\\]+)`));
    const slug = slugMatch?.[1] ?? null;

    const titleMatch = html.match(new RegExp(`href="/product/${id}"[^>]*>([^<]+)</a>`));
    const rawTitle = titleMatch?.[1].trim() ?? (slug ? slug.replace(/-/g, " ") : `Product ${id}`);
    const title = decodeHtmlEntities(rawTitle);

    const url = slug ? `${storeUrl}/product/${id}/${slug}` : `${storeUrl}/product/${id}`;

    const imageMatch = slug
      ? html.match(new RegExp(`https://images-api\\.printify\\.com/mockup/[^"\\\\]*${slug}[^"\\\\]*`))
      : html.match(/https:\/\/images-api\.printify\.com\/mockup\/[^"\\]+/);
    const image = imageMatch?.[0] ? decodeHtmlEntities(imageMatch[0]) : null;

    const chunkStart = html.indexOf(`/product/${id}`);
    const chunk = chunkStart >= 0 ? html.slice(chunkStart, chunkStart + 3000) : html;
    const priceMatch = chunk.match(/\$[0-9]+\.[0-9]{2}/);

    return {
      id,
      title,
      url,
      image,
      price: priceMatch?.[0] ?? null
    };
  });
}

export async function fetchPrintifyProducts(): Promise<PrintifyProduct[]> {
  const storeUrl = PRINTIFY_STORE_URL.replace(/\/$/, "");
  const isDev = process.env.NODE_ENV === "development";
  const response = await fetch(`${storeUrl}/products`, {
    ...(isDev
      ? { cache: "no-store" }
      : { next: { revalidate: REVALIDATE_SECONDS } }),
    headers: {
      // Avoid serving a stale HTML snapshot from Printify's edge cache.
      "Cache-Control": "no-cache"
    }
  });

  if (!response.ok) {
    throw new Error(`Printify store request failed (${response.status})`);
  }

  const html = await response.text();
  return parseProducts(html, storeUrl);
}

import { PRINTIFY_STORE_URL, type PrintifyProduct } from "@/lib/printify-store";

const REVALIDATE_SECONDS = 3600;

function decodeHtmlEntities(value: string) {
  return value.replaceAll("&amp;", "&");
}

function parseProducts(html: string, storeUrl: string): PrintifyProduct[] {
  const ids = [...new Set(html.match(/\/product\/(\d+)/g)?.map((path) => path.replace("/product/", "")) ?? [])];

  return ids.map((id) => {
    const slugMatch = html.match(new RegExp(`/product/${id}/([^"\\\\]+)`));
    const slug = slugMatch?.[1] ?? null;

    const titleMatch = html.match(new RegExp(`href="/product/${id}"[^>]*>([^<]+)</a>`));
    const title = titleMatch?.[1].trim() ?? (slug ? slug.replace(/-/g, " ") : `Product ${id}`);

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
  const response = await fetch(`${storeUrl}/products`, {
    next: { revalidate: REVALIDATE_SECONDS }
  });

  if (!response.ok) {
    throw new Error(`Printify store request failed (${response.status})`);
  }

  const html = await response.text();
  return parseProducts(html, storeUrl);
}

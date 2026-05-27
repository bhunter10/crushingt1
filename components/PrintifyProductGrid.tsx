import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchPrintifyProducts } from "@/lib/fetch-printify-products";
import { PRINTIFY_STORE_URL } from "@/lib/printify-store";

export async function PrintifyProductGrid() {
  let products;

  try {
    products = await fetchPrintifyProducts();
  } catch {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-soft">
        <p>We could not load the store catalog right now.</p>
        <a href={PRINTIFY_STORE_URL} className="btn btn-primary mt-4 inline-flex" target="_blank" rel="noopener noreferrer">
          Shop on Printify
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-soft">
        <p>No products are available yet.</p>
        <a href={PRINTIFY_STORE_URL} className="btn btn-primary mt-4 inline-flex" target="_blank" rel="noopener noreferrer">
          Visit the store
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="shop-product-grid">
      {products.map((product) => (
        <article key={product.id} className="shop-product-card">
          <Link
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-product-media"
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <div className="shop-product-media-fallback" aria-hidden="true" />
            )}
          </Link>
          <div className="shop-product-body">
            <h3 className="text-xl font-bold text-ink">
              <Link href={product.url} target="_blank" rel="noopener noreferrer" className="hover:text-coral">
                {product.title}
              </Link>
            </h3>
            {product.price ? <p className="mt-2 text-lg font-semibold text-coral">{product.price}</p> : null}
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4 inline-flex"
            >
              View product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

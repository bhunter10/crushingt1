import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { merchItems } from "@/lib/content";

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop / Merch"
        title="Merch that starts conversations about Type 1 diabetes."
        intro="Future apparel, stickers, and awareness items can help supporters spark conversations wherever they go."
      />
      <Section title="Planned merch">
        <div className="grid gap-5 md:grid-cols-3">
          {merchItems.map((item) => (
            <Card key={item.title} icon={ShoppingBag} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Launch strategy"
        title="Use merch as awareness media"
        intro="The best early merch should be simple enough to wear often and specific enough to make people ask what T1D is."
      >
        <div className="rounded-lg bg-ink p-8 text-white">
          <h2 className="text-3xl font-black">Suggested first drop</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-200">
            Start with a shirt, sticker pack, and hoodie built around one campaign: Learn the Signs. Pair each product with a small symptom card and a QR code back to the awareness page.
          </p>
          <Link href="/contact" className="btn mt-6 bg-white text-ink">
            Ask about merch partnerships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}

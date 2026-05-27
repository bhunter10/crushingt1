import { PageHero } from "@/components/PageHero";
import { PrintifyProductGrid } from "@/components/PrintifyProductGrid";
import { Section } from "@/components/Section";

export default function ShopPage() {
  return (
    <>
      <PageHero
        variant="shop"
        eyebrow=""
        title="Shop"
        intro="Shop our merch."
        backgroundImage="/images/hero-shop-banner-v2.png"
      />
      <Section eyebrow="" title="" intro="">
        <PrintifyProductGrid />
      </Section>
    </>
  );
}

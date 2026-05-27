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
        variant="shop"
        eyebrow=""
        title="Shop"
        intro="Shop our merch."
        backgroundImage="/images/hero-shop-banner-v2.png"
      />
      <Section
        eyebrow=""
        title=""
        intro=""
      >
        
        {null}
      </Section>
    </>
  );
}

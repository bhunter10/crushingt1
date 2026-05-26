import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="History / Our Story"
        title="A personal story becoming a public awareness movement."
        intro="CrushingT1 exists to make Type 1 diabetes more visible, more understood, and less isolating for families facing the diagnosis."
      />
      <Section title="Why CrushingT1 exists">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg bg-white p-8 shadow-soft">
            <h2 className="text-3xl font-black text-ink">From lived experience to action</h2>
            <p className="mt-4 leading-8 text-slate-700">
              The strongest T1D awareness work starts with real life: the shock of diagnosis, the constant decisions, the nighttime checks, the technology, and the resilience families build one day at a time.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              As CrushingT1 grows, this story can include diagnosis milestones, family reflections, supporter notes, and the people who inspired the foundation.
            </p>
          </div>
          <ol className="grid gap-4">
            {["Recognize the signs sooner", "Tell honest stories", "Create practical education", "Prepare future research support"].map((item, index) => (
              <li key={item} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-mist font-black text-ocean">{index + 1}</span>
                <div>
                  <h3 className="font-black text-ink">{item}</h3>
                  <p className="mt-2 text-slate-700">A core milestone for turning awareness into measurable community value.</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Link href="/help" className="btn btn-primary mt-8">
          See how you can help
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";

export default function StoryPage() {
  return (
    <>
      <section className="story-hero">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            Our Story
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-200">
            CrushingT1 was created to make Type 1 diabetes more visible, more understood, and less isolating for families facing the diagnosis.
          </p>
        </div>
      </section>

      <Section
        eyebrow="The foundation story"
        title="From diagnosis to purpose"
        intro="CrushingT1 turns a family's experience with Type 1 diabetes into education, advocacy, and momentum for a better future."
      >
        <div className="story-narrative">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-coral">Why it matters</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
                No family should have to learn about Type 1 diabetes in the dark.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-9 text-slate-700">
              <p>
                CrushingT1 began with the kind of moment that changes a family&apos;s life: learning the language of blood sugar, insulin, symptoms, devices, appointments, and constant decisions all at once.
              </p>
              <p>
                The foundation exists to turn that experience outward. Through education, storytelling, and community support, CrushingT1 helps more people recognize the signs, understand the daily weight of T1D, and rally around families living with it.
              </p>
              <p>
                As the mission grows, the goal is to pair awareness with responsible support for research, better care, and a future where Type 1 diabetes is met earlier, understood more clearly, and eventually crushed.
              </p>
              <Link href="/contact" className="btn btn-secondary">
                Connect with CrushingT1
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

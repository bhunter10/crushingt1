import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { donationOptions } from "@/lib/content";

export default function DonationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Donations"
        title="A responsible support path while nonprofit setup is still in progress."
        intro="CrushingT1 is preparing for future donations, sponsorships, and campaign support without implying tax-deductible giving before formal status is ready."
      />
      <Section title="Support options">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {donationOptions.map((option) => (
            <Card key={option.title} icon={option.icon} title={option.title} text={option.text} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="No-fee goal"
        title="Future donation platform guidance"
        intro="Once CrushingT1 has 501(c)(3) status or a fiscal sponsor, the donation flow can switch from pledges to a live donation form."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg bg-white p-8 shadow-soft">
            <h2 className="text-3xl font-black text-ink">Recommended path</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Use Zeffy first when nonprofit eligibility is ready because its model is built around no platform fees and no payment processing fees for nonprofits. Keep Give Lively as a backup for a polished free platform where payment processor fees still apply.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Until then, collect pledge interest, sponsor inquiries, and fiscal sponsor conversations through the contact form.
            </p>
            <Link href="/contact" className="btn btn-primary mt-6">
              Start a support conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <aside className="rounded-lg border border-amber/40 bg-amber/15 p-6">
            <ShieldCheck className="h-8 w-8 text-ocean" />
            <h3 className="mt-4 text-2xl font-black text-ink">Important note</h3>
            <p className="mt-3 leading-7 text-slate-700">
              This website should not call contributions tax-deductible, issue charitable receipts, or present itself as a registered charity until that legal status is confirmed.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}

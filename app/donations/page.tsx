import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export default function DonationsPage() {
  return (
    <>
      <PageHero
        variant="news"
        eyebrow=""
        title="Donations"
        intro="Donation details are coming soon."
        backgroundImage="/images/hero-donations-banner.png"
      />
      <Section title="Support the mission">
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
          <p>
            Your support helps CrushingT1 share clear Type 1 diabetes education, amplify awareness, and connect families with practical information when it matters most.
          </p>
          <p>
            Future donations will help fund outreach materials, community campaigns, research-focused updates, and resources that make Type 1 diabetes easier to understand.
          </p>
          <p>
            More giving details are coming soon. In the meantime, thank you for helping build momentum around education, advocacy, and hope for everyone affected by Type 1 diabetes.
          </p>
        </div>
      </Section>
    </>
  );
}

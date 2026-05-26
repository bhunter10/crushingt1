import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { helpActions } from "@/lib/content";

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="How You Can Help"
        title="Support starts with awareness, conversation, and practical action."
        intro="CrushingT1 can grow through shares, school outreach, volunteer help, sponsorships, merch, and future giving."
      />
      <Section title="Ways to help now">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {helpActions.map((action) => (
            <Card key={action.title} icon={action.icon} title={action.title} text={action.text} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Campaign ideas"
        title="Awareness opportunities with fundraising potential"
        intro="These campaigns are designed to be simple, visible, and easy for local supporters to join."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Learn the Signs Week", "A school and social campaign focused on early T1D symptoms and when to ask for testing."],
            ["Crushing Myths Challenge", "A short-video prompt where supporters correct one common misconception about T1D."],
            ["Blue Circle Local Day", "A community event with merch, sponsor tables, education cards, and pledge signups."]
          ].map(([title, text]) => (
            <Card key={title} title={title} text={text} />
          ))}
        </div>
        <Link href="/contact" className="btn btn-primary mt-8">
          Volunteer or sponsor
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}

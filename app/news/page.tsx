import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { newsItems, researchAngles } from "@/lib/content";

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent News"
        title="Updates that make T1D easier to understand."
        intro="Use this page for awareness campaigns, foundation milestones, research explainers, local events, and supporter stories."
      />
      <Section title="Latest updates">
        <div className="grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.title} meta={`${item.category} / ${item.date}`} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Future research awareness"
        title="New angles that build donor confidence"
        intro="Future supporters need more than inspiration. They need to understand why the work matters and how their support can move education and research forward."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchAngles.map((angle) => (
            <Card key={angle.title} icon={angle.icon} title={angle.title} text={angle.text} />
          ))}
        </div>
      </Section>
    </>
  );
}

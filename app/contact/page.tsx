import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="news"
        eyebrow=""
        title="Contact"
        intro="Tell us how you would like to get involved, share your story, or support a future awareness campaign."
        backgroundImage="/images/hero-contact-banner.png"
      />
      <Section title="Send a message">
        <ContactForm />
      </Section>
    </>
  );
}

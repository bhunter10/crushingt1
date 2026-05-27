import { Mail, Send } from "lucide-react";
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
        <form action="mailto:hello@crushingt1.com" method="post" encType="text/plain" className="grid gap-5 rounded-lg bg-white p-6 shadow-soft md:grid-cols-2">
          <label className="label">
            Name
            <input className="input" name="name" autoComplete="name" required placeholder="Your name" />
          </label>
          <label className="label">
            Email
            <input className="input" type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
          </label>
          <label className="label">
            Interest
            <select className="select" name="interest" defaultValue="Volunteer">
              <option>Volunteer</option>
              <option>Sponsor</option>
              <option>Share a story</option>
              <option>Future donation</option>
              <option>Media or partnership</option>
            </select>
          </label>
          <label className="label">
            Phone optional
            <input className="input" name="phone" autoComplete="tel" placeholder="Best number" />
          </label>
          <label className="label md:col-span-2">
            Message
            <textarea className="textarea" name="message" required placeholder="Tell us how you would like to help." />
          </label>
          <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row">
            <button className="btn btn-primary" type="submit">
              <Send className="h-4 w-4" />
              Send message
            </button>
            <a className="btn btn-secondary" href="mailto:hello@crushingt1.com">
              <Mail className="h-4 w-4" />
              hello@crushingt1.com
            </a>
          </div>
        </form>
      </Section>
    </>
  );
}

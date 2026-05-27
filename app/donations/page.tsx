import { DonationForm } from "@/components/DonationForm";
import { PageHero } from "@/components/PageHero";

export default function DonationsPage() {
  return (
    <>
      <PageHero
        variant="news"
        eyebrow=""
        title="Donations"
        intro="Help fuel Type 1 diabetes education, awareness, and community support."
        backgroundImage="/images/hero-donations-banner.png"
      />
      <section className="section bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <DonationForm />
        </div>
      </section>
    </>
  );
}

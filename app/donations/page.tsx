import { PageHero } from "@/components/PageHero";

export default function DonationsPage() {
  return (
    <>
      <PageHero
        variant="news"
        eyebrow=""
        title="Donations"
        backgroundImage="/images/hero-donations-banner.png"
      />
      <section className="section bg-white">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-center text-3xl font-black text-ink">
            Coming soon
          </p>
        </div>
      </section>
    </>
  );
}

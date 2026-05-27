import Link from "next/link";
import { ArrowRight, Droplet, HeartPulse, PlayCircle, ShieldCheck } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { awarenessFacts, helpActions } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-18">
          <div>
            <p className="hero-kicker">Educating <span /> Supporting <span /> Empowering</p>
            <h1 className="mt-4 text-5xl font-black leading-none text-ink sm:text-6xl lg:text-7xl">
              CrushingT1
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
              Built to help families recognize Type 1 diabetes sooner, see the real daily work behind the diagnosis, and rally support for future education and research.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donations" className="btn btn-primary">
                Support CrushingT1
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/videos" className="btn btn-secondary">
                <PlayCircle className="h-4 w-4" />
                Follow the Journey
              </Link>
              <Link href="/signs-of-type-1-diabetes" className="btn btn-secondary">
                <HeartPulse className="h-4 w-4" />
                Learn the Signs
              </Link>
            </div>
          </div>
          <div className="hero-panel" aria-label="CrushingT1 awareness highlights">
            <div className="hero-panel-rainbow" />
            <div className="relative z-10 grid gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-ocean">Awareness focus</p>
                  <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Know the signs before crisis hits.</h2>
                </div>
                <div className="hero-drop">
                  <Droplet className="h-8 w-8" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="meter">
                  <HeartPulse className="h-6 w-6 text-coral" />
                  <span className="text-sm font-black uppercase text-coral">Recognize</span>
                  <strong>Thirst, weight loss, fatigue, frequent urination</strong>
                </div>
                <div className="meter">
                  <ShieldCheck className="h-6 w-6 text-ocean" />
                  <span className="text-sm font-black uppercase text-ocean">Respond</span>
                  <strong>Education, support, and practical next steps</strong>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">Until we crush Type 1 diabetes together</p>
                <div className="mt-4 h-3 rounded-full bg-[linear-gradient(90deg,#f72585,#ffb703,#26c485,#00a6fb,#7b2ff7)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="T1D basics"
        title="Clear facts families can act on"
        intro="CrushingT1 should make Type 1 diabetes easier to understand without flattening the seriousness of the disease."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awarenessFacts.map((fact) => (
            <Card key={fact.title} title={fact.title} text={fact.text} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Our story"
        title="A family-centered foundation in progress"
        intro="The site gives CrushingT1 a place to share its origin, invite supporters in early, and be transparent while nonprofit setup is still underway."
        className="bg-white"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-ink p-8 text-white">
            <h3 className="text-2xl font-black">The mission</h3>
            <p className="mt-4 leading-8 text-slate-200">
              Turn personal experience into public awareness, help people see T1D before it becomes a crisis, and build momentum for future research support.
            </p>
            <Link href="/history" className="mt-6 inline-flex font-bold text-amber">
              Read the story <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {helpActions.map((action) => (
              <Card key={action.title} icon={action.icon} title={action.title} text={action.text} />
            ))}
          </div>
        </div>
      </Section>

    </>
  );
}

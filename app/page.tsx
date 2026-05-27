import Link from "next/link";
import { ArrowRight, FlaskConical, GraduationCap, Microscope } from "lucide-react";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <section className="hero-science">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-18">
          <div>
            <p className="hero-kicker">
              <span className="text-pink-500">Educating</span>
              <span className="kicker-divider bg-amber" />
              <span className="text-amber">Supporting</span>
              <span className="kicker-divider bg-green-500" />
              <span className="text-green-500">Empowering</span>
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
              Welcome
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-200">
              CrushingT1 helps people learn about Type 1 diabetes, follow advancements in care, and stay informed about new breakthroughs that bring families, advocates, and researchers closer to a cure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donations" className="btn btn-primary">
                Support CrushingT1
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/news" className="btn border-white/25 bg-white/10 text-white hover:bg-white/15">
                <Microscope className="h-4 w-4" />
                Explore Breakthroughs
              </Link>
            </div>
          </div>
          <div className="hero-panel" aria-label="CrushingT1 awareness highlights">
            <div className="hero-panel-rainbow" />
            <div className="relative z-10 grid gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-ocean">Advancements & Breakthroughs</p>
                  <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Learning today so we can change tomorrow.</h2>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="meter">
                  <span className="flex items-center gap-3 text-sm font-black uppercase text-coral">
                    <GraduationCap className="h-8 w-8" />
                    Education
                  </span>
                  <strong>Clear Type 1 diabetes knowledge for families and communities</strong>
                </div>
                <div className="meter">
                  <span className="flex items-center gap-3 text-sm font-black uppercase text-ocean">
                    <FlaskConical className="h-8 w-8" />
                    Research
                  </span>
                  <strong>New research, care improvements, and breakthrough updates</strong>
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
        eyebrow="Support our mission"
        title="Donate today"
        intro="Your support helps CrushingT1 create clear Type 1 diabetes education, amplify family stories, and prepare responsible giving paths as the foundation grows."
      >
        <div className="max-w-3xl">
          <div className="rounded-lg bg-ink p-8 text-white shadow-soft sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-amber">Donations make the work possible</p>
            <h3 className="mt-3 text-3xl font-black leading-tight">Help us turn awareness into action.</h3>
            <p className="mt-4 leading-8 text-slate-200">
              Every pledge helps fund education campaigns and build momentum for T1D research support.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/donations" className="btn btn-primary">
                Donate or pledge
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
}

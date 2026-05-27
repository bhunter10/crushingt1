import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bed,
  BellRing,
  Droplet,
  Eye,
  Frown,
  Heart,
  Siren,
  Syringe,
  Toilet,
  TrendingDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Signs of Type 1 Diabetes | CrushingT1",
  description:
    "Learn common Type 1 diabetes warning signs, when to ask for a blood glucose check, and when symptoms may need urgent medical attention."
};

const symptoms = [
  {
    icon: Droplet,
    title: "Extreme Thirst",
    color: "text-sky-500",
    bg: "bg-sky-50"
  },
  {
    icon: Toilet,
    title: "Frequent Urination",
    color: "text-teal-500",
    bg: "bg-teal-50"
  },
  {
    icon: TrendingDown,
    title: "Weight Loss",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: Bed,
    title: "Fatigue",
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    icon: Eye,
    title: "Blurry Vision",
    color: "text-violet-500",
    bg: "bg-violet-50"
  },
  {
    icon: Frown,
    title: "Nausea",
    color: "text-coral",
    bg: "bg-red-50"
  }
];

function RainbowSweep() {
  return (
    <svg className="absolute bottom-0 left-[-8%] h-28 w-[116%]" viewBox="0 0 1100 120" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="signs-rainbow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#f2644b" />
          <stop offset="19%" stopColor="#f7b538" />
          <stop offset="38%" stopColor="#22c55e" />
          <stop offset="58%" stopColor="#00a6a6" />
          <stop offset="78%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="signs-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="10%" stopColor="white" stopOpacity="1" />
          <stop offset="86%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
        <mask id="signs-rainbow-fade">
          <rect width="1100" height="120" fill="url(#signs-fade)" />
        </mask>
      </defs>
      <path
        d="M0 91 C250 72 438 76 650 58 C820 44 940 31 1100 17"
        fill="none"
        mask="url(#signs-rainbow-fade)"
        stroke="url(#signs-rainbow)"
        strokeLinecap="round"
        strokeWidth="17"
      />
      <path
        d="M0 108 C255 91 452 92 664 75 C836 61 952 50 1100 37"
        fill="none"
        mask="url(#signs-rainbow-fade)"
        stroke="url(#signs-rainbow)"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  );
}

const actionCards = [
  {
    icon: Eye,
    title: "See the Signs",
    text: "Symptoms may come on quickly.",
    color: "text-ocean"
  },
  {
    icon: Syringe,
    title: "Check Now",
    text: "Ask for a blood glucose check.",
    color: "text-teal"
  },
  {
    icon: Siren,
    title: "Get Help",
    text: "Seek urgent care if symptoms are severe.",
    color: "text-coral"
  }
];

function GlucoseMeter() {
  return (
    <div className="relative mx-auto h-36 w-24 sm:mx-0" aria-hidden="true">
      <div className="absolute left-3 top-0 h-28 w-20 rounded-[1.4rem] border-4 border-[#123d67] bg-[#0c3154] p-3 shadow-lg">
        <div className="rounded-md border-2 border-[#9fb1bf] bg-[#eff4eb] px-2 py-1 text-center font-mono text-2xl font-black text-ink">105</div>
        <div className="mt-4 flex justify-center gap-2">
          <span className="h-5 w-5 rounded-full bg-slate-500" />
          <span className="h-5 w-5 rounded-full bg-slate-500" />
        </div>
      </div>
      <div className="absolute bottom-0 left-11 h-10 w-5 rounded-b-md border border-slate-300 bg-white">
        <div className="mx-auto mt-5 h-4 w-1 rounded-full bg-coral" />
      </div>
    </div>
  );
}

export default function SignsOfType1DiabetesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl overflow-hidden bg-white shadow-soft">
          <div className="relative min-h-[32rem] px-6 pb-24 pt-12 sm:px-10 lg:px-14">
            <div className="relative z-10 max-w-lg pt-8">
              <h1 className="text-5xl font-black uppercase leading-none text-[#073260] sm:text-6xl lg:text-7xl">
                Learn the Signs
              </h1>
              <p className="mt-6 text-2xl font-black leading-tight text-teal">
                Early recognition can save lives.
              </p>
              <p className="mt-5 max-w-md text-lg font-semibold leading-8 text-slate-700">
                Notice the warning signs of Type 1 diabetes and ask for a glucose check.
              </p>
            </div>
            <div className="relative -mx-6 mt-6 h-96 sm:mx-0 sm:ml-auto sm:h-80 sm:max-w-2xl lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[29rem] lg:w-[58%] lg:max-w-none">
              <Image
                src="/images/learn-signs-water-hero.png"
                alt="Child drinking water"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover object-right-top"
              />
            </div>
            <RainbowSweep />
          </div>

          <div className="px-6 pb-10 pt-5 sm:px-10 lg:px-14">
            <p className="text-center text-2xl font-black uppercase tracking-wide text-[#073260]">T1D warning signs</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {symptoms.map(({ icon: Icon, title, color, bg }) => (
                <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-[0_12px_30px_rgba(17,34,53,0.08)]">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-lg ${bg} ${color}`} aria-hidden="true">
                    <Icon className="h-11 w-11" strokeWidth={1.9} />
                  </div>
                  <h2 className="mt-5 text-2xl font-black leading-tight text-ink">{title}</h2>
                </article>
              ))}
            </div>
          </div>

          <div className="px-6 pb-10 sm:px-10 lg:px-14">
            <div className="grid items-center gap-6 rounded-lg bg-white p-6 shadow-soft sm:grid-cols-[8rem_1fr]">
              <GlucoseMeter />
              <div>
                <p className="text-lg font-black text-slate-700">When in doubt,</p>
                <h2 className="mt-1 text-3xl font-black uppercase leading-tight text-[#073260] sm:text-4xl">
                  Ask for a glucose check
                </h2>
                <Link href="/contact" className="btn btn-primary mt-6 w-full sm:w-auto sm:min-w-72">
                  Get a Glucose Check
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-mist px-6 py-10 sm:px-10 lg:px-14">
            <p className="text-center text-2xl font-black uppercase tracking-wide text-[#073260]">Know when to act</p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {actionCards.map(({ icon: Icon, title, text, color }) => (
                <article key={title} className="rounded-lg bg-white p-6 text-center shadow-[0_12px_30px_rgba(17,34,53,0.08)]">
                  <Icon className={`mx-auto h-14 w-14 ${color}`} aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-black text-ink">{title}</h2>
                  <p className="mt-3 text-lg font-semibold leading-8 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-[#073260] px-6 py-8 text-white sm:px-10 lg:px-14">
            <div className="flex items-start gap-4">
              <Heart className="mt-1 h-12 w-12 flex-none text-white" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-black">Share. Save. Protect.</h2>
                <p className="mt-2 max-w-xl text-lg font-semibold leading-8 text-blue-100">
                  Share these signs with family, friends, coaches, and caregivers.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 px-6 py-6 sm:px-10 lg:px-14">
            <div className="flex items-start gap-3 rounded-lg border border-coral/30 bg-coral/10 p-4">
              <BellRing className="mt-1 h-6 w-6 flex-none text-coral" aria-hidden="true" />
              <p className="leading-7 text-slate-800">
                This page is for awareness, not diagnosis. For severe symptoms, urgent illness, vomiting, deep breathing, confusion, or concern about DKA, seek medical care right away.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

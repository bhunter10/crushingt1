import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { navItems, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="text-2xl font-black">CrushingT1</p>
          <p className="mt-3 max-w-xl leading-7 text-slate-300">
            A Type 1 diabetes awareness foundation in progress, built to educate families, amplify lived experience, and prepare a responsible path for future support.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            CrushingT1 is not yet a registered nonprofit. Donation language and receipts will be updated when formal status or a fiscal sponsor is in place.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-2 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:col-span-2">
          <p className="text-sm font-black uppercase tracking-wide text-amber">Social</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/20"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

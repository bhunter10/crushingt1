import Link from "next/link";
import { navItems, socialLinks } from "@/lib/content";

const socialButtonStyles = [
  "bg-[#ff0000] text-white hover:bg-[#d90000]",
  "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:brightness-110"
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="text-2xl font-black">CrushingT1</p>
          <p className="mt-3 max-w-xl leading-7 text-slate-300">
            A Type 1 diabetes awareness foundation built to educate families, progress research, and build awareness.
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
          <p className="text-sm font-black uppercase tracking-wide text-white">Follow us</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition hover:-translate-y-0.5 ${socialButtonStyles[index % socialButtonStyles.length]}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

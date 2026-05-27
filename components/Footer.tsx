import Link from "next/link";
import { navItems, socialLinks } from "@/lib/content";

const socialButtonStyles = [
  "bg-[#ff0000] text-white hover:bg-[#d90000]",
  "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:brightness-110"
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-9 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <nav aria-label="Footer navigation">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-sky-200">Explore</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-slate-100 transition hover:border-white/25 hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className="md:text-right">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-white">Follow us</p>
          <div className="mt-4 flex flex-wrap gap-3 md:justify-end">
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
        <div className="border-t border-white/10 pt-5 text-sm font-semibold text-slate-300 md:col-span-2">
          <p>&copy; {new Date().getFullYear()} CrushingT1</p>
        </div>
      </div>
    </footer>
  );
}

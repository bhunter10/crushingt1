import Image from "next/image";
import Link from "next/link";
import { HandHeart, Menu } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex min-w-0 items-center" aria-label="CrushingT1 home">
          <Image
            src="/images/logo-crushing-t1-wide.png"
            alt="CrushingT1"
            width={900}
            height={347}
            priority
            sizes="(min-width: 1280px) 240px, (min-width: 1024px) 190px, (min-width: 640px) 220px, 180px"
            className="h-auto w-[180px] flex-none object-contain sm:w-[220px] lg:w-[190px] xl:w-[240px]"
          />
        </Link>
        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/donations" className="btn btn-primary">
            <HandHeart className="h-4 w-4" />
            Support
          </Link>
        </div>
        <details className="relative lg:hidden">
          <summary className="mobile-menu-button" aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-3 font-semibold text-slate-700 hover:bg-mist">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

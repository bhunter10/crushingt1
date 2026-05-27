"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HandHeart, Menu } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex min-w-0 items-center" aria-label="CrushingT1 home">
          <Image
            src="/images/logo-crushing-header-new.png"
            alt="CrushingT1"
            width={520}
            height={581}
            priority
            sizes="(min-width: 1024px) 92px, (min-width: 640px) 82px, 72px"
            className="h-[72px] w-auto flex-none object-contain sm:h-[82px] lg:h-[92px]"
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
        <details className="relative lg:hidden" open={isMenuOpen} onToggle={(event) => setIsMenuOpen(event.currentTarget.open)}>
          <summary className="mobile-menu-button" aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-white/10 bg-black p-3 shadow-soft">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-3 font-semibold text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

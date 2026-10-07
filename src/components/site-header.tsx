"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

function NavLinks({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Разделы" className={className}>
      {nav.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={current ? "page" : undefined}
            className={`relative inline-flex items-center transition-colors ${
              current
                ? "text-ink after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-pine"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  return (
    // On phones the brand row scrolls away and only the section row stays pinned.
    <header className="sticky top-[calc(-3.5rem-3px)] z-40 border-t-[3px] border-pine bg-paper sm:top-0">
      <div className="shell flex h-14 items-stretch justify-between gap-4 sm:h-[4.5rem]">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="font-display text-[1.65rem] leading-none font-semibold tracking-[-0.02em]">Липа</span>
          <span className="hidden border-l border-line pl-3 text-[0.8125rem] leading-tight text-ink-soft md:block">
            столярная мастерская
            <br />
            в Ярославле
          </span>
        </Link>
        <div className="flex items-stretch gap-8">
          <NavLinks className="hidden items-stretch gap-7 text-[0.98rem] sm:flex" />
          <a
            href={site.phone.href}
            className="flex items-center text-[0.95rem] font-semibold whitespace-nowrap tabular-nums sm:hidden lg:flex"
          >
            {site.phone.display}
          </a>
        </div>
      </div>
      <NavLinks className="shell flex h-11 items-stretch justify-between border-t border-line text-[0.95rem] sm:hidden" />
      <div className="border-b border-line" />
    </header>
  );
}

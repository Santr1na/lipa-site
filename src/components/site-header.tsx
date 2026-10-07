"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="h-[3px] bg-pine" />
      <div className="shell flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <Link href="/" className="block w-fit">
          <span className="font-display block text-[1.7rem] leading-none font-medium tracking-[-0.03em]">
            Липа
          </span>
          <span className="mt-1 block text-[0.75rem] tracking-[0.12em] text-ink-soft uppercase">
            столярная мастерская
          </span>
        </Link>
        <nav aria-label="Разделы" className="flex flex-wrap gap-x-5 gap-y-1">
          {nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center gap-2 text-[0.98rem] ${
                  current ? "text-pine" : "text-ink-soft hover:text-ink"
                }`}
              >
                {current ? <span aria-hidden="true" className="size-1.5 bg-pine" /> : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

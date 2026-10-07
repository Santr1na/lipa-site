import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-x-8 gap-y-10 py-12 sm:grid-cols-2 md:py-14 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-4">
          <p className="font-display text-[1.65rem] leading-none font-semibold tracking-[-0.02em]">Липа</p>
          <p className="mt-3 max-w-[18rem] text-[0.95rem] text-ink-soft">
            Столярная мастерская в&nbsp;Ярославле. Столы, скамьи и&nbsp;полки из&nbsp;массива с&nbsp;{site.since}&nbsp;года.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-sm text-ink-soft">Адрес</p>
          <p className="mt-2">
            {site.city}
            <br />
            <span className="whitespace-nowrap">{site.address.street}</span>
            <br />
            {site.address.building}
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-sm text-ink-soft">Телефон</p>
          <a href={site.phone.href} className="link mt-2 inline-block font-semibold whitespace-nowrap tabular-nums">
            {site.phone.display}
          </a>
          <ul className="mt-2 text-[0.95rem]">
            {site.hours.map((row) => (
              <li key={row.short}>
                {row.short} — {row.time}
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Разделы в подвале" className="flex flex-col items-start gap-1.5 lg:col-span-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-line py-5 text-sm text-ink-soft">
          <span>© {site.since}–2026 Столярная мастерская «Липа»</span>
          <span>Ярославль</span>
        </div>
      </div>
    </footer>
  );
}

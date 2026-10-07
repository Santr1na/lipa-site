import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="shell grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl leading-none font-medium">Липа</p>
          <p className="mt-3 max-w-[16rem] text-sm text-ink-soft">
            Столярная мастерская в Ярославле. Столы, скамьи и полки из массива.
          </p>
        </div>
        <div>
          <p className="text-sm text-ink-soft">Адрес</p>
          <p className="mt-2">
            {site.city}
            <br />
            {site.street}
            <br />
            {site.building}
          </p>
        </div>
        <div>
          <p className="text-sm text-ink-soft">Телефон и часы</p>
          <a href={site.phoneHref} className="mt-2 block font-medium">
            {site.phoneDisplay}
          </a>
          <p className="mt-2 text-sm">
            {site.hoursPrimary}
            <br />
            {site.hoursClosed}
          </p>
        </div>
        <nav aria-label="Разделы в подвале" className="flex flex-col items-start gap-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink hover:text-pine">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell border-t border-line py-4 text-sm text-ink-soft">© 2026 Липа</div>
    </footer>
  );
}

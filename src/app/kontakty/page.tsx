import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Адрес, часы и телефон столярной мастерской «Липа» в Ярославле.",
};

export default function ContactsPage() {
  return (
    <main id="content" className="shell pt-10 pb-8 md:pt-14">
      <PageIntro kicker="Контакты" title="Как с нами связаться">
        <p>
          Это прямой способ дозвониться и приехать. Заявки с сайта не собираем — пишете или
          звоните по номеру ниже, в часы работы.
        </p>
      </PageIntro>

      <p className="mt-8">
        <a
          href={site.phoneHref}
          className="font-display text-[clamp(1.7rem,6vw,3rem)] leading-none font-medium tracking-[-0.03em] text-pine"
        >
          {site.phoneDisplay}
        </a>
      </p>

      <div className="mt-10 grid gap-10 border-t border-line pt-8 md:grid-cols-3">
        <section>
          <h2 className="font-display text-2xl font-medium">Адрес</h2>
          <p className="mt-3">
            {site.city}
            <br />
            {site.street}
            <br />
            {site.building}
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Часы</h2>
          <p className="mt-3">
            {site.hoursPrimary}
            <br />
            {site.hoursClosed}
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Как зайти</h2>
          <p className="mt-3 text-ink-soft">
            Въезд во двор с улицы Полушкина Роща. Мастерская в строении 3, на двери табличка
            «Липа». Если едете первый раз, позвоните от ворот — выйдем.
          </p>
        </section>
      </div>
    </main>
  );
}

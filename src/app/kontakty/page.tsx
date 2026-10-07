import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { ButtonLink } from "@/components/links";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";
import { ru } from "@/lib/typo";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Адрес, часы работы и телефон столярной мастерской «Липа» в Ярославле.",
};

export default function ContactsPage() {
  return (
    <main id="content" className="pb-20 md:pb-28">
      <div className="shell grid gap-12 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-7">
          <PageIntro kicker="Контакты" title="Как с нами связаться">
            <p>
              {ru(
                "Телефон — основной способ связи. Звоните или пишите в мессенджер на этот номер в часы работы. Заявок через сайт мы не принимаем.",
              )}
            </p>
          </PageIntro>

          <a
            href={site.phone.href}
            className="mt-8 block max-w-full font-display text-[clamp(1.65rem,10.2vw,3.5rem)] leading-none tracking-[-0.03em] whitespace-nowrap text-pine tabular-nums"
          >
            {site.phone.display}
          </a>
          <ButtonLink href={site.phone.href} className="mt-6">
            Позвонить
          </ButtonLink>

          <dl className="mt-12 border-t border-ink">
            {[
              {
                label: "Адрес",
                value: (
                  <>
                    {site.city}, <span className="whitespace-nowrap">{site.address.street}</span>,{" "}
                    {site.address.building}
                  </>
                ),
              },
              {
                label: "Часы",
                value: (
                  <ul>
                    {site.hours.map((row) => (
                      <li key={row.days}>
                        {row.days}
                        {"\u00a0— "}
                        <span className="tabular-nums">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                label: "Как найти",
                value: ru(
                  "Въезд во двор с улицы Полушкина Роща, через ворота с вывеской «Склады». Мастерская — в строении 3, на двери табличка «Липа». Если едете впервые, позвоните от ворот — встретим.",
                ),
              },
              {
                label: "Самовывоз",
                value: ru("Готовое изделие можно забрать в часы работы. Грузим в машину сами, углы защищаем картоном."),
              },
            ].map((row) => (
              <div
                key={row.label}
                className="grid gap-1.5 border-b border-line py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="h3 text-[1.2rem]">{row.label}</dt>
                <dd className="max-w-2xl">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="min-w-0 lg:col-span-5 lg:pt-2">
          <Frame
            photo="master"
            reveal="load"
            className="aspect-[4/5]"
            sizes="(min-width: 1152px) 420px, (min-width: 1024px) 38vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          />
          <figcaption className="mt-3 text-[0.95rem] text-ink-soft">
            {ru("В цехе на Полушкиной Роще. Перед визитом лучше позвонить: во время склейки у нас пыльно.")}
          </figcaption>
        </figure>
      </div>
    </main>
  );
}

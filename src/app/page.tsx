import Link from "next/link";
import { Frame } from "@/components/frame";
import { ArrowLink, ButtonLink } from "@/components/links";
import { Spec } from "@/components/spec";
import { site } from "@/lib/site";
import { dotted, price, ru } from "@/lib/typo";
import { featured, lowestPrice, sizeLines, workBySlug } from "@/lib/works";

const steps = [
  "Позвоните или напишите, что нужно: стол, скамья, полки или стеллаж.",
  "Пришлите размеры и фото места, где будет стоять мебель.",
  "Мы называем породу, цену и срок. После предоплаты начинаем раскрой.",
];

export default function HomePage() {
  const hero = workBySlug("posad");

  return (
    <main id="content">
      <section className="shell pt-8 md:pt-14 lg:pt-16">
        <p className="kicker">Мебель на заказ с {site.since} года</p>
        <h1 className="display mt-5 max-w-[19em]">{ru("Столы, скамьи и полки из массива — под ваш размер")}</h1>

        <div className="mt-6 grid gap-x-12 gap-y-8 lg:mt-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="lead max-w-xl text-ink-soft">
            {ru(
              "«Липа» — небольшой цех на Полушкиной Роще в Ярославле. Делаем мебель из дуба, ясеня, ольхи и сосны и покрываем её маслом.",
            )}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
            <ButtonLink href="/raboty">Работы и цены</ButtonLink>
            <ArrowLink href="/zakaz">Как заказать</ArrowLink>
          </div>
        </div>

        <figure className="order-2 min-w-0 lg:order-none lg:col-span-12 lg:row-start-2 lg:mt-4">
          <Frame
            photo="posad"
            reveal="load"
            eager
            className="aspect-square sm:aspect-[3/2] lg:aspect-[16/9]"
            sizes="(min-width: 1152px) 1088px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          />
          <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[0.95rem]">
            <span>
              {hero.kind} «{hero.name}»<span className="text-ink-soft">{"\u00a0· "}{hero.wood}</span>
            </span>
            <Link href="/raboty#posad" className="link tabular-nums">
              {price(hero.price)}
            </Link>
          </figcaption>
        </figure>

        <Spec
          className="order-3 border-t border-line pt-3 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-end lg:border-t-0 lg:pt-0"
          rows={[
            { label: "Цены", value: `от ${price(lowestPrice)}` },
            { label: "Срок", value: "2–7 недель" },
            { label: "Породы", value: "дуб, ясень, ольха, сосна" },
            { label: "Доставка", value: "по Ярославлю" },
          ]}
        />
        </div>
      </section>

      <section className="shell mt-20 md:mt-28" aria-labelledby="works-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-ink pb-4">
          <h2 id="works-heading" className="h2">
            Что заказывают чаще всего
          </h2>
          <ArrowLink href="/raboty" className="-mb-2">
            Все работы и цены
          </ArrowLink>
        </div>
        <ul>
          {featured.map((work) => (
            <li key={work.slug}>
              <Link
                href={`/raboty#${work.slug}`}
                className="group grid grid-cols-[5.25rem_minmax(0,1fr)] items-center gap-x-3 border-b border-line py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:gap-x-8 sm:py-5"
              >
                <Frame
                  photo={work.photo}
                  reveal="none"
                  className="aspect-[4/3]"
                  sizes="(min-width: 640px) 136px, 84px"
                />
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <span className="min-w-0 font-display text-[1.3rem] leading-tight group-hover:text-pine">
                      {work.name}
                    </span>
                    <span className="ml-auto shrink-0 text-right font-display text-lg leading-tight whitespace-nowrap tabular-nums sm:hidden">
                      {price(work.price)}
                      {work.priceNote ? (
                        <span className="mt-0.5 block font-sans text-[0.8rem] font-normal whitespace-normal text-ink-soft">{work.priceNote}</span>
                      ) : null}
                    </span>
                  </span>
                  <span className="mt-1 block text-[0.95rem] text-ink-soft">
                    {dotted(ru(work.kind), work.wood, sizeLines(work).join(", "))}
                  </span>
                </span>
                <span className="hidden text-right font-display text-xl leading-tight tabular-nums sm:block">
                  {price(work.price)}
                  {work.priceNote ? (
                    <span className="mt-0.5 block font-sans text-[0.9rem] text-ink-soft">{work.priceNote}</span>
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell mt-20 grid items-center gap-8 md:mt-28 lg:grid-cols-12 lg:gap-12" aria-labelledby="shop-heading">
        <div className="lg:col-span-5">
          <p className="kicker">Мастерская</p>
          <h2 id="shop-heading" className="h2 mt-4">
            Цех, а не салон
          </h2>
          <p className="mt-4 text-ink-soft">
            {ru(
              "Витрины у нас нет. Есть верстак, склад сухой доски и место, где изделие собирают целиком, прежде чем везти к вам. Образцы пород и масла можно посмотреть на месте — позвоните за час.",
            )}
          </p>
          <ArrowLink href="/masterskaya" className="mt-5">
            Как устроена мастерская
          </ArrowLink>
        </div>
        <Frame
          photo="rubanok"
          className="aspect-[4/5] min-w-0 sm:aspect-[3/2] lg:col-span-7"
          sizes="(min-width: 1152px) 620px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
        />
      </section>

      <section className="mt-20 bg-paper-deep md:mt-28" aria-labelledby="order-heading">
        <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="order-heading" className="h2">
              Как начинается заказ
            </h2>
            <ol className="mt-7 border-t border-ink/15">
              {steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 border-b border-ink/15 py-4">
                  <span className="font-display text-lg text-pine tabular-nums">0{index + 1}</span>
                  <span>{ru(step)}</span>
                </li>
              ))}
            </ol>
            <ArrowLink href="/zakaz" className="mt-5">
              Порядок, сроки и оплата
            </ArrowLink>
          </div>
          <div className="self-start border-t-2 border-pine pt-5 lg:col-span-4 lg:col-start-9">
            <p className="text-[0.95rem] text-ink-soft">Телефон мастерской</p>
            <a
              href={site.phone.href}
              className="mt-1 block font-display text-[1.9rem] leading-tight whitespace-nowrap tabular-nums"
            >
              {site.phone.display}
            </a>
            <p className="mt-2 text-[0.95rem] text-ink-soft">
              {site.hours[0].short}, {site.hours[0].time}. {ru("На этот же номер можно написать в мессенджер.")}
            </p>
            <ButtonLink href={site.phone.href} className="mt-5">
              Позвонить
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

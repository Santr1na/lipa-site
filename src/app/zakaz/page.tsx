import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { ButtonLink } from "@/components/links";
import { PageIntro } from "@/components/page-intro";
import { Spec } from "@/components/spec";
import { site } from "@/lib/site";
import { ru } from "@/lib/typo";

export const metadata: Metadata = {
  title: "Заказ",
  description:
    "Как заказать мебель в мастерской «Липа»: что прислать, сроки изготовления, предоплата и доставка по Ярославлю.",
};

const steps = [
  {
    title: "Звонок или сообщение",
    text: "Позвоните или напишите на номер мастерской. Скажите, что нужно: стол, скамья, полки или стеллаж.",
  },
  {
    title: "Размеры и фото",
    text: "Пришлите размеры и фото места. Для стола напишите, сколько человек будет за ним сидеть.",
  },
  {
    title: "Цена и срок",
    text: "В тот же или на следующий день называем породу, конструкцию, цену и срок. Если нужной доски нет, сразу предлагаем замену.",
  },
  {
    title: "Предоплата",
    text: "После согласия — предоплата 50 %. С этого дня изделие стоит в очереди, и мы начинаем раскрой.",
  },
  {
    title: "Готово",
    text: "Сообщаем, когда изделие собрано. Остаток — при получении: самовывоз из мастерской или доставка по Ярославлю.",
  },
];

const send = [
  "Что нужно: стол, скамья, полки или стеллаж",
  "Длина, ширина и, если важно, высота",
  "Фото комнаты, ниши или стены",
  "Для стола — сколько человек за ним сидит",
  "Порода, если есть пожелание",
  "Потолок бюджета, если он жёсткий",
];

const terms = [
  { label: "Полки", value: "2–3 недели" },
  { label: "Скамья", value: "2–4 недели" },
  { label: "Журнальный стол", value: "2–4 недели" },
  { label: "Обеденный стол", value: "4–6 недель" },
  { label: "Стеллаж", value: "5–7 недель" },
];

const money = [
  { label: "Предоплата", value: "50 % после согласия" },
  { label: "Остаток", value: "при получении" },
  { label: "Самовывоз", value: "бесплатно" },
  { label: "Доставка по городу", value: "от 2 000 ₽" },
];

export default function OrderPage() {
  return (
    <main id="content" className="pb-20 md:pb-28">
      <div className="shell pt-10 md:pt-14">
        <PageIntro kicker="Заказ" title="Как сделать заказ">
          <p>
            {ru(
              "Формы на сайте нет — по телефону быстрее. Вы присылаете размеры и фото, мы называем цену и срок. Чертёж делаем сами и показываем до начала работы.",
            )}
          </p>
        </PageIntro>
      </div>

      <div className="shell mt-12 grid gap-14 md:mt-16 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
        <div className="min-w-0 lg:col-span-7">
          <h2 className="sr-only">Порядок заказа</h2>
          <ol className="border-t border-ink">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 border-b border-line py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)]">
                <span className="font-display text-xl text-pine tabular-nums">0{index + 1}</span>
                <div>
                  <h3 className="h3">{step.title}</h3>
                  <p className="mt-1.5 text-ink-soft">{ru(step.text)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="min-w-0 self-start lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
          <div className="border border-line bg-paper-deep/60 p-5 sm:p-7">
            <h2 className="h3">Что прислать</h2>
            <ul className="mt-4 border-t border-line">
              {send.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line py-2.5">
                  <span aria-hidden="true" className="text-ink-soft">
                    —
                  </span>
                  {ru(item)}
                </li>
              ))}
            </ul>

            <h2 className="h3 mt-8">Сроки</h2>
            <p className="mt-1 text-[0.95rem] text-ink-soft">{ru("От предоплаты до готовности, очередь уже учтена.")}</p>
            <Spec className="mt-3 border-t border-line pt-1" rows={terms} />

            <h2 className="h3 mt-8">Оплата и доставка</h2>
            <Spec className="mt-3 border-t border-line pt-1" rows={money.map((row) => ({ ...row, value: ru(row.value) }))} />
            <p className="mt-4 text-[0.95rem] text-ink-soft">
              {ru("Подъём без лифта считаем отдельно: зависит от этажа и от того, разбирается ли изделие.")}
            </p>
          </div>

          <div className="mt-8 border-t-2 border-pine pt-5">
            <p className="text-[0.95rem] text-ink-soft">Телефон мастерской</p>
            <a
              href={site.phone.href}
              className="mt-1 block font-display text-[1.9rem] leading-tight whitespace-nowrap tabular-nums"
            >
              {site.phone.display}
            </a>
            <p className="mt-2 text-[0.95rem] text-ink-soft">
              {site.hours[0].days}, {site.hours[0].time}
            </p>
            <ButtonLink href={site.phone.href} className="mt-5">
              Позвонить
            </ButtonLink>
          </div>
        </aside>

        <figure className="min-w-0 lg:col-span-7">
          <Frame
            photo="ruletka"
            className="aspect-[4/5] sm:aspect-[3/2]"
            sizes="(min-width: 1152px) 600px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          />
          <figcaption className="mt-3 text-[0.95rem] text-ink-soft">
            {ru("Если рулетки под рукой нет, хватит длины стены и фото с какой-нибудь вещью рядом для масштаба.")}
          </figcaption>
        </figure>
      </div>
    </main>
  );
}

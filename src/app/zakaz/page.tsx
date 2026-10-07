import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Заказ",
  description:
    "Как заказать стол, скамью или полку в мастерской «Липа»: что прислать, сроки и предоплата.",
};

const steps = [
  `Позвоните ${site.phoneDisplay} или напишите сообщение на этот же номер. Назовите изделие: стол, скамья или полка.`,
  "Пришлите размеры и фото места. Если рулетки под рукой нет, хватит длины стены и снимка комнаты.",
  "Мы отвечаем породой, ценой и сроком. Если нужной доски нет на складе, говорим сразу и предлагаем замену.",
  "После согласия берём предоплату — половину суммы. С этого момента изделие стоит в очереди, и мы начинаем пилить.",
  "Остаток — когда работа готова. Самовывоз из мастерской или доставка по Ярославлю.",
];

const send = [
  "Что нужно сделать",
  "Длина, ширина и, если важно, высота",
  "Фото комнаты, ниши или стены",
  "Сколько человек сидит за столом, если это стол",
  "Порода, если есть пожелание",
  "Потолок бюджета, если он жёсткий",
];

const times = [
  ["Полка", "2–3 недели"],
  ["Скамья", "2–4 недели"],
  ["Стол", "3–6 недель"],
  ["Стол и скамьи", "4–6 недель"],
];

const money = [
  ["Предоплата", "50% после согласия"],
  ["Остаток", "при готовности"],
  ["Самовывоз", "бесплатно"],
  ["Доставка по городу", "от 2\u00a0000\u00a0₽"],
];

export default function OrderPage() {
  return (
    <main id="content" className="shell pt-10 pb-8 md:pt-14">
      <PageIntro kicker="Заказ" title="Как сделать заказ">
        <p>
          Формы на сайте нет. Договариваемся по телефону: вы присылаете размеры, мы называем
          цену и срок. Чертёж делаем сами.
        </p>
      </PageIntro>

      <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-16">
        <section className="min-w-0 lg:col-span-7" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="font-display text-2xl font-medium">
            Порядок
          </h2>
          <ol className="mt-4 border-t border-line">
            {steps.map((step, index) => (
              <li key={step} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-4">
                <span className="font-display text-pine tabular-nums">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <a href={site.phoneHref} className="font-display text-2xl font-medium text-pine">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            {site.hoursPrimary}. {site.hoursClosed}.
          </p>
        </section>

        <div className="min-w-0 lg:col-span-5">
          <aside className="border border-line bg-paper-deep/50 p-5 sm:p-6">
            <h2 className="font-display text-2xl font-medium">Что прислать</h2>
            <ul className="mt-4 border-t border-line">
              {send.map((item) => (
                <li key={item} className="border-b border-line py-2.5">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-2xl font-medium">Срок</h2>
            <p className="mt-2 text-sm text-ink-soft">От предоплаты до готовности, с учётом очереди.</p>
            <dl className="mt-3 border-t border-line">
              {times.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
                  <dt>{label}</dt>
                  <dd className="text-right tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-8 font-display text-2xl font-medium">Деньги</h2>
            <dl className="mt-3 border-t border-line">
              {money.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
                  <dt className="text-ink-soft">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-ink-soft">
              Подъём без лифта оговариваем отдельно: зависит от этажа и от того, разбирается ли
              стол.
            </p>
          </aside>
        </div>
      </div>

      <p className="mt-12 max-w-2xl">
        Адрес мастерской и как зайти во двор — на странице{" "}
        <Link href="/kontakty" className="border-b border-pine text-pine">
          контактов
        </Link>
        .
      </p>
    </main>
  );
}

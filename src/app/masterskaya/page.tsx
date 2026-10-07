import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { NextStep } from "@/components/next-step";
import { PageIntro } from "@/components/page-intro";
import { Spec } from "@/components/spec";
import { ru } from "@/lib/typo";

export const metadata: Metadata = {
  title: "Мастерская",
  description:
    "Как работает столярная мастерская «Липа» в Ярославле: сухая доска, соединения на шипах, масло вместо лака и честные сроки.",
};

const principles = [
  {
    title: "Сухая доска",
    text: "Дуб, ясень, ольху и сосну берём камерной сушки. Перед раскроем доска неделю лежит в цехе, чтобы привыкнуть к воздуху — тогда столешница не поведёт у вас дома.",
  },
  {
    title: "Соединения",
    text: "Ножки ставим на шипы, щиты клеим из ламелей. Там, где соединение держит вес, нет ни шурупов снаружи, ни мебельных уголков.",
  },
  {
    title: "Масло",
    text: "Два слоя масла с воском вместо лака. Дерево остаётся матовым и тёплым на ощупь, а царапину можно подшлифовать дома, без возврата в цех.",
  },
];

const terms = [
  { label: "Полки", value: "2–3 недели" },
  { label: "Скамья, журнальный стол", value: "2–4 недели" },
  { label: "Обеденный стол", value: "4–6 недель" },
  { label: "Стеллаж во всю стену", value: "5–7 недель" },
];

const declined = [
  "Кухни и шкафы-купе",
  "ЛДСП, МДФ и плёнку «под дерево»",
  "Реставрацию старой мебели",
  "Резьбу и золочение",
  "Большой стол «к выходным»",
];

export default function WorkshopPage() {
  return (
    <main id="content" className="pb-20 md:pb-28">
      <div className="shell pt-10 md:pt-14">
        <PageIntro kicker="Мастерская" title="Как мы работаем">
          <p>
            {ru(
              "«Липа» — небольшая мастерская в Ярославле. Нас трое: два столяра и мастер по отделке. Сами принимаем заказ, сами пилим и сами привозим. Салона нет — есть цех на Полушкиной Роще.",
            )}
          </p>
        </PageIntro>

        <figure className="mt-10 md:mt-14">
          <Frame
            photo="verstak"
            reveal="load"
            eager
            className="aspect-[4/5] sm:aspect-[16/9]"
            sizes="(min-width: 1152px) 1088px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          />
          <figcaption className="mt-3 text-[0.95rem] text-ink-soft">
            {ru("Верстак в цехе: чертёж, разметка и стружка от сегодняшней работы.")}
          </figcaption>
        </figure>
      </div>

      <section className="shell mt-16 md:mt-24" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="h2 max-w-xl">
          {ru("Три вещи, на которых держится мебель")}
        </h2>
        <ol className="mt-8 grid gap-10 lg:grid-cols-3">
          {principles.map((item, index) => (
            <li key={item.title} className="border-t border-ink pt-4">
              <p className="font-display text-pine tabular-nums">0{index + 1}</p>
              <h3 className="h3 mt-2">{item.title}</h3>
              <p className="mt-3 text-ink-soft">{ru(item.text)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell mt-16 grid gap-10 md:mt-24 md:grid-cols-2 md:gap-8">
        <figure className="min-w-0">
          <Frame photo="ship" className="aspect-[4/5]" sizes="(min-width: 1152px) 528px, (min-width: 768px) calc(50vw - 3rem), calc(100vw - 2.5rem)" />
          <figcaption className="mt-3 text-[0.95rem] text-ink-soft">
            {ru("Шип под ножку подгоняем стамеской, пока он не войдёт в гнездо без зазора.")}
          </figcaption>
        </figure>
        <figure className="min-w-0 md:mt-28">
          <Frame photo="sklad" className="aspect-[4/5]" sizes="(min-width: 1152px) 528px, (min-width: 768px) calc(50vw - 3rem), calc(100vw - 2.5rem)" />
          <figcaption className="mt-3 text-[0.95rem] text-ink-soft">
            {ru("Доска камерной сушки на складе. Каждую партию проверяем влагомером.")}
          </figcaption>
        </figure>
      </section>

      <section className="shell mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <h2 className="h2">Срок называем до предоплаты</h2>
          <p className="mt-4 text-ink-soft">
            {ru(
              "В срок уже входит очередь. Если доска нужной ширины кончилась, говорим об этом сразу и либо ждём поставку, либо предлагаем другую породу и пересчитываем цену.",
            )}
          </p>
          <Spec className="mt-6 border-t border-line pt-2" rows={terms} />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 className="h2">Чего не берём</h2>
          <ul className="mt-6 border-t border-line">
            {declined.map((item) => (
              <li key={item} className="flex gap-3 border-b border-line py-3">
                <span aria-hidden="true" className="text-ink-soft">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NextStep
        title="Приезжайте посмотреть доску вживую"
        text="Образцы пород и масла лежат в цехе. Позвоните за час: если идёт склейка, подскажем, когда удобнее зайти."
        primary={{ href: "/kontakty", label: "Адрес и часы" }}
        secondary={{ href: "/zakaz", label: "Как сделать заказ" }}
      />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/frame";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Мастерская",
  description:
    "Как устроена столярная мастерская «Липа» в Ярославле: дерево, сборка, масло и сроки.",
};

const blocks = [
  {
    title: "Дерево",
    text: "Дуб, ясень, сосна и берёза. Орех — когда есть сухая доска нужной ширины. Берём камерную сушку, не свежий лес с рынка. Щит склеиваем сами из ламелей.",
  },
  {
    title: "Сборка",
    text: "Чертёж с габаритом и сечением ножек. Потом раскрой, склейка щита, шипы или шканты там, где соединение несёт вес. Шурупы снаружи не оставляем.",
  },
  {
    title: "Масло",
    text: "Два слоя, без лаковой плёнки. Дерево остаётся матовым. Царапину потом можно подшлифовать и обновить маслом, без полной переделки в цехе.",
  },
];

const declined = [
  "Кухни целиком и встроенные шкафы",
  "ЛДСП, МДФ и плёнка «под дерево»",
  "Реставрация старой мебели",
  "Резной декор и золочение",
  "Срок «к субботе» на большой стол",
];

export default function WorkshopPage() {
  return (
    <main id="content" className="shell pt-10 pb-8 md:pt-14">
      <PageIntro kicker="Мастерская" title="Как мы работаем">
        <p>
          «Липа» — небольшая столярная мастерская в Ярославле. Салона с витриной нет: есть
          верстак, склад сухой доски и место, где изделие собирают целиком, прежде чем везти
          его к вам.
        </p>
      </PageIntro>

      <figure className="mt-10 md:mt-12">
        <Frame
          src="/photos/shop.jpg"
          alt="Столяр за верстаком в цехе, на стене развешаны доски и инструмент"
          crop="crop-shop"
          ratio="aspect-[4/5] md:aspect-[16/9]"
          sizes="(min-width: 1024px) 1120px, 100vw"
          priority
        />
        <figcaption className="mt-3 text-sm text-ink-soft">
          Цех на ул. Полушкина Роща, 16, строение 3. Приехать можно в часы работы.
        </figcaption>
      </figure>

      <div className="mt-12 grid border border-line md:grid-cols-3">
        {blocks.map((block) => (
          <section key={block.title} className="border-b border-line p-5 last:border-b-0 md:border-r md:border-b-0 md:p-6 md:last:border-r-0">
            <h2 className="font-display text-2xl font-medium">{block.title}</h2>
            <p className="mt-3 text-ink-soft">{block.text}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        <figure>
          <Frame
            src="/photos/hands.jpg"
            alt="Руки со стамеской за работой по деревянной заготовке"
            crop="crop-hands"
            ratio="aspect-[4/5]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <figcaption className="mt-3 text-sm text-ink-soft">Подгонка соединений до сборки.</figcaption>
        </figure>
        <figure>
          <Frame
            src="/photos/boards.jpg"
            alt="Стопка строганых досок и ручная пила"
            crop="crop-boards"
            ratio="aspect-[4/5]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <figcaption className="mt-3 text-sm text-ink-soft">
            Доска приходит сухой. Сырой горбыль в работу не берём.
          </figcaption>
        </figure>
      </div>

      <section className="mt-14 max-w-3xl" aria-labelledby="queue-heading">
        <h2 id="queue-heading" className="font-display text-2xl font-medium md:text-3xl">
          Срок называем до предоплаты
        </h2>
        <p className="mt-4 text-ink-soft">
          Полка обычно занимает две–три недели, скамья — две–четыре, стол — от трёх до шести.
          В срок уже входит очередь. Если доска нужной ширины кончилась, говорим об этом сразу
          и либо ждём поставку, либо меняем породу и цену.
        </p>
      </section>

      <section className="mt-12 max-w-3xl" aria-labelledby="no-heading">
        <h2 id="no-heading" className="font-display text-2xl font-medium md:text-3xl">
          Чего не берём
        </h2>
        <ul className="mt-4 border-t border-line">
          {declined.map((item) => (
            <li key={item} className="border-b border-line py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 max-w-3xl">
        Посмотреть доску и уже собранное изделие можно на месте. Если в цехе склейка, будет
        пыльно — позвоните за час, скажем, когда удобно зайти.{" "}
        <Link href="/kontakty" className="border-b border-pine text-pine">
          Адрес и часы
        </Link>
        . Если размер уже есть, сразу{" "}
        <Link href="/zakaz" className="border-b border-pine text-pine">
          к заказу
        </Link>
        .
      </p>
    </main>
  );
}

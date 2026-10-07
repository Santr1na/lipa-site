import Link from "next/link";
import { Frame, Thumb } from "@/components/frame";
import { featuredWorks } from "@/lib/works";

const facts = [
  { label: "Город", value: "Ярославль" },
  { label: "Изделия", value: "столы, скамьи, полки" },
  { label: "Дерево", value: "дуб, ясень, сосна, берёза" },
  { label: "Срок", value: "от двух недель" },
];

export default function HomePage() {
  const featured = featuredWorks();

  return (
    <main id="content">
      <div className="shell grid gap-8 pt-8 pb-6 md:pt-12 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10 lg:pt-16">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-pine">Ярославль</p>
          <h1 className="mt-3 max-w-[16em] font-display text-[1.85rem] leading-[1.15] font-medium tracking-[-0.02em] text-pretty sm:text-4xl lg:text-[2.9rem]">
            Делаем столы, скамьи и полки на заказ из цельного дерева.
          </h1>
          <p className="mt-4 max-w-xl text-ink-soft">
            Мастерская «Липа». Размер под комнату, покрытие — масло, без плёнки «под дерево».
          </p>
          <p className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/raboty" className="inline-flex min-h-11 items-center border-b border-ink pb-0.5 font-medium">
              Смотреть работы
            </Link>
            <Link href="/zakaz" className="inline-flex min-h-11 items-center border-b border-pine pb-0.5 font-medium text-pine">
              Как сделать заказ
            </Link>
          </p>
        </div>

        <figure className="order-2 min-w-0 lg:order-none lg:col-span-12">
          <Frame
            src="/photos/volga.jpg"
            alt="Обеденный стол из светлого дерева у окна, вокруг четыре стула"
            crop="crop-volga"
            ratio="aspect-[4/5] md:aspect-[16/10]"
            sizes="(min-width: 1024px) 1120px, 100vw"
            priority
          />
          <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-sm text-ink-soft">
            <span>Обеденный стол «Волга», дуб, 180 × 90 см</span>
            <Link href="/raboty#volga" className="text-ink underline decoration-line underline-offset-4 hover:text-pine">
              Карточка изделия
            </Link>
          </figcaption>
        </figure>

        <dl className="order-3 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:grid-cols-1 lg:self-end lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          {facts.map((fact) => (
            <div key={fact.label} className="min-w-0">
              <dt className="text-sm text-ink-soft">{fact.label}</dt>
              <dd className="mt-1 font-display text-lg leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="shell pt-12 pb-4 md:pt-16" aria-labelledby="works-heading">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="works-heading" className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            Сейчас в мастерской
          </h2>
          <Link href="/raboty" className="text-sm underline decoration-line underline-offset-4 hover:text-pine">
            Все изделия и цены
          </Link>
        </div>
        <ul className="mt-6 border-t border-line">
          {featured.map((work) => (
            <li key={work.slug}>
              <Link
                href={`/raboty#${work.slug}`}
                className="grid grid-cols-[4.75rem_minmax(0,1fr)] items-center gap-4 border-b border-line py-4 hover:bg-paper-deep/60 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:gap-6"
              >
                <Thumb src={work.image} crop={work.crop} />
                <span className="min-w-0">
                  <span className="font-display block text-xl leading-tight font-medium">{work.name}</span>
                  <span className="mt-1 block text-sm text-ink-soft">
                    {work.kind} · {work.material}
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{work.size}</span>
                </span>
                <span className="col-start-2 row-start-2 font-display text-lg tabular-nums sm:col-start-3 sm:row-start-1 sm:self-center sm:text-right">
                  {work.price}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell grid items-center gap-8 py-14 md:py-20 lg:grid-cols-12" aria-labelledby="shop-heading">
        <div className="lg:col-span-5">
          <h2 id="shop-heading" className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            Один цех на Полушкиной Роще
          </h2>
          <p className="mt-4 text-ink-soft">
            Салона с витриной нет. Есть верстак, сухая доска и место, где стол собирают целиком до того, как везти его к вам. Посмотреть образцы можно в часы работы — лучше позвонить за час.
          </p>
          <Link href="/masterskaya" className="mt-6 inline-flex min-h-11 items-center border-b border-ink pb-0.5 font-medium">
            Как устроена мастерская
          </Link>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <Frame
            src="/photos/shop.jpg"
            alt="Столяр за верстаком: вокруг доски, инструмент и стружка"
            crop="crop-shop"
            ratio="aspect-[4/5] md:aspect-[4/3]"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep" aria-labelledby="order-heading">
        <div className="shell py-12 md:py-16">
          <h2 id="order-heading" className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            Как начинается заказ
          </h2>
          <ol className="mt-6 max-w-3xl border-t border-line/80">
            {[
              "Позвоните и скажите, что нужно: стол, скамья или полка.",
              "Пришлите размеры и фото места, куда встанет мебель.",
              "Согласуем породу, цену, срок и предоплату — потом пилим.",
            ].map((step, index) => (
              <li key={step} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line/80 py-4">
                <span className="font-display text-pine tabular-nums">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <Link href="/zakaz" className="mt-6 inline-flex min-h-11 items-center border-b border-pine pb-0.5 font-medium text-pine">
            Полный порядок заказа
          </Link>
        </div>
      </section>
    </main>
  );
}

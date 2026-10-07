import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { NextStep } from "@/components/next-step";
import { PageIntro } from "@/components/page-intro";
import { Spec } from "@/components/spec";
import { site } from "@/lib/site";
import { dotted, price, ru } from "@/lib/typo";
import { sizeLines, works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Работы и цены",
  description:
    "Столы, скамьи, полки и стеллажи мастерской «Липа»: порода дерева, размеры, сроки и цены в рублях.",
};

function number(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function WorksPage() {
  return (
    <main id="content" className="pb-20 md:pb-28">
      <div className="shell pt-10 md:pt-14">
        <PageIntro kicker="Работы" title="Изделия и цены">
          <p>
            {ru(
              "Здесь то, что мы делаем чаще всего. Размеры меняем под вашу комнату и пересчитываем цену по той же конструкции. В цену входят шлифовка и два слоя масла, доставка по Ярославлю — отдельно.",
            )}
          </p>
        </PageIntro>

        <ol className="mt-10 border-t border-ink md:mt-12" aria-label="Цены на изделия">
          {works.map((work, index) => (
            <li key={work.slug} className="border-b border-line">
              <a
                href={`#${work.slug}`}
                className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-baseline gap-x-3 py-3.5 xl:grid-cols-[2.75rem_minmax(12rem,1.4fr)_minmax(0,0.8fr)_minmax(0,1.3fr)_9.5rem] xl:gap-x-6"
              >
                <span className="font-display text-[0.95rem] text-pine tabular-nums">{number(index)}</span>
                <span className="min-w-0">
                  <span className="font-display text-lg group-hover:text-pine">{work.name}</span>
                  <span className="text-ink-soft">
                    {"\u00a0— "}
                    {ru(work.kind.toLowerCase())}
                  </span>
                  <span className="mt-0.5 block text-[0.9rem] text-ink-soft xl:hidden">
                    {dotted(work.wood, sizeLines(work).join(", "))}
                  </span>
                </span>
                <span className="hidden min-w-0 xl:block">{work.wood}</span>
                <span className="hidden min-w-0 tabular-nums xl:block">
                  {sizeLines(work).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
                <span className="text-right font-display tabular-nums">
                  <span className="whitespace-nowrap">{price(work.price)}</span>
                  {work.priceNote ? (
                    <span className="block font-sans text-[0.85rem] text-ink-soft">{work.priceNote}</span>
                  ) : null}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="shell mt-16 grid gap-x-10 gap-y-16 md:mt-24 md:grid-cols-2 md:gap-y-24">
        {works.map((work, index) => (
          <article key={work.slug} id={work.slug} className="min-w-0 scroll-mt-20 sm:scroll-mt-28">
            <Frame
              photo={work.photo}
              className="aspect-square sm:aspect-[4/3]"
              sizes="(min-width: 1152px) 524px, (min-width: 768px) calc(50vw - 3.25rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
            />
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h2 className="h2">{work.name}</h2>
              <p className="shrink-0 text-right font-display text-xl tabular-nums md:text-2xl">
                {price(work.price)}
                {work.priceNote ? (
                  <span className="block font-sans text-[0.9rem] text-ink-soft">{work.priceNote}</span>
                ) : null}
              </p>
            </div>
            <p className="mt-1 text-ink-soft">
              <span className="font-display text-pine tabular-nums">{number(index)}</span>
              {"\u00a0· "}
              {ru(work.kind)}
            </p>
            <p className="mt-4 max-w-prose">{ru(work.note)}</p>
            <Spec
              className="mt-5 border-t border-line pt-2"
              rows={[
                { label: "Порода", value: work.wood },
                {
                  label: "Размер",
                  value: sizeLines(work).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  )),
                },
                { label: "Срок", value: work.term },
              ]}
            />
          </article>
        ))}
      </div>

      <NextStep
        title="Нужен другой размер или порода?"
        text="Пришлите длину стены или ниши и фото комнаты — посчитаем ту же конструкцию под ваш размер. Если пишете в часы работы, отвечаем в тот же день."
        primary={{ href: "/zakaz", label: "Как сделать заказ" }}
        secondary={{ href: site.phone.href, label: site.phone.display }}
      />
    </main>
  );
}

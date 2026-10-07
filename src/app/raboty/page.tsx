import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { PageIntro } from "@/components/page-intro";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Работы",
  description:
    "Столы, скамьи и полки мастерской «Липа»: порода дерева, размер и цена в рублях.",
};

export default function WorksPage() {
  return (
    <main id="content" className="shell pt-10 pb-8 md:pt-14">
      <PageIntro kicker="Работы" title="Изделия и цены">
        <p>
          Ниже — то, что делаем регулярно, с размером и ценой. Другой габарит считаем по той же
          конструкции и той же породе. В цену входят шлифовка и два слоя масла. Доставка по
          Ярославлю считается отдельно.
        </p>
      </PageIntro>

      <div className="mt-10 md:mt-14">
        {works.map((work, index) => (
          <article
            key={work.slug}
            id={work.slug}
            className="grid scroll-mt-32 gap-6 border-t border-line py-10 md:py-14 lg:grid-cols-12 lg:items-center lg:gap-12"
          >
            <div className={`min-w-0 lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <Frame
                src={work.image}
                alt={work.alt}
                crop={work.crop}
                ratio="aspect-[4/5] md:aspect-[4/3]"
                sizes="(min-width: 1024px) 640px, 100vw"
              />
            </div>
            <div className={`min-w-0 lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="font-display text-sm text-pine tabular-nums">0{index + 1}</p>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                {work.name}
              </h2>
              <p className="mt-1 text-ink-soft">{work.kind}</p>
              <p className="mt-4 max-w-prose text-pretty">{work.note}</p>
              <dl className="mt-6 border-t border-line">
                {[
                  ["Материал", work.material],
                  ["Размер", work.size],
                  ["Цена", work.price],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 border-b border-line py-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-4"
                  >
                    <dt className="text-ink-soft">{label}</dt>
                    <dd className={`min-w-0 sm:text-right ${label === "Цена" ? "font-display text-xl tabular-nums" : "tabular-nums"}`}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

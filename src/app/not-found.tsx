import type { Metadata } from "next";
import { ArrowLink } from "@/components/links";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <main id="content" className="shell py-20 md:py-28">
      <p className="kicker">404</p>
      <h1 className="h1 mt-4">Такой страницы нет</h1>
      <p className="lead mt-4 max-w-md text-ink-soft">Проверьте адрес или вернитесь к&nbsp;изделиям мастерской.</p>
      <ArrowLink href="/raboty" className="mt-6">
        Работы и цены
      </ArrowLink>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <main id="content" className="shell py-16 md:py-24">
      <p className="text-sm font-medium text-pine">404</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-[-0.02em]">Такой страницы нет</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        Проверьте адрес или вернитесь к изделиям мастерской.
      </p>
      <Link href="/" className="mt-6 inline-flex min-h-11 items-center border-b border-ink font-medium">
        На главную
      </Link>
    </main>
  );
}

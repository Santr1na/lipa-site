import type { Metadata } from "next";
import { Literata, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  variable: "--font-source",
  display: "swap",
});

const display = Literata({
  subsets: ["latin", "cyrillic"],
  axes: ["opsz"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Липа — столярная мастерская в Ярославле",
    template: "%s — Липа",
  },
  description:
    "Столярная мастерская «Липа» в Ярославле: столы, скамьи, полки и стеллажи на заказ из дуба, ясеня, ольхи и сосны. Цены, сроки и порядок заказа.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Липа",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${display.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          К содержанию
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Literata, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});

const display = Literata({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Липа — столярная мастерская в Ярославле",
    template: "%s — Липа",
  },
  description:
    "Столярная мастерская «Липа» в Ярославле делает столы, скамьи и полки на заказ из массива: дуб, ясень, сосна и берёза.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          К содержанию
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

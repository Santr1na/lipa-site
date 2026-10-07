import type { PhotoName } from "@/lib/photos";
import { dims } from "@/lib/typo";

export type Work = {
  slug: string;
  name: string;
  kind: string;
  wood: string;
  sizes: { label?: string; dims: number[] }[];
  price: number;
  priceNote?: string;
  term: string;
  note: string;
  photo: PhotoName;
};

export const works: Work[] = [
  {
    slug: "volga",
    name: "Волга",
    kind: "Обеденный стол",
    wood: "дуб, тёмное масло",
    sizes: [{ dims: [200, 95, 76] }],
    price: 118000,
    term: "4–6 недель",
    note: "Столешница толщиной 4 см на двух опорах-щитах, без проножки — стулья задвигаются свободно. Тёмное масло проявляет рисунок дуба и скрывает мелкие царапины.",
    photo: "volga",
  },
  {
    slug: "posad",
    name: "Посад",
    kind: "Стол и скамья",
    wood: "сосна",
    sizes: [
      { label: "стол", dims: [180, 85, 76] },
      { label: "скамья", dims: [160, 35, 45] },
    ],
    price: 64000,
    term: "4–6 недель",
    note: "Кухонный комплект из толстой сосны. Скамья целиком уходит под стол, вторая такая же — 16 000 ₽. Сосна мягкая, со временем на ней появятся следы жизни, и это ей идёт.",
    photo: "posad",
  },
  {
    slug: "naberezhnaya",
    name: "Набережная",
    kind: "Скамья в прихожую",
    wood: "дуб",
    sizes: [{ dims: [150, 38, 45] }],
    price: 31000,
    term: "2–4 недели",
    note: "Доска 5 см на двух сплошных опорах, без спинки. Выдерживает троих взрослых, а под ней остаётся место для обуви.",
    photo: "naberezhnaya",
  },
  {
    slug: "cherdak",
    name: "Чердак",
    kind: "Полки на рейках",
    wood: "ольха",
    sizes: [{ label: "полка", dims: [120, 25] }],
    price: 7500,
    priceNote: "за полку",
    term: "2–3 недели",
    note: "Полки лежат на стальных рейках, высоту каждой можно поменять без дрели. Пара реек с кронштейнами — 3 200 ₽. На фото набор из шести полок.",
    photo: "cherdak",
  },
  {
    slug: "koromyslo",
    name: "Коромысло",
    kind: "Стеллаж во всю стену",
    wood: "дуб",
    sizes: [{ label: "секция", dims: [80, 35, 280] }],
    price: 46000,
    priceNote: "за секцию",
    term: "5–7 недель",
    note: "Собираем из секций по 80 см и подгоняем по высоте до потолка. Внизу можно сделать закрытые ящики. Лестница на рейке считается отдельно, от 28 000 ₽.",
    photo: "koromyslo",
  },
  {
    slug: "oka",
    name: "Ока",
    kind: "Журнальный стол",
    wood: "ясень",
    sizes: [{ dims: [110, 60, 42] }],
    price: 34000,
    term: "2–4 недели",
    note: "Лёгкий стол на четырёх ножках с небольшим развалом. Ясень светлый и твёрдый, удары переносит лучше сосны и ольхи.",
    photo: "oka",
  },
];

export function workBySlug(slug: string) {
  const work = works.find((item) => item.slug === slug);
  if (!work) {
    throw new Error(`Не найдено изделие ${slug}`);
  }
  return work;
}

export const featured = ["volga", "naberezhnaya", "cherdak"].map(workBySlug);

export function sizeLines(work: Work) {
  return work.sizes.map((size) => (size.label ? `${size.label}\u00a0${dims(size.dims)}` : dims(size.dims)));
}

export const lowestPrice = Math.min(...works.map((work) => work.price));

export type Work = {
  slug: string;
  name: string;
  kind: string;
  material: string;
  size: string;
  price: string;
  note: string;
  image: string;
  alt: string;
  crop: string;
};

export const works: Work[] = [
  {
    slug: "volga",
    name: "Волга",
    kind: "Обеденный стол",
    material: "Дуб",
    size: "180 × 90 × 75 см",
    price: "94\u00a0000\u00a0₽",
    note: "Прямая кромка, четыре ножки без резного декора. Столешница склеена из дубовых ламелей. На фото — светлое масло. Более тёмный тон делаем, это отдельный слой и немного к сроку.",
    image: "/photos/volga.jpg",
    alt: "Обеденный стол из светлого дерева у окна, вокруг четыре стула",
    crop: "crop-volga",
  },
  {
    slug: "posad",
    name: "Посад",
    kind: "Стол и две скамьи",
    material: "Дуб",
    size: "стол 200 × 90 × 76 см, скамьи 180 × 36 × 45 см",
    price: "128\u00a0000\u00a0₽",
    note: "Комплект для кухни или большой комнаты. Скамьи без спинки, чтобы их можно было задвинуть под столешницу. Скамью можно заказать и отдельно.",
    image: "/photos/posad.jpg",
    alt: "Толстый деревянный стол и две скамьи на деревянном полу",
    crop: "crop-posad",
  },
  {
    slug: "naberezhnaya",
    name: "Набережная",
    kind: "Скамья",
    material: "Ясень",
    size: "160 × 38 × 45 см",
    price: "27\u00a0500\u00a0₽",
    note: "Сиденье из ясеня, спинки нет. Высота 45 см — обычная посадка за обеденным столом. Подушку не шьём, в цену входит только дерево и масло.",
    image: "/photos/naberezhnaya.jpg",
    alt: "Деревянная скамья у светлой стены",
    crop: "crop-bench",
  },
  {
    slug: "cherdak",
    name: "Чердак",
    kind: "Настенная полка",
    material: "Сосна",
    size: "140 × 22 см",
    price: "9\u00a0800\u00a0₽",
    note: "Одна полка со скрытым крепежом. Борт невысокий, чтобы книги не съезжали. Пара полок на одну стену считается как два изделия, крепёж уже в цене.",
    image: "/photos/cherdak.jpg",
    alt: "Светлая деревянная полка на стене, на ней книги и небольшие предметы",
    crop: "crop-shelf",
  },
  {
    slug: "koromyslo",
    name: "Коромысло",
    kind: "Стеллаж",
    material: "Берёза",
    size: "90 × 32 × 190 см",
    price: "41\u00a0000\u00a0₽",
    note: "Пять полок, задней стенки нет: легче придвинуть к стене и меньше мест, где копится пыль. Полки можно переставить по высоте при сборке у вас.",
    image: "/photos/koromyslo.jpg",
    alt: "Высокий деревянный стеллаж, плотно заполненный книгами",
    crop: "crop-book",
  },
  {
    slug: "oka",
    name: "Ока",
    kind: "Журнальный стол",
    material: "Орех",
    size: "Ø 90 см, высота 42 см",
    price: "46\u00a0000\u00a0₽",
    note: "Круглая столешница на низких ножках. Орех берём, когда на складе есть сухая доска. Если ширины не хватает, предлагаем дуб и называем другую цену до начала работы.",
    image: "/photos/oka.jpg",
    alt: "Круглый журнальный стол из тёмного дерева, на нём книги и растение",
    crop: "crop-oka",
  },
];

export const featuredSlugs = ["volga", "naberezhnaya", "koromyslo"] as const;

export function featuredWorks() {
  return featuredSlugs.map((slug) => {
    const work = works.find((item) => item.slug === slug);
    if (!work) {
      throw new Error(`Не найдено изделие ${slug}`);
    }
    return work;
  });
}

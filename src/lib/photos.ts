export type Photo = {
  src: string;
  alt: string;
  color: string;
  /** object-position from 768px up */
  focus: string;
  /** object-position on phones, where frames are narrower than the photo */
  focusSm: string;
};

export const photos = {
  posad: {
    src: "/photos/posad",
    alt: "Стол из сосны и скамья в светлой столовой у окна",
    color: "#c4ad92",
    focus: "58% 84%",
    focusSm: "60% 80%",
  },
  volga: {
    src: "/photos/volga",
    alt: "Обеденный стол из тёмного дуба, вокруг шесть плетёных стульев",
    color: "#ab9d8f",
    focus: "47% 60%",
    focusSm: "47% 60%",
  },
  naberezhnaya: {
    src: "/photos/naberezhnaya",
    alt: "Дубовая скамья с подушками в прихожей вдоль белой стены",
    color: "#c7baa9",
    focus: "78% 60%",
    focusSm: "86% 60%",
  },
  cherdak: {
    src: "/photos/cherdak",
    alt: "Полки из ольхи на стальных рейках вдоль тёмной стены",
    color: "#bdaa9a",
    focus: "60% 50%",
    focusSm: "55% 50%",
  },
  koromyslo: {
    src: "/photos/koromyslo",
    alt: "Дубовый стеллаж во всю стену с книгами и приставной лестницей",
    color: "#af9e8e",
    focus: "70% 50%",
    focusSm: "78% 50%",
  },
  oka: {
    src: "/photos/oka",
    alt: "Журнальный стол из светлого ясеня перед серым диваном",
    color: "#d1c6b8",
    focus: "22% 70%",
    focusSm: "8% 70%",
  },
  verstak: {
    src: "/photos/verstak",
    alt: "Верстак сверху: блокнот с чертежом, линейка, молоток, струбцина и стружка",
    color: "#bda894",
    focus: "50% 45%",
    focusSm: "42% 50%",
  },
  rubanok: {
    src: "/photos/rubanok",
    alt: "Столяр строгает брусок рубанком, вокруг завитки стружки",
    color: "#bba185",
    focus: "45% 50%",
    focusSm: "42% 50%",
  },
  ship: {
    src: "/photos/ship",
    alt: "Руки столяра подрезают стамеской шиповое соединение",
    color: "#9d8370",
    focus: "45% 50%",
    focusSm: "45% 50%",
  },
  sklad: {
    src: "/photos/sklad",
    alt: "Штабели сухой строганой доски с прокладками между рядами",
    color: "#b29070",
    focus: "50% 50%",
    focusSm: "50% 50%",
  },
  ruletka: {
    src: "/photos/ruletka",
    alt: "Рулетка и завитки стружки на тёмном верстаке",
    color: "#907964",
    focus: "45% 50%",
    focusSm: "40% 50%",
  },
  master: {
    src: "/photos/master",
    alt: "Столяр в очках работает стамеской и киянкой",
    color: "#b29e88",
    focus: "50% 30%",
    focusSm: "50% 30%",
  },
} satisfies Record<string, Photo>;

export type PhotoName = keyof typeof photos;

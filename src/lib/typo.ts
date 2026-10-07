const shortWord = /(^|[\s«(])([а-яё]{1,2}|для|без|под|над|при|про|или)\s+/giu;

/** Binds short Russian words to the next one and keeps dashes off the start of a line. */
export function ru(text: string) {
  let out = text;
  let previous;
  do {
    previous = out;
    out = out.replace(shortWord, "$1$2\u00a0");
  } while (out !== previous);
  return out.replace(/\s+—/g, "\u00a0—").replace(/(\d)\s+(?=(?:см|мм|₽|%))/gu, "$1\u00a0");
}

const rubles = new Intl.NumberFormat("ru-RU");

export function price(value: number) {
  return `${rubles.format(value)}\u00a0₽`;
}

export function dims(values: readonly number[]) {
  return `${values.join("\u00a0×\u00a0")}\u00a0см`;
}

/** Joins with a middle dot that never starts a line. */
export function dotted(...parts: string[]) {
  return parts.join("\u00a0· ");
}

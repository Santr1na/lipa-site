"use client";

import type { ImageLoaderProps } from "next/image";

// Must match the files in public/photos: <name>-<width>.jpg
const widths = [320, 640, 1080, 1600];

export default function photoLoader({ src, width }: ImageLoaderProps) {
  const size = widths.find((candidate) => candidate >= width) ?? widths[widths.length - 1];
  return `${src}-${size}.jpg`;
}

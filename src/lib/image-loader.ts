"use client";

import type { ImageLoaderProps } from "next/image";

// Must match the files in public/photos: <name>-<width>.jpg
const widths = [320, 640, 1080, 1600];

// Custom loaders return the final URL. Next does not add basePath for us.
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export default function photoLoader({ src, width }: ImageLoaderProps) {
  const size = widths.find((candidate) => candidate >= width) ?? widths[widths.length - 1];
  const file = `${src}-${size}.jpg`;
  if (!base || base === "/") return file;
  return `${base}${file.startsWith("/") ? file : `/${file}`}`;
}

import Image from "next/image";
import type { CSSProperties } from "react";
import { photos, type PhotoName } from "@/lib/photos";

type FrameProps = {
  photo: PhotoName;
  sizes: string;
  className?: string;
  reveal?: "load" | "scroll" | "none";
  eager?: boolean;
};

export function Frame({ photo, sizes, className = "", reveal = "scroll", eager = false }: FrameProps) {
  const { src, alt, color, focus, focusSm } = photos[photo];
  const style = { backgroundColor: color, "--focus": focus, "--focus-sm": focusSm } as CSSProperties;

  return (
    <div className={`frame ${className}`} style={style} data-reveal={reveal}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="frame-img"
      />
    </div>
  );
}

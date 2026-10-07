import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  crop: string;
  sizes: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
};

export function Frame({
  src,
  alt,
  crop,
  sizes,
  ratio = "aspect-[4/5] md:aspect-[3/2]",
  priority = false,
  className = "",
}: FrameProps) {
  return (
    <div className={`relative overflow-hidden bg-paper-deep ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`reveal object-cover ${crop}`}
      />
    </div>
  );
}

export function Thumb({ src, crop }: { src: string; crop: string }) {
  return (
    <span aria-hidden="true" className="relative block h-16 w-[4.75rem] shrink-0 overflow-hidden bg-paper-deep sm:h-[4.5rem] sm:w-24">
      <Image src={src} alt="" fill sizes="96px" className={`object-cover ${crop}`} />
    </span>
  );
}

import { ru } from "@/lib/typo";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <p className="kicker">{kicker}</p>
      <h1 className="h1 mt-4">{ru(title)}</h1>
      {children ? <div className="lead mt-5 max-w-2xl text-ink-soft">{children}</div> : null}
    </header>
  );
}

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
      <p className="text-sm font-medium text-pine">{kicker}</p>
      <h1 className="mt-2 font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-pretty md:text-[2.75rem]">
        {title}
      </h1>
      {children ? <div className="mt-4 max-w-2xl text-ink-soft">{children}</div> : null}
    </header>
  );
}

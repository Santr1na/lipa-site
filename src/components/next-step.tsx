import { ArrowLink, ButtonLink } from "@/components/links";
import { ru } from "@/lib/typo";

type Action = { href: string; label: string };

export function NextStep({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <section className="shell mt-20 md:mt-28" aria-labelledby="next-step-heading">
      <div className="grid gap-6 border-t-2 border-pine pt-7 md:grid-cols-12 md:gap-10">
        <h2 id="next-step-heading" className="h2 md:col-span-6">
          {ru(title)}
        </h2>
        <div className="md:col-span-6">
          <p className="lead text-ink-soft">{ru(text)}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
            <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            {secondary ? <ArrowLink href={secondary.href}>{secondary.label}</ArrowLink> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

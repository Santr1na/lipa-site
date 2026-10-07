import Link from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function Anchor({ href, className, children }: LinkProps) {
  if (href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function ButtonLink({ href, children, className = "" }: LinkProps) {
  return (
    <Anchor href={href} className={`button ${className}`}>
      {children}
    </Anchor>
  );
}

export function ArrowLink({ href, children, className = "" }: LinkProps) {
  return (
    <Anchor href={href} className={`arrow-link group ${className}`}>
      <span className="link">{children}</span>
      <span aria-hidden="true" className="arrow">
        →
      </span>
    </Anchor>
  );
}

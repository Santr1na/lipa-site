export type SpecRow = {
  label: string;
  value: React.ReactNode;
  strong?: boolean;
};

export function Spec({ rows, className = "" }: { rows: SpecRow[]; className?: string }) {
  return (
    <dl className={`spec ${className}`}>
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd className={row.strong ? "font-display text-lg tabular-nums" : "tabular-nums"}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LogoStrip({
  items,
  label = 'We work across every modern stack',
}: {
  items: string[];
  label?: string;
}) {
  if (!items.length) return null;

  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-page flex flex-col items-center gap-5 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <li key={item} className="text-sm font-medium text-foreground/70">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

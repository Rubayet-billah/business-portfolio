import Link from 'next/link';

interface Pill {
  label: string;
  href: string;
}

export function PillLinks({
  links,
  title = 'Relevant services you might need',
}: {
  links: Pill[];
  title?: string;
}) {
  if (!links.length) return null;

  return (
    <section className="section-pad">
      <div className="container-page flex flex-col items-center gap-5 text-center">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

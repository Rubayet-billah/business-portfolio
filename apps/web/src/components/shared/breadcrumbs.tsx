import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  href?: string;
}

export function Breadcrumbs({ items, onNavy = false }: { items: Crumb[]; onNavy?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={
          onNavy
            ? 'flex flex-wrap items-center gap-1.5 text-sm text-brand-navy-foreground/70'
            : 'flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground'
        }
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? 'font-medium' : ''}>
                  {item.name}
                </span>
              )}
              {!last ? <ChevronRight className="size-3.5 opacity-60" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

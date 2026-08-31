import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioItem } from '@agency/types';
import { Badge } from '@agency/ui';

export function ProjectCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.thumbnail.url}
          alt={item.thumbnail.alt || item.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="capitalize">
            {item.discipline.replace('-', '/')}
          </Badge>
          {item.industry ? (
            <span className="text-xs text-muted-foreground">{item.industry}</span>
          ) : null}
        </div>
        <h3 className="text-base font-semibold tracking-tight">
          {item.externalUrl ? (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0"
            >
              {item.title}
            </a>
          ) : (
            <Link href={`/portfolio#${item.slug}`} className="after:absolute after:inset-0">
              {item.title}
            </Link>
          )}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>
      </div>
    </article>
  );
}

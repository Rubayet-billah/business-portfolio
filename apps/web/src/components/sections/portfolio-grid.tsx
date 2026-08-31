import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { PortfolioItem } from '@agency/types';
import { Button } from '@agency/ui';
import { ProjectCard, SectionHeading } from '@/components/shared';

export function PortfolioGrid({
  items,
  eyebrow = 'Our work',
  title = 'A track record of design and marketing excellence',
  description,
  showViewAll = false,
}: {
  items: PortfolioItem[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  showViewAll?: boolean;
}) {
  if (!items.length) return null;

  return (
    <section className="section-pad">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
        {showViewAll ? (
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link href="/portfolio">
                View full portfolio
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

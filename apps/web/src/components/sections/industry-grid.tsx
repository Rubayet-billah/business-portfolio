import type { Industry } from '@agency/types';
import { IndustryCard, SectionHeading } from '@/components/shared';

export function IndustryGrid({
  industries,
  eyebrow = 'Industries',
  title = 'Sectors we serve',
  description,
}: {
  industries: Industry[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  if (!industries.length) return null;

  return (
    <section className="section-pad bg-secondary/30">
      <div className="container-page flex flex-col gap-10">
        {title ? (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        ) : null}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

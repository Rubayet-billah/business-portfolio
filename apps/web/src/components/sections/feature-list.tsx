import { cn } from '@agency/ui';
import { Icon, SectionHeading } from '@/components/shared';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export function FeatureList({
  features,
  eyebrow,
  title,
  description,
}: {
  features: Feature[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  if (!features.length) return null;

  return (
    <section className="section-pad bg-secondary/30">
      <div className="container-page flex flex-col gap-10">
        {title ? (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        ) : null}
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={cn('flex gap-4', i % 2 === 1 && 'sm:mt-8')}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon name={feature.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

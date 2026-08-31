import { SectionHeading } from '@/components/shared';

interface Step {
  step: number;
  title: string;
  description: string;
}

export function ProcessSteps({
  steps,
  eyebrow = 'How we work',
  title = 'Your quick path to digital growth',
  description,
}: {
  steps: Step[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  if (!steps.length) return null;

  return (
    <section className="section-pad">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s) => (
            <li key={s.step} className="flex flex-col gap-2">
              <span className="grid size-10 place-items-center rounded-full border-2 border-primary/30 text-sm font-semibold text-primary">
                {String(s.step).padStart(2, '0')}
              </span>
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

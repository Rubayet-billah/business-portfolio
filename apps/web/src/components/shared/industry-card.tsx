import type { Industry } from '@agency/types';
import { Icon } from './icon';

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon name={industry.icon} className="size-5" />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold">{industry.name}</h3>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{industry.blurb}</p>
      </div>
    </div>
  );
}

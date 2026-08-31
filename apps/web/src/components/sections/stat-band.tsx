import { cn } from '@agency/ui';

interface Stat {
  label: string;
  value: string;
}

export function StatBand({
  stats,
  className,
  variant = 'card',
}: {
  stats: Stat[];
  className?: string;
  variant?: 'card' | 'bare';
}) {
  if (!stats.length) return null;

  return (
    <dl
      className={cn(
        'grid gap-px overflow-hidden rounded-xl border border-border bg-border',
        stats.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3',
        variant === 'bare' && 'border-0 bg-transparent gap-6',
        className
      )}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className={cn(
            'flex flex-col items-center gap-1 p-6 text-center',
            variant === 'card' && 'bg-card'
          )}
        >
          <dd className="text-3xl font-semibold tracking-tight text-primary">{s.value}</dd>
          <dt className="text-sm text-muted-foreground">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

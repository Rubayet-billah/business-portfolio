import { cn } from '@agency/ui';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h2' | 'h1' | 'h3';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <Tag className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</Tag>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

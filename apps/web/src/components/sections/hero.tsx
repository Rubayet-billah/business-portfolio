import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button, cn } from '@agency/ui';
import { Breadcrumbs, type Crumb } from '@/components/shared';

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  breadcrumbs?: Crumb[];
  variant?: 'navy' | 'plain';
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  breadcrumbs,
  variant = 'plain',
  align = 'center',
  children,
}: HeroProps) {
  const navy = variant === 'navy';

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        navy ? 'bg-brand-navy text-brand-navy-foreground' : 'bg-secondary/30'
      )}
    >
      <div
        className={cn(
          'container-page flex flex-col gap-6 py-16 md:py-24',
          align === 'center' ? 'items-center text-center' : 'items-start'
        )}
      >
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} onNavy={navy} /> : null}
        {eyebrow ? (
          <span
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.16em]',
              navy ? 'text-brand-navy-foreground/70' : 'text-primary'
            )}
          >
            {eyebrow}
          </span>
        ) : null}
        <h1
          className={cn(
            'text-balance text-4xl font-semibold tracking-tight sm:text-5xl',
            align === 'center' && 'max-w-3xl'
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              'text-pretty text-base leading-relaxed sm:text-lg',
              navy ? 'text-brand-navy-foreground/80' : 'text-muted-foreground',
              align === 'center' && 'max-w-2xl'
            )}
          >
            {description}
          </p>
        ) : null}
        {primaryCta || secondaryCta ? (
          <div className="flex flex-wrap items-center gap-3">
            {primaryCta ? (
              <Button asChild size="lg" variant={navy ? 'onNavy' : 'default'}>
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button asChild size="lg" variant={navy ? 'onNavy' : 'outline'}>
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

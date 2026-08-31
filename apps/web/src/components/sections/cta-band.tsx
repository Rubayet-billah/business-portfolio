import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@agency/ui';

export function CtaBand({
  title = 'Need a professional partner for growth?',
  description = 'Share your requirements and get a free proposal — or just call us to talk it through.',
  primary = { label: 'Get a Proposal', href: '/contact-us' },
  secondary,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-brand-navy text-brand-navy-foreground">
      <div className="container-page flex flex-col items-center gap-5 py-16 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-brand-navy-foreground/80">{description}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="onNavy">
            <Link href={primary.href}>
              {primary.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          {secondary ? (
            <Button asChild size="lg" variant="onNavy">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

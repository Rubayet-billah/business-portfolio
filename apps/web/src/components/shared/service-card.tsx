import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@agency/types';
import { Card } from '@agency/ui';
import { Icon } from './icon';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group relative flex h-full flex-col gap-4 p-6 transition-colors hover:border-primary/40">
      <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon name={service.icon} className="size-5" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold tracking-tight">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
            {service.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Card>
  );
}

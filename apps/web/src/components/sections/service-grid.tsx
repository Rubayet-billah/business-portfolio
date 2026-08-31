import type { Service } from '@agency/types';
import { SectionHeading, ServiceCard } from '@/components/shared';

interface ServiceGridProps {
  services: Service[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function ServiceGrid({
  services,
  eyebrow = 'What we do',
  title = 'Everything a growing brand needs, under one roof',
  description,
}: ServiceGridProps) {
  return (
    <section className="section-pad">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

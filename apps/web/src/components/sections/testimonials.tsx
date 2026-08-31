import type { Testimonial } from '@agency/types';
import { SectionHeading, TestimonialCard } from '@/components/shared';

export function Testimonials({
  testimonials,
  eyebrow = 'Client stories',
  title = 'What clients say about working with Agency',
  description,
}: {
  testimonials: Testimonial[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  if (!testimonials.length) return null;

  return (
    <section className="section-pad bg-secondary/30">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import type { Testimonial } from '@agency/types';
import { Card } from '@agency/ui';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <Quote className="size-6 text-primary/40" aria-hidden />
        <div className="flex" aria-label={`${testimonial.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={
                i < Math.round(testimonial.rating)
                  ? 'size-4 fill-warning text-warning'
                  : 'size-4 text-muted-foreground/30'
              }
              aria-hidden
            />
          ))}
        </div>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.authorName}
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
          />
        ) : null}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{testimonial.authorName}</p>
          <p className="truncate text-xs text-muted-foreground">
            {[testimonial.authorRole, testimonial.company].filter(Boolean).join(', ')}
          </p>
        </div>
        {testimonial.platform ? (
          <span className="ml-auto text-xs text-muted-foreground">via {testimonial.platform}</span>
        ) : null}
      </div>
    </Card>
  );
}

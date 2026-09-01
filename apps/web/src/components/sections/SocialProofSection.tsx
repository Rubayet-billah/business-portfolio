import { Card, CardContent } from '@agency/ui';
import { Star } from 'lucide-react';

export function SocialProofSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow',
      content: 'Marketorr completely transformed our online presence. Our inbound leads increased by 150% in just three months. Their data-driven approach is truly unmatched.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Marketing Director, Lumina',
      content: 'The team at Marketorr is exceptional. They took the time to understand our complex industry and delivered a tailored strategy that exceeded all our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, EcoStyle',
      content: 'Working with this agency has been a game-changer for our e-commerce business. Their SEO and PPC campaigns have driven consistent, high-quality traffic to our store.',
      rating: 5,
    },
  ];

  return (
    <section className="section-pad bg-muted/30">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Client Success</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        {/* Client Logos Strip */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
          {/* Placeholder for Logos */}
          <div className="h-8 w-32 bg-foreground/20 rounded"></div>
          <div className="h-8 w-24 bg-foreground/20 rounded"></div>
          <div className="h-8 w-36 bg-foreground/20 rounded"></div>
          <div className="h-8 w-28 bg-foreground/20 rounded"></div>
          <div className="h-8 w-32 bg-foreground/20 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-8 relative z-10">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
